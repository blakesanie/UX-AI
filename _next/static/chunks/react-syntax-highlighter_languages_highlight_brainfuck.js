/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_brainfuck"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/brainfuck.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/brainfuck.js ***!
  \****************************************************************************************************/
/***/ (function(module) {

eval("module.exports = function(hljs){\n  var LITERAL = {\n    className: 'literal',\n    begin: '[\\\\+\\\\-]',\n    relevance: 0\n  };\n  return {\n    aliases: ['bf'],\n    contains: [\n      hljs.COMMENT(\n        '[^\\\\[\\\\]\\\\.,\\\\+\\\\-<> \\r\\n]',\n        '[\\\\[\\\\]\\\\.,\\\\+\\\\-<> \\r\\n]',\n        {\n          returnEnd: true,\n          relevance: 0\n        }\n      ),\n      {\n        className: 'title',\n        begin: '[\\\\[\\\\]]',\n        relevance: 0\n      },\n      {\n        className: 'string',\n        begin: '[\\\\.,]',\n        relevance: 0\n      },\n      {\n        // this mode works as the only relevance counter\n        begin: /\\+\\+|\\-\\-/, returnBegin: true,\n        contains: [LITERAL]\n      },\n      LITERAL\n    ]\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXN5bnRheC1oaWdobGlnaHRlci9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvYnJhaW5mdWNrLmpzP2RkZjciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL3JlYWN0LXN5bnRheC1oaWdobGlnaHRlci9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvYnJhaW5mdWNrLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihobGpzKXtcbiAgdmFyIExJVEVSQUwgPSB7XG4gICAgY2xhc3NOYW1lOiAnbGl0ZXJhbCcsXG4gICAgYmVnaW46ICdbXFxcXCtcXFxcLV0nLFxuICAgIHJlbGV2YW5jZTogMFxuICB9O1xuICByZXR1cm4ge1xuICAgIGFsaWFzZXM6IFsnYmYnXSxcbiAgICBjb250YWluczogW1xuICAgICAgaGxqcy5DT01NRU5UKFxuICAgICAgICAnW15cXFxcW1xcXFxdXFxcXC4sXFxcXCtcXFxcLTw+IFxcclxcbl0nLFxuICAgICAgICAnW1xcXFxbXFxcXF1cXFxcLixcXFxcK1xcXFwtPD4gXFxyXFxuXScsXG4gICAgICAgIHtcbiAgICAgICAgICByZXR1cm5FbmQ6IHRydWUsXG4gICAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICAgIH1cbiAgICAgICksXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3RpdGxlJyxcbiAgICAgICAgYmVnaW46ICdbXFxcXFtcXFxcXV0nLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgICAgIGJlZ2luOiAnW1xcXFwuLF0nLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIC8vIHRoaXMgbW9kZSB3b3JrcyBhcyB0aGUgb25seSByZWxldmFuY2UgY291bnRlclxuICAgICAgICBiZWdpbjogL1xcK1xcK3xcXC1cXC0vLCByZXR1cm5CZWdpbjogdHJ1ZSxcbiAgICAgICAgY29udGFpbnM6IFtMSVRFUkFMXVxuICAgICAgfSxcbiAgICAgIExJVEVSQUxcbiAgICBdXG4gIH07XG59OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/brainfuck.js\n");

/***/ })

}]);