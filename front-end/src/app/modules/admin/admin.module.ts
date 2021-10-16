import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AdminComponent } from './admin.component'
import { ClinicsComponent } from './clinics/clinics.component'
import { SharedModule } from '../shared/shared.module'
import { ClinicComponent } from './clinic/clinic.component'
import { SidenavComponent } from './clinic/sidenav/sidenav.component'
import { LayoutModule } from '@angular/cdk/layout'
import { AngularMaterialModule } from '../shared/material/material.module'
import { OverviewComponent } from './clinic/overview/overview.component'
import { NavbarComponent } from './navbar/navbar.component'
import { PatientComponent } from './clinic/patient/patient.component'

@NgModule({
	declarations: [
		AdminComponent,
		ClinicsComponent,
		ClinicComponent,
		SidenavComponent,
		OverviewComponent,
		NavbarComponent,
		PatientComponent
	],
	imports: [CommonModule, SharedModule, AngularMaterialModule, LayoutModule]
})
export class AdminModule { }
