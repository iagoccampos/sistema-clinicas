"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let ClientService = class ClientService {
    constructor(clientModel) {
        this.clientModel = clientModel;
    }
    async createClient(clientDto, clinicId) {
        let newCard = clientDto.card;
        if (!newCard) {
            newCard = await this.getNewCard(clinicId);
        }
        else {
            const client = await this.getClientByCard(newCard, clinicId);
            if (client) {
                throw new common_1.ForbiddenException('Já existe um cliente com esse número de ficha.');
            }
        }
        return new this.clientModel(Object.assign(Object.assign({}, clientDto), { card: newCard, clinic: clinicId })).save();
    }
    async getClients(clinicId, query) {
        const filter = { clinic: clinicId, deleted: false };
        const $and = [];
        if (query.name) {
            $and.push({ name: { $regex: new RegExp(query.name, 'i') } });
        }
        if (query.card) {
            $and.push({ card: query.card });
        }
        if (query.birthday) {
            const birthday = new Date(query.birthday);
            const nextDay = new Date(query.birthday);
            nextDay.setDate(birthday.getDate() + 1);
            $and.push({ birthday: { $gte: birthday, $lt: nextDay } });
        }
        return this.clientModel.find($and.length ? Object.assign(Object.assign({}, filter), { $and }) : filter).sort({ card: 1 });
    }
    async getClientById(clientId) {
        return this.clientModel.findOne({ _id: clientId });
    }
    async getClientByCard(clientCard, clinicId) {
        return this.clientModel.findOne({ card: clientCard, clinic: clinicId, deleted: false });
    }
    async updateClient(clientDto, clinicId, clientId) {
        let newCard = clientDto.card;
        if (!newCard) {
            newCard = await this.getNewCard(clinicId);
        }
        else {
            const client = await this.getClientByCard(newCard, clinicId);
            if (client) {
                throw new common_1.ForbiddenException('Já existe um cliente com esse número de ficha.');
            }
        }
        return this.clientModel.updateOne({ _id: clientId }, { $set: Object.assign({}, clientDto) });
    }
    async deleteClient(clientId) {
        return this.clientModel.findByIdAndUpdate(clientId, { deleted: true });
    }
    async getBiggestCard(clinicId) {
        const client = await this.clientModel.findOne({ clinic: clinicId, deleted: false }).sort({ card: -1 });
        return client ? client.card : 0;
    }
    async getNewCard(clinicId) {
        const gaps = await this.clientModel.aggregate([
            { $match: { deleted: false, clinic: mongoose_2.Types.ObjectId(clinicId) } },
            { $group: { _id: null, min: { $min: '$card' }, max: { $max: '$card' } } },
            { $addFields: { rangeCards: { $range: ['$min', '$max'] } } },
            { $lookup: { from: 'clients', localField: 'rangeCards', foreignField: 'card', as: 'clients' } },
            { $project: { _id: 0, missingCards: { $setDifference: ['$rangeCards', '$clients.card'] } } }
        ]).exec();
        if (gaps.length && gaps[0].missingCards.length) {
            return gaps[0].missingCards[0];
        }
        else {
            return await this.getBiggestCard(clinicId) + 1;
        }
    }
};
ClientService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('Client')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ClientService);
exports.ClientService = ClientService;
//# sourceMappingURL=client.service.js.map