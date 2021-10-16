import { Component, Input, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { ClinicModel } from 'src/app/models/clinic.model'
import { ClinicService } from 'src/app/services/clinic.service'

@Component({
	selector: 'app-clinic',
	templateUrl: './clinic.component.html',
	styleUrls: ['./clinic.component.scss']
})
export class ClinicComponent implements OnInit, OnDestroy {
	clinic: ClinicModel | null = null

	constructor(private route: ActivatedRoute, private clinicService: ClinicService) { }

	ngOnInit(): void {
		const clinicId = this.route.snapshot.paramMap.get('clinicId')

		if (clinicId) {
			this.clinicService.getClinic(clinicId).subscribe((clinic) => this.clinic = clinic)
		}
	}

	ngOnDestroy(): void {
		this.clinicService.clearCurrentClinic()
	}
}
