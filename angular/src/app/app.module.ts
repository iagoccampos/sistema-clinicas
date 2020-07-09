import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { SharedModule } from './modules/shared/shared.module'
import { AppRoutingModule } from './app-routing.module'
import { AuthModule } from './modules/auth/auth.module'

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		SharedModule,
		AuthModule
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
