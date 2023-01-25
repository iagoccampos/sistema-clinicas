import { Injectable } from '@angular/core'
import { BehaviorSubject, Subject } from 'rxjs'

@Injectable({
	providedIn: 'root'
})
export class ThemeService {
	private isDarkThemeSub$ = new BehaviorSubject(false)
	isDarkTheme$ = this.isDarkThemeSub$.asObservable()

	constructor() { }

	toggleIsDarkThemeMode() {
		this.isDarkThemeSub$.next(!this.isDarkThemeSub$.getValue())
	}
}
