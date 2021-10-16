import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'
import { tap } from 'rxjs/operators'
import { ClinicModel } from '../models/clinic.model'

@Injectable({
	providedIn: 'root'
})
export class ClinicService {

	private readonly clinicUrl = '/api/clinic'

	onClinicChanged: Subject<ClinicModel | null> = new Subject()

	constructor(private http: HttpClient) { }

	getClinics() {
		return this.http.get<ClinicModel[]>(this.clinicUrl)
	}

	getClinic(clinicId: string) {
		return this.http.get<ClinicModel | null>(`${this.clinicUrl}/${clinicId}`).pipe(tap((clinic) => { this.onClinicChanged.next(clinic) }))
	}

	clearCurrentClinic() {
		this.onClinicChanged.next(null)
	}
}
