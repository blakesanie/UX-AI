/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_go"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/go.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/go.js ***!
  \*********************************************************************************************/
/***/ (function(module) {

eval("module.exports = function(hljs) {\n  var GO_KEYWORDS = {\n    keyword:\n      'break default func interface select case map struct chan else goto package switch ' +\n      'const fallthrough if range type continue for import return var go defer ' +\n      'bool byte complex64 complex128 float32 float64 int8 int16 int32 int64 string uint8 ' +\n      'uint16 uint32 uint64 int uint uintptr rune',\n    literal:\n       'true false iota nil',\n    built_in:\n      'append cap close complex copy imag len make new panic print println real recover delete'\n  };\n  return {\n    aliases: ['golang'],\n    keywords: GO_KEYWORDS,\n    illegal: '</',\n    contains: [\n      hljs.C_LINE_COMMENT_MODE,\n      hljs.C_BLOCK_COMMENT_MODE,\n      {\n        className: 'string',\n        variants: [\n          hljs.QUOTE_STRING_MODE,\n          {begin: '\\'', end: '[^\\\\\\\\]\\''},\n          {begin: '`', end: '`'},\n        ]\n      },\n      {\n        className: 'number',\n        variants: [\n          {begin: hljs.C_NUMBER_RE + '[i]', relevance: 1},\n          hljs.C_NUMBER_MODE\n        ]\n      },\n      {\n        begin: /:=/ // relevance booster\n      },\n      {\n        className: 'function',\n        beginKeywords: 'func', end: /\\s*\\{/, excludeEnd: true,\n        contains: [\n          hljs.TITLE_MODE,\n          {\n            className: 'params',\n            begin: /\\(/, end: /\\)/,\n            keywords: GO_KEYWORDS,\n            illegal: /[\"']/\n          }\n        ]\n      }\n    ]\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXN5bnRheC1oaWdobGlnaHRlci9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvZ28uanM/OGIyMyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyw4QkFBOEI7QUFDekMsV0FBVyxxQkFBcUI7QUFDaEM7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsV0FBVyw4Q0FBOEM7QUFDekQ7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9nby5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaGxqcykge1xuICB2YXIgR09fS0VZV09SRFMgPSB7XG4gICAga2V5d29yZDpcbiAgICAgICdicmVhayBkZWZhdWx0IGZ1bmMgaW50ZXJmYWNlIHNlbGVjdCBjYXNlIG1hcCBzdHJ1Y3QgY2hhbiBlbHNlIGdvdG8gcGFja2FnZSBzd2l0Y2ggJyArXG4gICAgICAnY29uc3QgZmFsbHRocm91Z2ggaWYgcmFuZ2UgdHlwZSBjb250aW51ZSBmb3IgaW1wb3J0IHJldHVybiB2YXIgZ28gZGVmZXIgJyArXG4gICAgICAnYm9vbCBieXRlIGNvbXBsZXg2NCBjb21wbGV4MTI4IGZsb2F0MzIgZmxvYXQ2NCBpbnQ4IGludDE2IGludDMyIGludDY0IHN0cmluZyB1aW50OCAnICtcbiAgICAgICd1aW50MTYgdWludDMyIHVpbnQ2NCBpbnQgdWludCB1aW50cHRyIHJ1bmUnLFxuICAgIGxpdGVyYWw6XG4gICAgICAgJ3RydWUgZmFsc2UgaW90YSBuaWwnLFxuICAgIGJ1aWx0X2luOlxuICAgICAgJ2FwcGVuZCBjYXAgY2xvc2UgY29tcGxleCBjb3B5IGltYWcgbGVuIG1ha2UgbmV3IHBhbmljIHByaW50IHByaW50bG4gcmVhbCByZWNvdmVyIGRlbGV0ZSdcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBhbGlhc2VzOiBbJ2dvbGFuZyddLFxuICAgIGtleXdvcmRzOiBHT19LRVlXT1JEUyxcbiAgICBpbGxlZ2FsOiAnPC8nLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBobGpzLkNfTElORV9DT01NRU5UX01PREUsXG4gICAgICBobGpzLkNfQkxPQ0tfQ09NTUVOVF9NT0RFLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgICAgICB2YXJpYW50czogW1xuICAgICAgICAgIGhsanMuUVVPVEVfU1RSSU5HX01PREUsXG4gICAgICAgICAge2JlZ2luOiAnXFwnJywgZW5kOiAnW15cXFxcXFxcXF1cXCcnfSxcbiAgICAgICAgICB7YmVnaW46ICdgJywgZW5kOiAnYCd9LFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdudW1iZXInLFxuICAgICAgICB2YXJpYW50czogW1xuICAgICAgICAgIHtiZWdpbjogaGxqcy5DX05VTUJFUl9SRSArICdbaV0nLCByZWxldmFuY2U6IDF9LFxuICAgICAgICAgIGhsanMuQ19OVU1CRVJfTU9ERVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogLzo9LyAvLyByZWxldmFuY2UgYm9vc3RlclxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnZnVuY3Rpb24nLFxuICAgICAgICBiZWdpbktleXdvcmRzOiAnZnVuYycsIGVuZDogL1xccypcXHsvLCBleGNsdWRlRW5kOiB0cnVlLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIGhsanMuVElUTEVfTU9ERSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdwYXJhbXMnLFxuICAgICAgICAgICAgYmVnaW46IC9cXCgvLCBlbmQ6IC9cXCkvLFxuICAgICAgICAgICAga2V5d29yZHM6IEdPX0tFWVdPUkRTLFxuICAgICAgICAgICAgaWxsZWdhbDogL1tcIiddL1xuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfTtcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/go.js\n");

/***/ })

}]);