import { Controller, Get, Req, Post, Body, Param, Delete, Put, UseGuards } from '@nestjs/common'
import { ClinicService } from './clinic.service'
import { ClinicDto } from './clinic.schema'
import { Request } from 'express'
import { AuthGuard } from '../auth.guard'

@Controller()
@UseGuards(AuthGuard)
export class ClinicController {

	constructor (private clinicService: ClinicService) { }

	@Get()
	async getClinics (@Req() req: Request) {
		return this.clinicService.getClinicsByOwner(req.user._id)
	}

	@Post()
	async createClinic (@Req() req: Request, @Body('clinic') clinic: ClinicDto) {
		return this.clinicService.createClinic(clinic, req.user._id)
	}

	@Get(':clinicId')
	async getClinic (@Param('clinicId') clinicId) {
		return this.clinicService.getClinicById(clinicId)
	}

	@Put(':clinicId')
	async updateClinic (@Param() params, @Body('clinic') clinic: ClinicDto) {
		return this.clinicService.updateClinicById(params.clinicId, clinic)
	}

	@Delete(':clinicId')
	async deleteClinic (@Param() params) {
		this.clinicService.deleteClinicById(params.clinicId)
	}
}