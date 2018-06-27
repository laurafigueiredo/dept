webpackHotUpdate(4,{

/***/ "./components/footer/Footer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/next/node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles__ = __webpack_require__("./components/footer/styles.js");
var _jsxFileName = "/Users/laurinha/Desktop/dept/components/footer/Footer.js";


(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();



 // Styles


var social = [{
  name: 'Facebook',
  link: 'https://www.facebook.com/tamtamnl/'
}, {
  name: 'Twitter',
  link: 'https://www.twitter.com/tamtamnl/'
}, {
  name: 'Instagram',
  link: 'https://www.instagram.com/tamtamnl/'
}];

var Footer = function Footer() {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("footer", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_3__styles__["a" /* default */].__scopedHash) + " " + ("jsx-".concat(__WEBPACK_IMPORTED_MODULE_3__styles__["a" /* default */].__scopedHash) + " " + "Footer" || "")
  }, social.map(function (item) {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
      href: item.link,
      target: "blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_3__styles__["a" /* default */].__scopedHash) + " " + ("jsx-".concat(__WEBPACK_IMPORTED_MODULE_3__styles__["a" /* default */].__scopedHash) + " " + (__WEBPACK_IMPORTED_MODULE_2_classnames___default()('Icon', "Icon".concat(item.name)) || "") || "")
    });
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: __WEBPACK_IMPORTED_MODULE_3__styles__["a" /* default */].__scopedHash,
    css: __WEBPACK_IMPORTED_MODULE_3__styles__["a" /* default */].__scoped
  }));
};

var _default = Footer;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(social, "social", "/Users/laurinha/Desktop/dept/components/footer/Footer.js");
  reactHotLoader.register(Footer, "Footer", "/Users/laurinha/Desktop/dept/components/footer/Footer.js");
  reactHotLoader.register(_default, "default", "/Users/laurinha/Desktop/dept/components/footer/Footer.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.f970649cb20cc5bf742a.hot-update.js.map