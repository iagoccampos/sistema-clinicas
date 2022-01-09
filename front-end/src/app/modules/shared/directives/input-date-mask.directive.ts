import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core'

@Directive({
	selector: '[appInputDateMask]'
})
export class InputDateMaskDirective implements OnInit {

	private oldValue = ''

	constructor(private elRef: ElementRef, private renderer: Renderer2) { }

	ngOnInit(): void {
		this.oldValue = this.elRef.nativeElement.value
	}

	@HostListener('input') onInput() {
		const newValue = this.elRef.nativeElement.value as string
		const newValueOnlyNumber = newValue.replace(/[^\d+]/g, '')

		if (newValueOnlyNumber.length === 3) {
			const lastChar = newValueOnlyNumber[2]
			return this.updateValue(`${newValueOnlyNumber.slice(0, 2)}/${lastChar}`)
		}

		if (newValueOnlyNumber.length === 5) {
			const lastChar = newValueOnlyNumber[4]
			return this.updateValue(`${newValueOnlyNumber.slice(0, 2)}/${newValueOnlyNumber.slice(2, 4)}/${lastChar}`)
		}

		if (/^((\d)|([0-2]\d)|(3[0-1]))?(\/((0\d)|(1[0-2])))?(\/\d{0,4})?$/.test(newValue)) {
			this.updateValue(newValue.replace(/[^\d+/]/g, ''))
		}


	}

	private updateValue(val: string) {
		this.oldValue = val
		this.renderer.setProperty(this.elRef.nativeElement, 'value', val)
	}
}
