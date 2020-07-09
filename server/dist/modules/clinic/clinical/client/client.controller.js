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
const client_service_1 = require("./client.service");
const client_schema_1 = require("./client.schema");
const auth_guard_1 = require("../../../auth.guard");
const util_1 = require("../../../../util/util");
let ClientController = class ClientController {
    constructor(clientService) {
        this.clientService = clientService;
    }
    async getClients(clinicId, clientQuery) {
        return this.clientService.getClients(clinicId, clientQuery);
    }
    async createClient(clinicId, client) {
        return this.clientService.createClient(client, clinicId);
    }
    async cardExists(clinicId, clientCard) {
        return !!(await this.clientService.getClientByCard(util_1.cardToNumber(clientCard), clinicId));
    }
    async getClient(clientId) {
        return this.clientService.getClientById(clientId);
    }
    async updateClient(clinicId, clientId, client) {
        return this.clientService.updateClient(client, clinicId, clientId);
    }
    async deleteClient(clientId) {
        return this.clientService.deleteClient(clientId);
    }
};
__decorate([
    common_1.Get(''),
    __param(0, common_1.Param('clinicId')), __param(1, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, client_schema_1.ClientQuery]),
    __metadata("design:returntype", Promise)
], ClientController.prototype, "getClients", null);
__decorate([
    common_1.Post(''),
    __param(0, common_1.Param('clinicId')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, client_schema_1.ClientDto]),
    __metadata("design:returntype", Promise)
], ClientController.prototype, "createClient", null);
__decorate([
    common_1.Get('cardexists'),
    __param(0, common_1.Param('clinicId')), __param(1, common_1.Query('card')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ClientController.prototype, "cardExists", null);
__decorate([
    common_1.Get(':clientId'),
    __param(0, common_1.Param('clientId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ClientController.prototype, "getClient", null);
__decorate([
    common_1.Put(':clientId'),
    __param(0, common_1.Param('clientId')), __param(1, common_1.Param('clientId')), __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, client_schema_1.ClientDto]),
    __metadata("design:returntype", Promise)
], ClientController.prototype, "updateClient", null);
__decorate([
    common_1.Delete(':clientId'),
    __param(0, common_1.Param('clientId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ClientController.prototype, "deleteClient", null);
ClientController = __decorate([
    common_1.Controller(),
    common_1.UseGuards(auth_guard_1.AuthGuard),
    __metadata("design:paramtypes", [client_service_1.ClientService])
], ClientController);
exports.ClientController = ClientController;
//# sourceMappingURL=client.controller.js.map