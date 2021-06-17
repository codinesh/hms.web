self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/Layout.tsx":
/*!***********************************!*\
  !*** ./src/components/Layout.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/headlessui.esm.js");
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/@heroicons/react/outline/esm/index.js");
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/@heroicons/react/solid/esm/index.js");
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Sidebar */ "./src/components/Sidebar.tsx");
/* harmony import */ var _helpers_csshelpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/csshelpers */ "./src/helpers/csshelpers.ts");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../data */ "./src/data.ts");
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Page */ "./src/components/Page.tsx");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_9__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\Administrator\\Documents\\code\\hms.web\\src\\components\\Layout.tsx",
    _this = undefined,
    _s = $RefreshSig$();











var Layout = function Layout(props) {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      sidebarOpen = _useState[0],
      setSidebarOpen = _useState[1];

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "flex h-screen overflow-hidden bg-gray-100",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Sidebar__WEBPACK_IMPORTED_MODULE_5__.default, {
      setSidebarOpen: setSidebarOpen,
      sidebarOpen: sidebarOpen
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex flex-col flex-1 overflow-hidden",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "print:hidden relative z-10 flex flex-shrink-0 h-16 bg-white shadow",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: "px-4 text-gray-500 border-r border-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden",
          onClick: function onClick() {
            return setSidebarOpen(true);
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "sr-only",
            children: "Open sidebar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__.MenuAlt2Icon, {
            className: "w-6 h-6",
            "aria-hidden": "true"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "flex justify-between flex-1 px-4",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "flex flex-1",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
              className: "flex w-full md:ml-0",
              action: "#",
              method: "GET",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                htmlFor: "search_field",
                className: "sr-only",
                children: "Search"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 29,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "relative w-full text-gray-400 focus-within:text-gray-600",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "absolute inset-y-0 left-0 flex items-center pointer-events-none",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__.SearchIcon, {
                    className: "w-5 h-5",
                    "aria-hidden": "true"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 34,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 33,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                  id: "search_field",
                  className: "block w-full h-full py-2 pl-8 pr-3 text-gray-900 placeholder-gray-500 border-transparent focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm",
                  placeholder: "Search",
                  type: "search",
                  name: "search"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 36,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 32,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "flex items-center ml-4 md:ml-6",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              className: "p-1 text-gray-400 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "sr-only",
                children: "View notifications"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 48,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__.BellIcon, {
                className: "w-6 h-6",
                "aria-hidden": "true"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 49,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Menu, {
              as: "div",
              className: "relative ml-3",
              children: function children(_ref) {
                var open = _ref.open;
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Button, {
                      className: "flex items-center max-w-xs text-sm bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                        className: "sr-only",
                        children: "Open user menu"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 58,
                        columnNumber: 25
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                        className: "w-8 h-8 rounded-full",
                        src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                        alt: ""
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 59,
                        columnNumber: 25
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 57,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 56,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition, {
                    show: open,
                    as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                    enter: "transition ease-out duration-100",
                    enterFrom: "transform opacity-0 scale-95",
                    enterTo: "transform opacity-100 scale-100",
                    leave: "transition ease-in duration-75",
                    leaveFrom: "transform opacity-100 scale-100",
                    leaveTo: "transform opacity-0 scale-95",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Items, {
                      "static": true,
                      className: "absolute right-0 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",
                      children: _data__WEBPACK_IMPORTED_MODULE_7__.data.userNavigation.map(function (item) {
                        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {
                          children: function children(_ref2) {
                            var active = _ref2.active;
                            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                              href: item.path,
                              className: (0,_helpers_csshelpers__WEBPACK_IMPORTED_MODULE_6__.classNames)(active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700"),
                              children: item.name
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 81,
                              columnNumber: 31
                            }, _this);
                          }
                        }, item.name, false, {
                          fileName: _jsxFileName,
                          lineNumber: 79,
                          columnNumber: 27
                        }, _this);
                      })
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 75,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 66,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "hidden print:flex px-4 py-4",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_9___default()), {
          width: 140,
          height: 140,
          src: "/logo.png",
          alt: "logo"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("header", {
          className: "w-full print:flex -mx-70 print:flex-col items-center justify-center",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            className: "text-3xl font-medium",
            children: "Pragathi Hospital"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "text-sm",
            children: "Tirupati, addressline1"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "text-sm",
            children: "Tirupati, addressline2"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
        className: "relative flex-1 overflow-y-auto focus:outline-none",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "py-6",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Page__WEBPACK_IMPORTED_MODULE_8__.default, {
            children: props.children
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, _this);
};

_s(Layout, "5rGDkYpGQ8fHM9RkMWnKOwsxadk=");

_c = Layout;
/* harmony default export */ __webpack_exports__["default"] = (Layout);

var _c;

$RefreshReg$(_c, "Layout");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0LnRzeCJdLCJuYW1lcyI6WyJMYXlvdXQiLCJwcm9wcyIsInVzZVN0YXRlIiwic2lkZWJhck9wZW4iLCJzZXRTaWRlYmFyT3BlbiIsIm9wZW4iLCJGcmFnbWVudCIsImRhdGEiLCJpdGVtIiwiYWN0aXZlIiwicGF0aCIsImNsYXNzTmFtZXMiLCJuYW1lIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBZ0IsR0FBRyxTQUFuQkEsTUFBbUIsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsa0JBQ0lDLCtDQUFRLENBQUMsS0FBRCxDQURaO0FBQUEsTUFDM0JDLFdBRDJCO0FBQUEsTUFDZEMsY0FEYzs7QUFHbEMsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsMkNBQWY7QUFBQSw0QkFDRSw4REFBQyw2Q0FBRDtBQUFTLG9CQUFjLEVBQUVBLGNBQXpCO0FBQXlDLGlCQUFXLEVBQUVEO0FBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFO0FBQUssZUFBUyxFQUFDLHNDQUFmO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFDLG9FQUFmO0FBQUEsZ0NBQ0U7QUFDRSxtQkFBUyxFQUFDLDhIQURaO0FBRUUsaUJBQU8sRUFBRTtBQUFBLG1CQUFNQyxjQUFjLENBQUMsSUFBRCxDQUFwQjtBQUFBLFdBRlg7QUFBQSxrQ0FHRTtBQUFNLHFCQUFTLEVBQUMsU0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEYsZUFJRSw4REFBQyxrRUFBRDtBQUFjLHFCQUFTLEVBQUMsU0FBeEI7QUFBa0MsMkJBQVk7QUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFPRTtB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QUE7QUFBQSxhQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBd0dELENBM0dEOztHQUFNYixNOztLQUFBQSxNO0FBNkdOLCtEQUFlQSxNQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuOGQ1NmUwZjNjNTljMTA3NWUwZDkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTWVudSwgVHJhbnNpdGlvbiB9IGZyb20gXCJAaGVhZGxlc3N1aS9yZWFjdFwiO1xyXG5pbXBvcnQgeyBCZWxsSWNvbiwgTWVudUFsdDJJY29uIH0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3Qvb3V0bGluZVwiO1xyXG5pbXBvcnQgeyBTZWFyY2hJY29uIH0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3Qvc29saWRcIjtcclxuaW1wb3J0IFNpZGViYXIgZnJvbSBcIi4vU2lkZWJhclwiO1xyXG5pbXBvcnQgeyBjbGFzc05hbWVzIH0gZnJvbSBcIi4uL2hlbHBlcnMvY3NzaGVscGVyc1wiO1xyXG5pbXBvcnQgeyBJTmF2aWdhdGlvbkl0ZW0gfSBmcm9tIFwiLi4vdHlwZXMvSU5hdmlnYXRpb25JdGVtXCI7XHJcbmltcG9ydCB7IGRhdGEgfSBmcm9tIFwiLi4vZGF0YVwiO1xyXG5pbXBvcnQgUGFnZSBmcm9tIFwiLi9QYWdlXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5cclxuY29uc3QgTGF5b3V0OiBSZWFjdC5GQyA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtzaWRlYmFyT3Blbiwgc2V0U2lkZWJhck9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggaC1zY3JlZW4gb3ZlcmZsb3ctaGlkZGVuIGJnLWdyYXktMTAwJz5cclxuICAgICAgPFNpZGViYXIgc2V0U2lkZWJhck9wZW49e3NldFNpZGViYXJPcGVufSBzaWRlYmFyT3Blbj17c2lkZWJhck9wZW59IC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGZsZXgtMSBvdmVyZmxvdy1oaWRkZW4nPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcmludDpoaWRkZW4gcmVsYXRpdmUgei0xMCBmbGV4IGZsZXgtc2hyaW5rLTAgaC0xNiBiZy13aGl0ZSBzaGFkb3cnPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9J3B4LTQgdGV4dC1ncmF5LTUwMCBib3JkZXItciBib3JkZXItZ3JheS0yMDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWluc2V0IGZvY3VzOnJpbmctaW5kaWdvLTUwMCBtZDpoaWRkZW4nXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNpZGViYXJPcGVuKHRydWUpfT5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdzci1vbmx5Jz5PcGVuIHNpZGViYXI8L3NwYW4+XHJcbiAgICAgICAgICAgIDxNZW51QWx0Mkljb24gY2xhc3NOYW1lPSd3LTYgaC02JyBhcmlhLWhpZGRlbj0ndHJ1ZScgLz5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1iZXR3ZWVuIGZsZXgtMSBweC00Jz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC0xJz5cclxuICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9J2ZsZXggdy1mdWxsIG1kOm1sLTAnIGFjdGlvbj0nIycgbWV0aG9kPSdHRVQnPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J3NlYXJjaF9maWVsZCcgY2xhc3NOYW1lPSdzci1vbmx5Jz5cclxuICAgICAgICAgICAgICAgICAgU2VhcmNoXHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JlbGF0aXZlIHctZnVsbCB0ZXh0LWdyYXktNDAwIGZvY3VzLXdpdGhpbjp0ZXh0LWdyYXktNjAwJz5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Fic29sdXRlIGluc2V0LXktMCBsZWZ0LTAgZmxleCBpdGVtcy1jZW50ZXIgcG9pbnRlci1ldmVudHMtbm9uZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlYXJjaEljb24gY2xhc3NOYW1lPSd3LTUgaC01JyBhcmlhLWhpZGRlbj0ndHJ1ZScgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIGlkPSdzZWFyY2hfZmllbGQnXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdibG9jayB3LWZ1bGwgaC1mdWxsIHB5LTIgcGwtOCBwci0zIHRleHQtZ3JheS05MDAgcGxhY2Vob2xkZXItZ3JheS01MDAgYm9yZGVyLXRyYW5zcGFyZW50IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpwbGFjZWhvbGRlci1ncmF5LTQwMCBmb2N1czpyaW5nLTAgZm9jdXM6Ym9yZGVyLXRyYW5zcGFyZW50IHNtOnRleHQtc20nXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1NlYXJjaCdcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPSdzZWFyY2gnXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT0nc2VhcmNoJ1xyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIG1sLTQgbWQ6bWwtNic+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J3AtMSB0ZXh0LWdyYXktNDAwIGJnLXdoaXRlIHJvdW5kZWQtZnVsbCBob3Zlcjp0ZXh0LWdyYXktNTAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1vZmZzZXQtMiBmb2N1czpyaW5nLWluZGlnby01MDAnPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdzci1vbmx5Jz5WaWV3IG5vdGlmaWNhdGlvbnM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8QmVsbEljb24gY2xhc3NOYW1lPSd3LTYgaC02JyBhcmlhLWhpZGRlbj0ndHJ1ZScgLz5cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgey8qIFByb2ZpbGUgZHJvcGRvd24gKi99XHJcbiAgICAgICAgICAgICAgPE1lbnUgYXM9J2RpdicgY2xhc3NOYW1lPSdyZWxhdGl2ZSBtbC0zJz5cclxuICAgICAgICAgICAgICAgIHsoeyBvcGVuIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPE1lbnUuQnV0dG9uIGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIgbWF4LXcteHMgdGV4dC1zbSBiZy13aGl0ZSByb3VuZGVkLWZ1bGwgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLW9mZnNldC0yIGZvY3VzOnJpbmctaW5kaWdvLTUwMCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nc3Itb25seSc+T3BlbiB1c2VyIG1lbnU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3ctOCBoLTggcm91bmRlZC1mdWxsJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz0naHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE0NzIwOTk2NDU3ODUtNTY1OGFiZjRmZjRlP2l4bGliPXJiLTEuMi4xJml4aWQ9ZXlKaGNIQmZhV1FpT2pFeU1EZDkmYXV0bz1mb3JtYXQmZml0PWZhY2VhcmVhJmZhY2VwYWQ9MiZ3PTI1NiZoPTI1NiZxPTgwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD0nJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9NZW51LkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNpdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgc2hvdz17b3Blbn1cclxuICAgICAgICAgICAgICAgICAgICAgIGFzPXtGcmFnbWVudH1cclxuICAgICAgICAgICAgICAgICAgICAgIGVudGVyPSd0cmFuc2l0aW9uIGVhc2Utb3V0IGR1cmF0aW9uLTEwMCdcclxuICAgICAgICAgICAgICAgICAgICAgIGVudGVyRnJvbT0ndHJhbnNmb3JtIG9wYWNpdHktMCBzY2FsZS05NSdcclxuICAgICAgICAgICAgICAgICAgICAgIGVudGVyVG89J3RyYW5zZm9ybSBvcGFjaXR5LTEwMCBzY2FsZS0xMDAnXHJcbiAgICAgICAgICAgICAgICAgICAgICBsZWF2ZT0ndHJhbnNpdGlvbiBlYXNlLWluIGR1cmF0aW9uLTc1J1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGVhdmVGcm9tPSd0cmFuc2Zvcm0gb3BhY2l0eS0xMDAgc2NhbGUtMTAwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGVhdmVUbz0ndHJhbnNmb3JtIG9wYWNpdHktMCBzY2FsZS05NSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdhYnNvbHV0ZSByaWdodC0wIHctNDggcHktMSBtdC0yIG9yaWdpbi10b3AtcmlnaHQgYmctd2hpdGUgcm91bmRlZC1tZCBzaGFkb3ctbGcgcmluZy0xIHJpbmctYmxhY2sgcmluZy1vcGFjaXR5LTUgZm9jdXM6b3V0bGluZS1ub25lJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEudXNlck5hdmlnYXRpb24ubWFwKChpdGVtOiBJTmF2aWdhdGlvbkl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT17aXRlbS5uYW1lfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoeyBhY3RpdmUgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2l0ZW0ucGF0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmUgPyBcImJnLWdyYXktMTAwXCIgOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJibG9jayBweC00IHB5LTIgdGV4dC1zbSB0ZXh0LWdyYXktNzAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtcz5cclxuICAgICAgICAgICAgICAgICAgICA8L1RyYW5zaXRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L01lbnU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIHsvKiBwcmludCBvbmx5ICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoaWRkZW4gcHJpbnQ6ZmxleCBweC00IHB5LTQnPlxyXG4gICAgICAgICAgPEltYWdlIHdpZHRoPXsxNDB9IGhlaWdodD17MTQwfSBzcmM9Jy9sb2dvLnBuZycgYWx0PSdsb2dvJyAvPlxyXG4gICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9J3ctZnVsbCBwcmludDpmbGV4IC1teC03MCBwcmludDpmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXInPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSd0ZXh0LTN4bCBmb250LW1lZGl1bSc+UHJhZ2F0aGkgSG9zcGl0YWw8L2gyPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RleHQtc20nPlRpcnVwYXRpLCBhZGRyZXNzbGluZTE8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndGV4dC1zbSc+VGlydXBhdGksIGFkZHJlc3NsaW5lMjwvc3Bhbj5cclxuICAgICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9J3JlbGF0aXZlIGZsZXgtMSBvdmVyZmxvdy15LWF1dG8gZm9jdXM6b3V0bGluZS1ub25lJz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdweS02Jz5cclxuICAgICAgICAgICAgPFBhZ2U+e3Byb3BzLmNoaWxkcmVufTwvUGFnZT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbWFpbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9