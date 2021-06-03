/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_tap"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/tap.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/tap.js ***!
  \**********************************************************************************************/
/***/ (function(module) {

eval("module.exports = function(hljs) {\n  return {\n    case_insensitive: true,\n    contains: [\n      hljs.HASH_COMMENT_MODE,\n      // version of format and total amount of testcases\n      {\n        className: 'meta',\n        variants: [\n          { begin: '^TAP version (\\\\d+)$' },\n          { begin: '^1\\\\.\\\\.(\\\\d+)$' }\n        ],\n      },\n      // YAML block\n      {\n        begin: '(\\s+)?---$', end: '\\\\.\\\\.\\\\.$',\n        subLanguage: 'yaml',\n        relevance: 0\n      },\n\t  // testcase number\n      {\n        className: 'number',\n        begin: ' (\\\\d+) '\n      },\n\t  // testcase status and description\n      {\n        className: 'symbol',\n        variants: [\n          { begin: '^ok' },\n          { begin: '^not ok' }\n        ],\n      },\n    ]\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXN5bnRheC1oaWdobGlnaHRlci9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvdGFwLmpzPzEwODgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxnQ0FBZ0M7QUFDM0MsV0FBVztBQUNYO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGVBQWU7QUFDMUIsV0FBVztBQUNYO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXIvbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3RhcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaGxqcykge1xuICByZXR1cm4ge1xuICAgIGNhc2VfaW5zZW5zaXRpdmU6IHRydWUsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIGhsanMuSEFTSF9DT01NRU5UX01PREUsXG4gICAgICAvLyB2ZXJzaW9uIG9mIGZvcm1hdCBhbmQgdG90YWwgYW1vdW50IG9mIHRlc3RjYXNlc1xuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICB7IGJlZ2luOiAnXlRBUCB2ZXJzaW9uIChcXFxcZCspJCcgfSxcbiAgICAgICAgICB7IGJlZ2luOiAnXjFcXFxcLlxcXFwuKFxcXFxkKykkJyB9XG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAgLy8gWUFNTCBibG9ja1xuICAgICAge1xuICAgICAgICBiZWdpbjogJyhcXHMrKT8tLS0kJywgZW5kOiAnXFxcXC5cXFxcLlxcXFwuJCcsXG4gICAgICAgIHN1Ykxhbmd1YWdlOiAneWFtbCcsXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSxcblx0ICAvLyB0ZXN0Y2FzZSBudW1iZXJcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICAgICAgYmVnaW46ICcgKFxcXFxkKykgJ1xuICAgICAgfSxcblx0ICAvLyB0ZXN0Y2FzZSBzdGF0dXMgYW5kIGRlc2NyaXB0aW9uXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3N5bWJvbCcsXG4gICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAgeyBiZWdpbjogJ15vaycgfSxcbiAgICAgICAgICB7IGJlZ2luOiAnXm5vdCBvaycgfVxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICBdXG4gIH07XG59OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/tap.js\n");

/***/ })

}]);