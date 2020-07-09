import { Controller, Post, Body, Param, Delete, Get, Query, Put, UseGuards } from '@nestjs/common'
import { ClientService } from './client.service'
import { ClientDto, ClientQuery } from './client.schema'
import { AuthGuard } from 'src/modules/auth.guard'
import { cardToNumber } from 'src/util/util'

@Controller()
@UseGuards(AuthGuard)
export class ClientController {

	constructor (private clientService: ClientService) { }

	@Get('')
	async getClients (@Param('clinicId') clinicId: string, @Query() clientQuery: ClientQuery) {
		return this.clientService.getClients(clinicId, clientQuery)
	}

	@Post('')
	async createClient (@Param('clinicId') clinicId: string, @Body() client: ClientDto) {
		return this.clientService.createClient(client, clinicId)
	}

	@Get('cardexists')
	async cardExists (@Param('clinicId') clinicId: string, @Query('card') clientCard: string) {
		return !!(await this.clientService.getClientByCard(cardToNumber(clientCard), clinicId))
	}

	@Get(':clientId')
	async getClient (@Param('clientId') clientId: string) {
		return this.clientService.getClientById(clientId)
	}

	@Put(':clientId')
	async updateClient (@Param('clientId') clinicId: string, @Param('clientId') clientId: string, @Body() client: ClientDto) {
		return this.clientService.updateClient(client, clinicId, clientId)
	}

	@Delete(':clientId')
	async deleteClient (@Param('clientId') clientId: string) {
		return this.clientService.deleteClient(clientId)
	}
}