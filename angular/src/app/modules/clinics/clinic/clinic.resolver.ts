import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { ClinicModel } from 'src/app/models/clinic.model'
import { Observable } from 'rxjs'
import { ClinicService } from '../clinic.service'
import { Injectable } from '@angular/core'

@Injectable({
	providedIn: 'root'
})
export class ClinicResolver implements Resolve<ClinicModel>{

	constructor (private clinicService: ClinicService) { }

	resolve (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): ClinicModel | Observable<ClinicModel> | Promise<ClinicModel> {
		return this.clinicService.selectClinic(route.params.clinicId)
	}
}