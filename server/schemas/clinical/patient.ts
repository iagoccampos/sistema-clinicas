import { Schema, model, Document } from 'mongoose'

export interface IPatient {
	card: number
	name: string
	birthday?: Date
	rg?: string
	clinic: string
}

export interface INewPatient {
	name: string
	birthday?: Date
	rg?: string
}

interface IDocPatient extends IPatient, Document { }

const patientSchema = new Schema({
	card: {
		type: Number
	},
	name: {
		type: String,
		required: [true, 'Nome do paciente é requerido.'],
		maxLength: [50, 'Nome do paciente deve conter no máximo 50 caracteres.']
	},
	birthday: {
		type: Date
	},
	rg: {
		type: String
	},
	clinic: {
		type: Schema.Types.ObjectId,
		ref: 'Clinic',
		required: true
	}
}, {
	timestamps: true,
	optimisticConcurrency: true
})

patientSchema.pre('save', async function (next) {
	const doc = this as IDocPatient
	const biggestCard = (await patientModel.findOne({ clinic: doc.clinic }, { card: 1 }, { sort: { card: -1 } }))?.card

	doc.card = biggestCard ? biggestCard + 1 : 1
	next()
})

const patientModel = model<IDocPatient>('ClinicalPatient', patientSchema)
export default patientModel
