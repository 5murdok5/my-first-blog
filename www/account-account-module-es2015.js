(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["account-account-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/account/account.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/account/account.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n  - Account Screen\n  - @author    ThemesBuckets <themesbuckets@gmail.com>\n  - @copyright Copyright (c) 2020\n  - @license   AppsPlaces\n-->\n\n<!-- Header -->\n<ion-header no-border>\n  <ion-toolbar color=\"color1\">\n\n    <!-- Side Menu -->\n    <ion-buttons slot=\"start\">\n      <ion-menu-toggle menu=\"pages\">\n        <ion-button color=\"white\">\n          <ion-icon name=\"md-list\" slot=\"icon-only\"></ion-icon>\n        </ion-button>\n      </ion-menu-toggle>\n    </ion-buttons>\n\n    <!-- Page title -->\n    <ion-title>Account</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<!-- Contents -->\n<ion-content id=\"account\" class=\"ion-padding\">\n\n  <!-- User/Profile Infos -->\n  <ion-item lines=\"none\">\n    <!-- Avatar/Image of User -->\n    <ion-avatar slot=\"end\">\n      <img src=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\">\n    </ion-avatar>\n\n    <!-- Name of User -->\n    <ion-label>\n      <h2>Alessia McKenzie</h2>\n      <p>Silver Member</p>\n    </ion-label>\n  </ion-item>\n\n  <!-- Some Menu Options -->\n  <ion-card>\n    <ion-grid>\n      <ion-row class=\"ion-text-center\">\n        <ion-col>\n          <ion-icon name=\"heart\" style=\"zoom:1.5;\"></ion-icon><br />\n          <ion-text>Wish List</ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-icon name=\"checkbox-outline\" style=\"zoom:1.5;\"></ion-icon><br />\n          Orders\n        </ion-col>\n        <ion-col>\n          <ion-icon name=\"cart\" style=\"zoom:1.5;\"></ion-icon><br />\n          Cart\n        </ion-col>\n        <ion-col>\n          <ion-icon name=\"gift\" style=\"zoom:1.5;\"></ion-icon><br />\n          Deals\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n\n  <!-- Some Orders Option -->\n  <ion-card>\n    <ion-item-group>\n      <ion-item-divider>\n        <ion-label>Orders</ion-label>\n      </ion-item-divider>\n\n      <ion-item lines=\"none\">\n        <ion-label>Unpaid</ion-label>\n        <ion-icon name=\"arrow-forward\" size=\"small\" slot=\"end\"></ion-icon>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-label>To be shipped</ion-label>\n        <ion-icon name=\"arrow-forward\" size=\"small\" slot=\"end\"></ion-icon>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-label>Shipped</ion-label>\n        <ion-icon name=\"arrow-forward\" size=\"small\" slot=\"end\"></ion-icon>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-label>To be reviewed</ion-label>\n        <ion-icon name=\"arrow-forward\" size=\"small\" slot=\"end\"></ion-icon>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-label>In dispute</ion-label>\n        <ion-icon name=\"arrow-forward\" size=\"small\" slot=\"end\"></ion-icon>\n      </ion-item>\n    </ion-item-group>\n  </ion-card>\n\n  <ion-card>\n    <ion-item-group>\n      <ion-item lines=\"none\">\n        <ion-label>Wallet</ion-label>\n        <ion-icon name=\"arrow-forward\" size=\"small\" slot=\"end\"></ion-icon>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-label>Shipping Address</ion-label>\n        <ion-icon name=\"arrow-forward\" size=\"small\" slot=\"end\"></ion-icon>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-label>Redeem invite code</ion-label>\n        <ion-icon name=\"arrow-forward\" size=\"small\" slot=\"end\"></ion-icon>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-label>Questions & Answers</ion-label>\n        <ion-icon name=\"arrow-forward\" size=\"small\" slot=\"end\"></ion-icon>\n      </ion-item>\n    </ion-item-group>\n  </ion-card>\n\n  <ion-card>\n    <ion-item-group>\n      <ion-item lines=\"none\">\n        <ion-label>Settings</ion-label>\n        <ion-icon name=\"arrow-forward\" size=\"small\" slot=\"end\"></ion-icon>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-label>App Suggestion</ion-label>\n        <ion-icon name=\"arrow-forward\" size=\"small\" slot=\"end\"></ion-icon>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-label>Help Center</ion-label>\n        <ion-icon name=\"arrow-forward\" size=\"small\" slot=\"end\"></ion-icon>\n      </ion-item>\n    </ion-item-group>\n  </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/account/account.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/account/account.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#account h2 {\n  font-size: 1.5rem;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZnJvemF5YXNtaW4vYXBwcy9pb25pYy9lY29tbWVyY2Uvc3JjL2FwcC9wYWdlcy9hY2NvdW50L2FjY291bnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2FjY291bnQvYWNjb3VudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7QUNBUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FjY291bnQvYWNjb3VudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNhY2NvdW50IHtcbiAgICBoMiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG59IiwiI2FjY291bnQgaDIge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/account/account.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/account/account.component.ts ***!
  \****************************************************/
/*! exports provided: AccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return AccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AccountComponent = class AccountComponent {
    constructor() { }
    ngOnInit() { }
};
AccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-account',
        template: __webpack_require__(/*! raw-loader!./account.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/account/account.component.html"),
        styles: [__webpack_require__(/*! ./account.component.scss */ "./src/app/pages/account/account.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AccountComponent);



/***/ }),

/***/ "./src/app/pages/account/account.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/account/account.module.ts ***!
  \*************************************************/
/*! exports provided: AccountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountModule", function() { return AccountModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _account_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./account.component */ "./src/app/pages/account/account.component.ts");







let AccountModule = class AccountModule {
};
AccountModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _account_component__WEBPACK_IMPORTED_MODULE_6__["AccountComponent"]
                }
            ])
        ],
        declarations: [_account_component__WEBPACK_IMPORTED_MODULE_6__["AccountComponent"]]
    })
], AccountModule);



/***/ })

}]);
//# sourceMappingURL=account-account-module-es2015.js.map