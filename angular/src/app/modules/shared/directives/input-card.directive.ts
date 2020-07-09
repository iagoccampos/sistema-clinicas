import { Directive, ElementRef, OnInit, HostListener } from '@angular/core'
import { NgControl } from '@angular/forms'

@Directive({
	selector: '[appInputCard]'
})
export class InputCardDirective implements OnInit {

	private oldValue = ''

	constructor (private elRef: ElementRef, private control: NgControl) { }

	ngOnInit () {
		this.oldValue = this.elRef.nativeElement.value
	}

	@HostListener('input') onInput () {
		const newValue: string = this.elRef.nativeElement.value

		if (newValue && !(/^\d+$/.test(newValue) || /^\d{0,3}[A-Z]$/.test(newValue))) {
			this.setVal(this.oldValue)
			return
		}

		this.oldValue = newValue
	}

	private setVal (val: string) {
		if (this.control.control) {
			this.control.control.setValue(val)
		}
	}
}