import { Component } from '@angular/core'
import { MatDialogRef } from '@angular/material/dialog'
import { PatientService } from 'src/app/services/patient.service'

@Component({
	selector: 'app-delete-confirmation',
	templateUrl: './delete-confirmation.component.html',
	styleUrls: ['./delete-confirmation.component.scss']
})
export class DeleteConfirmationComponent {

	constructor(private dialogRef: MatDialogRef<DeleteConfirmationComponent, boolean>, private patientService: PatientService) { }

	confirm() {
		this.dialogRef.close(true)
	}
}
