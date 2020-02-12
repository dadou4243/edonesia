(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app-admin/admin.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app-admin/admin.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-container\">\n  <app-header></app-header>\n  <div class=\"router-outlet-container\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app-admin/analytics/analytics-home/analytics-home.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app-admin/analytics/analytics-home/analytics-home.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>analytics-home works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app-admin/bookings/booking-item/booking-item.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app-admin/bookings/booking-item/booking-item.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"booking-item-container\">\n  name: {{ booking.firstName }}\n  <div>\n    <span>Created at: </span>\n    {{ booking.createdAt | date: 'long' }}\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app-admin/bookings/bookings-list/bookings-list.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app-admin/bookings/bookings-list/bookings-list.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>bookings-list works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app-admin/bookings/bookings.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app-admin/bookings/bookings.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bookings-container\">\n  <h3>Bookings list</h3>\n  <app-booking-item\n    *ngFor=\"let booking of bookings | async\"\n    [booking]=\"booking\"\n  ></app-booking-item>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app-admin/gift-card/gift-card.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app-admin/gift-card/gift-card.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"gift-card-container\">\n  <h2>Gift cards</h2>\n  <div *ngFor=\"let card of giftCards\">{{ card.code }} - {{ card.amount }}$</div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app-admin/layout/header/header.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app-admin/layout/header/header.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header-container\">\n  <div class=\"left-part\">\n    <div class=\"logo\" [routerLink]=\"['/']\"></div>\n    <nav>\n      <ul>\n        <li>\n          <a [routerLink]=\"['admin']\" [routerLinkActive]=\"['active-link']\"\n            >Dash</a\n          >\n        </li>\n        <li>\n          <a [routerLink]=\"['trips']\" [routerLinkActive]=\"['active-link']\"\n            >Trips</a\n          >\n        </li>\n        <li>\n          <a [routerLink]=\"['users']\" [routerLinkActive]=\"['active-link']\"\n            >Users</a\n          >\n        </li>\n        <li>\n          <a [routerLink]=\"['bookings']\" [routerLinkActive]=\"['active-link']\"\n            >Bookings</a\n          >\n        </li>\n        <li>\n          <a\n            [routerLink]=\"['.']\"\n            [routerLinkActive]=\"['active-link']\"\n            [routerLinkActiveOptions]=\"{ exact: true }\"\n            >Purchases</a\n          >\n        </li>\n        <li>\n          <a\n            [routerLink]=\"['gift-cards']\"\n            [routerLinkActive]=\"['active-link']\"\n            [routerLinkActiveOptions]=\"{ exact: true }\"\n            >Gift cards</a\n          >\n        </li>\n        <li>\n          <a\n            [routerLink]=\"['.']\"\n            [routerLinkActive]=\"['active-link']\"\n            [routerLinkActiveOptions]=\"{ exact: true }\"\n            >Analytics</a\n          >\n        </li>\n      </ul>\n    </nav>\n  </div>\n\n  <div class=\"buttons\">\n    <div class=\"get-started\">\n      <a [routerLink]=\"\">Login</a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app-admin/purchases/purchases-list/purchases-list.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app-admin/purchases/purchases-list/purchases-list.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>purchases-list works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app-admin/requests/requests-list/requests-list.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app-admin/requests/requests-list/requests-list.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>requests-list works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app-admin/trips/add-trip/add-trip.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app-admin/trips/add-trip/add-trip.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"add-trip-container\">\n  <div class=\"container\">\n    <h3 mat-dialog-title>Add a new trip</h3>\n    <div mat-dialog-content>\n      <form [formGroup]=\"userForm\" autocomplete=\"off\">\n        <input\n          type=\"text\"\n          placeholder=\"Title\"\n          formControlName=\"title\"\n          required\n        />\n      </form>\n    </div>\n\n    <div>\n      <button class=\"ut-btn\" (click)=\"resetForm()\">Reset Form</button>\n      <button class=\"ut-btn\">Cancel</button>\n      <button\n        class=\"ut-btn\"\n        type=\"submit\"\n        [disabled]=\"!userForm.valid\"\n        (click)=\"onSubmit()\"\n      >\n        Save\n      </button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app-admin/trips/edit-trip/edit-trip.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app-admin/trips/edit-trip/edit-trip.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"edit-trip-container\">\n  <form [formGroup]=\"tripForm\" autocomplete=\"off\" *ngIf=\"tripForm\">\n    <div class=\"form-field\">\n      <label>Title</label>\n      <input\n        type=\"text\"\n        placeholder=\"Title\"\n        class=\"ut-text-input\"\n        formControlName=\"title\"\n        required\n      />\n    </div>\n\n    <div class=\"form-field\">\n      <label>Description</label>\n      <input\n        type=\"text\"\n        placeholder=\"Description\"\n        class=\"ut-text-input\"\n        formControlName=\"description\"\n        required\n      />\n    </div>\n\n    <div class=\"form-field\">\n      <label>Price</label>\n      <input\n        type=\"text\"\n        placeholder=\"Price\"\n        class=\"ut-text-input\"\n        formControlName=\"price\"\n      />\n    </div>\n\n    <div class=\"form-field\">\n      <label>Category</label>\n      <input\n        type=\"text\"\n        placeholder=\"Category\"\n        class=\"ut-text-input\"\n        formControlName=\"category\"\n      />\n    </div>\n    <div class=\"buttons\">\n      <button class=\"ut-btn\" (click)=\"onClickSave()\">Save</button>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app-admin/trips/trip-item/trip-item.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app-admin/trips/trip-item/trip-item.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"trip-container\">\n  <a [routerLink]=\"['.', trip._id]\">{{ trip.title }}</a>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app-admin/trips/trip-main/trip-main.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app-admin/trips/trip-main/trip-main.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"trip-main-container\">\n  <app-trips-list></app-trips-list>\n  <app-add-trip></app-add-trip>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app-admin/trips/trips-list/trips-list.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app-admin/trips/trips-list/trips-list.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"trips-container\">\n  <h3>Trips list</h3>\n  <app-trip-item\n    *ngFor=\"let trip of trips | async\"\n    [trip]=\"trip\"\n  ></app-trip-item>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app-admin/users/add-user/add-user.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app-admin/users/add-user/add-user.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"add-user-component\">\n  <form [formGroup]=\"addUserForm\" autocomplete=\"disabled\">\n    <input\n      type=\"email\"\n      placeholder=\"Email\"\n      class=\"ut-text-input\"\n      formControlName=\"email\"\n      autocomplete=\"disabled\"\n      name=\"user-email\"\n      required\n    />\n    <input\n      type=\"password\"\n      placeholder=\"Password\"\n      class=\"ut-text-input\"\n      formControlName=\"password\"\n      autocomplete=\"user-password\"\n      required\n    />\n    <input\n      type=\"text\"\n      placeholder=\"First name\"\n      class=\"ut-text-input\"\n      formControlName=\"firstName\"\n    />\n    <input\n      type=\"text\"\n      placeholder=\"Last name\"\n      class=\"ut-text-input\"\n      formControlName=\"lastName\"\n    />\n    <select placeholder=\"Role\" formControlName=\"role\">\n      <option *ngFor=\"let role of roles\" [value]=\"role.value\">\n        {{ role.viewValue }}\n      </option>\n    </select>\n  </form>\n\n  <button class=\"ut-btn\" (click)=\"onConfirm()\">Confirm</button>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app-admin/users/users-list/users-list.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app-admin/users/users-list/users-list.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"users-lists-container\">\n  <h2>Users list</h2>\n  <div class=\"users-list\">\n    <div class=\"user\" *ngFor=\"let user of users$ | async\">\n      <div>\n        {{ user.email }}\n      </div>\n      <div>\n        <span>Created at: </span>\n        {{ user.createdAt | date: 'long' }}\n      </div>\n    </div>\n  </div>\n\n  <app-add-user></app-add-user>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-container\">\n  <div class=\"router-outlet-container\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/logout/logout.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/logout/logout.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>logout works!</p>\n"

/***/ }),

/***/ "./src/app/app-admin/admin.component.scss":
/*!************************************************!*\
  !*** ./src/app/app-admin/admin.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-container {\n  width: 100%;\n  min-height: 100vh;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.app-container .router-outlet-container {\n  -webkit-box-flex: 1;\n          flex: 1;\n  padding: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXZpZGxhc3J5L2Rldi9lZG9uZXNpYS9jbGllbnQvc3JjL2FwcC9hcHAtYWRtaW4vYWRtaW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC1hZG1pbi9hZG1pbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBQ0NGO0FEQ0U7RUFDRSxtQkFBQTtVQUFBLE9BQUE7RUFDQSxhQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9hcHAtYWRtaW4vYWRtaW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAucm91dGVyLW91dGxldC1jb250YWluZXIge1xuICAgIGZsZXg6IDE7XG4gICAgcGFkZGluZzogNTBweDtcbiAgfVxufVxuIiwiLmFwcC1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uYXBwLWNvbnRhaW5lciAucm91dGVyLW91dGxldC1jb250YWluZXIge1xuICBmbGV4OiAxO1xuICBwYWRkaW5nOiA1MHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/app-admin/admin.component.ts":
/*!**********************************************!*\
  !*** ./src/app/app-admin/admin.component.ts ***!
  \**********************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
    }
    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/raw-loader/index.js!./src/app/app-admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.scss */ "./src/app/app-admin/admin.component.scss")]
        })
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/app-admin/admin.module.ts":
/*!*******************************************!*\
  !*** ./src/app/app-admin/admin.module.ts ***!
  \*******************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout/header/header.component */ "./src/app/app-admin/layout/header/header.component.ts");
/* harmony import */ var _trips_add_trip_add_trip_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./trips/add-trip/add-trip.component */ "./src/app/app-admin/trips/add-trip/add-trip.component.ts");
/* harmony import */ var _trips_edit_trip_edit_trip_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./trips/edit-trip/edit-trip.component */ "./src/app/app-admin/trips/edit-trip/edit-trip.component.ts");
/* harmony import */ var _users_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./users/users-list/users-list.component */ "./src/app/app-admin/users/users-list/users-list.component.ts");
/* harmony import */ var _analytics_analytics_home_analytics_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./analytics/analytics-home/analytics-home.component */ "./src/app/app-admin/analytics/analytics-home/analytics-home.component.ts");
/* harmony import */ var _purchases_purchases_list_purchases_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./purchases/purchases-list/purchases-list.component */ "./src/app/app-admin/purchases/purchases-list/purchases-list.component.ts");
/* harmony import */ var _requests_requests_list_requests_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./requests/requests-list/requests-list.component */ "./src/app/app-admin/requests/requests-list/requests-list.component.ts");
/* harmony import */ var _trips_trips_list_trips_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./trips/trips-list/trips-list.component */ "./src/app/app-admin/trips/trips-list/trips-list.component.ts");
/* harmony import */ var _bookings_bookings_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./bookings/bookings.component */ "./src/app/app-admin/bookings/bookings.component.ts");
/* harmony import */ var _trips_trip_main_trip_main_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./trips/trip-main/trip-main.component */ "./src/app/app-admin/trips/trip-main/trip-main.component.ts");
/* harmony import */ var _trips_trip_item_trip_item_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./trips/trip-item/trip-item.component */ "./src/app/app-admin/trips/trip-item/trip-item.component.ts");
/* harmony import */ var _bookings_bookings_list_bookings_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./bookings/bookings-list/bookings-list.component */ "./src/app/app-admin/bookings/bookings-list/bookings-list.component.ts");
/* harmony import */ var _bookings_booking_item_booking_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./bookings/booking-item/booking.component */ "./src/app/app-admin/bookings/booking-item/booking.component.ts");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./admin.component */ "./src/app/app-admin/admin.component.ts");
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./admin.routing.module */ "./src/app/app-admin/admin.routing.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _users_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./users/add-user/add-user.component */ "./src/app/app-admin/users/add-user/add-user.component.ts");
/* harmony import */ var _gift_card_gift_card_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./gift-card/gift-card.component */ "./src/app/app-admin/gift-card/gift-card.component.ts");






















var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _admin_component__WEBPACK_IMPORTED_MODULE_17__["AdminComponent"],
                _layout_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                _trips_add_trip_add_trip_component__WEBPACK_IMPORTED_MODULE_5__["AddTripComponent"],
                _trips_edit_trip_edit_trip_component__WEBPACK_IMPORTED_MODULE_6__["EditTripComponent"],
                _users_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_7__["UsersListComponent"],
                _analytics_analytics_home_analytics_home_component__WEBPACK_IMPORTED_MODULE_8__["AnalyticsHomeComponent"],
                _purchases_purchases_list_purchases_list_component__WEBPACK_IMPORTED_MODULE_9__["PurchasesListComponent"],
                _requests_requests_list_requests_list_component__WEBPACK_IMPORTED_MODULE_10__["RequestsListComponent"],
                _trips_trips_list_trips_list_component__WEBPACK_IMPORTED_MODULE_11__["TripsListComponent"],
                _bookings_bookings_component__WEBPACK_IMPORTED_MODULE_12__["BookingsComponent"],
                _bookings_booking_item_booking_component__WEBPACK_IMPORTED_MODULE_16__["BookingItemComponent"],
                _trips_trip_main_trip_main_component__WEBPACK_IMPORTED_MODULE_13__["TripMainComponent"],
                _trips_trip_item_trip_item_component__WEBPACK_IMPORTED_MODULE_14__["TripItemComponent"],
                _bookings_bookings_list_bookings_list_component__WEBPACK_IMPORTED_MODULE_15__["BookingsListComponent"],
                _users_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_20__["AddUserComponent"],
                _gift_card_gift_card_component__WEBPACK_IMPORTED_MODULE_21__["GiftCardComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_19__["CommonModule"],
                _admin_routing_module__WEBPACK_IMPORTED_MODULE_18__["AdminRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "./src/app/app-admin/admin.routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/app-admin/admin.routing.module.ts ***!
  \***************************************************/
/*! exports provided: AdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function() { return AdminRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bookings_bookings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bookings/bookings.component */ "./src/app/app-admin/bookings/bookings.component.ts");
/* harmony import */ var _trips_trip_main_trip_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./trips/trip-main/trip-main.component */ "./src/app/app-admin/trips/trip-main/trip-main.component.ts");
/* harmony import */ var _users_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./users/users-list/users-list.component */ "./src/app/app-admin/users/users-list/users-list.component.ts");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin.component */ "./src/app/app-admin/admin.component.ts");
/* harmony import */ var _trips_edit_trip_edit_trip_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./trips/edit-trip/edit-trip.component */ "./src/app/app-admin/trips/edit-trip/edit-trip.component.ts");
/* harmony import */ var _gift_card_gift_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./gift-card/gift-card.component */ "./src/app/app-admin/gift-card/gift-card.component.ts");









var routes = [
    {
        path: '',
        component: _admin_component__WEBPACK_IMPORTED_MODULE_6__["AdminComponent"],
        children: [
            { path: '', redirectTo: 'trips', pathMatch: 'full' },
            { path: 'trips', component: _trips_trip_main_trip_main_component__WEBPACK_IMPORTED_MODULE_4__["TripMainComponent"] },
            { path: 'trips/:id', component: _trips_edit_trip_edit_trip_component__WEBPACK_IMPORTED_MODULE_7__["EditTripComponent"] },
            // { path: 'activities/:id', component: ActivityDetailsComponent },
            { path: 'users', component: _users_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_5__["UsersListComponent"] },
            { path: 'gift-cards', component: _gift_card_gift_card_component__WEBPACK_IMPORTED_MODULE_8__["GiftCardComponent"] },
            { path: 'bookings', component: _bookings_bookings_component__WEBPACK_IMPORTED_MODULE_3__["BookingsComponent"] },
            { path: '', redirectTo: '/trips', pathMatch: 'full' }
            // { path: 'signup', component: SignUpComponent },
            // { path: 'search/:string', component: SearchResultsComponent },
            // { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] }
            // { path: '**', component: 'NotFoundComponent' }] },
        ]
    }
];
var AdminRoutingModule = /** @class */ (function () {
    function AdminRoutingModule() {
    }
    AdminRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AdminRoutingModule);
    return AdminRoutingModule;
}());



/***/ }),

/***/ "./src/app/app-admin/analytics/analytics-home/analytics-home.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/app-admin/analytics/analytics-home/analytics-home.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC1hZG1pbi9hbmFseXRpY3MvYW5hbHl0aWNzLWhvbWUvYW5hbHl0aWNzLWhvbWUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/app-admin/analytics/analytics-home/analytics-home.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/app-admin/analytics/analytics-home/analytics-home.component.ts ***!
  \********************************************************************************/
/*! exports provided: AnalyticsHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticsHomeComponent", function() { return AnalyticsHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AnalyticsHomeComponent = /** @class */ (function () {
    function AnalyticsHomeComponent() {
    }
    AnalyticsHomeComponent.prototype.ngOnInit = function () {
    };
    AnalyticsHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-analytics-home',
            template: __webpack_require__(/*! raw-loader!./analytics-home.component.html */ "./node_modules/raw-loader/index.js!./src/app/app-admin/analytics/analytics-home/analytics-home.component.html"),
            styles: [__webpack_require__(/*! ./analytics-home.component.scss */ "./src/app/app-admin/analytics/analytics-home/analytics-home.component.scss")]
        })
    ], AnalyticsHomeComponent);
    return AnalyticsHomeComponent;
}());



/***/ }),

/***/ "./src/app/app-admin/bookings/booking-item/booking-item.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/app-admin/bookings/booking-item/booking-item.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC1hZG1pbi9ib29raW5ncy9ib29raW5nLWl0ZW0vYm9va2luZy1pdGVtLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/app-admin/bookings/booking-item/booking.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/app-admin/bookings/booking-item/booking.component.ts ***!
  \**********************************************************************/
/*! exports provided: BookingItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingItemComponent", function() { return BookingItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BookingItemComponent = /** @class */ (function () {
    function BookingItemComponent() {
    }
    BookingItemComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], BookingItemComponent.prototype, "booking", void 0);
    BookingItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-booking-item',
            template: __webpack_require__(/*! raw-loader!./booking-item.component.html */ "./node_modules/raw-loader/index.js!./src/app/app-admin/bookings/booking-item/booking-item.component.html"),
            styles: [__webpack_require__(/*! ./booking-item.component.scss */ "./src/app/app-admin/bookings/booking-item/booking-item.component.scss")]
        })
    ], BookingItemComponent);
    return BookingItemComponent;
}());



/***/ }),

/***/ "./src/app/app-admin/bookings/bookings-list/bookings-list.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/app-admin/bookings/bookings-list/bookings-list.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC1hZG1pbi9ib29raW5ncy9ib29raW5ncy1saXN0L2Jvb2tpbmdzLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/app-admin/bookings/bookings-list/bookings-list.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/app-admin/bookings/bookings-list/bookings-list.component.ts ***!
  \*****************************************************************************/
/*! exports provided: BookingsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingsListComponent", function() { return BookingsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BookingsListComponent = /** @class */ (function () {
    function BookingsListComponent() {
    }
    BookingsListComponent.prototype.ngOnInit = function () {
    };
    BookingsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bookings-list',
            template: __webpack_require__(/*! raw-loader!./bookings-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/app-admin/bookings/bookings-list/bookings-list.component.html"),
            styles: [__webpack_require__(/*! ./bookings-list.component.scss */ "./src/app/app-admin/bookings/bookings-list/bookings-list.component.scss")]
        })
    ], BookingsListComponent);
    return BookingsListComponent;
}());



/***/ }),

/***/ "./src/app/app-admin/bookings/bookings.component.scss":
/*!************************************************************!*\
  !*** ./src/app/app-admin/bookings/bookings.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC1hZG1pbi9ib29raW5ncy9ib29raW5ncy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app-admin/bookings/bookings.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/app-admin/bookings/bookings.component.ts ***!
  \**********************************************************/
/*! exports provided: BookingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingsComponent", function() { return BookingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_services_bookings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/bookings.service */ "./src/app/core/services/bookings.service.ts");



var BookingsComponent = /** @class */ (function () {
    function BookingsComponent(bookingsService) {
        this.bookingsService = bookingsService;
    }
    BookingsComponent.prototype.ngOnInit = function () {
        this.bookings = this.bookingsService.getBookings();
    };
    BookingsComponent.ctorParameters = function () { return [
        { type: src_app_core_services_bookings_service__WEBPACK_IMPORTED_MODULE_2__["BookingsService"] }
    ]; };
    BookingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bookings',
            template: __webpack_require__(/*! raw-loader!./bookings.component.html */ "./node_modules/raw-loader/index.js!./src/app/app-admin/bookings/bookings.component.html"),
            styles: [__webpack_require__(/*! ./bookings.component.scss */ "./src/app/app-admin/bookings/bookings.component.scss")]
        })
    ], BookingsComponent);
    return BookingsComponent;
}());



/***/ }),

/***/ "./src/app/app-admin/gift-card/gift-card.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/app-admin/gift-card/gift-card.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC1hZG1pbi9naWZ0LWNhcmQvZ2lmdC1jYXJkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/app-admin/gift-card/gift-card.component.ts":
/*!************************************************************!*\
  !*** ./src/app/app-admin/gift-card/gift-card.component.ts ***!
  \************************************************************/
/*! exports provided: GiftCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GiftCardComponent", function() { return GiftCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_services_giftCards_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/giftCards.service */ "./src/app/core/services/giftCards.service.ts");



var GiftCardComponent = /** @class */ (function () {
    function GiftCardComponent(giftCardsService) {
        this.giftCardsService = giftCardsService;
    }
    GiftCardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.giftCardsService.getGiftCards().subscribe(function (res) {
            console.log(res);
            _this.giftCards = res;
        });
    };
    GiftCardComponent.ctorParameters = function () { return [
        { type: src_app_core_services_giftCards_service__WEBPACK_IMPORTED_MODULE_2__["GiftCardsService"] }
    ]; };
    GiftCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gift-card',
            template: __webpack_require__(/*! raw-loader!./gift-card.component.html */ "./node_modules/raw-loader/index.js!./src/app/app-admin/gift-card/gift-card.component.html"),
            styles: [__webpack_require__(/*! ./gift-card.component.scss */ "./src/app/app-admin/gift-card/gift-card.component.scss")]
        })
    ], GiftCardComponent);
    return GiftCardComponent;
}());



/***/ }),

/***/ "./src/app/app-admin/layout/header/header.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/app-admin/layout/header/header.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  background-color: grey;\n  height: 60px;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  padding: 0 20px;\n}\n.header-container .left-part {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.header-container .left-part .logo {\n  width: 40px;\n  height: 40px;\n  background-color: black;\n  margin: 0 20px;\n  cursor: pointer;\n}\n.header-container .left-part nav ul {\n  list-style: none;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n}\n.header-container .left-part nav ul li {\n  margin: 0 10px;\n}\n.header-container .left-part nav ul li a.active-link {\n  color: blue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXZpZGxhc3J5L2Rldi9lZG9uZXNpYS9jbGllbnQvc3JjL2FwcC9hcHAtYWRtaW4vbGF5b3V0L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC1hZG1pbi9sYXlvdXQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EsZUFBQTtBQ0NGO0FEQ0U7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDQ0o7QURDSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0NOO0FESU07RUFDRSxnQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtBQ0ZSO0FESVE7RUFDRSxjQUFBO0FDRlY7QURJWTtFQUNFLFdBQUE7QUNGZCIsImZpbGUiOiJzcmMvYXBwL2FwcC1hZG1pbi9sYXlvdXQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbiAgaGVpZ2h0OiA2MHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDAgMjBweDtcblxuICAubGVmdC1wYXJ0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIC5sb2dvIHtcbiAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgICBtYXJnaW46IDAgMjBweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG5cbiAgICBuYXYge1xuICAgICAgLy8gcGFkZGluZzogMTBweDtcbiAgICAgIHVsIHtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcblxuICAgICAgICBsaSB7XG4gICAgICAgICAgbWFyZ2luOiAwIDEwcHg7XG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICAmLmFjdGl2ZS1saW5rIHtcbiAgICAgICAgICAgICAgY29sb3I6IGJsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIuaGVhZGVyLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG4gIGhlaWdodDogNjBweDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAwIDIwcHg7XG59XG4uaGVhZGVyLWNvbnRhaW5lciAubGVmdC1wYXJ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5oZWFkZXItY29udGFpbmVyIC5sZWZ0LXBhcnQgLmxvZ28ge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgbWFyZ2luOiAwIDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5oZWFkZXItY29udGFpbmVyIC5sZWZ0LXBhcnQgbmF2IHVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbi5oZWFkZXItY29udGFpbmVyIC5sZWZ0LXBhcnQgbmF2IHVsIGxpIHtcbiAgbWFyZ2luOiAwIDEwcHg7XG59XG4uaGVhZGVyLWNvbnRhaW5lciAubGVmdC1wYXJ0IG5hdiB1bCBsaSBhLmFjdGl2ZS1saW5rIHtcbiAgY29sb3I6IGJsdWU7XG59Il19 */"

/***/ }),

/***/ "./src/app/app-admin/layout/header/header.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/app-admin/layout/header/header.component.ts ***!
  \*************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/app-admin/layout/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/app-admin/layout/header/header.component.scss")]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/app-admin/purchases/purchases-list/purchases-list.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/app-admin/purchases/purchases-list/purchases-list.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC1hZG1pbi9wdXJjaGFzZXMvcHVyY2hhc2VzLWxpc3QvcHVyY2hhc2VzLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/app-admin/purchases/purchases-list/purchases-list.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/app-admin/purchases/purchases-list/purchases-list.component.ts ***!
  \********************************************************************************/
/*! exports provided: PurchasesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchasesListComponent", function() { return PurchasesListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PurchasesListComponent = /** @class */ (function () {
    function PurchasesListComponent() {
    }
    PurchasesListComponent.prototype.ngOnInit = function () {
    };
    PurchasesListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-purchases-list',
            template: __webpack_require__(/*! raw-loader!./purchases-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/app-admin/purchases/purchases-list/purchases-list.component.html"),
            styles: [__webpack_require__(/*! ./purchases-list.component.scss */ "./src/app/app-admin/purchases/purchases-list/purchases-list.component.scss")]
        })
    ], PurchasesListComponent);
    return PurchasesListComponent;
}());



/***/ }),

/***/ "./src/app/app-admin/requests/requests-list/requests-list.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/app-admin/requests/requests-list/requests-list.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC1hZG1pbi9yZXF1ZXN0cy9yZXF1ZXN0cy1saXN0L3JlcXVlc3RzLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/app-admin/requests/requests-list/requests-list.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/app-admin/requests/requests-list/requests-list.component.ts ***!
  \*****************************************************************************/
/*! exports provided: RequestsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestsListComponent", function() { return RequestsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RequestsListComponent = /** @class */ (function () {
    function RequestsListComponent() {
    }
    RequestsListComponent.prototype.ngOnInit = function () {
    };
    RequestsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-requests-list',
            template: __webpack_require__(/*! raw-loader!./requests-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/app-admin/requests/requests-list/requests-list.component.html"),
            styles: [__webpack_require__(/*! ./requests-list.component.scss */ "./src/app/app-admin/requests/requests-list/requests-list.component.scss")]
        })
    ], RequestsListComponent);
    return RequestsListComponent;
}());



/***/ }),

/***/ "./src/app/app-admin/trips/add-trip/add-trip.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/app-admin/trips/add-trip/add-trip.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC1hZG1pbi90cmlwcy9hZGQtdHJpcC9hZGQtdHJpcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app-admin/trips/add-trip/add-trip.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/app-admin/trips/add-trip/add-trip.component.ts ***!
  \****************************************************************/
/*! exports provided: AddTripComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTripComponent", function() { return AddTripComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_core_services_trips_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/trips.service */ "./src/app/core/services/trips.service.ts");




var AddTripComponent = /** @class */ (function () {
    // roles = [
    //   { value: 'admin', viewValue: 'admin' },
    //   { value: 'user', viewValue: 'user' }
    // ];
    function AddTripComponent(fb, tripsService) {
        this.fb = fb;
        this.tripsService = tripsService;
    }
    AddTripComponent.prototype.ngOnInit = function () {
        this.userForm = this.fb.group({
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
            // lastName: ['', [Validators.required]],
            // email: ['', [Validators.required]],
            // role: ['', [Validators.required]],
            // password: ['']
        });
    };
    AddTripComponent.prototype.resetForm = function () { };
    AddTripComponent.prototype.onSubmit = function () {
        console.log(this.userForm.value);
        this.tripsService.addTrip(this.userForm.value).subscribe(function (result) {
            console.log(result);
        });
    };
    AddTripComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: src_app_core_services_trips_service__WEBPACK_IMPORTED_MODULE_3__["TripsService"] }
    ]; };
    AddTripComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-trip',
            template: __webpack_require__(/*! raw-loader!./add-trip.component.html */ "./node_modules/raw-loader/index.js!./src/app/app-admin/trips/add-trip/add-trip.component.html"),
            styles: [__webpack_require__(/*! ./add-trip.component.scss */ "./src/app/app-admin/trips/add-trip/add-trip.component.scss")]
        })
    ], AddTripComponent);
    return AddTripComponent;
}());



/***/ }),

/***/ "./src/app/app-admin/trips/edit-trip/edit-trip.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/app-admin/trips/edit-trip/edit-trip.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC1hZG1pbi90cmlwcy9lZGl0LXRyaXAvZWRpdC10cmlwLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/app-admin/trips/edit-trip/edit-trip.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/app-admin/trips/edit-trip/edit-trip.component.ts ***!
  \******************************************************************/
/*! exports provided: EditTripComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTripComponent", function() { return EditTripComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_core_services_trips_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/trips.service */ "./src/app/core/services/trips.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var EditTripComponent = /** @class */ (function () {
    function EditTripComponent(route, tripsService, fb) {
        this.route = route;
        this.tripsService = tripsService;
        this.fb = fb;
    }
    EditTripComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (params) { return (_this.tripId = params.get('id')); }));
        this.route.paramMap.subscribe(function (params) {
            console.log('res:', params);
            _this.tripId = params.get('id');
            console.log('this.tripId:', _this.tripId);
            _this.tripDetails$ = _this.tripsService.getTrip(_this.tripId);
            _this.tripDetails$.subscribe(function (res) {
                console.log('res:', res);
                _this.tripDetails = res;
                _this.initTripForm();
            });
        });
    };
    EditTripComponent.prototype.initTripForm = function () {
        this.tripForm = this.fb.group({
            title: [this.tripDetails.title, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            description: [this.tripDetails.description, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            price: [this.tripDetails.price],
            category: [this.tripDetails.category],
            _id: [this.tripDetails._id]
        });
    };
    EditTripComponent.prototype.onClickSave = function () {
        console.log('onClickSave');
        this.tripsService.updateTrip(this.tripForm.value).subscribe(function (res) {
            console.log('res', res);
        });
    };
    EditTripComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: src_app_core_services_trips_service__WEBPACK_IMPORTED_MODULE_3__["TripsService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }
    ]; };
    EditTripComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-trip',
            template: __webpack_require__(/*! raw-loader!./edit-trip.component.html */ "./node_modules/raw-loader/index.js!./src/app/app-admin/trips/edit-trip/edit-trip.component.html"),
            styles: [__webpack_require__(/*! ./edit-trip.component.scss */ "./src/app/app-admin/trips/edit-trip/edit-trip.component.scss")]
        })
    ], EditTripComponent);
    return EditTripComponent;
}());



/***/ }),

/***/ "./src/app/app-admin/trips/trip-item/trip-item.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/app-admin/trips/trip-item/trip-item.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC1hZG1pbi90cmlwcy90cmlwLWl0ZW0vdHJpcC1pdGVtLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/app-admin/trips/trip-item/trip-item.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/app-admin/trips/trip-item/trip-item.component.ts ***!
  \******************************************************************/
/*! exports provided: TripItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripItemComponent", function() { return TripItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TripItemComponent = /** @class */ (function () {
    function TripItemComponent() {
    }
    TripItemComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], TripItemComponent.prototype, "trip", void 0);
    TripItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-trip-item',
            template: __webpack_require__(/*! raw-loader!./trip-item.component.html */ "./node_modules/raw-loader/index.js!./src/app/app-admin/trips/trip-item/trip-item.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./trip-item.component.scss */ "./src/app/app-admin/trips/trip-item/trip-item.component.scss")]
        })
    ], TripItemComponent);
    return TripItemComponent;
}());



/***/ }),

/***/ "./src/app/app-admin/trips/trip-main/trip-main.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/app-admin/trips/trip-main/trip-main.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC1hZG1pbi90cmlwcy90cmlwLW1haW4vdHJpcC1tYWluLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/app-admin/trips/trip-main/trip-main.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/app-admin/trips/trip-main/trip-main.component.ts ***!
  \******************************************************************/
/*! exports provided: TripMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripMainComponent", function() { return TripMainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TripMainComponent = /** @class */ (function () {
    function TripMainComponent() {
    }
    TripMainComponent.prototype.ngOnInit = function () {
    };
    TripMainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-trip-main',
            template: __webpack_require__(/*! raw-loader!./trip-main.component.html */ "./node_modules/raw-loader/index.js!./src/app/app-admin/trips/trip-main/trip-main.component.html"),
            styles: [__webpack_require__(/*! ./trip-main.component.scss */ "./src/app/app-admin/trips/trip-main/trip-main.component.scss")]
        })
    ], TripMainComponent);
    return TripMainComponent;
}());



/***/ }),

/***/ "./src/app/app-admin/trips/trips-list/trips-list.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/app-admin/trips/trips-list/trips-list.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC1hZG1pbi90cmlwcy90cmlwcy1saXN0L3RyaXBzLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/app-admin/trips/trips-list/trips-list.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/app-admin/trips/trips-list/trips-list.component.ts ***!
  \********************************************************************/
/*! exports provided: TripsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripsListComponent", function() { return TripsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_services_trips_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/trips.service */ "./src/app/core/services/trips.service.ts");



var TripsListComponent = /** @class */ (function () {
    function TripsListComponent(tripsService) {
        this.tripsService = tripsService;
    }
    TripsListComponent.prototype.ngOnInit = function () {
        this.trips = this.tripsService.getTrips();
        // this.tripsService.getTrips().subscribe(trips => {
        //   console.log(trips);
        // });
    };
    TripsListComponent.ctorParameters = function () { return [
        { type: src_app_core_services_trips_service__WEBPACK_IMPORTED_MODULE_2__["TripsService"] }
    ]; };
    TripsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-trips-list',
            template: __webpack_require__(/*! raw-loader!./trips-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/app-admin/trips/trips-list/trips-list.component.html"),
            styles: [__webpack_require__(/*! ./trips-list.component.scss */ "./src/app/app-admin/trips/trips-list/trips-list.component.scss")]
        })
    ], TripsListComponent);
    return TripsListComponent;
}());



/***/ }),

/***/ "./src/app/app-admin/users/add-user/add-user.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/app-admin/users/add-user/add-user.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC1hZG1pbi91c2Vycy9hZGQtdXNlci9hZGQtdXNlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app-admin/users/add-user/add-user.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/app-admin/users/add-user/add-user.component.ts ***!
  \****************************************************************/
/*! exports provided: AddUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUserComponent", function() { return AddUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");




var AddUserComponent = /** @class */ (function () {
    function AddUserComponent(fb, authService) {
        this.fb = fb;
        this.authService = authService;
        this.roles = [
            { value: 'user', viewValue: 'User' },
            { value: 'admin', viewValue: 'Admin' }
        ];
    }
    AddUserComponent.prototype.ngOnInit = function () {
        this.addUserForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            firstName: [''],
            lastName: [''],
            role: ['user', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    };
    AddUserComponent.prototype.onConfirm = function () {
        console.log('onConfirm', this.addUserForm);
        this.authService.signUp(this.addUserForm.value).subscribe(function (res) {
            console.log(res);
        });
    };
    AddUserComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
    ]; };
    AddUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-user',
            template: __webpack_require__(/*! raw-loader!./add-user.component.html */ "./node_modules/raw-loader/index.js!./src/app/app-admin/users/add-user/add-user.component.html"),
            styles: [__webpack_require__(/*! ./add-user.component.scss */ "./src/app/app-admin/users/add-user/add-user.component.scss")]
        })
    ], AddUserComponent);
    return AddUserComponent;
}());



/***/ }),

/***/ "./src/app/app-admin/users/users-list/users-list.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/app-admin/users/users-list/users-list.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".users-list {\n  margin: 20px 0;\n}\n.users-list .user {\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXZpZGxhc3J5L2Rldi9lZG9uZXNpYS9jbGllbnQvc3JjL2FwcC9hcHAtYWRtaW4vdXNlcnMvdXNlcnMtbGlzdC91c2Vycy1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAtYWRtaW4vdXNlcnMvdXNlcnMtbGlzdC91c2Vycy1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQ0NGO0FEQ0U7RUFDRSxtQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvYXBwLWFkbWluL3VzZXJzL3VzZXJzLWxpc3QvdXNlcnMtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51c2Vycy1saXN0IHtcbiAgbWFyZ2luOiAyMHB4IDA7XG5cbiAgLnVzZXIge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cbn1cbiIsIi51c2Vycy1saXN0IHtcbiAgbWFyZ2luOiAyMHB4IDA7XG59XG4udXNlcnMtbGlzdCAudXNlciB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/app-admin/users/users-list/users-list.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/app-admin/users/users-list/users-list.component.ts ***!
  \********************************************************************/
/*! exports provided: UsersListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersListComponent", function() { return UsersListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UsersListComponent = /** @class */ (function () {
    function UsersListComponent() {
    }
    UsersListComponent.prototype.ngOnInit = function () {
        // this.users$ = this.usersService.getUsers();
        // this.users$.subscribe(res => {
        //   console.log('res', res);
        // });
    };
    UsersListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-users-list',
            template: __webpack_require__(/*! raw-loader!./users-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/app-admin/users/users-list/users-list.component.html"),
            styles: [__webpack_require__(/*! ./users-list.component.scss */ "./src/app/app-admin/users/users-list/users-list.component.scss")]
        })
    ], UsersListComponent);
    return UsersListComponent;
}());



/***/ }),

/***/ "./src/app/app-default/trip-request/data/activities.ts":
/*!*************************************************************!*\
  !*** ./src/app/app-default/trip-request/data/activities.ts ***!
  \*************************************************************/
/*! exports provided: activityOptions, activitiesWithoutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activityOptions", function() { return activityOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activitiesWithoutPage", function() { return activitiesWithoutPage; });
var activityOptions = [
    {
        value: 'beach',
        label: 'Beach and Swimming'
    },
    {
        value: 'museums',
        label: 'Museums and Monuments'
    },
    {
        value: 'sports',
        label: 'Sports'
    },
    {
        value: 'food',
        label: 'Food & Beverages'
    },
    {
        value: 'diving',
        label: 'Snorkelling & Diving'
    },
    {
        value: 'history',
        label: 'Historical Buildings'
    },
    {
        value: 'natural',
        label: 'Natural Wonders'
    },
    {
        value: 'trekking',
        label: 'Trekking and Hiking'
    },
    {
        value: 'nightlife',
        label: 'Nightlife'
    },
    {
        value: 'culture',
        label: 'Local Traditions and Culture'
    },
    {
        value: 'spa',
        label: 'Spa, Beauty & Wellness'
    },
    {
        value: 'surfing',
        label: 'Surfing'
    },
    {
        value: 'cruises',
        label: 'Cruises and Island Hopping'
    },
    {
        value: 'volcanoes',
        label: 'Volcanoes'
    },
    {
        value: 'religious',
        label: 'Religious Sights'
    },
    {
        value: 'another-activity',
        label: 'Another activity'
    }
];
var activitiesWithoutPage = ['beach', 'cruises', 'food'];


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_guards_admin_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/guards/admin-guard.service */ "./src/app/core/guards/admin-guard.service.ts");




var routes = [
    {
        path: '',
        loadChildren: function () {
            return __webpack_require__.e(/*! import() | app-default-app-default-module */ "app-default-app-default-module").then(__webpack_require__.bind(null, /*! ./app-default/app-default.module */ "./src/app/app-default/app-default.module.ts")).then(function (mod) { return mod.AppDefaultModule; });
        }
    },
    {
        path: 'admin',
        canActivate: [_core_guards_admin_guard_service__WEBPACK_IMPORTED_MODULE_3__["AdminGuard"]],
        loadChildren: function () {
            return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./app-admin/admin.module */ "./src/app/app-admin/admin.module.ts")).then(function (mod) { return mod.AdminModule; });
        }
    }
    // { path: '**', component: 'NotFoundComponent' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-container {\n  width: 100%;\n  min-height: 100vh;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.app-container .router-outlet-container {\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXZpZGxhc3J5L2Rldi9lZG9uZXNpYS9jbGllbnQvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBQ0NGO0FEQ0U7RUFDRSxtQkFBQTtVQUFBLE9BQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gIC5yb3V0ZXItb3V0bGV0LWNvbnRhaW5lciB7XG4gICAgZmxleDogMTtcbiAgfVxufVxuIiwiLmFwcC1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uYXBwLWNvbnRhaW5lciAucm91dGVyLW91dGxldC1jb250YWluZXIge1xuICBmbGV4OiAxO1xufSJdfQ== */"

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
/* harmony import */ var _store_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store/user */ "./src/app/store/user/index.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _core_services_jwt_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/services/jwt.service */ "./src/app/core/services/jwt.service.ts");





var AppComponent = /** @class */ (function () {
    function AppComponent(store, jwtService) {
        this.store = store;
        this.jwtService = jwtService;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.jwtService.checkIfTokenValid().subscribe(function (auth) {
            if (auth) {
                var userID = _this.jwtService.currentUser.id;
                // console.log(userDetails.id);
                _this.store.dispatch(Object(_store_user__WEBPACK_IMPORTED_MODULE_2__["LoadUserInfo"])({ userID: userID }));
            }
            else {
                // this.store.dispatch(new UserSignOut());
            }
        });
        // this.store.pipe(select(getIsLoggedIn)).subscribe(isLoggedIn => {
        //   // if (isLoggedIn) {
        //   this.store.dispatch(LoadUserInfo());
        //   // }
        // });
    };
    AppComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
        { type: _core_services_jwt_service__WEBPACK_IMPORTED_MODULE_4__["JwtService"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_admin_admin_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-admin/admin.module */ "./src/app/app-admin/admin.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _store_user__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./store/user */ "./src/app/store/user/index.ts");
/* harmony import */ var _store_user_user_effects__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./store/user/user.effects */ "./src/app/store/user/user.effects.ts");
/* harmony import */ var _core_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./core/interceptors/auth.interceptor */ "./src/app/core/interceptors/auth.interceptor.ts");
/* harmony import */ var _shared_components_logout_logout_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/components/logout/logout.component */ "./src/app/shared/components/logout/logout.component.ts");
/* harmony import */ var _store_request__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./store/request */ "./src/app/store/request/index.ts");
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _shared_components_logout_logout_component__WEBPACK_IMPORTED_MODULE_14__["LogoutComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _app_admin_admin_module__WEBPACK_IMPORTED_MODULE_6__["AdminModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["StoreModule"].forRoot({ user: _store_user__WEBPACK_IMPORTED_MODULE_11__["userReducer"], request: _store_request__WEBPACK_IMPORTED_MODULE_15__["requestReducer"] }),
                _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_9__["StoreDevtoolsModule"].instrument({
                    name: 'Unique Trip app'
                }),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__["EffectsModule"].forRoot([_store_user_user_effects__WEBPACK_IMPORTED_MODULE_12__["UserEffects"]])
            ],
            providers: [
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"], useClass: _core_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_13__["AuthInterceptor"], multi: true }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/guards/admin-guard.service.ts":
/*!****************************************************!*\
  !*** ./src/app/core/guards/admin-guard.service.ts ***!
  \****************************************************/
/*! exports provided: AdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function() { return AdminGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var src_app_store_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/store/user */ "./src/app/store/user/index.ts");






var AdminGuard = /** @class */ (function () {
    function AdminGuard(router, store) {
        this.router = router;
        this.store = store;
    }
    AdminGuard.prototype.canActivate = function () {
        var _this = this;
        return this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(src_app_store_user__WEBPACK_IMPORTED_MODULE_5__["getUserInfo"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (userInfo) {
            var isAdmin = userInfo.role === 'admin';
            if (!isAdmin) {
                _this.router.navigate(['', 'login']);
            }
            return isAdmin;
        }));
    };
    AdminGuard.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }
    ]; };
    AdminGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], AdminGuard);
    return AdminGuard;
}());



/***/ }),

/***/ "./src/app/core/interceptors/auth.interceptor.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/interceptors/auth.interceptor.ts ***!
  \*******************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_jwt_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/jwt.service */ "./src/app/core/services/jwt.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");







// import { UserSignOut } from 'src/app/authentication/state/user.actions';
var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(jwtService, store) {
        this.jwtService = jwtService;
        this.store = store;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var idToken = this.jwtService.getToken();
        // console.log('idToken:', idToken);
        // console.log(req.url);
        if (idToken &&
            (req.url.indexOf('google') === -1 && req.url.indexOf('youtube') === -1)) {
            // console.log('req.url interceptor', req.url);
            var cloned = req.clone({
                headers: req.headers.set('x-access-token', "" + idToken)
            });
            return next.handle(cloned).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (event) {
                if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {
                    // console.log('event--->>>', event);
                }
                return event;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
                // console.log('error in response----->>>', error);
                var data = {};
                data = {
                    reason: error && error.error.message ? error.error.message : '',
                    status: error.status
                };
                // if (data['reason'] === 'User not connected.') {
                //   this.store.dispatch(new UserSignOut());
                // }
                // this.errorDialogService.openDialog(data);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
            }));
        }
        else {
            return next.handle(req);
        }
    };
    AuthInterceptor.ctorParameters = function () { return [
        { type: _services_jwt_service__WEBPACK_IMPORTED_MODULE_4__["JwtService"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"] }
    ]; };
    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/core/services/auth.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _jwt_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./jwt.service */ "./src/app/core/services/jwt.service.ts");





var AuthService = /** @class */ (function () {
    function AuthService(http, jwtService) {
        this.http = http;
        this.jwtService = jwtService;
    }
    AuthService.prototype.logIn = function (logInForm) {
        // console.log('loginForm service', logInForm);
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + "/auth/login", logInForm);
    };
    AuthService.prototype.logOut = function () {
        this.jwtService.destroyToken();
        // return this.http.get<any>(`${environment.API_URL}/auth/logout`);
    };
    AuthService.prototype.signUp = function (signUpForm) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + "/user", signUpForm);
    };
    AuthService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _jwt_service__WEBPACK_IMPORTED_MODULE_4__["JwtService"] }
    ]; };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/core/services/bookings.service.ts":
/*!***************************************************!*\
  !*** ./src/app/core/services/bookings.service.ts ***!
  \***************************************************/
/*! exports provided: BookingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingsService", function() { return BookingsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");





var BookingsService = /** @class */ (function () {
    function BookingsService(http) {
        this.http = http;
    }
    BookingsService.prototype.getBookings = function () {
        console.log('payload GET TRIPS SERVICE:');
        // const sortOrder = payload.sortOrder;
        // const pageNumber = payload.pageNumber;
        // const pageSize = payload.pageSize;
        // console.log('GET TRIPS SERVICE', sortOrder, pageNumber, pageSize);
        return this.http
            .get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_URL + "/booking/"
        // , {
        //   params: new HttpParams()
        // .set('filter', filter)
        // .set('sortOrder', sortOrder)
        // .set('pageNumber', pageNumber.toString())
        // .set('pageSize', pageSize.toString())
        // }
        )
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return result.data; }));
    };
    BookingsService.prototype.getBooking = function (id) {
        // console.log(id);
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_URL + "/booking/" + id);
    };
    BookingsService.prototype.addBooking = function (booking) {
        console.log('ADD BOOKING SERVICE', booking);
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_URL + "/booking", booking);
    };
    BookingsService.prototype.searchBooking = function (searchString) {
        // console.log(id);
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_URL + "/booking/search/" + searchString);
    };
    BookingsService.prototype.getBookingContext = function (id) {
        // console.log(id);
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_URL + "/context/" + id);
    };
    BookingsService.prototype.deleteBooking = function (bookingId) {
        // console.log('DELETE TRIP SERVICE', bookingId);
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_URL + "/booking/" + bookingId);
    };
    BookingsService.prototype.deleteManyBookings = function (bookingsIds) {
        // console.log('DELETE MANY TRIPS SERVICE', bookingsIds);
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_URL + "/booking/deleteMany", bookingsIds);
    };
    BookingsService.prototype.updateBooking = function (booking, overwrite) {
        console.log('UPDATE TRIP SERVICE', booking);
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_URL + "/booking/" + booking._id, {
            bookingData: booking,
            overwrite: overwrite
        });
    };
    BookingsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    BookingsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], BookingsService);
    return BookingsService;
}());



/***/ }),

/***/ "./src/app/core/services/giftCards.service.ts":
/*!****************************************************!*\
  !*** ./src/app/core/services/giftCards.service.ts ***!
  \****************************************************/
/*! exports provided: GiftCardsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GiftCardsService", function() { return GiftCardsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");





var GiftCardsService = /** @class */ (function () {
    function GiftCardsService(http) {
        this.http = http;
    }
    GiftCardsService.prototype.getGiftCards = function () {
        console.log('payload GET All Gift Cards SERVICE:');
        return this.http
            .get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_URL + "/giftcard/")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return result.data; }));
    };
    GiftCardsService.prototype.getGiftCard = function (id) {
        console.log(id);
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_URL + "/giftcard/" + id);
    };
    GiftCardsService.prototype.getGiftCardsUser = function (userID) {
        console.log('payload GET Gift Cards User SERVICE:', userID);
        return this.http
            .get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_URL + "/giftcard/user/" + userID)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.data; }));
    };
    GiftCardsService.prototype.addGiftCard = function (giftCard, userID) {
        console.log('ADD GiftCard SERVICE', giftCard);
        var data = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, giftCard, { userID: userID });
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_URL + "/giftcard", data);
    };
    GiftCardsService.prototype.searchBooking = function (searchString) {
        // console.log(id);
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_URL + "/booking/search/" + searchString);
    };
    GiftCardsService.prototype.getBookingContext = function (id) {
        // console.log(id);
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_URL + "/context/" + id);
    };
    GiftCardsService.prototype.deleteBooking = function (bookingId) {
        // console.log('DELETE TRIP SERVICE', bookingId);
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_URL + "/booking/" + bookingId);
    };
    GiftCardsService.prototype.deleteManyBookings = function (bookingsIds) {
        // console.log('DELETE MANY TRIPS SERVICE', bookingsIds);
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_URL + "/booking/deleteMany", bookingsIds);
    };
    GiftCardsService.prototype.updateBooking = function (booking, overwrite) {
        console.log('UPDATE TRIP SERVICE', booking);
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_URL + "/booking/" + booking._id, {
            bookingData: booking,
            overwrite: overwrite
        });
    };
    GiftCardsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    GiftCardsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], GiftCardsService);
    return GiftCardsService;
}());



/***/ }),

/***/ "./src/app/core/services/jwt.service.ts":
/*!**********************************************!*\
  !*** ./src/app/core/services/jwt.service.ts ***!
  \**********************************************/
/*! exports provided: JwtService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtService", function() { return JwtService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var JwtService = /** @class */ (function () {
    function JwtService() {
    }
    JwtService.prototype.decodedToken = function () {
        try {
            return jwt_decode__WEBPACK_IMPORTED_MODULE_2__(this.getToken());
        }
        catch (Error) {
            return null;
        }
    };
    JwtService.prototype.getToken = function () {
        return window.localStorage.getItem('jwt_token');
    };
    JwtService.prototype.checkIfTokenValid = function () {
        if (this.getToken()) {
            var now = new Date().getTime() / 1000;
            // console.log('decodedToken service', this.decodedToken());
            var exp = parseInt(this.decodedToken().exp, 10);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(exp > now);
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(false);
        }
    };
    JwtService.prototype.saveToken = function (token) {
        // console.log('token:', token);
        window.localStorage.setItem('jwt_token', token);
    };
    JwtService.prototype.destroyToken = function () {
        window.localStorage.removeItem('jwt_token');
    };
    Object.defineProperty(JwtService.prototype, "currentUser", {
        get: function () {
            // console.log(this.decodeToken(this.getToken()));
            return this.decodedToken();
        },
        enumerable: true,
        configurable: true
    });
    JwtService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], JwtService);
    return JwtService;
}());



/***/ }),

/***/ "./src/app/core/services/trips.service.ts":
/*!************************************************!*\
  !*** ./src/app/core/services/trips.service.ts ***!
  \************************************************/
/*! exports provided: TripsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripsService", function() { return TripsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json'
    }),
    withCredentials: true
};
var TripsService = /** @class */ (function () {
    function TripsService(http) {
        this.http = http;
    }
    TripsService.prototype.getTrips = function () {
        // console.log('payload GET TRIPS SERVICE:');
        // const sortOrder = payload.sortOrder;
        // const pageNumber = payload.pageNumber;
        // const pageSize = payload.pageSize;
        // console.log('GET TRIPS SERVICE', sortOrder, pageNumber, pageSize);
        return this.http
            .get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_URL + "/trip/", httpOptions
        // , {
        //   params: new HttpParams()
        // .set('filter', filter)
        // .set('sortOrder', sortOrder)
        // .set('pageNumber', pageNumber.toString())
        // .set('pageSize', pageSize.toString())
        // }
        )
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return result.data; }));
    };
    TripsService.prototype.getTrip = function (id) {
        // console.log('GET TRIP SERVICE', id);
        return this.http
            .get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_URL + "/trip/" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return result.data; }));
    };
    TripsService.prototype.addTrip = function (trip) {
        // console.log('ADD TRIP SERVICE', trip);
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_URL + "/trip", trip);
    };
    TripsService.prototype.searchTrip = function (searchString) {
        // console.log(id);
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_URL + "/trip/search/" + searchString);
    };
    TripsService.prototype.getTripContext = function (id) {
        // console.log(id);
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_URL + "/context/" + id);
    };
    TripsService.prototype.deleteTrip = function (tripId) {
        // console.log('DELETE TRIP SERVICE', tripId);
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_URL + "/trip/" + tripId);
    };
    TripsService.prototype.deleteManyTrips = function (tripsIds) {
        // console.log('DELETE MANY TRIPS SERVICE', tripsIds);
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_URL + "/trip/deleteMany", tripsIds);
    };
    TripsService.prototype.updateTrip = function (trip) {
        // console.log('UPDATE TRIP SERVICE', trip);
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_URL + "/trip/" + trip._id, {
            tripData: trip
        });
    };
    TripsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    TripsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], TripsService);
    return TripsService;
}());



/***/ }),

/***/ "./src/app/core/services/user.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/user.service.ts ***!
  \***********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getUserInfo = function (userID) {
        // console.log('userID:', userID);
        return this.http
            .get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + "/user/" + userID)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.data; }));
    };
    UserService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/shared/components/logout/logout.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/logout/logout.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2xvZ291dC9sb2dvdXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/components/logout/logout.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/logout/logout.component.ts ***!
  \**************************************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LogoutComponent = /** @class */ (function () {
    function LogoutComponent() {
    }
    LogoutComponent.prototype.ngOnInit = function () {
    };
    LogoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-logout',
            template: __webpack_require__(/*! raw-loader!./logout.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/logout/logout.component.html"),
            styles: [__webpack_require__(/*! ./logout.component.scss */ "./src/app/shared/components/logout/logout.component.scss")]
        })
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/store/request/index.ts":
/*!****************************************!*\
  !*** ./src/app/store/request/index.ts ***!
  \****************************************/
/*! exports provided: SetCurrentIndex, SetActivitiesCurrentIndex, SetFormValue, SubmitForm, ClearStepsData, initialState, requestReducer, getRequestState, getCurrentStepIndex, getCurrentActivitiesStepIndex, getCurrentValidationErrors, getFormValue, getActivitiesWithoutEmptyOnes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _request_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./request.actions */ "./src/app/store/request/request.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetCurrentIndex", function() { return _request_actions__WEBPACK_IMPORTED_MODULE_0__["SetCurrentIndex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetActivitiesCurrentIndex", function() { return _request_actions__WEBPACK_IMPORTED_MODULE_0__["SetActivitiesCurrentIndex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetFormValue", function() { return _request_actions__WEBPACK_IMPORTED_MODULE_0__["SetFormValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SubmitForm", function() { return _request_actions__WEBPACK_IMPORTED_MODULE_0__["SubmitForm"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClearStepsData", function() { return _request_actions__WEBPACK_IMPORTED_MODULE_0__["ClearStepsData"]; });

/* harmony import */ var _request_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./request.reducer */ "./src/app/store/request/request.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return _request_reducer__WEBPACK_IMPORTED_MODULE_1__["initialState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "requestReducer", function() { return _request_reducer__WEBPACK_IMPORTED_MODULE_1__["requestReducer"]; });

/* harmony import */ var _request_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./request.selectors */ "./src/app/store/request/request.selectors.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRequestState", function() { return _request_selectors__WEBPACK_IMPORTED_MODULE_2__["getRequestState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCurrentStepIndex", function() { return _request_selectors__WEBPACK_IMPORTED_MODULE_2__["getCurrentStepIndex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCurrentActivitiesStepIndex", function() { return _request_selectors__WEBPACK_IMPORTED_MODULE_2__["getCurrentActivitiesStepIndex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCurrentValidationErrors", function() { return _request_selectors__WEBPACK_IMPORTED_MODULE_2__["getCurrentValidationErrors"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFormValue", function() { return _request_selectors__WEBPACK_IMPORTED_MODULE_2__["getFormValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getActivitiesWithoutEmptyOnes", function() { return _request_selectors__WEBPACK_IMPORTED_MODULE_2__["getActivitiesWithoutEmptyOnes"]; });






/***/ }),

/***/ "./src/app/store/request/request.actions.ts":
/*!**************************************************!*\
  !*** ./src/app/store/request/request.actions.ts ***!
  \**************************************************/
/*! exports provided: SetCurrentIndex, SetActivitiesCurrentIndex, SetFormValue, SubmitForm, ClearStepsData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetCurrentIndex", function() { return SetCurrentIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetActivitiesCurrentIndex", function() { return SetActivitiesCurrentIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetFormValue", function() { return SetFormValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmitForm", function() { return SubmitForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClearStepsData", function() { return ClearStepsData; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");

var SetCurrentIndex = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Request] Set Current Index', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var SetActivitiesCurrentIndex = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Request] Set Activities Current Index', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var SetFormValue = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Request] Set Form Value', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var SubmitForm = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Request] Submit Form');
var ClearStepsData = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Request] Clear Steps Data');


/***/ }),

/***/ "./src/app/store/request/request.reducer.ts":
/*!**************************************************!*\
  !*** ./src/app/store/request/request.reducer.ts ***!
  \**************************************************/
/*! exports provided: initialState, requestReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestReducer", function() { return requestReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _request_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./request.actions */ "./src/app/store/request/request.actions.ts");



var initialState = {
    formValue: {
        isDatePlanned: true,
        departureDate: null,
        arrivalDate: null,
        airport: '',
        estimateMonth: null,
        estimateDays: null,
        destinations: [],
        preciseArea: null,
        numberPeople: null,
        purposes: [],
        beenInPast: null,
        hotelType: [],
        priceRange: [50, 200],
        activities: [],
        museums: [],
        sports: [],
        history: [],
        natural: [],
        spa: [],
        food: [],
        dining: [],
        volcano: null,
        volcanoPlaces: null,
        culture: [],
        night: [],
        eatHands: null,
        treks: [],
        treksDuration: null,
        treksDifficulty: null,
        package: 'VIP package'
    },
    isValid: false,
    currentStepIndex: 11,
    currentActivitiesStepIndex: -1,
    currentValidationErrors: {}
};
var featureReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_request_actions__WEBPACK_IMPORTED_MODULE_2__["SetCurrentIndex"], function (state, _a) {
    var currentStepIndex = _a.currentStepIndex;
    return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { currentStepIndex: currentStepIndex, currentValidationErrors: {} }));
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_request_actions__WEBPACK_IMPORTED_MODULE_2__["SetActivitiesCurrentIndex"], function (state, _a) {
    var currentActivitiesStepIndex = _a.currentActivitiesStepIndex;
    return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { currentActivitiesStepIndex: currentActivitiesStepIndex, currentValidationErrors: {} }));
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_request_actions__WEBPACK_IMPORTED_MODULE_2__["SetFormValue"], function (state, _a) {
    var stepValues = _a.stepValues, validationErrors = _a.validationErrors;
    return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { formValue: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state.formValue, stepValues), currentValidationErrors: validationErrors }));
}));
function requestReducer(state, action) {
    return featureReducer(state, action);
}


/***/ }),

/***/ "./src/app/store/request/request.selectors.ts":
/*!****************************************************!*\
  !*** ./src/app/store/request/request.selectors.ts ***!
  \****************************************************/
/*! exports provided: getRequestState, getCurrentStepIndex, getCurrentActivitiesStepIndex, getCurrentValidationErrors, getFormValue, getActivitiesWithoutEmptyOnes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRequestState", function() { return getRequestState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentStepIndex", function() { return getCurrentStepIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentActivitiesStepIndex", function() { return getCurrentActivitiesStepIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentValidationErrors", function() { return getCurrentValidationErrors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFormValue", function() { return getFormValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActivitiesWithoutEmptyOnes", function() { return getActivitiesWithoutEmptyOnes; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var src_app_app_default_trip_request_data_activities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/app-default/trip-request/data/activities */ "./src/app/app-default/trip-request/data/activities.ts");


var getRequestState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('request');
var getCurrentStepIndex = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getRequestState, function (requestState) { return requestState.currentStepIndex; });
var getCurrentActivitiesStepIndex = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getRequestState, function (requestState) {
    return requestState.currentActivitiesStepIndex;
});
var getCurrentValidationErrors = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getRequestState, function (requestState) {
    var stepValidationValues = Object.values(requestState.currentValidationErrors);
    return stepValidationValues.filter(function (val) { return val.isValid === false; });
});
var getFormValue = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getRequestState, function (requestState) { return requestState.formValue; });
var getActivitiesWithoutEmptyOnes = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getRequestState, function (requestState) {
    return requestState.formValue.activities.filter(function (act) { return !src_app_app_default_trip_request_data_activities__WEBPACK_IMPORTED_MODULE_1__["activitiesWithoutPage"].includes(act); });
});


/***/ }),

/***/ "./src/app/store/user/index.ts":
/*!*************************************!*\
  !*** ./src/app/store/user/index.ts ***!
  \*************************************/
/*! exports provided: Login, LoginSuccess, Logout, LogoutSuccess, LoadUserInfo, SetUserInfo, SubmitForm, ClearStepsData, initialState, userReducer, getUserState, getIsLoggedIn, getUserInfo, getIsLoginLoading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.actions */ "./src/app/store/user/user.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return _user_actions__WEBPACK_IMPORTED_MODULE_0__["Login"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginSuccess", function() { return _user_actions__WEBPACK_IMPORTED_MODULE_0__["LoginSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Logout", function() { return _user_actions__WEBPACK_IMPORTED_MODULE_0__["Logout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogoutSuccess", function() { return _user_actions__WEBPACK_IMPORTED_MODULE_0__["LogoutSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadUserInfo", function() { return _user_actions__WEBPACK_IMPORTED_MODULE_0__["LoadUserInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetUserInfo", function() { return _user_actions__WEBPACK_IMPORTED_MODULE_0__["SetUserInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SubmitForm", function() { return _user_actions__WEBPACK_IMPORTED_MODULE_0__["SubmitForm"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClearStepsData", function() { return _user_actions__WEBPACK_IMPORTED_MODULE_0__["ClearStepsData"]; });

/* harmony import */ var _user_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.reducer */ "./src/app/store/user/user.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return _user_reducer__WEBPACK_IMPORTED_MODULE_1__["initialState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userReducer", function() { return _user_reducer__WEBPACK_IMPORTED_MODULE_1__["userReducer"]; });

/* harmony import */ var _user_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.selectors */ "./src/app/store/user/user.selectors.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUserState", function() { return _user_selectors__WEBPACK_IMPORTED_MODULE_2__["getUserState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getIsLoggedIn", function() { return _user_selectors__WEBPACK_IMPORTED_MODULE_2__["getIsLoggedIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUserInfo", function() { return _user_selectors__WEBPACK_IMPORTED_MODULE_2__["getUserInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getIsLoginLoading", function() { return _user_selectors__WEBPACK_IMPORTED_MODULE_2__["getIsLoginLoading"]; });






/***/ }),

/***/ "./src/app/store/user/user.actions.ts":
/*!********************************************!*\
  !*** ./src/app/store/user/user.actions.ts ***!
  \********************************************/
/*! exports provided: Login, LoginSuccess, Logout, LogoutSuccess, LoadUserInfo, SetUserInfo, SubmitForm, ClearStepsData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return Login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginSuccess", function() { return LoginSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logout", function() { return Logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutSuccess", function() { return LogoutSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadUserInfo", function() { return LoadUserInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetUserInfo", function() { return SetUserInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmitForm", function() { return SubmitForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClearStepsData", function() { return ClearStepsData; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");

var Login = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[User] Login', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var LoginSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[User] Login Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var Logout = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[User] Logout');
var LogoutSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[User] Logout Success');
var LoadUserInfo = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[User] Load User Info', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var SetUserInfo = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[User] Set User Info', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var SubmitForm = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Stepper] Submit Form');
var ClearStepsData = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Stepper] Clear Steps Data');


/***/ }),

/***/ "./src/app/store/user/user.effects.ts":
/*!********************************************!*\
  !*** ./src/app/store/user/user.effects.ts ***!
  \********************************************/
/*! exports provided: UserEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEffects", function() { return UserEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _user_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.actions */ "./src/app/store/user/user.actions.ts");
/* harmony import */ var src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var src_app_core_services_jwt_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/jwt.service */ "./src/app/core/services/jwt.service.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");








var UserEffects = /** @class */ (function () {
    function UserEffects(actions$, userService, authService, jwtService) {
        var _this = this;
        this.actions$ = actions$;
        this.userService = userService;
        this.authService = authService;
        this.jwtService = jwtService;
        this.login$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () {
            return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_user_actions__WEBPACK_IMPORTED_MODULE_4__["Login"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (action) {
                return _this.authService.logIn(action.loginInfo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
                    // console.log('userInfo:', res);
                    _this.jwtService.saveToken(res.token);
                    var userInfo = res.user;
                    return Object(_user_actions__WEBPACK_IMPORTED_MODULE_4__["LoginSuccess"])({ userInfo: userInfo });
                })
                // catchError(error => of(AuthApiActions.loginFailure({ error })))
                );
            }));
        });
        this.loadUser$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () {
            return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_user_actions__WEBPACK_IMPORTED_MODULE_4__["LoadUserInfo"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (action) {
                // console.log('userID LoadUserInfo Effect:', action.userID);
                return _this.userService.getUserInfo(action.userID).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (userInfo) {
                    // console.log('userInfo:', userInfo);
                    return Object(_user_actions__WEBPACK_IMPORTED_MODULE_4__["SetUserInfo"])({ userInfo: userInfo });
                }));
            }));
        });
        this.logout$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () {
            return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_user_actions__WEBPACK_IMPORTED_MODULE_4__["Logout"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () {
                _this.jwtService.destroyToken();
                return Object(_user_actions__WEBPACK_IMPORTED_MODULE_4__["LogoutSuccess"])();
            }));
        });
    }
    UserEffects.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
        { type: src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
        { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
        { type: src_app_core_services_jwt_service__WEBPACK_IMPORTED_MODULE_6__["JwtService"] }
    ]; };
    UserEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], UserEffects);
    return UserEffects;
}());



/***/ }),

/***/ "./src/app/store/user/user.reducer.ts":
/*!********************************************!*\
  !*** ./src/app/store/user/user.reducer.ts ***!
  \********************************************/
/*! exports provided: initialState, userReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userReducer", function() { return userReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _user_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.actions */ "./src/app/store/user/user.actions.ts");



var initialState = {
    isLoggedIn: false,
    userInfo: {},
    isLoginLoading: false
};
var featureReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_user_actions__WEBPACK_IMPORTED_MODULE_2__["SetUserInfo"], function (state, _a) {
    var userInfo = _a.userInfo;
    return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { isLoggedIn: true, userInfo: userInfo }));
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_user_actions__WEBPACK_IMPORTED_MODULE_2__["Login"], function (state) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { isLoginLoading: true })); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_user_actions__WEBPACK_IMPORTED_MODULE_2__["LoginSuccess"], function (state, _a) {
    var userInfo = _a.userInfo;
    return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { isLoggedIn: true, userInfo: userInfo, isLoginLoading: false }));
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_user_actions__WEBPACK_IMPORTED_MODULE_2__["LogoutSuccess"], function () { return initialState; }));
function userReducer(state, action) {
    return featureReducer(state, action);
}


/***/ }),

/***/ "./src/app/store/user/user.selectors.ts":
/*!**********************************************!*\
  !*** ./src/app/store/user/user.selectors.ts ***!
  \**********************************************/
/*! exports provided: getUserState, getIsLoggedIn, getUserInfo, getIsLoginLoading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserState", function() { return getUserState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsLoggedIn", function() { return getIsLoggedIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserInfo", function() { return getUserInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsLoginLoading", function() { return getIsLoginLoading; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");

var getUserState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('user');
var getIsLoggedIn = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getUserState, function (userState) { return userState.isLoggedIn; });
var getUserInfo = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getUserState, function (userState) { return userState.userInfo; });
var getIsLoginLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getUserState, function (stepperState) { return stepperState.isLoginLoading; });
// export const getStepsData = createSelector(
//   getStepperState,
//   (stepperState: StepperState): IStepData[] => stepperState.stepsData
// );
// export const getActiveStepData = createSelector(
//   getStepsData,
//   getActiveStepIndex,
//   (stepsData: IStepData[], activeStepIndex: number): IStepData =>
//     stepsData[activeStepIndex]
// );
// export const getIsStepperValid = createSelector(
//   getStepsData,
//   (stepsData: IStepData[]): boolean =>
//     stepsData.every(step => step.value !== '')
// );


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
    API_URL: 'http://localhost:4000/api'
};


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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/davidlasry/dev/edonesia/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map