import { Injectable } from '@angular/core'
import {
	HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http'

import { Observable } from 'rxjs'
import { AuthService } from './services/auth.service'

@Injectable()
export class MainInterceptor implements HttpInterceptor {

	constructor(private authService: AuthService) { }

	intercept(req: HttpRequest<any>, next: HttpHandler):
		Observable<HttpEvent<any>> {

		if (this.authService.getToken()) {
			const clonedReq = req.clone({ setHeaders: { 'x-access-token': this.authService.getToken() } })
			return next.handle(clonedReq)
		}

		return next.handle(req)
	}
}
