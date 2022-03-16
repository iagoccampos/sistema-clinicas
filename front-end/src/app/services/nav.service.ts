import { Injectable } from '@angular/core'
import { MatSidenav } from '@angular/material/sidenav'
import { Event, NavigationEnd, Router } from '@angular/router'
import { BehaviorSubject } from 'rxjs'

@Injectable({
	providedIn: 'root'
})
export class NavService {
	private sideNav: MatSidenav | null = null
	currentUrl = new BehaviorSubject<string>('')

	constructor(private router: Router) {
		this.router.events.subscribe((event: Event) => {
			if (event instanceof NavigationEnd) {
				this.currentUrl.next(event.urlAfterRedirects)
			}
		})
	}

	setSideNav(sideNav: MatSidenav | null) {
		this.sideNav = sideNav
	}

	closeNav() {
		this.sideNav?.close()
	}

	openNav() {
		this.sideNav?.open()
	}

	toggleNav() {
		if (this.sideNav) {
			this.sideNav.opened ? this.sideNav.close() : this.sideNav.open()
		}
	}
}
