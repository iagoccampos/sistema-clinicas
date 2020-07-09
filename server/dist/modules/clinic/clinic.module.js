"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const clinic_schema_1 = require("./clinic.schema");
const clinic_service_1 = require("./clinic.service");
const clinic_controller_1 = require("./clinic.controller");
let ClinicModule = class ClinicModule {
};
ClinicModule = __decorate([
    common_1.Module({
        controllers: [
            clinic_controller_1.ClinicController
        ],
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'Clinic', schema: clinic_schema_1.ClinicSchema }])
        ],
        providers: [
            clinic_service_1.ClinicService,
        ]
    })
], ClinicModule);
exports.ClinicModule = ClinicModule;
//# sourceMappingURL=clinic.module.js.map