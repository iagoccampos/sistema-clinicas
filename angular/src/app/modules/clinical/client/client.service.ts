import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { NewClient, Client } from 'src/app/models/client.model'
import { ClinicService } from '../../clinics/clinic.service'
import { ModalService } from '../../shared/modal/modal.service'
import { Subject } from 'rxjs'
import { tap, finalize, map } from 'rxjs/operators'
import { NotificationService } from '../../shared/notification/notification.service'

@Injectable()
export class ClientService {

	onClientListUpdated: Subject<null> = new Subject()

	constructor (private http: HttpClient, private clinicService: ClinicService,
		private modalService: ModalService, private notificationService: NotificationService) { }

	addClient (client: NewClient) {
		const clinicId = this.clinicService.getCurrentClinic()._id
		return this.http.post(`/api/clinic/${clinicId}/clinical/client`, client).pipe(
			tap(() => { this.notificationService.showSuccess('Cliente adicionado.') })
		)
	}

	updateClient (client: NewClient, clientId: string) {
		const clinicId = this.clinicService.getCurrentClinic()._id
		return this.http.put(`/api/clinic/${clinicId}/clinical/client/${clientId}`, client).pipe(tap(() => {
			this.notificationService.showSuccess('Cliente atualizado.')
			this.onClientListUpdated.next()
		}))
	}

	findClients (query: { name: string, card: string, date: string }) {
		const clinicId = this.clinicService.getCurrentClinic()._id
		return this.http.get<Client[]>(`/api/clinic/${clinicId}/clinical/client`, { params: query })
	}

	getClient (clientId: string) {
		const clinicId = this.clinicService.getCurrentClinic()._id
		return this.http.get<Client>(`/api/clinic/${clinicId}/clinical/client/${clientId}`)
	}

	checkCardExists (card: string) {
		const clinicId = this.clinicService.getCurrentClinic()._id
		return this.http.get<boolean>(`/api/clinic/${clinicId}/clinical/client/cardexists`, { params: { card } })
	}

	getBiggestCard () {
		const clinicId = this.clinicService.getCurrentClinic()._id
		return this.http.get<number>(`/api/clinic/${clinicId}/clinical/client/biggestcard`)
	}

	deleteClient (client: Client) {
		this.modalService.deleteClient(client, (confirmation) => {
			if (confirmation) {
				const clinicId = this.clinicService.getCurrentClinic()._id
				this.http.delete(`/api/clinic/${clinicId}/clinical/client/${client._id}`).pipe(
					tap(() => {
						this.notificationService.showSuccess('Cliente deletado.')
					})
				).subscribe(() => {
					this.onClientListUpdated.next()
				})
			}
		})
	}
}