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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ux_ai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ux-ai */ \"../UXAI.js\");\n/* harmony import */ var ux_ai__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ux_ai__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_code_blocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-code-blocks */ \"./node_modules/react-code-blocks/dist/react-code-blocks.esm.js\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ \"./node_modules/@material-ui/core/esm/Button/index.js\");\n/* harmony import */ var _material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Slider */ \"./node_modules/@material-ui/core/esm/Slider/index.js\");\n/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Tooltip */ \"./node_modules/@material-ui/core/esm/Tooltip/index.js\");\n/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Snackbar */ \"./node_modules/@material-ui/core/esm/Snackbar/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/blake/GitHub/UX-AI Repos/UX-AI/site/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nvar showdown = __webpack_require__(/*! showdown */ \"./node_modules/showdown/dist/showdown.js\");\n\nvar converter = new showdown.Converter();\nconverter.setFlavor(\"github\");\n\nvar HtmlToReactParser = __webpack_require__(/*! html-to-react */ \"./node_modules/html-to-react/index.js\").Parser;\n\nvar htmlToReactParser = new HtmlToReactParser();\nvar uxai;\n\nfunction ValueLabelComponent(props) {\n  var children = props.children,\n      open = props.open,\n      value = props.value;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_5__.default, {\n    open: open,\n    enterTouchDelay: 0,\n    placement: \"top\",\n    className: \"rounded\",\n    title: \"\".concat(value).concat(\"\".concat(value).length == 1 ? \".0\" : \"\", \"s\"),\n    PopperProps: {\n      container: function container() {\n        if (document) {\n          return document.querySelector(\"#__next\");\n        }\n\n        return undefined;\n      }\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 5\n  }, this);\n}\n\n_c = ValueLabelComponent;\nvar __N_SSG = true;\nfunction Home(props) {\n  _s();\n\n  var _this = this;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),\n      uxaiRunning = _useState[0],\n      setUxaiRunning = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(5),\n      inferenceInterval = _useState2[0],\n      setInferenceInterval = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"),\n      snackbarMessage = _useState3[0],\n      setSnackbarMessage = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),\n      snackbarOpen = _useState4[0],\n      setSnackbarOpen = _useState4[1];\n\n  var showSnack = function showSnack(message) {\n    setSnackbarOpen(false);\n    setTimeout(function () {\n      setSnackbarOpen(true);\n      setSnackbarMessage(message);\n    }, 1);\n  }; // console.log(props.elements);\n\n\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    document.addEventListener(\"copy\", function (e) {\n      showSnack(\"Successfully copied text\");\n    });\n  }, []); // let elements = [];\n  // for (let i = 0; i < 1000; i++) {\n  //   elements.push(<p key={i}>Test</p>);\n  // }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n        src: \"https://cdn.jsdelivr.net/npm/@tensorflow/tfjs/dist/tf.min.js\",\n        children: \" \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 142,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 140,\n      columnNumber: 7\n    }, this), props.elements.map(function (element, i) {\n      if (element.type == \"codeblock\") {\n        // console.log(element.language);\n        // return <p>codeblock</p>;\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"codeBlock rounded\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_code_blocks__WEBPACK_IMPORTED_MODULE_4__.CopyBlock, {\n            style: {},\n            text: element.text,\n            language: element.language.replace(\"html\", \"markup\"),\n            showLineNumbers: false,\n            wrapLines: true,\n            theme: react_code_blocks__WEBPACK_IMPORTED_MODULE_4__.railscast\n          }, i, false, {\n            fileName: _jsxFileName,\n            lineNumber: 152,\n            columnNumber: 15\n          }, _this)\n        }, element.text, false, {\n          fileName: _jsxFileName,\n          lineNumber: 151,\n          columnNumber: 13\n        }, _this);\n      }\n\n      if (element.type == \"demo\") {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"demo\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"UX-AI is ready to run on this page! Activate UX-AI with the button below, or deactivate to adjust the inference interval. Then, try varying your behavior and observe the snackbar that appears in the lower-right corner.\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 167,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            className: \"label\",\n            children: \"Make inference every:\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 173,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_6__.default, {\n            value: inferenceInterval,\n            step: 0.1,\n            ValueLabelComponent: ValueLabelComponent // marks\n            ,\n            min: 3,\n            max: 10,\n            style: {\n              opacity: uxaiRunning ? 0.2 : 1,\n              pointerEvents: uxaiRunning ? \"none\" : \"auto\"\n            },\n            valueLabelDisplay: \"on\",\n            onChange: function onChange(event, value) {\n              setInferenceInterval(value);\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 174,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__.default, {\n            variant: \"contained\",\n            size: \"large\",\n            className: \"rounded \" + (uxaiRunning ? \"deactivate\" : \"activate\"),\n            onClick: function onClick() {\n              if (uxaiRunning) {\n                uxai.deactivate();\n                uxai = undefined;\n                showSnack(\"UX-AI Deactivated\");\n              } else {\n                showSnack(\"UX-AI Activated\");\n                uxai = new (ux_ai__WEBPACK_IMPORTED_MODULE_2___default())({\n                  inferenceInterval: inferenceInterval * 1000,\n                  inferenceCallback: function inferenceCallback(history) {\n                    showSnack(\"Latest behavior status: \\\"\".concat(history[history.length - 1], \"\\\"\"));\n                  }\n                });\n              }\n\n              setUxaiRunning(!uxaiRunning);\n            },\n            children: \"\".concat(uxaiRunning ? \"Deactivate\" : \"Activate\", \" UX-AI\")\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 190,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            className: \"label\",\n            children: \"Resulting object instantiation:\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 219,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"codeBlock rounded\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_code_blocks__WEBPACK_IMPORTED_MODULE_4__.CopyBlock, {\n              text: \"const uxai = new UXAI({\\n\\tinferenceInterval: \".concat(inferenceInterval * 1000, \",\\n\\tinferenceCallback: history => {\\n\\t\\t// do something\\n\\t}\\n})\"),\n              language: \"javascript\",\n              showLineNumbers: false,\n              wrapLines: true,\n              theme: react_code_blocks__WEBPACK_IMPORTED_MODULE_4__.railscast\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 221,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 220,\n            columnNumber: 15\n          }, _this)]\n        }, \"demo\", true, {\n          fileName: _jsxFileName,\n          lineNumber: 166,\n          columnNumber: 13\n        }, _this);\n      } // console.log(element.text);\n\n\n      var component = htmlToReactParser.parse(element.text); // if (!element.text.includes(\"<ul\")) {\n      //   return <div key={i}>{component}</div>;\n      // }\n\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, {\n        children: component\n      }, element.text, false, {\n        fileName: _jsxFileName,\n        lineNumber: 239,\n        columnNumber: 16\n      }, _this); // <div key={i} dangerouslySetInnerHTML={{ __html: element.text }} />\n    }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_8__.default, {\n      open: snackbarOpen,\n      onClose: function onClose() {\n        setSnackbarOpen(false);\n      },\n      autoHideDuration: 2500,\n      message: snackbarMessage,\n      anchorOrigin: {\n        vertical: \"bottom\",\n        horizontal: \"right\"\n      }\n    }, snackbarMessage, false, {\n      fileName: _jsxFileName,\n      lineNumber: 242,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n_s(Home, \"3RcbNDFnXUMO0sxh7l/J1kIetUM=\");\n\n_c2 = Home;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"ValueLabelComponent\");\n$RefreshReg$(_c2, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJzaG93ZG93biIsInJlcXVpcmUiLCJjb252ZXJ0ZXIiLCJDb252ZXJ0ZXIiLCJzZXRGbGF2b3IiLCJIdG1sVG9SZWFjdFBhcnNlciIsImh0bWxUb1JlYWN0UGFyc2VyIiwidXhhaSIsIlZhbHVlTGFiZWxDb21wb25lbnQiLCJwcm9wcyIsImNoaWxkcmVuIiwib3BlbiIsInZhbHVlIiwibGVuZ3RoIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidW5kZWZpbmVkIiwiSG9tZSIsInVzZVN0YXRlIiwidXhhaVJ1bm5pbmciLCJzZXRVeGFpUnVubmluZyIsImluZmVyZW5jZUludGVydmFsIiwic2V0SW5mZXJlbmNlSW50ZXJ2YWwiLCJzbmFja2Jhck1lc3NhZ2UiLCJzZXRTbmFja2Jhck1lc3NhZ2UiLCJzbmFja2Jhck9wZW4iLCJzZXRTbmFja2Jhck9wZW4iLCJzaG93U25hY2siLCJtZXNzYWdlIiwic2V0VGltZW91dCIsInVzZUVmZmVjdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiZWxlbWVudHMiLCJtYXAiLCJlbGVtZW50IiwiaSIsInR5cGUiLCJ0ZXh0IiwibGFuZ3VhZ2UiLCJyZXBsYWNlIiwicmFpbHNjYXN0Iiwib3BhY2l0eSIsInBvaW50ZXJFdmVudHMiLCJldmVudCIsImRlYWN0aXZhdGUiLCJVWEFJIiwiaW5mZXJlbmNlQ2FsbGJhY2siLCJoaXN0b3J5IiwiY29tcG9uZW50IiwicGFyc2UiLCJ2ZXJ0aWNhbCIsImhvcml6b250YWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBR0MsbUJBQU8sQ0FBQywwREFBRCxDQUF4Qjs7QUFDQSxJQUFJQyxTQUFTLEdBQUcsSUFBSUYsUUFBUSxDQUFDRyxTQUFi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QUFDQSwwQkFBTyw4REFBQywyQ0FBRDtBQUFBLGtCQUE4Qlc7QUFBOUIsU0FBZWQsT0FBTyxDQUFDRyxJQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVAsQ0E3RmtDLENBOEZsQztBQUNELEtBL0ZBLENBUEgsZUF1R0UsOERBQUMsK0RBQUQ7QUFDRSxVQUFJLEVBQUViLFlBRFI7QUFFRSxhQUFPLEVBQUUsbUJBQU07QUFDYkMsdUJBQWUsQ0FBQyxLQUFELENBQWY7QUFDRCxPQUpIO0FBS0Usc0JBQWdCLEVBQUUsSUFMcEI7QUFNRSxhQUFPLEVBQUVILGVBTlg7QUFRRSxrQkFBWSxFQUFFO0FBQUU0QixnQkFBUSxFQUFFLFFBQVo7QUFBc0JDLGtCQUFVLEVBQUU7QUFBbEM7QUFSaEIsT0FPTzdCLGVBUFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXZHRjtBQUFBLGtCQURGO0FBb0hEOztHQTdJdUJOLEk7O01BQUFBLEkiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBVWEFJIGZyb20gXCJ1eC1haVwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENvcHlCbG9jaywgZHJhY3VsYSwgYW5PbGRIb3BlLCByYWlsc2Nhc3QgfSBmcm9tIFwicmVhY3QtY29kZS1ibG9ja3NcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xuaW1wb3J0IFNsaWRlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvU2xpZGVyXCI7XG5pbXBvcnQgVG9vbHRpcCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVG9vbHRpcFwiO1xuaW1wb3J0IFNuYWNrYmFyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9TbmFja2JhclwiO1xuY29uc3QgZnMgPSByZXF1aXJlKFwiZnNcIik7XG5jb25zdCBzaG93ZG93biA9IHJlcXVpcmUoXCJzaG93ZG93blwiKTtcbmxldCBjb252ZXJ0ZXIgPSBuZXcgc2hvd2Rvd24uQ29udmVydGVyKCk7XG5jb252ZXJ0ZXIuc2V0Rmxhdm9yKFwiZ2l0aHViXCIpO1xuY29uc3QgSHRtbFRvUmVhY3RQYXJzZXIgPSByZXF1aXJlKFwiaHRtbC10by1yZWFjdFwiKS5QYXJzZXI7XG5jb25zdCBodG1sVG9SZWFjdFBhcnNlciA9IG5ldyBIdG1sVG9SZWFjdFBhcnNlcigpO1xuXG5sZXQgdXhhaTtcblxuZnVuY3Rpb24gVmFsdWVMYWJlbENvbXBvbmVudChwcm9wcykge1xuICBjb25zdCB7IGNoaWxkcmVuLCBvcGVuLCB2YWx1ZSB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8VG9vbHRpcFxuICAgICAgb3Blbj17b3Blbn1cbiAgICAgIGVudGVyVG91Y2hEZWxheT17MH1cbiAgICAgIHBsYWNlbWVudD1cInRvcFwiXG4gICAgICBjbGFzc05hbWU9XCJyb3VuZGVkXCJcbiAgICAgIHRpdGxlPXtgJHt2YWx1ZX0ke2Ake3ZhbHVlfWAubGVuZ3RoID09IDEgPyBcIi4wXCIgOiBcIlwifXNgfVxuICAgICAgUG9wcGVyUHJvcHM9e3tcbiAgICAgICAgY29udGFpbmVyOiAoKSA9PiB7XG4gICAgICAgICAgaWYgKGRvY3VtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNfX25leHRcIik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH0sXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L1Rvb2x0aXA+XG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XG4gIGNvbnNvbGUubG9nKFwiZ2V0IHByb3BzXCIpO1xuICBsZXQgZGF0YTtcbiAgdHJ5IHtcbiAgICBkYXRhID0gZnMucmVhZEZpbGVTeW5jKFwiLi4vUkVBRE1FLm1kXCIsIFwidXRmOFwiKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICB9XG4gIGxldCBlbGVtZW50cyA9IFtdO1xuICBsZXQgY3VycmVudCA9IHtcbiAgICB0eXBlOiBcImh0bWxcIixcbiAgICB0ZXh0OiBcIlwiLFxuICB9O1xuICBmb3IgKGxldCBsaW5lIG9mIGRhdGEuc3BsaXQoL1xccj9cXG4vKSkge1xuICAgIGlmIChsaW5lKSB7XG4gICAgICBpZiAobGluZS5pbmNsdWRlcyhcImBgYFwiKSkge1xuICAgICAgICAvLyBjb2RlIGJsb2NrIHN0YXJ0XG4gICAgICAgIGlmIChjdXJyZW50LnR5cGUgPT0gXCJodG1sXCIpIHtcbiAgICAgICAgICBlbGVtZW50cy5wdXNoKGN1cnJlbnQpO1xuICAgICAgICAgIGN1cnJlbnQgPSB7XG4gICAgICAgICAgICB0eXBlOiBcImNvZGVibG9ja1wiLFxuICAgICAgICAgICAgdGV4dDogXCJcIixcbiAgICAgICAgICAgIGxhbmd1YWdlOiBsaW5lLnN1YnN0cmluZygzKSB8fCBcInRleHRcIixcbiAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGN1cnJlbnQudGV4dCA9IGN1cnJlbnQudGV4dC5zdWJzdHJpbmcoMCwgY3VycmVudC50ZXh0Lmxlbmd0aCAtIDEpOyAvLyBpZ25vcmUgbGFzdCBuZXdsaW5lXG4gICAgICAgICAgZWxlbWVudHMucHVzaChjdXJyZW50KTtcbiAgICAgICAgICBjdXJyZW50ID0ge1xuICAgICAgICAgICAgdHlwZTogXCJodG1sXCIsXG4gICAgICAgICAgICB0ZXh0OiBcIlwiLFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAobGluZS5pbmNsdWRlcyhcIiMjIERlbW9cIikpIHtcbiAgICAgICAgLy8gZGVtbyBzdGFydFxuICAgICAgICBjdXJyZW50LnRleHQgKz0gY29udmVydGVyLm1ha2VIdG1sKGxpbmUpO1xuICAgICAgICBlbGVtZW50cy5wdXNoKGN1cnJlbnQpO1xuICAgICAgICBjdXJyZW50ID0ge1xuICAgICAgICAgIHR5cGU6IFwiZGVtb1wiLFxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gb3RoZXJcbiAgICAgICAgaWYgKGN1cnJlbnQudHlwZSA9PSBcImRlbW9cIiAmJiBsaW5lLmluY2x1ZGVzKFwiIyNcIikpIHtcbiAgICAgICAgICBlbGVtZW50cy5wdXNoKGN1cnJlbnQpO1xuICAgICAgICAgIGN1cnJlbnQgPSB7XG4gICAgICAgICAgICB0eXBlOiBcImh0bWxcIixcbiAgICAgICAgICAgIHRleHQ6IFwiXCIsXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY3VycmVudC50eXBlID09IFwiY29kZWJsb2NrXCIpIHtcbiAgICAgICAgICBjdXJyZW50LnRleHQgKz0gbGluZSArIFwiXFxuXCI7XG4gICAgICAgIH0gZWxzZSBpZiAoY3VycmVudC50eXBlID09IFwiaHRtbFwiKSB7XG4gICAgICAgICAgbGV0IGxpbmVIdG1sID0gY29udmVydGVyLm1ha2VIdG1sKGxpbmUpO1xuICAgICAgICAgIGlmIChsaW5lSHRtbC5pbmNsdWRlcyhgPHA+PGApICYmICFsaW5lSHRtbC5pbmNsdWRlcyhgPHA+PGVtPmApKSB7XG4gICAgICAgICAgICAvLyBnZXQgcmlkZSBvZiB1c2VsZXNzIHdyYXBwaW5nIHAgdGFnXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInNob3J0ZW5pbmcgbGluZVwiKTtcbiAgICAgICAgICAgIGxpbmVIdG1sID0gbGluZUh0bWwuc3Vic3RyaW5nKDMsIGxpbmVIdG1sLmxlbmd0aCAtIDQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjdXJyZW50LnRleHQgKz0gbGluZUh0bWw7XG4gICAgICAgICAgaWYgKGxpbmUuaW5jbHVkZXMoYGlkPVwiaGVhZGxpbmVcImApKSB7XG4gICAgICAgICAgICBjdXJyZW50LnRleHQgKz0gYDxoMz5DcmVhdGVkIGJ5IDxhIGhyZWY9XCJodHRwczovL2JsYWtlc2FuaWUuY29tXCI+Qmxha2UgU2FuaWU8L2E+PC9oMz5gO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBlbGVtZW50cy5wdXNoKGN1cnJlbnQpO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IGVsZW1lbnRzIH0sIC8vIHdpbGwgYmUgcGFzc2VkIHRvIHRoZSBwYWdlIGNvbXBvbmVudCBhcyBwcm9wc1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHByb3BzKSB7XG4gIGNvbnN0IFt1eGFpUnVubmluZywgc2V0VXhhaVJ1bm5pbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaW5mZXJlbmNlSW50ZXJ2YWwsIHNldEluZmVyZW5jZUludGVydmFsXSA9IHVzZVN0YXRlKDUpO1xuICBjb25zdCBbc25hY2tiYXJNZXNzYWdlLCBzZXRTbmFja2Jhck1lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtzbmFja2Jhck9wZW4sIHNldFNuYWNrYmFyT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgc2hvd1NuYWNrID0gKG1lc3NhZ2UpID0+IHtcbiAgICBzZXRTbmFja2Jhck9wZW4oZmFsc2UpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0U25hY2tiYXJPcGVuKHRydWUpO1xuICAgICAgc2V0U25hY2tiYXJNZXNzYWdlKG1lc3NhZ2UpO1xuICAgIH0sIDEpO1xuICB9O1xuXG4gIC8vIGNvbnNvbGUubG9nKHByb3BzLmVsZW1lbnRzKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY29weVwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgc2hvd1NuYWNrKGBTdWNjZXNzZnVsbHkgY29waWVkIHRleHRgKTtcbiAgICB9KTtcbiAgfSwgW10pO1xuICAvLyBsZXQgZWxlbWVudHMgPSBbXTtcbiAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCAxMDAwOyBpKyspIHtcbiAgLy8gICBlbGVtZW50cy5wdXNoKDxwIGtleT17aX0+VGVzdDwvcD4pO1xuICAvLyB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIHsvKiA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTAuNVwiIC8+ICovfVxuICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vQHRlbnNvcmZsb3cvdGZqcy9kaXN0L3RmLm1pbi5qc1wiPlxuICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgPC9zY3JpcHQ+XG4gICAgICA8L0hlYWQ+XG4gICAgICB7cHJvcHMuZWxlbWVudHMubWFwKChlbGVtZW50LCBpKSA9PiB7XG4gICAgICAgIGlmIChlbGVtZW50LnR5cGUgPT0gXCJjb2RlYmxvY2tcIikge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGVsZW1lbnQubGFuZ3VhZ2UpO1xuICAgICAgICAgIC8vIHJldHVybiA8cD5jb2RlYmxvY2s8L3A+O1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvZGVCbG9jayByb3VuZGVkXCIga2V5PXtlbGVtZW50LnRleHR9PlxuICAgICAgICAgICAgICA8Q29weUJsb2NrXG4gICAgICAgICAgICAgICAgc3R5bGU9e3t9fVxuICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICB0ZXh0PXtlbGVtZW50LnRleHR9XG4gICAgICAgICAgICAgICAgbGFuZ3VhZ2U9e2VsZW1lbnQubGFuZ3VhZ2UucmVwbGFjZShcImh0bWxcIiwgXCJtYXJrdXBcIil9XG4gICAgICAgICAgICAgICAgc2hvd0xpbmVOdW1iZXJzPXtmYWxzZX1cbiAgICAgICAgICAgICAgICB3cmFwTGluZXNcbiAgICAgICAgICAgICAgICB0aGVtZT17cmFpbHNjYXN0fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZWxlbWVudC50eXBlID09IFwiZGVtb1wiKSB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVtb1wiIGtleT1cImRlbW9cIj5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgVVgtQUkgaXMgcmVhZHkgdG8gcnVuIG9uIHRoaXMgcGFnZSEgQWN0aXZhdGUgVVgtQUkgd2l0aCB0aGVcbiAgICAgICAgICAgICAgICBidXR0b24gYmVsb3csIG9yIGRlYWN0aXZhdGUgdG8gYWRqdXN0IHRoZSBpbmZlcmVuY2UgaW50ZXJ2YWwuXG4gICAgICAgICAgICAgICAgVGhlbiwgdHJ5IHZhcnlpbmcgeW91ciBiZWhhdmlvciBhbmQgb2JzZXJ2ZSB0aGUgc25hY2tiYXIgdGhhdFxuICAgICAgICAgICAgICAgIGFwcGVhcnMgaW4gdGhlIGxvd2VyLXJpZ2h0IGNvcm5lci5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsYWJlbFwiPk1ha2UgaW5mZXJlbmNlIGV2ZXJ5OjwvcD5cbiAgICAgICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgICAgIHZhbHVlPXtpbmZlcmVuY2VJbnRlcnZhbH1cbiAgICAgICAgICAgICAgICBzdGVwPXswLjF9XG4gICAgICAgICAgICAgICAgVmFsdWVMYWJlbENvbXBvbmVudD17VmFsdWVMYWJlbENvbXBvbmVudH1cbiAgICAgICAgICAgICAgICAvLyBtYXJrc1xuICAgICAgICAgICAgICAgIG1pbj17M31cbiAgICAgICAgICAgICAgICBtYXg9ezEwfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiB1eGFpUnVubmluZyA/IDAuMiA6IDEsXG4gICAgICAgICAgICAgICAgICBwb2ludGVyRXZlbnRzOiB1eGFpUnVubmluZyA/IFwibm9uZVwiIDogXCJhdXRvXCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICB2YWx1ZUxhYmVsRGlzcGxheT1cIm9uXCJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50LCB2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgc2V0SW5mZXJlbmNlSW50ZXJ2YWwodmFsdWUpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICBcInJvdW5kZWQgXCIgKyAodXhhaVJ1bm5pbmcgPyBcImRlYWN0aXZhdGVcIiA6IFwiYWN0aXZhdGVcIilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKHV4YWlSdW5uaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHV4YWkuZGVhY3RpdmF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICB1eGFpID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICBzaG93U25hY2soYFVYLUFJIERlYWN0aXZhdGVkYCk7XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzaG93U25hY2soYFVYLUFJIEFjdGl2YXRlZGApO1xuICAgICAgICAgICAgICAgICAgICB1eGFpID0gbmV3IFVYQUkoe1xuICAgICAgICAgICAgICAgICAgICAgIGluZmVyZW5jZUludGVydmFsOiBpbmZlcmVuY2VJbnRlcnZhbCAqIDEwMDAsXG4gICAgICAgICAgICAgICAgICAgICAgaW5mZXJlbmNlQ2FsbGJhY2s6IChoaXN0b3J5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93U25hY2soXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGBMYXRlc3QgYmVoYXZpb3Igc3RhdHVzOiBcIiR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlzdG9yeVtoaXN0b3J5Lmxlbmd0aCAtIDFdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cImBcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBzZXRVeGFpUnVubmluZyghdXhhaVJ1bm5pbmcpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7YCR7dXhhaVJ1bm5pbmcgPyBcIkRlYWN0aXZhdGVcIiA6IFwiQWN0aXZhdGVcIn0gVVgtQUlgfVxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibGFiZWxcIj5SZXN1bHRpbmcgb2JqZWN0IGluc3RhbnRpYXRpb246PC9wPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvZGVCbG9jayByb3VuZGVkXCI+XG4gICAgICAgICAgICAgICAgPENvcHlCbG9ja1xuICAgICAgICAgICAgICAgICAgdGV4dD17YGNvbnN0IHV4YWkgPSBuZXcgVVhBSSh7XFxuXFx0aW5mZXJlbmNlSW50ZXJ2YWw6ICR7XG4gICAgICAgICAgICAgICAgICAgIGluZmVyZW5jZUludGVydmFsICogMTAwMFxuICAgICAgICAgICAgICAgICAgfSxcXG5cXHRpbmZlcmVuY2VDYWxsYmFjazogaGlzdG9yeSA9PiB7XFxuXFx0XFx0Ly8gZG8gc29tZXRoaW5nXFxuXFx0fVxcbn0pYH1cbiAgICAgICAgICAgICAgICAgIGxhbmd1YWdlPVwiamF2YXNjcmlwdFwiXG4gICAgICAgICAgICAgICAgICBzaG93TGluZU51bWJlcnM9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgd3JhcExpbmVzXG4gICAgICAgICAgICAgICAgICB0aGVtZT17cmFpbHNjYXN0fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhlbGVtZW50LnRleHQpO1xuICAgICAgICBsZXQgY29tcG9uZW50ID0gaHRtbFRvUmVhY3RQYXJzZXIucGFyc2UoZWxlbWVudC50ZXh0KTtcbiAgICAgICAgLy8gaWYgKCFlbGVtZW50LnRleHQuaW5jbHVkZXMoXCI8dWxcIikpIHtcbiAgICAgICAgLy8gICByZXR1cm4gPGRpdiBrZXk9e2l9Pntjb21wb25lbnR9PC9kaXY+O1xuICAgICAgICAvLyB9XG4gICAgICAgIHJldHVybiA8RnJhZ21lbnQga2V5PXtlbGVtZW50LnRleHR9Pntjb21wb25lbnR9PC9GcmFnbWVudD47XG4gICAgICAgIC8vIDxkaXYga2V5PXtpfSBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGVsZW1lbnQudGV4dCB9fSAvPlxuICAgICAgfSl9XG4gICAgICA8U25hY2tiYXJcbiAgICAgICAgb3Blbj17c25hY2tiYXJPcGVufVxuICAgICAgICBvbkNsb3NlPXsoKSA9PiB7XG4gICAgICAgICAgc2V0U25hY2tiYXJPcGVuKGZhbHNlKTtcbiAgICAgICAgfX1cbiAgICAgICAgYXV0b0hpZGVEdXJhdGlvbj17MjUwMH1cbiAgICAgICAgbWVzc2FnZT17c25hY2tiYXJNZXNzYWdlfVxuICAgICAgICBrZXk9e3NuYWNrYmFyTWVzc2FnZX1cbiAgICAgICAgYW5jaG9yT3JpZ2luPXt7IHZlcnRpY2FsOiBcImJvdHRvbVwiLCBob3Jpem9udGFsOiBcInJpZ2h0XCIgfX1cbiAgICAgIC8+XG4gICAgPC8+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});