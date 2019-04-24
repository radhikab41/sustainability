(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".about{\r\n    padding:3%;\r\n    background-image: url('cream.png');\r\n    background-color: rgba(0, 0, 0, 0.1);\r\n}\r\n.about .page-heading{\r\n    text-align: center;\r\n}\r\n.img{\r\n    width:100%;\r\n    text-align: center;\r\n}\r\nimg{\r\n    width:70%;\r\n    height:50%;\r\n}\r\n.header ul li{\r\n    display: inline-block;\r\n    margin-right: 5%;\r\n    padding-top:2.5%;\r\n    padding-bottom:2.5%;\r\n}\r\na{\r\n    text-decoration: none;\r\n    color:#000;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixrQ0FBK0M7SUFDL0Msb0NBQW9DO0FBQ3hDO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWJvdXR7XHJcbiAgICBwYWRkaW5nOjMlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2NyZWFtLnBuZ1wiKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG4uYWJvdXQgLnBhZ2UtaGVhZGluZ3tcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uaW1ne1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5pbWd7XHJcbiAgICB3aWR0aDo3MCU7XHJcbiAgICBoZWlnaHQ6NTAlO1xyXG59XHJcblxyXG4uaGVhZGVyIHVsIGxpe1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcclxuICAgIHBhZGRpbmctdG9wOjIuNSU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbToyLjUlO1xyXG59XHJcblxyXG5he1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6IzAwMDtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n <div class=\"body\">\r\n     <div class=\"header\">\r\n       <ul>\r\n         <li> <a routerLink = \"opportunity\">opportunity</a></li>\r\n         <li><a routerLink = \"vision\">vision</a></li>\r\n         <li><a routerLink = \"story\">story</a></li>\r\n         <li><a routerLink = \"model\">model</a></li>\r\n      \r\n         <li><a routerLink = \"team\">team</a></li>\r\n         <li><a routerLink = \"currentwork\">Current Work</a></li>\r\n       \r\n        \r\n       </ul>\r\n     </div>\r\n    \r\n     <router-outlet class=\"about-window\"></router-outlet>\r\n   </div>\r\n  \r\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
        this.newcomponent = "Entered in new component created";
    }
    AboutComponent.prototype.ngOnInit = function () { };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/about/currentWork/currentwork.component.css":
/*!*************************************************************!*\
  !*** ./src/app/about/currentWork/currentwork.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".about-work{\r\n    margin:5%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvY3VycmVudFdvcmsvY3VycmVudHdvcmsuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFNBQVM7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2N1cnJlbnRXb3JrL2N1cnJlbnR3b3JrLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWJvdXQtd29ya3tcclxuICAgIG1hcmdpbjo1JTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/about/currentWork/currentwork.component.html":
/*!**************************************************************!*\
  !*** ./src/app/about/currentWork/currentwork.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"about-work\">\r\n     <h3>Current Work</h3>\r\n     <p>We are assessing the viability of the ISFS model in two Waorani and two Achuar communities. We have prepared and signed collaboration agreements with one of these communities, and pilot-tested the SFS model. We are currently seeking funds to support full commercialization in the Waorani communities, prepare the scaling-up phase, and add new partners to our team.\r\n          </p>\r\n     <div>\r\n               <h4>The Waorani</h4>\r\n               <div>\r\n                    <h3>Gomatan</h3>\r\n               </div>\r\n               <div>\r\n                         <h3>Geyepade</h3>\r\n               </div>\r\n     </div>\r\n     <div>\r\n          <h4>The Achuar</h4>\r\n     </div>\r\n     <div>\r\n               <h4>Teaching Materials</h4>\r\n          </div>\r\n     \r\n          \r\n</div>"

/***/ }),

/***/ "./src/app/about/currentWork/currentwork.component.ts":
/*!************************************************************!*\
  !*** ./src/app/about/currentWork/currentwork.component.ts ***!
  \************************************************************/
/*! exports provided: CurrentWorkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentWorkComponent", function() { return CurrentWorkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CurrentWorkComponent = /** @class */ (function () {
    function CurrentWorkComponent() {
        this.newcomponent = "Entered in new component created";
    }
    CurrentWorkComponent.prototype.ngOnInit = function () { };
    CurrentWorkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'currentwork',
            template: __webpack_require__(/*! ./currentwork.component.html */ "./src/app/about/currentWork/currentwork.component.html"),
            styles: [__webpack_require__(/*! ./currentwork.component.css */ "./src/app/about/currentWork/currentwork.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CurrentWorkComponent);
    return CurrentWorkComponent;
}());



/***/ }),

/***/ "./src/app/about/model/model.component.css":
/*!*************************************************!*\
  !*** ./src/app/about/model/model.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.about-model{\r\n    margin:5%;\r\n}\r\n body{\r\n     padding:10%;\r\n     text-align: center;\r\n     margin:20%;\r\n }\r\n .img{\r\n    width:100%;\r\n    text-align: center;\r\n}\r\n img{\r\n    width:70%;\r\n    height:50%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvbW9kZWwvbW9kZWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxTQUFTO0FBQ2I7Q0FDQztLQUNJLFdBQVc7S0FDWCxrQkFBa0I7S0FDbEIsVUFBVTtDQUNkO0NBRUE7SUFDRyxVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCO0NBQ0E7SUFDSSxTQUFTO0lBQ1QsVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQvbW9kZWwvbW9kZWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uYWJvdXQtbW9kZWx7XHJcbiAgICBtYXJnaW46NSU7XHJcbn1cclxuIGJvZHl7XHJcbiAgICAgcGFkZGluZzoxMCU7XHJcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgIG1hcmdpbjoyMCU7XHJcbiB9XHJcblxyXG4gLmltZ3tcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuaW1ne1xyXG4gICAgd2lkdGg6NzAlO1xyXG4gICAgaGVpZ2h0OjUwJTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/about/model/model.component.html":
/*!**************************************************!*\
  !*** ./src/app/about/model/model.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"about-model\">\r\n          <h3>Our Model</h3>\r\n          <p>Our model is distinctive due to the following three elements: </p>\r\n               <!--4.1-->\r\n               <div>\r\n                         <h4>Kinship Ties</h4>\r\n                         <p>ISFS relies on community kinship relations to offer immersive education in indigenous language and\r\n                                   bioculture, while at the same time training and employing indigenous people in scientific data collection. The kinship component of the model reduces internal conflicts, which is a common cause of failure in community-based projects.\r\n                                   </p>\r\n                              <div class=\"img\">\r\n                                        <img src = \"../../../assets/IMG_1.jpeg\" alt=\"kinship-image\"/>\r\n                              </div>\r\n                              \r\n               </div>\r\n               <!--4.2-->\r\n               <div>\r\n                         <h4>Boundary Organization</h4>\r\n                         <p>Our model bridges four actors/sectors that are crucial for global sustainability, but rarely engaged with: indigenous communities, the global education industry, family businesses, and research institutions. We coordinate and bridge across these four sectors through innovative networking solutions.\r\n                              </p>\r\n                         <p>At the center of the ISFS business model are boundary organizations capable of bridging indigenous communities with international students. Boundary organization hold legitimacy, salience and credibility in both sides of the boundary.\r\n                              </p>\r\n\r\n                                   <div class=\"img\">\r\n                                        <img src = \"../../../assets/IMG_2.jpeg\" alt=\"boundary-organication-image\"/>\r\n                                   </div>\r\n               </div>\r\n\r\n               <!--4.3-->\r\n               <div>\r\n                         <h4>Organic Growth</h4>\r\n                         <p>Our business model is not mechanical, but organic. it cannot be replicated following a formula, but it requires the nurturing human relationships.\r\n                              </p>\r\n                         \r\n               </div>\r\n          \r\n          \r\n</div>"

/***/ }),

/***/ "./src/app/about/model/model.component.ts":
/*!************************************************!*\
  !*** ./src/app/about/model/model.component.ts ***!
  \************************************************/
/*! exports provided: ModelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelComponent", function() { return ModelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ModelComponent = /** @class */ (function () {
    function ModelComponent() {
        this.newcomponent = "Entered in new component created";
    }
    ModelComponent.prototype.ngOnInit = function () { };
    ModelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'model',
            template: __webpack_require__(/*! ./model.component.html */ "./src/app/about/model/model.component.html"),
            styles: [__webpack_require__(/*! ./model.component.css */ "./src/app/about/model/model.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ModelComponent);
    return ModelComponent;
}());



/***/ }),

/***/ "./src/app/about/opportunity/opportunity.component.css":
/*!*************************************************************!*\
  !*** ./src/app/about/opportunity/opportunity.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".about-opportunity{\r\n   margin:5%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvb3Bwb3J0dW5pdHkvb3Bwb3J0dW5pdHkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtHQUNHLFNBQVM7QUFDWiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L29wcG9ydHVuaXR5L29wcG9ydHVuaXR5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWJvdXQtb3Bwb3J0dW5pdHl7XHJcbiAgIG1hcmdpbjo1JTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/about/opportunity/opportunity.component.html":
/*!**************************************************************!*\
  !*** ./src/app/about/opportunity/opportunity.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"about-opportunity\">\r\n    <h2>The Opportunity</h2>\r\n   <p>     heelooo                 erfgedfge</p>\r\n</div>"

/***/ }),

/***/ "./src/app/about/opportunity/opportunity.component.ts":
/*!************************************************************!*\
  !*** ./src/app/about/opportunity/opportunity.component.ts ***!
  \************************************************************/
/*! exports provided: OpportunityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpportunityComponent", function() { return OpportunityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OpportunityComponent = /** @class */ (function () {
    function OpportunityComponent() {
        this.newcomponent = "Entered in new component created";
    }
    OpportunityComponent.prototype.ngOnInit = function () { };
    OpportunityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'opportunity',
            template: __webpack_require__(/*! ./opportunity.component.html */ "./src/app/about/opportunity/opportunity.component.html"),
            styles: [__webpack_require__(/*! ./opportunity.component.css */ "./src/app/about/opportunity/opportunity.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OpportunityComponent);
    return OpportunityComponent;
}());



/***/ }),

/***/ "./src/app/about/story/story.component.css":
/*!*************************************************!*\
  !*** ./src/app/about/story/story.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".about-story{\r\n    margin:5%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvc3Rvcnkvc3RvcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFNBQVM7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L3N0b3J5L3N0b3J5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWJvdXQtc3Rvcnl7XHJcbiAgICBtYXJnaW46NSU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/about/story/story.component.html":
/*!**************************************************!*\
  !*** ./src/app/about/story/story.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"about-story\">\r\n    <h3>Our Story</h3>\r\n    <p>Indigenous Sustainability Field Schools (ISFS) build upon 20 years of successful operations of the <a href=\"https://www.andes-fieldschool.org/\">Andes and Amazon Field School</a> in Ecuador teaching indigenous language and culture.                         We are currently implementing a ISFS pilot in the Waorani community of Gomatan (at the Curaray drainage of Napo-Amazon basin).This pilot is allowing us to test the model and demonstrate its capacity to make indigenous communities more sustainable. Basic infrastructure to host students will be ready in the Summer of 2019, while language materials to teach Waorani and Achuar are currently being developed.We are seeking support to scale the ISFS model worldwide.\r\n         </p>\r\n</div>"

/***/ }),

/***/ "./src/app/about/story/story.component.ts":
/*!************************************************!*\
  !*** ./src/app/about/story/story.component.ts ***!
  \************************************************/
/*! exports provided: StoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoryComponent", function() { return StoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StoryComponent = /** @class */ (function () {
    function StoryComponent() {
        this.newcomponent = "Entered in new component created";
    }
    StoryComponent.prototype.ngOnInit = function () { };
    StoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'story',
            template: __webpack_require__(/*! ./story.component.html */ "./src/app/about/story/story.component.html"),
            styles: [__webpack_require__(/*! ./story.component.css */ "./src/app/about/story/story.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StoryComponent);
    return StoryComponent;
}());



/***/ }),

/***/ "./src/app/about/team/team.component.css":
/*!***********************************************!*\
  !*** ./src/app/about/team/team.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".about-team{\r\n    margin:5%;\r\n    \r\n}\r\n\r\n.img{\r\n    width:100%;\r\n    text-align: center;\r\n}\r\n\r\nimg{\r\n    width:70%;\r\n    height:50%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvdGVhbS90ZWFtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTOztBQUViOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9hYm91dC90ZWFtL3RlYW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hYm91dC10ZWFte1xyXG4gICAgbWFyZ2luOjUlO1xyXG4gICAgXHJcbn1cclxuXHJcbi5pbWd7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbmltZ3tcclxuICAgIHdpZHRoOjcwJTtcclxuICAgIGhlaWdodDo1MCU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/about/team/team.component.html":
/*!************************************************!*\
  !*** ./src/app/about/team/team.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"about-team\">\r\n    <h3>Teams and Partners</h3>\r\n    <div class=\"img\">\r\n          <img src = \"../../assets/DSC_3.JPG\" alt=\"team-image\"/>\r\n    </div>\r\n    \r\n     <!--5.1-->\r\n     <div>\r\n              <h4> Andes and Amazon Field School</h4>\r\n              \r\n              <p>The Andes and Amazon Field School (Iyarina) is leading the scaling of ISFS in the Ecuadorian Amazon. This organization provides decades of experience as a broker between international students and indigenous people. Investments for scaling within Ecuador are managed  by Iyarina, including reinvestments coming from student fees. Iyarina’s experience guarantees  the quality and scope of the education services provided.\r\n                   </p>\r\n              <p>The Andes and Amazon Field School (AAFS) is an LLC registered in Arizona closely tied to an Ecuadorian sister LLC, Iyarina Limitada.“The mission of AAFS is to provide quality in-country education on the Ecuadorian Amazon in a safe and comfortable setting.  Each summer we bring together a top group of academic and indigenous experts for 8 weeks of learning and research.  AAFS provides employment and training to indigenous people that is compatible with the preservation of their culture and environment. It also trains undergraduate and graduate students to work with these communities.</p>\r\n              <p>Since 1999 it has provided Amazonian Quichua and Shuar language training to 156 graduate FLAS Fellows (Title VI Foreign Language and Area Studies Fellowships) from 38 universities.  Many of these alumni are now working at the intersection of Amazonian culture and environment partnering with indigenous leaders they met at the field school. Located in an Amazonian Quichua community, AAFS has a vital network of indigenous leaders as well as non-indigenous academics in Ecuador who will help us carry out the project. After 20 years of building interpersonal-intercultural relationships between indigenous and non-indigenous people, the AAFS is well positioned to commercialize the model beyond the Quechuan context.</p>\r\n    </div>\r\n    <!--5.2-->\r\n    <div>\r\n              <h4>Global Consortium for Sustainability Outcomes</h4>\r\n              \r\n              <p>The Global Consortium for Sustainability Outcomes (GCSO) is leading  the scaling of ISFS worldwide.</p>\r\n              <p>GCSO focuses on co-developing and testing potential solutions to urgent sustainability problems. It is a global network operating under the umbrella of Arizona State University Foundation. Its members include 12 major universities, research institutes, and corporate sponsors committed to transform ideas into action through research, development and capacity building. These institutions have the research, development, innovation and capacity-building talent to develop timely, affordable and scalable solutions that could result in desirable sustainability outcomes. GCSO generates and tests a wide range of solutions including technologies, policies, economic incentives, social change and cultural practices. \r\n                   </p>   \r\n              <p>In Ecuador, the GCSO ensures that potential students become aware of the advantages of the model, and that new investors and donors consider the model’s performance and its potential for scaling beyond the Waorani. GCSO is key to leverage the ISFS model within its network of universities, investors, donors, and the study-abroad industry.\r\n                   </p> \r\n    </div>\r\n    <!--5.3-->\r\n    <div>\r\n         <h4>TourCert</h4>\r\n         <p>TourCert Ecuador S.A. is a branch of TourCert, a non-profit German alliance that uses certification processes as a tool to promote sustainable tourism globally. It is integrated by 4 non-profit organizations seeking to promote sustainable development: Kate: Ecology and Development, Friends of Nature, Sustainable Development University (Eberswalde), and Tourism Watch. TourCert is integrated into the Global Council of Sustainable Tourism. It conducts rigorous analyses of tourism activities to assess their sustainability, set priorities and monitor progress though internationally established criteria and management norms. TourCert grants its own “TourCert certification of sustainability and responsibility” to tourism businesses and destinations.</p>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/about/team/team.component.ts":
/*!**********************************************!*\
  !*** ./src/app/about/team/team.component.ts ***!
  \**********************************************/
/*! exports provided: TeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamComponent", function() { return TeamComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TeamComponent = /** @class */ (function () {
    function TeamComponent() {
        this.newcomponent = "Entered in new component created";
    }
    TeamComponent.prototype.ngOnInit = function () { };
    TeamComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'team',
            template: __webpack_require__(/*! ./team.component.html */ "./src/app/about/team/team.component.html"),
            styles: [__webpack_require__(/*! ./team.component.css */ "./src/app/about/team/team.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TeamComponent);
    return TeamComponent;
}());



/***/ }),

/***/ "./src/app/about/vision/vision.component.css":
/*!***************************************************!*\
  !*** ./src/app/about/vision/vision.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".about-vision{\r\n    margin:5%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvdmlzaW9uL3Zpc2lvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksU0FBUztBQUNiIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQvdmlzaW9uL3Zpc2lvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFib3V0LXZpc2lvbntcclxuICAgIG1hcmdpbjo1JTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/about/vision/vision.component.html":
/*!****************************************************!*\
  !*** ./src/app/about/vision/vision.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <div class=\"about-vision\">\r\n            <h3>Vision</h3>\r\n  </div>\r\n  \r\n "

/***/ }),

/***/ "./src/app/about/vision/vision.component.ts":
/*!**************************************************!*\
  !*** ./src/app/about/vision/vision.component.ts ***!
  \**************************************************/
/*! exports provided: VisionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisionComponent", function() { return VisionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var VisionComponent = /** @class */ (function () {
    function VisionComponent() {
        this.newcomponent = "Entered in new component created";
    }
    VisionComponent.prototype.ngOnInit = function () { };
    VisionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'vision',
            template: __webpack_require__(/*! ./vision.component.html */ "./src/app/about/vision/vision.component.html"),
            styles: [__webpack_require__(/*! ./vision.component.css */ "./src/app/about/vision/vision.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], VisionComponent);
    return VisionComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".body{\r\n    margin:0px;\r\n    font-family: 'Roboto', sans-serif;\r\n}\r\n\r\n.header ul li{\r\n    display: inline-block;\r\n    margin-right: 5%;\r\n    padding-top:2.5%;\r\n    padding-bottom:2.5%;\r\n}\r\n\r\nrouter-outlet{\r\n    height: 100%;\r\n    width:100%;\r\n}\r\n\r\n.window{\r\n    height: 100%;\r\n    width:100%;\r\n}\r\n\r\na{\r\n    text-decoration: none;\r\n    color:#000;\r\n    \r\n    \r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7QUFDZDs7QUFDQTtJQUNJLFlBQVk7SUFDWixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsVUFBVTs7O0FBR2QiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib2R5e1xyXG4gICAgbWFyZ2luOjBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmhlYWRlciB1bCBsaXtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1yaWdodDogNSU7XHJcbiAgICBwYWRkaW5nLXRvcDoyLjUlO1xyXG4gICAgcGFkZGluZy1ib3R0b206Mi41JTtcclxufVxyXG5cclxucm91dGVyLW91dGxldHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOjEwMCU7XHJcbn1cclxuLndpbmRvd3tcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOjEwMCU7XHJcbn1cclxuXHJcbmF7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjojMDAwO1xyXG4gICAgXHJcbiAgICBcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n <div class=\"body\">\n   <div class=\"header\">\n     <ul>\n       <li> <a routerLink = \"home\">Home</a></li>\n       <li><a routerLink = \"about\">About</a></li>\n      <!--<li><a routerLink = \"app-currentwork\">Current Work</a></li>>--> \n       <li><a routerLink = \"database\">Database</a></li>\n       <li><a routerLink = \"resources\">Resources</a></li>\n       <li><a routerLink = \"newsevents\">News and Events</a></li>\n      \n     </ul>\n   </div>\n  \n   <router-outlet class=\"window\"></router-outlet>\n </div>\n"

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


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'my-app';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _about_currentWork_currentwork_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./about/currentWork/currentwork.component */ "./src/app/about/currentWork/currentwork.component.ts");
/* harmony import */ var _database_database_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./database/database.component */ "./src/app/database/database.component.ts");
/* harmony import */ var _newsEvents_newsevents_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./newsEvents/newsevents.component */ "./src/app/newsEvents/newsevents.component.ts");
/* harmony import */ var _resources_resources_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./resources/resources.component */ "./src/app/resources/resources.component.ts");
/* harmony import */ var _about_model_model_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./about/model/model.component */ "./src/app/about/model/model.component.ts");
/* harmony import */ var _about_opportunity_opportunity_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./about/opportunity/opportunity.component */ "./src/app/about/opportunity/opportunity.component.ts");
/* harmony import */ var _about_story_story_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./about/story/story.component */ "./src/app/about/story/story.component.ts");
/* harmony import */ var _about_team_team_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./about/team/team.component */ "./src/app/about/team/team.component.ts");
/* harmony import */ var _about_vision_vision_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./about/vision/vision.component */ "./src/app/about/vision/vision.component.ts");

















//import {WorkComponent} from './about/work/work.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"], _about_currentWork_currentwork_component__WEBPACK_IMPORTED_MODULE_8__["CurrentWorkComponent"], _database_database_component__WEBPACK_IMPORTED_MODULE_9__["DatabaseComponent"], _newsEvents_newsevents_component__WEBPACK_IMPORTED_MODULE_10__["NewsEventsComponent"], _resources_resources_component__WEBPACK_IMPORTED_MODULE_11__["ResourcesComponent"], _about_model_model_component__WEBPACK_IMPORTED_MODULE_12__["ModelComponent"], _about_opportunity_opportunity_component__WEBPACK_IMPORTED_MODULE_13__["OpportunityComponent"], _about_story_story_component__WEBPACK_IMPORTED_MODULE_14__["StoryComponent"], _about_team_team_component__WEBPACK_IMPORTED_MODULE_15__["TeamComponent"], _about_vision_vision_component__WEBPACK_IMPORTED_MODULE_16__["VisionComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                    {
                        path: 'home',
                        component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]
                    },
                    {
                        path: 'about',
                        component: _about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"]
                    },
                    {
                        path: 'about/currentwork',
                        component: _about_currentWork_currentwork_component__WEBPACK_IMPORTED_MODULE_8__["CurrentWorkComponent"]
                    },
                    {
                        path: 'database',
                        component: _database_database_component__WEBPACK_IMPORTED_MODULE_9__["DatabaseComponent"]
                    },
                    {
                        path: 'newsevents',
                        component: _newsEvents_newsevents_component__WEBPACK_IMPORTED_MODULE_10__["NewsEventsComponent"]
                    }, {
                        path: 'resources',
                        component: _resources_resources_component__WEBPACK_IMPORTED_MODULE_11__["ResourcesComponent"]
                    }, {
                        path: 'about/model',
                        component: _about_model_model_component__WEBPACK_IMPORTED_MODULE_12__["ModelComponent"]
                    }, {
                        path: 'about/opportunity',
                        component: _about_opportunity_opportunity_component__WEBPACK_IMPORTED_MODULE_13__["OpportunityComponent"]
                    }, {
                        path: 'about/story',
                        component: _about_story_story_component__WEBPACK_IMPORTED_MODULE_14__["StoryComponent"]
                    }, {
                        path: 'about/team',
                        component: _about_team_team_component__WEBPACK_IMPORTED_MODULE_15__["TeamComponent"]
                    }, {
                        path: 'about/vision',
                        component: _about_vision_vision_component__WEBPACK_IMPORTED_MODULE_16__["VisionComponent"]
                    }
                ])
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());

var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/database/database.component.css":
/*!*************************************************!*\
  !*** ./src/app/database/database.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".database{\r\n    height:100%;\r\n    background-image: url('cream.png');\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGF0YWJhc2UvZGF0YWJhc2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxrQ0FBK0M7QUFDbkQiLCJmaWxlIjoic3JjL2FwcC9kYXRhYmFzZS9kYXRhYmFzZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRhdGFiYXNle1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvY3JlYW0ucG5nXCIpO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/database/database.component.html":
/*!**************************************************!*\
  !*** ./src/app/database/database.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"database\">\r\n    <h1>database</h1>\r\n</div>"

/***/ }),

/***/ "./src/app/database/database.component.ts":
/*!************************************************!*\
  !*** ./src/app/database/database.component.ts ***!
  \************************************************/
/*! exports provided: DatabaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabaseComponent", function() { return DatabaseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DatabaseComponent = /** @class */ (function () {
    function DatabaseComponent() {
        this.newcomponent = "Entered in new component created";
    }
    DatabaseComponent.prototype.ngOnInit = function () { };
    DatabaseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'database',
            template: __webpack_require__(/*! ./database.component.html */ "./src/app/database/database.component.html"),
            styles: [__webpack_require__(/*! ./database.component.css */ "./src/app/database/database.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DatabaseComponent);
    return DatabaseComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home{\r\n    text-align: center;\r\n}\r\n .landing{\r\n     background-image: url('DSC_0084.JPG');\r\n    background-color: coral;\r\n    margin:0px;\r\n    \r\n    text-align: center;\r\n    height:1700px;\r\n    color:#fff;\r\n    font-size: 2em;    \r\n}\r\n .carousel{\r\n    height:1000px;\r\n}\r\n #landing-title{\r\n    padding:30%;\r\n}\r\n li{\r\n    display:inline;\r\n    margin:3%;\r\n}\r\n img{\r\n    width:25%;\r\n    height:25%;\r\n}\r\n .mission-holder{\r\n    text-align: center;\r\n    vertical-align: -webkit-baseline-middle;\r\n    height:1000px;\r\n    background-image: url('IMG_8544.JPG');\r\n    padding:5%;\r\n}\r\n .mission{\r\n    background-color: rgba(255, 255, 255, 0.8);\r\n    \r\n    height:80%;\r\n   \r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEI7Q0FDQztLQUNJLHFDQUFrRDtJQUNuRCx1QkFBdUI7SUFDdkIsVUFBVTs7SUFFVixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFVBQVU7SUFDVixjQUFjO0FBQ2xCO0NBRUE7SUFDSSxhQUFhO0FBQ2pCO0NBRUE7SUFDSSxXQUFXO0FBQ2Y7Q0FFQTtJQUNJLGNBQWM7SUFDZCxTQUFTO0FBQ2I7Q0FDQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7Q0FDQTtJQUNJLGtCQUFrQjtJQUNsQix1Q0FBdUM7SUFDdkMsYUFBYTtJQUNiLHFDQUFrRDtJQUNsRCxVQUFVO0FBQ2Q7Q0FDQTtJQUNJLDBDQUEwQzs7SUFFMUMsVUFBVTs7QUFFZCIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvbWV7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIC5sYW5kaW5ne1xyXG4gICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL0RTQ18wMDg0LkpQRycpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY29yYWw7XHJcbiAgICBtYXJnaW46MHB4O1xyXG4gICAgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6MTcwMHB4O1xyXG4gICAgY29sb3I6I2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMmVtOyAgICBcclxufVxyXG5cclxuLmNhcm91c2Vse1xyXG4gICAgaGVpZ2h0OjEwMDBweDtcclxufVxyXG5cclxuI2xhbmRpbmctdGl0bGV7XHJcbiAgICBwYWRkaW5nOjMwJTtcclxufVxyXG5cclxubGl7XHJcbiAgICBkaXNwbGF5OmlubGluZTtcclxuICAgIG1hcmdpbjozJTtcclxufVxyXG5pbWd7XHJcbiAgICB3aWR0aDoyNSU7XHJcbiAgICBoZWlnaHQ6MjUlO1xyXG59XHJcbi5taXNzaW9uLWhvbGRlcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHZlcnRpY2FsLWFsaWduOiAtd2Via2l0LWJhc2VsaW5lLW1pZGRsZTtcclxuICAgIGhlaWdodDoxMDAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvSU1HXzg1NDQuSlBHXCIpO1xyXG4gICAgcGFkZGluZzo1JTtcclxufVxyXG4ubWlzc2lvbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcclxuICAgIFxyXG4gICAgaGVpZ2h0OjgwJTtcclxuICAgXHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home\">\r\n    <div class=\"landing\">\r\n        <h1 id=\"landing-title\">Indigenous Sustainability Field Schools</h1>\r\n    </div>\r\n    <div class=\"carousel\">\r\n\r\n\r\n    </div>\r\n    <div class=\"work\">\r\n        <h1>OUR WORK</h1>\r\n        <div id=\"project\"> \r\n           <ul>\r\n            <li *ngFor=\"let project of projects\"><img src=\"../../assets/DSC_0069.JPG\"></li>\r\n           </ul>\r\n        </div>\r\n    </div>\r\n    <div class=\"mission-holder\">\r\n        <div class=\"mission\">\r\n            <h1>Mission</h1>\r\n            <h2>Conserving Biodiversity in indigenous lands through bio-cultural technologies</h2>\r\n            <h4>Edit this text to make it your own. To edit, simply click directly on the text and start typing. You can move the text by dragging and dropping the Text Element anywhere on the page. Break up your text with more than one paragraph for better readability.</h4>\r\n        </div>\r\n    </div>\r\n    <div class=\"location\">\r\n        <h1>Map</h1>\r\n        <img src=\"../../assets/Waorani Map.jpg\" alt=\"map\" />\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.projects = ['project 1', 'project2', 'project3'];
    }
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/newsEvents/newsevents.component.css":
/*!*****************************************************!*\
  !*** ./src/app/newsEvents/newsevents.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ld3NFdmVudHMvbmV3c2V2ZW50cy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/newsEvents/newsevents.component.html":
/*!******************************************************!*\
  !*** ./src/app/newsEvents/newsevents.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n        <h1>news</h1>\r\n    </div>"

/***/ }),

/***/ "./src/app/newsEvents/newsevents.component.ts":
/*!****************************************************!*\
  !*** ./src/app/newsEvents/newsevents.component.ts ***!
  \****************************************************/
/*! exports provided: NewsEventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsEventsComponent", function() { return NewsEventsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NewsEventsComponent = /** @class */ (function () {
    function NewsEventsComponent() {
        this.newcomponent = "Entered in new component created";
    }
    NewsEventsComponent.prototype.ngOnInit = function () { };
    NewsEventsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'newsevents',
            template: __webpack_require__(/*! ./newsevents.component.html */ "./src/app/newsEvents/newsevents.component.html"),
            styles: [__webpack_require__(/*! ./newsevents.component.css */ "./src/app/newsEvents/newsevents.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NewsEventsComponent);
    return NewsEventsComponent;
}());



/***/ }),

/***/ "./src/app/resources/resource.component.css":
/*!**************************************************!*\
  !*** ./src/app/resources/resource.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc291cmNlcy9yZXNvdXJjZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/resources/resources.component.html":
/*!****************************************************!*\
  !*** ./src/app/resources/resources.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n        <h1>resources</h1>\r\n    </div>"

/***/ }),

/***/ "./src/app/resources/resources.component.ts":
/*!**************************************************!*\
  !*** ./src/app/resources/resources.component.ts ***!
  \**************************************************/
/*! exports provided: ResourcesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourcesComponent", function() { return ResourcesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ResourcesComponent = /** @class */ (function () {
    function ResourcesComponent() {
    }
    ResourcesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'resources',
            template: __webpack_require__(/*! ./resources.component.html */ "./src/app/resources/resources.component.html"),
            styles: [__webpack_require__(/*! ./resource.component.css */ "./src/app/resources/resource.component.css")]
        })
    ], ResourcesComponent);
    return ResourcesComponent;
}());



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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


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

module.exports = __webpack_require__(/*! C:\Users\Radhika\Desktop\sem2\part-time\website\schoolOfSustainability\schoolofSustainability\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map