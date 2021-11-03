import { trigger, state, style, transition, animate } from '@angular/animations'
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core'
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms'
import { MatPaginator, PageEvent } from '@angular/material/paginator'
import { MatTableDataSource } from '@angular/material/table'
import { ActivatedRoute } from '@angular/router'
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
		rg: new FormControl(''),
		cpf: new FormControl(''),
		phones: new FormArray([new FormControl(), new FormControl(), new FormControl()])
	})

	findPatientsForm = new FormGroup({
		name: new FormControl('', [Validators.maxLength(40)]),
		birthday: new FormControl(''),
		rg: new FormControl(''),
		card: new FormControl('')
	})

	displayedColumns: string[] = ['card', 'name', 'birthday', 'rg', 'cpf']
	dataSource: MatTableDataSource<Patient> = new MatTableDataSource()
	expandedPatient: Patient | null = null

	@ViewChild(MatPaginator) paginator!: MatPaginator

	constructor(private patientService: PatientService, private router: ActivatedRoute) { }

	ngOnInit(): void {
		this.clinicId = this.router.snapshot.paramMap.get('clinicId') as string
	}

	ngAfterViewInit() {
		this.getPatients()

		this.paginator.page.subscribe((el: PageEvent) => {
			this.getPatients()
		})
	}

	addNewPatient() {
		this.patientService.createPatient(this.newPatientForm.value, this.clinicId)
			.subscribe()
	}

	get phonesControl() {
		return (this.newPatientForm.get('phones') as FormArray).controls
	}

	getPatients() {
		this.patientService.getPatients(this.clinicId, this.findPatientsForm.value, this.paginator.pageIndex, this.paginator.pageSize)
			.subscribe((data) => {
				this.paginator.length = data.total
				this.dataSource.data = data.items
			})
	}
}
