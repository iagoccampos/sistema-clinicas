import { Component, OnInit, HostBinding } from '@angular/core'

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {

	@HostBinding('class')
	col = ['col-2']
	@HostBinding('style')
	bgColor = 'background-color: rgb(250, 250, 250);'

	constructor () { }

	ngOnInit (): void {
	}

}
