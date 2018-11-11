webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/App.js":
/*!***************************!*\
  !*** ./components/App.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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
        className: "jsx-1678047625" + " " + "app",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "jsx-1678047625" + " " + "title",
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
        styleId: "1678047625",
        css: "h1.jsx-1678047625{font-family:'Arial';}.app.jsx-1678047625{width:100%;height:100vh;}.title.jsx-1678047625{width:100%;color:blue;position:fixed;text-align:center;top:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NoaXJhaXNoaS/jg4njgq3jg6Xjg6Hjg7Pjg4gvU291bmQgT24gTGl2ZS9jaGF0LW5leHRKUy9jb21wb25lbnRzL0FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvRG9CLEFBR2lDLEFBR1QsQUFJQSxXQUhFLEFBSUYsU0FQYixFQVFpQixFQUpqQixhQUtvQixrQkFDWixNQUNSIiwiZmlsZSI6Ii9ob21lL3NoaXJhaXNoaS/jg4njgq3jg6Xjg6Hjg7Pjg4gvU291bmQgT24gTGl2ZS9jaGF0LW5leHRKUy9jb21wb25lbnRzL0FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBOYW1lRm9ybSBmcm9tICcuL05hbWVGb3JtJ1xuaW1wb3J0IE1lc3NhZ2VGb3JtIGZyb20gJy4vTWVzc2FnZUZvcm0nXG5pbXBvcnQgTWVzc2FnZUxpc3QgZnJvbSAnLi9NZXNzYWdlTGlzdCdcbi8vIGltcG9ydCBpbyBmcm9tICdzb2NrZXQuaW8tY2xpZW50J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBtZXNzYWdlczogW10sXG4gICAgICBOdW1iZXI6IDEsXG4gICAgICBOYW1lOiAnJyxcbiAgICB9XG4gICAgdGhpcy5zZW5kTWVzc2FnZSA9IHRoaXMuc2VuZE1lc3NhZ2UuYmluZCh0aGlzKVxuICAgIHRoaXMuc3VibWl0VXNlciA9IHRoaXMuc3VibWl0VXNlci5iaW5kKHRoaXMpXG4gIH1cblxuICBzZW5kTWVzc2FnZSh7IGlucHV0TWVzc2FnZSB9KSB7XG4gICAgY29uc3Qge1xuICAgICAgbWVzc2FnZXMsIE51bWJlciwgTmFtZSxcbiAgICB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgbWVzc2FnZXMucHVzaCh7XG4gICAgICBtZXNzYWdlOiBpbnB1dE1lc3NhZ2UsXG4gICAgICBudW1iZXI6IE51bWJlcixcbiAgICAgIG5hbWU6IE5hbWUsXG4gICAgfSlcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbWVzc2FnZXMsXG4gICAgICBOdW1iZXI6IE51bWJlciArIDEsXG4gICAgfSlcbiAgfVxuXG4gIHN1Ym1pdFVzZXIoeyBuYW1lIH0pIHtcbiAgICBpZiAobmFtZSAhPT0gdGhpcy5zdGF0ZS5OYW1lKSB7XG4gICAgICBjb25zb2xlLmxvZygn5ZCN5YmN44GM5aSJ44KP44KK44G+44GX44GfJylcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBOYW1lOiBuYW1lLFxuICAgIH0pXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcHBcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+Y2hhdCByb29tPC9oMT5cbiAgICAgICAgPE5hbWVGb3JtIHN1Ym1pdFVzZXI9e3RoaXMuc3VibWl0VXNlcn0gLz5cbiAgICAgICAgPE1lc3NhZ2VMaXN0IGNsYXNzTmFtZT1cIk1MXCIgbWVzc2FnZXM9e3RoaXMuc3RhdGUubWVzc2FnZXN9IC8+XG4gICAgICAgIDxNZXNzYWdlRm9ybSBzZW5kTWVzc2FnZT17dGhpcy5zZW5kTWVzc2FnZX0gLz5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQXJpYWwnO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYXBwIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgY29sb3I6IGJsdWU7XG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/home/shiraishi/\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8/Sound On Live/chat-nextJS/components/App.js */",
        __self: this
      }));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);



/***/ })

})
//# sourceMappingURL=index.js.ab929e09574158c005fd.hot-update.js.map