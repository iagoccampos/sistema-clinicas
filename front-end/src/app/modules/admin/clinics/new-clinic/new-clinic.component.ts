import { Component, ViewChild } from '@angular/core'
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms'
import { ClinicService } from 'src/app/services/clinic.service'
import { SnackbarService } from 'src/app/services/snackbar.service'
import { resetForm } from 'src/util/util'
import { error } from 'src/util/snackbarMessages'
import { delay } from 'rxjs/operators'

@Component({
	selector: 'app-new-clinic',
	templateUrl: './new-clinic.component.html',
	styleUrls: ['./new-clinic.component.scss']
})
export class NewClinicComponent {
	loading = false

	readonly clinicForm = new FormGroup({
		name: new FormControl('', [Validators.required, Validators.maxLength(50)])
	})

	get name() {
		return this.clinicForm.get('name')
	}

	@ViewChild(FormGroupDirective) private clinicFormDirective!: FormGroupDirective

	private readonly initialValues

	constructor(private clinicService: ClinicService, private snackbarService: SnackbarService) {
		this.initialValues = this.clinicForm.value
	}

	submit() {
		if (this.clinicForm.invalid) {
			this.clinicForm.markAllAsTouched()
			this.snackbarService.error(error.defaultFormInvalid)
			return
		}

		this.loading = true

		this.clinicService.addClinic(this.clinicForm.value).pipe(delay(3000)).subscribe((clinic) => {
			resetForm(this.clinicFormDirective, this.initialValues)
			this.snackbarService.success('Clínica criada com sucesso.')
			this.loading = false
		})
	}
}
