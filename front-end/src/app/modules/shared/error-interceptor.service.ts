import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs'
import { catchError } from 'rxjs/operators'
import { Injectable } from '@angular/core'
import { AuthService } from '../../services/auth.service'
import { SnackbarService } from 'src/app/services/snackbar.service'

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

	constructor(private authService: AuthService, private snackBarService: SnackbarService) { }

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		return next.handle(req).pipe(
			catchError((err: HttpErrorResponse) => {
				switch (err.status) {
					case 401:
						this.snackBarService.error('Faça login para acesso.')
						this.authService.logout()
						break
					case 500:
						this.snackBarService.error('Erro interno no servidor. Tente novamente mais tarde.')
						break
					default:
						this.snackBarService.error(err.error?.message || 'Houve um problema na comunicação com o servidor. Tente novamente mais tarde.')
						break
				}

				console.error(err)
				return throwError(err)
			})
		)
	}
}
