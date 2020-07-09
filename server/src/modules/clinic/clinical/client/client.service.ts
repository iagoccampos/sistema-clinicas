import { Injectable, ForbiddenException } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model, Types } from 'mongoose'
import { Client, ClientDto, ClientQuery } from './client.schema'
import { cardToNumber } from 'src/util/util'

@Injectable()
export class ClientService {

	constructor (@InjectModel('Client') private clientModel: Model<Client>) { }

	async createClient (clientDto: ClientDto, clinicId: string) {
		let newCard = clientDto.card
		if (!newCard) {
			newCard = await this.getAvaibleCard(clinicId)
		}
		else {
			await this.checkCardAvailability(newCard, clinicId)
		}

		return new this.clientModel({ ...clientDto, card: newCard, clinic: clinicId }).save()
	}

	async getClients (clinicId: string, query: ClientQuery) {
		const filter = { clinic: clinicId, deleted: false }
		const $and = []

		if (query.name) {
			$and.push({ name: { $regex: new RegExp(query.name, 'i') } })
		}

		if (query.card) {
			$and.push({ card: query.card })
		}

		if (query.birthday) {
			const birthday = new Date(query.birthday)
			const nextDay = new Date(query.birthday)
			nextDay.setDate(birthday.getDate() + 1)

			$and.push({ birthday: { $gte: birthday, $lt: nextDay } })
		}

		return this.clientModel.find($and.length ? { ...filter, $and } : filter).sort({ card: 1 })
	}

	async getClientById (clientId: string) {
		return this.clientModel.findOne({ _id: clientId })
	}

	async getClientByCard (clientCard: number, clinicId: string) {
		return this.clientModel.findOne({ card: clientCard, clinic: clinicId, deleted: false })
	}

	async updateClient (clientDto: ClientDto, clinicId: string, clientId: string) {
		let newCard = clientDto.card
		if (!newCard) {
			newCard = await this.getAvaibleCard(clinicId)
		}
		else {
			await this.checkCardAvailability(newCard, clinicId)
		}

		return this.clientModel.updateOne({ _id: clientId }, { $set: { ...clientDto } })
	}

	async deleteClient (clientId: string) {
		return this.clientModel.findByIdAndUpdate(clientId, { deleted: true })
	}

	async getBiggestCard (clinicId: string) {
		const client = await this.clientModel.findOne({ clinic: clinicId, deleted: false }).sort({ card: -1 })
		return client ? client.card : 0
	}

	private async checkCardAvailability (card: number, clinicId: string) {
		const client = await this.getClientByCard(card, clinicId)

		if (client) {
			throw new ForbiddenException('Já existe um cliente com esse número de ficha.')
		}
	}

	private async getAvaibleCard (clinicId: string) {
		const gaps: { missingCards: number[] }[] = await this.clientModel.aggregate([
			{ $match: { deleted: false, clinic: Types.ObjectId(clinicId) } },
			{ $group: { _id: null, min: { $min: '$card' }, max: { $max: '$card' } } },
			{ $addFields: { rangeCards: { $range: ['$min', '$max'] } } },
			{ $lookup: { from: 'clients', localField: 'rangeCards', foreignField: 'card', as: 'clients' } },
			{ $project: { _id: 0, missingCards: { $setDifference: ['$rangeCards', '$clients.card'] } } }
		]).exec()

		if (gaps.length && gaps[0].missingCards.length) {
			return gaps[0].missingCards[0]
		} else {
			return await this.getBiggestCard(clinicId) + 1
		}
	}
}