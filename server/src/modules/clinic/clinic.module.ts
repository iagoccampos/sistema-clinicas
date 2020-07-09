import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { ClinicSchema } from './clinic.schema'
import { ClinicService } from './clinic.service'
import { ClinicController } from './clinic.controller'

@Module({
	controllers: [
		ClinicController
	],
	imports: [
		MongooseModule.forFeature([{ name: 'Clinic', schema: ClinicSchema }])
	],
	providers: [
		ClinicService,
	]
})
export class ClinicModule { }