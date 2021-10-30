import { Directive, ElementRef, OnInit, HostListener } from '@angular/core'
import { NgControl } from '@angular/forms'

@Directive({
	selector: '[appInputName]'
})
export class InputNameDirective implements OnInit {

	private oldValue = ''

	constructor(private elRef: ElementRef, private control: NgControl) { }

	ngOnInit() {
		this.oldValue = this.elRef.nativeElement.value
	}

	@HostListener('input') onInput() {
		const newValue: string = this.elRef.nativeElement.value

		if (newValue && !(/^[\wÀ-ú\s.]+$/.test(newValue))) {
			this.setVal(this.oldValue)
			return
		}

		this.oldValue = newValue
	}

	private setVal(val: string) {
		if (this.control.control) {
			this.control.control.setValue(val)
		}
	}
}
