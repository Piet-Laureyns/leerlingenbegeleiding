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

/***/ "./node_modules/raw-loader/index.js!./src/app/driehoek/driehoek.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/driehoek/driehoek.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main center\">\n  <div class=\"nav\">\n    <div class=\"backButton\">\n      <button class='btn btn-primary' routerLink=\"\"><span class=\"buttonText\"> ← Terug naar Home</span></button>\n    </div>\n    <div class=\"center titel\">\n      <h1>{{school}} - {{titel}}</h1>\n    </div>\n  </div>\n  <div id=\"content\" class=\"content\" *ngIf=\"data\">\n    <div class=\"top\">\n      <div *ngFor=\"let postIt of data.postItsTop\" class=\"postit\" [ngClass]=\"{'postit-groen': postIt.isGroen()}\" (click)=\"showPostIt(postIt)\">\n        <p>{{postIt.titel}}</p>\n      </div>\n    </div>\n    <div class=\"middle\">\n      <div *ngFor=\"let postIt of data.postItsMiddle\" class=\"postit\" [ngClass]=\"{'postit-groen': postIt.isGroen()}\" (click)=\"showPostIt(postIt)\">\n        <p>{{postIt.titel}}</p>\n      </div>\n    </div>\n    <div class=\"bottom\">\n      <div *ngFor=\"let postIt of data.postItsBottom\" class=\"postit\" [ngClass]=\"{'postit-groen': postIt.isGroen()}\" (click)=\"showPostIt(postIt)\">\n        <p>{{postIt.titel}}</p>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <div class=\"center title\">\n    <h1><strong>Leerlingenbegeleiding IBC</strong></h1>\n  </div>\n<!-- <object data=\"./assets/HetNestDriehoek1/doc1.docx\" type=\"application/vnd.openxmlformats-officedocument.wordprocessingml.document\" width=\"100%\" height=\"100%\"></object>\n<object data=\"./assets/HetNestDriehoek1/ppt1.pptx\" type=\"application/vnd.openxmlformats-officedocument.presentationml.presentation\" width=\"100%\" height=\"100%\"></object> -->\n<!-- <iframe src=\"./assets/HetNestDriehoek1/doc1.docx\" style=\"width:718px; height:700px;\" frameborder=\"0\"></iframe>\n<iframe src=\"https://docs.google.com/gview?url=./assets/HetNestDriehoek1/doc1.docx\"></iframe> -->\n<!-- <iframe src=\"https://docs.google.com/viewer?url=https://piet-laureyns.github.io/leerlingenbegeleiding/assets/HetNestDriehoek1/pdf1.pdf&embedded=true\" width='100%' height='600px' frameborder='0'></iframe> -->\n<!-- <ngx-doc-viewer [url]=\"'http://localhost:4200/assets/HetNestDriehoek1/doc1.docx'\" [viewer]=\"'office'\" style=\"width:100%;height:50vh;\"></ngx-doc-viewer> -->\n\n  <div class=\"schools\">\n    <div class=\"school\">\n      <h2>Het Nest</h2>\n      <div class=\"button1 button\" (click)=\"buttonClick('Het Nest', 'Psycho-sociaal Funtioneren', 1)\"><span class=\"button-text1\">Psycho-sociaal Funtioneren</span></div>\n      <div class=\"button2 button\" (click)=\"buttonClick('Het Nest', 'Leren en Studeren', 2)\"><span class=\"button-text1\">Leren en Studeren</span></div>\n      <div class=\"button3 button\" (click)=\"buttonClick('Het Nest', 'Schoolloopbaan', 3)\"><span class=\"button-text2\">Schoolloopbaan</span></div>\n      <div class=\"button4 button\" (click)=\"buttonClick('Het Nest', 'Preventieve Gezondheidszorg', 4)\"><span class=\"button-text2\">Preventieve Gezondheidszorg</span></div>\n    </div>\n    <div class=\"school\">\n      <h2>Het Anker</h2>\n      <div class=\"button1 button\" (click)=\"buttonClick('Het Anker', 'Psycho-sociaal Funtioneren', 1)\"><span class=\"button-text1\">Psycho-sociaal Funtioneren</span></div>\n      <div class=\"button2 button\" (click)=\"buttonClick('Het Anker', 'Leren en Studeren', 2)\"><span class=\"button-text1\">Leren en Studeren</span></div>\n      <div class=\"button3 button\" (click)=\"buttonClick('Het Anker', 'Schoolloopbaan', 3)\"><span class=\"button-text2\">Schoolloopbaan</span></div>\n      <div class=\"button4 button\" (click)=\"buttonClick('Het Anker', 'Preventieve Gezondheidszorg', 4)\"><span class=\"button-text2\">Preventieve Gezondheidszorg</span>\n      </div>\n    </div>\n    <div class=\"school\">\n      <h2>De Cirkel</h2>\n      <div class=\"button1 button\" (click)=\"buttonClick('De Cirkel', 'Psycho-sociaal Funtioneren', 1)\"><span class=\"button-text1\">Psycho-sociaal Funtioneren</span></div>\n      <div class=\"button2 button\" (click)=\"buttonClick('De Cirkel', 'Leren en Studeren', 2)\"><span class=\"button-text1\">Leren en Studeren</span></div>\n      <div class=\"button3 button\" (click)=\"buttonClick('De Cirkel', 'Schoolloopbaan', 3)\"><span class=\"button-text2\">Schoolloopbaan</span></div>\n      <div class=\"button4 button\" (click)=\"buttonClick('De Cirkel', 'Preventieve Gezondheidszorg', 4)\"><span class=\"button-text2\">Preventieve Gezondheidszorg</span>\n      </div>\n    </div>\n    <div class=\"school\">\n      <h2>Het Kwadrant</h2>\n      <div class=\"button1 button\" (click)=\"buttonClick('Het Kwadrant', 'Psycho-sociaal Funtioneren', 1)\"><span class=\"button-text1\">Psycho-sociaal Funtioneren</span></div>\n      <div class=\"button2 button\" (click)=\"buttonClick('Het Kwadrant', 'Leren en Studeren', 2)\"><span class=\"button-text1\">Leren en Studeren</span></div>\n      <div class=\"button3 button\" (click)=\"buttonClick('Het Kwadrant', 'Schoolloopbaan', 3)\"><span class=\"button-text2\">Schoolloopbaan</span></div>\n      <div class=\"button4 button\" (click)=\"buttonClick('Het Kwadrant', 'Preventieve Gezondheidszorg', 4)\"><span class=\"button-text2\">Preventieve Gezondheidszorg</span>\n      </div>\n    </div>\n  </div>\n</div>"

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

module.exports = "<div class=\"center main\">\n  <h1>{{postIt.titel}}</h1>\n  <hr />\n  <div class=\"test center\" *ngIf=\"showSpinner\">\n    <mat-spinner class=\"mat-spinner-color\"></mat-spinner>\n  </div>\n  <iframe id=\"loader\" [src]=\"getUrl()\" width='100%' height='100%' frameborder='0'></iframe>\n  <!-- <iframe id='test' (load)=\"if(this.src) document.getElementById('test').style.display = 'none'\" [src]=\"getUrl()\" width='100%' height='100%' frameborder='0'></iframe> -->\n\n</div>"

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
/* harmony import */ var _driehoek_driehoek_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./driehoek/driehoek.component */ "./src/app/driehoek/driehoek.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");














const appRoutes = [
    { path: 'driehoek/:school/:id/:titel', component: _driehoek_driehoek_component__WEBPACK_IMPORTED_MODULE_11__["DriehoekComponent"] },
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
            _driehoek_driehoek_component__WEBPACK_IMPORTED_MODULE_11__["DriehoekComponent"],
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
/* harmony import */ var _driehoekData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./driehoekData */ "./src/app/driehoekData.ts");




let DataService = class DataService {
    constructor() { }
    getDataDriehoek(school, id) {
        // switch(school){
        //   case "Het Nest": return this.getDataHetNest(id);
        //   case "Het Anker": return this.getDataHetAnker(id);
        //   case "De Cirkel": return this.getDataDeCirkel(id);
        //   case "Het Kwadrant": return this.getDataHetKwadrant(id);
        // }
        switch (school) {
            case "Het Nest": return this.getDataHetNest(id);
            case "Het Anker": return this.getDataHetNest(id);
            case "De Cirkel": return this.getDataHetNest(id);
            case "Het Kwadrant": return this.getDataHetNest(id);
        }
    }
    getDataHetNest(id) {
        let data = new _driehoekData__WEBPACK_IMPORTED_MODULE_3__["DriehoekData"]();
        let postIt1 = new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]("Kleine klasgroep", "groen", "https://piet-laureyns.github.io/leerlingenbegeleiding/assets/HetNestDriehoek1/pdf1.pdf");
        let postIt2 = new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]("Rust momenten", "groen", "https://piet-laureyns.github.io/leerlingenbegeleiding/assets/HetNestDriehoek1/doc1.docx");
        let postIt3 = new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]("Uitstappen", "groen", "https://piet-laureyns.github.io/leerlingenbegeleiding/assets/HetNestDriehoek1/ppt1.pptx");
        let postIt4 = new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]("Praatronde", "groen", "https://piet-laureyns.github.io/leerlingenbegeleiding/assets/HetNestDriehoek1/pdf4.pdf");
        let postIt5 = new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]("Belonings- activiteiten", "groen", "https://piet-laureyns.github.io/leerlingenbegeleiding/assets/HetNestDriehoek1/pdf4.pdf");
        let postIt6 = new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]("Individuele gesprekken", "groen", "https://piet-laureyns.github.io/leerlingenbegeleiding/assets/HetNestDriehoek1/pdf4.pdf");
        let postIt7 = new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]("Huiselijke Sfeer", "groen", "https://piet-laureyns.github.io/leerlingenbegeleiding/assets/HetNestDriehoek1/pdf4.pdf");
        let postIt8 = new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]("Verjaardags- kalender", "groen", "https://piet-laureyns.github.io/leerlingenbegeleiding/assets/HetNestDriehoek1/pdf4.pdf");
        let postIt9 = new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]("Emoties", "groen", "https://piet-laureyns.github.io/leerlingenbegeleiding/assets/HetNestDriehoek1/pdf4.pdf");
        let postIt10 = new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]("Meter/Peter -schap", "blauw", "https://piet-laureyns.github.io/leerlingenbegeleiding/assets/HetNestDriehoek1/pdf4.pdf");
        let postIt11 = new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]("Externe Hulp", "blauw", "https://piet-laureyns.github.io/leerlingenbegeleiding/assets/HetNestDriehoek1/pdf4.pdf");
        let postIt13 = new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]("Aangepast Onthaal", "groen", "https://piet-laureyns.github.io/leerlingenbegeleiding/assets/HetNestDriehoek1/pdf4.pdf");
        let postIt14 = new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]("1-1 Begeleiding", "blauw", "https://piet-laureyns.github.io/leerlingenbegeleiding/assets/HetNestDriehoek1/pdf4.pdf");
        let postIt15 = new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]("Externe Diensten", "groen", "https://piet-laureyns.github.io/leerlingenbegeleiding/assets/HetNestDriehoek1/pdf4.pdf");
        let postIt16 = new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]("Vertrouwens persoon", "blauw", "https://piet-laureyns.github.io/leerlingenbegeleiding/assets/HetNestDriehoek1/pdf4.pdf");
        let postIt17 = new _postIt__WEBPACK_IMPORTED_MODULE_2__["PostIt"]("Tucht procedure", "blauw", "https://piet-laureyns.github.io/leerlingenbegeleiding/assets/HetNestDriehoek1/pdf4.pdf");
        switch (id) {
            case '1':
                {
                    data.postItsBottom.push(postIt1);
                    data.postItsBottom.push(postIt2);
                    data.postItsBottom.push(postIt3);
                    data.postItsBottom.push(postIt4);
                    data.postItsBottom.push(postIt5);
                    data.postItsBottom.push(postIt6);
                    data.postItsBottom.push(postIt7);
                    data.postItsBottom.push(postIt8);
                    data.postItsBottom.push(postIt9);
                    data.postItsBottom.push(postIt10);
                    data.postItsBottom.push(postIt11);
                    data.postItsMiddle.push(postIt13);
                    data.postItsMiddle.push(postIt14);
                    data.postItsTop.push(postIt15);
                    data.postItsTop.push(postIt16);
                    data.postItsTop.push(postIt17);
                }
                ;
                break;
            case '2':
                {
                    data.postItsBottom.push(postIt1);
                    data.postItsBottom.push(postIt1);
                    data.postItsBottom.push(postIt1);
                    data.postItsMiddle.push(postIt2);
                    data.postItsMiddle.push(postIt2);
                    data.postItsMiddle.push(postIt3);
                    data.postItsTop.push(postIt1);
                    data.postItsTop.push(postIt2);
                }
                ;
                break;
            case '3':
                {
                    data.postItsBottom.push(postIt1);
                    data.postItsBottom.push(postIt1);
                    data.postItsBottom.push(postIt2);
                    data.postItsBottom.push(postIt2);
                    data.postItsBottom.push(postIt3);
                    data.postItsBottom.push(postIt3);
                    data.postItsBottom.push(postIt4);
                    data.postItsBottom.push(postIt4);
                    data.postItsBottom.push(postIt1);
                    data.postItsMiddle.push(postIt2);
                    data.postItsMiddle.push(postIt4);
                    data.postItsMiddle.push(postIt4);
                    data.postItsMiddle.push(postIt4);
                    data.postItsMiddle.push(postIt4);
                    data.postItsTop.push(postIt1);
                }
                ;
                break;
            case '4':
                {
                    data.postItsBottom.push(postIt1);
                    data.postItsMiddle.push(postIt2);
                    data.postItsTop.push(postIt2);
                }
                ;
                break;
        }
        return data;
    }
    getDataHetAnker(id) {
        return null;
    }
    getDataDeCirkel(id) {
        return null;
    }
    getDataHetKwadrant(id) {
        return null;
    }
};
DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], DataService);



/***/ }),

/***/ "./src/app/driehoek/driehoek.component.css":
/*!*************************************************!*\
  !*** ./src/app/driehoek/driehoek.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main{\r\n    width:100%;\r\n    height:100%;\r\n    /* border: solid red 2px; */\r\n}\r\n\r\n.nav{\r\n    background-color: var(--blue);\r\n    border-bottom: solid  var(--darkblue) 2px;\r\n    height:5vw;\r\n    width:100%;\r\n    color: white;\r\n}\r\n\r\n.titel{\r\n    /* border:solid red 1px; */\r\n    width: 70%;\r\n    margin-right: 15%;\r\n    align-self: center;\r\n    \r\n}\r\n\r\n.backButton{\r\n    /* border:solid red 1px; */\r\n    width: 15%;\r\n}\r\n\r\nh1{\r\n    margin-top: 0.5vw;\r\n    font-size:3vw;\r\n}\r\n\r\n.btn{\r\n    margin-top: 1vw;\r\n    font-size: 1vw;\r\n}\r\n\r\n.content { \r\n    margin-top:1vw;\r\n    /* border: solid red 1px; */\r\n    background-image: url('pyramide_blauw.png');\r\n    background-repeat: no-repeat;\r\n    background-position: top;\r\n    background-size: 60vw;\r\n    z-index: 1; \r\n    height:45vw;\r\n    width:70vw;\r\n    display: inline-block;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.top{\r\n    margin-top: 5vw;\r\n    display: inline-block;\r\n    margin-left:40%;\r\n    margin-right:40%;\r\n    width:20%;\r\n    height: 10vw;\r\n    /* border: solid blue 1px; */\r\n    margin-bottom: 0.5vw;\r\n}\r\n\r\n.middle{\r\n    padding-top:2vw;\r\n    display: inline-block;\r\n    height: 13vw;\r\n    margin-left:33%;\r\n    margin-right:33%;\r\n    width:34%;\r\n    /* border: solid green 1px; */\r\n}\r\n\r\n.bottom{\r\n    margin-top:1vw;\r\n    margin-left:22%;\r\n    margin-right:22%;\r\n    width:56%;\r\n    height: 13vw;\r\n    /* border: solid orange 1px; */\r\n}\r\n\r\np{\r\n    word-wrap: break-word;\r\n    max-width: 5vw;\r\n    padding-top:0.3vw;\r\n    font-size: 0.9vw;\r\n}\r\n\r\n.postit{\r\n    vertical-align: top;\r\n    display:inline-block;\r\n    margin: 0.5vw;\r\n    width:5vw;\r\n    height:5vw;\r\n    background-image: url('postIt-note.PNG');\r\n    background-size: cover; \r\n    color: var(--blue);\r\n}\r\n\r\n.postit-groen{\r\n    color: green;\r\n}\r\n\r\n.postit:hover{\r\n    opacity: 80%;\r\n    cursor: pointer;\r\n}\r\n\r\n@media only screen and (min-width: 400px) and (max-width: 960px) {\r\n    h1{\r\n        margin-top: 1vw;\r\n        font-size: 3vw;\r\n    }\r\n\r\n    .nav{\r\n        height:7vw;\r\n    }\r\n\r\n    .buttonText{\r\n        display: none;\r\n    }\r\n\r\n    .btn{\r\n        margin:0;\r\n        margin-top: 0.5vw;\r\n        padding:0.5vw;\r\n        font-size: 1.5vw;\r\n    }\r\n\r\n    .btn::after{\r\n        content: '← Terug';\r\n    }\r\n\r\n    .content { \r\n        background-size: 90vw;\r\n        height:70vw;\r\n        width:90vw;\r\n    }\r\n\r\n    .top{\r\n        margin-top: 7vw;\r\n        margin-left:37%;\r\n        margin-right:37%;\r\n        width:26%;\r\n        height: 15vw;\r\n    }\r\n\r\n    .middle{\r\n        height: 20vw;\r\n        margin-left:31%;\r\n        margin-right:31%;\r\n        width:38%;\r\n    }\r\n\r\n    .bottom{\r\n        margin-left:18%;\r\n        margin-right:18%;\r\n        width:64%;\r\n        height: 22vw;\r\n    }\r\n\r\n    p{\r\n        max-width: 8vw;\r\n        padding-top:0.2vw;\r\n        font-size: 1.5vw;\r\n    }\r\n\r\n    .postit{\r\n        margin: 0.5vw;\r\n        width:8vw;\r\n        height:8vw;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 400px) {\r\n\r\n    .nav{\r\n        height:10vw;\r\n    }\r\n\r\n    .titel{\r\n        width:70%;\r\n        margin-right:15%;\r\n    }\r\n    \r\n    .backButton{\r\n        width:15%;\r\n    }\r\n\r\n    h1{\r\n        margin-top: 2vw;\r\n        font-size: 4vw;\r\n    }\r\n\r\n    .buttonText{\r\n        display: none;\r\n    }\r\n\r\n    .btn{\r\n        margin:0;\r\n        padding:0.5vw;\r\n        margin-top: 0.5vw;\r\n        font-size: 2vw;\r\n    }\r\n\r\n    .btn::after{\r\n        content: '← Terug';\r\n    }\r\n        \r\n    .content { \r\n        background-size: 100vw;\r\n        height:80vw;\r\n        width:100vw;\r\n    }\r\n\r\n    .top{\r\n        margin-top: 8vw;\r\n        margin-left:39%;\r\n        margin-right:39%;\r\n        width:22%;\r\n        height: 17vw;\r\n    }\r\n\r\n    .middle{\r\n        margin-left:30%;\r\n        margin-right:30%;\r\n        width:40%;\r\n        height: 22vw;\r\n    \r\n    }\r\n\r\n    .bottom{\r\n        padding:1vw;\r\n        margin-left:13%;\r\n        margin-right:13%;\r\n        width:74%;\r\n        height: 24vw;\r\n    }\r\n\r\n    p{\r\n        max-width:8.5vw;\r\n        padding-top:0.5vw;\r\n        font-size: 1.5vw;\r\n    }\r\n\r\n    .postit{\r\n        margin: 0.5vw;\r\n        width:8vw;\r\n        height:8vw;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZHJpZWhvZWsvZHJpZWhvZWsuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLHlDQUF5QztJQUN6QyxVQUFVO0lBQ1YsVUFBVTtJQUNWLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixrQkFBa0I7O0FBRXRCOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsMkJBQTJCO0lBQzNCLDJDQUF3RDtJQUN4RCw0QkFBNEI7SUFDNUIsd0JBQXdCO0lBQ3hCLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1YsV0FBVztJQUNYLFVBQVU7SUFDVixxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QsWUFBWTtJQUNaLDRCQUE0QjtJQUM1QixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QsWUFBWTtJQUNaLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysd0NBQXFEO0lBQ3JELHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSTtRQUNJLGVBQWU7UUFDZixjQUFjO0lBQ2xCOztJQUVBO1FBQ0ksVUFBVTtJQUNkOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLFFBQVE7UUFDUixpQkFBaUI7UUFDakIsYUFBYTtRQUNiLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLHFCQUFxQjtRQUNyQixXQUFXO1FBQ1gsVUFBVTtJQUNkOztJQUVBO1FBQ0ksZUFBZTtRQUNmLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsU0FBUztRQUNULFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixTQUFTO0lBQ2I7O0lBRUE7UUFDSSxlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLFNBQVM7UUFDVCxZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksY0FBYztRQUNkLGlCQUFpQjtRQUNqQixnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxhQUFhO1FBQ2IsU0FBUztRQUNULFVBQVU7SUFDZDtBQUNKOztBQUVBOztJQUVJO1FBQ0ksV0FBVztJQUNmOztJQUVBO1FBQ0ksU0FBUztRQUNULGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLFNBQVM7SUFDYjs7SUFFQTtRQUNJLGVBQWU7UUFDZixjQUFjO0lBQ2xCOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLFFBQVE7UUFDUixhQUFhO1FBQ2IsaUJBQWlCO1FBQ2pCLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxzQkFBc0I7UUFDdEIsV0FBVztRQUNYLFdBQVc7SUFDZjs7SUFFQTtRQUNJLGVBQWU7UUFDZixlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLFNBQVM7UUFDVCxZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixTQUFTO1FBQ1QsWUFBWTs7SUFFaEI7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixTQUFTO1FBQ1QsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksYUFBYTtRQUNiLFNBQVM7UUFDVCxVQUFVO0lBQ2Q7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2RyaWVob2VrL2RyaWVob2VrLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbntcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxuICAgIC8qIGJvcmRlcjogc29saWQgcmVkIDJweDsgKi9cclxufVxyXG5cclxuLm5hdntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgIHZhcigtLWRhcmtibHVlKSAycHg7XHJcbiAgICBoZWlnaHQ6NXZ3O1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnRpdGVse1xyXG4gICAgLyogYm9yZGVyOnNvbGlkIHJlZCAxcHg7ICovXHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNSU7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBcclxufVxyXG5cclxuLmJhY2tCdXR0b257XHJcbiAgICAvKiBib3JkZXI6c29saWQgcmVkIDFweDsgKi9cclxuICAgIHdpZHRoOiAxNSU7XHJcbn1cclxuXHJcbmgxe1xyXG4gICAgbWFyZ2luLXRvcDogMC41dnc7XHJcbiAgICBmb250LXNpemU6M3Z3O1xyXG59XHJcblxyXG4uYnRue1xyXG4gICAgbWFyZ2luLXRvcDogMXZ3O1xyXG4gICAgZm9udC1zaXplOiAxdnc7XHJcbn1cclxuXHJcbi5jb250ZW50IHsgXHJcbiAgICBtYXJnaW4tdG9wOjF2dztcclxuICAgIC8qIGJvcmRlcjogc29saWQgcmVkIDFweDsgKi9cclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL3B5cmFtaWRlX2JsYXV3LnBuZycpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogNjB2dztcclxuICAgIHotaW5kZXg6IDE7IFxyXG4gICAgaGVpZ2h0OjQ1dnc7XHJcbiAgICB3aWR0aDo3MHZ3O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4udG9we1xyXG4gICAgbWFyZ2luLXRvcDogNXZ3O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6NDAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OjQwJTtcclxuICAgIHdpZHRoOjIwJTtcclxuICAgIGhlaWdodDogMTB2dztcclxuICAgIC8qIGJvcmRlcjogc29saWQgYmx1ZSAxcHg7ICovXHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjV2dztcclxufVxyXG5cclxuLm1pZGRsZXtcclxuICAgIHBhZGRpbmctdG9wOjJ2dztcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGhlaWdodDogMTN2dztcclxuICAgIG1hcmdpbi1sZWZ0OjMzJTtcclxuICAgIG1hcmdpbi1yaWdodDozMyU7XHJcbiAgICB3aWR0aDozNCU7XHJcbiAgICAvKiBib3JkZXI6IHNvbGlkIGdyZWVuIDFweDsgKi9cclxufVxyXG5cclxuLmJvdHRvbXtcclxuICAgIG1hcmdpbi10b3A6MXZ3O1xyXG4gICAgbWFyZ2luLWxlZnQ6MjIlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OjIyJTtcclxuICAgIHdpZHRoOjU2JTtcclxuICAgIGhlaWdodDogMTN2dztcclxuICAgIC8qIGJvcmRlcjogc29saWQgb3JhbmdlIDFweDsgKi9cclxufVxyXG5cclxucHtcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICAgIG1heC13aWR0aDogNXZ3O1xyXG4gICAgcGFkZGluZy10b3A6MC4zdnc7XHJcbiAgICBmb250LXNpemU6IDAuOXZ3O1xyXG59XHJcblxyXG4ucG9zdGl0e1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luOiAwLjV2dztcclxuICAgIHdpZHRoOjV2dztcclxuICAgIGhlaWdodDo1dnc7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9wb3N0SXQtbm90ZS5QTkcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IFxyXG4gICAgY29sb3I6IHZhcigtLWJsdWUpO1xyXG59XHJcblxyXG4ucG9zdGl0LWdyb2Vue1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG59XHJcblxyXG4ucG9zdGl0OmhvdmVye1xyXG4gICAgb3BhY2l0eTogODAlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQwMHB4KSBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcclxuICAgIGgxe1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDF2dztcclxuICAgICAgICBmb250LXNpemU6IDN2dztcclxuICAgIH1cclxuXHJcbiAgICAubmF2e1xyXG4gICAgICAgIGhlaWdodDo3dnc7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ1dHRvblRleHR7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAuYnRue1xyXG4gICAgICAgIG1hcmdpbjowO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDAuNXZ3O1xyXG4gICAgICAgIHBhZGRpbmc6MC41dnc7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjV2dztcclxuICAgIH1cclxuXHJcbiAgICAuYnRuOjphZnRlcntcclxuICAgICAgICBjb250ZW50OiAn4oaQIFRlcnVnJztcclxuICAgIH1cclxuXHJcbiAgICAuY29udGVudCB7IFxyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogOTB2dztcclxuICAgICAgICBoZWlnaHQ6NzB2dztcclxuICAgICAgICB3aWR0aDo5MHZ3O1xyXG4gICAgfVxyXG5cclxuICAgIC50b3B7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogN3Z3O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjM3JTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6MzclO1xyXG4gICAgICAgIHdpZHRoOjI2JTtcclxuICAgICAgICBoZWlnaHQ6IDE1dnc7XHJcbiAgICB9XHJcblxyXG4gICAgLm1pZGRsZXtcclxuICAgICAgICBoZWlnaHQ6IDIwdnc7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6MzElO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDozMSU7XHJcbiAgICAgICAgd2lkdGg6MzglO1xyXG4gICAgfVxyXG5cclxuICAgIC5ib3R0b217XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6MTglO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDoxOCU7XHJcbiAgICAgICAgd2lkdGg6NjQlO1xyXG4gICAgICAgIGhlaWdodDogMjJ2dztcclxuICAgIH1cclxuXHJcbiAgICBwe1xyXG4gICAgICAgIG1heC13aWR0aDogOHZ3O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOjAuMnZ3O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41dnc7XHJcbiAgICB9XHJcblxyXG4gICAgLnBvc3RpdHtcclxuICAgICAgICBtYXJnaW46IDAuNXZ3O1xyXG4gICAgICAgIHdpZHRoOjh2dztcclxuICAgICAgICBoZWlnaHQ6OHZ3O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XHJcblxyXG4gICAgLm5hdntcclxuICAgICAgICBoZWlnaHQ6MTB2dztcclxuICAgIH1cclxuXHJcbiAgICAudGl0ZWx7XHJcbiAgICAgICAgd2lkdGg6NzAlO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDoxNSU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5iYWNrQnV0dG9ue1xyXG4gICAgICAgIHdpZHRoOjE1JTtcclxuICAgIH1cclxuXHJcbiAgICBoMXtcclxuICAgICAgICBtYXJnaW4tdG9wOiAydnc7XHJcbiAgICAgICAgZm9udC1zaXplOiA0dnc7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ1dHRvblRleHR7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAuYnRue1xyXG4gICAgICAgIG1hcmdpbjowO1xyXG4gICAgICAgIHBhZGRpbmc6MC41dnc7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMC41dnc7XHJcbiAgICAgICAgZm9udC1zaXplOiAydnc7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bjo6YWZ0ZXJ7XHJcbiAgICAgICAgY29udGVudDogJ+KGkCBUZXJ1Zyc7XHJcbiAgICB9XHJcbiAgICAgICAgXHJcbiAgICAuY29udGVudCB7IFxyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwdnc7XHJcbiAgICAgICAgaGVpZ2h0Ojgwdnc7XHJcbiAgICAgICAgd2lkdGg6MTAwdnc7XHJcbiAgICB9XHJcblxyXG4gICAgLnRvcHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA4dnc7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6MzklO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDozOSU7XHJcbiAgICAgICAgd2lkdGg6MjIlO1xyXG4gICAgICAgIGhlaWdodDogMTd2dztcclxuICAgIH1cclxuXHJcbiAgICAubWlkZGxle1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjMwJTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6MzAlO1xyXG4gICAgICAgIHdpZHRoOjQwJTtcclxuICAgICAgICBoZWlnaHQ6IDIydnc7XHJcbiAgICBcclxuICAgIH1cclxuXHJcbiAgICAuYm90dG9te1xyXG4gICAgICAgIHBhZGRpbmc6MXZ3O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjEzJTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6MTMlO1xyXG4gICAgICAgIHdpZHRoOjc0JTtcclxuICAgICAgICBoZWlnaHQ6IDI0dnc7XHJcbiAgICB9XHJcblxyXG4gICAgcHtcclxuICAgICAgICBtYXgtd2lkdGg6OC41dnc7XHJcbiAgICAgICAgcGFkZGluZy10b3A6MC41dnc7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjV2dztcclxuICAgIH1cclxuXHJcbiAgICAucG9zdGl0e1xyXG4gICAgICAgIG1hcmdpbjogMC41dnc7XHJcbiAgICAgICAgd2lkdGg6OHZ3O1xyXG4gICAgICAgIGhlaWdodDo4dnc7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/driehoek/driehoek.component.ts":
/*!************************************************!*\
  !*** ./src/app/driehoek/driehoek.component.ts ***!
  \************************************************/
/*! exports provided: DriehoekComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriehoekComponent", function() { return DriehoekComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _post_it_post_it_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../post-it/post-it.component */ "./src/app/post-it/post-it.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");






let DriehoekComponent = class DriehoekComponent {
    constructor(dialog, route, dataService) {
        this.dialog = dialog;
        this.route = route;
        this.dataService = dataService;
        this.school = this.route.snapshot.paramMap.get("school");
        this.id = this.route.snapshot.paramMap.get("id");
        this.titel = this.route.snapshot.paramMap.get("titel");
    }
    ngOnInit() {
        this.data = this.dataService.getDataDriehoek(this.school, this.id);
        // let element = document.getElementById('content');
        // switch(this.id){
        //   case '1':element.style.backgroundImage = '../../assets/driehoek_blauw.png';break;
        //   case '2':element.style.backgroundImage = '../../assets/driehoek_groen.png';break;
        //   case '3':element.style.backgroundImage = '../../assets/driehoek_geel.png';break;
        //   case '4':element.style.backgroundImage = '../../assets/driehoek_rood.png';break;
        // }
    }
    showPostIt(postIt) {
        const dialogRef = this.dialog.open(_post_it_post_it_component__WEBPACK_IMPORTED_MODULE_3__["PostItComponent"], {
            width: '75%',
            height: '75%',
            data: postIt
        });
        dialogRef.afterClosed().subscribe((res) => {
        });
    }
};
DriehoekComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] }
];
DriehoekComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-driehoek',
        template: __webpack_require__(/*! raw-loader!./driehoek.component.html */ "./node_modules/raw-loader/index.js!./src/app/driehoek/driehoek.component.html"),
        styles: [__webpack_require__(/*! ./driehoek.component.css */ "./src/app/driehoek/driehoek.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]])
], DriehoekComponent);



/***/ }),

/***/ "./src/app/driehoekData.ts":
/*!*********************************!*\
  !*** ./src/app/driehoekData.ts ***!
  \*********************************/
/*! exports provided: DriehoekData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriehoekData", function() { return DriehoekData; });
class DriehoekData {
    constructor(postItsTop = [], postItsMiddle = [], postItsBottom = []) {
        this.postItsTop = postItsTop;
        this.postItsMiddle = postItsMiddle;
        this.postItsBottom = postItsBottom;
    }
}
DriehoekData.ctorParameters = () => [
    { type: Array },
    { type: Array },
    { type: Array }
];


/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main{\r\n    width:100%;\r\n    height:100%;\r\n    /* border: solid red 1px; */\r\n    text-align: center;\r\n    justify-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.title{\r\n    color:white;\r\n    background-color: var(--blue);\r\n    border-bottom: solid var(--darkblue) 2px;\r\n}\r\n\r\nh1{\r\n    font-size: 3vw;\r\n    -webkit-text-decoration: bold;\r\n            text-decoration: bold;\r\n}\r\n\r\nh2{\r\n    font-size: 2vw;\r\n    /* border-bottom: solid var(--blue) 2px; */\r\n    width:80%; \r\n    margin-left:10%;\r\n    text-align: center;\r\n}\r\n\r\n.button1 {\r\n    border-top-left-radius: 100%;\r\n}\r\n\r\n.button2 {\r\n    border-top-right-radius: 100%;\r\n}\r\n\r\n.button3 {\r\n    border-bottom-left-radius: 100%;\r\n}\r\n\r\n.button4 {\r\n    border-bottom-right-radius: 100%;\r\n}\r\n\r\n.schools {\r\n    display: inline-block;\r\n    /* border:solid green 1px; */\r\n    width:75vw;\r\n    height:45vw;\r\n}\r\n\r\n.school {\r\n    display: inline-block;\r\n    width:25vw;\r\n    margin-left:5vw;\r\n    margin-right:5vw;\r\n    height:25vw;\r\n    margin-top:1vw;\r\n    /* border: solid black 1px; */\r\n    text-align: center;\r\n    font-size: 0%;\r\n    /* border: solid 2px var(--blue);\r\n    border-radius: 30%; */\r\n}\r\n\r\n.button1, .button2, .button3, .button4{\r\n    position: relative;\r\n    display: inline-block;\r\n    margin:2%;\r\n    width:10vw;\r\n    height:10vw;\r\n    background-color: var(--blue);\r\n    border: solid var(--darkblue) 4px;\r\n}\r\n\r\n.button-text1{\r\n    position: absolute;\r\n    left:0;\r\n    right:0;\r\n    top:60%;\r\n    /* border: solid red 1px; */\r\n    font-size: 1vw;\r\n    color: white;\r\n}\r\n\r\n.button-text2{\r\n    position: absolute;\r\n    left:0;\r\n    right:0;\r\n    top:20%;\r\n    /* border: solid red 1px; */\r\n    font-size: 1vw;\r\n    color: white;\r\n}\r\n\r\n.button:hover{\r\n    cursor: pointer;\r\n    background-color:var(--lightblue);\r\n    border: solid var(--darkblue) 3px;\r\n}\r\n\r\n.button:focus{\r\n    outline:0;\r\n    background-color:var(--lightblue);\r\n    border: solid var(--darkblue) 3px;\r\n}\r\n\r\n/* Tablets (portrait and landscape) ----------- */\r\n\r\n@media only screen and (min-width: 400px) and (max-width: 960px) {\r\n    h1 {\r\n        font-size: 5vw;\r\n    }\r\n    \r\n    h2 {\r\n        font-size: 3vw;\r\n    }\r\n\r\n    .schools {\r\n        width:100vw;\r\n        height:60vw;\r\n    }\r\n    \r\n    .school {\r\n        width:40vw;\r\n        height:40vw;\r\n        margin: 0%;\r\n    }\r\n\r\n    .button1, .button2, .button3, .button4 {\r\n        margin:1.5%;\r\n        width:15vw;\r\n        height:15vw;\r\n    }\r\n\r\n    .button-text1 {\r\n        top:50%;\r\n        font-size: 1.5vw;\r\n    }\r\n    \r\n    .button-text2 {\r\n        top:20%;\r\n        font-size: 1.5vw;\r\n    }\r\n}\r\n\r\n/* Smartphones (portrait and landscape) ----------- */\r\n\r\n@media only screen and (max-width: 400px) {\r\n    h1 {\r\n        font-size: 8vw;\r\n    }\r\n    \r\n    h2 {\r\n        font-size: 5vw;\r\n    }\r\n\r\n    .schools {\r\n        width:100vw;\r\n        height:75vw;\r\n    }\r\n    \r\n    .school {\r\n        width:45vw;\r\n        height:45vw;\r\n        margin: 0%;\r\n    }\r\n\r\n    .button1, .button2, .button3, .button4 {\r\n        width:20vw;\r\n        height:20vw;\r\n    }\r\n\r\n    .button-text1 {\r\n        top:50%;\r\n        font-size: 2.3vw;\r\n    }\r\n    \r\n    .button-text2 {\r\n        top:20%;\r\n        font-size: 2.3vw;\r\n    }\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCw2QkFBNkI7SUFDN0Isd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksY0FBYztJQUNkLDZCQUFxQjtZQUFyQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsMENBQTBDO0lBQzFDLFNBQVM7SUFDVCxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLDRCQUE0QjtJQUM1QixVQUFVO0lBQ1YsV0FBVztBQUNmOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxjQUFjO0lBQ2QsNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2I7eUJBQ3FCO0FBQ3pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixTQUFTO0lBQ1QsVUFBVTtJQUNWLFdBQVc7SUFDWCw2QkFBNkI7SUFDN0IsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsT0FBTztJQUNQLDJCQUEyQjtJQUMzQixjQUFjO0lBQ2QsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLE9BQU87SUFDUCwyQkFBMkI7SUFDM0IsY0FBYztJQUNkLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUNBQWlDO0lBQ2pDLGlDQUFpQztBQUNyQzs7QUFFQztJQUNHLFNBQVM7SUFDVCxpQ0FBaUM7SUFDakMsaUNBQWlDO0FBQ3JDOztBQUVBLGlEQUFpRDs7QUFDakQ7SUFDSTtRQUNJLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxjQUFjO0lBQ2xCOztJQUVBO1FBQ0ksV0FBVztRQUNYLFdBQVc7SUFDZjs7SUFFQTtRQUNJLFVBQVU7UUFDVixXQUFXO1FBQ1gsVUFBVTtJQUNkOztJQUVBO1FBQ0ksV0FBVztRQUNYLFVBQVU7UUFDVixXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxPQUFPO1FBQ1AsZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksT0FBTztRQUNQLGdCQUFnQjtJQUNwQjtBQUNKOztBQUdBLHFEQUFxRDs7QUFDckQ7SUFDSTtRQUNJLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxjQUFjO0lBQ2xCOztJQUVBO1FBQ0ksV0FBVztRQUNYLFdBQVc7SUFDZjs7SUFFQTtRQUNJLFVBQVU7UUFDVixXQUFXO1FBQ1gsVUFBVTtJQUNkOztJQUVBO1FBQ0ksVUFBVTtRQUNWLFdBQVc7SUFDZjs7SUFFQTtRQUNJLE9BQU87UUFDUCxnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxPQUFPO1FBQ1AsZ0JBQWdCO0lBQ3BCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWlue1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDoxMDAlO1xyXG4gICAgLyogYm9yZGVyOiBzb2xpZCByZWQgMXB4OyAqL1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi50aXRsZXtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XHJcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCB2YXIoLS1kYXJrYmx1ZSkgMnB4O1xyXG59XHJcblxyXG5oMXtcclxuICAgIGZvbnQtc2l6ZTogM3Z3O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBib2xkO1xyXG59XHJcblxyXG5oMntcclxuICAgIGZvbnQtc2l6ZTogMnZ3O1xyXG4gICAgLyogYm9yZGVyLWJvdHRvbTogc29saWQgdmFyKC0tYmx1ZSkgMnB4OyAqL1xyXG4gICAgd2lkdGg6ODAlOyBcclxuICAgIG1hcmdpbi1sZWZ0OjEwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmJ1dHRvbjEge1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTAwJTtcclxufVxyXG5cclxuLmJ1dHRvbjIge1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwMCU7XHJcbn1cclxuXHJcbi5idXR0b24zIHtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwMCU7XHJcbn1cclxuXHJcbi5idXR0b240IHtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMDAlO1xyXG59XHJcblxyXG4uc2Nob29scyB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAvKiBib3JkZXI6c29saWQgZ3JlZW4gMXB4OyAqL1xyXG4gICAgd2lkdGg6NzV2dztcclxuICAgIGhlaWdodDo0NXZ3O1xyXG59XHJcblxyXG4uc2Nob29sIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOjI1dnc7XHJcbiAgICBtYXJnaW4tbGVmdDo1dnc7XHJcbiAgICBtYXJnaW4tcmlnaHQ6NXZ3O1xyXG4gICAgaGVpZ2h0OjI1dnc7XHJcbiAgICBtYXJnaW4tdG9wOjF2dztcclxuICAgIC8qIGJvcmRlcjogc29saWQgYmxhY2sgMXB4OyAqL1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAwJTtcclxuICAgIC8qIGJvcmRlcjogc29saWQgMnB4IHZhcigtLWJsdWUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzAlOyAqL1xyXG59XHJcblxyXG4uYnV0dG9uMSwgLmJ1dHRvbjIsIC5idXR0b24zLCAuYnV0dG9uNHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbjoyJTtcclxuICAgIHdpZHRoOjEwdnc7XHJcbiAgICBoZWlnaHQ6MTB2dztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xyXG4gICAgYm9yZGVyOiBzb2xpZCB2YXIoLS1kYXJrYmx1ZSkgNHB4O1xyXG59XHJcblxyXG4uYnV0dG9uLXRleHQxe1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDowO1xyXG4gICAgcmlnaHQ6MDtcclxuICAgIHRvcDo2MCU7XHJcbiAgICAvKiBib3JkZXI6IHNvbGlkIHJlZCAxcHg7ICovXHJcbiAgICBmb250LXNpemU6IDF2dztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmJ1dHRvbi10ZXh0MntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6MDtcclxuICAgIHJpZ2h0OjA7XHJcbiAgICB0b3A6MjAlO1xyXG4gICAgLyogYm9yZGVyOiBzb2xpZCByZWQgMXB4OyAqL1xyXG4gICAgZm9udC1zaXplOiAxdnc7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5idXR0b246aG92ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWxpZ2h0Ymx1ZSk7XHJcbiAgICBib3JkZXI6IHNvbGlkIHZhcigtLWRhcmtibHVlKSAzcHg7XHJcbn1cclxuXHJcbiAuYnV0dG9uOmZvY3Vze1xyXG4gICAgb3V0bGluZTowO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1saWdodGJsdWUpO1xyXG4gICAgYm9yZGVyOiBzb2xpZCB2YXIoLS1kYXJrYmx1ZSkgM3B4O1xyXG59IFxyXG5cclxuLyogVGFibGV0cyAocG9ydHJhaXQgYW5kIGxhbmRzY2FwZSkgLS0tLS0tLS0tLS0gKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MDBweCkgYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XHJcbiAgICBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiA1dnc7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGgyIHtcclxuICAgICAgICBmb250LXNpemU6IDN2dztcclxuICAgIH1cclxuXHJcbiAgICAuc2Nob29scyB7XHJcbiAgICAgICAgd2lkdGg6MTAwdnc7XHJcbiAgICAgICAgaGVpZ2h0OjYwdnc7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5zY2hvb2wge1xyXG4gICAgICAgIHdpZHRoOjQwdnc7XHJcbiAgICAgICAgaGVpZ2h0OjQwdnc7XHJcbiAgICAgICAgbWFyZ2luOiAwJTtcclxuICAgIH1cclxuXHJcbiAgICAuYnV0dG9uMSwgLmJ1dHRvbjIsIC5idXR0b24zLCAuYnV0dG9uNCB7XHJcbiAgICAgICAgbWFyZ2luOjEuNSU7XHJcbiAgICAgICAgd2lkdGg6MTV2dztcclxuICAgICAgICBoZWlnaHQ6MTV2dztcclxuICAgIH1cclxuXHJcbiAgICAuYnV0dG9uLXRleHQxIHtcclxuICAgICAgICB0b3A6NTAlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41dnc7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5idXR0b24tdGV4dDIge1xyXG4gICAgICAgIHRvcDoyMCU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjV2dztcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8qIFNtYXJ0cGhvbmVzIChwb3J0cmFpdCBhbmQgbGFuZHNjYXBlKSAtLS0tLS0tLS0tLSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XHJcbiAgICBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiA4dnc7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGgyIHtcclxuICAgICAgICBmb250LXNpemU6IDV2dztcclxuICAgIH1cclxuXHJcbiAgICAuc2Nob29scyB7XHJcbiAgICAgICAgd2lkdGg6MTAwdnc7XHJcbiAgICAgICAgaGVpZ2h0Ojc1dnc7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5zY2hvb2wge1xyXG4gICAgICAgIHdpZHRoOjQ1dnc7XHJcbiAgICAgICAgaGVpZ2h0OjQ1dnc7XHJcbiAgICAgICAgbWFyZ2luOiAwJTtcclxuICAgIH1cclxuXHJcbiAgICAuYnV0dG9uMSwgLmJ1dHRvbjIsIC5idXR0b24zLCAuYnV0dG9uNCB7XHJcbiAgICAgICAgd2lkdGg6MjB2dztcclxuICAgICAgICBoZWlnaHQ6MjB2dztcclxuICAgIH1cclxuXHJcbiAgICAuYnV0dG9uLXRleHQxIHtcclxuICAgICAgICB0b3A6NTAlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMi4zdnc7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5idXR0b24tdGV4dDIge1xyXG4gICAgICAgIHRvcDoyMCU7XHJcbiAgICAgICAgZm9udC1zaXplOiAyLjN2dztcclxuICAgIH1cclxufVxyXG5cclxuIl19 */"

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

module.exports = ".main{\r\n    height: 100%;\r\n    overflow: hidden;\r\n}\r\n\r\n.mat-spinner-color::ng-deep circle{\r\n    stroke: var(--blue) !important;\r\n}\r\n\r\n.test{\r\n    display: flex;\r\n    align-content: center;\r\n    align-items: center;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdC1pdC9wb3N0LWl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9wb3N0LWl0L3Bvc3QtaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWlue1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLm1hdC1zcGlubmVyLWNvbG9yOjpuZy1kZWVwIGNpcmNsZXtcclxuICAgIHN0cm9rZTogdmFyKC0tYmx1ZSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRlc3R7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuIl19 */"

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
        this.showSpinner = false;
    }
    ngOnInit() {
        console.log(this.getUrl());
    }
    getUrl() {
        return this.sanitizer.bypassSecurityTrustResourceUrl("https://docs.google.com/viewer?url=" + this.postIt.url + "&embedded=true");
    }
    documentLoaded() {
        this.showSpinner = false;
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
    constructor(titel, kleur, url) {
        this.titel = titel;
        this.kleur = kleur;
        this.url = url;
    }
    isGroen() {
        return this.kleur == "groen";
    }
}
PostIt.ctorParameters = () => [
    { type: String },
    { type: String },
    { type: String }
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