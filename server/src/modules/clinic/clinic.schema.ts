import * as mongoose from 'mongoose'

export const ClinicSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	owner: {
		type: mongoose.Schema.Types.ObjectId,
		required: true
	}
})

export interface ClinicDto {
	name: string
}

export interface Clinic extends mongoose.Document, ClinicDto {
	owner: string
}
