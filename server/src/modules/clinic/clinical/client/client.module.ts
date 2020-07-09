import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { ClientSchema } from './client.schema'
import { ClientService } from './client.service'
import { ClientController } from './client.controller'

@Module({
	controllers: [
		ClientController
	],
	imports: [
		MongooseModule.forFeature([{ name: 'Client', schema: ClientSchema }])
	],
	providers: [
		ClientService
	]
})
export class ClientModule {

}