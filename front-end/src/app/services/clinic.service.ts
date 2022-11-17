import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'
import { tap } from 'rxjs/operators'
import { ClinicModel, ClinicQuery } from '../models/clinic.model'
import { SnackbarService } from './snackbar.service'

@Injectable({
	providedIn: 'root'
})
export class ClinicService {
	private readonly clinicUrl = '/api/clinic'

	onClinicChanged: Subject<ClinicModel | null> = new Subject()

	constructor(private http: HttpClient, private snackbarService: SnackbarService) { }

	getClinics(query?: ClinicQuery) {
		return this.http.get<ClinicModel[]>(this.clinicUrl, { params: query })
	}

	getClinic(clinicId: string) {
		return this.http.get<ClinicModel | null>(`${this.clinicUrl}/${clinicId}`)
	}

	selectClinic(clinicId: string) {
		return this.http.get<ClinicModel | null>(`${this.clinicUrl}/${clinicId}`).pipe(tap((clinic) => { this.onClinicChanged.next(clinic) }))
	}

	addClinic(newClinic: ClinicModel) {
		return this.http.post<ClinicModel>(this.clinicUrl, newClinic)
	}

	clearCurrentClinic() {
		this.onClinicChanged.next(null)
	}
}
