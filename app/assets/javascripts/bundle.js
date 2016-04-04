/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].e;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			e: {},
/******/ 			i: moduleId,
/******/ 			l: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.e, module, module.e, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.e;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***************************************!*\
  !*** ./app/assets/frontend/greet.jsx ***!
  \***************************************/
/***/ function(module, exports) {

	eval("\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Greet = function (_React$Component) {\n    _inherits(Greet, _React$Component);\n\n    function Greet() {\n        _classCallCheck(this, Greet);\n\n        return _possibleConstructorReturn(this, Object.getPrototypeOf(Greet).apply(this, arguments));\n    }\n\n    _createClass(Greet, [{\n        key: \"render\",\n        value: function render() {\n            return React.createElement(\n                \"h2\",\n                null,\n                \"Hello Watch\"\n            );\n        }\n    }]);\n\n    return Greet;\n}(React.Component);\n\nexports.default = Greet;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvYXNzZXRzL2Zyb250ZW5kL2dyZWV0LmpzeD8wZTQwIl0sInNvdXJjZXNDb250ZW50IjpbIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcmVldCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyICgpIHtcbiAgICAgICAgcmV0dXJuIDxoMj5IZWxsbyBXYXRjaDwvaDI+XG4gICAgfVxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGFwcC9hc3NldHMvZnJvbnRlbmQvZ3JlZXQuanN4XG4gKiovIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUVBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7Ozs7QUFBQTs7OztBQUZBO0FBQUE7QUFDQTtBQURBIiwic291cmNlUm9vdCI6IiJ9");

/***/ },
/* 1 */
/*!**************************************!*\
  !*** ./app/assets/frontend/main.jsx ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _greet = __webpack_require__(/*! ./greet.jsx */ 0);\n\nvar _greet2 = _interopRequireDefault(_greet);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Main = function (_React$Component) {\n    _inherits(Main, _React$Component);\n\n    function Main() {\n        _classCallCheck(this, Main);\n\n        return _possibleConstructorReturn(this, Object.getPrototypeOf(Main).apply(this, arguments));\n    }\n\n    _createClass(Main, [{\n        key: 'render',\n        value: function render() {\n            return React.createElement(_greet2.default, null);\n        }\n    }]);\n\n    return Main;\n}(React.Component);\n\nvar documentReady = function documentReady() {\n    ReactDOM.render(React.createElement(Main, null), document.getElementById('react'));\n};\n\n$(documentReady);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvYXNzZXRzL2Zyb250ZW5kL21haW4uanN4PzUxYmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdyZWV0IGZyb20gJy4vZ3JlZXQuanN4JztcblxuY2xhc3MgTWFpbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8R3JlZXQgLz5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmxldCBkb2N1bWVudFJlYWR5ID0gKCkgPT4ge1xuICAgIFJlYWN0RE9NLnJlbmRlcihcbiAgICAgICAgPE1haW4gLz4sXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWFjdCcpXG4gICAgKTtcbn07XG5cbiQoZG9jdW1lbnRSZWFkeSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogYXBwL2Fzc2V0cy9mcm9udGVuZC9tYWluLmpzeFxuICoqLyJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTs7OztBQUZBO0FBQUE7QUFDQTtBQU9BO0FBQ0E7QUFEQTtBQUNBO0FBTUEiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }
/******/ ]);