import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms'
import { ClientService } from '../client.service'
import { map, debounceTime, distinctUntilChanged, switchMap, first, finalize, filter } from 'rxjs/operators'
import { CanComponenteDeactivate } from 'src/app/modules/shared/can-deactivate.guard'
import { Observable } from 'rxjs'

@Component({
	selector: 'app-add-client',
	templateUrl: './add-client.component.html',
	styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit, CanComponenteDeactivate {

	addClientForm: FormGroup = null

	get name () {
		return this.addClientForm.get('name')
	}

	get card () {
		return this.addClientForm.get('card')
	}

	constructor (private clientService: ClientService) { }

	ngOnInit () {
		this.addClientForm = new FormGroup({
			name: new FormControl('', Validators.required),
			card: new FormControl('', null, this.validateCard.bind(this)),
			rg: new FormControl(''),
			cpf: new FormControl(''),
			birthday: new FormControl('')
		})
	}

	canDeactivate (): boolean | Observable<boolean> | Promise<boolean> {
		if (this.addClientForm.dirty) {
			return confirm('As informações do novo cliente será descartada, deseja continuar?')
		}

		return true
	}

	private validateCard (control: AbstractControl) {
		if (!control.valueChanges || !control.value) {
			return new Promise((resolve) => resolve(null))
		}

		return control.valueChanges.pipe(
			debounceTime(500),
			distinctUntilChanged(),
			switchMap((val) => {
				return this.clientService.checkCardExists(val)
			}),
			map((res) => { return res ? { cardExists: true } : null }),
			first()
		)
	}

	submit () {
		if (this.addClientForm.invalid) {
			this.addClientForm.markAllAsTouched()
			return
		}

		this.addClientForm.disable({ emitEvent: false })

		this.clientService.addClient(this.addClientForm.value).pipe(
			finalize(() => {
				this.addClientForm.enable({ emitEvent: false })
			})
		).subscribe(() => {
			this.clearForm()
		})
	}

	clearForm () {
		this.addClientForm.reset('', { emitEvent: false })
	}
}