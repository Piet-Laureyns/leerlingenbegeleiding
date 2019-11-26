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

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <div class=\"center title\">\n    <h1><strong>Leerlingenbegeleiding IBC</strong></h1>\n  </div>\n  <div class=\"schools\">\n    <div class=\"school\">\n      <h2>Het Nest</h2>\n      <div class=\"button1 button\" (click)=\"buttonClick('Het Nest', 'Psycho-sociaal Funtioneren', 1)\"><span\n          class=\"button-text1\">Psycho-sociaal Funtioneren</span></div>\n      <div class=\"button2 button\" (click)=\"buttonClick('Het Nest', 'Leren en Studeren', 2)\"><span\n          class=\"button-text1\">Leren en Studeren</span></div>\n      <div class=\"button3 button\" (click)=\"buttonClick('Het Nest', 'Schoolloopbaan', 3)\"><span\n          class=\"button-text2\">Schoolloopbaan</span></div>\n      <div class=\"button4 button\" (click)=\"buttonClick('Het Nest', 'Preventieve Gezondheidszorg', 4)\"><span\n          class=\"button-text2\">Preventieve Gezondheidszorg</span></div>\n    </div>\n    <div class=\"school\">\n      <h2>Het Anker</h2>\n      <div class=\"button1 button\" (click)=\"buttonClick('Het Anker', 'Psycho-sociaal Funtioneren', 1)\"><span\n          class=\"button-text1\">Psycho-sociaal Funtioneren</span></div>\n      <div class=\"button2 button\" (click)=\"buttonClick('Het Anker', 'Leren en Studeren', 2)\"><span\n          class=\"button-text1\">Leren en Studeren</span></div>\n      <div class=\"button3 button\" (click)=\"buttonClick('Het Anker', 'Schoolloopbaan', 3)\"><span\n          class=\"button-text2\">Schoolloopbaan</span></div>\n      <div class=\"button4 button\" (click)=\"buttonClick('Het Anker', 'Preventieve Gezondheidszorg', 4)\"><span\n          class=\"button-text2\">Preventieve Gezondheidszorg</span>\n      </div>\n    </div>\n    <div class=\"school\">\n      <h2>De Cirkel</h2>\n      <div class=\"button1 button\" (click)=\"buttonClick('De Cirkel', 'Psycho-sociaal Funtioneren', 1)\"><span\n          class=\"button-text1\">Psycho-sociaal Funtioneren</span></div>\n      <div class=\"button2 button\" (click)=\"buttonClick('De Cirkel', 'Leren en Studeren', 2)\"><span\n          class=\"button-text1\">Leren en Studeren</span></div>\n      <div class=\"button3 button\" (click)=\"buttonClick('De Cirkel', 'Schoolloopbaan', 3)\"><span\n          class=\"button-text2\">Schoolloopbaan</span></div>\n      <div class=\"button4 button\" (click)=\"buttonClick('De Cirkel', 'Preventieve Gezondheidszorg', 4)\"><span\n          class=\"button-text2\">Preventieve Gezondheidszorg</span>\n      </div>\n    </div>\n    <div class=\"school\">\n      <h2>Het Kwadrant</h2>\n      <div class=\"button1 button\" (click)=\"buttonClick('Het Kwadrant', 'Psycho-sociaal Funtioneren', 1)\"><span\n          class=\"button-text1\">Psycho-sociaal Funtioneren</span></div>\n      <div class=\"button2 button\" (click)=\"buttonClick('Het Kwadrant', 'Leren en Studeren', 2)\"><span\n          class=\"button-text1\">Leren en Studeren</span></div>\n      <div class=\"button3 button\" (click)=\"buttonClick('Het Kwadrant', 'Schoolloopbaan', 3)\"><span\n          class=\"button-text2\">Schoolloopbaan</span></div>\n      <div class=\"button4 button\" (click)=\"buttonClick('Het Kwadrant', 'Preventieve Gezondheidszorg', 4)\"><span\n          class=\"button-text2\">Preventieve Gezondheidszorg</span>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/page-not-found/page-not-found.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page-not-found/page-not-found.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"center\">\n  <h1>\n    Er is iets fout gelopen.\n  </h1>\n  <h2 routerLink=\"\">Terug naar home</h2>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/post-it/post-it.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/post-it/post-it.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"center main\">\n  <h1>{{postIt.titel}}</h1>\n  <hr />\n  <div class=\"content\" *ngIf=\"!postIt.hasMultipleUrls()\">\n    <div class=\"document\">\n      <iframe id=\"loader\" #iframe [src]=\"getUrl(postIt.urls[0])\" width='100%' height='100%' frameborder='0'>\n        <div class=\"test center\">\n          <mat-spinner class=\"mat-spinner-color\"></mat-spinner>\n        </div>\n      </iframe>\n    </div>\n  </div>\n  <div class=\"content\" *ngIf=\"postIt.hasMultipleUrls()\">\n    <div class=\"row\" class=\"documents\">\n      <div class=\"documentButton\" *ngFor=\"let url of postIt.urls; let i = index\" (click)=\"selectUrl(url)\">\n        Document {{i+1}}\n      </div>\n    </div>\n    <div class=\"document\">\n      <iframe id=\"loader\" [src]=\"getUrl()\" width='100%' height='100%' frameborder='0'></iframe>\n    </div>\n\n  </div>\n\n\n  <!-- <iframe id='test' (load)=\"if(this.src) document.getElementById('test').style.display = 'none'\" [src]=\"getUrl()\" width='100%' height='100%' frameborder='0'></iframe> -->\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pyramid/pyramid.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pyramid/pyramid.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main center\">\n  <div class=\"nav\">\n    <div class=\"backButton\">\n      <button class='btn btn-primary' routerLink=\"\"><span class=\"buttonText\"> ← Terug naar Home</span></button>\n    </div>\n    <div class=\"center titel\">\n      <h1>{{school}} - {{titel}}</h1>\n    </div>\n  </div>\n  <div class='body' *ngIf=\"!noData\">\n    <div [style.background-image]=\"backgroundImage\" id=\"content\" class=\"content\" *ngIf=\"data\">\n      <div class=\"top\">\n        <div *ngFor=\"let postIt of data.postItsTop\" class=\"postit\"\n          [ngClass]=\"{'postit-groen': postIt.isGroen(), 'postit-small': smallPostIts, 'postit-normal': !smallPostIts}\"\n          (click)=\"showPostIt(postIt)\">\n          <p>{{postIt.titel}}</p>\n        </div>\n      </div>\n      <div class=\"middle\">\n        <div *ngFor=\"let postIt of data.postItsMiddle\" class=\"postit\"\n          [ngClass]=\"{'postit-groen': postIt.isGroen(), 'postit-small': smallPostIts, 'postit-normal': !smallPostIts}\"\n          (click)=\"showPostIt(postIt)\">\n          <p>{{postIt.titel}}</p>\n        </div>\n      </div>\n      <div class=\"bottom\">\n        <div *ngFor=\"let postIt of data.postItsBottom\" class=\"postit\"\n          [ngClass]=\"{'postit-groen': postIt.isGroen(), 'postit-small': smallPostIts, 'postit-normal': !smallPostIts, 'postit-url-exists': postIt.hasUrl()}\"\n          (click)=\"showPostIt(postIt)\">\n          <p>{{postIt.titel}}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div *ngIf=\"noData\" style=\"margin-top:5%;\">\n    <h2>Deze pyramide moet nog aangemaakt worden.</h2>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let AppComponent = class AppComponent {
    constructor(router) {
        this.router = router;
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_doc_viewer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-doc-viewer */ "./node_modules/ngx-doc-viewer/fesm2015/ngx-doc-viewer.js");
/* harmony import */ var _post_it_post_it_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./post-it/post-it.component */ "./src/app/post-it/post-it.component.ts");
/* harmony import */ var _pyramid_pyramid_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pyramid/pyramid.component */ "./src/app/pyramid/pyramid.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");














const appRoutes = [
    { path: 'driehoek/:school/:id/:titel', component: _pyramid_pyramid_component__WEBPACK_IMPORTED_MODULE_11__["PyramidComponent"] },
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"] },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_12__["PageNotFoundComponent"] }
];
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _post_it_post_it_component__WEBPACK_IMPORTED_MODULE_10__["PostItComponent"],
            _pyramid_pyramid_component__WEBPACK_IMPORTED_MODULE_11__["PyramidComponent"],
            _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_12__["PageNotFoundComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"]
        ],
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(appRoutes),
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinnerModule"],
            ngx_doc_viewer__WEBPACK_IMPORTED_MODULE_9__["NgxDocViewerModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
        entryComponents: [
            _post_it_post_it_component__WEBPACK_IMPORTED_MODULE_10__["PostItComponent"]
        ]
    })
], AppModule);



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _postIt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./postIt */ "./src/app/postIt.ts");
/* harmony import */ var _pyramidData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pyramidData */ "./src/app/pyramidData.ts");




let DataService = class DataService {
    constructor() { }
    getDataDriehoek(school, id) {
        switch (school) {
            case 'Het Nest': return this.getDataHetNest(id); // OV1
            case 'Het Anker': return this.getDataHetAnker(id); // OV2
            case 'De Cirkel': return this.getDataDeCirkel(id); // OV3
            case 'Het Kwadrant': return this.getDataHetKwadrant(id); // OV4
        }
    }
    getDataHetNest(id) {
        // Psycho-Sociaal Functioneren
        const data1 = new _pyramidData__WEBPACK_IMPORTED_MODULE_3__["PyramidData"]([
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Kleine klasgroepen', 'groen', ['https://drive.google.com/file/d/1Se7cgya8AcVswaR00Qs-iYDc3FJp4Cer/preview']),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Rust momenten', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Uitstappen op maat', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Praatronde', 'groen', []),
            // new PostIt('Belonings- activiteiten', 'groen', []),
            // new PostIt('Individuele gesprekken', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Huiselijke Sfeer', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Verjaardags- kalender', 'groen', ['https://drive.google.com/file/d/1c7S4o27UgB07zfgWncBhncJsI5LKi8uS/preview']),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Alles ok?', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Meter/Peter -schap', 'blauw', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Externe Hulp', 'blauw', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Talenten show', 'blauw', [])
        ], [
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Aangepast Onthaal', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Individuele gesprekken', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Meer 1-1 Begeleiding', 'blauw', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('belonings- activiteit', 'blauw', [])
        ], [
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Externe Diensten', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('ondersteun -ingsplan', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Vertrouwens persoon', 'blauw', [])
        ]);
        // Leren en Studeren
        const data2 = new _pyramidData__WEBPACK_IMPORTED_MODULE_3__["PyramidData"]([
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('IHP', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('RSV', 'groen', ['https://drive.google.com/file/d/1Pq0jt82EHrl0vEom4EWT4ipnR6GfQxU_/preview',
                'https://drive.google.com/file/d/1SIe9OyogvR0rrOhaBziid7MBLxcbbv22/preview']),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Kookles', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Bosklas', 'groen', ['https://drive.google.com/file/d/1AVHrF-KqKbiqZ37P7e-8XPy5ViCtk4ZY/preview']),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Knutsel les', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Huishoude- lijke vaardigheden', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Schoolse vaardigheden', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Atelier werking', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Werkdozen', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Dagschema', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Sociaal vaardig', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Maatschappe- lijk gedrag', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Extra-muros', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Klas beloningen', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Talenten', 'blauw', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Klas overschrijdend', 'blauw', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Arbeids interesse test', 'blauw', [])
        ], [
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('SMT', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Leren in klas blijven', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('SMOG', 'groen', [])
        ], [ // Top
        // new PostIt('Alternatieve Trajecten iCLB', 'groen', [])
        ]);
        // Schoolloopbaan
        const data3 = new _pyramidData__WEBPACK_IMPORTED_MODULE_3__["PyramidData"]([
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Draaiboek 19+', 'groen', ['https://drive.google.com/file/d/1fGOnSZYKgQpieKgtK_qB_r5cUqfPN6s0/preview']),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Ouder- contacten', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Niveau groepen', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Inschrijvings- procedure', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Kooklessen', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Talenten portfolio', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Rots en Waten', 'blauw', [])
            // new PostIt('Onderzoeks- instrument', 'blauw', []),
            // new PostIt('Talent gericht werken', 'blauw', []),
            // new PostIt('Talent show', 'blauw', [])
        ], [
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Stage', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Ouders', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Proefperiode in OV2', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Psycho- educatie', 'blauw', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Brug naar dagcentra', 'blauw', [])
        ], [
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Familie therapie', 'blauw', [])
        ]);
        // Preventieve Gezondheidszorg
        const data4 = new _pyramidData__WEBPACK_IMPORTED_MODULE_3__["PyramidData"]([
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Tanden poetsen', 'groen', ['https://drive.google.com/file/d/1ghcGmfPNFTTEoYkWMakyLqqM9HMTDUc5/preview']),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Sportdag', 'groen', ['https://drive.google.com/file/d/1CXzuaiLCL1tOvRcf_3xF2OfgY9lF0Lgx/preview']),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Onderhoud kledij', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Gezonde voeding', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Fruitsnack', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Enkel water', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Drinkfles', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('wandelingen', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Rust momenten', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Zwem lessen', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Toilet bezoek', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Luizen controle', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Zonne- bescherming', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('RSV', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Douche momenten', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Kledij', 'blauw', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Voldoende drinken', 'blauw', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Tand verzorging', 'blauw', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('WGC', 'blauw', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Evenwichtige voeding', 'blauw', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Yoga', 'blauw', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Beweeg moment om 10u30', 'blauw', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Fluo-vestje', 'blauw', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Beweeg- parcours', 'blauw', []),
        ], [
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Ortho- pedische schoenen', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Hand verzorging', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('RSV Privé', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Luiers', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Eten geven', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Luizen behandeling', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Leren douche', 'blauw', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Lichaams- gewicht', 'blauw', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Drug preventie', 'blauw', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Bril', 'blauw', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Neus snuiten', 'blauw', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('G-sport club', 'blauw', [])
            // new PostIt('Pilgebruik', 'blauw', []),
        ], [
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('G-sport club uitnodigen', 'blauw', [])
        ]);
        switch (id) {
            case '1': return data1;
            case '2': return data2;
            case '3': return data3;
            case '4': return data4;
            default: return data1;
        }
    }
    getDataHetAnker(id) {
        const data1 = new _pyramidData__WEBPACK_IMPORTED_MODULE_3__["PyramidData"]([ // Bottom
        ], [ // Middle
        ], [ // Top
        ]);
        // Leren en Studeren
        const data2 = new _pyramidData__WEBPACK_IMPORTED_MODULE_3__["PyramidData"]([ // Bottom
        ], [ // Middle
        ], [ // Top
        ]);
        // Schoolloopbaan
        const data3 = new _pyramidData__WEBPACK_IMPORTED_MODULE_3__["PyramidData"]([ // Bottom
        ], [ // Middle
        ], [ // Top
        ]);
        // Preventieve Gezondheidszorg
        const data4 = new _pyramidData__WEBPACK_IMPORTED_MODULE_3__["PyramidData"]([
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('', 'groen', [])
        ], [
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('', 'groen', []),
        ], [ // Top
        ]);
        switch (id) {
            case '1': return data1;
            case '2': return data2;
            case '3': return data3;
            case '4': return data4;
            default: return data1;
        }
    }
    getDataDeCirkel(id) {
        return null;
    }
    getDataHetKwadrant(id) {
        const data1 = new _pyramidData__WEBPACK_IMPORTED_MODULE_3__["PyramidData"]([ // Bottom
        ], [ // Middle
        ], [ // Top
        ]);
        // Leren en Studeren
        const data2 = new _pyramidData__WEBPACK_IMPORTED_MODULE_3__["PyramidData"]([ // Bottom
        ], [ // Middle
        ], [ // Top
        ]);
        // Schoolloopbaan
        const data3 = new _pyramidData__WEBPACK_IMPORTED_MODULE_3__["PyramidData"]([
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Taal screening', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Project', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Onderwijs kiezer', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('deStap', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Snuffel- stages', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Beroepen- huis', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Gesprekken', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Intrinsieke motivatie', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Getuigenissen', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('ID-fishes', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('KR', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Leerling volgsysteem', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Zelf- evaluatie', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Integratie', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Ouder- contacten', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Coping strategieën', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Zelfsturend', 'groen', [])
        ], [
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Klas gesprekken', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('OLB-bundel', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Info avond', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Toon moment', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Draaiboek OLB', 'groen', [])
        ], [ // Top
        ]);
        // Preventieve Gezondheidszorg
        const data4 = new _pyramidData__WEBPACK_IMPORTED_MODULE_3__["PyramidData"]([
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('', 'groen', [])
        ], [
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('', 'groen', []),
        ], [ // Top
        ]);
        switch (id) {
            case '1': return data1;
            case '2': return data2;
            case '3': return data3;
            case '4': return data4;
            default: return data1;
        }
    }
};
DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], DataService);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\r\n  overflow-y: hidden;\r\n  width: 100%;\r\n  height: 100%;\r\n  /* border: solid red 1px; */\r\n  text-align: center;\r\n  justify-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.title {\r\n  height: 5vw;\r\n  color: white;\r\n  background-color: var(--blue);\r\n  border-bottom: solid var(--darkblue) 2px;\r\n}\r\n\r\nh1 {\r\n  font-size: 3vw;\r\n  -webkit-text-decoration: bold;\r\n          text-decoration: bold;\r\n}\r\n\r\nh2 {\r\n  font-size: 2vw;\r\n  /* border-bottom: solid var(--blue) 2px; */\r\n  width: 80%;\r\n  margin-left: 10%;\r\n  text-align: center;\r\n}\r\n\r\n.button1 {\r\n  border-top-left-radius: 100%;\r\n}\r\n\r\n.button2 {\r\n  border-top-right-radius: 100%;\r\n}\r\n\r\n.button3 {\r\n  border-bottom-left-radius: 100%;\r\n}\r\n\r\n.button4 {\r\n  border-bottom-right-radius: 100%;\r\n}\r\n\r\n.schools {\r\n  overflow-y: auto;\r\n  display: inline-block;\r\n  /* border:solid green 1px; */\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.school {\r\n  display: inline-block;\r\n  width: 25vw;\r\n  margin-left: 5vw;\r\n  margin-right: 5vw;\r\n  height: 25vw;\r\n  margin-top: 1vw;\r\n  /* border: solid black 1px; */\r\n  text-align: center;\r\n  font-size: 0%;\r\n}\r\n\r\n.button1,\r\n.button2,\r\n.button3,\r\n.button4 {\r\n  position: relative;\r\n  display: inline-block;\r\n  margin: 2%;\r\n  width: 10vw;\r\n  height: 10vw;\r\n  background-color: var(--blue);\r\n  border: solid var(--darkblue) 4px;\r\n}\r\n\r\n.button-text1 {\r\n  position: absolute;\r\n  left: 0;\r\n  right: 0;\r\n  top: 60%;\r\n  /* border: solid red 1px; */\r\n  font-size: 1vw;\r\n  color: white;\r\n}\r\n\r\n.button-text2 {\r\n  position: absolute;\r\n  left: 0;\r\n  right: 0;\r\n  top: 20%;\r\n  /* border: solid red 1px; */\r\n  font-size: 1vw;\r\n  color: white;\r\n}\r\n\r\n.button:hover {\r\n  cursor: pointer;\r\n  background-color: var(--lightblue);\r\n  border: solid var(--darkblue) 3px;\r\n}\r\n\r\n.button:focus {\r\n  outline: 0;\r\n  background-color: var(--lightblue);\r\n  border: solid var(--darkblue) 3px;\r\n}\r\n\r\n/* Tablets (portrait and landscape) ----------- */\r\n\r\n@media only screen and (min-width: 400px) and (max-width: 960px) {\r\n  .title {\r\n    height: 7vw;\r\n  }\r\n\r\n  h1 {\r\n    font-size: 5vw;\r\n  }\r\n\r\n  h2 {\r\n    font-size: 3vw;\r\n  }\r\n\r\n  .schools {\r\n    width: 100vw;\r\n    height: 100%;\r\n  }\r\n\r\n  .school {\r\n    width: 40vw;\r\n    height: 40vw;\r\n    margin: 0%;\r\n  }\r\n\r\n  .button1,\r\n  .button2,\r\n  .button3,\r\n  .button4 {\r\n    margin: 1.5%;\r\n    width: 15vw;\r\n    height: 15vw;\r\n  }\r\n\r\n  .button-text1 {\r\n    top: 50%;\r\n    font-size: 1.5vw;\r\n  }\r\n\r\n  .button-text2 {\r\n    top: 20%;\r\n    font-size: 1.5vw;\r\n  }\r\n}\r\n\r\n/* Smartphones (portrait and landscape) ----------- */\r\n\r\n@media only screen and (max-width: 400px) {\r\n  .title {\r\n    height: 10vw;\r\n  }\r\n\r\n  h1 {\r\n    font-size: 6vw;\r\n  }\r\n\r\n  h2 {\r\n    font-size: 5vw;\r\n  }\r\n\r\n  .schools {\r\n    width: 100vw;\r\n    height: 100%;\r\n  }\r\n\r\n  .school {\r\n    width: 45vw;\r\n    height: 45vw;\r\n    margin: 0%;\r\n  }\r\n\r\n  .button1,\r\n  .button2,\r\n  .button3,\r\n  .button4 {\r\n    width: 20vw;\r\n    height: 20vw;\r\n  }\r\n\r\n  .button-text1 {\r\n    top: 50%;\r\n    font-size: 2.3vw;\r\n  }\r\n\r\n  .button-text2 {\r\n    top: 20%;\r\n    font-size: 2.3vw;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWiwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLDZCQUE2QjtFQUM3Qix3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsNkJBQXFCO1VBQXJCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCwwQ0FBMEM7RUFDMUMsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLDRCQUE0QjtFQUM1QixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7O0FBRUE7Ozs7RUFJRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtFQUNaLDZCQUE2QjtFQUM3QixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFFBQVE7RUFDUixRQUFRO0VBQ1IsMkJBQTJCO0VBQzNCLGNBQWM7RUFDZCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFFBQVE7RUFDUixRQUFRO0VBQ1IsMkJBQTJCO0VBQzNCLGNBQWM7RUFDZCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0NBQWtDO0VBQ2xDLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLFVBQVU7RUFDVixrQ0FBa0M7RUFDbEMsaUNBQWlDO0FBQ25DOztBQUVBLGlEQUFpRDs7QUFDakQ7RUFDRTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osVUFBVTtFQUNaOztFQUVBOzs7O0lBSUUsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxRQUFRO0lBQ1IsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsUUFBUTtJQUNSLGdCQUFnQjtFQUNsQjtBQUNGOztBQUVBLHFEQUFxRDs7QUFDckQ7RUFDRTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osVUFBVTtFQUNaOztFQUVBOzs7O0lBSUUsV0FBVztJQUNYLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFFBQVE7SUFDUixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxRQUFRO0lBQ1IsZ0JBQWdCO0VBQ2xCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluIHtcclxuICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIC8qIGJvcmRlcjogc29saWQgcmVkIDFweDsgKi9cclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIGhlaWdodDogNXZ3O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcclxuICBib3JkZXItYm90dG9tOiBzb2xpZCB2YXIoLS1kYXJrYmx1ZSkgMnB4O1xyXG59XHJcblxyXG5oMSB7XHJcbiAgZm9udC1zaXplOiAzdnc7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBib2xkO1xyXG59XHJcblxyXG5oMiB7XHJcbiAgZm9udC1zaXplOiAydnc7XHJcbiAgLyogYm9yZGVyLWJvdHRvbTogc29saWQgdmFyKC0tYmx1ZSkgMnB4OyAqL1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5idXR0b24xIHtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMDAlO1xyXG59XHJcblxyXG4uYnV0dG9uMiB7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwMCU7XHJcbn1cclxuXHJcbi5idXR0b24zIHtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMDAlO1xyXG59XHJcblxyXG4uYnV0dG9uNCB7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwMCU7XHJcbn1cclxuXHJcbi5zY2hvb2xzIHtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAvKiBib3JkZXI6c29saWQgZ3JlZW4gMXB4OyAqL1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnNjaG9vbCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAyNXZ3O1xyXG4gIG1hcmdpbi1sZWZ0OiA1dnc7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1dnc7XHJcbiAgaGVpZ2h0OiAyNXZ3O1xyXG4gIG1hcmdpbi10b3A6IDF2dztcclxuICAvKiBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDsgKi9cclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAwJTtcclxufVxyXG5cclxuLmJ1dHRvbjEsXHJcbi5idXR0b24yLFxyXG4uYnV0dG9uMyxcclxuLmJ1dHRvbjQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luOiAyJTtcclxuICB3aWR0aDogMTB2dztcclxuICBoZWlnaHQ6IDEwdnc7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XHJcbiAgYm9yZGVyOiBzb2xpZCB2YXIoLS1kYXJrYmx1ZSkgNHB4O1xyXG59XHJcblxyXG4uYnV0dG9uLXRleHQxIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICB0b3A6IDYwJTtcclxuICAvKiBib3JkZXI6IHNvbGlkIHJlZCAxcHg7ICovXHJcbiAgZm9udC1zaXplOiAxdnc7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYnV0dG9uLXRleHQyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICB0b3A6IDIwJTtcclxuICAvKiBib3JkZXI6IHNvbGlkIHJlZCAxcHg7ICovXHJcbiAgZm9udC1zaXplOiAxdnc7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYnV0dG9uOmhvdmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRibHVlKTtcclxuICBib3JkZXI6IHNvbGlkIHZhcigtLWRhcmtibHVlKSAzcHg7XHJcbn1cclxuXHJcbi5idXR0b246Zm9jdXMge1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRibHVlKTtcclxuICBib3JkZXI6IHNvbGlkIHZhcigtLWRhcmtibHVlKSAzcHg7XHJcbn1cclxuXHJcbi8qIFRhYmxldHMgKHBvcnRyYWl0IGFuZCBsYW5kc2NhcGUpIC0tLS0tLS0tLS0tICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDAwcHgpIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xyXG4gIC50aXRsZSB7XHJcbiAgICBoZWlnaHQ6IDd2dztcclxuICB9XHJcblxyXG4gIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogNXZ3O1xyXG4gIH1cclxuXHJcbiAgaDIge1xyXG4gICAgZm9udC1zaXplOiAzdnc7XHJcbiAgfVxyXG5cclxuICAuc2Nob29scyB7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuc2Nob29sIHtcclxuICAgIHdpZHRoOiA0MHZ3O1xyXG4gICAgaGVpZ2h0OiA0MHZ3O1xyXG4gICAgbWFyZ2luOiAwJTtcclxuICB9XHJcblxyXG4gIC5idXR0b24xLFxyXG4gIC5idXR0b24yLFxyXG4gIC5idXR0b24zLFxyXG4gIC5idXR0b240IHtcclxuICAgIG1hcmdpbjogMS41JTtcclxuICAgIHdpZHRoOiAxNXZ3O1xyXG4gICAgaGVpZ2h0OiAxNXZ3O1xyXG4gIH1cclxuXHJcbiAgLmJ1dHRvbi10ZXh0MSB7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGZvbnQtc2l6ZTogMS41dnc7XHJcbiAgfVxyXG5cclxuICAuYnV0dG9uLXRleHQyIHtcclxuICAgIHRvcDogMjAlO1xyXG4gICAgZm9udC1zaXplOiAxLjV2dztcclxuICB9XHJcbn1cclxuXHJcbi8qIFNtYXJ0cGhvbmVzIChwb3J0cmFpdCBhbmQgbGFuZHNjYXBlKSAtLS0tLS0tLS0tLSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XHJcbiAgLnRpdGxlIHtcclxuICAgIGhlaWdodDogMTB2dztcclxuICB9XHJcblxyXG4gIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogNnZ3O1xyXG4gIH1cclxuXHJcbiAgaDIge1xyXG4gICAgZm9udC1zaXplOiA1dnc7XHJcbiAgfVxyXG5cclxuICAuc2Nob29scyB7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuc2Nob29sIHtcclxuICAgIHdpZHRoOiA0NXZ3O1xyXG4gICAgaGVpZ2h0OiA0NXZ3O1xyXG4gICAgbWFyZ2luOiAwJTtcclxuICB9XHJcblxyXG4gIC5idXR0b24xLFxyXG4gIC5idXR0b24yLFxyXG4gIC5idXR0b24zLFxyXG4gIC5idXR0b240IHtcclxuICAgIHdpZHRoOiAyMHZ3O1xyXG4gICAgaGVpZ2h0OiAyMHZ3O1xyXG4gIH1cclxuXHJcbiAgLmJ1dHRvbi10ZXh0MSB7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGZvbnQtc2l6ZTogMi4zdnc7XHJcbiAgfVxyXG5cclxuICAuYnV0dG9uLXRleHQyIHtcclxuICAgIHRvcDogMjAlO1xyXG4gICAgZm9udC1zaXplOiAyLjN2dztcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let HomeComponent = class HomeComponent {
    constructor(router) {
        this.router = router;
        this.url = './assets/HetNestDriehoek1/doc1.docx';
    }
    ngOnInit() {
    }
    buttonClick(school, titel, id) {
        this.router.navigate(['/driehoek/' + school + '/' + id + '/' + titel]);
    }
};
HomeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], HomeComponent);



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\r\n  color: var(--blue);\r\n}\r\n\r\nh2:hover {\r\n  cursor: pointer;\r\n  color: var(--lightblue);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZix1QkFBdUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9wYWdlLW5vdC1mb3VuZC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDIge1xyXG4gIGNvbG9yOiB2YXIoLS1ibHVlKTtcclxufVxyXG5cclxuaDI6aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogdmFyKC0tbGlnaHRibHVlKTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageNotFoundComponent = class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-not-found',
        template: __webpack_require__(/*! raw-loader!./page-not-found.component.html */ "./node_modules/raw-loader/index.js!./src/app/page-not-found/page-not-found.component.html"),
        styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PageNotFoundComponent);



/***/ }),

/***/ "./src/app/post-it/post-it.component.css":
/*!***********************************************!*\
  !*** ./src/app/post-it/post-it.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\r\n  height: 100%;\r\n  overflow-y: hidden;\r\n}\r\n\r\n.mat-spinner-color::ng-deep circle {\r\n  stroke: var(--blue) !important;\r\n}\r\n\r\n.content {\r\n  height: 100%;\r\n  max-height: 100%;\r\n}\r\n\r\n.document {\r\n  height: 100%;\r\n}\r\n\r\n.test {\r\n  display: flex;\r\n  align-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.mat-dialog-content {\r\n  overflow-y: hidden !important;\r\n}\r\n\r\n.documents {\r\n  width: auto;\r\n  margin-right: 5%;\r\n  margin-left: 5%;\r\n  margin-bottom: 1vw;\r\n  border: solid var(--darkblue) 0.1vw;\r\n  background-color: var(--blue);\r\n  border-radius: 10px;\r\n}\r\n\r\n.documentButton {\r\n  margin-left: 1vw;\r\n  margin-right: 1vw;\r\n  padding: 0.5vw;\r\n  font-size: 2vw;\r\n  background-color: var(--lightblue);\r\n  display: inline-block;\r\n  color: white;\r\n  vertical-align: middle;\r\n}\r\n\r\n.documentButton:hover {\r\n  cursor: pointer;\r\n  opacity: 75%;\r\n}\r\n\r\n@media only screen and (min-width: 400px) and (max-width: 960px) {\r\n  h1 {\r\n    font-size: 4vw;\r\n  }\r\n\r\n  .documentButton {\r\n    font-size: 1.5vw;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 400px) {\r\n  h1 {\r\n    margin-top: 1vw;\r\n    font-size: 6vw;\r\n  }\r\n\r\n  .documentButton {\r\n    font-size: 0.8vh;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdC1pdC9wb3N0LWl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLG1DQUFtQztFQUNuQyw2QkFBNkI7RUFDN0IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsY0FBYztFQUNkLGtDQUFrQztFQUNsQyxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsZUFBZTtJQUNmLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3Bvc3QtaXQvcG9zdC1pdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4ge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbn1cclxuXHJcbi5tYXQtc3Bpbm5lci1jb2xvcjo6bmctZGVlcCBjaXJjbGUge1xyXG4gIHN0cm9rZTogdmFyKC0tYmx1ZSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uZG9jdW1lbnQge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnRlc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tYXQtZGlhbG9nLWNvbnRlbnQge1xyXG4gIG92ZXJmbG93LXk6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZG9jdW1lbnRzIHtcclxuICB3aWR0aDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG4gIG1hcmdpbi1sZWZ0OiA1JTtcclxuICBtYXJnaW4tYm90dG9tOiAxdnc7XHJcbiAgYm9yZGVyOiBzb2xpZCB2YXIoLS1kYXJrYmx1ZSkgMC4xdnc7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLmRvY3VtZW50QnV0dG9uIHtcclxuICBtYXJnaW4tbGVmdDogMXZ3O1xyXG4gIG1hcmdpbi1yaWdodDogMXZ3O1xyXG4gIHBhZGRpbmc6IDAuNXZ3O1xyXG4gIGZvbnQtc2l6ZTogMnZ3O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0Ymx1ZSk7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4uZG9jdW1lbnRCdXR0b246aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBvcGFjaXR5OiA3NSU7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDAwcHgpIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xyXG4gIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogNHZ3O1xyXG4gIH1cclxuXHJcbiAgLmRvY3VtZW50QnV0dG9uIHtcclxuICAgIGZvbnQtc2l6ZTogMS41dnc7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XHJcbiAgaDEge1xyXG4gICAgbWFyZ2luLXRvcDogMXZ3O1xyXG4gICAgZm9udC1zaXplOiA2dnc7XHJcbiAgfVxyXG5cclxuICAuZG9jdW1lbnRCdXR0b24ge1xyXG4gICAgZm9udC1zaXplOiAwLjh2aDtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/post-it/post-it.component.ts":
/*!**********************************************!*\
  !*** ./src/app/post-it/post-it.component.ts ***!
  \**********************************************/
/*! exports provided: PostItComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostItComponent", function() { return PostItComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _postIt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../postIt */ "./src/app/postIt.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");





let PostItComponent = class PostItComponent {
    constructor(dialogRef, postIt, sanitizer) {
        this.dialogRef = dialogRef;
        this.postIt = postIt;
        this.sanitizer = sanitizer;
        this.showSpinner = true;
    }
    ngOnInit() {
        console.log(this.postIt.urls);
        this.selectedUrl = this.postIt.urls[0];
    }
    getUrl() {
        return this.sanitizer.bypassSecurityTrustResourceUrl(this.selectedUrl);
    }
    test(test) {
        console.log(test);
    }
    selectUrl(url) {
        this.selectedUrl = url;
    }
    documentLoaded(isLoaded) {
        console.log(isLoaded);
        this.showSpinner = isLoaded;
        // if(document.getElementById('loader').style.display = 'none'){
        //   this.showSpinner = false;
        // }
        // if(document.getElementById('test').style.display)
    }
};
PostItComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: _postIt__WEBPACK_IMPORTED_MODULE_3__["PostIt"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] }
];
PostItComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-post-it',
        template: __webpack_require__(/*! raw-loader!./post-it.component.html */ "./node_modules/raw-loader/index.js!./src/app/post-it/post-it.component.html"),
        styles: [__webpack_require__(/*! ./post-it.component.css */ "./src/app/post-it/post-it.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
        _postIt__WEBPACK_IMPORTED_MODULE_3__["PostIt"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]])
], PostItComponent);



/***/ }),

/***/ "./src/app/postIt.ts":
/*!***************************!*\
  !*** ./src/app/postIt.ts ***!
  \***************************/
/*! exports provided: PostIt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostIt", function() { return PostIt; });
class PostIt {
    constructor(titel, kleur, urls) {
        this.titel = titel;
        this.kleur = kleur;
        this.urls = urls;
    }
    isGroen() {
        return this.kleur === 'groen';
    }
    hasMultipleUrls() {
        return this.urls.length > 1;
    }
    hasUrl() {
        return this.urls.length !== 0;
    }
}
PostIt.ctorParameters = () => [
    { type: String },
    { type: String },
    { type: Array }
];


/***/ }),

/***/ "./src/app/pyramid/pyramid.component.css":
/*!***********************************************!*\
  !*** ./src/app/pyramid/pyramid.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow: hidden;\r\n  /* border: solid red 2px; */\r\n}\r\n\r\n.nav {\r\n  background-color: var(--blue);\r\n  border-bottom: solid var(--darkblue) 2px;\r\n  height: 5vw;\r\n  width: 100%;\r\n  color: white;\r\n}\r\n\r\n.titel {\r\n  /* border:solid red 1px; */\r\n  width: 70%;\r\n  margin-right: 15%;\r\n  align-self: center;\r\n}\r\n\r\n.backButton {\r\n  /* border:solid red 1px; */\r\n  width: 15%;\r\n}\r\n\r\nh1 {\r\n  margin-top: 0.5vw;\r\n  font-size: 3vw;\r\n}\r\n\r\n.btn {\r\n  margin-top: 1vw;\r\n  font-size: 1vw;\r\n}\r\n\r\n.body {\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow-y: auto;\r\n}\r\n\r\n.content {\r\n  margin-top: 1vw;\r\n  /* border: solid red 1px; */\r\n  /* background-image: url('./assets/pyramide_blauw.png'); */\r\n  /* background-image: url('./assets/pyramide_blauw.png'); */\r\n  background-repeat: no-repeat;\r\n  background-position: top;\r\n  background-size: 60vw;\r\n  z-index: 1;\r\n  height: 60vw;\r\n  width: 70vw;\r\n  display: inline-block;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.top {\r\n  margin-top: 5vw;\r\n  display: inline-block;\r\n  margin-left: 40%;\r\n  margin-right: 40%;\r\n  width: 20%;\r\n  height: 10vw;\r\n  /* border: solid blue 1px; */\r\n  margin-bottom: 0.5vw;\r\n}\r\n\r\n.middle {\r\n  /* padding-top:2vw; */\r\n  display: inline-block;\r\n  height: 13vw;\r\n  margin-left: 32%;\r\n  margin-right: 32%;\r\n  width: 36%;\r\n  /* border: solid green 1px; */\r\n}\r\n\r\n.bottom {\r\n  margin-top: 0.5vw;\r\n  margin-left: 20%;\r\n  margin-right: 20%;\r\n  width: 60%;\r\n  height: 16vw;\r\n  /* border: solid orange 1px; */\r\n}\r\n\r\np {\r\n  word-wrap: break-word;\r\n  padding-top: 0.5vw;\r\n  font-size: 0.8vw;\r\n}\r\n\r\n.postit {\r\n  vertical-align: top;\r\n  display: inline-block;\r\n  margin: 0vw 0.5vw 0vw 0.5vw;\r\n  background-image: url('postIt-note.PNG');\r\n  background-size: cover;\r\n  color: var(--blue);\r\n}\r\n\r\n.postit-small {\r\n  width: 4vw;\r\n  height: 4vw;\r\n}\r\n\r\n.postit-small p {\r\n  font-size: 0.7vw;\r\n}\r\n\r\n.postit-normal {\r\n  width: 5vw;\r\n  height: 5vw;\r\n}\r\n\r\n.postit-url-exists{\r\n    text-decoration: underline;\r\n}\r\n\r\n.postit-url-exists:hover {\r\n   opacity: 75%;\r\n   cursor: pointer !important;\r\n}\r\n\r\n.postit-groen {\r\n  color: green;\r\n}\r\n\r\n.postit:hover {\r\n  cursor: default;\r\n}\r\n\r\n@media only screen and (min-width: 400px) and (max-width: 960px) {\r\n  h1 {\r\n    margin-top: 1vw;\r\n    font-size: 3vw;\r\n  }\r\n\r\n  .nav {\r\n    height: 7vw;\r\n  }\r\n\r\n  .buttonText {\r\n    display: none;\r\n  }\r\n\r\n  .btn {\r\n    margin: 0;\r\n    margin-top: 0.5vw;\r\n    padding: 0.5vw;\r\n    font-size: 1.5vw;\r\n  }\r\n\r\n  .btn::after {\r\n    content: \"← Terug\";\r\n  }\r\n\r\n  .content {\r\n    background-size: 90vw;\r\n    height: 70vw;\r\n    width: 90vw;\r\n  }\r\n\r\n  .top {\r\n    margin-top: 7vw;\r\n    margin-left: 37%;\r\n    margin-right: 37%;\r\n    width: 26%;\r\n    height: 15vw;\r\n  }\r\n\r\n  .middle {\r\n    height: 20vw;\r\n    margin-left: 31%;\r\n    margin-right: 31%;\r\n    width: 38%;\r\n  }\r\n\r\n  .bottom {\r\n    margin-left: 18%;\r\n    margin-right: 18%;\r\n    width: 64%;\r\n    height: 25vw;\r\n  }\r\n\r\n  p {\r\n    max-width: 8vw;\r\n    padding-top: 0.7vw;\r\n    font-size: 1.5vw;\r\n  }\r\n\r\n  .postit-small {\r\n    width: 5vw;\r\n    height: 5vw;\r\n  }\r\n\r\n  .postit-small p {\r\n    font-size: 0.9vw;\r\n  }\r\n\r\n  .postit-normal {\r\n    width: 8vw;\r\n    height: 8vw;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 400px) {\r\n  .nav {\r\n    height: 10vw;\r\n  }\r\n\r\n  .titel {\r\n    width: 70%;\r\n    margin-right: 15%;\r\n  }\r\n\r\n  .backButton {\r\n    width: 15%;\r\n  }\r\n\r\n  h1 {\r\n    margin-top: 2vw;\r\n    font-size: 3.5vw;\r\n  }\r\n\r\n  .buttonText {\r\n    display: none;\r\n  }\r\n\r\n  .btn {\r\n    margin: 0;\r\n    padding: 0.5vw;\r\n    margin-top: 0.5vw;\r\n    font-size: 2vw;\r\n  }\r\n\r\n  .btn::after {\r\n    content: \"← Terug\";\r\n  }\r\n\r\n  .content {\r\n    background-size: 100vw;\r\n    height: 80vw;\r\n    width: 100vw;\r\n  }\r\n\r\n  .top {\r\n    margin-top: 8vw;\r\n    margin-left: 39%;\r\n    margin-right: 39%;\r\n    width: 22%;\r\n    height: 17vw;\r\n  }\r\n\r\n  .middle {\r\n    margin-left: 30%;\r\n    margin-right: 30%;\r\n    width: 40%;\r\n    height: 22vw;\r\n  }\r\n\r\n  .bottom {\r\n    padding: 1vw;\r\n    margin-left: 15%;\r\n    margin-right: 15%;\r\n    width: 70%;\r\n    height: 24vw;\r\n  }\r\n\r\n  p {\r\n    max-width: 8.5vw;\r\n    padding-top: 0.7vw;\r\n    font-size: 1.5vw;\r\n  }\r\n\r\n  .postit-small {\r\n    width: 6vw;\r\n    height: 6vw;\r\n  }\r\n\r\n  .postit-small p {\r\n    font-size: 1vw;\r\n  }\r\n\r\n  .postit-normal {\r\n    width: 8vw;\r\n    height: 8vw;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHlyYW1pZC9weXJhbWlkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0Isd0NBQXdDO0VBQ3hDLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZiwyQkFBMkI7RUFDM0IsMERBQTBEO0VBQzFELDBEQUEwRDtFQUMxRCw0QkFBNEI7RUFDNUIsd0JBQXdCO0VBQ3hCLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsWUFBWTtFQUNaLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsWUFBWTtFQUNaLDRCQUE0QjtFQUM1QixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLFVBQVU7RUFDViw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsWUFBWTtFQUNaLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQiwyQkFBMkI7RUFDM0Isd0NBQXFEO0VBQ3JELHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7QUFDYjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtHQUNHLFlBQVk7R0FDWiwwQkFBMEI7QUFDN0I7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0lBQ2YsY0FBYztFQUNoQjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsY0FBYztJQUNkLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osV0FBVztFQUNiOztFQUVBO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsVUFBVTtJQUNWLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFVBQVU7SUFDVixXQUFXO0VBQ2I7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsVUFBVTtJQUNWLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxTQUFTO0lBQ1QsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixjQUFjO0VBQ2hCOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsWUFBWTtFQUNkOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsWUFBWTtFQUNkOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsVUFBVTtJQUNWLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsV0FBVztFQUNiO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9weXJhbWlkL3B5cmFtaWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAvKiBib3JkZXI6IHNvbGlkIHJlZCAycHg7ICovXHJcbn1cclxuXHJcbi5uYXYge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xyXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIHZhcigtLWRhcmtibHVlKSAycHg7XHJcbiAgaGVpZ2h0OiA1dnc7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4udGl0ZWwge1xyXG4gIC8qIGJvcmRlcjpzb2xpZCByZWQgMXB4OyAqL1xyXG4gIHdpZHRoOiA3MCU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNSU7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG59XHJcblxyXG4uYmFja0J1dHRvbiB7XHJcbiAgLyogYm9yZGVyOnNvbGlkIHJlZCAxcHg7ICovXHJcbiAgd2lkdGg6IDE1JTtcclxufVxyXG5cclxuaDEge1xyXG4gIG1hcmdpbi10b3A6IDAuNXZ3O1xyXG4gIGZvbnQtc2l6ZTogM3Z3O1xyXG59XHJcblxyXG4uYnRuIHtcclxuICBtYXJnaW4tdG9wOiAxdnc7XHJcbiAgZm9udC1zaXplOiAxdnc7XHJcbn1cclxuXHJcbi5ib2R5IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIG1hcmdpbi10b3A6IDF2dztcclxuICAvKiBib3JkZXI6IHNvbGlkIHJlZCAxcHg7ICovXHJcbiAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2Fzc2V0cy9weXJhbWlkZV9ibGF1dy5wbmcnKTsgKi9cclxuICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vYXNzZXRzL3B5cmFtaWRlX2JsYXV3LnBuZycpOyAqL1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogNjB2dztcclxuICB6LWluZGV4OiAxO1xyXG4gIGhlaWdodDogNjB2dztcclxuICB3aWR0aDogNzB2dztcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnRvcCB7XHJcbiAgbWFyZ2luLXRvcDogNXZ3O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW4tbGVmdDogNDAlO1xyXG4gIG1hcmdpbi1yaWdodDogNDAlO1xyXG4gIHdpZHRoOiAyMCU7XHJcbiAgaGVpZ2h0OiAxMHZ3O1xyXG4gIC8qIGJvcmRlcjogc29saWQgYmx1ZSAxcHg7ICovXHJcbiAgbWFyZ2luLWJvdHRvbTogMC41dnc7XHJcbn1cclxuXHJcbi5taWRkbGUge1xyXG4gIC8qIHBhZGRpbmctdG9wOjJ2dzsgKi9cclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgaGVpZ2h0OiAxM3Z3O1xyXG4gIG1hcmdpbi1sZWZ0OiAzMiU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAzMiU7XHJcbiAgd2lkdGg6IDM2JTtcclxuICAvKiBib3JkZXI6IHNvbGlkIGdyZWVuIDFweDsgKi9cclxufVxyXG5cclxuLmJvdHRvbSB7XHJcbiAgbWFyZ2luLXRvcDogMC41dnc7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwJTtcclxuICBtYXJnaW4tcmlnaHQ6IDIwJTtcclxuICB3aWR0aDogNjAlO1xyXG4gIGhlaWdodDogMTZ2dztcclxuICAvKiBib3JkZXI6IHNvbGlkIG9yYW5nZSAxcHg7ICovXHJcbn1cclxuXHJcbnAge1xyXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICBwYWRkaW5nLXRvcDogMC41dnc7XHJcbiAgZm9udC1zaXplOiAwLjh2dztcclxufVxyXG5cclxuLnBvc3RpdCB7XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luOiAwdncgMC41dncgMHZ3IDAuNXZ3O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9wb3N0SXQtbm90ZS5QTkdcIik7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBjb2xvcjogdmFyKC0tYmx1ZSk7XHJcbn1cclxuXHJcbi5wb3N0aXQtc21hbGwge1xyXG4gIHdpZHRoOiA0dnc7XHJcbiAgaGVpZ2h0OiA0dnc7XHJcbn1cclxuXHJcbi5wb3N0aXQtc21hbGwgcCB7XHJcbiAgZm9udC1zaXplOiAwLjd2dztcclxufVxyXG5cclxuLnBvc3RpdC1ub3JtYWwge1xyXG4gIHdpZHRoOiA1dnc7XHJcbiAgaGVpZ2h0OiA1dnc7XHJcbn1cclxuXHJcbi5wb3N0aXQtdXJsLWV4aXN0c3tcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4ucG9zdGl0LXVybC1leGlzdHM6aG92ZXIge1xyXG4gICBvcGFjaXR5OiA3NSU7XHJcbiAgIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucG9zdGl0LWdyb2VuIHtcclxuICBjb2xvcjogZ3JlZW47XHJcbn1cclxuXHJcbi5wb3N0aXQ6aG92ZXIge1xyXG4gIGN1cnNvcjogZGVmYXVsdDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MDBweCkgYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XHJcbiAgaDEge1xyXG4gICAgbWFyZ2luLXRvcDogMXZ3O1xyXG4gICAgZm9udC1zaXplOiAzdnc7XHJcbiAgfVxyXG5cclxuICAubmF2IHtcclxuICAgIGhlaWdodDogN3Z3O1xyXG4gIH1cclxuXHJcbiAgLmJ1dHRvblRleHQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5idG4ge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgbWFyZ2luLXRvcDogMC41dnc7XHJcbiAgICBwYWRkaW5nOiAwLjV2dztcclxuICAgIGZvbnQtc2l6ZTogMS41dnc7XHJcbiAgfVxyXG5cclxuICAuYnRuOjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIuKGkCBUZXJ1Z1wiO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiA5MHZ3O1xyXG4gICAgaGVpZ2h0OiA3MHZ3O1xyXG4gICAgd2lkdGg6IDkwdnc7XHJcbiAgfVxyXG5cclxuICAudG9wIHtcclxuICAgIG1hcmdpbi10b3A6IDd2dztcclxuICAgIG1hcmdpbi1sZWZ0OiAzNyU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDM3JTtcclxuICAgIHdpZHRoOiAyNiU7XHJcbiAgICBoZWlnaHQ6IDE1dnc7XHJcbiAgfVxyXG5cclxuICAubWlkZGxlIHtcclxuICAgIGhlaWdodDogMjB2dztcclxuICAgIG1hcmdpbi1sZWZ0OiAzMSU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMxJTtcclxuICAgIHdpZHRoOiAzOCU7XHJcbiAgfVxyXG5cclxuICAuYm90dG9tIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxOCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE4JTtcclxuICAgIHdpZHRoOiA2NCU7XHJcbiAgICBoZWlnaHQ6IDI1dnc7XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIG1heC13aWR0aDogOHZ3O1xyXG4gICAgcGFkZGluZy10b3A6IDAuN3Z3O1xyXG4gICAgZm9udC1zaXplOiAxLjV2dztcclxuICB9XHJcblxyXG4gIC5wb3N0aXQtc21hbGwge1xyXG4gICAgd2lkdGg6IDV2dztcclxuICAgIGhlaWdodDogNXZ3O1xyXG4gIH1cclxuXHJcbiAgLnBvc3RpdC1zbWFsbCBwIHtcclxuICAgIGZvbnQtc2l6ZTogMC45dnc7XHJcbiAgfVxyXG5cclxuICAucG9zdGl0LW5vcm1hbCB7XHJcbiAgICB3aWR0aDogOHZ3O1xyXG4gICAgaGVpZ2h0OiA4dnc7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XHJcbiAgLm5hdiB7XHJcbiAgICBoZWlnaHQ6IDEwdnc7XHJcbiAgfVxyXG5cclxuICAudGl0ZWwge1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIG1hcmdpbi1yaWdodDogMTUlO1xyXG4gIH1cclxuXHJcbiAgLmJhY2tCdXR0b24ge1xyXG4gICAgd2lkdGg6IDE1JTtcclxuICB9XHJcblxyXG4gIGgxIHtcclxuICAgIG1hcmdpbi10b3A6IDJ2dztcclxuICAgIGZvbnQtc2l6ZTogMy41dnc7XHJcbiAgfVxyXG5cclxuICAuYnV0dG9uVGV4dCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLmJ0biB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwLjV2dztcclxuICAgIG1hcmdpbi10b3A6IDAuNXZ3O1xyXG4gICAgZm9udC1zaXplOiAydnc7XHJcbiAgfVxyXG5cclxuICAuYnRuOjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIuKGkCBUZXJ1Z1wiO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDB2dztcclxuICAgIGhlaWdodDogODB2dztcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICB9XHJcblxyXG4gIC50b3Age1xyXG4gICAgbWFyZ2luLXRvcDogOHZ3O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDM5JTtcclxuICAgIG1hcmdpbi1yaWdodDogMzklO1xyXG4gICAgd2lkdGg6IDIyJTtcclxuICAgIGhlaWdodDogMTd2dztcclxuICB9XHJcblxyXG4gIC5taWRkbGUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwJTtcclxuICAgIG1hcmdpbi1yaWdodDogMzAlO1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIGhlaWdodDogMjJ2dztcclxuICB9XHJcblxyXG4gIC5ib3R0b20ge1xyXG4gICAgcGFkZGluZzogMXZ3O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1JTtcclxuICAgIG1hcmdpbi1yaWdodDogMTUlO1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIGhlaWdodDogMjR2dztcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgbWF4LXdpZHRoOiA4LjV2dztcclxuICAgIHBhZGRpbmctdG9wOiAwLjd2dztcclxuICAgIGZvbnQtc2l6ZTogMS41dnc7XHJcbiAgfVxyXG5cclxuICAucG9zdGl0LXNtYWxsIHtcclxuICAgIHdpZHRoOiA2dnc7XHJcbiAgICBoZWlnaHQ6IDZ2dztcclxuICB9XHJcblxyXG4gIC5wb3N0aXQtc21hbGwgcCB7XHJcbiAgICBmb250LXNpemU6IDF2dztcclxuICB9XHJcblxyXG4gIC5wb3N0aXQtbm9ybWFsIHtcclxuICAgIHdpZHRoOiA4dnc7XHJcbiAgICBoZWlnaHQ6IDh2dztcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pyramid/pyramid.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pyramid/pyramid.component.ts ***!
  \**********************************************/
/*! exports provided: PyramidComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PyramidComponent", function() { return PyramidComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _post_it_post_it_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../post-it/post-it.component */ "./src/app/post-it/post-it.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");






let PyramidComponent = class PyramidComponent {
    constructor(dialog, route, dataService) {
        this.dialog = dialog;
        this.route = route;
        this.dataService = dataService;
        this.noData = false;
        this.school = this.route.snapshot.paramMap.get('school');
        this.id = this.route.snapshot.paramMap.get('id');
        this.titel = this.route.snapshot.paramMap.get('titel');
        this.smallPostIts = false;
        this.backgroundImage = 'url(\'./assets/pyramide_blauw.png\')';
        // switch (this.id) {
        //   case '1': this.backgroundImage = 'url(\'./assets/pyramide_blauw.png\')'; break;
        //   case '2': this.backgroundImage = 'url(\'./assets/pyramide_groen.png\')'; break;
        //   case '3': this.backgroundImage = 'url(\'./assets/pyramide_geel.png\')'; break;
        //   case '4': this.backgroundImage = 'url(\'./assets/pyramide_rood.png\')'; break;
        //   default: this.backgroundImage = 'url(\'./assets/pyramide_blauw.png\')';
        // }
    }
    ngOnInit() {
        this.data = this.dataService.getDataDriehoek(this.school, this.id);
        if (this.data == null) {
            this.noData = true;
        }
        else {
            if (this.data.postItsBottom.length > 18) {
                this.smallPostIts = true;
            }
            if (this.data.postItsMiddle.length > 8) {
                this.smallPostIts = true;
            }
            if (this.data.postItsTop.length > 4) {
                this.smallPostIts = true;
            }
        }
    }
    showPostIt(postIt) {
        if (postIt.hasUrl()) {
            const dialogRef = this.dialog.open(_post_it_post_it_component__WEBPACK_IMPORTED_MODULE_3__["PostItComponent"], {
                width: '75vw',
                position: {
                    top: '5vh'
                },
                height: '90vh',
                data: postIt
            });
            dialogRef.afterClosed().subscribe((res) => {
            });
        }
    }
};
PyramidComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] }
];
PyramidComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pyramid',
        template: __webpack_require__(/*! raw-loader!./pyramid.component.html */ "./node_modules/raw-loader/index.js!./src/app/pyramid/pyramid.component.html"),
        styles: [__webpack_require__(/*! ./pyramid.component.css */ "./src/app/pyramid/pyramid.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]])
], PyramidComponent);



/***/ }),

/***/ "./src/app/pyramidData.ts":
/*!********************************!*\
  !*** ./src/app/pyramidData.ts ***!
  \********************************/
/*! exports provided: PyramidData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PyramidData", function() { return PyramidData; });
class PyramidData {
    constructor(postItsBottom = [], postItsMiddle = [], postItsTop = []) {
        this.postItsBottom = postItsBottom;
        this.postItsMiddle = postItsMiddle;
        this.postItsTop = postItsTop;
    }
}
PyramidData.ctorParameters = () => [
    { type: Array },
    { type: Array },
    { type: Array }
];


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Piet Laureyns\Desktop\Website Mama\leerlingenbegeleiding\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map