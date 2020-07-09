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
const clinic_service_1 = require("./clinic.service");
const auth_guard_1 = require("../auth.guard");
let ClinicController = class ClinicController {
    constructor(clinicService) {
        this.clinicService = clinicService;
    }
    async getClinics(req) {
        return this.clinicService.getClinicsByOwner(req.user._id);
    }
    async createClinic(req, clinic) {
        return this.clinicService.createClinic(clinic, req.user._id);
    }
    async getClinic(clinicId) {
        return this.clinicService.getClinicById(clinicId);
    }
    async updateClinic(params, clinic) {
        return this.clinicService.updateClinicById(params.clinicId, clinic);
    }
    async deleteClinic(params) {
        this.clinicService.deleteClinicById(params.clinicId);
    }
};
__decorate([
    common_1.Get(),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ClinicController.prototype, "getClinics", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Req()), __param(1, common_1.Body('clinic')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ClinicController.prototype, "createClinic", null);
__decorate([
    common_1.Get(':clinicId'),
    __param(0, common_1.Param('clinicId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ClinicController.prototype, "getClinic", null);
__decorate([
    common_1.Put(':clinicId'),
    __param(0, common_1.Param()), __param(1, common_1.Body('clinic')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ClinicController.prototype, "updateClinic", null);
__decorate([
    common_1.Delete(':clinicId'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ClinicController.prototype, "deleteClinic", null);
ClinicController = __decorate([
    common_1.Controller(),
    common_1.UseGuards(auth_guard_1.AuthGuard),
    __metadata("design:paramtypes", [clinic_service_1.ClinicService])
], ClinicController);
exports.ClinicController = ClinicController;
//# sourceMappingURL=clinic.controller.js.map