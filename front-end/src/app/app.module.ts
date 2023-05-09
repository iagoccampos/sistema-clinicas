import { BrowserModule } from '@angular/platform-browser'
import { LOCALE_ID, NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { AuthModule } from './modules/auth/auth.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { SharedModule } from './modules/shared/shared.module'
import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { MainInterceptor } from './main-interceptor'
import { ReactiveFormsModule } from '@angular/forms'

import localePt from '@angular/common/locales/pt'
import localePtExtra from '@angular/common/locales/extra/pt'
import { registerLocaleData } from '@angular/common'

registerLocaleData(localePt, localePtExtra)

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		AuthModule,
		BrowserAnimationsModule,
		ReactiveFormsModule,
		SharedModule
	],
	providers: [{ provide: HTTP_INTERCEPTORS, useClass: MainInterceptor, multi: true }, { provide: LOCALE_ID, useValue: 'pt-BR' }],
	bootstrap: [AppComponent]
})
export class AppModule { }
