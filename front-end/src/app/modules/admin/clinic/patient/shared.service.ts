import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'
import { Patient } from 'src/app/models/patient.model'

@Injectable()
export class SharedService {

	onModeChange = new Subject<Patient | null>()
	constructor() { }

	editPatient(patient: Patient | null) {
		this.onModeChange.next(patient)
	}
}
