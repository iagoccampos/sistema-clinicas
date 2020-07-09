import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AuthGuard } from './modules/auth/auth.guard'
import { LoginComponent } from './modules/auth/login/login.component'

const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: 'login' },
	{ path: 'login', component: LoginComponent },
	{ path: 'admin', canLoad: [AuthGuard], loadChildren: () => import('./modules/adm/adm.module').then(m => m.AdmModule) }
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }