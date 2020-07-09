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
const router_module_1 = require("nest-router/router.module");
const api_module_1 = require("./modules/api/api.module");
const auth_module_1 = require("./modules/auth/auth.module");
const clinic_module_1 = require("./modules/clinic/clinic.module");
const ng_module_1 = require("./modules/ng/ng.module");
const client_module_1 = require("./modules/clinic/clinical/client/client.module");
const routes = [
    {
        path: 'api', children: [
            { path: 'auth', module: auth_module_1.AuthModule },
            {
                path: 'clinic', module: clinic_module_1.ClinicModule, children: [
                    {
                        path: ':clinicId', children: [
                            {
                                path: 'clinical', children: [
                                    { path: 'client', module: client_module_1.ClientModule }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        path: '*', module: ng_module_1.NgModule
    }
];
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            router_module_1.RouterModule.forRoutes(routes),
            mongoose_1.MongooseModule.forRoot('mongodb://localhost:27017/sistema-clinicas', { useNewUrlParser: true, useUnifiedTopology: true }),
            api_module_1.ApiModule,
            ng_module_1.NgModule
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map