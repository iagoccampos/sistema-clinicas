import { Component, Input } from '@angular/core'

@Component({
	selector: 'app-button',
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
	@Input() text = ''
	@Input() loading = false
	@Input() disableOnLoading = true
	@Input() color: 'primary' | 'accent' | 'warn' = 'primary'
	@Input() disabled = false

	constructor() { }
}
