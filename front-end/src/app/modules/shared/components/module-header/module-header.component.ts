import { Component, Input, OnInit } from '@angular/core'

@Component({
	selector: 'app-module-header',
	template: `
		<h1>{{ titile }}</h1>
		<hr>
	`,
})
export class ModuleHeaderComponent {
	@Input() titile = ''

	constructor() { }
}
