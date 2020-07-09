import { Component, OnInit } from '@angular/core'
import { ClinicModel } from 'src/app/models/clinic.model'
import { ActivatedRoute, Data } from '@angular/router'
import { ClinicService } from '../clinic.service'

@Component({
	selector: 'app-clinic',
	templateUrl: './clinic.component.html',
	styleUrls: ['./clinic.component.css']
})
export class ClinicComponent implements OnInit {

	clinic: ClinicModel = null

	constructor (private route: ActivatedRoute, private clinicService: ClinicService) { }

	ngOnInit (): void {
		this.route.data.subscribe((data: Data) => {
			this.clinic = data.clinic
			this.clinicService.updateCurrentClinic(this.clinic)
		})
	}
}
