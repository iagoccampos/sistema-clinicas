import Clinic, { IClinic } from '../schemas/clinic'

class ClinicModel {
	async createClinic(newClinic: IClinic) {
		const clinic = new Clinic(newClinic)
		await clinic.save({ validateBeforeSave: true })

		return clinic
	}

	async getClinics() {
		return Clinic.find().lean().exec()
	}

	async getClinic(id: string) {
		return Clinic.findById(id).lean().exec()
	}

	async deleteClinic(id: string) {
		return Clinic.findByIdAndDelete(id).lean().exec()
	}
}

export default new ClinicModel()
