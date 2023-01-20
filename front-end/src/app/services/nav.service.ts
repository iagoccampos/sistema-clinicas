import { Injectable } from '@angular/core'
import { Event, NavigationEnd, Router } from '@angular/router'
import { BehaviorSubject } from 'rxjs'

@Injectable({
	providedIn: 'root'
})
export class NavService {
	sidenavOpen$ = new BehaviorSubject(true)
	showSidenavToggle$ = new BehaviorSubject(false)

	constructor() { }

	toggleNav() {
		this.sidenavOpen$.next(!this.sidenavOpen$.getValue())
	}

	showSidenavToggle(show: boolean) {
		this.showSidenavToggle$.next(show)
	}
}
