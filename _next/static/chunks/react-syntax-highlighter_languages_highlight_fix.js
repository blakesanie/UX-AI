/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_fix"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/fix.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/fix.js ***!
  \**********************************************************************************************/
/***/ (function(module) {

eval("module.exports = function(hljs) {\n  return {\n    contains: [\n    {\n      begin: /[^\\u2401\\u0001]+/,\n      end: /[\\u2401\\u0001]/,\n      excludeEnd: true,\n      returnBegin: true,\n      returnEnd: false,\n      contains: [\n      {\n        begin: /([^\\u2401\\u0001=]+)/,\n        end: /=([^\\u2401\\u0001=]+)/,\n        returnEnd: true,\n        returnBegin: false,\n        className: 'attr'\n      },\n      {\n        begin: /=/,\n        end: /([\\u2401\\u0001])/,\n        excludeEnd: true,\n        excludeBegin: true,\n        className: 'string'\n      }]\n    }],\n    case_insensitive: true\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXN5bnRheC1oaWdobGlnaHRlci9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvZml4LmpzPzM2ZGIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9maXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGhsanMpIHtcbiAgcmV0dXJuIHtcbiAgICBjb250YWluczogW1xuICAgIHtcbiAgICAgIGJlZ2luOiAvW15cXHUyNDAxXFx1MDAwMV0rLyxcbiAgICAgIGVuZDogL1tcXHUyNDAxXFx1MDAwMV0vLFxuICAgICAgZXhjbHVkZUVuZDogdHJ1ZSxcbiAgICAgIHJldHVybkJlZ2luOiB0cnVlLFxuICAgICAgcmV0dXJuRW5kOiBmYWxzZSxcbiAgICAgIGNvbnRhaW5zOiBbXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAvKFteXFx1MjQwMVxcdTAwMDE9XSspLyxcbiAgICAgICAgZW5kOiAvPShbXlxcdTI0MDFcXHUwMDAxPV0rKS8sXG4gICAgICAgIHJldHVybkVuZDogdHJ1ZSxcbiAgICAgICAgcmV0dXJuQmVnaW46IGZhbHNlLFxuICAgICAgICBjbGFzc05hbWU6ICdhdHRyJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46IC89LyxcbiAgICAgICAgZW5kOiAvKFtcXHUyNDAxXFx1MDAwMV0pLyxcbiAgICAgICAgZXhjbHVkZUVuZDogdHJ1ZSxcbiAgICAgICAgZXhjbHVkZUJlZ2luOiB0cnVlLFxuICAgICAgICBjbGFzc05hbWU6ICdzdHJpbmcnXG4gICAgICB9XVxuICAgIH1dLFxuICAgIGNhc2VfaW5zZW5zaXRpdmU6IHRydWVcbiAgfTtcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/fix.js\n");

/***/ })

}]);