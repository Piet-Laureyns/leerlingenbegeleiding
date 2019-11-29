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

module.exports = "<div class=\"main center\">\n  <div class=\"nav\">\n    <div class=\"backButton\">\n      <button class='btn btn-primary' routerLink=\"\"><span class=\"buttonText\"> ← Terug naar Home</span></button>\n    </div>\n    <div class=\"center titel\">\n      <h1>{{school}} - {{titel}}</h1>\n    </div>\n  </div>\n  <div class='body' *ngIf=\"!noData\">\n    <div [style.background-image]=\"backgroundImage\" id=\"content\" class=\"content\" *ngIf=\"data\">\n\n      <div class=\"top\">\n        <div *ngFor=\"let postIt of data.postItsTop\" class=\"postit\"\n          [ngClass]=\"{'postit-groen': postIt.isGroen(), 'postit-small': smallPostIts, 'postit-normal': !smallPostIts,'postit-extra-small': extraSmallPostIts, 'postit-url-exists': postIt.hasUrl()}\"\n          (click)=\"showPostIt(postIt)\">\n          <p>{{postIt.titel}}</p>\n        </div>\n      </div>\n\n      <div class=\"middle\">\n        <div *ngFor=\"let postIt of data.postItsMiddle\" class=\"postit\"\n          [ngClass]=\"{'postit-groen': postIt.isGroen(), 'postit-small': smallPostIts, 'postit-normal': !smallPostIts,'postit-extra-small': extraSmallPostIts, 'postit-url-exists': postIt.hasUrl()}\"\n          (click)=\"showPostIt(postIt)\">\n          <p>{{postIt.titel}}</p>\n        </div>\n      </div>\n\n      <div class=\"bottom\">\n        <div *ngFor=\"let postIt of data.postItsBottom\" class=\"postit\"\n          [ngClass]=\"{'postit-groen': postIt.isGroen(), 'postit-small': smallPostIts, 'postit-normal': !smallPostIts,'postit-extra-small': extraSmallPostIts, 'postit-url-exists': postIt.hasUrl()}\"\n          (click)=\"showPostIt(postIt)\">\n          <p>{{postIt.titel}}</p>\n        </div>\n      </div>\n\n    </div>\n  </div>\n  <div *ngIf=\"noData\" style=\"margin-top:5%;\">\n    <h2>Deze pyramide moet nog aangemaakt worden.</h2>\n  </div>\n</div>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
    }
    AppComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_doc_viewer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-doc-viewer */ "./node_modules/ngx-doc-viewer/fesm5/ngx-doc-viewer.js");
/* harmony import */ var _post_it_post_it_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./post-it/post-it.component */ "./src/app/post-it/post-it.component.ts");
/* harmony import */ var _pyramid_pyramid_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pyramid/pyramid.component */ "./src/app/pyramid/pyramid.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");














var appRoutes = [
    { path: 'driehoek/:school/:id/:titel', component: _pyramid_pyramid_component__WEBPACK_IMPORTED_MODULE_11__["PyramidComponent"] },
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"] },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_12__["PageNotFoundComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
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
    return AppModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _postIt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./postIt */ "./src/app/postIt.ts");
/* harmony import */ var _pyramidData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pyramidData */ "./src/app/pyramidData.ts");




var DataService = /** @class */ (function () {
    function DataService() {
    }
    DataService.prototype.getDataDriehoek = function (school, id) {
        switch (school) {
            case 'Het Nest': return this.getDataHetNest(id); // OV1
            case 'Het Anker': return this.getDataHetAnker(id); // OV2
            case 'De Cirkel': return this.getDataDeCirkel(id); // OV3
            case 'Het Kwadrant': return this.getDataHetKwadrant(id); // OV4
        }
    };
    DataService.prototype.getDataHetNest = function (id) {
        // Psycho-Sociaal Functioneren
        var data1 = new _pyramidData__WEBPACK_IMPORTED_MODULE_3__["PyramidData"]([
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
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Ondersteun- ingsplan', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Vertrouwens persoon', 'blauw', [])
        ]);
        // Leren en Studeren
        var data2 = new _pyramidData__WEBPACK_IMPORTED_MODULE_3__["PyramidData"]([
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
        var data3 = new _pyramidData__WEBPACK_IMPORTED_MODULE_3__["PyramidData"]([
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
        var data4 = new _pyramidData__WEBPACK_IMPORTED_MODULE_3__["PyramidData"]([
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
    };
    DataService.prototype.getDataHetAnker = function (id) {
        // Psychosociaal
        var data1 = new _pyramidData__WEBPACK_IMPORTED_MODULE_3__["PyramidData"]([
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Aanpak op maat', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Workshops', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Koffie-onthaal', 'groen', ['https://drive.google.com/file/d/16Vjfm7GajoRaMawigQ0TyokEvynpeQvj/preview']),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('LSCI-training', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Leerlingenraad', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Schoolhond Louis', 'groen', ['https://drive.google.com/file/d/1TFkyz7rH2mLTIuRFz6_hVddi_7x06JT2/preview',
                'https://drive.google.com/file/d/1dG3enKo0Fg4vzyuGjnC-esehf-Pii6pF/preview']),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Middagsport en spel', 'groen', ['https://drive.google.com/file/d/1CQFc0qfnmJM8vOx4h9IBNFJr1wzjb36f/preview']),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Tuin met kippen', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Pro-actieve cirkel', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Uitstappen/ 3-daagse', 'groen', []),
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
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Aangepast lessenrooster', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Individueel douche- moment', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Vluchtroute', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Stille pauze', 'groen', ['https://drive.google.com/file/d/1B2jVJd9EXQOAZXgnQ-Zn8ppsU4g4aOh2/preview']),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Gebruik koptelefoons', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Auti-hokjes', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Wat na school?', 'blauw', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('HERGO', 'blauw', [])
        ], [ // Top
        ]);
        // Leren en Studeren
        var data2 = new _pyramidData__WEBPACK_IMPORTED_MODULE_3__["PyramidData"]([
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Individuele aanpak', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Workshops', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Traject begeleiding', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Gezondheids- beleid', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Autowerking', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Pro-actieve cirkel', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('BS + BPT-uren', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Co-teacher', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Uitwerk', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Actieve middagpauze', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Vak- overschrijdend werken', 'blauw', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Verantwoord- elijkheidszin aanwakkeren', 'blauw', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Projectgericht werken', 'blauw', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Functioneel leren', 'blauw', [])
        ], [ // Middle
        ], [ // Top
        ]);
        // Schoolloopbaan
        var data3 = new _pyramidData__WEBPACK_IMPORTED_MODULE_3__["PyramidData"]([
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Stages', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Stage- begeleiding', 'groen', []),
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
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Schoolverlaters opvolgen', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Oud- leerlingen', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Duaal leren', 'blauw', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Begeleiden naar vakantiejob', 'blauw', [])
        ], [
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Time-out', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('TOAH', 'groen', [])
        ]);
        // Preventieve Gezondheidszorg
        var data4 = new _pyramidData__WEBPACK_IMPORTED_MODULE_3__["PyramidData"]([
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Tanden poetsen', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Opvolgen mond- hygiëne', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Soepatelier', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Uitdelen gezonde snack', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Kooklessen', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Gezonde voeding', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Gezonde houding', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Klassikale douche momenten', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Water op school', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Workshops', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Begeleide middagsport', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Buitenschoolse sport- activiteiten', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Drinkfles', 'groen', []),
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
    };
    DataService.prototype.getDataDeCirkel = function (id) {
        // Psycho-sociaal Functioneren
        var data1 = new _pyramidData__WEBPACK_IMPORTED_MODULE_3__["PyramidData"]([
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Klas onthaal- moment', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('School- leefregels', 'groen', ['https://drive.google.com/file/d/14Ddyl5XzEBu-1qvYx0-vNov9ox9OnQPO/preview',
                'https://drive.google.com/file/d/1I46k9IXmAuPyLkxJINRXIbrmuOOIE4SC/preview']),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Klas afpraken', 'groen', ['https://drive.google.com/file/d/11WCB5j0oYRenLimpPhWeCweealC6KlT1/preview',
                'https://drive.google.com/file/d/1pdnHgOUxMVGDvPtTbzumyKE9FUw7Fi8A/preview']),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Dagelijks handelen in de klas', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Klas Conflicthantering', 'groen', ['https://drive.google.com/file/d/1lOW2pnavSAgXdAqO41hzHZZc6qZPAKek/preview']),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Klasgesprekken', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Herstel- gesprekken', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Positieve basishouding ik', 'groen', ['https://drive.google.com/file/d/1zAMOIBx0vkbnMiQCsc_XaZSzOoYnI9Op/preview']),
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
        var data2 = new _pyramidData__WEBPACK_IMPORTED_MODULE_3__["PyramidData"]([
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Klassenraden', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('IHP', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Krachtige leeromgeving', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Differentiëren', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Variatie in werkvormen', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('GASV doelen', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('GOK-beleid', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Project gestuurd leren', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Draaiboek observatiejaar', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Draaiboek opleidingsjaar', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Sjabloon ID-fishes', 'blauw', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Zelfevaluatie delen', 'blauw', [])
        ], [
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Basisaanbod traject', 'groen', [])
        ], [ // Top
        ]);
        // Schoolloopbaan
        var data3 = new _pyramidData__WEBPACK_IMPORTED_MODULE_3__["PyramidData"]([
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Talenten', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Talenten- fluisteraar', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Talenten- gesprekken', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Loopbaan- begeleiding', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Stage', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('SODA', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Duaal', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('INTO', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('De werkvloer', 'blauw', []),
        ], [
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Organisatie basisaanbod', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Regulier onderwijs', 'blauw', [])
        ], [ // Top
        ]);
        // Preventieve Gezondheidszorg
        var data4 = new _pyramidData__WEBPACK_IMPORTED_MODULE_3__["PyramidData"]([
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Verpleegster', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Gezond schoolontbijt', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('MOS', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Hygiëne', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Sport- activiteiten', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('VCA', 'groen', []),
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
    };
    DataService.prototype.getDataHetKwadrant = function (id) {
        var data1 = new _pyramidData__WEBPACK_IMPORTED_MODULE_3__["PyramidData"]([
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
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Leerlingen- gesprekken', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Gedragscode in agenda', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Herstel gericht sanctionerings- beleid', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Zelfstandig- heid', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Klas dynamiek', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Visualisaties', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Vaste plaats in klas/rij', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Lessen roosters', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Speelplaats zones', 'groen', ['https://drive.google.com/file/d/1GDi7aZ8l-87KPZDjTWTx4yG_KXHxMLhd/preview']),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Voorspelbaar- heid', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Regels', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Prikkelarme omgeving', 'groen', [])
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
        var data2 = new _pyramidData__WEBPACK_IMPORTED_MODULE_3__["PyramidData"]([
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Kleine klasgroepen', 'groen', []),
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
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Klassen- raad', 'groen', ['https://drive.google.com/file/d/129tnwsC58GFPR0mZqk1iOvv4vDPiwXiQ/preview']),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Klasinfra- structuur', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Aanwezig- heden', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('IHP', 'groen', [])
        ], [
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Bijlessen', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Studie', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Studie begeleiding', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Bednet', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Individueel evalueren', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Sprintplus', 'groen', ['https://drive.google.com/file/d/1F4XjnD60V7LX1IbhOBXeRzVOPmDf5_DV/preview', 'https://drive.google.com/file/d/1cwWCtQpkqCMboJdRfQ9gzdS2Hn0jEjtT/preview']),
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
        var data3 = new _pyramidData__WEBPACK_IMPORTED_MODULE_3__["PyramidData"]([
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Taal screening', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Project', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Onderwijs kiezer', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('deStap', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Snuffel- stages', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Beroepen- huis', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Gesprekken', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Intrinsieke motivatie', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Getuigenissen', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('ID-fishes', 'groen', ['https://drive.google.com/file/d/1wrjg90gyOBcM_YRLsHtK71hFnI1Y2D_K/preview']),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('KR', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Leerling- volgsysteem', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Zelf- evaluatie', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Integratie', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Ouder- contacten', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Coping strategieën', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Zelfsturend', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Klas gesprekken', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('OLB-bundel', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Info avond', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Toonmoment', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Draaiboek OLB', 'groen', [])
        ], [
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Ouder gesprekken', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Info momenten', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Scholen verkennen', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Individuele snuffelstages', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Warme overdrachten', 'groen', [])
        ], [
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Heroriëntering', 'groen', []),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Integratie', 'groen', [])
        ]);
        // Preventieve Gezondheidszorg
        var data4 = new _pyramidData__WEBPACK_IMPORTED_MODULE_3__["PyramidData"]([
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
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]('Ergonomie', 'groen', [])
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
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\r\n  overflow-y: hidden;\r\n}\r\n\r\n.title {\r\n  height: 5vw;\r\n  color: white;\r\n  background-color: var(--blue);\r\n  border-bottom: solid var(--darkblue) 2px;\r\n}\r\n\r\nh1 {\r\n  font-size: 3vw;\r\n  -webkit-text-decoration: bold;\r\n          text-decoration: bold;\r\n}\r\n\r\nh2 {\r\n  font-size: 3vw;\r\n  width: 100%;\r\n}\r\n\r\n.button1 {\r\n  border-top-left-radius: 100%;\r\n}\r\n\r\n.button2 {\r\n  border-top-right-radius: 100%;\r\n}\r\n\r\n.button3 {\r\n  border-bottom-left-radius: 100%;\r\n}\r\n\r\n.button4 {\r\n  border-bottom-right-radius: 100%;\r\n}\r\n\r\n.schools {\r\n  text-align: center;\r\n  display: inline-block;\r\n  /* border: solid red 1px; */\r\n  width: 100%;\r\n  height: 95vh;\r\n  padding-bottom: 15vh;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.school {\r\n  display: inline-block;\r\n  width: 30vw;\r\n  margin-left: 3vw;\r\n  margin-right: 3vw;\r\n  height: 30vw;\r\n  margin-top: 1vw;\r\n  /* border: solid black 1px; */\r\n}\r\n\r\n.button1,\r\n.button2,\r\n.button3,\r\n.button4 {\r\n  position: relative;\r\n  display: inline-block;\r\n  width: 12vw;\r\n  height: 12vw;\r\n  margin: 0.2vw 0.5vw 0.5vw 0.5vw;\r\n  background-color: var(--blue);\r\n  border: solid var(--darkblue) 0.4vw;\r\n  color: white;\r\n}\r\n\r\n.button-text1 {\r\n  position: absolute;\r\n  left: 0;\r\n  right: 0;\r\n  top: 50%;\r\n  /* border: solid red 1px; */\r\n  float:left;\r\n  font-size: 1.4vw;\r\n  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;\r\n}\r\n\r\n.button-text2 {\r\n  position: absolute;\r\n  left: 0;\r\n  right: 0;\r\n  top: 20%;\r\n  /* border: solid black 1px; */\r\n  padding: 0%;\r\n  font-size: 1.4vw;\r\n  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;\r\n\r\n}\r\n\r\n.button:hover {\r\n  cursor: pointer;\r\n  background-color: var(--lightblue);\r\n  border: solid var(--darkblue) 0.4vw;\r\n}\r\n\r\n.button:focus {\r\n  outline: 0;\r\n  background-color: var(--lightblue);\r\n  border: solid var(--darkblue) 0.4vw;\r\n}\r\n\r\n/* Tablets (portrait and landscape) ----------- */\r\n\r\n@media only screen and (min-width: 400px) and (max-width: 960px) {\r\n  .title {\r\n    height: 7vw;\r\n  }\r\n\r\n  h1 {\r\n    font-size: 5vw;\r\n  }\r\n\r\n  h2 {\r\n    font-size: 5vw;\r\n  }\r\n\r\n  .school {\r\n    width: 48vw;\r\n    height: 48vw;\r\n    margin: 0%;\r\n  }\r\n\r\n  .button1,\r\n  .button2,\r\n  .button3,\r\n  .button4 {\r\n    width: 18vw;\r\n    height: 18vw;\r\n  }\r\n\r\n  .button-text1 {\r\n    top: 50%;\r\n    font-size: 2.3vw;\r\n  }\r\n\r\n  .button-text2 {\r\n    top: 10%;\r\n    font-size: 2.3vw;\r\n  }\r\n}\r\n\r\n/* Smartphones (portrait and landscape) ----------- */\r\n\r\n@media only screen and (max-width: 400px) {\r\n  .title {\r\n    height: 10vw;\r\n  }\r\n\r\n  h1 {\r\n    font-size: 6vw;\r\n  }\r\n\r\n  h2 {\r\n    font-size: 6vw;\r\n  }\r\n\r\n  .school {\r\n    width: 48vw;\r\n    height: 48vw;\r\n    margin: 0;\r\n  }\r\n\r\n  .button1,\r\n  .button2,\r\n  .button3,\r\n  .button4 {\r\n    width: 20vw;\r\n    height: 20vw;\r\n  }\r\n\r\n  .button-text1 {\r\n    top: 50%;\r\n    font-size: 2.6vw;\r\n  }\r\n\r\n  .button-text2 {\r\n    top: 10%;\r\n    font-size: 2.6vw;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLDZCQUE2QjtFQUM3Qix3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsNkJBQXFCO1VBQXJCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLDJCQUEyQjtFQUMzQixXQUFXO0VBQ1gsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGVBQWU7RUFDZiw2QkFBNkI7QUFDL0I7O0FBRUE7Ozs7RUFJRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0VBQ1osK0JBQStCO0VBQy9CLDZCQUE2QjtFQUM3QixtQ0FBbUM7RUFDbkMsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxRQUFRO0VBQ1IsUUFBUTtFQUNSLDJCQUEyQjtFQUMzQixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLCtFQUErRTtBQUNqRjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsUUFBUTtFQUNSLFFBQVE7RUFDUiw2QkFBNkI7RUFDN0IsV0FBVztFQUNYLGdCQUFnQjtFQUNoQiwrRUFBK0U7O0FBRWpGOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtDQUFrQztFQUNsQyxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysa0NBQWtDO0VBQ2xDLG1DQUFtQztBQUNyQzs7QUFFQSxpREFBaUQ7O0FBQ2pEO0VBQ0U7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osVUFBVTtFQUNaOztFQUVBOzs7O0lBSUUsV0FBVztJQUNYLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFFBQVE7SUFDUixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxRQUFRO0lBQ1IsZ0JBQWdCO0VBQ2xCO0FBQ0Y7O0FBRUEscURBQXFEOztBQUNyRDtFQUNFO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFNBQVM7RUFDWDs7RUFFQTs7OztJQUlFLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxRQUFRO0lBQ1IsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsUUFBUTtJQUNSLGdCQUFnQjtFQUNsQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbiB7XHJcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIGhlaWdodDogNXZ3O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcclxuICBib3JkZXItYm90dG9tOiBzb2xpZCB2YXIoLS1kYXJrYmx1ZSkgMnB4O1xyXG59XHJcblxyXG5oMSB7XHJcbiAgZm9udC1zaXplOiAzdnc7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBib2xkO1xyXG59XHJcblxyXG5oMiB7XHJcbiAgZm9udC1zaXplOiAzdnc7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5idXR0b24xIHtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMDAlO1xyXG59XHJcblxyXG4uYnV0dG9uMiB7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwMCU7XHJcbn1cclxuXHJcbi5idXR0b24zIHtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMDAlO1xyXG59XHJcblxyXG4uYnV0dG9uNCB7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwMCU7XHJcbn1cclxuXHJcbi5zY2hvb2xzIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIC8qIGJvcmRlcjogc29saWQgcmVkIDFweDsgKi9cclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDk1dmg7XHJcbiAgcGFkZGluZy1ib3R0b206IDE1dmg7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG59XHJcblxyXG4uc2Nob29sIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDMwdnc7XHJcbiAgbWFyZ2luLWxlZnQ6IDN2dztcclxuICBtYXJnaW4tcmlnaHQ6IDN2dztcclxuICBoZWlnaHQ6IDMwdnc7XHJcbiAgbWFyZ2luLXRvcDogMXZ3O1xyXG4gIC8qIGJvcmRlcjogc29saWQgYmxhY2sgMXB4OyAqL1xyXG59XHJcblxyXG4uYnV0dG9uMSxcclxuLmJ1dHRvbjIsXHJcbi5idXR0b24zLFxyXG4uYnV0dG9uNCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMTJ2dztcclxuICBoZWlnaHQ6IDEydnc7XHJcbiAgbWFyZ2luOiAwLjJ2dyAwLjV2dyAwLjV2dyAwLjV2dztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcclxuICBib3JkZXI6IHNvbGlkIHZhcigtLWRhcmtibHVlKSAwLjR2dztcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5idXR0b24tdGV4dDEge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRvcDogNTAlO1xyXG4gIC8qIGJvcmRlcjogc29saWQgcmVkIDFweDsgKi9cclxuICBmbG9hdDpsZWZ0O1xyXG4gIGZvbnQtc2l6ZTogMS40dnc7XHJcbiAgdGV4dC1zaGFkb3c6IC0xcHggLTFweCAwICMwMDAsIDFweCAtMXB4IDAgIzAwMCwgLTFweCAxcHggMCAjMDAwLCAxcHggMXB4IDAgIzAwMDtcclxufVxyXG5cclxuLmJ1dHRvbi10ZXh0MiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiAyMCU7XHJcbiAgLyogYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7ICovXHJcbiAgcGFkZGluZzogMCU7XHJcbiAgZm9udC1zaXplOiAxLjR2dztcclxuICB0ZXh0LXNoYWRvdzogLTFweCAtMXB4IDAgIzAwMCwgMXB4IC0xcHggMCAjMDAwLCAtMXB4IDFweCAwICMwMDAsIDFweCAxcHggMCAjMDAwO1xyXG5cclxufVxyXG5cclxuLmJ1dHRvbjpob3ZlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0Ymx1ZSk7XHJcbiAgYm9yZGVyOiBzb2xpZCB2YXIoLS1kYXJrYmx1ZSkgMC40dnc7XHJcbn1cclxuXHJcbi5idXR0b246Zm9jdXMge1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRibHVlKTtcclxuICBib3JkZXI6IHNvbGlkIHZhcigtLWRhcmtibHVlKSAwLjR2dztcclxufVxyXG5cclxuLyogVGFibGV0cyAocG9ydHJhaXQgYW5kIGxhbmRzY2FwZSkgLS0tLS0tLS0tLS0gKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MDBweCkgYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XHJcbiAgLnRpdGxlIHtcclxuICAgIGhlaWdodDogN3Z3O1xyXG4gIH1cclxuXHJcbiAgaDEge1xyXG4gICAgZm9udC1zaXplOiA1dnc7XHJcbiAgfVxyXG5cclxuICBoMiB7XHJcbiAgICBmb250LXNpemU6IDV2dztcclxuICB9XHJcblxyXG4gIC5zY2hvb2wge1xyXG4gICAgd2lkdGg6IDQ4dnc7XHJcbiAgICBoZWlnaHQ6IDQ4dnc7XHJcbiAgICBtYXJnaW46IDAlO1xyXG4gIH1cclxuXHJcbiAgLmJ1dHRvbjEsXHJcbiAgLmJ1dHRvbjIsXHJcbiAgLmJ1dHRvbjMsXHJcbiAgLmJ1dHRvbjQge1xyXG4gICAgd2lkdGg6IDE4dnc7XHJcbiAgICBoZWlnaHQ6IDE4dnc7XHJcbiAgfVxyXG5cclxuICAuYnV0dG9uLXRleHQxIHtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgZm9udC1zaXplOiAyLjN2dztcclxuICB9XHJcblxyXG4gIC5idXR0b24tdGV4dDIge1xyXG4gICAgdG9wOiAxMCU7XHJcbiAgICBmb250LXNpemU6IDIuM3Z3O1xyXG4gIH1cclxufVxyXG5cclxuLyogU21hcnRwaG9uZXMgKHBvcnRyYWl0IGFuZCBsYW5kc2NhcGUpIC0tLS0tLS0tLS0tICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcclxuICAudGl0bGUge1xyXG4gICAgaGVpZ2h0OiAxMHZ3O1xyXG4gIH1cclxuXHJcbiAgaDEge1xyXG4gICAgZm9udC1zaXplOiA2dnc7XHJcbiAgfVxyXG5cclxuICBoMiB7XHJcbiAgICBmb250LXNpemU6IDZ2dztcclxuICB9XHJcblxyXG4gIC5zY2hvb2wge1xyXG4gICAgd2lkdGg6IDQ4dnc7XHJcbiAgICBoZWlnaHQ6IDQ4dnc7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG5cclxuICAuYnV0dG9uMSxcclxuICAuYnV0dG9uMixcclxuICAuYnV0dG9uMyxcclxuICAuYnV0dG9uNCB7XHJcbiAgICB3aWR0aDogMjB2dztcclxuICAgIGhlaWdodDogMjB2dztcclxuICB9XHJcblxyXG4gIC5idXR0b24tdGV4dDEge1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBmb250LXNpemU6IDIuNnZ3O1xyXG4gIH1cclxuXHJcbiAgLmJ1dHRvbi10ZXh0MiB7XHJcbiAgICB0b3A6IDEwJTtcclxuICAgIGZvbnQtc2l6ZTogMi42dnc7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(router) {
        this.router = router;
        this.url = './assets/HetNestDriehoek1/doc1.docx';
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.buttonClick = function (school, titel, id) {
        this.router.navigate(['/driehoek/' + school + '/' + id + '/' + titel]);
    };
    HomeComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! raw-loader!./page-not-found.component.html */ "./node_modules/raw-loader/index.js!./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _postIt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../postIt */ "./src/app/postIt.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");





var PostItComponent = /** @class */ (function () {
    function PostItComponent(dialogRef, postIt, sanitizer) {
        this.dialogRef = dialogRef;
        this.postIt = postIt;
        this.sanitizer = sanitizer;
    }
    PostItComponent.prototype.ngOnInit = function () {
        this.titel = this.postIt.titel;
        this.titel = this.titel.replace('-', '');
        this.selectedUrl = this.postIt.urls[0];
    };
    PostItComponent.prototype.getUrl = function () {
        return this.sanitizer.bypassSecurityTrustResourceUrl(this.selectedUrl);
    };
    PostItComponent.prototype.selectUrl = function (url) {
        this.selectedUrl = url;
    };
    PostItComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: _postIt__WEBPACK_IMPORTED_MODULE_3__["PostIt"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] }
    ]; };
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
    return PostItComponent;
}());



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
var PostIt = /** @class */ (function () {
    function PostIt(titel, kleur, urls) {
        this.titel = titel;
        this.kleur = kleur;
        this.urls = urls;
    }
    PostIt.prototype.isGroen = function () {
        return this.kleur === 'groen';
    };
    PostIt.prototype.hasMultipleUrls = function () {
        return this.urls.length > 1;
    };
    PostIt.prototype.hasUrl = function () {
        return this.urls.length !== 0;
    };
    PostIt.ctorParameters = function () { return [
        { type: String },
        { type: String },
        { type: Array }
    ]; };
    return PostIt;
}());



/***/ }),

/***/ "./src/app/pyramid/pyramid.component.css":
/*!***********************************************!*\
  !*** ./src/app/pyramid/pyramid.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\r\n  width: 100%;\r\n  height: 100%;\r\n  max-height: 100%;\r\n  overflow: hidden;\r\n}\r\n\r\n.nav {\r\n  background-color: var(--blue);\r\n  border-bottom: solid var(--darkblue) 2px;\r\n  height: 5vw;\r\n  width: 100%;\r\n  color: white;\r\n}\r\n\r\n.titel {\r\n  width: 70%;\r\n  margin-right: 15%;\r\n  align-self: center;\r\n}\r\n\r\n.backButton {\r\n  width: 15%;\r\n}\r\n\r\nh1 {\r\n  margin-top: 0.5vw;\r\n  font-size: 3vw;\r\n}\r\n\r\n.btn {\r\n  margin-top: 1vw;\r\n  font-size: 1vw;\r\n}\r\n\r\n.body {\r\n  /* width: 100%;\r\n  height: 100%;\r\n  overflow-y: auto;\r\n  border: solid black 1px; */\r\n  overflow-y: scroll;\r\n  max-height: 100%;\r\n  padding-bottom: 20%;\r\n}\r\n\r\n.content {\r\n  background-repeat: no-repeat;\r\n  background-position: top;\r\n  background-size: contain;\r\n  margin-top: 1vh;\r\n  /* border: solid red 1px; */\r\n  width: 100%;\r\n  height: auto;\r\n  display: inline-block;\r\n}\r\n\r\n.top {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-top: 5vw;\r\n  margin-left: 42%;\r\n  margin-right: 42%;\r\n  width: 16%;\r\n  height: 10vw;\r\n  /* border: solid blue 1px; */\r\n  margin-bottom: 0.5vw;\r\n}\r\n\r\n.middle {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 13vw;\r\n  margin-left: 35%;\r\n  margin-right: 35%;\r\n  width: 30%;\r\n  /* border: solid green 1px; */\r\n}\r\n\r\n.bottom {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-top: 0.5vw;\r\n  margin-left: 27%;\r\n  margin-right: 27%;\r\n  width: 46%;\r\n  height: 16vw;\r\n  /* border: solid orange 1px; */\r\n}\r\n\r\np {\r\n  margin-top: 1vw;\r\n  word-wrap: break-word;\r\n  font-size: 0.8vw;\r\n}\r\n\r\n.postit {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 0.3vw;\r\n  margin: 0vw 0.5vw 0vw 0.5vw;\r\n  background-image: url('postIt-note.PNG');\r\n  background-size: cover;\r\n  color: var(--blue);\r\n}\r\n\r\n.postit-normal {\r\n  width: 5vw;\r\n  height: 5vw;\r\n}\r\n\r\n.postit-small {\r\n  width: 4vw;\r\n  height: 4vw;\r\n}\r\n\r\n.postit-small p {\r\n  font-size: 0.7vw;\r\n}\r\n\r\n.postit-extra-small {\r\n  width: 3.5vw;\r\n  height: 3.5vw;\r\n  margin: 0vw 0vw 0vw 0vw;\r\n}\r\n\r\n.postit-extra-small p {\r\n  font-size: 0.6vw;\r\n}\r\n\r\n.postit-url-exists {\r\n  text-decoration: underline;\r\n}\r\n\r\n.postit-url-exists:hover {\r\n  opacity: 75%;\r\n  cursor: pointer !important;\r\n}\r\n\r\n.postit-groen {\r\n  color: green;\r\n}\r\n\r\n.postit:hover {\r\n  cursor: default;\r\n}\r\n\r\n@media only screen and (min-width: 412px) and (max-width: 1025px) {\r\n  h1 {\r\n    margin-top: 1vw;\r\n    font-size: 3vw;\r\n  }\r\n\r\n  .nav {\r\n    height: 7vw;\r\n  }\r\n\r\n  .buttonText {\r\n    display: none;\r\n  }\r\n\r\n  .btn {\r\n    margin: 0;\r\n    margin-top: 2vw;\r\n    padding: 0.5vw;\r\n    font-size: 1.5vw;\r\n  }\r\n\r\n  .btn::after {\r\n    content: \"← Terug\";\r\n  }\r\n\r\n  .top {\r\n    margin-top: 8vw;\r\n    margin-left: 38%;\r\n    margin-right: 38%;\r\n    width: 24%;\r\n    height: 14vw;\r\n  }\r\n\r\n  .middle {\r\n    height: 20vw;\r\n    margin-left: 31%;\r\n    margin-right: 31%;\r\n    width: 38%;\r\n  }\r\n\r\n  .bottom {\r\n    margin-left: 16%;\r\n    margin-right: 16%;\r\n    width: 68%;\r\n    height: 25vw;\r\n  }\r\n\r\n  p {\r\n    margin-top: 2vh;\r\n    font-size: 1.3vw;\r\n  }\r\n\r\n  .postit-normal {\r\n    width: 8vw;\r\n    height: 8vw;\r\n  }\r\n\r\n  .postit-small {\r\n    width: 5vw;\r\n    height: 5vw;\r\n  }\r\n\r\n  .postit-small p {\r\n    font-size: 0.9vw;\r\n  }\r\n\r\n  .postit-extra-small {\r\n    width: 4.5vw;\r\n    height: 4.5vw;\r\n    margin: 0.5vw 0.3vw 0vw 0.3vw;\r\n  }\r\n\r\n  .postit-extra-small p {\r\n    padding-right: 0.2vw;\r\n    padding-left: 0.2vw;\r\n    font-size: 0.9vw;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 411px) {\r\n  .nav {\r\n    height: 10vw;\r\n  }\r\n\r\n  .titel {\r\n    width: 70%;\r\n    margin-right: 15%;\r\n  }\r\n\r\n  .backButton {\r\n    width: 15%;\r\n  }\r\n\r\n  h1 {\r\n    margin-top: 2vw;\r\n    font-size: 3.5vw;\r\n  }\r\n\r\n  .buttonText {\r\n    display: none;\r\n  }\r\n\r\n  .btn {\r\n    margin: 0;\r\n    padding: 0.5vw;\r\n    margin-top: 0.5vw;\r\n    font-size: 2vw;\r\n  }\r\n\r\n  .btn::after {\r\n    content: \"← Terug\";\r\n  }\r\n\r\n  .content {\r\n    background-size: 100vw;\r\n    height: 80vw;\r\n    width: 100vw;\r\n  }\r\n\r\n  .top {\r\n    margin-top: 8vw;\r\n    margin-left: 39%;\r\n    margin-right: 39%;\r\n    width: 22%;\r\n    height: 17vw;\r\n  }\r\n\r\n  .middle {\r\n    margin-left: 30%;\r\n    margin-right: 30%;\r\n    width: 40%;\r\n    height: 22vw;\r\n  }\r\n\r\n  .bottom {\r\n    padding: 1vw;\r\n    margin-left: 15%;\r\n    margin-right: 15%;\r\n    width: 70%;\r\n    height: 26vw;\r\n  }\r\n\r\n  p {\r\n    margin-top: 2vh;\r\n    font-size: 1.4vw;\r\n  }\r\n\r\n  .postit-normal {\r\n    width: 8vw;\r\n    height: 8vw;\r\n  }\r\n\r\n  .postit-small {\r\n    width: 6vw;\r\n    height: 6vw;\r\n  }\r\n\r\n  .postit-small p {\r\n    margin-top: 3vw;\r\n    font-size: 1vw;\r\n  }\r\n\r\n  .postit-extra-small {\r\n    width: 5vw;\r\n    height: 5vw;\r\n    margin: 0vw 0.3vw 0vw 0.3vw;\r\n  }\r\n\r\n  .postit-extra-small p {\r\n    padding-right: 0.5vw;\r\n    padding-left: 0.5vw;\r\n    margin-top: 3vw;\r\n    font-size: 0.9vw;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHlyYW1pZC9weXJhbWlkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0Isd0NBQXdDO0VBQ3hDLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBO0VBQ0U7Ozs0QkFHMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsd0JBQXdCO0VBQ3hCLHdCQUF3QjtFQUN4QixlQUFlO0VBQ2YsMkJBQTJCO0VBQzNCLFdBQVc7RUFDWCxZQUFZO0VBQ1oscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLFVBQVU7RUFDVixZQUFZO0VBQ1osNEJBQTRCO0VBQzVCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLFVBQVU7RUFDVixZQUFZO0VBQ1osOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsMkJBQTJCO0VBQzNCLHdDQUFxRDtFQUNyRCxzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0lBQ2YsY0FBYztFQUNoQjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLFNBQVM7SUFDVCxlQUFlO0lBQ2YsY0FBYztJQUNkLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixVQUFVO0VBQ1o7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsVUFBVTtJQUNWLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFVBQVU7SUFDVixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osYUFBYTtJQUNiLDZCQUE2QjtFQUMvQjs7RUFFQTtJQUNFLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0VBQ2xCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFVBQVU7SUFDVixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsU0FBUztJQUNULGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osWUFBWTtFQUNkOztFQUVBO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsVUFBVTtJQUNWLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFVBQVU7SUFDVixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsY0FBYztFQUNoQjs7RUFFQTtJQUNFLFVBQVU7SUFDVixXQUFXO0lBQ1gsMkJBQTJCO0VBQzdCOztFQUVBO0lBQ0Usb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZ0JBQWdCO0VBQ2xCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9weXJhbWlkL3B5cmFtaWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWF4LWhlaWdodDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4ubmF2IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcclxuICBib3JkZXItYm90dG9tOiBzb2xpZCB2YXIoLS1kYXJrYmx1ZSkgMnB4O1xyXG4gIGhlaWdodDogNXZ3O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnRpdGVsIHtcclxuICB3aWR0aDogNzAlO1xyXG4gIG1hcmdpbi1yaWdodDogMTUlO1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxufVxyXG5cclxuLmJhY2tCdXR0b24ge1xyXG4gIHdpZHRoOiAxNSU7XHJcbn1cclxuXHJcbmgxIHtcclxuICBtYXJnaW4tdG9wOiAwLjV2dztcclxuICBmb250LXNpemU6IDN2dztcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgbWFyZ2luLXRvcDogMXZ3O1xyXG4gIGZvbnQtc2l6ZTogMXZ3O1xyXG59XHJcblxyXG4uYm9keSB7XHJcbiAgLyogd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7ICovXHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgcGFkZGluZy1ib3R0b206IDIwJTtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICBtYXJnaW4tdG9wOiAxdmg7XHJcbiAgLyogYm9yZGVyOiBzb2xpZCByZWQgMXB4OyAqL1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi50b3Age1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogNXZ3O1xyXG4gIG1hcmdpbi1sZWZ0OiA0MiU7XHJcbiAgbWFyZ2luLXJpZ2h0OiA0MiU7XHJcbiAgd2lkdGg6IDE2JTtcclxuICBoZWlnaHQ6IDEwdnc7XHJcbiAgLyogYm9yZGVyOiBzb2xpZCBibHVlIDFweDsgKi9cclxuICBtYXJnaW4tYm90dG9tOiAwLjV2dztcclxufVxyXG5cclxuLm1pZGRsZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDEzdnc7XHJcbiAgbWFyZ2luLWxlZnQ6IDM1JTtcclxuICBtYXJnaW4tcmlnaHQ6IDM1JTtcclxuICB3aWR0aDogMzAlO1xyXG4gIC8qIGJvcmRlcjogc29saWQgZ3JlZW4gMXB4OyAqL1xyXG59XHJcblxyXG4uYm90dG9tIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDAuNXZ3O1xyXG4gIG1hcmdpbi1sZWZ0OiAyNyU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyNyU7XHJcbiAgd2lkdGg6IDQ2JTtcclxuICBoZWlnaHQ6IDE2dnc7XHJcbiAgLyogYm9yZGVyOiBzb2xpZCBvcmFuZ2UgMXB4OyAqL1xyXG59XHJcblxyXG5wIHtcclxuICBtYXJnaW4tdG9wOiAxdnc7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gIGZvbnQtc2l6ZTogMC44dnc7XHJcbn1cclxuXHJcbi5wb3N0aXQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwLjN2dztcclxuICBtYXJnaW46IDB2dyAwLjV2dyAwdncgMC41dnc7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL3Bvc3RJdC1ub3RlLlBOR1wiKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGNvbG9yOiB2YXIoLS1ibHVlKTtcclxufVxyXG5cclxuLnBvc3RpdC1ub3JtYWwge1xyXG4gIHdpZHRoOiA1dnc7XHJcbiAgaGVpZ2h0OiA1dnc7XHJcbn1cclxuXHJcbi5wb3N0aXQtc21hbGwge1xyXG4gIHdpZHRoOiA0dnc7XHJcbiAgaGVpZ2h0OiA0dnc7XHJcbn1cclxuXHJcbi5wb3N0aXQtc21hbGwgcCB7XHJcbiAgZm9udC1zaXplOiAwLjd2dztcclxufVxyXG5cclxuLnBvc3RpdC1leHRyYS1zbWFsbCB7XHJcbiAgd2lkdGg6IDMuNXZ3O1xyXG4gIGhlaWdodDogMy41dnc7XHJcbiAgbWFyZ2luOiAwdncgMHZ3IDB2dyAwdnc7XHJcbn1cclxuXHJcbi5wb3N0aXQtZXh0cmEtc21hbGwgcCB7XHJcbiAgZm9udC1zaXplOiAwLjZ2dztcclxufVxyXG5cclxuLnBvc3RpdC11cmwtZXhpc3RzIHtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuLnBvc3RpdC11cmwtZXhpc3RzOmhvdmVyIHtcclxuICBvcGFjaXR5OiA3NSU7XHJcbiAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wb3N0aXQtZ3JvZW4ge1xyXG4gIGNvbG9yOiBncmVlbjtcclxufVxyXG5cclxuLnBvc3RpdDpob3ZlciB7XHJcbiAgY3Vyc29yOiBkZWZhdWx0O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQxMnB4KSBhbmQgKG1heC13aWR0aDogMTAyNXB4KSB7XHJcbiAgaDEge1xyXG4gICAgbWFyZ2luLXRvcDogMXZ3O1xyXG4gICAgZm9udC1zaXplOiAzdnc7XHJcbiAgfVxyXG5cclxuICAubmF2IHtcclxuICAgIGhlaWdodDogN3Z3O1xyXG4gIH1cclxuXHJcbiAgLmJ1dHRvblRleHQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5idG4ge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgbWFyZ2luLXRvcDogMnZ3O1xyXG4gICAgcGFkZGluZzogMC41dnc7XHJcbiAgICBmb250LXNpemU6IDEuNXZ3O1xyXG4gIH1cclxuXHJcbiAgLmJ0bjo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCLihpAgVGVydWdcIjtcclxuICB9XHJcblxyXG4gIC50b3Age1xyXG4gICAgbWFyZ2luLXRvcDogOHZ3O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDM4JTtcclxuICAgIG1hcmdpbi1yaWdodDogMzglO1xyXG4gICAgd2lkdGg6IDI0JTtcclxuICAgIGhlaWdodDogMTR2dztcclxuICB9XHJcblxyXG4gIC5taWRkbGUge1xyXG4gICAgaGVpZ2h0OiAyMHZ3O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMxJTtcclxuICAgIG1hcmdpbi1yaWdodDogMzElO1xyXG4gICAgd2lkdGg6IDM4JTtcclxuICB9XHJcblxyXG4gIC5ib3R0b20ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE2JTtcclxuICAgIG1hcmdpbi1yaWdodDogMTYlO1xyXG4gICAgd2lkdGg6IDY4JTtcclxuICAgIGhlaWdodDogMjV2dztcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgbWFyZ2luLXRvcDogMnZoO1xyXG4gICAgZm9udC1zaXplOiAxLjN2dztcclxuICB9XHJcblxyXG4gIC5wb3N0aXQtbm9ybWFsIHtcclxuICAgIHdpZHRoOiA4dnc7XHJcbiAgICBoZWlnaHQ6IDh2dztcclxuICB9XHJcblxyXG4gIC5wb3N0aXQtc21hbGwge1xyXG4gICAgd2lkdGg6IDV2dztcclxuICAgIGhlaWdodDogNXZ3O1xyXG4gIH1cclxuXHJcbiAgLnBvc3RpdC1zbWFsbCBwIHtcclxuICAgIGZvbnQtc2l6ZTogMC45dnc7XHJcbiAgfVxyXG5cclxuICAucG9zdGl0LWV4dHJhLXNtYWxsIHtcclxuICAgIHdpZHRoOiA0LjV2dztcclxuICAgIGhlaWdodDogNC41dnc7XHJcbiAgICBtYXJnaW46IDAuNXZ3IDAuM3Z3IDB2dyAwLjN2dztcclxuICB9XHJcblxyXG4gIC5wb3N0aXQtZXh0cmEtc21hbGwgcCB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjJ2dztcclxuICAgIHBhZGRpbmctbGVmdDogMC4ydnc7XHJcbiAgICBmb250LXNpemU6IDAuOXZ3O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MTFweCkge1xyXG4gIC5uYXYge1xyXG4gICAgaGVpZ2h0OiAxMHZ3O1xyXG4gIH1cclxuXHJcbiAgLnRpdGVsIHtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1JTtcclxuICB9XHJcblxyXG4gIC5iYWNrQnV0dG9uIHtcclxuICAgIHdpZHRoOiAxNSU7XHJcbiAgfVxyXG5cclxuICBoMSB7XHJcbiAgICBtYXJnaW4tdG9wOiAydnc7XHJcbiAgICBmb250LXNpemU6IDMuNXZ3O1xyXG4gIH1cclxuXHJcbiAgLmJ1dHRvblRleHQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5idG4ge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMC41dnc7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjV2dztcclxuICAgIGZvbnQtc2l6ZTogMnZ3O1xyXG4gIH1cclxuXHJcbiAgLmJ0bjo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCLihpAgVGVydWdcIjtcclxuICB9XHJcblxyXG4gIC5jb250ZW50IHtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDgwdnc7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgfVxyXG5cclxuICAudG9wIHtcclxuICAgIG1hcmdpbi10b3A6IDh2dztcclxuICAgIG1hcmdpbi1sZWZ0OiAzOSU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDM5JTtcclxuICAgIHdpZHRoOiAyMiU7XHJcbiAgICBoZWlnaHQ6IDE3dnc7XHJcbiAgfVxyXG5cclxuICAubWlkZGxlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMwJTtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBoZWlnaHQ6IDIydnc7XHJcbiAgfVxyXG5cclxuICAuYm90dG9tIHtcclxuICAgIHBhZGRpbmc6IDF2dztcclxuICAgIG1hcmdpbi1sZWZ0OiAxNSU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1JTtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBoZWlnaHQ6IDI2dnc7XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIG1hcmdpbi10b3A6IDJ2aDtcclxuICAgIGZvbnQtc2l6ZTogMS40dnc7XHJcbiAgfVxyXG5cclxuICAucG9zdGl0LW5vcm1hbCB7XHJcbiAgICB3aWR0aDogOHZ3O1xyXG4gICAgaGVpZ2h0OiA4dnc7XHJcbiAgfVxyXG5cclxuICAucG9zdGl0LXNtYWxsIHtcclxuICAgIHdpZHRoOiA2dnc7XHJcbiAgICBoZWlnaHQ6IDZ2dztcclxuICB9XHJcblxyXG4gIC5wb3N0aXQtc21hbGwgcCB7XHJcbiAgICBtYXJnaW4tdG9wOiAzdnc7XHJcbiAgICBmb250LXNpemU6IDF2dztcclxuICB9XHJcblxyXG4gIC5wb3N0aXQtZXh0cmEtc21hbGwge1xyXG4gICAgd2lkdGg6IDV2dztcclxuICAgIGhlaWdodDogNXZ3O1xyXG4gICAgbWFyZ2luOiAwdncgMC4zdncgMHZ3IDAuM3Z3O1xyXG4gIH1cclxuXHJcbiAgLnBvc3RpdC1leHRyYS1zbWFsbCBwIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDAuNXZ3O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwLjV2dztcclxuICAgIG1hcmdpbi10b3A6IDN2dztcclxuICAgIGZvbnQtc2l6ZTogMC45dnc7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _post_it_post_it_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../post-it/post-it.component */ "./src/app/post-it/post-it.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");






var PyramidComponent = /** @class */ (function () {
    function PyramidComponent(dialog, route, dataService) {
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
    PyramidComponent.prototype.ngOnInit = function () {
        this.data = this.dataService.getDataDriehoek(this.school, this.id);
        if (this.data == null) {
            this.noData = true;
        }
        else {
            if (this.data.postItsBottom.length > 21) {
                this.data.postItsBottom.length > 32 ? this.extraSmallPostIts = true : this.smallPostIts = true;
            }
            if (this.data.postItsMiddle.length > 8) {
                this.data.postItsMiddle.length > 16 ? this.extraSmallPostIts = true : this.smallPostIts = true;
            }
            // if (this.data.postItsTop.length > 4) {
            //   this.smallPostIts = true;
            // }
        }
    };
    PyramidComponent.prototype.showPostIt = function (postIt) {
        if (postIt.hasUrl()) {
            var dialogRef = this.dialog.open(_post_it_post_it_component__WEBPACK_IMPORTED_MODULE_3__["PostItComponent"], {
                width: '80vw',
                position: {
                    top: '5vh'
                },
                height: '90vh',
                data: postIt
            });
            dialogRef.afterClosed().subscribe(function (res) {
            });
        }
    };
    PyramidComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] }
    ]; };
    PyramidComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pyramid',
            template: __webpack_require__(/*! raw-loader!./pyramid.component.html */ "./node_modules/raw-loader/index.js!./src/app/pyramid/pyramid.component.html"),
            styles: [__webpack_require__(/*! ./pyramid.component.css */ "./src/app/pyramid/pyramid.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]])
    ], PyramidComponent);
    return PyramidComponent;
}());



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
var PyramidData = /** @class */ (function () {
    function PyramidData(postItsBottom, postItsMiddle, postItsTop) {
        if (postItsBottom === void 0) { postItsBottom = []; }
        if (postItsMiddle === void 0) { postItsMiddle = []; }
        if (postItsTop === void 0) { postItsTop = []; }
        this.postItsBottom = postItsBottom;
        this.postItsMiddle = postItsMiddle;
        this.postItsTop = postItsTop;
    }
    PyramidData.ctorParameters = function () { return [
        { type: Array },
        { type: Array },
        { type: Array }
    ]; };
    return PyramidData;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


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
//# sourceMappingURL=main-es5.js.map