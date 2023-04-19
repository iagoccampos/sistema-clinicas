import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { tap } from 'rxjs/operators'
import { INewPatient, IPatient } from '../models/patient.model'
import { SnackbarService } from './snackbar.service'
import { MatDialog } from '@angular/material/dialog'
import { DialogData, DialogReturn, PatientDialogComponent } from '../modules/admin/clinic/patient/patient-dialog/patient-dialog.component'

@Injectable({
	providedIn: 'root'
})
export class PatientService {

	constructor(private http: HttpClient, private snackbarService: SnackbarService, public dialog: MatDialog) { }

	getPatients(clinicId: string, filter: any, page?: number, limit?: number) {
		const params = { ...filter, page, limit }
		return this.http.get<{ total: number, items: IPatient[] }>(this.generateUrl(clinicId), { params })
	}

	createPatient(patient: INewPatient, clinicId: string) {
		return this.http.post<IPatient>(this.generateUrl(clinicId), patient).pipe(tap(() => {
			this.snackbarService.success('Paciente adicionado com sucesso.')
		}))
	}

	editPatient(patient: IPatient, clinicId: string, patientId: string) {
		return this.http.put<IPatient>(this.generateUrl(clinicId, patientId), patient).pipe(tap(() => {
			this.snackbarService.success('Paciente editado com sucesso.')
		}))
	}

	deletePatient(clinicId: string, patientId: string) {
		return this.http.delete(this.generateUrl(clinicId, patientId)).pipe(tap(() => {
			this.snackbarService.success('Paciente deletado com sucesso.')
		}))
	}

	openPatientDialog(data: DialogData) {
		this.dialog.open<PatientDialogComponent, DialogData, DialogReturn>(PatientDialogComponent, { data })
	}

	private generateUrl(clinicId: string, patientId?: string) {
		return `/api/clinic/${clinicId}/patient${patientId ? `/${patientId}` : ''}`
	}
}
