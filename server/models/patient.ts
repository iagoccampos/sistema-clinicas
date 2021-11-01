import Patient, { INewPatient } from '../schemas/patient'

interface Query {
	name?: string
	birthday?: string
	rg?: string
	page?: string
	limit?: string
}

interface MappedQuery {
	name?: string | RegExp
	birthday?: Date
	rg?: string
}

class PatientModel {
	async getPatients(clinicId: string, query: Query) {
		const page = +(query.page || NaN)
		const limit = +(query.limit || NaN)

		const mappedQuery: MappedQuery = {}

		if (query.birthday) {
			mappedQuery.birthday = new Date(query.birthday)
		}

		if (query.name) {
			mappedQuery.name = new RegExp(query.name, 'gi')
		}

		if (query.rg) {
			mappedQuery.rg = query.rg
		}

		const total = await Patient.find({ clinic: clinicId, ...mappedQuery }).countDocuments().exec()
		const patientsQuery = Patient.find({ clinic: clinicId, ...mappedQuery })

		if (!isNaN(page) && !isNaN(limit)) {
			patientsQuery.skip(+page * +limit).limit(+limit)
		}

		return { total, items: await patientsQuery.lean().exec() }
	}

	async create(clinicId: string, newPatient: INewPatient) {
		const patient = await Patient.create({ clinic: clinicId, ...newPatient })
		return patient.toObject()
	}

	async update(id: string, editedPatient: INewPatient) {
		const patient = await Patient.findByIdAndUpdate(id, { $set: editedPatient }, { new: true }).lean().exec()
		return patient
	}

	async remove(id: string) {
		const patient = await Patient.findByIdAndRemove(id).lean().exec()
		return patient
	}
}

export default new PatientModel()
