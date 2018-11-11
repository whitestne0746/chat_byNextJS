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



/***/ })

})
//# sourceMappingURL=index.js.ef0ed625eb830ac8c253.hot-update.js.map