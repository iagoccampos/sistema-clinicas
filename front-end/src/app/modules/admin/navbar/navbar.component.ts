import { ChangeDetectionStrategy, Component } from '@angular/core'
import { AuthService } from 'src/app/services/auth.service'
import { NavService } from 'src/app/services/nav.service'

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {

	constructor(private authService: AuthService, public navService: NavService) { }

	logout() {
		this.authService.logout()
	}

	toggleSidenav() {
		this.navService.toggleNav()
	}
}
