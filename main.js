(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <router-outlet></router-outlet>\r\n\r\n<!--<div class=\"page-container\">\r\n\t<div class=\"side-bar\">\r\n\t\t<ul class=\"nav flex-column\">\r\n\t  \t<li class=\"nav-item\">\r\n\t    \t<a class=\"nav-link active\" routerLink=\"home\">\r\n\t\t\t\t\t<ion-icon name=\"list\"></ion-icon>\r\n\t\t\t\t</a>\r\n\t  \t</li>\r\n\t  \t<li class=\"nav-item\">\r\n\t    \t<a class=\"nav-link\" routerLink=\"new-user\">\r\n\t\t\t\t\t<ion-icon name=\"add\"></ion-icon>\r\n\t\t\t\t</a>\r\n\t  \t</li>\r\n\t\t</ul>\r\n\t</div>\r\n\t<div class=\"content-container\">\r\n \t\t<router-outlet></router-outlet>\r\n\t</div>\r\n</div>\r\n-->"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-container {\n  display: grid;\n  grid-template-columns: 60px auto;\n  height: 100%;\n  padding: 0px; }\n  .page-container .side-bar {\n    background: #252223; }\n  .page-container .side-bar .nav-link {\n      color: #FFF;\n      font-size: 28px; }\n  .page-container .content-container {\n    margin-top: 30px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxkYXZvclxcRG9jdW1lbnRzXFxHaXRIdWJcXHJvYy10b3B3ZXJrLm5sXFxhbmd1bGFyLWZpcmViYXNlLWNydWQvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixnQ0FBZ0M7RUFDaEMsWUFBWTtFQUNaLFlBQVksRUFBQTtFQUpkO0lBT0ksbUJBQW1CLEVBQUE7RUFQdkI7TUFVTSxXQUFXO01BQ1gsZUFBZSxFQUFBO0VBWHJCO0lBZ0JJLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2UtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNjBweCBhdXRvO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwYWRkaW5nOiAwcHg7XHJcblxyXG4gIC5zaWRlLWJhciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjUyMjIzO1xyXG5cclxuICAgIC5uYXYtbGluayB7XHJcbiAgICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY29udGVudC1jb250YWluZXIge1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICB9XHJcbn1cclxuIl19 */"

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


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'angular6-firebase-crud';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _avatar_dialog_avatar_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./avatar-dialog/avatar-dialog.component */ "./src/app/avatar-dialog/avatar-dialog.component.ts");
/* harmony import */ var _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./edit-user/edit-user.component */ "./src/app/edit-user/edit-user.component.ts");
/* harmony import */ var _edit_user_edit_user_resolver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./edit-user/edit-user.resolver */ "./src/app/edit-user/edit-user.resolver.ts");
/* harmony import */ var _website_website_resolver__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./website/website.resolver */ "./src/app/website/website.resolver.ts");
/* harmony import */ var _new_user_new_user_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./new-user/new-user.component */ "./src/app/new-user/new-user.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _website_website_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./website/website.component */ "./src/app/website/website.component.ts");
/* harmony import */ var _safe_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./safe.pipe */ "./src/app/safe.pipe.ts");





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _avatar_dialog_avatar_dialog_component__WEBPACK_IMPORTED_MODULE_7__["AvatarDialogComponent"],
                _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_8__["EditUserComponent"],
                _new_user_new_user_component__WEBPACK_IMPORTED_MODULE_11__["NewUserComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
                _website_website_component__WEBPACK_IMPORTED_MODULE_19__["WebsiteComponent"],
                _safe_pipe__WEBPACK_IMPORTED_MODULE_20__["SafePipe"]
            ],
            entryComponents: [_avatar_dialog_avatar_dialog_component__WEBPACK_IMPORTED_MODULE_7__["AvatarDialogComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_5__["rootRouterConfig"], { useHash: false }),
                _angular_fire__WEBPACK_IMPORTED_MODULE_13__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].firebase),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_14__["AngularFirestoreModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"]
            ],
            providers: [_services_firebase_service__WEBPACK_IMPORTED_MODULE_16__["FirebaseService"], _edit_user_edit_user_resolver__WEBPACK_IMPORTED_MODULE_9__["EditUserResolver"], _website_website_resolver__WEBPACK_IMPORTED_MODULE_10__["WebsiteResolver"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: rootRouterConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rootRouterConfig", function() { return rootRouterConfig; });
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _website_website_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./website/website.component */ "./src/app/website/website.component.ts");
/* harmony import */ var _new_user_new_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new-user/new-user.component */ "./src/app/new-user/new-user.component.ts");
/* harmony import */ var _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-user/edit-user.component */ "./src/app/edit-user/edit-user.component.ts");
/* harmony import */ var _edit_user_edit_user_resolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-user/edit-user.resolver */ "./src/app/edit-user/edit-user.resolver.ts");
/* harmony import */ var _website_website_resolver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./website/website.resolver */ "./src/app/website/website.resolver.ts");






var rootRouterConfig = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"] },
    { path: 'new-user', component: _new_user_new_user_component__WEBPACK_IMPORTED_MODULE_2__["NewUserComponent"] },
    { path: 'details/:id', component: _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_3__["EditUserComponent"], resolve: { data: _edit_user_edit_user_resolver__WEBPACK_IMPORTED_MODULE_4__["EditUserResolver"] } },
    { path: 'website/:id', component: _website_website_component__WEBPACK_IMPORTED_MODULE_1__["WebsiteComponent"], resolve: { data: _website_website_resolver__WEBPACK_IMPORTED_MODULE_5__["WebsiteResolver"] } }
];


/***/ }),

/***/ "./src/app/avatar-dialog/avatar-dialog.component.html":
/*!************************************************************!*\
  !*** ./src/app/avatar-dialog/avatar-dialog.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <h5>Select Avatar</h5>\r\n    </div>\r\n  </div>\r\n  <div class=\"d-flex align-content-center flex-wrap\">\r\n    <div *ngFor=\"let avatar of avatars\">\r\n      <img class=\"img-thumbnail\" [src]=avatar.link (click)= \"close(avatar)\">\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/avatar-dialog/avatar-dialog.component.scss":
/*!************************************************************!*\
  !*** ./src/app/avatar-dialog/avatar-dialog.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-thumbnail {\n  width: 100px;\n  height: 100px;\n  margin: 4px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXZhdGFyLWRpYWxvZy9DOlxcVXNlcnNcXGRhdm9yXFxEb2N1bWVudHNcXEdpdEh1Ylxccm9jLXRvcHdlcmsubmxcXGFuZ3VsYXItZmlyZWJhc2UtY3J1ZC9zcmNcXGFwcFxcYXZhdGFyLWRpYWxvZ1xcYXZhdGFyLWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXZhdGFyLWRpYWxvZy9hdmF0YXItZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZy10aHVtYm5haWwge1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIG1hcmdpbjogNHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/avatar-dialog/avatar-dialog.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/avatar-dialog/avatar-dialog.component.ts ***!
  \**********************************************************/
/*! exports provided: AvatarDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvatarDialogComponent", function() { return AvatarDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var AvatarDialogComponent = /** @class */ (function () {
    function AvatarDialogComponent(dialogRef, firebaseService) {
        this.dialogRef = dialogRef;
        this.firebaseService = firebaseService;
        this.avatars = new Array();
    }
    AvatarDialogComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    AvatarDialogComponent.prototype.getData = function () {
        var _this = this;
        this.firebaseService.getAvatars()
            .subscribe(function (data) { return _this.avatars = data; });
    };
    AvatarDialogComponent.prototype.close = function (avatar) {
        this.dialogRef.close(avatar);
    };
    AvatarDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-avatar-dialog',
            template: __webpack_require__(/*! ./avatar-dialog.component.html */ "./src/app/avatar-dialog/avatar-dialog.component.html"),
            styles: [__webpack_require__(/*! ./avatar-dialog.component.scss */ "./src/app/avatar-dialog/avatar-dialog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"],
            _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"]])
    ], AvatarDialogComponent);
    return AvatarDialogComponent;
}());



/***/ }),

/***/ "./src/app/edit-user/edit-user.component.html":
/*!****************************************************!*\
  !*** ./src/app/edit-user/edit-user.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"edit-page\">\r\n  <nav aria-label=\"breadcrumb\">\r\n    <ol class=\"breadcrumb\">\r\n      <li class=\"breadcrumb-item active\" aria-current=\"page\">Edit User</li>\r\n    </ol>\r\n  </nav>\r\n  <div class=\"page-content\">\r\n    <div class=\"row\">\r\n      <div class=\"col col-md-4\">\r\n        <img class=\"img-avatar\" [src]=\"item.avatar\">\r\n        <button mat-stroked-button class=\"change-img-button\" color=\"primary\" (click)=\"openDialog()\">Change Avatar</button>\r\n      </div>\r\n      <div class=\"col col-md-8\">\r\n\r\n        <form class=\"edit-form\" [formGroup]=\"exampleForm\" novalidate (ngSubmit)=\"onSubmit(exampleForm.value)\">\r\n\r\n          <div class=\"form-group\">\r\n            <mat-form-field class=\"input-style\">\r\n              <input matInput placeholder=\"Name\" class=\"form-control\" formControlName=\"name\">\r\n            </mat-form-field>\r\n            <ng-container *ngFor=\"let validation of validation_messages.name\">\r\n              <mat-error *ngIf=\"exampleForm.get('name').hasError(validation.type) && (exampleForm.get('name').dirty || exampleForm.get('name').touched)\">{{validation.message}}</mat-error>\r\n            </ng-container>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <mat-form-field class=\"input-style\">\r\n              <input matInput placeholder=\"Surname\" class=\"form-control\" formControlName=\"surname\">\r\n            </mat-form-field>\r\n            <ng-container *ngFor=\"let validation of validation_messages.surname\">\r\n              <mat-error *ngIf=\"exampleForm.get('surname').hasError(validation.type) && (exampleForm.get('surname').dirty || exampleForm.get('surname').touched)\">{{validation.message}}</mat-error>\r\n            </ng-container>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <mat-form-field class=\"input-style\">\r\n              <input matInput type=\"number\" min=\"0\" max=\"100\" placeholder=\"Age\" class=\"form-control\" formControlName=\"age\">\r\n            </mat-form-field>\r\n            <ng-container *ngFor=\"let validation of validation_messages.age\">\r\n              <mat-error *ngIf=\"exampleForm.get('age').hasError(validation.type) && (exampleForm.get('age').dirty || exampleForm.get('age').touched)\">{{validation.message}}</mat-error>\r\n            </ng-container>\r\n          </div>\r\n\r\n          <div class=\"row submit-button-container\">\r\n            <div class=\"col-md-4\">\r\n              <button mat-raised-button class=\"submit-button\" color=\"primary\" type=\"submit\" [disabled]=\"!exampleForm.valid\">Save</button>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <button mat-raised-button class=\"delete-button\" color=\"warn\" type=\"button\" (click)=\"delete()\">Delete</button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/edit-user/edit-user.component.scss":
/*!****************************************************!*\
  !*** ./src/app/edit-user/edit-user.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".edit-page {\n  padding: 20px 60px; }\n  .edit-page .page-content {\n    background-color: #FFF; }\n  .edit-page .page-content .img-avatar {\n      border-radius: 50%;\n      width: 150px;\n      display: block;\n      margin: 20px auto; }\n  .edit-page .page-content .change-img-button {\n      display: block;\n      margin: 0px auto; }\n  .edit-page .page-content .edit-form {\n      padding: 20px; }\n  .edit-page .page-content .edit-form .submit-button-container {\n        justify-content: flex-end; }\n  .edit-page .page-content .edit-form .submit-button-container .submit-button {\n          width: 100%; }\n  .edit-page .page-content .edit-form .submit-button-container .delete-button {\n          width: 100%; }\n  .edit-page .page-content .edit-form .input-style {\n        width: 100%; }\n  .edit-page .page-content .edit-form .mat-error {\n        font-size: 12px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC11c2VyL0M6XFxVc2Vyc1xcZGF2b3JcXERvY3VtZW50c1xcR2l0SHViXFxyb2MtdG9wd2Vyay5ubFxcYW5ndWxhci1maXJlYmFzZS1jcnVkL3NyY1xcYXBwXFxlZGl0LXVzZXJcXGVkaXQtdXNlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLGtCQUFrQixFQUFBO0VBRnBCO0lBS0ksc0JBQXNCLEVBQUE7RUFMMUI7TUFRTSxrQkFBa0I7TUFDbEIsWUFBWTtNQUNaLGNBQWM7TUFDZCxpQkFBaUIsRUFBQTtFQVh2QjtNQWVNLGNBQWM7TUFDZCxnQkFBZ0IsRUFBQTtFQWhCdEI7TUFvQk0sYUFBYSxFQUFBO0VBcEJuQjtRQXdCUSx5QkFBeUIsRUFBQTtFQXhCakM7VUEyQlUsV0FBVyxFQUFBO0VBM0JyQjtVQStCVSxXQUFXLEVBQUE7RUEvQnJCO1FBb0NRLFdBQVcsRUFBQTtFQXBDbkI7UUF3Q1EsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZWRpdC11c2VyL2VkaXQtdXNlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lZGl0LXBhZ2Uge1xyXG5cclxuICBwYWRkaW5nOiAyMHB4IDYwcHg7XHJcblxyXG4gIC5wYWdlLWNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcclxuXHJcbiAgICAuaW1nLWF2YXRhciB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgICB9XHJcblxyXG4gICAgLmNoYW5nZS1pbWctYnV0dG9uIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgICB9XHJcblxyXG4gICAgLmVkaXQtZm9ybSB7XHJcbiAgICAgIHBhZGRpbmc6IDIwcHg7XHJcblxyXG5cclxuICAgICAgLnN1Ym1pdC1idXR0b24tY29udGFpbmVyIHtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5cclxuICAgICAgICAuc3VibWl0LWJ1dHRvbntcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmRlbGV0ZS1idXR0b257XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5pbnB1dC1zdHlsZXtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLm1hdC1lcnJvciB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/edit-user/edit-user.component.ts":
/*!**************************************************!*\
  !*** ./src/app/edit-user/edit-user.component.ts ***!
  \**************************************************/
/*! exports provided: EditUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserComponent", function() { return EditUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _avatar_dialog_avatar_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../avatar-dialog/avatar-dialog.component */ "./src/app/avatar-dialog/avatar-dialog.component.ts");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/firebase.service */ "./src/app/services/firebase.service.ts");








var EditUserComponent = /** @class */ (function () {
    function EditUserComponent(firebaseService, route, fb, router, dialog) {
        this.firebaseService = firebaseService;
        this.route = route;
        this.fb = fb;
        this.router = router;
        this.dialog = dialog;
        this.validation_messages = {
            'name': [
                { type: 'required', message: 'Name is required.' }
            ],
            'surname': [
                { type: 'required', message: 'Surname is required.' }
            ],
            'age': [
                { type: 'required', message: 'Age is required.' },
            ]
        };
    }
    EditUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (routeData) {
            var data = routeData['data'];
            if (data) {
                _this.item = data.payload.data();
                _this.item.id = data.payload.id;
                _this.createForm();
            }
        });
    };
    EditUserComponent.prototype.createForm = function () {
        this.exampleForm = this.fb.group({
            name: [this.item.name, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            surname: [this.item.surname, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            age: [this.item.age, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    EditUserComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_avatar_dialog_avatar_dialog_component__WEBPACK_IMPORTED_MODULE_5__["AvatarDialogComponent"], {
            height: '400px',
            width: '400px'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.item.avatar = result.link;
            }
        });
    };
    EditUserComponent.prototype.onSubmit = function (value) {
        var _this = this;
        value.avatar = this.item.avatar;
        value.age = Number(value.age);
        this.firebaseService.updateUser(this.item.id, value)
            .then(function (res) {
            _this.router.navigate(['/home']);
        });
    };
    EditUserComponent.prototype.delete = function () {
        var _this = this;
        this.firebaseService.deleteUser(this.item.id)
            .then(function (res) {
            _this.router.navigate(['/home']);
        }, function (err) {
            console.log(err);
        });
    };
    EditUserComponent.prototype.cancel = function () {
        this.router.navigate(['/home']);
    };
    EditUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-user',
            template: __webpack_require__(/*! ./edit-user.component.html */ "./src/app/edit-user/edit-user.component.html"),
            styles: [__webpack_require__(/*! ./edit-user.component.scss */ "./src/app/edit-user/edit-user.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_firebase_service__WEBPACK_IMPORTED_MODULE_6__["FirebaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], EditUserComponent);
    return EditUserComponent;
}());



/***/ }),

/***/ "./src/app/edit-user/edit-user.resolver.ts":
/*!*************************************************!*\
  !*** ./src/app/edit-user/edit-user.resolver.ts ***!
  \*************************************************/
/*! exports provided: EditUserResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserResolver", function() { return EditUserResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/firebase.service */ "./src/app/services/firebase.service.ts");



var EditUserResolver = /** @class */ (function () {
    function EditUserResolver(firebaseService) {
        this.firebaseService = firebaseService;
    }
    EditUserResolver.prototype.resolve = function (route) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var userId = route.paramMap.get('id');
            _this.firebaseService.getUser(userId)
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    EditUserResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"]])
    ], EditUserResolver);
    return EditUserResolver;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- USER PROFILE SECTION -->\r\n<section class=\"user-profile-section bg-light\">\r\n  <!--\r\n  <div class=\"container\">\r\n    <div class=\"user-profile\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-4\">\r\n          <div class=\"user-img\">\r\n            <img src=\"assets/img\\dashboard\\profile_user.jpg\" alt=\"User Image\">\r\n          </div>\r\n        </div>\r\n        <div class=\"col-xs-12 col-sm-8\">\r\n          <div class=\"user-profile-content\">\r\n            <h3 class=\"user-name\">Marcus Doe</h3>\r\n            <span class=\"designation\">Developer</span>\r\n            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste necessitatibus eum, libero tempora consequuntur explicabo saepe aut sapiente iusto ipsum.</p>\r\n            <ul class=\"user-contact-details\">\r\n              <li><i class=\"fa fa-phone\" aria-hidden=\"true\"></i>[88] 657 524 332</li>\r\n              <li><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i><a href=\"#\">info@listy.com</a></li>\r\n            </ul>\r\n            <div class=\"verified-user\"><i class=\"fa fa-user-o\" aria-hidden=\"true\"></i> veryfied account</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>-->\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-4\">\r\n        <aside>\r\n          <h3>TAGS</h3>\r\n          <ul class=\"list-group\">\r\n            <li class=\"list-group-item d-flex justify-content-between align-items-center\">\r\n                <button class=\"nav-link active\" (click)=\"searchByTags('HTML')\" >HTML</button>\r\n            </li>\r\n            <li class=\"list-group-item d-flex justify-content-between align-items-center\">\r\n              <button class=\"nav-link active\" (click)=\"searchByTags('JAVA')\" >JAVA</button>\r\n            </li>\r\n            <li class=\"list-group-item d-flex justify-content-between align-items-center\">\r\n              <button class=\"nav-link active\" (click)=\"searchByTags('JavaScript')\" >JavaScript</button>\r\n              \r\n            </li>\r\n          </ul>\r\n        </aside>\r\n      </div>\r\n      <div class=\"col-sm-8\">\r\n        <div class=\"listContentHeading\">\r\n          <h2>ROC Topwerk</h2>\r\n        </div>\r\n\t\t\t\t<div class=\"listContent\">\r\n\t\t\t\t\t<div *ngFor=\"let item of items\" class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-sm-5 col-xs-12\">\r\n\t\t\t\t\t\t\t<div class=\"categoryImage\">\r\n                <a (click)=\"viewWebsite(item)\" class=\"link\">\r\n\t\t\t\t\t\t\t\t  <img [src]=\"item.payload.doc.data().SCREENSHOT\" alt=\"Image category\" class=\"img-responsive img-rounded\">\r\n                </a>\r\n              </div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-sm-7 col-xs-12\">\r\n\t\t\t\t\t\t\t<div class=\"categoryDetails\">\r\n\t\t\t\t\t\t\t\t<!--<ul class=\"list-inline rating\">\r\n\t\t\t\t\t\t\t\t\t<li><i class=\"fa fa-star\" aria-hidden=\"true\"></i></li>\r\n\t\t\t\t\t\t\t\t\t<li><i class=\"fa fa-star\" aria-hidden=\"true\"></i></li>\r\n\t\t\t\t\t\t\t\t\t<li><i class=\"fa fa-star\" aria-hidden=\"true\"></i></li>\r\n\t\t\t\t\t\t\t\t\t<li><i class=\"fa fa-star\" aria-hidden=\"true\"></i></li>\r\n\t\t\t\t\t\t\t\t\t<li><i class=\"fa fa-star-o\" aria-hidden=\"true\"></i></li>\r\n\t\t\t\t\t\t\t\t</ul>-->\r\n                <h2>\r\n                  <a (click)=\"viewWebsite(item)\" style=\"color: #222222; text-decoration:underline;\" class=\"link\">\r\n                    {{item.payload.doc.data().NAAM}}\r\n                  </a> <span class=\"likeCount\">Ontwikkelingstijd: {{item.payload.doc.data().ONTWIKKELINGSTIJD}}</span></h2>\r\n\t\t\t\t\t\t\t\t<p>Gebruiktetools: <span class=\"placeName\">{{item.payload.doc.data().GEBRUIKTETOOLS}}</span></p>\r\n\t\t\t\t\t\t\t\t<p>{{item.payload.doc.data().BESCHRIJVING}}</p>\r\n\t\t\t\t\t\t\t\t<ul  class=\"list-inline list-tag\">\r\n\t\t\t\t\t\t\t\t\t<li>gebruikte technieken \r\n                    <span *ngFor=\"let tag of item.payload.doc.data().TAGS\" > \r\n                        <button class=\"nav-link active\"  (click)=\"searchByTags(tag)\" >{{tag}}</button>\r\n                    </span>\r\n                  </li>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!--<div class=\"row\">\r\n  <div class=\"col-md-4 offset-md-1\">\r\n    <div class=\"input-group\">\r\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"searchValue\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Search by name...\" (keyup)=\"searchByName()\">\r\n      <div class=\"input-group-append\">\r\n        <span class=\"input-group-text\"><ion-icon class=\"icon\" name=\"search\"></ion-icon></span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-6 filter-by-age\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-auto title\">\r\n        <span>Filter by age (older than):</span>\r\n      </div>\r\n      <div class=\"col\">\r\n        <span>0 </span>\r\n        <mat-slider\r\n          class=\"age-slider\"\r\n          max=\"100\"\r\n          min=\"0\"\r\n          step=\"1\"\r\n          thumbLabel=\"true\"\r\n          (ngModel)=\"ageValue\"\r\n          (change)=\"rangeChange($event)\">\r\n        </mat-slider>\r\n        <span> 100</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"list-group users-list\">\r\n  <div *ngFor=\"let item of items\" class=\"list-group-item list-group-item-action flex-column align-items-start\">\r\n    <div class=\"row\">\r\n      <div class=\"col col-md-2 image-col\">\r\n        <img class=\"image\" [src]=\"item.payload.doc.data().avatar\">\r\n      </div>\r\n      <div class=\"col col-md-8 text-col\">\r\n        <h5 class=\"mb-1\">\r\n          {{item.payload.doc.data().name}} \r\n          {{item.payload.doc.data().surname}} \r\n        </h5>\r\n        <small>{{item.payload.doc.data().studyyear}}</small>\r\n      </div>\r\n      <div class=\"col col-md-2 actions-col\">\r\n        <button class=\"btn btn-outline-primary action\" (click)=\"viewWebsite(item)\" type=\"button\">\r\n          zie meer\r\n          <ion-icon class=\"icon\" name=\"arrow-round-forward\"></ion-icon>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n-->"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".filter-by-age {\n  color: #6c757d; }\n  .filter-by-age .title {\n    align-self: center; }\n  .filter-by-age .age-slider {\n    width: 85%; }\n  .users-list {\n  padding: 40px 60px; }\n  .users-list .image-col {\n    text-align: center; }\n  .users-list .image-col .image {\n      border-radius: 50%;\n      width: 100px;\n      height: 100px; }\n  .users-list .text-col {\n    margin: auto 0px; }\n  .users-list .actions-col {\n    text-align: center;\n    margin: auto 0px; }\n  .users-list .actions-col .action {\n      line-height: 1; }\n  .users-list .actions-col .icon {\n      font-size: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXGRhdm9yXFxEb2N1bWVudHNcXEdpdEh1Ylxccm9jLXRvcHdlcmsubmxcXGFuZ3VsYXItZmlyZWJhc2UtY3J1ZC9zcmNcXGFwcFxcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWMsRUFBQTtFQURoQjtJQUlJLGtCQUFrQixFQUFBO0VBSnRCO0lBUUksVUFBVSxFQUFBO0VBSWQ7RUFDRSxrQkFBa0IsRUFBQTtFQURwQjtJQUlJLGtCQUFpQixFQUFBO0VBSnJCO01BT00sa0JBQWtCO01BQ2xCLFlBQVk7TUFDWixhQUFhLEVBQUE7RUFUbkI7SUFhSSxnQkFBZ0IsRUFBQTtFQWJwQjtJQWdCSSxrQkFBa0I7SUFDbEIsZ0JBQWdCLEVBQUE7RUFqQnBCO01Bb0JNLGNBQWMsRUFBQTtFQXBCcEI7TUF1Qk0sZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpbHRlci1ieS1hZ2Uge1xyXG4gIGNvbG9yOiAjNmM3NTdkO1xyXG5cclxuICAudGl0bGUge1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmFnZS1zbGlkZXIge1xyXG4gICAgd2lkdGg6IDg1JTtcclxuICB9XHJcbn1cclxuXHJcbi51c2Vycy1saXN0IHtcclxuICBwYWRkaW5nOiA0MHB4IDYwcHg7XHJcblxyXG4gIC5pbWFnZS1jb2wge1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcblxyXG4gICAgLmltYWdlIHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC50ZXh0LWNvbCB7XHJcbiAgICBtYXJnaW46IGF1dG8gMHB4O1xyXG4gIH1cclxuICAuYWN0aW9ucy1jb2wge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiBhdXRvIDBweDtcclxuXHJcbiAgICAuYWN0aW9uIHtcclxuICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICB9XHJcbiAgICAuaWNvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"

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
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(firebaseService, router) {
        this.firebaseService = firebaseService;
        this.router = router;
        this.ageValue = 0;
        this.searchValue = "";
        this.tagsValue = "";
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    HomeComponent.prototype.getData = function () {
        var _this = this;
        this.firebaseService.getUsers()
            .subscribe(function (result) {
            _this.items = result;
            _this.age_filtered_items = result;
            _this.tags_filtered_items = result;
            _this.name_filtered_items = result;
        });
    };
    HomeComponent.prototype.viewDetails = function (item) {
        this.router.navigate(['/details/' + item.payload.doc.id]);
    };
    HomeComponent.prototype.viewWebsite = function (item) {
        this.router.navigate(['/website/' + item.payload.doc.id]);
    };
    HomeComponent.prototype.capitalizeFirstLetter = function (value) {
        return value.charAt(0).toUpperCase() + value.slice(1);
    };
    HomeComponent.prototype.searchByName = function () {
        var _this = this;
        var value = this.searchValue.toLowerCase();
        this.firebaseService.searchUsers(value)
            .subscribe(function (result) {
            _this.name_filtered_items = result;
            _this.items = _this.combineLists(result, _this.age_filtered_items);
        });
    };
    HomeComponent.prototype.searchByTags = function (item) {
        var _this = this;
        console.log(item);
        this.firebaseService.searchUsersByTags(item)
            .subscribe(function (result) {
            _this.tags_filtered_items = result;
            _this.items = _this.combineLists(result, _this.name_filtered_items);
        });
    };
    HomeComponent.prototype.rangeChange = function (event) {
        var _this = this;
        this.firebaseService.searchUsersByAge(event.value)
            .subscribe(function (result) {
            _this.age_filtered_items = result;
            _this.items = _this.combineLists(result, _this.name_filtered_items);
        });
    };
    HomeComponent.prototype.combineLists = function (a, b) {
        var result = [];
        a.filter(function (x) {
            return b.filter(function (x2) {
                if (x2.payload.doc.id == x.payload.doc.id) {
                    result.push(x2);
                }
            });
        });
        return result;
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/new-user/new-user.component.html":
/*!**************************************************!*\
  !*** ./src/app/new-user/new-user.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"create-page\">\r\n  <nav aria-label=\"breadcrumb\">\r\n    <ol class=\"breadcrumb\">\r\n      <li class=\"breadcrumb-item active\" aria-current=\"page\">Create User</li>\r\n    </ol>\r\n  </nav>\r\n  <div class=\"page-content\">\r\n    <div class=\"row\">\r\n      <div class=\"col col-md-4\">\r\n        <img class=\"img-avatar\" src=\"{{avatarLink}}\">\r\n        <button mat-stroked-button class=\"change-img-button\" color=\"primary\" (click)=\"openDialog()\">Change Image</button>\r\n      </div>\r\n\r\n      <div class=\"col col-md-8\">\r\n\r\n        <form class=\"create-form\" [formGroup]=\"exampleForm\" novalidate (ngSubmit)=\"onSubmit(exampleForm.value)\">\r\n\r\n          <div class=\"form-group\">\r\n            <mat-form-field class=\"input-style\">\r\n              <input matInput placeholder=\"Name\" class=\"form-control\" formControlName=\"name\">\r\n            </mat-form-field>\r\n            <ng-container *ngFor=\"let validation of validation_messages.name\">\r\n              <mat-error *ngIf=\"exampleForm.get('name').hasError(validation.type) && (exampleForm.get('name').dirty || exampleForm.get('name').touched)\">{{validation.message}}</mat-error>\r\n            </ng-container>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <mat-form-field class=\"input-style\">\r\n              <input matInput placeholder=\"Surname\" class=\"form-control\" formControlName=\"surname\">\r\n            </mat-form-field>\r\n            <ng-container *ngFor=\"let validation of validation_messages.surname\">\r\n              <mat-error *ngIf=\"exampleForm.get('surname').hasError(validation.type) && (exampleForm.get('surname').dirty || exampleForm.get('surname').touched)\">{{validation.message}}</mat-error>\r\n            </ng-container>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <mat-form-field class=\"input-style\">\r\n              <input matInput type=\"number\" min=\"0\" max=\"100\" placeholder=\"Age\" class=\"form-control\" formControlName=\"age\">\r\n            </mat-form-field>\r\n            <ng-container *ngFor=\"let validation of validation_messages.age\">\r\n              <mat-error *ngIf=\"exampleForm.get('age').hasError(validation.type) && (exampleForm.get('age').dirty || exampleForm.get('age').touched)\">{{validation.message}}</mat-error>\r\n            </ng-container>\r\n          </div>\r\n\r\n          <div class=\"row submit-button-container\">\r\n            <div class=\"col-md-4\">\r\n              <button mat-raised-button class=\"submit-button\" color=\"primary\" type=\"submit\" [disabled]=\"!exampleForm.valid\">Create</button>\r\n            </div>\r\n          </div>\r\n\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/new-user/new-user.component.scss":
/*!**************************************************!*\
  !*** ./src/app/new-user/new-user.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".create-page {\n  padding: 20px 60px; }\n  .create-page .page-content {\n    background-color: #FFF; }\n  .create-page .page-content .img-avatar {\n      border-radius: 50%;\n      width: 150px;\n      display: block;\n      margin: 20px auto; }\n  .create-page .page-content .change-img-button {\n      display: block;\n      margin: 0px auto; }\n  .create-page .page-content .create-form {\n      padding: 20px; }\n  .create-page .page-content .create-form .submit-button-container {\n        justify-content: flex-end; }\n  .create-page .page-content .create-form .submit-button-container .submit-button {\n          width: 100%; }\n  .create-page .page-content .create-form .input-style {\n        width: 100%; }\n  .create-page .page-content .create-form .mat-error {\n        font-size: 12px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3LXVzZXIvQzpcXFVzZXJzXFxkYXZvclxcRG9jdW1lbnRzXFxHaXRIdWJcXHJvYy10b3B3ZXJrLm5sXFxhbmd1bGFyLWZpcmViYXNlLWNydWQvc3JjXFxhcHBcXG5ldy11c2VyXFxuZXctdXNlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLGtCQUFrQixFQUFBO0VBRnBCO0lBS0ksc0JBQXNCLEVBQUE7RUFMMUI7TUFRTSxrQkFBa0I7TUFDbEIsWUFBWTtNQUNaLGNBQWM7TUFDZCxpQkFBaUIsRUFBQTtFQVh2QjtNQWVNLGNBQWM7TUFDZCxnQkFBZ0IsRUFBQTtFQWhCdEI7TUFvQk0sYUFBYSxFQUFBO0VBcEJuQjtRQXdCUSx5QkFBeUIsRUFBQTtFQXhCakM7VUEyQlUsV0FBVyxFQUFBO0VBM0JyQjtRQWdDUSxXQUFXLEVBQUE7RUFoQ25CO1FBb0NRLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL25ldy11c2VyL25ldy11c2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNyZWF0ZS1wYWdlIHtcclxuXHJcbiAgcGFkZGluZzogMjBweCA2MHB4O1xyXG5cclxuICAucGFnZS1jb250ZW50IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XHJcblxyXG4gICAgLmltZy1hdmF0YXIge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gICAgfVxyXG5cclxuICAgIC5jaGFuZ2UtaW1nLWJ1dHRvbiB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBtYXJnaW46IDBweCBhdXRvO1xyXG4gICAgfVxyXG5cclxuICAgIC5jcmVhdGUtZm9ybSB7XHJcbiAgICAgIHBhZGRpbmc6IDIwcHg7XHJcblxyXG5cclxuICAgICAgLnN1Ym1pdC1idXR0b24tY29udGFpbmVyIHtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5cclxuICAgICAgICAuc3VibWl0LWJ1dHRvbntcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmlucHV0LXN0eWxle1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubWF0LWVycm9yIHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/new-user/new-user.component.ts":
/*!************************************************!*\
  !*** ./src/app/new-user/new-user.component.ts ***!
  \************************************************/
/*! exports provided: NewUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewUserComponent", function() { return NewUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _avatar_dialog_avatar_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../avatar-dialog/avatar-dialog.component */ "./src/app/avatar-dialog/avatar-dialog.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/firebase.service */ "./src/app/services/firebase.service.ts");







var NewUserComponent = /** @class */ (function () {
    function NewUserComponent(fb, dialog, router, firebaseService) {
        this.fb = fb;
        this.dialog = dialog;
        this.router = router;
        this.firebaseService = firebaseService;
        this.avatarLink = "https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg";
        this.validation_messages = {
            'name': [
                { type: 'required', message: 'Name is required.' }
            ],
            'surname': [
                { type: 'required', message: 'Surname is required.' }
            ],
            'age': [
                { type: 'required', message: 'Age is required.' },
            ]
        };
    }
    NewUserComponent.prototype.ngOnInit = function () {
        this.createForm();
    };
    NewUserComponent.prototype.createForm = function () {
        this.exampleForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            surname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            age: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    NewUserComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_avatar_dialog_avatar_dialog_component__WEBPACK_IMPORTED_MODULE_4__["AvatarDialogComponent"], {
            height: '400px',
            width: '400px',
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.avatarLink = result.link;
            }
        });
    };
    NewUserComponent.prototype.resetFields = function () {
        this.avatarLink = "https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg";
        this.exampleForm = this.fb.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            surname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            age: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
    };
    NewUserComponent.prototype.onSubmit = function (value) {
        var _this = this;
        this.firebaseService.createUser(value, this.avatarLink)
            .then(function (res) {
            _this.resetFields();
            _this.router.navigate(['/home']);
        });
    };
    NewUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-user',
            template: __webpack_require__(/*! ./new-user.component.html */ "./src/app/new-user/new-user.component.html"),
            styles: [__webpack_require__(/*! ./new-user.component.scss */ "./src/app/new-user/new-user.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _services_firebase_service__WEBPACK_IMPORTED_MODULE_6__["FirebaseService"]])
    ], NewUserComponent);
    return NewUserComponent;
}());



/***/ }),

/***/ "./src/app/safe.pipe.ts":
/*!******************************!*\
  !*** ./src/app/safe.pipe.ts ***!
  \******************************/
/*! exports provided: SafePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipe", function() { return SafePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var SafePipe = /** @class */ (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    SafePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'safe'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], SafePipe);
    return SafePipe;
}());



/***/ }),

/***/ "./src/app/services/firebase.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/firebase.service.ts ***!
  \**********************************************/
/*! exports provided: FirebaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseService", function() { return FirebaseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");



var FirebaseService = /** @class */ (function () {
    function FirebaseService(db) {
        this.db = db;
    }
    FirebaseService.prototype.getAvatars = function () {
        return this.db.collection('/avatar').valueChanges();
    };
    FirebaseService.prototype.getUser = function (userKey) {
        return this.db.collection('users').doc(userKey).snapshotChanges();
    };
    FirebaseService.prototype.updateUser = function (userKey, value) {
        value.nameToSearch = value.name.toLowerCase();
        return this.db.collection('users').doc(userKey).set(value);
    };
    FirebaseService.prototype.deleteUser = function (userKey) {
        return this.db.collection('users').doc(userKey).delete();
    };
    FirebaseService.prototype.getUsers = function () {
        return this.db.collection('users').snapshotChanges();
    };
    FirebaseService.prototype.searchUsers = function (searchValue) {
        return this.db.collection('users', function (ref) { return ref.where('nameToSearch', '>=', searchValue)
            .where('nameToSearch', '<=', searchValue + '\uf8ff'); })
            .snapshotChanges();
    };
    FirebaseService.prototype.searchUsersByAge = function (value) {
        return this.db.collection('users', function (ref) { return ref.orderBy('age').startAt(value); }).snapshotChanges();
    };
    FirebaseService.prototype.searchUsersByTags = function (value) {
        return this.db.collection('users', function (ref) { return ref.where('TAGS', 'array-contains', value); })
            .snapshotChanges();
    };
    FirebaseService.prototype.createUser = function (value, avatar) {
        return this.db.collection('users').add({
            name: value.name,
            nameToSearch: value.name.toLowerCase(),
            surname: value.surname,
            age: parseInt(value.age),
            avatar: avatar
        });
    };
    FirebaseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], FirebaseService);
    return FirebaseService;
}());



/***/ }),

/***/ "./src/app/website/website.component.css":
/*!***********************************************!*\
  !*** ./src/app/website/website.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlYnNpdGUvd2Vic2l0ZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/website/website.component.html":
/*!************************************************!*\
  !*** ./src/app/website/website.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div style=\"margin:0px;padding:0px;overflow:hidden;height:1000px;\">\r\n    <iframe [src]=\"item.url | safe\" frameborder=\"0\" style=\"overflow:hidden;height:100%;width:100%\" height=\"100%\" width=\"100%\"></iframe>\r\n</div>"

/***/ }),

/***/ "./src/app/website/website.component.ts":
/*!**********************************************!*\
  !*** ./src/app/website/website.component.ts ***!
  \**********************************************/
/*! exports provided: WebsiteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteComponent", function() { return WebsiteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");





var WebsiteComponent = /** @class */ (function () {
    function WebsiteComponent(firebaseService, route, dialog) {
        this.firebaseService = firebaseService;
        this.route = route;
        this.dialog = dialog;
    }
    WebsiteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (routeData) {
            var data = routeData['data'];
            if (data) {
                _this.item = data.payload.data();
                _this.item.id = data.payload.id;
                _this.item.url = "assets/" + _this.item.id + "/index.html";
            }
        });
    };
    WebsiteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-website',
            template: __webpack_require__(/*! ./website.component.html */ "./src/app/website/website.component.html"),
            styles: [__webpack_require__(/*! ./website.component.css */ "./src/app/website/website.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], WebsiteComponent);
    return WebsiteComponent;
}());



/***/ }),

/***/ "./src/app/website/website.resolver.ts":
/*!*********************************************!*\
  !*** ./src/app/website/website.resolver.ts ***!
  \*********************************************/
/*! exports provided: WebsiteResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteResolver", function() { return WebsiteResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/firebase.service */ "./src/app/services/firebase.service.ts");



var WebsiteResolver = /** @class */ (function () {
    function WebsiteResolver(firebaseService) {
        this.firebaseService = firebaseService;
    }
    WebsiteResolver.prototype.resolve = function (route) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var userId = route.paramMap.get('id');
            _this.firebaseService.getUser(userId)
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    WebsiteResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"]])
    ], WebsiteResolver);
    return WebsiteResolver;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyAl4-6q5efJ4UnCudXFEyAMYdPujQ71ezQ",
        authDomain: "roc-showcase.firebaseapp.com",
        databaseURL: "https://roc-showcase.firebaseio.com",
        projectId: "roc-showcase",
        storageBucket: "roc-showcase.appspot.com",
        messagingSenderId: "350314475184"
    }
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\davor\Documents\GitHub\roc-topwerk.nl\angular-firebase-crud\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map