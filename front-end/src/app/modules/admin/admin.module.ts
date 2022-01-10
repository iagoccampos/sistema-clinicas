import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AdminComponent } from './admin.component'
import { ClinicsComponent } from './clinics/clinics.component'
import { SharedModule } from '../shared/shared.module'
import { ClinicComponent } from './clinic/clinic.component'
import { SidenavComponent } from './clinic/sidenav/sidenav.component'
import { OverviewComponent } from './clinic/overview/overview.component'
import { NavbarComponent } from './navbar/navbar.component'
import { PatientComponent } from './clinic/clinical/patient/patient.component'
import { NavListItemComponent } from './clinic/sidenav/nav-list-item/nav-list-item.component';
import { NewPatientComponent } from './clinic/clinical/patient/new-patient/new-patient.component';
import { FindPatientComponent } from './clinic/clinical/patient/find-patient/find-patient.component'

@NgModule({
	declarations: [
		AdminComponent,
		ClinicsComponent,
		ClinicComponent,
		SidenavComponent,
		OverviewComponent,
		NavbarComponent,
		PatientComponent,
		NavListItemComponent,
  NewPatientComponent,
  FindPatientComponent
	],
	imports: [CommonModule, SharedModule]
})
export class AdminModule { }
