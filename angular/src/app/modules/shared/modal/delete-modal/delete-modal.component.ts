import { Component, OnInit, HostListener } from '@angular/core'
import { ModalService } from '../modal.service'

@Component({
	selector: 'app-delete-modal',
	templateUrl: './delete-modal.component.html',
	styleUrls: ['./delete-modal.component.css']
})
export class DeleteModalComponent implements OnInit {

	isClosed = true
	title = ''
	body = ''
	cb = (val: boolean) => null

	constructor (private modalService: ModalService) { }

	ngOnInit (): void {
		this.modalService.onShowModal.subscribe((data) => {
			this.title = data.title
			this.body = data.body
			this.cb = data.cb

			this.open()
		})
	}

	private open () {
		this.isClosed = false
	}

	close (confirm: boolean = false) {
		this.cb(confirm)
		this.isClosed = true
		this.clear()
	}

	private clear () {
		this.title = ''
		this.body = ''
		this.cb = null
	}

	@HostListener('click', ['$event']) onClick (e: MouseEvent) {
		const elementId = (e.target as HTMLElement).id
		if (elementId === 'deleteModal') {
			this.close()
		}
	}
}
