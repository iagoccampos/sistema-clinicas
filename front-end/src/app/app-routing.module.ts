import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { LoginComponent } from './modules/auth/login/login.component'
import { AuthGuard } from './modules/auth/auth.guard'

const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: '/login' },
	{ path: 'login', component: LoginComponent },
	{ path: 'clinicas', canActivate: [AuthGuard], loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule) }
]

@NgModule({
	imports: [RouterModule.forRoot(routes, { paramsInheritanceStrategy: 'always' })],
	exports: [RouterModule]
})
export class AppRoutingModule { }
