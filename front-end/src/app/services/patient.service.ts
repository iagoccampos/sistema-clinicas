import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { NewPatient, Patient } from '../models/patient.model'
import { SnackbarService } from './snackbar.service'

@Injectable({
	providedIn: 'root'
})
export class PatientService {

	constructor(private http: HttpClient, private snackbarService: SnackbarService) { }

	getPatients(clinicId: string, filter: any, page?: number, limit?: number) {
		const url = `/api/clinic/${clinicId}/clinical/patient`
		const params = { ...filter, page, limit }
		return this.http.get<{ total: number, items: Patient[] }>(url, { params })
	}

	createPatient(patient: NewPatient, clinicId: string) {
		const url = `/api/clinic/${clinicId}/clinical/patient`
		return this.http.post<Patient>(url, patient).subscribe((patient) => {
			this.snackbarService.success('Paciente adicionado com sucesso.')
		})
	}
}
