import { Injectable } from '@angular/core'
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar'
import { MessageSnackbarComponent } from '../modules/shared/components/snackbars/message-snackbar/message-snackbar.component'

@Injectable({
	providedIn: 'root'
})
export class SnackbarService {

	private readonly config: MatSnackBarConfig = {
		horizontalPosition: 'right', verticalPosition: 'top'
	} as const

	constructor(private snackBar: MatSnackBar) { }

	success(msg: string) {
		this.snackBar.openFromComponent(MessageSnackbarComponent, { data: { msg }, ...this.config })
	}

	error(msg: string) {
		this.snackBar.openFromComponent(MessageSnackbarComponent, { data: { msg }, ...this.config })
	}
}
