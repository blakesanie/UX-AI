/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ux_ai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ux-ai */ \"../UXAI.js\");\n/* harmony import */ var ux_ai__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ux_ai__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_code_blocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-code-blocks */ \"./node_modules/react-code-blocks/dist/react-code-blocks.esm.js\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ \"./node_modules/@material-ui/core/esm/Button/index.js\");\n/* harmony import */ var _material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Slider */ \"./node_modules/@material-ui/core/esm/Slider/index.js\");\n/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Tooltip */ \"./node_modules/@material-ui/core/esm/Tooltip/index.js\");\n/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Snackbar */ \"./node_modules/@material-ui/core/esm/Snackbar/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/blake/GitHub/UX-AI Repos/UX-AI/site/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nvar showdown = __webpack_require__(/*! showdown */ \"./node_modules/showdown/dist/showdown.js\");\n\nvar converter = new showdown.Converter();\nconverter.setFlavor(\"github\");\n\nvar HtmlToReactParser = __webpack_require__(/*! html-to-react */ \"./node_modules/html-to-react/index.js\").Parser;\n\nvar htmlToReactParser = new HtmlToReactParser();\n\nfunction ValueLabelComponent(props) {\n  var children = props.children,\n      open = props.open,\n      value = props.value;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_5__.default, {\n    open: open,\n    enterTouchDelay: 0,\n    placement: \"top\",\n    className: \"rounded\",\n    title: \"\".concat(value).concat(\"\".concat(value).length == 1 ? \".0\" : \"\", \"s\"),\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 5\n  }, this);\n}\n\n_c = ValueLabelComponent;\nvar uxai;\nvar __N_SSG = true;\nfunction Home(props) {\n  _s();\n\n  var _this = this;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),\n      uxaiRunning = _useState[0],\n      setUxaiRunning = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(5),\n      inferenceInterval = _useState2[0],\n      setInferenceInterval = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"),\n      snackbarMessage = _useState3[0],\n      setSnackbarMessage = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),\n      snackbarOpen = _useState4[0],\n      setSnackbarOpen = _useState4[1];\n\n  var showSnack = function showSnack(message) {\n    setSnackbarOpen(false);\n    setTimeout(function () {\n      setSnackbarOpen(true);\n      setSnackbarMessage(message);\n    }, 1);\n  }; // console.log(props.elements);\n\n\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    document.addEventListener(\"copy\", function (e) {\n      showSnack(\"Successfully copied text\");\n    });\n  }, []); // let elements = [];\n  // for (let i = 0; i < 1000; i++) {\n  //   elements.push(<p key={i}>Test</p>);\n  // }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n        src: \"https://cdn.jsdelivr.net/npm/@tensorflow/tfjs/dist/tf.min.js\",\n        children: \" \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 133,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 131,\n      columnNumber: 7\n    }, this), props.elements.map(function (element, i) {\n      if (element.type == \"codeblock\") {\n        // console.log(element.language);\n        // return <p>codeblock</p>;\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"codeBlock  rounded\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_code_blocks__WEBPACK_IMPORTED_MODULE_4__.CopyBlock, {\n            codeBlock: true,\n            style: {},\n            text: element.text,\n            language: element.language.replace(\"html\", \"markup\"),\n            showLineNumbers: false,\n            wrapLines: true,\n            theme: react_code_blocks__WEBPACK_IMPORTED_MODULE_4__.railscast\n          }, i, false, {\n            fileName: _jsxFileName,\n            lineNumber: 143,\n            columnNumber: 15\n          }, _this)\n        }, i, false, {\n          fileName: _jsxFileName,\n          lineNumber: 142,\n          columnNumber: 13\n        }, _this);\n      }\n\n      if (element.type == \"demo\") {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"demo\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"UX-AI is ready to run on this page! Activate UX-AI with the button below, or deactivate to adjust the inference interval. Then, try varying your behavior and observe the snackbar that appears in the lower-right corner.\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 159,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            className: \"label\",\n            children: \"Make inference every:\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 165,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_6__.default, {\n            value: inferenceInterval,\n            step: 0.1,\n            ValueLabelComponent: ValueLabelComponent // marks\n            ,\n            min: 3,\n            max: 10,\n            style: {\n              opacity: uxaiRunning ? 0.2 : 1,\n              pointerEvents: uxaiRunning ? \"none\" : \"auto\"\n            },\n            valueLabelDisplay: \"on\",\n            onChange: function onChange(event, value) {\n              setInferenceInterval(value);\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 166,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__.default, {\n            variant: \"contained\",\n            size: \"large\",\n            className: \"rounded \" + (uxaiRunning ? \"deactivate\" : \"activate\"),\n            onClick: function onClick() {\n              if (uxaiRunning) {\n                uxai.deactivate();\n                uxai = undefined;\n                showSnack(\"UX-AI Deactivated\");\n              } else {\n                showSnack(\"UX-AI Activated\");\n                uxai = new (ux_ai__WEBPACK_IMPORTED_MODULE_2___default())({\n                  inferenceInterval: inferenceInterval * 1000,\n                  inferenceCallback: function inferenceCallback(history) {\n                    showSnack(\"Latest behavior status: \\\"\".concat(history[history.length - 1], \"\\\"\"));\n                  }\n                });\n              }\n\n              setUxaiRunning(!uxaiRunning);\n            },\n            children: \"\".concat(uxaiRunning ? \"Deactivate\" : \"Activate\", \" UX-AI\")\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 182,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            className: \"label\",\n            children: \"Resulting object instantiation:\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 211,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"codeBlock rounded\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_code_blocks__WEBPACK_IMPORTED_MODULE_4__.CopyBlock, {\n              text: \"const uxai = new UXAI({\\n\\tinferenceInterval: \".concat(inferenceInterval * 1000, \",\\n\\tinferenceCallback: history => {\\n\\t\\t// do something\\n\\t}\\n})\"),\n              language: \"javascript\",\n              showLineNumbers: false,\n              wrapLines: true,\n              theme: react_code_blocks__WEBPACK_IMPORTED_MODULE_4__.railscast\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 213,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 212,\n            columnNumber: 15\n          }, _this)]\n        }, i, true, {\n          fileName: _jsxFileName,\n          lineNumber: 158,\n          columnNumber: 13\n        }, _this);\n      } // console.log(element.text);\n\n\n      var component = htmlToReactParser.parse(element.text); // if (!element.text.includes(\"<ul\")) {\n      //   return <div key={i}>{component}</div>;\n      // }\n\n      return component; // <div key={i} dangerouslySetInnerHTML={{ __html: element.text }} />\n    }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_8__.default, {\n      open: snackbarOpen,\n      onClose: function onClose() {\n        setSnackbarOpen(false);\n      },\n      autoHideDuration: 2500,\n      message: snackbarMessage,\n      anchorOrigin: {\n        vertical: \"bottom\",\n        horizontal: \"right\"\n      }\n    }, snackbarMessage, false, {\n      fileName: _jsxFileName,\n      lineNumber: 234,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n_s(Home, \"3RcbNDFnXUMO0sxh7l/J1kIetUM=\");\n\n_c2 = Home;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"ValueLabelComponent\");\n$RefreshReg$(_c2, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJzaG93ZG93biIsInJlcXVpcmUiLCJjb252ZXJ0ZXIiLCJDb252ZXJ0ZXIiLCJzZXRGbGF2b3IiLCJIdG1sVG9SZWFjdFBhcnNlciIsImh0bWxUb1JlYWN0UGFyc2VyIiwiVmFsdWVMYWJlbENvbXBvbmVudCIsInByb3BzIiwiY2hpbGRyZW4iLCJvcGVuIiwidmFsdWUiLCJsZW5ndGgiLCJ1eGFpIiwiSG9tZSIsInVzZVN0YXRlIiwidXhhaVJ1bm5pbmciLCJzZXRVeGFpUnVubmluZyIsImluZmVyZW5jZUludGVydmFsIiwic2V0SW5mZXJlbmNlSW50ZXJ2YWwiLCJzbmFja2Jhck1lc3NhZ2UiLCJzZXRTbmFja2Jhck1lc3NhZ2UiLCJzbmFja2Jhck9wZW4iLCJzZXRTbmFja2Jhck9wZW4iLCJzaG93U25hY2siLCJtZXNzYWdlIiwic2V0VGltZW91dCIsInVzZUVmZmVjdCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJlbGVtZW50cyIsIm1hcCIsImVsZW1lbnQiLCJpIiwidHlwZSIsInRleHQiLCJsYW5ndWFnZSIsInJlcGxhY2UiLCJyYWlsc2Nhc3QiLCJvcGFjaXR5IiwicG9pbnRlckV2ZW50cyIsImV2ZW50IiwiZGVhY3RpdmF0ZSIsInVuZGVmaW5lZCIsIlVYQUkiLCJpbmZlcmVuY2VDYWxsYmFjayIsImhpc3RvcnkiLCJjb21wb25lbnQiLCJwYXJzZSIsInZlcnRpY2FsIiwiaG9yaXpvbnRhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHQyxtQkFBTyxDQUFDLDBEQUFELENBQXhCOztBQUNBLElBQUlDLFNBQVMsR0FBRyxJQUFJRixRQUFRLENBQUNHLFNBQWIsRUFBaEI7QUFDQUQsU0FBUyxDQUFDRSxTQUFW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QUUsSUFMcEI7QUFNRSxhQUFPLEVBQUVILGVBTlg7QUFRRSxrQkFBWSxFQUFFO0FBQUU4QixnQkFBUSxFQUFFLFFBQVo7QUFBc0JDLGtCQUFVLEVBQUU7QUFBbEM7QUFSaEIsT0FPTy9CLGVBUFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXhHRjtBQUFBLGtCQURGO0FBcUhEOztHQTdJdUJOLEk7O01BQUFBLEkiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBVWEFJIGZyb20gXCJ1eC1haVwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ29weUJsb2NrLCBkcmFjdWxhLCBhbk9sZEhvcGUsIHJhaWxzY2FzdCB9IGZyb20gXCJyZWFjdC1jb2RlLWJsb2Nrc1wiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XG5pbXBvcnQgU2xpZGVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9TbGlkZXJcIjtcbmltcG9ydCBUb29sdGlwIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Ub29sdGlwXCI7XG5pbXBvcnQgU25hY2tiYXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1NuYWNrYmFyXCI7XG5jb25zdCBmcyA9IHJlcXVpcmUoXCJmc1wiKTtcbmNvbnN0IHNob3dkb3duID0gcmVxdWlyZShcInNob3dkb3duXCIpO1xubGV0IGNvbnZlcnRlciA9IG5ldyBzaG93ZG93bi5Db252ZXJ0ZXIoKTtcbmNvbnZlcnRlci5zZXRGbGF2b3IoXCJnaXRodWJcIik7XG5jb25zdCBIdG1sVG9SZWFjdFBhcnNlciA9IHJlcXVpcmUoXCJodG1sLXRvLXJlYWN0XCIpLlBhcnNlcjtcbmNvbnN0IGh0bWxUb1JlYWN0UGFyc2VyID0gbmV3IEh0bWxUb1JlYWN0UGFyc2VyKCk7XG5cbmZ1bmN0aW9uIFZhbHVlTGFiZWxDb21wb25lbnQocHJvcHMpIHtcbiAgY29uc3QgeyBjaGlsZHJlbiwgb3BlbiwgdmFsdWUgfSA9IHByb3BzO1xuXG4gIHJldHVybiAoXG4gICAgPFRvb2x0aXBcbiAgICAgIG9wZW49e29wZW59XG4gICAgICBlbnRlclRvdWNoRGVsYXk9ezB9XG4gICAgICBwbGFjZW1lbnQ9XCJ0b3BcIlxuICAgICAgY2xhc3NOYW1lPVwicm91bmRlZFwiXG4gICAgICB0aXRsZT17YCR7dmFsdWV9JHtgJHt2YWx1ZX1gLmxlbmd0aCA9PSAxID8gXCIuMFwiIDogXCJcIn1zYH1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9Ub29sdGlwPlxuICApO1xufVxuXG5sZXQgdXhhaTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcbiAgY29uc29sZS5sb2coXCJnZXQgcHJvcHNcIik7XG4gIGxldCBkYXRhO1xuICB0cnkge1xuICAgIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMoXCIuLi9SRUFETUUubWRcIiwgXCJ1dGY4XCIpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gIH1cbiAgbGV0IGVsZW1lbnRzID0gW107XG4gIGxldCBjdXJyZW50ID0ge1xuICAgIHR5cGU6IFwiaHRtbFwiLFxuICAgIHRleHQ6IFwiXCIsXG4gIH07XG4gIGZvciAobGV0IGxpbmUgb2YgZGF0YS5zcGxpdCgvXFxyP1xcbi8pKSB7XG4gICAgaWYgKGxpbmUpIHtcbiAgICAgIGlmIChsaW5lLmluY2x1ZGVzKFwiYGBgXCIpKSB7XG4gICAgICAgIC8vIGNvZGUgYmxvY2sgc3RhcnRcbiAgICAgICAgaWYgKGN1cnJlbnQudHlwZSA9PSBcImh0bWxcIikge1xuICAgICAgICAgIGVsZW1lbnRzLnB1c2goY3VycmVudCk7XG4gICAgICAgICAgY3VycmVudCA9IHtcbiAgICAgICAgICAgIHR5cGU6IFwiY29kZWJsb2NrXCIsXG4gICAgICAgICAgICB0ZXh0OiBcIlwiLFxuICAgICAgICAgICAgbGFuZ3VhZ2U6IGxpbmUuc3Vic3RyaW5nKDMpIHx8IFwidGV4dFwiLFxuICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY3VycmVudC50ZXh0ID0gY3VycmVudC50ZXh0LnN1YnN0cmluZygwLCBjdXJyZW50LnRleHQubGVuZ3RoIC0gMSk7IC8vIGlnbm9yZSBsYXN0IG5ld2xpbmVcbiAgICAgICAgICBlbGVtZW50cy5wdXNoKGN1cnJlbnQpO1xuICAgICAgICAgIGN1cnJlbnQgPSB7XG4gICAgICAgICAgICB0eXBlOiBcImh0bWxcIixcbiAgICAgICAgICAgIHRleHQ6IFwiXCIsXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChsaW5lLmluY2x1ZGVzKFwiIyMgRGVtb1wiKSkge1xuICAgICAgICAvLyBkZW1vIHN0YXJ0XG4gICAgICAgIGN1cnJlbnQudGV4dCArPSBjb252ZXJ0ZXIubWFrZUh0bWwobGluZSk7XG4gICAgICAgIGVsZW1lbnRzLnB1c2goY3VycmVudCk7XG4gICAgICAgIGN1cnJlbnQgPSB7XG4gICAgICAgICAgdHlwZTogXCJkZW1vXCIsXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBvdGhlclxuICAgICAgICBpZiAoY3VycmVudC50eXBlID09IFwiZGVtb1wiICYmIGxpbmUuaW5jbHVkZXMoXCIjI1wiKSkge1xuICAgICAgICAgIGVsZW1lbnRzLnB1c2goY3VycmVudCk7XG4gICAgICAgICAgY3VycmVudCA9IHtcbiAgICAgICAgICAgIHR5cGU6IFwiaHRtbFwiLFxuICAgICAgICAgICAgdGV4dDogXCJcIixcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGlmIChjdXJyZW50LnR5cGUgPT0gXCJjb2RlYmxvY2tcIikge1xuICAgICAgICAgIGN1cnJlbnQudGV4dCArPSBsaW5lICsgXCJcXG5cIjtcbiAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50LnR5cGUgPT0gXCJodG1sXCIpIHtcbiAgICAgICAgICBsZXQgbGluZUh0bWwgPSBjb252ZXJ0ZXIubWFrZUh0bWwobGluZSk7XG4gICAgICAgICAgaWYgKGxpbmVIdG1sLmluY2x1ZGVzKGA8cD48YCkgJiYgIWxpbmVIdG1sLmluY2x1ZGVzKGA8cD48ZW0+YCkpIHtcbiAgICAgICAgICAgIC8vIGdldCByaWRlIG9mIHVzZWxlc3Mgd3JhcHBpbmcgcCB0YWdcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwic2hvcnRlbmluZyBsaW5lXCIpO1xuICAgICAgICAgICAgbGluZUh0bWwgPSBsaW5lSHRtbC5zdWJzdHJpbmcoMywgbGluZUh0bWwubGVuZ3RoIC0gNCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGN1cnJlbnQudGV4dCArPSBsaW5lSHRtbDtcbiAgICAgICAgICBpZiAobGluZS5pbmNsdWRlcyhgaWQ9XCJoZWFkbGluZVwiYCkpIHtcbiAgICAgICAgICAgIGN1cnJlbnQudGV4dCArPSBgPGgzPkNyZWF0ZWQgYnkgPGEgaHJlZj1cImh0dHBzOi8vYmxha2VzYW5pZS5jb21cIj5CbGFrZSBTYW5pZTwvYT48L2gzPmA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGVsZW1lbnRzLnB1c2goY3VycmVudCk7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHsgZWxlbWVudHMgfSwgLy8gd2lsbCBiZSBwYXNzZWQgdG8gdGhlIHBhZ2UgY29tcG9uZW50IGFzIHByb3BzXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUocHJvcHMpIHtcbiAgY29uc3QgW3V4YWlSdW5uaW5nLCBzZXRVeGFpUnVubmluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpbmZlcmVuY2VJbnRlcnZhbCwgc2V0SW5mZXJlbmNlSW50ZXJ2YWxdID0gdXNlU3RhdGUoNSk7XG4gIGNvbnN0IFtzbmFja2Jhck1lc3NhZ2UsIHNldFNuYWNrYmFyTWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3NuYWNrYmFyT3Blbiwgc2V0U25hY2tiYXJPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBzaG93U25hY2sgPSAobWVzc2FnZSkgPT4ge1xuICAgIHNldFNuYWNrYmFyT3BlbihmYWxzZSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRTbmFja2Jhck9wZW4odHJ1ZSk7XG4gICAgICBzZXRTbmFja2Jhck1lc3NhZ2UobWVzc2FnZSk7XG4gICAgfSwgMSk7XG4gIH07XG5cbiAgLy8gY29uc29sZS5sb2cocHJvcHMuZWxlbWVudHMpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjb3B5XCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBzaG93U25hY2soYFN1Y2Nlc3NmdWxseSBjb3BpZWQgdGV4dGApO1xuICAgIH0pO1xuICB9LCBbXSk7XG4gIC8vIGxldCBlbGVtZW50cyA9IFtdO1xuICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDA7IGkrKykge1xuICAvLyAgIGVsZW1lbnRzLnB1c2goPHAga2V5PXtpfT5UZXN0PC9wPik7XG4gIC8vIH1cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIHsvKiA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTAuNVwiIC8+ICovfVxuICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vQHRlbnNvcmZsb3cvdGZqcy9kaXN0L3RmLm1pbi5qc1wiPlxuICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgPC9zY3JpcHQ+XG4gICAgICA8L0hlYWQ+XG4gICAgICB7cHJvcHMuZWxlbWVudHMubWFwKChlbGVtZW50LCBpKSA9PiB7XG4gICAgICAgIGlmIChlbGVtZW50LnR5cGUgPT0gXCJjb2RlYmxvY2tcIikge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGVsZW1lbnQubGFuZ3VhZ2UpO1xuICAgICAgICAgIC8vIHJldHVybiA8cD5jb2RlYmxvY2s8L3A+O1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvZGVCbG9jayAgcm91bmRlZFwiIGtleT17aX0+XG4gICAgICAgICAgICAgIDxDb3B5QmxvY2tcbiAgICAgICAgICAgICAgICBjb2RlQmxvY2s9e3RydWV9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3t9fVxuICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICB0ZXh0PXtlbGVtZW50LnRleHR9XG4gICAgICAgICAgICAgICAgbGFuZ3VhZ2U9e2VsZW1lbnQubGFuZ3VhZ2UucmVwbGFjZShcImh0bWxcIiwgXCJtYXJrdXBcIil9XG4gICAgICAgICAgICAgICAgc2hvd0xpbmVOdW1iZXJzPXtmYWxzZX1cbiAgICAgICAgICAgICAgICB3cmFwTGluZXNcbiAgICAgICAgICAgICAgICB0aGVtZT17cmFpbHNjYXN0fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZWxlbWVudC50eXBlID09IFwiZGVtb1wiKSB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVtb1wiIGtleT17aX0+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIFVYLUFJIGlzIHJlYWR5IHRvIHJ1biBvbiB0aGlzIHBhZ2UhIEFjdGl2YXRlIFVYLUFJIHdpdGggdGhlXG4gICAgICAgICAgICAgICAgYnV0dG9uIGJlbG93LCBvciBkZWFjdGl2YXRlIHRvIGFkanVzdCB0aGUgaW5mZXJlbmNlIGludGVydmFsLlxuICAgICAgICAgICAgICAgIFRoZW4sIHRyeSB2YXJ5aW5nIHlvdXIgYmVoYXZpb3IgYW5kIG9ic2VydmUgdGhlIHNuYWNrYmFyIHRoYXRcbiAgICAgICAgICAgICAgICBhcHBlYXJzIGluIHRoZSBsb3dlci1yaWdodCBjb3JuZXIuXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibGFiZWxcIj5NYWtlIGluZmVyZW5jZSBldmVyeTo8L3A+XG4gICAgICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgICAgICB2YWx1ZT17aW5mZXJlbmNlSW50ZXJ2YWx9XG4gICAgICAgICAgICAgICAgc3RlcD17MC4xfVxuICAgICAgICAgICAgICAgIFZhbHVlTGFiZWxDb21wb25lbnQ9e1ZhbHVlTGFiZWxDb21wb25lbnR9XG4gICAgICAgICAgICAgICAgLy8gbWFya3NcbiAgICAgICAgICAgICAgICBtaW49ezN9XG4gICAgICAgICAgICAgICAgbWF4PXsxMH1cbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogdXhhaVJ1bm5pbmcgPyAwLjIgOiAxLFxuICAgICAgICAgICAgICAgICAgcG9pbnRlckV2ZW50czogdXhhaVJ1bm5pbmcgPyBcIm5vbmVcIiA6IFwiYXV0b1wiLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgdmFsdWVMYWJlbERpc3BsYXk9XCJvblwiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCwgdmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICAgIHNldEluZmVyZW5jZUludGVydmFsKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgXCJyb3VuZGVkIFwiICsgKHV4YWlSdW5uaW5nID8gXCJkZWFjdGl2YXRlXCIgOiBcImFjdGl2YXRlXCIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmICh1eGFpUnVubmluZykge1xuICAgICAgICAgICAgICAgICAgICB1eGFpLmRlYWN0aXZhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgdXhhaSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgc2hvd1NuYWNrKGBVWC1BSSBEZWFjdGl2YXRlZGApO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2hvd1NuYWNrKGBVWC1BSSBBY3RpdmF0ZWRgKTtcbiAgICAgICAgICAgICAgICAgICAgdXhhaSA9IG5ldyBVWEFJKHtcbiAgICAgICAgICAgICAgICAgICAgICBpbmZlcmVuY2VJbnRlcnZhbDogaW5mZXJlbmNlSW50ZXJ2YWwgKiAxMDAwLFxuICAgICAgICAgICAgICAgICAgICAgIGluZmVyZW5jZUNhbGxiYWNrOiAoaGlzdG9yeSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1NuYWNrKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBgTGF0ZXN0IGJlaGF2aW9yIHN0YXR1czogXCIke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpc3RvcnlbaGlzdG9yeS5sZW5ndGggLSAxXVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XCJgXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgc2V0VXhhaVJ1bm5pbmcoIXV4YWlSdW5uaW5nKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2Ake3V4YWlSdW5uaW5nID8gXCJEZWFjdGl2YXRlXCIgOiBcIkFjdGl2YXRlXCJ9IFVYLUFJYH1cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxhYmVsXCI+UmVzdWx0aW5nIG9iamVjdCBpbnN0YW50aWF0aW9uOjwvcD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2RlQmxvY2sgcm91bmRlZFwiPlxuICAgICAgICAgICAgICAgIDxDb3B5QmxvY2tcbiAgICAgICAgICAgICAgICAgIHRleHQ9e2Bjb25zdCB1eGFpID0gbmV3IFVYQUkoe1xcblxcdGluZmVyZW5jZUludGVydmFsOiAke1xuICAgICAgICAgICAgICAgICAgICBpbmZlcmVuY2VJbnRlcnZhbCAqIDEwMDBcbiAgICAgICAgICAgICAgICAgIH0sXFxuXFx0aW5mZXJlbmNlQ2FsbGJhY2s6IGhpc3RvcnkgPT4ge1xcblxcdFxcdC8vIGRvIHNvbWV0aGluZ1xcblxcdH1cXG59KWB9XG4gICAgICAgICAgICAgICAgICBsYW5ndWFnZT1cImphdmFzY3JpcHRcIlxuICAgICAgICAgICAgICAgICAgc2hvd0xpbmVOdW1iZXJzPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgIHdyYXBMaW5lc1xuICAgICAgICAgICAgICAgICAgdGhlbWU9e3JhaWxzY2FzdH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gY29uc29sZS5sb2coZWxlbWVudC50ZXh0KTtcbiAgICAgICAgbGV0IGNvbXBvbmVudCA9IGh0bWxUb1JlYWN0UGFyc2VyLnBhcnNlKGVsZW1lbnQudGV4dCk7XG4gICAgICAgIC8vIGlmICghZWxlbWVudC50ZXh0LmluY2x1ZGVzKFwiPHVsXCIpKSB7XG4gICAgICAgIC8vICAgcmV0dXJuIDxkaXYga2V5PXtpfT57Y29tcG9uZW50fTwvZGl2PjtcbiAgICAgICAgLy8gfVxuICAgICAgICByZXR1cm4gY29tcG9uZW50O1xuICAgICAgICAvLyA8ZGl2IGtleT17aX0gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBlbGVtZW50LnRleHQgfX0gLz5cbiAgICAgIH0pfVxuICAgICAgPFNuYWNrYmFyXG4gICAgICAgIG9wZW49e3NuYWNrYmFyT3Blbn1cbiAgICAgICAgb25DbG9zZT17KCkgPT4ge1xuICAgICAgICAgIHNldFNuYWNrYmFyT3BlbihmYWxzZSk7XG4gICAgICAgIH19XG4gICAgICAgIGF1dG9IaWRlRHVyYXRpb249ezI1MDB9XG4gICAgICAgIG1lc3NhZ2U9e3NuYWNrYmFyTWVzc2FnZX1cbiAgICAgICAga2V5PXtzbmFja2Jhck1lc3NhZ2V9XG4gICAgICAgIGFuY2hvck9yaWdpbj17eyB2ZXJ0aWNhbDogXCJib3R0b21cIiwgaG9yaXpvbnRhbDogXCJyaWdodFwiIH19XG4gICAgICAvPlxuICAgIDwvPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});