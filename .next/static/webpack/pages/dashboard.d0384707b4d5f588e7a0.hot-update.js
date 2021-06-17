self["webpackHotUpdate_N_E"]("pages/dashboard",{

/***/ "./src/components/TableData.tsx":
/*!**************************************!*\
  !*** ./src/components/TableData.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ TableData; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/@heroicons/react/outline/esm/index.js");
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/headlessui.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Administrator\\Documents\\code\\hms.web\\src\\components\\TableData.tsx",
    _s = $RefreshSig$();





/* This example requires Tailwind CSS v2.0+ */
var people = [{
  name: "Jane Cooper",
  title: "Regional Paradigm Technician",
  role: "Admin",
  email: "jane.cooper@example.com"
}, {
  name: "Jane Cooper",
  title: "Regional Paradigm Technician",
  role: "Admin",
  email: "jane.cooper@example.com"
}, {
  name: "Jane Cooper",
  title: "Regional Paradigm Technician",
  role: "Admin",
  email: "jane2.cooper@example.com"
}, {
  name: "Jane Cooper",
  title: "Regional Paradigm Technician",
  role: "Admin",
  email: "jane3.cooper@example.com"
}, {
  name: "Jane Cooper",
  title: "Regional Paradigm Technician",
  role: "Admin",
  email: "jane4.cooper@example.com"
}, {
  name: "Jane Cooper",
  title: "Regional Paradigm Technician",
  role: "Admin",
  email: "jane5.cooper@example.com"
}, {
  name: "Jane Cooper",
  title: "Regional Paradigm Technician",
  role: "Admin",
  email: "jane6.cooper@example.com"
} // More people...
];
function TableData() {
  _s();

  var _this = this;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      open = _useState[0],
      setOpen = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(people[0]),
      cur = _useState2[0],
      setPeople = _useState2[1];

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "flex flex-col",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "overflow-hidden border-b border-gray-200 shadow sm:rounded-lg",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
            className: "min-w-full divide-y divide-gray-200",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("thead", {
              className: "bg-gray-50",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                  scope: "col",
                  className: "px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase",
                  children: "Name"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 66,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                  scope: "col",
                  className: "px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase",
                  children: "Title"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 71,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                  scope: "col",
                  className: "px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase",
                  children: "Email"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 76,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                  scope: "col",
                  className: "px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase",
                  children: "Role"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 81,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                  scope: "col",
                  className: "print:hidden relative px-6 py-3",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                    className: "sr-only",
                    children: "Edit"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 87,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 86,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 65,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
              className: "bg-white divide-y divide-gray-200 ",
              children: people.map(function (person) {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
                  className: "group hover:bg-gray-100",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                    className: "px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap",
                    children: person.name
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 94,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                    className: "px-6 py-4 text-sm text-gray-500 whitespace-nowrap",
                    children: person.title
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 97,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                    className: "px-6 py-4 text-sm text-gray-500 whitespace-nowrap",
                    children: person.email
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 100,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                    className: "px-6 py-4 text-sm text-gray-500 whitespace-nowrap",
                    children: person.role
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 103,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                    className: "print:hidden px-6 py-4 space-x-4 text-sm font-medium text-right whitespace-nowrap",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                      type: "button",
                      className: "inline-flex items-center p-1 text-gray-200 transform bg-gray-600 border border-transparent rounded-full shadow-sm group-hover:bg-gray-900 group-hover:scale-110 active:ring-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__.PencilIcon, {
                        className: "w-6 h-6 ",
                        "aria-hidden": "true"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 110,
                        columnNumber: 25
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 107,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                      onClick: function onClick() {
                        setOpen(true);
                        setPeople(person);
                      },
                      type: "button",
                      className: "inline-flex items-center p-1 text-gray-200 transform bg-gray-600 border border-transparent rounded-full shadow-sm group-hover:bg-gray-900 group-hover:scale-110 active:ring-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__.TrashIcon, {
                        className: "w-6 h-6 ",
                        "aria-hidden": "true"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 119,
                        columnNumber: 25
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 112,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 106,
                    columnNumber: 21
                  }, _this)]
                }, person.email, true, {
                  fileName: _jsxFileName,
                  lineNumber: 93,
                  columnNumber: 19
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Transition.Root, {
      show: open,
      as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Dialog, {
        as: "div",
        id: "asdf",
        "static": true,
        className: "fixed inset-0 z-10 overflow-y-auto print:m-5",
        open: open,
        onClose: setOpen,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Transition.Child, {
            as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
            enter: "ease-out duration-300",
            enterFrom: "opacity-0",
            enterTo: "opacity-100",
            leave: "ease-in duration-200",
            leaveFrom: "opacity-100",
            leaveTo: "opacity-0",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Dialog.Overlay, {
              className: "fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 147,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "hidden sm:inline-block sm:align-middle sm:h-screen",
            "aria-hidden": "true",
            children: "\u200B"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Transition.Child, {
            as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
            enter: "ease-out duration-300",
            enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
            enterTo: "opacity-100 translate-y-0 sm:scale-100",
            leave: "ease-in duration-200",
            leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
            leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "flex items-center justify-center w-12 h-12 mx-auto bg-green-100 rounded-full",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__.CheckIcon, {
                    className: "w-6 h-6 text-green-600",
                    "aria-hidden": "true"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 167,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 166,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "mt-3 text-center sm:mt-5",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Dialog.Title, {
                    as: "h3",
                    className: "text-lg font-medium leading-6 text-gray-900",
                    children: "Payment successful"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 173,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "mt-2",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                      className: "text-sm text-gray-500",
                      children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore."
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 179,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 178,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 172,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 165,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "mt-5 sm:mt-6",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                  type: "button",
                  className: "inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm print:bg-red-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm",
                  onClick: function onClick() {
                    setOpen(false);
                  },
                  children: "Go back to dashboard"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 187,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 195,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 186,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 164,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 156,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 59,
    columnNumber: 5
  }, this);
}

_s(TableData, "UL83FnBOSM63nF+0l2CXQm3hItw=");

_c = TableData;

var _c;

$RefreshReg$(_c, "TableData");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVGFibGVEYXRhLnRzeCJdLCJuYW1lcyI6WyJwZW9wbGUiLCJuYW1lIiwidGl0bGUiLCJyb2xlIiwiZW1haWwiLCJUYWJsZURhdGEiLCJ1c2VTdGF0ZSIsIm9wZW4iLCJzZXRPcGVuIiwiY3VyIiwic2V0UGVvcGxlIiwibWFwIiwicGVyc29uIiwiRnJhZ21lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7O0FBR0E7QUFDQSxJQUFNQSxNQUFNLEdBQUcsQ0FDYjtBQUNFQyxNQUFJLEVBQUUsYUFEUjtBQUVFQyxPQUFLLEVBQUUsOEJBRlQ7QUFHRUMsTUFBSSxFQUFFLE9BSFI7QUFJRUMsT0FBSyxFQUFFO0FBSlQsQ0FEYSxFQU9iO0FBQ0VILE1BQUksRUFBRSxhQURSO0FBRUVDLE9BQUssRUFBRSw4QkFGVDtBQUdFQyxNQUFJLEVBQUUsT0FIUjtBQUlFQyxPQUFLLEVBQUU7QUFKVCxDQVBhLEVBYWI7QUFDRUgsTUFBSSxFQUFFLGFBRFI7QUFFRUMsT0FBSyxFQUFFLDhCQUZUO0FBR0VDLE1BQUksRUFBRSxPQUhSO0FBSUVDLE9BQUssRUFBRTtBQUpULENBYmEsRUFtQmI7QUFDRUgsTUFBSSxFQUFFLGFBRFI7QUFFRUMsT0FBSyxFQUFFLDhCQUZUO0FBR0VDLE1BQUksRUFBRSxPQUhSO0FBSUVDLE9BQUssRUFBRTtBQUpULENBbkJhLEVBeUJiO0FBQ0VILE1BQUksRUFBRSxhQURSO0FBRUVDLE9BQUssRUFBRSw4QkFGVDtBQUdFQyxNQUFJLEVBQUUsT0FIUjtBQUlFQyxPQUFLLEVBQUU7QUFKVCxDQXpCYSxFQStCYjtBQUNFSCxNQUFJLEVBQUUsYUFEUjtBQUVFQyxPQUFLLEVBQUUsOEJBRlQ7QUFHRUMsTUFBSSxFQUFFLE9BSFI7QUFJRUMsT0FBSyxFQUFFO0FBSlQsQ0EvQmEsRUFxQ2I7QUFDRUgsTUFBSSxFQUFFLGFBRFI7QUFFRUMsT0FBSyxF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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQXRCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQWxCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXZFRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWtKRDs7R0F0SnVCSCxTOztLQUFBQSxTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Rhc2hib2FyZC5kMDM4NDcwN2I0ZDVmNTg4ZTdhMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ2hlY2tJY29uLCBQZW5jaWxJY29uLCBUcmFzaEljb24gfSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC9vdXRsaW5lXCI7XG5cbmltcG9ydCB7IERpYWxvZywgVHJhbnNpdGlvbiB9IGZyb20gXCJAaGVhZGxlc3N1aS9yZWFjdFwiO1xuaW1wb3J0IFRhYmxlSXRlbSBmcm9tIFwiLi9UYWJsZUl0ZW1cIjtcblxuLyogVGhpcyBleGFtcGxlIHJlcXVpcmVzIFRhaWx3aW5kIENTUyB2Mi4wKyAqL1xuY29uc3QgcGVvcGxlID0gW1xuICB7XG4gICAgbmFtZTogXCJKYW5lIENvb3BlclwiLFxuICAgIHRpdGxlOiBcIlJlZ2lvbmFsIFBhcmFkaWdtIFRlY2huaWNpYW5cIixcbiAgICByb2xlOiBcIkFkbWluXCIsXG4gICAgZW1haWw6IFwiamFuZS5jb29wZXJAZXhhbXBsZS5jb21cIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiSmFuZSBDb29wZXJcIixcbiAgICB0aXRsZTogXCJSZWdpb25hbCBQYXJhZGlnbSBUZWNobmljaWFuXCIsXG4gICAgcm9sZTogXCJBZG1pblwiLFxuICAgIGVtYWlsOiBcImphbmUuY29vcGVyQGV4YW1wbGUuY29tXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkphbmUgQ29vcGVyXCIsXG4gICAgdGl0bGU6IFwiUmVnaW9uYWwgUGFyYWRpZ20gVGVjaG5pY2lhblwiLFxuICAgIHJvbGU6IFwiQWRtaW5cIixcbiAgICBlbWFpbDogXCJqYW5lMi5jb29wZXJAZXhhbXBsZS5jb21cIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiSmFuZSBDb29wZXJcIixcbiAgICB0aXRsZTogXCJSZWdpb25hbCBQYXJhZGlnbSBUZWNobmljaWFuXCIsXG4gICAgcm9sZTogXCJBZG1pblwiLFxuICAgIGVtYWlsOiBcImphbmUzLmNvb3BlckBleGFtcGxlLmNvbVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJKYW5lIENvb3BlclwiLFxuICAgIHRpdGxlOiBcIlJlZ2lvbmFsIFBhcmFkaWdtIFRlY2huaWNpYW5cIixcbiAgICByb2xlOiBcIkFkbWluXCIsXG4gICAgZW1haWw6IFwiamFuZTQuY29vcGVyQGV4YW1wbGUuY29tXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkphbmUgQ29vcGVyXCIsXG4gICAgdGl0bGU6IFwiUmVnaW9uYWwgUGFyYWRpZ20gVGVjaG5pY2lhblwiLFxuICAgIHJvbGU6IFwiQWRtaW5cIixcbiAgICBlbWFpbDogXCJqYW5lNS5jb29wZXJAZXhhbXBsZS5jb21cIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiSmFuZSBDb29wZXJcIixcbiAgICB0aXRsZTogXCJSZWdpb25hbCBQYXJhZGlnbSBUZWNobmljaWFuXCIsXG4gICAgcm9sZTogXCJBZG1pblwiLFxuICAgIGVtYWlsOiBcImphbmU2LmNvb3BlckBleGFtcGxlLmNvbVwiLFxuICB9LFxuICAvLyBNb3JlIHBlb3BsZS4uLlxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGFibGVEYXRhKCkge1xuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtjdXIsIHNldFBlb3BsZV0gPSB1c2VTdGF0ZShwZW9wbGVbMF0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wnPlxuICAgICAgPGRpdiBjbGFzc05hbWU9Jy1teS0yIG92ZXJmbG93LXgtYXV0byBzbTotbXgtNiBsZzotbXgtOCc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbmxpbmUtYmxvY2sgbWluLXctZnVsbCBweS0yIGFsaWduLW1pZGRsZSBzbTpweC02IGxnOnB4LTgnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdvdmVyZmxvdy1oaWRkZW4gYm9yZGVyLWIgYm9yZGVyLWdyYXktMjAwIHNoYWRvdyBzbTpyb3VuZGVkLWxnJz5cbiAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9J21pbi13LWZ1bGwgZGl2aWRlLXkgZGl2aWRlLWdyYXktMjAwJz5cbiAgICAgICAgICAgICAgPHRoZWFkIGNsYXNzTmFtZT0nYmctZ3JheS01MCc+XG4gICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgPHRoXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlPSdjb2wnXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ncHgtNiBweS0zIHRleHQteHMgZm9udC1tZWRpdW0gdHJhY2tpbmctd2lkZXIgdGV4dC1sZWZ0IHRleHQtZ3JheS01MDAgdXBwZXJjYXNlJz5cbiAgICAgICAgICAgICAgICAgICAgTmFtZVxuICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgIDx0aFxuICAgICAgICAgICAgICAgICAgICBzY29wZT0nY29sJ1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3B4LTYgcHktMyB0ZXh0LXhzIGZvbnQtbWVkaXVtIHRyYWNraW5nLXdpZGVyIHRleHQtbGVmdCB0ZXh0LWdyYXktNTAwIHVwcGVyY2FzZSc+XG4gICAgICAgICAgICAgICAgICAgIFRpdGxlXG4gICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgPHRoXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlPSdjb2wnXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ncHgtNiBweS0zIHRleHQteHMgZm9udC1tZWRpdW0gdHJhY2tpbmctd2lkZXIgdGV4dC1sZWZ0IHRleHQtZ3JheS01MDAgdXBwZXJjYXNlJz5cbiAgICAgICAgICAgICAgICAgICAgRW1haWxcbiAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICA8dGhcbiAgICAgICAgICAgICAgICAgICAgc2NvcGU9J2NvbCdcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdweC02IHB5LTMgdGV4dC14cyBmb250LW1lZGl1bSB0cmFja2luZy13aWRlciB0ZXh0LWxlZnQgdGV4dC1ncmF5LTUwMCB1cHBlcmNhc2UnPlxuICAgICAgICAgICAgICAgICAgICBSb2xlXG4gICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPSdjb2wnIGNsYXNzTmFtZT0ncHJpbnQ6aGlkZGVuIHJlbGF0aXZlIHB4LTYgcHktMyc+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nc3Itb25seSc+RWRpdDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgPHRib2R5IGNsYXNzTmFtZT0nYmctd2hpdGUgZGl2aWRlLXkgZGl2aWRlLWdyYXktMjAwICc+XG4gICAgICAgICAgICAgICAge3Blb3BsZS5tYXAoKHBlcnNvbikgPT4gKFxuICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT0nZ3JvdXAgaG92ZXI6YmctZ3JheS0xMDAnIGtleT17cGVyc29uLmVtYWlsfT5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT0ncHgtNiBweS00IHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMCB3aGl0ZXNwYWNlLW5vd3JhcCc+XG4gICAgICAgICAgICAgICAgICAgICAge3BlcnNvbi5uYW1lfVxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPSdweC02IHB5LTQgdGV4dC1zbSB0ZXh0LWdyYXktNTAwIHdoaXRlc3BhY2Utbm93cmFwJz5cbiAgICAgICAgICAgICAgICAgICAgICB7cGVyc29uLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPSdweC02IHB5LTQgdGV4dC1zbSB0ZXh0LWdyYXktNTAwIHdoaXRlc3BhY2Utbm93cmFwJz5cbiAgICAgICAgICAgICAgICAgICAgICB7cGVyc29uLmVtYWlsfVxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPSdweC02IHB5LTQgdGV4dC1zbSB0ZXh0LWdyYXktNTAwIHdoaXRlc3BhY2Utbm93cmFwJz5cbiAgICAgICAgICAgICAgICAgICAgICB7cGVyc29uLnJvbGV9XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J3ByaW50OmhpZGRlbiBweC02IHB5LTQgc3BhY2UteC00IHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1yaWdodCB3aGl0ZXNwYWNlLW5vd3JhcCc+XG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0nYnV0dG9uJ1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgcC0xIHRleHQtZ3JheS0yMDAgdHJhbnNmb3JtIGJnLWdyYXktNjAwIGJvcmRlciBib3JkZXItdHJhbnNwYXJlbnQgcm91bmRlZC1mdWxsIHNoYWRvdy1zbSBncm91cC1ob3ZlcjpiZy1ncmF5LTkwMCBncm91cC1ob3ZlcjpzY2FsZS0xMTAgYWN0aXZlOnJpbmctMSBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctb2Zmc2V0LTIgZm9jdXM6cmluZy1ncmF5LTUwMCc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UGVuY2lsSWNvbiBjbGFzc05hbWU9J3ctNiBoLTYgJyBhcmlhLWhpZGRlbj0ndHJ1ZScgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldE9wZW4odHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldFBlb3BsZShwZXJzb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J2J1dHRvbidcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0naW5saW5lLWZsZXggaXRlbXMtY2VudGVyIHAtMSB0ZXh0LWdyYXktMjAwIHRyYW5zZm9ybSBiZy1ncmF5LTYwMCBib3JkZXIgYm9yZGVyLXRyYW5zcGFyZW50IHJvdW5kZWQtZnVsbCBzaGFkb3ctc20gZ3JvdXAtaG92ZXI6YmctZ3JheS05MDAgZ3JvdXAtaG92ZXI6c2NhbGUtMTEwIGFjdGl2ZTpyaW5nLTEgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLW9mZnNldC0yIGZvY3VzOnJpbmctZ3JheS01MDAnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYXNoSWNvbiBjbGFzc05hbWU9J3ctNiBoLTYgJyBhcmlhLWhpZGRlbj0ndHJ1ZScgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8VHJhbnNpdGlvbi5Sb290IHNob3c9e29wZW59IGFzPXtGcmFnbWVudH0+XG4gICAgICAgIDxEaWFsb2dcbiAgICAgICAgICBhcz0nZGl2J1xuICAgICAgICAgIGlkPSdhc2RmJ1xuICAgICAgICAgIHN0YXRpY1xuICAgICAgICAgIGNsYXNzTmFtZT0nZml4ZWQgaW5zZXQtMCB6LTEwIG92ZXJmbG93LXktYXV0byBwcmludDptLTUnXG4gICAgICAgICAgb3Blbj17b3Blbn1cbiAgICAgICAgICBvbkNsb3NlPXtzZXRPcGVufT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBpdGVtcy1lbmQganVzdGlmeS1jZW50ZXIgbWluLWgtc2NyZWVuIHB4LTQgcHQtNCBwYi0yMCB0ZXh0LWNlbnRlciBzbTpibG9jayBzbTpwLTAnPlxuICAgICAgICAgICAgPFRyYW5zaXRpb24uQ2hpbGRcbiAgICAgICAgICAgICAgYXM9e0ZyYWdtZW50fVxuICAgICAgICAgICAgICBlbnRlcj0nZWFzZS1vdXQgZHVyYXRpb24tMzAwJ1xuICAgICAgICAgICAgICBlbnRlckZyb209J29wYWNpdHktMCdcbiAgICAgICAgICAgICAgZW50ZXJUbz0nb3BhY2l0eS0xMDAnXG4gICAgICAgICAgICAgIGxlYXZlPSdlYXNlLWluIGR1cmF0aW9uLTIwMCdcbiAgICAgICAgICAgICAgbGVhdmVGcm9tPSdvcGFjaXR5LTEwMCdcbiAgICAgICAgICAgICAgbGVhdmVUbz0nb3BhY2l0eS0wJz5cbiAgICAgICAgICAgICAgPERpYWxvZy5PdmVybGF5IGNsYXNzTmFtZT0nZml4ZWQgaW5zZXQtMCB0cmFuc2l0aW9uLW9wYWNpdHkgYmctZ3JheS01MDAgYmctb3BhY2l0eS03NScgLz5cbiAgICAgICAgICAgIDwvVHJhbnNpdGlvbi5DaGlsZD5cblxuICAgICAgICAgICAgey8qIFRoaXMgZWxlbWVudCBpcyB0byB0cmljayB0aGUgYnJvd3NlciBpbnRvIGNlbnRlcmluZyB0aGUgbW9kYWwgY29udGVudHMuICovfVxuICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdoaWRkZW4gc206aW5saW5lLWJsb2NrIHNtOmFsaWduLW1pZGRsZSBzbTpoLXNjcmVlbidcbiAgICAgICAgICAgICAgYXJpYS1oaWRkZW49J3RydWUnPlxuICAgICAgICAgICAgICAmIzgyMDM7XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8VHJhbnNpdGlvbi5DaGlsZFxuICAgICAgICAgICAgICBhcz17RnJhZ21lbnR9XG4gICAgICAgICAgICAgIGVudGVyPSdlYXNlLW91dCBkdXJhdGlvbi0zMDAnXG4gICAgICAgICAgICAgIGVudGVyRnJvbT0nb3BhY2l0eS0wIHRyYW5zbGF0ZS15LTQgc206dHJhbnNsYXRlLXktMCBzbTpzY2FsZS05NSdcbiAgICAgICAgICAgICAgZW50ZXJUbz0nb3BhY2l0eS0xMDAgdHJhbnNsYXRlLXktMCBzbTpzY2FsZS0xMDAnXG4gICAgICAgICAgICAgIGxlYXZlPSdlYXNlLWluIGR1cmF0aW9uLTIwMCdcbiAgICAgICAgICAgICAgbGVhdmVGcm9tPSdvcGFjaXR5LTEwMCB0cmFuc2xhdGUteS0wIHNtOnNjYWxlLTEwMCdcbiAgICAgICAgICAgICAgbGVhdmVUbz0nb3BhY2l0eS0wIHRyYW5zbGF0ZS15LTQgc206dHJhbnNsYXRlLXktMCBzbTpzY2FsZS05NSc+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbmxpbmUtYmxvY2sgcHgtNCBwdC01IHBiLTQgb3ZlcmZsb3ctaGlkZGVuIHRleHQtbGVmdCBhbGlnbi1ib3R0b20gdHJhbnNpdGlvbi1hbGwgdHJhbnNmb3JtIGJnLXdoaXRlIHJvdW5kZWQtbGcgc2hhZG93LXhsIHNtOm15LTggc206YWxpZ24tbWlkZGxlIHNtOm1heC13LXNtIHNtOnctZnVsbCBzbTpwLTYnPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdy0xMiBoLTEyIG14LWF1dG8gYmctZ3JlZW4tMTAwIHJvdW5kZWQtZnVsbCc+XG4gICAgICAgICAgICAgICAgICAgIDxDaGVja0ljb25cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3ctNiBoLTYgdGV4dC1ncmVlbi02MDAnXG4gICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49J3RydWUnXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtdC0zIHRleHQtY2VudGVyIHNtOm10LTUnPlxuICAgICAgICAgICAgICAgICAgICA8RGlhbG9nLlRpdGxlXG4gICAgICAgICAgICAgICAgICAgICAgYXM9J2gzJ1xuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndGV4dC1sZyBmb250LW1lZGl1bSBsZWFkaW5nLTYgdGV4dC1ncmF5LTkwMCc+XG4gICAgICAgICAgICAgICAgICAgICAgUGF5bWVudCBzdWNjZXNzZnVsXG4gICAgICAgICAgICAgICAgICAgIDwvRGlhbG9nLlRpdGxlPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXQtMic+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LXNtIHRleHQtZ3JheS01MDAnPlxuICAgICAgICAgICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC5cbiAgICAgICAgICAgICAgICAgICAgICAgIENvbnNlcXVhdHVyIGFtZXQgbGFib3JlLlxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXQtNSBzbTptdC02Jz5cbiAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgdHlwZT0nYnV0dG9uJ1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2lubGluZS1mbGV4IGp1c3RpZnktY2VudGVyIHctZnVsbCBweC00IHB5LTIgdGV4dC1iYXNlIGZvbnQtbWVkaXVtIHRleHQtd2hpdGUgYmctaW5kaWdvLTYwMCBib3JkZXIgYm9yZGVyLXRyYW5zcGFyZW50IHJvdW5kZWQtbWQgc2hhZG93LXNtIHByaW50OmJnLXJlZC01MDAgaG92ZXI6YmctaW5kaWdvLTcwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctb2Zmc2V0LTIgZm9jdXM6cmluZy1pbmRpZ28tNTAwIHNtOnRleHQtc20nXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBzZXRPcGVuKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgIEdvIGJhY2sgdG8gZGFzaGJvYXJkXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9UcmFuc2l0aW9uLkNoaWxkPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0RpYWxvZz5cbiAgICAgIDwvVHJhbnNpdGlvbi5Sb290PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==