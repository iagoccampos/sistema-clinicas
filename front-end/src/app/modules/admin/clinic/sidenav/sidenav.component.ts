import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { ClinicModel } from 'src/app/models/clinic.model'
import { NavService } from 'src/app/services/nav.service'
import { NavItem } from './nav-list-item/nav-list-item.component'

@Component({
	selector: 'app-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavComponent {
	@Input() clinic: ClinicModel | null = null

	navItems: NavItem[] = [{
		displayName: 'Visão geral',
		iconName: '',
		route: './dashboard'
	}, {
		displayName: 'Clínico',
		iconName: '',
		children: [{
			displayName: 'Pacientes',
			iconName: '',
			route: `./pacientes`
		}]
	}]

	constructor(public navService: NavService) { }
}
