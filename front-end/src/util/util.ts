import { FormGroup } from '@angular/forms'

export function resetForm(form: FormGroup, defaultValues: any, emit = true) {
	form.patchValue(defaultValues, { emitEvent: emit })
	Object.keys(form.controls).forEach((key) => {
		form.controls[key].setErrors(null)
	})
}
