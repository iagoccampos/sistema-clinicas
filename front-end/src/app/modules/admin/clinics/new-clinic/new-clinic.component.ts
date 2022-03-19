import { Component, ViewChild } from '@angular/core'
import { AbstractControl, AsyncValidatorFn, FormControl, FormGroup, FormGroupDirective, ValidationErrors, Validators } from '@angular/forms'
import { ClinicService } from 'src/app/services/clinic.service'
import { SnackbarService } from 'src/app/services/snackbar.service'
import { resetForm } from 'src/util/util'
import { error } from 'src/util/snackbarMessages'
import { debounceTime, first, map, switchMap } from 'rxjs/operators'
import { Observable } from 'rxjs'

@Component({
	selector: 'app-new-clinic',
	templateUrl: './new-clinic.component.html',
	styleUrls: ['./new-clinic.component.scss']
})
export class NewClinicComponent {
	private submiting = false

	readonly clinicForm = new FormGroup({
		name: new FormControl('', [Validators.required, Validators.maxLength(50)], [this.clinicNameExistsValidator()])
	})

	get name() {
		return this.clinicForm.get('name')
	}

	@ViewChild(FormGroupDirective) private clinicFormDirective!: FormGroupDirective

	private readonly initialValues

	constructor(private clinicService: ClinicService, private snackbarService: SnackbarService) {
		this.initialValues = this.clinicForm.value
	}

	clinicNameExistsValidator(): AsyncValidatorFn {
		return (control: AbstractControl): Observable<ValidationErrors | null> => {
			return control.valueChanges.pipe(
				debounceTime(500),
				switchMap((val) => {
					return this.clinicService.getClinics({ name: val })
				}),
				map((clinics) => {
					return clinics.length !== 0 ? { clinicExists: 'Já existe uma clínica com esse nome.' } : null
				}),
				first()
			)
		}
	}

	submit() {
		console.log(this.clinicForm.get('name')?.getError('clinicExists'))
		if (this.clinicForm.invalid) {
			this.clinicForm.markAllAsTouched()
			this.snackbarService.error(error.defaultFormInvalid)
			return
		}

		if (this.submiting) {
			return
		}

		this.submiting = true

		this.clinicService.addClinic(this.clinicForm.value).subscribe((clinic) => {
			console.log('New clinic:', clinic)
			resetForm(this.clinicFormDirective, this.initialValues)
			this.submiting = false
		})
	}
}
