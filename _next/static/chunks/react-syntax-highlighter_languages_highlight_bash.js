/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_bash"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/bash.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/bash.js ***!
  \***********************************************************************************************/
/***/ (function(module) {

eval("module.exports = function(hljs) {\n  var VAR = {\n    className: 'variable',\n    variants: [\n      {begin: /\\$[\\w\\d#@][\\w\\d_]*/},\n      {begin: /\\$\\{(.*?)}/}\n    ]\n  };\n  var QUOTE_STRING = {\n    className: 'string',\n    begin: /\"/, end: /\"/,\n    contains: [\n      hljs.BACKSLASH_ESCAPE,\n      VAR,\n      {\n        className: 'variable',\n        begin: /\\$\\(/, end: /\\)/,\n        contains: [hljs.BACKSLASH_ESCAPE]\n      }\n    ]\n  };\n  var ESCAPED_QUOTE = {\n    className: '',\n    begin: /\\\\\"/\n\n  };\n  var APOS_STRING = {\n    className: 'string',\n    begin: /'/, end: /'/\n  };\n\n  return {\n    aliases: ['sh', 'zsh'],\n    lexemes: /\\b-?[a-z\\._]+\\b/,\n    keywords: {\n      keyword:\n        'if then else elif fi for while in do done case esac function',\n      literal:\n        'true false',\n      built_in:\n        // Shell built-ins\n        // http://www.gnu.org/software/bash/manual/html_node/Shell-Builtin-Commands.html\n        'break cd continue eval exec exit export getopts hash pwd readonly return shift test times ' +\n        'trap umask unset ' +\n        // Bash built-ins\n        'alias bind builtin caller command declare echo enable help let local logout mapfile printf ' +\n        'read readarray source type typeset ulimit unalias ' +\n        // Shell modifiers\n        'set shopt ' +\n        // Zsh built-ins\n        'autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles ' +\n        'compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate ' +\n        'fc fg float functions getcap getln history integer jobs kill limit log noglob popd print ' +\n        'pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit ' +\n        'unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof ' +\n        'zpty zregexparse zsocket zstyle ztcp',\n      _:\n        '-ne -eq -lt -gt -f -d -e -s -l -a' // relevance booster\n    },\n    contains: [\n      {\n        className: 'meta',\n        begin: /^#![^\\n]+sh\\s*$/,\n        relevance: 10\n      },\n      {\n        className: 'function',\n        begin: /\\w[\\w\\d_]*\\s*\\(\\s*\\)\\s*\\{/,\n        returnBegin: true,\n        contains: [hljs.inherit(hljs.TITLE_MODE, {begin: /\\w[\\w\\d_]*/})],\n        relevance: 0\n      },\n      hljs.HASH_COMMENT_MODE,\n      QUOTE_STRING,\n      ESCAPED_QUOTE,\n      APOS_STRING,\n      VAR\n    ]\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXN5bnRheC1oaWdobGlnaHRlci9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvYmFzaC5qcz8wMzU4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyw0QkFBNEI7QUFDbkMsT0FBTyxZQUFZLE1BQU07QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBLGtEQUFrRCxvQkFBb0I7QUFDdEU7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXIvbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2Jhc2guanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGhsanMpIHtcbiAgdmFyIFZBUiA9IHtcbiAgICBjbGFzc05hbWU6ICd2YXJpYWJsZScsXG4gICAgdmFyaWFudHM6IFtcbiAgICAgIHtiZWdpbjogL1xcJFtcXHdcXGQjQF1bXFx3XFxkX10qL30sXG4gICAgICB7YmVnaW46IC9cXCRcXHsoLio/KX0vfVxuICAgIF1cbiAgfTtcbiAgdmFyIFFVT1RFX1NUUklORyA9IHtcbiAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgIGJlZ2luOiAvXCIvLCBlbmQ6IC9cIi8sXG4gICAgY29udGFpbnM6IFtcbiAgICAgIGhsanMuQkFDS1NMQVNIX0VTQ0FQRSxcbiAgICAgIFZBUixcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAndmFyaWFibGUnLFxuICAgICAgICBiZWdpbjogL1xcJFxcKC8sIGVuZDogL1xcKS8sXG4gICAgICAgIGNvbnRhaW5zOiBbaGxqcy5CQUNLU0xBU0hfRVNDQVBFXVxuICAgICAgfVxuICAgIF1cbiAgfTtcbiAgdmFyIEVTQ0FQRURfUVVPVEUgPSB7XG4gICAgY2xhc3NOYW1lOiAnJyxcbiAgICBiZWdpbjogL1xcXFxcIi9cblxuICB9O1xuICB2YXIgQVBPU19TVFJJTkcgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICBiZWdpbjogLycvLCBlbmQ6IC8nL1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgYWxpYXNlczogWydzaCcsICd6c2gnXSxcbiAgICBsZXhlbWVzOiAvXFxiLT9bYS16XFwuX10rXFxiLyxcbiAgICBrZXl3b3Jkczoge1xuICAgICAga2V5d29yZDpcbiAgICAgICAgJ2lmIHRoZW4gZWxzZSBlbGlmIGZpIGZvciB3aGlsZSBpbiBkbyBkb25lIGNhc2UgZXNhYyBmdW5jdGlvbicsXG4gICAgICBsaXRlcmFsOlxuICAgICAgICAndHJ1ZSBmYWxzZScsXG4gICAgICBidWlsdF9pbjpcbiAgICAgICAgLy8gU2hlbGwgYnVpbHQtaW5zXG4gICAgICAgIC8vIGh0dHA6Ly93d3cuZ251Lm9yZy9zb2Z0d2FyZS9iYXNoL21hbnVhbC9odG1sX25vZGUvU2hlbGwtQnVpbHRpbi1Db21tYW5kcy5odG1sXG4gICAgICAgICdicmVhayBjZCBjb250aW51ZSBldmFsIGV4ZWMgZXhpdCBleHBvcnQgZ2V0b3B0cyBoYXNoIHB3ZCByZWFkb25seSByZXR1cm4gc2hpZnQgdGVzdCB0aW1lcyAnICtcbiAgICAgICAgJ3RyYXAgdW1hc2sgdW5zZXQgJyArXG4gICAgICAgIC8vIEJhc2ggYnVpbHQtaW5zXG4gICAgICAgICdhbGlhcyBiaW5kIGJ1aWx0aW4gY2FsbGVyIGNvbW1hbmQgZGVjbGFyZSBlY2hvIGVuYWJsZSBoZWxwIGxldCBsb2NhbCBsb2dvdXQgbWFwZmlsZSBwcmludGYgJyArXG4gICAgICAgICdyZWFkIHJlYWRhcnJheSBzb3VyY2UgdHlwZSB0eXBlc2V0IHVsaW1pdCB1bmFsaWFzICcgK1xuICAgICAgICAvLyBTaGVsbCBtb2RpZmllcnNcbiAgICAgICAgJ3NldCBzaG9wdCAnICtcbiAgICAgICAgLy8gWnNoIGJ1aWx0LWluc1xuICAgICAgICAnYXV0b2xvYWQgYmcgYmluZGtleSBieWUgY2FwIGNoZGlyIGNsb25lIGNvbXBhcmd1bWVudHMgY29tcGNhbGwgY29tcGN0bCBjb21wZGVzY3JpYmUgY29tcGZpbGVzICcgK1xuICAgICAgICAnY29tcGdyb3VwcyBjb21wcXVvdGUgY29tcHRhZ3MgY29tcHRyeSBjb21wdmFsdWVzIGRpcnMgZGlzYWJsZSBkaXNvd24gZWNob3RjIGVjaG90aSBlbXVsYXRlICcgK1xuICAgICAgICAnZmMgZmcgZmxvYXQgZnVuY3Rpb25zIGdldGNhcCBnZXRsbiBoaXN0b3J5IGludGVnZXIgam9icyBraWxsIGxpbWl0IGxvZyBub2dsb2IgcG9wZCBwcmludCAnICtcbiAgICAgICAgJ3B1c2hkIHB1c2hsbiByZWhhc2ggc2NoZWQgc2V0Y2FwIHNldG9wdCBzdGF0IHN1c3BlbmQgdHR5Y3RsIHVuZnVuY3Rpb24gdW5oYXNoIHVubGltaXQgJyArXG4gICAgICAgICd1bnNldG9wdCB2YXJlZCB3YWl0IHdoZW5jZSB3aGVyZSB3aGljaCB6Y29tcGlsZSB6Zm9ybWF0IHpmdHAgemxlIHptb2Rsb2FkIHpwYXJzZW9wdHMgenByb2YgJyArXG4gICAgICAgICd6cHR5IHpyZWdleHBhcnNlIHpzb2NrZXQgenN0eWxlIHp0Y3AnLFxuICAgICAgXzpcbiAgICAgICAgJy1uZSAtZXEgLWx0IC1ndCAtZiAtZCAtZSAtcyAtbCAtYScgLy8gcmVsZXZhbmNlIGJvb3N0ZXJcbiAgICB9LFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgICAgICBiZWdpbjogL14jIVteXFxuXStzaFxccyokLyxcbiAgICAgICAgcmVsZXZhbmNlOiAxMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnZnVuY3Rpb24nLFxuICAgICAgICBiZWdpbjogL1xcd1tcXHdcXGRfXSpcXHMqXFwoXFxzKlxcKVxccypcXHsvLFxuICAgICAgICByZXR1cm5CZWdpbjogdHJ1ZSxcbiAgICAgICAgY29udGFpbnM6IFtobGpzLmluaGVyaXQoaGxqcy5USVRMRV9NT0RFLCB7YmVnaW46IC9cXHdbXFx3XFxkX10qL30pXSxcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9LFxuICAgICAgaGxqcy5IQVNIX0NPTU1FTlRfTU9ERSxcbiAgICAgIFFVT1RFX1NUUklORyxcbiAgICAgIEVTQ0FQRURfUVVPVEUsXG4gICAgICBBUE9TX1NUUklORyxcbiAgICAgIFZBUlxuICAgIF1cbiAgfTtcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/bash.js\n");

/***/ })

}]);