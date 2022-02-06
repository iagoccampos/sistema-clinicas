import { Component, Inject } from '@angular/core'
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar'

@Component({
	templateUrl: './message-snackbar.component.html',
	styleUrls: ['./message-snackbar.component.scss']
})
export class MessageSnackbarComponent {
	private timer = 0
	percent = 0

	constructor(@Inject(MAT_SNACK_BAR_DATA) public data: { msg: string },
		private snackbarRef: MatSnackBarRef<MessageSnackbarComponent>) {
		const maxTime = this.calculateTime(data.msg)

		setTimeout(() => {
			snackbarRef.dismiss()
		}, maxTime)

		const intervalId = setInterval(() => {
			this.timer += 100
			this.percent = (this.timer / maxTime) * 100
		}, 100)

		snackbarRef.afterDismissed().subscribe(() => {
			clearInterval(intervalId)
		})
	}

	private calculateTime(message: string) {
		const ms = message.split(/\s+/g).length * 0.5 * 1000
		return ms < 3000 ? 3000 : ms
	}
}
