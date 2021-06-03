/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_taggerscript"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/taggerscript.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/taggerscript.js ***!
  \*******************************************************************************************************/
/***/ (function(module) {

eval("module.exports = function(hljs) {\n\n  var COMMENT = {\n    className: 'comment',\n    begin: /\\$noop\\(/,\n    end: /\\)/,\n    contains: [{\n      begin: /\\(/,\n      end: /\\)/,\n      contains: ['self', {\n        begin: /\\\\./\n      }]\n    }],\n    relevance: 10\n  };\n\n  var FUNCTION = {\n    className: 'keyword',\n    begin: /\\$(?!noop)[a-zA-Z][_a-zA-Z0-9]*/,\n    end: /\\(/,\n    excludeEnd: true\n  };\n\n  var VARIABLE = {\n    className: 'variable',\n    begin: /%[_a-zA-Z0-9:]*/,\n    end: '%'\n  };\n\n  var ESCAPE_SEQUENCE = {\n    className: 'symbol',\n    begin: /\\\\./\n  };\n\n  return {\n    contains: [\n      COMMENT,\n      FUNCTION,\n      VARIABLE,\n      ESCAPE_SEQUENCE\n    ]\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXN5bnRheC1oaWdobGlnaHRlci9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvdGFnZ2Vyc2NyaXB0LmpzP2Y3ZmIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXIvbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3RhZ2dlcnNjcmlwdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaGxqcykge1xuXG4gIHZhciBDT01NRU5UID0ge1xuICAgIGNsYXNzTmFtZTogJ2NvbW1lbnQnLFxuICAgIGJlZ2luOiAvXFwkbm9vcFxcKC8sXG4gICAgZW5kOiAvXFwpLyxcbiAgICBjb250YWluczogW3tcbiAgICAgIGJlZ2luOiAvXFwoLyxcbiAgICAgIGVuZDogL1xcKS8sXG4gICAgICBjb250YWluczogWydzZWxmJywge1xuICAgICAgICBiZWdpbjogL1xcXFwuL1xuICAgICAgfV1cbiAgICB9XSxcbiAgICByZWxldmFuY2U6IDEwXG4gIH07XG5cbiAgdmFyIEZVTkNUSU9OID0ge1xuICAgIGNsYXNzTmFtZTogJ2tleXdvcmQnLFxuICAgIGJlZ2luOiAvXFwkKD8hbm9vcClbYS16QS1aXVtfYS16QS1aMC05XSovLFxuICAgIGVuZDogL1xcKC8sXG4gICAgZXhjbHVkZUVuZDogdHJ1ZVxuICB9O1xuXG4gIHZhciBWQVJJQUJMRSA9IHtcbiAgICBjbGFzc05hbWU6ICd2YXJpYWJsZScsXG4gICAgYmVnaW46IC8lW19hLXpBLVowLTk6XSovLFxuICAgIGVuZDogJyUnXG4gIH07XG5cbiAgdmFyIEVTQ0FQRV9TRVFVRU5DRSA9IHtcbiAgICBjbGFzc05hbWU6ICdzeW1ib2wnLFxuICAgIGJlZ2luOiAvXFxcXC4vXG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBjb250YWluczogW1xuICAgICAgQ09NTUVOVCxcbiAgICAgIEZVTkNUSU9OLFxuICAgICAgVkFSSUFCTEUsXG4gICAgICBFU0NBUEVfU0VRVUVOQ0VcbiAgICBdXG4gIH07XG59OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/taggerscript.js\n");

/***/ })

}]);