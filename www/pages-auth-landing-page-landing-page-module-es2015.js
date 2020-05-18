(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-auth-landing-page-landing-page-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/auth/landing-page/landing-page.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/auth/landing-page/landing-page.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n  - Landing Page Screen\n  - @author    ThemesBuckets <themesbuckets@gmail.com>\n  - @copyright Copyright (c) 2020\n  - @license   AppsPlaces\n-->\n\n<ion-content id=\"landing-page\" fullscreen>\n  <div class=\"section_one\">\n    <h2>WELLCOME</h2>\n    <p>Buy product online or offline</p>\n  </div>\n\n  <div class=\"section_two\">\n    <img class=\"ion-padding\" src=\"assets/images/girls-shopping.jpg\" />\n  </div>\n\n  <div class=\"section_three\">\n    <p class=\"ion-padding\">It is a long established fact that a reader will be distracted by the readable content of a\n      page when looking at its layout.</p>\n\n    <!-- Button Options -->\n    <div class=\"ion-padding\">\n      <ion-button expand=\"block\" color=\"color1\" routerLink=\"/signin\" routerDirection=\"root\">Login</ion-button>\n      <ion-button expand=\"block\" fill=\"outline\" color=\"color1\" routerLink=\"/signup\" routerDirection=\"root\">Sign Up\n      </ion-button>\n\n      <p>Or via social media</p>\n\n      <a href=\"\" target=\"_blank\" class=\"btn-social btn-facebook\"><i class=\"fab fa-facebook-f\"></i></a>\n      <a href=\"\" target=\"_blank\" class=\"btn-social btn-google-plus\"><i class=\"fab fa-google-plus-g\"></i></a>\n      <a href=\"\" target=\"_blank\" class=\"btn-social btn-instagram\"><i class=\"fab fa-instagram\"></i></a>\n      <a href=\"\" target=\"_blank\" class=\"btn-social btn-twitter\"><i class=\"fab fa-twitter\"></i></a>\n\n    </div>\n  </div>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/auth/landing-page/landing-page.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/auth/landing-page/landing-page.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#landing-page {\n  text-align: center;\n}\n#landing-page .section_one {\n  height: 15%;\n}\n#landing-page .section_one h2 {\n  font-weight: 900;\n  padding-top: 5%;\n}\n#landing-page .section_one p {\n  color: var(--ion-color-color1);\n  font-weight: bold;\n}\n#landing-page .section_two {\n  height: 30%;\n}\n#landing-page .section_three {\n  height: 55%;\n  padding: 10px;\n}\n#landing-page .section_three p {\n  font-size: 1rem;\n  color: #6d6b6b;\n}\n#landing-page a.btn-social,\n#landing-page .btn-social {\n  border-radius: 50%;\n  color: #ffffff !important;\n  display: inline-block;\n  height: 54px;\n  line-height: 54px;\n  margin: 8px 4px;\n  text-align: center;\n  text-decoration: none;\n  -webkit-transition: background-color 0.3s;\n  transition: background-color 0.3s;\n  width: 54px;\n}\n#landing-page .btn-facebook {\n  background-color: #3b5998;\n}\n#landing-page .btn-google-plus {\n  background-color: #dd4b39;\n}\n#landing-page .btn-instagram {\n  background-color: #3f729b;\n}\n#landing-page .btn-twitter {\n  background-color: #55acee;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZnJvemF5YXNtaW4vYXBwcy9pb25pYy9lY29tbWVyY2Uvc3JjL2FwcC9wYWdlcy9hdXRoL2xhbmRpbmctcGFnZS9sYW5kaW5nLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2F1dGgvbGFuZGluZy1wYWdlL2xhbmRpbmctcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FDQ0o7QURDSTtFQUNJLFdBQUE7QUNDUjtBRENRO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FDQ1o7QURFUTtFQUNJLDhCQUFBO0VBQ0EsaUJBQUE7QUNBWjtBRElJO0VBQ0ksV0FBQTtBQ0ZSO0FES0k7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBQ0hSO0FES1E7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQ0haO0FET0k7O0VBRUksa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSx5Q0FBQTtFQUFBLGlDQUFBO0VBQ0EsV0FBQTtBQ0xSO0FEUUk7RUFDSSx5QkFBQTtBQ05SO0FEU0k7RUFDSSx5QkFBQTtBQ1BSO0FEVUk7RUFDSSx5QkFBQTtBQ1JSO0FEV0k7RUFDSSx5QkFBQTtBQ1RSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYXV0aC9sYW5kaW5nLXBhZ2UvbGFuZGluZy1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2xhbmRpbmctcGFnZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgLnNlY3Rpb25fb25lIHtcbiAgICAgICAgaGVpZ2h0OiAxNSU7XG5cbiAgICAgICAgaDIge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA1JTtcbiAgICAgICAgfVxuXG4gICAgICAgIHAge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1jb2xvcjEpO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuc2VjdGlvbl90d28ge1xuICAgICAgICBoZWlnaHQ6IDMwJTtcbiAgICB9XG5cbiAgICAuc2VjdGlvbl90aHJlZSB7XG4gICAgICAgIGhlaWdodDogNTUlO1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuXG4gICAgICAgIHAge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgY29sb3I6ICM2ZDZiNmI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhLmJ0bi1zb2NpYWwsXG4gICAgLmJ0bi1zb2NpYWwge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgaGVpZ2h0OiA1NHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogNTRweDtcbiAgICAgICAgbWFyZ2luOiA4cHggNHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuM3M7XG4gICAgICAgIHdpZHRoOiA1NHB4O1xuICAgIH1cblxuICAgIC5idG4tZmFjZWJvb2sge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I1OTk4O1xuICAgIH1cblxuICAgIC5idG4tZ29vZ2xlLXBsdXMge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGQ0YjM5O1xuICAgIH1cblxuICAgIC5idG4taW5zdGFncmFtIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzNmNzI5YjtcbiAgICB9XG5cbiAgICAuYnRuLXR3aXR0ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTVhY2VlO1xuICAgIH1cblxufSIsIiNsYW5kaW5nLXBhZ2Uge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4jbGFuZGluZy1wYWdlIC5zZWN0aW9uX29uZSB7XG4gIGhlaWdodDogMTUlO1xufVxuI2xhbmRpbmctcGFnZSAuc2VjdGlvbl9vbmUgaDIge1xuICBmb250LXdlaWdodDogOTAwO1xuICBwYWRkaW5nLXRvcDogNSU7XG59XG4jbGFuZGluZy1wYWdlIC5zZWN0aW9uX29uZSBwIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1jb2xvcjEpO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbiNsYW5kaW5nLXBhZ2UgLnNlY3Rpb25fdHdvIHtcbiAgaGVpZ2h0OiAzMCU7XG59XG4jbGFuZGluZy1wYWdlIC5zZWN0aW9uX3RocmVlIHtcbiAgaGVpZ2h0OiA1NSU7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4jbGFuZGluZy1wYWdlIC5zZWN0aW9uX3RocmVlIHAge1xuICBmb250LXNpemU6IDFyZW07XG4gIGNvbG9yOiAjNmQ2YjZiO1xufVxuI2xhbmRpbmctcGFnZSBhLmJ0bi1zb2NpYWwsXG4jbGFuZGluZy1wYWdlIC5idG4tc29jaWFsIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogNTRweDtcbiAgbGluZS1oZWlnaHQ6IDU0cHg7XG4gIG1hcmdpbjogOHB4IDRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcbiAgd2lkdGg6IDU0cHg7XG59XG4jbGFuZGluZy1wYWdlIC5idG4tZmFjZWJvb2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I1OTk4O1xufVxuI2xhbmRpbmctcGFnZSAuYnRuLWdvb2dsZS1wbHVzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkNGIzOTtcbn1cbiNsYW5kaW5nLXBhZ2UgLmJ0bi1pbnN0YWdyYW0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y3MjliO1xufVxuI2xhbmRpbmctcGFnZSAuYnRuLXR3aXR0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTVhY2VlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/auth/landing-page/landing-page.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/auth/landing-page/landing-page.component.ts ***!
  \*******************************************************************/
/*! exports provided: LandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function() { return LandingPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/**
 * Landing Page Screen
 * @author    ThemesBuckets <themesbuckets@gmail.com>
 * @copyright Copyright (c) 2020
 * @license   AppsPlaces
 *
 * File path - 'src/pages/auth/landing-page/landing-page.component.ts'
 */


let LandingPageComponent = class LandingPageComponent {
    constructor() { }
    ngOnInit() { }
};
LandingPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-landing-page',
        template: __webpack_require__(/*! raw-loader!./landing-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/auth/landing-page/landing-page.component.html"),
        styles: [__webpack_require__(/*! ./landing-page.component.scss */ "./src/app/pages/auth/landing-page/landing-page.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], LandingPageComponent);



/***/ }),

/***/ "./src/app/pages/auth/landing-page/landing-page.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/auth/landing-page/landing-page.module.ts ***!
  \****************************************************************/
/*! exports provided: LandingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageModule", function() { return LandingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _landing_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./landing-page.component */ "./src/app/pages/auth/landing-page/landing-page.component.ts");







let LandingPageModule = class LandingPageModule {
};
LandingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _landing_page_component__WEBPACK_IMPORTED_MODULE_6__["LandingPageComponent"]
                }
            ])
        ],
        declarations: [_landing_page_component__WEBPACK_IMPORTED_MODULE_6__["LandingPageComponent"]]
    })
], LandingPageModule);



/***/ })

}]);
//# sourceMappingURL=pages-auth-landing-page-landing-page-module-es2015.js.map