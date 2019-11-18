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

module.exports = "<div class=\"main\">\n  <div class=\"center title\">\n    <h1><strong>Leerlingenbegeleiding IBC</strong></h1>\n  </div>\n  <div class=\"schools\">\n    <div class=\"school\">\n      <h2>Het Nest</h2>\n      <div class=\"button1 button\" (click)=\"buttonClick('Het Nest', 'Psycho-sociaal Funtioneren', 1)\"><span class=\"button-text1\">Psycho-sociaal Funtioneren</span></div>\n      <div class=\"button2 button\" (click)=\"buttonClick('Het Nest', 'Leren en Studeren', 2)\"><span class=\"button-text1\">Leren en Studeren</span></div>\n      <div class=\"button3 button\" (click)=\"buttonClick('Het Nest', 'Schoolloopbaan', 3)\"><span class=\"button-text2\">Schoolloopbaan</span></div>\n      <div class=\"button4 button\" (click)=\"buttonClick('Het Nest', 'Preventieve Gezondheidszorg', 4)\"><span class=\"button-text2\">Preventieve Gezondheidszorg</span></div>\n    </div>\n    <div class=\"school\">\n      <h2>Het Anker</h2>\n      <div class=\"button1 button\" (click)=\"buttonClick('Het Anker', 'Psycho-sociaal Funtioneren', 1)\"><span class=\"button-text1\">Psycho-sociaal Funtioneren</span></div>\n      <div class=\"button2 button\" (click)=\"buttonClick('Het Anker', 'Leren en Studeren', 2)\"><span class=\"button-text1\">Leren en Studeren</span></div>\n      <div class=\"button3 button\" (click)=\"buttonClick('Het Anker', 'Schoolloopbaan', 3)\"><span class=\"button-text2\">Schoolloopbaan</span></div>\n      <div class=\"button4 button\" (click)=\"buttonClick('Het Anker', 'Preventieve Gezondheidszorg', 4)\"><span class=\"button-text2\">Preventieve Gezondheidszorg</span>\n      </div>\n    </div>\n    <div class=\"school\">\n      <h2>De Cirkel</h2>\n      <div class=\"button1 button\" (click)=\"buttonClick('De Cirkel', 'Psycho-sociaal Funtioneren', 1)\"><span class=\"button-text1\">Psycho-sociaal Funtioneren</span></div>\n      <div class=\"button2 button\" (click)=\"buttonClick('De Cirkel', 'Leren en Studeren', 2)\"><span class=\"button-text1\">Leren en Studeren</span></div>\n      <div class=\"button3 button\" (click)=\"buttonClick('De Cirkel', 'Schoolloopbaan', 3)\"><span class=\"button-text2\">Schoolloopbaan</span></div>\n      <div class=\"button4 button\" (click)=\"buttonClick('De Cirkel', 'Preventieve Gezondheidszorg', 4)\"><span class=\"button-text2\">Preventieve Gezondheidszorg</span>\n      </div>\n    </div>\n    <div class=\"school\">\n      <h2>Het Kwadrant</h2>\n      <div class=\"button1 button\" (click)=\"buttonClick('Het Kwadrant', 'Psycho-sociaal Funtioneren', 1)\"><span class=\"button-text1\">Psycho-sociaal Funtioneren</span></div>\n      <div class=\"button2 button\" (click)=\"buttonClick('Het Kwadrant', 'Leren en Studeren', 2)\"><span class=\"button-text1\">Leren en Studeren</span></div>\n      <div class=\"button3 button\" (click)=\"buttonClick('Het Kwadrant', 'Schoolloopbaan', 3)\"><span class=\"button-text2\">Schoolloopbaan</span></div>\n      <div class=\"button4 button\" (click)=\"buttonClick('Het Kwadrant', 'Preventieve Gezondheidszorg', 4)\"><span class=\"button-text2\">Preventieve Gezondheidszorg</span>\n      </div>\n    </div>\n  </div>\n</div>"

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

module.exports = "<div class=\"center main\">\n  <h1>{{postIt.titel}}</h1>\n  <hr />\n  <div class=\"test center\" *ngIf=\"showSpinner\">\n    <mat-spinner class=\"mat-spinner-color\"></mat-spinner>\n  </div>\n  <iframe id=\"loader\" [src]=\"getUrl()\" width='100%' height='100%' frameborder='0'></iframe>\n  <!-- <iframe id='test' (load)=\"if(this.src) document.getElementById('test').style.display = 'none'\" [src]=\"getUrl()\" width='100%' height='100%' frameborder='0'></iframe> -->\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pyramid/pyramid.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pyramid/pyramid.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main center\">\n  <div class=\"nav\">\n    <div class=\"backButton\">\n      <button class='btn btn-primary' routerLink=\"\"><span class=\"buttonText\"> ← Terug naar Home</span></button>\n    </div>\n    <div class=\"center titel\">\n      <h1>{{school}} - {{titel}}</h1>\n    </div>\n  </div>\n  <div class='body'>\n    <div [style.background-image]=\"backgroundImage\" id=\"content\" class=\"content\" *ngIf=\"data\">\n      <div class=\"top\">\n        <div *ngFor=\"let postIt of data.postItsTop\" class=\"postit\" [ngClass]=\"{'postit-groen': postIt.isGroen(), 'postit-small': smallPostIts, 'postit-normal': !smallPostIts}\"\n          (click)=\"showPostIt(postIt)\">\n          <p>{{postIt.titel}}</p>\n        </div>\n      </div>\n      <div class=\"middle\">\n        <div *ngFor=\"let postIt of data.postItsMiddle\" class=\"postit\" [ngClass]=\"{'postit-groen': postIt.isGroen(), 'postit-small': smallPostIts, 'postit-normal': !smallPostIts}\"\n          (click)=\"showPostIt(postIt)\">\n          <p>{{postIt.titel}}</p>\n        </div>\n      </div>\n      <div class=\"bottom\">\n        <div *ngFor=\"let postIt of data.postItsBottom\" class=\"postit\" [ngClass]=\"{'postit-groen': postIt.isGroen(), 'postit-small': smallPostIts, 'postit-normal': !smallPostIts}\"\n          (click)=\"showPostIt(postIt)\">\n          <p>{{postIt.titel}}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

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
            case "Het Nest": return this.getDataHetNest(id);
            case "Het Anker": return this.getDataHetNest(id);
            case "De Cirkel": return this.getDataHetNest(id);
            case "Het Kwadrant": return this.getDataHetNest(id);
        }
    };
    DataService.prototype.getDataHetNest = function (id) {
        //Psycho-Sociaal Functioneren
        var data1 = new _pyramidData__WEBPACK_IMPORTED_MODULE_3__["PyramidData"]([
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]("Kleine klasgroep", "groen", "https://piet-laureyns.github.io/leerlingenbegeleiding/assets/Leerlingenbegeleiding.pdf"),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]("Rust momenten", "groen", "https://piet-laureyns.github.io/leerlingenbegeleiding/assets/Leerlingenbegeleiding.pdf"),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]("Uitstappen", "groen", "https://piet-laureyns.github.io/leerlingenbegeleiding/assets/Leerlingenbegeleiding.pdf"),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]("Praatronde", "groen", "https://piet-laureyns.github.io/leerlingenbegeleiding/assets/Leerlingenbegeleiding.pdf"),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]("Belonings- activiteiten", "groen", "https://piet-laureyns.github.io/leerlingenbegeleiding/assets/Leerlingenbegeleiding.pdf"),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]("Individuele gesprekken", "groen", "https://piet-laureyns.github.io/leerlingenbegeleiding/assets/Leerlingenbegeleiding.pdf"),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]("Huiselijke Sfeer", "groen", "https://piet-laureyns.github.io/leerlingenbegeleiding/assets/Leerlingenbegeleiding.pdf"),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]("Verjaardags- kalender", "groen", "https://piet-laureyns.github.io/leerlingenbegeleiding/assets/Leerlingenbegeleiding.pdf"),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]("Emoties", "groen", "https://piet-laureyns.github.io/leerlingenbegeleiding/assets/Leerlingenbegeleiding.pdf"),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]("Meter/Peter -schap", "blauw", "https://piet-laureyns.github.io/leerlingenbegeleiding/assets/Leerlingenbegeleiding.pdf"),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]("Externe Hulp", "blauw", "https://piet-laureyns.github.io/leerlingenbegeleiding/assets/Leerlingenbegeleiding.pdf")
        ], [
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]("Aangepast Onthaal", "groen", "https://piet-laureyns.github.io/leerlingenbegeleiding/assets/Leerlingenbegeleiding.pdf"),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]("1-1 Begeleiding", "blauw", "https://piet-laureyns.github.io/leerlingenbegeleiding/assets/Leerlingenbegeleiding.pdf")
        ], [
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]("Externe Diensten", "groen", "https://piet-laureyns.github.io/leerlingenbegeleiding/assets/Leerlingenbegeleiding.pdf"),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]("Vertrouwens persoon", "blauw", "https://piet-laureyns.github.io/leerlingenbegeleiding/assets/Leerlingenbegeleiding.pdf"),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]("Tucht procedure", "blauw", "https://piet-laureyns.github.io/leerlingenbegeleiding/assets/Leerlingenbegeleiding.pdf")
        ]);
        //Leren en Studeren
        var data2 = new _pyramidData__WEBPACK_IMPORTED_MODULE_3__["PyramidData"]([ //Bottom
        ], [ //Middle
        ], [ //Top
        ]);
        //Schoolloopbaan
        var data3 = new _pyramidData__WEBPACK_IMPORTED_MODULE_3__["PyramidData"]([ //Bottom
        ], [ //Middle
        ], [ //Top
        ]);
        //Preventieve Gezondheidszorg
        var data4 = new _pyramidData__WEBPACK_IMPORTED_MODULE_3__["PyramidData"]([
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]("Tanden poetsen", "groen", "https://piet-laureyns.github.io/leerlingenbegeleiding/assets/Leerlingenbegeleiding.pdf"),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]("Sportdag", "groen", "https://piet-laureyns.github.io/leerlingenbegeleiding/assets/Leerlingenbegeleiding.pdf"),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]("Onderhoud kledij", "groen", "https://piet-laureyns.github.io/leerlingenbegeleiding/assets/Leerlingenbegeleiding.pdf"),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]("Gezonde voeding", "groen", "https://piet-laureyns.github.io/leerlingenbegeleiding/assets/Leerlingenbegeleiding.pdf"),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]("Dagelijk fruit", "groen", "https://piet-laureyns.github.io/leerlingenbegeleiding/assets/Leerlingenbegeleiding.pdf"),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]("Water drinken", "groen", "https://piet-laureyns.github.io/leerlingenbegeleiding/assets/Leerlingenbegeleiding.pdf"),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]("Drinkfles", "groen", "https://piet-laureyns.github.io/leerlingenbegeleiding/assets/Leerlingenbegeleiding.pdf"),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]("Wandelingen", "groen", "https://piet-laureyns.github.io/leerlingenbegeleiding/assets/Leerlingenbegeleiding.pdf"),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]("Rust momenten", "groen", "https://piet-laureyns.github.io/leerlingenbegeleiding/assets/Leerlingenbegeleiding.pdf"),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]("Zwem lessen", "groen", "https://piet-laureyns.github.io/leerlingenbegeleiding/assets/Leerlingenbegeleiding.pdf"),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]("Toilet bezoek", "groen", "https://piet-laureyns.github.io/leerlingenbegeleiding/assets/Leerlingenbegeleiding.pdf"),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]("Luizen controle", "groen", "https://piet-laureyns.github.io/leerlingenbegeleiding/assets/Leerlingenbegeleiding.pdf"),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]("Zon bescherming", "groen", "https://piet-laureyns.github.io/leerlingenbegeleiding/assets/Leerlingenbegeleiding.pdf"),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]("Seizoens- kledij", "blauw", "https://piet-laureyns.github.io/leerlingenbegeleiding/assets/Leerlingenbegeleiding.pdf"),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]("Voldoende drinken", "blauw", "https://piet-laureyns.github.io/leerlingenbegeleiding/assets/Leerlingenbegeleiding.pdf"),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]("Info tand verzorging", "blauw", "https://piet-laureyns.github.io/leerlingenbegeleiding/assets/Leerlingenbegeleiding.pdf"),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]("WGC", "blauw", "https://piet-laureyns.github.io/leerlingenbegeleiding/assets/Leerlingenbegeleiding.pdf"),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]("Evenwichtige voeding", "blauw", "https://piet-laureyns.github.io/leerlingenbegeleiding/assets/Leerlingenbegeleiding.pdf"),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]("Yoga", "blauw", "https://piet-laureyns.github.io/leerlingenbegeleiding/assets/Leerlingenbegeleiding.pdf"),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]("Beweeg moment 10u30", "blauw", "https://piet-laureyns.github.io/leerlingenbegeleiding/assets/Leerlingenbegeleiding.pdf"),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]("Fluo-vestje", "blauw", "https://piet-laureyns.github.io/leerlingenbegeleiding/assets/Leerlingenbegeleiding.pdf"),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]("Beweeg- parcours", "blauw", "https://piet-laureyns.github.io/leerlingenbegeleiding/assets/Leerlingenbegeleiding.pdf"),
        ], [
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]("Douche momenten", "groen", "https://piet-laureyns.github.io/leerlingenbegeleiding/assets/Leerlingenbegeleiding.pdf"),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]("Ortho- pedische schoenen", "groen", "https://piet-laureyns.github.io/leerlingenbegeleiding/assets/Leerlingenbegeleiding.pdf"),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]("Nagels knippen", "groen", "https://piet-laureyns.github.io/leerlingenbegeleiding/assets/Leerlingenbegeleiding.pdf"),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]("sex", "groen", "https://piet-laureyns.github.io/leerlingenbegeleiding/assets/Leerlingenbegeleiding.pdf"),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]("Luiers", "groen", "https://piet-laureyns.github.io/leerlingenbegeleiding/assets/Leerlingenbegeleiding.pdf"),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]("Eten geven", "groen", "https://piet-laureyns.github.io/leerlingenbegeleiding/assets/Leerlingenbegeleiding.pdf"),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]("Luizen", "groen", "https://piet-laureyns.github.io/leerlingenbegeleiding/assets/Leerlingenbegeleiding.pdf"),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]("Douche onder begeleiding", "blauw", "https://piet-laureyns.github.io/leerlingenbegeleiding/assets/Leerlingenbegeleiding.pdf"),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]("Lichaams- gewicht", "blauw", "https://piet-laureyns.github.io/leerlingenbegeleiding/assets/Leerlingenbegeleiding.pdf"),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]("Alcohol en tabak", "blauw", "https://piet-laureyns.github.io/leerlingenbegeleiding/assets/Leerlingenbegeleiding.pdf"),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]("Dragen van een bril", "blauw", "https://piet-laureyns.github.io/leerlingenbegeleiding/assets/Leerlingenbegeleiding.pdf"),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]("Neus snuiten", "blauw", "https://piet-laureyns.github.io/leerlingenbegeleiding/assets/Leerlingenbegeleiding.pdf"),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]("G-Sportclub zoeken", "blauw", "https://piet-laureyns.github.io/leerlingenbegeleiding/assets/Leerlingenbegeleiding.pdf"),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]("Pilgebruik", "blauw", "https://piet-laureyns.github.io/leerlingenbegeleiding/assets/Leerlingenbegeleiding.pdf"),
            new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]("G-sportclub uitnodigen", "blauw", "https://piet-laureyns.github.io/leerlingenbegeleiding/assets/Leerlingenbegeleiding.pdf"),
        ], [ //Top
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
        return null;
    };
    DataService.prototype.getDataDeCirkel = function (id) {
        return null;
    };
    DataService.prototype.getDataHetKwadrant = function (id) {
        return null;
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

module.exports = ".main{\r\n    overflow-y: hidden;\r\n    width:100%;\r\n    height:100%;\r\n    /* border: solid red 1px; */\r\n    text-align: center;\r\n    justify-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.title{\r\n    color:white;\r\n    background-color: var(--blue);\r\n    border-bottom: solid var(--darkblue) 2px;\r\n}\r\n\r\nh1{\r\n    font-size: 3vw;\r\n    -webkit-text-decoration: bold;\r\n            text-decoration: bold;\r\n}\r\n\r\nh2{\r\n    font-size: 2vw;\r\n    /* border-bottom: solid var(--blue) 2px; */\r\n    width:80%; \r\n    margin-left:10%;\r\n    text-align: center;\r\n}\r\n\r\n.button1 {\r\n    border-top-left-radius: 100%;\r\n}\r\n\r\n.button2 {\r\n    border-top-right-radius: 100%;\r\n}\r\n\r\n.button3 {\r\n    border-bottom-left-radius: 100%;\r\n}\r\n\r\n.button4 {\r\n    border-bottom-right-radius: 100%;\r\n}\r\n\r\n.schools {\r\n    overflow-y: auto;\r\n    display: inline-block;\r\n    /* border:solid green 1px; */\r\n    width:100%;\r\n    height:100%;\r\n}\r\n\r\n.school {\r\n    display: inline-block;\r\n    width:25vw;\r\n    margin-left:5vw;\r\n    margin-right:5vw;\r\n    height:25vw;\r\n    margin-top:1vw;\r\n    /* border: solid black 1px; */\r\n    text-align: center;\r\n    font-size: 0%;\r\n}\r\n\r\n.button1, .button2, .button3, .button4{\r\n    position: relative;\r\n    display: inline-block;\r\n    margin:2%;\r\n    width:10vw;\r\n    height:10vw;\r\n    background-color: var(--blue);\r\n    border: solid var(--darkblue) 4px;\r\n}\r\n\r\n.button-text1{\r\n    position: absolute;\r\n    left:0;\r\n    right:0;\r\n    top:60%;\r\n    /* border: solid red 1px; */\r\n    font-size: 1vw;\r\n    color: white;\r\n}\r\n\r\n.button-text2{\r\n    position: absolute;\r\n    left:0;\r\n    right:0;\r\n    top:20%;\r\n    /* border: solid red 1px; */\r\n    font-size: 1vw;\r\n    color: white;\r\n}\r\n\r\n.button:hover{\r\n    cursor: pointer;\r\n    background-color:var(--lightblue);\r\n    border: solid var(--darkblue) 3px;\r\n}\r\n\r\n.button:focus{\r\n    outline:0;\r\n    background-color:var(--lightblue);\r\n    border: solid var(--darkblue) 3px;\r\n}\r\n\r\n/* Tablets (portrait and landscape) ----------- */\r\n\r\n@media only screen and (min-width: 400px) and (max-width: 960px) {\r\n    h1 {\r\n        font-size: 5vw;\r\n    }\r\n    \r\n    h2 {\r\n        font-size: 3vw;\r\n    }\r\n\r\n    .schools {\r\n        width:100vw;\r\n        height:60vw;\r\n    }\r\n    \r\n    .school {\r\n        width:40vw;\r\n        height:40vw;\r\n        margin: 0%;\r\n    }\r\n\r\n    .button1, .button2, .button3, .button4 {\r\n        margin:1.5%;\r\n        width:15vw;\r\n        height:15vw;\r\n    }\r\n\r\n    .button-text1 {\r\n        top:50%;\r\n        font-size: 1.5vw;\r\n    }\r\n    \r\n    .button-text2 {\r\n        top:20%;\r\n        font-size: 1.5vw;\r\n    }\r\n}\r\n\r\n/* Smartphones (portrait and landscape) ----------- */\r\n\r\n@media only screen and (max-width: 400px) {\r\n    h1 {\r\n        font-size: 6vw;\r\n    }\r\n    \r\n    h2 {\r\n        font-size: 5vw;\r\n    }\r\n\r\n    .schools {\r\n        width:100vw;\r\n        height:75vw;\r\n    }\r\n    \r\n    .school {\r\n        width:45vw;\r\n        height:45vw;\r\n        margin: 0%;\r\n    }\r\n\r\n    .button1, .button2, .button3, .button4 {\r\n        width:20vw;\r\n        height:20vw;\r\n    }\r\n\r\n    .button-text1 {\r\n        top:50%;\r\n        font-size: 2.3vw;\r\n    }\r\n    \r\n    .button-text2 {\r\n        top:20%;\r\n        font-size: 2.3vw;\r\n    }\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7SUFDWCwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsNkJBQTZCO0lBQzdCLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLGNBQWM7SUFDZCw2QkFBcUI7WUFBckIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksY0FBYztJQUNkLDBDQUEwQztJQUMxQyxTQUFTO0lBQ1QsZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsNEJBQTRCO0lBQzVCLFVBQVU7SUFDVixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsVUFBVTtJQUNWLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGNBQWM7SUFDZCw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLFNBQVM7SUFDVCxVQUFVO0lBQ1YsV0FBVztJQUNYLDZCQUE2QjtJQUM3QixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxPQUFPO0lBQ1AsMkJBQTJCO0lBQzNCLGNBQWM7SUFDZCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsT0FBTztJQUNQLDJCQUEyQjtJQUMzQixjQUFjO0lBQ2QsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQ0FBaUM7SUFDakMsaUNBQWlDO0FBQ3JDOztBQUVDO0lBQ0csU0FBUztJQUNULGlDQUFpQztJQUNqQyxpQ0FBaUM7QUFDckM7O0FBRUEsaURBQWlEOztBQUNqRDtJQUNJO1FBQ0ksY0FBYztJQUNsQjs7SUFFQTtRQUNJLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsV0FBVztJQUNmOztJQUVBO1FBQ0ksVUFBVTtRQUNWLFdBQVc7UUFDWCxVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsVUFBVTtRQUNWLFdBQVc7SUFDZjs7SUFFQTtRQUNJLE9BQU87UUFDUCxnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxPQUFPO1FBQ1AsZ0JBQWdCO0lBQ3BCO0FBQ0o7O0FBR0EscURBQXFEOztBQUNyRDtJQUNJO1FBQ0ksY0FBYztJQUNsQjs7SUFFQTtRQUNJLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsV0FBVztJQUNmOztJQUVBO1FBQ0ksVUFBVTtRQUNWLFdBQVc7UUFDWCxVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxVQUFVO1FBQ1YsV0FBVztJQUNmOztJQUVBO1FBQ0ksT0FBTztRQUNQLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLE9BQU87UUFDUCxnQkFBZ0I7SUFDcEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW57XHJcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbiAgICAvKiBib3JkZXI6IHNvbGlkIHJlZCAxcHg7ICovXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnRpdGxle1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcclxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIHZhcigtLWRhcmtibHVlKSAycHg7XHJcbn1cclxuXHJcbmgxe1xyXG4gICAgZm9udC1zaXplOiAzdnc7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IGJvbGQ7XHJcbn1cclxuXHJcbmgye1xyXG4gICAgZm9udC1zaXplOiAydnc7XHJcbiAgICAvKiBib3JkZXItYm90dG9tOiBzb2xpZCB2YXIoLS1ibHVlKSAycHg7ICovXHJcbiAgICB3aWR0aDo4MCU7IFxyXG4gICAgbWFyZ2luLWxlZnQ6MTAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYnV0dG9uMSB7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMDAlO1xyXG59XHJcblxyXG4uYnV0dG9uMiB7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTAwJTtcclxufVxyXG5cclxuLmJ1dHRvbjMge1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTAwJTtcclxufVxyXG5cclxuLmJ1dHRvbjQge1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwMCU7XHJcbn1cclxuXHJcbi5zY2hvb2xzIHtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAvKiBib3JkZXI6c29saWQgZ3JlZW4gMXB4OyAqL1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDoxMDAlO1xyXG59XHJcblxyXG4uc2Nob29sIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOjI1dnc7XHJcbiAgICBtYXJnaW4tbGVmdDo1dnc7XHJcbiAgICBtYXJnaW4tcmlnaHQ6NXZ3O1xyXG4gICAgaGVpZ2h0OjI1dnc7XHJcbiAgICBtYXJnaW4tdG9wOjF2dztcclxuICAgIC8qIGJvcmRlcjogc29saWQgYmxhY2sgMXB4OyAqL1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAwJTtcclxufVxyXG5cclxuLmJ1dHRvbjEsIC5idXR0b24yLCAuYnV0dG9uMywgLmJ1dHRvbjR7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW46MiU7XHJcbiAgICB3aWR0aDoxMHZ3O1xyXG4gICAgaGVpZ2h0OjEwdnc7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcclxuICAgIGJvcmRlcjogc29saWQgdmFyKC0tZGFya2JsdWUpIDRweDtcclxufVxyXG5cclxuLmJ1dHRvbi10ZXh0MXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6MDtcclxuICAgIHJpZ2h0OjA7XHJcbiAgICB0b3A6NjAlO1xyXG4gICAgLyogYm9yZGVyOiBzb2xpZCByZWQgMXB4OyAqL1xyXG4gICAgZm9udC1zaXplOiAxdnc7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5idXR0b24tdGV4dDJ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OjA7XHJcbiAgICByaWdodDowO1xyXG4gICAgdG9wOjIwJTtcclxuICAgIC8qIGJvcmRlcjogc29saWQgcmVkIDFweDsgKi9cclxuICAgIGZvbnQtc2l6ZTogMXZ3O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYnV0dG9uOmhvdmVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1saWdodGJsdWUpO1xyXG4gICAgYm9yZGVyOiBzb2xpZCB2YXIoLS1kYXJrYmx1ZSkgM3B4O1xyXG59XHJcblxyXG4gLmJ1dHRvbjpmb2N1c3tcclxuICAgIG91dGxpbmU6MDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6dmFyKC0tbGlnaHRibHVlKTtcclxuICAgIGJvcmRlcjogc29saWQgdmFyKC0tZGFya2JsdWUpIDNweDtcclxufSBcclxuXHJcbi8qIFRhYmxldHMgKHBvcnRyYWl0IGFuZCBsYW5kc2NhcGUpIC0tLS0tLS0tLS0tICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDAwcHgpIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xyXG4gICAgaDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNXZ3O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBoMiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzdnc7XHJcbiAgICB9XHJcblxyXG4gICAgLnNjaG9vbHMge1xyXG4gICAgICAgIHdpZHRoOjEwMHZ3O1xyXG4gICAgICAgIGhlaWdodDo2MHZ3O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuc2Nob29sIHtcclxuICAgICAgICB3aWR0aDo0MHZ3O1xyXG4gICAgICAgIGhlaWdodDo0MHZ3O1xyXG4gICAgICAgIG1hcmdpbjogMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ1dHRvbjEsIC5idXR0b24yLCAuYnV0dG9uMywgLmJ1dHRvbjQge1xyXG4gICAgICAgIG1hcmdpbjoxLjUlO1xyXG4gICAgICAgIHdpZHRoOjE1dnc7XHJcbiAgICAgICAgaGVpZ2h0OjE1dnc7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ1dHRvbi10ZXh0MSB7XHJcbiAgICAgICAgdG9wOjUwJTtcclxuICAgICAgICBmb250LXNpemU6IDEuNXZ3O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYnV0dG9uLXRleHQyIHtcclxuICAgICAgICB0b3A6MjAlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41dnc7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vKiBTbWFydHBob25lcyAocG9ydHJhaXQgYW5kIGxhbmRzY2FwZSkgLS0tLS0tLS0tLS0gKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xyXG4gICAgaDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNnZ3O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBoMiB7XHJcbiAgICAgICAgZm9udC1zaXplOiA1dnc7XHJcbiAgICB9XHJcblxyXG4gICAgLnNjaG9vbHMge1xyXG4gICAgICAgIHdpZHRoOjEwMHZ3O1xyXG4gICAgICAgIGhlaWdodDo3NXZ3O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuc2Nob29sIHtcclxuICAgICAgICB3aWR0aDo0NXZ3O1xyXG4gICAgICAgIGhlaWdodDo0NXZ3O1xyXG4gICAgICAgIG1hcmdpbjogMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ1dHRvbjEsIC5idXR0b24yLCAuYnV0dG9uMywgLmJ1dHRvbjQge1xyXG4gICAgICAgIHdpZHRoOjIwdnc7XHJcbiAgICAgICAgaGVpZ2h0OjIwdnc7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ1dHRvbi10ZXh0MSB7XHJcbiAgICAgICAgdG9wOjUwJTtcclxuICAgICAgICBmb250LXNpemU6IDIuM3Z3O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYnV0dG9uLXRleHQyIHtcclxuICAgICAgICB0b3A6MjAlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMi4zdnc7XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ== */"

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

module.exports = "h2{\r\n    color: var(--blue);\r\n}\r\n\r\nh2:hover{\r\n    cursor: pointer;\r\n    color: var(--lightblue);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZix1QkFBdUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9wYWdlLW5vdC1mb3VuZC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDJ7XHJcbiAgICBjb2xvcjogdmFyKC0tYmx1ZSk7XHJcbn1cclxuXHJcbmgyOmhvdmVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0Ymx1ZSk7XHJcbn0iXX0= */"

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

module.exports = ".main{\r\n    height: 100%;\r\n    overflow-y: hidden;\r\n}\r\n\r\n.mat-spinner-color::ng-deep circle{\r\n    stroke: var(--blue) !important;\r\n}\r\n\r\n.test{\r\n    display: flex;\r\n    align-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.mat-dialog-content {\r\n    overflow-y: hidden !important;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdC1pdC9wb3N0LWl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakMiLCJmaWxlIjoic3JjL2FwcC9wb3N0LWl0L3Bvc3QtaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWlue1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG59XHJcblxyXG4ubWF0LXNwaW5uZXItY29sb3I6Om5nLWRlZXAgY2lyY2xle1xyXG4gICAgc3Ryb2tlOiB2YXIoLS1ibHVlKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGVzdHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubWF0LWRpYWxvZy1jb250ZW50IHtcclxuICAgIG92ZXJmbG93LXk6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4iXX0= */"

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
        this.showSpinner = false;
    }
    PostItComponent.prototype.ngOnInit = function () {
        console.log(this.getUrl());
    };
    PostItComponent.prototype.getUrl = function () {
        return this.sanitizer.bypassSecurityTrustResourceUrl("https://docs.google.com/viewer?url=" + this.postIt.url + "&embedded=true");
    };
    PostItComponent.prototype.documentLoaded = function () {
        this.showSpinner = false;
        // if(document.getElementById('loader').style.display = 'none'){
        //   this.showSpinner = false;
        // }
        // if(document.getElementById('test').style.display)
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
    function PostIt(titel, kleur, url) {
        this.titel = titel;
        this.kleur = kleur;
        this.url = url;
    }
    PostIt.prototype.isGroen = function () {
        return this.kleur == "groen";
    };
    PostIt.ctorParameters = function () { return [
        { type: String },
        { type: String },
        { type: String }
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

module.exports = ".main{\r\n    width:100%;\r\n    height:100%;\r\n    overflow: hidden;\r\n    /* border: solid red 2px; */\r\n}\r\n\r\n.nav{\r\n    background-color: var(--blue);\r\n    border-bottom: solid  var(--darkblue) 2px;\r\n    height:5vw;\r\n    width:100%;\r\n    color: white;\r\n}\r\n\r\n.titel{\r\n    /* border:solid red 1px; */\r\n    width: 70%;\r\n    margin-right: 15%;\r\n    align-self: center;\r\n    \r\n}\r\n\r\n.backButton{\r\n    /* border:solid red 1px; */\r\n    width: 15%;\r\n}\r\n\r\nh1{\r\n    margin-top: 0.5vw;\r\n    font-size:3vw;\r\n}\r\n\r\n.btn{\r\n    margin-top: 1vw;\r\n    font-size: 1vw;\r\n}\r\n\r\n.body{\r\n    width:100%;\r\n    height:100%;\r\n    overflow-y: auto;\r\n}\r\n\r\n.content { \r\n    margin-top:1vw;\r\n    /* border: solid red 1px; */\r\n    /* background-image: url('./assets/pyramide_blauw.png'); */\r\n    /* background-image: url('./assets/pyramide_blauw.png'); */\r\n    background-repeat: no-repeat;\r\n    background-position: top;\r\n    background-size: 60vw;\r\n    z-index: 1; \r\n    height:60vw;\r\n    width:70vw;\r\n    display: inline-block;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.top{\r\n    margin-top: 5vw;\r\n    display: inline-block;\r\n    margin-left:40%;\r\n    margin-right:40%;\r\n    width:20%;\r\n    height: 10vw;\r\n    /* border: solid blue 1px; */\r\n    margin-bottom: 0.5vw;\r\n}\r\n\r\n.middle{\r\n    /* padding-top:2vw; */\r\n    display: inline-block;\r\n    height: 13vw;\r\n    margin-left:32%;\r\n    margin-right:32%;\r\n    width:36%;\r\n    /* border: solid green 1px; */\r\n}\r\n\r\n.bottom{\r\n    margin-top:0.5vw;\r\n    margin-left:20%;\r\n    margin-right:20%;\r\n    width:60%;\r\n    height: 16vw;\r\n    /* border: solid orange 1px; */\r\n}\r\n\r\np{\r\n    word-wrap: break-word;\r\n    padding-top:0.3vw;\r\n    font-size: 0.9vw;\r\n}\r\n\r\n.postit{\r\n    vertical-align: top;\r\n    display:inline-block;\r\n    margin: 0vw 0.5vw 0vw 0.5vw;\r\n    background-image: url('postIt-note.PNG');\r\n    background-size: cover; \r\n    color: var(--blue);\r\n}\r\n\r\n.postit-small{\r\n    width:4vw;\r\n    height:4vw;\r\n}\r\n\r\n.postit-small p{\r\n    font-size: 0.8vw;\r\n}\r\n\r\n.postit-normal{\r\n    width:5vw;\r\n    height:5vw;\r\n}\r\n\r\n.postit-groen{\r\n    color: green;\r\n}\r\n\r\n.postit:hover{\r\n    opacity: 80%;\r\n    cursor: pointer;\r\n}\r\n\r\n@media only screen and (min-width: 400px) and (max-width: 960px) {\r\n    h1{\r\n        margin-top: 1vw;\r\n        font-size: 3vw;\r\n    }\r\n\r\n    .nav{\r\n        height:7vw;\r\n    }\r\n\r\n    .buttonText{\r\n        display: none;\r\n    }\r\n\r\n    .btn{\r\n        margin:0;\r\n        margin-top: 0.5vw;\r\n        padding:0.5vw;\r\n        font-size: 1.5vw;\r\n    }\r\n\r\n    .btn::after{\r\n        content: '← Terug';\r\n    }\r\n\r\n    .content { \r\n        background-size: 90vw;\r\n        height:70vw;\r\n        width:90vw;\r\n    }\r\n\r\n    .top{\r\n        margin-top: 7vw;\r\n        margin-left:37%;\r\n        margin-right:37%;\r\n        width:26%;\r\n        height: 15vw;\r\n    }\r\n\r\n    .middle{\r\n        height: 20vw;\r\n        margin-left:31%;\r\n        margin-right:31%;\r\n        width:38%;\r\n    }\r\n\r\n    .bottom{\r\n        margin-left:18%;\r\n        margin-right:18%;\r\n        width:64%;\r\n        height: 25vw;\r\n    }\r\n\r\n    p{\r\n        max-width: 8vw;\r\n        padding-top:0.2vw;\r\n        font-size: 1.5vw;\r\n    }\r\n    \r\n    .postit-small{\r\n        width:5vw;\r\n        height:5vw;\r\n    }\r\n\r\n    .postit-small p{\r\n        font-size: 0.9vw;\r\n    }\r\n\r\n    .postit-normal{\r\n        width:8vw;\r\n        height:8vw;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 400px) {\r\n\r\n    .nav{\r\n        height:10vw;\r\n    }\r\n\r\n    .titel{\r\n        width:70%;\r\n        margin-right:15%;\r\n    }\r\n    \r\n    .backButton{\r\n        width:15%;\r\n    }\r\n\r\n    h1{\r\n        margin-top: 2vw;\r\n        font-size: 3.5vw;\r\n    }\r\n\r\n    .buttonText{\r\n        display: none;\r\n    }\r\n\r\n    .btn{\r\n        margin:0;\r\n        padding:0.5vw;\r\n        margin-top: 0.5vw;\r\n        font-size: 2vw;\r\n    }\r\n\r\n    .btn::after{\r\n        content: '← Terug';\r\n    }\r\n        \r\n    .content { \r\n        background-size: 100vw;\r\n        height:80vw;\r\n        width:100vw;\r\n    }\r\n\r\n    .top{\r\n        margin-top: 8vw;\r\n        margin-left:39%;\r\n        margin-right:39%;\r\n        width:22%;\r\n        height: 17vw;\r\n    }\r\n\r\n    .middle{\r\n        margin-left:30%;\r\n        margin-right:30%;\r\n        width:40%;\r\n        height: 22vw;\r\n    \r\n    }\r\n\r\n    .bottom{\r\n        padding:1vw;\r\n        margin-left:15%;\r\n        margin-right:15%;\r\n        width:70%;\r\n        height: 24vw;\r\n    }\r\n\r\n    p{\r\n        max-width:8.5vw;\r\n        padding-top:0.5vw;\r\n        font-size: 1.5vw;\r\n    }\r\n\r\n    .postit-small{\r\n        width:6vw;\r\n        height:6vw;\r\n    }\r\n\r\n    .postit-small p{\r\n        font-size: 1vw;\r\n    }\r\n\r\n    .postit-normal{\r\n        width:8vw;\r\n        height:8vw;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHlyYW1pZC9weXJhbWlkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLGdCQUFnQjtJQUNoQiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IseUNBQXlDO0lBQ3pDLFVBQVU7SUFDVixVQUFVO0lBQ1YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGtCQUFrQjs7QUFFdEI7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksY0FBYztJQUNkLDJCQUEyQjtJQUMzQiwwREFBMEQ7SUFDMUQsMERBQTBEO0lBQzFELDRCQUE0QjtJQUM1Qix3QkFBd0I7SUFDeEIscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVixXQUFXO0lBQ1gsVUFBVTtJQUNWLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCxZQUFZO0lBQ1osNEJBQTRCO0lBQzVCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsU0FBUztJQUNULDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCxZQUFZO0lBQ1osOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLDJCQUEyQjtJQUMzQix3Q0FBcUQ7SUFDckQsc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0k7UUFDSSxlQUFlO1FBQ2YsY0FBYztJQUNsQjs7SUFFQTtRQUNJLFVBQVU7SUFDZDs7SUFFQTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxRQUFRO1FBQ1IsaUJBQWlCO1FBQ2pCLGFBQWE7UUFDYixnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxxQkFBcUI7UUFDckIsV0FBVztRQUNYLFVBQVU7SUFDZDs7SUFFQTtRQUNJLGVBQWU7UUFDZixlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLFNBQVM7UUFDVCxZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksWUFBWTtRQUNaLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsU0FBUztJQUNiOztJQUVBO1FBQ0ksZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixTQUFTO1FBQ1QsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLGNBQWM7UUFDZCxpQkFBaUI7UUFDakIsZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksU0FBUztRQUNULFVBQVU7SUFDZDs7SUFFQTtRQUNJLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLFNBQVM7UUFDVCxVQUFVO0lBQ2Q7QUFDSjs7QUFFQTs7SUFFSTtRQUNJLFdBQVc7SUFDZjs7SUFFQTtRQUNJLFNBQVM7UUFDVCxnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxTQUFTO0lBQ2I7O0lBRUE7UUFDSSxlQUFlO1FBQ2YsZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLFFBQVE7UUFDUixhQUFhO1FBQ2IsaUJBQWlCO1FBQ2pCLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxzQkFBc0I7UUFDdEIsV0FBVztRQUNYLFdBQVc7SUFDZjs7SUFFQTtRQUNJLGVBQWU7UUFDZixlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLFNBQVM7UUFDVCxZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixTQUFTO1FBQ1QsWUFBWTs7SUFFaEI7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixTQUFTO1FBQ1QsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksU0FBUztRQUNULFVBQVU7SUFDZDs7SUFFQTtRQUNJLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxTQUFTO1FBQ1QsVUFBVTtJQUNkO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9weXJhbWlkL3B5cmFtaWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWlue1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDoxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIC8qIGJvcmRlcjogc29saWQgcmVkIDJweDsgKi9cclxufVxyXG5cclxuLm5hdntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgIHZhcigtLWRhcmtibHVlKSAycHg7XHJcbiAgICBoZWlnaHQ6NXZ3O1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnRpdGVse1xyXG4gICAgLyogYm9yZGVyOnNvbGlkIHJlZCAxcHg7ICovXHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNSU7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBcclxufVxyXG5cclxuLmJhY2tCdXR0b257XHJcbiAgICAvKiBib3JkZXI6c29saWQgcmVkIDFweDsgKi9cclxuICAgIHdpZHRoOiAxNSU7XHJcbn1cclxuXHJcbmgxe1xyXG4gICAgbWFyZ2luLXRvcDogMC41dnc7XHJcbiAgICBmb250LXNpemU6M3Z3O1xyXG59XHJcblxyXG4uYnRue1xyXG4gICAgbWFyZ2luLXRvcDogMXZ3O1xyXG4gICAgZm9udC1zaXplOiAxdnc7XHJcbn1cclxuXHJcbi5ib2R5e1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDoxMDAlO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuLmNvbnRlbnQgeyBcclxuICAgIG1hcmdpbi10b3A6MXZ3O1xyXG4gICAgLyogYm9yZGVyOiBzb2xpZCByZWQgMXB4OyAqL1xyXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2Fzc2V0cy9weXJhbWlkZV9ibGF1dy5wbmcnKTsgKi9cclxuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9hc3NldHMvcHlyYW1pZGVfYmxhdXcucG5nJyk7ICovXHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiA2MHZ3O1xyXG4gICAgei1pbmRleDogMTsgXHJcbiAgICBoZWlnaHQ6NjB2dztcclxuICAgIHdpZHRoOjcwdnc7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50b3B7XHJcbiAgICBtYXJnaW4tdG9wOiA1dnc7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDo0MCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6NDAlO1xyXG4gICAgd2lkdGg6MjAlO1xyXG4gICAgaGVpZ2h0OiAxMHZ3O1xyXG4gICAgLyogYm9yZGVyOiBzb2xpZCBibHVlIDFweDsgKi9cclxuICAgIG1hcmdpbi1ib3R0b206IDAuNXZ3O1xyXG59XHJcblxyXG4ubWlkZGxle1xyXG4gICAgLyogcGFkZGluZy10b3A6MnZ3OyAqL1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgaGVpZ2h0OiAxM3Z3O1xyXG4gICAgbWFyZ2luLWxlZnQ6MzIlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OjMyJTtcclxuICAgIHdpZHRoOjM2JTtcclxuICAgIC8qIGJvcmRlcjogc29saWQgZ3JlZW4gMXB4OyAqL1xyXG59XHJcblxyXG4uYm90dG9te1xyXG4gICAgbWFyZ2luLXRvcDowLjV2dztcclxuICAgIG1hcmdpbi1sZWZ0OjIwJTtcclxuICAgIG1hcmdpbi1yaWdodDoyMCU7XHJcbiAgICB3aWR0aDo2MCU7XHJcbiAgICBoZWlnaHQ6IDE2dnc7XHJcbiAgICAvKiBib3JkZXI6IHNvbGlkIG9yYW5nZSAxcHg7ICovXHJcbn1cclxuXHJcbnB7XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICBwYWRkaW5nLXRvcDowLjN2dztcclxuICAgIGZvbnQtc2l6ZTogMC45dnc7XHJcbn1cclxuXHJcbi5wb3N0aXR7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW46IDB2dyAwLjV2dyAwdncgMC41dnc7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9wb3N0SXQtbm90ZS5QTkcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IFxyXG4gICAgY29sb3I6IHZhcigtLWJsdWUpO1xyXG59XHJcblxyXG4ucG9zdGl0LXNtYWxse1xyXG4gICAgd2lkdGg6NHZ3O1xyXG4gICAgaGVpZ2h0OjR2dztcclxufVxyXG5cclxuLnBvc3RpdC1zbWFsbCBwe1xyXG4gICAgZm9udC1zaXplOiAwLjh2dztcclxufVxyXG5cclxuLnBvc3RpdC1ub3JtYWx7XHJcbiAgICB3aWR0aDo1dnc7XHJcbiAgICBoZWlnaHQ6NXZ3O1xyXG59XHJcblxyXG4ucG9zdGl0LWdyb2Vue1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG59XHJcblxyXG4ucG9zdGl0OmhvdmVye1xyXG4gICAgb3BhY2l0eTogODAlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQwMHB4KSBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcclxuICAgIGgxe1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDF2dztcclxuICAgICAgICBmb250LXNpemU6IDN2dztcclxuICAgIH1cclxuXHJcbiAgICAubmF2e1xyXG4gICAgICAgIGhlaWdodDo3dnc7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ1dHRvblRleHR7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAuYnRue1xyXG4gICAgICAgIG1hcmdpbjowO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDAuNXZ3O1xyXG4gICAgICAgIHBhZGRpbmc6MC41dnc7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjV2dztcclxuICAgIH1cclxuXHJcbiAgICAuYnRuOjphZnRlcntcclxuICAgICAgICBjb250ZW50OiAn4oaQIFRlcnVnJztcclxuICAgIH1cclxuXHJcbiAgICAuY29udGVudCB7IFxyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogOTB2dztcclxuICAgICAgICBoZWlnaHQ6NzB2dztcclxuICAgICAgICB3aWR0aDo5MHZ3O1xyXG4gICAgfVxyXG5cclxuICAgIC50b3B7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogN3Z3O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjM3JTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6MzclO1xyXG4gICAgICAgIHdpZHRoOjI2JTtcclxuICAgICAgICBoZWlnaHQ6IDE1dnc7XHJcbiAgICB9XHJcblxyXG4gICAgLm1pZGRsZXtcclxuICAgICAgICBoZWlnaHQ6IDIwdnc7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6MzElO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDozMSU7XHJcbiAgICAgICAgd2lkdGg6MzglO1xyXG4gICAgfVxyXG5cclxuICAgIC5ib3R0b217XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6MTglO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDoxOCU7XHJcbiAgICAgICAgd2lkdGg6NjQlO1xyXG4gICAgICAgIGhlaWdodDogMjV2dztcclxuICAgIH1cclxuXHJcbiAgICBwe1xyXG4gICAgICAgIG1heC13aWR0aDogOHZ3O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOjAuMnZ3O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41dnc7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5wb3N0aXQtc21hbGx7XHJcbiAgICAgICAgd2lkdGg6NXZ3O1xyXG4gICAgICAgIGhlaWdodDo1dnc7XHJcbiAgICB9XHJcblxyXG4gICAgLnBvc3RpdC1zbWFsbCBwe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC45dnc7XHJcbiAgICB9XHJcblxyXG4gICAgLnBvc3RpdC1ub3JtYWx7XHJcbiAgICAgICAgd2lkdGg6OHZ3O1xyXG4gICAgICAgIGhlaWdodDo4dnc7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcclxuXHJcbiAgICAubmF2e1xyXG4gICAgICAgIGhlaWdodDoxMHZ3O1xyXG4gICAgfVxyXG5cclxuICAgIC50aXRlbHtcclxuICAgICAgICB3aWR0aDo3MCU7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OjE1JTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmJhY2tCdXR0b257XHJcbiAgICAgICAgd2lkdGg6MTUlO1xyXG4gICAgfVxyXG5cclxuICAgIGgxe1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDJ2dztcclxuICAgICAgICBmb250LXNpemU6IDMuNXZ3O1xyXG4gICAgfVxyXG5cclxuICAgIC5idXR0b25UZXh0e1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bntcclxuICAgICAgICBtYXJnaW46MDtcclxuICAgICAgICBwYWRkaW5nOjAuNXZ3O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDAuNXZ3O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMnZ3O1xyXG4gICAgfVxyXG5cclxuICAgIC5idG46OmFmdGVye1xyXG4gICAgICAgIGNvbnRlbnQ6ICfihpAgVGVydWcnO1xyXG4gICAgfVxyXG4gICAgICAgIFxyXG4gICAgLmNvbnRlbnQgeyBcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMHZ3O1xyXG4gICAgICAgIGhlaWdodDo4MHZ3O1xyXG4gICAgICAgIHdpZHRoOjEwMHZ3O1xyXG4gICAgfVxyXG5cclxuICAgIC50b3B7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogOHZ3O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjM5JTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6MzklO1xyXG4gICAgICAgIHdpZHRoOjIyJTtcclxuICAgICAgICBoZWlnaHQ6IDE3dnc7XHJcbiAgICB9XHJcblxyXG4gICAgLm1pZGRsZXtcclxuICAgICAgICBtYXJnaW4tbGVmdDozMCU7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OjMwJTtcclxuICAgICAgICB3aWR0aDo0MCU7XHJcbiAgICAgICAgaGVpZ2h0OiAyMnZ3O1xyXG4gICAgXHJcbiAgICB9XHJcblxyXG4gICAgLmJvdHRvbXtcclxuICAgICAgICBwYWRkaW5nOjF2dztcclxuICAgICAgICBtYXJnaW4tbGVmdDoxNSU7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OjE1JTtcclxuICAgICAgICB3aWR0aDo3MCU7XHJcbiAgICAgICAgaGVpZ2h0OiAyNHZ3O1xyXG4gICAgfVxyXG5cclxuICAgIHB7XHJcbiAgICAgICAgbWF4LXdpZHRoOjguNXZ3O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOjAuNXZ3O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41dnc7XHJcbiAgICB9XHJcblxyXG4gICAgLnBvc3RpdC1zbWFsbHtcclxuICAgICAgICB3aWR0aDo2dnc7XHJcbiAgICAgICAgaGVpZ2h0OjZ2dztcclxuICAgIH1cclxuXHJcbiAgICAucG9zdGl0LXNtYWxsIHB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxdnc7XHJcbiAgICB9XHJcblxyXG4gICAgLnBvc3RpdC1ub3JtYWx7XHJcbiAgICAgICAgd2lkdGg6OHZ3O1xyXG4gICAgICAgIGhlaWdodDo4dnc7XHJcbiAgICB9XHJcbn0iXX0= */"

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
        this.school = this.route.snapshot.paramMap.get("school");
        this.id = this.route.snapshot.paramMap.get("id");
        this.titel = this.route.snapshot.paramMap.get("titel");
        this.smallPostIts = false;
        switch (this.id) {
            case '1':
                this.backgroundImage = "url('./assets/pyramide_blauw.png')";
                break;
            case '2':
                this.backgroundImage = "url('./assets/pyramide_groen.png')";
                break;
            case '3':
                this.backgroundImage = "url('./assets/pyramide_geel.png')";
                break;
            case '4':
                this.backgroundImage = "url('./assets/pyramide_rood.png')";
                break;
            default: this.backgroundImage = "url('./assets/pyramide_blauw.png')";
        }
    }
    PyramidComponent.prototype.ngOnInit = function () {
        this.data = this.dataService.getDataDriehoek(this.school, this.id);
        if (this.data.postItsBottom.length > 18) {
            this.smallPostIts = true;
        }
        if (this.data.postItsMiddle.length > 8) {
            this.smallPostIts = true;
        }
        if (this.data.postItsTop.length > 4) {
            this.smallPostIts = true;
        }
    };
    PyramidComponent.prototype.showPostIt = function (postIt) {
        var dialogRef = this.dialog.open(_post_it_post_it_component__WEBPACK_IMPORTED_MODULE_3__["PostItComponent"], {
            width: '75%',
            position: {
                top: '6%'
            },
            height: "90%",
            data: postIt
        });
        dialogRef.afterClosed().subscribe(function (res) {
        });
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