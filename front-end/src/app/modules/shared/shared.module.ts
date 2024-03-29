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
import { DeleteConfirmationComponent } from './components/dialogs/delete-confirmation/delete-confirmation.component'
import { MessageSnackbarComponent } from './components/snackbars/message-snackbar/message-snackbar.component'
import { ButtonComponent } from './components/button/button.component'
import { TableModule } from './components/table/table.component'
import { ModuleHeaderComponent } from './components/module-header/module-header.component'

const components = [
	DeleteConfirmationComponent,
	MessageSnackbarComponent,
	ButtonComponent,
	ModuleHeaderComponent
]

const modules = [
	CommonModule,
	ReactiveFormsModule,
	HttpClientModule,
	RouterModule,
	AngularMaterialModule,
	FlexLayoutModule,
	TableModule
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
		...components,
		...modules,
		...directives,
		...pipes
	]
})
export class SharedModule { }
