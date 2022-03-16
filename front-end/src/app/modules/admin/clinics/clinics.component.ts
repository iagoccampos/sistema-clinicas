import { Component } from '@angular/core'
import { ClinicModel } from 'src/app/models/clinic.model'
import { ClinicService } from 'src/app/services/clinic.service'

@Component({
	selector: 'app-clinics',
	templateUrl: './clinics.component.html',
	styleUrls: ['./clinics.component.scss']
})
export class ClinicsComponent {

	clinics: ClinicModel[] = []

	constructor(private clinicService: ClinicService) {
		this.clinicService.getClinics().subscribe((result) => {
			this.clinics = result
		})
	}
}
