import { NgModule } from '@angular/core'
import { ClientService } from './client/client.service'
import { ClientComponent } from './client/client/client.component'
import { AddClientComponent } from './client/add-client/add-client.component'
import { FindClientComponent } from './client/find-client/find-client.component'
import { SharedModule } from '../shared/shared.module'
import { EditClientComponent } from './client/edit-client/edit-client.component'

@NgModule({
	declarations: [
		ClientComponent,
		AddClientComponent,
		EditClientComponent,
		FindClientComponent
	],
	imports: [
		SharedModule
	],
	providers: [
		ClientService
	]
})
export class ClinicalModule { }