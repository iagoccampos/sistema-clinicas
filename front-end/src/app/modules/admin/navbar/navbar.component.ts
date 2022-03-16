import { Component } from '@angular/core'
import { AuthService } from 'src/app/services/auth.service'
import { NavService } from 'src/app/services/nav.service'

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
	private hideToggle = false

	get toggleHidden() {
		return this.hideToggle
	}

	constructor(private authService: AuthService, private navService: NavService) {
		navService.currentUrl.subscribe((url) => {
			this.hideToggle = url === '/clinicas'
		})
	}

	logout() {
		this.authService.logout()
	}

	toggleSidenav() {
		this.navService.toggleNav()
	}
}
