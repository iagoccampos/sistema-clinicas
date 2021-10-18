import { Document, Schema, model } from 'mongoose'

export interface IClinic {
	name: string
}

interface IDocClinic extends Document, IClinic { }

const clinicSchema = new Schema({
	name: {
		type: String,
		required: true
	}
}, { timestamps: true })

const Clinic = model<IDocClinic>('Clinic', clinicSchema)
export default Clinic
