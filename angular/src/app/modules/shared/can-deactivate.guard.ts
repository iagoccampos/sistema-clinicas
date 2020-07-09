import { Observable } from 'rxjs'
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { Injectable } from '@angular/core'
import { AuthService } from '../auth/auth.service'

export interface CanComponenteDeactivate {
	canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean
}

@Injectable({ providedIn: 'root' })
export class CanDeactivateGuard implements CanDeactivate<CanComponenteDeactivate> {

	constructor (private authService: AuthService) { }

	canDeactivate (component: CanComponenteDeactivate, currentRoute: ActivatedRouteSnapshot,
		currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
		return component.canDeactivate()
	}
}