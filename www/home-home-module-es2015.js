(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/categories/categories.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/categories/categories.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Categories -->\n<div id=\"categories\">\n  <ion-item-divider color=\"white\" class=\"ion-padding-top\">\n    <ion-label color=\"dark\" class=\"text-bold\">Categories</ion-label>\n    <ion-button class=\"ion-margin-end\" size=\"small\" slot=\"end\" color=\"color1\" fill=\"clear\" routerLink=\"/tabs/categories\"\n      routerDirection=\"root\">Sell All</ion-button>\n  </ion-item-divider>\n\n  <ion-grid class=\"ion-no-padding\">\n    <ion-row>\n      <ion-col size=\"6\" *ngFor=\"let item of (categories ? categories.slice(0,2): []); let i=index\">\n        <ion-card class=\"ion-no-padding ion-no-margin\" routerLink=\"/tabs/products\" routerDirection=\"root\">\n          <img [src]=\"item.image\" />\n          <ion-card-header>\n            <ion-card-subtitle>{{item.name}}</ion-card-subtitle>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</div>\n<!-- End Categories -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/featured-products/featured-products.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/featured-products/featured-products.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"featured-products\">\n  <ion-item-divider color=\"white\" class=\"ion-padding-top\">\n    <ion-label color=\"dark\" class=\"text-bold\">Featured Products</ion-label>\n    <ion-button class=\"ion-margin-end\" size=\"small\" slot=\"end\" color=\"color1\" fill=\"clear\" routerLink=\"/tabs/products\"\n      routerDirection=\"root\">Sell All</ion-button>\n  </ion-item-divider>\n\n  <ion-slides [options]=\"slideOpts\" class=\"ion-padding-top\">\n    <ion-slide *ngFor=\"let item of products\">\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <ion-card class=\"ion-no-margin\">\n              <div class=\"card-img\" [style.background-image]=\"'url(' + item.images[0] + ')'\"\n                (click)=\"goToProductDetails(item)\"></div>\n\n              <ion-fab vertical=\"top\" horizontal=\"end\">\n                <ion-fab-button>\n                  <ion-icon color=\"color1\" name=\"heart-empty\" *ngIf=\"!item.isWishlist\"></ion-icon>\n                  <ion-icon color=\"color1\" name=\"heart\" *ngIf=\"item.isWishlist\"></ion-icon>\n                </ion-fab-button>\n              </ion-fab>\n\n              <ion-card-content (click)=\"goToProductDetails(item)\">\n                <ion-row>\n                  <ion-text color=\"color1\">${{item.discountPrice}} &nbsp;</ion-text>\n                  <span class=\"previous-price\"> ${{item.price}}</span>\n                </ion-row>\n                <ion-row class=\"product-name\">\n                  <h4>{{item.name | slice:0:20}}</h4>\n                </ion-row>\n              </ion-card-content>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-slide>\n  </ion-slides>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/home-top-slider/home-top-slider.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/home-top-slider/home-top-slider.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Top Banner Slider -->\n<div id=\"top-slider\">\n  <ion-slides pager=\"true\" [options]=\"slideOpts\" class=\"ion-padding-top\">\n    <ion-slide>\n      <img src=\"assets/images/banner-1.jpg\" />\n    </ion-slide>\n    <ion-slide>\n      <img src=\"assets/images/banner-2.jpg\" />\n    </ion-slide>\n    <ion-slide>\n      <img src=\"assets/images/banner-3.jpg\" />\n    </ion-slide>\n    <ion-slide>\n      <img src=\"assets/images/banner-4.jpg\" />\n    </ion-slide>\n  </ion-slides>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/hot-deals/hot-deals.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/hot-deals/hot-deals.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"hot-deals\">\n  <ion-item-divider color=\"white\" class=\"ion-padding-top\">\n    <ion-label color=\"dark\" class=\"text-bold\">Hot Deals</ion-label>\n    <ion-button class=\"ion-margin-end\" size=\"small\" slot=\"end\" color=\"color1\" fill=\"clear\" routerLink=\"/tabs/tab2\"\n      routerDirection=\"root\">Sell All</ion-button>\n  </ion-item-divider>\n\n  <ion-slides [options]=\"slideOpts\" class=\"ion-padding-top\">\n    <ion-slide *ngFor=\"let item of deals\">\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <ion-card class=\"ion-no-margin\" routerLink=\"/tabs/tab2\" routerDirection=\"root\">\n              <div class=\"card-img\" [style.background-image]=\"'url(' + item.image + ')'\"></div>\n\n              <ion-fab vertical=\"top\" horizontal=\"end\">\n                <ion-fab-button>\n                  <ion-icon color=\"color1\" name=\"heart\"></ion-icon>\n                </ion-fab-button>\n              </ion-fab>\n\n              <ion-card-header>\n                <ion-card-title class=\"ion-padding-bottom\">{{item.title}}</ion-card-title>\n                <ion-card-subtitle class=\"ion-text-wrap\">{{item.subTitle}}</ion-card-subtitle>\n                <ion-button color=\"color1\" size=\"small\">Shop Now</ion-button>\n              </ion-card-header>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-slide>\n  </ion-slides>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/searchbar/searchbar.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/searchbar/searchbar.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"searchbar\">\n  <ion-searchbar placeholder=\"Search your product\" (ionFocus)=\"gotoSearchPage()\"></ion-searchbar>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/home/home.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n  - Home Screen\n  - @author    ThemesBuckets <themesbuckets@gmail.com>\n  - @copyright Copyright (c) 2020\n  - @license   AppsPlaces\n-->\n\n<!-- Header -->\n<ion-header no-border>\n  <ion-toolbar color=\"color1\">\n\n    <!-- Menu Option -->\n    <ion-buttons slot=\"start\">\n      <ion-menu-toggle menu=\"pages\">\n        <ion-button color=\"white\">\n          <ion-icon name=\"md-list\" slot=\"icon-only\"></ion-icon>\n        </ion-button>\n      </ion-menu-toggle>\n    </ion-buttons>\n\n    <!-- Title of the app -->\n    <ion-title>Fulcrumy Store</ion-title>\n\n    <!-- Cart Button Option -->\n    <ion-buttons slot=\"end\">\n      <ion-button color=\"white\" (click)=\"gotoCartPage()\">\n        <ion-icon name=\"cart\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<!-- Contents -->\n<ion-content id=\"home\" fullscreen class=\"ion-padding\">\n\n  <!-- Search bar -->\n  <app-searchbar></app-searchbar>\n\n  <!-- Top Banner Slider -->\n  <app-home-top-slider></app-home-top-slider>\n\n  <!-- Categories -->\n  <app-categories></app-categories>\n\n  <!-- Featured Products -->\n  <app-featured-products></app-featured-products>\n\n  <!-- Hot Deals -->\n  <app-hot-deals></app-hot-deals>\n\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/search/search.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/search/search.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n  - Search Screen\n  - @author    ThemesBuckets <themesbuckets@gmail.com>\n  - @copyright Copyright (c) 2020\n  - @license   AppsPlaces\n-->\n\n<!-- Header -->\n<ion-header no-border>\n  <ion-toolbar color=\"color1\">\n\n    <!-- Back to previous page option button -->\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"white\" default-href=\"\" (click)=\"dismiss()\" text=\"\" icon=\"arrow-round-back\">\n      </ion-back-button>\n    </ion-buttons>\n\n    <!-- Page Title -->\n    <ion-title>Search</ion-title>\n\n    <!-- Cart Button Option -->\n    <ion-buttons slot=\"end\">\n      <ion-button color=\"white\" (click)=\"gotoCartPage()\">\n        <ion-icon name=\"cart\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<!-- Contents -->\n<ion-content id=\"search\" fullscreen class=\"ion-padding\">\n\n  <!-- Search bar -->\n  <ion-searchbar placeholder=\"Search your product\" debounce=\"500\" (ionInput)=\"getProducts($event)\"></ion-searchbar>\n\n  <!-- When search result is empty -->\n  <!-- No products Found -->\n  <ion-grid class=\"ion-padding\" id=\"empty\" *ngIf=\"products.length == 0\" style=\"height: 100%\">\n    <ion-row class=\"ion-align-items-center ion-justify-content-center\" style=\"height: 100%; flex-direction: column\">\n      <div class=\"ion-text-center ion-padding\">\n        <ion-icon name=\"search\" style=\"zoom:5.0;\" color=\"medium\"></ion-icon>\n        <h4>No Search Found</h4>\n        <p>Looks like there are no products available at this moment</p>\n      </div>\n    </ion-row>\n  </ion-grid>\n\n  <!-- Search Result Content -->\n  <ion-grid>\n    <ion-row>\n      <ion-col sizeLg=\"4\" sizeMd=\"4\" sizeXs=\"6\" *ngFor=\"let item of products\">\n        <ion-card class=\"ion-no-margin\" (click)=\"goToProductDetails(item)\">\n\n          <!-- Product Image -->\n          <div class=\"card-img\" [style.background-image]=\"'url(' + item.images[0] + ')'\"></div>\n\n          <!-- Wish Button or Product Like/Dislike Button Option -->\n          <ion-fab vertical=\"top\" horizontal=\"end\">\n            <ion-fab-button>\n              <ion-icon color=\"color1\" name=\"heart-empty\" *ngIf=\"!item.isWishlist\"></ion-icon>\n              <ion-icon color=\"color1\" name=\"heart\" *ngIf=\"item.isWishlist\"></ion-icon>\n            </ion-fab-button>\n          </ion-fab>\n\n          <!-- Product Contents -->\n          <ion-card-content>\n            <ion-row>\n              <ion-text color=\"color1\">${{item.discountPrice}} &nbsp;</ion-text>\n              <span class=\"previous-price\"> ${{item.price}}</span>\n            </ion-row>\n            <ion-row>\n              <h4 class=\"product-name\">{{item.name | slice:0:20}}</h4>\n            </ion-row>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/components/categories/categories.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/categories/categories.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#categories .text-bold {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZnJvemF5YXNtaW4vYXBwcy9pb25pYy9lY29tbWVyY2Uvc3JjL2FwcC9jb21wb25lbnRzL2NhdGVnb3JpZXMvY2F0ZWdvcmllcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jYXRlZ29yaWVzL2NhdGVnb3JpZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxpQkFBQTtBQ0FSIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jYXRlZ29yaWVzL2NhdGVnb3JpZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY2F0ZWdvcmllcyB7XG4gICAgLnRleHQtYm9sZCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbn0iLCIjY2F0ZWdvcmllcyAudGV4dC1ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/categories/categories.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/categories/categories.component.ts ***!
  \***************************************************************/
/*! exports provided: CategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function() { return CategoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/category.service */ "./src/app/services/category.service.ts");



let CategoriesComponent = class CategoriesComponent {
    constructor(categoryService) {
        this.categoryService = categoryService;
    }
    ngOnInit() {
        this.getCategories();
    }
    getCategories() {
        this.categories = this.categoryService.categoryList();
    }
};
CategoriesComponent.ctorParameters = () => [
    { type: _services_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"] }
];
CategoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-categories',
        template: __webpack_require__(/*! raw-loader!./categories.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/categories/categories.component.html"),
        styles: [__webpack_require__(/*! ./categories.component.scss */ "./src/app/components/categories/categories.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"]])
], CategoriesComponent);



/***/ }),

/***/ "./src/app/components/featured-products/featured-products.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/components/featured-products/featured-products.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#featured-products .card-img {\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center center;\n  height: 150px;\n}\n#featured-products .product-name {\n  padding: 0;\n  text-align: left;\n}\n#featured-products .product-name h4 {\n  font-size: 1rem;\n  color: rgba(8, 8, 8, 0.58);\n}\n#featured-products .previous-price {\n  text-decoration: line-through;\n  font-size: 0.8rem;\n}\n#featured-products ion-fab-button {\n  --background: transparent;\n  --background-focused: transparent;\n  --background-activated: transparent;\n}\n#featured-products .text-bold {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZnJvemF5YXNtaW4vYXBwcy9pb25pYy9lY29tbWVyY2Uvc3JjL2FwcC9jb21wb25lbnRzL2ZlYXR1cmVkLXByb2R1Y3RzL2ZlYXR1cmVkLXByb2R1Y3RzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2ZlYXR1cmVkLXByb2R1Y3RzL2ZlYXR1cmVkLXByb2R1Y3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksc0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0EsYUFBQTtBQ0FSO0FER0k7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7QUNEUjtBREdRO0VBQ0ksZUFBQTtFQUNBLDBCQUFBO0FDRFo7QURLSTtFQUNJLDZCQUFBO0VBQ0EsaUJBQUE7QUNIUjtBRE1JO0VBQ0kseUJBQUE7RUFDQSxpQ0FBQTtFQUNBLG1DQUFBO0FDSlI7QURPSTtFQUNJLGlCQUFBO0FDTFIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2ZlYXR1cmVkLXByb2R1Y3RzL2ZlYXR1cmVkLXByb2R1Y3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2ZlYXR1cmVkLXByb2R1Y3RzIHtcbiAgICAuY2FyZC1pbWcge1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIH1cblxuICAgIC5wcm9kdWN0LW5hbWUge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuXG4gICAgICAgIGg0IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDgsIDgsIDgsIDAuNTgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnByZXZpb3VzLXByaWNlIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIH1cblxuICAgIGlvbi1mYWItYnV0dG9uIHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB0cmFuc3BhcmVudDtcbiAgICB9XG5cbiAgICAudGV4dC1ib2xkIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxufSIsIiNmZWF0dXJlZC1wcm9kdWN0cyAuY2FyZC1pbWcge1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBoZWlnaHQ6IDE1MHB4O1xufVxuI2ZlYXR1cmVkLXByb2R1Y3RzIC5wcm9kdWN0LW5hbWUge1xuICBwYWRkaW5nOiAwO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuI2ZlYXR1cmVkLXByb2R1Y3RzIC5wcm9kdWN0LW5hbWUgaDQge1xuICBmb250LXNpemU6IDFyZW07XG4gIGNvbG9yOiByZ2JhKDgsIDgsIDgsIDAuNTgpO1xufVxuI2ZlYXR1cmVkLXByb2R1Y3RzIC5wcmV2aW91cy1wcmljZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cbiNmZWF0dXJlZC1wcm9kdWN0cyBpb24tZmFiLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdHJhbnNwYXJlbnQ7XG59XG4jZmVhdHVyZWQtcHJvZHVjdHMgLnRleHQtYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/featured-products/featured-products.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/featured-products/featured-products.component.ts ***!
  \*****************************************************************************/
/*! exports provided: FeaturedProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturedProductsComponent", function() { return FeaturedProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _pages_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pages/product-details/product-details.component */ "./src/app/pages/product-details/product-details.component.ts");





let FeaturedProductsComponent = class FeaturedProductsComponent {
    constructor(productsService, modalController) {
        this.productsService = productsService;
        this.modalController = modalController;
        // Slider Options
        this.slideOpts = {
            initialSlide: 0,
            speed: 400,
            slidesPerView: 2,
        };
    }
    ngOnInit() {
        this.getProductList();
    }
    getProductList() {
        this.products = this.productsService.productList();
    }
    goToProductDetails(product) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _pages_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_4__["ProductDetailsComponent"],
                componentProps: product
            });
            return yield modal.present();
        });
    }
};
FeaturedProductsComponent.ctorParameters = () => [
    { type: _services_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] }
];
FeaturedProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-featured-products',
        template: __webpack_require__(/*! raw-loader!./featured-products.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/featured-products/featured-products.component.html"),
        styles: [__webpack_require__(/*! ./featured-products.component.scss */ "./src/app/components/featured-products/featured-products.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]])
], FeaturedProductsComponent);



/***/ }),

/***/ "./src/app/components/home-top-slider/home-top-slider.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/home-top-slider/home-top-slider.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#top-slider ion-slides {\n  --bullet-background: var(--ion-color-light);\n  --bullet-background-active: var(--ion-color-white);\n}\n#top-slider ion-slides img {\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZnJvemF5YXNtaW4vYXBwcy9pb25pYy9lY29tbWVyY2Uvc3JjL2FwcC9jb21wb25lbnRzL2hvbWUtdG9wLXNsaWRlci9ob21lLXRvcC1zbGlkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS10b3Atc2xpZGVyL2hvbWUtdG9wLXNsaWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLDJDQUFBO0VBQ0Esa0RBQUE7QUNBUjtBREVRO0VBQ0ksbUJBQUE7QUNBWiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS10b3Atc2xpZGVyL2hvbWUtdG9wLXNsaWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiN0b3Atc2xpZGVyIHtcbiAgICBpb24tc2xpZGVzIHtcbiAgICAgICAgLS1idWxsZXQtYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICAgICAgLS1idWxsZXQtYmFja2dyb3VuZC1hY3RpdmU6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG5cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIH1cbiAgICB9XG59IiwiI3RvcC1zbGlkZXIgaW9uLXNsaWRlcyB7XG4gIC0tYnVsbGV0LWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIC0tYnVsbGV0LWJhY2tncm91bmQtYWN0aXZlOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xufVxuI3RvcC1zbGlkZXIgaW9uLXNsaWRlcyBpbWcge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/home-top-slider/home-top-slider.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/home-top-slider/home-top-slider.component.ts ***!
  \*************************************************************************/
/*! exports provided: HomeTopSliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeTopSliderComponent", function() { return HomeTopSliderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeTopSliderComponent = class HomeTopSliderComponent {
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
HomeTopSliderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home-top-slider',
        template: __webpack_require__(/*! raw-loader!./home-top-slider.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/home-top-slider/home-top-slider.component.html"),
        styles: [__webpack_require__(/*! ./home-top-slider.component.scss */ "./src/app/components/home-top-slider/home-top-slider.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HomeTopSliderComponent);



/***/ }),

/***/ "./src/app/components/hot-deals/hot-deals.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/hot-deals/hot-deals.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#hot-deals ion-fab-button {\n  --background: transparent;\n  --background-focused: transparent;\n  --background-activated: transparent;\n}\n#hot-deals ion-card-title {\n  font-size: 1.2rem;\n}\n#hot-deals .card-img {\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center center;\n  height: 150px;\n}\n#hot-deals .text-bold {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZnJvemF5YXNtaW4vYXBwcy9pb25pYy9lY29tbWVyY2Uvc3JjL2FwcC9jb21wb25lbnRzL2hvdC1kZWFscy9ob3QtZGVhbHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaG90LWRlYWxzL2hvdC1kZWFscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLHlCQUFBO0VBQ0EsaUNBQUE7RUFDQSxtQ0FBQTtBQ0FSO0FER0k7RUFDSSxpQkFBQTtBQ0RSO0FESUk7RUFDSSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxhQUFBO0FDRlI7QURLSTtFQUNJLGlCQUFBO0FDSFIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvdC1kZWFscy9ob3QtZGVhbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaG90LWRlYWxzIHtcbiAgICBpb24tZmFiLWJ1dHRvbiB7XG4gICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiB0cmFuc3BhcmVudDtcbiAgICAgICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxuXG4gICAgaW9uLWNhcmQtdGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICB9XG5cbiAgICAuY2FyZC1pbWcge1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIH1cblxuICAgIC50ZXh0LWJvbGQge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG59IiwiI2hvdC1kZWFscyBpb24tZmFiLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdHJhbnNwYXJlbnQ7XG59XG4jaG90LWRlYWxzIGlvbi1jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG4jaG90LWRlYWxzIC5jYXJkLWltZyB7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIGhlaWdodDogMTUwcHg7XG59XG4jaG90LWRlYWxzIC50ZXh0LWJvbGQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/hot-deals/hot-deals.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/hot-deals/hot-deals.component.ts ***!
  \*************************************************************/
/*! exports provided: HotDealsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotDealsComponent", function() { return HotDealsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_deals_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/deals.service */ "./src/app/services/deals.service.ts");



let HotDealsComponent = class HotDealsComponent {
    constructor(dealsService) {
        this.dealsService = dealsService;
        // Slider Options
        this.slideOpts = {
            initialSlide: 0,
            speed: 400,
            slidesPerView: 2,
        };
        this.deals = [];
    }
    ngOnInit() {
        this.getDeals();
    }
    getDeals() {
        this.deals = this.dealsService.getDeals();
    }
};
HotDealsComponent.ctorParameters = () => [
    { type: _services_deals_service__WEBPACK_IMPORTED_MODULE_2__["DealsService"] }
];
HotDealsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-hot-deals',
        template: __webpack_require__(/*! raw-loader!./hot-deals.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/hot-deals/hot-deals.component.html"),
        styles: [__webpack_require__(/*! ./hot-deals.component.scss */ "./src/app/components/hot-deals/hot-deals.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_deals_service__WEBPACK_IMPORTED_MODULE_2__["DealsService"]])
], HotDealsComponent);



/***/ }),

/***/ "./src/app/components/searchbar/searchbar.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/searchbar/searchbar.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#searchbar ion-searchbar {\n  --background: var(--ion-color-white);\n  border: 1px solid var(--ion-color-medium);\n  border-radius: 25px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZnJvemF5YXNtaW4vYXBwcy9pb25pYy9lY29tbWVyY2Uvc3JjL2FwcC9jb21wb25lbnRzL3NlYXJjaGJhci9zZWFyY2hiYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoYmFyL3NlYXJjaGJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLG9DQUFBO0VBQ0EseUNBQUE7RUFDQSw4QkFBQTtBQ0FSIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2hiYXIvc2VhcmNoYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3NlYXJjaGJhciB7XG4gICAgaW9uLXNlYXJjaGJhciB7XG4gICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHggIWltcG9ydGFudDtcbiAgICB9XG59IiwiI3NlYXJjaGJhciBpb24tc2VhcmNoYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgYm9yZGVyLXJhZGl1czogMjVweCAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/searchbar/searchbar.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/searchbar/searchbar.component.ts ***!
  \*************************************************************/
/*! exports provided: SearchbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchbarComponent", function() { return SearchbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _pages_search_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pages/search/search.component */ "./src/app/pages/search/search.component.ts");




let SearchbarComponent = class SearchbarComponent {
    constructor(modalController) {
        this.modalController = modalController;
    }
    ngOnInit() { }
    gotoSearchPage() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _pages_search_search_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"]
            });
            return yield modal.present();
        });
    }
};
SearchbarComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
SearchbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-searchbar',
        template: __webpack_require__(/*! raw-loader!./searchbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/searchbar/searchbar.component.html"),
        styles: [__webpack_require__(/*! ./searchbar.component.scss */ "./src/app/components/searchbar/searchbar.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
], SearchbarComponent);



/***/ }),

/***/ "./src/app/pages/home/home.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cart/cart.component */ "./src/app/pages/cart/cart.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/**
 * Home Screen
 * @author    ThemesBuckets <themesbuckets@gmail.com>
 * @copyright Copyright (c) 2020
 * @license   AppsPlaces
 */




let HomeComponent = class HomeComponent {
    constructor(modalController) {
        this.modalController = modalController;
    }
    ngOnInit() { }
    // Go to cart page
    gotoCartPage() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_2__["CartComponent"]
            });
            return yield modal.present();
        });
    }
};
HomeComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/pages/home/home.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]])
], HomeComponent);



/***/ }),

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../search/search.component */ "./src/app/pages/search/search.component.ts");
/* harmony import */ var _components_featured_products_featured_products_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/featured-products/featured-products.component */ "./src/app/components/featured-products/featured-products.component.ts");
/* harmony import */ var _components_hot_deals_hot_deals_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/hot-deals/hot-deals.component */ "./src/app/components/hot-deals/hot-deals.component.ts");
/* harmony import */ var _components_categories_categories_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/categories/categories.component */ "./src/app/components/categories/categories.component.ts");
/* harmony import */ var _components_home_top_slider_home_top_slider_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/home-top-slider/home-top-slider.component */ "./src/app/components/home-top-slider/home-top-slider.component.ts");
/* harmony import */ var _components_searchbar_searchbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/searchbar/searchbar.component */ "./src/app/components/searchbar/searchbar.component.ts");













let HomeModule = class HomeModule {
};
HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]
                }
            ])
        ],
        declarations: [_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
            _search_search_component__WEBPACK_IMPORTED_MODULE_7__["SearchComponent"],
            _components_featured_products_featured_products_component__WEBPACK_IMPORTED_MODULE_8__["FeaturedProductsComponent"],
            _components_hot_deals_hot_deals_component__WEBPACK_IMPORTED_MODULE_9__["HotDealsComponent"],
            _components_categories_categories_component__WEBPACK_IMPORTED_MODULE_10__["CategoriesComponent"],
            _components_home_top_slider_home_top_slider_component__WEBPACK_IMPORTED_MODULE_11__["HomeTopSliderComponent"],
            _components_searchbar_searchbar_component__WEBPACK_IMPORTED_MODULE_12__["SearchbarComponent"]],
        entryComponents: [_search_search_component__WEBPACK_IMPORTED_MODULE_7__["SearchComponent"]]
    })
], HomeModule);



/***/ }),

/***/ "./src/app/pages/search/search.component.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/search/search.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#search ion-searchbar {\n  --background: var(--ion-color-white);\n  border: 1px solid var(--ion-color-medium);\n  border-radius: 25px !important;\n}\n#search .card-img {\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center center;\n  height: 150px;\n}\n#search .product-name {\n  font-size: 1.2rem;\n  color: rgba(8, 8, 8, 0.58);\n}\n#search .previous-price {\n  text-decoration: line-through;\n  font-size: 0.8rem;\n}\n#search ion-fab-button {\n  --background: transparent;\n  --background-focused: transparent;\n  --background-activated: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZnJvemF5YXNtaW4vYXBwcy9pb25pYy9lY29tbWVyY2Uvc3JjL2FwcC9wYWdlcy9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksb0NBQUE7RUFDQSx5Q0FBQTtFQUNBLDhCQUFBO0FDQVI7QURHSTtFQUNJLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLGFBQUE7QUNEUjtBRElJO0VBQ0ksaUJBQUE7RUFDQSwwQkFBQTtBQ0ZSO0FES0k7RUFDSSw2QkFBQTtFQUNBLGlCQUFBO0FDSFI7QURNSTtFQUNJLHlCQUFBO0VBQ0EsaUNBQUE7RUFDQSxtQ0FBQTtBQ0pSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzZWFyY2gge1xuICAgIGlvbi1zZWFyY2hiYXIge1xuICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmNhcmQtaW1nIHtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICB9XG5cbiAgICAucHJvZHVjdC1uYW1lIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgIGNvbG9yOiByZ2JhKDgsIDgsIDgsIDAuNTgpO1xuICAgIH1cblxuICAgIC5wcmV2aW91cy1wcmljZSB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICB9XG5cbiAgICBpb24tZmFiLWJ1dHRvbiB7XG4gICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiB0cmFuc3BhcmVudDtcbiAgICAgICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxufSIsIiNzZWFyY2ggaW9uLXNlYXJjaGJhciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHggIWltcG9ydGFudDtcbn1cbiNzZWFyY2ggLmNhcmQtaW1nIHtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgaGVpZ2h0OiAxNTBweDtcbn1cbiNzZWFyY2ggLnByb2R1Y3QtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBjb2xvcjogcmdiYSg4LCA4LCA4LCAwLjU4KTtcbn1cbiNzZWFyY2ggLnByZXZpb3VzLXByaWNlIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuI3NlYXJjaCBpb24tZmFiLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdHJhbnNwYXJlbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/search/search.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/search/search.component.ts ***!
  \**************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../product-details/product-details.component */ "./src/app/pages/product-details/product-details.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../cart/cart.component */ "./src/app/pages/cart/cart.component.ts");
/**
 * Search Screen
 * @author    ThemesBuckets <themesbuckets@gmail.com>
 * @copyright Copyright (c) 2020
 * @license   AppsPlaces
 */






let SearchComponent = class SearchComponent {
    constructor(modalController, productsService) {
        this.modalController = modalController;
        this.productsService = productsService;
        // Check is product available or not
        this.isProductAvailable = false;
    }
    ngOnInit() {
        this.getProductList();
    }
    // Get All Products
    getProductList() {
        this.products = this.productsService.productList();
    }
    // Get Search Result
    getProducts(ev) {
        this.getProductList();
        // set val to the value of the searchbar
        const val = ev.target.value;
        // if the value is an empty string don't filter the product
        if (val && val.trim() != '') {
            this.isProductAvailable = true;
            this.products = this.products.filter((item) => {
                return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    }
    // Go to product details page function
    goToProductDetails(product) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_4__["ProductDetailsComponent"],
                componentProps: product
            });
            return yield modal.present();
        });
    }
    // Go to cart page function
    gotoCartPage() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.dismiss();
            const modal = yield this.modalController.create({
                component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_5__["CartComponent"]
            });
            return yield modal.present();
        });
    }
    // Back to previous page function
    dismiss() {
        this.modalController.dismiss({
            'dismissed': true
        });
    }
};
SearchComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _services_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"] }
];
SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search',
        template: __webpack_require__(/*! raw-loader!./search.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/search/search.component.html"),
        styles: [__webpack_require__(/*! ./search.component.scss */ "./src/app/pages/search/search.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _services_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"]])
], SearchComponent);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map