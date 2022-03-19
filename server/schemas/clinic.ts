import { Schema, model, Model } from 'mongoose'

export interface IClinic {
	name: string
}

export type IClinicQuery = Partial<IClinic>

interface IClinicDoc extends IClinic { }

interface IClinicModel extends Model<IClinicDoc> { }

const schema = new Schema<IClinicDoc, IClinicModel>({
	name: {
		type: String,
		required: [true, 'Campo "nome" é requerido.'],
		maxlength: [50, 'Campo "nome" deve ter no máximo 50 caracteres'],
		unique: true
	}
}, { timestamps: true })

const Clinic = model<IClinicDoc>('Clinic', schema)
export default Clinic
