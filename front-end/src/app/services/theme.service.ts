import { Injectable } from '@angular/core'
import { BehaviorSubject, Subject } from 'rxjs'

@Injectable({
	providedIn: 'root'
})
export class ThemeService {
	private isDarkTheme$ = new BehaviorSubject(false)
	isDarkThemeObs$ = this.isDarkTheme$.asObservable()

	constructor() { }

	toggleIsDarkThemeMode() {
		this.isDarkTheme$.next(!this.isDarkTheme$.getValue())
	}
}
