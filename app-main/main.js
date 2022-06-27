(self["webpackChunkapp_main"] = self["webpackChunkapp_main"] || []).push([["main"],{

/***/ 6331:
/*!*********************************************************!*\
  !*** ./projects/app-main/src/app/app-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9031);
/* harmony import */ var _ui_main_main_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/main/main.component */ 114);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7454);




const routes = [{ path: '', component: _ui_main_main_component__WEBPACK_IMPORTED_MODULE_0__.MainComponent }];
class AppRoutingModule {
    static ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
    static ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
    static ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
}
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 5840:
/*!****************************************************!*\
  !*** ./projects/app-main/src/app/app.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_jessica_jessica_src_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9369);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4491);
/* harmony import */ var toolbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! toolbox */ 5486);
/* harmony import */ var _util_translate_all_lang_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/translate/all-lang.json */ 4074);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7454);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 4539);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9031);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 5613);











function AppComponent_option_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const lang_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", lang_r2)("selected", lang_r2 == ctx_r1.translate.currentLang);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", lang_r2, " ");
  }
}

class AppComponent {
  translate;
  translateEx;
  title = 'app-main';

  constructor(translate, translateEx) {
    this.translate = translate;
    this.translateEx = translateEx;
    translate.addLangs(_util_translate_all_lang_json__WEBPACK_IMPORTED_MODULE_1__);
    translate.setDefaultLang('en');
    this.changeLanguage(navigator.language);
  }

  changeLanguage(language) {
    var _this = this;

    return (0,_home_runner_work_jessica_jessica_src_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const selectedLang = _this.translateEx.extractLanguage(language);

      const locale = yield __webpack_require__(7386)("./" + selectedLang);
      (0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.registerLocaleData)(locale.default, selectedLang);
      const cldrLocale = yield __webpack_require__(7995)("./" + selectedLang + "/numbers.json");

      _this.translateEx.Globalize.load(cldrLocale.default);

      _this.translate.use(selectedLang); // Subscribers to onLangChange may be called before or after the next
      // line.


      _this.translateEx.language = selectedLang;
    })();
  }

  static ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](toolbox__WEBPACK_IMPORTED_MODULE_5__.TranslateExService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([toolbox__WEBPACK_IMPORTED_MODULE_5__.TranslateExService, {
      provide: 'languages',
      useValue: _util_translate_all_lang_json__WEBPACK_IMPORTED_MODULE_1__
    }])],
    decls: 8,
    vars: 4,
    consts: [["for", "language"], ["id", "language", 3, "change"], ["langSelect", ""], [3, "value", "selected", 4, "ngFor", "ngForOf"], [3, "value", "selected"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "select", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function AppComponent_Template_select_change_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);

          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);

          return ctx.changeLanguage(_r0.value);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, AppComponent_option_7_Template, 2, 3, "option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 2, "ROOT.LANGUAGE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.translate.getLangs());
      }
    },
    directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgSelectMultipleOption"]],
    pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe],
    styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"]
  });
}

/***/ }),

/***/ 4815:
/*!*************************************************!*\
  !*** ./projects/app-main/src/app/app.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule),
/* harmony export */   "createTranslateLoader": () => (/* binding */ createTranslateLoader)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 9388);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 5613);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 7349);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 4539);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 6331);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5840);
/* harmony import */ var _ui_main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/main/main.component */ 114);
/* harmony import */ var jessica__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jessica */ 5611);
/* harmony import */ var toolbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! toolbox */ 5486);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7454);
/* eslint-disable max-len */











/* eslint-enable max-len */
function createTranslateLoader(http) {
    return new toolbox__WEBPACK_IMPORTED_MODULE_3__.MultiTranslateHttpLoader(http, [
        { prefix: './assets/i18n/', suffix: '.json' },
        { prefix: './assets/i18n/jessica-', suffix: '.json' }
    ]);
}
class AppModule {
    static ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
    static ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
    static ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [], imports: [[
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule,
                _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
                jessica__WEBPACK_IMPORTED_MODULE_7__.LibJessicaModule,
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule.forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateLoader,
                        useFactory: createTranslateLoader,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient]
                    },
                    defaultLanguage: 'en'
                }),
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule
            ]] });
}
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _ui_main_main_component__WEBPACK_IMPORTED_MODULE_2__.MainComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        jessica__WEBPACK_IMPORTED_MODULE_7__.LibJessicaModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule] }); })();


/***/ }),

/***/ 114:
/*!*************************************************************!*\
  !*** ./projects/app-main/src/app/ui/main/main.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainComponent": () => (/* binding */ MainComponent)
/* harmony export */ });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es */ 8348);
/* harmony import */ var jessica__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jessica */ 5611);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7454);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 4539);
/* harmony import */ var toolbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! toolbox */ 5486);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 5613);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4491);








class MainComponent {
    calc;
    translate;
    translateEx;
    fromBuilder;
    result;
    form;
    _lang;
    constructor(calc, translate, translateEx, fromBuilder) {
        this.calc = calc;
        this.translate = translate;
        this.translateEx = translateEx;
        this.fromBuilder = fromBuilder;
        this.form = this.fromBuilder.group({
            child: ['']
        });
        this.translate.onLangChange
            // Convert from this.translateEx.language to event.lang
            .subscribe((event) => {
            if (this._lang === undefined) {
                this._lang = event.lang;
                return;
            }
            if (this.form.controls.child.value === '') {
                return;
            }
            const formCalcStr = (0,lodash_es__WEBPACK_IMPORTED_MODULE_0__["default"])(this.form.controls.child.value);
            this.translateEx.i18nStringChangeLocale(formCalcStr, new jessica__WEBPACK_IMPORTED_MODULE_1__.MeyerhofCalcI18n(), this._lang, event.lang);
            const formCalcNum = formCalcStr;
            this.form.controls.child.setValue(formCalcNum);
            this._lang = event.lang;
        });
    }
    compute(newItem) {
        const formCalcStr = (0,lodash_es__WEBPACK_IMPORTED_MODULE_0__["default"])(newItem);
        this.translateEx.i18nStringToNumber(formCalcStr, new jessica__WEBPACK_IMPORTED_MODULE_1__.MeyerhofCalcI18n(), this.translateEx.numberParser);
        const formCalcNum = formCalcStr;
        this.result = this.calc.compute(formCalcNum.meyerhof);
    }
    static ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](jessica__WEBPACK_IMPORTED_MODULE_1__.MeyerhofCalcService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](toolbox__WEBPACK_IMPORTED_MODULE_4__.TranslateExService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder)); };
    static ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 8, vars: 14, consts: [[3, "formGroup"], ["ngDefaultControl", "", "formControlName", "child", 3, "changeEvent"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "form", 0)(3, "lib-meyerhof-calc", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("changeEvent", function MainComponent_Template_lib_meyerhof_calc_changeEvent_3_listener($event) { return ctx.compute($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "number");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "number");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 4, "HOME.TITLE"), "\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" Form Values: qref: ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](6, 6, ctx.result == null ? null : ctx.result.qref, undefined, ctx.translateEx.language), ", b': ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](7, 10, ctx.result == null ? null : ctx.result.b_, undefined, ctx.translateEx.language), "\n");
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, jessica__WEBPACK_IMPORTED_MODULE_1__.MeyerhofCalcComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DecimalPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluLmNvbXBvbmVudC5jc3MifQ== */"] });
}


/***/ }),

/***/ 1783:
/*!***********************************************************!*\
  !*** ./projects/app-main/src/environments/environment.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
    production: false
};


/***/ }),

/***/ 1209:
/*!***************************************!*\
  !*** ./projects/app-main/src/main.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 7349);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7454);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 4815);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 1783);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch((err) => console.error(err));


/***/ }),

/***/ 7386:
/*!*************************************************************************************************************************!*\
  !*** ./projects/app-main/node_modules/@angular/common/locales/ lazy ^\.\/.*$ include: (en%7Cfr)\.mjs$ namespace object ***!
  \*************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./en": [
		1545,
		"projects_app-main_node_modules_angular_common_locales_en_mjs"
	],
	"./en.mjs": [
		1545,
		"projects_app-main_node_modules_angular_common_locales_en_mjs"
	],
	"./extra/en": [
		3741,
		"projects_app-main_node_modules_angular_common_locales_extra_en_mjs"
	],
	"./extra/en.mjs": [
		3741,
		"projects_app-main_node_modules_angular_common_locales_extra_en_mjs"
	],
	"./extra/fr": [
		2994,
		"projects_app-main_node_modules_angular_common_locales_extra_fr_mjs"
	],
	"./extra/fr.mjs": [
		2994,
		"projects_app-main_node_modules_angular_common_locales_extra_fr_mjs"
	],
	"./fr": [
		138,
		"projects_app-main_node_modules_angular_common_locales_fr_mjs"
	],
	"./fr.mjs": [
		138,
		"projects_app-main_node_modules_angular_common_locales_fr_mjs"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 7386;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 7995:
/*!*******************************************************************************************************************************************!*\
  !*** ./projects/app-main/node_modules/cldr-data/main/ lazy ^\.\/.*\/numbers\.json$ include: main.(en%7Cfr).numbers.json namespace object ***!
  \*******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./en/numbers.json": [
		5210,
		"projects_app-main_node_modules_cldr-data_main_en_numbers_json"
	],
	"./fr/numbers.json": [
		1404,
		"projects_app-main_node_modules_cldr-data_main_fr_numbers_json"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__.t(id, 3 | 16);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 7995;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 5611:
/*!****************************************************!*\
  !*** ./projects/jessica/dist/fesm2020/jessica.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FoundationStripFormComponent": () => (/* binding */ FoundationStripFormComponent),
/* harmony export */   "LibJessicaModule": () => (/* binding */ LibJessicaModule),
/* harmony export */   "LibJessicaService": () => (/* binding */ LibJessicaService),
/* harmony export */   "MeyerhofCalcComponent": () => (/* binding */ MeyerhofCalcComponent),
/* harmony export */   "MeyerhofCalcI18n": () => (/* binding */ MeyerhofCalcI18n),
/* harmony export */   "MeyerhofCalcService": () => (/* binding */ MeyerhofCalcService),
/* harmony export */   "MeyerhofFormComponent": () => (/* binding */ MeyerhofFormComponent),
/* harmony export */   "VerticalEccentricFormComponent": () => (/* binding */ VerticalEccentricFormComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_jessica_jessica_src_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9369);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7454);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4491);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 5613);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 4539);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 4258);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 8992);










class LibJessicaService {}

LibJessicaService.ɵfac = function LibJessicaService_Factory(t) {
  return new (t || LibJessicaService)();
};

LibJessicaService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: LibJessicaService,
  factory: LibJessicaService.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LibJessicaService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();
/* eslint-disable max-len */

/* eslint-enable max-len */


class FoundationStripFormComponent {
  constructor(fromBuilder) {
    this.fromBuilder = fromBuilder;
    this.foundation = this.fromBuilder.group({
      width: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]]
    });
  }

  writeValue(val) {
    val && this.foundation.setValue(val, {
      emitEvent: false
    });
  }

  registerOnChange(fn) {
    this.foundation.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled) {
    isDisabled ? this.foundation.disable() : this.foundation.enable();
  }

  validate() {
    return this.foundation.valid ? null : {
      invalidForm: {
        valid: false,
        message: 'basicInfoForm fields are invalid'
      }
    };
  }

}

FoundationStripFormComponent.ɵfac = function FoundationStripFormComponent_Factory(t) {
  return new (t || FoundationStripFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder));
};

FoundationStripFormComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: FoundationStripFormComponent,
  selectors: [["lib-foundation-strip-form"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NG_VALUE_ACCESSOR,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => FoundationStripFormComponent),
    multi: true
  }, {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NG_VALIDATORS,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => FoundationStripFormComponent),
    multi: true
  }])],
  decls: 5,
  vars: 4,
  consts: [[3, "formGroup"], ["for", "width"], ["id", "width", "type", "text", "formControlName", "width"]],
  template: function FoundationStripFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "label", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.foundation);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 2, "JESSICA.FONDATION-STRIP.WIDTH"));
    }
  },
  directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe],
  styles: [""]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FoundationStripFormComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'lib-foundation-strip-form',
      providers: [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NG_VALUE_ACCESSOR,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => FoundationStripFormComponent),
        multi: true
      }, {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NG_VALIDATORS,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => FoundationStripFormComponent),
        multi: true
      }],
      template: "<div [formGroup]=\"foundation\">\n  <label for=\"width\">{{ 'JESSICA.FONDATION-STRIP.WIDTH' | translate }}</label>\n  <input id=\"width\" type=\"text\" formControlName=\"width\" />\n</div>\n",
      styles: [""]
    }]
  }], function () {
    return [{
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder
    }];
  }, null);
})();
/* eslint-disable max-len */

/* eslint-enable max-len */


class VerticalEccentricFormComponent {
  constructor(fromBuilder) {
    this.fromBuilder = fromBuilder;
    this.load = this.fromBuilder.group({
      load: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
      eccentric: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]]
    });
  }

  writeValue(val) {
    val && this.load.setValue(val, {
      emitEvent: false
    });
  }

  registerOnChange(fn) {
    this.load.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled) {
    isDisabled ? this.load.disable() : this.load.enable();
  }

  validate() {
    return this.load.valid ? null : {
      invalidForm: {
        valid: false,
        message: 'basicInfoForm fields are invalid'
      }
    };
  }

}

VerticalEccentricFormComponent.ɵfac = function VerticalEccentricFormComponent_Factory(t) {
  return new (t || VerticalEccentricFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder));
};

VerticalEccentricFormComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: VerticalEccentricFormComponent,
  selectors: [["lib-vertical-eccentric-form"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NG_VALUE_ACCESSOR,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => VerticalEccentricFormComponent),
    multi: true
  }, {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NG_VALIDATORS,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => VerticalEccentricFormComponent),
    multi: true
  }])],
  decls: 10,
  vars: 7,
  consts: [[3, "formGroup"], ["for", "load"], ["id", "load", "type", "text", "formControlName", "load"], ["for", "eccentric"], ["id", "eccentric", "type", "text", "formControlName", "eccentric"]],
  template: function VerticalEccentricFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "label", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 2)(5, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "label", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.load);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 3, "JESSICA.VERTICAL-ECCENTRIC.LOAD"));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 5, "JESSICA.VERTICAL-ECCENTRIC.ECCENTRIC"));
    }
  },
  directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe],
  styles: [""]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](VerticalEccentricFormComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'lib-vertical-eccentric-form',
      providers: [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NG_VALUE_ACCESSOR,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => VerticalEccentricFormComponent),
        multi: true
      }, {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NG_VALIDATORS,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => VerticalEccentricFormComponent),
        multi: true
      }],
      template: "<div [formGroup]=\"load\">\n  <label for=\"load\">{{ 'JESSICA.VERTICAL-ECCENTRIC.LOAD' | translate }}</label>\n  <input id=\"load\" type=\"text\" formControlName=\"load\" />\n  <br />\n  <label for=\"eccentric\">{{\n    'JESSICA.VERTICAL-ECCENTRIC.ECCENTRIC' | translate\n  }}</label>\n  <input id=\"eccentric\" type=\"text\" formControlName=\"eccentric\" />\n</div>\n",
      styles: [""]
    }]
  }], function () {
    return [{
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder
    }];
  }, null);
})();

class MeyerhofFormComponent {
  constructor(fromBuilder) {
    this.fromBuilder = fromBuilder;
    this.form = this.fromBuilder.group({
      foundation: [''],
      load: ['']
    });
  }

  ngOnInit() {
    this.obs$ = this.form.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)(() => this.form.valid)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.debounceTime)(200)).subscribe(a => {
      this.writeValue(a);
    });
  }

  ngOnDestroy() {
    this.obs$?.unsubscribe();
  }

  writeValue(val) {
    val && this.form.setValue(val, {
      emitEvent: false
    });
  }

  registerOnChange(fn) {
    this.form.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled) {
    isDisabled ? this.form.disable() : this.form.enable();
  }

  validate() {
    if (this.form.controls.foundation.valid && this.form.controls.load.valid) {
      return null;
    } else {
      return {
        invalidForm: {
          valid: false,
          message: 'MeyerhofForm fields are invalid'
        }
      };
    }
  }

}

MeyerhofFormComponent.ɵfac = function MeyerhofFormComponent_Factory(t) {
  return new (t || MeyerhofFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder));
};

MeyerhofFormComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: MeyerhofFormComponent,
  selectors: [["lib-meyerhof-form"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NG_VALUE_ACCESSOR,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => MeyerhofFormComponent),
    multi: true
  }, {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NG_VALIDATORS,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => MeyerhofFormComponent),
    multi: true
  }])],
  decls: 3,
  vars: 1,
  consts: [[3, "formGroup"], ["ngDefaultControl", "", "formControlName", "foundation"], ["ngDefaultControl", "", "formControlName", "load"]],
  template: function MeyerhofFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "lib-foundation-strip-form", 1)(2, "lib-vertical-eccentric-form", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
    }
  },
  directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, FoundationStripFormComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, VerticalEccentricFormComponent],
  styles: [""]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MeyerhofFormComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'lib-meyerhof-form',
      providers: [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NG_VALUE_ACCESSOR,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => MeyerhofFormComponent),
        multi: true
      }, {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NG_VALIDATORS,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => MeyerhofFormComponent),
        multi: true
      }],
      template: "<div [formGroup]=\"form\">\n  <lib-foundation-strip-form\n    ngDefaultControl\n    formControlName=\"foundation\"\n  ></lib-foundation-strip-form>\n  <lib-vertical-eccentric-form\n    ngDefaultControl\n    formControlName=\"load\"\n  ></lib-vertical-eccentric-form>\n</div>\n",
      styles: [""]
    }]
  }], function () {
    return [{
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder
    }];
  }, null);
})();
/* eslint-disable max-len */

/* eslint-enable max-len */


class MeyerhofCalcComponent {
  constructor(fromBuilder) {
    this.fromBuilder = fromBuilder;
    this.changeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.form = this.fromBuilder.group({
      meyerhof: ['']
    });
  }

  ngOnInit() {
    this.obs$ = this.form.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)(() => this.form.valid)).subscribe(a => {
      this.changeEvent.emit(a);
    });
  }

  ngOnDestroy() {
    this.obs$?.unsubscribe();
  }

  writeValue(val) {
    val && this.form.setValue(val, {
      emitEvent: false
    });
  }

  registerOnChange(fn) {
    this.form.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled) {
    isDisabled ? this.form.disable() : this.form.enable();
  }

}

MeyerhofCalcComponent.ɵfac = function MeyerhofCalcComponent_Factory(t) {
  return new (t || MeyerhofCalcComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder));
};

MeyerhofCalcComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: MeyerhofCalcComponent,
  selectors: [["lib-meyerhof-calc"]],
  outputs: {
    changeEvent: "changeEvent"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NG_VALUE_ACCESSOR,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => MeyerhofCalcComponent),
    multi: true
  }])],
  decls: 5,
  vars: 4,
  consts: [[3, "formGroup"], ["ngDefaultControl", "", "formControlName", "meyerhof"]],
  template: function MeyerhofCalcComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0)(1, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "lib-meyerhof-form", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 2, "JESSICA.MEYERHOF-CALC-FORM.TITLE"));
    }
  },
  directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, MeyerhofFormComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe],
  styles: [""]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MeyerhofCalcComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'lib-meyerhof-calc',
      providers: [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NG_VALUE_ACCESSOR,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => MeyerhofCalcComponent),
        multi: true
      }],
      template: "<form [formGroup]=\"form\">\n  <h1>{{ 'JESSICA.MEYERHOF-CALC-FORM.TITLE' | translate }}</h1>\n  <lib-meyerhof-form\n    ngDefaultControl\n    formControlName=\"meyerhof\"\n  ></lib-meyerhof-form>\n</form>\n",
      styles: [""]
    }]
  }], function () {
    return [{
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder
    }];
  }, {
    changeEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }]
  });
})();
/* eslint-disable max-len */

/* eslint-enable max-len */


class LibJessicaModule {}

LibJessicaModule.ɵfac = function LibJessicaModule_Factory(t) {
  return new (t || LibJessicaModule)();
};

LibJessicaModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: LibJessicaModule
});
LibJessicaModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateModule], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LibJessicaModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      declarations: [MeyerhofFormComponent, FoundationStripFormComponent, VerticalEccentricFormComponent, MeyerhofCalcComponent],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateModule],
      exports: [MeyerhofFormComponent, FoundationStripFormComponent, VerticalEccentricFormComponent, MeyerhofCalcComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateModule]
    }]
  }], null, null);
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LibJessicaModule, {
    declarations: [MeyerhofFormComponent, FoundationStripFormComponent, VerticalEccentricFormComponent, MeyerhofCalcComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateModule],
    exports: [MeyerhofFormComponent, FoundationStripFormComponent, VerticalEccentricFormComponent, MeyerhofCalcComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateModule]
  });
})();

class FoundationStripI18n {
  constructor() {
    this.number = ['width'];
  }

}

class VerticalEccentricI18n {
  constructor() {
    this.number = ['load', 'eccentric'];
  }

}

class MeyerhofFormI18n {
  constructor() {
    this.foundation = new FoundationStripI18n();
    this.load = new VerticalEccentricI18n();
    this.child = ['foundation', 'load'];
  }

}

class MeyerhofCalcI18n {
  constructor() {
    this.meyerhof = new MeyerhofFormI18n();
    this.child = ['meyerhof'];
  }

}

var jessica = (() => {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;

  return function (jessica) {
    jessica = jessica || {}; // The Module object: Our interface to the outside world. We import
    // and export values on it. There are various ways Module can be used:
    // 1. Not defined. We create it here
    // 2. A function parameter, function(Module) { ..generated code.. }
    // 3. pre-run appended it, var Module = {}; ..generated code..
    // 4. External script tag defines var Module.
    // We need to check if Module already exists (e.g. case 3 above).
    // Substitution will be replaced with actual code on later stage of the build,
    // this way Closure Compiler will not mangle it (e.g. case 4. above).
    // Note that if you want to run closure, and also to use Module
    // after the generated code, you will need to define   var Module = {};
    // before the code. Then that object will be used in the code, and you
    // can continue to use Module afterwards as well.

    var Module = typeof jessica != 'undefined' ? jessica : {}; // See https://caniuse.com/mdn-javascript_builtins_object_assign
    // Set up the promise that indicates the Module is initialized

    var readyPromiseResolve, readyPromiseReject;
    Module['ready'] = new Promise(function (resolve, reject) {
      readyPromiseResolve = resolve;
      readyPromiseReject = reject;
    });

    if (!Object.getOwnPropertyDescriptor(Module['ready'], '___getTypeName')) {
      Object.defineProperty(Module['ready'], '___getTypeName', {
        configurable: true,
        get: function () {
          abort('You are getting ___getTypeName on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js');
        }
      });
      Object.defineProperty(Module['ready'], '___getTypeName', {
        configurable: true,
        set: function () {
          abort('You are setting ___getTypeName on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js');
        }
      });
    }

    if (!Object.getOwnPropertyDescriptor(Module['ready'], '___embind_register_native_and_builtin_types')) {
      Object.defineProperty(Module['ready'], '___embind_register_native_and_builtin_types', {
        configurable: true,
        get: function () {
          abort('You are getting ___embind_register_native_and_builtin_types on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js');
        }
      });
      Object.defineProperty(Module['ready'], '___embind_register_native_and_builtin_types', {
        configurable: true,
        set: function () {
          abort('You are setting ___embind_register_native_and_builtin_types on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js');
        }
      });
    }

    if (!Object.getOwnPropertyDescriptor(Module['ready'], '_fflush')) {
      Object.defineProperty(Module['ready'], '_fflush', {
        configurable: true,
        get: function () {
          abort('You are getting _fflush on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js');
        }
      });
      Object.defineProperty(Module['ready'], '_fflush', {
        configurable: true,
        set: function () {
          abort('You are setting _fflush on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js');
        }
      });
    }

    if (!Object.getOwnPropertyDescriptor(Module['ready'], 'onRuntimeInitialized')) {
      Object.defineProperty(Module['ready'], 'onRuntimeInitialized', {
        configurable: true,
        get: function () {
          abort('You are getting onRuntimeInitialized on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js');
        }
      });
      Object.defineProperty(Module['ready'], 'onRuntimeInitialized', {
        configurable: true,
        set: function () {
          abort('You are setting onRuntimeInitialized on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js');
        }
      });
    } // --pre-jses are emitted after the Module integration code, so that they can
    // refer to Module (if they choose; they can also define Module)
    // {{PRE_JSES}}
    // Sometimes an existing Module object exists with properties
    // meant to overwrite the default module functionality. Here
    // we collect those properties and reapply _after_ we configure
    // the current environment's defaults to avoid having to be so
    // defensive during initialization.


    var moduleOverrides = Object.assign({}, Module);
    var arguments_ = [];
    var thisProgram = './this.program';

    var quit_ = (status, toThrow) => {
      throw toThrow;
    }; // Determine the runtime environment we are in. You can customize this by
    // setting the ENVIRONMENT setting at compile time (see settings.js).
    // Attempt to auto-detect the environment


    var ENVIRONMENT_IS_WEB = typeof window == 'object';
    var ENVIRONMENT_IS_WORKER = typeof importScripts == 'function'; // N.b. Electron.js environment is simultaneously a NODE-environment, but
    // also a web environment.

    var ENVIRONMENT_IS_NODE = typeof process == 'object' && typeof process.versions == 'object' && typeof process.versions.node == 'string';
    var ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;

    if (Module['ENVIRONMENT']) {
      throw new Error('Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -sENVIRONMENT=web or -sENVIRONMENT=node)');
    } // `/` should be present at the end if `scriptDirectory` is not empty


    var scriptDirectory = '';

    function locateFile(path) {
      if (Module['locateFile']) {
        return Module['locateFile'](path, scriptDirectory);
      }

      return scriptDirectory + path;
    } // Hooks that are implemented differently in different runtime environments.


    var read_, readAsync, readBinary, setWindowTitle; // Normally we don't log exceptions but instead let them bubble out the top
    // level where the embedding environment (e.g. the browser) can handle
    // them.
    // However under v8 and node we sometimes exit the process direcly in which case
    // its up to use us to log the exception before exiting.
    // If we fix https://github.com/emscripten-core/emscripten/issues/15080
    // this may no longer be needed under node.

    function logExceptionOnExit(e) {
      if (e instanceof ExitStatus) return;
      let toLog = e;

      if (e && typeof e == 'object' && e.stack) {
        toLog = [e, e.stack];
      }

      err('exiting due to exception: ' + toLog);
    }

    if (ENVIRONMENT_IS_SHELL) {
      if (typeof process == 'object' && typeof require === 'function' || typeof window == 'object' || typeof importScripts == 'function') throw new Error('not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)');

      if (typeof read != 'undefined') {
        read_ = function shell_read(f) {
          return read(f);
        };
      }

      readBinary = function readBinary(f) {
        let data;

        if (typeof readbuffer == 'function') {
          return new Uint8Array(readbuffer(f));
        }

        data = read(f, 'binary');
        assert(typeof data == 'object');
        return data;
      };

      readAsync = function readAsync(f, onload, onerror) {
        setTimeout(() => onload(readBinary(f)), 0);
      };

      if (typeof scriptArgs != 'undefined') {
        arguments_ = scriptArgs;
      } else if (typeof arguments != 'undefined') {
        arguments_ = arguments;
      }

      if (typeof quit == 'function') {
        quit_ = (status, toThrow) => {
          logExceptionOnExit(toThrow);
          quit(status);
        };
      }

      if (typeof print != 'undefined') {
        // Prefer to use print/printErr where they exist, as they usually work better.
        if (typeof console == 'undefined') console =
        /** @type{!Console} */
        {};
        console.log =
        /** @type{!function(this:Console, ...*): undefined} */
        print;
        console.warn = console.error =
        /** @type{!function(this:Console, ...*): undefined} */
        typeof printErr != 'undefined' ? printErr : print;
      }
    } else // Note that this includes Node.js workers when relevant (pthreads is enabled).
      // Node.js workers are detected as a combination of ENVIRONMENT_IS_WORKER and
      // ENVIRONMENT_IS_NODE.
      if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
        if (ENVIRONMENT_IS_WORKER) {
          // Check worker, not web, since window could be polyfilled
          scriptDirectory = self.location.href;
        } else if (typeof document != 'undefined' && document.currentScript) {
          // web
          scriptDirectory = document.currentScript.src;
        } // When MODULARIZE, this JS may be executed later, after document.currentScript
        // is gone, so we saved it, and we use it here instead of any other info.


        if (_scriptDir) {
          scriptDirectory = _scriptDir;
        } // blob urls look like blob:http://site.com/etc/etc and we cannot infer anything from them.
        // otherwise, slice off the final part of the url to find the script directory.
        // if scriptDirectory does not contain a slash, lastIndexOf will return -1,
        // and scriptDirectory will correctly be replaced with an empty string.
        // If scriptDirectory contains a query (starting with ?) or a fragment (starting with #),
        // they are removed because they could contain a slash.


        if (scriptDirectory.indexOf('blob:') !== 0) {
          scriptDirectory = scriptDirectory.substr(0, scriptDirectory.replace(/[?#].*/, "").lastIndexOf('/') + 1);
        } else {
          scriptDirectory = '';
        }

        if (!(typeof window == 'object' || typeof importScripts == 'function')) throw new Error('not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)'); // Differentiate the Web Worker from the Node Worker case, as reading must
        // be done differently.

        {
          // include: web_or_worker_shell_read.js
          read_ = url => {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, false);
            xhr.send(null);
            return xhr.responseText;
          };

          if (ENVIRONMENT_IS_WORKER) {
            readBinary = url => {
              var xhr = new XMLHttpRequest();
              xhr.open('GET', url, false);
              xhr.responseType = 'arraybuffer';
              xhr.send(null);
              return new Uint8Array(
              /** @type{!ArrayBuffer} */
              xhr.response);
            };
          }

          readAsync = (url, onload, onerror) => {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);
            xhr.responseType = 'arraybuffer';

            xhr.onload = () => {
              if (xhr.status == 200 || xhr.status == 0 && xhr.response) {
                // file URLs can return 0
                onload(xhr.response);
                return;
              }

              onerror();
            };

            xhr.onerror = onerror;
            xhr.send(null);
          }; // end include: web_or_worker_shell_read.js

        }

        setWindowTitle = title => document.title = title;
      } else {
        throw new Error('environment detection error');
      }

    var out = Module['print'] || console.log.bind(console);
    var err = Module['printErr'] || console.warn.bind(console); // Merge back in the overrides

    Object.assign(Module, moduleOverrides); // Free the object hierarchy contained in the overrides, this lets the GC
    // reclaim data used e.g. in memoryInitializerRequest, which is a large typed array.

    moduleOverrides = null;
    checkIncomingModuleAPI(); // Emit code to handle expected values on the Module object. This applies Module.x
    // to the proper local x. This has two benefits: first, we only emit it if it is
    // expected to arrive, and second, by using a local everywhere else that can be
    // minified.

    if (Module['arguments']) arguments_ = Module['arguments'];
    legacyModuleProp('arguments', 'arguments_');
    if (Module['thisProgram']) thisProgram = Module['thisProgram'];
    legacyModuleProp('thisProgram', 'thisProgram');
    if (Module['quit']) quit_ = Module['quit'];
    legacyModuleProp('quit', 'quit_'); // perform assertions in shell.js after we set up out() and err(), as otherwise if an assertion fails it cannot print the message
    // Assertions on removed incoming Module JS APIs.

    assert(typeof Module['memoryInitializerPrefixURL'] == 'undefined', 'Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead');
    assert(typeof Module['pthreadMainPrefixURL'] == 'undefined', 'Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead');
    assert(typeof Module['cdInitializerPrefixURL'] == 'undefined', 'Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead');
    assert(typeof Module['filePackagePrefixURL'] == 'undefined', 'Module.filePackagePrefixURL option was removed, use Module.locateFile instead');
    assert(typeof Module['read'] == 'undefined', 'Module.read option was removed (modify read_ in JS)');
    assert(typeof Module['readAsync'] == 'undefined', 'Module.readAsync option was removed (modify readAsync in JS)');
    assert(typeof Module['readBinary'] == 'undefined', 'Module.readBinary option was removed (modify readBinary in JS)');
    assert(typeof Module['setWindowTitle'] == 'undefined', 'Module.setWindowTitle option was removed (modify setWindowTitle in JS)');
    assert(typeof Module['TOTAL_MEMORY'] == 'undefined', 'Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY');
    legacyModuleProp('read', 'read_');
    legacyModuleProp('readAsync', 'readAsync');
    legacyModuleProp('readBinary', 'readBinary');
    legacyModuleProp('setWindowTitle', 'setWindowTitle');
    var IDBFS = 'IDBFS is no longer included by default; build with -lidbfs.js';
    var PROXYFS = 'PROXYFS is no longer included by default; build with -lproxyfs.js';
    var WORKERFS = 'WORKERFS is no longer included by default; build with -lworkerfs.js';
    var NODEFS = 'NODEFS is no longer included by default; build with -lnodefs.js';

    function alignMemory() {
      abort('`alignMemory` is now a library function and not included by default; add it to your library.js __deps or to DEFAULT_LIBRARY_FUNCS_TO_INCLUDE on the command line');
    }

    assert(!ENVIRONMENT_IS_NODE, "node environment detected but not enabled at build time.  Add 'node' to `-sENVIRONMENT` to enable.");
    assert(!ENVIRONMENT_IS_SHELL, "shell environment detected but not enabled at build time.  Add 'shell' to `-sENVIRONMENT` to enable.");
    var STACK_ALIGN = 16;
    var POINTER_SIZE = 4;

    function getNativeTypeSize(type) {
      switch (type) {
        case 'i1':
        case 'i8':
        case 'u8':
          return 1;

        case 'i16':
        case 'u16':
          return 2;

        case 'i32':
        case 'u32':
          return 4;

        case 'i64':
        case 'u64':
          return 8;

        case 'float':
          return 4;

        case 'double':
          return 8;

        default:
          {
            if (type[type.length - 1] === '*') {
              return POINTER_SIZE;
            } else if (type[0] === 'i') {
              const bits = Number(type.substr(1));
              assert(bits % 8 === 0, 'getNativeTypeSize invalid bits ' + bits + ', type ' + type);
              return bits / 8;
            } else {
              return 0;
            }
          }
      }
    }

    function warnOnce(text) {
      if (!warnOnce.shown) warnOnce.shown = {};

      if (!warnOnce.shown[text]) {
        warnOnce.shown[text] = 1;
        err(text);
      }
    } // include: runtime_functions.js
    // This gives correct answers for everything less than 2^{14} = 16384
    // I hope nobody is contemplating functions with 16384 arguments...


    function uleb128Encode(n) {
      assert(n < 16384);

      if (n < 128) {
        return [n];
      }

      return [n % 128 | 128, n >> 7];
    } // Converts a signature like 'vii' into a description of the wasm types, like
    // { parameters: ['i32', 'i32'], results: [] }.


    function sigToWasmTypes(sig) {
      var typeNames = {
        'i': 'i32',
        'j': 'i64',
        'f': 'f32',
        'd': 'f64',
        'p': 'i32'
      };
      var type = {
        parameters: [],
        results: sig[0] == 'v' ? [] : [typeNames[sig[0]]]
      };

      for (var i = 1; i < sig.length; ++i) {
        assert(sig[i] in typeNames, 'invalid signature char: ' + sig[i]);
        type.parameters.push(typeNames[sig[i]]);
      }

      return type;
    } // Wraps a JS function as a wasm function with a given signature.


    function convertJsFunctionToWasm(func, sig) {
      // If the type reflection proposal is available, use the new
      // "WebAssembly.Function" constructor.
      // Otherwise, construct a minimal wasm module importing the JS function and
      // re-exporting it.
      if (typeof WebAssembly.Function == "function") {
        return new WebAssembly.Function(sigToWasmTypes(sig), func);
      } // The module is static, with the exception of the type section, which is
      // generated based on the signature passed in.


      var typeSection = [0x01, 0x60 // form: func
      ];
      var sigRet = sig.slice(0, 1);
      var sigParam = sig.slice(1);
      var typeCodes = {
        'i': 0x7f,
        'p': 0x7f,
        'j': 0x7e,
        'f': 0x7d,
        'd': 0x7c // f64

      }; // Parameters, length + signatures

      typeSection = typeSection.concat(uleb128Encode(sigParam.length));

      for (var i = 0; i < sigParam.length; ++i) {
        assert(sigParam[i] in typeCodes, 'invalid signature char: ' + sigParam[i]);
        typeSection.push(typeCodes[sigParam[i]]);
      } // Return values, length + signatures
      // With no multi-return in MVP, either 0 (void) or 1 (anything else)


      if (sigRet == 'v') {
        typeSection.push(0x00);
      } else {
        typeSection = typeSection.concat([0x01, typeCodes[sigRet]]);
      } // Write the section code and overall length of the type section into the
      // section header


      typeSection = [0x01
      /* Type section code */
      ].concat(uleb128Encode(typeSection.length), typeSection); // Rest of the module is static

      var bytes = new Uint8Array([0x00, 0x61, 0x73, 0x6d, 0x01, 0x00, 0x00, 0x00 // version: 1
      ].concat(typeSection, [0x02, 0x07, // (import "e" "f" (func 0 (type 0)))
      0x01, 0x01, 0x65, 0x01, 0x66, 0x00, 0x00, 0x07, 0x05, // (export "f" (func 0 (type 0)))
      0x01, 0x01, 0x66, 0x00, 0x00])); // We can compile this wasm module synchronously because it is very small.
      // This accepts an import (at "e.f"), that it reroutes to an export (at "f")

      var module = new WebAssembly.Module(bytes);
      var instance = new WebAssembly.Instance(module, {
        'e': {
          'f': func
        }
      });
      var wrappedFunc = instance.exports['f'];
      return wrappedFunc;
    }

    var freeTableIndexes = []; // Weak map of functions in the table to their indexes, created on first use.

    var functionsInTableMap;

    function getEmptyTableSlot() {
      // Reuse a free index if there is one, otherwise grow.
      if (freeTableIndexes.length) {
        return freeTableIndexes.pop();
      } // Grow the table


      try {
        wasmTable.grow(1);
      } catch (err) {
        if (!(err instanceof RangeError)) {
          throw err;
        }

        throw 'Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.';
      }

      return wasmTable.length - 1;
    }

    function updateTableMap(offset, count) {
      for (var i = offset; i < offset + count; i++) {
        var item = getWasmTableEntry(i); // Ignore null values.

        if (item) {
          functionsInTableMap.set(item, i);
        }
      }
    }
    /**
     * Add a function to the table.
     * 'sig' parameter is required if the function being added is a JS function.
     * @param {string=} sig
     */


    function addFunction(func, sig) {
      assert(typeof func != 'undefined'); // Check if the function is already in the table, to ensure each function
      // gets a unique index. First, create the map if this is the first use.

      if (!functionsInTableMap) {
        functionsInTableMap = new WeakMap();
        updateTableMap(0, wasmTable.length);
      }

      if (functionsInTableMap.has(func)) {
        return functionsInTableMap.get(func);
      } // It's not in the table, add it now.


      var ret = getEmptyTableSlot(); // Set the new value.

      try {
        // Attempting to call this with JS function will cause of table.set() to fail
        setWasmTableEntry(ret, func);
      } catch (err) {
        if (!(err instanceof TypeError)) {
          throw err;
        }

        assert(typeof sig != 'undefined', 'Missing signature argument to addFunction: ' + func);
        var wrapped = convertJsFunctionToWasm(func, sig);
        setWasmTableEntry(ret, wrapped);
      }

      functionsInTableMap.set(func, ret);
      return ret;
    }

    function removeFunction(index) {
      functionsInTableMap.delete(getWasmTableEntry(index));
      freeTableIndexes.push(index);
    } // end include: runtime_functions.js
    // include: runtime_debug.js


    function legacyModuleProp(prop, newName) {
      if (!Object.getOwnPropertyDescriptor(Module, prop)) {
        Object.defineProperty(Module, prop, {
          configurable: true,
          get: function () {
            abort('Module.' + prop + ' has been replaced with plain ' + newName + ' (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)');
          }
        });
      }
    }

    function ignoredModuleProp(prop) {
      if (Object.getOwnPropertyDescriptor(Module, prop)) {
        abort('`Module.' + prop + '` was supplied but `' + prop + '` not included in INCOMING_MODULE_JS_API');
      }
    }

    function unexportedMessage(sym, isFSSybol) {
      var msg = "'" + sym + "' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)";

      if (isFSSybol) {
        msg += '. Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you';
      }

      return msg;
    }

    function unexportedRuntimeSymbol(sym, isFSSybol) {
      if (!Object.getOwnPropertyDescriptor(Module, sym)) {
        Object.defineProperty(Module, sym, {
          configurable: true,
          get: function () {
            abort(unexportedMessage(sym, isFSSybol));
          }
        });
      }
    }

    function unexportedRuntimeFunction(sym, isFSSybol) {
      if (!Object.getOwnPropertyDescriptor(Module, sym)) {
        Module[sym] = () => abort(unexportedMessage(sym, isFSSybol));
      }
    } // end include: runtime_debug.js


    var tempRet0 = 0;

    var setTempRet0 = value => {
      tempRet0 = value;
    };

    var getTempRet0 = () => tempRet0; // === Preamble library stuff ===
    // Documentation for the public APIs defined in this file must be updated in:
    //    site/source/docs/api_reference/preamble.js.rst
    // A prebuilt local version of the documentation is available at:
    //    site/build/text/docs/api_reference/preamble.js.txt
    // You can also build docs locally as HTML or other formats in site/
    // An online HTML version (which may be of a different version of Emscripten)
    //    is up at http://kripken.github.io/emscripten-site/docs/api_reference/preamble.js.html


    var wasmBinary;
    if (Module['wasmBinary']) wasmBinary = Module['wasmBinary'];
    legacyModuleProp('wasmBinary', 'wasmBinary');
    var noExitRuntime = Module['noExitRuntime'] || true;
    legacyModuleProp('noExitRuntime', 'noExitRuntime');

    if (typeof WebAssembly != 'object') {
      abort('no native wasm support detected');
    } // Wasm globals


    var wasmMemory; //========================================
    // Runtime essentials
    //========================================
    // whether we are quitting the application. no code should run after this.
    // set in exit() and abort()

    var ABORT = false; // set by exit() and abort().  Passed to 'onExit' handler.
    // NOTE: This is also used as the process return code code in shell environments
    // but only when noExitRuntime is false.

    var EXITSTATUS;
    /** @type {function(*, string=)} */

    function assert(condition, text) {
      if (!condition) {
        abort('Assertion failed' + (text ? ': ' + text : ''));
      }
    } // Returns the C function with a specified identifier (for C++, you need to do manual name mangling)


    function getCFunc(ident) {
      var func = Module['_' + ident]; // closure exported function

      assert(func, 'Cannot call unknown function ' + ident + ', make sure it is exported');
      return func;
    } // C calling interface.

    /** @param {string|null=} returnType
        @param {Array=} argTypes
        @param {Arguments|Array=} args
        @param {Object=} opts */


    function ccall(ident, returnType, argTypes, args, opts) {
      // For fast lookup of conversion functions
      var toC = {
        'string': function (str) {
          var ret = 0;

          if (str !== null && str !== undefined && str !== 0) {
            // null string
            // at most 4 bytes per UTF-8 code point, +1 for the trailing '\0'
            var len = (str.length << 2) + 1;
            ret = stackAlloc(len);
            stringToUTF8(str, ret, len);
          }

          return ret;
        },
        'array': function (arr) {
          var ret = stackAlloc(arr.length);
          writeArrayToMemory(arr, ret);
          return ret;
        }
      };

      function convertReturnValue(ret) {
        if (returnType === 'string') {
          return UTF8ToString(ret);
        }

        if (returnType === 'boolean') return Boolean(ret);
        return ret;
      }

      var func = getCFunc(ident);
      var cArgs = [];
      var stack = 0;
      assert(returnType !== 'array', 'Return type should not be "array".');

      if (args) {
        for (var i = 0; i < args.length; i++) {
          var converter = toC[argTypes[i]];

          if (converter) {
            if (stack === 0) stack = stackSave();
            cArgs[i] = converter(args[i]);
          } else {
            cArgs[i] = args[i];
          }
        }
      }

      var ret = func.apply(null, cArgs);

      function onDone(ret) {
        if (stack !== 0) stackRestore(stack);
        return convertReturnValue(ret);
      }

      ret = onDone(ret);
      return ret;
    }
    /** @param {string=} returnType
        @param {Array=} argTypes
        @param {Object=} opts */


    function cwrap(ident, returnType, argTypes, opts) {
      return function () {
        return ccall(ident, returnType, argTypes, arguments, opts);
      };
    } // We used to include malloc/free by default in the past. Show a helpful error in
    // builds with assertions.
    // include: runtime_legacy.js


    var ALLOC_NORMAL = 0; // Tries to use _malloc()

    var ALLOC_STACK = 1; // Lives for the duration of the current function call

    /**
     * allocate(): This function is no longer used by emscripten but is kept around to avoid
     *             breaking external users.
     *             You should normally not use allocate(), and instead allocate
     *             memory using _malloc()/stackAlloc(), initialize it with
     *             setValue(), and so forth.
     * @param {(Uint8Array|Array<number>)} slab: An array of data.
     * @param {number=} allocator : How to allocate memory, see ALLOC_*
     */

    function allocate(slab, allocator) {
      var ret;
      assert(typeof allocator == 'number', 'allocate no longer takes a type argument');
      assert(typeof slab != 'number', 'allocate no longer takes a number as arg0');

      if (allocator == ALLOC_STACK) {
        ret = stackAlloc(slab.length);
      } else {
        ret = _malloc(slab.length);
      }

      if (!slab.subarray && !slab.slice) {
        slab = new Uint8Array(slab);
      }

      HEAPU8.set(slab, ret);
      return ret;
    } // end include: runtime_legacy.js
    // include: runtime_strings.js
    // runtime_strings.js: Strings related runtime functions that are part of both MINIMAL_RUNTIME and regular runtime.


    var UTF8Decoder = typeof TextDecoder != 'undefined' ? new TextDecoder('utf8') : undefined; // Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the given array that contains uint8 values, returns
    // a copy of that string as a Javascript String object.

    /**
     * heapOrArray is either a regular array, or a JavaScript typed array view.
     * @param {number} idx
     * @param {number=} maxBytesToRead
     * @return {string}
     */

    function UTF8ArrayToString(heapOrArray, idx, maxBytesToRead) {
      var endIdx = idx + maxBytesToRead;
      var endPtr = idx; // TextDecoder needs to know the byte length in advance, it doesn't stop on null terminator by itself.
      // Also, use the length info to avoid running tiny strings through TextDecoder, since .subarray() allocates garbage.
      // (As a tiny code save trick, compare endPtr against endIdx using a negation, so that undefined means Infinity)

      while (heapOrArray[endPtr] && !(endPtr >= endIdx)) ++endPtr;

      if (endPtr - idx > 16 && heapOrArray.buffer && UTF8Decoder) {
        return UTF8Decoder.decode(heapOrArray.subarray(idx, endPtr));
      } else {
        var str = ''; // If building with TextDecoder, we have already computed the string length above, so test loop end condition against that

        while (idx < endPtr) {
          // For UTF8 byte structure, see:
          // http://en.wikipedia.org/wiki/UTF-8#Description
          // https://www.ietf.org/rfc/rfc2279.txt
          // https://tools.ietf.org/html/rfc3629
          var u0 = heapOrArray[idx++];

          if (!(u0 & 0x80)) {
            str += String.fromCharCode(u0);
            continue;
          }

          var u1 = heapOrArray[idx++] & 63;

          if ((u0 & 0xE0) == 0xC0) {
            str += String.fromCharCode((u0 & 31) << 6 | u1);
            continue;
          }

          var u2 = heapOrArray[idx++] & 63;

          if ((u0 & 0xF0) == 0xE0) {
            u0 = (u0 & 15) << 12 | u1 << 6 | u2;
          } else {
            if ((u0 & 0xF8) != 0xF0) warnOnce('Invalid UTF-8 leading byte 0x' + u0.toString(16) + ' encountered when deserializing a UTF-8 string in wasm memory to a JS string!');
            u0 = (u0 & 7) << 18 | u1 << 12 | u2 << 6 | heapOrArray[idx++] & 63;
          }

          if (u0 < 0x10000) {
            str += String.fromCharCode(u0);
          } else {
            var ch = u0 - 0x10000;
            str += String.fromCharCode(0xD800 | ch >> 10, 0xDC00 | ch & 0x3FF);
          }
        }
      }

      return str;
    } // Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the emscripten HEAP, returns a
    // copy of that string as a Javascript String object.
    // maxBytesToRead: an optional length that specifies the maximum number of bytes to read. You can omit
    //                 this parameter to scan the string until the first \0 byte. If maxBytesToRead is
    //                 passed, and the string at [ptr, ptr+maxBytesToReadr[ contains a null byte in the
    //                 middle, then the string will cut short at that byte index (i.e. maxBytesToRead will
    //                 not produce a string of exact length [ptr, ptr+maxBytesToRead[)
    //                 N.B. mixing frequent uses of UTF8ToString() with and without maxBytesToRead may
    //                 throw JS JIT optimizations off, so it is worth to consider consistently using one
    //                 style or the other.

    /**
     * @param {number} ptr
     * @param {number=} maxBytesToRead
     * @return {string}
     */


    function UTF8ToString(ptr, maxBytesToRead) {
      return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : '';
    } // Copies the given Javascript String object 'str' to the given byte array at address 'outIdx',
    // encoded in UTF8 form and null-terminated. The copy will require at most str.length*4+1 bytes of space in the HEAP.
    // Use the function lengthBytesUTF8 to compute the exact number of bytes (excluding null terminator) that this function will write.
    // Parameters:
    //   str: the Javascript string to copy.
    //   heap: the array to copy to. Each index in this array is assumed to be one 8-byte element.
    //   outIdx: The starting offset in the array to begin the copying.
    //   maxBytesToWrite: The maximum number of bytes this function can write to the array.
    //                    This count should include the null terminator,
    //                    i.e. if maxBytesToWrite=1, only the null terminator will be written and nothing else.
    //                    maxBytesToWrite=0 does not write any bytes to the output, not even the null terminator.
    // Returns the number of bytes written, EXCLUDING the null terminator.


    function stringToUTF8Array(str, heap, outIdx, maxBytesToWrite) {
      if (!(maxBytesToWrite > 0)) // Parameter maxBytesToWrite is not optional. Negative values, 0, null, undefined and false each don't write out any bytes.
        return 0;
      var startIdx = outIdx;
      var endIdx = outIdx + maxBytesToWrite - 1; // -1 for string null terminator.

      for (var i = 0; i < str.length; ++i) {
        // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! So decode UTF16->UTF32->UTF8.
        // See http://unicode.org/faq/utf_bom.html#utf16-3
        // For UTF8 byte structure, see http://en.wikipedia.org/wiki/UTF-8#Description and https://www.ietf.org/rfc/rfc2279.txt and https://tools.ietf.org/html/rfc3629
        var u = str.charCodeAt(i); // possibly a lead surrogate

        if (u >= 0xD800 && u <= 0xDFFF) {
          var u1 = str.charCodeAt(++i);
          u = 0x10000 + ((u & 0x3FF) << 10) | u1 & 0x3FF;
        }

        if (u <= 0x7F) {
          if (outIdx >= endIdx) break;
          heap[outIdx++] = u;
        } else if (u <= 0x7FF) {
          if (outIdx + 1 >= endIdx) break;
          heap[outIdx++] = 0xC0 | u >> 6;
          heap[outIdx++] = 0x80 | u & 63;
        } else if (u <= 0xFFFF) {
          if (outIdx + 2 >= endIdx) break;
          heap[outIdx++] = 0xE0 | u >> 12;
          heap[outIdx++] = 0x80 | u >> 6 & 63;
          heap[outIdx++] = 0x80 | u & 63;
        } else {
          if (outIdx + 3 >= endIdx) break;
          if (u > 0x10FFFF) warnOnce('Invalid Unicode code point 0x' + u.toString(16) + ' encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF).');
          heap[outIdx++] = 0xF0 | u >> 18;
          heap[outIdx++] = 0x80 | u >> 12 & 63;
          heap[outIdx++] = 0x80 | u >> 6 & 63;
          heap[outIdx++] = 0x80 | u & 63;
        }
      } // Null-terminate the pointer to the buffer.


      heap[outIdx] = 0;
      return outIdx - startIdx;
    } // Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
    // null-terminated and encoded in UTF8 form. The copy will require at most str.length*4+1 bytes of space in the HEAP.
    // Use the function lengthBytesUTF8 to compute the exact number of bytes (excluding null terminator) that this function will write.
    // Returns the number of bytes written, EXCLUDING the null terminator.


    function stringToUTF8(str, outPtr, maxBytesToWrite) {
      assert(typeof maxBytesToWrite == 'number', 'stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!');
      return stringToUTF8Array(str, HEAPU8, outPtr, maxBytesToWrite);
    } // Returns the number of bytes the given Javascript string takes if encoded as a UTF8 byte array, EXCLUDING the null terminator byte.


    function lengthBytesUTF8(str) {
      var len = 0;

      for (var i = 0; i < str.length; ++i) {
        // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! So decode UTF16->UTF32->UTF8.
        // See http://unicode.org/faq/utf_bom.html#utf16-3
        var u = str.charCodeAt(i); // possibly a lead surrogate

        if (u >= 0xD800 && u <= 0xDFFF) u = 0x10000 + ((u & 0x3FF) << 10) | str.charCodeAt(++i) & 0x3FF;
        if (u <= 0x7F) ++len;else if (u <= 0x7FF) len += 2;else if (u <= 0xFFFF) len += 3;else len += 4;
      }

      return len;
    } // end include: runtime_strings.js
    // include: runtime_strings_extra.js
    // runtime_strings_extra.js: Strings related runtime functions that are available only in regular runtime.
    // Given a pointer 'ptr' to a null-terminated ASCII-encoded string in the emscripten HEAP, returns
    // a copy of that string as a Javascript String object.


    function AsciiToString(ptr) {
      var str = '';

      while (1) {
        var ch = HEAPU8[ptr++ >> 0];
        if (!ch) return str;
        str += String.fromCharCode(ch);
      }
    } // Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
    // null-terminated and encoded in ASCII form. The copy will require at most str.length+1 bytes of space in the HEAP.


    function stringToAscii(str, outPtr) {
      return writeAsciiToMemory(str, outPtr, false);
    } // Given a pointer 'ptr' to a null-terminated UTF16LE-encoded string in the emscripten HEAP, returns
    // a copy of that string as a Javascript String object.


    var UTF16Decoder = typeof TextDecoder != 'undefined' ? new TextDecoder('utf-16le') : undefined;

    function UTF16ToString(ptr, maxBytesToRead) {
      assert(ptr % 2 == 0, 'Pointer passed to UTF16ToString must be aligned to two bytes!');
      var endPtr = ptr; // TextDecoder needs to know the byte length in advance, it doesn't stop on null terminator by itself.
      // Also, use the length info to avoid running tiny strings through TextDecoder, since .subarray() allocates garbage.

      var idx = endPtr >> 1;
      var maxIdx = idx + maxBytesToRead / 2; // If maxBytesToRead is not passed explicitly, it will be undefined, and this
      // will always evaluate to true. This saves on code size.

      while (!(idx >= maxIdx) && HEAPU16[idx]) ++idx;

      endPtr = idx << 1;

      if (endPtr - ptr > 32 && UTF16Decoder) {
        return UTF16Decoder.decode(HEAPU8.subarray(ptr, endPtr));
      } else {
        var str = ''; // If maxBytesToRead is not passed explicitly, it will be undefined, and the for-loop's condition
        // will always evaluate to true. The loop is then terminated on the first null char.

        for (var i = 0; !(i >= maxBytesToRead / 2); ++i) {
          var codeUnit = HEAP16[ptr + i * 2 >> 1];
          if (codeUnit == 0) break; // fromCharCode constructs a character from a UTF-16 code unit, so we can pass the UTF16 string right through.

          str += String.fromCharCode(codeUnit);
        }

        return str;
      }
    } // Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
    // null-terminated and encoded in UTF16 form. The copy will require at most str.length*4+2 bytes of space in the HEAP.
    // Use the function lengthBytesUTF16() to compute the exact number of bytes (excluding null terminator) that this function will write.
    // Parameters:
    //   str: the Javascript string to copy.
    //   outPtr: Byte address in Emscripten HEAP where to write the string to.
    //   maxBytesToWrite: The maximum number of bytes this function can write to the array. This count should include the null
    //                    terminator, i.e. if maxBytesToWrite=2, only the null terminator will be written and nothing else.
    //                    maxBytesToWrite<2 does not write any bytes to the output, not even the null terminator.
    // Returns the number of bytes written, EXCLUDING the null terminator.


    function stringToUTF16(str, outPtr, maxBytesToWrite) {
      assert(outPtr % 2 == 0, 'Pointer passed to stringToUTF16 must be aligned to two bytes!');
      assert(typeof maxBytesToWrite == 'number', 'stringToUTF16(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!'); // Backwards compatibility: if max bytes is not specified, assume unsafe unbounded write is allowed.

      if (maxBytesToWrite === undefined) {
        maxBytesToWrite = 0x7FFFFFFF;
      }

      if (maxBytesToWrite < 2) return 0;
      maxBytesToWrite -= 2; // Null terminator.

      var startPtr = outPtr;
      var numCharsToWrite = maxBytesToWrite < str.length * 2 ? maxBytesToWrite / 2 : str.length;

      for (var i = 0; i < numCharsToWrite; ++i) {
        // charCodeAt returns a UTF-16 encoded code unit, so it can be directly written to the HEAP.
        var codeUnit = str.charCodeAt(i); // possibly a lead surrogate

        HEAP16[outPtr >> 1] = codeUnit;
        outPtr += 2;
      } // Null-terminate the pointer to the HEAP.


      HEAP16[outPtr >> 1] = 0;
      return outPtr - startPtr;
    } // Returns the number of bytes the given Javascript string takes if encoded as a UTF16 byte array, EXCLUDING the null terminator byte.


    function lengthBytesUTF16(str) {
      return str.length * 2;
    }

    function UTF32ToString(ptr, maxBytesToRead) {
      assert(ptr % 4 == 0, 'Pointer passed to UTF32ToString must be aligned to four bytes!');
      var i = 0;
      var str = ''; // If maxBytesToRead is not passed explicitly, it will be undefined, and this
      // will always evaluate to true. This saves on code size.

      while (!(i >= maxBytesToRead / 4)) {
        var utf32 = HEAP32[ptr + i * 4 >> 2];
        if (utf32 == 0) break;
        ++i; // Gotcha: fromCharCode constructs a character from a UTF-16 encoded code (pair), not from a Unicode code point! So encode the code point to UTF-16 for constructing.
        // See http://unicode.org/faq/utf_bom.html#utf16-3

        if (utf32 >= 0x10000) {
          var ch = utf32 - 0x10000;
          str += String.fromCharCode(0xD800 | ch >> 10, 0xDC00 | ch & 0x3FF);
        } else {
          str += String.fromCharCode(utf32);
        }
      }

      return str;
    } // Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
    // null-terminated and encoded in UTF32 form. The copy will require at most str.length*4+4 bytes of space in the HEAP.
    // Use the function lengthBytesUTF32() to compute the exact number of bytes (excluding null terminator) that this function will write.
    // Parameters:
    //   str: the Javascript string to copy.
    //   outPtr: Byte address in Emscripten HEAP where to write the string to.
    //   maxBytesToWrite: The maximum number of bytes this function can write to the array. This count should include the null
    //                    terminator, i.e. if maxBytesToWrite=4, only the null terminator will be written and nothing else.
    //                    maxBytesToWrite<4 does not write any bytes to the output, not even the null terminator.
    // Returns the number of bytes written, EXCLUDING the null terminator.


    function stringToUTF32(str, outPtr, maxBytesToWrite) {
      assert(outPtr % 4 == 0, 'Pointer passed to stringToUTF32 must be aligned to four bytes!');
      assert(typeof maxBytesToWrite == 'number', 'stringToUTF32(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!'); // Backwards compatibility: if max bytes is not specified, assume unsafe unbounded write is allowed.

      if (maxBytesToWrite === undefined) {
        maxBytesToWrite = 0x7FFFFFFF;
      }

      if (maxBytesToWrite < 4) return 0;
      var startPtr = outPtr;
      var endPtr = startPtr + maxBytesToWrite - 4;

      for (var i = 0; i < str.length; ++i) {
        // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! We must decode the string to UTF-32 to the heap.
        // See http://unicode.org/faq/utf_bom.html#utf16-3
        var codeUnit = str.charCodeAt(i); // possibly a lead surrogate

        if (codeUnit >= 0xD800 && codeUnit <= 0xDFFF) {
          var trailSurrogate = str.charCodeAt(++i);
          codeUnit = 0x10000 + ((codeUnit & 0x3FF) << 10) | trailSurrogate & 0x3FF;
        }

        HEAP32[outPtr >> 2] = codeUnit;
        outPtr += 4;
        if (outPtr + 4 > endPtr) break;
      } // Null-terminate the pointer to the HEAP.


      HEAP32[outPtr >> 2] = 0;
      return outPtr - startPtr;
    } // Returns the number of bytes the given Javascript string takes if encoded as a UTF16 byte array, EXCLUDING the null terminator byte.


    function lengthBytesUTF32(str) {
      var len = 0;

      for (var i = 0; i < str.length; ++i) {
        // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! We must decode the string to UTF-32 to the heap.
        // See http://unicode.org/faq/utf_bom.html#utf16-3
        var codeUnit = str.charCodeAt(i);
        if (codeUnit >= 0xD800 && codeUnit <= 0xDFFF) ++i; // possibly a lead surrogate, so skip over the tail surrogate.

        len += 4;
      }

      return len;
    } // Allocate heap space for a JS string, and write it there.
    // It is the responsibility of the caller to free() that memory.


    function allocateUTF8(str) {
      var size = lengthBytesUTF8(str) + 1;

      var ret = _malloc(size);

      if (ret) stringToUTF8Array(str, HEAP8, ret, size);
      return ret;
    } // Allocate stack space for a JS string, and write it there.


    function allocateUTF8OnStack(str) {
      var size = lengthBytesUTF8(str) + 1;
      var ret = stackAlloc(size);
      stringToUTF8Array(str, HEAP8, ret, size);
      return ret;
    } // Deprecated: This function should not be called because it is unsafe and does not provide
    // a maximum length limit of how many bytes it is allowed to write. Prefer calling the
    // function stringToUTF8Array() instead, which takes in a maximum length that can be used
    // to be secure from out of bounds writes.

    /** @deprecated
        @param {boolean=} dontAddNull */


    function writeStringToMemory(string, buffer, dontAddNull) {
      warnOnce('writeStringToMemory is deprecated and should not be called! Use stringToUTF8() instead!');
      var
      /** @type {number} */
      lastChar,
      /** @type {number} */
      end;

      if (dontAddNull) {
        // stringToUTF8Array always appends null. If we don't want to do that, remember the
        // character that existed at the location where the null will be placed, and restore
        // that after the write (below).
        end = buffer + lengthBytesUTF8(string);
        lastChar = HEAP8[end];
      }

      stringToUTF8(string, buffer, Infinity);
      if (dontAddNull) HEAP8[end] = lastChar; // Restore the value under the null character.
    }

    function writeArrayToMemory(array, buffer) {
      assert(array.length >= 0, 'writeArrayToMemory array must have a length (should be an array or typed array)');
      HEAP8.set(array, buffer);
    }
    /** @param {boolean=} dontAddNull */


    function writeAsciiToMemory(str, buffer, dontAddNull) {
      for (var i = 0; i < str.length; ++i) {
        assert(str.charCodeAt(i) === (str.charCodeAt(i) & 0xff));
        HEAP8[buffer++ >> 0] = str.charCodeAt(i);
      } // Null-terminate the pointer to the HEAP.


      if (!dontAddNull) HEAP8[buffer >> 0] = 0;
    } // end include: runtime_strings_extra.js
    // Memory management


    var HEAP,
    /** @type {!ArrayBuffer} */
    buffer,
    /** @type {!Int8Array} */
    HEAP8,
    /** @type {!Uint8Array} */
    HEAPU8,
    /** @type {!Int16Array} */
    HEAP16,
    /** @type {!Uint16Array} */
    HEAPU16,
    /** @type {!Int32Array} */
    HEAP32,
    /** @type {!Uint32Array} */
    HEAPU32,
    /** @type {!Float32Array} */
    HEAPF32,
    /** @type {!Float64Array} */
    HEAPF64;

    function updateGlobalBufferAndViews(buf) {
      buffer = buf;
      Module['HEAP8'] = HEAP8 = new Int8Array(buf);
      Module['HEAP16'] = HEAP16 = new Int16Array(buf);
      Module['HEAP32'] = HEAP32 = new Int32Array(buf);
      Module['HEAPU8'] = HEAPU8 = new Uint8Array(buf);
      Module['HEAPU16'] = HEAPU16 = new Uint16Array(buf);
      Module['HEAPU32'] = HEAPU32 = new Uint32Array(buf);
      Module['HEAPF32'] = HEAPF32 = new Float32Array(buf);
      Module['HEAPF64'] = HEAPF64 = new Float64Array(buf);
    }

    var TOTAL_STACK = 5242880;
    if (Module['TOTAL_STACK']) assert(TOTAL_STACK === Module['TOTAL_STACK'], 'the stack size can no longer be determined at runtime');
    var INITIAL_MEMORY = Module['INITIAL_MEMORY'] || 16777216;
    legacyModuleProp('INITIAL_MEMORY', 'INITIAL_MEMORY');
    assert(INITIAL_MEMORY >= TOTAL_STACK, 'INITIAL_MEMORY should be larger than TOTAL_STACK, was ' + INITIAL_MEMORY + '! (TOTAL_STACK=' + TOTAL_STACK + ')'); // check for full engine support (use string 'subarray' to avoid closure compiler confusion)

    assert(typeof Int32Array != 'undefined' && typeof Float64Array !== 'undefined' && Int32Array.prototype.subarray != undefined && Int32Array.prototype.set != undefined, 'JS engine does not provide full typed array support'); // If memory is defined in wasm, the user can't provide it.

    assert(!Module['wasmMemory'], 'Use of `wasmMemory` detected.  Use -sIMPORTED_MEMORY to define wasmMemory externally');
    assert(INITIAL_MEMORY == 16777216, 'Detected runtime INITIAL_MEMORY setting.  Use -sIMPORTED_MEMORY to define wasmMemory dynamically'); // include: runtime_init_table.js
    // In regular non-RELOCATABLE mode the table is exported
    // from the wasm module and this will be assigned once
    // the exports are available.

    var wasmTable; // end include: runtime_init_table.js
    // include: runtime_stack_check.js
    // Initializes the stack cookie. Called at the startup of main and at the startup of each thread in pthreads mode.

    function writeStackCookie() {
      var max = _emscripten_stack_get_end();

      assert((max & 3) == 0); // The stack grow downwards towards _emscripten_stack_get_end.
      // We write cookies to the final two words in the stack and detect if they are
      // ever overwritten.

      HEAP32[max >> 2] = 0x2135467;
      HEAP32[max + 4 >> 2] = 0x89BACDFE; // Also test the global address 0 for integrity.

      HEAPU32[0] = 0x63736d65;
      /* 'emsc' */
    }

    function checkStackCookie() {
      if (ABORT) return;

      var max = _emscripten_stack_get_end();

      var cookie1 = HEAPU32[max >> 2];
      var cookie2 = HEAPU32[max + 4 >> 2];

      if (cookie1 != 0x2135467 || cookie2 != 0x89BACDFE) {
        abort('Stack overflow! Stack cookie has been overwritten at 0x' + max.toString(16) + ', expected hex dwords 0x89BACDFE and 0x2135467, but received 0x' + cookie2.toString(16) + ' 0x' + cookie1.toString(16));
      } // Also test the global address 0 for integrity.


      if (HEAPU32[0] !== 0x63736d65
      /* 'emsc' */
      ) abort('Runtime error: The application has corrupted its heap memory area (address zero)!');
    } // end include: runtime_stack_check.js
    // include: runtime_assertions.js
    // Endianness check


    (function () {
      var h16 = new Int16Array(1);
      var h8 = new Int8Array(h16.buffer);
      h16[0] = 0x6373;
      if (h8[0] !== 0x73 || h8[1] !== 0x63) throw 'Runtime error: expected the system to be little-endian! (Run with -sSUPPORT_BIG_ENDIAN to bypass)';
    })(); // end include: runtime_assertions.js


    var __ATPRERUN__ = []; // functions called before the runtime is initialized

    var __ATINIT__ = []; // functions called during startup

    var __ATEXIT__ = []; // functions called during shutdown

    var __ATPOSTRUN__ = []; // functions called after the main() is called

    var runtimeInitialized = false;

    function keepRuntimeAlive() {
      return noExitRuntime;
    }

    function preRun() {
      if (Module['preRun']) {
        if (typeof Module['preRun'] == 'function') Module['preRun'] = [Module['preRun']];

        while (Module['preRun'].length) {
          addOnPreRun(Module['preRun'].shift());
        }
      }

      callRuntimeCallbacks(__ATPRERUN__);
    }

    function initRuntime() {
      assert(!runtimeInitialized);
      runtimeInitialized = true;
      checkStackCookie();
      callRuntimeCallbacks(__ATINIT__);
    }

    function postRun() {
      checkStackCookie();

      if (Module['postRun']) {
        if (typeof Module['postRun'] == 'function') Module['postRun'] = [Module['postRun']];

        while (Module['postRun'].length) {
          addOnPostRun(Module['postRun'].shift());
        }
      }

      callRuntimeCallbacks(__ATPOSTRUN__);
    }

    function addOnPreRun(cb) {
      __ATPRERUN__.unshift(cb);
    }

    function addOnInit(cb) {
      __ATINIT__.unshift(cb);
    }

    function addOnExit(cb) {}

    function addOnPostRun(cb) {
      __ATPOSTRUN__.unshift(cb);
    } // include: runtime_math.js
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/imul
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/fround
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/clz32
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc


    assert(Math.imul, 'This browser does not support Math.imul(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill');
    assert(Math.fround, 'This browser does not support Math.fround(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill');
    assert(Math.clz32, 'This browser does not support Math.clz32(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill');
    assert(Math.trunc, 'This browser does not support Math.trunc(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill'); // end include: runtime_math.js
    // A counter of dependencies for calling run(). If we need to
    // do asynchronous work before running, increment this and
    // decrement it. Incrementing must happen in a place like
    // Module.preRun (used by emcc to add file preloading).
    // Note that you can add dependencies in preRun, even though
    // it happens right before run - run will be postponed until
    // the dependencies are met.

    var runDependencies = 0;
    var runDependencyWatcher = null;
    var dependenciesFulfilled = null; // overridden to take different actions when all run dependencies are fulfilled

    var runDependencyTracking = {};

    function getUniqueRunDependency(id) {
      var orig = id;

      while (1) {
        if (!runDependencyTracking[id]) return id;
        id = orig + Math.random();
      }
    }

    function addRunDependency(id) {
      runDependencies++;

      if (Module['monitorRunDependencies']) {
        Module['monitorRunDependencies'](runDependencies);
      }

      if (id) {
        assert(!runDependencyTracking[id]);
        runDependencyTracking[id] = 1;

        if (runDependencyWatcher === null && typeof setInterval != 'undefined') {
          // Check for missing dependencies every few seconds
          runDependencyWatcher = setInterval(function () {
            if (ABORT) {
              clearInterval(runDependencyWatcher);
              runDependencyWatcher = null;
              return;
            }

            var shown = false;

            for (var dep in runDependencyTracking) {
              if (!shown) {
                shown = true;
                err('still waiting on run dependencies:');
              }

              err('dependency: ' + dep);
            }

            if (shown) {
              err('(end of list)');
            }
          }, 10000);
        }
      } else {
        err('warning: run dependency added without ID');
      }
    }

    function removeRunDependency(id) {
      runDependencies--;

      if (Module['monitorRunDependencies']) {
        Module['monitorRunDependencies'](runDependencies);
      }

      if (id) {
        assert(runDependencyTracking[id]);
        delete runDependencyTracking[id];
      } else {
        err('warning: run dependency removed without ID');
      }

      if (runDependencies == 0) {
        if (runDependencyWatcher !== null) {
          clearInterval(runDependencyWatcher);
          runDependencyWatcher = null;
        }

        if (dependenciesFulfilled) {
          var callback = dependenciesFulfilled;
          dependenciesFulfilled = null;
          callback(); // can add another dependenciesFulfilled
        }
      }
    }
    /** @param {string|number=} what */


    function abort(what) {
      {
        if (Module['onAbort']) {
          Module['onAbort'](what);
        }
      }
      what = 'Aborted(' + what + ')'; // TODO(sbc): Should we remove printing and leave it up to whoever
      // catches the exception?

      err(what);
      ABORT = true;
      EXITSTATUS = 1; // Use a wasm runtime error, because a JS error might be seen as a foreign
      // exception, which means we'd run destructors on it. We need the error to
      // simply make the program stop.
      // FIXME This approach does not work in Wasm EH because it currently does not assume
      // all RuntimeErrors are from traps; it decides whether a RuntimeError is from
      // a trap or not based on a hidden field within the object. So at the moment
      // we don't have a way of throwing a wasm trap from JS. TODO Make a JS API that
      // allows this in the wasm spec.
      // Suppress closure compiler warning here. Closure compiler's builtin extern
      // defintion for WebAssembly.RuntimeError claims it takes no arguments even
      // though it can.
      // TODO(https://github.com/google/closure-compiler/pull/3913): Remove if/when upstream closure gets fixed.

      /** @suppress {checkTypes} */

      var e = new WebAssembly.RuntimeError(what);
      readyPromiseReject(e); // Throw the error whether or not MODULARIZE is set because abort is used
      // in code paths apart from instantiation where an exception is expected
      // to be thrown when abort is called.

      throw e;
    } // {{MEM_INITIALIZER}}
    // include: memoryprofiler.js
    // end include: memoryprofiler.js
    // show errors on likely calls to FS when it was not included


    var FS = {
      error: function () {
        abort('Filesystem support (FS) was not included. The problem is that you are using files from JS, but files were not used from C/C++, so filesystem support was not auto-included. You can force-include filesystem support with -sFORCE_FILESYSTEM');
      },
      init: function () {
        FS.error();
      },
      createDataFile: function () {
        FS.error();
      },
      createPreloadedFile: function () {
        FS.error();
      },
      createLazyFile: function () {
        FS.error();
      },
      open: function () {
        FS.error();
      },
      mkdev: function () {
        FS.error();
      },
      registerDevice: function () {
        FS.error();
      },
      analyzePath: function () {
        FS.error();
      },
      loadFilesFromDB: function () {
        FS.error();
      },
      ErrnoError: function ErrnoError() {
        FS.error();
      }
    };
    Module['FS_createDataFile'] = FS.createDataFile;
    Module['FS_createPreloadedFile'] = FS.createPreloadedFile; // include: URIUtils.js
    // Prefix of data URIs emitted by SINGLE_FILE and related options.

    var dataURIPrefix = 'data:application/octet-stream;base64,'; // Indicates whether filename is a base64 data URI.

    function isDataURI(filename) {
      // Prefix of data URIs emitted by SINGLE_FILE and related options.
      return filename.startsWith(dataURIPrefix);
    } // Indicates whether filename is delivered via file protocol (as opposed to http/https)


    function isFileURI(filename) {
      return filename.startsWith('file://');
    } // end include: URIUtils.js

    /** @param {boolean=} fixedasm */


    function createExportWrapper(name, fixedasm) {
      return function () {
        var displayName = name;
        var asm = fixedasm;

        if (!fixedasm) {
          asm = Module['asm'];
        }

        assert(runtimeInitialized, 'native function `' + displayName + '` called before runtime initialization');

        if (!asm[name]) {
          assert(asm[name], 'exported native function `' + displayName + '` not found');
        }

        return asm[name].apply(null, arguments);
      };
    }

    var wasmBinaryFile;
    wasmBinaryFile = 'assets/jessica-web.wasm';

    if (!isDataURI(wasmBinaryFile)) {
      wasmBinaryFile = locateFile(wasmBinaryFile);
    }

    function getBinary(file) {
      try {
        if (file == wasmBinaryFile && wasmBinary) {
          return new Uint8Array(wasmBinary);
        }

        if (readBinary) {
          return readBinary(file);
        } else {
          throw "both async and sync fetching of the wasm failed";
        }
      } catch (err) {
        abort(err);
      }
    }

    function getBinaryPromise() {
      // If we don't have the binary yet, try to to load it asynchronously.
      // Fetch has some additional restrictions over XHR, like it can't be used on a file:// url.
      // See https://github.com/github/fetch/pull/92#issuecomment-140665932
      // Cordova or Electron apps are typically loaded from a file:// url.
      // So use fetch if it is available and the url is not a file, otherwise fall back to XHR.
      if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER)) {
        if (typeof fetch == 'function') {
          return fetch(wasmBinaryFile, {
            credentials: 'same-origin'
          }).then(function (response) {
            if (!response['ok']) {
              throw "failed to load wasm binary file at '" + wasmBinaryFile + "'";
            }

            return response['arrayBuffer']();
          }).catch(function () {
            return getBinary(wasmBinaryFile);
          });
        }
      } // Otherwise, getBinary should be able to get it synchronously


      return Promise.resolve().then(function () {
        return getBinary(wasmBinaryFile);
      });
    } // Create the wasm instance.
    // Receives the wasm imports, returns the exports.


    function createWasm() {
      // prepare imports
      var info = {
        'env': asmLibraryArg,
        'wasi_snapshot_preview1': asmLibraryArg
      }; // Load the wasm module and create an instance of using native support in the JS engine.
      // handle a generated wasm instance, receiving its exports and
      // performing other necessary setup

      /** @param {WebAssembly.Module=} module*/

      function receiveInstance(instance, module) {
        var exports = instance.exports;
        Module['asm'] = exports;
        wasmMemory = Module['asm']['memory'];
        assert(wasmMemory, "memory not found in wasm exports"); // This assertion doesn't hold when emscripten is run in --post-link
        // mode.
        // TODO(sbc): Read INITIAL_MEMORY out of the wasm file in post-link mode.
        //assert(wasmMemory.buffer.byteLength === 16777216);

        updateGlobalBufferAndViews(wasmMemory.buffer);
        wasmTable = Module['asm']['__indirect_function_table'];
        assert(wasmTable, "table not found in wasm exports");
        addOnInit(Module['asm']['__wasm_call_ctors']);
        removeRunDependency('wasm-instantiate');
      } // we can't run yet (except in a pthread, where we have a custom sync instantiator)


      addRunDependency('wasm-instantiate'); // Prefer streaming instantiation if available.
      // Async compilation can be confusing when an error on the page overwrites Module
      // (for example, if the order of elements is wrong, and the one defining Module is
      // later), so we save Module and check it later.

      var trueModule = Module;

      function receiveInstantiationResult(result) {
        // 'result' is a ResultObject object which has both the module and instance.
        // receiveInstance() will swap in the exports (to Module.asm) so they can be called
        assert(Module === trueModule, 'the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?');
        trueModule = null; // TODO: Due to Closure regression https://github.com/google/closure-compiler/issues/3193, the above line no longer optimizes out down to the following line.
        // When the regression is fixed, can restore the above USE_PTHREADS-enabled path.

        receiveInstance(result['instance']);
      }

      function instantiateArrayBuffer(receiver) {
        return getBinaryPromise().then(function (binary) {
          return WebAssembly.instantiate(binary, info);
        }).then(function (instance) {
          return instance;
        }).then(receiver, function (reason) {
          err('failed to asynchronously prepare wasm: ' + reason); // Warn on some common problems.

          if (isFileURI(wasmBinaryFile)) {
            err('warning: Loading from a file URI (' + wasmBinaryFile + ') is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing');
          }

          abort(reason);
        });
      }

      function instantiateAsync() {
        if (!wasmBinary && typeof WebAssembly.instantiateStreaming == 'function' && !isDataURI(wasmBinaryFile) && typeof fetch == 'function') {
          return fetch(wasmBinaryFile, {
            credentials: 'same-origin'
          }).then(function (response) {
            // Suppress closure warning here since the upstream definition for
            // instantiateStreaming only allows Promise<Repsponse> rather than
            // an actual Response.
            // TODO(https://github.com/google/closure-compiler/pull/3913): Remove if/when upstream closure is fixed.

            /** @suppress {checkTypes} */
            var result = WebAssembly.instantiateStreaming(response, info);
            return result.then(receiveInstantiationResult, function (reason) {
              // We expect the most common failure cause to be a bad MIME type for the binary,
              // in which case falling back to ArrayBuffer instantiation should work.
              err('wasm streaming compile failed: ' + reason);
              err('falling back to ArrayBuffer instantiation');
              return instantiateArrayBuffer(receiveInstantiationResult);
            });
          });
        } else {
          return instantiateArrayBuffer(receiveInstantiationResult);
        }
      } // User shell pages can write their own Module.instantiateWasm = function(imports, successCallback) callback
      // to manually instantiate the Wasm module themselves. This allows pages to run the instantiation parallel
      // to any other async startup actions they are performing.
      // Also pthreads and wasm workers initialize the wasm instance through this path.


      if (Module['instantiateWasm']) {
        try {
          var exports = Module['instantiateWasm'](info, receiveInstance);
          return exports;
        } catch (e) {
          err('Module.instantiateWasm callback failed with error: ' + e);
          return false;
        }
      } // If instantiation fails, reject the module ready promise.


      instantiateAsync().catch(readyPromiseReject);
      return {}; // no exports yet; we'll fill them in later
    } // Globals used by JS i64 conversions (see makeSetValue)


    var tempDouble;
    var tempI64; // === Body ===

    var ASM_CONSTS = {};

    function callRuntimeCallbacks(callbacks) {
      while (callbacks.length > 0) {
        var callback = callbacks.shift();

        if (typeof callback == 'function') {
          callback(Module); // Pass the module as the first argument.

          continue;
        }

        var func = callback.func;

        if (typeof func == 'number') {
          if (callback.arg === undefined) {
            // Run the wasm function ptr with signature 'v'. If no function
            // with such signature was exported, this call does not need
            // to be emitted (and would confuse Closure)
            getWasmTableEntry(func)();
          } else {
            // If any function with signature 'vi' was exported, run
            // the callback with that signature.
            getWasmTableEntry(func)(callback.arg);
          }
        } else {
          func(callback.arg === undefined ? null : callback.arg);
        }
      }
    }

    function withStackSave(f) {
      var stack = stackSave();
      var ret = f();
      stackRestore(stack);
      return ret;
    }

    function demangle(func) {
      // If demangle has failed before, stop demangling any further function names
      // This avoids an infinite recursion with malloc()->abort()->stackTrace()->demangle()->malloc()->...
      demangle.recursionGuard = (demangle.recursionGuard | 0) + 1;
      if (demangle.recursionGuard > 1) return func;

      var __cxa_demangle_func = Module['___cxa_demangle'] || Module['__cxa_demangle'];

      assert(__cxa_demangle_func);
      return withStackSave(function () {
        try {
          var s = func;
          if (s.startsWith('__Z')) s = s.substr(1);
          var len = lengthBytesUTF8(s) + 1;
          var buf = stackAlloc(len);
          stringToUTF8(s, buf, len);
          var status = stackAlloc(4);

          var ret = __cxa_demangle_func(buf, 0, 0, status);

          if (HEAP32[status >> 2] === 0 && ret) {
            return UTF8ToString(ret);
          } // otherwise, libcxxabi failed

        } catch (e) {} finally {
          _free(ret);

          if (demangle.recursionGuard < 2) --demangle.recursionGuard;
        } // failure when using libcxxabi, don't demangle


        return func;
      });
    }

    function demangleAll(text) {
      var regex = /\b_Z[\w\d_]+/g;
      return text.replace(regex, function (x) {
        var y = demangle(x);
        return x === y ? x : y + ' [' + x + ']';
      });
    }
    /**
     * @param {number} ptr
     * @param {string} type
     */


    function getValue(ptr, type = 'i8') {
      if (type.endsWith('*')) type = 'i32';

      switch (type) {
        case 'i1':
          return HEAP8[ptr >> 0];

        case 'i8':
          return HEAP8[ptr >> 0];

        case 'i16':
          return HEAP16[ptr >> 1];

        case 'i32':
          return HEAP32[ptr >> 2];

        case 'i64':
          return HEAP32[ptr >> 2];

        case 'float':
          return HEAPF32[ptr >> 2];

        case 'double':
          return Number(HEAPF64[ptr >> 3]);

        default:
          abort('invalid type for getValue: ' + type);
      }

      return null;
    }

    var wasmTableMirror = [];

    function getWasmTableEntry(funcPtr) {
      var func = wasmTableMirror[funcPtr];

      if (!func) {
        if (funcPtr >= wasmTableMirror.length) wasmTableMirror.length = funcPtr + 1;
        wasmTableMirror[funcPtr] = func = wasmTable.get(funcPtr);
      }

      assert(wasmTable.get(funcPtr) == func, "JavaScript-side Wasm function table mirror is out of date!");
      return func;
    }

    function handleException(e) {
      // Certain exception types we do not treat as errors since they are used for
      // internal control flow.
      // 1. ExitStatus, which is thrown by exit()
      // 2. "unwind", which is thrown by emscripten_unwind_to_js_event_loop() and others
      //    that wish to return to JS event loop.
      if (e instanceof ExitStatus || e == 'unwind') {
        return EXITSTATUS;
      }

      quit_(1, e);
    }

    function jsStackTrace() {
      var error = new Error();

      if (!error.stack) {
        // IE10+ special cases: It does have callstack info, but it is only
        // populated if an Error object is thrown, so try that as a special-case.
        try {
          throw new Error();
        } catch (e) {
          error = e;
        }

        if (!error.stack) {
          return '(no stack trace available)';
        }
      }

      return error.stack.toString();
    }
    /**
     * @param {number} ptr
     * @param {number} value
     * @param {string} type
     */


    function setValue(ptr, value, type = 'i8') {
      if (type.endsWith('*')) type = 'i32';

      switch (type) {
        case 'i1':
          HEAP8[ptr >> 0] = value;
          break;

        case 'i8':
          HEAP8[ptr >> 0] = value;
          break;

        case 'i16':
          HEAP16[ptr >> 1] = value;
          break;

        case 'i32':
          HEAP32[ptr >> 2] = value;
          break;

        case 'i64':
          tempI64 = [value >>> 0, (tempDouble = value, +Math.abs(tempDouble) >= 1.0 ? tempDouble > 0.0 ? (Math.min(+Math.floor(tempDouble / 4294967296.0), 4294967295.0) | 0) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296.0) >>> 0 : 0)], HEAP32[ptr >> 2] = tempI64[0], HEAP32[ptr + 4 >> 2] = tempI64[1];
          break;

        case 'float':
          HEAPF32[ptr >> 2] = value;
          break;

        case 'double':
          HEAPF64[ptr >> 3] = value;
          break;

        default:
          abort('invalid type for setValue: ' + type);
      }
    }

    function setWasmTableEntry(idx, func) {
      wasmTable.set(idx, func); // With ABORT_ON_WASM_EXCEPTIONS wasmTable.get is overriden to return wrapped
      // functions so we need to call it here to retrieve the potential wrapper correctly
      // instead of just storing 'func' directly into wasmTableMirror

      wasmTableMirror[idx] = wasmTable.get(idx);
    }

    function stackTrace() {
      var js = jsStackTrace();
      if (Module['extraStackTrace']) js += '\n' + Module['extraStackTrace']();
      return demangleAll(js);
    }

    function ___assert_fail(condition, filename, line, func) {
      abort('Assertion failed: ' + UTF8ToString(condition) + ', at: ' + [filename ? UTF8ToString(filename) : 'unknown filename', line, func ? UTF8ToString(func) : 'unknown function']);
    }

    function ___cxa_allocate_exception(size) {
      // Thrown object is prepended by exception metadata block
      return _malloc(size + 24) + 24;
    }
    /** @constructor */


    function ExceptionInfo(excPtr) {
      this.excPtr = excPtr;
      this.ptr = excPtr - 24;

      this.set_type = function (type) {
        HEAPU32[this.ptr + 4 >> 2] = type;
      };

      this.get_type = function () {
        return HEAPU32[this.ptr + 4 >> 2];
      };

      this.set_destructor = function (destructor) {
        HEAPU32[this.ptr + 8 >> 2] = destructor;
      };

      this.get_destructor = function () {
        return HEAPU32[this.ptr + 8 >> 2];
      };

      this.set_refcount = function (refcount) {
        HEAP32[this.ptr >> 2] = refcount;
      };

      this.set_caught = function (caught) {
        caught = caught ? 1 : 0;
        HEAP8[this.ptr + 12 >> 0] = caught;
      };

      this.get_caught = function () {
        return HEAP8[this.ptr + 12 >> 0] != 0;
      };

      this.set_rethrown = function (rethrown) {
        rethrown = rethrown ? 1 : 0;
        HEAP8[this.ptr + 13 >> 0] = rethrown;
      };

      this.get_rethrown = function () {
        return HEAP8[this.ptr + 13 >> 0] != 0;
      }; // Initialize native structure fields. Should be called once after allocated.


      this.init = function (type, destructor) {
        this.set_adjusted_ptr(0);
        this.set_type(type);
        this.set_destructor(destructor);
        this.set_refcount(0);
        this.set_caught(false);
        this.set_rethrown(false);
      };

      this.add_ref = function () {
        var value = HEAP32[this.ptr >> 2];
        HEAP32[this.ptr >> 2] = value + 1;
      }; // Returns true if last reference released.


      this.release_ref = function () {
        var prev = HEAP32[this.ptr >> 2];
        HEAP32[this.ptr >> 2] = prev - 1;
        assert(prev > 0);
        return prev === 1;
      };

      this.set_adjusted_ptr = function (adjustedPtr) {
        HEAPU32[this.ptr + 16 >> 2] = adjustedPtr;
      };

      this.get_adjusted_ptr = function () {
        return HEAPU32[this.ptr + 16 >> 2];
      }; // Get pointer which is expected to be received by catch clause in C++ code. It may be adjusted
      // when the pointer is casted to some of the exception object base classes (e.g. when virtual
      // inheritance is used). When a pointer is thrown this method should return the thrown pointer
      // itself.


      this.get_exception_ptr = function () {
        // Work around a fastcomp bug, this code is still included for some reason in a build without
        // exceptions support.
        var isPointer = ___cxa_is_pointer_type(this.get_type());

        if (isPointer) {
          return HEAPU32[this.excPtr >> 2];
        }

        var adjusted = this.get_adjusted_ptr();
        if (adjusted !== 0) return adjusted;
        return this.excPtr;
      };
    }

    var exceptionLast = 0;
    var uncaughtExceptionCount = 0;

    function ___cxa_throw(ptr, type, destructor) {
      var info = new ExceptionInfo(ptr); // Initialize ExceptionInfo content after it was allocated in __cxa_allocate_exception.

      info.init(type, destructor);
      exceptionLast = ptr;
      uncaughtExceptionCount++;
      throw ptr + " - Exception catching is disabled, this exception cannot be caught. Compile with -sNO_DISABLE_EXCEPTION_CATCHING or -sEXCEPTION_CATCHING_ALLOWED=[..] to catch.";
    }

    function __embind_register_bigint(primitiveType, name, size, minRange, maxRange) {}

    function getShiftFromSize(size) {
      switch (size) {
        case 1:
          return 0;

        case 2:
          return 1;

        case 4:
          return 2;

        case 8:
          return 3;

        default:
          throw new TypeError('Unknown type size: ' + size);
      }
    }

    function embind_init_charCodes() {
      var codes = new Array(256);

      for (var i = 0; i < 256; ++i) {
        codes[i] = String.fromCharCode(i);
      }

      embind_charCodes = codes;
    }

    var embind_charCodes = undefined;

    function readLatin1String(ptr) {
      var ret = "";
      var c = ptr;

      while (HEAPU8[c]) {
        ret += embind_charCodes[HEAPU8[c++]];
      }

      return ret;
    }

    var awaitingDependencies = {};
    var registeredTypes = {};
    var typeDependencies = {};
    var char_0 = 48;
    var char_9 = 57;

    function makeLegalFunctionName(name) {
      if (undefined === name) {
        return '_unknown';
      }

      name = name.replace(/[^a-zA-Z0-9_]/g, '$');
      var f = name.charCodeAt(0);

      if (f >= char_0 && f <= char_9) {
        return '_' + name;
      }

      return name;
    }

    function createNamedFunction(name, body) {
      name = makeLegalFunctionName(name);
      /*jshint evil:true*/

      return new Function("body", "return function " + name + "() {\n" + "    \"use strict\";" + "    return body.apply(this, arguments);\n" + "};\n")(body);
    }

    function extendError(baseErrorType, errorName) {
      var errorClass = createNamedFunction(errorName, function (message) {
        this.name = errorName;
        this.message = message;
        var stack = new Error(message).stack;

        if (stack !== undefined) {
          this.stack = this.toString() + '\n' + stack.replace(/^Error(:[^\n]*)?\n/, '');
        }
      });
      errorClass.prototype = Object.create(baseErrorType.prototype);
      errorClass.prototype.constructor = errorClass;

      errorClass.prototype.toString = function () {
        if (this.message === undefined) {
          return this.name;
        } else {
          return this.name + ': ' + this.message;
        }
      };

      return errorClass;
    }

    var BindingError = undefined;

    function throwBindingError(message) {
      throw new BindingError(message);
    }

    var InternalError = undefined;

    function throwInternalError(message) {
      throw new InternalError(message);
    }

    function whenDependentTypesAreResolved(myTypes, dependentTypes, getTypeConverters) {
      myTypes.forEach(function (type) {
        typeDependencies[type] = dependentTypes;
      });

      function onComplete(typeConverters) {
        var myTypeConverters = getTypeConverters(typeConverters);

        if (myTypeConverters.length !== myTypes.length) {
          throwInternalError('Mismatched type converter count');
        }

        for (var i = 0; i < myTypes.length; ++i) {
          registerType(myTypes[i], myTypeConverters[i]);
        }
      }

      var typeConverters = new Array(dependentTypes.length);
      var unregisteredTypes = [];
      var registered = 0;
      dependentTypes.forEach((dt, i) => {
        if (registeredTypes.hasOwnProperty(dt)) {
          typeConverters[i] = registeredTypes[dt];
        } else {
          unregisteredTypes.push(dt);

          if (!awaitingDependencies.hasOwnProperty(dt)) {
            awaitingDependencies[dt] = [];
          }

          awaitingDependencies[dt].push(() => {
            typeConverters[i] = registeredTypes[dt];
            ++registered;

            if (registered === unregisteredTypes.length) {
              onComplete(typeConverters);
            }
          });
        }
      });

      if (0 === unregisteredTypes.length) {
        onComplete(typeConverters);
      }
    }
    /** @param {Object=} options */


    function registerType(rawType, registeredInstance, options = {}) {
      if (!('argPackAdvance' in registeredInstance)) {
        throw new TypeError('registerType registeredInstance requires argPackAdvance');
      }

      var name = registeredInstance.name;

      if (!rawType) {
        throwBindingError('type "' + name + '" must have a positive integer typeid pointer');
      }

      if (registeredTypes.hasOwnProperty(rawType)) {
        if (options.ignoreDuplicateRegistrations) {
          return;
        } else {
          throwBindingError("Cannot register type '" + name + "' twice");
        }
      }

      registeredTypes[rawType] = registeredInstance;
      delete typeDependencies[rawType];

      if (awaitingDependencies.hasOwnProperty(rawType)) {
        var callbacks = awaitingDependencies[rawType];
        delete awaitingDependencies[rawType];
        callbacks.forEach(cb => cb());
      }
    }

    function __embind_register_bool(rawType, name, size, trueValue, falseValue) {
      var shift = getShiftFromSize(size);
      name = readLatin1String(name);
      registerType(rawType, {
        name: name,
        'fromWireType': function (wt) {
          // ambiguous emscripten ABI: sometimes return values are
          // true or false, and sometimes integers (0 or 1)
          return !!wt;
        },
        'toWireType': function (destructors, o) {
          return o ? trueValue : falseValue;
        },
        'argPackAdvance': 8,
        'readValueFromPointer': function (pointer) {
          // TODO: if heap is fixed (like in asm.js) this could be executed outside
          var heap;

          if (size === 1) {
            heap = HEAP8;
          } else if (size === 2) {
            heap = HEAP16;
          } else if (size === 4) {
            heap = HEAP32;
          } else {
            throw new TypeError("Unknown boolean type size: " + name);
          }

          return this['fromWireType'](heap[pointer >> shift]);
        },
        destructorFunction: null // This type does not need a destructor

      });
    }

    function ClassHandle_isAliasOf(other) {
      if (!(this instanceof ClassHandle)) {
        return false;
      }

      if (!(other instanceof ClassHandle)) {
        return false;
      }

      var leftClass = this.$$.ptrType.registeredClass;
      var left = this.$$.ptr;
      var rightClass = other.$$.ptrType.registeredClass;
      var right = other.$$.ptr;

      while (leftClass.baseClass) {
        left = leftClass.upcast(left);
        leftClass = leftClass.baseClass;
      }

      while (rightClass.baseClass) {
        right = rightClass.upcast(right);
        rightClass = rightClass.baseClass;
      }

      return leftClass === rightClass && left === right;
    }

    function shallowCopyInternalPointer(o) {
      return {
        count: o.count,
        deleteScheduled: o.deleteScheduled,
        preservePointerOnDelete: o.preservePointerOnDelete,
        ptr: o.ptr,
        ptrType: o.ptrType,
        smartPtr: o.smartPtr,
        smartPtrType: o.smartPtrType
      };
    }

    function throwInstanceAlreadyDeleted(obj) {
      function getInstanceTypeName(handle) {
        return handle.$$.ptrType.registeredClass.name;
      }

      throwBindingError(getInstanceTypeName(obj) + ' instance already deleted');
    }

    var finalizationRegistry = false;

    function detachFinalizer(handle) {}

    function runDestructor($$) {
      if ($$.smartPtr) {
        $$.smartPtrType.rawDestructor($$.smartPtr);
      } else {
        $$.ptrType.registeredClass.rawDestructor($$.ptr);
      }
    }

    function releaseClassHandle($$) {
      $$.count.value -= 1;
      var toDelete = 0 === $$.count.value;

      if (toDelete) {
        runDestructor($$);
      }
    }

    function downcastPointer(ptr, ptrClass, desiredClass) {
      if (ptrClass === desiredClass) {
        return ptr;
      }

      if (undefined === desiredClass.baseClass) {
        return null; // no conversion
      }

      var rv = downcastPointer(ptr, ptrClass, desiredClass.baseClass);

      if (rv === null) {
        return null;
      }

      return desiredClass.downcast(rv);
    }

    var registeredPointers = {};

    function getInheritedInstanceCount() {
      return Object.keys(registeredInstances).length;
    }

    function getLiveInheritedInstances() {
      var rv = [];

      for (var k in registeredInstances) {
        if (registeredInstances.hasOwnProperty(k)) {
          rv.push(registeredInstances[k]);
        }
      }

      return rv;
    }

    var deletionQueue = [];

    function flushPendingDeletes() {
      while (deletionQueue.length) {
        var obj = deletionQueue.pop();
        obj.$$.deleteScheduled = false;
        obj['delete']();
      }
    }

    var delayFunction = undefined;

    function setDelayFunction(fn) {
      delayFunction = fn;

      if (deletionQueue.length && delayFunction) {
        delayFunction(flushPendingDeletes);
      }
    }

    function init_embind() {
      Module['getInheritedInstanceCount'] = getInheritedInstanceCount;
      Module['getLiveInheritedInstances'] = getLiveInheritedInstances;
      Module['flushPendingDeletes'] = flushPendingDeletes;
      Module['setDelayFunction'] = setDelayFunction;
    }

    var registeredInstances = {};

    function getBasestPointer(class_, ptr) {
      if (ptr === undefined) {
        throwBindingError('ptr should not be undefined');
      }

      while (class_.baseClass) {
        ptr = class_.upcast(ptr);
        class_ = class_.baseClass;
      }

      return ptr;
    }

    function getInheritedInstance(class_, ptr) {
      ptr = getBasestPointer(class_, ptr);
      return registeredInstances[ptr];
    }

    function makeClassHandle(prototype, record) {
      if (!record.ptrType || !record.ptr) {
        throwInternalError('makeClassHandle requires ptr and ptrType');
      }

      var hasSmartPtrType = !!record.smartPtrType;
      var hasSmartPtr = !!record.smartPtr;

      if (hasSmartPtrType !== hasSmartPtr) {
        throwInternalError('Both smartPtrType and smartPtr must be specified');
      }

      record.count = {
        value: 1
      };
      return attachFinalizer(Object.create(prototype, {
        $$: {
          value: record
        }
      }));
    }

    function RegisteredPointer_fromWireType(ptr) {
      // ptr is a raw pointer (or a raw smartpointer)
      // rawPointer is a maybe-null raw pointer
      var rawPointer = this.getPointee(ptr);

      if (!rawPointer) {
        this.destructor(ptr);
        return null;
      }

      var registeredInstance = getInheritedInstance(this.registeredClass, rawPointer);

      if (undefined !== registeredInstance) {
        // JS object has been neutered, time to repopulate it
        if (0 === registeredInstance.$$.count.value) {
          registeredInstance.$$.ptr = rawPointer;
          registeredInstance.$$.smartPtr = ptr;
          return registeredInstance['clone']();
        } else {
          // else, just increment reference count on existing object
          // it already has a reference to the smart pointer
          var rv = registeredInstance['clone']();
          this.destructor(ptr);
          return rv;
        }
      }

      function makeDefaultHandle() {
        if (this.isSmartPointer) {
          return makeClassHandle(this.registeredClass.instancePrototype, {
            ptrType: this.pointeeType,
            ptr: rawPointer,
            smartPtrType: this,
            smartPtr: ptr
          });
        } else {
          return makeClassHandle(this.registeredClass.instancePrototype, {
            ptrType: this,
            ptr: ptr
          });
        }
      }

      var actualType = this.registeredClass.getActualType(rawPointer);
      var registeredPointerRecord = registeredPointers[actualType];

      if (!registeredPointerRecord) {
        return makeDefaultHandle.call(this);
      }

      var toType;

      if (this.isConst) {
        toType = registeredPointerRecord.constPointerType;
      } else {
        toType = registeredPointerRecord.pointerType;
      }

      var dp = downcastPointer(rawPointer, this.registeredClass, toType.registeredClass);

      if (dp === null) {
        return makeDefaultHandle.call(this);
      }

      if (this.isSmartPointer) {
        return makeClassHandle(toType.registeredClass.instancePrototype, {
          ptrType: toType,
          ptr: dp,
          smartPtrType: this,
          smartPtr: ptr
        });
      } else {
        return makeClassHandle(toType.registeredClass.instancePrototype, {
          ptrType: toType,
          ptr: dp
        });
      }
    }

    function attachFinalizer(handle) {
      if ('undefined' === typeof FinalizationRegistry) {
        attachFinalizer = handle => handle;

        return handle;
      } // If the running environment has a FinalizationRegistry (see
      // https://github.com/tc39/proposal-weakrefs), then attach finalizers
      // for class handles.  We check for the presence of FinalizationRegistry
      // at run-time, not build-time.


      finalizationRegistry = new FinalizationRegistry(info => {
        console.warn(info.leakWarning.stack.replace(/^Error: /, ''));
        releaseClassHandle(info.$$);
      });

      attachFinalizer = handle => {
        var $$ = handle.$$;
        var hasSmartPtr = !!$$.smartPtr;

        if (hasSmartPtr) {
          // We should not call the destructor on raw pointers in case other code expects the pointee to live
          var info = {
            $$: $$
          }; // Create a warning as an Error instance in advance so that we can store
          // the current stacktrace and point to it when / if a leak is detected.
          // This is more useful than the empty stacktrace of `FinalizationRegistry`
          // callback.

          var cls = $$.ptrType.registeredClass;
          info.leakWarning = new Error("Embind found a leaked C++ instance " + cls.name + " <0x" + $$.ptr.toString(16) + ">.\n" + "We'll free it automatically in this case, but this functionality is not reliable across various environments.\n" + "Make sure to invoke .delete() manually once you're done with the instance instead.\n" + "Originally allocated"); // `.stack` will add "at ..." after this sentence

          if ('captureStackTrace' in Error) {
            Error.captureStackTrace(info.leakWarning, RegisteredPointer_fromWireType);
          }

          finalizationRegistry.register(handle, info, handle);
        }

        return handle;
      };

      detachFinalizer = handle => finalizationRegistry.unregister(handle);

      return attachFinalizer(handle);
    }

    function ClassHandle_clone() {
      if (!this.$$.ptr) {
        throwInstanceAlreadyDeleted(this);
      }

      if (this.$$.preservePointerOnDelete) {
        this.$$.count.value += 1;
        return this;
      } else {
        var clone = attachFinalizer(Object.create(Object.getPrototypeOf(this), {
          $$: {
            value: shallowCopyInternalPointer(this.$$)
          }
        }));
        clone.$$.count.value += 1;
        clone.$$.deleteScheduled = false;
        return clone;
      }
    }

    function ClassHandle_delete() {
      if (!this.$$.ptr) {
        throwInstanceAlreadyDeleted(this);
      }

      if (this.$$.deleteScheduled && !this.$$.preservePointerOnDelete) {
        throwBindingError('Object already scheduled for deletion');
      }

      detachFinalizer(this);
      releaseClassHandle(this.$$);

      if (!this.$$.preservePointerOnDelete) {
        this.$$.smartPtr = undefined;
        this.$$.ptr = undefined;
      }
    }

    function ClassHandle_isDeleted() {
      return !this.$$.ptr;
    }

    function ClassHandle_deleteLater() {
      if (!this.$$.ptr) {
        throwInstanceAlreadyDeleted(this);
      }

      if (this.$$.deleteScheduled && !this.$$.preservePointerOnDelete) {
        throwBindingError('Object already scheduled for deletion');
      }

      deletionQueue.push(this);

      if (deletionQueue.length === 1 && delayFunction) {
        delayFunction(flushPendingDeletes);
      }

      this.$$.deleteScheduled = true;
      return this;
    }

    function init_ClassHandle() {
      ClassHandle.prototype['isAliasOf'] = ClassHandle_isAliasOf;
      ClassHandle.prototype['clone'] = ClassHandle_clone;
      ClassHandle.prototype['delete'] = ClassHandle_delete;
      ClassHandle.prototype['isDeleted'] = ClassHandle_isDeleted;
      ClassHandle.prototype['deleteLater'] = ClassHandle_deleteLater;
    }

    function ClassHandle() {}

    function ensureOverloadTable(proto, methodName, humanName) {
      if (undefined === proto[methodName].overloadTable) {
        var prevFunc = proto[methodName]; // Inject an overload resolver function that routes to the appropriate overload based on the number of arguments.

        proto[methodName] = function () {
          // TODO This check can be removed in -O3 level "unsafe" optimizations.
          if (!proto[methodName].overloadTable.hasOwnProperty(arguments.length)) {
            throwBindingError("Function '" + humanName + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + proto[methodName].overloadTable + ")!");
          }

          return proto[methodName].overloadTable[arguments.length].apply(this, arguments);
        }; // Move the previous function into the overload table.


        proto[methodName].overloadTable = [];
        proto[methodName].overloadTable[prevFunc.argCount] = prevFunc;
      }
    }
    /** @param {number=} numArguments */


    function exposePublicSymbol(name, value, numArguments) {
      if (Module.hasOwnProperty(name)) {
        if (undefined === numArguments || undefined !== Module[name].overloadTable && undefined !== Module[name].overloadTable[numArguments]) {
          throwBindingError("Cannot register public name '" + name + "' twice");
        } // We are exposing a function with the same name as an existing function. Create an overload table and a function selector
        // that routes between the two.


        ensureOverloadTable(Module, name, name);

        if (Module.hasOwnProperty(numArguments)) {
          throwBindingError("Cannot register multiple overloads of a function with the same number of arguments (" + numArguments + ")!");
        } // Add the new function into the overload table.


        Module[name].overloadTable[numArguments] = value;
      } else {
        Module[name] = value;

        if (undefined !== numArguments) {
          Module[name].numArguments = numArguments;
        }
      }
    }
    /** @constructor */


    function RegisteredClass(name, constructor, instancePrototype, rawDestructor, baseClass, getActualType, upcast, downcast) {
      this.name = name;
      this.constructor = constructor;
      this.instancePrototype = instancePrototype;
      this.rawDestructor = rawDestructor;
      this.baseClass = baseClass;
      this.getActualType = getActualType;
      this.upcast = upcast;
      this.downcast = downcast;
      this.pureVirtualFunctions = [];
    }

    function upcastPointer(ptr, ptrClass, desiredClass) {
      while (ptrClass !== desiredClass) {
        if (!ptrClass.upcast) {
          throwBindingError("Expected null or instance of " + desiredClass.name + ", got an instance of " + ptrClass.name);
        }

        ptr = ptrClass.upcast(ptr);
        ptrClass = ptrClass.baseClass;
      }

      return ptr;
    }

    function constNoSmartPtrRawPointerToWireType(destructors, handle) {
      if (handle === null) {
        if (this.isReference) {
          throwBindingError('null is not a valid ' + this.name);
        }

        return 0;
      }

      if (!handle.$$) {
        throwBindingError('Cannot pass "' + _embind_repr(handle) + '" as a ' + this.name);
      }

      if (!handle.$$.ptr) {
        throwBindingError('Cannot pass deleted object as a pointer of type ' + this.name);
      }

      var handleClass = handle.$$.ptrType.registeredClass;
      var ptr = upcastPointer(handle.$$.ptr, handleClass, this.registeredClass);
      return ptr;
    }

    function genericPointerToWireType(destructors, handle) {
      var ptr;

      if (handle === null) {
        if (this.isReference) {
          throwBindingError('null is not a valid ' + this.name);
        }

        if (this.isSmartPointer) {
          ptr = this.rawConstructor();

          if (destructors !== null) {
            destructors.push(this.rawDestructor, ptr);
          }

          return ptr;
        } else {
          return 0;
        }
      }

      if (!handle.$$) {
        throwBindingError('Cannot pass "' + _embind_repr(handle) + '" as a ' + this.name);
      }

      if (!handle.$$.ptr) {
        throwBindingError('Cannot pass deleted object as a pointer of type ' + this.name);
      }

      if (!this.isConst && handle.$$.ptrType.isConst) {
        throwBindingError('Cannot convert argument of type ' + (handle.$$.smartPtrType ? handle.$$.smartPtrType.name : handle.$$.ptrType.name) + ' to parameter type ' + this.name);
      }

      var handleClass = handle.$$.ptrType.registeredClass;
      ptr = upcastPointer(handle.$$.ptr, handleClass, this.registeredClass);

      if (this.isSmartPointer) {
        // TODO: this is not strictly true
        // We could support BY_EMVAL conversions from raw pointers to smart pointers
        // because the smart pointer can hold a reference to the handle
        if (undefined === handle.$$.smartPtr) {
          throwBindingError('Passing raw pointer to smart pointer is illegal');
        }

        switch (this.sharingPolicy) {
          case 0:
            // NONE
            // no upcasting
            if (handle.$$.smartPtrType === this) {
              ptr = handle.$$.smartPtr;
            } else {
              throwBindingError('Cannot convert argument of type ' + (handle.$$.smartPtrType ? handle.$$.smartPtrType.name : handle.$$.ptrType.name) + ' to parameter type ' + this.name);
            }

            break;

          case 1:
            // INTRUSIVE
            ptr = handle.$$.smartPtr;
            break;

          case 2:
            // BY_EMVAL
            if (handle.$$.smartPtrType === this) {
              ptr = handle.$$.smartPtr;
            } else {
              var clonedHandle = handle['clone']();
              ptr = this.rawShare(ptr, Emval.toHandle(function () {
                clonedHandle['delete']();
              }));

              if (destructors !== null) {
                destructors.push(this.rawDestructor, ptr);
              }
            }

            break;

          default:
            throwBindingError('Unsupporting sharing policy');
        }
      }

      return ptr;
    }

    function nonConstNoSmartPtrRawPointerToWireType(destructors, handle) {
      if (handle === null) {
        if (this.isReference) {
          throwBindingError('null is not a valid ' + this.name);
        }

        return 0;
      }

      if (!handle.$$) {
        throwBindingError('Cannot pass "' + _embind_repr(handle) + '" as a ' + this.name);
      }

      if (!handle.$$.ptr) {
        throwBindingError('Cannot pass deleted object as a pointer of type ' + this.name);
      }

      if (handle.$$.ptrType.isConst) {
        throwBindingError('Cannot convert argument of type ' + handle.$$.ptrType.name + ' to parameter type ' + this.name);
      }

      var handleClass = handle.$$.ptrType.registeredClass;
      var ptr = upcastPointer(handle.$$.ptr, handleClass, this.registeredClass);
      return ptr;
    }

    function simpleReadValueFromPointer(pointer) {
      return this['fromWireType'](HEAPU32[pointer >> 2]);
    }

    function RegisteredPointer_getPointee(ptr) {
      if (this.rawGetPointee) {
        ptr = this.rawGetPointee(ptr);
      }

      return ptr;
    }

    function RegisteredPointer_destructor(ptr) {
      if (this.rawDestructor) {
        this.rawDestructor(ptr);
      }
    }

    function RegisteredPointer_deleteObject(handle) {
      if (handle !== null) {
        handle['delete']();
      }
    }

    function init_RegisteredPointer() {
      RegisteredPointer.prototype.getPointee = RegisteredPointer_getPointee;
      RegisteredPointer.prototype.destructor = RegisteredPointer_destructor;
      RegisteredPointer.prototype['argPackAdvance'] = 8;
      RegisteredPointer.prototype['readValueFromPointer'] = simpleReadValueFromPointer;
      RegisteredPointer.prototype['deleteObject'] = RegisteredPointer_deleteObject;
      RegisteredPointer.prototype['fromWireType'] = RegisteredPointer_fromWireType;
    }
    /** @constructor
        @param {*=} pointeeType,
        @param {*=} sharingPolicy,
        @param {*=} rawGetPointee,
        @param {*=} rawConstructor,
        @param {*=} rawShare,
        @param {*=} rawDestructor,
         */


    function RegisteredPointer(name, registeredClass, isReference, isConst, // smart pointer properties
    isSmartPointer, pointeeType, sharingPolicy, rawGetPointee, rawConstructor, rawShare, rawDestructor) {
      this.name = name;
      this.registeredClass = registeredClass;
      this.isReference = isReference;
      this.isConst = isConst; // smart pointer properties

      this.isSmartPointer = isSmartPointer;
      this.pointeeType = pointeeType;
      this.sharingPolicy = sharingPolicy;
      this.rawGetPointee = rawGetPointee;
      this.rawConstructor = rawConstructor;
      this.rawShare = rawShare;
      this.rawDestructor = rawDestructor;

      if (!isSmartPointer && registeredClass.baseClass === undefined) {
        if (isConst) {
          this['toWireType'] = constNoSmartPtrRawPointerToWireType;
          this.destructorFunction = null;
        } else {
          this['toWireType'] = nonConstNoSmartPtrRawPointerToWireType;
          this.destructorFunction = null;
        }
      } else {
        this['toWireType'] = genericPointerToWireType; // Here we must leave this.destructorFunction undefined, since whether genericPointerToWireType returns
        // a pointer that needs to be freed up is runtime-dependent, and cannot be evaluated at registration time.
        // TODO: Create an alternative mechanism that allows removing the use of var destructors = []; array in
        //       craftInvokerFunction altogether.
      }
    }
    /** @param {number=} numArguments */


    function replacePublicSymbol(name, value, numArguments) {
      if (!Module.hasOwnProperty(name)) {
        throwInternalError('Replacing nonexistant public symbol');
      } // If there's an overload table for this symbol, replace the symbol in the overload table instead.


      if (undefined !== Module[name].overloadTable && undefined !== numArguments) {
        Module[name].overloadTable[numArguments] = value;
      } else {
        Module[name] = value;
        Module[name].argCount = numArguments;
      }
    }

    function dynCallLegacy(sig, ptr, args) {
      assert('dynCall_' + sig in Module, 'bad function pointer type - no table for sig \'' + sig + '\'');

      if (args && args.length) {
        // j (64-bit integer) must be passed in as two numbers [low 32, high 32].
        assert(args.length === sig.substring(1).replace(/j/g, '--').length);
      } else {
        assert(sig.length == 1);
      }

      var f = Module["dynCall_" + sig];
      return args && args.length ? f.apply(null, [ptr].concat(args)) : f.call(null, ptr);
    }
    /** @param {Object=} args */


    function dynCall(sig, ptr, args) {
      // Without WASM_BIGINT support we cannot directly call function with i64 as
      // part of thier signature, so we rely the dynCall functions generated by
      // wasm-emscripten-finalize
      if (sig.includes('j')) {
        return dynCallLegacy(sig, ptr, args);
      }

      assert(getWasmTableEntry(ptr), 'missing table entry in dynCall: ' + ptr);
      return getWasmTableEntry(ptr).apply(null, args);
    }

    function getDynCaller(sig, ptr) {
      assert(sig.includes('j'), 'getDynCaller should only be called with i64 sigs');
      var argCache = [];
      return function () {
        argCache.length = 0;
        Object.assign(argCache, arguments);
        return dynCall(sig, ptr, argCache);
      };
    }

    function embind__requireFunction(signature, rawFunction) {
      signature = readLatin1String(signature);

      function makeDynCaller() {
        if (signature.includes('j')) {
          return getDynCaller(signature, rawFunction);
        }

        return getWasmTableEntry(rawFunction);
      }

      var fp = makeDynCaller();

      if (typeof fp != "function") {
        throwBindingError("unknown function pointer with signature " + signature + ": " + rawFunction);
      }

      return fp;
    }

    var UnboundTypeError = undefined;

    function getTypeName(type) {
      var ptr = ___getTypeName(type);

      var rv = readLatin1String(ptr);

      _free(ptr);

      return rv;
    }

    function throwUnboundTypeError(message, types) {
      var unboundTypes = [];
      var seen = {};

      function visit(type) {
        if (seen[type]) {
          return;
        }

        if (registeredTypes[type]) {
          return;
        }

        if (typeDependencies[type]) {
          typeDependencies[type].forEach(visit);
          return;
        }

        unboundTypes.push(type);
        seen[type] = true;
      }

      types.forEach(visit);
      throw new UnboundTypeError(message + ': ' + unboundTypes.map(getTypeName).join([', ']));
    }

    function __embind_register_class(rawType, rawPointerType, rawConstPointerType, baseClassRawType, getActualTypeSignature, getActualType, upcastSignature, upcast, downcastSignature, downcast, name, destructorSignature, rawDestructor) {
      name = readLatin1String(name);
      getActualType = embind__requireFunction(getActualTypeSignature, getActualType);

      if (upcast) {
        upcast = embind__requireFunction(upcastSignature, upcast);
      }

      if (downcast) {
        downcast = embind__requireFunction(downcastSignature, downcast);
      }

      rawDestructor = embind__requireFunction(destructorSignature, rawDestructor);
      var legalFunctionName = makeLegalFunctionName(name);
      exposePublicSymbol(legalFunctionName, function () {
        // this code cannot run if baseClassRawType is zero
        throwUnboundTypeError('Cannot construct ' + name + ' due to unbound types', [baseClassRawType]);
      });
      whenDependentTypesAreResolved([rawType, rawPointerType, rawConstPointerType], baseClassRawType ? [baseClassRawType] : [], function (base) {
        base = base[0];
        var baseClass;
        var basePrototype;

        if (baseClassRawType) {
          baseClass = base.registeredClass;
          basePrototype = baseClass.instancePrototype;
        } else {
          basePrototype = ClassHandle.prototype;
        }

        var constructor = createNamedFunction(legalFunctionName, function () {
          if (Object.getPrototypeOf(this) !== instancePrototype) {
            throw new BindingError("Use 'new' to construct " + name);
          }

          if (undefined === registeredClass.constructor_body) {
            throw new BindingError(name + " has no accessible constructor");
          }

          var body = registeredClass.constructor_body[arguments.length];

          if (undefined === body) {
            throw new BindingError("Tried to invoke ctor of " + name + " with invalid number of parameters (" + arguments.length + ") - expected (" + Object.keys(registeredClass.constructor_body).toString() + ") parameters instead!");
          }

          return body.apply(this, arguments);
        });
        var instancePrototype = Object.create(basePrototype, {
          constructor: {
            value: constructor
          }
        });
        constructor.prototype = instancePrototype;
        var registeredClass = new RegisteredClass(name, constructor, instancePrototype, rawDestructor, baseClass, getActualType, upcast, downcast);
        var referenceConverter = new RegisteredPointer(name, registeredClass, true, false, false);
        var pointerConverter = new RegisteredPointer(name + '*', registeredClass, false, false, false);
        var constPointerConverter = new RegisteredPointer(name + ' const*', registeredClass, false, true, false);
        registeredPointers[rawType] = {
          pointerType: pointerConverter,
          constPointerType: constPointerConverter
        };
        replacePublicSymbol(legalFunctionName, constructor);
        return [referenceConverter, pointerConverter, constPointerConverter];
      });
    }

    function heap32VectorToArray(count, firstElement) {
      var array = [];

      for (var i = 0; i < count; i++) {
        array.push(HEAP32[(firstElement >> 2) + i]);
      }

      return array;
    }

    function runDestructors(destructors) {
      while (destructors.length) {
        var ptr = destructors.pop();
        var del = destructors.pop();
        del(ptr);
      }
    }

    function new_(constructor, argumentList) {
      if (!(constructor instanceof Function)) {
        throw new TypeError('new_ called with constructor type ' + typeof constructor + " which is not a function");
      }
      /*
       * Previously, the following line was just:
       *   function dummy() {};
       * Unfortunately, Chrome was preserving 'dummy' as the object's name, even
       * though at creation, the 'dummy' has the correct constructor name.  Thus,
       * objects created with IMVU.new would show up in the debugger as 'dummy',
       * which isn't very helpful.  Using IMVU.createNamedFunction addresses the
       * issue.  Doublely-unfortunately, there's no way to write a test for this
       * behavior.  -NRD 2013.02.22
       */


      var dummy = createNamedFunction(constructor.name || 'unknownFunctionName', function () {});
      dummy.prototype = constructor.prototype;
      var obj = new dummy();
      var r = constructor.apply(obj, argumentList);
      return r instanceof Object ? r : obj;
    }

    function craftInvokerFunction(humanName, argTypes, classType, cppInvokerFunc, cppTargetFunc) {
      // humanName: a human-readable string name for the function to be generated.
      // argTypes: An array that contains the embind type objects for all types in the function signature.
      //    argTypes[0] is the type object for the function return value.
      //    argTypes[1] is the type object for function this object/class type, or null if not crafting an invoker for a class method.
      //    argTypes[2...] are the actual function parameters.
      // classType: The embind type object for the class to be bound, or null if this is not a method of a class.
      // cppInvokerFunc: JS Function object to the C++-side function that interops into C++ code.
      // cppTargetFunc: Function pointer (an integer to FUNCTION_TABLE) to the target C++ function the cppInvokerFunc will end up calling.
      var argCount = argTypes.length;

      if (argCount < 2) {
        throwBindingError("argTypes array size mismatch! Must at least get return value and 'this' types!");
      }

      var isClassMethodFunc = argTypes[1] !== null && classType !== null; // Free functions with signature "void function()" do not need an invoker that marshalls between wire types.
      // TODO: This omits argument count check - enable only at -O3 or similar.
      //    if (ENABLE_UNSAFE_OPTS && argCount == 2 && argTypes[0].name == "void" && !isClassMethodFunc) {
      //       return FUNCTION_TABLE[fn];
      //    }
      // Determine if we need to use a dynamic stack to store the destructors for the function parameters.
      // TODO: Remove this completely once all function invokers are being dynamically generated.

      var needsDestructorStack = false;

      for (var i = 1; i < argTypes.length; ++i) {
        // Skip return value at index 0 - it's not deleted here.
        if (argTypes[i] !== null && argTypes[i].destructorFunction === undefined) {
          // The type does not define a destructor function - must use dynamic stack
          needsDestructorStack = true;
          break;
        }
      }

      var returns = argTypes[0].name !== "void";
      var argsList = "";
      var argsListWired = "";

      for (var i = 0; i < argCount - 2; ++i) {
        argsList += (i !== 0 ? ", " : "") + "arg" + i;
        argsListWired += (i !== 0 ? ", " : "") + "arg" + i + "Wired";
      }

      var invokerFnBody = "return function " + makeLegalFunctionName(humanName) + "(" + argsList + ") {\n" + "if (arguments.length !== " + (argCount - 2) + ") {\n" + "throwBindingError('function " + humanName + " called with ' + arguments.length + ' arguments, expected " + (argCount - 2) + " args!');\n" + "}\n";

      if (needsDestructorStack) {
        invokerFnBody += "var destructors = [];\n";
      }

      var dtorStack = needsDestructorStack ? "destructors" : "null";
      var args1 = ["throwBindingError", "invoker", "fn", "runDestructors", "retType", "classParam"];
      var args2 = [throwBindingError, cppInvokerFunc, cppTargetFunc, runDestructors, argTypes[0], argTypes[1]];

      if (isClassMethodFunc) {
        invokerFnBody += "var thisWired = classParam.toWireType(" + dtorStack + ", this);\n";
      }

      for (var i = 0; i < argCount - 2; ++i) {
        invokerFnBody += "var arg" + i + "Wired = argType" + i + ".toWireType(" + dtorStack + ", arg" + i + "); // " + argTypes[i + 2].name + "\n";
        args1.push("argType" + i);
        args2.push(argTypes[i + 2]);
      }

      if (isClassMethodFunc) {
        argsListWired = "thisWired" + (argsListWired.length > 0 ? ", " : "") + argsListWired;
      }

      invokerFnBody += (returns ? "var rv = " : "") + "invoker(fn" + (argsListWired.length > 0 ? ", " : "") + argsListWired + ");\n";

      if (needsDestructorStack) {
        invokerFnBody += "runDestructors(destructors);\n";
      } else {
        for (var i = isClassMethodFunc ? 1 : 2; i < argTypes.length; ++i) {
          // Skip return value at index 0 - it's not deleted here. Also skip class type if not a method.
          var paramName = i === 1 ? "thisWired" : "arg" + (i - 2) + "Wired";

          if (argTypes[i].destructorFunction !== null) {
            invokerFnBody += paramName + "_dtor(" + paramName + "); // " + argTypes[i].name + "\n";
            args1.push(paramName + "_dtor");
            args2.push(argTypes[i].destructorFunction);
          }
        }
      }

      if (returns) {
        invokerFnBody += "var ret = retType.fromWireType(rv);\n" + "return ret;\n";
      } else {}

      invokerFnBody += "}\n";
      args1.push(invokerFnBody);
      var invokerFunction = new_(Function, args1).apply(null, args2);
      return invokerFunction;
    }

    function __embind_register_class_constructor(rawClassType, argCount, rawArgTypesAddr, invokerSignature, invoker, rawConstructor) {
      assert(argCount > 0);
      var rawArgTypes = heap32VectorToArray(argCount, rawArgTypesAddr);
      invoker = embind__requireFunction(invokerSignature, invoker);
      var args = [rawConstructor];
      var destructors = [];
      whenDependentTypesAreResolved([], [rawClassType], function (classType) {
        classType = classType[0];
        var humanName = 'constructor ' + classType.name;

        if (undefined === classType.registeredClass.constructor_body) {
          classType.registeredClass.constructor_body = [];
        }

        if (undefined !== classType.registeredClass.constructor_body[argCount - 1]) {
          throw new BindingError("Cannot register multiple constructors with identical number of parameters (" + (argCount - 1) + ") for class '" + classType.name + "'! Overload resolution is currently only performed using the parameter count, not actual type info!");
        }

        classType.registeredClass.constructor_body[argCount - 1] = () => {
          throwUnboundTypeError('Cannot construct ' + classType.name + ' due to unbound types', rawArgTypes);
        };

        whenDependentTypesAreResolved([], rawArgTypes, function (argTypes) {
          // Insert empty slot for context type (argTypes[1]).
          argTypes.splice(1, 0, null);
          classType.registeredClass.constructor_body[argCount - 1] = craftInvokerFunction(humanName, argTypes, null, invoker, rawConstructor);
          return [];
        });
        return [];
      });
    }

    function __embind_register_class_function(rawClassType, methodName, argCount, rawArgTypesAddr, // [ReturnType, ThisType, Args...]
    invokerSignature, rawInvoker, context, isPureVirtual) {
      var rawArgTypes = heap32VectorToArray(argCount, rawArgTypesAddr);
      methodName = readLatin1String(methodName);
      rawInvoker = embind__requireFunction(invokerSignature, rawInvoker);
      whenDependentTypesAreResolved([], [rawClassType], function (classType) {
        classType = classType[0];
        var humanName = classType.name + '.' + methodName;

        if (methodName.startsWith("@@")) {
          methodName = Symbol[methodName.substring(2)];
        }

        if (isPureVirtual) {
          classType.registeredClass.pureVirtualFunctions.push(methodName);
        }

        function unboundTypesHandler() {
          throwUnboundTypeError('Cannot call ' + humanName + ' due to unbound types', rawArgTypes);
        }

        var proto = classType.registeredClass.instancePrototype;
        var method = proto[methodName];

        if (undefined === method || undefined === method.overloadTable && method.className !== classType.name && method.argCount === argCount - 2) {
          // This is the first overload to be registered, OR we are replacing a
          // function in the base class with a function in the derived class.
          unboundTypesHandler.argCount = argCount - 2;
          unboundTypesHandler.className = classType.name;
          proto[methodName] = unboundTypesHandler;
        } else {
          // There was an existing function with the same name registered. Set up
          // a function overload routing table.
          ensureOverloadTable(proto, methodName, humanName);
          proto[methodName].overloadTable[argCount - 2] = unboundTypesHandler;
        }

        whenDependentTypesAreResolved([], rawArgTypes, function (argTypes) {
          var memberFunction = craftInvokerFunction(humanName, argTypes, classType, rawInvoker, context); // Replace the initial unbound-handler-stub function with the appropriate member function, now that all types
          // are resolved. If multiple overloads are registered for this function, the function goes into an overload table.

          if (undefined === proto[methodName].overloadTable) {
            // Set argCount in case an overload is registered later
            memberFunction.argCount = argCount - 2;
            proto[methodName] = memberFunction;
          } else {
            proto[methodName].overloadTable[argCount - 2] = memberFunction;
          }

          return [];
        });
        return [];
      });
    }

    var emval_free_list = [];
    var emval_handle_array = [{}, {
      value: undefined
    }, {
      value: null
    }, {
      value: true
    }, {
      value: false
    }];

    function __emval_decref(handle) {
      if (handle > 4 && 0 === --emval_handle_array[handle].refcount) {
        emval_handle_array[handle] = undefined;
        emval_free_list.push(handle);
      }
    }

    function count_emval_handles() {
      var count = 0;

      for (var i = 5; i < emval_handle_array.length; ++i) {
        if (emval_handle_array[i] !== undefined) {
          ++count;
        }
      }

      return count;
    }

    function get_first_emval() {
      for (var i = 5; i < emval_handle_array.length; ++i) {
        if (emval_handle_array[i] !== undefined) {
          return emval_handle_array[i];
        }
      }

      return null;
    }

    function init_emval() {
      Module['count_emval_handles'] = count_emval_handles;
      Module['get_first_emval'] = get_first_emval;
    }

    var Emval = {
      toValue: handle => {
        if (!handle) {
          throwBindingError('Cannot use deleted val. handle = ' + handle);
        }

        return emval_handle_array[handle].value;
      },
      toHandle: value => {
        switch (value) {
          case undefined:
            return 1;

          case null:
            return 2;

          case true:
            return 3;

          case false:
            return 4;

          default:
            {
              var handle = emval_free_list.length ? emval_free_list.pop() : emval_handle_array.length;
              emval_handle_array[handle] = {
                refcount: 1,
                value: value
              };
              return handle;
            }
        }
      }
    };

    function __embind_register_emval(rawType, name) {
      name = readLatin1String(name);
      registerType(rawType, {
        name: name,
        'fromWireType': function (handle) {
          var rv = Emval.toValue(handle);

          __emval_decref(handle);

          return rv;
        },
        'toWireType': function (destructors, value) {
          return Emval.toHandle(value);
        },
        'argPackAdvance': 8,
        'readValueFromPointer': simpleReadValueFromPointer,
        destructorFunction: null // This type does not need a destructor
        // TODO: do we need a deleteObject here?  write a test where
        // emval is passed into JS via an interface

      });
    }

    function _embind_repr(v) {
      if (v === null) {
        return 'null';
      }

      var t = typeof v;

      if (t === 'object' || t === 'array' || t === 'function') {
        return v.toString();
      } else {
        return '' + v;
      }
    }

    function floatReadValueFromPointer(name, shift) {
      switch (shift) {
        case 2:
          return function (pointer) {
            return this['fromWireType'](HEAPF32[pointer >> 2]);
          };

        case 3:
          return function (pointer) {
            return this['fromWireType'](HEAPF64[pointer >> 3]);
          };

        default:
          throw new TypeError("Unknown float type: " + name);
      }
    }

    function __embind_register_float(rawType, name, size) {
      var shift = getShiftFromSize(size);
      name = readLatin1String(name);
      registerType(rawType, {
        name: name,
        'fromWireType': function (value) {
          return value;
        },
        'toWireType': function (destructors, value) {
          if (typeof value != "number" && typeof value != "boolean") {
            throw new TypeError('Cannot convert "' + _embind_repr(value) + '" to ' + this.name);
          } // The VM will perform JS to Wasm value conversion, according to the spec:
          // https://www.w3.org/TR/wasm-js-api-1/#towebassemblyvalue


          return value;
        },
        'argPackAdvance': 8,
        'readValueFromPointer': floatReadValueFromPointer(name, shift),
        destructorFunction: null // This type does not need a destructor

      });
    }

    function integerReadValueFromPointer(name, shift, signed) {
      // integers are quite common, so generate very specialized functions
      switch (shift) {
        case 0:
          return signed ? function readS8FromPointer(pointer) {
            return HEAP8[pointer];
          } : function readU8FromPointer(pointer) {
            return HEAPU8[pointer];
          };

        case 1:
          return signed ? function readS16FromPointer(pointer) {
            return HEAP16[pointer >> 1];
          } : function readU16FromPointer(pointer) {
            return HEAPU16[pointer >> 1];
          };

        case 2:
          return signed ? function readS32FromPointer(pointer) {
            return HEAP32[pointer >> 2];
          } : function readU32FromPointer(pointer) {
            return HEAPU32[pointer >> 2];
          };

        default:
          throw new TypeError("Unknown integer type: " + name);
      }
    }

    function __embind_register_integer(primitiveType, name, size, minRange, maxRange) {
      name = readLatin1String(name); // LLVM doesn't have signed and unsigned 32-bit types, so u32 literals come
      // out as 'i32 -1'. Always treat those as max u32.

      if (maxRange === -1) {
        maxRange = 4294967295;
      }

      var shift = getShiftFromSize(size);

      var fromWireType = value => value;

      if (minRange === 0) {
        var bitshift = 32 - 8 * size;

        fromWireType = value => value << bitshift >>> bitshift;
      }

      var isUnsignedType = name.includes('unsigned');

      var checkAssertions = (value, toTypeName) => {
        if (typeof value != "number" && typeof value != "boolean") {
          throw new TypeError('Cannot convert "' + _embind_repr(value) + '" to ' + toTypeName);
        }

        if (value < minRange || value > maxRange) {
          throw new TypeError('Passing a number "' + _embind_repr(value) + '" from JS side to C/C++ side to an argument of type "' + name + '", which is outside the valid range [' + minRange + ', ' + maxRange + ']!');
        }
      };

      var toWireType;

      if (isUnsignedType) {
        toWireType = function (destructors, value) {
          checkAssertions(value, this.name);
          return value >>> 0;
        };
      } else {
        toWireType = function (destructors, value) {
          checkAssertions(value, this.name); // The VM will perform JS to Wasm value conversion, according to the spec:
          // https://www.w3.org/TR/wasm-js-api-1/#towebassemblyvalue

          return value;
        };
      }

      registerType(primitiveType, {
        name: name,
        'fromWireType': fromWireType,
        'toWireType': toWireType,
        'argPackAdvance': 8,
        'readValueFromPointer': integerReadValueFromPointer(name, shift, minRange !== 0),
        destructorFunction: null // This type does not need a destructor

      });
    }

    function __embind_register_memory_view(rawType, dataTypeIndex, name) {
      var typeMapping = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array];
      var TA = typeMapping[dataTypeIndex];

      function decodeMemoryView(handle) {
        handle = handle >> 2;
        var heap = HEAPU32;
        var size = heap[handle]; // in elements

        var data = heap[handle + 1]; // byte offset into emscripten heap

        return new TA(buffer, data, size);
      }

      name = readLatin1String(name);
      registerType(rawType, {
        name: name,
        'fromWireType': decodeMemoryView,
        'argPackAdvance': 8,
        'readValueFromPointer': decodeMemoryView
      }, {
        ignoreDuplicateRegistrations: true
      });
    }

    function __embind_register_smart_ptr(rawType, rawPointeeType, name, sharingPolicy, getPointeeSignature, rawGetPointee, constructorSignature, rawConstructor, shareSignature, rawShare, destructorSignature, rawDestructor) {
      name = readLatin1String(name);
      rawGetPointee = embind__requireFunction(getPointeeSignature, rawGetPointee);
      rawConstructor = embind__requireFunction(constructorSignature, rawConstructor);
      rawShare = embind__requireFunction(shareSignature, rawShare);
      rawDestructor = embind__requireFunction(destructorSignature, rawDestructor);
      whenDependentTypesAreResolved([rawType], [rawPointeeType], function (pointeeType) {
        pointeeType = pointeeType[0];
        var registeredPointer = new RegisteredPointer(name, pointeeType.registeredClass, false, false, // smart pointer properties
        true, pointeeType, sharingPolicy, rawGetPointee, rawConstructor, rawShare, rawDestructor);
        return [registeredPointer];
      });
    }

    function __embind_register_std_string(rawType, name) {
      name = readLatin1String(name);
      var stdStringIsUTF8 //process only std::string bindings with UTF8 support, in contrast to e.g. std::basic_string<unsigned char>
      = name === "std::string";
      registerType(rawType, {
        name: name,
        'fromWireType': function (value) {
          var length = HEAPU32[value >> 2];
          var str;

          if (stdStringIsUTF8) {
            var decodeStartPtr = value + 4; // Looping here to support possible embedded '0' bytes

            for (var i = 0; i <= length; ++i) {
              var currentBytePtr = value + 4 + i;

              if (i == length || HEAPU8[currentBytePtr] == 0) {
                var maxRead = currentBytePtr - decodeStartPtr;
                var stringSegment = UTF8ToString(decodeStartPtr, maxRead);

                if (str === undefined) {
                  str = stringSegment;
                } else {
                  str += String.fromCharCode(0);
                  str += stringSegment;
                }

                decodeStartPtr = currentBytePtr + 1;
              }
            }
          } else {
            var a = new Array(length);

            for (var i = 0; i < length; ++i) {
              a[i] = String.fromCharCode(HEAPU8[value + 4 + i]);
            }

            str = a.join('');
          }

          _free(value);

          return str;
        },
        'toWireType': function (destructors, value) {
          if (value instanceof ArrayBuffer) {
            value = new Uint8Array(value);
          }

          var getLength;
          var valueIsOfTypeString = typeof value == 'string';

          if (!(valueIsOfTypeString || value instanceof Uint8Array || value instanceof Uint8ClampedArray || value instanceof Int8Array)) {
            throwBindingError('Cannot pass non-string to std::string');
          }

          if (stdStringIsUTF8 && valueIsOfTypeString) {
            getLength = () => lengthBytesUTF8(value);
          } else {
            getLength = () => value.length;
          } // assumes 4-byte alignment


          var length = getLength();

          var ptr = _malloc(4 + length + 1);

          HEAPU32[ptr >> 2] = length;

          if (stdStringIsUTF8 && valueIsOfTypeString) {
            stringToUTF8(value, ptr + 4, length + 1);
          } else {
            if (valueIsOfTypeString) {
              for (var i = 0; i < length; ++i) {
                var charCode = value.charCodeAt(i);

                if (charCode > 255) {
                  _free(ptr);

                  throwBindingError('String has UTF-16 code units that do not fit in 8 bits');
                }

                HEAPU8[ptr + 4 + i] = charCode;
              }
            } else {
              for (var i = 0; i < length; ++i) {
                HEAPU8[ptr + 4 + i] = value[i];
              }
            }
          }

          if (destructors !== null) {
            destructors.push(_free, ptr);
          }

          return ptr;
        },
        'argPackAdvance': 8,
        'readValueFromPointer': simpleReadValueFromPointer,
        destructorFunction: function (ptr) {
          _free(ptr);
        }
      });
    }

    function __embind_register_std_wstring(rawType, charSize, name) {
      name = readLatin1String(name);
      var decodeString, encodeString, getHeap, lengthBytesUTF, shift;

      if (charSize === 2) {
        decodeString = UTF16ToString;
        encodeString = stringToUTF16;
        lengthBytesUTF = lengthBytesUTF16;

        getHeap = () => HEAPU16;

        shift = 1;
      } else if (charSize === 4) {
        decodeString = UTF32ToString;
        encodeString = stringToUTF32;
        lengthBytesUTF = lengthBytesUTF32;

        getHeap = () => HEAPU32;

        shift = 2;
      }

      registerType(rawType, {
        name: name,
        'fromWireType': function (value) {
          // Code mostly taken from _embind_register_std_string fromWireType
          var length = HEAPU32[value >> 2];
          var HEAP = getHeap();
          var str;
          var decodeStartPtr = value + 4; // Looping here to support possible embedded '0' bytes

          for (var i = 0; i <= length; ++i) {
            var currentBytePtr = value + 4 + i * charSize;

            if (i == length || HEAP[currentBytePtr >> shift] == 0) {
              var maxReadBytes = currentBytePtr - decodeStartPtr;
              var stringSegment = decodeString(decodeStartPtr, maxReadBytes);

              if (str === undefined) {
                str = stringSegment;
              } else {
                str += String.fromCharCode(0);
                str += stringSegment;
              }

              decodeStartPtr = currentBytePtr + charSize;
            }
          }

          _free(value);

          return str;
        },
        'toWireType': function (destructors, value) {
          if (!(typeof value == 'string')) {
            throwBindingError('Cannot pass non-string to C++ string type ' + name);
          } // assumes 4-byte alignment


          var length = lengthBytesUTF(value);

          var ptr = _malloc(4 + length + charSize);

          HEAPU32[ptr >> 2] = length >> shift;
          encodeString(value, ptr + 4, length + charSize);

          if (destructors !== null) {
            destructors.push(_free, ptr);
          }

          return ptr;
        },
        'argPackAdvance': 8,
        'readValueFromPointer': simpleReadValueFromPointer,
        destructorFunction: function (ptr) {
          _free(ptr);
        }
      });
    }

    function __embind_register_void(rawType, name) {
      name = readLatin1String(name);
      registerType(rawType, {
        isVoid: true,
        name: name,
        'argPackAdvance': 0,
        'fromWireType': function () {
          return undefined;
        },
        'toWireType': function (destructors, o) {
          // TODO: assert if anything else is given?
          return undefined;
        }
      });
    }

    function requireRegisteredType(rawType, humanName) {
      var impl = registeredTypes[rawType];

      if (undefined === impl) {
        throwBindingError(humanName + " has unknown type " + getTypeName(rawType));
      }

      return impl;
    }

    function emval_lookupTypes(argCount, argTypes) {
      var a = new Array(argCount);

      for (var i = 0; i < argCount; ++i) {
        a[i] = requireRegisteredType(HEAPU32[argTypes + i * POINTER_SIZE >> 2], "parameter " + i);
      }

      return a;
    }

    function __emval_call(handle, argCount, argTypes, argv) {
      handle = Emval.toValue(handle);
      var types = emval_lookupTypes(argCount, argTypes);
      var args = new Array(argCount);

      for (var i = 0; i < argCount; ++i) {
        var type = types[i];
        args[i] = type['readValueFromPointer'](argv);
        argv += type['argPackAdvance'];
      }

      var rv = handle.apply(undefined, args);
      return Emval.toHandle(rv);
    }

    function __emval_incref(handle) {
      if (handle > 4) {
        emval_handle_array[handle].refcount += 1;
      }
    }

    function __emval_take_value(type, argv) {
      type = requireRegisteredType(type, '_emval_take_value');
      var v = type['readValueFromPointer'](argv);
      return Emval.toHandle(v);
    }

    function _abort() {
      abort('native code called abort()');
    }

    function _emscripten_memcpy_big(dest, src, num) {
      HEAPU8.copyWithin(dest, src, src + num);
    }

    function getHeapMax() {
      return HEAPU8.length;
    }

    function abortOnCannotGrowMemory(requestedSize) {
      abort('Cannot enlarge memory arrays to size ' + requestedSize + ' bytes (OOM). Either (1) compile with -sINITIAL_MEMORY=X with X higher than the current value ' + HEAP8.length + ', (2) compile with -sALLOW_MEMORY_GROWTH which allows increasing the size at runtime, or (3) if you want malloc to return NULL (0) instead of this abort, compile with -sABORTING_MALLOC=0');
    }

    function _emscripten_resize_heap(requestedSize) {
      var oldSize = HEAPU8.length;
      requestedSize = requestedSize >>> 0;
      abortOnCannotGrowMemory(requestedSize);
    }

    embind_init_charCodes();
    BindingError = Module['BindingError'] = extendError(Error, 'BindingError');
    ;
    InternalError = Module['InternalError'] = extendError(Error, 'InternalError');
    ;
    init_ClassHandle();
    init_embind();
    ;
    init_RegisteredPointer();
    UnboundTypeError = Module['UnboundTypeError'] = extendError(Error, 'UnboundTypeError');
    ;
    init_emval();
    ;
    var ASSERTIONS = true;
    /** @type {function(string, boolean=, number=)} */

    function intArrayFromString(stringy, dontAddNull, length) {
      var len = length > 0 ? length : lengthBytesUTF8(stringy) + 1;
      var u8array = new Array(len);
      var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
      if (dontAddNull) u8array.length = numBytesWritten;
      return u8array;
    }

    function intArrayToString(array) {
      var ret = [];

      for (var i = 0; i < array.length; i++) {
        var chr = array[i];

        if (chr > 0xFF) {
          if (ASSERTIONS) {
            assert(false, 'Character code ' + chr + ' (' + String.fromCharCode(chr) + ')  at offset ' + i + ' not in 0x00-0xFF.');
          }

          chr &= 0xFF;
        }

        ret.push(String.fromCharCode(chr));
      }

      return ret.join('');
    }

    function checkIncomingModuleAPI() {
      ignoredModuleProp('fetchSettings');
    }

    var asmLibraryArg = {
      "__assert_fail": ___assert_fail,
      "__cxa_allocate_exception": ___cxa_allocate_exception,
      "__cxa_throw": ___cxa_throw,
      "_embind_register_bigint": __embind_register_bigint,
      "_embind_register_bool": __embind_register_bool,
      "_embind_register_class": __embind_register_class,
      "_embind_register_class_constructor": __embind_register_class_constructor,
      "_embind_register_class_function": __embind_register_class_function,
      "_embind_register_emval": __embind_register_emval,
      "_embind_register_float": __embind_register_float,
      "_embind_register_integer": __embind_register_integer,
      "_embind_register_memory_view": __embind_register_memory_view,
      "_embind_register_smart_ptr": __embind_register_smart_ptr,
      "_embind_register_std_string": __embind_register_std_string,
      "_embind_register_std_wstring": __embind_register_std_wstring,
      "_embind_register_void": __embind_register_void,
      "_emval_call": __emval_call,
      "_emval_decref": __emval_decref,
      "_emval_incref": __emval_incref,
      "_emval_take_value": __emval_take_value,
      "abort": _abort,
      "emscripten_memcpy_big": _emscripten_memcpy_big,
      "emscripten_resize_heap": _emscripten_resize_heap
    };
    var asm = createWasm();
    /** @type {function(...*):?} */

    var ___wasm_call_ctors = Module["___wasm_call_ctors"] = createExportWrapper("__wasm_call_ctors");
    /** @type {function(...*):?} */


    var ___getTypeName = Module["___getTypeName"] = createExportWrapper("__getTypeName");
    /** @type {function(...*):?} */


    var ___embind_register_native_and_builtin_types = Module["___embind_register_native_and_builtin_types"] = createExportWrapper("__embind_register_native_and_builtin_types");
    /** @type {function(...*):?} */


    var ___errno_location = Module["___errno_location"] = createExportWrapper("__errno_location");
    /** @type {function(...*):?} */


    var _fflush = Module["_fflush"] = createExportWrapper("fflush");
    /** @type {function(...*):?} */


    var _malloc = Module["_malloc"] = createExportWrapper("malloc");
    /** @type {function(...*):?} */


    var _free = Module["_free"] = createExportWrapper("free");
    /** @type {function(...*):?} */


    var _emscripten_stack_init = Module["_emscripten_stack_init"] = function () {
      return (_emscripten_stack_init = Module["_emscripten_stack_init"] = Module["asm"]["emscripten_stack_init"]).apply(null, arguments);
    };
    /** @type {function(...*):?} */


    var _emscripten_stack_get_free = Module["_emscripten_stack_get_free"] = function () {
      return (_emscripten_stack_get_free = Module["_emscripten_stack_get_free"] = Module["asm"]["emscripten_stack_get_free"]).apply(null, arguments);
    };
    /** @type {function(...*):?} */


    var _emscripten_stack_get_base = Module["_emscripten_stack_get_base"] = function () {
      return (_emscripten_stack_get_base = Module["_emscripten_stack_get_base"] = Module["asm"]["emscripten_stack_get_base"]).apply(null, arguments);
    };
    /** @type {function(...*):?} */


    var _emscripten_stack_get_end = Module["_emscripten_stack_get_end"] = function () {
      return (_emscripten_stack_get_end = Module["_emscripten_stack_get_end"] = Module["asm"]["emscripten_stack_get_end"]).apply(null, arguments);
    };
    /** @type {function(...*):?} */


    var stackSave = Module["stackSave"] = createExportWrapper("stackSave");
    /** @type {function(...*):?} */

    var stackRestore = Module["stackRestore"] = createExportWrapper("stackRestore");
    /** @type {function(...*):?} */

    var stackAlloc = Module["stackAlloc"] = createExportWrapper("stackAlloc");
    /** @type {function(...*):?} */

    var ___cxa_demangle = Module["___cxa_demangle"] = createExportWrapper("__cxa_demangle");
    /** @type {function(...*):?} */


    var ___cxa_is_pointer_type = Module["___cxa_is_pointer_type"] = createExportWrapper("__cxa_is_pointer_type"); // === Auto-generated postamble setup entry stuff ===


    unexportedRuntimeFunction('ccall', false);
    unexportedRuntimeFunction('cwrap', false);
    unexportedRuntimeFunction('allocate', false);
    unexportedRuntimeFunction('UTF8ArrayToString', false);
    unexportedRuntimeFunction('UTF8ToString', false);
    unexportedRuntimeFunction('stringToUTF8Array', false);
    unexportedRuntimeFunction('stringToUTF8', false);
    unexportedRuntimeFunction('lengthBytesUTF8', false);
    unexportedRuntimeFunction('addOnPreRun', false);
    unexportedRuntimeFunction('addOnInit', false);
    unexportedRuntimeFunction('addOnPreMain', false);
    unexportedRuntimeFunction('addOnExit', false);
    unexportedRuntimeFunction('addOnPostRun', false);
    unexportedRuntimeFunction('addRunDependency', true);
    unexportedRuntimeFunction('removeRunDependency', true);
    unexportedRuntimeFunction('FS_createFolder', false);
    unexportedRuntimeFunction('FS_createPath', true);
    unexportedRuntimeFunction('FS_createDataFile', true);
    unexportedRuntimeFunction('FS_createPreloadedFile', true);
    unexportedRuntimeFunction('FS_createLazyFile', true);
    unexportedRuntimeFunction('FS_createLink', false);
    unexportedRuntimeFunction('FS_createDevice', true);
    unexportedRuntimeFunction('FS_unlink', true);
    unexportedRuntimeFunction('getLEB', false);
    unexportedRuntimeFunction('getFunctionTables', false);
    unexportedRuntimeFunction('alignFunctionTables', false);
    unexportedRuntimeFunction('registerFunctions', false);
    unexportedRuntimeFunction('addFunction', false);
    unexportedRuntimeFunction('removeFunction', false);
    unexportedRuntimeFunction('prettyPrint', false);
    unexportedRuntimeFunction('getCompilerSetting', false);
    unexportedRuntimeFunction('print', false);
    unexportedRuntimeFunction('printErr', false);
    unexportedRuntimeFunction('getTempRet0', false);
    unexportedRuntimeFunction('setTempRet0', false);
    unexportedRuntimeFunction('callMain', false);
    unexportedRuntimeFunction('abort', false);
    unexportedRuntimeFunction('keepRuntimeAlive', false);
    unexportedRuntimeFunction('wasmMemory', false);
    unexportedRuntimeFunction('warnOnce', false);
    unexportedRuntimeFunction('stackSave', false);
    unexportedRuntimeFunction('stackRestore', false);
    unexportedRuntimeFunction('stackAlloc', false);
    unexportedRuntimeFunction('AsciiToString', false);
    unexportedRuntimeFunction('stringToAscii', false);
    unexportedRuntimeFunction('UTF16ToString', false);
    unexportedRuntimeFunction('stringToUTF16', false);
    unexportedRuntimeFunction('lengthBytesUTF16', false);
    unexportedRuntimeFunction('UTF32ToString', false);
    unexportedRuntimeFunction('stringToUTF32', false);
    unexportedRuntimeFunction('lengthBytesUTF32', false);
    unexportedRuntimeFunction('allocateUTF8', false);
    unexportedRuntimeFunction('allocateUTF8OnStack', false);
    unexportedRuntimeFunction('ExitStatus', false);
    unexportedRuntimeFunction('intArrayFromString', false);
    unexportedRuntimeFunction('intArrayToString', false);
    unexportedRuntimeFunction('writeStringToMemory', false);
    unexportedRuntimeFunction('writeArrayToMemory', false);
    unexportedRuntimeFunction('writeAsciiToMemory', false);
    Module["writeStackCookie"] = writeStackCookie;
    Module["checkStackCookie"] = checkStackCookie;
    unexportedRuntimeFunction('ptrToString', false);
    unexportedRuntimeFunction('zeroMemory', false);
    unexportedRuntimeFunction('stringToNewUTF8', false);
    unexportedRuntimeFunction('getHeapMax', false);
    unexportedRuntimeFunction('abortOnCannotGrowMemory', false);
    unexportedRuntimeFunction('emscripten_realloc_buffer', false);
    unexportedRuntimeFunction('ENV', false);
    unexportedRuntimeFunction('ERRNO_CODES', false);
    unexportedRuntimeFunction('ERRNO_MESSAGES', false);
    unexportedRuntimeFunction('setErrNo', false);
    unexportedRuntimeFunction('inetPton4', false);
    unexportedRuntimeFunction('inetNtop4', false);
    unexportedRuntimeFunction('inetPton6', false);
    unexportedRuntimeFunction('inetNtop6', false);
    unexportedRuntimeFunction('readSockaddr', false);
    unexportedRuntimeFunction('writeSockaddr', false);
    unexportedRuntimeFunction('DNS', false);
    unexportedRuntimeFunction('getHostByName', false);
    unexportedRuntimeFunction('Protocols', false);
    unexportedRuntimeFunction('Sockets', false);
    unexportedRuntimeFunction('getRandomDevice', false);
    unexportedRuntimeFunction('traverseStack', false);
    unexportedRuntimeFunction('UNWIND_CACHE', false);
    unexportedRuntimeFunction('convertPCtoSourceLocation', false);
    unexportedRuntimeFunction('readAsmConstArgsArray', false);
    unexportedRuntimeFunction('readAsmConstArgs', false);
    unexportedRuntimeFunction('mainThreadEM_ASM', false);
    unexportedRuntimeFunction('jstoi_q', false);
    unexportedRuntimeFunction('jstoi_s', false);
    unexportedRuntimeFunction('getExecutableName', false);
    unexportedRuntimeFunction('listenOnce', false);
    unexportedRuntimeFunction('autoResumeAudioContext', false);
    unexportedRuntimeFunction('dynCallLegacy', false);
    unexportedRuntimeFunction('getDynCaller', false);
    unexportedRuntimeFunction('dynCall', false);
    unexportedRuntimeFunction('handleException', false);
    unexportedRuntimeFunction('runtimeKeepalivePush', false);
    unexportedRuntimeFunction('runtimeKeepalivePop', false);
    unexportedRuntimeFunction('callUserCallback', false);
    unexportedRuntimeFunction('maybeExit', false);
    unexportedRuntimeFunction('safeSetTimeout', false);
    unexportedRuntimeFunction('asmjsMangle', false);
    unexportedRuntimeFunction('asyncLoad', false);
    unexportedRuntimeFunction('alignMemory', false);
    unexportedRuntimeFunction('mmapAlloc', false);
    unexportedRuntimeFunction('writeI53ToI64', false);
    unexportedRuntimeFunction('writeI53ToI64Clamped', false);
    unexportedRuntimeFunction('writeI53ToI64Signaling', false);
    unexportedRuntimeFunction('writeI53ToU64Clamped', false);
    unexportedRuntimeFunction('writeI53ToU64Signaling', false);
    unexportedRuntimeFunction('readI53FromI64', false);
    unexportedRuntimeFunction('readI53FromU64', false);
    unexportedRuntimeFunction('convertI32PairToI53', false);
    unexportedRuntimeFunction('convertI32PairToI53Checked', false);
    unexportedRuntimeFunction('convertU32PairToI53', false);
    unexportedRuntimeFunction('reallyNegative', false);
    unexportedRuntimeFunction('unSign', false);
    unexportedRuntimeFunction('strLen', false);
    unexportedRuntimeFunction('reSign', false);
    unexportedRuntimeFunction('formatString', false);
    unexportedRuntimeFunction('setValue', false);
    unexportedRuntimeFunction('getValue', false);
    unexportedRuntimeFunction('PATH', false);
    unexportedRuntimeFunction('PATH_FS', false);
    unexportedRuntimeFunction('SYSCALLS', false);
    unexportedRuntimeFunction('getSocketFromFD', false);
    unexportedRuntimeFunction('getSocketAddress', false);
    unexportedRuntimeFunction('JSEvents', false);
    unexportedRuntimeFunction('registerKeyEventCallback', false);
    unexportedRuntimeFunction('specialHTMLTargets', false);
    unexportedRuntimeFunction('maybeCStringToJsString', false);
    unexportedRuntimeFunction('findEventTarget', false);
    unexportedRuntimeFunction('findCanvasEventTarget', false);
    unexportedRuntimeFunction('getBoundingClientRect', false);
    unexportedRuntimeFunction('fillMouseEventData', false);
    unexportedRuntimeFunction('registerMouseEventCallback', false);
    unexportedRuntimeFunction('registerWheelEventCallback', false);
    unexportedRuntimeFunction('registerUiEventCallback', false);
    unexportedRuntimeFunction('registerFocusEventCallback', false);
    unexportedRuntimeFunction('fillDeviceOrientationEventData', false);
    unexportedRuntimeFunction('registerDeviceOrientationEventCallback', false);
    unexportedRuntimeFunction('fillDeviceMotionEventData', false);
    unexportedRuntimeFunction('registerDeviceMotionEventCallback', false);
    unexportedRuntimeFunction('screenOrientation', false);
    unexportedRuntimeFunction('fillOrientationChangeEventData', false);
    unexportedRuntimeFunction('registerOrientationChangeEventCallback', false);
    unexportedRuntimeFunction('fillFullscreenChangeEventData', false);
    unexportedRuntimeFunction('registerFullscreenChangeEventCallback', false);
    unexportedRuntimeFunction('JSEvents_requestFullscreen', false);
    unexportedRuntimeFunction('JSEvents_resizeCanvasForFullscreen', false);
    unexportedRuntimeFunction('registerRestoreOldStyle', false);
    unexportedRuntimeFunction('hideEverythingExceptGivenElement', false);
    unexportedRuntimeFunction('restoreHiddenElements', false);
    unexportedRuntimeFunction('setLetterbox', false);
    unexportedRuntimeFunction('currentFullscreenStrategy', false);
    unexportedRuntimeFunction('restoreOldWindowedStyle', false);
    unexportedRuntimeFunction('softFullscreenResizeWebGLRenderTarget', false);
    unexportedRuntimeFunction('doRequestFullscreen', false);
    unexportedRuntimeFunction('fillPointerlockChangeEventData', false);
    unexportedRuntimeFunction('registerPointerlockChangeEventCallback', false);
    unexportedRuntimeFunction('registerPointerlockErrorEventCallback', false);
    unexportedRuntimeFunction('requestPointerLock', false);
    unexportedRuntimeFunction('fillVisibilityChangeEventData', false);
    unexportedRuntimeFunction('registerVisibilityChangeEventCallback', false);
    unexportedRuntimeFunction('registerTouchEventCallback', false);
    unexportedRuntimeFunction('fillGamepadEventData', false);
    unexportedRuntimeFunction('registerGamepadEventCallback', false);
    unexportedRuntimeFunction('registerBeforeUnloadEventCallback', false);
    unexportedRuntimeFunction('fillBatteryEventData', false);
    unexportedRuntimeFunction('battery', false);
    unexportedRuntimeFunction('registerBatteryEventCallback', false);
    unexportedRuntimeFunction('setCanvasElementSize', false);
    unexportedRuntimeFunction('getCanvasElementSize', false);
    unexportedRuntimeFunction('demangle', false);
    unexportedRuntimeFunction('demangleAll', false);
    unexportedRuntimeFunction('jsStackTrace', false);
    unexportedRuntimeFunction('stackTrace', false);
    unexportedRuntimeFunction('getEnvStrings', false);
    unexportedRuntimeFunction('checkWasiClock', false);
    unexportedRuntimeFunction('flush_NO_FILESYSTEM', false);
    unexportedRuntimeFunction('dlopenMissingError', false);
    unexportedRuntimeFunction('setImmediateWrapped', false);
    unexportedRuntimeFunction('clearImmediateWrapped', false);
    unexportedRuntimeFunction('polyfillSetImmediate', false);
    unexportedRuntimeFunction('uncaughtExceptionCount', false);
    unexportedRuntimeFunction('exceptionLast', false);
    unexportedRuntimeFunction('exceptionCaught', false);
    unexportedRuntimeFunction('ExceptionInfo', false);
    unexportedRuntimeFunction('exception_addRef', false);
    unexportedRuntimeFunction('exception_decRef', false);
    unexportedRuntimeFunction('Browser', false);
    unexportedRuntimeFunction('setMainLoop', false);
    unexportedRuntimeFunction('wget', false);
    unexportedRuntimeFunction('FS', false);
    unexportedRuntimeFunction('MEMFS', false);
    unexportedRuntimeFunction('TTY', false);
    unexportedRuntimeFunction('PIPEFS', false);
    unexportedRuntimeFunction('SOCKFS', false);
    unexportedRuntimeFunction('_setNetworkCallback', false);
    unexportedRuntimeFunction('tempFixedLengthArray', false);
    unexportedRuntimeFunction('miniTempWebGLFloatBuffers', false);
    unexportedRuntimeFunction('heapObjectForWebGLType', false);
    unexportedRuntimeFunction('heapAccessShiftForWebGLHeap', false);
    unexportedRuntimeFunction('GL', false);
    unexportedRuntimeFunction('emscriptenWebGLGet', false);
    unexportedRuntimeFunction('computeUnpackAlignedImageSize', false);
    unexportedRuntimeFunction('emscriptenWebGLGetTexPixelData', false);
    unexportedRuntimeFunction('emscriptenWebGLGetUniform', false);
    unexportedRuntimeFunction('webglGetUniformLocation', false);
    unexportedRuntimeFunction('webglPrepareUniformLocationsBeforeFirstUse', false);
    unexportedRuntimeFunction('webglGetLeftBracePos', false);
    unexportedRuntimeFunction('emscriptenWebGLGetVertexAttrib', false);
    unexportedRuntimeFunction('writeGLArray', false);
    unexportedRuntimeFunction('AL', false);
    unexportedRuntimeFunction('SDL_unicode', false);
    unexportedRuntimeFunction('SDL_ttfContext', false);
    unexportedRuntimeFunction('SDL_audio', false);
    unexportedRuntimeFunction('SDL', false);
    unexportedRuntimeFunction('SDL_gfx', false);
    unexportedRuntimeFunction('GLUT', false);
    unexportedRuntimeFunction('EGL', false);
    unexportedRuntimeFunction('GLFW_Window', false);
    unexportedRuntimeFunction('GLFW', false);
    unexportedRuntimeFunction('GLEW', false);
    unexportedRuntimeFunction('IDBStore', false);
    unexportedRuntimeFunction('runAndAbortIfError', false);
    unexportedRuntimeFunction('InternalError', false);
    unexportedRuntimeFunction('BindingError', false);
    unexportedRuntimeFunction('UnboundTypeError', false);
    unexportedRuntimeFunction('PureVirtualError', false);
    unexportedRuntimeFunction('init_embind', false);
    unexportedRuntimeFunction('throwInternalError', false);
    unexportedRuntimeFunction('throwBindingError', false);
    unexportedRuntimeFunction('throwUnboundTypeError', false);
    unexportedRuntimeFunction('ensureOverloadTable', false);
    unexportedRuntimeFunction('exposePublicSymbol', false);
    unexportedRuntimeFunction('replacePublicSymbol', false);
    unexportedRuntimeFunction('extendError', false);
    unexportedRuntimeFunction('createNamedFunction', false);
    unexportedRuntimeFunction('registeredInstances', false);
    unexportedRuntimeFunction('getBasestPointer', false);
    unexportedRuntimeFunction('registerInheritedInstance', false);
    unexportedRuntimeFunction('unregisterInheritedInstance', false);
    unexportedRuntimeFunction('getInheritedInstance', false);
    unexportedRuntimeFunction('getInheritedInstanceCount', false);
    unexportedRuntimeFunction('getLiveInheritedInstances', false);
    unexportedRuntimeFunction('registeredTypes', false);
    unexportedRuntimeFunction('awaitingDependencies', false);
    unexportedRuntimeFunction('typeDependencies', false);
    unexportedRuntimeFunction('registeredPointers', false);
    unexportedRuntimeFunction('registerType', false);
    unexportedRuntimeFunction('whenDependentTypesAreResolved', false);
    unexportedRuntimeFunction('embind_charCodes', false);
    unexportedRuntimeFunction('embind_init_charCodes', false);
    unexportedRuntimeFunction('readLatin1String', false);
    unexportedRuntimeFunction('getTypeName', false);
    unexportedRuntimeFunction('heap32VectorToArray', false);
    unexportedRuntimeFunction('requireRegisteredType', false);
    unexportedRuntimeFunction('getShiftFromSize', false);
    unexportedRuntimeFunction('integerReadValueFromPointer', false);
    unexportedRuntimeFunction('enumReadValueFromPointer', false);
    unexportedRuntimeFunction('floatReadValueFromPointer', false);
    unexportedRuntimeFunction('simpleReadValueFromPointer', false);
    unexportedRuntimeFunction('runDestructors', false);
    unexportedRuntimeFunction('new_', false);
    unexportedRuntimeFunction('craftInvokerFunction', false);
    unexportedRuntimeFunction('embind__requireFunction', false);
    unexportedRuntimeFunction('tupleRegistrations', false);
    unexportedRuntimeFunction('structRegistrations', false);
    unexportedRuntimeFunction('genericPointerToWireType', false);
    unexportedRuntimeFunction('constNoSmartPtrRawPointerToWireType', false);
    unexportedRuntimeFunction('nonConstNoSmartPtrRawPointerToWireType', false);
    unexportedRuntimeFunction('init_RegisteredPointer', false);
    unexportedRuntimeFunction('RegisteredPointer', false);
    unexportedRuntimeFunction('RegisteredPointer_getPointee', false);
    unexportedRuntimeFunction('RegisteredPointer_destructor', false);
    unexportedRuntimeFunction('RegisteredPointer_deleteObject', false);
    unexportedRuntimeFunction('RegisteredPointer_fromWireType', false);
    unexportedRuntimeFunction('runDestructor', false);
    unexportedRuntimeFunction('releaseClassHandle', false);
    unexportedRuntimeFunction('finalizationRegistry', false);
    unexportedRuntimeFunction('detachFinalizer_deps', false);
    unexportedRuntimeFunction('detachFinalizer', false);
    unexportedRuntimeFunction('attachFinalizer', false);
    unexportedRuntimeFunction('makeClassHandle', false);
    unexportedRuntimeFunction('init_ClassHandle', false);
    unexportedRuntimeFunction('ClassHandle', false);
    unexportedRuntimeFunction('ClassHandle_isAliasOf', false);
    unexportedRuntimeFunction('throwInstanceAlreadyDeleted', false);
    unexportedRuntimeFunction('ClassHandle_clone', false);
    unexportedRuntimeFunction('ClassHandle_delete', false);
    unexportedRuntimeFunction('deletionQueue', false);
    unexportedRuntimeFunction('ClassHandle_isDeleted', false);
    unexportedRuntimeFunction('ClassHandle_deleteLater', false);
    unexportedRuntimeFunction('flushPendingDeletes', false);
    unexportedRuntimeFunction('delayFunction', false);
    unexportedRuntimeFunction('setDelayFunction', false);
    unexportedRuntimeFunction('RegisteredClass', false);
    unexportedRuntimeFunction('shallowCopyInternalPointer', false);
    unexportedRuntimeFunction('downcastPointer', false);
    unexportedRuntimeFunction('upcastPointer', false);
    unexportedRuntimeFunction('validateThis', false);
    unexportedRuntimeFunction('char_0', false);
    unexportedRuntimeFunction('char_9', false);
    unexportedRuntimeFunction('makeLegalFunctionName', false);
    unexportedRuntimeFunction('emval_handle_array', false);
    unexportedRuntimeFunction('emval_free_list', false);
    unexportedRuntimeFunction('emval_symbols', false);
    unexportedRuntimeFunction('init_emval', false);
    unexportedRuntimeFunction('count_emval_handles', false);
    unexportedRuntimeFunction('get_first_emval', false);
    unexportedRuntimeFunction('getStringOrSymbol', false);
    unexportedRuntimeFunction('Emval', false);
    unexportedRuntimeFunction('emval_newers', false);
    unexportedRuntimeFunction('craftEmvalAllocator', false);
    unexportedRuntimeFunction('emval_get_global', false);
    unexportedRuntimeFunction('emval_lookupTypes', false);
    unexportedRuntimeFunction('emval_allocateDestructors', false);
    unexportedRuntimeFunction('emval_methodCallers', false);
    unexportedRuntimeFunction('emval_addMethodCaller', false);
    unexportedRuntimeFunction('emval_registeredMethods', false);
    unexportedRuntimeSymbol('ALLOC_NORMAL', false);
    unexportedRuntimeSymbol('ALLOC_STACK', false);
    var calledRun;
    /**
     * @constructor
     * @this {ExitStatus}
     */

    function ExitStatus(status) {
      this.name = "ExitStatus";
      this.message = "Program terminated with exit(" + status + ")";
      this.status = status;
    }

    var calledMain = false;

    dependenciesFulfilled = function runCaller() {
      // If run has never been called, and we should call run (INVOKE_RUN is true, and Module.noInitialRun is not false)
      if (!calledRun) run();
      if (!calledRun) dependenciesFulfilled = runCaller; // try this again later, after new deps are fulfilled
    };

    function stackCheckInit() {
      // This is normally called automatically during __wasm_call_ctors but need to
      // get these values before even running any of the ctors so we call it redundantly
      // here.
      _emscripten_stack_init(); // TODO(sbc): Move writeStackCookie to native to to avoid this.


      writeStackCookie();
    }
    /** @type {function(Array=)} */


    function run(args) {
      args = args || arguments_;

      if (runDependencies > 0) {
        return;
      }

      stackCheckInit();
      preRun(); // a preRun added a dependency, run will be called later

      if (runDependencies > 0) {
        return;
      }

      function doRun() {
        // run may have just been called through dependencies being fulfilled just in this very frame,
        // or while the async setStatus time below was happening
        if (calledRun) return;
        calledRun = true;
        Module['calledRun'] = true;
        if (ABORT) return;
        initRuntime();
        readyPromiseResolve(Module);
        if (Module['onRuntimeInitialized']) Module['onRuntimeInitialized']();
        assert(!Module['_main'], 'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]');
        postRun();
      }

      if (Module['setStatus']) {
        Module['setStatus']('Running...');
        setTimeout(function () {
          setTimeout(function () {
            Module['setStatus']('');
          }, 1);
          doRun();
        }, 1);
      } else {
        doRun();
      }

      checkStackCookie();
    }

    Module['run'] = run;

    function checkUnflushedContent() {
      // Compiler settings do not allow exiting the runtime, so flushing
      // the streams is not possible. but in ASSERTIONS mode we check
      // if there was something to flush, and if so tell the user they
      // should request that the runtime be exitable.
      // Normally we would not even include flush() at all, but in ASSERTIONS
      // builds we do so just for this check, and here we see if there is any
      // content to flush, that is, we check if there would have been
      // something a non-ASSERTIONS build would have not seen.
      // How we flush the streams depends on whether we are in SYSCALLS_REQUIRE_FILESYSTEM=0
      // mode (which has its own special function for this; otherwise, all
      // the code is inside libc)
      var oldOut = out;
      var oldErr = err;
      var has = false;

      out = err = x => {
        has = true;
      };

      try {
        // it doesn't matter if it fails
        _fflush(0);
      } catch (e) {}

      out = oldOut;
      err = oldErr;

      if (has) {
        warnOnce('stdio streams had content in them that was not flushed. you should set EXIT_RUNTIME to 1 (see the FAQ), or make sure to emit a newline when you printf etc.');
        warnOnce('(this may also be due to not including full filesystem support - try building with -sFORCE_FILESYSTEM)');
      }
    }
    /** @param {boolean|number=} implicit */


    function exit(status, implicit) {
      EXITSTATUS = status;
      checkUnflushedContent(); // if exit() was called explicitly, warn the user if the runtime isn't actually being shut down

      if (keepRuntimeAlive() && !implicit) {
        var msg = 'program exited (with status: ' + status + '), but EXIT_RUNTIME is not set, so halting execution but not exiting the runtime or preventing further async execution (build with EXIT_RUNTIME=1, if you want a true shutdown)';
        readyPromiseReject(msg);
        err(msg);
      }

      procExit(status);
    }

    function procExit(code) {
      EXITSTATUS = code;

      if (!keepRuntimeAlive()) {
        if (Module['onExit']) Module['onExit'](code);
        ABORT = true;
      }

      quit_(code, new ExitStatus(code));
    }

    if (Module['preInit']) {
      if (typeof Module['preInit'] == 'function') Module['preInit'] = [Module['preInit']];

      while (Module['preInit'].length > 0) {
        Module['preInit'].pop()();
      }
    }

    run();
    return jessica.ready;
  };
})();

if (typeof exports === 'object' && typeof module === 'object') module.exports = jessica;else if (typeof define === 'function' && define['amd']) define([], function () {
  return jessica;
});else if (typeof exports === 'object') exports["jessica"] = jessica;

class JessicaWasmService {
  constructor() {
    var _this = this;

    jessica().then( /*#__PURE__*/function () {
      var _ref = (0,_home_runner_work_jessica_jessica_src_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (instance) {
        _this.instance = instance;
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }

  wasm() {
    return this.instance;
  }

}

JessicaWasmService.ɵfac = function JessicaWasmService_Factory(t) {
  return new (t || JessicaWasmService)();
};

JessicaWasmService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: JessicaWasmService,
  factory: JessicaWasmService.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](JessicaWasmService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [];
  }, null);
})();
/* eslint-disable max-len */

/* eslint-enable max-len */


class MeyerhofCalcService {
  constructor(wasm) {
    this.wasm = wasm;
  }

  compute(newItem) {
    const ttt = this.wasm.wasm();
    const foundation = new ttt.FoundationStrip().setB(newItem.foundation.width);
    const load = new ttt.VerticalEccentric().setV(newItem.load.load).setE(newItem.load.eccentric);
    const calc = new ttt.MeyerhofShallowFoundation(load, foundation);
    return {
      qref: calc.qref(),
      b_: calc.b_()
    };
  }

}

MeyerhofCalcService.ɵfac = function MeyerhofCalcService_Factory(t) {
  return new (t || MeyerhofCalcService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](JessicaWasmService));
};

MeyerhofCalcService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: MeyerhofCalcService,
  factory: MeyerhofCalcService.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MeyerhofCalcService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: JessicaWasmService
    }];
  }, null);
})();
/*
 * Public API Surface of jessica
 */

/* eslint-enable max-len */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 5486:
/*!****************************************************!*\
  !*** ./projects/toolbox/dist/fesm2020/toolbox.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MultiTranslateHttpLoader": () => (/* binding */ MultiTranslateHttpLoader),
/* harmony export */   "ToolboxComponent": () => (/* binding */ ToolboxComponent),
/* harmony export */   "ToolboxModule": () => (/* binding */ ToolboxModule),
/* harmony export */   "ToolboxService": () => (/* binding */ ToolboxService),
/* harmony export */   "TranslateExService": () => (/* binding */ TranslateExService),
/* harmony export */   "TranslateMockPipe": () => (/* binding */ TranslateMockPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7454);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 2710);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 443);
/* harmony import */ var cldr_data_supplemental_likelySubtags_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cldr-data/supplemental/likelySubtags.json */ 6956);
/* harmony import */ var cldr_data_supplemental_numberingSystems_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cldr-data/supplemental/numberingSystems.json */ 6111);
/* harmony import */ var globalize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! globalize */ 397);
/* harmony import */ var globalize_number__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! globalize/number */ 1169);









class ToolboxService {
}
ToolboxService.ɵfac = function ToolboxService_Factory(t) { return new (t || ToolboxService)(); };
ToolboxService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: ToolboxService, factory: ToolboxService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](ToolboxService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();

class ToolboxComponent {
}
ToolboxComponent.ɵfac = function ToolboxComponent_Factory(t) { return new (t || ToolboxComponent)(); };
ToolboxComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ToolboxComponent, selectors: [["lib-toolbox"]], decls: 2, vars: 0, template: function ToolboxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "toolbox works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](ToolboxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component,
        args: [{
                selector: 'lib-toolbox',
                template: ` <p>toolbox works!</p> `,
                styles: []
            }]
    }], null, null); })();

class ToolboxModule {
}
ToolboxModule.ɵfac = function ToolboxModule_Factory(t) { return new (t || ToolboxModule)(); };
ToolboxModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: ToolboxModule });
ToolboxModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](ToolboxModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule,
        args: [{
                declarations: [ToolboxComponent],
                imports: [],
                exports: [ToolboxComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ToolboxModule, { declarations: [ToolboxComponent], exports: [ToolboxComponent] }); })();

class MultiTranslateHttpLoader {
    constructor(http, resources = [
        {
            prefix: './assets/i18n/',
            suffix: '.json'
        }
    ]) {
        this.http = http;
        this.resources = resources;
    }
    getTranslation(lang) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.forkJoin)(this.resources.map((config) => {
            return this.http.get(`${config.prefix}${lang}${config.suffix}`);
        })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((response) => {
            return response.reduce((a, b) => {
                return Object.assign(a, b);
            });
        }));
    }
}

class TranslateExService {
    constructor(languages) {
        this.languages = languages;
        this._language = 'en';
        this.Globalize = globalize__WEBPACK_IMPORTED_MODULE_2__;
        this.Globalize.load([cldr_data_supplemental_likelySubtags_json__WEBPACK_IMPORTED_MODULE_0__, cldr_data_supplemental_numberingSystems_json__WEBPACK_IMPORTED_MODULE_1__]);
    }
    extractLanguage(language) {
        if (this.languages.indexOf(language) != -1) {
            return language;
        }
        const pos = language.indexOf('-');
        const shortLang = pos === -1 ? language : language.substring(0, pos);
        if (this.languages.indexOf(shortLang) != -1) {
            return shortLang;
        }
        return 'en';
    }
    get language() {
        return this._language;
    }
    set language(language) {
        this._language = language;
        this.Globalize.locale(language);
        this._numberParser = this.Globalize.numberParser();
    }
    get numberParser() {
        return this._numberParser;
    }
    validNumber() {
        return (control) => {
            // Before calling isNan, be sure value can't be empty or null.
            if (isNaN(this._numberParser(control.value))) {
                return {
                    validNumber: {
                        reason: 'invalid number',
                        value: control.value
                    }
                };
            }
            return null;
        };
    }
    i18nStringToNumber(obj, i18n, nbParse) {
        /* eslint-disable security/detect-object-injection */
        i18n.child?.map((ch) => this.i18nStringToNumber(obj[ch], i18n[ch], nbParse));
        i18n.number?.map((nb) => (obj[nb] = nbParse(obj[nb])));
        /* eslint-enable security/detect-object-injection */
    }
    i18nStringChangeLocale(obj, i18n, from, to) {
        let parserFrom;
        if (typeof from === 'string') {
            this.Globalize.locale(from);
            parserFrom = this.Globalize.numberParser();
        }
        else {
            parserFrom = from;
        }
        let parserTo;
        if (typeof to === 'string') {
            this.Globalize.locale(to);
            parserTo = this.Globalize.numberFormatter();
        }
        else {
            parserTo = to;
        }
        /* eslint-disable security/detect-object-injection */
        i18n.child
            ?.filter((ch) => obj[ch] !== '')
            .map((ch) => this.i18nStringChangeLocale(obj[ch], i18n[ch], parserFrom, parserTo));
        i18n.number
            ?.filter((nb) => obj[nb] !== null &&
            obj[nb] !== '' &&
            !Number.isNaN(parserFrom(obj[nb])))
            .map((nb) => (obj[nb] = parserTo(parserFrom(obj[nb]))));
        /* eslint-enable security/detect-object-injection */
    }
}
TranslateExService.ɵfac = function TranslateExService_Factory(t) { return new (t || TranslateExService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"]('languages')); };
TranslateExService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: TranslateExService, factory: TranslateExService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](TranslateExService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Inject,
                args: ['languages']
            }] }]; }, null); })();

class TranslateMockPipe {
    constructor() {
        this.name = 'translate';
    }
    transform(query) {
        return query;
    }
}
TranslateMockPipe.ɵfac = function TranslateMockPipe_Factory(t) { return new (t || TranslateMockPipe)(); };
TranslateMockPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefinePipe"]({ name: "translate", type: TranslateMockPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](TranslateMockPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Pipe,
        args: [{
                name: 'translate'
            }]
    }], null, null); })();

/*
 * Public API Surface of toolbox
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 4074:
/*!****************************************************************!*\
  !*** ./projects/app-main/src/app/util/translate/all-lang.json ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ["en","fr"];

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(1209)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map