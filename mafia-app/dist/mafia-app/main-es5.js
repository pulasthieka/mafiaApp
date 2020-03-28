function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/api.service.ts":
  /*!********************************!*\
    !*** ./src/app/api.service.ts ***!
    \********************************/

  /*! exports provided: ApiService */

  /***/
  function srcAppApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiService", function () {
      return ApiService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _websocket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./websocket.service */
    "./src/app/websocket.service.ts");

    var ApiService = /*#__PURE__*/function () {
      function ApiService(http, socket) {
        _classCallCheck(this, ApiService);

        this.http = http;
        this.socket = socket;
        this.uri = 'http://localhost:9000/mafia';
        this.players = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.playersObservable = this.players.subscribe();
      }

      _createClass(ApiService, [{
        key: "newgame",
        value: function newgame() {
          return this.http.post("".concat(this.uri, "/newGame"), {});
        }
      }, {
        key: "newPlayer",
        value: function newPlayer(player) {
          var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.id;
          return this.http.post("".concat(this.uri, "/add/").concat(id), player);
        }
      }, {
        key: "getPlayers",
        value: function getPlayers(id) {
          var _this = this;

          this.http.get("".concat(this.uri, "/get/").concat(id)).subscribe(function (res) {
            _this.players.next(res['players']);

            console.log('Get Players', res);
          });
        }
      }, {
        key: "getRole",
        value: function getRole() {
          var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.id;
          var name = arguments.length > 1 ? arguments[1] : undefined;
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('id', id).set('name', name);
          return this.http.get("".concat(this.uri, "/getRole/"), {
            params: params
          });
        }
      }, {
        key: "start",
        value: function start() {
          var _this2 = this;

          var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.id;
          //assigned roles
          console.log("API service recieved" + id);
          this.http.post("".concat(this.uri, "/start/").concat(id), {}).subscribe(function (res) {
            _this2.socket.updateRoom();

            _this2.players.next(res);

            console.log('Roles assigned', res);
          });
        }
      }]);

      return ApiService;
    }();

    ApiService.ɵfac = function ApiService_Factory(t) {
      return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_websocket_service__WEBPACK_IMPORTED_MODULE_3__["WebsocketService"]));
    };

    ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ApiService,
      factory: ApiService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _websocket_service__WEBPACK_IMPORTED_MODULE_3__["WebsocketService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _start_start_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./start/start.component */
    "./src/app/start/start.component.ts");
    /* harmony import */


    var _main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./main/main.component */
    "./src/app/main/main.component.ts");
    /* harmony import */


    var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./welcome/welcome.component */
    "./src/app/welcome/welcome.component.ts");

    var routes = [{
      path: 'start/:id',
      component: _start_start_component__WEBPACK_IMPORTED_MODULE_2__["StartComponent"]
    }, {
      path: 'game/:id',
      component: _main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"]
    }, {
      path: 'new/',
      component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__["WelcomeComponent"]
    }, {
      path: '**',
      redirectTo: 'new/'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'mafia-app';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _websocket_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./websocket.service */
    "./src/app/websocket.service.ts");
    /* harmony import */


    var _chat_chat_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./chat/chat.component */
    "./src/app/chat/chat.component.ts");
    /* harmony import */


    var _vote_vote_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./vote/vote.component */
    "./src/app/vote/vote.component.ts");
    /* harmony import */


    var _start_start_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./start/start.component */
    "./src/app/start/start.component.ts");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var _main_main_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./main/main.component */
    "./src/app/main/main.component.ts");
    /* harmony import */


    var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./welcome/welcome.component */
    "./src/app/welcome/welcome.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/list.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/icon.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/button.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/radio.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_websocket_service__WEBPACK_IMPORTED_MODULE_6__["WebsocketService"], _api_service__WEBPACK_IMPORTED_MODULE_10__["ApiService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButtonModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__["MatRadioModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _chat_chat_component__WEBPACK_IMPORTED_MODULE_7__["ChatComponent"], _vote_vote_component__WEBPACK_IMPORTED_MODULE_8__["VoteComponent"], _start_start_component__WEBPACK_IMPORTED_MODULE_9__["StartComponent"], _main_main_component__WEBPACK_IMPORTED_MODULE_11__["MainComponent"], _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_12__["WelcomeComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButtonModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__["MatRadioModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _chat_chat_component__WEBPACK_IMPORTED_MODULE_7__["ChatComponent"], _vote_vote_component__WEBPACK_IMPORTED_MODULE_8__["VoteComponent"], _start_start_component__WEBPACK_IMPORTED_MODULE_9__["StartComponent"], _main_main_component__WEBPACK_IMPORTED_MODULE_11__["MainComponent"], _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_12__["WelcomeComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButtonModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__["MatRadioModule"]],
          providers: [_websocket_service__WEBPACK_IMPORTED_MODULE_6__["WebsocketService"], _api_service__WEBPACK_IMPORTED_MODULE_10__["ApiService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/chat/chat.component.ts":
  /*!****************************************!*\
    !*** ./src/app/chat/chat.component.ts ***!
    \****************************************/

  /*! exports provided: ChatComponent */

  /***/
  function srcAppChatChatComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatComponent", function () {
      return ChatComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _websocket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../websocket.service */
    "./src/app/websocket.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ChatComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var msg_r11 = ctx.$implicit;

        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", msg_r11.username != ctx_r10.player ? "left-msg" : "right-msg");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](msg_r11.username);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", msg_r11.message, " ");
      }
    }

    var ChatComponent = /*#__PURE__*/function () {
      function ChatComponent(socket, router) {
        _classCallCheck(this, ChatComponent);

        this.socket = socket;
        this.router = router; // @ViewChild('chatbox') formValues;

        this.msg = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("");
        this.messages = [];
      }

      _createClass(ChatComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          if (window.sessionStorage) {
            //c heck for webstorage compatibility
            if (window.sessionStorage.getItem("playerName")) {
              this.player = window.sessionStorage.getItem("playerName");
            } else {
              this.router.navigate(["start"]); // redirect to start screen
            }
          } else {
            alert("Unsupported Browser all features may not work properly");
          }

          this.socket.getChatMessages().subscribe(function (message) {
            _this3.messages.push(JSON.parse(message));
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.socket.destroy();
        }
      }, {
        key: "sendChatMessage",
        value: function sendChatMessage(text) {
          if (text) {
            var message = JSON.stringify({
              username: this.player,
              message: text
            });
            this.socket.sendChatMessage(message);
            this.msg.setValue("");
          }
        }
      }]);

      return ChatComponent;
    }();

    ChatComponent.ɵfac = function ChatComponent_Factory(t) {
      return new (t || ChatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_websocket_service__WEBPACK_IMPORTED_MODULE_2__["WebsocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    ChatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ChatComponent,
      selectors: [["app-chat"]],
      decls: 6,
      vars: 2,
      consts: [[1, "msger-chat"], ["class", "msg ", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "msger-inputarea"], ["type", "text", "placeholder", "Enter your message...", 1, "msger-input", 3, "formControl"], ["type", "submit", 1, "msger-send-btn", 3, "click"], [1, "msg", 3, "ngClass"], [1, "msg-bubble"], [1, "msg-info"], [1, "msg-info-name"], [1, "msg-text"]],
      template: function ChatComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatComponent_div_1_Template, 7, 3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_Template_button_click_4_listener() {
            return ctx.sendChatMessage(ctx.msg.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Send");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.messages);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.msg);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]],
      styles: ["[_ngcontent-%COMP%]:root {\r\n  --body-bg: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);\r\n  --msger-bg: #fff;\r\n  --border: 2px solid #ddd;\r\n  --left-msg-bg: #ececec;\r\n  --right-msg-bg: #579ffb;\r\n}\r\n\r\nhtml[_ngcontent-%COMP%] {\r\n  box-sizing: border-box;\r\n}\r\n\r\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:before, *[_ngcontent-%COMP%]:after {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: inherit;\r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 100vh;\r\n  background-image: var(--body-bg);\r\n  font-family: Helvetica, sans-serif;\r\n}\r\n\r\n.msger[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-flow: column wrap;\r\n  justify-content: space-between;\r\n  width: 100%;\r\n  max-width: 867px;\r\n  margin: 25px 10px;\r\n  height: calc(100% - 50px);\r\n  border: var(--border);\r\n  border-radius: 5px;\r\n  background: var(--msger-bg);\r\n  box-shadow: 0 15px 15px -5px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.msger-header[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 10px;\r\n  border-bottom: var(--border);\r\n  background: #eee;\r\n  color: #666;\r\n}\r\n\r\n.msger-chat[_ngcontent-%COMP%] {\r\n  flex: 1;\r\n  overflow-y: auto;\r\n  padding: 10px;\r\n}\r\n\r\n.msger-chat[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 6px;\r\n}\r\n\r\n.msger-chat[_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n  background: #ddd;\r\n}\r\n\r\n.msger-chat[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background: #bdbdbd;\r\n}\r\n\r\n.msg[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: flex-end;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.msg[_ngcontent-%COMP%]:last-of-type {\r\n  margin: 0;\r\n}\r\n\r\n.msg-img[_ngcontent-%COMP%] {\r\n  width: 50px;\r\n  height: 50px;\r\n  margin-right: 10px;\r\n  background: #ddd;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  background-size: cover;\r\n  border-radius: 50%;\r\n}\r\n\r\n.msg-bubble[_ngcontent-%COMP%] {\r\n  max-width: 450px;\r\n  padding: 15px;\r\n  border-radius: 15px;\r\n  background: #ececec;\r\n}\r\n\r\n.msg-info[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.msg-info-name[_ngcontent-%COMP%] {\r\n  margin-right: 10px;\r\n  font-weight: bold;\r\n}\r\n\r\n.msg-info-time[_ngcontent-%COMP%] {\r\n  font-size: 0.85em;\r\n}\r\n\r\n.left-msg[_ngcontent-%COMP%]   .msg-bubble[_ngcontent-%COMP%] {\r\n  border-bottom-left-radius: 0;\r\n}\r\n\r\n.right-msg[_ngcontent-%COMP%] {\r\n  flex-direction: row-reverse;\r\n}\r\n\r\n.right-msg[_ngcontent-%COMP%]   .msg-bubble[_ngcontent-%COMP%] {\r\n  background: #579ffb;\r\n  color: #fff;\r\n  border-bottom-right-radius: 0;\r\n}\r\n\r\n.right-msg[_ngcontent-%COMP%]   .msg-img[_ngcontent-%COMP%] {\r\n  margin: 0 0 0 10px;\r\n}\r\n\r\n.msger-inputarea[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  padding: 10px;\r\n  border-top: var(--border);\r\n  background: #eee;\r\n}\r\n\r\n.msger-inputarea[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\r\n  padding: 10px;\r\n  border: none;\r\n  border-radius: 3px;\r\n  font-size: 1em;\r\n}\r\n\r\n.msger-input[_ngcontent-%COMP%] {\r\n  flex: 1;\r\n  background: #ddd;\r\n}\r\n\r\n.msger-send-btn[_ngcontent-%COMP%] {\r\n  margin-left: 10px;\r\n  background: rgb(0, 196, 65);\r\n  color: #fff;\r\n  font-weight: bold;\r\n  cursor: pointer;\r\n  transition: background 0.23s;\r\n}\r\n\r\n.msger-send-btn[_ngcontent-%COMP%]:hover {\r\n  background: rgb(0, 180, 50);\r\n}\r\n\r\n.msger-chat[_ngcontent-%COMP%] {\r\n  height: 80vh;\r\n  overflow-y: auto;\r\n  background-color: #fcfcfe;\r\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='260' height='260' viewBox='0 0 260 260'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23dddddd' fill-opacity='0.4'%3E%3Cpath d='M24.37 16c.2.65.39 1.32.54 2H21.17l1.17 2.34.45.9-.24.11V28a5 5 0 0 1-2.23 8.94l-.02.06a8 8 0 0 1-7.75 6h-20a8 8 0 0 1-7.74-6l-.02-.06A5 5 0 0 1-17.45 28v-6.76l-.79-1.58-.44-.9.9-.44.63-.32H-20a23.01 23.01 0 0 1 44.37-2zm-36.82 2a1 1 0 0 0-.44.1l-3.1 1.56.89 1.79 1.31-.66a3 3 0 0 1 2.69 0l2.2 1.1a1 1 0 0 0 .9 0l2.21-1.1a3 3 0 0 1 2.69 0l2.2 1.1a1 1 0 0 0 .9 0l2.21-1.1a3 3 0 0 1 2.69 0l2.2 1.1a1 1 0 0 0 .86.02l2.88-1.27a3 3 0 0 1 2.43 0l2.88 1.27a1 1 0 0 0 .85-.02l3.1-1.55-.89-1.79-1.42.71a3 3 0 0 1-2.56.06l-2.77-1.23a1 1 0 0 0-.4-.09h-.01a1 1 0 0 0-.4.09l-2.78 1.23a3 3 0 0 1-2.56-.06l-2.3-1.15a1 1 0 0 0-.45-.11h-.01a1 1 0 0 0-.44.1L.9 19.22a3 3 0 0 1-2.69 0l-2.2-1.1a1 1 0 0 0-.45-.11h-.01a1 1 0 0 0-.44.1l-2.21 1.11a3 3 0 0 1-2.69 0l-2.2-1.1a1 1 0 0 0-.45-.11h-.01zm0-2h-4.9a21.01 21.01 0 0 1 39.61 0h-2.09l-.06-.13-.26.13h-32.31zm30.35 7.68l1.36-.68h1.3v2h-36v-1.15l.34-.17 1.36-.68h2.59l1.36.68a3 3 0 0 0 2.69 0l1.36-.68h2.59l1.36.68a3 3 0 0 0 2.69 0L2.26 23h2.59l1.36.68a3 3 0 0 0 2.56.06l1.67-.74h3.23l1.67.74a3 3 0 0 0 2.56-.06zM-13.82 27l16.37 4.91L18.93 27h-32.75zm-.63 2h.34l16.66 5 16.67-5h.33a3 3 0 1 1 0 6h-34a3 3 0 1 1 0-6zm1.35 8a6 6 0 0 0 5.65 4h20a6 6 0 0 0 5.66-4H-13.1z'/%3E%3Cpath id='path6_fill-copy' d='M284.37 16c.2.65.39 1.32.54 2H281.17l1.17 2.34.45.9-.24.11V28a5 5 0 0 1-2.23 8.94l-.02.06a8 8 0 0 1-7.75 6h-20a8 8 0 0 1-7.74-6l-.02-.06a5 5 0 0 1-2.24-8.94v-6.76l-.79-1.58-.44-.9.9-.44.63-.32H240a23.01 23.01 0 0 1 44.37-2zm-36.82 2a1 1 0 0 0-.44.1l-3.1 1.56.89 1.79 1.31-.66a3 3 0 0 1 2.69 0l2.2 1.1a1 1 0 0 0 .9 0l2.21-1.1a3 3 0 0 1 2.69 0l2.2 1.1a1 1 0 0 0 .9 0l2.21-1.1a3 3 0 0 1 2.69 0l2.2 1.1a1 1 0 0 0 .86.02l2.88-1.27a3 3 0 0 1 2.43 0l2.88 1.27a1 1 0 0 0 .85-.02l3.1-1.55-.89-1.79-1.42.71a3 3 0 0 1-2.56.06l-2.77-1.23a1 1 0 0 0-.4-.09h-.01a1 1 0 0 0-.4.09l-2.78 1.23a3 3 0 0 1-2.56-.06l-2.3-1.15a1 1 0 0 0-.45-.11h-.01a1 1 0 0 0-.44.1l-2.21 1.11a3 3 0 0 1-2.69 0l-2.2-1.1a1 1 0 0 0-.45-.11h-.01a1 1 0 0 0-.44.1l-2.21 1.11a3 3 0 0 1-2.69 0l-2.2-1.1a1 1 0 0 0-.45-.11h-.01zm0-2h-4.9a21.01 21.01 0 0 1 39.61 0h-2.09l-.06-.13-.26.13h-32.31zm30.35 7.68l1.36-.68h1.3v2h-36v-1.15l.34-.17 1.36-.68h2.59l1.36.68a3 3 0 0 0 2.69 0l1.36-.68h2.59l1.36.68a3 3 0 0 0 2.69 0l1.36-.68h2.59l1.36.68a3 3 0 0 0 2.56.06l1.67-.74h3.23l1.67.74a3 3 0 0 0 2.56-.06zM246.18 27l16.37 4.91L278.93 27h-32.75zm-.63 2h.34l16.66 5 16.67-5h.33a3 3 0 1 1 0 6h-34a3 3 0 1 1 0-6zm1.35 8a6 6 0 0 0 5.65 4h20a6 6 0 0 0 5.66-4H246.9z'/%3E%3Cpath d='M159.5 21.02A9 9 0 0 0 151 15h-42a9 9 0 0 0-8.5 6.02 6 6 0 0 0 .02 11.96A8.99 8.99 0 0 0 109 45h42a9 9 0 0 0 8.48-12.02 6 6 0 0 0 .02-11.96zM151 17h-42a7 7 0 0 0-6.33 4h54.66a7 7 0 0 0-6.33-4zm-9.34 26a8.98 8.98 0 0 0 3.34-7h-2a7 7 0 0 1-7 7h-4.34a8.98 8.98 0 0 0 3.34-7h-2a7 7 0 0 1-7 7h-4.34a8.98 8.98 0 0 0 3.34-7h-2a7 7 0 0 1-7 7h-7a7 7 0 1 1 0-14h42a7 7 0 1 1 0 14h-9.34zM109 27a9 9 0 0 0-7.48 4H101a4 4 0 1 1 0-8h58a4 4 0 0 1 0 8h-.52a9 9 0 0 0-7.48-4h-42z'/%3E%3Cpath d='M39 115a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm6-8a6 6 0 1 1-12 0 6 6 0 0 1 12 0zm-3-29v-2h8v-6H40a4 4 0 0 0-4 4v10H22l-1.33 4-.67 2h2.19L26 130h26l3.81-40H58l-.67-2L56 84H42v-6zm-4-4v10h2V74h8v-2h-8a2 2 0 0 0-2 2zm2 12h14.56l.67 2H22.77l.67-2H40zm13.8 4H24.2l3.62 38h22.36l3.62-38z'/%3E%3Cpath d='M129 92h-6v4h-6v4h-6v14h-3l.24 2 3.76 32h36l3.76-32 .24-2h-3v-14h-6v-4h-6v-4h-8zm18 22v-12h-4v4h3v8h1zm-3 0v-6h-4v6h4zm-6 6v-16h-4v19.17c1.6-.7 2.97-1.8 4-3.17zm-6 3.8V100h-4v23.8a10.04 10.04 0 0 0 4 0zm-6-.63V104h-4v16a10.04 10.04 0 0 0 4 3.17zm-6-9.17v-6h-4v6h4zm-6 0v-8h3v-4h-4v12h1zm27-12v-4h-4v4h3v4h1v-4zm-6 0v-8h-4v4h3v4h1zm-6-4v-4h-4v8h1v-4h3zm-6 4v-4h-4v8h1v-4h3zm7 24a12 12 0 0 0 11.83-10h7.92l-3.53 30h-32.44l-3.53-30h7.92A12 12 0 0 0 130 126z'/%3E%3Cpath d='M212 86v2h-4v-2h4zm4 0h-2v2h2v-2zm-20 0v.1a5 5 0 0 0-.56 9.65l.06.25 1.12 4.48a2 2 0 0 0 1.94 1.52h.01l7.02 24.55a2 2 0 0 0 1.92 1.45h4.98a2 2 0 0 0 1.92-1.45l7.02-24.55a2 2 0 0 0 1.95-1.52L224.5 96l.06-.25a5 5 0 0 0-.56-9.65V86a14 14 0 0 0-28 0zm4 0h6v2h-9a3 3 0 1 0 0 6H223a3 3 0 1 0 0-6H220v-2h2a12 12 0 1 0-24 0h2zm-1.44 14l-1-4h24.88l-1 4h-22.88zm8.95 26l-6.86-24h18.7l-6.86 24h-4.98zM150 242a22 22 0 1 0 0-44 22 22 0 0 0 0 44zm24-22a24 24 0 1 1-48 0 24 24 0 0 1 48 0zm-28.38 17.73l2.04-.87a6 6 0 0 1 4.68 0l2.04.87a2 2 0 0 0 2.5-.82l1.14-1.9a6 6 0 0 1 3.79-2.75l2.15-.5a2 2 0 0 0 1.54-2.12l-.19-2.2a6 6 0 0 1 1.45-4.46l1.45-1.67a2 2 0 0 0 0-2.62l-1.45-1.67a6 6 0 0 1-1.45-4.46l.2-2.2a2 2 0 0 0-1.55-2.13l-2.15-.5a6 6 0 0 1-3.8-2.75l-1.13-1.9a2 2 0 0 0-2.5-.8l-2.04.86a6 6 0 0 1-4.68 0l-2.04-.87a2 2 0 0 0-2.5.82l-1.14 1.9a6 6 0 0 1-3.79 2.75l-2.15.5a2 2 0 0 0-1.54 2.12l.19 2.2a6 6 0 0 1-1.45 4.46l-1.45 1.67a2 2 0 0 0 0 2.62l1.45 1.67a6 6 0 0 1 1.45 4.46l-.2 2.2a2 2 0 0 0 1.55 2.13l2.15.5a6 6 0 0 1 3.8 2.75l1.13 1.9a2 2 0 0 0 2.5.8zm2.82.97a4 4 0 0 1 3.12 0l2.04.87a4 4 0 0 0 4.99-1.62l1.14-1.9a4 4 0 0 1 2.53-1.84l2.15-.5a4 4 0 0 0 3.09-4.24l-.2-2.2a4 4 0 0 1 .97-2.98l1.45-1.67a4 4 0 0 0 0-5.24l-1.45-1.67a4 4 0 0 1-.97-2.97l.2-2.2a4 4 0 0 0-3.09-4.25l-2.15-.5a4 4 0 0 1-2.53-1.84l-1.14-1.9a4 4 0 0 0-5-1.62l-2.03.87a4 4 0 0 1-3.12 0l-2.04-.87a4 4 0 0 0-4.99 1.62l-1.14 1.9a4 4 0 0 1-2.53 1.84l-2.15.5a4 4 0 0 0-3.09 4.24l.2 2.2a4 4 0 0 1-.97 2.98l-1.45 1.67a4 4 0 0 0 0 5.24l1.45 1.67a4 4 0 0 1 .97 2.97l-.2 2.2a4 4 0 0 0 3.09 4.25l2.15.5a4 4 0 0 1 2.53 1.84l1.14 1.9a4 4 0 0 0 5 1.62l2.03-.87zM152 207a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm6 2a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm-11 1a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm-6 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm3-5a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm-8 8a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm3 6a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm0 6a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm4 7a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm5-2a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm5 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm4-6a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm6-4a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm-4-3a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm4-3a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm-5-4a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm-24 6a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm16 5a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm7-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0zm86-29a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm19 9a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm-14 5a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm-25 1a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm5 4a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm9 0a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm15 1a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm12-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm-11-14a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm-19 0a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm6 5a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm-25 15c0-.47.01-.94.03-1.4a5 5 0 0 1-1.7-8 3.99 3.99 0 0 1 1.88-5.18 5 5 0 0 1 3.4-6.22 3 3 0 0 1 1.46-1.05 5 5 0 0 1 7.76-3.27A30.86 30.86 0 0 1 246 184c6.79 0 13.06 2.18 18.17 5.88a5 5 0 0 1 7.76 3.27 3 3 0 0 1 1.47 1.05 5 5 0 0 1 3.4 6.22 4 4 0 0 1 1.87 5.18 4.98 4.98 0 0 1-1.7 8c.02.46.03.93.03 1.4v1h-62v-1zm.83-7.17a30.9 30.9 0 0 0-.62 3.57 3 3 0 0 1-.61-4.2c.37.28.78.49 1.23.63zm1.49-4.61c-.36.87-.68 1.76-.96 2.68a2 2 0 0 1-.21-3.71c.33.4.73.75 1.17 1.03zm2.32-4.54c-.54.86-1.03 1.76-1.49 2.68a3 3 0 0 1-.07-4.67 3 3 0 0 0 1.56 1.99zm1.14-1.7c.35-.5.72-.98 1.1-1.46a1 1 0 1 0-1.1 1.45zm5.34-5.77c-1.03.86-2 1.79-2.9 2.77a3 3 0 0 0-1.11-.77 3 3 0 0 1 4-2zm42.66 2.77c-.9-.98-1.87-1.9-2.9-2.77a3 3 0 0 1 4.01 2 3 3 0 0 0-1.1.77zm1.34 1.54c.38.48.75.96 1.1 1.45a1 1 0 1 0-1.1-1.45zm3.73 5.84c-.46-.92-.95-1.82-1.5-2.68a3 3 0 0 0 1.57-1.99 3 3 0 0 1-.07 4.67zm1.8 4.53c-.29-.9-.6-1.8-.97-2.67.44-.28.84-.63 1.17-1.03a2 2 0 0 1-.2 3.7zm1.14 5.51c-.14-1.21-.35-2.4-.62-3.57.45-.14.86-.35 1.23-.63a2.99 2.99 0 0 1-.6 4.2zM275 214a29 29 0 0 0-57.97 0h57.96zM72.33 198.12c-.21-.32-.34-.7-.34-1.12v-12h-2v12a4.01 4.01 0 0 0 7.09 2.54c.57-.69.91-1.57.91-2.54v-12h-2v12a1.99 1.99 0 0 1-2 2 2 2 0 0 1-1.66-.88zM75 176c.38 0 .74-.04 1.1-.12a4 4 0 0 0 6.19 2.4A13.94 13.94 0 0 1 84 185v24a6 6 0 0 1-6 6h-3v9a5 5 0 1 1-10 0v-9h-3a6 6 0 0 1-6-6v-24a14 14 0 0 1 14-14 5 5 0 0 0 5 5zm-17 15v12a1.99 1.99 0 0 0 1.22 1.84 2 2 0 0 0 2.44-.72c.21-.32.34-.7.34-1.12v-12h2v12a3.98 3.98 0 0 1-5.35 3.77 3.98 3.98 0 0 1-.65-.3V209a4 4 0 0 0 4 4h16a4 4 0 0 0 4-4v-24c.01-1.53-.23-2.88-.72-4.17-.43.1-.87.16-1.28.17a6 6 0 0 1-5.2-3 7 7 0 0 1-6.47-4.88A12 12 0 0 0 58 185v6zm9 24v9a3 3 0 1 0 6 0v-9h-6z'/%3E%3Cpath d='M-17 191a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm19 9a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1zm-14 5a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm-25 1a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm5 4a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm9 0a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm15 1a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm12-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2H4zm-11-14a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm-19 0a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm6 5a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm-25 15c0-.47.01-.94.03-1.4a5 5 0 0 1-1.7-8 3.99 3.99 0 0 1 1.88-5.18 5 5 0 0 1 3.4-6.22 3 3 0 0 1 1.46-1.05 5 5 0 0 1 7.76-3.27A30.86 30.86 0 0 1-14 184c6.79 0 13.06 2.18 18.17 5.88a5 5 0 0 1 7.76 3.27 3 3 0 0 1 1.47 1.05 5 5 0 0 1 3.4 6.22 4 4 0 0 1 1.87 5.18 4.98 4.98 0 0 1-1.7 8c.02.46.03.93.03 1.4v1h-62v-1zm.83-7.17a30.9 30.9 0 0 0-.62 3.57 3 3 0 0 1-.61-4.2c.37.28.78.49 1.23.63zm1.49-4.61c-.36.87-.68 1.76-.96 2.68a2 2 0 0 1-.21-3.71c.33.4.73.75 1.17 1.03zm2.32-4.54c-.54.86-1.03 1.76-1.49 2.68a3 3 0 0 1-.07-4.67 3 3 0 0 0 1.56 1.99zm1.14-1.7c.35-.5.72-.98 1.1-1.46a1 1 0 1 0-1.1 1.45zm5.34-5.77c-1.03.86-2 1.79-2.9 2.77a3 3 0 0 0-1.11-.77 3 3 0 0 1 4-2zm42.66 2.77c-.9-.98-1.87-1.9-2.9-2.77a3 3 0 0 1 4.01 2 3 3 0 0 0-1.1.77zm1.34 1.54c.38.48.75.96 1.1 1.45a1 1 0 1 0-1.1-1.45zm3.73 5.84c-.46-.92-.95-1.82-1.5-2.68a3 3 0 0 0 1.57-1.99 3 3 0 0 1-.07 4.67zm1.8 4.53c-.29-.9-.6-1.8-.97-2.67.44-.28.84-.63 1.17-1.03a2 2 0 0 1-.2 3.7zm1.14 5.51c-.14-1.21-.35-2.4-.62-3.57.45-.14.86-.35 1.23-.63a2.99 2.99 0 0 1-.6 4.2zM15 214a29 29 0 0 0-57.97 0h57.96z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\");\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC9jaGF0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw0REFBNEQ7RUFDNUQsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtFQUN4QixzQkFBc0I7RUFDdEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBOzs7RUFHRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixnQ0FBZ0M7RUFDaEMsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw4QkFBOEI7RUFDOUIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsMkJBQTJCO0VBQzNCLCtDQUErQztBQUNqRDs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsYUFBYTtFQUNiLDRCQUE0QjtFQUM1QixnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsT0FBTztFQUNQLGdCQUFnQjtFQUNoQixhQUFhO0FBQ2Y7O0FBQ0E7RUFDRSxVQUFVO0FBQ1o7O0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7O0FBQ0E7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLFNBQVM7QUFDWDs7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBQ0E7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCw2QkFBNkI7QUFDL0I7O0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUNBO0VBQ0UsT0FBTztFQUNQLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQiwyQkFBMkI7RUFDM0IsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsNEJBQTRCO0FBQzlCOztBQUNBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsMHRUQUEwdFQ7QUFDNXRUIiwiZmlsZSI6InNyYy9hcHAvY2hhdC9jaGF0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6cm9vdCB7XHJcbiAgLS1ib2R5LWJnOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjVmN2ZhIDAlLCAjYzNjZmUyIDEwMCUpO1xyXG4gIC0tbXNnZXItYmc6ICNmZmY7XHJcbiAgLS1ib3JkZXI6IDJweCBzb2xpZCAjZGRkO1xyXG4gIC0tbGVmdC1tc2ctYmc6ICNlY2VjZWM7XHJcbiAgLS1yaWdodC1tc2ctYmc6ICM1NzlmZmI7XHJcbn1cclxuXHJcbmh0bWwge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbiosXHJcbio6YmVmb3JlLFxyXG4qOmFmdGVyIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB2YXIoLS1ib2R5LWJnKTtcclxuICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4ubXNnZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiA4NjdweDtcclxuICBtYXJnaW46IDI1cHggMTBweDtcclxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDUwcHgpO1xyXG4gIGJvcmRlcjogdmFyKC0tYm9yZGVyKTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tbXNnZXItYmcpO1xyXG4gIGJveC1zaGFkb3c6IDAgMTVweCAxNXB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG59XHJcblxyXG4ubXNnZXItaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlci1ib3R0b206IHZhcigtLWJvcmRlcik7XHJcbiAgYmFja2dyb3VuZDogI2VlZTtcclxuICBjb2xvcjogIzY2NjtcclxufVxyXG5cclxuLm1zZ2VyLWNoYXQge1xyXG4gIGZsZXg6IDE7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbi5tc2dlci1jaGF0Ojotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDZweDtcclxufVxyXG4ubXNnZXItY2hhdDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gIGJhY2tncm91bmQ6ICNkZGQ7XHJcbn1cclxuLm1zZ2VyLWNoYXQ6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICBiYWNrZ3JvdW5kOiAjYmRiZGJkO1xyXG59XHJcbi5tc2cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuLm1zZzpsYXN0LW9mLXR5cGUge1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4ubXNnLWltZyB7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICBiYWNrZ3JvdW5kOiAjZGRkO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbi5tc2ctYnViYmxlIHtcclxuICBtYXgtd2lkdGg6IDQ1MHB4O1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBiYWNrZ3JvdW5kOiAjZWNlY2VjO1xyXG59XHJcbi5tc2ctaW5mbyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi5tc2ctaW5mby1uYW1lIHtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLm1zZy1pbmZvLXRpbWUge1xyXG4gIGZvbnQtc2l6ZTogMC44NWVtO1xyXG59XHJcblxyXG4ubGVmdC1tc2cgLm1zZy1idWJibGUge1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XHJcbn1cclxuXHJcbi5yaWdodC1tc2cge1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcclxufVxyXG4ucmlnaHQtbXNnIC5tc2ctYnViYmxlIHtcclxuICBiYWNrZ3JvdW5kOiAjNTc5ZmZiO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xyXG59XHJcbi5yaWdodC1tc2cgLm1zZy1pbWcge1xyXG4gIG1hcmdpbjogMCAwIDAgMTBweDtcclxufVxyXG5cclxuLm1zZ2VyLWlucHV0YXJlYSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlci10b3A6IHZhcigtLWJvcmRlcik7XHJcbiAgYmFja2dyb3VuZDogI2VlZTtcclxufVxyXG4ubXNnZXItaW5wdXRhcmVhICoge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBmb250LXNpemU6IDFlbTtcclxufVxyXG4ubXNnZXItaW5wdXQge1xyXG4gIGZsZXg6IDE7XHJcbiAgYmFja2dyb3VuZDogI2RkZDtcclxufVxyXG4ubXNnZXItc2VuZC1idG4ge1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYigwLCAxOTYsIDY1KTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjIzcztcclxufVxyXG4ubXNnZXItc2VuZC1idG46aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IHJnYigwLCAxODAsIDUwKTtcclxufVxyXG5cclxuLm1zZ2VyLWNoYXQge1xyXG4gIGhlaWdodDogODB2aDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2ZjZmU7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScyNjAnIGhlaWdodD0nMjYwJyB2aWV3Qm94PScwIDAgMjYwIDI2MCclM0UlM0NnIGZpbGwtcnVsZT0nZXZlbm9kZCclM0UlM0NnIGZpbGw9JyUyM2RkZGRkZCcgZmlsbC1vcGFjaXR5PScwLjQnJTNFJTNDcGF0aCBkPSdNMjQuMzcgMTZjLjIuNjUuMzkgMS4zMi41NCAySDIxLjE3bDEuMTcgMi4zNC40NS45LS4yNC4xMVYyOGE1IDUgMCAwIDEtMi4yMyA4Ljk0bC0uMDIuMDZhOCA4IDAgMCAxLTcuNzUgNmgtMjBhOCA4IDAgMCAxLTcuNzQtNmwtLjAyLS4wNkE1IDUgMCAwIDEtMTcuNDUgMjh2LTYuNzZsLS43OS0xLjU4LS40NC0uOS45LS40NC42My0uMzJILTIwYTIzLjAxIDIzLjAxIDAgMCAxIDQ0LjM3LTJ6bS0zNi44MiAyYTEgMSAwIDAgMC0uNDQuMWwtMy4xIDEuNTYuODkgMS43OSAxLjMxLS42NmEzIDMgMCAwIDEgMi42OSAwbDIuMiAxLjFhMSAxIDAgMCAwIC45IDBsMi4yMS0xLjFhMyAzIDAgMCAxIDIuNjkgMGwyLjIgMS4xYTEgMSAwIDAgMCAuOSAwbDIuMjEtMS4xYTMgMyAwIDAgMSAyLjY5IDBsMi4yIDEuMWExIDEgMCAwIDAgLjg2LjAybDIuODgtMS4yN2EzIDMgMCAwIDEgMi40MyAwbDIuODggMS4yN2ExIDEgMCAwIDAgLjg1LS4wMmwzLjEtMS41NS0uODktMS43OS0xLjQyLjcxYTMgMyAwIDAgMS0yLjU2LjA2bC0yLjc3LTEuMjNhMSAxIDAgMCAwLS40LS4wOWgtLjAxYTEgMSAwIDAgMC0uNC4wOWwtMi43OCAxLjIzYTMgMyAwIDAgMS0yLjU2LS4wNmwtMi4zLTEuMTVhMSAxIDAgMCAwLS40NS0uMTFoLS4wMWExIDEgMCAwIDAtLjQ0LjFMLjkgMTkuMjJhMyAzIDAgMCAxLTIuNjkgMGwtMi4yLTEuMWExIDEgMCAwIDAtLjQ1LS4xMWgtLjAxYTEgMSAwIDAgMC0uNDQuMWwtMi4yMSAxLjExYTMgMyAwIDAgMS0yLjY5IDBsLTIuMi0xLjFhMSAxIDAgMCAwLS40NS0uMTFoLS4wMXptMC0yaC00LjlhMjEuMDEgMjEuMDEgMCAwIDEgMzkuNjEgMGgtMi4wOWwtLjA2LS4xMy0uMjYuMTNoLTMyLjMxem0zMC4zNSA3LjY4bDEuMzYtLjY4aDEuM3YyaC0zNnYtMS4xNWwuMzQtLjE3IDEuMzYtLjY4aDIuNTlsMS4zNi42OGEzIDMgMCAwIDAgMi42OSAwbDEuMzYtLjY4aDIuNTlsMS4zNi42OGEzIDMgMCAwIDAgMi42OSAwTDIuMjYgMjNoMi41OWwxLjM2LjY4YTMgMyAwIDAgMCAyLjU2LjA2bDEuNjctLjc0aDMuMjNsMS42Ny43NGEzIDMgMCAwIDAgMi41Ni0uMDZ6TS0xMy44MiAyN2wxNi4zNyA0LjkxTDE4LjkzIDI3aC0zMi43NXptLS42MyAyaC4zNGwxNi42NiA1IDE2LjY3LTVoLjMzYTMgMyAwIDEgMSAwIDZoLTM0YTMgMyAwIDEgMSAwLTZ6bTEuMzUgOGE2IDYgMCAwIDAgNS42NSA0aDIwYTYgNiAwIDAgMCA1LjY2LTRILTEzLjF6Jy8lM0UlM0NwYXRoIGlkPSdwYXRoNl9maWxsLWNvcHknIGQ9J00yODQuMzcgMTZjLjIuNjUuMzkgMS4zMi41NCAySDI4MS4xN2wxLjE3IDIuMzQuNDUuOS0uMjQuMTFWMjhhNSA1IDAgMCAxLTIuMjMgOC45NGwtLjAyLjA2YTggOCAwIDAgMS03Ljc1IDZoLTIwYTggOCAwIDAgMS03Ljc0LTZsLS4wMi0uMDZhNSA1IDAgMCAxLTIuMjQtOC45NHYtNi43NmwtLjc5LTEuNTgtLjQ0LS45LjktLjQ0LjYzLS4zMkgyNDBhMjMuMDEgMjMuMDEgMCAwIDEgNDQuMzctMnptLTM2LjgyIDJhMSAxIDAgMCAwLS40NC4xbC0zLjEgMS41Ni44OSAxLjc5IDEuMzEtLjY2YTMgMyAwIDAgMSAyLjY5IDBsMi4yIDEuMWExIDEgMCAwIDAgLjkgMGwyLjIxLTEuMWEzIDMgMCAwIDEgMi42OSAwbDIuMiAxLjFhMSAxIDAgMCAwIC45IDBsMi4yMS0xLjFhMyAzIDAgMCAxIDIuNjkgMGwyLjIgMS4xYTEgMSAwIDAgMCAuODYuMDJsMi44OC0xLjI3YTMgMyAwIDAgMSAyLjQzIDBsMi44OCAxLjI3YTEgMSAwIDAgMCAuODUtLjAybDMuMS0xLjU1LS44OS0xLjc5LTEuNDIuNzFhMyAzIDAgMCAxLTIuNTYuMDZsLTIuNzctMS4yM2ExIDEgMCAwIDAtLjQtLjA5aC0uMDFhMSAxIDAgMCAwLS40LjA5bC0yLjc4IDEuMjNhMyAzIDAgMCAxLTIuNTYtLjA2bC0yLjMtMS4xNWExIDEgMCAwIDAtLjQ1LS4xMWgtLjAxYTEgMSAwIDAgMC0uNDQuMWwtMi4yMSAxLjExYTMgMyAwIDAgMS0yLjY5IDBsLTIuMi0xLjFhMSAxIDAgMCAwLS40NS0uMTFoLS4wMWExIDEgMCAwIDAtLjQ0LjFsLTIuMjEgMS4xMWEzIDMgMCAwIDEtMi42OSAwbC0yLjItMS4xYTEgMSAwIDAgMC0uNDUtLjExaC0uMDF6bTAtMmgtNC45YTIxLjAxIDIxLjAxIDAgMCAxIDM5LjYxIDBoLTIuMDlsLS4wNi0uMTMtLjI2LjEzaC0zMi4zMXptMzAuMzUgNy42OGwxLjM2LS42OGgxLjN2MmgtMzZ2LTEuMTVsLjM0LS4xNyAxLjM2LS42OGgyLjU5bDEuMzYuNjhhMyAzIDAgMCAwIDIuNjkgMGwxLjM2LS42OGgyLjU5bDEuMzYuNjhhMyAzIDAgMCAwIDIuNjkgMGwxLjM2LS42OGgyLjU5bDEuMzYuNjhhMyAzIDAgMCAwIDIuNTYuMDZsMS42Ny0uNzRoMy4yM2wxLjY3Ljc0YTMgMyAwIDAgMCAyLjU2LS4wNnpNMjQ2LjE4IDI3bDE2LjM3IDQuOTFMMjc4LjkzIDI3aC0zMi43NXptLS42MyAyaC4zNGwxNi42NiA1IDE2LjY3LTVoLjMzYTMgMyAwIDEgMSAwIDZoLTM0YTMgMyAwIDEgMSAwLTZ6bTEuMzUgOGE2IDYgMCAwIDAgNS42NSA0aDIwYTYgNiAwIDAgMCA1LjY2LTRIMjQ2Ljl6Jy8lM0UlM0NwYXRoIGQ9J00xNTkuNSAyMS4wMkE5IDkgMCAwIDAgMTUxIDE1aC00MmE5IDkgMCAwIDAtOC41IDYuMDIgNiA2IDAgMCAwIC4wMiAxMS45NkE4Ljk5IDguOTkgMCAwIDAgMTA5IDQ1aDQyYTkgOSAwIDAgMCA4LjQ4LTEyLjAyIDYgNiAwIDAgMCAuMDItMTEuOTZ6TTE1MSAxN2gtNDJhNyA3IDAgMCAwLTYuMzMgNGg1NC42NmE3IDcgMCAwIDAtNi4zMy00em0tOS4zNCAyNmE4Ljk4IDguOTggMCAwIDAgMy4zNC03aC0yYTcgNyAwIDAgMS03IDdoLTQuMzRhOC45OCA4Ljk4IDAgMCAwIDMuMzQtN2gtMmE3IDcgMCAwIDEtNyA3aC00LjM0YTguOTggOC45OCAwIDAgMCAzLjM0LTdoLTJhNyA3IDAgMCAxLTcgN2gtN2E3IDcgMCAxIDEgMC0xNGg0MmE3IDcgMCAxIDEgMCAxNGgtOS4zNHpNMTA5IDI3YTkgOSAwIDAgMC03LjQ4IDRIMTAxYTQgNCAwIDEgMSAwLThoNThhNCA0IDAgMCAxIDAgOGgtLjUyYTkgOSAwIDAgMC03LjQ4LTRoLTQyeicvJTNFJTNDcGF0aCBkPSdNMzkgMTE1YTggOCAwIDEgMCAwLTE2IDggOCAwIDAgMCAwIDE2em02LThhNiA2IDAgMSAxLTEyIDAgNiA2IDAgMCAxIDEyIDB6bS0zLTI5di0yaDh2LTZINDBhNCA0IDAgMCAwLTQgNHYxMEgyMmwtMS4zMyA0LS42NyAyaDIuMTlMMjYgMTMwaDI2bDMuODEtNDBINThsLS42Ny0yTDU2IDg0SDQydi02em0tNC00djEwaDJWNzRoOHYtMmgtOGEyIDIgMCAwIDAtMiAyem0yIDEyaDE0LjU2bC42NyAySDIyLjc3bC42Ny0ySDQwem0xMy44IDRIMjQuMmwzLjYyIDM4aDIyLjM2bDMuNjItMzh6Jy8lM0UlM0NwYXRoIGQ9J00xMjkgOTJoLTZ2NGgtNnY0aC02djE0aC0zbC4yNCAyIDMuNzYgMzJoMzZsMy43Ni0zMiAuMjQtMmgtM3YtMTRoLTZ2LTRoLTZ2LTRoLTh6bTE4IDIydi0xMmgtNHY0aDN2OGgxem0tMyAwdi02aC00djZoNHptLTYgNnYtMTZoLTR2MTkuMTdjMS42LS43IDIuOTctMS44IDQtMy4xN3ptLTYgMy44VjEwMGgtNHYyMy44YTEwLjA0IDEwLjA0IDAgMCAwIDQgMHptLTYtLjYzVjEwNGgtNHYxNmExMC4wNCAxMC4wNCAwIDAgMCA0IDMuMTd6bS02LTkuMTd2LTZoLTR2Nmg0em0tNiAwdi04aDN2LTRoLTR2MTJoMXptMjctMTJ2LTRoLTR2NGgzdjRoMXYtNHptLTYgMHYtOGgtNHY0aDN2NGgxem0tNi00di00aC00djhoMXYtNGgzem0tNiA0di00aC00djhoMXYtNGgzem03IDI0YTEyIDEyIDAgMCAwIDExLjgzLTEwaDcuOTJsLTMuNTMgMzBoLTMyLjQ0bC0zLjUzLTMwaDcuOTJBMTIgMTIgMCAwIDAgMTMwIDEyNnonLyUzRSUzQ3BhdGggZD0nTTIxMiA4NnYyaC00di0yaDR6bTQgMGgtMnYyaDJ2LTJ6bS0yMCAwdi4xYTUgNSAwIDAgMC0uNTYgOS42NWwuMDYuMjUgMS4xMiA0LjQ4YTIgMiAwIDAgMCAxLjk0IDEuNTJoLjAxbDcuMDIgMjQuNTVhMiAyIDAgMCAwIDEuOTIgMS40NWg0Ljk4YTIgMiAwIDAgMCAxLjkyLTEuNDVsNy4wMi0yNC41NWEyIDIgMCAwIDAgMS45NS0xLjUyTDIyNC41IDk2bC4wNi0uMjVhNSA1IDAgMCAwLS41Ni05LjY1Vjg2YTE0IDE0IDAgMCAwLTI4IDB6bTQgMGg2djJoLTlhMyAzIDAgMSAwIDAgNkgyMjNhMyAzIDAgMSAwIDAtNkgyMjB2LTJoMmExMiAxMiAwIDEgMC0yNCAwaDJ6bS0xLjQ0IDE0bC0xLTRoMjQuODhsLTEgNGgtMjIuODh6bTguOTUgMjZsLTYuODYtMjRoMTguN2wtNi44NiAyNGgtNC45OHpNMTUwIDI0MmEyMiAyMiAwIDEgMCAwLTQ0IDIyIDIyIDAgMCAwIDAgNDR6bTI0LTIyYTI0IDI0IDAgMSAxLTQ4IDAgMjQgMjQgMCAwIDEgNDggMHptLTI4LjM4IDE3LjczbDIuMDQtLjg3YTYgNiAwIDAgMSA0LjY4IDBsMi4wNC44N2EyIDIgMCAwIDAgMi41LS44MmwxLjE0LTEuOWE2IDYgMCAwIDEgMy43OS0yLjc1bDIuMTUtLjVhMiAyIDAgMCAwIDEuNTQtMi4xMmwtLjE5LTIuMmE2IDYgMCAwIDEgMS40NS00LjQ2bDEuNDUtMS42N2EyIDIgMCAwIDAgMC0yLjYybC0xLjQ1LTEuNjdhNiA2IDAgMCAxLTEuNDUtNC40NmwuMi0yLjJhMiAyIDAgMCAwLTEuNTUtMi4xM2wtMi4xNS0uNWE2IDYgMCAwIDEtMy44LTIuNzVsLTEuMTMtMS45YTIgMiAwIDAgMC0yLjUtLjhsLTIuMDQuODZhNiA2IDAgMCAxLTQuNjggMGwtMi4wNC0uODdhMiAyIDAgMCAwLTIuNS44MmwtMS4xNCAxLjlhNiA2IDAgMCAxLTMuNzkgMi43NWwtMi4xNS41YTIgMiAwIDAgMC0xLjU0IDIuMTJsLjE5IDIuMmE2IDYgMCAwIDEtMS40NSA0LjQ2bC0xLjQ1IDEuNjdhMiAyIDAgMCAwIDAgMi42MmwxLjQ1IDEuNjdhNiA2IDAgMCAxIDEuNDUgNC40NmwtLjIgMi4yYTIgMiAwIDAgMCAxLjU1IDIuMTNsMi4xNS41YTYgNiAwIDAgMSAzLjggMi43NWwxLjEzIDEuOWEyIDIgMCAwIDAgMi41Ljh6bTIuODIuOTdhNCA0IDAgMCAxIDMuMTIgMGwyLjA0Ljg3YTQgNCAwIDAgMCA0Ljk5LTEuNjJsMS4xNC0xLjlhNCA0IDAgMCAxIDIuNTMtMS44NGwyLjE1LS41YTQgNCAwIDAgMCAzLjA5LTQuMjRsLS4yLTIuMmE0IDQgMCAwIDEgLjk3LTIuOThsMS40NS0xLjY3YTQgNCAwIDAgMCAwLTUuMjRsLTEuNDUtMS42N2E0IDQgMCAwIDEtLjk3LTIuOTdsLjItMi4yYTQgNCAwIDAgMC0zLjA5LTQuMjVsLTIuMTUtLjVhNCA0IDAgMCAxLTIuNTMtMS44NGwtMS4xNC0xLjlhNCA0IDAgMCAwLTUtMS42MmwtMi4wMy44N2E0IDQgMCAwIDEtMy4xMiAwbC0yLjA0LS44N2E0IDQgMCAwIDAtNC45OSAxLjYybC0xLjE0IDEuOWE0IDQgMCAwIDEtMi41MyAxLjg0bC0yLjE1LjVhNCA0IDAgMCAwLTMuMDkgNC4yNGwuMiAyLjJhNCA0IDAgMCAxLS45NyAyLjk4bC0xLjQ1IDEuNjdhNCA0IDAgMCAwIDAgNS4yNGwxLjQ1IDEuNjdhNCA0IDAgMCAxIC45NyAyLjk3bC0uMiAyLjJhNCA0IDAgMCAwIDMuMDkgNC4yNWwyLjE1LjVhNCA0IDAgMCAxIDIuNTMgMS44NGwxLjE0IDEuOWE0IDQgMCAwIDAgNSAxLjYybDIuMDMtLjg3ek0xNTIgMjA3YTEgMSAwIDEgMSAyIDAgMSAxIDAgMCAxLTIgMHptNiAyYTEgMSAwIDEgMSAyIDAgMSAxIDAgMCAxLTIgMHptLTExIDFhMSAxIDAgMSAxIDIgMCAxIDEgMCAwIDEtMiAwem0tNiAwYTEgMSAwIDEgMSAyIDAgMSAxIDAgMCAxLTIgMHptMy01YTEgMSAwIDEgMSAyIDAgMSAxIDAgMCAxLTIgMHptLTggOGExIDEgMCAxIDEgMiAwIDEgMSAwIDAgMS0yIDB6bTMgNmExIDEgMCAxIDEgMiAwIDEgMSAwIDAgMS0yIDB6bTAgNmExIDEgMCAxIDEgMiAwIDEgMSAwIDAgMS0yIDB6bTQgN2ExIDEgMCAxIDEgMiAwIDEgMSAwIDAgMS0yIDB6bTUtMmExIDEgMCAxIDEgMiAwIDEgMSAwIDAgMS0yIDB6bTUgNGExIDEgMCAxIDEgMiAwIDEgMSAwIDAgMS0yIDB6bTQtNmExIDEgMCAxIDEgMiAwIDEgMSAwIDAgMS0yIDB6bTYtNGExIDEgMCAxIDEgMiAwIDEgMSAwIDAgMS0yIDB6bS00LTNhMSAxIDAgMSAxIDIgMCAxIDEgMCAwIDEtMiAwem00LTNhMSAxIDAgMSAxIDIgMCAxIDEgMCAwIDEtMiAwem0tNS00YTEgMSAwIDEgMSAyIDAgMSAxIDAgMCAxLTIgMHptLTI0IDZhMSAxIDAgMSAxIDIgMCAxIDEgMCAwIDEtMiAwem0xNiA1YTUgNSAwIDEgMCAwLTEwIDUgNSAwIDAgMCAwIDEwem03LTVhNyA3IDAgMSAxLTE0IDAgNyA3IDAgMCAxIDE0IDB6bTg2LTI5YTEgMSAwIDAgMCAwIDJoMmExIDEgMCAwIDAgMC0yaC0yem0xOSA5YTEgMSAwIDAgMSAxLTFoMmExIDEgMCAwIDEgMCAyaC0yYTEgMSAwIDAgMS0xLTF6bS0xNCA1YTEgMSAwIDAgMCAwIDJoMmExIDEgMCAwIDAgMC0yaC0yem0tMjUgMWExIDEgMCAwIDAgMCAyaDJhMSAxIDAgMCAwIDAtMmgtMnptNSA0YTEgMSAwIDAgMCAwIDJoMmExIDEgMCAwIDAgMC0yaC0yem05IDBhMSAxIDAgMCAxIDEtMWgyYTEgMSAwIDAgMSAwIDJoLTJhMSAxIDAgMCAxLTEtMXptMTUgMWExIDEgMCAwIDEgMS0xaDJhMSAxIDAgMCAxIDAgMmgtMmExIDEgMCAwIDEtMS0xem0xMi0yYTEgMSAwIDAgMCAwIDJoMmExIDEgMCAwIDAgMC0yaC0yem0tMTEtMTRhMSAxIDAgMCAxIDEtMWgyYTEgMSAwIDAgMSAwIDJoLTJhMSAxIDAgMCAxLTEtMXptLTE5IDBhMSAxIDAgMCAwIDAgMmgyYTEgMSAwIDAgMCAwLTJoLTJ6bTYgNWExIDEgMCAwIDEgMS0xaDJhMSAxIDAgMCAxIDAgMmgtMmExIDEgMCAwIDEtMS0xem0tMjUgMTVjMC0uNDcuMDEtLjk0LjAzLTEuNGE1IDUgMCAwIDEtMS43LTggMy45OSAzLjk5IDAgMCAxIDEuODgtNS4xOCA1IDUgMCAwIDEgMy40LTYuMjIgMyAzIDAgMCAxIDEuNDYtMS4wNSA1IDUgMCAwIDEgNy43Ni0zLjI3QTMwLjg2IDMwLjg2IDAgMCAxIDI0NiAxODRjNi43OSAwIDEzLjA2IDIuMTggMTguMTcgNS44OGE1IDUgMCAwIDEgNy43NiAzLjI3IDMgMyAwIDAgMSAxLjQ3IDEuMDUgNSA1IDAgMCAxIDMuNCA2LjIyIDQgNCAwIDAgMSAxLjg3IDUuMTggNC45OCA0Ljk4IDAgMCAxLTEuNyA4Yy4wMi40Ni4wMy45My4wMyAxLjR2MWgtNjJ2LTF6bS44My03LjE3YTMwLjkgMzAuOSAwIDAgMC0uNjIgMy41NyAzIDMgMCAwIDEtLjYxLTQuMmMuMzcuMjguNzguNDkgMS4yMy42M3ptMS40OS00LjYxYy0uMzYuODctLjY4IDEuNzYtLjk2IDIuNjhhMiAyIDAgMCAxLS4yMS0zLjcxYy4zMy40LjczLjc1IDEuMTcgMS4wM3ptMi4zMi00LjU0Yy0uNTQuODYtMS4wMyAxLjc2LTEuNDkgMi42OGEzIDMgMCAwIDEtLjA3LTQuNjcgMyAzIDAgMCAwIDEuNTYgMS45OXptMS4xNC0xLjdjLjM1LS41LjcyLS45OCAxLjEtMS40NmExIDEgMCAxIDAtMS4xIDEuNDV6bTUuMzQtNS43N2MtMS4wMy44Ni0yIDEuNzktMi45IDIuNzdhMyAzIDAgMCAwLTEuMTEtLjc3IDMgMyAwIDAgMSA0LTJ6bTQyLjY2IDIuNzdjLS45LS45OC0xLjg3LTEuOS0yLjktMi43N2EzIDMgMCAwIDEgNC4wMSAyIDMgMyAwIDAgMC0xLjEuNzd6bTEuMzQgMS41NGMuMzguNDguNzUuOTYgMS4xIDEuNDVhMSAxIDAgMSAwLTEuMS0xLjQ1em0zLjczIDUuODRjLS40Ni0uOTItLjk1LTEuODItMS41LTIuNjhhMyAzIDAgMCAwIDEuNTctMS45OSAzIDMgMCAwIDEtLjA3IDQuNjd6bTEuOCA0LjUzYy0uMjktLjktLjYtMS44LS45Ny0yLjY3LjQ0LS4yOC44NC0uNjMgMS4xNy0xLjAzYTIgMiAwIDAgMS0uMiAzLjd6bTEuMTQgNS41MWMtLjE0LTEuMjEtLjM1LTIuNC0uNjItMy41Ny40NS0uMTQuODYtLjM1IDEuMjMtLjYzYTIuOTkgMi45OSAwIDAgMS0uNiA0LjJ6TTI3NSAyMTRhMjkgMjkgMCAwIDAtNTcuOTcgMGg1Ny45NnpNNzIuMzMgMTk4LjEyYy0uMjEtLjMyLS4zNC0uNy0uMzQtMS4xMnYtMTJoLTJ2MTJhNC4wMSA0LjAxIDAgMCAwIDcuMDkgMi41NGMuNTctLjY5LjkxLTEuNTcuOTEtMi41NHYtMTJoLTJ2MTJhMS45OSAxLjk5IDAgMCAxLTIgMiAyIDIgMCAwIDEtMS42Ni0uODh6TTc1IDE3NmMuMzggMCAuNzQtLjA0IDEuMS0uMTJhNCA0IDAgMCAwIDYuMTkgMi40QTEzLjk0IDEzLjk0IDAgMCAxIDg0IDE4NXYyNGE2IDYgMCAwIDEtNiA2aC0zdjlhNSA1IDAgMSAxLTEwIDB2LTloLTNhNiA2IDAgMCAxLTYtNnYtMjRhMTQgMTQgMCAwIDEgMTQtMTQgNSA1IDAgMCAwIDUgNXptLTE3IDE1djEyYTEuOTkgMS45OSAwIDAgMCAxLjIyIDEuODQgMiAyIDAgMCAwIDIuNDQtLjcyYy4yMS0uMzIuMzQtLjcuMzQtMS4xMnYtMTJoMnYxMmEzLjk4IDMuOTggMCAwIDEtNS4zNSAzLjc3IDMuOTggMy45OCAwIDAgMS0uNjUtLjNWMjA5YTQgNCAwIDAgMCA0IDRoMTZhNCA0IDAgMCAwIDQtNHYtMjRjLjAxLTEuNTMtLjIzLTIuODgtLjcyLTQuMTctLjQzLjEtLjg3LjE2LTEuMjguMTdhNiA2IDAgMCAxLTUuMi0zIDcgNyAwIDAgMS02LjQ3LTQuODhBMTIgMTIgMCAwIDAgNTggMTg1djZ6bTkgMjR2OWEzIDMgMCAxIDAgNiAwdi05aC02eicvJTNFJTNDcGF0aCBkPSdNLTE3IDE5MWExIDEgMCAwIDAgMCAyaDJhMSAxIDAgMCAwIDAtMmgtMnptMTkgOWExIDEgMCAwIDEgMS0xaDJhMSAxIDAgMCAxIDAgMkgzYTEgMSAwIDAgMS0xLTF6bS0xNCA1YTEgMSAwIDAgMCAwIDJoMmExIDEgMCAwIDAgMC0yaC0yem0tMjUgMWExIDEgMCAwIDAgMCAyaDJhMSAxIDAgMCAwIDAtMmgtMnptNSA0YTEgMSAwIDAgMCAwIDJoMmExIDEgMCAwIDAgMC0yaC0yem05IDBhMSAxIDAgMCAxIDEtMWgyYTEgMSAwIDAgMSAwIDJoLTJhMSAxIDAgMCAxLTEtMXptMTUgMWExIDEgMCAwIDEgMS0xaDJhMSAxIDAgMCAxIDAgMmgtMmExIDEgMCAwIDEtMS0xem0xMi0yYTEgMSAwIDAgMCAwIDJoMmExIDEgMCAwIDAgMC0ySDR6bS0xMS0xNGExIDEgMCAwIDEgMS0xaDJhMSAxIDAgMCAxIDAgMmgtMmExIDEgMCAwIDEtMS0xem0tMTkgMGExIDEgMCAwIDAgMCAyaDJhMSAxIDAgMCAwIDAtMmgtMnptNiA1YTEgMSAwIDAgMSAxLTFoMmExIDEgMCAwIDEgMCAyaC0yYTEgMSAwIDAgMS0xLTF6bS0yNSAxNWMwLS40Ny4wMS0uOTQuMDMtMS40YTUgNSAwIDAgMS0xLjctOCAzLjk5IDMuOTkgMCAwIDEgMS44OC01LjE4IDUgNSAwIDAgMSAzLjQtNi4yMiAzIDMgMCAwIDEgMS40Ni0xLjA1IDUgNSAwIDAgMSA3Ljc2LTMuMjdBMzAuODYgMzAuODYgMCAwIDEtMTQgMTg0YzYuNzkgMCAxMy4wNiAyLjE4IDE4LjE3IDUuODhhNSA1IDAgMCAxIDcuNzYgMy4yNyAzIDMgMCAwIDEgMS40NyAxLjA1IDUgNSAwIDAgMSAzLjQgNi4yMiA0IDQgMCAwIDEgMS44NyA1LjE4IDQuOTggNC45OCAwIDAgMS0xLjcgOGMuMDIuNDYuMDMuOTMuMDMgMS40djFoLTYydi0xem0uODMtNy4xN2EzMC45IDMwLjkgMCAwIDAtLjYyIDMuNTcgMyAzIDAgMCAxLS42MS00LjJjLjM3LjI4Ljc4LjQ5IDEuMjMuNjN6bTEuNDktNC42MWMtLjM2Ljg3LS42OCAxLjc2LS45NiAyLjY4YTIgMiAwIDAgMS0uMjEtMy43MWMuMzMuNC43My43NSAxLjE3IDEuMDN6bTIuMzItNC41NGMtLjU0Ljg2LTEuMDMgMS43Ni0xLjQ5IDIuNjhhMyAzIDAgMCAxLS4wNy00LjY3IDMgMyAwIDAgMCAxLjU2IDEuOTl6bTEuMTQtMS43Yy4zNS0uNS43Mi0uOTggMS4xLTEuNDZhMSAxIDAgMSAwLTEuMSAxLjQ1em01LjM0LTUuNzdjLTEuMDMuODYtMiAxLjc5LTIuOSAyLjc3YTMgMyAwIDAgMC0xLjExLS43NyAzIDMgMCAwIDEgNC0yem00Mi42NiAyLjc3Yy0uOS0uOTgtMS44Ny0xLjktMi45LTIuNzdhMyAzIDAgMCAxIDQuMDEgMiAzIDMgMCAwIDAtMS4xLjc3em0xLjM0IDEuNTRjLjM4LjQ4Ljc1Ljk2IDEuMSAxLjQ1YTEgMSAwIDEgMC0xLjEtMS40NXptMy43MyA1Ljg0Yy0uNDYtLjkyLS45NS0xLjgyLTEuNS0yLjY4YTMgMyAwIDAgMCAxLjU3LTEuOTkgMyAzIDAgMCAxLS4wNyA0LjY3em0xLjggNC41M2MtLjI5LS45LS42LTEuOC0uOTctMi42Ny40NC0uMjguODQtLjYzIDEuMTctMS4wM2EyIDIgMCAwIDEtLjIgMy43em0xLjE0IDUuNTFjLS4xNC0xLjIxLS4zNS0yLjQtLjYyLTMuNTcuNDUtLjE0Ljg2LS4zNSAxLjIzLS42M2EyLjk5IDIuOTkgMCAwIDEtLjYgNC4yek0xNSAyMTRhMjkgMjkgMCAwIDAtNTcuOTcgMGg1Ny45NnonLyUzRSUzQy9nJTNFJTNDL2clM0UlM0Mvc3ZnJTNFXCIpO1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-chat",
          templateUrl: "./chat.component.html",
          styleUrls: ["./chat.component.css"]
        }]
      }], function () {
        return [{
          type: _websocket_service__WEBPACK_IMPORTED_MODULE_2__["WebsocketService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/main/main.component.ts":
  /*!****************************************!*\
    !*** ./src/app/main/main.component.ts ***!
    \****************************************/

  /*! exports provided: MainComponent */

  /***/
  function srcAppMainMainComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainComponent", function () {
      return MainComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var _chat_chat_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../chat/chat.component */
    "./src/app/chat/chat.component.ts");
    /* harmony import */


    var _vote_vote_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../vote/vote.component */
    "./src/app/vote/vote.component.ts");

    var MainComponent = /*#__PURE__*/function () {
      function MainComponent(api) {
        _classCallCheck(this, MainComponent);

        this.api = api;
        this.mafia = false;
      }

      _createClass(MainComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.id = window.sessionStorage.getItem("gameId");
          this.name = window.sessionStorage.getItem("playerName");
          this.api.getRole(this.id, this.name).subscribe(function (res) {
            _this4.role = res[0]["players"][0]["role"];
            console.log(res, _this4.role);

            if (_this4.role == "mafia") {
              _this4.mafia = true;
            } // add other roles

          });
        }
      }]);

      return MainComponent;
    }();

    MainComponent.ɵfac = function MainComponent_Factory(t) {
      return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]));
    };

    MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MainComponent,
      selectors: [["app-main"]],
      decls: 7,
      vars: 1,
      consts: [[1, "row"], [1, "col-6"]],
      template: function MainComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-chat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-vote");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Your Role : ", ctx.role, "");
        }
      },
      directives: [_chat_chat_component__WEBPACK_IMPORTED_MODULE_2__["ChatComponent"], _vote_vote_component__WEBPACK_IMPORTED_MODULE_3__["VoteComponent"]],
      styles: [".row[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n.col-6[_ngcontent-%COMP%] {\r\n  width: 50%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxVQUFVO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9tYWluL21haW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG4uY29sLTYge1xyXG4gIHdpZHRoOiA1MCU7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-main",
          templateUrl: "./main.component.html",
          styleUrls: ["./main.component.css"]
        }]
      }], function () {
        return [{
          type: _api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/start/start.component.ts":
  /*!******************************************!*\
    !*** ./src/app/start/start.component.ts ***!
    \******************************************/

  /*! exports provided: StartComponent */

  /***/
  function srcAppStartStartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StartComponent", function () {
      return StartComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _websocket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../websocket.service */
    "./src/app/websocket.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function StartComponent_div_0_form_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function StartComponent_div_0_form_3_Template_form_keyup_enter_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r4.createPlayer(ctx_r4.playerName.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Enter Name: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StartComponent_div_0_form_3_Template_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r6.createPlayer(ctx_r6.playerName.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Join");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r1.playerName);
      }
    }

    function StartComponent_div_0_p_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Your Name : ", ctx_r2.playerId, " ");
      }
    }

    function StartComponent_div_0_li_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var player_r7 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](player_r7.name);
      }
    }

    function StartComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, StartComponent_div_0_form_3_Template, 6, 1, "form", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, StartComponent_div_0_p_4_Template, 2, 1, "p", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StartComponent_div_0_Template_button_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.startGame();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Start Game");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Connected Players");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, StartComponent_div_0_li_10_Template, 2, 1, "li", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" connect to the url/", ctx_r0.id, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.nameChosen);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.nameChosen);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.players);
      }
    }

    var StartComponent = /*#__PURE__*/function () {
      function StartComponent(api, route, socket, router) {
        _classCallCheck(this, StartComponent);

        this.api = api;
        this.route = route;
        this.socket = socket;
        this.router = router;
        this.showPlayerList = false;
        this.nameChosen = false;
        this.playerName = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.players = [];
      }

      _createClass(StartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          console.log(this.route.snapshot.paramMap.get('id')); // window.sessionStorage.clear();

          if (this.route.snapshot.paramMap.get('id')) {
            this.id = this.route.snapshot.paramMap.get('id');
            window.sessionStorage.setItem('gameId', this.id); // if (!window.sessionStorage.getItem('gameId')){
            //   window.sessionStorage.setItem('gameId',this.id)
            // }

            this.showPlayerList = true;

            if (window.sessionStorage.getItem('playerName')) {
              this.playerId = window.sessionStorage.getItem('playerName');
              this.nameChosen = true;
            }
          } else {
            this.router.navigate(['new/']);
          }

          this.api.players.subscribe(function (list) {
            _this5.players = list;
          });
          this.api.getPlayers(this.id);
        }
      }, {
        key: "createPlayer",
        value: function createPlayer(name) {
          var _this6 = this;

          var player = {
            'name': name,
            'role': 'none',
            'dead': false
          };
          console.log(player);
          this.api.newPlayer(player, this.id).subscribe(function (res) {
            // this.players.next(res);
            _this6.playerId = res['name'];
            window.sessionStorage.setItem('playerName', res['name']);

            _this6.api.getPlayers(_this6.id);

            _this6.nameChosen = true;
            console.log('New Player Created', res);
          }); // this.playerId = window.sessionStorage.getItem('playerName');
        }
      }, {
        key: "startGame",
        value: function startGame() {
          var _this7 = this;

          this.api.start(this.id);
          console.log("Start pressed");
          this.socket.getUpdates().subscribe(function () {
            _this7.router.navigate(["game/".concat(_this7.id)]);
          });
        }
      }]);

      return StartComponent;
    }();

    StartComponent.ɵfac = function StartComponent_Factory(t) {
      return new (t || StartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_websocket_service__WEBPACK_IMPORTED_MODULE_4__["WebsocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    StartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StartComponent,
      selectors: [["app-start"]],
      decls: 1,
      vars: 1,
      consts: [[4, "ngIf"], [3, "keyup.enter", 4, "ngIf"], [3, "click"], [4, "ngFor", "ngForOf"], [3, "keyup.enter"], ["type", "text", 3, "formControl"]],
      template: function StartComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, StartComponent_div_0_Template, 11, 4, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showPlayerList);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YXJ0L3N0YXJ0LmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-start',
          templateUrl: './start.component.html',
          styleUrls: ['./start.component.css']
        }]
      }], function () {
        return [{
          type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _websocket_service__WEBPACK_IMPORTED_MODULE_4__["WebsocketService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/vote/vote.component.ts":
  /*!****************************************!*\
    !*** ./src/app/vote/vote.component.ts ***!
    \****************************************/

  /*! exports provided: VoteComponent */

  /***/
  function srcAppVoteVoteComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VoteComponent", function () {
      return VoteComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/list.js");
    /* harmony import */


    var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/collections */
    "./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/collections.js");
    /* harmony import */


    var _websocket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../websocket.service */
    "./src/app/websocket.service.ts");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/icon.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/core.js");

    function VoteComponent_mat_list_option_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-option", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoteComponent_mat_list_option_5_Template_mat_list_option_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var item_r14 = ctx.$implicit;

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r15.vote(item_r14.name);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " face ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r14 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r14.name, " ");
      }
    }

    function VoteComponent_mat_list_item_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r17 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r17[1]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", item_r17[0], " says to hang ", item_r17[1], " ");
      }
    }

    var VoteComponent = /*#__PURE__*/function () {
      function VoteComponent(socket, api) {
        _classCallCheck(this, VoteComponent);

        this.socket = socket;
        this.api = api;
        this.votes = {};
        this.votesArray = [];
        this.players = [];
      }

      _createClass(VoteComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          this.selectionList.selectedOptions = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["SelectionModel"](false);
          var id = window.sessionStorage.getItem("gameId");
          this.player = window.sessionStorage.getItem("playerName");
          this.api.getPlayers(id);
          this.api.players.subscribe(function (list) {
            var alive = [];
            list.forEach(function (element) {
              if (!element.dead) {
                alive.push(element);
              }
            });
            _this8.players = alive;
          });
          this.socket.getVotes().subscribe(function (msg) {
            var vote = JSON.parse(msg);
            _this8.votes[vote.user] = [vote.kill];
            _this8.votesArray = Object.keys(_this8.votes).map(function (key) {
              return [key, _this8.votes[key]];
            });
          });
        }
      }, {
        key: "vote",
        value: function vote(name) {
          var msg = JSON.stringify({
            user: this.player,
            kill: name
          });
          this.socket.vote(msg);
        }
      }]);

      return VoteComponent;
    }();

    VoteComponent.ɵfac = function VoteComponent_Factory(t) {
      return new (t || VoteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_websocket_service__WEBPACK_IMPORTED_MODULE_3__["WebsocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]));
    };

    VoteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: VoteComponent,
      selectors: [["app-vote"]],
      viewQuery: function VoteComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_list__WEBPACK_IMPORTED_MODULE_1__["MatSelectionList"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.selectionList = _t.first);
        }
      },
      decls: 9,
      vars: 2,
      consts: [[1, "row"], [1, "col-6"], ["matSubheader", ""], ["list-item-active", "", 3, "click", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], ["list-item-active", "", 3, "click"], ["matListIcon", ""], ["matLine", ""]],
      template: function VoteComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-selection-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Vote ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, VoteComponent_mat_list_option_5_Template, 4, 1, "mat-list-option", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, VoteComponent_mat_list_item_8_Template, 6, 3, "mat-list-item", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.players);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.votesArray);
        }
      },
      directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_1__["MatSelectionList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_1__["MatListSubheaderCssMatStyler"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_1__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_1__["MatListOption"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_1__["MatListIconCssMatStyler"], _angular_material_list__WEBPACK_IMPORTED_MODULE_1__["MatListItem"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatLine"]],
      styles: [".row[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n.col-6[_ngcontent-%COMP%] {\r\n  width: 50%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdm90ZS92b3RlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxVQUFVO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC92b3RlL3ZvdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG4uY29sLTYge1xyXG4gIHdpZHRoOiA1MCU7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VoteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-vote",
          templateUrl: "./vote.component.html",
          styleUrls: ["./vote.component.css"]
        }]
      }], function () {
        return [{
          type: _websocket_service__WEBPACK_IMPORTED_MODULE_3__["WebsocketService"]
        }, {
          type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
        }];
      }, {
        selectionList: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_angular_material_list__WEBPACK_IMPORTED_MODULE_1__["MatSelectionList"], {
            "static": true
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/websocket.service.ts":
  /*!**************************************!*\
    !*** ./src/app/websocket.service.ts ***!
    \**************************************/

  /*! exports provided: WebsocketService */

  /***/
  function srcAppWebsocketServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WebsocketService", function () {
      return WebsocketService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! socket.io-client */
    "./node_modules/socket.io-client/lib/index.js");
    /* harmony import */


    var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);

    var WebsocketService = /*#__PURE__*/function () {
      function WebsocketService() {
        var _this9 = this;

        _classCallCheck(this, WebsocketService);

        this.url = "http://localhost:9000";

        this.getServerMessages = function () {
          return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
            _this9.socket.on("server", function (message) {
              observer.next(message);
            });
          });
        };

        this.getChatMessages = function () {
          return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
            _this9.socket.on("chat", function (message) {
              observer.next(message);
            });
          });
        };

        this.getMafiaMessages = function () {
          return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
            _this9.socket.on("mafia", function (message) {
              observer.next(message);
            });
          });
        };

        this.getUpdates = function () {
          return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
            _this9.socket.on("update", function (message) {
              observer.next(message);
            });
          });
        };

        this.getVotes = function () {
          return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
            _this9.socket.on("vote", function (message) {
              observer.next(message);
            });
          });
        };

        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__(this.url);
      }

      _createClass(WebsocketService, [{
        key: "sendChatMessage",
        value: function sendChatMessage(msg) {
          this.socket.emit("chat", msg);
          console.log("service message :" + msg);
        }
      }, {
        key: "sendMafiaMessage",
        value: function sendMafiaMessage(msg) {
          this.socket.emit("mafia", msg);
        }
      }, {
        key: "updateRoom",
        value: function updateRoom() {
          this.socket.emit("update", "now");
        }
      }, {
        key: "vote",
        value: function vote(msg) {
          this.socket.emit("vote", msg);
        }
      }, {
        key: "destroy",
        value: function destroy() {
          this.socket.close();
        }
      }]);

      return WebsocketService;
    }();

    WebsocketService.ɵfac = function WebsocketService_Factory(t) {
      return new (t || WebsocketService)();
    };

    WebsocketService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: WebsocketService,
      factory: WebsocketService.ɵfac,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WebsocketService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: "root"
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/welcome/welcome.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/welcome/welcome.component.ts ***!
    \**********************************************/

  /*! exports provided: WelcomeComponent */

  /***/
  function srcAppWelcomeWelcomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function () {
      return WelcomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var WelcomeComponent = /*#__PURE__*/function () {
      function WelcomeComponent(api, router) {
        _classCallCheck(this, WelcomeComponent);

        this.api = api;
        this.router = router;
      }

      _createClass(WelcomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "newgame",
        value: function newgame() {
          var _this10 = this;

          window.sessionStorage.clear();
          this.api.newgame().subscribe(function (res) {
            window.sessionStorage.setItem('gameId', res['id']);
            var id = res['id'];
            _this10.api.id = id;
            console.log('New Game Created', id);

            _this10.router.navigate(["start/".concat(id)]);
          });
        }
      }]);

      return WelcomeComponent;
    }();

    WelcomeComponent.ɵfac = function WelcomeComponent_Factory(t) {
      return new (t || WelcomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    WelcomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WelcomeComponent,
      selectors: [["app-welcome"]],
      decls: 7,
      vars: 0,
      consts: [[3, "click"]],
      template: function WelcomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "welcome works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Start New Game");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WelcomeComponent_Template_button_click_5_listener() {
            return ctx.newgame();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Create New Game");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WelcomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-welcome',
          templateUrl: './welcome.component.html',
          styleUrls: ['./welcome.component.css']
        }]
      }], function () {
        return [{
          type: _api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! F:\Projects\testing\mafiaApp\mafia-app\src\main.ts */
    "./src/main.ts");
    /***/
  },

  /***/
  1:
  /*!********************!*\
    !*** ws (ignored) ***!
    \********************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map