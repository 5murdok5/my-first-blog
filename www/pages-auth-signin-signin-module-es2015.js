(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-auth-signin-signin-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/auth/signin/signin.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/auth/signin/signin.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n  - SignIn/Login Screen\n  - @author    ThemesBuckets <themesbuckets@gmail.com>\n  - @copyright Copyright (c) 2020\n  - @license   AppsPlaces\n-->\n\n<!-- Header -->\n<ion-header no-border>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"color1\" default-href=\"\" text=\"\" icon=\"arrow-round-back\" routerLink=\"/landing\"\n        routerDirection=\"root\">\n      </ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<!-- Contents -->\n<ion-content id=\"signin\" fullscreen>\n  <div class=\"section_one\">\n    <h2>LOGIN</h2>\n    <p>Buy product online or offline</p>\n  </div>\n\n  <div class=\"section_two ion-padding\">\n    <img class=\"ion-padding\" src=\"assets/images/eCommerce-img.png\" />\n\n    <!-- SignIn Form -->\n    <form class=\"ion-padding\">\n      <!-- Email -->\n      <ion-item>\n        <ion-label>\n          <ion-icon name=\"md-mail\" color=\"color2\"></ion-icon>\n        </ion-label>\n        <ion-input type=\"email\" placeholder=\"Email\" name=\"email\"></ion-input>\n      </ion-item>\n\n      <!-- Password -->\n      <ion-item class=\"ion-padding-top\">\n        <ion-label>\n          <ion-icon name=\"md-eye\" color=\"color2\"></ion-icon>\n        </ion-label>\n        <ion-input type=\"password\" placeholder=\"Password\" name=\"password\"></ion-input>\n      </ion-item>\n\n      <!-- Forget Password Button -->\n      <ion-button expand=\"block\" color=\"color2\" fill=\"clear\" slot=\"end\" routerLink=\"/forget-password\"\n        routerDirection=\"root\">\n        Forget Password?\n      </ion-button>\n\n\n      <!-- SignIn Buttons -->\n      <div class=\"buttons\">\n        <ion-button expand=\"block\" color=\"color1\" routerLink=\"/tabs/tab1\" routerDirection=\"root\">\n          <ion-text><strong>SIGN IN</strong></ion-text>\n        </ion-button>\n\n        <p>Or via social media</p>\n\n        <a href=\"\" target=\"_blank\" class=\"btn-social btn-facebook\"><i class=\"fab fa-facebook-f\"></i></a>\n        <a href=\"\" target=\"_blank\" class=\"btn-social btn-google-plus\"><i class=\"fab fa-google-plus-g\"></i></a>\n        <a href=\"\" target=\"_blank\" class=\"btn-social btn-instagram\"><i class=\"fab fa-instagram\"></i></a>\n        <a href=\"\" target=\"_blank\" class=\"btn-social btn-twitter\"><i class=\"fab fa-twitter\"></i></a>\n\n      </div>\n    </form>\n  </div>\n\n  <!-- SignUp Buttons -->\n  <div class=\"section_three\">\n    <ion-button fill=\"clear\" color=\"color2\" routerLink=\"/signup\" routerDirection=\"root\">\n      <span>Don't have an account? <b>Sign Up</b></span>\n    </ion-button>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/auth/signin/signin.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/auth/signin/signin.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#signin {\n  text-align: center;\n}\n#signin .section_one {\n  height: 10%;\n}\n#signin .section_one h2 {\n  font-weight: 900;\n  padding-top: 2%;\n}\n#signin .section_one p {\n  color: var(--ion-color-color1);\n  font-weight: bold;\n}\n#signin .section_two {\n  height: 80%;\n}\n#signin .section_two img {\n  height: 40%;\n}\n#signin .section_three {\n  height: 5%;\n}\n#signin a.btn-social,\n#signin .btn-social {\n  border-radius: 50%;\n  color: #ffffff !important;\n  display: inline-block;\n  height: 35px;\n  line-height: 35px;\n  margin: 8px 4px;\n  text-align: center;\n  text-decoration: none;\n  -webkit-transition: background-color 0.3s;\n  transition: background-color 0.3s;\n  width: 35px;\n}\n#signin .btn-facebook {\n  background-color: #3b5998;\n}\n#signin .btn-google-plus {\n  background-color: #dd4b39;\n}\n#signin .btn-instagram {\n  background-color: #3f729b;\n}\n#signin .btn-twitter {\n  background-color: #55acee;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZnJvemF5YXNtaW4vYXBwcy9pb25pYy9lY29tbWVyY2Uvc3JjL2FwcC9wYWdlcy9hdXRoL3NpZ25pbi9zaWduaW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2F1dGgvc2lnbmluL3NpZ25pbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FDQ0o7QURDSTtFQUNJLFdBQUE7QUNDUjtBRENRO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FDQ1o7QURFUTtFQUNJLDhCQUFBO0VBQ0EsaUJBQUE7QUNBWjtBRElJO0VBQ0ksV0FBQTtBQ0ZSO0FESVE7RUFDSSxXQUFBO0FDRlo7QURNSTtFQUNJLFVBQUE7QUNKUjtBRE9JOztFQUVJLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUNBQUE7RUFBQSxpQ0FBQTtFQUNBLFdBQUE7QUNMUjtBRFFJO0VBQ0kseUJBQUE7QUNOUjtBRFNJO0VBQ0kseUJBQUE7QUNQUjtBRFVJO0VBQ0kseUJBQUE7QUNSUjtBRFdJO0VBQ0kseUJBQUE7QUNUUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F1dGgvc2lnbmluL3NpZ25pbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzaWduaW4ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgIC5zZWN0aW9uX29uZSB7XG4gICAgICAgIGhlaWdodDogMTAlO1xuXG4gICAgICAgIGgyIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMiU7XG4gICAgICAgIH1cblxuICAgICAgICBwIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItY29sb3IxKTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnNlY3Rpb25fdHdvIHtcbiAgICAgICAgaGVpZ2h0OiA4MCU7XG5cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIGhlaWdodDogNDAlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnNlY3Rpb25fdGhyZWUge1xuICAgICAgICBoZWlnaHQ6IDUlO1xuICAgIH1cblxuICAgIGEuYnRuLXNvY2lhbCxcbiAgICAuYnRuLXNvY2lhbCB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICAgICAgICBtYXJnaW46IDhweCA0cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4zcztcbiAgICAgICAgd2lkdGg6IDM1cHg7XG4gICAgfVxuXG4gICAgLmJ0bi1mYWNlYm9vayB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzYjU5OTg7XG4gICAgfVxuXG4gICAgLmJ0bi1nb29nbGUtcGx1cyB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkZDRiMzk7XG4gICAgfVxuXG4gICAgLmJ0bi1pbnN0YWdyYW0ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y3MjliO1xuICAgIH1cblxuICAgIC5idG4tdHdpdHRlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1NWFjZWU7XG4gICAgfVxuXG59IiwiI3NpZ25pbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiNzaWduaW4gLnNlY3Rpb25fb25lIHtcbiAgaGVpZ2h0OiAxMCU7XG59XG4jc2lnbmluIC5zZWN0aW9uX29uZSBoMiB7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIHBhZGRpbmctdG9wOiAyJTtcbn1cbiNzaWduaW4gLnNlY3Rpb25fb25lIHAge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWNvbG9yMSk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuI3NpZ25pbiAuc2VjdGlvbl90d28ge1xuICBoZWlnaHQ6IDgwJTtcbn1cbiNzaWduaW4gLnNlY3Rpb25fdHdvIGltZyB7XG4gIGhlaWdodDogNDAlO1xufVxuI3NpZ25pbiAuc2VjdGlvbl90aHJlZSB7XG4gIGhlaWdodDogNSU7XG59XG4jc2lnbmluIGEuYnRuLXNvY2lhbCxcbiNzaWduaW4gLmJ0bi1zb2NpYWwge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAzNXB4O1xuICBsaW5lLWhlaWdodDogMzVweDtcbiAgbWFyZ2luOiA4cHggNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xuICB3aWR0aDogMzVweDtcbn1cbiNzaWduaW4gLmJ0bi1mYWNlYm9vayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzYjU5OTg7XG59XG4jc2lnbmluIC5idG4tZ29vZ2xlLXBsdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGQ0YjM5O1xufVxuI3NpZ25pbiAuYnRuLWluc3RhZ3JhbSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjcyOWI7XG59XG4jc2lnbmluIC5idG4tdHdpdHRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NWFjZWU7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/auth/signin/signin.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/auth/signin/signin.component.ts ***!
  \*******************************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SigninComponent = class SigninComponent {
    constructor() { }
    ngOnInit() { }
};
SigninComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signin',
        template: __webpack_require__(/*! raw-loader!./signin.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/auth/signin/signin.component.html"),
        styles: [__webpack_require__(/*! ./signin.component.scss */ "./src/app/pages/auth/signin/signin.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SigninComponent);



/***/ }),

/***/ "./src/app/pages/auth/signin/signin.module.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/auth/signin/signin.module.ts ***!
  \****************************************************/
/*! exports provided: SigninModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninModule", function() { return SigninModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _signin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signin.component */ "./src/app/pages/auth/signin/signin.component.ts");







let SigninModule = class SigninModule {
};
SigninModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _signin_component__WEBPACK_IMPORTED_MODULE_6__["SigninComponent"]
                }
            ])
        ],
        declarations: [_signin_component__WEBPACK_IMPORTED_MODULE_6__["SigninComponent"]]
    })
], SigninModule);



/***/ })

}]);
//# sourceMappingURL=pages-auth-signin-signin-module-es2015.js.map