/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_elm"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/elm.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/elm.js ***!
  \**********************************************************************************************/
/***/ (function(module) {

eval("module.exports = function(hljs) {\n  var COMMENT = {\n    variants: [\n      hljs.COMMENT('--', '$'),\n      hljs.COMMENT(\n        '{-',\n        '-}',\n        {\n          contains: ['self']\n        }\n      )\n    ]\n  };\n\n  var CONSTRUCTOR = {\n    className: 'type',\n    begin: '\\\\b[A-Z][\\\\w\\']*', // TODO: other constructors (built-in, infix).\n    relevance: 0\n  };\n\n  var LIST = {\n    begin: '\\\\(', end: '\\\\)',\n    illegal: '\"',\n    contains: [\n      {className: 'type', begin: '\\\\b[A-Z][\\\\w]*(\\\\((\\\\.\\\\.|,|\\\\w+)\\\\))?'},\n      COMMENT\n    ]\n  };\n\n  var RECORD = {\n    begin: '{', end: '}',\n    contains: LIST.contains\n  };\n\n  var CHARACTER = {\n    className: 'string',\n    begin: '\\'\\\\\\\\?.', end: '\\'',\n    illegal: '.'\n  };\n\n  return {\n    keywords:\n      'let in if then else case of where module import exposing ' +\n      'type alias as infix infixl infixr port effect command subscription',\n    contains: [\n\n      // Top-level constructions.\n\n      {\n        beginKeywords: 'port effect module', end: 'exposing',\n        keywords: 'port effect module where command subscription exposing',\n        contains: [LIST, COMMENT],\n        illegal: '\\\\W\\\\.|;'\n      },\n      {\n        begin: 'import', end: '$',\n        keywords: 'import as exposing',\n        contains: [LIST, COMMENT],\n        illegal: '\\\\W\\\\.|;'\n      },\n      {\n        begin: 'type', end: '$',\n        keywords: 'type alias',\n        contains: [CONSTRUCTOR, LIST, RECORD, COMMENT]\n      },\n      {\n        beginKeywords: 'infix infixl infixr', end: '$',\n        contains: [hljs.C_NUMBER_MODE, COMMENT]\n      },\n      {\n        begin: 'port', end: '$',\n        keywords: 'port',\n        contains: [COMMENT]\n      },\n\n      // Literals and names.\n\n      CHARACTER,\n      hljs.QUOTE_STRING_MODE,\n      hljs.C_NUMBER_MODE,\n      CONSTRUCTOR,\n      hljs.inherit(hljs.TITLE_MODE, {begin: '^[_a-z][\\\\w\\']*'}),\n      COMMENT,\n\n      {begin: '->|<-'} // No markup, relevance booster\n    ],\n    illegal: /;/\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXN5bnRheC1oaWdobGlnaHRlci9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvZWxtLmpzP2NlYjQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLG1FQUFtRTtBQUMxRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLFVBQVU7QUFDdkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUIsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLHlCQUF5QjtBQUM5RDs7QUFFQSxPQUFPLGVBQWU7QUFDdEI7QUFDQSxlQUFlO0FBQ2Y7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXIvbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2VsbS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaGxqcykge1xuICB2YXIgQ09NTUVOVCA9IHtcbiAgICB2YXJpYW50czogW1xuICAgICAgaGxqcy5DT01NRU5UKCctLScsICckJyksXG4gICAgICBobGpzLkNPTU1FTlQoXG4gICAgICAgICd7LScsXG4gICAgICAgICctfScsXG4gICAgICAgIHtcbiAgICAgICAgICBjb250YWluczogWydzZWxmJ11cbiAgICAgICAgfVxuICAgICAgKVxuICAgIF1cbiAgfTtcblxuICB2YXIgQ09OU1RSVUNUT1IgPSB7XG4gICAgY2xhc3NOYW1lOiAndHlwZScsXG4gICAgYmVnaW46ICdcXFxcYltBLVpdW1xcXFx3XFwnXSonLCAvLyBUT0RPOiBvdGhlciBjb25zdHJ1Y3RvcnMgKGJ1aWx0LWluLCBpbmZpeCkuXG4gICAgcmVsZXZhbmNlOiAwXG4gIH07XG5cbiAgdmFyIExJU1QgPSB7XG4gICAgYmVnaW46ICdcXFxcKCcsIGVuZDogJ1xcXFwpJyxcbiAgICBpbGxlZ2FsOiAnXCInLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICB7Y2xhc3NOYW1lOiAndHlwZScsIGJlZ2luOiAnXFxcXGJbQS1aXVtcXFxcd10qKFxcXFwoKFxcXFwuXFxcXC58LHxcXFxcdyspXFxcXCkpPyd9LFxuICAgICAgQ09NTUVOVFxuICAgIF1cbiAgfTtcblxuICB2YXIgUkVDT1JEID0ge1xuICAgIGJlZ2luOiAneycsIGVuZDogJ30nLFxuICAgIGNvbnRhaW5zOiBMSVNULmNvbnRhaW5zXG4gIH07XG5cbiAgdmFyIENIQVJBQ1RFUiA9IHtcbiAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgIGJlZ2luOiAnXFwnXFxcXFxcXFw/LicsIGVuZDogJ1xcJycsXG4gICAgaWxsZWdhbDogJy4nXG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBrZXl3b3JkczpcbiAgICAgICdsZXQgaW4gaWYgdGhlbiBlbHNlIGNhc2Ugb2Ygd2hlcmUgbW9kdWxlIGltcG9ydCBleHBvc2luZyAnICtcbiAgICAgICd0eXBlIGFsaWFzIGFzIGluZml4IGluZml4bCBpbmZpeHIgcG9ydCBlZmZlY3QgY29tbWFuZCBzdWJzY3JpcHRpb24nLFxuICAgIGNvbnRhaW5zOiBbXG5cbiAgICAgIC8vIFRvcC1sZXZlbCBjb25zdHJ1Y3Rpb25zLlxuXG4gICAgICB7XG4gICAgICAgIGJlZ2luS2V5d29yZHM6ICdwb3J0IGVmZmVjdCBtb2R1bGUnLCBlbmQ6ICdleHBvc2luZycsXG4gICAgICAgIGtleXdvcmRzOiAncG9ydCBlZmZlY3QgbW9kdWxlIHdoZXJlIGNvbW1hbmQgc3Vic2NyaXB0aW9uIGV4cG9zaW5nJyxcbiAgICAgICAgY29udGFpbnM6IFtMSVNULCBDT01NRU5UXSxcbiAgICAgICAgaWxsZWdhbDogJ1xcXFxXXFxcXC58OydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAnaW1wb3J0JywgZW5kOiAnJCcsXG4gICAgICAgIGtleXdvcmRzOiAnaW1wb3J0IGFzIGV4cG9zaW5nJyxcbiAgICAgICAgY29udGFpbnM6IFtMSVNULCBDT01NRU5UXSxcbiAgICAgICAgaWxsZWdhbDogJ1xcXFxXXFxcXC58OydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAndHlwZScsIGVuZDogJyQnLFxuICAgICAgICBrZXl3b3JkczogJ3R5cGUgYWxpYXMnLFxuICAgICAgICBjb250YWluczogW0NPTlNUUlVDVE9SLCBMSVNULCBSRUNPUkQsIENPTU1FTlRdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbktleXdvcmRzOiAnaW5maXggaW5maXhsIGluZml4cicsIGVuZDogJyQnLFxuICAgICAgICBjb250YWluczogW2hsanMuQ19OVU1CRVJfTU9ERSwgQ09NTUVOVF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAncG9ydCcsIGVuZDogJyQnLFxuICAgICAgICBrZXl3b3JkczogJ3BvcnQnLFxuICAgICAgICBjb250YWluczogW0NPTU1FTlRdXG4gICAgICB9LFxuXG4gICAgICAvLyBMaXRlcmFscyBhbmQgbmFtZXMuXG5cbiAgICAgIENIQVJBQ1RFUixcbiAgICAgIGhsanMuUVVPVEVfU1RSSU5HX01PREUsXG4gICAgICBobGpzLkNfTlVNQkVSX01PREUsXG4gICAgICBDT05TVFJVQ1RPUixcbiAgICAgIGhsanMuaW5oZXJpdChobGpzLlRJVExFX01PREUsIHtiZWdpbjogJ15bX2Etel1bXFxcXHdcXCddKid9KSxcbiAgICAgIENPTU1FTlQsXG5cbiAgICAgIHtiZWdpbjogJy0+fDwtJ30gLy8gTm8gbWFya3VwLCByZWxldmFuY2UgYm9vc3RlclxuICAgIF0sXG4gICAgaWxsZWdhbDogLzsvXG4gIH07XG59OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/elm.js\n");

/***/ })

}]);