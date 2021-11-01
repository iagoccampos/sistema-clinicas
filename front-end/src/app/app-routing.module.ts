import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AdminComponent } from './modules/admin/admin.component'
import { ClinicComponent } from './modules/admin/clinic/clinic.component'
import { PatientComponent } from './modules/admin/clinic/clinical/patient/patient.component'
import { OverviewComponent } from './modules/admin/clinic/overview/overview.component'
import { ClinicsComponent } from './modules/admin/clinics/clinics.component'
import { LoginComponent } from './modules/auth/login/login.component'
import { AuthGuard } from './modules/auth/auth.guard'

const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: '/login' },
	{ path: 'login', component: LoginComponent },
	{
		path: 'clinicas', component: AdminComponent, canActivate: [AuthGuard], children: [
			{ path: '', component: ClinicsComponent },
			{
				path: ':clinicId', component: ClinicComponent, children: [
					{ path: '', redirectTo: 'dashboard', pathMatch: 'full' },
					{ path: 'dashboard', component: OverviewComponent },
					{
						path: 'clinico', children: [
							{ path: 'pacientes', component: PatientComponent }
						]
					}
				]
			}
		]
	}
]

@NgModule({
	imports: [RouterModule.forRoot(routes, { paramsInheritanceStrategy: 'always' })],
	exports: [RouterModule]
})
export class AppRoutingModule { }
