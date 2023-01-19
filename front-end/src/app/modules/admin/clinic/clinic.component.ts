import { ChangeDetectionStrategy, Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Observable } from 'rxjs'
import { ClinicModel } from 'src/app/models/clinic.model'
import { ClinicService } from 'src/app/services/clinic.service'

@Component({
	selector: 'app-clinic',
	templateUrl: './clinic.component.html',
	styleUrls: ['./clinic.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClinicComponent {
	clinic$: Observable<ClinicModel | null> | null = null

	constructor(private route: ActivatedRoute, private clinicService: ClinicService) {
		const clinicId = this.route.snapshot.paramMap.get('clinicId')

		if (clinicId) {
			this.clinic$ = this.clinicService.getClinic(clinicId)
		}
	}
}
