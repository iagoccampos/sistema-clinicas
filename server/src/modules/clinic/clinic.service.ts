import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Clinic, ClinicDto } from './clinic.schema'

@Injectable()
export class ClinicService {
	constructor (@InjectModel('Clinic') private clinicModel: Model<Clinic>) { }

	async createClinic (clinicDto: ClinicDto, ownerId: string) {
		return new this.clinicModel({ ...clinicDto, owner: ownerId }).save()
	}

	async getClinicsByOwner (ownerId: string) {
		return this.clinicModel.find({ owner: ownerId }).exec()
	}

	async getClinicById (id: string) {
		const clinic = await this.clinicModel.findById(id).exec()

		if (!clinic) {
			throw new NotFoundException()
		}

		return clinic
	}

	async updateClinicById (id: string, clinicDto: ClinicDto) {
		return this.clinicModel.findByIdAndUpdate(id, clinicDto, { new: true }).exec()
	}

	async deleteClinicById (id: string) {
		// Delete cascade
		return this.clinicModel.findByIdAndDelete(id)
	}
}