import { Injectable } from '@angular/core'
import { BehaviorSubject, Subject } from 'rxjs'

@Injectable({
	providedIn: 'root'
})
export class NavService {
	sidenavOpen$ = new BehaviorSubject(true)
	showSidenavToggle$ = new BehaviorSubject(false)

	constructor() { }

	toggleSidenav() {
		this.sidenavOpen$.next(!this.sidenavOpen$.getValue())
	}

	showSidenav() {
		this.sidenavOpen$.next(true)
	}

	showSidenavToggle(show: boolean) {
		this.showSidenavToggle$.next(show)
	}
}
