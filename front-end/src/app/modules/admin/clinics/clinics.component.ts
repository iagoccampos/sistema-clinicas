import { Component, OnInit } from '@angular/core'
import { map } from 'rxjs/operators'
import { ClinicModel } from 'src/app/models/clinic.model'
import { ClinicService } from 'src/app/services/clinic.service'

@Component({
	selector: 'app-clinics',
	templateUrl: './clinics.component.html',
	styleUrls: ['./clinics.component.scss']
})
export class ClinicsComponent implements OnInit {

	clinics: ClinicModel[] = []

	constructor(private clinicService: ClinicService) { }

	ngOnInit(): void {
		this.clinicService.getClinics().subscribe((result) => {
			this.clinics = result
		})
	}
}
