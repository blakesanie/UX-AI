/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_mojolicious"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/mojolicious.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/mojolicious.js ***!
  \******************************************************************************************************/
/***/ (function(module) {

eval("module.exports = function(hljs) {\n  return {\n    subLanguage: 'xml',\n    contains: [\n      {\n        className: 'meta',\n        begin: '^__(END|DATA)__$'\n      },\n    // mojolicious line\n      {\n        begin: \"^\\\\s*%{1,2}={0,2}\", end: '$',\n        subLanguage: 'perl'\n      },\n    // mojolicious block\n      {\n        begin: \"<%{1,2}={0,2}\",\n        end: \"={0,1}%>\",\n        subLanguage: 'perl',\n        excludeBegin: true,\n        excludeEnd: true\n      }\n    ]\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXN5bnRheC1oaWdobGlnaHRlci9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvbW9qb2xpY2lvdXMuanM/ZjNmNCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsdUJBQXVCLElBQUksRUFBRSxJQUFJO0FBQ2pDO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxtQkFBbUIsSUFBSSxFQUFFLElBQUk7QUFDN0IsZ0JBQWdCLElBQUk7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9tb2pvbGljaW91cy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaGxqcykge1xuICByZXR1cm4ge1xuICAgIHN1Ykxhbmd1YWdlOiAneG1sJyxcbiAgICBjb250YWluczogW1xuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICAgICAgYmVnaW46ICdeX18oRU5EfERBVEEpX18kJ1xuICAgICAgfSxcbiAgICAvLyBtb2pvbGljaW91cyBsaW5lXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiBcIl5cXFxccyolezEsMn09ezAsMn1cIiwgZW5kOiAnJCcsXG4gICAgICAgIHN1Ykxhbmd1YWdlOiAncGVybCdcbiAgICAgIH0sXG4gICAgLy8gbW9qb2xpY2lvdXMgYmxvY2tcbiAgICAgIHtcbiAgICAgICAgYmVnaW46IFwiPCV7MSwyfT17MCwyfVwiLFxuICAgICAgICBlbmQ6IFwiPXswLDF9JT5cIixcbiAgICAgICAgc3ViTGFuZ3VhZ2U6ICdwZXJsJyxcbiAgICAgICAgZXhjbHVkZUJlZ2luOiB0cnVlLFxuICAgICAgICBleGNsdWRlRW5kOiB0cnVlXG4gICAgICB9XG4gICAgXVxuICB9O1xufTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/mojolicious.js\n");

/***/ })

}]);