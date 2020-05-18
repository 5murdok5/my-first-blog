(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notification-notification-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/notification/notification.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/notification/notification.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n  - Notification Screen\n  - @author    ThemesBuckets <themesbuckets@gmail.com>\n  - @copyright Copyright (c) 2020\n  - @license   AppsPlaces\n-->\n\n<!-- Header -->\n<ion-header no-border>\n  <ion-toolbar color=\"color1\">\n\n    <!-- Side Menu -->\n    <ion-buttons slot=\"start\">\n      <ion-menu-toggle menu=\"pages\">\n        <ion-button color=\"white\">\n          <ion-icon name=\"md-list\" slot=\"icon-only\"></ion-icon>\n        </ion-button>\n      </ion-menu-toggle>\n    </ion-buttons>\n\n    <!-- Page Title -->\n    <ion-title>Notifications</ion-title>\n\n    <!-- Cart Button Option -->\n    <ion-buttons slot=\"end\">\n      <ion-button color=\"white\" (click)=\"gotoCartPage()\">\n        <ion-icon name=\"cart\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<!-- Contents -->\n<ion-content id=\"notifications\">\n  <div *ngFor=\"let item of notifications\">\n    <ion-item [class.unread]=\"!item.status\" lines=\"none\">\n\n      <!-- Image of user -->\n      <ion-avatar slot=\"start\">\n        <img src=\"assets/images/notification-flat.png\">\n      </ion-avatar>\n\n      <!-- Contents of message -->\n      <ion-label class=\"ion-text-wrap\">\n        <ion-text color=\"dark\">\n          <h2> {{ item.title }}</h2>\n        </ion-text>\n        <p>{{item.message}}</p>\n      </ion-label>\n\n      <!-- Date -->\n      <ion-text slot=\"end\" color=\"medium\">{{item.date}}</ion-text>\n    </ion-item>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/notification/notification.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/notification/notification.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#notifications .unread {\n  --background: var(--ion-color-light);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZnJvemF5YXNtaW4vYXBwcy9pb25pYy9lY29tbWVyY2Uvc3JjL2FwcC9wYWdlcy9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksb0NBQUE7QUNBUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25vdGlmaWNhdGlvbi9ub3RpZmljYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbm90aWZpY2F0aW9ucyB7XG4gICAgLnVucmVhZCB7XG4gICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICB9XG59IiwiI25vdGlmaWNhdGlvbnMgLnVucmVhZCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/notification/notification.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/notification/notification.component.ts ***!
  \**************************************************************/
/*! exports provided: NotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return NotificationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_notifications_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/notifications.service */ "./src/app/services/notifications.service.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cart/cart.component */ "./src/app/pages/cart/cart.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/**
 * Notification Screen
 * @author    ThemesBuckets <themesbuckets@gmail.com>
 * @copyright Copyright (c) 2020
 * @license   AppsPlaces
 */





var NotificationComponent = /** @class */ (function () {
    function NotificationComponent(notificationsService, modalController) {
        this.notificationsService = notificationsService;
        this.modalController = modalController;
        this.notifications = [];
    }
    NotificationComponent.prototype.ngOnInit = function () {
        this.getNotification();
    };
    // Get list of notification
    NotificationComponent.prototype.getNotification = function () {
        this.notifications = this.notificationsService.getNotifications();
    };
    // Go to cart page
    NotificationComponent.prototype.gotoCartPage = function () {
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
    NotificationComponent.ctorParameters = function () { return [
        { type: _services_notifications_service__WEBPACK_IMPORTED_MODULE_2__["NotificationsService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
    ]; };
    NotificationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notification',
            template: __webpack_require__(/*! raw-loader!./notification.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/notification/notification.component.html"),
            styles: [__webpack_require__(/*! ./notification.component.scss */ "./src/app/pages/notification/notification.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_notifications_service__WEBPACK_IMPORTED_MODULE_2__["NotificationsService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])
    ], NotificationComponent);
    return NotificationComponent;
}());



/***/ }),

/***/ "./src/app/pages/notification/notification.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/notification/notification.module.ts ***!
  \***********************************************************/
/*! exports provided: NotificationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationModule", function() { return NotificationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _notification_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notification.component */ "./src/app/pages/notification/notification.component.ts");







var NotificationModule = /** @class */ (function () {
    function NotificationModule() {
    }
    NotificationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _notification_component__WEBPACK_IMPORTED_MODULE_6__["NotificationComponent"]
                    }
                ])
            ],
            declarations: [_notification_component__WEBPACK_IMPORTED_MODULE_6__["NotificationComponent"]]
        })
    ], NotificationModule);
    return NotificationModule;
}());



/***/ }),

/***/ "./src/app/services/notifications.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/notifications.service.ts ***!
  \***************************************************/
/*! exports provided: NotificationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsService", function() { return NotificationsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotificationsService = /** @class */ (function () {
    function NotificationsService() {
    }
    NotificationsService.prototype.getNotifications = function () {
        return [
            {
                title: "Contrary to popular belief",
                message: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                date: "15/20",
                status: false,
            },
            {
                title: "Contrary to popular belief",
                message: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                date: "15/20",
                status: false
            },
            {
                title: "Contrary to popular belief",
                message: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                date: "15/20",
                status: true
            },
            {
                title: "Contrary to popular belief",
                message: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                date: "15/20",
                status: true
            },
            {
                title: "Contrary to popular belief",
                message: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                date: "15/20",
                status: true
            },
            {
                title: "Contrary to popular belief",
                message: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                date: "15/20",
                status: true
            },
            {
                title: "Contrary to popular belief",
                message: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                date: "15/20",
                status: true
            }
        ];
    };
    NotificationsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotificationsService);
    return NotificationsService;
}());



/***/ })

}]);
//# sourceMappingURL=notification-notification-module-es5.js.map