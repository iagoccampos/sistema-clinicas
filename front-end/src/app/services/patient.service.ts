import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { tap } from 'rxjs/operators'
import { NewPatient, Patient } from '../models/patient.model'
import { SnackbarService } from './snackbar.service'

@Injectable({
	providedIn: 'root'
})
export class PatientService {

	constructor(private http: HttpClient, private snackbarService: SnackbarService) { }

	getPatients(clinicId: string, filter: any, page?: number, limit?: number) {
		const params = { ...filter, page, limit }
		return this.http.get<{ total: number, items: Patient[] }>(this.generateUrl(clinicId), { params })
	}

	createPatient(patient: NewPatient, clinicId: string) {
		return this.http.post<Patient>(this.generateUrl(clinicId), patient).pipe(tap(() => {
			this.snackbarService.success('Paciente adicionado com sucesso.')
		}))
	}

	editPatient(patient: Patient, clinicId: string, patientId: string) {
		return this.http.put<Patient>(this.generateUrl(clinicId, patientId), patient).pipe(tap(() => {
			this.snackbarService.success('Paciente editado com sucesso.')
		}))
	}

	private generateUrl(clinicId: string, patientId?: string) {
		return `/api/clinic/${clinicId}/patient${patientId ? `/${patientId}` : ''}`
	}
}
