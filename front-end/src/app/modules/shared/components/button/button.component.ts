import { Component, Input, OnInit } from '@angular/core'

@Component({
	selector: 'app-button',
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
	@Input() text = ''
	@Input() loading = false
	@Input() disableOnLoading = true
	@Input() color: 'primary' | 'accent' | 'warn' = 'primary'

	constructor() { }

	ngOnInit(): void {
	}
}
