(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-page-home-page-module"],{

/***/ "./src/app/home-page/container/home-page.component.ts":
/*!************************************************************!*\
  !*** ./src/app/home-page/container/home-page.component.ts ***!
  \************************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HomePageComponent {
    constructor() { }
    ngOnInit() { }
}
HomePageComponent.ɵfac = function HomePageComponent_Factory(t) { return new (t || HomePageComponent)(); };
HomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomePageComponent, selectors: [["app-home-page"]], decls: 2, vars: 0, consts: [[1, "cv-container"], ["src", "assets/CV.jpg", "alt", "portfolio", 1, "portfolio"]], template: function HomePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".cv-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.cv-container[_ngcontent-%COMP%]   .portfolio[_ngcontent-%COMP%] {\n  max-width: 90vw;\n  margin-top: 10vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wYWdlL2NvbnRhaW5lci9ob21lLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNEO0FBQ0M7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtcGFnZS9jb250YWluZXIvaG9tZS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN2LWNvbnRhaW5lciB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXG5cdC5wb3J0Zm9saW8ge1xuXHRcdG1heC13aWR0aDogOTB2dztcblx0XHRtYXJnaW4tdG9wOiAxMHZoO1xuXHR9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-home-page",
                templateUrl: "./home-page.component.html",
                styleUrls: ["./home-page.component.scss"],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/home-page/home-page-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/home-page/home-page-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _container_home_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./container/home-page.component */ "./src/app/home-page/container/home-page.component.ts");





const routes = [
    {
        path: "",
        component: _container_home_page_component__WEBPACK_IMPORTED_MODULE_2__["HomePageComponent"],
        children: [
            {
                path: "login",
                loadChildren: () => __webpack_require__.e(/*! import() | login-page-login-page-module */ "login-page-login-page-module").then(__webpack_require__.bind(null, /*! ../login-page/login-page.module */ "./src/app/login-page/login-page.module.ts")).then((m) => m.LoginPageModule),
            },
        ],
    },
];
class HomePageRoutingModule {
}
HomePageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomePageRoutingModule });
HomePageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomePageRoutingModule_Factory(t) { return new (t || HomePageRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomePageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomePageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/home-page/home-page.module.ts":
/*!***********************************************!*\
  !*** ./src/app/home-page/home-page.module.ts ***!
  \***********************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _home_page_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-page-routing.module */ "./src/app/home-page/home-page-routing.module.ts");
/* harmony import */ var _shared_modules_custom_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/modules/custom-material.module */ "./src/app/shared/modules/custom-material.module.ts");
/* harmony import */ var _container_home_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./container/home-page.component */ "./src/app/home-page/container/home-page.component.ts");
/* harmony import */ var _guards_home_page_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./guards/home-page.guard */ "./src/app/home-page/guards/home-page.guard.ts");







class HomePageModule {
}
HomePageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomePageModule });
HomePageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomePageModule_Factory(t) { return new (t || HomePageModule)(); }, providers: [_guards_home_page_guard__WEBPACK_IMPORTED_MODULE_5__["HomePageGuard"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _home_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomePageRoutingModule"],
            _shared_modules_custom_material_module__WEBPACK_IMPORTED_MODULE_3__["CustomMaterialModule"],
            _home_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomePageRoutingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomePageModule, { declarations: [_container_home_page_component__WEBPACK_IMPORTED_MODULE_4__["HomePageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _home_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomePageRoutingModule"],
        _shared_modules_custom_material_module__WEBPACK_IMPORTED_MODULE_3__["CustomMaterialModule"],
        _home_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomePageRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomePageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_container_home_page_component__WEBPACK_IMPORTED_MODULE_4__["HomePageComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _home_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomePageRoutingModule"],
                    _shared_modules_custom_material_module__WEBPACK_IMPORTED_MODULE_3__["CustomMaterialModule"],
                    _home_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomePageRoutingModule"],
                ],
                providers: [_guards_home_page_guard__WEBPACK_IMPORTED_MODULE_5__["HomePageGuard"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=home-page-home-page-module-es2015.js.map