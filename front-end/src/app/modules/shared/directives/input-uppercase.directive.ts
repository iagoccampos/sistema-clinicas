import { Directive, ElementRef, HostListener } from '@angular/core'
import { NgControl } from '@angular/forms'

@Directive({
	selector: '[appInputUppercase]'
})
export class InputUppercaseDirective {

	constructor (private elRef: ElementRef, private control: NgControl) { }

	@HostListener('input') onInput () {
		const value: string = this.elRef.nativeElement.value

		if (this.control.control) {
			this.control.control.setValue(value.toUpperCase())
		}
	}
}
