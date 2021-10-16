export interface NewPatient {
	name: string
	rg?: string
	birthday?: string
}

export interface Patient {
	_id: string
	name: string
	card: number
	rg?: string
	cpf?: string
	birthday?: Date
}
