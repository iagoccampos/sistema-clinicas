import { Document, Schema, model } from 'mongoose'

export interface IClinic {
	name: string
}

const clinicSchema = new Schema<IClinic>({
	name: {
		type: String,
		required: true
	}
}, { timestamps: true })

const Clinic = model<IClinic>('Clinic', clinicSchema)
export default Clinic
