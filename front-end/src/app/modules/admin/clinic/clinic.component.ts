import { Component, OnDestroy } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { ClinicModel } from 'src/app/models/clinic.model'
import { ClinicService } from 'src/app/services/clinic.service'

@Component({
	selector: 'app-clinic',
	templateUrl: './clinic.component.html',
	styleUrls: ['./clinic.component.scss']
})
export class ClinicComponent implements OnDestroy {
	clinic: ClinicModel | null = null

	constructor(private route: ActivatedRoute, private clinicService: ClinicService) {
		const clinicId = this.route.snapshot.paramMap.get('clinicId')

		if (clinicId) {
			this.clinicService.getClinic(clinicId).subscribe((clinic) => this.clinic = clinic)
		}
	}

	ngOnDestroy() {
		this.clinicService.clearCurrentClinic()
	}
}
