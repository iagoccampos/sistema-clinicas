import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'
import { Client } from 'src/app/models/client.model'

@Injectable({ providedIn: 'root' })
export class ModalService {

	onShowModal: Subject<{ title: string, body: string, cb: any }> = new Subject()

	constructor () { }

	deleteClient (client: Client, cb: (confirmation: boolean) => void) {
		const title = `Deletar cliente`
		const body = `Tem certeza que deseja deletar o cliente "${client.name}"? Os dados referentes a esse cliente, tais como pagamentos e entre outros, serão mantidos.`

		this.showDeleteConfirmation(title, body, cb)
	}

	private showDeleteConfirmation (title: string, body: string, cb: (confirmation: boolean) => void) {
		this.onShowModal.next({ title, body, cb })
	}
}