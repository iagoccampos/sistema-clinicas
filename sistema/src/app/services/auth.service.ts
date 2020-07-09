import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'
import { User } from '../models/user.model'

@Injectable({ providedIn: 'root' })
export class AuthService {
	private currentUser: User = null

	readonly loginUrl = '/api/auth/login'
	readonly logoutUrl = '/api/auth/logout'
	readonly isLoggedInUrl = '/api/auth/is-logged-in'

	constructor(private http: HttpClient, private router: Router) { }

	login(form: { username: string, password: string }) {
		this.http.post<User>(this.loginUrl, form).subscribe((response: User) => {
			this.currentUser = response
			console.log('Login: \n' + JSON.stringify(response))
			this.router.navigate(['admin', 'clinicas'])
		})
	}

	logout() {
		this.currentUser = null

		this.http.get(this.logoutUrl).subscribe(() => {
			this.router.navigate(['login'])
		})
	}
}
