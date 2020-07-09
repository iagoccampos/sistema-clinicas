export interface NewClient {
	name: string
	card?: string
	rg?: string
	cpf?: string
	birthday?: string
}

export interface Client {
	_id: string
	name: string
	card: number
	rg?: string
	cpf?: string
	birthday: Date | null
}