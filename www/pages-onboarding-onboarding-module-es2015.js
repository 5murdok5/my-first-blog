(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-onboarding-onboarding-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/onboarding/onboarding.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/onboarding/onboarding.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n  - Onbroading Screen\n  - @author    ThemesBuckets <themesbuckets@gmail.com>\n  - @copyright Copyright (c) 2020\n  - @license   AppsPlaces\n-->\n\n<ion-content fullscreen scroll-y=\"false\">\n  <ion-slides pager [options]=\"slideOpts\">\n\n    <!-- Slider Page 1 -->\n    <ion-slide>\n      <div class=\"section_one\">\n        <h2>SELECT GOODS</h2>\n        <p>Wide selection of products</p>\n      </div>\n\n      <div class=\"section_two\">\n        <img class=\"ion-padding\" src=\"assets/images/onbroading-1.png\"/>\n      </div>\n\n      <div class=\"section_three\">\n        <p class=\"ion-padding\">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>\n      </div>\n    </ion-slide>\n\n    <!-- Slider Page 2 -->\n    <ion-slide>\n      <div class=\"section_one\">\n        <h2>ADD TO BASKET</h2>\n        <p>Easy to pay and quick delivery</p>\n      </div>\n\n      <div class=\"section_two\">\n        <img class=\"ion-padding\" src=\"assets/images/onbroading-2.jpg\"/>\n      </div>\n\n      <div class=\"section_three\">\n        <p class=\"ion-padding\">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>\n      </div>\n    </ion-slide>\n\n    <!-- Slider Page 3 -->\n    <ion-slide>\n      <div class=\"section_one\">\n        <h2>SHOPPING</h2>\n        <p>Save your money and time</p>\n      </div>\n\n      <div class=\"section_two\">\n        <img class=\"ion-padding\" src=\"assets/images/onbroading-3.jpg\"/>\n      </div>\n\n      <div class=\"section_three\">\n        <p class=\"ion-padding\">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>\n        \n        <!-- Get Started Button -->\n        <div class=\"ion-padding\">\n          <ion-button expand=\"block\" color=\"color1\" routerLink=\"/landing\" routerDirection=\"root\">Get Started</ion-button>\n        </div>\n        \n      </div>\n    </ion-slide>\n\n  </ion-slides>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/onboarding/onboarding.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/onboarding/onboarding.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".swiper-slide {\n  display: block;\n}\n\n.swiper-container {\n  height: 100%;\n}\n\nion-slides {\n  --bullet-background: #6d6b6b;\n  --bullet-background-active: var(--ion-color-color1);\n}\n\n.section_one {\n  height: 15%;\n}\n\n.section_one h2 {\n  font-weight: 900;\n  padding-top: 10%;\n}\n\n.section_one p {\n  color: var(--ion-color-color1);\n  font-weight: bold;\n}\n\n.section_two {\n  height: 50%;\n}\n\n.section_two img {\n  margin-top: 5%;\n  height: 70%;\n}\n\n.section_three {\n  height: 30%;\n  padding: 10px;\n}\n\n.section_three p {\n  font-size: 1rem;\n  color: #6d6b6b;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZnJvemF5YXNtaW4vYXBwcy9pb25pYy9lY29tbWVyY2Uvc3JjL2FwcC9wYWdlcy9vbmJvYXJkaW5nL29uYm9hcmRpbmcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL29uYm9hcmRpbmcvb25ib2FyZGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7QUNDSjs7QURFQTtFQUNJLDRCQUFBO0VBQ0EsbURBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7QUNDSjs7QURDSTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDUjs7QURFSTtFQUNJLDhCQUFBO0VBQ0EsaUJBQUE7QUNBUjs7QURJQTtFQUNJLFdBQUE7QUNESjs7QURJSTtFQUNJLGNBQUE7RUFDQSxXQUFBO0FDRlI7O0FETUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBQ0hKOztBREtJO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUNIUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL29uYm9hcmRpbmcvb25ib2FyZGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zd2lwZXItc2xpZGUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uc3dpcGVyLWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG5pb24tc2xpZGVzIHtcbiAgICAtLWJ1bGxldC1iYWNrZ3JvdW5kOiAjNmQ2YjZiO1xuICAgIC0tYnVsbGV0LWJhY2tncm91bmQtYWN0aXZlOiB2YXIoLS1pb24tY29sb3ItY29sb3IxKTtcbn1cblxuLnNlY3Rpb25fb25lIHtcbiAgICBoZWlnaHQ6IDE1JTtcblxuICAgIGgyIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICAgICAgcGFkZGluZy10b3A6IDEwJTtcbiAgICB9XG5cbiAgICBwIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1jb2xvcjEpO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG59XG5cbi5zZWN0aW9uX3R3byB7XG4gICAgaGVpZ2h0OiA1MCU7XG5cblxuICAgIGltZyB7XG4gICAgICAgIG1hcmdpbi10b3A6IDUlO1xuICAgICAgICBoZWlnaHQ6IDcwJTtcbiAgICB9XG59XG5cbi5zZWN0aW9uX3RocmVlIHtcbiAgICBoZWlnaHQ6IDMwJTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuXG4gICAgcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgY29sb3I6ICM2ZDZiNmI7XG4gICAgfVxufSIsIi5zd2lwZXItc2xpZGUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnN3aXBlci1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmlvbi1zbGlkZXMge1xuICAtLWJ1bGxldC1iYWNrZ3JvdW5kOiAjNmQ2YjZiO1xuICAtLWJ1bGxldC1iYWNrZ3JvdW5kLWFjdGl2ZTogdmFyKC0taW9uLWNvbG9yLWNvbG9yMSk7XG59XG5cbi5zZWN0aW9uX29uZSB7XG4gIGhlaWdodDogMTUlO1xufVxuLnNlY3Rpb25fb25lIGgyIHtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgcGFkZGluZy10b3A6IDEwJTtcbn1cbi5zZWN0aW9uX29uZSBwIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1jb2xvcjEpO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnNlY3Rpb25fdHdvIHtcbiAgaGVpZ2h0OiA1MCU7XG59XG4uc2VjdGlvbl90d28gaW1nIHtcbiAgbWFyZ2luLXRvcDogNSU7XG4gIGhlaWdodDogNzAlO1xufVxuXG4uc2VjdGlvbl90aHJlZSB7XG4gIGhlaWdodDogMzAlO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLnNlY3Rpb25fdGhyZWUgcCB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY29sb3I6ICM2ZDZiNmI7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/onboarding/onboarding.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/onboarding/onboarding.component.ts ***!
  \**********************************************************/
/*! exports provided: OnboardingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnboardingComponent", function() { return OnboardingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/**
 * Onbroading Screen
 * @author    ThemesBuckets <themesbuckets@gmail.com>
 * @copyright Copyright (c) 2020
 * @license   AppsPlaces
 *
 * File path - 'src/pages/onboarding/onboarding.component.ts'
 */


let OnboardingComponent = class OnboardingComponent {
    constructor() {
        // Slider Options
        this.slideOpts = {
            initialSlide: 0,
            loop: true,
            autoplay: true,
            speed: 400,
            pagination: {
                el: '.swiper-pagination',
                dynamicBullets: true,
            },
        };
    }
    ngOnInit() { }
};
OnboardingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-onboarding',
        template: __webpack_require__(/*! raw-loader!./onboarding.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/onboarding/onboarding.component.html"),
        styles: [__webpack_require__(/*! ./onboarding.component.scss */ "./src/app/pages/onboarding/onboarding.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], OnboardingComponent);



/***/ }),

/***/ "./src/app/pages/onboarding/onboarding.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/onboarding/onboarding.module.ts ***!
  \*******************************************************/
/*! exports provided: OnboardingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnboardingModule", function() { return OnboardingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _onboarding_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./onboarding.component */ "./src/app/pages/onboarding/onboarding.component.ts");







let OnboardingModule = class OnboardingModule {
};
OnboardingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _onboarding_component__WEBPACK_IMPORTED_MODULE_6__["OnboardingComponent"]
                }
            ])
        ],
        declarations: [_onboarding_component__WEBPACK_IMPORTED_MODULE_6__["OnboardingComponent"]]
    })
], OnboardingModule);



/***/ })

}]);
//# sourceMappingURL=pages-onboarding-onboarding-module-es2015.js.map