import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs'
import { catchError } from 'rxjs/operators'
import { NotificationService } from './notification/notification.service'
import { Injectable } from '@angular/core'
import { AuthService } from '../../services/auth.service'

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

	constructor(private notificationService: NotificationService, private authService: AuthService) { }

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		return next.handle(req).pipe(
			catchError((err: HttpErrorResponse) => {
				switch (err.status) {
					case 401:
						this.notificationService.showError('Faça login para acesso.')
						this.authService.logout()
						break
					case 500:
						this.notificationService.showError('Erro interno no servidor. Tente novamente mais tarde.')
						break
				}

				console.log(err)
				return throwError(err.error.message)
			})
		)
	}
}
