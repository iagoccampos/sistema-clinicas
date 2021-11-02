import { Schema, model } from 'mongoose'

export interface IPatient {
	card: number
	name: string
	birthday?: Date
	rg?: string
	cpf?: string
	clinic: Schema.Types.ObjectId | string
}

export interface INewPatient {
	name: string
	birthday?: Date
	rg?: string
}

const patientSchema = new Schema<IPatient>({
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
	cpf: {
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

patientSchema.pre('save', async function (this: IPatient, next) {
	const biggestCard = (await patientModel.findOne({ clinic: this.clinic }, { card: 1 }, { sort: { card: -1 } }))?.card
	this.card = biggestCard ? biggestCard + 1 : 1
	next()
})

const patientModel = model<IPatient>('Patient', patientSchema)
export default patientModel
