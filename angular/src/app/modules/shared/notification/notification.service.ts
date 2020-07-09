import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'

@Injectable({ providedIn: 'root' })
export class NotificationService {

	onSnackbarRequest = new Subject<{ type: 'success' | 'error', msg: string }>()

	showError (msg: string) {
		this.onSnackbarRequest.next({ type: 'error', msg })
	}

	showSuccess (msg: string) {
		this.onSnackbarRequest.next({ type: 'success', msg })
	}
}