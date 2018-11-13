module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/App.js":
/*!***************************!*\
  !*** ./components/App.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _NameForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NameForm */ "./components/NameForm.js");
/* harmony import */ var _MessageForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MessageForm */ "./components/MessageForm.js");
/* harmony import */ var _MessageList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MessageList */ "./components/MessageList.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! socket.io-client */ "socket.io-client");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/home/shiraishi/\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8/Sound On Live/chat-nextJS/components/App.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }







var App =
/*#__PURE__*/
function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));
    _this.state = {
      messages: [],
      text: '',
      userName: ''
    };
    _this.sendMessage = _this.sendMessage.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.submitUser = _this.submitUser.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_5___default()('localhost:8080');

    _this.socket.on('RECEIVE_MESSAGE', function (data) {// ③
      // メッセージ受信時に実行したいことを記述
    });

    return _this;
  }

  _createClass(App, [{
    key: "sendMessage",
    value: function sendMessage(_ref) {
      var inputMessage = _ref.inputMessage;
      var messages = this.state.messages;
      messages.push({
        text: inputMessage,
        userName: this.state.userName
      });
      this.socket.emit('SEND_MESSAGE', {
        text: inputMessage,
        userName: this.state.userName
      });
      this.setState({
        messages: messages
      });
    }
  }, {
    key: "submitUser",
    value: function submitUser(_ref2) {
      var name = _ref2.name;

      if (name !== this.state.userName) {
        console.log('名前が変わりました');
      }

      this.setState({
        userName: name
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3375255597" + " " + "app",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "jsx-3375255597" + " " + "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, "chat room"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_NameForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
        submitUser: this.submitUser,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_MessageList__WEBPACK_IMPORTED_MODULE_4__["default"], {
        message: this.state.messages,
        name: this.state.userName,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_MessageForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
        sendMessage: this.sendMessage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3375255597",
        css: "h1.jsx-3375255597{font-family:'Arial';}.app.jsx-3375255597{width:95%;height:95%;}.title.jsx-3375255597{width:100%;color:blue;position:fixed;text-align:center;top:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NoaXJhaXNoaS/jg4njgq3jg6Xjg6Hjg7Pjg4gvU291bmQgT24gTGl2ZS9jaGF0LW5leHRKUy9jb21wb25lbnRzL0FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwRG9CLEFBR2lDLEFBR1YsQUFJQyxVQUhBLENBSUEsU0FQYixDQUlBLENBSWlCLGVBQ0csa0JBQ1osTUFDUiIsImZpbGUiOiIvaG9tZS9zaGlyYWlzaGkv44OJ44Kt44Ol44Oh44Oz44OIL1NvdW5kIE9uIExpdmUvY2hhdC1uZXh0SlMvY29tcG9uZW50cy9BcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTmFtZUZvcm0gZnJvbSAnLi9OYW1lRm9ybSdcbmltcG9ydCBNZXNzYWdlRm9ybSBmcm9tICcuL01lc3NhZ2VGb3JtJ1xuaW1wb3J0IE1lc3NhZ2VMaXN0IGZyb20gJy4vTWVzc2FnZUxpc3QnXG5pbXBvcnQgaW8gZnJvbSAnc29ja2V0LmlvLWNsaWVudCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbWVzc2FnZXM6IFtdLFxuICAgICAgdGV4dDogJycsXG4gICAgICB1c2VyTmFtZTogJycsXG4gICAgfVxuICAgIHRoaXMuc2VuZE1lc3NhZ2UgPSB0aGlzLnNlbmRNZXNzYWdlLmJpbmQodGhpcylcbiAgICB0aGlzLnN1Ym1pdFVzZXIgPSB0aGlzLnN1Ym1pdFVzZXIuYmluZCh0aGlzKVxuXG4gICAgdGhpcy5zb2NrZXQgPSBpbygnbG9jYWxob3N0OjgwODAnKVxuXG4gICAgdGhpcy5zb2NrZXQub24oJ1JFQ0VJVkVfTUVTU0FHRScsIChkYXRhKSA9PiB7IC8vIOKRolxuICAgICAgLy8g44Oh44OD44K744O844K45Y+X5L+h5pmC44Gr5a6f6KGM44GX44Gf44GE44GT44Go44KS6KiY6L+wXG4gICAgfSlcbiAgfVxuXG4gIHNlbmRNZXNzYWdlKHsgaW5wdXRNZXNzYWdlIH0pIHtcbiAgICBjb25zdCBtZXNzYWdlcyA9IHRoaXMuc3RhdGUubWVzc2FnZXNcblxuICAgIG1lc3NhZ2VzLnB1c2goe1xuICAgICAgdGV4dDogaW5wdXRNZXNzYWdlLFxuICAgICAgdXNlck5hbWU6IHRoaXMuc3RhdGUudXNlck5hbWUsXG4gICAgfSlcblxuICAgIHRoaXMuc29ja2V0LmVtaXQoJ1NFTkRfTUVTU0FHRScsIHtcbiAgICAgIHRleHQ6IGlucHV0TWVzc2FnZSxcbiAgICAgIHVzZXJOYW1lOiB0aGlzLnN0YXRlLnVzZXJOYW1lLFxuICAgIH0pXG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG1lc3NhZ2VzLFxuICAgIH0pXG4gIH1cblxuICBzdWJtaXRVc2VyKHsgbmFtZSB9KSB7XG4gICAgaWYgKG5hbWUgIT09IHRoaXMuc3RhdGUudXNlck5hbWUpIHtcbiAgICAgIGNvbnNvbGUubG9nKCflkI3liY3jgYzlpInjgo/jgorjgb7jgZfjgZ8nKVxuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHVzZXJOYW1lOiBuYW1lLFxuICAgIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPmNoYXQgcm9vbTwvaDE+XG4gICAgICAgIDxOYW1lRm9ybSBzdWJtaXRVc2VyPXt0aGlzLnN1Ym1pdFVzZXJ9IC8+XG4gICAgICAgIDxNZXNzYWdlTGlzdCBtZXNzYWdlPXt0aGlzLnN0YXRlLm1lc3NhZ2VzfSBuYW1lPXt0aGlzLnN0YXRlLnVzZXJOYW1lfSAvPlxuICAgICAgICA8TWVzc2FnZUZvcm0gc2VuZE1lc3NhZ2U9e3RoaXMuc2VuZE1lc3NhZ2V9IC8+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBoMSB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0FyaWFsJztcbiAgICAgICAgICB9XG4gICAgICAgICAgLmFwcCB7XG4gICAgICAgICAgICB3aWR0aDogOTUlO1xuICAgICAgICAgICAgaGVpZ2h0OiA5NSU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGNvbG9yOiBibHVlO1xuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG4iXX0= */\n/*@ sourceURL=/home/shiraishi/\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8/Sound On Live/chat-nextJS/components/App.js */",
        __self: this
      }));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);



/***/ }),

/***/ "./components/Message.js":
/*!*******************************!*\
  !*** ./components/Message.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Message; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/shiraishi/\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8/Sound On Live/chat-nextJS/components/Message.js";


var name = '';
function Message(props) {
  name = props.name;

  if (props.message.userName !== name) {
    name = props.message.userName;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-4102672195" + " " + "contents",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-4102672195" + " " + "user",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-4102672195" + " " + "userIcon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: "../picture/icon.svg",
      width: "60",
      height: "60",
      className: "jsx-4102672195",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-4102672195" + " " + "userName",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, name)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-4102672195" + " " + "messageBox",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, props.message.text), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-4102672195" + " " + "time",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-4102672195",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, props.time.hour + ':' + props.time.minute)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      styleId: "4102672195",
      css: ".contents.jsx-4102672195{overflow:hidden;margin:1%;padding:1%;width:95%;}.user.jsx-4102672195{float:right;}.userName.jsx-4102672195{font-size:8px, word-wrap:break-word;}.messageBox.jsx-4102672195{background-color:#7f8184;color:#ffffff;border-radius:1.0em 0em 1.0em 1.0em/1.0em 0em 1.0em 1.0em;opacity:1;text-align:left;word-wrap:break-word;min-width:0;max-width:400px;padding:10px;margin:10px;box-shadow:3px 3px 4px rgba(0,0,0,0.3);float:right;}.time.jsx-4102672195{float:right;font-size:15px;margin:10px;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NoaXJhaXNoaS/jg4njgq3jg6Xjg6Hjg7Pjg4gvU291bmQgT24gTGl2ZS9jaGF0LW5leHRKUy9jb21wb25lbnRzL01lc3NhZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0JvQixBQUc2QixBQU1KLEFBSVMsQUFHRyxBQWNaLFlBcEJkLEFBcUJpQixJQTNCTCxTQWFJLENBWkgsQ0EyQkMsU0FsQmQsQ0FSWSxFQVlnRCxBQWV4QyxRQTFCcEIsVUEyQkEsd0NBZlksVUFDTSxnQkFDSyxxQkFDVCxZQUNJLGdCQUNILGFBQ0QsWUFDNEIsdUNBQzVCLFlBQ2QiLCJmaWxlIjoiL2hvbWUvc2hpcmFpc2hpL+ODieOCreODpeODoeODs+ODiC9Tb3VuZCBPbiBMaXZlL2NoYXQtbmV4dEpTL2NvbXBvbmVudHMvTWVzc2FnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcblxubGV0IG5hbWUgPSAnJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZXNzYWdlKHByb3BzKSB7XG4gIG5hbWUgPSBwcm9wcy5uYW1lXG4gIGlmIChwcm9wcy5tZXNzYWdlLnVzZXJOYW1lICE9PSBuYW1lKSB7XG4gICAgbmFtZSA9IHByb3BzLm1lc3NhZ2UudXNlck5hbWVcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50c1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXJJY29uXCI+PGltZyBzcmM9XCIuLi9waWN0dXJlL2ljb24uc3ZnXCIgd2lkdGg9XCI2MFwiIGhlaWdodD1cIjYwXCIgLz48L2Rpdj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ1c2VyTmFtZVwiPntuYW1lfTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZUJveFwiPlxuICAgICAgICAgIHtwcm9wcy5tZXNzYWdlLnRleHR9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbWVcIj5cbiAgICAgICAgICA8cD57cHJvcHMudGltZS5ob3VyICsgJzonICsgcHJvcHMudGltZS5taW51dGV9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5jb250ZW50cyB7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgbWFyZ2luOiAxJTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDElO1xuICAgICAgICAgICAgd2lkdGg6IDk1JTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnVzZXIge1xuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgIH1cbiAgICAgICAgICAudXNlck5hbWUge1xuICAgICAgICAgICAgZm9udC1zaXplOiA4cHgsXG4gICAgICAgICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tZXNzYWdlQm94IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IzdmODE4NDtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMS4wZW0gMGVtIDEuMGVtIDEuMGVtLzEuMGVtIDBlbSAxLjBlbSAxLjBlbTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgICAgICAgICAgbWluLXdpZHRoOiAwO1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAzcHggM3B4IDRweCAgcmdiYSgwLDAsMCwwLjMpO1xuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGltZSB7XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudHNcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VySWNvblwiPjxpbWcgc3JjPVwiLi4vcGljdHVyZS9pY29uLnN2Z1wiIHdpZHRoPVwiNjBcIiBoZWlnaHQ9XCI2MFwiIC8+PC9kaXY+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidXNlck5hbWVcIj57cHJvcHMubWVzc2FnZS51c2VyTmFtZX08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2VCb3hcIj5cbiAgICAgICAgICB7cHJvcHMubWVzc2FnZS50ZXh0fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aW1lXCI+XG4gICAgICAgICAge3Byb3BzLnRpbWUuaG91ciArICcgOiAnICsgcHJvcHMudGltZS5taW51dGV9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmNvbnRlbnRzIHtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICBtYXJnaW46IDElO1xuICAgICAgICAgICAgcGFkZGluZzogMSU7XG4gICAgICAgICAgICB3aWR0aDogOTUlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudXNlciB7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnVzZXJOYW1lIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogOHB4LFxuICAgICAgICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubWVzc2FnZUJveCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMyYWEzO1xuICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwZW0gMS4wZW0gMS4wZW0gMS4wZW0vMGVtIDEuMGVtIDEuMGVtIDEuMGVtO1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDA7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDNweCAzcHggNHB4IHJnYmEoMCwwLDAsMC4zKTtcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGltZSB7ICAgICAgICAgICAgXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuIl19 */\n/*@ sourceURL=/home/shiraishi/\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8/Sound On Live/chat-nextJS/components/Message.js */",
      __self: this
    }));
  } else {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-143770506" + " " + "contents",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-143770506" + " " + "user",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-143770506" + " " + "userIcon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: "../picture/icon.svg",
      width: "60",
      height: "60",
      className: "jsx-143770506",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-143770506" + " " + "userName",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, props.message.userName)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-143770506" + " " + "messageBox",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, props.message.text), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-143770506" + " " + "time",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, props.time.hour + ' : ' + props.time.minute), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      styleId: "143770506",
      css: ".contents.jsx-143770506{overflow:hidden;margin:1%;padding:1%;width:95%;}.user.jsx-143770506{float:left;}.userName.jsx-143770506{font-size:8px, word-wrap:break-word;}.messageBox.jsx-143770506{background-color:#332aa3;color:#ffffff;border-radius:0em 1.0em 1.0em 1.0em/0em 1.0em 1.0em 1.0em;opacity:1;text-align:left;word-wrap:break-word;min-width:0;max-width:400px;padding:10px;margin:10px;box-shadow:3px 3px 4px rgba(0,0,0,0.3);float:left;}.time.jsx-143770506{float:left;font-size:15px;margin:10px;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NoaXJhaXNoaS/jg4njgq3jg6Xjg6Hjg7Pjg4gvU291bmQgT24gTGl2ZS9jaGF0LW5leHRKUy9jb21wb25lbnRzL01lc3NhZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0VvQixBQUc2QixBQU1MLEFBSVUsQUFHSSxBQWNkLFdBcEJiLEFBcUJpQixLQTNCTCxTQWFJLENBWkgsQUEyQkMsVUFsQmQsQ0FSWSxDQTJCUSxDQWZ3QyxRQVg1RCxTQTJCQSx5Q0FmWSxVQUNNLGdCQUNLLHFCQUNULFlBQ0ksZ0JBQ0gsYUFDRCxZQUMyQix1Q0FDNUIsV0FDYiIsImZpbGUiOiIvaG9tZS9zaGlyYWlzaGkv44OJ44Kt44Ol44Oh44Oz44OIL1NvdW5kIE9uIExpdmUvY2hhdC1uZXh0SlMvY29tcG9uZW50cy9NZXNzYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuXG5sZXQgbmFtZSA9ICcnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1lc3NhZ2UocHJvcHMpIHtcbiAgbmFtZSA9IHByb3BzLm5hbWVcbiAgaWYgKHByb3BzLm1lc3NhZ2UudXNlck5hbWUgIT09IG5hbWUpIHtcbiAgICBuYW1lID0gcHJvcHMubWVzc2FnZS51c2VyTmFtZVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRzXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlckljb25cIj48aW1nIHNyYz1cIi4uL3BpY3R1cmUvaWNvbi5zdmdcIiB3aWR0aD1cIjYwXCIgaGVpZ2h0PVwiNjBcIiAvPjwvZGl2PlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInVzZXJOYW1lXCI+e25hbWV9PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlQm94XCI+XG4gICAgICAgICAge3Byb3BzLm1lc3NhZ2UudGV4dH1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGltZVwiPlxuICAgICAgICAgIDxwPntwcm9wcy50aW1lLmhvdXIgKyAnOicgKyBwcm9wcy50aW1lLm1pbnV0ZX08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmNvbnRlbnRzIHtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICBtYXJnaW46IDElO1xuICAgICAgICAgICAgcGFkZGluZzogMSU7XG4gICAgICAgICAgICB3aWR0aDogOTUlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudXNlciB7XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC51c2VyTmFtZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDhweCxcbiAgICAgICAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm1lc3NhZ2VCb3gge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojN2Y4MTg0O1xuICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxLjBlbSAwZW0gMS4wZW0gMS4wZW0vMS4wZW0gMGVtIDEuMGVtIDEuMGVtO1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDA7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDNweCAzcHggNHB4ICByZ2JhKDAsMCwwLDAuMyk7XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50aW1lIHtcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50c1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXJJY29uXCI+PGltZyBzcmM9XCIuLi9waWN0dXJlL2ljb24uc3ZnXCIgd2lkdGg9XCI2MFwiIGhlaWdodD1cIjYwXCIgLz48L2Rpdj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ1c2VyTmFtZVwiPntwcm9wcy5tZXNzYWdlLnVzZXJOYW1lfTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZUJveFwiPlxuICAgICAgICAgIHtwcm9wcy5tZXNzYWdlLnRleHR9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbWVcIj5cbiAgICAgICAgICB7cHJvcHMudGltZS5ob3VyICsgJyA6ICcgKyBwcm9wcy50aW1lLm1pbnV0ZX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuY29udGVudHMge1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIG1hcmdpbjogMSU7XG4gICAgICAgICAgICBwYWRkaW5nOiAxJTtcbiAgICAgICAgICAgIHdpZHRoOiA5NSU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC51c2VyIHtcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgIH1cbiAgICAgICAgICAudXNlck5hbWUge1xuICAgICAgICAgICAgZm9udC1zaXplOiA4cHgsXG4gICAgICAgICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tZXNzYWdlQm94IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzJhYTM7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDBlbSAxLjBlbSAxLjBlbSAxLjBlbS8wZW0gMS4wZW0gMS4wZW0gMS4wZW07XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICAgICAgICAgIG1pbi13aWR0aDogMDtcbiAgICAgICAgICAgIG1heC13aWR0aDogNDAwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICAgICAgYm94LXNoYWRvdzogM3B4IDNweCA0cHggcmdiYSgwLDAsMCwwLjMpO1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50aW1lIHsgICAgICAgICAgICBcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG4iXX0= */\n/*@ sourceURL=/home/shiraishi/\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8/Sound On Live/chat-nextJS/components/Message.js */",
      __self: this
    }));
  }
}

/***/ }),

/***/ "./components/MessageForm.js":
/*!***********************************!*\
  !*** ./components/MessageForm.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MessageForm; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/shiraishi/\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8/Sound On Live/chat-nextJS/components/MessageForm.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }



var MessageForm =
/*#__PURE__*/
function (_Component) {
  _inherits(MessageForm, _Component);

  function MessageForm(props) {
    var _this;

    _classCallCheck(this, MessageForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MessageForm).call(this, props));
    _this.state = {
      inputMessage: ''
    };
    _this.typeMessage = _this.typeMessage.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.buttonClick = _this.buttonClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(MessageForm, [{
    key: "typeMessage",
    value: function typeMessage(e) {
      this.setState({
        inputMessage: e.target.value
      });
    }
  }, {
    key: "buttonClick",
    value: function buttonClick(e) {
      e.preventDefault();
      var inputMessage = this.state;
      this.props.sendMessage(inputMessage);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
        onSubmit: this.buttonClick,
        className: "jsx-2039644417" + " " + "form",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        id: "message",
        placeholder: "\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",
        value: this.state.inputMessage,
        onChange: this.typeMessage,
        className: "jsx-2039644417",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        id: "send",
        type: "submit",
        className: "jsx-2039644417",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, "send"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "2039644417",
        css: ".form.jsx-2039644417{border-radius:5px;background:#FF8C00;position:absolute;bottom:0;width:50%;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);}#message.jsx-2039644417{border:1px solid #ccc;border-radius:5px;padding:2px 7px;background:#fff;outline:0;width:85%;margin-left:1%;}#send.jsx-2039644417{margin:1%;border:1px solid #fff;border-radius:5px;padding:2px 7px;outline:0;background:white;width:10%;margin-right:0.5%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NoaXJhaXNoaS/jg4njgq3jg6Xjg6Hjg7Pjg4gvU291bmQgT24gTGl2ZS9jaGF0LW5leHRKUy9jb21wb25lbnRzL01lc3NhZ2VGb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZCb0IsQUFHK0IsQUFTSSxBQVNaLFVBQ1ksUUFsQkgsSUFTRCxVQVVBLEtBbEJBLEdBU0YsVUFVQSxLQWxCUCxDQVNPLFFBUk4sRUFrQkEsTUFUQSxFQVJELEVBa0JRLE1BVFAsQ0FSZ0IsU0FTWCxDQVNMLFVBQ1EsSUFUcEIsY0FVQSx1REFuQkEiLCJmaWxlIjoiL2hvbWUvc2hpcmFpc2hpL+ODieOCreODpeODoeODs+ODiC9Tb3VuZCBPbiBMaXZlL2NoYXQtbmV4dEpTL2NvbXBvbmVudHMvTWVzc2FnZUZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lc3NhZ2VGb3JtIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaW5wdXRNZXNzYWdlOiAnJyxcbiAgICB9XG4gICAgdGhpcy50eXBlTWVzc2FnZSA9IHRoaXMudHlwZU1lc3NhZ2UuYmluZCh0aGlzKVxuICAgIHRoaXMuYnV0dG9uQ2xpY2sgPSB0aGlzLmJ1dHRvbkNsaWNrLmJpbmQodGhpcylcbiAgfVxuXG4gIHR5cGVNZXNzYWdlKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlucHV0TWVzc2FnZTogZS50YXJnZXQudmFsdWUsXG4gICAgfSlcbiAgfVxuXG4gIGJ1dHRvbkNsaWNrKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBjb25zdCBpbnB1dE1lc3NhZ2UgPSB0aGlzLnN0YXRlXG4gICAgdGhpcy5wcm9wcy5zZW5kTWVzc2FnZShpbnB1dE1lc3NhZ2UpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZvcm1cIiBvblN1Ym1pdD17dGhpcy5idXR0b25DbGlja30+XG4gICAgICAgIDxpbnB1dCBpZD1cIm1lc3NhZ2VcIiBwbGFjZWhvbGRlcj1cIuWFpeWKm+OBl+OBpuOBj+OBoOOBleOBhFwiIHZhbHVlPXt0aGlzLnN0YXRlLmlucHV0TWVzc2FnZX0gb25DaGFuZ2U9e3RoaXMudHlwZU1lc3NhZ2V9IC8+XG4gICAgICAgIDxidXR0b24gaWQ9XCJzZW5kXCIgdHlwZT1cInN1Ym1pdFwiPnNlbmQ8L2J1dHRvbj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5mb3JtIHtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGRjhDMDA7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgdHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgICAgICAgfVxuICAgICAgICAgICNtZXNzYWdlIHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAycHggN3B4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgIG91dGxpbmU6IDA7XG4gICAgICAgICAgICB3aWR0aDogODUlO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDElO1xuICAgICAgICAgIH1cbiAgICAgICAgICAjc2VuZCB7XG4gICAgICAgICAgICBtYXJnaW46IDElO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDJweCA3cHg7XG4gICAgICAgICAgICBvdXRsaW5lOiAwO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICB3aWR0aDogMTAlO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjUlO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9mb3JtPlxuICAgIClcbiAgfVxufVxuIl19 */\n/*@ sourceURL=/home/shiraishi/\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8/Sound On Live/chat-nextJS/components/MessageForm.js */",
        __self: this
      }));
    }
  }]);

  return MessageForm;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);



/***/ }),

/***/ "./components/MessageList.js":
/*!***********************************!*\
  !*** ./components/MessageList.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MessageList; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Message */ "./components/Message.js");
var _jsxFileName = "/home/shiraishi/\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8/Sound On Live/chat-nextJS/components/MessageList.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var MessageList =
/*#__PURE__*/
function (_Component) {
  _inherits(MessageList, _Component);

  function MessageList(props) {
    _classCallCheck(this, MessageList);

    return _possibleConstructorReturn(this, _getPrototypeOf(MessageList).call(this, props));
  }

  _createClass(MessageList, [{
    key: "render",
    value: function render() {
      var _this = this;

      var date = new Date();
      var month = date.getMonth() + 1;
      var day = date.getDate();
      var hour = date.getHours();
      var minute = date.getMinutes();
      var time = {
        hour: hour,
        minute: minute
      };
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-4284749246" + " " + "messages",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-4284749246" + " " + "date",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, '-------------- ' + month + '月' + day + '日' + ' --------------'), this.props.message.map(function (m, i) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Message__WEBPACK_IMPORTED_MODULE_2__["default"], {
          message: m,
          key: i,
          name: _this.props.name,
          time: time,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: this
        });
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "4284749246",
        css: ".date.jsx-4284749246{width:95%;margin:15px;padding:auto;}.messages.jsx-4284749246{border:1px solid #aaa;overflow:auto;width:50%;height:70%;top:0;bottom:0;left:0;right:0;position:absolute;margin:auto;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NoaXJhaXNoaS/jg4njgq3jg6Xjg6Hjg7Pjg4gvU291bmQgT24gTGl2ZS9jaGF0LW5leHRKUy9jb21wb25lbnRzL01lc3NhZ2VMaXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRCb0IsQUFHdUIsQUFLWSxVQUpWLFlBQ0MsQUFJQyxhQUhoQixDQUlZLFVBQ0MsV0FDTCxNQUNHLFNBQ0YsT0FDQyxRQUNVLGtCQUNOLFlBQ00sa0JBQ3BCIiwiZmlsZSI6Ii9ob21lL3NoaXJhaXNoaS/jg4njgq3jg6Xjg6Hjg7Pjg4gvU291bmQgT24gTGl2ZS9jaGF0LW5leHRKUy9jb21wb25lbnRzL01lc3NhZ2VMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IE1lc3NhZ2UgZnJvbSAnLi9NZXNzYWdlJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXNzYWdlTGlzdCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKClcbiAgICBjb25zdCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIDFcbiAgICBjb25zdCBkYXkgPSBkYXRlLmdldERhdGUoKVxuICAgIGNvbnN0IGhvdXIgPSBkYXRlLmdldEhvdXJzKClcbiAgICBjb25zdCBtaW51dGUgPSBkYXRlLmdldE1pbnV0ZXMoKVxuICAgIGNvbnN0IHRpbWUgPSB7XG4gICAgICBob3VyOiBob3VyLFxuICAgICAgbWludXRlOiBtaW51dGUsXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2VzXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0ZVwiPlxuICAgICAgICAgIHsnLS0tLS0tLS0tLS0tLS0gJyArIG1vbnRoICsgJ+aciCcgKyBkYXkgKyAn5pelJyArICcgLS0tLS0tLS0tLS0tLS0nfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge1xuICAgICAgICAgIHRoaXMucHJvcHMubWVzc2FnZS5tYXAoKG0sIGkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiA8TWVzc2FnZSBtZXNzYWdlPXttfSBrZXk9e2l9IG5hbWU9e3RoaXMucHJvcHMubmFtZX0gdGltZT17dGltZX0gLz5cbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuZGF0ZSB7XG4gICAgICAgICAgICB3aWR0aDogOTUlO1xuICAgICAgICAgICAgbWFyZ2luOiAxNXB4O1xuICAgICAgICAgICAgcGFkZGluZzogYXV0bztcbiAgICAgICAgICB9XG4gICAgICAgICAgLm1lc3NhZ2VzIHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNhYWE7XG4gICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDcwJTtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuIl19 */\n/*@ sourceURL=/home/shiraishi/\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8/Sound On Live/chat-nextJS/components/MessageList.js */",
        __self: this
      }));
    }
  }]);

  return MessageList;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);



/***/ }),

/***/ "./components/NameForm.js":
/*!********************************!*\
  !*** ./components/NameForm.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NameForm; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/shiraishi/\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8/Sound On Live/chat-nextJS/components/NameForm.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }



var NameForm =
/*#__PURE__*/
function (_Component) {
  _inherits(NameForm, _Component);

  function NameForm(props) {
    var _this;

    _classCallCheck(this, NameForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NameForm).call(this, props));
    _this.state = {
      name: ''
    };
    _this.buttonClick = _this.buttonClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.typeName = _this.typeName.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(NameForm, [{
    key: "buttonClick",
    value: function buttonClick(e) {
      e.preventDefault();
      var name = this.state;
      this.props.submitUser(name);
    }
  }, {
    key: "typeName",
    value: function typeName(e) {
      this.setState({
        name: e.target.value
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
        onSubmit: this.buttonClick,
        className: "jsx-570863273",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        id: "name",
        placeholder: "name",
        value: this.state.name,
        onChange: this.typeName,
        className: "jsx-570863273",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        id: "submit",
        className: "jsx-570863273",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, "submit"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "570863273",
        css: "form.jsx-570863273{position:relative;left:20px;top:20%;}input.jsx-570863273{border:1px solid #ccc;border-radius:5px;padding:2px 8px;background:none;outline:0;width:100px;}#submit.jsx-570863273{margin:1%;border:1px solid #00f;border-radius:5px;padding:2px 7px;outline:0;color:white;background:blue;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NoaXJhaXNoaS/jg4njgq3jg6Xjg6Hjg7Pjg4gvU291bmQgT24gTGl2ZS9jaGF0LW5leHRKUy9jb21wb25lbnRzL05hbWVGb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZCb0IsQUFHK0IsQUFLSSxBQVFaLFVBQ1ksUUFiWixJQUtRLE1BSlYsSUFhVSxJQVpwQixJQUlrQixVQVNBLE1BUkEsVUFTTixNQVJBLElBU0UsTUFSQSxNQVNJLE1BUmxCLFVBU0EiLCJmaWxlIjoiL2hvbWUvc2hpcmFpc2hpL+ODieOCreODpeODoeODs+ODiC9Tb3VuZCBPbiBMaXZlL2NoYXQtbmV4dEpTL2NvbXBvbmVudHMvTmFtZUZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hbWVGb3JtIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbmFtZTogJycsXG4gICAgfVxuICAgIHRoaXMuYnV0dG9uQ2xpY2sgPSB0aGlzLmJ1dHRvbkNsaWNrLmJpbmQodGhpcylcbiAgICB0aGlzLnR5cGVOYW1lID0gdGhpcy50eXBlTmFtZS5iaW5kKHRoaXMpXG4gIH1cblxuICBidXR0b25DbGljayhlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgY29uc3QgbmFtZSA9IHRoaXMuc3RhdGVcbiAgICB0aGlzLnByb3BzLnN1Ym1pdFVzZXIobmFtZSlcbiAgfVxuXG4gIHR5cGVOYW1lKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG5hbWU6IGUudGFyZ2V0LnZhbHVlLFxuICAgIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmJ1dHRvbkNsaWNrfT5cbiAgICAgICAgPGlucHV0IGlkPVwibmFtZVwiIHBsYWNlaG9sZGVyPVwibmFtZVwiIHZhbHVlPXt0aGlzLnN0YXRlLm5hbWV9IG9uQ2hhbmdlPXt0aGlzLnR5cGVOYW1lfSAvPlxuICAgICAgICA8YnV0dG9uIGlkPVwic3VibWl0XCI+c3VibWl0PC9idXR0b24+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBmb3JtIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGxlZnQ6IDIwcHg7XG4gICAgICAgICAgICB0b3A6IDIwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaW5wdXQge1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDJweCA4cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICAgICAgb3V0bGluZTogMDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgI3N1Ym1pdCB7XG4gICAgICAgICAgICBtYXJnaW46IDElO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwZjtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDJweCA3cHg7XG4gICAgICAgICAgICBvdXRsaW5lOiAwO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogYmx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZm9ybT5cbiAgICApXG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/home/shiraishi/\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8/Sound On Live/chat-nextJS/components/NameForm.js */",
        __self: this
      }));
    }
  }]);

  return NameForm;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);



/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/App */ "./components/App.js");
var _jsxFileName = "/home/shiraishi/\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8/Sound On Live/chat-nextJS/pages/index.js";


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_App__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  });
});

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "socket.io-client":
/*!***********************************!*\
  !*** external "socket.io-client" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("socket.io-client");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map