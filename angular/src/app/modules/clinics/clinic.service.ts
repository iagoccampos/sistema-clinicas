import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { ActivatedRoute, Router, ResolveStart } from '@angular/router'
import { ClinicModel } from 'src/app/models/clinic.model'

@Injectable({
	providedIn: 'root'
})
export class ClinicService {

	private selectedClinic: ClinicModel = null

	private readonly getClinicsUrl = '/api/clinic'
	private readonly getClinicUrl = '/api/clinic/'

	constructor (private http: HttpClient, private route: ActivatedRoute, private router: Router) { }

	getClinics () {
		return this.http.get<ClinicModel[]>(this.getClinicsUrl)
	}

	selectClinic (id: string) {
		return this.http.get<ClinicModel>(this.getClinicUrl + id)
	}

	updateCurrentClinic (clinic: ClinicModel) {
		this.selectedClinic = clinic
	}

	getCurrentClinic () {
		return this.selectedClinic
	}
}
