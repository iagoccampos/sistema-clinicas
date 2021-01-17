import ClinicModel, { IClinic } from '../schemas/clinic'

const createClinic = async (newClinic: IClinic) => {
	const clinic = new ClinicModel(newClinic)
	await clinic.save({ validateBeforeSave: true })

	return clinic
}

const getClinics = () => {
	return ClinicModel.find().lean().exec()
}

const getClinic = (id: string) => {
	return ClinicModel.findById(id).lean().exec()
}

const deleteClinic = async (id: string) => {
	return ClinicModel.findByIdAndDelete(id).lean().exec()
}

export default { createClinic, getClinics, getClinic, deleteClinic }
