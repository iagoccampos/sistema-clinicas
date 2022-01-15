import { Injectable } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { DeleteConfirmationComponent } from '../modules/shared/dialogs/delete-confirmation/delete-confirmation.component'

@Injectable({
	providedIn: 'root'
})
export class DialogService {

	constructor(private dialog: MatDialog) { }

	openDeleteConfirmationDialog() {
		return this.dialog.open<DeleteConfirmationComponent, void, boolean>(DeleteConfirmationComponent)
	}
}
