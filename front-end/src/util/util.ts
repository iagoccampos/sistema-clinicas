import { FormGroup, FormGroupDirective } from '@angular/forms'

export function resetForm(form: FormGroupDirective | FormGroup, defaultValues: any, emitEvent = true) {
	if (form instanceof FormGroupDirective) {
		return form.resetForm(defaultValues)
	}

	form.reset(defaultValues, { emitEvent })
}
