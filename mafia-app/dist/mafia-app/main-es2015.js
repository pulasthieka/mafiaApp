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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/chat/chat.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat/chat.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main class=\"msger-chat\">\n    <div *ngFor=\"let msg of messages\" [ngClass]=\"(msg.username != player)?'left-msg':'right-msg'\" class=\"msg \">\n\n        <div class=\"msg-bubble\">\n            <div class=\"msg-info\">\n                <div class=\"msg-info-name\">{{msg.username}}</div>\n                <!-- <div class=\"msg-info-time\">12:45</div> -->\n            </div>\n            {{msg.message}}\n            <div class=\"msg-text\">\n            </div>\n        </div>\n    </div>\n</main>\n\n<!-- <form (keyup.enter)=\"sendChatMessage(msg.value)\"\"> -->\n<form class=\"msger-inputarea\">\n    <input type=\"text\" [formControl]=\"msg\" class=\"msger-input\" placeholder=\"Enter your message...\">\n    <button type=\"submit\" (click)=\"sendChatMessage(msg.value)\" class=\"msger-send-btn\">Send</button>\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Your Role : {{role}}</h1>\n<div *ngIf=narrator>\n    <app-narrator></app-narrator>\n</div>\n<div class=\"row\">\n    <div class=\"col-6\">\n        <app-chat></app-chat>\n    </div>\n    <div class=\"col-6\">\n        <app-vote></app-vote>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/narrator/narrator.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/narrator/narrator.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>narrator works!</p>\n<button *ngFor=\"let player of players\" mat-button (click)=\"kill(player.name)\">\n    Kill {{player.name}}\n</button>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/start/start.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/start/start.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"showPlayerList\">\n    <p> connect to the url/{{id}}</p>\n    <form *ngIf=\"!nameChosen\" (keyup.enter)=\"createPlayer(playerName.value)\">\n        <label>\n            Enter Name: \n            <input type=\"text\" [formControl]=\"playerName\">\n        </label>\n        <button (click)=\"createPlayer(playerName.value)\">Join</button>\n    </form>\n    <p *ngIf=\"nameChosen\"> Your Name : {{playerId}}\n    </p>\n    <button (click)=\"startGame()\">Start Game</button>\n    <h2>Connected Players</h2>\n    <ul>\n        <li *ngFor = \"let player of players\">{{player.name}}</li>\n    </ul>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/vote/vote.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/vote/vote.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <div class=\"col-6\">\n        <mat-selection-list>\n            <h2 matSubheader> Vote </h2>\n            <mat-list-option *ngFor=\"let item of players\" (click)=\"vote(item.name)\" list-item-active>\n                <mat-icon matListIcon> face </mat-icon>\n                {{item.name}}\n            </mat-list-option>\n\n        </mat-selection-list>\n    </div>\n    <div class=\"col-6\">\n        <mat-list>\n            <mat-list-item *ngFor=\"let item of votesArray\">\n                <h3 matLine>{{item[1]}}</h3>\n                <p matLine>\n                    <span> {{item[0]}} says to hang {{item[1]}} </span>\n                </p>\n            </mat-list-item>\n        </mat-list>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>welcome works!</h1>\n<div>\n    <h1> Start New Game</h1>\n    <button (click) = \"newgame()\">Create New Game</button>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/api.service.ts":
/*!********************************!*\
  !*** ./src/app/api.service.ts ***!
  \********************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _websocket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./websocket.service */ "./src/app/websocket.service.ts");





let ApiService = class ApiService {
    constructor(http, socket) {
        this.http = http;
        this.socket = socket;
        this.uri = "http://localhost:9000/mafia";
        this.players = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.playersObservable = this.players.subscribe();
    }
    newgame() {
        return this.http.post(`${this.uri}/newGame`, {});
    }
    newPlayer(player, id = this.id) {
        return this.http.post(`${this.uri}/add/${id}`, player);
    }
    getPlayers(id) {
        this.http.get(`${this.uri}/get/${id}`).subscribe(res => {
            this.players.next(res["players"]);
            console.log("Get Players", res);
        });
    }
    getRole(id = this.id, name) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("id", id).set("name", name);
        return this.http.get(`${this.uri}/getRole/`, { params });
    }
    start(id = this.id) {
        //assigned roles
        console.log("API service recieved" + id);
        this.http.post(`${this.uri}/start/${id}`, {}).subscribe(res => {
            this.socket.updateRoom();
            this.players.next(res);
            console.log("Roles assigned", res);
        });
    }
    killplayer(id = this.id, player) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("id", id).set("name", name);
        this.http.post(`${this.uri}/kill/${id}&${player}`, {}).subscribe(res => {
            // this.socket.killPlayer();
            // this.players.next(res);
            console.log("Roles assigned", res);
        });
    }
};
ApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _websocket_service__WEBPACK_IMPORTED_MODULE_4__["WebsocketService"] }
];
ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], ApiService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _start_start_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./start/start.component */ "./src/app/start/start.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");






const routes = [
    { path: 'start/:id', component: _start_start_component__WEBPACK_IMPORTED_MODULE_3__["StartComponent"] },
    { path: 'game/:id', component: _main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"] },
    { path: 'new/', component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_5__["WelcomeComponent"] },
    { path: '**', redirectTo: 'new/' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'mafia-app';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _websocket_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./websocket.service */ "./src/app/websocket.service.ts");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/chat/chat.component.ts");
/* harmony import */ var _vote_vote_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./vote/vote.component */ "./src/app/vote/vote.component.ts");
/* harmony import */ var _start_start_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./start/start.component */ "./src/app/start/start.component.ts");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./api.service */ "./src/app/api.service.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
/* harmony import */ var _narrator_narrator_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./narrator/narrator.component */ "./src/app/narrator/narrator.component.ts");





















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _chat_chat_component__WEBPACK_IMPORTED_MODULE_8__["ChatComponent"],
            _vote_vote_component__WEBPACK_IMPORTED_MODULE_9__["VoteComponent"],
            _start_start_component__WEBPACK_IMPORTED_MODULE_10__["StartComponent"],
            _main_main_component__WEBPACK_IMPORTED_MODULE_12__["MainComponent"],
            _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_13__["WelcomeComponent"],
            _narrator_narrator_component__WEBPACK_IMPORTED_MODULE_19__["NarratorComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__["MatRadioModule"]
        ],
        providers: [_websocket_service__WEBPACK_IMPORTED_MODULE_7__["WebsocketService"], _api_service__WEBPACK_IMPORTED_MODULE_11__["ApiService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/chat/chat.component.css":
/*!*****************************************!*\
  !*** ./src/app/chat/chat.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":root {\r\n  --body-bg: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);\r\n  --msger-bg: #fff;\r\n  --border: 2px solid #ddd;\r\n  --left-msg-bg: #ececec;\r\n  --right-msg-bg: #579ffb;\r\n}\r\n\r\nhtml {\r\n  box-sizing: border-box;\r\n}\r\n\r\n*,\r\n*:before,\r\n*:after {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: inherit;\r\n}\r\n\r\nbody {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  height: 100vh;\r\n  background-image: var(--body-bg);\r\n  font-family: Helvetica, sans-serif;\r\n}\r\n\r\n.msger {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-flow: column wrap;\r\n  -webkit-box-pack: justify;\r\n          justify-content: space-between;\r\n  width: 100%;\r\n  max-width: 867px;\r\n  margin: 25px 10px;\r\n  height: calc(100% - 50px);\r\n  border: var(--border);\r\n  border-radius: 5px;\r\n  background: var(--msger-bg);\r\n  box-shadow: 0 15px 15px -5px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.msger-header {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-pack: justify;\r\n          justify-content: space-between;\r\n  padding: 10px;\r\n  border-bottom: var(--border);\r\n  background: #eee;\r\n  color: #666;\r\n}\r\n\r\n.msger-chat {\r\n  -webkit-box-flex: 1;\r\n          flex: 1;\r\n  overflow-y: auto;\r\n  padding: 10px;\r\n}\r\n\r\n.msger-chat::-webkit-scrollbar {\r\n  width: 6px;\r\n}\r\n\r\n.msger-chat::-webkit-scrollbar-track {\r\n  background: #ddd;\r\n}\r\n\r\n.msger-chat::-webkit-scrollbar-thumb {\r\n  background: #bdbdbd;\r\n}\r\n\r\n.msg {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-align: end;\r\n          align-items: flex-end;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.msg:last-of-type {\r\n  margin: 0;\r\n}\r\n\r\n.msg-img {\r\n  width: 50px;\r\n  height: 50px;\r\n  margin-right: 10px;\r\n  background: #ddd;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  background-size: cover;\r\n  border-radius: 50%;\r\n}\r\n\r\n.msg-bubble {\r\n  max-width: 450px;\r\n  padding: 15px;\r\n  border-radius: 15px;\r\n  background: #ececec;\r\n}\r\n\r\n.msg-info {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-pack: justify;\r\n          justify-content: space-between;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.msg-info-name {\r\n  margin-right: 10px;\r\n  font-weight: bold;\r\n}\r\n\r\n.msg-info-time {\r\n  font-size: 0.85em;\r\n}\r\n\r\n.left-msg .msg-bubble {\r\n  border-bottom-left-radius: 0;\r\n}\r\n\r\n.right-msg {\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: reverse;\r\n          flex-direction: row-reverse;\r\n}\r\n\r\n.right-msg .msg-bubble {\r\n  background: #579ffb;\r\n  color: #fff;\r\n  border-bottom-right-radius: 0;\r\n}\r\n\r\n.right-msg .msg-img {\r\n  margin: 0 0 0 10px;\r\n}\r\n\r\n.msger-inputarea {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  padding: 10px;\r\n  border-top: var(--border);\r\n  background: #eee;\r\n}\r\n\r\n.msger-inputarea * {\r\n  padding: 10px;\r\n  border: none;\r\n  border-radius: 3px;\r\n  font-size: 1em;\r\n}\r\n\r\n.msger-input {\r\n  -webkit-box-flex: 1;\r\n          flex: 1;\r\n  background: #ddd;\r\n}\r\n\r\n.msger-send-btn {\r\n  margin-left: 10px;\r\n  background: rgb(0, 196, 65);\r\n  color: #fff;\r\n  font-weight: bold;\r\n  cursor: pointer;\r\n  -webkit-transition: background 0.23s;\r\n  transition: background 0.23s;\r\n}\r\n\r\n.msger-send-btn:hover {\r\n  background: rgb(0, 180, 50);\r\n}\r\n\r\n.msger-chat {\r\n  height: 80vh;\r\n  overflow-y: auto;\r\n  background-color: #fcfcfe;\r\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='260' height='260' viewBox='0 0 260 260'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23dddddd' fill-opacity='0.4'%3E%3Cpath d='M24.37 16c.2.65.39 1.32.54 2H21.17l1.17 2.34.45.9-.24.11V28a5 5 0 0 1-2.23 8.94l-.02.06a8 8 0 0 1-7.75 6h-20a8 8 0 0 1-7.74-6l-.02-.06A5 5 0 0 1-17.45 28v-6.76l-.79-1.58-.44-.9.9-.44.63-.32H-20a23.01 23.01 0 0 1 44.37-2zm-36.82 2a1 1 0 0 0-.44.1l-3.1 1.56.89 1.79 1.31-.66a3 3 0 0 1 2.69 0l2.2 1.1a1 1 0 0 0 .9 0l2.21-1.1a3 3 0 0 1 2.69 0l2.2 1.1a1 1 0 0 0 .9 0l2.21-1.1a3 3 0 0 1 2.69 0l2.2 1.1a1 1 0 0 0 .86.02l2.88-1.27a3 3 0 0 1 2.43 0l2.88 1.27a1 1 0 0 0 .85-.02l3.1-1.55-.89-1.79-1.42.71a3 3 0 0 1-2.56.06l-2.77-1.23a1 1 0 0 0-.4-.09h-.01a1 1 0 0 0-.4.09l-2.78 1.23a3 3 0 0 1-2.56-.06l-2.3-1.15a1 1 0 0 0-.45-.11h-.01a1 1 0 0 0-.44.1L.9 19.22a3 3 0 0 1-2.69 0l-2.2-1.1a1 1 0 0 0-.45-.11h-.01a1 1 0 0 0-.44.1l-2.21 1.11a3 3 0 0 1-2.69 0l-2.2-1.1a1 1 0 0 0-.45-.11h-.01zm0-2h-4.9a21.01 21.01 0 0 1 39.61 0h-2.09l-.06-.13-.26.13h-32.31zm30.35 7.68l1.36-.68h1.3v2h-36v-1.15l.34-.17 1.36-.68h2.59l1.36.68a3 3 0 0 0 2.69 0l1.36-.68h2.59l1.36.68a3 3 0 0 0 2.69 0L2.26 23h2.59l1.36.68a3 3 0 0 0 2.56.06l1.67-.74h3.23l1.67.74a3 3 0 0 0 2.56-.06zM-13.82 27l16.37 4.91L18.93 27h-32.75zm-.63 2h.34l16.66 5 16.67-5h.33a3 3 0 1 1 0 6h-34a3 3 0 1 1 0-6zm1.35 8a6 6 0 0 0 5.65 4h20a6 6 0 0 0 5.66-4H-13.1z'/%3E%3Cpath id='path6_fill-copy' d='M284.37 16c.2.65.39 1.32.54 2H281.17l1.17 2.34.45.9-.24.11V28a5 5 0 0 1-2.23 8.94l-.02.06a8 8 0 0 1-7.75 6h-20a8 8 0 0 1-7.74-6l-.02-.06a5 5 0 0 1-2.24-8.94v-6.76l-.79-1.58-.44-.9.9-.44.63-.32H240a23.01 23.01 0 0 1 44.37-2zm-36.82 2a1 1 0 0 0-.44.1l-3.1 1.56.89 1.79 1.31-.66a3 3 0 0 1 2.69 0l2.2 1.1a1 1 0 0 0 .9 0l2.21-1.1a3 3 0 0 1 2.69 0l2.2 1.1a1 1 0 0 0 .9 0l2.21-1.1a3 3 0 0 1 2.69 0l2.2 1.1a1 1 0 0 0 .86.02l2.88-1.27a3 3 0 0 1 2.43 0l2.88 1.27a1 1 0 0 0 .85-.02l3.1-1.55-.89-1.79-1.42.71a3 3 0 0 1-2.56.06l-2.77-1.23a1 1 0 0 0-.4-.09h-.01a1 1 0 0 0-.4.09l-2.78 1.23a3 3 0 0 1-2.56-.06l-2.3-1.15a1 1 0 0 0-.45-.11h-.01a1 1 0 0 0-.44.1l-2.21 1.11a3 3 0 0 1-2.69 0l-2.2-1.1a1 1 0 0 0-.45-.11h-.01a1 1 0 0 0-.44.1l-2.21 1.11a3 3 0 0 1-2.69 0l-2.2-1.1a1 1 0 0 0-.45-.11h-.01zm0-2h-4.9a21.01 21.01 0 0 1 39.61 0h-2.09l-.06-.13-.26.13h-32.31zm30.35 7.68l1.36-.68h1.3v2h-36v-1.15l.34-.17 1.36-.68h2.59l1.36.68a3 3 0 0 0 2.69 0l1.36-.68h2.59l1.36.68a3 3 0 0 0 2.69 0l1.36-.68h2.59l1.36.68a3 3 0 0 0 2.56.06l1.67-.74h3.23l1.67.74a3 3 0 0 0 2.56-.06zM246.18 27l16.37 4.91L278.93 27h-32.75zm-.63 2h.34l16.66 5 16.67-5h.33a3 3 0 1 1 0 6h-34a3 3 0 1 1 0-6zm1.35 8a6 6 0 0 0 5.65 4h20a6 6 0 0 0 5.66-4H246.9z'/%3E%3Cpath d='M159.5 21.02A9 9 0 0 0 151 15h-42a9 9 0 0 0-8.5 6.02 6 6 0 0 0 .02 11.96A8.99 8.99 0 0 0 109 45h42a9 9 0 0 0 8.48-12.02 6 6 0 0 0 .02-11.96zM151 17h-42a7 7 0 0 0-6.33 4h54.66a7 7 0 0 0-6.33-4zm-9.34 26a8.98 8.98 0 0 0 3.34-7h-2a7 7 0 0 1-7 7h-4.34a8.98 8.98 0 0 0 3.34-7h-2a7 7 0 0 1-7 7h-4.34a8.98 8.98 0 0 0 3.34-7h-2a7 7 0 0 1-7 7h-7a7 7 0 1 1 0-14h42a7 7 0 1 1 0 14h-9.34zM109 27a9 9 0 0 0-7.48 4H101a4 4 0 1 1 0-8h58a4 4 0 0 1 0 8h-.52a9 9 0 0 0-7.48-4h-42z'/%3E%3Cpath d='M39 115a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm6-8a6 6 0 1 1-12 0 6 6 0 0 1 12 0zm-3-29v-2h8v-6H40a4 4 0 0 0-4 4v10H22l-1.33 4-.67 2h2.19L26 130h26l3.81-40H58l-.67-2L56 84H42v-6zm-4-4v10h2V74h8v-2h-8a2 2 0 0 0-2 2zm2 12h14.56l.67 2H22.77l.67-2H40zm13.8 4H24.2l3.62 38h22.36l3.62-38z'/%3E%3Cpath d='M129 92h-6v4h-6v4h-6v14h-3l.24 2 3.76 32h36l3.76-32 .24-2h-3v-14h-6v-4h-6v-4h-8zm18 22v-12h-4v4h3v8h1zm-3 0v-6h-4v6h4zm-6 6v-16h-4v19.17c1.6-.7 2.97-1.8 4-3.17zm-6 3.8V100h-4v23.8a10.04 10.04 0 0 0 4 0zm-6-.63V104h-4v16a10.04 10.04 0 0 0 4 3.17zm-6-9.17v-6h-4v6h4zm-6 0v-8h3v-4h-4v12h1zm27-12v-4h-4v4h3v4h1v-4zm-6 0v-8h-4v4h3v4h1zm-6-4v-4h-4v8h1v-4h3zm-6 4v-4h-4v8h1v-4h3zm7 24a12 12 0 0 0 11.83-10h7.92l-3.53 30h-32.44l-3.53-30h7.92A12 12 0 0 0 130 126z'/%3E%3Cpath d='M212 86v2h-4v-2h4zm4 0h-2v2h2v-2zm-20 0v.1a5 5 0 0 0-.56 9.65l.06.25 1.12 4.48a2 2 0 0 0 1.94 1.52h.01l7.02 24.55a2 2 0 0 0 1.92 1.45h4.98a2 2 0 0 0 1.92-1.45l7.02-24.55a2 2 0 0 0 1.95-1.52L224.5 96l.06-.25a5 5 0 0 0-.56-9.65V86a14 14 0 0 0-28 0zm4 0h6v2h-9a3 3 0 1 0 0 6H223a3 3 0 1 0 0-6H220v-2h2a12 12 0 1 0-24 0h2zm-1.44 14l-1-4h24.88l-1 4h-22.88zm8.95 26l-6.86-24h18.7l-6.86 24h-4.98zM150 242a22 22 0 1 0 0-44 22 22 0 0 0 0 44zm24-22a24 24 0 1 1-48 0 24 24 0 0 1 48 0zm-28.38 17.73l2.04-.87a6 6 0 0 1 4.68 0l2.04.87a2 2 0 0 0 2.5-.82l1.14-1.9a6 6 0 0 1 3.79-2.75l2.15-.5a2 2 0 0 0 1.54-2.12l-.19-2.2a6 6 0 0 1 1.45-4.46l1.45-1.67a2 2 0 0 0 0-2.62l-1.45-1.67a6 6 0 0 1-1.45-4.46l.2-2.2a2 2 0 0 0-1.55-2.13l-2.15-.5a6 6 0 0 1-3.8-2.75l-1.13-1.9a2 2 0 0 0-2.5-.8l-2.04.86a6 6 0 0 1-4.68 0l-2.04-.87a2 2 0 0 0-2.5.82l-1.14 1.9a6 6 0 0 1-3.79 2.75l-2.15.5a2 2 0 0 0-1.54 2.12l.19 2.2a6 6 0 0 1-1.45 4.46l-1.45 1.67a2 2 0 0 0 0 2.62l1.45 1.67a6 6 0 0 1 1.45 4.46l-.2 2.2a2 2 0 0 0 1.55 2.13l2.15.5a6 6 0 0 1 3.8 2.75l1.13 1.9a2 2 0 0 0 2.5.8zm2.82.97a4 4 0 0 1 3.12 0l2.04.87a4 4 0 0 0 4.99-1.62l1.14-1.9a4 4 0 0 1 2.53-1.84l2.15-.5a4 4 0 0 0 3.09-4.24l-.2-2.2a4 4 0 0 1 .97-2.98l1.45-1.67a4 4 0 0 0 0-5.24l-1.45-1.67a4 4 0 0 1-.97-2.97l.2-2.2a4 4 0 0 0-3.09-4.25l-2.15-.5a4 4 0 0 1-2.53-1.84l-1.14-1.9a4 4 0 0 0-5-1.62l-2.03.87a4 4 0 0 1-3.12 0l-2.04-.87a4 4 0 0 0-4.99 1.62l-1.14 1.9a4 4 0 0 1-2.53 1.84l-2.15.5a4 4 0 0 0-3.09 4.24l.2 2.2a4 4 0 0 1-.97 2.98l-1.45 1.67a4 4 0 0 0 0 5.24l1.45 1.67a4 4 0 0 1 .97 2.97l-.2 2.2a4 4 0 0 0 3.09 4.25l2.15.5a4 4 0 0 1 2.53 1.84l1.14 1.9a4 4 0 0 0 5 1.62l2.03-.87zM152 207a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm6 2a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm-11 1a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm-6 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm3-5a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm-8 8a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm3 6a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm0 6a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm4 7a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm5-2a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm5 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm4-6a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm6-4a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm-4-3a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm4-3a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm-5-4a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm-24 6a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm16 5a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm7-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0zm86-29a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm19 9a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm-14 5a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm-25 1a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm5 4a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm9 0a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm15 1a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm12-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm-11-14a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm-19 0a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm6 5a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm-25 15c0-.47.01-.94.03-1.4a5 5 0 0 1-1.7-8 3.99 3.99 0 0 1 1.88-5.18 5 5 0 0 1 3.4-6.22 3 3 0 0 1 1.46-1.05 5 5 0 0 1 7.76-3.27A30.86 30.86 0 0 1 246 184c6.79 0 13.06 2.18 18.17 5.88a5 5 0 0 1 7.76 3.27 3 3 0 0 1 1.47 1.05 5 5 0 0 1 3.4 6.22 4 4 0 0 1 1.87 5.18 4.98 4.98 0 0 1-1.7 8c.02.46.03.93.03 1.4v1h-62v-1zm.83-7.17a30.9 30.9 0 0 0-.62 3.57 3 3 0 0 1-.61-4.2c.37.28.78.49 1.23.63zm1.49-4.61c-.36.87-.68 1.76-.96 2.68a2 2 0 0 1-.21-3.71c.33.4.73.75 1.17 1.03zm2.32-4.54c-.54.86-1.03 1.76-1.49 2.68a3 3 0 0 1-.07-4.67 3 3 0 0 0 1.56 1.99zm1.14-1.7c.35-.5.72-.98 1.1-1.46a1 1 0 1 0-1.1 1.45zm5.34-5.77c-1.03.86-2 1.79-2.9 2.77a3 3 0 0 0-1.11-.77 3 3 0 0 1 4-2zm42.66 2.77c-.9-.98-1.87-1.9-2.9-2.77a3 3 0 0 1 4.01 2 3 3 0 0 0-1.1.77zm1.34 1.54c.38.48.75.96 1.1 1.45a1 1 0 1 0-1.1-1.45zm3.73 5.84c-.46-.92-.95-1.82-1.5-2.68a3 3 0 0 0 1.57-1.99 3 3 0 0 1-.07 4.67zm1.8 4.53c-.29-.9-.6-1.8-.97-2.67.44-.28.84-.63 1.17-1.03a2 2 0 0 1-.2 3.7zm1.14 5.51c-.14-1.21-.35-2.4-.62-3.57.45-.14.86-.35 1.23-.63a2.99 2.99 0 0 1-.6 4.2zM275 214a29 29 0 0 0-57.97 0h57.96zM72.33 198.12c-.21-.32-.34-.7-.34-1.12v-12h-2v12a4.01 4.01 0 0 0 7.09 2.54c.57-.69.91-1.57.91-2.54v-12h-2v12a1.99 1.99 0 0 1-2 2 2 2 0 0 1-1.66-.88zM75 176c.38 0 .74-.04 1.1-.12a4 4 0 0 0 6.19 2.4A13.94 13.94 0 0 1 84 185v24a6 6 0 0 1-6 6h-3v9a5 5 0 1 1-10 0v-9h-3a6 6 0 0 1-6-6v-24a14 14 0 0 1 14-14 5 5 0 0 0 5 5zm-17 15v12a1.99 1.99 0 0 0 1.22 1.84 2 2 0 0 0 2.44-.72c.21-.32.34-.7.34-1.12v-12h2v12a3.98 3.98 0 0 1-5.35 3.77 3.98 3.98 0 0 1-.65-.3V209a4 4 0 0 0 4 4h16a4 4 0 0 0 4-4v-24c.01-1.53-.23-2.88-.72-4.17-.43.1-.87.16-1.28.17a6 6 0 0 1-5.2-3 7 7 0 0 1-6.47-4.88A12 12 0 0 0 58 185v6zm9 24v9a3 3 0 1 0 6 0v-9h-6z'/%3E%3Cpath d='M-17 191a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm19 9a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1zm-14 5a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm-25 1a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm5 4a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm9 0a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm15 1a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm12-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2H4zm-11-14a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm-19 0a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm6 5a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm-25 15c0-.47.01-.94.03-1.4a5 5 0 0 1-1.7-8 3.99 3.99 0 0 1 1.88-5.18 5 5 0 0 1 3.4-6.22 3 3 0 0 1 1.46-1.05 5 5 0 0 1 7.76-3.27A30.86 30.86 0 0 1-14 184c6.79 0 13.06 2.18 18.17 5.88a5 5 0 0 1 7.76 3.27 3 3 0 0 1 1.47 1.05 5 5 0 0 1 3.4 6.22 4 4 0 0 1 1.87 5.18 4.98 4.98 0 0 1-1.7 8c.02.46.03.93.03 1.4v1h-62v-1zm.83-7.17a30.9 30.9 0 0 0-.62 3.57 3 3 0 0 1-.61-4.2c.37.28.78.49 1.23.63zm1.49-4.61c-.36.87-.68 1.76-.96 2.68a2 2 0 0 1-.21-3.71c.33.4.73.75 1.17 1.03zm2.32-4.54c-.54.86-1.03 1.76-1.49 2.68a3 3 0 0 1-.07-4.67 3 3 0 0 0 1.56 1.99zm1.14-1.7c.35-.5.72-.98 1.1-1.46a1 1 0 1 0-1.1 1.45zm5.34-5.77c-1.03.86-2 1.79-2.9 2.77a3 3 0 0 0-1.11-.77 3 3 0 0 1 4-2zm42.66 2.77c-.9-.98-1.87-1.9-2.9-2.77a3 3 0 0 1 4.01 2 3 3 0 0 0-1.1.77zm1.34 1.54c.38.48.75.96 1.1 1.45a1 1 0 1 0-1.1-1.45zm3.73 5.84c-.46-.92-.95-1.82-1.5-2.68a3 3 0 0 0 1.57-1.99 3 3 0 0 1-.07 4.67zm1.8 4.53c-.29-.9-.6-1.8-.97-2.67.44-.28.84-.63 1.17-1.03a2 2 0 0 1-.2 3.7zm1.14 5.51c-.14-1.21-.35-2.4-.62-3.57.45-.14.86-.35 1.23-.63a2.99 2.99 0 0 1-.6 4.2zM15 214a29 29 0 0 0-57.97 0h57.96z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\");\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC9jaGF0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw0REFBNEQ7RUFDNUQsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtFQUN4QixzQkFBc0I7RUFDdEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBOzs7RUFHRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsZ0NBQWdDO0VBQ2hDLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDRCQUFzQjtFQUF0Qiw2QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLHlCQUE4QjtVQUE5Qiw4QkFBOEI7RUFDOUIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsMkJBQTJCO0VBQzNCLCtDQUErQztBQUNqRDs7QUFFQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUE4QjtVQUE5Qiw4QkFBOEI7RUFDOUIsYUFBYTtFQUNiLDRCQUE0QjtFQUM1QixnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsbUJBQU87VUFBUCxPQUFPO0VBQ1AsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjs7QUFDQTtFQUNFLFVBQVU7QUFDWjs7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHNCQUFxQjtVQUFyQixxQkFBcUI7RUFDckIsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsU0FBUztBQUNYOztBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUE4QjtVQUE5Qiw4QkFBOEI7RUFDOUIseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsOEJBQTJCO0VBQTNCLDhCQUEyQjtVQUEzQiwyQkFBMkI7QUFDN0I7O0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLDZCQUE2QjtBQUMvQjs7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjs7QUFDQTtFQUNFLG1CQUFPO1VBQVAsT0FBTztFQUNQLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQiwyQkFBMkI7RUFDM0IsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysb0NBQTRCO0VBQTVCLDRCQUE0QjtBQUM5Qjs7QUFDQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLDB0VEFBMHRUO0FBQzV0VCIsImZpbGUiOiJzcmMvYXBwL2NoYXQvY2hhdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOnJvb3Qge1xyXG4gIC0tYm9keS1iZzogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2Y1ZjdmYSAwJSwgI2MzY2ZlMiAxMDAlKTtcclxuICAtLW1zZ2VyLWJnOiAjZmZmO1xyXG4gIC0tYm9yZGVyOiAycHggc29saWQgI2RkZDtcclxuICAtLWxlZnQtbXNnLWJnOiAjZWNlY2VjO1xyXG4gIC0tcmlnaHQtbXNnLWJnOiAjNTc5ZmZiO1xyXG59XHJcblxyXG5odG1sIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4qLFxyXG4qOmJlZm9yZSxcclxuKjphZnRlciB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm94LXNpemluZzogaW5oZXJpdDtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdmFyKC0tYm9keS1iZyk7XHJcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLm1zZ2VyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogODY3cHg7XHJcbiAgbWFyZ2luOiAyNXB4IDEwcHg7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA1MHB4KTtcclxuICBib3JkZXI6IHZhcigtLWJvcmRlcik7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLW1zZ2VyLWJnKTtcclxuICBib3gtc2hhZG93OiAwIDE1cHggMTVweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxufVxyXG5cclxuLm1zZ2VyLWhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXItYm90dG9tOiB2YXIoLS1ib3JkZXIpO1xyXG4gIGJhY2tncm91bmQ6ICNlZWU7XHJcbiAgY29sb3I6ICM2NjY7XHJcbn1cclxuXHJcbi5tc2dlci1jaGF0IHtcclxuICBmbGV4OiAxO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG4ubXNnZXItY2hhdDo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiA2cHg7XHJcbn1cclxuLm1zZ2VyLWNoYXQ6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICBiYWNrZ3JvdW5kOiAjZGRkO1xyXG59XHJcbi5tc2dlci1jaGF0Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgYmFja2dyb3VuZDogI2JkYmRiZDtcclxufVxyXG4ubXNnIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi5tc2c6bGFzdC1vZi10eXBlIHtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuLm1zZy1pbWcge1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgYmFja2dyb3VuZDogI2RkZDtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG4ubXNnLWJ1YmJsZSB7XHJcbiAgbWF4LXdpZHRoOiA0NTBweDtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgYmFja2dyb3VuZDogI2VjZWNlYztcclxufVxyXG4ubXNnLWluZm8ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4ubXNnLWluZm8tbmFtZSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5tc2ctaW5mby10aW1lIHtcclxuICBmb250LXNpemU6IDAuODVlbTtcclxufVxyXG5cclxuLmxlZnQtbXNnIC5tc2ctYnViYmxlIHtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xyXG59XHJcblxyXG4ucmlnaHQtbXNnIHtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XHJcbn1cclxuLnJpZ2h0LW1zZyAubXNnLWJ1YmJsZSB7XHJcbiAgYmFja2dyb3VuZDogIzU3OWZmYjtcclxuICBjb2xvcjogI2ZmZjtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcclxufVxyXG4ucmlnaHQtbXNnIC5tc2ctaW1nIHtcclxuICBtYXJnaW46IDAgMCAwIDEwcHg7XHJcbn1cclxuXHJcbi5tc2dlci1pbnB1dGFyZWEge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXItdG9wOiB2YXIoLS1ib3JkZXIpO1xyXG4gIGJhY2tncm91bmQ6ICNlZWU7XHJcbn1cclxuLm1zZ2VyLWlucHV0YXJlYSAqIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgZm9udC1zaXplOiAxZW07XHJcbn1cclxuLm1zZ2VyLWlucHV0IHtcclxuICBmbGV4OiAxO1xyXG4gIGJhY2tncm91bmQ6ICNkZGQ7XHJcbn1cclxuLm1zZ2VyLXNlbmQtYnRuIHtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMCwgMTk2LCA2NSk7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4yM3M7XHJcbn1cclxuLm1zZ2VyLXNlbmQtYnRuOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMCwgMTgwLCA1MCk7XHJcbn1cclxuXHJcbi5tc2dlci1jaGF0IHtcclxuICBoZWlnaHQ6IDgwdmg7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmY2ZlO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMjYwJyBoZWlnaHQ9JzI2MCcgdmlld0JveD0nMCAwIDI2MCAyNjAnJTNFJTNDZyBmaWxsLXJ1bGU9J2V2ZW5vZGQnJTNFJTNDZyBmaWxsPSclMjNkZGRkZGQnIGZpbGwtb3BhY2l0eT0nMC40JyUzRSUzQ3BhdGggZD0nTTI0LjM3IDE2Yy4yLjY1LjM5IDEuMzIuNTQgMkgyMS4xN2wxLjE3IDIuMzQuNDUuOS0uMjQuMTFWMjhhNSA1IDAgMCAxLTIuMjMgOC45NGwtLjAyLjA2YTggOCAwIDAgMS03Ljc1IDZoLTIwYTggOCAwIDAgMS03Ljc0LTZsLS4wMi0uMDZBNSA1IDAgMCAxLTE3LjQ1IDI4di02Ljc2bC0uNzktMS41OC0uNDQtLjkuOS0uNDQuNjMtLjMySC0yMGEyMy4wMSAyMy4wMSAwIDAgMSA0NC4zNy0yem0tMzYuODIgMmExIDEgMCAwIDAtLjQ0LjFsLTMuMSAxLjU2Ljg5IDEuNzkgMS4zMS0uNjZhMyAzIDAgMCAxIDIuNjkgMGwyLjIgMS4xYTEgMSAwIDAgMCAuOSAwbDIuMjEtMS4xYTMgMyAwIDAgMSAyLjY5IDBsMi4yIDEuMWExIDEgMCAwIDAgLjkgMGwyLjIxLTEuMWEzIDMgMCAwIDEgMi42OSAwbDIuMiAxLjFhMSAxIDAgMCAwIC44Ni4wMmwyLjg4LTEuMjdhMyAzIDAgMCAxIDIuNDMgMGwyLjg4IDEuMjdhMSAxIDAgMCAwIC44NS0uMDJsMy4xLTEuNTUtLjg5LTEuNzktMS40Mi43MWEzIDMgMCAwIDEtMi41Ni4wNmwtMi43Ny0xLjIzYTEgMSAwIDAgMC0uNC0uMDloLS4wMWExIDEgMCAwIDAtLjQuMDlsLTIuNzggMS4yM2EzIDMgMCAwIDEtMi41Ni0uMDZsLTIuMy0xLjE1YTEgMSAwIDAgMC0uNDUtLjExaC0uMDFhMSAxIDAgMCAwLS40NC4xTC45IDE5LjIyYTMgMyAwIDAgMS0yLjY5IDBsLTIuMi0xLjFhMSAxIDAgMCAwLS40NS0uMTFoLS4wMWExIDEgMCAwIDAtLjQ0LjFsLTIuMjEgMS4xMWEzIDMgMCAwIDEtMi42OSAwbC0yLjItMS4xYTEgMSAwIDAgMC0uNDUtLjExaC0uMDF6bTAtMmgtNC45YTIxLjAxIDIxLjAxIDAgMCAxIDM5LjYxIDBoLTIuMDlsLS4wNi0uMTMtLjI2LjEzaC0zMi4zMXptMzAuMzUgNy42OGwxLjM2LS42OGgxLjN2MmgtMzZ2LTEuMTVsLjM0LS4xNyAxLjM2LS42OGgyLjU5bDEuMzYuNjhhMyAzIDAgMCAwIDIuNjkgMGwxLjM2LS42OGgyLjU5bDEuMzYuNjhhMyAzIDAgMCAwIDIuNjkgMEwyLjI2IDIzaDIuNTlsMS4zNi42OGEzIDMgMCAwIDAgMi41Ni4wNmwxLjY3LS43NGgzLjIzbDEuNjcuNzRhMyAzIDAgMCAwIDIuNTYtLjA2ek0tMTMuODIgMjdsMTYuMzcgNC45MUwxOC45MyAyN2gtMzIuNzV6bS0uNjMgMmguMzRsMTYuNjYgNSAxNi42Ny01aC4zM2EzIDMgMCAxIDEgMCA2aC0zNGEzIDMgMCAxIDEgMC02em0xLjM1IDhhNiA2IDAgMCAwIDUuNjUgNGgyMGE2IDYgMCAwIDAgNS42Ni00SC0xMy4xeicvJTNFJTNDcGF0aCBpZD0ncGF0aDZfZmlsbC1jb3B5JyBkPSdNMjg0LjM3IDE2Yy4yLjY1LjM5IDEuMzIuNTQgMkgyODEuMTdsMS4xNyAyLjM0LjQ1LjktLjI0LjExVjI4YTUgNSAwIDAgMS0yLjIzIDguOTRsLS4wMi4wNmE4IDggMCAwIDEtNy43NSA2aC0yMGE4IDggMCAwIDEtNy43NC02bC0uMDItLjA2YTUgNSAwIDAgMS0yLjI0LTguOTR2LTYuNzZsLS43OS0xLjU4LS40NC0uOS45LS40NC42My0uMzJIMjQwYTIzLjAxIDIzLjAxIDAgMCAxIDQ0LjM3LTJ6bS0zNi44MiAyYTEgMSAwIDAgMC0uNDQuMWwtMy4xIDEuNTYuODkgMS43OSAxLjMxLS42NmEzIDMgMCAwIDEgMi42OSAwbDIuMiAxLjFhMSAxIDAgMCAwIC45IDBsMi4yMS0xLjFhMyAzIDAgMCAxIDIuNjkgMGwyLjIgMS4xYTEgMSAwIDAgMCAuOSAwbDIuMjEtMS4xYTMgMyAwIDAgMSAyLjY5IDBsMi4yIDEuMWExIDEgMCAwIDAgLjg2LjAybDIuODgtMS4yN2EzIDMgMCAwIDEgMi40MyAwbDIuODggMS4yN2ExIDEgMCAwIDAgLjg1LS4wMmwzLjEtMS41NS0uODktMS43OS0xLjQyLjcxYTMgMyAwIDAgMS0yLjU2LjA2bC0yLjc3LTEuMjNhMSAxIDAgMCAwLS40LS4wOWgtLjAxYTEgMSAwIDAgMC0uNC4wOWwtMi43OCAxLjIzYTMgMyAwIDAgMS0yLjU2LS4wNmwtMi4zLTEuMTVhMSAxIDAgMCAwLS40NS0uMTFoLS4wMWExIDEgMCAwIDAtLjQ0LjFsLTIuMjEgMS4xMWEzIDMgMCAwIDEtMi42OSAwbC0yLjItMS4xYTEgMSAwIDAgMC0uNDUtLjExaC0uMDFhMSAxIDAgMCAwLS40NC4xbC0yLjIxIDEuMTFhMyAzIDAgMCAxLTIuNjkgMGwtMi4yLTEuMWExIDEgMCAwIDAtLjQ1LS4xMWgtLjAxem0wLTJoLTQuOWEyMS4wMSAyMS4wMSAwIDAgMSAzOS42MSAwaC0yLjA5bC0uMDYtLjEzLS4yNi4xM2gtMzIuMzF6bTMwLjM1IDcuNjhsMS4zNi0uNjhoMS4zdjJoLTM2di0xLjE1bC4zNC0uMTcgMS4zNi0uNjhoMi41OWwxLjM2LjY4YTMgMyAwIDAgMCAyLjY5IDBsMS4zNi0uNjhoMi41OWwxLjM2LjY4YTMgMyAwIDAgMCAyLjY5IDBsMS4zNi0uNjhoMi41OWwxLjM2LjY4YTMgMyAwIDAgMCAyLjU2LjA2bDEuNjctLjc0aDMuMjNsMS42Ny43NGEzIDMgMCAwIDAgMi41Ni0uMDZ6TTI0Ni4xOCAyN2wxNi4zNyA0LjkxTDI3OC45MyAyN2gtMzIuNzV6bS0uNjMgMmguMzRsMTYuNjYgNSAxNi42Ny01aC4zM2EzIDMgMCAxIDEgMCA2aC0zNGEzIDMgMCAxIDEgMC02em0xLjM1IDhhNiA2IDAgMCAwIDUuNjUgNGgyMGE2IDYgMCAwIDAgNS42Ni00SDI0Ni45eicvJTNFJTNDcGF0aCBkPSdNMTU5LjUgMjEuMDJBOSA5IDAgMCAwIDE1MSAxNWgtNDJhOSA5IDAgMCAwLTguNSA2LjAyIDYgNiAwIDAgMCAuMDIgMTEuOTZBOC45OSA4Ljk5IDAgMCAwIDEwOSA0NWg0MmE5IDkgMCAwIDAgOC40OC0xMi4wMiA2IDYgMCAwIDAgLjAyLTExLjk2ek0xNTEgMTdoLTQyYTcgNyAwIDAgMC02LjMzIDRoNTQuNjZhNyA3IDAgMCAwLTYuMzMtNHptLTkuMzQgMjZhOC45OCA4Ljk4IDAgMCAwIDMuMzQtN2gtMmE3IDcgMCAwIDEtNyA3aC00LjM0YTguOTggOC45OCAwIDAgMCAzLjM0LTdoLTJhNyA3IDAgMCAxLTcgN2gtNC4zNGE4Ljk4IDguOTggMCAwIDAgMy4zNC03aC0yYTcgNyAwIDAgMS03IDdoLTdhNyA3IDAgMSAxIDAtMTRoNDJhNyA3IDAgMSAxIDAgMTRoLTkuMzR6TTEwOSAyN2E5IDkgMCAwIDAtNy40OCA0SDEwMWE0IDQgMCAxIDEgMC04aDU4YTQgNCAwIDAgMSAwIDhoLS41MmE5IDkgMCAwIDAtNy40OC00aC00MnonLyUzRSUzQ3BhdGggZD0nTTM5IDExNWE4IDggMCAxIDAgMC0xNiA4IDggMCAwIDAgMCAxNnptNi04YTYgNiAwIDEgMS0xMiAwIDYgNiAwIDAgMSAxMiAwem0tMy0yOXYtMmg4di02SDQwYTQgNCAwIDAgMC00IDR2MTBIMjJsLTEuMzMgNC0uNjcgMmgyLjE5TDI2IDEzMGgyNmwzLjgxLTQwSDU4bC0uNjctMkw1NiA4NEg0MnYtNnptLTQtNHYxMGgyVjc0aDh2LTJoLThhMiAyIDAgMCAwLTIgMnptMiAxMmgxNC41NmwuNjcgMkgyMi43N2wuNjctMkg0MHptMTMuOCA0SDI0LjJsMy42MiAzOGgyMi4zNmwzLjYyLTM4eicvJTNFJTNDcGF0aCBkPSdNMTI5IDkyaC02djRoLTZ2NGgtNnYxNGgtM2wuMjQgMiAzLjc2IDMyaDM2bDMuNzYtMzIgLjI0LTJoLTN2LTE0aC02di00aC02di00aC04em0xOCAyMnYtMTJoLTR2NGgzdjhoMXptLTMgMHYtNmgtNHY2aDR6bS02IDZ2LTE2aC00djE5LjE3YzEuNi0uNyAyLjk3LTEuOCA0LTMuMTd6bS02IDMuOFYxMDBoLTR2MjMuOGExMC4wNCAxMC4wNCAwIDAgMCA0IDB6bS02LS42M1YxMDRoLTR2MTZhMTAuMDQgMTAuMDQgMCAwIDAgNCAzLjE3em0tNi05LjE3di02aC00djZoNHptLTYgMHYtOGgzdi00aC00djEyaDF6bTI3LTEydi00aC00djRoM3Y0aDF2LTR6bS02IDB2LThoLTR2NGgzdjRoMXptLTYtNHYtNGgtNHY4aDF2LTRoM3ptLTYgNHYtNGgtNHY4aDF2LTRoM3ptNyAyNGExMiAxMiAwIDAgMCAxMS44My0xMGg3LjkybC0zLjUzIDMwaC0zMi40NGwtMy41My0zMGg3LjkyQTEyIDEyIDAgMCAwIDEzMCAxMjZ6Jy8lM0UlM0NwYXRoIGQ9J00yMTIgODZ2MmgtNHYtMmg0em00IDBoLTJ2Mmgydi0yem0tMjAgMHYuMWE1IDUgMCAwIDAtLjU2IDkuNjVsLjA2LjI1IDEuMTIgNC40OGEyIDIgMCAwIDAgMS45NCAxLjUyaC4wMWw3LjAyIDI0LjU1YTIgMiAwIDAgMCAxLjkyIDEuNDVoNC45OGEyIDIgMCAwIDAgMS45Mi0xLjQ1bDcuMDItMjQuNTVhMiAyIDAgMCAwIDEuOTUtMS41MkwyMjQuNSA5NmwuMDYtLjI1YTUgNSAwIDAgMC0uNTYtOS42NVY4NmExNCAxNCAwIDAgMC0yOCAwem00IDBoNnYyaC05YTMgMyAwIDEgMCAwIDZIMjIzYTMgMyAwIDEgMCAwLTZIMjIwdi0yaDJhMTIgMTIgMCAxIDAtMjQgMGgyem0tMS40NCAxNGwtMS00aDI0Ljg4bC0xIDRoLTIyLjg4em04Ljk1IDI2bC02Ljg2LTI0aDE4LjdsLTYuODYgMjRoLTQuOTh6TTE1MCAyNDJhMjIgMjIgMCAxIDAgMC00NCAyMiAyMiAwIDAgMCAwIDQ0em0yNC0yMmEyNCAyNCAwIDEgMS00OCAwIDI0IDI0IDAgMCAxIDQ4IDB6bS0yOC4zOCAxNy43M2wyLjA0LS44N2E2IDYgMCAwIDEgNC42OCAwbDIuMDQuODdhMiAyIDAgMCAwIDIuNS0uODJsMS4xNC0xLjlhNiA2IDAgMCAxIDMuNzktMi43NWwyLjE1LS41YTIgMiAwIDAgMCAxLjU0LTIuMTJsLS4xOS0yLjJhNiA2IDAgMCAxIDEuNDUtNC40NmwxLjQ1LTEuNjdhMiAyIDAgMCAwIDAtMi42MmwtMS40NS0xLjY3YTYgNiAwIDAgMS0xLjQ1LTQuNDZsLjItMi4yYTIgMiAwIDAgMC0xLjU1LTIuMTNsLTIuMTUtLjVhNiA2IDAgMCAxLTMuOC0yLjc1bC0xLjEzLTEuOWEyIDIgMCAwIDAtMi41LS44bC0yLjA0Ljg2YTYgNiAwIDAgMS00LjY4IDBsLTIuMDQtLjg3YTIgMiAwIDAgMC0yLjUuODJsLTEuMTQgMS45YTYgNiAwIDAgMS0zLjc5IDIuNzVsLTIuMTUuNWEyIDIgMCAwIDAtMS41NCAyLjEybC4xOSAyLjJhNiA2IDAgMCAxLTEuNDUgNC40NmwtMS40NSAxLjY3YTIgMiAwIDAgMCAwIDIuNjJsMS40NSAxLjY3YTYgNiAwIDAgMSAxLjQ1IDQuNDZsLS4yIDIuMmEyIDIgMCAwIDAgMS41NSAyLjEzbDIuMTUuNWE2IDYgMCAwIDEgMy44IDIuNzVsMS4xMyAxLjlhMiAyIDAgMCAwIDIuNS44em0yLjgyLjk3YTQgNCAwIDAgMSAzLjEyIDBsMi4wNC44N2E0IDQgMCAwIDAgNC45OS0xLjYybDEuMTQtMS45YTQgNCAwIDAgMSAyLjUzLTEuODRsMi4xNS0uNWE0IDQgMCAwIDAgMy4wOS00LjI0bC0uMi0yLjJhNCA0IDAgMCAxIC45Ny0yLjk4bDEuNDUtMS42N2E0IDQgMCAwIDAgMC01LjI0bC0xLjQ1LTEuNjdhNCA0IDAgMCAxLS45Ny0yLjk3bC4yLTIuMmE0IDQgMCAwIDAtMy4wOS00LjI1bC0yLjE1LS41YTQgNCAwIDAgMS0yLjUzLTEuODRsLTEuMTQtMS45YTQgNCAwIDAgMC01LTEuNjJsLTIuMDMuODdhNCA0IDAgMCAxLTMuMTIgMGwtMi4wNC0uODdhNCA0IDAgMCAwLTQuOTkgMS42MmwtMS4xNCAxLjlhNCA0IDAgMCAxLTIuNTMgMS44NGwtMi4xNS41YTQgNCAwIDAgMC0zLjA5IDQuMjRsLjIgMi4yYTQgNCAwIDAgMS0uOTcgMi45OGwtMS40NSAxLjY3YTQgNCAwIDAgMCAwIDUuMjRsMS40NSAxLjY3YTQgNCAwIDAgMSAuOTcgMi45N2wtLjIgMi4yYTQgNCAwIDAgMCAzLjA5IDQuMjVsMi4xNS41YTQgNCAwIDAgMSAyLjUzIDEuODRsMS4xNCAxLjlhNCA0IDAgMCAwIDUgMS42MmwyLjAzLS44N3pNMTUyIDIwN2ExIDEgMCAxIDEgMiAwIDEgMSAwIDAgMS0yIDB6bTYgMmExIDEgMCAxIDEgMiAwIDEgMSAwIDAgMS0yIDB6bS0xMSAxYTEgMSAwIDEgMSAyIDAgMSAxIDAgMCAxLTIgMHptLTYgMGExIDEgMCAxIDEgMiAwIDEgMSAwIDAgMS0yIDB6bTMtNWExIDEgMCAxIDEgMiAwIDEgMSAwIDAgMS0yIDB6bS04IDhhMSAxIDAgMSAxIDIgMCAxIDEgMCAwIDEtMiAwem0zIDZhMSAxIDAgMSAxIDIgMCAxIDEgMCAwIDEtMiAwem0wIDZhMSAxIDAgMSAxIDIgMCAxIDEgMCAwIDEtMiAwem00IDdhMSAxIDAgMSAxIDIgMCAxIDEgMCAwIDEtMiAwem01LTJhMSAxIDAgMSAxIDIgMCAxIDEgMCAwIDEtMiAwem01IDRhMSAxIDAgMSAxIDIgMCAxIDEgMCAwIDEtMiAwem00LTZhMSAxIDAgMSAxIDIgMCAxIDEgMCAwIDEtMiAwem02LTRhMSAxIDAgMSAxIDIgMCAxIDEgMCAwIDEtMiAwem0tNC0zYTEgMSAwIDEgMSAyIDAgMSAxIDAgMCAxLTIgMHptNC0zYTEgMSAwIDEgMSAyIDAgMSAxIDAgMCAxLTIgMHptLTUtNGExIDEgMCAxIDEgMiAwIDEgMSAwIDAgMS0yIDB6bS0yNCA2YTEgMSAwIDEgMSAyIDAgMSAxIDAgMCAxLTIgMHptMTYgNWE1IDUgMCAxIDAgMC0xMCA1IDUgMCAwIDAgMCAxMHptNy01YTcgNyAwIDEgMS0xNCAwIDcgNyAwIDAgMSAxNCAwem04Ni0yOWExIDEgMCAwIDAgMCAyaDJhMSAxIDAgMCAwIDAtMmgtMnptMTkgOWExIDEgMCAwIDEgMS0xaDJhMSAxIDAgMCAxIDAgMmgtMmExIDEgMCAwIDEtMS0xem0tMTQgNWExIDEgMCAwIDAgMCAyaDJhMSAxIDAgMCAwIDAtMmgtMnptLTI1IDFhMSAxIDAgMCAwIDAgMmgyYTEgMSAwIDAgMCAwLTJoLTJ6bTUgNGExIDEgMCAwIDAgMCAyaDJhMSAxIDAgMCAwIDAtMmgtMnptOSAwYTEgMSAwIDAgMSAxLTFoMmExIDEgMCAwIDEgMCAyaC0yYTEgMSAwIDAgMS0xLTF6bTE1IDFhMSAxIDAgMCAxIDEtMWgyYTEgMSAwIDAgMSAwIDJoLTJhMSAxIDAgMCAxLTEtMXptMTItMmExIDEgMCAwIDAgMCAyaDJhMSAxIDAgMCAwIDAtMmgtMnptLTExLTE0YTEgMSAwIDAgMSAxLTFoMmExIDEgMCAwIDEgMCAyaC0yYTEgMSAwIDAgMS0xLTF6bS0xOSAwYTEgMSAwIDAgMCAwIDJoMmExIDEgMCAwIDAgMC0yaC0yem02IDVhMSAxIDAgMCAxIDEtMWgyYTEgMSAwIDAgMSAwIDJoLTJhMSAxIDAgMCAxLTEtMXptLTI1IDE1YzAtLjQ3LjAxLS45NC4wMy0xLjRhNSA1IDAgMCAxLTEuNy04IDMuOTkgMy45OSAwIDAgMSAxLjg4LTUuMTggNSA1IDAgMCAxIDMuNC02LjIyIDMgMyAwIDAgMSAxLjQ2LTEuMDUgNSA1IDAgMCAxIDcuNzYtMy4yN0EzMC44NiAzMC44NiAwIDAgMSAyNDYgMTg0YzYuNzkgMCAxMy4wNiAyLjE4IDE4LjE3IDUuODhhNSA1IDAgMCAxIDcuNzYgMy4yNyAzIDMgMCAwIDEgMS40NyAxLjA1IDUgNSAwIDAgMSAzLjQgNi4yMiA0IDQgMCAwIDEgMS44NyA1LjE4IDQuOTggNC45OCAwIDAgMS0xLjcgOGMuMDIuNDYuMDMuOTMuMDMgMS40djFoLTYydi0xem0uODMtNy4xN2EzMC45IDMwLjkgMCAwIDAtLjYyIDMuNTcgMyAzIDAgMCAxLS42MS00LjJjLjM3LjI4Ljc4LjQ5IDEuMjMuNjN6bTEuNDktNC42MWMtLjM2Ljg3LS42OCAxLjc2LS45NiAyLjY4YTIgMiAwIDAgMS0uMjEtMy43MWMuMzMuNC43My43NSAxLjE3IDEuMDN6bTIuMzItNC41NGMtLjU0Ljg2LTEuMDMgMS43Ni0xLjQ5IDIuNjhhMyAzIDAgMCAxLS4wNy00LjY3IDMgMyAwIDAgMCAxLjU2IDEuOTl6bTEuMTQtMS43Yy4zNS0uNS43Mi0uOTggMS4xLTEuNDZhMSAxIDAgMSAwLTEuMSAxLjQ1em01LjM0LTUuNzdjLTEuMDMuODYtMiAxLjc5LTIuOSAyLjc3YTMgMyAwIDAgMC0xLjExLS43NyAzIDMgMCAwIDEgNC0yem00Mi42NiAyLjc3Yy0uOS0uOTgtMS44Ny0xLjktMi45LTIuNzdhMyAzIDAgMCAxIDQuMDEgMiAzIDMgMCAwIDAtMS4xLjc3em0xLjM0IDEuNTRjLjM4LjQ4Ljc1Ljk2IDEuMSAxLjQ1YTEgMSAwIDEgMC0xLjEtMS40NXptMy43MyA1Ljg0Yy0uNDYtLjkyLS45NS0xLjgyLTEuNS0yLjY4YTMgMyAwIDAgMCAxLjU3LTEuOTkgMyAzIDAgMCAxLS4wNyA0LjY3em0xLjggNC41M2MtLjI5LS45LS42LTEuOC0uOTctMi42Ny40NC0uMjguODQtLjYzIDEuMTctMS4wM2EyIDIgMCAwIDEtLjIgMy43em0xLjE0IDUuNTFjLS4xNC0xLjIxLS4zNS0yLjQtLjYyLTMuNTcuNDUtLjE0Ljg2LS4zNSAxLjIzLS42M2EyLjk5IDIuOTkgMCAwIDEtLjYgNC4yek0yNzUgMjE0YTI5IDI5IDAgMCAwLTU3Ljk3IDBoNTcuOTZ6TTcyLjMzIDE5OC4xMmMtLjIxLS4zMi0uMzQtLjctLjM0LTEuMTJ2LTEyaC0ydjEyYTQuMDEgNC4wMSAwIDAgMCA3LjA5IDIuNTRjLjU3LS42OS45MS0xLjU3LjkxLTIuNTR2LTEyaC0ydjEyYTEuOTkgMS45OSAwIDAgMS0yIDIgMiAyIDAgMCAxLTEuNjYtLjg4ek03NSAxNzZjLjM4IDAgLjc0LS4wNCAxLjEtLjEyYTQgNCAwIDAgMCA2LjE5IDIuNEExMy45NCAxMy45NCAwIDAgMSA4NCAxODV2MjRhNiA2IDAgMCAxLTYgNmgtM3Y5YTUgNSAwIDEgMS0xMCAwdi05aC0zYTYgNiAwIDAgMS02LTZ2LTI0YTE0IDE0IDAgMCAxIDE0LTE0IDUgNSAwIDAgMCA1IDV6bS0xNyAxNXYxMmExLjk5IDEuOTkgMCAwIDAgMS4yMiAxLjg0IDIgMiAwIDAgMCAyLjQ0LS43MmMuMjEtLjMyLjM0LS43LjM0LTEuMTJ2LTEyaDJ2MTJhMy45OCAzLjk4IDAgMCAxLTUuMzUgMy43NyAzLjk4IDMuOTggMCAwIDEtLjY1LS4zVjIwOWE0IDQgMCAwIDAgNCA0aDE2YTQgNCAwIDAgMCA0LTR2LTI0Yy4wMS0xLjUzLS4yMy0yLjg4LS43Mi00LjE3LS40My4xLS44Ny4xNi0xLjI4LjE3YTYgNiAwIDAgMS01LjItMyA3IDcgMCAwIDEtNi40Ny00Ljg4QTEyIDEyIDAgMCAwIDU4IDE4NXY2em05IDI0djlhMyAzIDAgMSAwIDYgMHYtOWgtNnonLyUzRSUzQ3BhdGggZD0nTS0xNyAxOTFhMSAxIDAgMCAwIDAgMmgyYTEgMSAwIDAgMCAwLTJoLTJ6bTE5IDlhMSAxIDAgMCAxIDEtMWgyYTEgMSAwIDAgMSAwIDJIM2ExIDEgMCAwIDEtMS0xem0tMTQgNWExIDEgMCAwIDAgMCAyaDJhMSAxIDAgMCAwIDAtMmgtMnptLTI1IDFhMSAxIDAgMCAwIDAgMmgyYTEgMSAwIDAgMCAwLTJoLTJ6bTUgNGExIDEgMCAwIDAgMCAyaDJhMSAxIDAgMCAwIDAtMmgtMnptOSAwYTEgMSAwIDAgMSAxLTFoMmExIDEgMCAwIDEgMCAyaC0yYTEgMSAwIDAgMS0xLTF6bTE1IDFhMSAxIDAgMCAxIDEtMWgyYTEgMSAwIDAgMSAwIDJoLTJhMSAxIDAgMCAxLTEtMXptMTItMmExIDEgMCAwIDAgMCAyaDJhMSAxIDAgMCAwIDAtMkg0em0tMTEtMTRhMSAxIDAgMCAxIDEtMWgyYTEgMSAwIDAgMSAwIDJoLTJhMSAxIDAgMCAxLTEtMXptLTE5IDBhMSAxIDAgMCAwIDAgMmgyYTEgMSAwIDAgMCAwLTJoLTJ6bTYgNWExIDEgMCAwIDEgMS0xaDJhMSAxIDAgMCAxIDAgMmgtMmExIDEgMCAwIDEtMS0xem0tMjUgMTVjMC0uNDcuMDEtLjk0LjAzLTEuNGE1IDUgMCAwIDEtMS43LTggMy45OSAzLjk5IDAgMCAxIDEuODgtNS4xOCA1IDUgMCAwIDEgMy40LTYuMjIgMyAzIDAgMCAxIDEuNDYtMS4wNSA1IDUgMCAwIDEgNy43Ni0zLjI3QTMwLjg2IDMwLjg2IDAgMCAxLTE0IDE4NGM2Ljc5IDAgMTMuMDYgMi4xOCAxOC4xNyA1Ljg4YTUgNSAwIDAgMSA3Ljc2IDMuMjcgMyAzIDAgMCAxIDEuNDcgMS4wNSA1IDUgMCAwIDEgMy40IDYuMjIgNCA0IDAgMCAxIDEuODcgNS4xOCA0Ljk4IDQuOTggMCAwIDEtMS43IDhjLjAyLjQ2LjAzLjkzLjAzIDEuNHYxaC02MnYtMXptLjgzLTcuMTdhMzAuOSAzMC45IDAgMCAwLS42MiAzLjU3IDMgMyAwIDAgMS0uNjEtNC4yYy4zNy4yOC43OC40OSAxLjIzLjYzem0xLjQ5LTQuNjFjLS4zNi44Ny0uNjggMS43Ni0uOTYgMi42OGEyIDIgMCAwIDEtLjIxLTMuNzFjLjMzLjQuNzMuNzUgMS4xNyAxLjAzem0yLjMyLTQuNTRjLS41NC44Ni0xLjAzIDEuNzYtMS40OSAyLjY4YTMgMyAwIDAgMS0uMDctNC42NyAzIDMgMCAwIDAgMS41NiAxLjk5em0xLjE0LTEuN2MuMzUtLjUuNzItLjk4IDEuMS0xLjQ2YTEgMSAwIDEgMC0xLjEgMS40NXptNS4zNC01Ljc3Yy0xLjAzLjg2LTIgMS43OS0yLjkgMi43N2EzIDMgMCAwIDAtMS4xMS0uNzcgMyAzIDAgMCAxIDQtMnptNDIuNjYgMi43N2MtLjktLjk4LTEuODctMS45LTIuOS0yLjc3YTMgMyAwIDAgMSA0LjAxIDIgMyAzIDAgMCAwLTEuMS43N3ptMS4zNCAxLjU0Yy4zOC40OC43NS45NiAxLjEgMS40NWExIDEgMCAxIDAtMS4xLTEuNDV6bTMuNzMgNS44NGMtLjQ2LS45Mi0uOTUtMS44Mi0xLjUtMi42OGEzIDMgMCAwIDAgMS41Ny0xLjk5IDMgMyAwIDAgMS0uMDcgNC42N3ptMS44IDQuNTNjLS4yOS0uOS0uNi0xLjgtLjk3LTIuNjcuNDQtLjI4Ljg0LS42MyAxLjE3LTEuMDNhMiAyIDAgMCAxLS4yIDMuN3ptMS4xNCA1LjUxYy0uMTQtMS4yMS0uMzUtMi40LS42Mi0zLjU3LjQ1LS4xNC44Ni0uMzUgMS4yMy0uNjNhMi45OSAyLjk5IDAgMCAxLS42IDQuMnpNMTUgMjE0YTI5IDI5IDAgMCAwLTU3Ljk3IDBoNTcuOTZ6Jy8lM0UlM0MvZyUzRSUzQy9nJTNFJTNDL3N2ZyUzRVwiKTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/chat/chat.component.ts":
/*!****************************************!*\
  !*** ./src/app/chat/chat.component.ts ***!
  \****************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _websocket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../websocket.service */ "./src/app/websocket.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let ChatComponent = class ChatComponent {
    constructor(socket, router) {
        this.socket = socket;
        this.router = router;
        // @ViewChild('chatbox') formValues;
        this.msg = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("");
        this.messages = [];
    }
    ngOnInit() {
        if (window.sessionStorage) {
            //c heck for webstorage compatibility
            if (window.sessionStorage.getItem("playerName")) {
                this.player = window.sessionStorage.getItem("playerName");
            }
            else {
                this.router.navigate(["start"]);
                // redirect to start screen
            }
        }
        else {
            alert("Unsupported Browser all features may not work properly");
        }
        this.socket.getChatMessages().subscribe((message) => {
            this.messages.push(JSON.parse(message));
        });
    }
    ngOnDestroy() {
        this.socket.destroy();
    }
    sendChatMessage(text) {
        if (text) {
            let message = JSON.stringify({
                username: this.player,
                message: text
            });
            this.socket.sendChatMessage(message);
            this.msg.setValue("");
        }
    }
};
ChatComponent.ctorParameters = () => [
    { type: _websocket_service__WEBPACK_IMPORTED_MODULE_2__["WebsocketService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
ChatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-chat",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chat.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/chat/chat.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chat.component.css */ "./src/app/chat/chat.component.css")).default]
    })
], ChatComponent);



/***/ }),

/***/ "./src/app/main/main.component.css":
/*!*****************************************!*\
  !*** ./src/app/main/main.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".row {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: row;\r\n}\r\n.col-6 {\r\n  width: 50%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYiw4QkFBbUI7RUFBbkIsNkJBQW1CO1VBQW5CLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsVUFBVTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuLmNvbC02IHtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");



let MainComponent = class MainComponent {
    constructor(api) {
        this.api = api;
        this.mafia = false;
        this.narrator = false;
    }
    ngOnInit() {
        if (window.sessionStorage.getItem("narrator")) {
            this.narrator = true;
        }
        this.id = window.sessionStorage.getItem("gameId");
        this.name = window.sessionStorage.getItem("playerName");
        this.api.getRole(this.id, this.name).subscribe(res => {
            this.role = res[0]["players"][0]["role"];
            console.log(res, this.role);
            if (this.role == "mafia") {
                this.mafia = true;
            }
            // add other roles
        });
    }
};
MainComponent.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
];
MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-main",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main.component.css */ "./src/app/main/main.component.css")).default]
    })
], MainComponent);



/***/ }),

/***/ "./src/app/narrator/narrator.component.css":
/*!*************************************************!*\
  !*** ./src/app/narrator/narrator.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hcnJhdG9yL25hcnJhdG9yLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/narrator/narrator.component.ts":
/*!************************************************!*\
  !*** ./src/app/narrator/narrator.component.ts ***!
  \************************************************/
/*! exports provided: NarratorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NarratorComponent", function() { return NarratorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");



let NarratorComponent = class NarratorComponent {
    constructor(api) {
        this.api = api;
        this.players = [];
    }
    ngOnInit() {
        this.id = window.sessionStorage.getItem("gameId");
        this.api.getPlayers(this.id);
        this.api.players.subscribe((list) => {
            let alive = [];
            list.forEach(element => {
                if (!element.dead) {
                    alive.push(element);
                }
            });
            this.players = alive;
        });
    }
    kill(name) {
        this.api.killplayer(this.id, name);
    }
};
NarratorComponent.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
];
NarratorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-narrator",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./narrator.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/narrator/narrator.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./narrator.component.css */ "./src/app/narrator/narrator.component.css")).default]
    })
], NarratorComponent);



/***/ }),

/***/ "./src/app/start/start.component.css":
/*!*******************************************!*\
  !*** ./src/app/start/start.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YXJ0L3N0YXJ0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/start/start.component.ts":
/*!******************************************!*\
  !*** ./src/app/start/start.component.ts ***!
  \******************************************/
/*! exports provided: StartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartComponent", function() { return StartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _websocket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../websocket.service */ "./src/app/websocket.service.ts");






let StartComponent = class StartComponent {
    constructor(api, route, socket, router) {
        this.api = api;
        this.route = route;
        this.socket = socket;
        this.router = router;
        this.showPlayerList = false;
        this.nameChosen = false;
        this.playerName = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.players = [];
    }
    ngOnInit() {
        console.log(this.route.snapshot.paramMap.get('id'));
        // window.sessionStorage.clear();
        if (this.route.snapshot.paramMap.get('id')) {
            this.id = this.route.snapshot.paramMap.get('id');
            window.sessionStorage.setItem('gameId', this.id);
            // if (!window.sessionStorage.getItem('gameId')){
            //   window.sessionStorage.setItem('gameId',this.id)
            // }
            this.showPlayerList = true;
            if (window.sessionStorage.getItem('playerName')) {
                this.playerId = window.sessionStorage.getItem('playerName');
                this.nameChosen = true;
            }
        }
        else {
            this.router.navigate(['new/']);
        }
        this.api.players.subscribe((list) => {
            this.players = list;
        });
        this.api.getPlayers(this.id);
    }
    createPlayer(name) {
        let player = {
            'name': name,
            'role': 'none',
            'dead': false
        };
        console.log(player);
        this.api.newPlayer(player, this.id).subscribe(res => {
            // this.players.next(res);
            this.playerId = res['name'];
            window.sessionStorage.setItem('playerName', res['name']);
            this.api.getPlayers(this.id);
            this.nameChosen = true;
            console.log('New Player Created', res);
        });
        // this.playerId = window.sessionStorage.getItem('playerName');
    }
    startGame() {
        this.api.start(this.id);
        console.log("Start pressed");
        this.socket.getUpdates().subscribe(() => {
            this.router.navigate([`game/${this.id}`]);
        });
    }
};
StartComponent.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _websocket_service__WEBPACK_IMPORTED_MODULE_5__["WebsocketService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
StartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-start',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./start.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/start/start.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./start.component.css */ "./src/app/start/start.component.css")).default]
    })
], StartComponent);



/***/ }),

/***/ "./src/app/vote/vote.component.css":
/*!*****************************************!*\
  !*** ./src/app/vote/vote.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".row {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: row;\r\n}\r\n.col-6 {\r\n  width: 50%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdm90ZS92b3RlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYiw4QkFBbUI7RUFBbkIsNkJBQW1CO1VBQW5CLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsVUFBVTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvdm90ZS92b3RlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuLmNvbC02IHtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/vote/vote.component.ts":
/*!****************************************!*\
  !*** ./src/app/vote/vote.component.ts ***!
  \****************************************/
/*! exports provided: VoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoteComponent", function() { return VoteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _websocket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../websocket.service */ "./src/app/websocket.service.ts");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm2015/collections.js");






let VoteComponent = class VoteComponent {
    constructor(socket, api) {
        this.socket = socket;
        this.api = api;
        this.votes = {};
        this.votesArray = [];
        this.players = [];
    }
    ngOnInit() {
        this.selectionList.selectedOptions = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__["SelectionModel"](false);
        let id = window.sessionStorage.getItem("gameId");
        this.player = window.sessionStorage.getItem("playerName");
        this.api.getPlayers(id);
        this.api.players.subscribe((list) => {
            let alive = [];
            list.forEach(element => {
                if (!element.dead) {
                    alive.push(element);
                }
            });
            this.players = alive;
        });
        this.socket.getVotes().subscribe(msg => {
            let vote = JSON.parse(msg);
            this.votes[vote.user] = [vote.kill];
            this.votesArray = Object.keys(this.votes).map(key => [
                key,
                this.votes[key]
            ]);
        });
    }
    vote(name) {
        let msg = JSON.stringify({ user: this.player, kill: name });
        this.socket.vote(msg);
    }
};
VoteComponent.ctorParameters = () => [
    { type: _websocket_service__WEBPACK_IMPORTED_MODULE_2__["WebsocketService"] },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatSelectionList"], { static: true })
], VoteComponent.prototype, "selectionList", void 0);
VoteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-vote",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./vote.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/vote/vote.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./vote.component.css */ "./src/app/vote/vote.component.css")).default]
    })
], VoteComponent);



/***/ }),

/***/ "./src/app/websocket.service.ts":
/*!**************************************!*\
  !*** ./src/app/websocket.service.ts ***!
  \**************************************/
/*! exports provided: WebsocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsocketService", function() { return WebsocketService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_3__);




let WebsocketService = class WebsocketService {
    constructor() {
        this.url = "http://localhost:9000";
        this.getServerMessages = () => {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(observer => {
                this.socket.on("server", message => {
                    observer.next(message);
                });
            });
        };
        this.getChatMessages = () => {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(observer => {
                this.socket.on("chat", message => {
                    observer.next(message);
                });
            });
        };
        this.getMafiaMessages = () => {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(observer => {
                this.socket.on("mafia", message => {
                    observer.next(message);
                });
            });
        };
        this.getUpdates = () => {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(observer => {
                this.socket.on("update", message => {
                    observer.next(message);
                });
            });
        };
        this.getVotes = () => {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(observer => {
                this.socket.on("vote", message => {
                    observer.next(message);
                });
            });
        };
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_3__(this.url);
    }
    sendChatMessage(msg) {
        this.socket.emit("chat", msg);
        console.log("service message :" + msg);
    }
    sendMafiaMessage(msg) {
        this.socket.emit("mafia", msg);
    }
    updateRoom() {
        this.socket.emit("update", "now");
    }
    vote(msg) {
        this.socket.emit("vote", msg);
    }
    destroy() {
        this.socket.close();
    }
};
WebsocketService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], WebsocketService);



/***/ }),

/***/ "./src/app/welcome/welcome.component.css":
/*!***********************************************!*\
  !*** ./src/app/welcome/welcome.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let WelcomeComponent = class WelcomeComponent {
    constructor(api, router) {
        this.api = api;
        this.router = router;
    }
    ngOnInit() {
    }
    newgame() {
        window.sessionStorage.clear();
        this.api.newgame().subscribe(res => {
            window.sessionStorage.setItem('gameId', res['id']);
            let id = res['id'];
            this.api.id = id;
            console.log('New Game Created', id);
            this.router.navigate([`start/${id}`]);
        });
    }
};
WelcomeComponent.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
WelcomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-welcome',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./welcome.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./welcome.component.css */ "./src/app/welcome/welcome.component.css")).default]
    })
], WelcomeComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Projects\Mafia Game\mafia-app\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);