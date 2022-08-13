(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j|t)sx?$":
/*!*****************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.(j|t)sx?$ ***!
  \*****************************************************************************************************************/
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j|t)sx?$";
module.exports = webpackEmptyContext;

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
});

/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");
/* harmony import */ var bootstrap_sass_assets_javascripts_bootstrap_transition_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-sass/assets/javascripts/bootstrap/transition.js */ "./node_modules/bootstrap-sass/assets/javascripts/bootstrap/transition.js");
/* harmony import */ var bootstrap_sass_assets_javascripts_bootstrap_transition_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_sass_assets_javascripts_bootstrap_transition_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bootstrap_sass_assets_javascripts_bootstrap_alert_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap-sass/assets/javascripts/bootstrap/alert.js */ "./node_modules/bootstrap-sass/assets/javascripts/bootstrap/alert.js");
/* harmony import */ var bootstrap_sass_assets_javascripts_bootstrap_alert_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_sass_assets_javascripts_bootstrap_alert_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bootstrap_sass_assets_javascripts_bootstrap_collapse_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap-sass/assets/javascripts/bootstrap/collapse.js */ "./node_modules/bootstrap-sass/assets/javascripts/bootstrap/collapse.js");
/* harmony import */ var bootstrap_sass_assets_javascripts_bootstrap_collapse_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_sass_assets_javascripts_bootstrap_collapse_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var bootstrap_sass_assets_javascripts_bootstrap_dropdown_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap-sass/assets/javascripts/bootstrap/dropdown.js */ "./node_modules/bootstrap-sass/assets/javascripts/bootstrap/dropdown.js");
/* harmony import */ var bootstrap_sass_assets_javascripts_bootstrap_dropdown_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bootstrap_sass_assets_javascripts_bootstrap_dropdown_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var bootstrap_sass_assets_javascripts_bootstrap_modal_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap-sass/assets/javascripts/bootstrap/modal.js */ "./node_modules/bootstrap-sass/assets/javascripts/bootstrap/modal.js");
/* harmony import */ var bootstrap_sass_assets_javascripts_bootstrap_modal_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bootstrap_sass_assets_javascripts_bootstrap_modal_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _js_highlight_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js/highlight.js */ "./assets/js/highlight.js");
/* harmony import */ var _js_doclinks_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./js/doclinks.js */ "./assets/js/doclinks.js");
/* harmony import */ var _js_doclinks_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_js_doclinks_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");
 // loads the Bootstrap jQuery plugins






 // loads the code syntax highlighting library

 // Creates links to the Symfony documentation

 // start the Stimulus application



/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");
 // Registers Stimulus controllers from controllers.json and in the controllers/ directory

var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j|t)sx?$")); // register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

/***/ }),

/***/ "./assets/js/doclinks.js":
/*!*******************************!*\
  !*** ./assets/js/doclinks.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
 // Wraps some elements in anchor tags referencing to the Symfony documentation

__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");

__webpack_require__(/*! core-js/modules/es.regexp.constructor.js */ "./node_modules/core-js/modules/es.regexp.constructor.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");

__webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");

__webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");

$(function () {
  var $modal = $('#sourceCodeModal');
  var $controllerCode = $modal.find('code.php');
  var $templateCode = $modal.find('code.twig');

  function anchor(url, content) {
    return '<a class="doclink" target="_blank" href="' + url + '">' + content + '</a>';
  }

  ;

  function wrap(content, links) {
    return content.replace(new RegExp(Object.keys(links).join('|'), 'g'), function (token) {
      return anchor(links[token], token);
    });
  }

  ; // Wraps links to the Symfony documentation

  $modal.find('.hljs-comment').each(function () {
    $(this).html($(this).html().replace(/https:\/\/symfony.com\/doc\/[\w/.#-]+/g, function (url) {
      return anchor(url, url);
    }));
  }); // Wraps Symfony's attributes

  var attributes = {
    'Cache': 'https://symfony.com/doc/current/bundles/SensioFrameworkExtraBundle/annotations/cache.html',
    'IsGranted': 'https://symfony.com/doc/current/bundles/SensioFrameworkExtraBundle/annotations/security.html#isgranted',
    'ParamConverter': 'https://symfony.com/doc/current/bundles/SensioFrameworkExtraBundle/annotations/converters.html',
    'Route': 'https://symfony.com/doc/current/routing.html#creating-routes-as-attributes-or-annotations',
    'Security': 'https://symfony.com/doc/current/bundles/SensioFrameworkExtraBundle/annotations/security.html#security'
  };
  $controllerCode.find('.hljs-meta').each(function () {
    var src = $(this).text();
    $(this).html(wrap(src, attributes));
  }); // Wraps Twig's tags

  $templateCode.find('.hljs-template-tag + .hljs-name').each(function () {
    var tag = $(this).text();

    if ('else' === tag || tag.match(/^end/)) {
      return;
    }

    var url = 'https://twig.symfony.com/doc/3.x/tags/' + tag + '.html#' + tag;
    $(this).html(anchor(url, tag));
  }); // Wraps Twig's functions

  $templateCode.find('.hljs-template-variable > .hljs-name').each(function () {
    var func = $(this).text();
    var url = 'https://twig.symfony.com/doc/3.x/functions/' + func + '.html#' + func;
    $(this).html(anchor(url, func));
  });
});

/***/ }),

/***/ "./assets/js/highlight.js":
/*!********************************!*\
  !*** ./assets/js/highlight.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! highlight.js/lib/core */ "./node_modules/highlight.js/es/core.js");
/* harmony import */ var highlight_js_lib_languages_php__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/lib/languages/php */ "./node_modules/highlight.js/es/languages/php.js");
/* harmony import */ var highlight_js_lib_languages_twig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highlight.js/lib/languages/twig */ "./node_modules/highlight.js/es/languages/twig.js");



highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0__.default.registerLanguage('php', highlight_js_lib_languages_php__WEBPACK_IMPORTED_MODULE_1__.default);
highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0__.default.registerLanguage('twig', highlight_js_lib_languages_twig__WEBPACK_IMPORTED_MODULE_2__.default);
highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0__.default.highlightAll();

/***/ }),

/***/ "./assets/styles/app.scss":
/*!********************************!*\
  !*** ./assets/styles/app.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_add-to-unscopables_js-node_modules_core-js_internals_a-88c411","vendors-node_modules_core-js_internals_object-set-prototype-of_js-node_modules_core-js_module-345aa2","vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_bootstrap-sass_assets-539c4e"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vfC9cXC4oanx0KXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZG9jbGlua3MuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2hpZ2hsaWdodC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5zY3NzIl0sIm5hbWVzIjpbImFwcCIsInN0YXJ0U3RpbXVsdXNBcHAiLCJyZXF1aXJlIiwiJCIsIiRtb2RhbCIsIiRjb250cm9sbGVyQ29kZSIsImZpbmQiLCIkdGVtcGxhdGVDb2RlIiwiYW5jaG9yIiwidXJsIiwiY29udGVudCIsIndyYXAiLCJsaW5rcyIsInJlcGxhY2UiLCJSZWdFeHAiLCJPYmplY3QiLCJrZXlzIiwiam9pbiIsInRva2VuIiwiZWFjaCIsImh0bWwiLCJhdHRyaWJ1dGVzIiwic3JjIiwidGV4dCIsInRhZyIsIm1hdGNoIiwiZnVuYyIsImhsanMiLCJwaHAiLCJ0d2lnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQzs7Ozs7Ozs7Ozs7Ozs7O0FDUkEsaUVBQWU7QUFDZixDQUFDLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NDQ0Q7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUdBOztDQUdBOztDQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0NkQTs7QUFDTyxJQUFNQSxHQUFHLEdBQUdDLDBFQUFnQixDQUFDQywwSUFBRCxDQUE1QixDLENBTVA7QUFDQSxnRTs7Ozs7Ozs7Ozs7O0NDUkE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBQyxDQUFDLENBQUMsWUFBVztBQUNULE1BQUlDLE1BQU0sR0FBR0QsQ0FBQyxDQUFDLGtCQUFELENBQWQ7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LENBQXNCLEtBQXRCLEVBQTZCQyxtRUFBN0I7QUFDQUQsMkVBQUEsQ0FBc0IsTUFBdEIsRUFBOEJFLG9FQUE5QjtBQUVBRix1RUFBQSxHOzs7Ozs7Ozs7Ozs7QUNQQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiB3ZWJwYWNrRW1wdHlDb250ZXh0KHJlcSkge1xuXHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0dGhyb3cgZTtcbn1cbndlYnBhY2tFbXB0eUNvbnRleHQua2V5cyA9ICgpID0+IChbXSk7XG53ZWJwYWNrRW1wdHlDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrRW1wdHlDb250ZXh0O1xud2VicGFja0VtcHR5Q29udGV4dC5pZCA9IFwiLi9hc3NldHMvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhIFxcXFwuKGp8dClzeD8kXCI7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tFbXB0eUNvbnRleHQ7IiwiZXhwb3J0IGRlZmF1bHQge1xufTsiLCJpbXBvcnQgJy4vc3R5bGVzL2FwcC5zY3NzJztcblxuLy8gbG9hZHMgdGhlIEJvb3RzdHJhcCBqUXVlcnkgcGx1Z2luc1xuaW1wb3J0ICdib290c3RyYXAtc2Fzcy9hc3NldHMvamF2YXNjcmlwdHMvYm9vdHN0cmFwL3RyYW5zaXRpb24uanMnO1xuaW1wb3J0ICdib290c3RyYXAtc2Fzcy9hc3NldHMvamF2YXNjcmlwdHMvYm9vdHN0cmFwL2FsZXJ0LmpzJztcbmltcG9ydCAnYm9vdHN0cmFwLXNhc3MvYXNzZXRzL2phdmFzY3JpcHRzL2Jvb3RzdHJhcC9jb2xsYXBzZS5qcyc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9qYXZhc2NyaXB0cy9ib290c3RyYXAvZHJvcGRvd24uanMnO1xuaW1wb3J0ICdib290c3RyYXAtc2Fzcy9hc3NldHMvamF2YXNjcmlwdHMvYm9vdHN0cmFwL21vZGFsLmpzJztcbmltcG9ydCAnanF1ZXJ5J1xuXG4vLyBsb2FkcyB0aGUgY29kZSBzeW50YXggaGlnaGxpZ2h0aW5nIGxpYnJhcnlcbmltcG9ydCAnLi9qcy9oaWdobGlnaHQuanMnO1xuXG4vLyBDcmVhdGVzIGxpbmtzIHRvIHRoZSBTeW1mb255IGRvY3VtZW50YXRpb25cbmltcG9ydCAnLi9qcy9kb2NsaW5rcy5qcyc7XG5cbi8vIHN0YXJ0IHRoZSBTdGltdWx1cyBhcHBsaWNhdGlvblxuaW1wb3J0ICcuL2Jvb3RzdHJhcCc7XG4iLCJpbXBvcnQgeyBzdGFydFN0aW11bHVzQXBwIH0gZnJvbSAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlJztcblxuLy8gUmVnaXN0ZXJzIFN0aW11bHVzIGNvbnRyb2xsZXJzIGZyb20gY29udHJvbGxlcnMuanNvbiBhbmQgaW4gdGhlIGNvbnRyb2xsZXJzLyBkaXJlY3RvcnlcbmV4cG9ydCBjb25zdCBhcHAgPSBzdGFydFN0aW11bHVzQXBwKHJlcXVpcmUuY29udGV4dChcbiAgICAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIhLi9jb250cm9sbGVycycsXG4gICAgdHJ1ZSxcbiAgICAvXFwuKGp8dClzeD8kL1xuKSk7XG5cbi8vIHJlZ2lzdGVyIGFueSBjdXN0b20sIDNyZCBwYXJ0eSBjb250cm9sbGVycyBoZXJlXG4vLyBhcHAucmVnaXN0ZXIoJ3NvbWVfY29udHJvbGxlcl9uYW1lJywgU29tZUltcG9ydGVkQ29udHJvbGxlcik7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8vIFdyYXBzIHNvbWUgZWxlbWVudHMgaW4gYW5jaG9yIHRhZ3MgcmVmZXJlbmNpbmcgdG8gdGhlIFN5bWZvbnkgZG9jdW1lbnRhdGlvblxuJChmdW5jdGlvbigpIHtcbiAgICB2YXIgJG1vZGFsID0gJCgnI3NvdXJjZUNvZGVNb2RhbCcpO1xuICAgIHZhciAkY29udHJvbGxlckNvZGUgPSAkbW9kYWwuZmluZCgnY29kZS5waHAnKTtcbiAgICB2YXIgJHRlbXBsYXRlQ29kZSA9ICRtb2RhbC5maW5kKCdjb2RlLnR3aWcnKTtcblxuICAgIGZ1bmN0aW9uIGFuY2hvcih1cmwsIGNvbnRlbnQpIHtcbiAgICAgICAgcmV0dXJuICc8YSBjbGFzcz1cImRvY2xpbmtcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiJyArIHVybCArICdcIj4nICsgY29udGVudCArICc8L2E+JztcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gd3JhcChjb250ZW50LCBsaW5rcykge1xuICAgICAgICByZXR1cm4gY29udGVudC5yZXBsYWNlKFxuICAgICAgICAgICAgbmV3IFJlZ0V4cChPYmplY3Qua2V5cyhsaW5rcykuam9pbignfCcpLCAnZycpLFxuICAgICAgICAgICAgdG9rZW4gPT4gYW5jaG9yKGxpbmtzW3Rva2VuXSwgdG9rZW4pXG4gICAgICAgICk7XG4gICAgfTtcblxuICAgIC8vIFdyYXBzIGxpbmtzIHRvIHRoZSBTeW1mb255IGRvY3VtZW50YXRpb25cbiAgICAkbW9kYWwuZmluZCgnLmhsanMtY29tbWVudCcpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICQodGhpcykuaHRtbCgkKHRoaXMpLmh0bWwoKS5yZXBsYWNlKC9odHRwczpcXC9cXC9zeW1mb255LmNvbVxcL2RvY1xcL1tcXHcvLiMtXSsvZywgZnVuY3Rpb24odXJsKSB7XG4gICAgICAgICAgICByZXR1cm4gYW5jaG9yKHVybCwgdXJsKTtcbiAgICAgICAgfSkpO1xuICAgIH0pO1xuXG4gICAgLy8gV3JhcHMgU3ltZm9ueSdzIGF0dHJpYnV0ZXNcbiAgICB2YXIgYXR0cmlidXRlcyA9IHtcbiAgICAgICAgJ0NhY2hlJzogJ2h0dHBzOi8vc3ltZm9ueS5jb20vZG9jL2N1cnJlbnQvYnVuZGxlcy9TZW5zaW9GcmFtZXdvcmtFeHRyYUJ1bmRsZS9hbm5vdGF0aW9ucy9jYWNoZS5odG1sJyxcbiAgICAgICAgJ0lzR3JhbnRlZCc6ICdodHRwczovL3N5bWZvbnkuY29tL2RvYy9jdXJyZW50L2J1bmRsZXMvU2Vuc2lvRnJhbWV3b3JrRXh0cmFCdW5kbGUvYW5ub3RhdGlvbnMvc2VjdXJpdHkuaHRtbCNpc2dyYW50ZWQnLFxuICAgICAgICAnUGFyYW1Db252ZXJ0ZXInOiAnaHR0cHM6Ly9zeW1mb255LmNvbS9kb2MvY3VycmVudC9idW5kbGVzL1NlbnNpb0ZyYW1ld29ya0V4dHJhQnVuZGxlL2Fubm90YXRpb25zL2NvbnZlcnRlcnMuaHRtbCcsXG4gICAgICAgICdSb3V0ZSc6ICdodHRwczovL3N5bWZvbnkuY29tL2RvYy9jdXJyZW50L3JvdXRpbmcuaHRtbCNjcmVhdGluZy1yb3V0ZXMtYXMtYXR0cmlidXRlcy1vci1hbm5vdGF0aW9ucycsXG4gICAgICAgICdTZWN1cml0eSc6ICdodHRwczovL3N5bWZvbnkuY29tL2RvYy9jdXJyZW50L2J1bmRsZXMvU2Vuc2lvRnJhbWV3b3JrRXh0cmFCdW5kbGUvYW5ub3RhdGlvbnMvc2VjdXJpdHkuaHRtbCNzZWN1cml0eSdcbiAgICB9O1xuXG4gICAgJGNvbnRyb2xsZXJDb2RlLmZpbmQoJy5obGpzLW1ldGEnKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgc3JjID0gJCh0aGlzKS50ZXh0KCk7XG5cbiAgICAgICAgJCh0aGlzKS5odG1sKHdyYXAoc3JjLCBhdHRyaWJ1dGVzKSk7XG4gICAgfSk7XG5cbiAgICAvLyBXcmFwcyBUd2lnJ3MgdGFnc1xuICAgICR0ZW1wbGF0ZUNvZGUuZmluZCgnLmhsanMtdGVtcGxhdGUtdGFnICsgLmhsanMtbmFtZScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB0YWcgPSAkKHRoaXMpLnRleHQoKTtcblxuICAgICAgICBpZiAoJ2Vsc2UnID09PSB0YWcgfHwgdGFnLm1hdGNoKC9eZW5kLykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB1cmwgPSAnaHR0cHM6Ly90d2lnLnN5bWZvbnkuY29tL2RvYy8zLngvdGFncy8nICsgdGFnICsgJy5odG1sIycgKyB0YWc7XG5cbiAgICAgICAgJCh0aGlzKS5odG1sKGFuY2hvcih1cmwsIHRhZykpO1xuICAgIH0pO1xuXG4gICAgLy8gV3JhcHMgVHdpZydzIGZ1bmN0aW9uc1xuICAgICR0ZW1wbGF0ZUNvZGUuZmluZCgnLmhsanMtdGVtcGxhdGUtdmFyaWFibGUgPiAuaGxqcy1uYW1lJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGZ1bmMgPSAkKHRoaXMpLnRleHQoKTtcblxuICAgICAgICB2YXIgdXJsID0gJ2h0dHBzOi8vdHdpZy5zeW1mb255LmNvbS9kb2MvMy54L2Z1bmN0aW9ucy8nICsgZnVuYyArICcuaHRtbCMnICsgZnVuYztcblxuICAgICAgICAkKHRoaXMpLmh0bWwoYW5jaG9yKHVybCwgZnVuYykpO1xuICAgIH0pO1xufSk7XG4iLCJpbXBvcnQgaGxqcyBmcm9tICdoaWdobGlnaHQuanMvbGliL2NvcmUnO1xuaW1wb3J0IHBocCBmcm9tICdoaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9waHAnO1xuaW1wb3J0IHR3aWcgZnJvbSAnaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvdHdpZyc7XG5cbmhsanMucmVnaXN0ZXJMYW5ndWFnZSgncGhwJywgcGhwKTtcbmhsanMucmVnaXN0ZXJMYW5ndWFnZSgndHdpZycsIHR3aWcpO1xuXG5obGpzLmhpZ2hsaWdodEFsbCgpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sInNvdXJjZVJvb3QiOiIifQ==