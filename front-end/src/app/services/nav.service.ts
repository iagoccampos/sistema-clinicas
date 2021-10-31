import { Injectable } from '@angular/core'
import { MatSidenav } from '@angular/material/sidenav'
import { Event, NavigationEnd, Router } from '@angular/router'
import { BehaviorSubject } from 'rxjs'

@Injectable({
	providedIn: 'root'
})
export class NavService {
	public sideNav: MatSidenav | null = null
	public currentUrl = new BehaviorSubject<string>('')

	constructor(private router: Router) {
		this.router.events.subscribe((event: Event) => {
			if (event instanceof NavigationEnd) {
				this.currentUrl.next(event.urlAfterRedirects)
			}
		})
	}

	public closeNav() {
		this.sideNav?.close()
	}

	public openNav() {
		this.sideNav?.open()
	}

	public toggleNav() {
		if (this.sideNav) {
			this.sideNav.opened ? this.sideNav.close() : this.sideNav.open()
		}
	}
}
