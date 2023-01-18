import { CommonModule } from '@angular/common'
import { Component, ContentChild, Directive, Input, NgModule, OnInit, TemplateRef } from '@angular/core'

interface TableRowTemplateContext<T extends object> {
	$implicit: T
}

@Directive({
	selector: 'ng-template[appTableHeader]'
})
export class TableHeaderTemplateDirective { }

@Directive({
	selector: 'ng-template[appTableRow]'
})
export class TableRowTemplateDirective<T extends object> {
	@Input('appTableRow') data: T[] = []

	static ngTemplateContextGuard<TContextItem extends object>(
		dir: TableRowTemplateDirective<TContextItem>,
		ctx: unknown): ctx is TableRowTemplateContext<TContextItem> {
		return true
	}
}

@Component({
	selector: 'app-table',
	templateUrl: './table.component.html',
	styleUrls: ['./table.component.scss']
})
export class TableComponent<T extends object> implements OnInit {
	@Input() data: T[] = []
	@ContentChild(TableHeaderTemplateDirective, { read: TemplateRef }) headers: TemplateRef<any> | null = null
	@ContentChild(TableRowTemplateDirective, { read: TemplateRef }) rows: TemplateRef<any> | null = null

	constructor() { }

	ngOnInit() {
		console.log(this.data)
	}
}

@NgModule({
	imports: [CommonModule],
	declarations: [TableComponent, TableHeaderTemplateDirective, TableRowTemplateDirective],
	exports: [TableComponent, TableHeaderTemplateDirective, TableRowTemplateDirective]
})
export class TableModule { }
