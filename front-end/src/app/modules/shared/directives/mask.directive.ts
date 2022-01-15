import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core'
import { FormControl, NgControl } from '@angular/forms'

const timeMasks: string[] = ['Hh:m0:s0', 'Hh:m0', 'm0:s0']

const specialCharacters = ['-', '/', '(', ')', '.', ':', ' ', '+', ',', '@', '[', ']', '"']
const specialCharRegex = /-|\/|\(|\)|\.|:|\s|\+|,|@|\[|\]"/g

const patterns: { [key: string]: RegExp } = {
	0: new RegExp('\\d'),
	9: new RegExp('\\d'),
	X: new RegExp('\\d'),
	A: new RegExp('[a-zA-Z0-9]'),
	S: new RegExp('[a-zA-Z]'),
	d: new RegExp('\\d'),
	m: new RegExp('\\d'),
	M: new RegExp('\\d'),
	H: new RegExp('\\d'),
	h: new RegExp('\\d'),
	s: new RegExp('\\d'),
}

@Directive({
	selector: 'input[appMask], textarea[appMask]'
})
export class MaskDirective implements OnInit {
	@Input() appMask = ''

	private oldValue = ''
	private keyPressed = false

	constructor(private elRef: ElementRef, private renderer: Renderer2, private formControl: NgControl) { }

	ngOnInit(): void {
		this.oldValue = this.elRef.nativeElement.value
		this.formControl?.valueChanges?.subscribe((val: string) => {
			if (this.keyPressed) {
				this.keyPressed = false
				return
			}

			if (!isNaN(Date.parse(val))) {
				val = new Date(val).toLocaleDateString().replace(/\//g, '')
			}

			const text = this.build(val)
			this.updateValue(text)
		})
	}

	@HostListener('keypress', ['$event']) onKeydownHandler(event: KeyboardEvent) {
		if (event.ctrlKey || event.code === 'Enter') {
			return
		}

		this.keyPressed = true

		const elRef = this.elRef.nativeElement as HTMLInputElement
		const newInputValue = elRef.value + event.key

		if (newInputValue.length > this.appMask.length) {
			return event.preventDefault()
		}

		const newChar = event.key
		let currentInputIndex = newInputValue.length - 1
		let maskChar = this.appMask[currentInputIndex]

		while (this.isSpecialChar(maskChar)) {
			if (maskChar === newChar) {
				if (event.isTrusted) {
					return
				}

				elRef.value += maskChar
			}

			elRef.value += maskChar
			currentInputIndex++
			maskChar = this.appMask[currentInputIndex]
		}

		if (!this.charMatchesMask(maskChar, newChar)) {
			return event.preventDefault()
		}
	}

	@HostListener('paste', ['$event'])
	onPaste(event: ClipboardEvent) {
		const clipText = (event.clipboardData?.getData('text') || '').replace(specialCharRegex, '')
		const text = this.build(clipText)

		this.updateValue(text)
		event.preventDefault()
	}

	private build(text: string): string {
		if (!text) {
			return ''
		}

		let newText = ''

		let textIndex = 0
		for (let i = 0; i < this.appMask.length; i++) {
			if (this.isSpecialChar(this.appMask[i])) {
				newText += this.appMask[i]
			} else {
				newText += text[textIndex]
				textIndex++
			}
		}

		return newText
	}

	private isSpecialChar(char: string) {
		return char.length === 1 && !!specialCharacters.find((el) => el === char)
	}

	private charMatchesMask(mask: string, char: string) {
		if (!patterns[mask]) {
			return false
		}

		return patterns[mask].test(char)
	}

	private updateValue(val: string) {
		this.oldValue = val
		// console.log(this.oldValue)
		this.renderer.setProperty(this.elRef.nativeElement, 'value', val)
	}
}
