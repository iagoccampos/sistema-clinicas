import { Injectable } from '@angular/core'
import {
	HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http'

import { Observable } from 'rxjs'
import { AuthService } from './services/auth.service'

@Injectable()
export class MainInterceptor implements HttpInterceptor {

	constructor(private authService: AuthService) { }

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		const token = this.authService.getToken()

		if (token) {
			const clonedReq = req.clone({ setHeaders: { 'x-access-token': token } })
			return next.handle(clonedReq)
		}

		return next.handle(req)
	}
}
