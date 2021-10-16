import { AfterViewInit, ApplicationRef, Component, OnDestroy, OnInit } from '@angular/core'
import { Subscription } from 'rxjs'
import { ClinicModel } from 'src/app/models/clinic.model'
import { ClinicService } from 'src/app/services/clinic.service'

@Component({
	selector: 'app-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit, OnDestroy {
	opened = true
	clinic: ClinicModel | null = null

	private subscription: Subscription | null = null

	constructor(private clinicService: ClinicService, private appRef: ApplicationRef) { }

	ngOnInit() {
		this.subscription = this.clinicService.onClinicChanged.subscribe((clinic) => this.clinic = clinic)
	}

	ngOnDestroy() {
		this.subscription?.unsubscribe()
	}
}
