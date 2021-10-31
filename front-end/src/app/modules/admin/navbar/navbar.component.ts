import { Component, OnInit } from '@angular/core'
import { Subject } from 'rxjs'
import { AuthService } from 'src/app/services/auth.service'
import { NavService } from 'src/app/services/nav.service'

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

	constructor(private authService: AuthService, private navService: NavService) { }

	ngOnInit(): void {
	}

	logout() {
		this.authService.logout()
	}

	toggleSidenav() {
		this.navService.toggleNav()
	}
}
