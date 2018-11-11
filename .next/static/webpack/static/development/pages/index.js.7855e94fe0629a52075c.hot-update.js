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



/***/ })

})
//# sourceMappingURL=index.js.7855e94fe0629a52075c.hot-update.js.map