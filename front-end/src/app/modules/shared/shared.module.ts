import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { NgModule } from '@angular/core'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { RouterModule } from '@angular/router'
import { ClickOutsideDirective } from './directives/clickoutside.directive'
import { InputNameDirective } from './directives/input-name.directive'
import { NoValidationFeedbackDirective } from './directives/no-validation-feedback.directive'
import { InputNumberDirective } from './directives/input-number.directive'
import { ErrorInterceptor } from 'src/app/modules/shared/error-interceptor.service'
import { CardPipe } from './pipes/card.pipe'
import { InputCardDirective } from './directives/input-card.directive'
import { InputUppercaseDirective } from './directives/input-uppercase.directive'
import { AngularMaterialModule } from './material/material.module'
import { FlexLayoutModule } from '@angular/flex-layout'

const modules = [
	CommonModule,
	ReactiveFormsModule,
	HttpClientModule,
	RouterModule,
	AngularMaterialModule,
	FlexLayoutModule
]

const directives = [
	ClickOutsideDirective,
	InputUppercaseDirective,
	InputNameDirective,
	InputNumberDirective,
	InputCardDirective,
	NoValidationFeedbackDirective
]

const pipes = [
	CardPipe
]

@NgModule({
	imports: [
		...modules
	],
	providers: [
		{ provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
	],
	declarations: [
		...directives,
		...pipes
	],
	exports: [
		...modules,
		...directives,
		...pipes
	]
})
export class SharedModule { }
