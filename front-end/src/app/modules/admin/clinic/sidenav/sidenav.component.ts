import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core'
import { MatSidenav } from '@angular/material/sidenav'
import { Subscription } from 'rxjs'
import { ClinicModel } from 'src/app/models/clinic.model'
import { ClinicService } from 'src/app/services/clinic.service'
import { NavService } from 'src/app/services/nav.service'
import { NavItem } from './nav-list-item/nav-list-item.component'

@Component({
	selector: 'app-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit, OnDestroy, AfterViewInit {
	opened = true
	clinic: ClinicModel | null = null

	@ViewChild('sidenav') sideNav: MatSidenav | null = null
	private subscription: Subscription | null = null

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

	constructor(private clinicService: ClinicService, private navService: NavService) { }

	ngAfterViewInit() {
		this.navService.setSideNav(this.sideNav)
	}

	ngOnInit() {
		this.subscription = this.clinicService.onClinicChanged.subscribe((clinic) => this.clinic = clinic)
	}

	ngOnDestroy() {
		this.subscription?.unsubscribe()
	}
}
