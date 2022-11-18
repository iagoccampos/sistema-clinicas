import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core'

@Component({
	selector: 'app-table',
	templateUrl: './table.component.html',
	styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
	@Input() data: { [key: string]: any }[] | null = null
	@ContentChild('headers') headers: TemplateRef<any> | null = null
	@ContentChild('rows') rows: TemplateRef<any> | null = null

	constructor() { }

	ngOnInit() {
		console.log(this.data)
	}
}
