import { Component, ElementRef, ViewChild } from '@angular/core'
import { MatExpansionPanel } from '@angular/material/expansion'
import { SharedService } from './shared.service'

@Component({
	selector: 'app-patient',
	templateUrl: './patient.component.html',
	providers: [SharedService],
	styleUrls: ['./patient.component.scss']
})
export class PatientComponent {
	@ViewChild('patientPanel', { read: ElementRef }) expansionPanelRef!: ElementRef
	@ViewChild('patientPanel', { read: MatExpansionPanel }) expansionPanel!: MatExpansionPanel

	editingPatient = false

	constructor(private sharedService: SharedService) {
		sharedService.onModeChange.subscribe((patient) => {
			if (patient) {
				this.expansionPanel.open()
				this.expansionPanelRef.nativeElement.scrollIntoView({ behavior: 'smooth' })
			}

			this.editingPatient = !!patient
		})
	}
}
