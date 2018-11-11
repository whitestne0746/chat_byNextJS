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
        className: "jsx-1046149767" + " " + "app",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "jsx-1046149767" + " " + "title",
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
        styleId: "1046149767",
        css: "h1.jsx-1046149767{font-family:'Arial';}.app.jsx-1046149767{height:100vh;}.title.jsx-1046149767{width:100%;color:blue;position:fixed;text-align:center;top:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NoaXJhaXNoaS/jg4njgq3jg6Xjg6Hjg7Pjg4gvU291bmQgT24gTGl2ZS9jaGF0LW5leHRKUy9jb21wb25lbnRzL0FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvRG9CLEFBR2lDLEFBR1AsQUFHRixXQUNBLEVBSGIsT0FIQSxFQU9pQixlQUNHLGtCQUNaLE1BQ1IiLCJmaWxlIjoiL2hvbWUvc2hpcmFpc2hpL+ODieOCreODpeODoeODs+ODiC9Tb3VuZCBPbiBMaXZlL2NoYXQtbmV4dEpTL2NvbXBvbmVudHMvQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IE5hbWVGb3JtIGZyb20gJy4vTmFtZUZvcm0nXG5pbXBvcnQgTWVzc2FnZUZvcm0gZnJvbSAnLi9NZXNzYWdlRm9ybSdcbmltcG9ydCBNZXNzYWdlTGlzdCBmcm9tICcuL01lc3NhZ2VMaXN0J1xuLy8gaW1wb3J0IGlvIGZyb20gJ3NvY2tldC5pby1jbGllbnQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG1lc3NhZ2VzOiBbXSxcbiAgICAgIE51bWJlcjogMSxcbiAgICAgIE5hbWU6ICcnLFxuICAgIH1cbiAgICB0aGlzLnNlbmRNZXNzYWdlID0gdGhpcy5zZW5kTWVzc2FnZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5zdWJtaXRVc2VyID0gdGhpcy5zdWJtaXRVc2VyLmJpbmQodGhpcylcbiAgfVxuXG4gIHNlbmRNZXNzYWdlKHsgaW5wdXRNZXNzYWdlIH0pIHtcbiAgICBjb25zdCB7XG4gICAgICBtZXNzYWdlcywgTnVtYmVyLCBOYW1lLFxuICAgIH0gPSB0aGlzLnN0YXRlXG5cbiAgICBtZXNzYWdlcy5wdXNoKHtcbiAgICAgIG1lc3NhZ2U6IGlucHV0TWVzc2FnZSxcbiAgICAgIG51bWJlcjogTnVtYmVyLFxuICAgICAgbmFtZTogTmFtZSxcbiAgICB9KVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBtZXNzYWdlcyxcbiAgICAgIE51bWJlcjogTnVtYmVyICsgMSxcbiAgICB9KVxuICB9XG5cbiAgc3VibWl0VXNlcih7IG5hbWUgfSkge1xuICAgIGlmIChuYW1lICE9PSB0aGlzLnN0YXRlLk5hbWUpIHtcbiAgICAgIGNvbnNvbGUubG9nKCflkI3liY3jgYzlpInjgo/jgorjgb7jgZfjgZ8nKVxuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIE5hbWU6IG5hbWUsXG4gICAgfSlcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcFwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5jaGF0IHJvb208L2gxPlxuICAgICAgICA8TmFtZUZvcm0gc3VibWl0VXNlcj17dGhpcy5zdWJtaXRVc2VyfSAvPlxuICAgICAgICA8TWVzc2FnZUxpc3QgY2xhc3NOYW1lPVwiTUxcIiBtZXNzYWdlcz17dGhpcy5zdGF0ZS5tZXNzYWdlc30gLz5cbiAgICAgICAgPE1lc3NhZ2VGb3JtIHNlbmRNZXNzYWdlPXt0aGlzLnNlbmRNZXNzYWdlfSAvPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgaDEge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdBcmlhbCc7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5hcHAge1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgY29sb3I6IGJsdWU7XG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/home/shiraishi/\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8/Sound On Live/chat-nextJS/components/App.js */",
        __self: this
      }));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);



/***/ })

})
//# sourceMappingURL=index.js.f579f82e9e7c8003dfb8.hot-update.js.map