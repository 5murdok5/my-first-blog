(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-auth-signup-signup-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/auth/signup/signup.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/auth/signup/signup.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n  - Signup Screen\n  - @author    ThemesBuckets <themesbuckets@gmail.com>\n  - @copyright Copyright (c) 2020\n  - @license   AppsPlaces\n-->\n\n<!-- Header -->\n<ion-header no-border>\n  <ion-toolbar>\n    <!-- Back To Landing Page -->\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"color1\" default-href=\"\" text=\"\" icon=\"arrow-round-back\" routerLink=\"/landing\"\n        routerDirection=\"root\">\n      </ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<!-- Contents -->\n<ion-content id=\"signup\" fullscreen>\n  <div class=\"section_one\">\n    <h2>SIGN UP</h2>\n    <p>Fill the details & create your account</p>\n  </div>\n\n  <!-- SignUp Form -->\n  <div class=\"section_two ion-padding\">\n    <form class=\"ion-padding\">\n      <!-- Name -->\n      <ion-item>\n        <ion-label>\n          <ion-icon name=\"md-person\" color=\"color2\"></ion-icon>\n        </ion-label>\n        <ion-input type=\"text\" placeholder=\"Name\" name=\"name\"></ion-input>\n      </ion-item>\n\n      <!-- Email -->\n      <ion-item class=\"ion-padding-top\">\n        <ion-label>\n          <ion-icon name=\"md-mail\" color=\"color2\"></ion-icon>\n        </ion-label>\n        <ion-input type=\"email\" placeholder=\"Email\" name=\"email\"></ion-input>\n      </ion-item>\n\n      <!-- Phone Number -->\n      <ion-item class=\"ion-padding-top\">\n        <ion-label>\n          <ion-icon name=\"call\" color=\"color2\"></ion-icon>\n        </ion-label>\n        <ion-input type=\"number\" placeholder=\"Phone Number\" name=\"phone\"></ion-input>\n      </ion-item>\n\n      <!-- Password -->\n      <ion-item class=\"ion-padding-top\">\n        <ion-label>\n          <ion-icon name=\"md-eye\" color=\"color2\"></ion-icon>\n        </ion-label>\n        <ion-input type=\"password\" placeholder=\"Password\" name=\"password\"></ion-input>\n      </ion-item>\n\n      <!-- SignUp Button -->\n      <div class=\"buttons ion-padding-top\">\n        <ion-button expand=\"block\" color=\"color1\" routerLink=\"/tabs/tab1\" routerDirection=\"root\">\n          <ion-text><strong>SIGN UP</strong></ion-text>\n        </ion-button>\n\n        <p>Or via social media</p>\n\n        <a href=\"\" target=\"_blank\" class=\"btn-social btn-facebook\"><i class=\"fab fa-facebook-f\"></i></a>\n        <a href=\"\" target=\"_blank\" class=\"btn-social btn-google-plus\"><i class=\"fab fa-google-plus-g\"></i></a>\n        <a href=\"\" target=\"_blank\" class=\"btn-social btn-instagram\"><i class=\"fab fa-instagram\"></i></a>\n        <a href=\"\" target=\"_blank\" class=\"btn-social btn-twitter\"><i class=\"fab fa-twitter\"></i></a>\n\n      </div>\n    </form>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/auth/signup/signup.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/auth/signup/signup.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#signup {\n  text-align: center;\n}\n#signup .section_one {\n  height: 10%;\n}\n#signup .section_one h2 {\n  font-weight: 900;\n  padding-top: 2%;\n}\n#signup .section_one p {\n  color: var(--ion-color-color1);\n  font-weight: bold;\n}\n#signup a.btn-social,\n#signup .btn-social {\n  border-radius: 50%;\n  color: #ffffff !important;\n  display: inline-block;\n  height: 35px;\n  line-height: 35px;\n  margin: 8px 4px;\n  text-align: center;\n  text-decoration: none;\n  -webkit-transition: background-color 0.3s;\n  transition: background-color 0.3s;\n  width: 35px;\n}\n#signup .btn-facebook {\n  background-color: #3b5998;\n}\n#signup .btn-google-plus {\n  background-color: #dd4b39;\n}\n#signup .btn-instagram {\n  background-color: #3f729b;\n}\n#signup .btn-twitter {\n  background-color: #55acee;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZnJvemF5YXNtaW4vYXBwcy9pb25pYy9lY29tbWVyY2Uvc3JjL2FwcC9wYWdlcy9hdXRoL3NpZ251cC9zaWdudXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2F1dGgvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FDQ0o7QURDSTtFQUNJLFdBQUE7QUNDUjtBRENRO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FDQ1o7QURFUTtFQUNJLDhCQUFBO0VBQ0EsaUJBQUE7QUNBWjtBRElJOztFQUVJLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUNBQUE7RUFBQSxpQ0FBQTtFQUNBLFdBQUE7QUNGUjtBREtJO0VBQ0kseUJBQUE7QUNIUjtBRE1JO0VBQ0kseUJBQUE7QUNKUjtBRE9JO0VBQ0kseUJBQUE7QUNMUjtBRFFJO0VBQ0kseUJBQUE7QUNOUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F1dGgvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzaWdudXAge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgIC5zZWN0aW9uX29uZSB7XG4gICAgICAgIGhlaWdodDogMTAlO1xuXG4gICAgICAgIGgyIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMiU7XG4gICAgICAgIH1cblxuICAgICAgICBwIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItY29sb3IxKTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYS5idG4tc29jaWFsLFxuICAgIC5idG4tc29jaWFsIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDM1cHg7XG4gICAgICAgIG1hcmdpbjogOHB4IDRweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjNzO1xuICAgICAgICB3aWR0aDogMzVweDtcbiAgICB9XG5cbiAgICAuYnRuLWZhY2Vib29rIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzNiNTk5ODtcbiAgICB9XG5cbiAgICAuYnRuLWdvb2dsZS1wbHVzIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RkNGIzOTtcbiAgICB9XG5cbiAgICAuYnRuLWluc3RhZ3JhbSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzZjcyOWI7XG4gICAgfVxuXG4gICAgLmJ0bi10d2l0dGVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzU1YWNlZTtcbiAgICB9XG59IiwiI3NpZ251cCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiNzaWdudXAgLnNlY3Rpb25fb25lIHtcbiAgaGVpZ2h0OiAxMCU7XG59XG4jc2lnbnVwIC5zZWN0aW9uX29uZSBoMiB7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIHBhZGRpbmctdG9wOiAyJTtcbn1cbiNzaWdudXAgLnNlY3Rpb25fb25lIHAge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWNvbG9yMSk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuI3NpZ251cCBhLmJ0bi1zb2NpYWwsXG4jc2lnbnVwIC5idG4tc29jaWFsIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogMzVweDtcbiAgbGluZS1oZWlnaHQ6IDM1cHg7XG4gIG1hcmdpbjogOHB4IDRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcbiAgd2lkdGg6IDM1cHg7XG59XG4jc2lnbnVwIC5idG4tZmFjZWJvb2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I1OTk4O1xufVxuI3NpZ251cCAuYnRuLWdvb2dsZS1wbHVzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkNGIzOTtcbn1cbiNzaWdudXAgLmJ0bi1pbnN0YWdyYW0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y3MjliO1xufVxuI3NpZ251cCAuYnRuLXR3aXR0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTVhY2VlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/auth/signup/signup.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/auth/signup/signup.component.ts ***!
  \*******************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SignupComponent = class SignupComponent {
    constructor() { }
    ngOnInit() { }
};
SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: __webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/auth/signup/signup.component.html"),
        styles: [__webpack_require__(/*! ./signup.component.scss */ "./src/app/pages/auth/signup/signup.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SignupComponent);



/***/ }),

/***/ "./src/app/pages/auth/signup/signup.module.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/auth/signup/signup.module.ts ***!
  \****************************************************/
/*! exports provided: SignupModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupModule", function() { return SignupModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup.component */ "./src/app/pages/auth/signup/signup.component.ts");







let SignupModule = class SignupModule {
};
SignupModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"]
                }
            ])
        ],
        declarations: [_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"]]
    })
], SignupModule);



/***/ })

}]);
//# sourceMappingURL=pages-auth-signup-signup-module-es2015.js.map