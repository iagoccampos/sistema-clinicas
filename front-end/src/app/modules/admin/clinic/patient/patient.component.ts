import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { PatientService } from 'src/app/services/patient.service'

@Component({
	selector: 'app-patient',
	templateUrl: './patient.component.html',
	styleUrls: ['./patient.component.scss']
})
export class PatientComponent {
	private readonly clinicId
	constructor(private patientService: PatientService, private router: ActivatedRoute) {
		this.clinicId = this.router.snapshot.paramMap.get('clinicId') as string
	}

	addPatient() {
		this.patientService.openPatientDialog({ clinicId: this.clinicId })
	}
}
