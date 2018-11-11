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




 // import io from 'socket.io-client'

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
      Number: 1,
      Name: ''
    };
    _this.sendMessage = _this.sendMessage.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.submitUser = _this.submitUser.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(App, [{
    key: "sendMessage",
    value: function sendMessage(_ref) {
      var inputMessage = _ref.inputMessage;
      var _this$state = this.state,
          messages = _this$state.messages,
          Number = _this$state.Number,
          Name = _this$state.Name;
      messages.push({
        message: inputMessage,
        number: Number,
        name: Name
      });
      this.setState({
        messages: messages,
        Number: Number + 1
      });
    }
  }, {
    key: "submitUser",
    value: function submitUser(_ref2) {
      var name = _ref2.name;

      if (name !== this.state.Name) {
        console.log('名前が変わりました');
      }

      this.setState({
        Name: name
      });
      console.log(this.state);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3093493464" + " " + "app",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "jsx-3093493464" + " " + "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, "chat room"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_NameForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
        submitUser: this.submitUser,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_MessageList__WEBPACK_IMPORTED_MODULE_4__["default"], {
        className: "ML",
        messages: this.state.messages,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_MessageForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
        sendMessage: this.sendMessage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3093493464",
        css: "h1.jsx-3093493464{font-family:'Arial';}.app.jsx-3093493464{width:95%;height:95vh;}.title.jsx-3093493464{width:100%;color:blue;position:fixed;text-align:center;top:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NoaXJhaXNoaS/jg4njgq3jg6Xjg6Hjg7Pjg4gvU291bmQgT24gTGl2ZS9jaGF0LW5leHRKUy9jb21wb25lbnRzL0FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvRG9CLEFBR2lDLEFBR1YsQUFJQyxVQUhDLENBSUQsU0FQYixFQUlBLEFBSWlCLGVBQ0csa0JBQ1osTUFDUiIsImZpbGUiOiIvaG9tZS9zaGlyYWlzaGkv44OJ44Kt44Ol44Oh44Oz44OIL1NvdW5kIE9uIExpdmUvY2hhdC1uZXh0SlMvY29tcG9uZW50cy9BcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTmFtZUZvcm0gZnJvbSAnLi9OYW1lRm9ybSdcbmltcG9ydCBNZXNzYWdlRm9ybSBmcm9tICcuL01lc3NhZ2VGb3JtJ1xuaW1wb3J0IE1lc3NhZ2VMaXN0IGZyb20gJy4vTWVzc2FnZUxpc3QnXG4vLyBpbXBvcnQgaW8gZnJvbSAnc29ja2V0LmlvLWNsaWVudCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbWVzc2FnZXM6IFtdLFxuICAgICAgTnVtYmVyOiAxLFxuICAgICAgTmFtZTogJycsXG4gICAgfVxuICAgIHRoaXMuc2VuZE1lc3NhZ2UgPSB0aGlzLnNlbmRNZXNzYWdlLmJpbmQodGhpcylcbiAgICB0aGlzLnN1Ym1pdFVzZXIgPSB0aGlzLnN1Ym1pdFVzZXIuYmluZCh0aGlzKVxuICB9XG5cbiAgc2VuZE1lc3NhZ2UoeyBpbnB1dE1lc3NhZ2UgfSkge1xuICAgIGNvbnN0IHtcbiAgICAgIG1lc3NhZ2VzLCBOdW1iZXIsIE5hbWUsXG4gICAgfSA9IHRoaXMuc3RhdGVcblxuICAgIG1lc3NhZ2VzLnB1c2goe1xuICAgICAgbWVzc2FnZTogaW5wdXRNZXNzYWdlLFxuICAgICAgbnVtYmVyOiBOdW1iZXIsXG4gICAgICBuYW1lOiBOYW1lLFxuICAgIH0pXG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG1lc3NhZ2VzLFxuICAgICAgTnVtYmVyOiBOdW1iZXIgKyAxLFxuICAgIH0pXG4gIH1cblxuICBzdWJtaXRVc2VyKHsgbmFtZSB9KSB7XG4gICAgaWYgKG5hbWUgIT09IHRoaXMuc3RhdGUuTmFtZSkge1xuICAgICAgY29uc29sZS5sb2coJ+WQjeWJjeOBjOWkieOCj+OCiuOBvuOBl+OBnycpXG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgTmFtZTogbmFtZSxcbiAgICB9KVxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPmNoYXQgcm9vbTwvaDE+XG4gICAgICAgIDxOYW1lRm9ybSBzdWJtaXRVc2VyPXt0aGlzLnN1Ym1pdFVzZXJ9IC8+XG4gICAgICAgIDxNZXNzYWdlTGlzdCBjbGFzc05hbWU9XCJNTFwiIG1lc3NhZ2VzPXt0aGlzLnN0YXRlLm1lc3NhZ2VzfSAvPlxuICAgICAgICA8TWVzc2FnZUZvcm0gc2VuZE1lc3NhZ2U9e3RoaXMuc2VuZE1lc3NhZ2V9IC8+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBoMSB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0FyaWFsJztcbiAgICAgICAgICB9XG4gICAgICAgICAgLmFwcCB7XG4gICAgICAgICAgICB3aWR0aDogOTUlO1xuICAgICAgICAgICAgaGVpZ2h0OiA5NXZoO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBjb2xvcjogYmx1ZTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuIl19 */\n/*@ sourceURL=/home/shiraishi/\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8/Sound On Live/chat-nextJS/components/App.js */",
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


function Message(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1379648548" + " " + "contents",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1379648548" + " " + "userIcon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "../picture/icon.svg",
    width: "40",
    height: "40",
    className: "jsx-1379648548",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1379648548" + " " + "messageBox",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, props.message), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1379648548",
    css: ".contents.jsx-1379648548{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;display:-moz-flex;display:-o-flex;display:-webkit-flex;display:-ms-flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-moz-flex-direction:row;-o-flex-direction:row;-webkit-flex-direction:row;-ms-flex-direction:row;float:right;}.messageBox.jsx-1379648548{background-color:#332aa3;color:#ffffff;border-radius:0em 1.0em 1.0em 1.0em/0em 1.0em 1.0em 1.0em;opacity:1;text-align:left;word-wrap:break-word;min-width:0;max-width:400px;padding:10px;margin:10px;box-shadow:3px 3px 4px rgba(0,0,0,0.3);float:right;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NoaXJhaXNoaS/jg4njgq3jg6Xjg6Hjg7Pjg4gvU291bmQgT24gTGl2ZS9jaGF0LW5leHRKUy9jb21wb25lbnRzL01lc3NhZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU2tCLEFBR3dCLEFBYVkseUJBQ1gsY0FDNEMsbUNBZHhDLGtCQUNGLEtBY04sVUFDTSxDQWRLLGVBZUEsTUFkSixlQWVMLEVBZE8sVUFlSCxnQkFDSCxhQUNELFlBQzRCLGtCQWpCaEIscUJBa0JaLEdBakJVLFNBa0J4QixhQWpCNkIsMkJBQ0osdUJBQ1gsWUFDZCIsImZpbGUiOiIvaG9tZS9zaGlyYWlzaGkv44OJ44Kt44Ol44Oh44Oz44OIL1NvdW5kIE9uIExpdmUvY2hhdC1uZXh0SlMvY29tcG9uZW50cy9NZXNzYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZXNzYWdlKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50c1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VySWNvblwiPjxpbWcgc3JjPVwiLi4vcGljdHVyZS9pY29uLnN2Z1wiIHdpZHRoPVwiNDBcIiBoZWlnaHQ9XCI0MFwiIC8+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2VCb3hcIj5cbiAgICAgICAge3Byb3BzLm1lc3NhZ2V9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmNvbnRlbnRzIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGRpc3BsYXk6IC1tb3otZmxleDtcbiAgICAgICAgICBkaXNwbGF5OiAtby1mbGV4O1xuICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgICAgICBkaXNwbGF5OiAtbXMtZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgIC1tb3otZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAtby1mbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgLm1lc3NhZ2VCb3gge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzJhYTM7XG4gICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMGVtIDEuMGVtIDEuMGVtIDEuMGVtLzBlbSAxLjBlbSAxLjBlbSAxLjBlbTtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgICAgICAgIG1pbi13aWR0aDogMDtcbiAgICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICAgIGJveC1zaGFkb3c6IDNweCAzcHggNHB4ICByZ2JhKDAsMCwwLDAuMyk7XG4gICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdfQ== */\n/*@ sourceURL=/home/shiraishi/\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8/Sound On Live/chat-nextJS/components/Message.js */",
    __self: this
  }));
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
        value: this.state.message,
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
        css: ".form.jsx-2039644417{border-radius:5px;background:#FF8C00;position:absolute;bottom:0;width:50%;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);}#message.jsx-2039644417{border:1px solid #ccc;border-radius:5px;padding:2px 7px;background:#fff;outline:0;width:85%;margin-left:1%;}#send.jsx-2039644417{margin:1%;border:1px solid #fff;border-radius:5px;padding:2px 7px;outline:0;background:white;width:10%;margin-right:0.5%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NoaXJhaXNoaS/jg4njgq3jg6Xjg6Hjg7Pjg4gvU291bmQgT24gTGl2ZS9jaGF0LW5leHRKUy9jb21wb25lbnRzL01lc3NhZ2VGb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZCb0IsQUFHK0IsQUFTSSxBQVNaLFVBQ1ksUUFsQkgsSUFTRCxVQVVBLEtBbEJBLEdBU0YsVUFVQSxLQWxCUCxDQVNPLFFBUk4sRUFrQkEsTUFUQSxFQVJELEVBa0JRLE1BVFAsQ0FSZ0IsU0FTWCxDQVNMLFVBQ1EsSUFUcEIsY0FVQSx1REFuQkEiLCJmaWxlIjoiL2hvbWUvc2hpcmFpc2hpL+ODieOCreODpeODoeODs+ODiC9Tb3VuZCBPbiBMaXZlL2NoYXQtbmV4dEpTL2NvbXBvbmVudHMvTWVzc2FnZUZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lc3NhZ2VGb3JtIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaW5wdXRNZXNzYWdlOiAnJyxcbiAgICB9XG4gICAgdGhpcy50eXBlTWVzc2FnZSA9IHRoaXMudHlwZU1lc3NhZ2UuYmluZCh0aGlzKVxuICAgIHRoaXMuYnV0dG9uQ2xpY2sgPSB0aGlzLmJ1dHRvbkNsaWNrLmJpbmQodGhpcylcbiAgfVxuXG4gIHR5cGVNZXNzYWdlKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlucHV0TWVzc2FnZTogZS50YXJnZXQudmFsdWUsXG4gICAgfSlcbiAgfVxuXG4gIGJ1dHRvbkNsaWNrKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBjb25zdCBpbnB1dE1lc3NhZ2UgPSB0aGlzLnN0YXRlXG4gICAgdGhpcy5wcm9wcy5zZW5kTWVzc2FnZShpbnB1dE1lc3NhZ2UpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZvcm1cIiBvblN1Ym1pdD17dGhpcy5idXR0b25DbGlja30+XG4gICAgICAgIDxpbnB1dCBpZD1cIm1lc3NhZ2VcIiBwbGFjZWhvbGRlcj1cIuWFpeWKm+OBl+OBpuOBj+OBoOOBleOBhFwiIHZhbHVlPXt0aGlzLnN0YXRlLm1lc3NhZ2V9IG9uQ2hhbmdlPXt0aGlzLnR5cGVNZXNzYWdlfSAvPlxuICAgICAgICA8YnV0dG9uIGlkPVwic2VuZFwiIHR5cGU9XCJzdWJtaXRcIj5zZW5kPC9idXR0b24+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuZm9ybSB7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRkY4QzAwO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVYKC01MCUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAjbWVzc2FnZSB7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgcGFkZGluZzogMnB4IDdweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICBvdXRsaW5lOiAwO1xuICAgICAgICAgICAgd2lkdGg6IDg1JTtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgI3NlbmQge1xuICAgICAgICAgICAgbWFyZ2luOiAxJTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAycHggN3B4O1xuICAgICAgICAgICAgb3V0bGluZTogMDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgd2lkdGg6IDEwJTtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMC41JTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZm9ybT5cbiAgICApXG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/home/shiraishi/\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8/Sound On Live/chat-nextJS/components/MessageForm.js */",
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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

  function MessageList() {
    _classCallCheck(this, MessageList);

    return _possibleConstructorReturn(this, _getPrototypeOf(MessageList).apply(this, arguments));
  }

  _createClass(MessageList, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-487773690" + " " + "messages",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      }, this.props.messages.map(function (message) {
        console.log(message);
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Message__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, message, {
          key: message.number,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          },
          __self: this
        }));
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "487773690",
        css: ".messages.jsx-487773690{overflow:auto;width:50%;height:70vh;position:relative;margin-left:auto;margin-right:auto;top:12%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NoaXJhaXNoaS/jg4njgq3jg6Xjg6Hjg7Pjg4gvU291bmQgT24gTGl2ZS9jaGF0LW5leHRKUy9jb21wb25lbnRzL01lc3NhZ2VMaXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFvQixBQUcyQixjQUNKLFVBQ0UsWUFDTSxrQkFDRCxpQkFDQyxrQkFDVixRQUNWIiwiZmlsZSI6Ii9ob21lL3NoaXJhaXNoaS/jg4njgq3jg6Xjg6Hjg7Pjg4gvU291bmQgT24gTGl2ZS9jaGF0LW5leHRKUy9jb21wb25lbnRzL01lc3NhZ2VMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IE1lc3NhZ2UgZnJvbSAnLi9NZXNzYWdlJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXNzYWdlTGlzdCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlc1wiPlxuICAgICAgICB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5tZXNzYWdlcy5tYXAoKG1lc3NhZ2UpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpXG4gICAgICAgICAgICByZXR1cm4gPE1lc3NhZ2Ugey4uLm1lc3NhZ2V9IGtleT17bWVzc2FnZS5udW1iZXJ9IC8+XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLm1lc3NhZ2VzIHtcbiAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgIGhlaWdodDogNzB2aDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgdG9wOiAxMiU7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/home/shiraishi/\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8/Sound On Live/chat-nextJS/components/MessageList.js */",
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