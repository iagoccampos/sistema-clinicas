import { trigger, state, style, transition, animate } from '@angular/animations'
import { Component, HostBinding, Input, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { NavService } from 'src/app/services/nav.service'

export interface NavItem {
	displayName: string
	disabled?: boolean
	iconName: string
	route?: string
	children?: NavItem[]
}

@Component({
	selector: 'app-nav-list-item',
	templateUrl: './nav-list-item.component.html',
	styleUrls: ['./nav-list-item.component.scss'],
	animations: [
		trigger('indicatorRotate', [
			state('collapsed', style({ transform: 'rotate(0deg)' })),
			state('expanded', style({ transform: 'rotate(180deg)' })),
			transition('expanded <=> collapsed',
				animate('225ms cubic-bezier(0.4,0.0,0.2,1)')
			),
		])
	]
})
export class NavListItemComponent implements OnInit {
	expanded = false
	@HostBinding('attr.aria-expanded') ariaExpanded = this.expanded
	@Input() item: NavItem = { displayName: '', iconName: '' }
	@Input() depth = 0

	constructor(private navService: NavService, public router: Router, private activatedRoute: ActivatedRoute) {
		if (this.depth === undefined) {
			this.depth = 0
		}
	}

	ngOnInit() {
		this.navService.currentUrl.subscribe((url: string) => {
			if (this.item?.route && url) {
				// console.log(`Checking '/${this.item.route}' against '${url}'`);
				this.expanded = url.indexOf(`/${this.item.route}`) === 0
				this.ariaExpanded = this.expanded
				// console.log(`${this.item.route} is expanded: ${this.expanded}`);
			}
		})
	}

	onItemSelected(item: NavItem) {
		if (!item.children || !item.children.length) {
			this.router.navigate([item.route], { relativeTo: this.activatedRoute })
			// this.navService.closeNav()
		}
		if (item.children && item.children.length) {
			this.expanded = !this.expanded
		}
	}
}
