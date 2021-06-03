/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_ebnf"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/ebnf.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/ebnf.js ***!
  \***********************************************************************************************/
/***/ (function(module) {

eval("module.exports = function(hljs) {\n    var commentMode = hljs.COMMENT(/\\(\\*/, /\\*\\)/);\n\n    var nonTerminalMode = {\n        className: \"attribute\",\n        begin: /^[ ]*[a-zA-Z][a-zA-Z-]*([\\s-]+[a-zA-Z][a-zA-Z]*)*/\n    };\n\n    var specialSequenceMode = {\n        className: \"meta\",\n        begin: /\\?.*\\?/\n    };\n\n    var ruleBodyMode = {\n        begin: /=/, end: /;/,\n        contains: [\n            commentMode,\n            specialSequenceMode,\n            // terminals\n            hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE\n        ]\n    };\n\n    return {\n        illegal: /\\S/,\n        contains: [\n            commentMode,\n            nonTerminalMode,\n            ruleBodyMode\n        ]\n    };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXN5bnRheC1oaWdobGlnaHRlci9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvZWJuZi5qcz9mODhkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL3JlYWN0LXN5bnRheC1oaWdobGlnaHRlci9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvZWJuZi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaGxqcykge1xuICAgIHZhciBjb21tZW50TW9kZSA9IGhsanMuQ09NTUVOVCgvXFwoXFwqLywgL1xcKlxcKS8pO1xuXG4gICAgdmFyIG5vblRlcm1pbmFsTW9kZSA9IHtcbiAgICAgICAgY2xhc3NOYW1lOiBcImF0dHJpYnV0ZVwiLFxuICAgICAgICBiZWdpbjogL15bIF0qW2EtekEtWl1bYS16QS1aLV0qKFtcXHMtXStbYS16QS1aXVthLXpBLVpdKikqL1xuICAgIH07XG5cbiAgICB2YXIgc3BlY2lhbFNlcXVlbmNlTW9kZSA9IHtcbiAgICAgICAgY2xhc3NOYW1lOiBcIm1ldGFcIixcbiAgICAgICAgYmVnaW46IC9cXD8uKlxcPy9cbiAgICB9O1xuXG4gICAgdmFyIHJ1bGVCb2R5TW9kZSA9IHtcbiAgICAgICAgYmVnaW46IC89LywgZW5kOiAvOy8sXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICBjb21tZW50TW9kZSxcbiAgICAgICAgICAgIHNwZWNpYWxTZXF1ZW5jZU1vZGUsXG4gICAgICAgICAgICAvLyB0ZXJtaW5hbHNcbiAgICAgICAgICAgIGhsanMuQVBPU19TVFJJTkdfTU9ERSwgaGxqcy5RVU9URV9TVFJJTkdfTU9ERVxuICAgICAgICBdXG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGlsbGVnYWw6IC9cXFMvLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgY29tbWVudE1vZGUsXG4gICAgICAgICAgICBub25UZXJtaW5hbE1vZGUsXG4gICAgICAgICAgICBydWxlQm9keU1vZGVcbiAgICAgICAgXVxuICAgIH07XG59OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/ebnf.js\n");

/***/ })

}]);