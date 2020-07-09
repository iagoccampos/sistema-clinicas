import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { ClinicService } from '../clinic.service'
import { ClinicModel } from '../../../models/clinic.model'

@Injectable({
	providedIn: 'root'
})
export class ClinicsResolver implements Resolve<ClinicModel[]> {

	constructor (private clinicService: ClinicService) { }

	resolve (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): ClinicModel[] | Observable<ClinicModel[]> | Promise<ClinicModel[]> {
		return this.clinicService.getClinics()
	}

}