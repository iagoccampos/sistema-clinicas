import { Document, Schema, model } from 'mongoose'

export interface IClinic {
	name: string
}

interface IDocClinic extends Document, IClinic { }

const schema = new Schema({
	name: {
		type: String,
		required: true
	}
})

const md = model<IDocClinic>('Clinic', schema)
export default md
