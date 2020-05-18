(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["category-category-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/category/category.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/category/category.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n  - Category Screen\n  - @author    ThemesBuckets <themesbuckets@gmail.com>\n  - @copyright Copyright (c) 2020\n  - @license   AppsPlaces\n-->\n\n<!-- Header -->\n<ion-header no-border>\n  <ion-toolbar color=\"color1\">\n\n    <!-- Side menu option -->\n    <ion-buttons slot=\"start\">\n      <ion-menu-toggle menu=\"pages\">\n        <ion-button color=\"white\">\n          <ion-icon name=\"md-list\" slot=\"icon-only\"></ion-icon>\n        </ion-button>\n      </ion-menu-toggle>\n    </ion-buttons>\n\n    <!-- Page tile -->\n    <ion-title>Categories</ion-title>\n\n    <!-- Cart Button Option -->\n    <ion-buttons slot=\"end\">\n      <ion-button color=\"white\" (click)=\"gotoCartPage()\">\n        <ion-icon name=\"cart\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<!-- Main Contents -->\n<ion-content id=\"category\" class=\"ion-padding\">\n\n  <!-- Category View Options -->\n  <div class=\"ion-text-end\">\n\n    <!-- One Column Option -->\n    <ion-button fill=\"clear\" [color]=\"oneColumn ? 'color1' : 'color2'\" class=\"ion-no-padding\" (click)=\"showOneColumn()\">\n      <ion-icon slot=\"icon-only\" name=\"md-square\"></ion-icon>\n    </ion-button>\n\n    <!-- Grid View Option -->\n    <ion-button fill=\"clear\" [color]=\"grid ? 'color1' : 'color2'\" class=\"ion-no-padding\" (click)=\"showGrid()\">\n      <ion-icon slot=\"icon-only\" name=\"md-grid\"></ion-icon>\n    </ion-button>\n\n    <!-- List view option -->\n    <ion-button fill=\"clear\" [color]=\"list ? 'color1' : 'color2'\" class=\"ion-no-padding\" (click)=\"showList()\">\n      <ion-icon slot=\"icon-only\" name=\"list\"></ion-icon>\n    </ion-button>\n  </div>\n  <!-- End Category View Options -->\n\n  <!-- Grid View Contents -->\n  <ion-grid class=\"ion-no-padding\">\n    <ion-row *ngIf=\"grid\">\n      <ion-col size=\"6\" *ngFor=\"let item of categories\">\n        <ion-card class=\"ion-no-padding ion-no-margin\" routerLink=\"/tabs/products\" routerDirection=\"root\">\n          <img [src]=\"item.image\" />\n          <ion-card-header>\n            <ion-card-subtitle>{{item.name}}</ion-card-subtitle>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <!-- One COlumn View Contents -->\n    <ion-row *ngIf=\"oneColumn\">\n      <ion-col size=\"12\" *ngFor=\"let item of categories\">\n        <ion-card class=\"ion-no-padding ion-no-margin\" routerLink=\"/tabs/products\" routerDirection=\"root\">\n          <img [src]=\"item.image\" />\n          <ion-card-header>\n            <ion-card-subtitle>{{item.name}}</ion-card-subtitle>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!-- List View Contents -->\n  <ion-list lines=\"none\" *ngIf=\"list\">\n    <ion-item class=\"ion-padding-bottom\" *ngFor=\"let item of categories\" routerLink=\"/tabs/products\"\n      routerDirection=\"root\">\n      <ion-thumbnail slot=\"start\">\n        <img style=\"vertical-align: middle;\" [src]=\"item.image\">\n      </ion-thumbnail>\n\n      <ion-label>\n        <h2> {{ item.name }}</h2>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/category/category.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/category/category.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#category ion-list {\n  margin-bottom: 0px !important;\n}\n#category .item ion-thumbnail {\n  width: 140px;\n  height: 90px;\n}\n#category .item ion-thumbnail img {\n  width: 140px;\n  height: 90px;\n  border-radius: 5px;\n}\n#category .item h2 {\n  font-size: 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZnJvemF5YXNtaW4vYXBwcy9pb25pYy9lY29tbWVyY2Uvc3JjL2FwcC9wYWdlcy9jYXRlZ29yeS9jYXRlZ29yeS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvY2F0ZWdvcnkvY2F0ZWdvcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSw2QkFBQTtBQ0FSO0FESVE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtBQ0ZaO0FESVk7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDRmhCO0FETVE7RUFDSSxpQkFBQTtBQ0paIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2F0ZWdvcnkvY2F0ZWdvcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY2F0ZWdvcnkge1xuICAgIGlvbi1saXN0IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLml0ZW0ge1xuICAgICAgICBpb24tdGh1bWJuYWlsIHtcbiAgICAgICAgICAgIHdpZHRoOiAxNDBweDtcbiAgICAgICAgICAgIGhlaWdodDogOTBweDtcblxuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTQwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA5MHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGgyIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICB9XG4gICAgfVxufSIsIiNjYXRlZ29yeSBpb24tbGlzdCB7XG4gIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xufVxuI2NhdGVnb3J5IC5pdGVtIGlvbi10aHVtYm5haWwge1xuICB3aWR0aDogMTQwcHg7XG4gIGhlaWdodDogOTBweDtcbn1cbiNjYXRlZ29yeSAuaXRlbSBpb24tdGh1bWJuYWlsIGltZyB7XG4gIHdpZHRoOiAxNDBweDtcbiAgaGVpZ2h0OiA5MHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4jY2F0ZWdvcnkgLml0ZW0gaDIge1xuICBmb250LXNpemU6IDEuNXJlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/category/category.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/category/category.component.ts ***!
  \******************************************************/
/*! exports provided: CategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cart/cart.component */ "./src/app/pages/cart/cart.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/**
 * Category Screen
 * @author    ThemesBuckets <themesbuckets@gmail.com>
 * @copyright Copyright (c) 2020
 * @license   AppsPlaces
 */





let CategoryComponent = class CategoryComponent {
    constructor(modalController, categoryService) {
        this.modalController = modalController;
        this.categoryService = categoryService;
        this.grid = true;
        this.oneColumn = false;
        this.list = false;
    }
    ngOnInit() {
        this.getCategories();
    }
    // Get list of categories
    getCategories() {
        this.categories = this.categoryService.categoryList();
    }
    // One column view function
    showOneColumn() {
        this.oneColumn = true;
        this.grid = false;
        this.list = false;
    }
    // Grid view function
    showGrid() {
        this.grid = true;
        this.oneColumn = false;
        this.list = false;
    }
    // List view function
    showList() {
        this.list = true;
        this.grid = false;
        this.oneColumn = false;
    }
    // Go to cart page function
    gotoCartPage() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_3__["CartComponent"]
            });
            return yield modal.present();
        });
    }
};
CategoryComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _services_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"] }
];
CategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-category',
        template: __webpack_require__(/*! raw-loader!./category.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/category/category.component.html"),
        styles: [__webpack_require__(/*! ./category.component.scss */ "./src/app/pages/category/category.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
        _services_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"]])
], CategoryComponent);



/***/ }),

/***/ "./src/app/pages/category/category.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/category/category.module.ts ***!
  \***************************************************/
/*! exports provided: CategoryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryModule", function() { return CategoryModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _category_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./category.component */ "./src/app/pages/category/category.component.ts");







let CategoryModule = class CategoryModule {
};
CategoryModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _category_component__WEBPACK_IMPORTED_MODULE_6__["CategoryComponent"]
                }
            ])
        ],
        declarations: [_category_component__WEBPACK_IMPORTED_MODULE_6__["CategoryComponent"]],
    })
], CategoryModule);



/***/ })

}]);
//# sourceMappingURL=category-category-module-es2015.js.map