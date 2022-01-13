import { Component, ViewChild } from '@angular/core'
import { FormGroup, FormControl, Validators, FormArray, FormGroupDirective } from '@angular/forms'
import { ActivatedRoute } from '@angular/router'
import { PatientService } from 'src/app/services/patient.service'
import { resetForm } from 'src/util/util'

@Component({
	selector: 'app-new-patient',
	templateUrl: './new-patient.component.html',
	styleUrls: ['./new-patient.component.scss']
})
export class NewPatientComponent {

	private readonly clinicId: string

	private readonly defaultValues

	newPatientForm = new FormGroup({
		name: new FormControl('', [Validators.required, Validators.maxLength(40)]),
		birthday: new FormControl(''),
		rg: new FormControl(''),
		cpf: new FormControl(''),
		phones: new FormArray([new FormControl('')])
	})

	constructor(private patientService: PatientService, private router: ActivatedRoute) {
		this.clinicId = this.router.snapshot.paramMap.get('clinicId') as string
		this.defaultValues = this.newPatientForm.value
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
		this.patientService.createPatient(this.newPatientForm.value, this.clinicId).subscribe(() => {
			resetForm(this.newPatientForm, this.defaultValues)
		})
	}
}
