import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms'
import { ActivatedRoute } from '@angular/router'
import { PatientService } from 'src/app/services/patient.service'

@Component({
	selector: 'app-new-patient',
	templateUrl: './new-patient.component.html',
	styleUrls: ['./new-patient.component.scss']
})
export class NewPatientComponent implements OnInit {

	private clinicId = ''

	newPatientForm = new FormGroup({
		name: new FormControl('', [Validators.required, Validators.maxLength(40)]),
		birthday: new FormControl(''),
		rg: new FormControl(''),
		cpf: new FormControl(''),
		phones: new FormArray([new FormControl()])
	})

	constructor(private patientService: PatientService, private router: ActivatedRoute) { }

	ngOnInit() {
		this.clinicId = this.router.snapshot.paramMap.get('clinicId') as string
	}

	get phonesControl() {
		return (this.newPatientForm.get('phones') as FormArray)
	}

	addPhone() {
		if (this.phonesControl.length >= 5) {
			return
		}

		this.phonesControl.push(new FormControl())
	}

	removePhone(index: number) {
		this.phonesControl.removeAt(index)
	}

	addNewPatient() {
		this.patientService.createPatient(this.newPatientForm.value, this.clinicId).subscribe()
	}
}
