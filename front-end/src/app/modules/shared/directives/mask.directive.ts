import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core'

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

	constructor(private elRef: ElementRef, private renderer: Renderer2) { }

	ngOnInit(): void {
		this.oldValue = this.elRef.nativeElement.value
	}

	@HostListener('keypress', ['$event']) onKeydownHandler(event: KeyboardEvent) {
		if (event.ctrlKey) {
			return
		}

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
			console.log(maskChar)
			currentInputIndex++
			maskChar = this.appMask[currentInputIndex]
		}

		if (!this.charMatchesMask(maskChar, newChar)) {
			return event.preventDefault()
		}
	}

	@HostListener('paste', ['$event'])
	onPaste(event: ClipboardEvent) {
		console.log('paste')
		const clipText = (event.clipboardData?.getData('text') || '').replace(specialCharRegex, '')
		let text = ''

		let clipTextIndex = 0
		for (let i = 0; i < this.appMask.length; i++) {
			if (this.isSpecialChar(this.appMask[i])) {
				text += this.appMask[i]
			} else {
				text += clipText[clipTextIndex]
				clipTextIndex++
			}
		}

		this.updateValue(text)
		event.preventDefault()
	}

	// @HostListener('input', ['$event'])
	// onInput(event: Event) {
	// 	const newValue = this.elRef.nativeElement.value as string

	// 	// Em caso de adição de caracteres ou ocorreu um paste
	// 	if (newValue.length >= this.oldValue.length || this.pasteEvent) {
	// 		this.updateValue(this.build(newValue))
	// 	} else {
	// 		// const diff = new Diff().main(this.oldValue, newValue)
	// 		// console.log(diff)
	// 		this.updateValue(this.build(newValue))
	// 	}

	// 	this.pasteEvent = false
	// }

	// private build(text: string): string {
	// 	let buildedText = ''

	// 	for (let i = 0; i < text.length; i++) {
	// 		const char = text.charAt(i)
	// 		const mask = this.appMask.charAt(i)

	// 		if (!mask) {
	// 			return this.oldValue
	// 		}

	// 		if (!this.isSpecialChar(mask) && !patterns[mask].test(char)) {
	// 			return this.oldValue
	// 		}

	// 		if (this.isSpecialChar(mask) && !this.isSpecialChar(char)) {
	// 			buildedText += mask
	// 			buildedText += char
	// 			return this.build(buildedText + text.substr(buildedText.length - 1))
	// 		}

	// 		buildedText += char
	// 	}

	// 	return buildedText
	// }

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
