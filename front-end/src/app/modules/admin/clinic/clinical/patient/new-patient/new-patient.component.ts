import { Component } from '@angular/core'
import { FormGroup, FormControl, Validators, FormArray, FormGroupDirective } from '@angular/forms'
import { ActivatedRoute } from '@angular/router'
import { PatientService } from 'src/app/services/patient.service'
import { resetForm } from 'src/util/util'
import { SharedService } from '../shared.service'

@Component({
	selector: 'app-new-patient',
	templateUrl: './new-patient.component.html',
	styleUrls: ['./new-patient.component.scss']
})
export class NewPatientComponent {

	private readonly clinicId

	private readonly initialValues

	patientId = ''

	patientForm = new FormGroup({
		name: new FormControl('', [Validators.required, Validators.maxLength(40)]),
		birthday: new FormControl(''),
		rg: new FormControl(''),
		cpf: new FormControl(''),
		phones: new FormArray([new FormControl('')])
	})

	constructor(private patientService: PatientService, private router: ActivatedRoute, private sharedService: SharedService) {
		this.clinicId = this.router.snapshot.paramMap.get('clinicId') as string
		this.initialValues = this.patientForm.value

		sharedService.onModeChange.subscribe((patient) => {
			if (patient) {
				this.patientId = patient._id
				this.patientForm.patchValue(patient, { onlySelf: false })
			}
		})
	}

	get phonesControl() {
		return (this.patientForm.get('phones') as FormArray)
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

	submit() {
		if (this.patientId) {
			this.patientService.editPatient(this.patientForm.value, this.clinicId, this.patientId).subscribe(() => {
				this.clearForm()
			})
		} else {
			this.patientService.createPatient(this.patientForm.value, this.clinicId).subscribe(() => {
				this.clearForm()
			})
		}
	}

	clearForm() {
		this.patientId = ''
		this.sharedService.editPatient(null)
		resetForm(this.patientForm, this.initialValues)
	}
}
