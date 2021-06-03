/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_dust"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/dust.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/dust.js ***!
  \***********************************************************************************************/
/***/ (function(module) {

eval("module.exports = function(hljs) {\n  var EXPRESSION_KEYWORDS = 'if eq ne lt lte gt gte select default math sep';\n  return {\n    aliases: ['dst'],\n    case_insensitive: true,\n    subLanguage: 'xml',\n    contains: [\n      {\n        className: 'template-tag',\n        begin: /\\{[#\\/]/, end: /\\}/, illegal: /;/,\n        contains: [\n          {\n            className: 'name',\n            begin: /[a-zA-Z\\.-]+/,\n            starts: {\n              endsWithParent: true, relevance: 0,\n              contains: [\n                hljs.QUOTE_STRING_MODE\n              ]\n            }\n          }\n        ]\n      },\n      {\n        className: 'template-variable',\n        begin: /\\{/, end: /\\}/, illegal: /;/,\n        keywords: EXPRESSION_KEYWORDS\n      }\n    ]\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXN5bnRheC1oaWdobGlnaHRlci9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvZHVzdC5qcz8wOTAwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixnQkFBZ0IsY0FBYztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLGtCQUFrQixXQUFXLGNBQWM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXIvbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2R1c3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGhsanMpIHtcbiAgdmFyIEVYUFJFU1NJT05fS0VZV09SRFMgPSAnaWYgZXEgbmUgbHQgbHRlIGd0IGd0ZSBzZWxlY3QgZGVmYXVsdCBtYXRoIHNlcCc7XG4gIHJldHVybiB7XG4gICAgYWxpYXNlczogWydkc3QnXSxcbiAgICBjYXNlX2luc2Vuc2l0aXZlOiB0cnVlLFxuICAgIHN1Ykxhbmd1YWdlOiAneG1sJyxcbiAgICBjb250YWluczogW1xuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICd0ZW1wbGF0ZS10YWcnLFxuICAgICAgICBiZWdpbjogL1xce1sjXFwvXS8sIGVuZDogL1xcfS8sIGlsbGVnYWw6IC87LyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICduYW1lJyxcbiAgICAgICAgICAgIGJlZ2luOiAvW2EtekEtWlxcLi1dKy8sXG4gICAgICAgICAgICBzdGFydHM6IHtcbiAgICAgICAgICAgICAgZW5kc1dpdGhQYXJlbnQ6IHRydWUsIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgICAgICBobGpzLlFVT1RFX1NUUklOR19NT0RFXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3RlbXBsYXRlLXZhcmlhYmxlJyxcbiAgICAgICAgYmVnaW46IC9cXHsvLCBlbmQ6IC9cXH0vLCBpbGxlZ2FsOiAvOy8sXG4gICAgICAgIGtleXdvcmRzOiBFWFBSRVNTSU9OX0tFWVdPUkRTXG4gICAgICB9XG4gICAgXVxuICB9O1xufTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/dust.js\n");

/***/ })

}]);