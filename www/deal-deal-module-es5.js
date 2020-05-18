(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["deal-deal-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/deal/deal.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/deal/deal.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n  - Deal Screen\n  - @author    ThemesBuckets <themesbuckets@gmail.com>\n  - @copyright Copyright (c) 2020\n  - @license   AppsPlaces\n-->\n\n<!-- Header -->\n<ion-header no-border>\n  <ion-toolbar color=\"color1\">\n\n    <!-- Side menu option -->\n    <ion-buttons slot=\"start\">\n      <ion-menu-toggle menu=\"pages\">\n        <ion-button color=\"white\">\n          <ion-icon name=\"md-list\" slot=\"icon-only\"></ion-icon>\n        </ion-button>\n      </ion-menu-toggle>\n    </ion-buttons>\n\n    <!-- Page title -->\n    <ion-title>Deals</ion-title>\n\n    <!-- Cart Button Option -->\n    <ion-buttons slot=\"end\">\n      <ion-button color=\"white\" (click)=\"gotoCartPage()\">\n        <ion-icon name=\"cart\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<!-- Contents -->\n<ion-content id=\"deal\">\n  <ion-card *ngFor=\"let item of deals\">\n\n    <!-- Any deal content image -->\n    <img [src]=\"item.image\" />\n\n    <!-- Wish Button or Product Like/Dislike Button Option -->\n    <ion-fab vertical=\"top\" horizontal=\"end\">\n      <ion-fab-button>\n        <ion-icon color=\"color1\" name=\"heart\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n\n    <!-- Deal contents -->\n    <ion-card-header>\n      <ion-card-title class=\"ion-padding-bottom\">{{item.title}}</ion-card-title>\n      <ion-card-subtitle class=\"ion-text-wrap\">{{item.subTitle}}</ion-card-subtitle>\n      <ion-button color=\"color1\" size=\"small\">Shop Now</ion-button>\n    </ion-card-header>\n  </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/deal/deal.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/deal/deal.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#deal ion-fab-button {\n  --background: transparent;\n  --background-focused: transparent;\n  --background-activated: transparent;\n}\n#deal ion-card-title {\n  font-size: 1.2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZnJvemF5YXNtaW4vYXBwcy9pb25pYy9lY29tbWVyY2Uvc3JjL2FwcC9wYWdlcy9kZWFsL2RlYWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2RlYWwvZGVhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLHlCQUFBO0VBQ0EsaUNBQUE7RUFDQSxtQ0FBQTtBQ0FSO0FER0k7RUFDSSxpQkFBQTtBQ0RSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZGVhbC9kZWFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2RlYWwge1xuICAgIGlvbi1mYWItYnV0dG9uIHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB0cmFuc3BhcmVudDtcbiAgICB9XG5cbiAgICBpb24tY2FyZC10aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIH1cbn0iLCIjZGVhbCBpb24tZmFiLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdHJhbnNwYXJlbnQ7XG59XG4jZGVhbCBpb24tY2FyZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/deal/deal.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/deal/deal.component.ts ***!
  \**********************************************/
/*! exports provided: DealComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealComponent", function() { return DealComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_deals_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/deals.service */ "./src/app/services/deals.service.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cart/cart.component */ "./src/app/pages/cart/cart.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/**
 * Deal Screen
 * @author    ThemesBuckets <themesbuckets@gmail.com>
 * @copyright Copyright (c) 2020
 * @license   AppsPlaces
 */





var DealComponent = /** @class */ (function () {
    function DealComponent(dealsService, modalController) {
        this.dealsService = dealsService;
        this.modalController = modalController;
        this.deals = [];
    }
    DealComponent.prototype.ngOnInit = function () {
        this.getDeals();
    };
    // Get list of deals
    DealComponent.prototype.getDeals = function () {
        this.deals = this.dealsService.getDeals();
    };
    // Go to cart page function
    DealComponent.prototype.gotoCartPage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_3__["CartComponent"]
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DealComponent.ctorParameters = function () { return [
        { type: _services_deals_service__WEBPACK_IMPORTED_MODULE_2__["DealsService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
    ]; };
    DealComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-deal',
            template: __webpack_require__(/*! raw-loader!./deal.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/deal/deal.component.html"),
            styles: [__webpack_require__(/*! ./deal.component.scss */ "./src/app/pages/deal/deal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_deals_service__WEBPACK_IMPORTED_MODULE_2__["DealsService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])
    ], DealComponent);
    return DealComponent;
}());



/***/ }),

/***/ "./src/app/pages/deal/deal.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/deal/deal.module.ts ***!
  \*******************************************/
/*! exports provided: DealModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealModule", function() { return DealModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _deal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./deal.component */ "./src/app/pages/deal/deal.component.ts");







var DealModule = /** @class */ (function () {
    function DealModule() {
    }
    DealModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _deal_component__WEBPACK_IMPORTED_MODULE_6__["DealComponent"]
                    }
                ])
            ],
            declarations: [_deal_component__WEBPACK_IMPORTED_MODULE_6__["DealComponent"]]
        })
    ], DealModule);
    return DealModule;
}());



/***/ })

}]);
//# sourceMappingURL=deal-deal-module-es5.js.map