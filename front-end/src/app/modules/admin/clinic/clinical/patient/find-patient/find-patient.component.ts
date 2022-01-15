import { trigger, state, style, transition, animate } from '@angular/animations'
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { MatPaginator, PageEvent } from '@angular/material/paginator'
import { MatTableDataSource } from '@angular/material/table'
import { ActivatedRoute } from '@angular/router'
import { interval } from 'rxjs'
import { debounce } from 'rxjs/operators'
import { Patient } from 'src/app/models/patient.model'
import { PatientService } from 'src/app/services/patient.service'
import { resetForm } from 'src/util/util'
import { SharedService } from '../shared.service'

@Component({
	selector: 'app-find-patient',
	templateUrl: './find-patient.component.html',
	styleUrls: ['./find-patient.component.scss'],
	animations: [
		trigger('detailExpand', [
			state('collapsed', style({ height: '0px', minHeight: '0' })),
			state('expanded', style({ height: '*' })),
			transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
		])
	]
})
export class FindPatientComponent implements AfterViewInit {

	private readonly clinicId
	private readonly initialValues

	findPatientsForm = new FormGroup({
		name: new FormControl('', [Validators.maxLength(40)]),
		birthday: new FormControl(''),
		rg: new FormControl(''),
		cpf: new FormControl(''),
		card: new FormControl('')
	})

	displayedColumns: string[] = ['card', 'name', 'birthday', 'rg', 'cpf']
	dataSource: MatTableDataSource<Patient> = new MatTableDataSource()
	expandedPatient: Patient | null = null

	@ViewChild(MatPaginator) paginator!: MatPaginator

	constructor(private patientService: PatientService, private router: ActivatedRoute, private sharedService: SharedService) {
		this.clinicId = this.router.snapshot.paramMap.get('clinicId') as string
		this.initialValues = this.findPatientsForm.value
	}

	ngAfterViewInit() {
		this.getPatients()

		this.paginator.page.subscribe((el: PageEvent) => {
			this.getPatients()
		})

		this.findPatientsForm.valueChanges.pipe(debounce(() => interval(1000))).subscribe(() => { this.getPatients() })
	}

	clearForm() {
		resetForm(this.findPatientsForm, this.initialValues, false)
		this.getPatients()
	}

	editPatient(patient: Patient) {
		this.sharedService.editPatient(patient)
	}

	private getPatients() {
		this.patientService.getPatients(this.clinicId, this.findPatientsForm.value, this.paginator.pageIndex, this.paginator.pageSize)
			.subscribe((data) => {
				this.paginator.length = data.total
				this.dataSource.data = data.items
			})
	}
}
