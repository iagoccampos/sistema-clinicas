import { Directive, Renderer2, OnInit, ElementRef } from '@angular/core'

@Directive({
	selector: '[appNoValidationFeedback]'
})
export class NoValidationFeedbackDirective implements OnInit {

	constructor(private elRef: ElementRef, private renderer: Renderer2) { }

	ngOnInit() {
		this.renderer.addClass(this.elRef.nativeElement, 'no-validate')
	}
}
