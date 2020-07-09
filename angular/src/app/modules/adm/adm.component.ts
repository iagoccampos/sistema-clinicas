import { Component, OnInit } from '@angular/core'
import { AuthService } from '../auth/auth.service'

@Component({
	selector: 'app-adm',
	templateUrl: './adm.component.html',
	styleUrls: ['./adm.component.css']
})
export class AdmComponent implements OnInit {

	constructor (private authService: AuthService) { }

	ngOnInit (): void {
	}

	logout () {
		this.authService.logout()
	}
}
