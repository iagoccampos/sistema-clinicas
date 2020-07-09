import { NgModule } from '@angular/core'
import { SharedModule } from '../shared/shared.module'
import { ClinicsComponent } from './clinics/clinics.component'
import { ClinicComponent } from './clinic/clinic.component'
import { ClinicOptionsComponent } from './clinic-options/clinic-options.component'

@NgModule({
	declarations: [
		ClinicsComponent,
		ClinicComponent,
		ClinicOptionsComponent
	],
	imports: [
		SharedModule
	],
	exports: [
		ClinicsComponent,
		ClinicComponent
	]
})
export class ClinicModule { }
