(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'covid';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./notifications/notifications.component */ "./src/app/notifications/notifications.component.ts");
/* harmony import */ var _hospitals_hospitals_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./hospitals/hospitals.component */ "./src/app/hospitals/hospitals.component.ts");
/* harmony import */ var _colleges_colleges_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./colleges/colleges.component */ "./src/app/colleges/colleges.component.ts");
/* harmony import */ var _customer_page_customer_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./customer-page/customer-page.component */ "./src/app/customer-page/customer-page.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/__ivy_ngcc__/fesm2015/ag-grid-angular.js");
/* harmony import */ var _searchfilter_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./searchfilter.pipe */ "./src/app/searchfilter.pipe.ts");





















const appRoot = [{ path: '', component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_6__["HomepageComponent"] },
    { path: 'customer-page', component: _customer_page_customer_page_component__WEBPACK_IMPORTED_MODULE_11__["CustomerPageComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"] },
    { path: 'notifications', component: _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_8__["NotificationsComponent"] },
    { path: 'hospitals', component: _hospitals_hospitals_component__WEBPACK_IMPORTED_MODULE_9__["HospitalsComponent"] },
    { path: 'colleges', component: _colleges_colleges_component__WEBPACK_IMPORTED_MODULE_10__["CollegesComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_14__["RegisterComponent"] }
];
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoot),
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModule"],
            ag_grid_angular__WEBPACK_IMPORTED_MODULE_16__["AgGridModule"].withComponents([])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_6__["HomepageComponent"],
        _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"],
        _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_8__["NotificationsComponent"],
        _hospitals_hospitals_component__WEBPACK_IMPORTED_MODULE_9__["HospitalsComponent"],
        _colleges_colleges_component__WEBPACK_IMPORTED_MODULE_10__["CollegesComponent"],
        _customer_page_customer_page_component__WEBPACK_IMPORTED_MODULE_11__["CustomerPageComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
        _register_register_component__WEBPACK_IMPORTED_MODULE_14__["RegisterComponent"],
        _searchfilter_pipe__WEBPACK_IMPORTED_MODULE_17__["SearchfilterPipe"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModule"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_16__["AgGridModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_6__["HomepageComponent"],
                    _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"],
                    _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_8__["NotificationsComponent"],
                    _hospitals_hospitals_component__WEBPACK_IMPORTED_MODULE_9__["HospitalsComponent"],
                    _colleges_colleges_component__WEBPACK_IMPORTED_MODULE_10__["CollegesComponent"],
                    _customer_page_customer_page_component__WEBPACK_IMPORTED_MODULE_11__["CustomerPageComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
                    _register_register_component__WEBPACK_IMPORTED_MODULE_14__["RegisterComponent"],
                    _searchfilter_pipe__WEBPACK_IMPORTED_MODULE_17__["SearchfilterPipe"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoot),
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModule"],
                    ag_grid_angular__WEBPACK_IMPORTED_MODULE_16__["AgGridModule"].withComponents([])
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/colleges/colleges.component.ts":
/*!************************************************!*\
  !*** ./src/app/colleges/colleges.component.ts ***!
  \************************************************/
/*! exports provided: CollegesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollegesComponent", function() { return CollegesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _covidservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../covidservice.service */ "./src/app/covidservice.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _searchfilter_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../searchfilter.pipe */ "./src/app/searchfilter.pipe.ts");






function CollegesComponent_tr_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const college_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](college_r1.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](college_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](college_r1.city);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](college_r1.ownership);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](college_r1.admissionCapacity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](college_r1.hospitalBeds);
} }
class CollegesComponent {
    constructor(service) {
        this.service = service;
    }
    ngOnInit() {
        this.service.getColleges().subscribe((result) => { this.Colleges = result.data.medicalColleges; });
    }
}
CollegesComponent.ɵfac = function CollegesComponent_Factory(t) { return new (t || CollegesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_covidservice_service__WEBPACK_IMPORTED_MODULE_1__["CovidserviceService"])); };
CollegesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CollegesComponent, selectors: [["app-colleges"]], decls: 24, vars: 5, consts: [[1, "form-grop-row"], [1, "col-sm-2-col-form-label", 2, "text-align", "right"], ["type", "text", "id", "search", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "container"], ["align", "center", 1, "table", "table-hover"], ["scope", ""], [4, "ngFor", "ngForOf"]], template: function CollegesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Search for a State or Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CollegesComponent_Template_input_ngModelChange_5_listener($event) { return ctx.searchValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "State");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Admission Capacity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Hospital Beds");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, CollegesComponent_tr_22_Template, 13, 6, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "searchfilter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](23, 2, ctx.Colleges, ctx.searchValue));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], pipes: [_searchfilter_pipe__WEBPACK_IMPORTED_MODULE_4__["SearchfilterPipe"]], styles: ["table[_ngcontent-%COMP%] {\r\n    font-family: \"Lato\",\"sans-serif\";   }       \r\n    table.one[_ngcontent-%COMP%] {                                  \r\n    margin-bottom: 3em; \r\n    border-collapse:collapse;   }       \r\n    td[_ngcontent-%COMP%] {                       \r\n    text-align: center;     \r\n    width: 10em;                    \r\n    padding: 1em;       }       \r\n    th[_ngcontent-%COMP%] {                             \r\n    text-align: center;                 \r\n    padding: 1em;\r\n    background-color:brown;       \r\n    color: white;       }       \r\n    tr[_ngcontent-%COMP%] {    \r\n    height: 1em;    }       \r\n    table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {           \r\n        background-color: rgb(163, 143, 143);     }       \r\n    table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(odd) {            \r\n    background-color:grey;      \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29sbGVnZXMvY29sbGVnZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdDQUFnQyxJQUFJO0lBQ3BDO0lBQ0Esa0JBQWtCO0lBQ2xCLHdCQUF3QixJQUFJO0lBRTVCO0lBQ0Esa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZLFFBQVE7SUFFcEI7SUFDQSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixZQUFZLFFBQVE7SUFDcEI7SUFDQSxXQUFXLEtBQUs7SUFFaEI7UUFDSSxvQ0FBb0MsTUFBTTtJQUU5QztJQUNBLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL2NvbGxlZ2VzL2NvbGxlZ2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgICBmb250LWZhbWlseTogXCJMYXRvXCIsXCJzYW5zLXNlcmlmXCI7ICAgfSAgICAgICBcclxuICAgIHRhYmxlLm9uZSB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgbWFyZ2luLWJvdHRvbTogM2VtOyBcclxuICAgIGJvcmRlci1jb2xsYXBzZTpjb2xsYXBzZTsgICB9ICAgXHJcbiAgICAgXHJcbiAgICB0ZCB7ICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgICAgIFxyXG4gICAgd2lkdGg6IDEwZW07ICAgICAgICAgICAgICAgICAgICBcclxuICAgIHBhZGRpbmc6IDFlbTsgICAgICAgfSAgICAgICBcclxuICAgICBcclxuICAgIHRoIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyAgICAgICAgICAgICAgICAgXHJcbiAgICBwYWRkaW5nOiAxZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmJyb3duOyAgICAgICBcclxuICAgIGNvbG9yOiB3aGl0ZTsgICAgICAgfSAgICAgICAgICAgICAgIFxyXG4gICAgdHIgeyAgICBcclxuICAgIGhlaWdodDogMWVtOyAgICB9XHJcbiAgICAgXHJcbiAgICB0YWJsZSB0cjpudGgtY2hpbGQoZXZlbikgeyAgICAgICAgICAgXHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2MywgMTQzLCAxNDMpOyAgICAgfVxyXG4gICAgIFxyXG4gICAgdGFibGUgdHI6bnRoLWNoaWxkKG9kZCkgeyAgICAgICAgICAgIFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpncmV5OyAgICAgIFxyXG59XHJcbiAgICAgIl19 */", "body[_ngcontent-%COMP%] {\n        background-color:rgb(220, 236, 238) ;     \n    }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CollegesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-colleges',
                templateUrl: './colleges.component.html',
                styleUrls: ['./colleges.component.css']
            }]
    }], function () { return [{ type: _covidservice_service__WEBPACK_IMPORTED_MODULE_1__["CovidserviceService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _covidservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../covidservice.service */ "./src/app/covidservice.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function ContactComponent_tr_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const contact_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](contact_r1.loc);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](contact_r1.number);
} }
class ContactComponent {
    constructor(service) {
        this.service = service;
    }
    ngOnInit() {
        this.service.getContacts().subscribe((data) => { console.log(data); this.contactsList = data.data.contacts.regional; console.log(this.contactsList); });
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_covidservice_service__WEBPACK_IMPORTED_MODULE_1__["CovidserviceService"])); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 11, vars: 1, consts: [[1, "container"], ["align", "center", 1, "table", "table-hover"], ["scope", "", 0, "filter", "true", ""], ["scope", ""], [4, "ngFor", "ngForOf"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "State Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Helpline Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ContactComponent_tr_10_Template, 5, 2, "tr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.contactsList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["table[_ngcontent-%COMP%] {\r\n    font-family: \"Lato\",\"sans-serif\";   }       \r\n    table.one[_ngcontent-%COMP%] {                                  \r\n    margin-bottom: 3em; \r\n    border-collapse:collapse;   }       \r\n    td[_ngcontent-%COMP%] {                       \r\n    text-align: center;     \r\n    width: 10em;                    \r\n    padding: 1em;       }       \r\n    th[_ngcontent-%COMP%] {                             \r\n    text-align: center;                 \r\n    padding: 1em;\r\n    background-color:brown;       \r\n    color: white;       }       \r\n    tr[_ngcontent-%COMP%] {    \r\n    height: 1em;    }       \r\n    table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {           \r\n        background-color: rgb(163, 143, 143);     }       \r\n    table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(odd) {            \r\n    background-color:grey;      \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBR0E7SUFDSSxnQ0FBZ0MsSUFBSTtJQUNwQztJQUNBLGtCQUFrQjtJQUNsQix3QkFBd0IsSUFBSTtJQUU1QjtJQUNBLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWSxRQUFRO0lBRXBCO0lBQ0Esa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsWUFBWSxRQUFRO0lBQ3BCO0lBQ0EsV0FBVyxLQUFLO0lBRWhCO1FBQ0ksb0NBQW9DLE1BQU07SUFFOUM7SUFDQSxxQkFBcUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuXHJcbnRhYmxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkxhdG9cIixcInNhbnMtc2VyaWZcIjsgICB9ICAgICAgIFxyXG4gICAgdGFibGUub25lIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICBtYXJnaW4tYm90dG9tOiAzZW07IFxyXG4gICAgYm9yZGVyLWNvbGxhcHNlOmNvbGxhcHNlOyAgIH0gICBcclxuICAgICBcclxuICAgIHRkIHsgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyAgICAgXHJcbiAgICB3aWR0aDogMTBlbTsgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgcGFkZGluZzogMWVtOyAgICAgICB9ICAgICAgIFxyXG4gICAgIFxyXG4gICAgdGggeyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICAgICAgICAgICAgICAgICBcclxuICAgIHBhZGRpbmc6IDFlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6YnJvd247ICAgICAgIFxyXG4gICAgY29sb3I6IHdoaXRlOyAgICAgICB9ICAgICAgICAgICAgICAgXHJcbiAgICB0ciB7ICAgIFxyXG4gICAgaGVpZ2h0OiAxZW07ICAgIH1cclxuICAgICBcclxuICAgIHRhYmxlIHRyOm50aC1jaGlsZChldmVuKSB7ICAgICAgICAgICBcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTYzLCAxNDMsIDE0Myk7ICAgICB9XHJcbiAgICAgXHJcbiAgICB0YWJsZSB0cjpudGgtY2hpbGQob2RkKSB7ICAgICAgICAgICAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmdyZXk7ICAgICAgXHJcbn1cclxuICAgICAiXX0= */", "body[_ngcontent-%COMP%] {\n        background-color:rgb(220, 236, 238) ;\n        \n    }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.css']
            }]
    }], function () { return [{ type: _covidservice_service__WEBPACK_IMPORTED_MODULE_1__["CovidserviceService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/covidservice.service.ts":
/*!*****************************************!*\
  !*** ./src/app/covidservice.service.ts ***!
  \*****************************************/
/*! exports provided: CovidserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CovidserviceService", function() { return CovidserviceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class CovidserviceService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getContacts() {
        return this.httpClient.get('https://api.rootnet.in/covid19-in/contacts');
    }
    getNotifications() {
        return this.httpClient.get('https://api.rootnet.in/covid19-in/notifications');
    }
    getHospitals() {
        return this.httpClient.get('https://api.rootnet.in/covid19-in/hospitals/beds');
    }
    getColleges() {
        return this.httpClient.get('https://api.rootnet.in/covid19-in/hospitals/medical-colleges');
    }
    getAllLoginIds() {
        return this.httpClient.get('COVID/webapi/myresource/getAllLoginIds');
    }
    regCustomer(customer) {
        console.log(customer);
        return this.httpClient.post('COVID/webapi/myresource/regCustomer/', customer);
    }
    customerLogin(loginId, password) {
        console.log(loginId, password);
        return this.httpClient.get('COVID/webapi/myresource/customerLogin/' + loginId + "/" + password);
    }
}
CovidserviceService.ɵfac = function CovidserviceService_Factory(t) { return new (t || CovidserviceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
CovidserviceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CovidserviceService, factory: CovidserviceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CovidserviceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/customer-page/customer-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/customer-page/customer-page.component.ts ***!
  \**********************************************************/
/*! exports provided: CustomerPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerPageComponent", function() { return CustomerPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class CustomerPageComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    routeToContacts() {
        this.router.navigate(['contact']);
    }
    routeToColleges() {
        this.router.navigate(['colleges']);
    }
    routeToHospitals() {
        this.router.navigate(['hospitals']);
    }
    routeToNotifications() {
        this.router.navigate(['notifications']);
    }
}
CustomerPageComponent.ɵfac = function CustomerPageComponent_Factory(t) { return new (t || CustomerPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
CustomerPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomerPageComponent, selectors: [["app-customer-page"]], decls: 14, vars: 0, consts: [[1, "topnav"], [1, "active", 3, "click"], [3, "click"], [1, "login-container"], ["type", "submit"], ["src", "assets\\image\\hospitals.jpg", "width", "100%", "height", "100%"]], template: function CustomerPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomerPageComponent_Template_a_click_1_listener() { return ctx.routeToContacts(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Contacts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomerPageComponent_Template_a_click_3_listener() { return ctx.routeToHospitals(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Hospitals");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomerPageComponent_Template_a_click_5_listener() { return ctx.routeToNotifications(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Notifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomerPageComponent_Template_a_click_7_listener() { return ctx.routeToColleges(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Colleges");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".topnav[_ngcontent-%COMP%] {\r\n    overflow: hidden;\r\n    background-color:rgb(92, 241, 46);\r\n  }\r\n  \r\n  .topnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    float: left;\r\n    display: block;\r\n    color:white;\r\n    text-align: center;\r\n    padding: 14px 16px;\r\n    text-decoration: none;\r\n    font-size: 17px;\r\n  }\r\n  \r\n  .topnav[_ngcontent-%COMP%]   .login-container[_ngcontent-%COMP%] {\r\n    float: right;\r\n  }\r\n  \r\n  .topnav[_ngcontent-%COMP%]   .login-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    float: right;\r\n    padding: 6px 10px;\r\n    margin-top: 6px;\r\n    margin-right: 16px;\r\n    background-color: #555;\r\n    color: white;\r\n    font-size: 17px;\r\n    border: none;\r\n    cursor: pointer;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXItcGFnZS9jdXN0b21lci1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUlBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlDQUFpQztFQUNuQzs7RUFFQTtJQUNFLFdBQVc7SUFDWCxjQUFjO0lBQ2QsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixlQUFlO0lBQ2YsWUFBWTtJQUNaLGVBQWU7RUFDakIiLCJmaWxlIjoic3JjL2FwcC9jdXN0b21lci1wYWdlL2N1c3RvbWVyLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuXHJcblxyXG4udG9wbmF2IHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYig5MiwgMjQxLCA0Nik7XHJcbiAgfVxyXG4gIFxyXG4gIC50b3BuYXYgYSB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDE2cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC50b3BuYXYgLmxvZ2luLWNvbnRhaW5lciB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgfVxyXG4gIFxyXG4gIC50b3BuYXYgLmxvZ2luLWNvbnRhaW5lciBidXR0b24ge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgcGFkZGluZzogNnB4IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICAiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomerPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-customer-page',
                templateUrl: './customer-page.component.html',
                styleUrls: ['./customer-page.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






const _c0 = ["ngcarousel"];
class HomepageComponent {
    constructor(config, router) {
        this.router = router;
        config.interval = 2000;
        config.wrap = true;
        config.keyboard = false;
        config.pauseOnHover = true;
    }
    slideActivate(ngbSlideEvent) {
        console.log(ngbSlideEvent.source);
        console.log(ngbSlideEvent.paused);
        console.log(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbSlideEventSource"].INDICATOR);
        console.log(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbSlideEventSource"].ARROW_LEFT);
        console.log(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbSlideEventSource"].ARROW_RIGHT);
    }
    ngOnInit() {
        this.images = [{ imagePath: "assets/image/103.jpg" }, { imagePath: "assets/image/104.jpg" }, { imagePath: "assets/image/105.jpg" }, { imagePath: "assets/image/106.jpg" }, { imagePath: "assets/image/107.jpg" }];
    }
    callRegister() {
        this.router.navigate(['register']);
    }
    callLogin() {
        this.router.navigate(['login']);
    }
    // Move to specific slide
    navigateToSlide(item) {
        this.ngCarousel.select(item);
        console.log(item);
    }
    // Move to previous slide
    getToPrev() {
        this.ngCarousel.prev();
    }
    // Move to next slide
    goToNext() {
        this.ngCarousel.next();
    }
    // Pause slide
    stopCarousel() {
        this.ngCarousel.pause();
    }
    // Restart carousel
    restartCarousel() {
        this.ngCarousel.cycle();
    }
}
HomepageComponent.ɵfac = function HomepageComponent_Factory(t) { return new (t || HomepageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarouselConfig"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
HomepageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomepageComponent, selectors: [["app-homepage"]], viewQuery: function HomepageComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.ngCarousel = _t.first);
    } }, decls: 41, vars: 0, consts: [[2, "background-color", "brown"], ["align", "left", 1, "nav"], ["src", "assets\\image\\101.png", "height", "5%", "width", "5%", "id", "101", 1, "nav"], ["align", "right", 1, "login-container"], ["href", "#"], ["src", "assets\\image\\102.png", "id", "102", "alt", "bottle", "height", "20%", "width", "20%", 1, "thumbnails"], [1, "topnav"], ["href", "#home", 1, "active"], ["href", "#about"], ["href", "#contact"], [1, "login-container"], ["type", "submit", 3, "click"], [1, "mySlides"], ["src", "https://www.nuhs.edu.sg/About-NUHS/Newsroom/news-stories/PublishingImages/How%20do%20you%20keep%20yourself%20safe%20from%20COVID%2019%20-%20English%20(Image%20on%20Page).jpg", "width", "33%", "height", "30%"], ["src", "https://pbs.twimg.com/media/ETjd_xgU8AAqgvf.jpg", "width", "33%", "height", "34%"], ["src", "https://images-na.ssl-images-amazon.com/images/I/815LdVMLHpL._AC_SY741_.jpg", "width", "33%", "height", "30%"], ["src", "https://www.galfandberger.com/files/2020/03/virus-prevention-1-1280x720.jpg", "width", "33%", "height", "40%"], ["src", "https://www.sirfnews.com/wp-content/uploads/2020/03/CORONAVIRUS-prevention.jpg", "width", "33%", "height", "40%"], ["src", "https://www.redcross.org/content/dam/redcross/about-us/news/2020/coronavirus-safety-tw.jpg", "width", "33%", "height", "35%"], ["src", "https://s3.amazonaws.com/cache.salvationarmy.org/1015029e-e9a5-4d44-884f-b38cf36dd78f_Covid-19-Health-Advice-preview.jpg", "width", "33%", "height", "35%"], ["src", "https://www.ics-shipping.org/images/default-source/Free-Resources-/covid19-be-informed.png?sfvrsn=0", "width", "33%", "height", "35%"], ["src", "https://www.ics-shipping.org/images/default-source/Free-Resources-/covid-19-shipboard-care-for-people-with-suspected-or-confirmed-covid-19.png?sfvrsn=0", "width", "33%", "height", "35%"], [1, "footer"], ["href", "https://www.pmindia.gov.in/en/?query"], ["src", "assets\\image\\108.jpg", "id", "108", "alt", "bottle", "height", "9%", "width", "8%", 1, "thumbnails"], ["href", "http://meity.gov.in/"], ["src", "assets\\image\\109.jfif", "id", "109", "alt", "bottle", "height", "8%", "width", "8%", 1, "thumbnails"], ["href", "https://www.india.gov.in/"], ["src", "assets\\image\\110.png", "id", "110", "alt", "bottle", "height", "8.5%", "width", "8.5%", 1, "thumbnails"], ["href", "https://self4society.mygov.in/"], ["src", "assets\\image\\111.jfif", "id", "111", "alt", "bottle", "height", "8%", "width", "5.5%", 1, "thumbnails"], ["href", "https://transformingindia.mygov.in/"], ["src", "assets\\image\\112.jfif", "id", "112", "alt", "bottle", "height", "5.5%", "width", "5.5%", 1, "thumbnails"], ["href", "https://swachhbharat.mygov.in/"], ["src", "assets\\image\\113.jfif", "id", "113", "alt", "bottle", "height", "8%", "width", "8%", 1, "thumbnails"]], template: function HomepageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomepageComponent_Template_button_click_14_listener() { return ctx.callRegister(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomepageComponent_Template_button_click_16_listener() { return ctx.callLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["body[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n  }\r\n  \r\n  .nav[_ngcontent-%COMP%] {\r\n    overflow: hidden;\r\n    background-color: green;\r\n  }\r\n  \r\n  .nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    float: left;\r\n    display: block;\r\n    color: black;\r\n    text-align: center;\r\n    padding: 14px 1px;\r\n    text-decoration: none;\r\n    font-size: 17px;\r\n  }\r\n  \r\n  .nav[_ngcontent-%COMP%]   .login-container[_ngcontent-%COMP%] {\r\n    float: right;\r\n    margin-right: 3px;\r\n    \r\n  }\r\n  \r\n  @media screen and (max-width: 400px) {\r\n    .nav[_ngcontent-%COMP%]   .login-container[_ngcontent-%COMP%] {\r\n      float: none;\r\n      } \r\n  }\r\n  \r\n  body[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n  }\r\n  \r\n  .topnav[_ngcontent-%COMP%] {\r\n    overflow: hidden;\r\n    background-color: goldenrod;\r\n  }\r\n  \r\n  .topnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    float: left;\r\n    display: block;\r\n    color: black;\r\n    text-align: center;\r\n    padding: 14px 16px;\r\n    text-decoration: none;\r\n    font-size: 17px;\r\n  }\r\n  \r\n  .topnav[_ngcontent-%COMP%]   .login-container[_ngcontent-%COMP%] {\r\n    float: right;\r\n  }\r\n  \r\n  .topnav[_ngcontent-%COMP%]   .login-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    float: right;\r\n    padding: 6px 10px;\r\n    margin-top: 6px;\r\n    margin-right: 16px;\r\n    background-color: #555;\r\n    color: white;\r\n    font-size: 17px;\r\n    border: none;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  @media screen and (max-width: 600px) {\r\n    .topnav[_ngcontent-%COMP%]   .login-container[_ngcontent-%COMP%] {\r\n      float: none;\r\n      } \r\n  }\r\n  \r\n  .footer[_ngcontent-%COMP%] {\r\n     position: relative;\r\n     left: 0;\r\n     bottom: 0;\r\n     width: 100%;\r\n     background-color: purple;\r\n     color: white;\r\n     text-align: center;\r\n  }\r\n  \r\n  ngb-carousel[_ngcontent-%COMP%] {\r\n    max-width: 700px;\r\n    margin: 50px auto;\r\n}\r\n  \r\n  *[_ngcontent-%COMP%]{\r\n  box-sizing: border-box;\r\n}\r\n  \r\n  \r\n  \r\n  .column[_ngcontent-%COMP%] {\r\n  float: left;\r\n  width: 33.33%;\r\n  padding: 10px;\r\n  height: 300px; \r\n}\r\n  \r\n  .column[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\r\n  width: 33.33%;\r\n  padding: 10px;\r\n  height: 300px;\r\n}\r\n  \r\n  \r\n  \r\n  .row[_ngcontent-%COMP%]:after {\r\n  content: \"\";\r\n  display: table;\r\n  clear: both;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFNBQVM7SUFDVCx5Q0FBeUM7RUFDM0M7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsV0FBVztJQUNYLGNBQWM7SUFDZCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixpQkFBaUI7O0VBRW5COztFQUVBO0lBQ0U7TUFDRSxXQUFXO01BQ1g7RUFDSjs7RUFHQTtJQUNFLFNBQVM7SUFDVCx5Q0FBeUM7RUFDM0M7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsMkJBQTJCO0VBQzdCOztFQUVBO0lBQ0UsV0FBVztJQUNYLGNBQWM7SUFDZCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGVBQWU7SUFDZixZQUFZO0lBQ1osZUFBZTtFQUNqQjs7RUFFQTtJQUNFO01BQ0UsV0FBVztNQUNYO0VBQ0o7O0VBRUE7S0FDRyxrQkFBa0I7S0FDbEIsT0FBTztLQUNQLFNBQVM7S0FDVCxXQUFXO0tBQ1gsd0JBQXdCO0tBQ3hCLFlBQVk7S0FDWixrQkFBa0I7RUFDckI7O0VBSUE7SUFDRSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztFQUdBO0VBQ0Usc0JBQXNCO0FBQ3hCOztFQUVBLDhEQUE4RDs7RUFDOUQ7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLGFBQWE7RUFDYixhQUFhLEVBQUUsOENBQThDO0FBQy9EOztFQUNBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixhQUFhO0FBQ2Y7O0VBRUEsbUNBQW1DOztFQUNuQztFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG4gIFxyXG4gIC5uYXYge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG4gIH1cclxuICBcclxuICAubmF2IGEge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDE0cHggMXB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gIH1cclxuICBcclxuICAubmF2IC5sb2dpbi1jb250YWluZXIge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzcHg7XHJcbiAgICBcclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcclxuICAgIC5uYXYgLmxvZ2luLWNvbnRhaW5lciB7XHJcbiAgICAgIGZsb2F0OiBub25lO1xyXG4gICAgICB9IFxyXG4gIH1cclxuICBcclxuICBcclxuICBib2R5IHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuICBcclxuICAudG9wbmF2IHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkZW5yb2Q7XHJcbiAgfVxyXG4gIFxyXG4gIC50b3BuYXYgYSB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTRweCAxNnB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gIH1cclxuICBcclxuICAudG9wbmF2IC5sb2dpbi1jb250YWluZXIge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gIH1cclxuICBcclxuICAudG9wbmF2IC5sb2dpbi1jb250YWluZXIgYnV0dG9uIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHBhZGRpbmc6IDZweCAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIC50b3BuYXYgLmxvZ2luLWNvbnRhaW5lciB7XHJcbiAgICAgIGZsb2F0OiBub25lO1xyXG4gICAgICB9IFxyXG4gIH1cclxuICBcclxuICAuZm9vdGVyIHtcclxuICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgbGVmdDogMDtcclxuICAgICBib3R0b206IDA7XHJcbiAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogcHVycGxlO1xyXG4gICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG5cclxuXHJcbiAgbmdiLWNhcm91c2VsIHtcclxuICAgIG1heC13aWR0aDogNzAwcHg7XHJcbiAgICBtYXJnaW46IDUwcHggYXV0bztcclxufVxyXG5cclxuXHJcbip7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLyogQ3JlYXRlIHRocmVlIGVxdWFsIGNvbHVtbnMgdGhhdCBmbG9hdHMgbmV4dCB0byBlYWNoIG90aGVyICovXHJcbi5jb2x1bW4ge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHdpZHRoOiAzMy4zMyU7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBoZWlnaHQ6IDMwMHB4OyAvKiBTaG91bGQgYmUgcmVtb3ZlZC4gT25seSBmb3IgZGVtb25zdHJhdGlvbiAqL1xyXG59XHJcbi5jb2x1bW4gLmltZyB7XHJcbiAgd2lkdGg6IDMzLjMzJTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGhlaWdodDogMzAwcHg7XHJcbn1cclxuXHJcbi8qIENsZWFyIGZsb2F0cyBhZnRlciB0aGUgY29sdW1ucyAqL1xyXG4ucm93OmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG4gIGNsZWFyOiBib3RoO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomepageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-homepage',
                templateUrl: './homepage.component.html',
                styleUrls: ['./homepage.component.css']
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarouselConfig"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, { ngCarousel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['ngcarousel', { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/hospitals/hospitals.component.ts":
/*!**************************************************!*\
  !*** ./src/app/hospitals/hospitals.component.ts ***!
  \**************************************************/
/*! exports provided: HospitalsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HospitalsComponent", function() { return HospitalsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _covidservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../covidservice.service */ "./src/app/covidservice.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function HospitalsComponent_tr_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const hospital_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](hospital_r1.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](hospital_r1.ruralHospitals);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](hospital_r1.ruralBeds);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](hospital_r1.urbanHospitals);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](hospital_r1.urbanBeds);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](hospital_r1.totalHospitals);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](hospital_r1.totalBeds);
} }
class HospitalsComponent {
    constructor(service) {
        this.service = service;
    }
    ngOnInit() {
        this.service.getHospitals().subscribe((result) => { this.hospitals = result.data.regional; });
    }
}
HospitalsComponent.ɵfac = function HospitalsComponent_Factory(t) { return new (t || HospitalsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_covidservice_service__WEBPACK_IMPORTED_MODULE_1__["CovidserviceService"])); };
HospitalsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HospitalsComponent, selectors: [["app-hospitals"]], decls: 21, vars: 1, consts: [[1, "container"], ["align", "center", 1, "table", "table-hover"], ["scope", ""], [4, "ngFor", "ngForOf"]], template: function HospitalsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "State");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Rural Hospitals");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Rural Beds");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Urban Hospitals");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Urban Beds");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Total Hospitals");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Total Beds");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, HospitalsComponent_tr_20_Template, 15, 7, "tr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.hospitals);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["table[_ngcontent-%COMP%] {\r\n    font-family: \"Lato\",\"sans-serif\";   }       \r\n    table.one[_ngcontent-%COMP%] {                                  \r\n    margin-bottom: 3em; \r\n    border-collapse:collapse;   }       \r\n    td[_ngcontent-%COMP%] {                       \r\n    text-align: center;     \r\n    width: 10em;                    \r\n    padding: 1em;       }       \r\n    th[_ngcontent-%COMP%] {                             \r\n    text-align: center;                 \r\n    padding: 1em;\r\n    background-color:brown;       \r\n    color: white;       }       \r\n    tr[_ngcontent-%COMP%] {    \r\n    height: 1em;    }       \r\n    table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {           \r\n        background-color: rgb(163, 143, 143);     }       \r\n    table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(odd) {            \r\n    background-color:grey;      \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9zcGl0YWxzL2hvc3BpdGFscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7SUFDSSxnQ0FBZ0MsSUFBSTtJQUNwQztJQUNBLGtCQUFrQjtJQUNsQix3QkFBd0IsSUFBSTtJQUU1QjtJQUNBLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWSxRQUFRO0lBRXBCO0lBQ0Esa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsWUFBWSxRQUFRO0lBQ3BCO0lBQ0EsV0FBVyxLQUFLO0lBRWhCO1FBQ0ksb0NBQW9DLE1BQU07SUFFOUM7SUFDQSxxQkFBcUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9ob3NwaXRhbHMvaG9zcGl0YWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbnRhYmxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkxhdG9cIixcInNhbnMtc2VyaWZcIjsgICB9ICAgICAgIFxyXG4gICAgdGFibGUub25lIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICBtYXJnaW4tYm90dG9tOiAzZW07IFxyXG4gICAgYm9yZGVyLWNvbGxhcHNlOmNvbGxhcHNlOyAgIH0gICBcclxuICAgICBcclxuICAgIHRkIHsgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyAgICAgXHJcbiAgICB3aWR0aDogMTBlbTsgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgcGFkZGluZzogMWVtOyAgICAgICB9ICAgICAgIFxyXG4gICAgIFxyXG4gICAgdGggeyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICAgICAgICAgICAgICAgICBcclxuICAgIHBhZGRpbmc6IDFlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6YnJvd247ICAgICAgIFxyXG4gICAgY29sb3I6IHdoaXRlOyAgICAgICB9ICAgICAgICAgICAgICAgXHJcbiAgICB0ciB7ICAgIFxyXG4gICAgaGVpZ2h0OiAxZW07ICAgIH1cclxuICAgICBcclxuICAgIHRhYmxlIHRyOm50aC1jaGlsZChldmVuKSB7ICAgICAgICAgICBcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTYzLCAxNDMsIDE0Myk7ICAgICB9XHJcbiAgICAgXHJcbiAgICB0YWJsZSB0cjpudGgtY2hpbGQob2RkKSB7ICAgICAgICAgICAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmdyZXk7ICAgICAgXHJcbn1cclxuIl19 */", "body[_ngcontent-%COMP%] {\n        background-color:rgb(220, 236, 238) ;\n        \n    }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HospitalsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-hospitals',
                templateUrl: './hospitals.component.html',
                styleUrls: ['./hospitals.component.css']
            }]
    }], function () { return [{ type: _covidservice_service__WEBPACK_IMPORTED_MODULE_1__["CovidserviceService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _covidservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../covidservice.service */ "./src/app/covidservice.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");





class LoginComponent {
    constructor(router, service) {
        this.router = router;
        this.service = service;
    }
    ngOnInit() {
    }
    loginSubmit(loginForm) {
        this.service.customerLogin(loginForm.loginId, loginForm.password).subscribe((result) => {
            console.log(result), this.customer = result;
            if (this.customer) {
                this.router.navigate(['customer-page']);
            }
            else {
                alert("Invalid Credentials");
            }
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_covidservice_service__WEBPACK_IMPORTED_MODULE_2__["CovidserviceService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 22, vars: 0, consts: [[1, "login-wrapper"], ["novalidate", "", 1, "form-group", 3, "ngSubmit"], ["loginForm", "ngForm"], [1, "form"], [1, "input-group"], ["type", "text", "name", "loginId", "ngModel", "", "placeholder", "login id", 1, "form-control"], ["loginId", "ngModel"], ["for", "loginId"], ["type", "password", "name", "password", "ngModel", "", "placeholder", "password", 1, "form-control"], ["password", "ngModel"], ["for", "password"], ["type", "submit", "value", "Login", 1, "submit-btn"], ["routerLink", "/register"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); return ctx.loginSubmit(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "SignUp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */", "*[_ngcontent-%COMP%] {\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box;\n      }\n\n    body[_ngcontent-%COMP%] {\n        background-image: url(\"assets/image/corona1.jpg\");\n        background-size: cover;\n    }\n    \n    .login-wrapper[_ngcontent-%COMP%] {\n        height: 100vh;\n        width: 100wh;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n    }\n\n    .form[_ngcontent-%COMP%]{\n        position: absolute;\n        width: 100%;\n        bottom:-20%;\n        max-width: 380px;\n        padding: 60px 65px 60px;\n        background-color: rgba(0, 0, 0, 0.842);\n        border-radius: 10px;\n        color: #fff;\n        box-sizing:border-box;\n       transform: translate(-50%,-50%);\n    }\n   \n\n    .form[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        position: absolute;\n        top: -50px;\n        left: calc(50% - 50px);\n        width: 100px;\n        background: rgba(255, 255, 255, 0.8);\n        border-radius: 50%;\n    }\n\n    .form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\n        text-align: center;\n        letter-spacing: 1px;\n        margin-bottom: 2rem;\n        color: #ff652f;\n\n    }\n    .form[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]{\n        position: relative;\n    }\n    .form[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\n        width: 100%;\n        padding: 15px 0;\n        font-size:  1.5rem;\n        letter-spacing: 1px;\n        margin-bottom: 10px;\n        border: none;\n        border-bottom: 1px solid #fff;\n        outline: none;\n        background-color: transparent;\n        color: inherit;\n    }\n\n    .form[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{\n        position: absolute;\n        \n        padding: 10px 0;\n        font-size: 0.5rem;\n        pointer-events: none;\n        transition: .3s ease-out;\n    }\n    .form[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    + label[_ngcontent-%COMP%], .form[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:valid    + label[_ngcontent-%COMP%]{\n        transform: translateY(-18px);\n        color: #ff652f;\n        font-size: .8rem;\n    }\n\n    .submit-btn[_ngcontent-%COMP%]{\n        display: block;\n        margin-left: auto;\n        border: none;\n        outline: none;\n        background: #ff652f;\n        font-size: 1rem;\n        text-transform: uppercase;\n        letter-spacing: 1px;\n        padding: 10px 20px;\n        border-radius: 5px;\n        cursor:pointer;\n\n    }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _covidservice_service__WEBPACK_IMPORTED_MODULE_2__["CovidserviceService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/notifications/notifications.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/notifications/notifications.component.ts ***!
  \**********************************************************/
/*! exports provided: NotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function() { return NotificationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _covidservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../covidservice.service */ "./src/app/covidservice.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function NotificationsComponent_tr_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const notification_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](3, 4, notification_r1.title, 0, 10));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 8, notification_r1.title, 11));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", notification_r1.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](notification_r1.link);
} }
class NotificationsComponent {
    constructor(service) {
        this.service = service;
    }
    ngOnInit() {
        this.service.getNotifications().subscribe((result) => { this.notifications = result.data.notifications; });
    }
}
NotificationsComponent.ɵfac = function NotificationsComponent_Factory(t) { return new (t || NotificationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_covidservice_service__WEBPACK_IMPORTED_MODULE_1__["CovidserviceService"])); };
NotificationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotificationsComponent, selectors: [["app-notifications"]], decls: 13, vars: 1, consts: [[1, "container"], ["align", "center", 1, "table", "table-hover"], ["scope", ""], [4, "ngFor", "ngForOf"], [3, "href"]], template: function NotificationsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Notification Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, NotificationsComponent_tr_12_Template, 10, 11, "tr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.notifications);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["SlicePipe"]], styles: ["table[_ngcontent-%COMP%] {\r\n    font-family: \"Lato\",\"sans-serif\";   }       \r\n    table.one[_ngcontent-%COMP%] {                                  \r\n    margin-bottom: 3em; \r\n    border-collapse:collapse;   }       \r\n    td[_ngcontent-%COMP%] {                       \r\n    text-align: center;     \r\n    width: 10em;                    \r\n    padding: 1em;       }       \r\n    th[_ngcontent-%COMP%] {                             \r\n    text-align: center;                 \r\n    padding: 1em;\r\n    background-color:brown;       \r\n    color: white;       }       \r\n    tr[_ngcontent-%COMP%] {    \r\n    height: 1em;    }       \r\n    table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {           \r\n        background-color: rgb(163, 143, 143);     }       \r\n    table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(odd) {            \r\n    background-color:grey;      \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90aWZpY2F0aW9ucy9ub3RpZmljYXRpb25zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQ0FBZ0MsSUFBSTtJQUNwQztJQUNBLGtCQUFrQjtJQUNsQix3QkFBd0IsSUFBSTtJQUU1QjtJQUNBLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWSxRQUFRO0lBRXBCO0lBQ0Esa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsWUFBWSxRQUFRO0lBQ3BCO0lBQ0EsV0FBVyxLQUFLO0lBRWhCO1FBQ0ksb0NBQW9DLE1BQU07SUFFOUM7SUFDQSxxQkFBcUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkxhdG9cIixcInNhbnMtc2VyaWZcIjsgICB9ICAgICAgIFxyXG4gICAgdGFibGUub25lIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICBtYXJnaW4tYm90dG9tOiAzZW07IFxyXG4gICAgYm9yZGVyLWNvbGxhcHNlOmNvbGxhcHNlOyAgIH0gICBcclxuICAgICBcclxuICAgIHRkIHsgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyAgICAgXHJcbiAgICB3aWR0aDogMTBlbTsgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgcGFkZGluZzogMWVtOyAgICAgICB9ICAgICAgIFxyXG4gICAgIFxyXG4gICAgdGggeyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICAgICAgICAgICAgICAgICBcclxuICAgIHBhZGRpbmc6IDFlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6YnJvd247ICAgICAgIFxyXG4gICAgY29sb3I6IHdoaXRlOyAgICAgICB9ICAgICAgICAgICAgICAgXHJcbiAgICB0ciB7ICAgIFxyXG4gICAgaGVpZ2h0OiAxZW07ICAgIH1cclxuICAgICBcclxuICAgIHRhYmxlIHRyOm50aC1jaGlsZChldmVuKSB7ICAgICAgICAgICBcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTYzLCAxNDMsIDE0Myk7ICAgICB9XHJcbiAgICAgXHJcbiAgICB0YWJsZSB0cjpudGgtY2hpbGQob2RkKSB7ICAgICAgICAgICAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmdyZXk7ICAgICAgXHJcbn1cclxuICAgICAiXX0= */", "body[_ngcontent-%COMP%] {\n        background-color:rgb(220, 236, 238) ;\n        \n    }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-notifications',
                templateUrl: './notifications.component.html',
                styleUrls: ['./notifications.component.css']
            }]
    }], function () { return [{ type: _covidservice_service__WEBPACK_IMPORTED_MODULE_1__["CovidserviceService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _covidservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../covidservice.service */ "./src/app/covidservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function RegisterComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Enter the valid number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Enter the valid mailId");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password and Confirm password doesn't match");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class RegisterComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
        this.customer = { custName: '', mblNo: '', email: '', gender: '', age: '', loginId: '', password: '' };
    }
    ngOnInit() {
        this.service.getAllLoginIds().subscribe((result) => { console.log(result); this.loginIds = result; });
    }
    register(registerForm) {
        this.service.regCustomer(this.customer).subscribe((result) => { console.log(result); });
        this.router.navigate(['login']);
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_covidservice_service__WEBPACK_IMPORTED_MODULE_1__["CovidserviceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 66, vars: 14, consts: [["charset", "UTF-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], ["http-equiv", "X-UA-Compatible", "content", "ie=edge"], ["rel", "stylesheet"], [1, "register-wrapper"], ["novalidate", "", 1, "form-group", 3, "ngSubmit"], ["registerForm", "ngForm"], [1, "form"], [1, "input-group"], ["type", "text", "name", "custName", "required", "", 3, "ngModel", "ngModelChange"], ["for", "custName"], ["type", "tel", "name", "mblNo", "pattern", "[0-9]{10}", "required", "", 3, "ngModel", "ngModelChange"], ["cpass2", "ngModel"], ["for", "mblNo"], [1, "text-danger"], [4, "ngIf"], ["type", "email", "name", "email", "pattern", "[^ @]*@[^ @]*", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["cpass1", "ngModel"], ["for", "email"], ["name", "gender", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "gender", "required", "", 3, "ngModel", "ngModelChange"], ["for", "gender"], ["type", "number", "name", "age", "required", "", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "loginId", "placeholder", "login id", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "loginId"], ["type", "password", "name", "password", "placeholder", "password", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "password"], ["type", "password", "name", "confirmPassword", "placeholder", " Confirm Password", "required", "", 1, "form-control", 3, "ngModel", "pattern", "ngModelChange"], ["cpass", "ngModel"], ["for", "Confirm Password"], ["type", "submit", "value", "Register", 1, "submit-btn", 3, "disabled"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "meta", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "link", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12); return _r0.form.valid && ctx.register(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Enter Name: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_18_listener($event) { return ctx.customer.custName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Enter Mobile: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_23_listener($event) { return ctx.customer.mblNo = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, RegisterComponent_div_28_Template, 2, 0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Enter Mail Id: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_31_listener($event) { return ctx.customer.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, RegisterComponent_div_35_Template, 2, 0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Enter gender: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "select", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_select_ngModelChange_38_listener($event) { return ctx.customer.gender = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Male");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Female");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_43_listener($event) { return ctx.customer.gender = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Enter age: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_47_listener($event) { return ctx.customer.age = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Enter Login Id: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_52_listener($event) { return ctx.customer.loginId = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Enter Password: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_56_listener($event) { return ctx.customer.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " Enter Confirm Password: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "input", 27, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_60_listener($event) { return ctx.confirmPassword = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, RegisterComponent_div_64_Template, 2, 0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.customer.custName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.customer.mblNo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.touched && (_r1.errors == null ? null : _r1.errors.pattern));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.customer.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.touched && (_r3.errors == null ? null : _r3.errors.pattern));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.customer.gender);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.customer.gender);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.customer.age);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.customer.loginId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.customer.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("pattern", ctx.customer.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.confirmPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.touched && (_r5.errors == null ? null : _r5.errors.pattern));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["PatternValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */", "*[_ngcontent-%COMP%] {\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box;\n\n    }\n\n    body[_ngcontent-%COMP%] {\n        background-image: url(\"assets/image/register.jfif\");\n        background-size: cover;\n    }\n\n    .register-wrapper[_ngcontent-%COMP%] {\n        height: 100vh;\n        width: 100wh;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n    }\n\n    .form[_ngcontent-%COMP%] {\n        position: absolute;\n        width: 100%;\n        max-width: 380px;\n        padding: 25px 90px 3px;\n        background:rgba(0, 0, 0, 0.842);\n        border-radius: 10px;\n        color: #fff;\n        box-sizing: border-box;\n        transform: translate(-50%, -50%);\n    }\n\n\n\n\n    .form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n        text-align: center;\n        letter-spacing: 1px;\n        margin-bottom: 2rem;\n        color: #ff8801;\n\n    }\n\n    .form[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%] {\n        position: relative;\n    }\n\n    .form[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n        width: 100%;\n        padding: 2px 0;\n        font-size: 1.5rem;\n        letter-spacing: 1px;\n        margin-bottom: 10px;\n        border: none;\n        border-bottom: 1px solid #fff;\n        outline: none;\n        background-color: transparent;\n        color: inherit;\n    }\n\n    .form[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n        position: absolute;\n        top: 0;\n        left: 0;\n        padding: 10px 0;\n        font-size: 0.5rem;\n        pointer-events: none;\n        transition: .3s ease-out;\n    }\n\n    .form[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus + label[_ngcontent-%COMP%], .form[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:valid + label[_ngcontent-%COMP%] {\n        transform: translateY(-18px);\n        color: #ff652f;\n        font-size: .8rem;\n    }\n\n    .submit-btn[_ngcontent-%COMP%] {\n        display: block;\n        margin-left: auto;\n        border: none;\n        outline: none;\n        background: #ff652f;\n        font-size: 1rem;\n        text-transform: uppercase;\n        letter-spacing: 1px;\n        padding: 10px 20px;\n        border-radius: 5px;\n        cursor: pointer;\n\n    }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.css']
            }]
    }], function () { return [{ type: _covidservice_service__WEBPACK_IMPORTED_MODULE_1__["CovidserviceService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/searchfilter.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/searchfilter.pipe.ts ***!
  \**************************************/
/*! exports provided: SearchfilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchfilterPipe", function() { return SearchfilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SearchfilterPipe {
    transform(Colleges, searchValue) {
        if (!Colleges || !searchValue) {
            return Colleges;
        }
        return Colleges.filter(college => college.state.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) /*||
                                          college.ownership.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())*/);
    }
}
SearchfilterPipe.ɵfac = function SearchfilterPipe_Factory(t) { return new (t || SearchfilterPipe)(); };
SearchfilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "searchfilter", type: SearchfilterPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchfilterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'searchfilter'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\angular\covid\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map