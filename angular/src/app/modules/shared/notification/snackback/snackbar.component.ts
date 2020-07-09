import { Component, OnInit } from '@angular/core'

import { NotificationService } from '../notification.service'
import { tap, delay, switchMap } from 'rxjs/operators'
import { timer } from 'rxjs'

@Component({
	selector: 'app-snackbar',
	templateUrl: './snackbar.component.html',
	styleUrls: ['./snackbar.component.css'],
})
export class SnackbarComponent implements OnInit {

	message = ''
	type: 'success' | 'error' = 'success'
	visible = false

	constructor (private notificationService: NotificationService) { }

	ngOnInit () {
		this.notificationService.onSnackbarRequest.pipe(
			tap((info) => {
				this.visible = true
				this.message = info.msg
				this.type = info.type
			}),
			switchMap(() => timer(3000))
		).subscribe(() => {
			this.visible = false
		})
	}

	toggleSnack () {
		this.visible = !this.visible
	}
}
