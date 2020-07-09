import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core'
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms'
import { ClientService } from '../client.service'
import { map, debounceTime, distinctUntilChanged, switchMap, first, skip, filter, finalize } from 'rxjs/operators'
import { ActivatedRoute, Router } from '@angular/router'
import { Subscription, Observable } from 'rxjs'
import { Client } from 'src/app/models/client.model'
import { dateToDateInput } from 'src/util'
import { CanComponenteDeactivate } from 'src/app/modules/shared/can-deactivate.guard'

@Component({
	selector: 'app-edit-client',
	templateUrl: './edit-client.component.html',
	styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit, OnDestroy, CanComponenteDeactivate {

	editClientForm: FormGroup = null

	private client: Client = null
	private routeSubs: Subscription = null
	private formSubmited = false

	get name () {
		return this.editClientForm.get('name')
	}

	get card () {
		return this.editClientForm.get('card')
	}

	constructor (private clientService: ClientService, private elRef: ElementRef, private route: ActivatedRoute,
		private router: Router) { }

	ngOnInit () {
		this.editClientForm = new FormGroup({
			name: new FormControl('', Validators.required),
			card: new FormControl('', null, this.validateCard.bind(this)),
			rg: new FormControl(''),
			cpf: new FormControl(''),
			birthday: new FormControl('')
		})

		this.routeSubs = this.route.params.subscribe((params) => { // Quando a rota atualizar com outro cliente
			(this.elRef.nativeElement as HTMLElement).scrollIntoView({ behavior: 'smooth' })

			this.editClientForm.reset()
			this.editClientForm.disable()

			this.clientService.getClient(params.clientId).subscribe((client) => {
				this.editClientForm.enable()
				this.client = client
				this.editClientForm.setValue({
					name: client.name,
					card: client.card,
					rg: client.rg,
					cpf: client.cpf,
					birthday: dateToDateInput(client.birthday)
				}, { emitEvent: false })
			})
		})
	}

	canDeactivate (): boolean | Observable<boolean> | Promise<boolean> {
		if (this.editClientForm.dirty && !this.formSubmited) {
			return confirm('As edições no cliente não foram salvas, deseja continuar?')
		}

		return true
	}

	ngOnDestroy () {
		this.routeSubs.unsubscribe()
	}

	private validateCard (control: AbstractControl) {
		if (!control.valueChanges || control.value === this.client?.card || !control.value) {
			return new Promise((resolve) => resolve(null))
		}

		return control.valueChanges.pipe(
			debounceTime(500),
			distinctUntilChanged(),
			switchMap(() => {
				return this.clientService.checkCardExists(control.value)
			}),
			map((res) => { return res ? { cardExists: true } : null }),
			first()
		)
	}

	submit () {
		if (this.editClientForm.invalid) {
			this.editClientForm.markAllAsTouched()
			return
		}

		this.editClientForm.disable({ emitEvent: false })

		this.clientService.updateClient(this.editClientForm.value, this.client._id).pipe(
			finalize(() => {
				this.editClientForm.enable({ emitEvent: false })
			})
		).subscribe(() => {
			this.formSubmited = true
			this.router.navigate(['../../'], { relativeTo: this.route })
		})
	}
}