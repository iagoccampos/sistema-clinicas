import { Component } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { AuthService } from '../../../services/auth.service'

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent {
	hide = true

	loginForm = new FormGroup({
		username: new FormControl('', [Validators.required, Validators.maxLength(20)]),
		password: new FormControl('', [Validators.required, Validators.maxLength(20)])
	})

	constructor(private authService: AuthService) { }

	login(): void {
		this.authService.login(this.loginForm.value)
	}
}
