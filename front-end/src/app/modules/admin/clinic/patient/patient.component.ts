import { trigger, state, style, transition, animate } from '@angular/animations'
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { MatPaginator } from '@angular/material/paginator'
import { MatTableDataSource } from '@angular/material/table'
import { ActivatedRoute } from '@angular/router'
import { merge, Observable, race, Subject } from 'rxjs'
import { first, map, repeat, startWith, switchMap, take, takeLast, tap } from 'rxjs/operators'
import { Patient } from 'src/app/models/patient.model'
import { PatientService } from 'src/app/services/patient.service'

@Component({
	selector: 'app-patient',
	templateUrl: './patient.component.html',
	styleUrls: ['./patient.component.scss'],
	animations: [
		trigger('detailExpand', [
			state('collapsed', style({ height: '0px', minHeight: '0' })),
			state('expanded', style({ height: '*' })),
			transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
		])
	]
})
export class PatientComponent implements OnInit, AfterViewInit {

	private clinicId = ''

	newPatientForm = new FormGroup({
		name: new FormControl('', [Validators.required, Validators.maxLength(40)]),
		birthday: new FormControl(''),
		rg: new FormControl('')
	})

	findPatientsForm = new FormGroup({
		name: new FormControl('', [Validators.maxLength(40)]),
		birthday: new FormControl(''),
		rg: new FormControl(''),
		card: new FormControl('')
	})

	onFormSubmit = new Subject()
	displayedColumns: string[] = ['card', 'name', 'birthday']
	dataSource: MatTableDataSource<Patient> = new MatTableDataSource()
	expandedPatient: Patient | null = null
	isLoadingResults = true
	resultsLength = 0
	savedFormValue: { [key: string]: string } = {}

	@ViewChild(MatPaginator) paginator!: MatPaginator

	constructor(private patientService: PatientService, private router: ActivatedRoute) { }

	ngOnInit(): void {
		this.clinicId = this.router.snapshot.paramMap.get('clinicId') as string
	}

	ngAfterViewInit() {
		merge(this.paginator.page, this.onFormSubmit).pipe(
			startWith(null),
			switchMap(() => {
				console.log(this.savedFormValue)
				return this.patientService.getPatients(this.clinicId, this.savedFormValue, this.paginator.pageIndex, this.paginator.pageSize)
			}),
			tap((data) => {
				this.isLoadingResults = false
				this.resultsLength = data.total
				this.dataSource = new MatTableDataSource(data.items)
			})
		).subscribe()
	}

	addNewPatient() {
		const clinicId = this.router.snapshot.paramMap.get('clinicId') as string
		this.patientService.createPatient(this.newPatientForm.value, clinicId)
	}

	findPatients() {
		this.savedFormValue = this.findPatientsForm.value
		this.paginator.firstPage()
		this.onFormSubmit.next()
	}
}
