import { AfterViewInit, ChangeDetectionStrategy, Component, Input, ViewChild } from '@angular/core'
import { MatSidenav } from '@angular/material/sidenav'
import { ClinicModel } from 'src/app/models/clinic.model'
import { NavService } from 'src/app/services/nav.service'
import { NavItem } from './nav-list-item/nav-list-item.component'

@Component({
	selector: 'app-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavComponent implements AfterViewInit {
	opened = true
	@Input() clinic: ClinicModel | null = null

	@ViewChild('sidenav') sideNav: MatSidenav | null = null

	navItems: NavItem[] = [{
		displayName: 'Visão geral',
		iconName: '',
		route: './dashboard'
	}, {
		displayName: 'Pacientes',
		iconName: '',
		route: `./clinico/pacientes`
	}, {
		displayName: 'Clínico',
		iconName: '',
		children: []
	}, {
		displayName: 'Ortodontia',
		iconName: '',
		children: []
	}, {
		displayName: 'Endodontia',
		iconName: '',
		children: []
	}]

	constructor(private navService: NavService) { }

	ngAfterViewInit() {
		this.navService.setSideNav(this.sideNav)
	}
}
