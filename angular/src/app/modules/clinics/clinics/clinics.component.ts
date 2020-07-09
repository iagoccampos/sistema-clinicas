import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Data, Router } from '@angular/router'
import { ClinicModel } from '../../../models/clinic.model'

@Component({
	selector: 'app-clinics',
	templateUrl: './clinics.component.html',
	styleUrls: ['./clinics.component.css']
})
export class ClinicsComponent implements OnInit {

	clinics: ClinicModel[]
	constructor (private route: ActivatedRoute) { }

	ngOnInit (): void {
		this.route.data.subscribe((data: Data) => {
			this.clinics = data.clinics
		})
	}
}
