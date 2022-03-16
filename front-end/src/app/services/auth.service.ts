import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'
import { User } from '../models/user.model'
import { JwtHelperService } from '@auth0/angular-jwt'

@Injectable({ providedIn: 'root' })
export class AuthService {
	private currentUser: User | null = null

	private token = ''

	private readonly helper = new JwtHelperService()

	readonly loginUrl = '/api/auth/login'
	readonly logoutUrl = '/api/auth/logout'

	constructor(private http: HttpClient, private router: Router) {
		const token = localStorage.getItem('token')

		if (token) {
			this.token = token
			this.currentUser = this.helper.decodeToken(this.token)
		}
	}

	login(form: { username: string, password: string }) {
		this.http.post<{ auth: boolean, token: string }>(this.loginUrl, form).subscribe((result) => {
			if (result.auth) {
				this.token = result.token
				this.currentUser = this.helper.decodeToken(this.token)
				localStorage.setItem('token', this.token)
				this.router.navigate(['/clinicas'])
			}
		})
	}

	logout() {
		this.currentUser = null
		this.token = ''
		localStorage.removeItem('token')

		this.router.navigate(['login'])
	}

	isLoggedIn(): boolean {
		if (this.currentUser) {
			if (this.helper.isTokenExpired(this.token)) {
				this.logout()
				return false
			}

			return true
		} else {
			return false
		}
	}

	getToken() {
		if (!this.token) {
			if (!localStorage.getItem('token')) {
				return ''
			}

			return localStorage.getItem('token') as string
		}

		return this.token
	}
}
