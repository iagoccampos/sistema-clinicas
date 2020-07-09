import { NgModule } from '@angular/core'
import { AdmComponent } from './adm.component'
import { Routes, RouterModule } from '@angular/router'
import { SharedModule } from '../shared/shared.module'
import { ClinicModule } from '../clinics/clinic.module'
import { ClinicsComponent } from '../clinics/clinics/clinics.component'
import { ClinicsResolver } from '../clinics/clinics/clinics.resolver'
import { ClinicComponent } from '../clinics/clinic/clinic.component'
import { ClinicResolver } from '../clinics/clinic/clinic.resolver'
import { ClientComponent } from '../clinical/client/client/client.component'
import { ClinicalModule } from '../clinical/clinical.module'
import { ClinicOptionsComponent } from '../clinics/clinic-options/clinic-options.component'
import { AddClientComponent } from '../clinical/client/add-client/add-client.component'
import { EditClientComponent } from '../clinical/client/edit-client/edit-client.component'
import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { ErrorInterceptor } from '../shared/error-interceptor.service'
import { AuthGuard } from '../auth/auth.guard'
import { CanDeactivateGuard } from '../shared/can-deactivate.guard'

const routes: Routes = [
	{
		path: '', component: AdmComponent, canActivateChild: [AuthGuard], children: [
			{
				path: 'clinicas', children: [
					{ path: '', component: ClinicsComponent, resolve: { clinics: ClinicsResolver } },
					{
						path: ':clinicId', component: ClinicComponent, resolve: { clinic: ClinicResolver }, children: [
							{ path: '', component: ClinicOptionsComponent },
							{
								path: 'clinico', children: [
									{
										path: 'clientes', component: ClientComponent, children: [
											{ path: '', canDeactivate: [CanDeactivateGuard], component: AddClientComponent },
											{ path: ':clientId/editar', canDeactivate: [CanDeactivateGuard], component: EditClientComponent }
										]
									}
								]
							}
						]
					}
				]
			}
		]
	},
]

@NgModule({
	declarations: [
		AdmComponent,
	],
	providers: [

	],
	imports: [
		RouterModule.forChild(routes),
		SharedModule,
		ClinicModule,
		ClinicalModule
	]
})
export class AdmModule { }
