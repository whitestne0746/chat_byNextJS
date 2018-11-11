webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/NameForm.js":
/*!********************************!*\
  !*** ./components/NameForm.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NameForm; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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
        className: "jsx-1562972970",
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
        className: "jsx-1562972970",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        id: "submit",
        className: "jsx-1562972970",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, "submit"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "1562972970",
        css: "form.jsx-1562972970{left:20px;top:20px;}input.jsx-1562972970{border:1px solid #ccc;border-radius:5px;padding:2px 8px;background:none;outline:0;width:200px;}#submit.jsx-1562972970{margin:1%;border:1px solid #00f;border-radius:5px;padding:2px 7px;outline:0;color:white;background:blue;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NoaXJhaXNoaS/jg4njgq3jg6Xjg6Hjg7Pjg4gvU291bmQgT24gTGl2ZS9jaGF0LW5leHRKUy9jb21wb25lbnRzL05hbWVGb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZCb0IsQUFHdUIsQUFJWSxBQVFaLFVBWEQsQUFZYSxTQVh4QixHQUdvQixVQVNBLFFBUkYsVUFTQSxNQVJBLFVBU04sTUFSQSxJQVNFLE1BUkEsTUFTSSxNQVJsQixVQVNBIiwiZmlsZSI6Ii9ob21lL3NoaXJhaXNoaS/jg4njgq3jg6Xjg6Hjg7Pjg4gvU291bmQgT24gTGl2ZS9jaGF0LW5leHRKUy9jb21wb25lbnRzL05hbWVGb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOYW1lRm9ybSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG5hbWU6ICcnLFxuICAgIH1cbiAgICB0aGlzLmJ1dHRvbkNsaWNrID0gdGhpcy5idXR0b25DbGljay5iaW5kKHRoaXMpXG4gICAgdGhpcy50eXBlTmFtZSA9IHRoaXMudHlwZU5hbWUuYmluZCh0aGlzKVxuICB9XG5cbiAgYnV0dG9uQ2xpY2soZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnN0IG5hbWUgPSB0aGlzLnN0YXRlXG4gICAgdGhpcy5wcm9wcy5zdWJtaXRVc2VyKG5hbWUpXG4gIH1cblxuICB0eXBlTmFtZShlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBuYW1lOiBlLnRhcmdldC52YWx1ZSxcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5idXR0b25DbGlja30+XG4gICAgICAgIDxpbnB1dCBpZD1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cIm5hbWVcIiB2YWx1ZT17dGhpcy5zdGF0ZS5uYW1lfSBvbkNoYW5nZT17dGhpcy50eXBlTmFtZX0gLz5cbiAgICAgICAgPGJ1dHRvbiBpZD1cInN1Ym1pdFwiPnN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgZm9ybSB7XG4gICAgICAgICAgICBsZWZ0OiAyMHB4O1xuICAgICAgICAgICAgdG9wOiAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgcGFkZGluZzogMnB4IDhweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgICAgICBvdXRsaW5lOiAwO1xuICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAjc3VibWl0IHtcbiAgICAgICAgICAgIG1hcmdpbjogMSU7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDBmO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgcGFkZGluZzogMnB4IDdweDtcbiAgICAgICAgICAgIG91dGxpbmU6IDA7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBibHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9mb3JtPlxuICAgIClcbiAgfVxufVxuIl19 */\n/*@ sourceURL=/home/shiraishi/\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8/Sound On Live/chat-nextJS/components/NameForm.js */",
        __self: this
      }));
    }
  }]);

  return NameForm;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);



/***/ })

})
//# sourceMappingURL=index.js.14c901558cd80477bee6.hot-update.js.map