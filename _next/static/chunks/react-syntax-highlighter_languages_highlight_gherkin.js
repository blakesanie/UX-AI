/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_gherkin"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/gherkin.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/gherkin.js ***!
  \**************************************************************************************************/
/***/ (function(module) {

eval("module.exports = function (hljs) {\n  return {\n    aliases: ['feature'],\n    keywords: 'Feature Background Ability Business\\ Need Scenario Scenarios Scenario\\ Outline Scenario\\ Template Examples Given And Then But When',\n    contains: [\n      {\n        className: 'symbol',\n        begin: '\\\\*',\n        relevance: 0\n      },\n      {\n        className: 'meta',\n        begin: '@[^@\\\\s]+'\n      },\n      {\n        begin: '\\\\|', end: '\\\\|\\\\w*$',\n        contains: [\n          {\n            className: 'string',\n            begin: '[^|]+'\n          }\n        ]\n      },\n      {\n        className: 'variable',\n        begin: '<', end: '>'\n      },\n      hljs.HASH_COMMENT_MODE,\n      {\n        className: 'string',\n        begin: '\"\"\"', end: '\"\"\"'\n      },\n      hljs.QUOTE_STRING_MODE\n    ]\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXN5bnRheC1oaWdobGlnaHRlci9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvZ2hlcmtpbi5qcz84MDZlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9naGVya2luLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaGxqcykge1xuICByZXR1cm4ge1xuICAgIGFsaWFzZXM6IFsnZmVhdHVyZSddLFxuICAgIGtleXdvcmRzOiAnRmVhdHVyZSBCYWNrZ3JvdW5kIEFiaWxpdHkgQnVzaW5lc3NcXCBOZWVkIFNjZW5hcmlvIFNjZW5hcmlvcyBTY2VuYXJpb1xcIE91dGxpbmUgU2NlbmFyaW9cXCBUZW1wbGF0ZSBFeGFtcGxlcyBHaXZlbiBBbmQgVGhlbiBCdXQgV2hlbicsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnc3ltYm9sJyxcbiAgICAgICAgYmVnaW46ICdcXFxcKicsXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgICAgIGJlZ2luOiAnQFteQFxcXFxzXSsnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogJ1xcXFx8JywgZW5kOiAnXFxcXHxcXFxcdyokJyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgYmVnaW46ICdbXnxdKydcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3ZhcmlhYmxlJyxcbiAgICAgICAgYmVnaW46ICc8JywgZW5kOiAnPidcbiAgICAgIH0sXG4gICAgICBobGpzLkhBU0hfQ09NTUVOVF9NT0RFLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgICAgICBiZWdpbjogJ1wiXCJcIicsIGVuZDogJ1wiXCJcIidcbiAgICAgIH0sXG4gICAgICBobGpzLlFVT1RFX1NUUklOR19NT0RFXG4gICAgXVxuICB9O1xufTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/gherkin.js\n");

/***/ })

}]);