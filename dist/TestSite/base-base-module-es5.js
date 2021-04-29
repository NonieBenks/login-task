(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["base-base-module"], {
    /***/
    "./src/app/base/base-routing.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/base/base-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: BaseRoutingModule */

    /***/
    function srcAppBaseBaseRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BaseRoutingModule", function () {
        return BaseRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _home_page_guards_home_page_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../home-page/guards/home-page.guard */
      "./src/app/home-page/guards/home-page.guard.ts");
      /* harmony import */


      var _container_base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./container/base.component */
      "./src/app/base/container/base.component.ts");

      var routes = [{
        path: "",
        component: _container_base_component__WEBPACK_IMPORTED_MODULE_4__["BaseComponent"],
        children: [{
          path: "login",
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | login-page-login-page-module */
            "login-page-login-page-module").then(__webpack_require__.bind(null,
            /*! ../login-page/login-page.module */
            "./src/app/login-page/login-page.module.ts")).then(function (m) {
              return m.LoginPageModule;
            });
          }
        }, {
          path: "home",
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | home-page-home-page-module */
            "home-page-home-page-module").then(__webpack_require__.bind(null,
            /*! ../home-page/home-page.module */
            "./src/app/home-page/home-page.module.ts")).then(function (m) {
              return m.HomePageModule;
            });
          },
          canActivate: [_home_page_guards_home_page_guard__WEBPACK_IMPORTED_MODULE_3__["HomePageGuard"]]
        }, {
          path: "",
          redirectTo: "login"
        }, {
          path: "**",
          redirectTo: "login"
        }]
      }];

      var BaseRoutingModule = function BaseRoutingModule() {
        _classCallCheck(this, BaseRoutingModule);
      };

      BaseRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: BaseRoutingModule
      });
      BaseRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function BaseRoutingModule_Factory(t) {
          return new (t || BaseRoutingModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BaseRoutingModule, {
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BaseRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/base/base.module.ts":
    /*!*************************************!*\
      !*** ./src/app/base/base.module.ts ***!
      \*************************************/

    /*! exports provided: BaseModule */

    /***/
    function srcAppBaseBaseModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BaseModule", function () {
        return BaseModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _toolbar_container_toolbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../toolbar/container/toolbar.component */
      "./src/app/toolbar/container/toolbar.component.ts");
      /* harmony import */


      var _container_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./container/base.component */
      "./src/app/base/container/base.component.ts");
      /* harmony import */


      var _base_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./base-routing.module */
      "./src/app/base/base-routing.module.ts");
      /* harmony import */


      var _shared_modules_custom_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../shared/modules/custom-material.module */
      "./src/app/shared/modules/custom-material.module.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

      var BaseModule = function BaseModule() {
        _classCallCheck(this, BaseModule);
      };

      BaseModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: BaseModule
      });
      BaseModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function BaseModule_Factory(t) {
          return new (t || BaseModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _base_routing_module__WEBPACK_IMPORTED_MODULE_4__["BaseRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _shared_modules_custom_material_module__WEBPACK_IMPORTED_MODULE_5__["CustomMaterialModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BaseModule, {
          declarations: [_toolbar_container_toolbar_component__WEBPACK_IMPORTED_MODULE_2__["ToolbarComponent"], _container_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _base_routing_module__WEBPACK_IMPORTED_MODULE_4__["BaseRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _shared_modules_custom_material_module__WEBPACK_IMPORTED_MODULE_5__["CustomMaterialModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BaseModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_toolbar_container_toolbar_component__WEBPACK_IMPORTED_MODULE_2__["ToolbarComponent"], _container_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _base_routing_module__WEBPACK_IMPORTED_MODULE_4__["BaseRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _shared_modules_custom_material_module__WEBPACK_IMPORTED_MODULE_5__["CustomMaterialModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/base/container/base.component.ts":
    /*!**************************************************!*\
      !*** ./src/app/base/container/base.component.ts ***!
      \**************************************************/

    /*! exports provided: BaseComponent */

    /***/
    function srcAppBaseContainerBaseComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BaseComponent", function () {
        return BaseComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _toolbar_container_toolbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../toolbar/container/toolbar.component */
      "./src/app/toolbar/container/toolbar.component.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var BaseComponent = /*#__PURE__*/function () {
        function BaseComponent() {
          _classCallCheck(this, BaseComponent);
        }

        _createClass(BaseComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return BaseComponent;
      }();

      BaseComponent.ɵfac = function BaseComponent_Factory(t) {
        return new (t || BaseComponent)();
      };

      BaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: BaseComponent,
        selectors: [["app-base"]],
        decls: 2,
        vars: 0,
        template: function BaseComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-toolbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
          }
        },
        directives: [_toolbar_container_toolbar_component__WEBPACK_IMPORTED_MODULE_1__["ToolbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jhc2UvY29udGFpbmVyL2Jhc2UuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BaseComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-base',
            templateUrl: './base.component.html',
            styleUrls: ['./base.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/home-page/guards/home-page.guard.ts":
    /*!*****************************************************!*\
      !*** ./src/app/home-page/guards/home-page.guard.ts ***!
      \*****************************************************/

    /*! exports provided: HomePageGuard */

    /***/
    function srcAppHomePageGuardsHomePageGuardTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageGuard", function () {
        return HomePageGuard;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _shared_services_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../shared/services/account.service */
      "./src/app/shared/services/account.service.ts");

      var HomePageGuard = /*#__PURE__*/function () {
        function HomePageGuard(router, accountService) {
          _classCallCheck(this, HomePageGuard);

          this.router = router;
          this.accountService = accountService;
        }

        _createClass(HomePageGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            if (this.accountService.loggedIn) {
              return true;
            }

            return false;
          }
        }]);

        return HomePageGuard;
      }();

      HomePageGuard.ɵfac = function HomePageGuard_Factory(t) {
        return new (t || HomePageGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"]));
      };

      HomePageGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: HomePageGuard,
        factory: HomePageGuard.ɵfac,
        providedIn: "root"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomePageGuard, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: "root"
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _shared_services_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/shared/services/account.service.ts":
    /*!****************************************************!*\
      !*** ./src/app/shared/services/account.service.ts ***!
      \****************************************************/

    /*! exports provided: AccountService */

    /***/
    function srcAppSharedServicesAccountServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountService", function () {
        return AccountService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var AccountService = /*#__PURE__*/function () {
        function AccountService() {
          _classCallCheck(this, AccountService);

          this.loggedIn = false;
          this.wrongValueError = "";
        }

        _createClass(AccountService, [{
          key: "login",
          value: function login(username, password) {
            if (username === "test" && password === "test") {
              this.loggedIn = true;
              this.wrongValueError = "";
              return true;
            }

            this.loggedIn = false;
            this.wrongValueError = "Wrong login or password";
          }
        }]);

        return AccountService;
      }();

      AccountService.ɵfac = function AccountService_Factory(t) {
        return new (t || AccountService)();
      };

      AccountService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AccountService,
        factory: AccountService.ɵfac,
        providedIn: "root"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: "root"
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/toolbar/container/toolbar.component.ts":
    /*!********************************************************!*\
      !*** ./src/app/toolbar/container/toolbar.component.ts ***!
      \********************************************************/

    /*! exports provided: ToolbarComponent */

    /***/
    function srcAppToolbarContainerToolbarComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function () {
        return ToolbarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_shared_services_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/services/account.service */
      "./src/app/shared/services/account.service.ts");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/menu */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

      function ToolbarComponent_button_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "TEST.PORTFOLIO"));
        }
      }

      function ToolbarComponent_button_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ToolbarComponent_button_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarComponent_button_3_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "logout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ToolbarComponent_button_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarComponent_button_9_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var languageItem_r7 = ctx.$implicit;

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r8.useLanguage(languageItem_r7.code);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var languageItem_r7 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, languageItem_r7.title), " ");
        }
      }

      var ToolbarComponent = /*#__PURE__*/function () {
        function ToolbarComponent(router, accountService, translate) {
          _classCallCheck(this, ToolbarComponent);

          this.router = router;
          this.accountService = accountService;
          this.translate = translate;
          this.languages = [{
            title: "Українська",
            code: "ua"
          }, {
            title: "English",
            code: "en"
          }, {
            title: "Française",
            code: "fr"
          }, {
            title: "Русский",
            code: "ru"
          }];
          translate.addLangs(["en", "fr", "ru", "ua"]);
          translate.setDefaultLang("fr");
          translate.use("en");
        }

        _createClass(ToolbarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "logout",
          value: function logout() {
            this.accountService.loggedIn = false;
            this.router.navigate(["/login"]);
          }
        }, {
          key: "useLanguage",
          value: function useLanguage(language) {
            this.translate.use(language);
          }
        }]);

        return ToolbarComponent;
      }();

      ToolbarComponent.ɵfac = function ToolbarComponent_Factory(t) {
        return new (t || ToolbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]));
      };

      ToolbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ToolbarComponent,
        selectors: [["app-toolbar"]],
        decls: 10,
        vars: 5,
        consts: [["mat-icon-button", "", "class", "home-icon", "aria-label", "Example icon-button with menu icon", "routerLink", "/home", 4, "ngIf"], ["mat-icon-button", "", "aria-label", "Example icon-button with menu icon", "routerLink", "/login", 4, "ngIf"], ["mat-icon-button", "", "aria-label", "Example icon-button with heart icon", 3, "click", 4, "ngIf"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], [1, "lang-menu"], ["menu", "matMenu"], ["mat-menu-item", "", "class", "lang-btn", 3, "click", 4, "ngFor", "ngForOf"], ["mat-icon-button", "", "aria-label", "Example icon-button with menu icon", "routerLink", "/home", 1, "home-icon"], [1, "example-spacer"], ["mat-icon-button", "", "aria-label", "Example icon-button with menu icon", "routerLink", "/login"], ["mat-icon-button", "", "aria-label", "Example icon-button with heart icon", 3, "click"], ["mat-menu-item", "", 1, "lang-btn", 3, "click"]],
        template: function ToolbarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ToolbarComponent_button_1_Template, 5, 3, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ToolbarComponent_button_2_Template, 3, 0, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ToolbarComponent_button_3_Template, 3, 0, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "language");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-menu", 4, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ToolbarComponent_button_9_Template, 3, 3, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.accountService.loggedIn);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.accountService.loggedIn);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.accountService.loggedIn);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.languages);
          }
        },
        directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbar"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["_MatMenu"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuItem"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]],
        styles: ["mat-toolbar[_ngcontent-%COMP%] {\n  width: auto;\n  height: auto;\n  margin-left: 50px;\n  position: fixed;\n  border-bottom-right-radius: 10px;\n  border-bottom-left-radius: 10px;\n  background: #fcddf2;\n  color: #242038;\n}\nmat-toolbar[_ngcontent-%COMP%]   .home-icon[_ngcontent-%COMP%] {\n  width: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9vbGJhci9jb250YWluZXIvdG9vbGJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSwrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUNEO0FBQUM7RUFDQyxXQUFBO0FBRUYiLCJmaWxlIjoic3JjL2FwcC90b29sYmFyL2NvbnRhaW5lci90b29sYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LXRvb2xiYXIge1xuXHR3aWR0aDogYXV0bztcblx0aGVpZ2h0OiBhdXRvO1xuXHRtYXJnaW4tbGVmdDogNTBweDtcblx0cG9zaXRpb246IGZpeGVkO1xuXHRib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcblx0Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcblx0YmFja2dyb3VuZDogI2ZjZGRmMjtcblx0Y29sb3I6ICMyNDIwMzg7XG5cdC5ob21lLWljb24ge1xuXHRcdHdpZHRoOiBhdXRvO1xuXHR9XG59XG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToolbarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-toolbar",
            templateUrl: "./toolbar.component.html",
            styleUrls: ["./toolbar.component.scss"]
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: src_app_shared_services_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"]
          }, {
            type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]
          }];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=base-base-module-es5.js.map