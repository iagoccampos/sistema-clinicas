import { FormGroup } from '@angular/forms'

export function resetForm(form: FormGroup, defaultValues: any) {
	form.patchValue(defaultValues)
	Object.keys(form.controls).forEach((key) => {
		form.controls[key].setErrors(null)
	})
}
