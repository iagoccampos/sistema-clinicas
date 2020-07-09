import { CanLoad, CanActivate, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivateChild, Router } from '@angular/router'
import { Observable } from 'rxjs'
import { Injectable } from '@angular/core'
import { AuthService } from './auth.service'
import { map, tap } from 'rxjs/operators'
import { NotificationService } from '../shared/notification/notification.service'

@Injectable({
	providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate, CanActivateChild {

	constructor (private authService: AuthService, private notificationService: NotificationService, private router: Router) { }

	canActivate (route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
		boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
		return this.handleAuth()
	}

	canActivateChild (childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot):
		boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
		return this.handleAuth()
	}

	canLoad (route: Route, segments: UrlSegment[]):
		boolean | Observable<boolean> | Promise<boolean> {
		return this.handleAuth()
	}

	handleAuth () {
		if (!this.authService.isLoggedIn()) {
			this.notificationService.showError('Faça login para acesso.')
			this.router.navigate(['login'])
			return false
		}

		return true
	}
}