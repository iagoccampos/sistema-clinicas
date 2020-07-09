import { Component, OnInit, OnDestroy, ElementRef, ViewChildren, QueryList, AfterViewInit } from '@angular/core'
import { FormGroup, FormControl } from '@angular/forms'
import { ClientService } from '../client.service'
import { Client } from 'src/app/models/client.model'
import { debounceTime, finalize } from 'rxjs/operators'
import { Subscription } from 'rxjs'
import { NotificationService } from 'src/app/modules/shared/notification/notification.service'

@Component({
	selector: 'app-find-client',
	templateUrl: './find-client.component.html',
	styleUrls: ['./find-client.component.css']
})
export class FindClientComponent implements OnInit, OnDestroy, AfterViewInit {

	clients: Client[] = []

	private updateClientsListSub: Subscription = null
	private updateListViewSub: Subscription = null

	@ViewChildren('clientsList') clientsList: QueryList<any> // Referencia da lista pra saber quando ela é atualizar

	findClientForm = new FormGroup({
		name: new FormControl(''),
		card: new FormControl(''),
		birthday: new FormControl('')
	})

	constructor (private clientService: ClientService, private notificationService: NotificationService, private elRef: ElementRef) { }

	ngOnInit () {
		this.findClientForm.valueChanges.pipe( // Submit do form automaticamente quando ele é atualizado
			debounceTime(500)
		).subscribe((val) => {
			this.submit()
		})

		this.updateClientsListSub = this.clientService.onClientListUpdated.subscribe(() => {
			if (this.clients.length) {
				this.submit() // Reenvia o formulario pois um cliente que esta na lista foi alterado, pra atualizar a lista
			}
		})
	}

	ngAfterViewInit () {
		this.updateListViewSub = this.clientsList.changes.subscribe(() => { // Chamado quando a view do ngFor é atualizada
			(this.elRef.nativeElement as HTMLElement).scrollIntoView({ behavior: 'smooth' }) // Scroll pro componente quando a lista atualizar
		})
	}

	ngOnDestroy () {
		this.updateClientsListSub.unsubscribe()
		this.updateListViewSub.unsubscribe()
	}

	submit () {
		this.findClientForm.disable({ emitEvent: false })
		this.clientService.findClients(this.findClientForm.value).pipe(
			finalize(() => {
				this.findClientForm.enable({ emitEvent: false })
			})
		).subscribe((result) => {
			this.clients = result

			if (!result.length) {
				this.notificationService.showError('Nenhum cliente encontrado.')
			}
		})
	}

	deleteClient (client: Client) {
		this.clientService.deleteClient(client)
	}
}
