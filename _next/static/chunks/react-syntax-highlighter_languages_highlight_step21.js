/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_step21"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/step21.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/step21.js ***!
  \*************************************************************************************************/
/***/ (function(module) {

eval("module.exports = function(hljs) {\n  var STEP21_IDENT_RE = '[A-Z_][A-Z0-9_.]*';\n  var STEP21_KEYWORDS = {\n    keyword: 'HEADER ENDSEC DATA'\n  };\n  var STEP21_START = {\n    className: 'meta',\n    begin: 'ISO-10303-21;',\n    relevance: 10\n  };\n  var STEP21_CLOSE = {\n    className: 'meta',\n    begin: 'END-ISO-10303-21;',\n    relevance: 10\n  };\n\n  return {\n    aliases: ['p21', 'step', 'stp'],\n    case_insensitive: true, // STEP 21 is case insensitive in theory, in practice all non-comments are capitalized.\n    lexemes: STEP21_IDENT_RE,\n    keywords: STEP21_KEYWORDS,\n    contains: [\n      STEP21_START,\n      STEP21_CLOSE,\n      hljs.C_LINE_COMMENT_MODE,\n      hljs.C_BLOCK_COMMENT_MODE,\n      hljs.COMMENT('/\\\\*\\\\*!', '\\\\*/'),\n      hljs.C_NUMBER_MODE,\n      hljs.inherit(hljs.APOS_STRING_MODE, {illegal: null}),\n      hljs.inherit(hljs.QUOTE_STRING_MODE, {illegal: null}),\n      {\n        className: 'string',\n        begin: \"'\", end: \"'\"\n      },\n      {\n        className: 'symbol',\n        variants: [\n          {\n            begin: '#', end: '\\\\d+',\n            illegal: '\\\\W'\n          }\n        ]\n      }\n    ]\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXN5bnRheC1oaWdobGlnaHRlci9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvc3RlcDIxLmpzP2Q1MzQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsY0FBYztBQUN6RCw0Q0FBNEMsY0FBYztBQUMxRDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL3JlYWN0LXN5bnRheC1oaWdobGlnaHRlci9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvc3RlcDIxLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihobGpzKSB7XG4gIHZhciBTVEVQMjFfSURFTlRfUkUgPSAnW0EtWl9dW0EtWjAtOV8uXSonO1xuICB2YXIgU1RFUDIxX0tFWVdPUkRTID0ge1xuICAgIGtleXdvcmQ6ICdIRUFERVIgRU5EU0VDIERBVEEnXG4gIH07XG4gIHZhciBTVEVQMjFfU1RBUlQgPSB7XG4gICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgYmVnaW46ICdJU08tMTAzMDMtMjE7JyxcbiAgICByZWxldmFuY2U6IDEwXG4gIH07XG4gIHZhciBTVEVQMjFfQ0xPU0UgPSB7XG4gICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgYmVnaW46ICdFTkQtSVNPLTEwMzAzLTIxOycsXG4gICAgcmVsZXZhbmNlOiAxMFxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgYWxpYXNlczogWydwMjEnLCAnc3RlcCcsICdzdHAnXSxcbiAgICBjYXNlX2luc2Vuc2l0aXZlOiB0cnVlLCAvLyBTVEVQIDIxIGlzIGNhc2UgaW5zZW5zaXRpdmUgaW4gdGhlb3J5LCBpbiBwcmFjdGljZSBhbGwgbm9uLWNvbW1lbnRzIGFyZSBjYXBpdGFsaXplZC5cbiAgICBsZXhlbWVzOiBTVEVQMjFfSURFTlRfUkUsXG4gICAga2V5d29yZHM6IFNURVAyMV9LRVlXT1JEUyxcbiAgICBjb250YWluczogW1xuICAgICAgU1RFUDIxX1NUQVJULFxuICAgICAgU1RFUDIxX0NMT1NFLFxuICAgICAgaGxqcy5DX0xJTkVfQ09NTUVOVF9NT0RFLFxuICAgICAgaGxqcy5DX0JMT0NLX0NPTU1FTlRfTU9ERSxcbiAgICAgIGhsanMuQ09NTUVOVCgnL1xcXFwqXFxcXCohJywgJ1xcXFwqLycpLFxuICAgICAgaGxqcy5DX05VTUJFUl9NT0RFLFxuICAgICAgaGxqcy5pbmhlcml0KGhsanMuQVBPU19TVFJJTkdfTU9ERSwge2lsbGVnYWw6IG51bGx9KSxcbiAgICAgIGhsanMuaW5oZXJpdChobGpzLlFVT1RFX1NUUklOR19NT0RFLCB7aWxsZWdhbDogbnVsbH0pLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgICAgICBiZWdpbjogXCInXCIsIGVuZDogXCInXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3N5bWJvbCcsXG4gICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW46ICcjJywgZW5kOiAnXFxcXGQrJyxcbiAgICAgICAgICAgIGlsbGVnYWw6ICdcXFxcVydcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH07XG59OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/step21.js\n");

/***/ })

}]);