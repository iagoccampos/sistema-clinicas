(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-adm-adm-module"],{

/***/ "./src/app/modules/adm/adm.component.ts":
/*!**********************************************!*\
  !*** ./src/app/modules/adm/adm.component.ts ***!
  \**********************************************/
/*! exports provided: AdmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmComponent", function() { return AdmComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/modules/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const _c0 = function () { return ["/admin/clinicas"]; };
class AdmComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
    }
    logout() {
        this.authService.logout();
    }
}
AdmComponent.ɵfac = function AdmComponent_Factory(t) { return new (t || AdmComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
AdmComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdmComponent, selectors: [["app-adm"]], decls: 22, vars: 2, consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light", "justify-content-between"], ["href", "#", 1, "navbar-brand"], [1, "collapse", "navbar-collapse"], [1, "navbar-nav"], [1, "nav-link", 3, "routerLink"], ["href", "#", 1, "nav-link"], [1, "navbar-nav", "mr-auto"], [1, "btn", "btn-primary", 3, "click"], [1, "container-fluid"]], template: function AdmComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sorria");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Cl\u00EDnicas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Adicionar Cl\u00EDnica");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Editar Conta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Lista de Despesas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Lista LabPPR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Lista LabPivo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdmComponent_Template_button_click_18_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Sair");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: [".container-fluid[_ngcontent-%COMP%] {\n\tmargin: 15px 0px;\n    padding: 0px 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG0vYWRtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxnQkFBZ0I7SUFDYixpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2FkbS9hZG0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItZmx1aWQge1xuXHRtYXJnaW46IDE1cHggMHB4O1xuICAgIHBhZGRpbmc6IDBweCAyNXB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdmComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-adm',
                templateUrl: './adm.component.html',
                styleUrls: ['./adm.component.css']
            }]
    }], function () { return [{ type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/adm/adm.module.ts":
/*!*******************************************!*\
  !*** ./src/app/modules/adm/adm.module.ts ***!
  \*******************************************/
/*! exports provided: AdmModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmModule", function() { return AdmModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _adm_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adm.component */ "./src/app/modules/adm/adm.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/modules/shared/shared.module.ts");
/* harmony import */ var _clinics_clinic_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../clinics/clinic.module */ "./src/app/modules/clinics/clinic.module.ts");
/* harmony import */ var _clinics_clinics_clinics_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../clinics/clinics/clinics.component */ "./src/app/modules/clinics/clinics/clinics.component.ts");
/* harmony import */ var _clinics_clinics_clinics_resolver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../clinics/clinics/clinics.resolver */ "./src/app/modules/clinics/clinics/clinics.resolver.ts");
/* harmony import */ var _clinics_clinic_clinic_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../clinics/clinic/clinic.component */ "./src/app/modules/clinics/clinic/clinic.component.ts");
/* harmony import */ var _clinics_clinic_clinic_resolver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../clinics/clinic/clinic.resolver */ "./src/app/modules/clinics/clinic/clinic.resolver.ts");











const routes = [
    {
        path: '', component: _adm_component__WEBPACK_IMPORTED_MODULE_1__["AdmComponent"], children: [
            { path: 'clinicas', component: _clinics_clinics_clinics_component__WEBPACK_IMPORTED_MODULE_5__["ClinicsComponent"], resolve: { clinics: _clinics_clinics_clinics_resolver__WEBPACK_IMPORTED_MODULE_6__["ClinicsResolver"] } },
            { path: ':id', component: _clinics_clinic_clinic_component__WEBPACK_IMPORTED_MODULE_7__["ClinicComponent"], resolve: { clinic: _clinics_clinic_clinic_resolver__WEBPACK_IMPORTED_MODULE_8__["ClinicResolver"] } }
        ]
    },
];
class AdmModule {
}
AdmModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AdmModule });
AdmModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AdmModule_Factory(t) { return new (t || AdmModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _clinics_clinic_module__WEBPACK_IMPORTED_MODULE_4__["ClinicModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdmModule, { declarations: [_adm_component__WEBPACK_IMPORTED_MODULE_1__["AdmComponent"]], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
        _clinics_clinic_module__WEBPACK_IMPORTED_MODULE_4__["ClinicModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdmModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _adm_component__WEBPACK_IMPORTED_MODULE_1__["AdmComponent"],
                ],
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                    _clinics_clinic_module__WEBPACK_IMPORTED_MODULE_4__["ClinicModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/clinics/clinic.module.ts":
/*!**************************************************!*\
  !*** ./src/app/modules/clinics/clinic.module.ts ***!
  \**************************************************/
/*! exports provided: ClinicModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClinicModule", function() { return ClinicModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/modules/shared/shared.module.ts");
/* harmony import */ var _clinics_clinics_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clinics/clinics.component */ "./src/app/modules/clinics/clinics/clinics.component.ts");
/* harmony import */ var _clinic_clinic_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clinic/clinic.component */ "./src/app/modules/clinics/clinic/clinic.component.ts");





class ClinicModule {
}
ClinicModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ClinicModule });
ClinicModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ClinicModule_Factory(t) { return new (t || ClinicModule)(); }, imports: [[
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ClinicModule, { declarations: [_clinics_clinics_component__WEBPACK_IMPORTED_MODULE_2__["ClinicsComponent"],
        _clinic_clinic_component__WEBPACK_IMPORTED_MODULE_3__["ClinicComponent"]], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]], exports: [_clinics_clinics_component__WEBPACK_IMPORTED_MODULE_2__["ClinicsComponent"],
        _clinic_clinic_component__WEBPACK_IMPORTED_MODULE_3__["ClinicComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClinicModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _clinics_clinics_component__WEBPACK_IMPORTED_MODULE_2__["ClinicsComponent"],
                    _clinic_clinic_component__WEBPACK_IMPORTED_MODULE_3__["ClinicComponent"]
                ],
                imports: [
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]
                ],
                exports: [
                    _clinics_clinics_component__WEBPACK_IMPORTED_MODULE_2__["ClinicsComponent"],
                    _clinic_clinic_component__WEBPACK_IMPORTED_MODULE_3__["ClinicComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/clinics/clinic.service.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/clinics/clinic.service.ts ***!
  \***************************************************/
/*! exports provided: ClinicService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClinicService", function() { return ClinicService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class ClinicService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.getClinicsUrl = '/api/clinicas';
        this.getClinicUrl = '/api/clinicas/';
    }
    getClinics() {
        return this.http.get(this.getClinicsUrl);
    }
    getClinic(id) {
        return this.http.get(this.getClinicUrl + id);
    }
}
ClinicService.ɵfac = function ClinicService_Factory(t) { return new (t || ClinicService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
ClinicService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ClinicService, factory: ClinicService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClinicService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/clinics/clinic/clinic.component.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/clinics/clinic/clinic.component.ts ***!
  \************************************************************/
/*! exports provided: ClinicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClinicComponent", function() { return ClinicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ClinicComponent {
    constructor() {
        this.clinic = null;
    }
    ngOnInit() {
    }
}
ClinicComponent.ɵfac = function ClinicComponent_Factory(t) { return new (t || ClinicComponent)(); };
ClinicComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClinicComponent, selectors: [["app-clinic"]], decls: 2, vars: 0, template: function ClinicComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "clinic works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY2xpbmljcy9jbGluaWMvY2xpbmljLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClinicComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-clinic',
                templateUrl: './clinic.component.html',
                styleUrls: ['./clinic.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/modules/clinics/clinic/clinic.resolver.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/clinics/clinic/clinic.resolver.ts ***!
  \***********************************************************/
/*! exports provided: ClinicResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClinicResolver", function() { return ClinicResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _clinic_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../clinic.service */ "./src/app/modules/clinics/clinic.service.ts");



class ClinicResolver {
    constructor(clinicService) {
        this.clinicService = clinicService;
    }
    resolve(route, state) {
        return this.clinicService.getClinic(route.params.id);
    }
}
ClinicResolver.ɵfac = function ClinicResolver_Factory(t) { return new (t || ClinicResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_clinic_service__WEBPACK_IMPORTED_MODULE_1__["ClinicService"])); };
ClinicResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ClinicResolver, factory: ClinicResolver.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClinicResolver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _clinic_service__WEBPACK_IMPORTED_MODULE_1__["ClinicService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/clinics/clinics/clinics.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/clinics/clinics/clinics.component.ts ***!
  \**************************************************************/
/*! exports provided: ClinicsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClinicsComponent", function() { return ClinicsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/modules/auth/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





const _c0 = function (a0) { return [a0]; };
function ClinicsComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Clientes: 9000");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Clientes: 9000");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Clientes: 9000");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const clinic_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, "/admin/" + clinic_r1._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](clinic_r1.name);
} }
class ClinicsComponent {
    constructor(route, router, auth) {
        this.route = route;
        this.router = router;
        this.auth = auth;
    }
    ngOnInit() {
        this.route.data.subscribe((data) => {
            this.clinics = data.clinics;
        });
    }
}
ClinicsComponent.ɵfac = function ClinicsComponent_Factory(t) { return new (t || ClinicsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
ClinicsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClinicsComponent, selectors: [["app-clinics"]], decls: 4, vars: 1, consts: [[1, "row"], ["class", "col-2", 4, "ngFor", "ngForOf"], [1, "col-2"], [1, "clinic-detail", 3, "routerLink"]], template: function ClinicsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Clinicas:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ClinicsComponent_div_3_Template, 10, 4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.clinics);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".clinic-detail[_ngcontent-%COMP%]{\n\tbackground-color: azure;\n\tborder: 1px slategrey solid;\n\tborder-radius: 4px;\n\tpadding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jbGluaWNzL2NsaW5pY3MvY2xpbmljcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsdUJBQXVCO0NBQ3ZCLDJCQUEyQjtDQUMzQixrQkFBa0I7Q0FDbEIsYUFBYTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9jbGluaWNzL2NsaW5pY3MvY2xpbmljcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNsaW5pYy1kZXRhaWx7XG5cdGJhY2tncm91bmQtY29sb3I6IGF6dXJlO1xuXHRib3JkZXI6IDFweCBzbGF0ZWdyZXkgc29saWQ7XG5cdGJvcmRlci1yYWRpdXM6IDRweDtcblx0cGFkZGluZzogMTBweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClinicsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-clinics',
                templateUrl: './clinics.component.html',
                styleUrls: ['./clinics.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/clinics/clinics/clinics.resolver.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/clinics/clinics/clinics.resolver.ts ***!
  \*************************************************************/
/*! exports provided: ClinicsResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClinicsResolver", function() { return ClinicsResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _clinic_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../clinic.service */ "./src/app/modules/clinics/clinic.service.ts");



class ClinicsResolver {
    constructor(clinicService) {
        this.clinicService = clinicService;
    }
    resolve(route, state) {
        return this.clinicService.getClinics();
    }
}
ClinicsResolver.ɵfac = function ClinicsResolver_Factory(t) { return new (t || ClinicsResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_clinic_service__WEBPACK_IMPORTED_MODULE_1__["ClinicService"])); };
ClinicsResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ClinicsResolver, factory: ClinicsResolver.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClinicsResolver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _clinic_service__WEBPACK_IMPORTED_MODULE_1__["ClinicService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=modules-adm-adm-module-es2015.js.map