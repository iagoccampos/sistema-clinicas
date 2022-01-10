import { Injectable, NgModule } from '@angular/core'
import { OverlayModule } from '@angular/cdk/overlay'
import { CdkTreeModule } from '@angular/cdk/tree'
import { PortalModule } from '@angular/cdk/portal'
import { LayoutModule } from '@angular/cdk/layout'
import { DateAdapter, NativeDateAdapter } from '@angular/material/core'
import { MatAutocompleteModule } from '@angular/material/autocomplete'
import { MatButtonModule } from '@angular/material/button'
import { MatButtonToggleModule } from '@angular/material/button-toggle'
import { MatCardModule } from '@angular/material/card'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatChipsModule } from '@angular/material/chips'
import { MatRippleModule } from '@angular/material/core'
import { MatDividerModule } from '@angular/material/divider'
import { MatExpansionModule } from '@angular/material/expansion'
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import { MatListModule } from '@angular/material/list'
import { MatMenuModule } from '@angular/material/menu'
import { MatPaginatorIntl, MatPaginatorModule, MAT_PAGINATOR_DEFAULT_OPTIONS } from '@angular/material/paginator'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatSelectModule } from '@angular/material/select'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar'
import { MatSortModule } from '@angular/material/sort'
import { MatTableModule } from '@angular/material/table'
import { MatTabsModule } from '@angular/material/tabs'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatTreeModule } from '@angular/material/tree'
import { MatBadgeModule } from '@angular/material/badge'
// import { MatGridListModule } from '@angular/material/grid-list'
import { MatRadioModule } from '@angular/material/radio'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core'
import { MatTooltipModule } from '@angular/material/tooltip'


const materialModules = [
	OverlayModule,
	CdkTreeModule,
	PortalModule,
	LayoutModule,
	MatAutocompleteModule,
	MatButtonModule,
	MatCardModule,
	MatCheckboxModule,
	MatChipsModule,
	MatDividerModule,
	MatExpansionModule,
	MatIconModule,
	MatInputModule,
	MatListModule,
	MatMenuModule,
	MatProgressSpinnerModule,
	MatPaginatorModule,
	MatRippleModule,
	MatSelectModule,
	MatSidenavModule,
	MatSnackBarModule,
	MatSortModule,
	MatTableModule,
	MatTabsModule,
	MatToolbarModule,
	MatFormFieldModule,
	MatButtonToggleModule,
	MatTreeModule,
	MatBadgeModule,
	// MatGridListModule,
	MatRadioModule,
	MatDatepickerModule,
	MatNativeDateModule,
	MatTooltipModule,
	MatCheckboxModule
]

@Injectable()
class CustomDateAdapter extends NativeDateAdapter {
	parse(value: any): Date | null {
		if ((typeof value === 'string') && (value.indexOf('/') > -1)) {
			const str = value.split('/')

			const year = Number(str[2])
			const month = Number(str[1]) - 1
			const date = Number(str[0])

			return new Date(year, month, date)
		}

		const timestamp = typeof value === 'number' ? value : Date.parse(value)
		return isNaN(timestamp) ? null : new Date(timestamp)
	}

	format(date: Date, displayFormat: object): string {
		date = new Date(Date.UTC(
			date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(),
			date.getMinutes(), date.getSeconds(), date.getMilliseconds()))
		displayFormat = Object.assign({}, displayFormat, { timeZone: 'utc' })

		const dtf = new Intl.DateTimeFormat(this.locale, displayFormat)
		return dtf.format(date).replace(/[\u200e\u200f]/g, '')
	}
}

@NgModule({
	imports: [
		...materialModules
	],
	exports: [
		...materialModules
	],
	providers: [
		{ provide: DateAdapter, useClass: CustomDateAdapter },
		{ provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' } },
		{ provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 3000 } },
		{
			provide: MAT_PAGINATOR_DEFAULT_OPTIONS, useValue: {
				pageSizeOptions: [10, 25, 100], showFirstLastButtons: true, formFieldAppearance: 'standard'
			}
		},
		{
			provide: MatPaginatorIntl,
			useValue: (() => {
				const paginatorIntl = new MatPaginatorIntl()
				paginatorIntl.itemsPerPageLabel = 'Itens por página:'
				paginatorIntl.firstPageLabel = 'Primeira página'
				paginatorIntl.previousPageLabel = 'Página anterior'
				paginatorIntl.nextPageLabel = 'Próxima página'
				paginatorIntl.lastPageLabel = 'Última página'
				paginatorIntl.getRangeLabel = (page: number, pageSize: number, length: number) => {
					if (length === 0 || pageSize === 0) {
						return `0 de ${length}`
					}

					length = Math.max(length, 0)

					const startIndex = page * pageSize

					const endIndex = startIndex < length ?
						Math.min(startIndex + pageSize, length) :
						startIndex + pageSize

					return `${startIndex + 1} - ${endIndex} de ${length}`
				}

				return paginatorIntl
			})()
		}
	]
})

export class AngularMaterialModule { }
