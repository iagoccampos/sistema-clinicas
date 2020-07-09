import { Component } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { AuthService } from '../services/auth.service'

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent {
	loginForm = new FormGroup({
		username: new FormControl('', [Validators.required, Validators.maxLength(20)]),
		password: new FormControl('', [Validators.required, Validators.maxLength(20)])
	})

	constructor(private authService: AuthService) { }

	login() {
		this.authService.login(this.loginForm.value)
	}
}
