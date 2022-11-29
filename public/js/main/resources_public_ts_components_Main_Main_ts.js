"use strict";
(self["webpackChunkaabel"] = self["webpackChunkaabel"] || []).push([["resources_public_ts_components_Main_Main_ts"],{

/***/ "./resources/public/ts/class/Accordion.ts":
/*!************************************************!*\
  !*** ./resources/public/ts/class/Accordion.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Accordion": () => (/* binding */ Accordion)
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
var Accordion = /*#__PURE__*/function () {
  function Accordion(accordion, options) {
    _classCallCheck(this, Accordion);
    var defaultOptions = {
      isOpen: function isOpen() {},
      isClose: function isClose() {},
      speed: 300
    };
    this.options = Object.assign(defaultOptions, options);
    this.accordion = accordion;
    this.control = this.accordion.querySelector('[data-accordion-control]');
    this.content = this.accordion.querySelector('[data-accordion-content]');
    this.init();
  }
  _createClass(Accordion, [{
    key: "init",
    value: function init() {
      var _this = this;
      this.control.addEventListener('click', function () {
        _this.accordion.classList.toggle('open');
        if (_this.accordion.classList.contains('open')) {
          _this.open();
        } else {
          _this.close();
        }
      });
    }
  }, {
    key: "open",
    value: function open() {
      this.content.style.maxHeight = "".concat(this.content.scrollHeight, "px");
      this.options.isOpen();
    }
  }, {
    key: "close",
    value: function close() {
      this.content.style.maxHeight = null;
      this.options.isClose();
    }
  }]);
  return Accordion;
}();

/***/ }),

/***/ "./resources/public/ts/components/BaseComponent.ts":
/*!*********************************************************!*\
  !*** ./resources/public/ts/components/BaseComponent.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BaseComponent)
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
var BaseComponent = /*#__PURE__*/function () {
  function BaseComponent(container) {
    _classCallCheck(this, BaseComponent);
    this.container = container;
    this.init();
  }
  _createClass(BaseComponent, [{
    key: "init",
    value: function init() {}
  }]);
  return BaseComponent;
}();


/***/ }),

/***/ "./resources/public/ts/components/Main/Main.ts":
/*!*****************************************************!*\
  !*** ./resources/public/ts/components/Main/Main.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Main)
/* harmony export */ });
/* harmony import */ var _BaseComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../BaseComponent */ "./resources/public/ts/components/BaseComponent.ts");
/* harmony import */ var _use_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../use/functions */ "./resources/public/ts/use/functions.js");
/* harmony import */ var _class_Accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../class/Accordion */ "./resources/public/ts/class/Accordion.ts");
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}



var Main = /*#__PURE__*/function (_BaseComponent) {
  _inherits(Main, _BaseComponent);
  var _super = _createSuper(Main);
  function Main(container) {
    _classCallCheck(this, Main);
    return _super.call(this, container);
  }
  _createClass(Main, [{
    key: "init",
    value: function init() {
      // Date formatting
      this.createdAtFields = Array.from(this.container.querySelectorAll('[data-format-date]'));
      this.createdAtFields.forEach(function (field) {
        field.textContent = (0,_use_functions__WEBPACK_IMPORTED_MODULE_1__.dateFormatting)({
          date: Date.parse(field.textContent),
          year: "numeric",
          month: "long",
          day: "numeric"
        });
      });
      // Accordins
      var accordions = this.container.querySelectorAll('[data-accordion]');
      accordions.forEach(function (accordion) {
        new _class_Accordion__WEBPACK_IMPORTED_MODULE_2__.Accordion(accordion);
      });
    }
  }]);
  return Main;
}(_BaseComponent__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./resources/public/ts/use/functions.js":
/*!**********************************************!*\
  !*** ./resources/public/ts/use/functions.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "convertToFormData": () => (/* binding */ convertToFormData),
/* harmony export */   "dateFormatting": () => (/* binding */ dateFormatting)
/* harmony export */ });
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function convertToFormData(data) {
  var formData = new FormData();
  Object.entries(data).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      key = _ref2[0],
      value = _ref2[1];
    if (value) {
      formData.set(key, value);
    } else {
      formData.set(key, '');
    }
  });
  return formData;
}
function dateFormatting(options) {
  var _options$weekday, _options$year, _options$month, _options$day;
  var countryFormat = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "ru";
  var date = options.date;
  // const language = document.documentElement.getAttribute('lang');

  // let countryFormat;

  // switch (language) {
  //     case 'en':
  //         countryFormat = 'en-US';
  //         break;
  //     default:
  //         countryFormat = 'ru';
  // }

  var formatter = new Intl.DateTimeFormat(countryFormat, {
    weekday: (_options$weekday = options.weekday) !== null && _options$weekday !== void 0 ? _options$weekday : undefined,
    year: (_options$year = options.year) !== null && _options$year !== void 0 ? _options$year : undefined,
    month: (_options$month = options.month) !== null && _options$month !== void 0 ? _options$month : undefined,
    day: (_options$day = options.day) !== null && _options$day !== void 0 ? _options$day : undefined
  });
  return formatter.format(date);
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvbWFpbi9yZXNvdXJjZXNfcHVibGljX3RzX2NvbXBvbmVudHNfTWFpbl9NYWluX3RzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sSUFBTUEsU0FBUztFQVNsQixtQkFBWUMsU0FBUyxFQUFFQyxPQUFRO0lBQUFDO0lBQzNCLElBQU1DLGNBQWMsR0FBRztNQUNuQkMsTUFBTSxFQUFFLGtCQUFLLENBQUUsQ0FBQztNQUNoQkMsT0FBTyxFQUFFLG1CQUFLLENBQUUsQ0FBQztNQUNqQkMsS0FBSyxFQUFFO0tBQ1Y7SUFFRCxJQUFJLENBQUNMLE9BQU8sR0FBR00sTUFBTSxDQUFDQyxNQUFNLENBQUNMLGNBQWMsRUFBRUYsT0FBTyxDQUFDO0lBQ3JELElBQUksQ0FBQ0QsU0FBUyxHQUFHQSxTQUFTO0lBQzFCLElBQUksQ0FBQ1MsT0FBTyxHQUFHLElBQUksQ0FBQ1QsU0FBUyxDQUFDVSxhQUFhLENBQUMsMEJBQTBCLENBQUM7SUFDdkUsSUFBSSxDQUFDQyxPQUFPLEdBQUcsSUFBSSxDQUFDWCxTQUFTLENBQUNVLGFBQWEsQ0FBQywwQkFBMEIsQ0FBQztJQUV2RSxJQUFJLENBQUNFLElBQUksRUFBRTtFQUNmO0VBQUNDO0lBQUFDO0lBQUFDLE9BRUQsZ0JBQUk7TUFBQTtNQUNBLElBQUksQ0FBQ04sT0FBTyxDQUFDTyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBSztRQUN4Q0MsS0FBSSxDQUFDakIsU0FBUyxDQUFDa0IsU0FBUyxDQUFDQyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQ3ZDLElBQUlGLEtBQUksQ0FBQ2pCLFNBQVMsQ0FBQ2tCLFNBQVMsQ0FBQ0UsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1VBQzNDSCxLQUFJLENBQUNJLElBQUksRUFBRTtTQUNkLE1BQU07VUFDSEosS0FBSSxDQUFDSyxLQUFLLEVBQUU7O01BRXBCLENBQUMsQ0FBQztJQUNOO0VBQUM7SUFBQVI7SUFBQUMsT0FFRCxnQkFBSTtN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RUFDQTtFQUNBOztFQUVBLElBQUljLFNBQVMsR0FBRyxJQUFJQyxJQUFJLENBQUNDLGNBQWMsQ0FBQ0gsYUFBYSxFQUFFO0lBQ25ESSxPQUFPLHNCQUFFdEQsT0FBTyxDQUFDc0QsT0FBTywrREFBSUMsU0FBUztJQUNyQ2YsSUFBSSxtQkFBRXhDLE9BQU8sQ0FBQ3dDLElBQUkseURBQUllLFNBQVM7SUFDL0JkLEtBQUssb0JBQUV6QyxPQUFPLENBQUN5QyxLQUFLLDJEQUFJYyxTQUFTO0lBQ2pDYixHQUFHLGtCQUFFMUMsT0FBTyxDQUFDMEMsR0FBRyx1REFBSWE7RUFDeEIsQ0FBQyxDQUFDO0VBRUYsT0FBT0osU0FBUyxDQUFDSyxNQUFNLENBQUNuQixJQUFJLENBQUM7QUFDakMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hYWJlbC8uL3Jlc291cmNlcy9wdWJsaWMvdHMvY2xhc3MvQWNjb3JkaW9uLnRzIiwid2VicGFjazovL2FhYmVsLy4vcmVzb3VyY2VzL3B1YmxpYy90cy9jb21wb25lbnRzL0Jhc2VDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vYWFiZWwvLi9yZXNvdXJjZXMvcHVibGljL3RzL2NvbXBvbmVudHMvTWFpbi9NYWluLnRzIiwid2VicGFjazovL2FhYmVsLy4vcmVzb3VyY2VzL3B1YmxpYy90cy91c2UvZnVuY3Rpb25zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBBY2NvcmRpb24ge1xyXG4gICAgZGVmYXVsdE9wdGlvbnM6IHtcclxuICAgICAgICBpc09wZW46IHZvaWQ7XHJcbiAgICB9O1xyXG4gICAgb3B0aW9uczogT2JqZWN0IHwgYW55O1xyXG4gICAgYWNjb3JkaW9uOiBIVE1MRWxlbWVudCB8IG51bGw7XHJcbiAgICBjb250cm9sOiBIVE1MRWxlbWVudCB8IG51bGw7XHJcbiAgICBjb250ZW50OiBIVE1MRWxlbWVudCB8IG51bGw7XHJcblxyXG4gICAgY29uc3RydWN0b3IoYWNjb3JkaW9uLCBvcHRpb25zPykge1xyXG4gICAgICAgIGNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xyXG4gICAgICAgICAgICBpc09wZW46ICgpID0+IHt9LFxyXG4gICAgICAgICAgICBpc0Nsb3NlOiAoKSA9PiB7fSxcclxuICAgICAgICAgICAgc3BlZWQ6IDMwMFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMuYWNjb3JkaW9uID0gYWNjb3JkaW9uO1xyXG4gICAgICAgIHRoaXMuY29udHJvbCA9IHRoaXMuYWNjb3JkaW9uLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWFjY29yZGlvbi1jb250cm9sXScpO1xyXG4gICAgICAgIHRoaXMuY29udGVudCA9IHRoaXMuYWNjb3JkaW9uLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWFjY29yZGlvbi1jb250ZW50XScpO1xyXG5cclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIHRoaXMuY29udHJvbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hY2NvcmRpb24uY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbicpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5hY2NvcmRpb24uY2xhc3NMaXN0LmNvbnRhaW5zKCdvcGVuJykpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub3BlbigpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb3BlbigpIHtcclxuICAgICAgICB0aGlzLmNvbnRlbnQuc3R5bGUubWF4SGVpZ2h0ID0gYCR7IHRoaXMuY29udGVudC5zY3JvbGxIZWlnaHQgfXB4YDtcclxuICAgICAgICB0aGlzLm9wdGlvbnMuaXNPcGVuKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2UoKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZW50LnN0eWxlLm1heEhlaWdodCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zLmlzQ2xvc2UoKTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlQ29tcG9uZW50IHtcclxuICAgIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQgfCBudWxsO1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEhUTUxFbGVtZW50KSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XHJcbiAgICAgICBcclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge31cclxufSIsImltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gXCIuLi9CYXNlQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7IGRhdGVGb3JtYXR0aW5nIH0gZnJvbSAnLi4vLi4vdXNlL2Z1bmN0aW9ucyc7XHJcbmltcG9ydCB7IEFjY29yZGlvbiB9IGZyb20gXCIuLi8uLi9jbGFzcy9BY2NvcmRpb25cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW4gZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcclxuICAgIGNyZWF0ZWRBdEZpZWxkczogQXJyYXk8SFRNTEVsZW1lbnQ+IHwgbnVsbDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXIpIHtcclxuICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG5cclxuICAgIH1cclxuICAgIFxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICAvLyBEYXRlIGZvcm1hdHRpbmdcclxuICAgICAgICB0aGlzLmNyZWF0ZWRBdEZpZWxkcyA9IEFycmF5LmZyb20odGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtZm9ybWF0LWRhdGVdJykpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlZEF0RmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XHJcbiAgICAgICAgICAgIGZpZWxkLnRleHRDb250ZW50ID0gZGF0ZUZvcm1hdHRpbmcoe1xyXG4gICAgICAgICAgICAgICAgZGF0ZTogRGF0ZS5wYXJzZShmaWVsZC50ZXh0Q29udGVudCksXHJcbiAgICAgICAgICAgICAgICB5ZWFyOiBcIm51bWVyaWNcIixcclxuICAgICAgICAgICAgICAgIG1vbnRoOiBcImxvbmdcIixcclxuICAgICAgICAgICAgICAgIGRheTogXCJudW1lcmljXCIsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBBY2NvcmRpbnNcclxuICAgICAgICBjb25zdCBhY2NvcmRpb25zID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtYWNjb3JkaW9uXScpO1xyXG4gICAgICAgIGFjY29yZGlvbnMuZm9yRWFjaCgoYWNjb3JkaW9uKSA9PiB7XHJcbiAgICAgICAgICAgIG5ldyBBY2NvcmRpb24oYWNjb3JkaW9uKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gY29udmVydFRvRm9ybURhdGEoZGF0YSkge1xyXG4gICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBPYmplY3QuZW50cmllcyhkYXRhKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcclxuICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgICAgZm9ybURhdGEuc2V0KGtleSwgdmFsdWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZvcm1EYXRhLnNldChrZXksICcnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBmb3JtRGF0YTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRhdGVGb3JtYXR0aW5nKG9wdGlvbnMsIGNvdW50cnlGb3JtYXQ9XCJydVwiKSB7XHJcbiAgICBjb25zdCBkYXRlID0gb3B0aW9ucy5kYXRlO1xyXG4gICAgLy8gY29uc3QgbGFuZ3VhZ2UgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdsYW5nJyk7XHJcbiAgICBcclxuICAgIC8vIGxldCBjb3VudHJ5Rm9ybWF0O1xyXG4gICAgXHJcbiAgICAvLyBzd2l0Y2ggKGxhbmd1YWdlKSB7XHJcbiAgICAvLyAgICAgY2FzZSAnZW4nOlxyXG4gICAgLy8gICAgICAgICBjb3VudHJ5Rm9ybWF0ID0gJ2VuLVVTJztcclxuICAgIC8vICAgICAgICAgYnJlYWs7XHJcbiAgICAvLyAgICAgZGVmYXVsdDpcclxuICAgIC8vICAgICAgICAgY291bnRyeUZvcm1hdCA9ICdydSc7XHJcbiAgICAvLyB9XHJcbiAgICBcclxuICAgIGxldCBmb3JtYXR0ZXIgPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChjb3VudHJ5Rm9ybWF0LCB7XHJcbiAgICAgICAgd2Vla2RheTogb3B0aW9ucy53ZWVrZGF5ID8/IHVuZGVmaW5lZCxcclxuICAgICAgICB5ZWFyOiBvcHRpb25zLnllYXIgPz8gdW5kZWZpbmVkLFxyXG4gICAgICAgIG1vbnRoOiBvcHRpb25zLm1vbnRoID8/IHVuZGVmaW5lZCxcclxuICAgICAgICBkYXk6IG9wdGlvbnMuZGF5ID8/IHVuZGVmaW5lZCxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBmb3JtYXR0ZXIuZm9ybWF0KGRhdGUpO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJBY2NvcmRpb24iLCJhY2NvcmRpb24iLCJvcHRpb25zIiwiX2NsYXNzQ2FsbENoZWNrIiwiZGVmYXVsdE9wdGlvbnMiLCJpc09wZW4iLCJpc0Nsb3NlIiwic3BlZWQiLCJPYmplY3QiLCJhc3NpZ24iLCJjb250cm9sIiwicXVlcnlTZWxlY3RvciIsImNvbnRlbnQiLCJpbml0IiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJhZGRFdmVudExpc3RlbmVyIiwiX3RoaXMiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJjb250YWlucyIsIm9wZW4iLCJjbG9zZSIsInN0eWxlIiwibWF4SGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0IiwiQmFzZUNvbXBvbmVudCIsImNvbnRhaW5lciIsImRhdGVGb3JtYXR0aW5nIiwiTWFpbiIsIl9pbmhlcml0cyIsImNyZWF0ZWRBdEZpZWxkcyIsIkFycmF5IiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZmllbGQiLCJ0ZXh0Q29udGVudCIsImRhdGUiLCJEYXRlIiwicGFyc2UiLCJ5ZWFyIiwibW9udGgiLCJkYXkiLCJhY2NvcmRpb25zIiwiY29udmVydFRvRm9ybURhdGEiLCJkYXRhIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImVudHJpZXMiLCJzZXQiLCJjb3VudHJ5Rm9ybWF0IiwiZm9ybWF0dGVyIiwiSW50bCIsIkRhdGVUaW1lRm9ybWF0Iiwid2Vla2RheSIsInVuZGVmaW5lZCIsImZvcm1hdCJdLCJzb3VyY2VSb290IjoiIn0=