import { IsNotEmpty } from 'class-validator'
import { Transform, Type } from 'class-transformer'
import { cardToNumber } from 'src/util/util'
import * as mongoose from 'mongoose'

export const ClientSchema = new mongoose.Schema({
	name: {
		type: String,
		uppercase: true,
		required: true
	},
	card: {
		type: Number,
		min: 0,
		required: true
	},
	rg: {
		type: String,
		default: ''
	},
	cpf: {
		type: String,
		default: ''
	},
	birthday: {
		type: Date,
		default: null
	},
	deleted: {
		type: Boolean,
		default: false
	},
	clinic: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Clinic',
		required: true
	}
})

export class ClientDto {
	@IsNotEmpty()
	name: string
	@Transform(cardToNumber)
	card?: number
	rg?: string
	cpf?: string
	birthday?: Date
}

export class ClientQuery {
	name?: string
	@Transform(cardToNumber)
	card?: number
	birthday?: string
}

export interface Client extends mongoose.Document {
	_id: string
	name: string
	card: number
	rg?: string
	cpf?: string
	birthday: Date
	deleted: boolean
	clinic: string
}
