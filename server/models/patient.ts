import PatientModel, { INewPatient } from '../schemas/clinical/patient'

interface Query {
	name?: string
	birthday?: string
	rg?: string
	page?: string
	limit?: string
}

interface MappedQuery {
	name?: string
	birthday?: Date
	rg?: string
}

const getPatients = async (clinicId: string, query: Query) => {
	const page = query.page
	const limit = query.limit
	delete query.page
	delete query.limit

	const mappedQuery: any = {}

	if (query.birthday) {
		mappedQuery.birthday = new Date(query.birthday)
	}

	if (query.name) {
		mappedQuery.name = new RegExp(query.name, 'gi')
	}

	if (query.rg) {
		mappedQuery.rg = query.rg
	}

	const total = await PatientModel.find({ clinic: clinicId, ...mappedQuery }).countDocuments().exec()
	const patientsQuery = PatientModel.find({ clinic: clinicId, ...mappedQuery })

	if (page && limit) {
		patientsQuery.skip(+page * +limit).limit(+limit)
	}

	return { total, items: await patientsQuery.lean().exec() }
}

const create = async (clinicId: string, newPatient: INewPatient) => {
	const patient = await PatientModel.create({ clinic: clinicId, ...newPatient })
	return patient.toObject()
}

const update = async (id: string, editedPatient: INewPatient) => {
	const patient = await PatientModel.findByIdAndUpdate(id, { $set: editedPatient }, { new: true }).lean().exec()
	return patient
}

const remove = async (id: string) => {
	const patient = await PatientModel.findByIdAndRemove(id).lean().exec()
	return patient
}

export default { getPatients, create, update, remove }
