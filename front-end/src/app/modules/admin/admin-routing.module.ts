import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AdminComponent } from './admin.component'
import { ClinicComponent } from './clinic/clinic.component'
import { OverviewComponent } from './clinic/overview/overview.component'
import { PatientComponent } from './clinic/patient/patient.component'
import { ClinicsComponent } from './clinics/clinics.component'

const routes: Routes = [{
	path: '', component: AdminComponent, children: [
		{ path: '', component: ClinicsComponent },
		{
			path: ':clinicId', component: ClinicComponent, children: [
				{ path: '', redirectTo: 'dashboard', pathMatch: 'full' },
				{ path: 'dashboard', component: OverviewComponent },
				{ path: 'pacientes', component: PatientComponent }
			]
		}
	]
}]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AdminRoutingModule { }
