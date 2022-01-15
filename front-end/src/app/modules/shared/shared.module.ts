import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { NgModule } from '@angular/core'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { RouterModule } from '@angular/router'
import { InputNumberDirective } from './directives/input-number.directive'
import { ErrorInterceptor } from 'src/app/modules/shared/error-interceptor.service'
import { CardPipe } from './pipes/card.pipe'
import { InputUppercaseDirective } from './directives/input-uppercase.directive'
import { AngularMaterialModule } from './material/material.module'
import { FlexLayoutModule } from '@angular/flex-layout'
import { RgPipe } from './pipes/rg.pipe'
import { CpfPipe } from './pipes/cpf.pipe'
import { InputDateMaskDirective } from './directives/input-date-mask.directive'
import { MaskDirective } from './directives/mask.directive'
import { PhonePipe } from './pipes/phone.pipe'
import { DeleteConfirmationComponent } from './dialogs/delete-confirmation/delete-confirmation.component'

const components = [
	DeleteConfirmationComponent
]

const modules = [
	CommonModule,
	ReactiveFormsModule,
	HttpClientModule,
	RouterModule,
	AngularMaterialModule,
	FlexLayoutModule
]

const directives = [
	InputUppercaseDirective,
	InputNumberDirective,
	InputDateMaskDirective,
	MaskDirective,
]

const pipes = [
	CardPipe,
	RgPipe,
	CpfPipe,
	PhonePipe
]

@NgModule({
	imports: [
		...modules
	],
	providers: [
		{ provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
	],
	declarations: [
		...components,
		...directives,
		...pipes,
	],
	exports: [
		...modules,
		...directives,
		...pipes
	]
})
export class SharedModule { }
