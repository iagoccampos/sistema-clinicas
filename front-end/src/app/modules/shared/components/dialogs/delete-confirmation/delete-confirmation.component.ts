import { Component } from '@angular/core'
import { MatDialogRef } from '@angular/material/dialog'

@Component({
	selector: 'app-delete-confirmation',
	templateUrl: './delete-confirmation.component.html',
	styleUrls: ['./delete-confirmation.component.scss']
})
export class DeleteConfirmationComponent {

	constructor(private dialogRef: MatDialogRef<DeleteConfirmationComponent, boolean>) { }

	confirm() {
		this.dialogRef.close(true)
	}
}
