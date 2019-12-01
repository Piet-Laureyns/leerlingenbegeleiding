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

module.exports = "<div class=\"main\">\n  <div class=\"center title\">\n    <h1><strong>Leerlingenbegeleiding IBC</strong></h1>\n  </div>\n  <div class=\"schools\">\n    <div class=\"school\">\n      <h2><strong>Het Nest</strong></h2>\n      <div class=\"button1 button\" (click)=\"buttonClick('Het Nest', 'Psycho-sociaal Funtioneren', 1)\"><span\n          class=\"button-text1\">Psycho-sociaal Funtioneren</span></div>\n      <div class=\"button2 button\" (click)=\"buttonClick('Het Nest', 'Leren en Studeren', 2)\"><span\n          class=\"button-text1\">Leren en <br /> Studeren</span></div>\n      <div class=\"button3 button\" (click)=\"buttonClick('Het Nest', 'Schoolloopbaan', 3)\"><span\n          class=\"button-text2\">Schoolloopbaan</span></div>\n      <div class=\"button4 button\" (click)=\"buttonClick('Het Nest', 'Preventieve Gezondheidszorg', 4)\"><span\n          class=\"button-text2\">Preventieve Gezondheidszorg</span></div>\n    </div>\n    <div class=\"school\">\n      <h2><strong>Het Anker</strong></h2>\n      <div class=\"button1 button\" (click)=\"buttonClick('Het Anker', 'Psycho-sociaal Funtioneren', 1)\"><span\n          class=\"button-text1\">Psycho-sociaal Funtioneren</span></div>\n      <div class=\"button2 button\" (click)=\"buttonClick('Het Anker', 'Leren en Studeren', 2)\"><span\n          class=\"button-text1\">Leren en <br /> Studeren</span></div>\n      <div class=\"button3 button\" (click)=\"buttonClick('Het Anker', 'Schoolloopbaan', 3)\"><span\n          class=\"button-text2\">Schoolloopbaan</span></div>\n      <div class=\"button4 button\" (click)=\"buttonClick('Het Anker', 'Preventieve Gezondheidszorg', 4)\"><span\n          class=\"button-text2\">Preventieve Gezondheidszorg</span>\n      </div>\n    </div>\n    <div class=\"school\">\n      <h2><strong>De Cirkel</strong></h2>\n      <div class=\"button1 button\" (click)=\"buttonClick('De Cirkel', 'Psycho-sociaal Funtioneren', 1)\"><span\n          class=\"button-text1\">Psycho-sociaal Funtioneren</span></div>\n      <div class=\"button2 button\" (click)=\"buttonClick('De Cirkel', 'Leren en Studeren', 2)\"><span\n          class=\"button-text1\">Leren en <br /> Studeren</span></div>\n      <div class=\"button3 button\" (click)=\"buttonClick('De Cirkel', 'Schoolloopbaan', 3)\"><span\n          class=\"button-text2\">Schoolloopbaan</span></div>\n      <div class=\"button4 button\" (click)=\"buttonClick('De Cirkel', 'Preventieve Gezondheidszorg', 4)\"><span\n          class=\"button-text2\">Preventieve Gezondheidszorg</span>\n      </div>\n    </div>\n    <div class=\"school\">\n      <h2><strong>Het Kwadrant</strong></h2>\n      <div class=\"button1 button\" (click)=\"buttonClick('Het Kwadrant', 'Psycho-sociaal Funtioneren', 1)\"><span\n          class=\"button-text1\">Psycho-sociaal Funtioneren</span></div>\n      <div class=\"button2 button\" (click)=\"buttonClick('Het Kwadrant', 'Leren en Studeren', 2)\"><span\n          class=\"button-text1\">Leren en <br /> Studeren</span></div>\n      <div class=\"button3 button\" (click)=\"buttonClick('Het Kwadrant', 'Schoolloopbaan', 3)\"><span\n          class=\"button-text2\">Schoolloopbaan</span></div>\n      <div class=\"button4 button\" (click)=\"buttonClick('Het Kwadrant', 'Preventieve Gezondheidszorg', 4)\"><span\n          class=\"button-text2\">Preventieve Gezondheidszorg</span>\n      </div>\n    </div>\n  </div>\n</div>\n"

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

module.exports = "<div class=\"center main\">\n  <div class='header'>\n    <div class=\"backButton\">\n      <button class=\"btn btn-primary\" (click)=\"dialogRef.close();\">← Terug</button>\n    </div>\n    <div class=\"title\">\n      <h1>{{titel}}</h1>\n    </div>\n  </div>\n  <div class=\"content\" *ngIf=\"!postIt.hasMultipleUrls()\">\n    <div class=\"document\">\n      <iframe id=\"loader\" #iframe [src]=\"getUrl(postIt.urls[0])\" width='90%' height='100%' frameborder='0'>\n      </iframe>\n    </div>\n  </div>\n  <div class=\"content\" *ngIf=\"postIt.hasMultipleUrls()\">\n    <div class=\"row\" class=\"documents\">\n      <div class=\"documentButton\" *ngFor=\"let url of postIt.urls; let i = index\" (click)=\"selectUrl(url)\" [ngClass]=\"{'selected': url===selectedUrl}\">\n        Document {{i+1}}\n      </div>\n    </div>\n    <div class=\"document\">\n      <iframe id=\"loader\" [src]=\"getUrl()\" width='90%' height='100%' frameborder='0'></iframe>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pyramid/pyramid.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pyramid/pyramid.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main center\">\n  <div class=\"nav\">\n    <div class=\"backButton\">\n      <button class='btn btn-primary' routerLink=\"\"><span class=\"buttonText\"> ← Terug naar Home</span></button>\n    </div>\n    <div class=\"center titel\">\n      <h1>{{school}} - {{titel}}</h1>\n    </div>\n  </div>\n  <div class='body' *ngIf=\"!noData\">\n    <div [style.background-image]=\"backgroundImage\" id=\"content\" class=\"content\" *ngIf=\"data\">\n\n      <div class=\"top\">\n        <div class=\"uitbreiding\">\n          <h3>Uitbreiding van Zorg</h3>\n        </div>\n        <div *ngFor=\"let postIt of data.postItsTop\" class=\"postit\"\n          [ngClass]=\"{'postit-groen': postIt.isGroen(), 'postit-small': smallPostIts, 'postit-normal': !smallPostIts,'postit-extra-small': extraSmallPostIts, 'postit-url-exists': postIt.hasUrl()}\"\n          (click)=\"showPostIt(postIt)\">\n          <p>{{postIt.titel}}</p>\n        </div>\n      </div>\n\n      <div class=\"middle\">\n        <div class=\"verhoogde\">\n          <h3>Verhoogde Zorg</h3>\n        </div>\n        <div *ngFor=\"let postIt of data.postItsMiddle\" class=\"postit\"\n          [ngClass]=\"{'postit-groen': postIt.isGroen(), 'postit-small': smallPostIts, 'postit-normal': !smallPostIts,'postit-extra-small': extraSmallPostIts, 'postit-url-exists': postIt.hasUrl()}\"\n          (click)=\"showPostIt(postIt)\">\n          <p>{{postIt.titel}}</p>\n        </div>\n      </div>\n\n      <div class=\"bottom\">\n        <div class=\"basis\">\n          <h3>Brede Basiszorg</h3>\n        </div>\n        <div *ngFor=\"let postIt of data.postItsBottom\" class=\"postit\"\n          [ngClass]=\"{'postit-groen': postIt.isGroen(), 'postit-small': smallPostIts, 'postit-normal': !smallPostIts,'postit-extra-small': extraSmallPostIts, 'postit-url-exists': postIt.hasUrl()}\"\n          (click)=\"showPostIt(postIt)\">\n          <p>{{postIt.titel}}</p>\n        </div>\n      </div>\n\n    </div>\n  </div>\n  <div *ngIf=\"noData\" style=\"margin-top:5%;\">\n    <h2>Deze pyramide moet nog aangemaakt worden.</h2>\n  </div>\n</div>\n"

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
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Huiselijke Sfeer', 'groen', ['https://drive.google.com/file/d/1F5Mpj0ufpNEkVNpNfMym_EqIIOzp4U6n/preview',
                'https://drive.google.com/file/d/1Q7SxKbNlIH9cXw0O25GN7LY5kYL67vzY/preview',
                'https://drive.google.com/file/d/1eUBPuRaUVemXQ4wwXrv6vlbQ_hJOtfvv/preview']),
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
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Ondersteun- ingsplan', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Vertrouwens persoon', 'blauw', [])
        ]);
        // Leren en Studeren
        const data2 = new _pyramidData__WEBPACK_IMPORTED_MODULE_3__["PyramidData"]([
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('IHP', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('RSV', 'groen', ['https://drive.google.com/file/d/1SIe9OyogvR0rrOhaBziid7MBLxcbbv22/preview',
                'https://drive.google.com/file/d/1Pq0jt82EHrl0vEom4EWT4ipnR6GfQxU_/preview']),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Kookles', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Bosklas', 'groen', ['https://drive.google.com/file/d/1AVHrF-KqKbiqZ37P7e-8XPy5ViCtk4ZY/preview']),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Knutsel les', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Huishoude- lijke vaardigheden', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Schoolse vaardigheden', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Atelier werking', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Werkdozen', 'groen', ['https://drive.google.com/file/d/1U-XncElkJUjDQ4iC7te561HAyDKL_GG3/preview']),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Dagschema', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Sociaal vaardig', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Maatschappe- lijk gedrag', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Klasplan nieuw 29/11/19', 'groen', ['https://drive.google.com/file/d/1Z8hJvXG5mOujhXTVCS-PqnbizfGnQ3Te/preview']),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Extra-muros', 'blauw', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Klas beloningen', 'blauw', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Talenten', 'blauw', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Klas overschrijdend', 'blauw', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Arbeids interesse test', 'blauw', [])
        ], [
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('SMT', 'groen', ['https://drive.google.com/file/d/1n8kQYy6BQTlOgZnQWdU641Sp4kQ117w0/preview',
                'https://drive.google.com/file/d/1LNordZnyZ4SKeYwtjkxTjrmtNkm9QokP/preview',
                'https://drive.google.com/file/d/18XzoUCAv2enq_Cup5GoOgRLoTqLvJkK6/preview']),
            // new PostIt('Leren in klas blijven', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('SMOG', 'groen', [])
        ], [ // Top
        ]);
        // Schoolloopbaan
        const data3 = new _pyramidData__WEBPACK_IMPORTED_MODULE_3__["PyramidData"]([
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Draaiboek 19+', 'groen', ['https://drive.google.com/file/d/1fGOnSZYKgQpieKgtK_qB_r5cUqfPN6s0/preview']),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Ouder- contacten', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Niveau groepen', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Inschrijvings- procedure', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Kooklessen', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Talenten portfolio', 'blauw', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Rots en Waten', 'blauw', [])
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
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Onderhoud kledij', 'groen', ['https://drive.google.com/file/d/1q5NHPUGSDd_NwzUWts5owOOWafYInrII/preview']),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Gezonde voeding', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Fruitsnack', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Enkel water', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Drinkfles', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Wandelingen', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Rust momenten', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Zwem lessen', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Toilet bezoek', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Luizen controle', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Zonne- bescherming', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('RSV', 'groen', ['https://drive.google.com/file/d/1vwjBaUo00nZTRiloGfDmtFg4i7RxoRnT/preview',
                'https://drive.google.com/file/d/1-GvzZUKLAbrexXVb_afBdgOKZnkaYnZ7/preview',
                'https://drive.google.com/file/d/1IITQKzTbInWdbWBLLMT4Z7ck8j2CqU3X/preview',
                'https://drive.google.com/file/d/13tx1yvr_fZna5HKMHEAKS5Ih1f1PH_vu/preview']),
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
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('G-sport clubs', 'blauw', [])
            // new PostIt('Pilgebruik', 'blauw', []),
        ], [
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('G-sport clubs uitnodigen', 'blauw', [])
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
        // Psychosociaal
        const data1 = new _pyramidData__WEBPACK_IMPORTED_MODULE_3__["PyramidData"]([
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Aanpak op maat', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Workshops', 'groen', ['https://drive.google.com/file/d/1vus7xHpFgC43brUabQrYrp_aX_abuuVE/preview']),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Koffie-onthaal', 'groen', ['https://drive.google.com/file/d/16Vjfm7GajoRaMawigQ0TyokEvynpeQvj/preview']),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('LSCI-training', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Leerlingenraad', 'groen', ['https://drive.google.com/file/d/1sdVAveFXc6kpEt33K6d1Cr863LxlZ9hw/preview']),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Schoolhond Louis', 'groen', ['https://drive.google.com/file/d/1TFkyz7rH2mLTIuRFz6_hVddi_7x06JT2/preview',
                'https://drive.google.com/file/d/1dG3enKo0Fg4vzyuGjnC-esehf-Pii6pF/preview',
                'https://drive.google.com/file/d/1LYtcXBe71hzYo0km1GDMP7Z4TMEvuJ1Q/preview']),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Middagsport en spel', 'groen', ['https://drive.google.com/file/d/1CQFc0qfnmJM8vOx4h9IBNFJr1wzjb36f/preview']),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Tuin met kippen', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Pro-actieve cirkel', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Uitstappen/ 3-daagse', 'groen', ['https://drive.google.com/file/d/1LebZpHMZrZOH_D6eH9zsaJEMqnEyH364/preview',
                'https://drive.google.com/file/d/1DUlrvvf38bi0z2MajzKeqbAfia4ldhNc/preview']),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Belonings- systeem', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Ouder- betrokkenheid', 'blauw', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Muziek-zangles', 'blauw', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Yoga', 'blauw', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Zithoek met kussens', 'blauw', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Complimenten- spel', 'blauw', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Middag- wandeling', 'blauw', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Talenten', 'blauw', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Klas/school projecten', 'blauw', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Vertrouwens- persoon', 'blauw', [])
        ], [
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Aangepast lessenrooster', 'groen', ['https://drive.google.com/file/d/1QIYIMPidWgCXlzeUeKk1glZBfOKmQPAH/preview',
                'https://drive.google.com/file/d/18FfF9yOWj95hHEJPpn0wLBmUV22CVuiV/preview']),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Individueel douche- moment', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Vluchtroute', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Stille pauze', 'groen', ['https://drive.google.com/file/d/1B2jVJd9EXQOAZXgnQ-Zn8ppsU4g4aOh2/preview']),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Gebruik koptelefoons', 'groen', ['https://drive.google.com/file/d/1lfTGnIjedT7G62WDutNSLjck8WnbRVX-/preview']),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Auti-hokjes', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Wat na school?', 'blauw', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('HERGO', 'blauw', [])
        ], [ // Top
        ]);
        // Leren en Studeren
        const data2 = new _pyramidData__WEBPACK_IMPORTED_MODULE_3__["PyramidData"]([
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Individuele aanpak', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Workshops', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Traject begeleiding', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Gezondheids- beleid', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Autiwerking', 'groen', ['https://drive.google.com/file/d/1uDsK_oVjLHo-86gIx0o0jyexLZhzirWW/preview',
                'https://drive.google.com/file/d/1LgQHE2vC4HnGHV-lnBitGt5lmvYAeztm/preview',
                'https://drive.google.com/file/d/1YR-zeUUz0K3fZoX0pnRPi9UzZUPJZwQy/preview']),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Pro-actieve cirkel', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('BS + BPT-uren', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Co-teacher', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Uitwerk', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Actieve middagpauze', 'groen', ['https://drive.google.com/file/d/1tq5KtHCqvl6ELKxIHp1cfgGHdYChS5ez/preview']),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Vak- overschrijdend werken', 'blauw', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Verantwoord- elijkheidszin aanwakkeren', 'blauw', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Projectgericht werken', 'blauw', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Functioneel leren', 'blauw', [])
        ], [ // Middle
        ], [ // Top
        ]);
        // Schoolloopbaan
        const data3 = new _pyramidData__WEBPACK_IMPORTED_MODULE_3__["PyramidData"]([
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Stages', 'groen', ['https://drive.google.com/file/d/1WTn-odOEzuzz1qmdPLs8zOYk8fZikItu/preview']),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Stage- begeleiding', 'groen', ['https://drive.google.com/file/d/10yfexSBewFmZT1lYWQPT7yMm-FTZmdkb/preview']),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Informatie overdracht', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Smartschool', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Themawerking op talenten', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Gepaste tewerkstelling', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Voorbereiden op maatwerk- bedrijf', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Autiwerking', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Talent- fluisteraars', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Gedifferentieerd aanbod workshops', 'blauw', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Werk- gerelateerde lessen', 'blauw', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Kennismaking met arbeidsmarkt', 'blauw', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Werken in IKEA', 'blauw', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Ruimer stagenetwerk', 'blauw', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Gevarieerder bandwerk', 'blauw', []),
        ], [
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Schoolverlaters opvolgen', 'groen', ['https://drive.google.com/file/d/19KkSORgPKDu_QNUzmXYkszlVDX28Eion/preview']),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Oud- leerlingen', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Duaal leren', 'blauw', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Begeleiden naar vakantiejob', 'blauw', [])
        ], [
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Time-out', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('TOAH', 'groen', [])
        ]);
        // Preventieve Gezondheidszorg
        const data4 = new _pyramidData__WEBPACK_IMPORTED_MODULE_3__["PyramidData"]([
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Tanden poetsen', 'groen', ['https://drive.google.com/file/d/10oJGDHEpPekQdOpIZq9iv_9orSNYBvXJ/preview']),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Opvolgen mond- hygiëne', 'groen', ['https://drive.google.com/file/d/1IJrPjx_2UIEeCIyCuhrHPD3zxLsVSZQi/preview']),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Soepatelier', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Uitdelen gezonde snack', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Kooklessen', 'groen', ['https://drive.google.com/file/d/1U8JzPkyN_K4hIqNTEbcuFK8djn97T96Q/preview']),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Gezonde voeding', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Gezonde houding', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Klassikale douche momenten', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Water op school', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Workshops', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Begeleide middagsport', 'groen', ['https://drive.google.com/file/d/1WD8DFjX6WZ4baZGHUpJ1f4dQNLrFvHPv/preview']),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Buitenschoolse sport- activiteiten', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Drinkfles', 'groen', ['https://drive.google.com/file/d/1L504ezbfWssWBFJkD7_y842cKRfxX3fU/preview',
                'https://drive.google.com/file/d/1T2cl2fSOZXtluj_jP_c_R7FwmoOLPsif/preview',
                'https://drive.google.com/file/d/1CavA8PapTSTqt5QgaV6njUGliugjggl6/preview']),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Outdoor-education', 'blauw', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Gezonde traktaties', 'blauw', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Uitstap = enkel water', 'blauw', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Gebruik brooddozen', 'blauw', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Suikervrije gerechten', 'blauw', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Investeren in schoeisel', 'blauw', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Vegetarisch gerecht aanbieden', 'blauw', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Uitstappen te voet', 'blauw', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Bewegings- momenten tussendoor', 'blauw', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('RSV-lessen', 'blauw', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Project stappentellen', 'blauw', []),
        ], [
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Individuele douche momenten', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Extra beweeg momenten', 'groen', [])
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
        // Psycho-sociaal Functioneren
        const data1 = new _pyramidData__WEBPACK_IMPORTED_MODULE_3__["PyramidData"]([
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Klas onthaal- moment', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('School- leefregels', 'groen', ['https://drive.google.com/file/d/14Ddyl5XzEBu-1qvYx0-vNov9ox9OnQPO/preview',
                'https://drive.google.com/file/d/1I46k9IXmAuPyLkxJINRXIbrmuOOIE4SC/preview']),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Klas afpraken', 'groen', ['https://drive.google.com/file/d/11WCB5j0oYRenLimpPhWeCweealC6KlT1/preview',
                'https://drive.google.com/file/d/1pdnHgOUxMVGDvPtTbzumyKE9FUw7Fi8A/preview']),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Dagelijks handelen in de klas', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Klas Conflicthantering', 'groen', ['https://drive.google.com/file/d/1lOW2pnavSAgXdAqO41hzHZZc6qZPAKek/preview']),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Klasgesprekken', 'groen', ['https://drive.google.com/file/d/1cui4p_gyc9rOXT_BA3NLiBjWZd8JYAn-/preview']),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Herstel- gesprekken', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Positieve basishouding lk', 'groen', ['https://drive.google.com/file/d/1zAMOIBx0vkbnMiQCsc_XaZSzOoYnI9Op/preview']),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Vertrouwens- band', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Klas management', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Psycho-sociaal IHP', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Agenda vermelding', 'groen', ['https://drive.google.com/file/d/1nWGflOaxeP6EdYYX7ELw61SfJplvkbfy/preview']),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Belonings- activiteiten', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Multidisciplinaire opvolging', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Werking zorgteam', 'groen', ['https://drive.google.com/file/d/1xQyF0sq0FPEtsj7V9a6XWLw-ZnQubb0f/preview']),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Leerlijn sociale vaardigheden', 'blauw', ['https://drive.google.com/file/d/1NU7PtdDRUKAh68IJXI8fBh8hLh5CGlQr/preview']),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Middag- activiteiten', 'blauw', ['https://drive.google.com/file/d/1_vwZzbd9Q-XDWwAL8Ztn89PZxZ2FvQf6/preview'])
        ], [
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Procedure fase 1', 'groen', ['https://drive.google.com/file/d/14Qf51Cxzf0yUY81SjmmAYOiDJFYGUDvh/preview']),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Permanentie- team', 'groen', ['https://drive.google.com/file/d/1izkgH0uvJuyMhGqOPoZVf97oaPzVkpwF/preview']),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('LSCI team', 'groen', ['https://drive.google.com/file/d/1mC4x8zLUEKh2ZCzZM3ZL3ULjsORo4V1L/preview']),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Procedure afwezigheden', 'groen', ['https://drive.google.com/file/d/1ClTTEnpfwIqDYuf6uRN4sG7mhMEBCLyh/preview']),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Time-out', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('De halte', 'groen', [])
        ], [
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Tucht- procedure fase 2', 'groen', ['https://drive.google.com/file/d/1m8qL1zt_Ku9sKQeQBRdVLtebj0rS7Uxt/preview']),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Crisisruimte', 'blauw', []),
        ]);
        // Leren en Studeren
        const data2 = new _pyramidData__WEBPACK_IMPORTED_MODULE_3__["PyramidData"]([
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Klassenraden', 'groen', ['https://drive.google.com/file/d/18s4ra2d5CBPehtFwqf4NcWUW9LgZe8YF/preview']),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('IHP', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Krachtige leeromgeving', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Differentiëren', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Variatie in werkvormen', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('GASV doelen', 'groen', ['https://drive.google.com/file/d/1ztGBE8LOizGDbbvhfi95gOsB6yC0bPnH/preview']),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('GOK-beleid', 'groen', ['https://drive.google.com/file/d/1V3cmFf75kXjDCUznks0UMv4Qur9ktxXg/preview']),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Project gestuurd leren', 'groen', ['https://drive.google.com/file/d/1KEPwismIhs_-pBhO3Nns94D7Xy1BVeHd/preview',
                'https://drive.google.com/file/d/1nZIkVTlMxEwM-Q1mHgtjlLxrWyGZYxIe/preview']),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Draaiboek observatiejaar', 'groen', ['https://drive.google.com/file/d/1uU-iAY2vMhmAzTIidUfGB2JyOIWdYEEe/preview']),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Draaiboek opleidingsjaar', 'groen', ['https://drive.google.com/file/d/1V9mOkEpmQlGKc09_5cVx-OmLHPocOea4/preview']),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Sjabloon ID-fishes', 'blauw', ['https://drive.google.com/file/d/1wwaPIA6TgnacHQwdciyOWr5g4Z6NiDiD/preview']),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Zelfevaluatie delen', 'blauw', [])
        ], [
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Basisaanbod traject', 'groen', [])
        ], [ // Top
        ]);
        // Schoolloopbaan
        const data3 = new _pyramidData__WEBPACK_IMPORTED_MODULE_3__["PyramidData"]([
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Talenten', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Talenten- fluisteraar', 'groen', ['https://drive.google.com/file/d/1FDXFE7HwNs2XRDphYGJymqeGBHSWNgpr/preview',
                'https://drive.google.com/file/d/1mGoopmEqp6KqcJVn6lDkEL8wA6Hvt0cl/preview']),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Talenten- gesprekken', 'groen', ['https://drive.google.com/file/d/1Hg6rPEywHBuVtMTcRrLURfJTB8gPX02Y/preview',
                'https://drive.google.com/file/d/1S560NKWOAaAvp-11XHbcoWSHuP0MKrbv/preview']),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Loopbaan- begeleiding', 'groen', ['https://drive.google.com/file/d/1UHb_bcwcTwVAV3Hau7U3_Y2N8uzDOe-6/preview',
                'https://drive.google.com/file/d/1q_sGrctjGSY_QXhPrQCOUxJ7QtUWR4MB/preview']),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Stage', 'groen', ['https://drive.google.com/file/d/1oXjO_mkhOdBuIXJeT9aasVGwJPqGY5oO/preview',
                'https://drive.google.com/file/d/1GLK_qNel6dlHovP3CEKTxUV8PjMYu2a9/preview',
                'https://drive.google.com/file/d/1fH_5TKes9sOnsZVhQXpLj6VFC7HSZIL2/preview',
                'https://drive.google.com/file/d/1Mwz-z37CpdyC1-mY2Y3ePt3OAAYap1aQ/preview',
                'https://drive.google.com/file/d/1oN79_Kjqw99kKHHXu2k7GAGusHrmr1JX/preview',
                'https://drive.google.com/file/d/1KMUoEWPXHSv5m3mNA6bmVveIJJzRFHc8/preview',
                'https://drive.google.com/file/d/1m3wtfQCFZ5wLuf0TmMbeV6Mfclui-E7G/preview']),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('SODA', 'groen', ['https://drive.google.com/file/d/1Gegrejz5TH6lMxINHGprYiASMlaFG43-/preview']),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Duaal', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('INTO', 'groen', ['https://drive.google.com/file/d/1umhps8Dau_IHNwQOleslqNXMdoUGRgzc/preview']),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('De werkvloer', 'blauw', []),
        ], [
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Organisatie basisaanbod', 'groen', ['https://drive.google.com/file/d/1wUI-IR3UwcBEziUKv7ISn6pmHaKgOvx6/preview']),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Regulier onderwijs', 'blauw', ['https://drive.google.com/file/d/1Z09ghi7InWiI2Y4zmz_zlZ_e20RHmC5r/preview'])
        ], [ // Top
        ]);
        // Preventieve Gezondheidszorg
        const data4 = new _pyramidData__WEBPACK_IMPORTED_MODULE_3__["PyramidData"]([
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Verpleegster', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Gezond schoolontbijt', 'groen', ['https://drive.google.com/file/d/1H_kjA48ds9BT5d2NoawhdFWOJF-0FMsb/preview']),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('MOS', 'groen', ['https://drive.google.com/file/d/1SZ9jh5IC-yQrFXWyBOg2VMHxoP-NvBhf/preview']),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Hygiëne', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Sport- activiteiten', 'groen', ['https://drive.google.com/file/d/10wKJ-EiGDyCwWcP-PVsT5lvVIDSuMGcN/preview']),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('VCA', 'groen', ['https://drive.google.com/file/d/1MTZ0OAb6vI-f1KW9ebSxhbrauEIWBcd6/preview',
                'https://drive.google.com/file/d/1pff1NtzZVZJk4hgaEn24knqPnI1bAbmb/preview']),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Gezond klasontbijt', 'blauw', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Gezondheids- beleid', 'blauw', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Rookbeleid', 'blauw', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Drugsbeleid', 'blauw', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('SNS pas', 'blauw', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Drugpreventie', 'blauw', [])
        ], [
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Procedure besmettelijke ziektes', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Tiener- zwangerschap', 'blauw', [])
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
    getDataHetKwadrant(id) {
        const data1 = new _pyramidData__WEBPACK_IMPORTED_MODULE_3__["PyramidData"]([
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Aanspreek- baar', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Leerkracht aanspreek punt', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Sociale vaardigheden', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Extra toezicht', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Verbindend communiceren', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Sociale regels uitspreken', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Draaiboek voor nieuwe lln', 'groen', ['https://drive.google.com/file/d/1WK82lLIMZW3Ee_m9BWjFydbbStpJqm52/preview']),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('2 chillroom', 'groen', ['https://drive.google.com/file/d/1Gj4sFdRCC4S5NdYad7FzMux4W-PKw9kl/preview']),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Begeleide speeltijd- activiteiten', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Ouder- betrokkenheid', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Verjaardags- kalender', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Leerlingen- raad', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Hulp middelen', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Nestklassen', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Examen opbouw', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('De klasrij', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Stille refter', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Project', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Klassen- raden', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Leerlingen- gesprekken', 'groen', ['https://drive.google.com/file/d/1XnaNr54lZwHVCZpgewBMPRGQ_urlRpXT/preview']),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Gedragscode in agenda', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Herstel gericht sanctionerings- beleid', 'groen', ['https://drive.google.com/file/d/1-Lhm3IZmzB0n_Ai_CokngJ4pQZbVrpw2/preview']),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Zelfstandig- heid', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Klas dynamiek', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Individuele stressthermometer', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Visualisaties', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Vaste plaats in klas/rij', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Lessen roosters', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Speelplaats zones', 'groen', ['https://drive.google.com/file/d/1GDi7aZ8l-87KPZDjTWTx4yG_KXHxMLhd/preview']),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Voorspelbaar- heid', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Regels', 'groen', ['https://drive.google.com/file/d/1bSOmhi_c99F4hsDNAoDAliBz42QDhHOJ/preview']),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Prikkelarme omgeving', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Stappenplan les verstoren', 'groen', ['https://drive.google.com/file/d/1kEVizH68v-Zs5XssoUf8yHBGUoc1-cj7/preview']),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Begeleide Speeltijd activiteiten', 'groen', ['https://drive.google.com/file/d/1VGKPRgk7vqAH2Uybmc3UdV768ulDFhOe/preview']),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Spelboxen', 'groen', ['https://drive.google.com/file/d/1JTLgrkLOKFlEku7jl91OGcIKhKRstj4J/preview'])
        ], [
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Individuele vluchtroute', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Wekelijkse leerling gesprekken', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Psycho-educatie', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Openbaar vervoer', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Kortdurende begeleiding', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Thuis begeleiding', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Aangepast lessenrooster', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Rust momenten', 'groen', [])
        ], [
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Externe hulp', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Aangepaste trajecten', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Time-out', 'groen', [])
        ]);
        // Leren en Studeren
        const data2 = new _pyramidData__WEBPACK_IMPORTED_MODULE_3__["PyramidData"]([
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Kleine klasgroepen', 'groen', ['https://drive.google.com/file/d/1Wp1KNdrZIdN0CDaVwxmnLTZHPx5Mzjx9/preview']),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Vakspecifiek tips', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Leerstof overzichten', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Ingevulde cursussen', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Organisatie en planning', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Studie planning', 'groen', ['https://drive.google.com/file/d/1Wy8S3XawVVdfzTeM1__Tv8DtyfegyiUu/preview']),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Werkvormen', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Zelf- evaluatie', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Sticordi', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Versterken en verdiepen', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Hoofd- en bijzaken', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Toets jezelf', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Studie begeleiding', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('De examens', 'groen', ['https://drive.google.com/file/d/1dSKvqD1hwwBXUVhRDemdY_3yzewBFMwQ/preview']),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Vak- leerkracht', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Agenda', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Takenbord', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Sjabloon', 'groen', ['https://drive.google.com/file/d/1yv2cHOjiI6Skr2YSYDBGQM-jN5jx7O-z/preview']),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Maximale toetsen', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Voorspel- baarheid toetsen', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Reflectie moment', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Digitaal bord', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Methodieken', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Vraag- stelling', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Hulp middelen', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Taal screening', 'groen', ['https://drive.google.com/file/d/1hydi-LPMLczKs8BLq0-Uj1dxkdW3B0bI/preview']),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('School- materiaal voorzien', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Project', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Vak leren leren', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Goed klas- management', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Klassen- raad', 'groen', ['https://drive.google.com/file/d/1Zxok9SO1X0RU4MTfGqjagkznmVK2V-w8/preview']),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Klasinfra- structuur', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Aanwezig- heden', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('IHP', 'groen', ['https://drive.google.com/file/d/1Zxok9SO1X0RU4MTfGqjagkznmVK2V-w8/preview'])
        ], [
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Bijlessen', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Studie', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Studie begeleiding', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Bednet', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Individueel evalueren', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Sprintplus', 'groen', ['https://drive.google.com/file/d/1F4XjnD60V7LX1IbhOBXeRzVOPmDf5_DV/preview',
                'https://drive.google.com/file/d/1cwWCtQpkqCMboJdRfQ9gzdS2Hn0jEjtT/preview']),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Examens', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Geogebra', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Reken- machine', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Stappen plannen', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Teksten op voorhand', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Extra tijd', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Toetsen', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Voorbeeld- vragen', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('"onderwijs en ziek zijn"', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Huiswerk- begeleiding', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Internaat', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Zelfstandig', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Projectmatig', 'groen', []),
        ], [
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Spreiden van leerstof', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('TOAH', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Time-out', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Externe bijles', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Flexibele leertrajecten', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Vrije leerling', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Psychiatirisch ziekenhuis', 'groen', []),
        ]);
        // Schoolloopbaan
        const data3 = new _pyramidData__WEBPACK_IMPORTED_MODULE_3__["PyramidData"]([
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('ID-fishes', 'groen', ['https://drive.google.com/file/d/1wrjg90gyOBcM_YRLsHtK71hFnI1Y2D_K/preview']),
            // new PostIt('Taal screening', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Project', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Onderwijs kiezer', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('deStap', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Snuffel- stages', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Beroepen- huis', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Gesprekken', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Intrinsieke motivatie', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Getuigenissen', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('KR', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Leerling- volgsysteem', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Zelf- evaluatie', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Integratie', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Ouder- contacten', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Coping strategieën', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Zelfsturend', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Klas gesprekken', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('OLB-bundel', 'groen', ['https://drive.google.com/file/d/1eQoafdmROtyFfg195eApXFh_h2bStPPx/preview']),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Info avond', 'groen', ['https://drive.google.com/file/d/1PT9gFcmM3ptpCv3k2QnenxATYMTx3nO5/preview']),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Toonmoment', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Draaiboek OLB', 'groen', ['https://drive.google.com/file/d/1QU9P1JKg6U6CAo57ddgyjrs6tyhr2bgi/preview'])
        ], [
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Ouder gesprekken', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Info momenten', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Integratie', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Scholen verkennen', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Individuele snuffelstages', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Warme overdrachten', 'groen', [])
        ], [
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Heroriëntering', 'groen', [])
        ]);
        // Preventieve Gezondheidszorg
        const data4 = new _pyramidData__WEBPACK_IMPORTED_MODULE_3__["PyramidData"]([
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Contact- momenten door CLB', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Profy- lactische maatregelen', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Signaalfunctie', 'groen', ['https://drive.google.com/file/d/1QU9P1JKg6U6CAo57ddgyjrs6tyhr2bgi/preview']),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Hygiëne', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Medisch school toezicht', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Vaccinaties', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Enkel water', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('EHBO', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Medicatie', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Ziekenbed', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Activiteiten aanbod', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Veiligheids pictogrammen', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Brand evacuatie', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Ergonomie', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Team informeren', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Crisisteam', 'groen', ['https://drive.google.com/file/d/1B0PxFcpR_LHKcadQRRpIb5qJ6FhI5oXf/preview']),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Jap', 'groen', []),
        ], [
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('samenwerking hulpverleners', 'groen', [])
        ], [
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Externe hulp', 'groen', [])
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

module.exports = ".main {\r\n  overflow-y: hidden;\r\n}\r\n\r\n.title {\r\n  height: 5vw;\r\n  color: white;\r\n  background-color: var(--blue);\r\n  border-bottom: solid var(--darkblue) 2px;\r\n}\r\n\r\nh1 {\r\n  font-size: 3vw;\r\n  -webkit-text-decoration: bold;\r\n          text-decoration: bold;\r\n}\r\n\r\nh2 {\r\n  font-size: 3vw;\r\n  width: 100%;\r\n}\r\n\r\n.button1 {\r\n  border-top-left-radius: 100%;\r\n}\r\n\r\n.button2 {\r\n  border-top-right-radius: 100%;\r\n}\r\n\r\n.button3 {\r\n  border-bottom-left-radius: 100%;\r\n}\r\n\r\n.button4 {\r\n  border-bottom-right-radius: 100%;\r\n}\r\n\r\n.schools {\r\n  text-align: center;\r\n  display: inline-block;\r\n  /* border: solid red 1px; */\r\n  width: 100%;\r\n  height: 95vh;\r\n  padding-bottom: 15vh;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.school {\r\n  display: inline-block;\r\n  width: 30vw;\r\n  margin-left: 3vw;\r\n  margin-right: 3vw;\r\n  height: 30vw;\r\n  margin-top: 1vw;\r\n  /* border: solid black 1px; */\r\n}\r\n\r\n.button1,\r\n.button2,\r\n.button3,\r\n.button4 {\r\n  position: relative;\r\n  display: inline-block;\r\n  width: 12vw;\r\n  height: 12vw;\r\n  margin: 0.2vw 0.5vw 0.5vw 0.5vw;\r\n  background-color: var(--blue);\r\n  border: solid var(--darkblue) 5px;\r\n  color: white;\r\n}\r\n\r\n.button-text1 {\r\n  position: absolute;\r\n  left: 0;\r\n  right: 0;\r\n  top: 50%;\r\n  /* border: solid red 1px; */\r\n  float:left;\r\n  font-size: 1.4vw;\r\n  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;\r\n}\r\n\r\n.button-text2 {\r\n  position: absolute;\r\n  left: 0;\r\n  right: 0;\r\n  top: 20%;\r\n  /* border: solid black 1px; */\r\n  padding: 0%;\r\n  font-size: 1.4vw;\r\n  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;\r\n\r\n}\r\n\r\n.button:hover {\r\n  cursor: pointer;\r\n  background-color: var(--lightblue);\r\n  border: solid var(--darkblue) 0.4vw;\r\n}\r\n\r\n.button:focus {\r\n  outline: 0;\r\n  background-color: var(--lightblue);\r\n  border: solid var(--darkblue) 0.4vw;\r\n}\r\n\r\n/* Tablets (portrait and landscape) ----------- */\r\n\r\n@media only screen and (min-width: 400px) and (max-width: 960px) {\r\n  .title {\r\n    height: 7vw;\r\n  }\r\n\r\n  h1 {\r\n    font-size: 5vw;\r\n  }\r\n\r\n  h2 {\r\n    font-size: 5vw;\r\n  }\r\n\r\n  .school {\r\n    width: 48vw;\r\n    height: 48vw;\r\n    margin: 0%;\r\n  }\r\n\r\n  .button1,\r\n  .button2,\r\n  .button3,\r\n  .button4 {\r\n    width: 18vw;\r\n    height: 18vw;\r\n  }\r\n\r\n  .button-text1 {\r\n    top: 50%;\r\n    font-size: 2.3vw;\r\n  }\r\n\r\n  .button-text2 {\r\n    top: 10%;\r\n    font-size: 2.3vw;\r\n  }\r\n}\r\n\r\n/* Smartphones (portrait and landscape) ----------- */\r\n\r\n@media only screen and (max-width: 400px) {\r\n  .title {\r\n    height: 10vw;\r\n  }\r\n\r\n  h1 {\r\n    font-size: 6vw;\r\n  }\r\n\r\n  h2 {\r\n    font-size: 6vw;\r\n  }\r\n\r\n  .school {\r\n    width: 48vw;\r\n    height: 48vw;\r\n    margin: 0;\r\n  }\r\n\r\n  .button1,\r\n  .button2,\r\n  .button3,\r\n  .button4 {\r\n    width: 20vw;\r\n    height: 20vw;\r\n  }\r\n\r\n  .button-text1 {\r\n    top: 50%;\r\n    font-size: 2.6vw;\r\n  }\r\n\r\n  .button-text2 {\r\n    top: 10%;\r\n    font-size: 2.6vw;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLDZCQUE2QjtFQUM3Qix3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsNkJBQXFCO1VBQXJCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLDJCQUEyQjtFQUMzQixXQUFXO0VBQ1gsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGVBQWU7RUFDZiw2QkFBNkI7QUFDL0I7O0FBRUE7Ozs7RUFJRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0VBQ1osK0JBQStCO0VBQy9CLDZCQUE2QjtFQUM3QixpQ0FBaUM7RUFDakMsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxRQUFRO0VBQ1IsUUFBUTtFQUNSLDJCQUEyQjtFQUMzQixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLCtFQUErRTtBQUNqRjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsUUFBUTtFQUNSLFFBQVE7RUFDUiw2QkFBNkI7RUFDN0IsV0FBVztFQUNYLGdCQUFnQjtFQUNoQiwrRUFBK0U7O0FBRWpGOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtDQUFrQztFQUNsQyxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysa0NBQWtDO0VBQ2xDLG1DQUFtQztBQUNyQzs7QUFFQSxpREFBaUQ7O0FBQ2pEO0VBQ0U7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osVUFBVTtFQUNaOztFQUVBOzs7O0lBSUUsV0FBVztJQUNYLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFFBQVE7SUFDUixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxRQUFRO0lBQ1IsZ0JBQWdCO0VBQ2xCO0FBQ0Y7O0FBRUEscURBQXFEOztBQUNyRDtFQUNFO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFNBQVM7RUFDWDs7RUFFQTs7OztJQUlFLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxRQUFRO0lBQ1IsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsUUFBUTtJQUNSLGdCQUFnQjtFQUNsQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbiB7XHJcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIGhlaWdodDogNXZ3O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcclxuICBib3JkZXItYm90dG9tOiBzb2xpZCB2YXIoLS1kYXJrYmx1ZSkgMnB4O1xyXG59XHJcblxyXG5oMSB7XHJcbiAgZm9udC1zaXplOiAzdnc7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBib2xkO1xyXG59XHJcblxyXG5oMiB7XHJcbiAgZm9udC1zaXplOiAzdnc7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5idXR0b24xIHtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMDAlO1xyXG59XHJcblxyXG4uYnV0dG9uMiB7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwMCU7XHJcbn1cclxuXHJcbi5idXR0b24zIHtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMDAlO1xyXG59XHJcblxyXG4uYnV0dG9uNCB7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwMCU7XHJcbn1cclxuXHJcbi5zY2hvb2xzIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIC8qIGJvcmRlcjogc29saWQgcmVkIDFweDsgKi9cclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDk1dmg7XHJcbiAgcGFkZGluZy1ib3R0b206IDE1dmg7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG59XHJcblxyXG4uc2Nob29sIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDMwdnc7XHJcbiAgbWFyZ2luLWxlZnQ6IDN2dztcclxuICBtYXJnaW4tcmlnaHQ6IDN2dztcclxuICBoZWlnaHQ6IDMwdnc7XHJcbiAgbWFyZ2luLXRvcDogMXZ3O1xyXG4gIC8qIGJvcmRlcjogc29saWQgYmxhY2sgMXB4OyAqL1xyXG59XHJcblxyXG4uYnV0dG9uMSxcclxuLmJ1dHRvbjIsXHJcbi5idXR0b24zLFxyXG4uYnV0dG9uNCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMTJ2dztcclxuICBoZWlnaHQ6IDEydnc7XHJcbiAgbWFyZ2luOiAwLjJ2dyAwLjV2dyAwLjV2dyAwLjV2dztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcclxuICBib3JkZXI6IHNvbGlkIHZhcigtLWRhcmtibHVlKSA1cHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYnV0dG9uLXRleHQxIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICB0b3A6IDUwJTtcclxuICAvKiBib3JkZXI6IHNvbGlkIHJlZCAxcHg7ICovXHJcbiAgZmxvYXQ6bGVmdDtcclxuICBmb250LXNpemU6IDEuNHZ3O1xyXG4gIHRleHQtc2hhZG93OiAtMXB4IC0xcHggMCAjMDAwLCAxcHggLTFweCAwICMwMDAsIC0xcHggMXB4IDAgIzAwMCwgMXB4IDFweCAwICMwMDA7XHJcbn1cclxuXHJcbi5idXR0b24tdGV4dDIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRvcDogMjAlO1xyXG4gIC8qIGJvcmRlcjogc29saWQgYmxhY2sgMXB4OyAqL1xyXG4gIHBhZGRpbmc6IDAlO1xyXG4gIGZvbnQtc2l6ZTogMS40dnc7XHJcbiAgdGV4dC1zaGFkb3c6IC0xcHggLTFweCAwICMwMDAsIDFweCAtMXB4IDAgIzAwMCwgLTFweCAxcHggMCAjMDAwLCAxcHggMXB4IDAgIzAwMDtcclxuXHJcbn1cclxuXHJcbi5idXR0b246aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodGJsdWUpO1xyXG4gIGJvcmRlcjogc29saWQgdmFyKC0tZGFya2JsdWUpIDAuNHZ3O1xyXG59XHJcblxyXG4uYnV0dG9uOmZvY3VzIHtcclxuICBvdXRsaW5lOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0Ymx1ZSk7XHJcbiAgYm9yZGVyOiBzb2xpZCB2YXIoLS1kYXJrYmx1ZSkgMC40dnc7XHJcbn1cclxuXHJcbi8qIFRhYmxldHMgKHBvcnRyYWl0IGFuZCBsYW5kc2NhcGUpIC0tLS0tLS0tLS0tICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDAwcHgpIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xyXG4gIC50aXRsZSB7XHJcbiAgICBoZWlnaHQ6IDd2dztcclxuICB9XHJcblxyXG4gIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogNXZ3O1xyXG4gIH1cclxuXHJcbiAgaDIge1xyXG4gICAgZm9udC1zaXplOiA1dnc7XHJcbiAgfVxyXG5cclxuICAuc2Nob29sIHtcclxuICAgIHdpZHRoOiA0OHZ3O1xyXG4gICAgaGVpZ2h0OiA0OHZ3O1xyXG4gICAgbWFyZ2luOiAwJTtcclxuICB9XHJcblxyXG4gIC5idXR0b24xLFxyXG4gIC5idXR0b24yLFxyXG4gIC5idXR0b24zLFxyXG4gIC5idXR0b240IHtcclxuICAgIHdpZHRoOiAxOHZ3O1xyXG4gICAgaGVpZ2h0OiAxOHZ3O1xyXG4gIH1cclxuXHJcbiAgLmJ1dHRvbi10ZXh0MSB7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGZvbnQtc2l6ZTogMi4zdnc7XHJcbiAgfVxyXG5cclxuICAuYnV0dG9uLXRleHQyIHtcclxuICAgIHRvcDogMTAlO1xyXG4gICAgZm9udC1zaXplOiAyLjN2dztcclxuICB9XHJcbn1cclxuXHJcbi8qIFNtYXJ0cGhvbmVzIChwb3J0cmFpdCBhbmQgbGFuZHNjYXBlKSAtLS0tLS0tLS0tLSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XHJcbiAgLnRpdGxlIHtcclxuICAgIGhlaWdodDogMTB2dztcclxuICB9XHJcblxyXG4gIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogNnZ3O1xyXG4gIH1cclxuXHJcbiAgaDIge1xyXG4gICAgZm9udC1zaXplOiA2dnc7XHJcbiAgfVxyXG5cclxuICAuc2Nob29sIHtcclxuICAgIHdpZHRoOiA0OHZ3O1xyXG4gICAgaGVpZ2h0OiA0OHZ3O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuXHJcbiAgLmJ1dHRvbjEsXHJcbiAgLmJ1dHRvbjIsXHJcbiAgLmJ1dHRvbjMsXHJcbiAgLmJ1dHRvbjQge1xyXG4gICAgd2lkdGg6IDIwdnc7XHJcbiAgICBoZWlnaHQ6IDIwdnc7XHJcbiAgfVxyXG5cclxuICAuYnV0dG9uLXRleHQxIHtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgZm9udC1zaXplOiAyLjZ2dztcclxuICB9XHJcblxyXG4gIC5idXR0b24tdGV4dDIge1xyXG4gICAgdG9wOiAxMCU7XHJcbiAgICBmb250LXNpemU6IDIuNnZ3O1xyXG4gIH1cclxufVxyXG4iXX0= */"

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

module.exports = ".main {\r\n  height: 90%;\r\n  overflow: hidden;\r\n  padding-top: 1vh;\r\n}\r\n\r\n.mat-dialog-content {\r\n  overflow-y: hidden !important;\r\n}\r\n\r\n.header {\r\n  display: inline-block;\r\n  text-align: center;\r\n  width: 100%;\r\n  border-bottom: solid var(--blue) 0.2vh;\r\n}\r\n\r\n.backButton {\r\n  float: left;\r\n}\r\n\r\n.btn {\r\n  position: fixed;\r\n  margin-left: 1vw;\r\n  font-size: 2vh;\r\n}\r\n\r\n.title {\r\n  text-align: center;\r\n}\r\n\r\n.content {\r\n  height: 100%;\r\n}\r\n\r\n.documents {\r\n  display: flex;\r\n  justify-content: center;\r\n  border-bottom: solid var(--darkblue) 0.2vh;\r\n}\r\n\r\n.documentButton {\r\n  margin-left: 1vw;\r\n  margin-right: 1vw;\r\n  border-left: solid var(--darkblue) 0.2vw;\r\n  border-right: solid var(--darkblue) 0.2vw;\r\n  padding: 0.5vw;\r\n  font-size: 1.5vw;\r\n  background-color: var(--lightblue);\r\n  color: white;\r\n}\r\n\r\n.selected {\r\n  background-color: var(--lighterblue);\r\n}\r\n\r\n.documentButton:hover {\r\n  cursor: pointer;\r\n  opacity: 75%;\r\n}\r\n\r\n.documentButton:focus {\r\n  opacity: 100%;\r\n}\r\n\r\n.document {\r\n  margin-top: 1vh;\r\n  height: 100%;\r\n}\r\n\r\n@media only screen and (min-width: 400px) and (max-width: 960px) {\r\n  h1 {\r\n    font-size: 4vw;\r\n  }\r\n\r\n  .documentButton {\r\n    font-size: 1.5vw;\r\n  }\r\n\r\n  .btn {\r\n    padding: 0.5vh;\r\n    font-size: 1.5vh;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 400px) {\r\n  h1 {\r\n    margin-top: 1vw;\r\n    font-size: 5vw;\r\n  }\r\n\r\n  .documentButton {\r\n    font-size: 0.8vh;\r\n  }\r\n\r\n  .btn {\r\n    padding: 0.5vw;\r\n    font-size: 2.5vw;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdC1pdC9wb3N0LWl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQix3Q0FBd0M7RUFDeEMseUNBQXlDO0VBQ3pDLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsa0NBQWtDO0VBQ2xDLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0U7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsY0FBYztJQUNkLGdCQUFnQjtFQUNsQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0lBQ2YsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxnQkFBZ0I7RUFDbEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3Bvc3QtaXQvcG9zdC1pdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4ge1xyXG4gIGhlaWdodDogOTAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcGFkZGluZy10b3A6IDF2aDtcclxufVxyXG5cclxuLm1hdC1kaWFsb2ctY29udGVudCB7XHJcbiAgb3ZlcmZsb3cteTogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgdmFyKC0tYmx1ZSkgMC4ydmg7XHJcbn1cclxuXHJcbi5iYWNrQnV0dG9uIHtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIG1hcmdpbi1sZWZ0OiAxdnc7XHJcbiAgZm9udC1zaXplOiAydmg7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uZG9jdW1lbnRzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIHZhcigtLWRhcmtibHVlKSAwLjJ2aDtcclxufVxyXG5cclxuLmRvY3VtZW50QnV0dG9uIHtcclxuICBtYXJnaW4tbGVmdDogMXZ3O1xyXG4gIG1hcmdpbi1yaWdodDogMXZ3O1xyXG4gIGJvcmRlci1sZWZ0OiBzb2xpZCB2YXIoLS1kYXJrYmx1ZSkgMC4ydnc7XHJcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZCB2YXIoLS1kYXJrYmx1ZSkgMC4ydnc7XHJcbiAgcGFkZGluZzogMC41dnc7XHJcbiAgZm9udC1zaXplOiAxLjV2dztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodGJsdWUpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnNlbGVjdGVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodGVyYmx1ZSk7XHJcbn1cclxuXHJcbi5kb2N1bWVudEJ1dHRvbjpob3ZlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG9wYWNpdHk6IDc1JTtcclxufVxyXG5cclxuLmRvY3VtZW50QnV0dG9uOmZvY3VzIHtcclxuICBvcGFjaXR5OiAxMDAlO1xyXG59XHJcblxyXG4uZG9jdW1lbnQge1xyXG4gIG1hcmdpbi10b3A6IDF2aDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDAwcHgpIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xyXG4gIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogNHZ3O1xyXG4gIH1cclxuXHJcbiAgLmRvY3VtZW50QnV0dG9uIHtcclxuICAgIGZvbnQtc2l6ZTogMS41dnc7XHJcbiAgfVxyXG5cclxuICAuYnRuIHtcclxuICAgIHBhZGRpbmc6IDAuNXZoO1xyXG4gICAgZm9udC1zaXplOiAxLjV2aDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcclxuICBoMSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxdnc7XHJcbiAgICBmb250LXNpemU6IDV2dztcclxuICB9XHJcblxyXG4gIC5kb2N1bWVudEJ1dHRvbiB7XHJcbiAgICBmb250LXNpemU6IDAuOHZoO1xyXG4gIH1cclxuXHJcbiAgLmJ0biB7XHJcbiAgICBwYWRkaW5nOiAwLjV2dztcclxuICAgIGZvbnQtc2l6ZTogMi41dnc7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

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
    }
    ngOnInit() {
        this.titel = this.postIt.titel;
        this.titel = this.titel.replace('-', '');
        this.selectedUrl = this.postIt.urls[0];
    }
    getUrl() {
        return this.sanitizer.bypassSecurityTrustResourceUrl(this.selectedUrl);
    }
    selectUrl(url) {
        this.selectedUrl = url;
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

module.exports = ".main {\r\n  width: 100%;\r\n  height: 100%;\r\n  max-height: 100%;\r\n  overflow: hidden;\r\n}\r\n\r\n.nav {\r\n  background-color: var(--blue);\r\n  border-bottom: solid var(--darkblue) 2px;\r\n  height: 5vw;\r\n  width: 100%;\r\n  color: white;\r\n}\r\n\r\n.titel {\r\n  width: 70%;\r\n  margin-right: 15%;\r\n  align-self: center;\r\n}\r\n\r\n.backButton {\r\n  width: 15%;\r\n}\r\n\r\nh1 {\r\n  margin-top: 0.5vw;\r\n  font-size: 3vw;\r\n}\r\n\r\n.btn {\r\n  margin-top: 1vw;\r\n  font-size: 1vw;\r\n}\r\n\r\n.body {\r\n  /* overflow-y: scroll; */\r\n  max-height: 100%;\r\n  /* padding-bottom: 20%; */\r\n}\r\n\r\nh3 {\r\n  color: var(--blue);\r\n  font-size: 1.4vw;\r\n}\r\n\r\n.uitbreiding {\r\n  position: fixed;\r\n  margin-left: 13.5vw;\r\n}\r\n\r\n.verhoogde {\r\n  position: fixed;\r\n  margin-left: 20vw;\r\n}\r\n\r\n.basis {\r\n  position: fixed;\r\n  margin-left: 30vw;\r\n}\r\n\r\n.content {\r\n  background-repeat: no-repeat;\r\n  background-position: top;\r\n  background-size: contain;\r\n  margin-top: 1vh;\r\n  /* border: solid red 1px; */\r\n  width: 100%;\r\n  height: 100%;\r\n  display: inline-block;\r\n}\r\n\r\n.top {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-top: 5vw;\r\n  margin-left: 43%;\r\n  margin-right: 43%;\r\n  width: 14%;\r\n  height: 10vw;\r\n  /* border: solid blue 1px; */\r\n  margin-bottom: 0.5vw;\r\n}\r\n\r\n.middle {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 13vw;\r\n  margin-left: 36%;\r\n  margin-right: 36%;\r\n  width: 28%;\r\n  /* border: solid green 1px; */\r\n}\r\n\r\n.bottom {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-top: 0.5vw;\r\n  margin-left: 27%;\r\n  margin-right: 27%;\r\n  width: 46%;\r\n  height: 16vw;\r\n  /* border: solid orange 1px; */\r\n}\r\n\r\np {\r\n  margin-top: 1vh;\r\n  word-wrap: break-word;\r\n  font-size: 0.8vw;\r\n}\r\n\r\n.postit {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 0.3vw;\r\n\r\n  background-image: url('postIt-note.PNG');\r\n  background-size: cover;\r\n  color: var(--blue);\r\n}\r\n\r\n.postit-normal {\r\n  width: 5vw;\r\n  height: 5vw;\r\n  margin: 0vw 0.5vw 0vw 0.5vw;\r\n}\r\n\r\n.postit-small {\r\n  width: 4.5vw;\r\n  height: 4.5vw;\r\n  margin: 0vw 0.2vw 0vw 0.2vw;\r\n}\r\n\r\n.postit-small p {\r\n  font-size: 0.7vw;\r\n}\r\n\r\n.postit-extra-small {\r\n  width: 3.7vw;\r\n  height: 3.7vw;\r\n  margin: 0vw 0vw 0vw 0vw;\r\n}\r\n\r\n.postit-extra-small p {\r\n  font-size: 0.6vw;\r\n}\r\n\r\n.postit-url-exists {\r\n  text-decoration: underline;\r\n  /* border: solid var(--blue) 1px; */\r\n  border-radius: 15%;\r\n}\r\n\r\n.postit-url-exists:hover {\r\n  opacity: 75%;\r\n  cursor: pointer !important;\r\n}\r\n\r\n.postit-groen {\r\n  color: green;\r\n}\r\n\r\n.postit:hover {\r\n  cursor: default;\r\n}\r\n\r\n@media only screen and (min-width: 412px) and (max-width: 1025px) {\r\n  .buttonText {\r\n    display: none;\r\n  }\r\n\r\n  .btn {\r\n    padding: 3%;\r\n  }\r\n\r\n  .btn::after {\r\n    content: \"← Terug\";\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 411px) {\r\n  .nav {\r\n    height: 10vw;\r\n  }\r\n\r\n  .titel {\r\n    width: 70%;\r\n    margin-right: 15%;\r\n  }\r\n\r\n  .backButton {\r\n    width: 15%;\r\n  }\r\n\r\n  h1 {\r\n    margin-top: 2vw;\r\n    font-size: 3.5vw;\r\n  }\r\n\r\n  .buttonText {\r\n    display: none;\r\n  }\r\n\r\n  .btn {\r\n    margin: 0;\r\n    padding: 0.5vw;\r\n    margin-top: 0.5vw;\r\n    font-size: 2vw;\r\n  }\r\n\r\n  .btn::after {\r\n    content: \"← Terug\";\r\n  }\r\n\r\n  .content {\r\n    background-size: 100vw;\r\n    height: 80vw;\r\n    width: 100vw;\r\n  }\r\n\r\n  .top {\r\n    margin-top: 8vw;\r\n    margin-left: 39%;\r\n    margin-right: 39%;\r\n    width: 22%;\r\n    height: 17vw;\r\n  }\r\n\r\n  .middle {\r\n    margin-left: 30%;\r\n    margin-right: 30%;\r\n    width: 40%;\r\n    height: 22vw;\r\n  }\r\n\r\n  .bottom {\r\n    padding: 1vw;\r\n    margin-left: 15%;\r\n    margin-right: 15%;\r\n    width: 70%;\r\n    height: 26vw;\r\n  }\r\n\r\n  p {\r\n    margin-top: 2vh;\r\n    font-size: 1.4vw;\r\n  }\r\n\r\n  .postit-normal {\r\n    width: 8vw;\r\n    height: 8vw;\r\n  }\r\n\r\n  .postit-small {\r\n    width: 7vw;\r\n    height: 7vw;\r\n  }\r\n\r\n  .postit-small p {\r\n    margin-top: 1.5vh;\r\n    font-size: 1.2vw;\r\n  }\r\n\r\n  .postit-extra-small {\r\n    width: 5.5vw;\r\n    height: 5.5vw;\r\n    margin: 0vw 0.1vw 0vw 0.1vw;\r\n  }\r\n\r\n  .postit-extra-small p {\r\n    padding-right: 0.5vw;\r\n    padding-left: 0.5vw;\r\n    margin-top: 3vw;\r\n    font-size: 0.9vw;\r\n  }\r\n\r\n  h3 {\r\n    color: var(--blue);\r\n    font-size: 2vw;\r\n  }\r\n\r\n  .uitbreiding {\r\n    position: fixed;\r\n    margin-left: 21vw;\r\n  }\r\n\r\n  .verhoogde {\r\n    position: fixed;\r\n    margin-left: 32vw;\r\n  }\r\n\r\n  .basis {\r\n    position: fixed;\r\n    margin-left: 45vw;\r\n    padding-bottom: 10vw;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHlyYW1pZC9weXJhbWlkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0Isd0NBQXdDO0VBQ3hDLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGdCQUFnQjtFQUNoQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLHdCQUF3QjtFQUN4Qix3QkFBd0I7RUFDeEIsZUFBZTtFQUNmLDJCQUEyQjtFQUMzQixXQUFXO0VBQ1gsWUFBWTtFQUNaLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsWUFBWTtFQUNaLDRCQUE0QjtFQUM1QixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsVUFBVTtFQUNWLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsWUFBWTtFQUNaLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsY0FBYzs7RUFFZCx3Q0FBcUQ7RUFDckQsc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixtQ0FBbUM7RUFDbkMsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLFNBQVM7SUFDVCxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsWUFBWTtFQUNkOztFQUVBO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFVBQVU7SUFDVixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsV0FBVztFQUNiOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixhQUFhO0lBQ2IsMkJBQTJCO0VBQzdCOztFQUVBO0lBQ0Usb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsZUFBZTtJQUNmLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsb0JBQW9CO0VBQ3RCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9weXJhbWlkL3B5cmFtaWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWF4LWhlaWdodDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4ubmF2IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcclxuICBib3JkZXItYm90dG9tOiBzb2xpZCB2YXIoLS1kYXJrYmx1ZSkgMnB4O1xyXG4gIGhlaWdodDogNXZ3O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnRpdGVsIHtcclxuICB3aWR0aDogNzAlO1xyXG4gIG1hcmdpbi1yaWdodDogMTUlO1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxufVxyXG5cclxuLmJhY2tCdXR0b24ge1xyXG4gIHdpZHRoOiAxNSU7XHJcbn1cclxuXHJcbmgxIHtcclxuICBtYXJnaW4tdG9wOiAwLjV2dztcclxuICBmb250LXNpemU6IDN2dztcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgbWFyZ2luLXRvcDogMXZ3O1xyXG4gIGZvbnQtc2l6ZTogMXZ3O1xyXG59XHJcblxyXG4uYm9keSB7XHJcbiAgLyogb3ZlcmZsb3cteTogc2Nyb2xsOyAqL1xyXG4gIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgLyogcGFkZGluZy1ib3R0b206IDIwJTsgKi9cclxufVxyXG5cclxuaDMge1xyXG4gIGNvbG9yOiB2YXIoLS1ibHVlKTtcclxuICBmb250LXNpemU6IDEuNHZ3O1xyXG59XHJcblxyXG4udWl0YnJlaWRpbmcge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBtYXJnaW4tbGVmdDogMTMuNXZ3O1xyXG59XHJcblxyXG4udmVyaG9vZ2RlIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwdnc7XHJcbn1cclxuXHJcbi5iYXNpcyB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIG1hcmdpbi1sZWZ0OiAzMHZ3O1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3A7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gIG1hcmdpbi10b3A6IDF2aDtcclxuICAvKiBib3JkZXI6IHNvbGlkIHJlZCAxcHg7ICovXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLnRvcCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiA1dnc7XHJcbiAgbWFyZ2luLWxlZnQ6IDQzJTtcclxuICBtYXJnaW4tcmlnaHQ6IDQzJTtcclxuICB3aWR0aDogMTQlO1xyXG4gIGhlaWdodDogMTB2dztcclxuICAvKiBib3JkZXI6IHNvbGlkIGJsdWUgMXB4OyAqL1xyXG4gIG1hcmdpbi1ib3R0b206IDAuNXZ3O1xyXG59XHJcblxyXG4ubWlkZGxlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGhlaWdodDogMTN2dztcclxuICBtYXJnaW4tbGVmdDogMzYlO1xyXG4gIG1hcmdpbi1yaWdodDogMzYlO1xyXG4gIHdpZHRoOiAyOCU7XHJcbiAgLyogYm9yZGVyOiBzb2xpZCBncmVlbiAxcHg7ICovXHJcbn1cclxuXHJcbi5ib3R0b20ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMC41dnc7XHJcbiAgbWFyZ2luLWxlZnQ6IDI3JTtcclxuICBtYXJnaW4tcmlnaHQ6IDI3JTtcclxuICB3aWR0aDogNDYlO1xyXG4gIGhlaWdodDogMTZ2dztcclxuICAvKiBib3JkZXI6IHNvbGlkIG9yYW5nZSAxcHg7ICovXHJcbn1cclxuXHJcbnAge1xyXG4gIG1hcmdpbi10b3A6IDF2aDtcclxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgZm9udC1zaXplOiAwLjh2dztcclxufVxyXG5cclxuLnBvc3RpdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDAuM3Z3O1xyXG5cclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvcG9zdEl0LW5vdGUuUE5HXCIpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgY29sb3I6IHZhcigtLWJsdWUpO1xyXG59XHJcblxyXG4ucG9zdGl0LW5vcm1hbCB7XHJcbiAgd2lkdGg6IDV2dztcclxuICBoZWlnaHQ6IDV2dztcclxuICBtYXJnaW46IDB2dyAwLjV2dyAwdncgMC41dnc7XHJcbn1cclxuXHJcbi5wb3N0aXQtc21hbGwge1xyXG4gIHdpZHRoOiA0LjV2dztcclxuICBoZWlnaHQ6IDQuNXZ3O1xyXG4gIG1hcmdpbjogMHZ3IDAuMnZ3IDB2dyAwLjJ2dztcclxufVxyXG5cclxuLnBvc3RpdC1zbWFsbCBwIHtcclxuICBmb250LXNpemU6IDAuN3Z3O1xyXG59XHJcblxyXG4ucG9zdGl0LWV4dHJhLXNtYWxsIHtcclxuICB3aWR0aDogMy43dnc7XHJcbiAgaGVpZ2h0OiAzLjd2dztcclxuICBtYXJnaW46IDB2dyAwdncgMHZ3IDB2dztcclxufVxyXG5cclxuLnBvc3RpdC1leHRyYS1zbWFsbCBwIHtcclxuICBmb250LXNpemU6IDAuNnZ3O1xyXG59XHJcblxyXG4ucG9zdGl0LXVybC1leGlzdHMge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIC8qIGJvcmRlcjogc29saWQgdmFyKC0tYmx1ZSkgMXB4OyAqL1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1JTtcclxufVxyXG5cclxuLnBvc3RpdC11cmwtZXhpc3RzOmhvdmVyIHtcclxuICBvcGFjaXR5OiA3NSU7XHJcbiAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wb3N0aXQtZ3JvZW4ge1xyXG4gIGNvbG9yOiBncmVlbjtcclxufVxyXG5cclxuLnBvc3RpdDpob3ZlciB7XHJcbiAgY3Vyc29yOiBkZWZhdWx0O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQxMnB4KSBhbmQgKG1heC13aWR0aDogMTAyNXB4KSB7XHJcbiAgLmJ1dHRvblRleHQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5idG4ge1xyXG4gICAgcGFkZGluZzogMyU7XHJcbiAgfVxyXG5cclxuICAuYnRuOjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIuKGkCBUZXJ1Z1wiO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MTFweCkge1xyXG4gIC5uYXYge1xyXG4gICAgaGVpZ2h0OiAxMHZ3O1xyXG4gIH1cclxuXHJcbiAgLnRpdGVsIHtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1JTtcclxuICB9XHJcblxyXG4gIC5iYWNrQnV0dG9uIHtcclxuICAgIHdpZHRoOiAxNSU7XHJcbiAgfVxyXG5cclxuICBoMSB7XHJcbiAgICBtYXJnaW4tdG9wOiAydnc7XHJcbiAgICBmb250LXNpemU6IDMuNXZ3O1xyXG4gIH1cclxuXHJcbiAgLmJ1dHRvblRleHQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5idG4ge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMC41dnc7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjV2dztcclxuICAgIGZvbnQtc2l6ZTogMnZ3O1xyXG4gIH1cclxuXHJcbiAgLmJ0bjo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCLihpAgVGVydWdcIjtcclxuICB9XHJcblxyXG4gIC5jb250ZW50IHtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDgwdnc7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgfVxyXG5cclxuICAudG9wIHtcclxuICAgIG1hcmdpbi10b3A6IDh2dztcclxuICAgIG1hcmdpbi1sZWZ0OiAzOSU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDM5JTtcclxuICAgIHdpZHRoOiAyMiU7XHJcbiAgICBoZWlnaHQ6IDE3dnc7XHJcbiAgfVxyXG5cclxuICAubWlkZGxlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMwJTtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBoZWlnaHQ6IDIydnc7XHJcbiAgfVxyXG5cclxuICAuYm90dG9tIHtcclxuICAgIHBhZGRpbmc6IDF2dztcclxuICAgIG1hcmdpbi1sZWZ0OiAxNSU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1JTtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBoZWlnaHQ6IDI2dnc7XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIG1hcmdpbi10b3A6IDJ2aDtcclxuICAgIGZvbnQtc2l6ZTogMS40dnc7XHJcbiAgfVxyXG5cclxuICAucG9zdGl0LW5vcm1hbCB7XHJcbiAgICB3aWR0aDogOHZ3O1xyXG4gICAgaGVpZ2h0OiA4dnc7XHJcbiAgfVxyXG5cclxuICAucG9zdGl0LXNtYWxsIHtcclxuICAgIHdpZHRoOiA3dnc7XHJcbiAgICBoZWlnaHQ6IDd2dztcclxuICB9XHJcblxyXG4gIC5wb3N0aXQtc21hbGwgcCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxLjV2aDtcclxuICAgIGZvbnQtc2l6ZTogMS4ydnc7XHJcbiAgfVxyXG5cclxuICAucG9zdGl0LWV4dHJhLXNtYWxsIHtcclxuICAgIHdpZHRoOiA1LjV2dztcclxuICAgIGhlaWdodDogNS41dnc7XHJcbiAgICBtYXJnaW46IDB2dyAwLjF2dyAwdncgMC4xdnc7XHJcbiAgfVxyXG5cclxuICAucG9zdGl0LWV4dHJhLXNtYWxsIHAge1xyXG4gICAgcGFkZGluZy1yaWdodDogMC41dnc7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNXZ3O1xyXG4gICAgbWFyZ2luLXRvcDogM3Z3O1xyXG4gICAgZm9udC1zaXplOiAwLjl2dztcclxuICB9XHJcblxyXG4gIGgzIHtcclxuICAgIGNvbG9yOiB2YXIoLS1ibHVlKTtcclxuICAgIGZvbnQtc2l6ZTogMnZ3O1xyXG4gIH1cclxuXHJcbiAgLnVpdGJyZWlkaW5nIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMXZ3O1xyXG4gIH1cclxuXHJcbiAgLnZlcmhvb2dkZSB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBtYXJnaW4tbGVmdDogMzJ2dztcclxuICB9XHJcblxyXG4gIC5iYXNpcyB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBtYXJnaW4tbGVmdDogNDV2dztcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHZ3O1xyXG4gIH1cclxufVxyXG4iXX0= */"

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
            if (this.data.postItsBottom.length > 21) {
                this.data.postItsBottom.length > 27 ? this.extraSmallPostIts = true : this.smallPostIts = true;
            }
            if (this.data.postItsMiddle.length > 8) {
                this.data.postItsMiddle.length > 15 ? this.extraSmallPostIts = true : this.smallPostIts = true;
            }
            if (this.data.postItsTop.length > 4) {
                this.data.postItsTop.length > 9 ? this.extraSmallPostIts = true : this.smallPostIts = true;
            }
        }
    }
    showPostIt(postIt) {
        if (postIt.hasUrl()) {
            const dialogRef = this.dialog.open(_post_it_post_it_component__WEBPACK_IMPORTED_MODULE_3__["PostItComponent"], {
                width: '80vw',
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