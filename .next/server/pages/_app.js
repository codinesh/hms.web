(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../globals.css */ "./globals.css");
/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/Layout */ "./src/components/Layout.tsx");
/* harmony import */ var _src_store_GlobalStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/store/GlobalStore */ "./src/store/GlobalStore.tsx");

var _jsxFileName = "C:\\Users\\Administrator\\Documents\\code\\hms.web\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_store_GlobalStore__WEBPACK_IMPORTED_MODULE_4__.GlobalStateProvider, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Layout__WEBPACK_IMPORTED_MODULE_3__.default, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./src/components/Layout.tsx":
/*!***********************************!*\
  !*** ./src/components/Layout.tsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @headlessui/react */ "@headlessui/react");
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/@heroicons/react/outline/esm/index.js");
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/@heroicons/react/solid/esm/index.js");
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Sidebar */ "./src/components/Sidebar.tsx");
/* harmony import */ var _helpers_csshelpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/csshelpers */ "./src/helpers/csshelpers.ts");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../data */ "./src/data.ts");
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Page */ "./src/components/Page.tsx");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_9__);


var _jsxFileName = "C:\\Users\\Administrator\\Documents\\code\\hms.web\\src\\components\\Layout.tsx";










const Layout = props => {
  const {
    0: sidebarOpen,
    1: setSidebarOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "flex h-screen overflow-hidden bg-gray-100",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Sidebar__WEBPACK_IMPORTED_MODULE_5__.default, {
      setSidebarOpen: setSidebarOpen,
      sidebarOpen: sidebarOpen
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex flex-col flex-1 overflow-hidden",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "print:hidden relative z-10 flex flex-shrink-0 h-16 bg-white shadow",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: "px-4 text-gray-500 border-r border-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden",
          onClick: () => setSidebarOpen(true),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "sr-only",
            children: "Open sidebar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__.MenuAlt2Icon, {
            className: "w-6 h-6",
            "aria-hidden": "true"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
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
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
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
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 33,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                  id: "search_field",
                  className: "block w-full h-full py-2 pl-8 pr-3 text-gray-900 placeholder-gray-500 border-transparent focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm",
                  placeholder: "Search",
                  type: "search",
                  name: "search"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 36,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 32,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
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
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__.BellIcon, {
                className: "w-6 h-6",
                "aria-hidden": "true"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 49,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Menu, {
              as: "div",
              className: "relative ml-3",
              children: ({
                open
              }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
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
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                      className: "w-8 h-8 rounded-full",
                      src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                      alt: ""
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 59,
                      columnNumber: 25
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 57,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 56,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition, {
                  show: open,
                  as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                  enter: "transition ease-out duration-100",
                  enterFrom: "transform opacity-0 scale-95",
                  enterTo: "transform opacity-100 scale-100",
                  leave: "transition ease-in duration-75",
                  leaveFrom: "transform opacity-100 scale-100",
                  leaveTo: "transform opacity-0 scale-95",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Items, {
                    static: true,
                    className: "absolute right-0 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",
                    children: _data__WEBPACK_IMPORTED_MODULE_7__.data.userNavigation.map(item => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {
                      children: ({
                        active
                      }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                        href: item.path,
                        className: (0,_helpers_csshelpers__WEBPACK_IMPORTED_MODULE_6__.classNames)(active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700"),
                        children: item.name
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 81,
                        columnNumber: 31
                      }, undefined)
                    }, item.name, false, {
                      fileName: _jsxFileName,
                      lineNumber: 79,
                      columnNumber: 27
                    }, undefined))
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 75,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 66,
                  columnNumber: 21
                }, undefined)]
              }, void 0, true)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "hidden print:flex w-full flex-col px-4 py-4",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("header", {
          className: " print:flex items-center",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_9___default()), {
            className: "fixed left-0 ",
            width: 140,
            height: 140,
            src: "/logo.png",
            alt: "logo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "mx-auto",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
              className: "text-3xl font-medium",
              children: "Pragathi Hospital"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "text-sm",
              children: "Tirupati, addressline1"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "text-sm",
              children: "Tirupati, addressline2"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "mt-6",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "text-md",
                children: "GSTIN: 123456789"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 116,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "text-md",
                children: "CIN No: 789456123145679846312132"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 117,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
              className: "text-3xl font-medium mt-4",
              children: "Tax Invoice"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 121,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
          className: "mt-6 flex flex-col",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "flex border-t-2 justify-between border-b-2 py-2 border-black",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "text-md font-bold",
                children: "Invoice Number: "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 127,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: "OPH12353249"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 128,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 126,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "text-md font-bold",
                children: "Invoice Date: "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 131,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: "2021-01-17 16:54"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 132,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 130,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "text-md font-bold",
                children: "Patient Id: "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 135,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: "Random Id"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 136,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 134,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "flex ",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "flex py-4 justify-center  flex-col border-b-2 border-r-2 border-black pb-4",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "font-bold",
                children: "Sold to: "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 141,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: "Name & Address: Name of Patient "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 142,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: "Contact Number: 123456789"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 143,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: "State Name & Code: AndhraPradesh & 123 "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 144,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: "GST Number: "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 145,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: "PAN: "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 146,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: "Aadhaar :"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 147,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 140,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "flex-grow border-b-2 border-black "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 149,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
        className: "relative flex-1 overflow-y-auto focus:outline-none",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "py-6",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Page__WEBPACK_IMPORTED_MODULE_8__.default, {
            children: props.children
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 156,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./src/components/Page.tsx":
/*!*********************************!*\
  !*** ./src/components/Page.tsx ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Administrator\\Documents\\code\\hms.web\\src\\components\\Page.tsx";


const Page = props => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "print:hidden px-4 mx-auto max-w-7xl sm:px-6 md:px-8",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        className: "text-2xl font-semibold text-gray-900",
        children: "Dashboard"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "px-4 mx-auto max-w-7xl sm:px-6 md:px-8",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "py-4",
        children: props.children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ "./src/components/SideBarItem.tsx":
/*!****************************************!*\
  !*** ./src/components/SideBarItem.tsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @headlessui/react */ "@headlessui/react");
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var _helpers_csshelpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/csshelpers */ "./src/helpers/csshelpers.ts");


var _jsxFileName = "C:\\Users\\Administrator\\Documents\\code\\hms.web\\src\\components\\SideBarItem.tsx";






const SidebarItem = props => {
  var _ref, _props$item$children$, _props$item$children, _props$item$path;

  const {
    asPath
  } = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
  const current = (_ref = asPath == props.item.path) !== null && _ref !== void 0 ? _ref : "";
  let isLink = ((_props$item$children$ = (_props$item$children = props.item.children) === null || _props$item$children === void 0 ? void 0 : _props$item$children.length) !== null && _props$item$children$ !== void 0 ? _props$item$children$ : 0) == 0;
  return isLink ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
    href: (_props$item$path = props.item.path) !== null && _props$item$path !== void 0 ? _props$item$path : "",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      className: (0,_helpers_csshelpers__WEBPACK_IMPORTED_MODULE_5__.classNames)(current ? "bg-gray-700 bg-opacity-50 text-gray-200" : " text-gray-400 hover:bg-gray-700 hover:bg-opacity-30 hover:text-gray-300", " group w-full flex items-center pl-2 pr-1 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"),
      children: [props.item.icon && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(props.item.icon, {
        className: "flex-shrink-0 w-6 h-6 mr-3 text-gray-400 transition duration-200 transform group-hover:-translate-x-1 group-hover:scale-110 group-hover:text-gray-300",
        "aria-hidden": "true"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "flex-1 text-lg",
        children: props.item.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Disclosure, {
    as: "div",
    className: "space-y-1",
    children: ({
      open
    }) => {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Disclosure.Button, {
          onClick: () => {},
          className: (0,_helpers_csshelpers__WEBPACK_IMPORTED_MODULE_5__.classNames)(current ? "bg-gray-700 bg-opacity-50 text-gray-200" : " text-gray-400 hover:bg-gray-700 hover:bg-opacity-30 hover:text-gray-300", "group w-full flex items-center pl-2 pr-1 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [props.item.icon && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(props.item.icon, {
              className: "flex-shrink-0 w-6 h-6 mr-3 text-gray-400 transition duration-200 transform group-hover:scale-110 group-hover:-translate-x-1 group-hover:text-gray-300",
              "aria-hidden": "true"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 19
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "flex-1 text-lg",
              children: props.item.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 17
            }, undefined), props.item.children && props.item.children.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
              className: (0,_helpers_csshelpers__WEBPACK_IMPORTED_MODULE_5__.classNames)(open ? "text-gray-400 rotate-90" : "text-gray-300", "ml-3 flex-shrink-0 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150"),
              viewBox: "0 0 20 20",
              "aria-hidden": "true",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                d: "M6 6L14 10L6 14V6Z",
                fill: "currentColor"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 69,
                columnNumber: 21
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 19
            }, undefined)]
          }, void 0, true)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Disclosure.Panel, {
          className: "space-y-1",
          children: props.item.children && props.item.children.map(subItem => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "ml-4 border-red-600",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SidebarItem, {
              item: subItem
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 21
            }, undefined)
          }, subItem.name, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 19
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 13
        }, undefined)]
      }, void 0, true);
    }
  }, `props.item.name${Math.random()}`, false, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (SidebarItem);

/***/ }),

/***/ "./src/components/Sidebar.tsx":
/*!************************************!*\
  !*** ./src/components/Sidebar.tsx ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @headlessui/react */ "@headlessui/react");
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/@heroicons/react/outline/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data */ "./src/data.ts");
/* harmony import */ var _SideBarItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SideBarItem */ "./src/components/SideBarItem.tsx");


var _jsxFileName = "C:\\Users\\Administrator\\Documents\\code\\hms.web\\src\\components\\Sidebar.tsx";






const Sidebar = props => {
  const {
    sidebarOpen,
    setSidebarOpen
  } = props;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Transition.Root, {
      show: sidebarOpen,
      as: react__WEBPACK_IMPORTED_MODULE_3__.Fragment,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Dialog, {
        as: "div",
        static: true,
        className: "print:hidden fixed inset-0 z-40 flex md:hidden",
        open: sidebarOpen,
        onClose: setSidebarOpen,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Transition.Child, {
          as: react__WEBPACK_IMPORTED_MODULE_3__.Fragment,
          enter: "transition-opacity ease-linear duration-300",
          enterFrom: "opacity-0",
          enterTo: "opacity-100",
          leave: "transition-opacity ease-linear duration-300",
          leaveFrom: "opacity-100",
          leaveTo: "opacity-0",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Dialog.Overlay, {
            className: "fixed inset-0 bg-gray-600 bg-opacity-75"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Transition.Child, {
          as: react__WEBPACK_IMPORTED_MODULE_3__.Fragment,
          enter: "transition ease-in-out duration-300 transform",
          enterFrom: "-translate-x-full",
          enterTo: "translate-x-0",
          leave: "transition ease-in-out duration-300 transform",
          leaveFrom: "translate-x-0",
          leaveTo: "-translate-x-full",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "relative flex flex-col flex-1 w-full max-w-xs pt-5 pb-4 bg-gray-800",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Transition.Child, {
              as: react__WEBPACK_IMPORTED_MODULE_3__.Fragment,
              enter: "ease-in-out duration-300",
              enterFrom: "opacity-0",
              enterTo: "opacity-100",
              leave: "ease-in-out duration-300",
              leaveFrom: "opacity-100",
              leaveTo: "opacity-0",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "absolute top-0 right-0 pt-2 -mr-12",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                  className: "flex items-center justify-center w-10 h-10 ml-1 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",
                  onClick: () => setSidebarOpen(false),
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                    className: "sr-only",
                    children: "Close sidebar"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 52,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__.XIcon, {
                    className: "w-6 h-6 text-white",
                    "aria-hidden": "true"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 53,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 49,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 48,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "flex items-center flex-shrink-0 px-4",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                className: "w-auto h-8",
                src: "https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg",
                alt: "Workflow"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 58,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "flex-1 h-0 mt-5 overflow-y-auto",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
                className: "px-2 space-y-1",
                children: _data__WEBPACK_IMPORTED_MODULE_4__.data.navigation.map(item => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Transition.Child, {
                  enter: "ease-in transition transition duration-600",
                  enterFrom: "",
                  enterTo: "opacity-100",
                  leave: "ease-in-out duration-300",
                  leaveFrom: "opacity-100",
                  leaveTo: "opacity-0",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SideBarItem__WEBPACK_IMPORTED_MODULE_5__.default, {
                    item: item
                  }, item.name, false, {
                    fileName: _jsxFileName,
                    lineNumber: 75,
                    columnNumber: 23
                  }, undefined)
                }, item.name, false, {
                  fileName: _jsxFileName,
                  lineNumber: 67,
                  columnNumber: 21
                }, undefined))
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 65,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "flex-shrink-0 w-14",
          "aria-hidden": "true"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "print:hidden  hidden h-full md:flex md:flex-shrink-0",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex flex-col w-64",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "flex flex-col flex-1 h-0",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "flex items-center flex-shrink-0 h-16 px-4 bg-gray-900",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "text-2xl text-gray-300",
              children: "Pragathi Hospital"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "flex flex-col flex-1 overflow-y-auto",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
              className: "flex-1 px-2 py-4 space-y-1 bg-gray-800",
              children: _data__WEBPACK_IMPORTED_MODULE_4__.data.navigation.map(item => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SideBarItem__WEBPACK_IMPORTED_MODULE_5__.default, {
                item: item
              }, item.name, false, {
                fileName: _jsxFileName,
                lineNumber: 99,
                columnNumber: 19
              }, undefined))
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ }),

/***/ "./src/data.ts":
/*!*********************!*\
  !*** ./src/data.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": function() { return /* binding */ data; }
/* harmony export */ });
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/@heroicons/react/outline/esm/index.js");

const navigation = [{
  name: "Dashboard",
  icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_0__.HomeIcon,
  path: "/dashboard"
}, {
  name: "Team",
  icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_0__.UsersIcon,
  path: "/team",
  children: [{
    name: "SubTeam",
    icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_0__.UsersIcon,
    path: "/subteam"
  }]
}, {
  name: "Projects",
  icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_0__.FolderIcon,
  path: "/projects"
}];
const userNavigation = [{
  name: "Your Profile",
  href: "#"
}, {
  name: "Settings",
  href: "#"
}, {
  name: "Sign out",
  href: "#"
}];
const projects = [{
  id: 1,
  title: "GraphQL API",
  initials: "GA",
  team: "Engineering",
  members: [{
    name: "Dries Vincent",
    handle: "driesvincent",
    imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }, {
    name: "Lindsay Walton",
    handle: "lindsaywalton",
    imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }, {
    name: "Courtney Henry",
    handle: "courtneyhenry",
    imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }, {
    name: "Tom Cook",
    handle: "tomcook",
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }],
  totalMembers: 12,
  lastUpdated: "March 17, 2020",
  pinned: true,
  bgColorClass: "bg-blue-600"
}, {
  id: 2,
  title: "GraphQL API",
  initials: "GA",
  team: "Engineering",
  members: [{
    name: "Dries Vincent",
    handle: "driesvincent",
    imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }, {
    name: "Lindsay Walton",
    handle: "lindsaywalton",
    imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }, {
    name: "Courtney Henry",
    handle: "courtneyhenry",
    imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }, {
    name: "Tom Cook",
    handle: "tomcook",
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }],
  totalMembers: 12,
  lastUpdated: "March 17, 2020",
  pinned: true,
  bgColorClass: "bg-yellow-600"
}, {
  id: 3,
  title: "GraphQL API",
  initials: "GA",
  team: "Engineering",
  members: [{
    name: "Dries Vincent",
    handle: "driesvincent",
    imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }, {
    name: "Lindsay Walton",
    handle: "lindsaywalton",
    imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }, {
    name: "Courtney Henry",
    handle: "courtneyhenry",
    imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }, {
    name: "Tom Cook",
    handle: "tomcook",
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }],
  totalMembers: 12,
  lastUpdated: "March 17, 2020",
  pinned: true,
  bgColorClass: "bg-indigo-600"
}, {
  id: 4,
  title: "GraphQL API",
  initials: "GA",
  team: "Engineering",
  members: [{
    name: "Dries Vincent",
    handle: "driesvincent",
    imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }, {
    name: "Lindsay Walton",
    handle: "lindsaywalton",
    imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }, {
    name: "Courtney Henry",
    handle: "courtneyhenry",
    imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }, {
    name: "Tom Cook",
    handle: "tomcook",
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }],
  totalMembers: 12,
  lastUpdated: "March 17, 2020",
  pinned: true,
  bgColorClass: "bg-pink-600"
}, {
  id: 5,
  title: "GraphQL API",
  initials: "GA",
  team: "Engineering",
  members: [{
    name: "Dries Vincent",
    handle: "driesvincent",
    imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }, {
    name: "Lindsay Walton",
    handle: "lindsaywalton",
    imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }, {
    name: "Courtney Henry",
    handle: "courtneyhenry",
    imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }, {
    name: "Tom Cook",
    handle: "tomcook",
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }],
  totalMembers: 12,
  lastUpdated: "March 17, 2020",
  pinned: true,
  bgColorClass: "bg-gray-600"
}];
const cards = [{
  name: "Account balance",
  href: "#",
  icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_0__.ScaleIcon,
  amount: "$30,659.45"
}, {
  name: "Account balance1",
  href: "#",
  icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_0__.ScaleIcon,
  amount: "$30,659.45"
}, {
  name: "Account balance2",
  href: "#",
  icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_0__.ScaleIcon,
  amount: "$30,659.45"
}, {
  name: "Account balance3",
  href: "#",
  icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_0__.ScaleIcon,
  amount: "$30,659.45"
}, {
  name: "Account balance4",
  href: "#",
  icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_0__.ScaleIcon,
  amount: "$30,659.45"
} // More items...
];
const transactions = [{
  id: 1,
  name: "Payment to Molly Sanders",
  href: "#",
  amount: "$20,000",
  currency: "USD",
  status: "success",
  date: "July 11, 2020",
  datetime: "2020-07-11"
}, {
  id: 2,
  name: "Payment to Molly Sanders",
  href: "#",
  amount: "$20,000",
  currency: "USD",
  status: "processing",
  date: "July 11, 2020",
  datetime: "2020-07-11"
}, {
  id: 3,
  name: "Payment to Molly Sanders",
  href: "#",
  amount: "$20,000",
  currency: "USD",
  status: "processing",
  date: "July 11, 2020",
  datetime: "2020-07-11"
}, {
  id: 4,
  name: "Payment to Molly Sanders",
  href: "#",
  amount: "$20,000",
  currency: "USD",
  status: "failed",
  date: "July 11, 2020",
  datetime: "2020-07-11"
}, {
  id: 5,
  name: "Payment to Molly Sanders",
  href: "#",
  amount: "$20,000",
  currency: "USD",
  status: "success",
  date: "July 11, 2020",
  datetime: "2020-07-11"
}, {
  id: 6,
  name: "Payment to Molly Sanders",
  href: "#",
  amount: "$20,000",
  currency: "USD",
  status: "failed",
  date: "July 11, 2020",
  datetime: "2020-07-11"
}];
const statusStyles = {
  success: "bg-green-100 text-green-800",
  processing: "bg-yellow-100 text-yellow-800",
  failed: "bg-red-300 text-gray-800"
};
const pinnedProjects = projects.filter(project => project.pinned);
const data = {
  navigation,
  userNavigation,
  projects,
  pinnedProjects,
  transactions,
  cards,
  statusStyles
};

/***/ }),

/***/ "./src/helpers/csshelpers.ts":
/*!***********************************!*\
  !*** ./src/helpers/csshelpers.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "classNames": function() { return /* binding */ classNames; }
/* harmony export */ });
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

/***/ }),

/***/ "./src/store/GlobalStore.tsx":
/*!***********************************!*\
  !*** ./src/store/GlobalStore.tsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalStateAction": function() { return /* binding */ GlobalStateAction; },
/* harmony export */   "GlobalStateProvider": function() { return /* binding */ GlobalStateProvider; },
/* harmony export */   "useGlobalState": function() { return /* binding */ useGlobalState; },
/* harmony export */   "useGlobalDispatch": function() { return /* binding */ useGlobalDispatch; },
/* harmony export */   "setTitle": function() { return /* binding */ setTitle; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Administrator\\Documents\\code\\hms.web\\src\\store\\GlobalStore.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


let GlobalStateAction;

(function (GlobalStateAction) {
  GlobalStateAction[GlobalStateAction["Busy"] = 0] = "Busy";
  GlobalStateAction[GlobalStateAction["Idle"] = 1] = "Idle";
  GlobalStateAction[GlobalStateAction["Error"] = 2] = "Error";
  GlobalStateAction[GlobalStateAction["LogIn"] = 3] = "LogIn";
  GlobalStateAction[GlobalStateAction["LogOut"] = 4] = "LogOut";
  GlobalStateAction[GlobalStateAction["SetPageTitle"] = 5] = "SetPageTitle";
})(GlobalStateAction || (GlobalStateAction = {}));

const initialState = {
  busy: false,
  error: false,
  pageTitle: "Home"
};
const globalStateContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(initialState);
const globalDispatchContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(() => {});

const reducer = (state, action) => {
  switch (action.type) {
    case GlobalStateAction.Busy:
      return _objectSpread(_objectSpread({}, state), {}, {
        busy: true
      });

    case GlobalStateAction.Idle:
      return _objectSpread(_objectSpread({}, state), {}, {
        busy: false
      });

    case GlobalStateAction.Error:
      return _objectSpread(_objectSpread({}, state), {}, {
        error: true,
        errorMessage: action.error
      });

    case GlobalStateAction.LogIn:
      return _objectSpread(_objectSpread({}, state), {}, {
        user: action.user
      });

    case GlobalStateAction.LogOut:
      return _objectSpread(_objectSpread({}, state), {}, {
        user: undefined
      });

    case GlobalStateAction.SetPageTitle:
      return _objectSpread(_objectSpread({}, state), {}, {
        pageTitle: action.title
      });

    default:
      return state;
  }
};

const GlobalStateProvider = ({
  children
}) => {
  const {
    0: state,
    1: dispatch
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(reducer, initialState);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {}, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(globalStateContext.Provider, {
    value: state,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(globalDispatchContext.Provider, {
      value: dispatch,
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 60,
    columnNumber: 5
  }, undefined);
};

const useGlobalState = () => (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(globalStateContext);

const useGlobalDispatch = () => (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(globalDispatchContext);

const setTitle = title => useGlobalDispatch()({
  type: GlobalStateAction.SetPageTitle,
  title
});



/***/ }),

/***/ "./globals.css":
/*!*********************!*\
  !*** ./globals.css ***!
  \*********************/
/***/ (function() {



/***/ }),

/***/ "@headlessui/react":
/*!************************************!*\
  !*** external "@headlessui/react" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@headlessui/react");;

/***/ }),

/***/ "../next-server/lib/head":
/*!****************************************************!*\
  !*** external "next/dist/next-server/lib/head.js" ***!
  \****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "../next-server/lib/to-base-64":
/*!**********************************************************!*\
  !*** external "next/dist/next-server/lib/to-base-64.js" ***!
  \**********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ "../next-server/server/image-config":
/*!***************************************************************!*\
  !*** external "next/dist/next-server/server/image-config.js" ***!
  \***************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_heroicons_react_outline_esm_index_js","vendors-node_modules_babel_runtime_helpers_extends_js-node_modules_babel_runtime_helpers_inte-f89ba9","vendors-node_modules_heroicons_react_solid_esm_index_js-node_modules_next_image_js-node_modul-18b4dd"], function() { return __webpack_exec__("./pages/_app.tsx"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9obXMud2ViLy4vcGFnZXMvX2FwcC50c3giLCJ3ZWJwYWNrOi8vaG1zLndlYi8uL3NyYy9jb21wb25lbnRzL0xheW91dC50c3giLCJ3ZWJwYWNrOi8vaG1zLndlYi8uL3NyYy9jb21wb25lbnRzL1BhZ2UudHN4Iiwid2VicGFjazovL2htcy53ZWIvLi9zcmMvY29tcG9uZW50cy9TaWRlQmFySXRlbS50c3giLCJ3ZWJwYWNrOi8vaG1zLndlYi8uL3NyYy9jb21wb25lbnRzL1NpZGViYXIudHN4Iiwid2VicGFjazovL2htcy53ZWIvLi9zcmMvZGF0YS50cyIsIndlYnBhY2s6Ly9obXMud2ViLy4vc3JjL2hlbHBlcnMvY3NzaGVscGVycy50cyIsIndlYnBhY2s6Ly9obXMud2ViLy4vc3JjL3N0b3JlL0dsb2JhbFN0b3JlLnRzeCIsIndlYnBhY2s6Ly9obXMud2ViL2V4dGVybmFsIFwiQGhlYWRsZXNzdWkvcmVhY3RcIiIsIndlYnBhY2s6Ly9obXMud2ViL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLmpzXCIiLCJ3ZWJwYWNrOi8vaG1zLndlYi9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9obXMud2ViL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL2htcy53ZWIvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjQuanNcIiIsIndlYnBhY2s6Ly9obXMud2ViL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcuanNcIiIsIndlYnBhY2s6Ly9obXMud2ViL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9obXMud2ViL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly9obXMud2ViL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vaG1zLndlYi9pZ25vcmVkfEM6XFxVc2Vyc1xcQWRtaW5pc3RyYXRvclxcRG9jdW1lbnRzXFxjb2RlXFxobXMud2ViXFxub2RlX21vZHVsZXNcXG5leHRcXGRpc3RcXG5leHQtc2VydmVyXFxsaWJcXHJvdXRlcnwuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMiXSwibmFtZXMiOlsiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJMYXlvdXQiLCJwcm9wcyIsInNpZGViYXJPcGVuIiwic2V0U2lkZWJhck9wZW4iLCJ1c2VTdGF0ZSIsIm9wZW4iLCJGcmFnbWVudCIsImRhdGEiLCJpdGVtIiwiYWN0aXZlIiwicGF0aCIsImNsYXNzTmFtZXMiLCJuYW1lIiwiY2hpbGRyZW4iLCJQYWdlIiwiU2lkZWJhckl0ZW0iLCJhc1BhdGgiLCJ1c2VSb3V0ZXIiLCJjdXJyZW50IiwiaXNMaW5rIiwibGVuZ3RoIiwiaWNvbiIsIm1hcCIsInN1Ykl0ZW0iLCJNYXRoIiwicmFuZG9tIiwiU2lkZWJhciIsIm5hdmlnYXRpb24iLCJIb21lSWNvbiIsIlVzZXJzSWNvbiIsIkZvbGRlckljb24iLCJ1c2VyTmF2aWdhdGlvbiIsImhyZWYiLCJwcm9qZWN0cyIsImlkIiwidGl0bGUiLCJpbml0aWFscyIsInRlYW0iLCJtZW1iZXJzIiwiaGFuZGxlIiwiaW1hZ2VVcmwiLCJ0b3RhbE1lbWJlcnMiLCJsYXN0VXBkYXRlZCIsInBpbm5lZCIsImJnQ29sb3JDbGFzcyIsImNhcmRzIiwiU2NhbGVJY29uIiwiYW1vdW50IiwidHJhbnNhY3Rpb25zIiwiY3VycmVuY3kiLCJzdGF0dXMiLCJkYXRlIiwiZGF0ZXRpbWUiLCJzdGF0dXNTdHlsZXMiLCJzdWNjZXNzIiwicHJvY2Vzc2luZyIsImZhaWxlZCIsInBpbm5lZFByb2plY3RzIiwiZmlsdGVyIiwicHJvamVjdCIsImNsYXNzZXMiLCJCb29sZWFuIiwiam9pbiIsIkdsb2JhbFN0YXRlQWN0aW9uIiwiaW5pdGlhbFN0YXRlIiwiYnVzeSIsImVycm9yIiwicGFnZVRpdGxlIiwiZ2xvYmFsU3RhdGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsImdsb2JhbERpc3BhdGNoQ29udGV4dCIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJCdXN5IiwiSWRsZSIsIkVycm9yIiwiZXJyb3JNZXNzYWdlIiwiTG9nSW4iLCJ1c2VyIiwiTG9nT3V0IiwidW5kZWZpbmVkIiwiU2V0UGFnZVRpdGxlIiwiR2xvYmFsU3RhdGVQcm92aWRlciIsImRpc3BhdGNoIiwidXNlUmVkdWNlciIsInVzZUVmZmVjdCIsInVzZUdsb2JhbFN0YXRlIiwidXNlQ29udGV4dCIsInVzZUdsb2JhbERpc3BhdGNoIiwic2V0VGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxLQUFULENBQWU7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQWYsRUFBbUQ7QUFDakQsc0JBQ0UsOERBQUMsdUVBQUQ7QUFBQSwyQkFDRSw4REFBQywyREFBRDtBQUFBLDZCQUNFLDhEQUFDLFNBQUQsb0JBQWVBLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFPRDs7QUFDRCwrREFBZUYsS0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNRyxNQUFnQixHQUFJQyxLQUFELElBQVc7QUFDbEMsUUFBTTtBQUFBLE9BQUNDLFdBQUQ7QUFBQSxPQUFjQztBQUFkLE1BQWdDQywrQ0FBUSxDQUFDLEtBQUQsQ0FBOUM7QUFFQSxzQkFDRTtBQUFLLGFBQVMsRUFBQywyQ0FBZjtBQUFBLDRCQUNF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QUE2QixTQUFLLEVBQUVmLEtBQXBDO0FBQUEsMkJBQ0UsOERBQUMscUJBQUQsQ0FBdUIsUUFBdkI7QUFBZ0MsV0FBSyxFQUFFYSxRQUF2QztBQUFBLGdCQUNHeEU7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBT0QsQ0FkRDs7QUFnQkEsTUFBTTJFLGNBQWMsR0FBRyxNQUFNQyxpREFBVSxDQUFDckIsa0JBQUQsQ0FBdkM7O0FBQ0EsTUFBTXNCLGlCQUFpQixHQUFHLE1BQU1ELGlEQUFVLENBQUNuQixxQkFBRCxDQUExQzs7QUFDQSxNQUFNcUIsUUFBUSxHQUFJeEQsS0FBRCxJQUNmdUQsaUJBQWlCLEdBQUc7QUFBRWhCLE1BQUksRUFBRVgsaUJBQWlCLENBQUNvQixZQUExQjtBQUF3Q2hEO0FBQXhDLENBQUgsQ0FEbkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckVBLCtDOzs7Ozs7Ozs7OztBQ0FBLCtEOzs7Ozs7Ozs7OztBQ0FBLHlFOzs7Ozs7Ozs7OztBQ0FBLGlHOzs7Ozs7Ozs7OztBQ0FBLHFFOzs7Ozs7Ozs7OztBQ0FBLDBFOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7O0FDQUEsZSIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vZ2xvYmFscy5jc3NcIlxuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gXCJuZXh0L2FwcFwiXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL0xheW91dFwiXG5pbXBvcnQgeyBHbG9iYWxTdGF0ZVByb3ZpZGVyIH0gZnJvbSBcIi4uL3NyYy9zdG9yZS9HbG9iYWxTdG9yZVwiXG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8R2xvYmFsU3RhdGVQcm92aWRlcj5cbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvTGF5b3V0PlxuICAgIDwvR2xvYmFsU3RhdGVQcm92aWRlcj5cbiAgKVxufVxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcbiIsImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTWVudSwgVHJhbnNpdGlvbiB9IGZyb20gXCJAaGVhZGxlc3N1aS9yZWFjdFwiO1xyXG5pbXBvcnQgeyBCZWxsSWNvbiwgTWVudUFsdDJJY29uIH0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3Qvb3V0bGluZVwiO1xyXG5pbXBvcnQgeyBTZWFyY2hJY29uIH0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3Qvc29saWRcIjtcclxuaW1wb3J0IFNpZGViYXIgZnJvbSBcIi4vU2lkZWJhclwiO1xyXG5pbXBvcnQgeyBjbGFzc05hbWVzIH0gZnJvbSBcIi4uL2hlbHBlcnMvY3NzaGVscGVyc1wiO1xyXG5pbXBvcnQgeyBJTmF2aWdhdGlvbkl0ZW0gfSBmcm9tIFwiLi4vdHlwZXMvSU5hdmlnYXRpb25JdGVtXCI7XHJcbmltcG9ydCB7IGRhdGEgfSBmcm9tIFwiLi4vZGF0YVwiO1xyXG5pbXBvcnQgUGFnZSBmcm9tIFwiLi9QYWdlXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5cclxuY29uc3QgTGF5b3V0OiBSZWFjdC5GQyA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtzaWRlYmFyT3Blbiwgc2V0U2lkZWJhck9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggaC1zY3JlZW4gb3ZlcmZsb3ctaGlkZGVuIGJnLWdyYXktMTAwJz5cclxuICAgICAgPFNpZGViYXIgc2V0U2lkZWJhck9wZW49e3NldFNpZGViYXJPcGVufSBzaWRlYmFyT3Blbj17c2lkZWJhck9wZW59IC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGZsZXgtMSBvdmVyZmxvdy1oaWRkZW4nPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcmludDpoaWRkZW4gcmVsYXRpdmUgei0xMCBmbGV4IGZsZXgtc2hyaW5rLTAgaC0xNiBiZy13aGl0ZSBzaGFkb3cnPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9J3B4LTQgdGV4dC1ncmF5LTUwMCBib3JkZXItciBib3JkZXItZ3JheS0yMDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWluc2V0IGZvY3VzOnJpbmctaW5kaWdvLTUwMCBtZDpoaWRkZW4nXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNpZGViYXJPcGVuKHRydWUpfT5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdzci1vbmx5Jz5PcGVuIHNpZGViYXI8L3NwYW4+XHJcbiAgICAgICAgICAgIDxNZW51QWx0Mkljb24gY2xhc3NOYW1lPSd3LTYgaC02JyBhcmlhLWhpZGRlbj0ndHJ1ZScgLz5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1iZXR3ZWVuIGZsZXgtMSBweC00Jz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC0xJz5cclxuICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9J2ZsZXggdy1mdWxsIG1kOm1sLTAnIGFjdGlvbj0nIycgbWV0aG9kPSdHRVQnPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J3NlYXJjaF9maWVsZCcgY2xhc3NOYW1lPSdzci1vbmx5Jz5cclxuICAgICAgICAgICAgICAgICAgU2VhcmNoXHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JlbGF0aXZlIHctZnVsbCB0ZXh0LWdyYXktNDAwIGZvY3VzLXdpdGhpbjp0ZXh0LWdyYXktNjAwJz5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Fic29sdXRlIGluc2V0LXktMCBsZWZ0LTAgZmxleCBpdGVtcy1jZW50ZXIgcG9pbnRlci1ldmVudHMtbm9uZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlYXJjaEljb24gY2xhc3NOYW1lPSd3LTUgaC01JyBhcmlhLWhpZGRlbj0ndHJ1ZScgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIGlkPSdzZWFyY2hfZmllbGQnXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdibG9jayB3LWZ1bGwgaC1mdWxsIHB5LTIgcGwtOCBwci0zIHRleHQtZ3JheS05MDAgcGxhY2Vob2xkZXItZ3JheS01MDAgYm9yZGVyLXRyYW5zcGFyZW50IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpwbGFjZWhvbGRlci1ncmF5LTQwMCBmb2N1czpyaW5nLTAgZm9jdXM6Ym9yZGVyLXRyYW5zcGFyZW50IHNtOnRleHQtc20nXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1NlYXJjaCdcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPSdzZWFyY2gnXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT0nc2VhcmNoJ1xyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIG1sLTQgbWQ6bWwtNic+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J3AtMSB0ZXh0LWdyYXktNDAwIGJnLXdoaXRlIHJvdW5kZWQtZnVsbCBob3Zlcjp0ZXh0LWdyYXktNTAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1vZmZzZXQtMiBmb2N1czpyaW5nLWluZGlnby01MDAnPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdzci1vbmx5Jz5WaWV3IG5vdGlmaWNhdGlvbnM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8QmVsbEljb24gY2xhc3NOYW1lPSd3LTYgaC02JyBhcmlhLWhpZGRlbj0ndHJ1ZScgLz5cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgey8qIFByb2ZpbGUgZHJvcGRvd24gKi99XHJcbiAgICAgICAgICAgICAgPE1lbnUgYXM9J2RpdicgY2xhc3NOYW1lPSdyZWxhdGl2ZSBtbC0zJz5cclxuICAgICAgICAgICAgICAgIHsoeyBvcGVuIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPE1lbnUuQnV0dG9uIGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIgbWF4LXcteHMgdGV4dC1zbSBiZy13aGl0ZSByb3VuZGVkLWZ1bGwgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLW9mZnNldC0yIGZvY3VzOnJpbmctaW5kaWdvLTUwMCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nc3Itb25seSc+T3BlbiB1c2VyIG1lbnU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3ctOCBoLTggcm91bmRlZC1mdWxsJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz0naHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE0NzIwOTk2NDU3ODUtNTY1OGFiZjRmZjRlP2l4bGliPXJiLTEuMi4xJml4aWQ9ZXlKaGNIQmZhV1FpT2pFeU1EZDkmYXV0bz1mb3JtYXQmZml0PWZhY2VhcmVhJmZhY2VwYWQ9MiZ3PTI1NiZoPTI1NiZxPTgwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD0nJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9NZW51LkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNpdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgc2hvdz17b3Blbn1cclxuICAgICAgICAgICAgICAgICAgICAgIGFzPXtGcmFnbWVudH1cclxuICAgICAgICAgICAgICAgICAgICAgIGVudGVyPSd0cmFuc2l0aW9uIGVhc2Utb3V0IGR1cmF0aW9uLTEwMCdcclxuICAgICAgICAgICAgICAgICAgICAgIGVudGVyRnJvbT0ndHJhbnNmb3JtIG9wYWNpdHktMCBzY2FsZS05NSdcclxuICAgICAgICAgICAgICAgICAgICAgIGVudGVyVG89J3RyYW5zZm9ybSBvcGFjaXR5LTEwMCBzY2FsZS0xMDAnXHJcbiAgICAgICAgICAgICAgICAgICAgICBsZWF2ZT0ndHJhbnNpdGlvbiBlYXNlLWluIGR1cmF0aW9uLTc1J1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGVhdmVGcm9tPSd0cmFuc2Zvcm0gb3BhY2l0eS0xMDAgc2NhbGUtMTAwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGVhdmVUbz0ndHJhbnNmb3JtIG9wYWNpdHktMCBzY2FsZS05NSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdhYnNvbHV0ZSByaWdodC0wIHctNDggcHktMSBtdC0yIG9yaWdpbi10b3AtcmlnaHQgYmctd2hpdGUgcm91bmRlZC1tZCBzaGFkb3ctbGcgcmluZy0xIHJpbmctYmxhY2sgcmluZy1vcGFjaXR5LTUgZm9jdXM6b3V0bGluZS1ub25lJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEudXNlck5hdmlnYXRpb24ubWFwKChpdGVtOiBJTmF2aWdhdGlvbkl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT17aXRlbS5uYW1lfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoeyBhY3RpdmUgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2l0ZW0ucGF0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmUgPyBcImJnLWdyYXktMTAwXCIgOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJibG9jayBweC00IHB5LTIgdGV4dC1zbSB0ZXh0LWdyYXktNzAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtcz5cclxuICAgICAgICAgICAgICAgICAgICA8L1RyYW5zaXRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L01lbnU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIHsvKiBwcmludCBvbmx5ICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoaWRkZW4gcHJpbnQ6ZmxleCB3LWZ1bGwgZmxleC1jb2wgcHgtNCBweS00Jz5cclxuICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPScgcHJpbnQ6ZmxleCBpdGVtcy1jZW50ZXInPlxyXG4gICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9J2ZpeGVkIGxlZnQtMCAnXHJcbiAgICAgICAgICAgICAgd2lkdGg9ezE0MH1cclxuICAgICAgICAgICAgICBoZWlnaHQ9ezE0MH1cclxuICAgICAgICAgICAgICBzcmM9Jy9sb2dvLnBuZydcclxuICAgICAgICAgICAgICBhbHQ9J2xvZ28nXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdteC1hdXRvJz5cclxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSd0ZXh0LTN4bCBmb250LW1lZGl1bSc+UHJhZ2F0aGkgSG9zcGl0YWw8L2gyPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndGV4dC1zbSc+VGlydXBhdGksIGFkZHJlc3NsaW5lMTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RleHQtc20nPlRpcnVwYXRpLCBhZGRyZXNzbGluZTI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J210LTYnPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LW1kJz5HU1RJTjogMTIzNDU2Nzg5PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LW1kJz5cclxuICAgICAgICAgICAgICAgICAgQ0lOIE5vOiA3ODk0NTYxMjMxNDU2Nzk4NDYzMTIxMzJcclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSd0ZXh0LTN4bCBmb250LW1lZGl1bSBtdC00Jz5UYXggSW52b2ljZTwvaDE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9J210LTYgZmxleCBmbGV4LWNvbCc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGJvcmRlci10LTIganVzdGlmeS1iZXR3ZWVuIGJvcmRlci1iLTIgcHktMiBib3JkZXItYmxhY2snPlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RleHQtbWQgZm9udC1ib2xkJz5JbnZvaWNlIE51bWJlcjogPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+T1BIMTIzNTMyNDk8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndGV4dC1tZCBmb250LWJvbGQnPkludm9pY2UgRGF0ZTogPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+MjAyMS0wMS0xNyAxNjo1NDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LW1kIGZvbnQtYm9sZCc+UGF0aWVudCBJZDogPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+UmFuZG9tIElkPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggJz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBweS00IGp1c3RpZnktY2VudGVyICBmbGV4LWNvbCBib3JkZXItYi0yIGJvcmRlci1yLTIgYm9yZGVyLWJsYWNrIHBiLTQnPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdmb250LWJvbGQnPlNvbGQgdG86IDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPk5hbWUgJiBBZGRyZXNzOiBOYW1lIG9mIFBhdGllbnQgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+Q29udGFjdCBOdW1iZXI6IDEyMzQ1Njc4OTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPlN0YXRlIE5hbWUgJiBDb2RlOiBBbmRocmFQcmFkZXNoICYgMTIzIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPkdTVCBOdW1iZXI6IDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPlBBTjogPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+QWFkaGFhciA6PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4LWdyb3cgYm9yZGVyLWItMiBib3JkZXItYmxhY2sgJz48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT0ncmVsYXRpdmUgZmxleC0xIG92ZXJmbG93LXktYXV0byBmb2N1czpvdXRsaW5lLW5vbmUnPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3B5LTYnPlxyXG4gICAgICAgICAgICA8UGFnZT57cHJvcHMuY2hpbGRyZW59PC9QYWdlPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9tYWluPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgUGFnZTogUmVhY3QuRkMgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J3ByaW50OmhpZGRlbiBweC00IG14LWF1dG8gbWF4LXctN3hsIHNtOnB4LTYgbWQ6cHgtOCc+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtMnhsIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTkwMCc+RGFzaGJvYXJkPC9oMT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J3B4LTQgbXgtYXV0byBtYXgtdy03eGwgc206cHgtNiBtZDpweC04Jz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3B5LTQnPntwcm9wcy5jaGlsZHJlbn08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFnZTtcbiIsImltcG9ydCB7IERpc2Nsb3N1cmUgfSBmcm9tIFwiQGhlYWRsZXNzdWkvcmVhY3RcIlxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcbmltcG9ydCB7IHVzZUdsb2JhbFN0YXRlIH0gZnJvbSBcIi4uL3N0b3JlL0dsb2JhbFN0b3JlXCJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L2Rpc3QvY2xpZW50L3JvdXRlclwiXG5pbXBvcnQgeyBjbGFzc05hbWVzIH0gZnJvbSBcIi4uL2hlbHBlcnMvY3NzaGVscGVyc1wiXG5pbXBvcnQgeyBJTmF2aWdhdGlvbkl0ZW0gfSBmcm9tIFwiLi4vdHlwZXMvSU5hdmlnYXRpb25JdGVtXCJcblxuY29uc3QgU2lkZWJhckl0ZW06IFJlYWN0LkZDPHsgaXRlbTogSU5hdmlnYXRpb25JdGVtIH0+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgYXNQYXRoIH0gPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBjdXJyZW50ID0gYXNQYXRoID09IHByb3BzLml0ZW0ucGF0aCA/PyBcIlwiXG4gIGxldCBpc0xpbmsgPSAocHJvcHMuaXRlbS5jaGlsZHJlbj8ubGVuZ3RoID8/IDApID09IDBcblxuICByZXR1cm4gaXNMaW5rID8gKFxuICAgIDxMaW5rIGhyZWY9e3Byb3BzLml0ZW0ucGF0aCA/PyBcIlwifT5cbiAgICAgIDxhXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgICAgICBjdXJyZW50XG4gICAgICAgICAgICA/IFwiYmctZ3JheS03MDAgYmctb3BhY2l0eS01MCB0ZXh0LWdyYXktMjAwXCJcbiAgICAgICAgICAgIDogXCIgdGV4dC1ncmF5LTQwMCBob3ZlcjpiZy1ncmF5LTcwMCBob3ZlcjpiZy1vcGFjaXR5LTMwIGhvdmVyOnRleHQtZ3JheS0zMDBcIixcbiAgICAgICAgICBcIiBncm91cCB3LWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIgcGwtMiBwci0xIHB5LTIgdGV4dC1sZWZ0IHRleHQtc20gZm9udC1tZWRpdW0gcm91bmRlZC1tZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctY3lhbi01MDBcIlxuICAgICAgICApfVxuICAgICAgPlxuICAgICAgICB7cHJvcHMuaXRlbS5pY29uICYmIChcbiAgICAgICAgICA8cHJvcHMuaXRlbS5pY29uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4LXNocmluay0wIHctNiBoLTYgbXItMyB0ZXh0LWdyYXktNDAwIHRyYW5zaXRpb24gZHVyYXRpb24tMjAwIHRyYW5zZm9ybSBncm91cC1ob3ZlcjotdHJhbnNsYXRlLXgtMSBncm91cC1ob3ZlcjpzY2FsZS0xMTAgZ3JvdXAtaG92ZXI6dGV4dC1ncmF5LTMwMFwiXG4gICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsZXgtMSB0ZXh0LWxnXCI+e3Byb3BzLml0ZW0ubmFtZX08L3NwYW4+XG4gICAgICA8L2E+XG4gICAgPC9MaW5rPlxuICApIDogKFxuICAgIDxEaXNjbG9zdXJlXG4gICAgICBhcz1cImRpdlwiXG4gICAgICBrZXk9e2Bwcm9wcy5pdGVtLm5hbWUke01hdGgucmFuZG9tKCl9YH1cbiAgICAgIGNsYXNzTmFtZT1cInNwYWNlLXktMVwiXG4gICAgPlxuICAgICAgeyh7IG9wZW4gfSkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8RGlzY2xvc3VyZS5CdXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge319XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgICAgICAgICAgICBjdXJyZW50XG4gICAgICAgICAgICAgICAgICA/IFwiYmctZ3JheS03MDAgYmctb3BhY2l0eS01MCB0ZXh0LWdyYXktMjAwXCJcbiAgICAgICAgICAgICAgICAgIDogXCIgdGV4dC1ncmF5LTQwMCBob3ZlcjpiZy1ncmF5LTcwMCBob3ZlcjpiZy1vcGFjaXR5LTMwIGhvdmVyOnRleHQtZ3JheS0zMDBcIixcbiAgICAgICAgICAgICAgICBcImdyb3VwIHctZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBwbC0yIHByLTEgcHktMiB0ZXh0LWxlZnQgdGV4dC1zbSBmb250LW1lZGl1bSByb3VuZGVkLW1kIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1jeWFuLTUwMFwiXG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAge3Byb3BzLml0ZW0uaWNvbiAmJiAoXG4gICAgICAgICAgICAgICAgICA8cHJvcHMuaXRlbS5pY29uXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtc2hyaW5rLTAgdy02IGgtNiBtci0zIHRleHQtZ3JheS00MDAgdHJhbnNpdGlvbiBkdXJhdGlvbi0yMDAgdHJhbnNmb3JtIGdyb3VwLWhvdmVyOnNjYWxlLTExMCBncm91cC1ob3ZlcjotdHJhbnNsYXRlLXgtMSBncm91cC1ob3Zlcjp0ZXh0LWdyYXktMzAwXCJcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbGV4LTEgdGV4dC1sZ1wiPntwcm9wcy5pdGVtLm5hbWV9PC9zcGFuPlxuXG4gICAgICAgICAgICAgICAge3Byb3BzLml0ZW0uY2hpbGRyZW4gJiYgcHJvcHMuaXRlbS5jaGlsZHJlbi5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxuICAgICAgICAgICAgICAgICAgICAgIG9wZW4gPyBcInRleHQtZ3JheS00MDAgcm90YXRlLTkwXCIgOiBcInRleHQtZ3JheS0zMDBcIixcbiAgICAgICAgICAgICAgICAgICAgICBcIm1sLTMgZmxleC1zaHJpbmstMCBoLTUgdy01IHRyYW5zZm9ybSBncm91cC1ob3Zlcjp0ZXh0LWdyYXktNDAwIHRyYW5zaXRpb24tY29sb3JzIGVhc2UtaW4tb3V0IGR1cmF0aW9uLTE1MFwiXG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjAgMjBcIlxuICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTYgNkwxNCAxMEw2IDE0VjZaXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIC8+XG4gICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgIDwvRGlzY2xvc3VyZS5CdXR0b24+XG5cbiAgICAgICAgICAgIDxEaXNjbG9zdXJlLlBhbmVsIGNsYXNzTmFtZT1cInNwYWNlLXktMVwiPlxuICAgICAgICAgICAgICB7cHJvcHMuaXRlbS5jaGlsZHJlbiAmJlxuICAgICAgICAgICAgICAgIHByb3BzLml0ZW0uY2hpbGRyZW4ubWFwKChzdWJJdGVtOiBJTmF2aWdhdGlvbkl0ZW0pID0+IChcbiAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtzdWJJdGVtLm5hbWV9IGNsYXNzTmFtZT1cIm1sLTQgYm9yZGVyLXJlZC02MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgPFNpZGViYXJJdGVtIGl0ZW09e3N1Ykl0ZW19IC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvRGlzY2xvc3VyZS5QYW5lbD5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKVxuICAgICAgfX1cbiAgICA8L0Rpc2Nsb3N1cmU+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhckl0ZW1cbiIsImltcG9ydCB7IERpYWxvZywgVHJhbnNpdGlvbiB9IGZyb20gXCJAaGVhZGxlc3N1aS9yZWFjdFwiO1xuaW1wb3J0IHsgWEljb24gfSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC9vdXRsaW5lXCI7XG5pbXBvcnQgUmVhY3QsIHsgRGlzcGF0Y2gsIEZyYWdtZW50LCBTZXRTdGF0ZUFjdGlvbiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZGF0YSB9IGZyb20gXCIuLi9kYXRhXCI7XG5pbXBvcnQgU2lkZWJhckl0ZW0gZnJvbSBcIi4vU2lkZUJhckl0ZW1cIjtcblxuY29uc3QgU2lkZWJhcjogUmVhY3QuRkM8e1xuICBzaWRlYmFyT3BlbjogYm9vbGVhbjtcbiAgc2V0U2lkZWJhck9wZW46IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPGJvb2xlYW4+Pjtcbn0+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgc2lkZWJhck9wZW4sIHNldFNpZGViYXJPcGVuIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFRyYW5zaXRpb24uUm9vdCBzaG93PXtzaWRlYmFyT3Blbn0gYXM9e0ZyYWdtZW50fT5cbiAgICAgICAgPERpYWxvZ1xuICAgICAgICAgIGFzPSdkaXYnXG4gICAgICAgICAgc3RhdGljXG4gICAgICAgICAgY2xhc3NOYW1lPSdwcmludDpoaWRkZW4gZml4ZWQgaW5zZXQtMCB6LTQwIGZsZXggbWQ6aGlkZGVuJ1xuICAgICAgICAgIG9wZW49e3NpZGViYXJPcGVufVxuICAgICAgICAgIG9uQ2xvc2U9e3NldFNpZGViYXJPcGVufT5cbiAgICAgICAgICA8VHJhbnNpdGlvbi5DaGlsZFxuICAgICAgICAgICAgYXM9e0ZyYWdtZW50fVxuICAgICAgICAgICAgZW50ZXI9J3RyYW5zaXRpb24tb3BhY2l0eSBlYXNlLWxpbmVhciBkdXJhdGlvbi0zMDAnXG4gICAgICAgICAgICBlbnRlckZyb209J29wYWNpdHktMCdcbiAgICAgICAgICAgIGVudGVyVG89J29wYWNpdHktMTAwJ1xuICAgICAgICAgICAgbGVhdmU9J3RyYW5zaXRpb24tb3BhY2l0eSBlYXNlLWxpbmVhciBkdXJhdGlvbi0zMDAnXG4gICAgICAgICAgICBsZWF2ZUZyb209J29wYWNpdHktMTAwJ1xuICAgICAgICAgICAgbGVhdmVUbz0nb3BhY2l0eS0wJz5cbiAgICAgICAgICAgIDxEaWFsb2cuT3ZlcmxheSBjbGFzc05hbWU9J2ZpeGVkIGluc2V0LTAgYmctZ3JheS02MDAgYmctb3BhY2l0eS03NScgLz5cbiAgICAgICAgICA8L1RyYW5zaXRpb24uQ2hpbGQ+XG4gICAgICAgICAgPFRyYW5zaXRpb24uQ2hpbGRcbiAgICAgICAgICAgIGFzPXtGcmFnbWVudH1cbiAgICAgICAgICAgIGVudGVyPSd0cmFuc2l0aW9uIGVhc2UtaW4tb3V0IGR1cmF0aW9uLTMwMCB0cmFuc2Zvcm0nXG4gICAgICAgICAgICBlbnRlckZyb209Jy10cmFuc2xhdGUteC1mdWxsJ1xuICAgICAgICAgICAgZW50ZXJUbz0ndHJhbnNsYXRlLXgtMCdcbiAgICAgICAgICAgIGxlYXZlPSd0cmFuc2l0aW9uIGVhc2UtaW4tb3V0IGR1cmF0aW9uLTMwMCB0cmFuc2Zvcm0nXG4gICAgICAgICAgICBsZWF2ZUZyb209J3RyYW5zbGF0ZS14LTAnXG4gICAgICAgICAgICBsZWF2ZVRvPSctdHJhbnNsYXRlLXgtZnVsbCc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmVsYXRpdmUgZmxleCBmbGV4LWNvbCBmbGV4LTEgdy1mdWxsIG1heC13LXhzIHB0LTUgcGItNCBiZy1ncmF5LTgwMCc+XG4gICAgICAgICAgICAgIDxUcmFuc2l0aW9uLkNoaWxkXG4gICAgICAgICAgICAgICAgYXM9e0ZyYWdtZW50fVxuICAgICAgICAgICAgICAgIGVudGVyPSdlYXNlLWluLW91dCBkdXJhdGlvbi0zMDAnXG4gICAgICAgICAgICAgICAgZW50ZXJGcm9tPSdvcGFjaXR5LTAnXG4gICAgICAgICAgICAgICAgZW50ZXJUbz0nb3BhY2l0eS0xMDAnXG4gICAgICAgICAgICAgICAgbGVhdmU9J2Vhc2UtaW4tb3V0IGR1cmF0aW9uLTMwMCdcbiAgICAgICAgICAgICAgICBsZWF2ZUZyb209J29wYWNpdHktMTAwJ1xuICAgICAgICAgICAgICAgIGxlYXZlVG89J29wYWNpdHktMCc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Fic29sdXRlIHRvcC0wIHJpZ2h0LTAgcHQtMiAtbXItMTInPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHctMTAgaC0xMCBtbC0xIHJvdW5kZWQtZnVsbCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctaW5zZXQgZm9jdXM6cmluZy13aGl0ZSdcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2lkZWJhck9wZW4oZmFsc2UpfT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdzci1vbmx5Jz5DbG9zZSBzaWRlYmFyPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8WEljb24gY2xhc3NOYW1lPSd3LTYgaC02IHRleHQtd2hpdGUnIGFyaWEtaGlkZGVuPSd0cnVlJyAvPlxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvVHJhbnNpdGlvbi5DaGlsZD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIGZsZXgtc2hyaW5rLTAgcHgtNCc+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd3LWF1dG8gaC04J1xuICAgICAgICAgICAgICAgICAgc3JjPSdodHRwczovL3RhaWx3aW5kdWkuY29tL2ltZy9sb2dvcy93b3JrZmxvdy1sb2dvLWluZGlnby01MDAtbWFyay13aGl0ZS10ZXh0LnN2ZydcbiAgICAgICAgICAgICAgICAgIGFsdD0nV29ya2Zsb3cnXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4LTEgaC0wIG10LTUgb3ZlcmZsb3cteS1hdXRvJz5cbiAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT0ncHgtMiBzcGFjZS15LTEnPlxuICAgICAgICAgICAgICAgICAge2RhdGEubmF2aWdhdGlvbi5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zaXRpb24uQ2hpbGRcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICBlbnRlcj0nZWFzZS1pbiB0cmFuc2l0aW9uIHRyYW5zaXRpb24gZHVyYXRpb24tNjAwJ1xuICAgICAgICAgICAgICAgICAgICAgIGVudGVyRnJvbT0nJ1xuICAgICAgICAgICAgICAgICAgICAgIGVudGVyVG89J29wYWNpdHktMTAwJ1xuICAgICAgICAgICAgICAgICAgICAgIGxlYXZlPSdlYXNlLWluLW91dCBkdXJhdGlvbi0zMDAnXG4gICAgICAgICAgICAgICAgICAgICAgbGVhdmVGcm9tPSdvcGFjaXR5LTEwMCdcbiAgICAgICAgICAgICAgICAgICAgICBsZWF2ZVRvPSdvcGFjaXR5LTAnPlxuICAgICAgICAgICAgICAgICAgICAgIDxTaWRlYmFySXRlbSBrZXk9e2l0ZW0ubmFtZX0gaXRlbT17aXRlbX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9UcmFuc2l0aW9uLkNoaWxkPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9UcmFuc2l0aW9uLkNoaWxkPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4LXNocmluay0wIHctMTQnIGFyaWEtaGlkZGVuPSd0cnVlJz5cbiAgICAgICAgICAgIHsvKiBEdW1teSBlbGVtZW50IHRvIGZvcmNlIHNpZGViYXIgdG8gc2hyaW5rIHRvIGZpdCBjbG9zZSBpY29uICovfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0RpYWxvZz5cbiAgICAgIDwvVHJhbnNpdGlvbi5Sb290PlxuXG4gICAgICB7LyogU3RhdGljIHNpZGViYXIgZm9yIGRlc2t0b3AgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJpbnQ6aGlkZGVuICBoaWRkZW4gaC1mdWxsIG1kOmZsZXggbWQ6ZmxleC1zaHJpbmstMCc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIHctNjQnPlxuICAgICAgICAgIHsvKiBTaWRlYmFyIGNvbXBvbmVudCwgc3dhcCB0aGlzIGVsZW1lbnQgd2l0aCBhbm90aGVyIHNpZGViYXIgaWYgeW91IGxpa2UgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgZmxleC0xIGgtMCc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIgZmxleC1zaHJpbmstMCBoLTE2IHB4LTQgYmctZ3JheS05MDAnPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RleHQtMnhsIHRleHQtZ3JheS0zMDAnPlByYWdhdGhpIEhvc3BpdGFsPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBmbGV4LTEgb3ZlcmZsb3cteS1hdXRvJz5cbiAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9J2ZsZXgtMSBweC0yIHB5LTQgc3BhY2UteS0xIGJnLWdyYXktODAwJz5cbiAgICAgICAgICAgICAgICB7ZGF0YS5uYXZpZ2F0aW9uLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPFNpZGViYXJJdGVtIGtleT17aXRlbS5uYW1lfSBpdGVtPXtpdGVtfSAvPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhcjtcbiIsImltcG9ydCB7XG4gIEZvbGRlckljb24sXG4gIEhvbWVJY29uLFxuICBTY2FsZUljb24sXG4gIFVzZXJzSWNvbixcbn0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3Qvb3V0bGluZVwiXG5pbXBvcnQgeyBJTmF2aWdhdGlvbkl0ZW0gfSBmcm9tIFwiLi90eXBlcy9JTmF2aWdhdGlvbkl0ZW1cIlxuXG5jb25zdCBuYXZpZ2F0aW9uOiBJTmF2aWdhdGlvbkl0ZW1bXSA9IFtcbiAge1xuICAgIG5hbWU6IFwiRGFzaGJvYXJkXCIsXG4gICAgaWNvbjogSG9tZUljb24sXG4gICAgcGF0aDogXCIvZGFzaGJvYXJkXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlRlYW1cIixcbiAgICBpY29uOiBVc2Vyc0ljb24sXG4gICAgcGF0aDogXCIvdGVhbVwiLFxuICAgIGNoaWxkcmVuOiBbeyBuYW1lOiBcIlN1YlRlYW1cIiwgaWNvbjogVXNlcnNJY29uLCBwYXRoOiBcIi9zdWJ0ZWFtXCIgfV0sXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlByb2plY3RzXCIsXG4gICAgaWNvbjogRm9sZGVySWNvbixcbiAgICBwYXRoOiBcIi9wcm9qZWN0c1wiLFxuICB9LFxuXVxuXG5jb25zdCB1c2VyTmF2aWdhdGlvbiA9IFtcbiAgeyBuYW1lOiBcIllvdXIgUHJvZmlsZVwiLCBocmVmOiBcIiNcIiB9LFxuICB7IG5hbWU6IFwiU2V0dGluZ3NcIiwgaHJlZjogXCIjXCIgfSxcbiAgeyBuYW1lOiBcIlNpZ24gb3V0XCIsIGhyZWY6IFwiI1wiIH0sXG5dXG5cbmNvbnN0IHByb2plY3RzID0gW1xuICB7XG4gICAgaWQ6IDEsXG4gICAgdGl0bGU6IFwiR3JhcGhRTCBBUElcIixcbiAgICBpbml0aWFsczogXCJHQVwiLFxuICAgIHRlYW06IFwiRW5naW5lZXJpbmdcIixcbiAgICBtZW1iZXJzOiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwiRHJpZXMgVmluY2VudFwiLFxuICAgICAgICBoYW5kbGU6IFwiZHJpZXN2aW5jZW50XCIsXG4gICAgICAgIGltYWdlVXJsOlxuICAgICAgICAgIFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MDY3OTQ3NzgyMDItY2FkODRjZjQ1ZjFkP2l4bGliPXJiLTEuMi4xJml4aWQ9ZXlKaGNIQmZhV1FpT2pFeU1EZDkmYXV0bz1mb3JtYXQmZml0PWZhY2VhcmVhJmZhY2VwYWQ9MiZ3PTI1NiZoPTI1NiZxPTgwXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiBcIkxpbmRzYXkgV2FsdG9uXCIsXG4gICAgICAgIGhhbmRsZTogXCJsaW5kc2F5d2FsdG9uXCIsXG4gICAgICAgIGltYWdlVXJsOlxuICAgICAgICAgIFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MTc4NDE5MDUyNDAtNDcyOTg4YmFiZGY5P2l4bGliPXJiLTEuMi4xJml4aWQ9ZXlKaGNIQmZhV1FpT2pFeU1EZDkmYXV0bz1mb3JtYXQmZml0PWZhY2VhcmVhJmZhY2VwYWQ9MiZ3PTI1NiZoPTI1NiZxPTgwXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiBcIkNvdXJ0bmV5IEhlbnJ5XCIsXG4gICAgICAgIGhhbmRsZTogXCJjb3VydG5leWhlbnJ5XCIsXG4gICAgICAgIGltYWdlVXJsOlxuICAgICAgICAgIFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE0Mzg3NjE2ODEwMzMtNjQ2MWZmYWQ4ZDgwP2l4bGliPXJiLTEuMi4xJml4aWQ9ZXlKaGNIQmZhV1FpT2pFeU1EZDkmYXV0bz1mb3JtYXQmZml0PWZhY2VhcmVhJmZhY2VwYWQ9MiZ3PTI1NiZoPTI1NiZxPTgwXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiBcIlRvbSBDb29rXCIsXG4gICAgICAgIGhhbmRsZTogXCJ0b21jb29rXCIsXG4gICAgICAgIGltYWdlVXJsOlxuICAgICAgICAgIFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE0NzIwOTk2NDU3ODUtNTY1OGFiZjRmZjRlP2l4bGliPXJiLTEuMi4xJml4aWQ9ZXlKaGNIQmZhV1FpT2pFeU1EZDkmYXV0bz1mb3JtYXQmZml0PWZhY2VhcmVhJmZhY2VwYWQ9MiZ3PTI1NiZoPTI1NiZxPTgwXCIsXG4gICAgICB9LFxuICAgIF0sXG4gICAgdG90YWxNZW1iZXJzOiAxMixcbiAgICBsYXN0VXBkYXRlZDogXCJNYXJjaCAxNywgMjAyMFwiLFxuICAgIHBpbm5lZDogdHJ1ZSxcbiAgICBiZ0NvbG9yQ2xhc3M6IFwiYmctYmx1ZS02MDBcIixcbiAgfSxcbiAge1xuICAgIGlkOiAyLFxuICAgIHRpdGxlOiBcIkdyYXBoUUwgQVBJXCIsXG4gICAgaW5pdGlhbHM6IFwiR0FcIixcbiAgICB0ZWFtOiBcIkVuZ2luZWVyaW5nXCIsXG4gICAgbWVtYmVyczogW1xuICAgICAge1xuICAgICAgICBuYW1lOiBcIkRyaWVzIFZpbmNlbnRcIixcbiAgICAgICAgaGFuZGxlOiBcImRyaWVzdmluY2VudFwiLFxuICAgICAgICBpbWFnZVVybDpcbiAgICAgICAgICBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTA2Nzk0Nzc4MjAyLWNhZDg0Y2Y0NWYxZD9peGxpYj1yYi0xLjIuMSZpeGlkPWV5SmhjSEJmYVdRaU9qRXlNRGQ5JmF1dG89Zm9ybWF0JmZpdD1mYWNlYXJlYSZmYWNlcGFkPTImdz0yNTYmaD0yNTYmcT04MFwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJMaW5kc2F5IFdhbHRvblwiLFxuICAgICAgICBoYW5kbGU6IFwibGluZHNheXdhbHRvblwiLFxuICAgICAgICBpbWFnZVVybDpcbiAgICAgICAgICBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTE3ODQxOTA1MjQwLTQ3Mjk4OGJhYmRmOT9peGxpYj1yYi0xLjIuMSZpeGlkPWV5SmhjSEJmYVdRaU9qRXlNRGQ5JmF1dG89Zm9ybWF0JmZpdD1mYWNlYXJlYSZmYWNlcGFkPTImdz0yNTYmaD0yNTYmcT04MFwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJDb3VydG5leSBIZW5yeVwiLFxuICAgICAgICBoYW5kbGU6IFwiY291cnRuZXloZW5yeVwiLFxuICAgICAgICBpbWFnZVVybDpcbiAgICAgICAgICBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNDM4NzYxNjgxMDMzLTY0NjFmZmFkOGQ4MD9peGxpYj1yYi0xLjIuMSZpeGlkPWV5SmhjSEJmYVdRaU9qRXlNRGQ5JmF1dG89Zm9ybWF0JmZpdD1mYWNlYXJlYSZmYWNlcGFkPTImdz0yNTYmaD0yNTYmcT04MFwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJUb20gQ29va1wiLFxuICAgICAgICBoYW5kbGU6IFwidG9tY29va1wiLFxuICAgICAgICBpbWFnZVVybDpcbiAgICAgICAgICBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNDcyMDk5NjQ1Nzg1LTU2NThhYmY0ZmY0ZT9peGxpYj1yYi0xLjIuMSZpeGlkPWV5SmhjSEJmYVdRaU9qRXlNRGQ5JmF1dG89Zm9ybWF0JmZpdD1mYWNlYXJlYSZmYWNlcGFkPTImdz0yNTYmaD0yNTYmcT04MFwiLFxuICAgICAgfSxcbiAgICBdLFxuICAgIHRvdGFsTWVtYmVyczogMTIsXG4gICAgbGFzdFVwZGF0ZWQ6IFwiTWFyY2ggMTcsIDIwMjBcIixcbiAgICBwaW5uZWQ6IHRydWUsXG4gICAgYmdDb2xvckNsYXNzOiBcImJnLXllbGxvdy02MDBcIixcbiAgfSxcbiAge1xuICAgIGlkOiAzLFxuICAgIHRpdGxlOiBcIkdyYXBoUUwgQVBJXCIsXG4gICAgaW5pdGlhbHM6IFwiR0FcIixcbiAgICB0ZWFtOiBcIkVuZ2luZWVyaW5nXCIsXG4gICAgbWVtYmVyczogW1xuICAgICAge1xuICAgICAgICBuYW1lOiBcIkRyaWVzIFZpbmNlbnRcIixcbiAgICAgICAgaGFuZGxlOiBcImRyaWVzdmluY2VudFwiLFxuICAgICAgICBpbWFnZVVybDpcbiAgICAgICAgICBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTA2Nzk0Nzc4MjAyLWNhZDg0Y2Y0NWYxZD9peGxpYj1yYi0xLjIuMSZpeGlkPWV5SmhjSEJmYVdRaU9qRXlNRGQ5JmF1dG89Zm9ybWF0JmZpdD1mYWNlYXJlYSZmYWNlcGFkPTImdz0yNTYmaD0yNTYmcT04MFwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJMaW5kc2F5IFdhbHRvblwiLFxuICAgICAgICBoYW5kbGU6IFwibGluZHNheXdhbHRvblwiLFxuICAgICAgICBpbWFnZVVybDpcbiAgICAgICAgICBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTE3ODQxOTA1MjQwLTQ3Mjk4OGJhYmRmOT9peGxpYj1yYi0xLjIuMSZpeGlkPWV5SmhjSEJmYVdRaU9qRXlNRGQ5JmF1dG89Zm9ybWF0JmZpdD1mYWNlYXJlYSZmYWNlcGFkPTImdz0yNTYmaD0yNTYmcT04MFwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJDb3VydG5leSBIZW5yeVwiLFxuICAgICAgICBoYW5kbGU6IFwiY291cnRuZXloZW5yeVwiLFxuICAgICAgICBpbWFnZVVybDpcbiAgICAgICAgICBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNDM4NzYxNjgxMDMzLTY0NjFmZmFkOGQ4MD9peGxpYj1yYi0xLjIuMSZpeGlkPWV5SmhjSEJmYVdRaU9qRXlNRGQ5JmF1dG89Zm9ybWF0JmZpdD1mYWNlYXJlYSZmYWNlcGFkPTImdz0yNTYmaD0yNTYmcT04MFwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJUb20gQ29va1wiLFxuICAgICAgICBoYW5kbGU6IFwidG9tY29va1wiLFxuICAgICAgICBpbWFnZVVybDpcbiAgICAgICAgICBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNDcyMDk5NjQ1Nzg1LTU2NThhYmY0ZmY0ZT9peGxpYj1yYi0xLjIuMSZpeGlkPWV5SmhjSEJmYVdRaU9qRXlNRGQ5JmF1dG89Zm9ybWF0JmZpdD1mYWNlYXJlYSZmYWNlcGFkPTImdz0yNTYmaD0yNTYmcT04MFwiLFxuICAgICAgfSxcbiAgICBdLFxuICAgIHRvdGFsTWVtYmVyczogMTIsXG4gICAgbGFzdFVwZGF0ZWQ6IFwiTWFyY2ggMTcsIDIwMjBcIixcbiAgICBwaW5uZWQ6IHRydWUsXG4gICAgYmdDb2xvckNsYXNzOiBcImJnLWluZGlnby02MDBcIixcbiAgfSxcbiAge1xuICAgIGlkOiA0LFxuICAgIHRpdGxlOiBcIkdyYXBoUUwgQVBJXCIsXG4gICAgaW5pdGlhbHM6IFwiR0FcIixcbiAgICB0ZWFtOiBcIkVuZ2luZWVyaW5nXCIsXG4gICAgbWVtYmVyczogW1xuICAgICAge1xuICAgICAgICBuYW1lOiBcIkRyaWVzIFZpbmNlbnRcIixcbiAgICAgICAgaGFuZGxlOiBcImRyaWVzdmluY2VudFwiLFxuICAgICAgICBpbWFnZVVybDpcbiAgICAgICAgICBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTA2Nzk0Nzc4MjAyLWNhZDg0Y2Y0NWYxZD9peGxpYj1yYi0xLjIuMSZpeGlkPWV5SmhjSEJmYVdRaU9qRXlNRGQ5JmF1dG89Zm9ybWF0JmZpdD1mYWNlYXJlYSZmYWNlcGFkPTImdz0yNTYmaD0yNTYmcT04MFwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJMaW5kc2F5IFdhbHRvblwiLFxuICAgICAgICBoYW5kbGU6IFwibGluZHNheXdhbHRvblwiLFxuICAgICAgICBpbWFnZVVybDpcbiAgICAgICAgICBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTE3ODQxOTA1MjQwLTQ3Mjk4OGJhYmRmOT9peGxpYj1yYi0xLjIuMSZpeGlkPWV5SmhjSEJmYVdRaU9qRXlNRGQ5JmF1dG89Zm9ybWF0JmZpdD1mYWNlYXJlYSZmYWNlcGFkPTImdz0yNTYmaD0yNTYmcT04MFwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJDb3VydG5leSBIZW5yeVwiLFxuICAgICAgICBoYW5kbGU6IFwiY291cnRuZXloZW5yeVwiLFxuICAgICAgICBpbWFnZVVybDpcbiAgICAgICAgICBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNDM4NzYxNjgxMDMzLTY0NjFmZmFkOGQ4MD9peGxpYj1yYi0xLjIuMSZpeGlkPWV5SmhjSEJmYVdRaU9qRXlNRGQ5JmF1dG89Zm9ybWF0JmZpdD1mYWNlYXJlYSZmYWNlcGFkPTImdz0yNTYmaD0yNTYmcT04MFwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJUb20gQ29va1wiLFxuICAgICAgICBoYW5kbGU6IFwidG9tY29va1wiLFxuICAgICAgICBpbWFnZVVybDpcbiAgICAgICAgICBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNDcyMDk5NjQ1Nzg1LTU2NThhYmY0ZmY0ZT9peGxpYj1yYi0xLjIuMSZpeGlkPWV5SmhjSEJmYVdRaU9qRXlNRGQ5JmF1dG89Zm9ybWF0JmZpdD1mYWNlYXJlYSZmYWNlcGFkPTImdz0yNTYmaD0yNTYmcT04MFwiLFxuICAgICAgfSxcbiAgICBdLFxuICAgIHRvdGFsTWVtYmVyczogMTIsXG4gICAgbGFzdFVwZGF0ZWQ6IFwiTWFyY2ggMTcsIDIwMjBcIixcbiAgICBwaW5uZWQ6IHRydWUsXG4gICAgYmdDb2xvckNsYXNzOiBcImJnLXBpbmstNjAwXCIsXG4gIH0sXG4gIHtcbiAgICBpZDogNSxcbiAgICB0aXRsZTogXCJHcmFwaFFMIEFQSVwiLFxuICAgIGluaXRpYWxzOiBcIkdBXCIsXG4gICAgdGVhbTogXCJFbmdpbmVlcmluZ1wiLFxuICAgIG1lbWJlcnM6IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJEcmllcyBWaW5jZW50XCIsXG4gICAgICAgIGhhbmRsZTogXCJkcmllc3ZpbmNlbnRcIixcbiAgICAgICAgaW1hZ2VVcmw6XG4gICAgICAgICAgXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUwNjc5NDc3ODIwMi1jYWQ4NGNmNDVmMWQ/aXhsaWI9cmItMS4yLjEmaXhpZD1leUpoY0hCZmFXUWlPakV5TURkOSZhdXRvPWZvcm1hdCZmaXQ9ZmFjZWFyZWEmZmFjZXBhZD0yJnc9MjU2Jmg9MjU2JnE9ODBcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwiTGluZHNheSBXYWx0b25cIixcbiAgICAgICAgaGFuZGxlOiBcImxpbmRzYXl3YWx0b25cIixcbiAgICAgICAgaW1hZ2VVcmw6XG4gICAgICAgICAgXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUxNzg0MTkwNTI0MC00NzI5ODhiYWJkZjk/aXhsaWI9cmItMS4yLjEmaXhpZD1leUpoY0hCZmFXUWlPakV5TURkOSZhdXRvPWZvcm1hdCZmaXQ9ZmFjZWFyZWEmZmFjZXBhZD0yJnc9MjU2Jmg9MjU2JnE9ODBcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwiQ291cnRuZXkgSGVucnlcIixcbiAgICAgICAgaGFuZGxlOiBcImNvdXJ0bmV5aGVucnlcIixcbiAgICAgICAgaW1hZ2VVcmw6XG4gICAgICAgICAgXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTQzODc2MTY4MTAzMy02NDYxZmZhZDhkODA/aXhsaWI9cmItMS4yLjEmaXhpZD1leUpoY0hCZmFXUWlPakV5TURkOSZhdXRvPWZvcm1hdCZmaXQ9ZmFjZWFyZWEmZmFjZXBhZD0yJnc9MjU2Jmg9MjU2JnE9ODBcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwiVG9tIENvb2tcIixcbiAgICAgICAgaGFuZGxlOiBcInRvbWNvb2tcIixcbiAgICAgICAgaW1hZ2VVcmw6XG4gICAgICAgICAgXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTQ3MjA5OTY0NTc4NS01NjU4YWJmNGZmNGU/aXhsaWI9cmItMS4yLjEmaXhpZD1leUpoY0hCZmFXUWlPakV5TURkOSZhdXRvPWZvcm1hdCZmaXQ9ZmFjZWFyZWEmZmFjZXBhZD0yJnc9MjU2Jmg9MjU2JnE9ODBcIixcbiAgICAgIH0sXG4gICAgXSxcbiAgICB0b3RhbE1lbWJlcnM6IDEyLFxuICAgIGxhc3RVcGRhdGVkOiBcIk1hcmNoIDE3LCAyMDIwXCIsXG4gICAgcGlubmVkOiB0cnVlLFxuICAgIGJnQ29sb3JDbGFzczogXCJiZy1ncmF5LTYwMFwiLFxuICB9LFxuXVxuXG5jb25zdCBjYXJkcyA9IFtcbiAgeyBuYW1lOiBcIkFjY291bnQgYmFsYW5jZVwiLCBocmVmOiBcIiNcIiwgaWNvbjogU2NhbGVJY29uLCBhbW91bnQ6IFwiJDMwLDY1OS40NVwiIH0sXG4gIHtcbiAgICBuYW1lOiBcIkFjY291bnQgYmFsYW5jZTFcIixcbiAgICBocmVmOiBcIiNcIixcbiAgICBpY29uOiBTY2FsZUljb24sXG4gICAgYW1vdW50OiBcIiQzMCw2NTkuNDVcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiQWNjb3VudCBiYWxhbmNlMlwiLFxuICAgIGhyZWY6IFwiI1wiLFxuICAgIGljb246IFNjYWxlSWNvbixcbiAgICBhbW91bnQ6IFwiJDMwLDY1OS40NVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJBY2NvdW50IGJhbGFuY2UzXCIsXG4gICAgaHJlZjogXCIjXCIsXG4gICAgaWNvbjogU2NhbGVJY29uLFxuICAgIGFtb3VudDogXCIkMzAsNjU5LjQ1XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkFjY291bnQgYmFsYW5jZTRcIixcbiAgICBocmVmOiBcIiNcIixcbiAgICBpY29uOiBTY2FsZUljb24sXG4gICAgYW1vdW50OiBcIiQzMCw2NTkuNDVcIixcbiAgfSxcbiAgLy8gTW9yZSBpdGVtcy4uLlxuXVxuXG5jb25zdCB0cmFuc2FjdGlvbnMgPSBbXG4gIHtcbiAgICBpZDogMSxcbiAgICBuYW1lOiBcIlBheW1lbnQgdG8gTW9sbHkgU2FuZGVyc1wiLFxuICAgIGhyZWY6IFwiI1wiLFxuICAgIGFtb3VudDogXCIkMjAsMDAwXCIsXG4gICAgY3VycmVuY3k6IFwiVVNEXCIsXG4gICAgc3RhdHVzOiBcInN1Y2Nlc3NcIixcbiAgICBkYXRlOiBcIkp1bHkgMTEsIDIwMjBcIixcbiAgICBkYXRldGltZTogXCIyMDIwLTA3LTExXCIsXG4gIH0sXG4gIHtcbiAgICBpZDogMixcbiAgICBuYW1lOiBcIlBheW1lbnQgdG8gTW9sbHkgU2FuZGVyc1wiLFxuICAgIGhyZWY6IFwiI1wiLFxuICAgIGFtb3VudDogXCIkMjAsMDAwXCIsXG4gICAgY3VycmVuY3k6IFwiVVNEXCIsXG4gICAgc3RhdHVzOiBcInByb2Nlc3NpbmdcIixcbiAgICBkYXRlOiBcIkp1bHkgMTEsIDIwMjBcIixcbiAgICBkYXRldGltZTogXCIyMDIwLTA3LTExXCIsXG4gIH0sXG4gIHtcbiAgICBpZDogMyxcbiAgICBuYW1lOiBcIlBheW1lbnQgdG8gTW9sbHkgU2FuZGVyc1wiLFxuICAgIGhyZWY6IFwiI1wiLFxuICAgIGFtb3VudDogXCIkMjAsMDAwXCIsXG4gICAgY3VycmVuY3k6IFwiVVNEXCIsXG4gICAgc3RhdHVzOiBcInByb2Nlc3NpbmdcIixcbiAgICBkYXRlOiBcIkp1bHkgMTEsIDIwMjBcIixcbiAgICBkYXRldGltZTogXCIyMDIwLTA3LTExXCIsXG4gIH0sXG4gIHtcbiAgICBpZDogNCxcbiAgICBuYW1lOiBcIlBheW1lbnQgdG8gTW9sbHkgU2FuZGVyc1wiLFxuICAgIGhyZWY6IFwiI1wiLFxuICAgIGFtb3VudDogXCIkMjAsMDAwXCIsXG4gICAgY3VycmVuY3k6IFwiVVNEXCIsXG4gICAgc3RhdHVzOiBcImZhaWxlZFwiLFxuICAgIGRhdGU6IFwiSnVseSAxMSwgMjAyMFwiLFxuICAgIGRhdGV0aW1lOiBcIjIwMjAtMDctMTFcIixcbiAgfSxcbiAge1xuICAgIGlkOiA1LFxuICAgIG5hbWU6IFwiUGF5bWVudCB0byBNb2xseSBTYW5kZXJzXCIsXG4gICAgaHJlZjogXCIjXCIsXG4gICAgYW1vdW50OiBcIiQyMCwwMDBcIixcbiAgICBjdXJyZW5jeTogXCJVU0RcIixcbiAgICBzdGF0dXM6IFwic3VjY2Vzc1wiLFxuICAgIGRhdGU6IFwiSnVseSAxMSwgMjAyMFwiLFxuICAgIGRhdGV0aW1lOiBcIjIwMjAtMDctMTFcIixcbiAgfSxcbiAge1xuICAgIGlkOiA2LFxuICAgIG5hbWU6IFwiUGF5bWVudCB0byBNb2xseSBTYW5kZXJzXCIsXG4gICAgaHJlZjogXCIjXCIsXG4gICAgYW1vdW50OiBcIiQyMCwwMDBcIixcbiAgICBjdXJyZW5jeTogXCJVU0RcIixcbiAgICBzdGF0dXM6IFwiZmFpbGVkXCIsXG4gICAgZGF0ZTogXCJKdWx5IDExLCAyMDIwXCIsXG4gICAgZGF0ZXRpbWU6IFwiMjAyMC0wNy0xMVwiLFxuICB9LFxuXVxuXG5jb25zdCBzdGF0dXNTdHlsZXMgPSB7XG4gIHN1Y2Nlc3M6IFwiYmctZ3JlZW4tMTAwIHRleHQtZ3JlZW4tODAwXCIsXG4gIHByb2Nlc3Npbmc6IFwiYmcteWVsbG93LTEwMCB0ZXh0LXllbGxvdy04MDBcIixcbiAgZmFpbGVkOiBcImJnLXJlZC0zMDAgdGV4dC1ncmF5LTgwMFwiLFxufVxuXG5jb25zdCBwaW5uZWRQcm9qZWN0cyA9IHByb2plY3RzLmZpbHRlcigocHJvamVjdCkgPT4gcHJvamVjdC5waW5uZWQpXG5cbmV4cG9ydCBjb25zdCBkYXRhID0ge1xuICBuYXZpZ2F0aW9uLFxuICB1c2VyTmF2aWdhdGlvbixcbiAgcHJvamVjdHMsXG4gIHBpbm5lZFByb2plY3RzLFxuICB0cmFuc2FjdGlvbnMsXG4gIGNhcmRzLFxuICBzdGF0dXNTdHlsZXMsXG59XG4iLCJleHBvcnQgZnVuY3Rpb24gY2xhc3NOYW1lcyguLi5jbGFzc2VzOiBzdHJpbmdbXSkge1xuICByZXR1cm4gY2xhc3Nlcy5maWx0ZXIoQm9vbGVhbikuam9pbihcIiBcIilcbn1cbiIsImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVJlZHVjZXIgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgSUdsb2JhbFN0YXRlIH0gZnJvbSBcIi4uL3R5cGVzL0lHbG9iYWxTdGF0ZVwiXG5pbXBvcnQgSVVzZXIgZnJvbSBcIi4uL3R5cGVzL0lVc2VyXCJcblxuZXhwb3J0IGVudW0gR2xvYmFsU3RhdGVBY3Rpb24ge1xuICBCdXN5LFxuICBJZGxlLFxuICBFcnJvcixcbiAgTG9nSW4sXG4gIExvZ091dCxcbiAgU2V0UGFnZVRpdGxlLFxufVxuXG5leHBvcnQgdHlwZSBHbG9iYWxBY3Rpb24gPVxuICB8IHsgdHlwZTogR2xvYmFsU3RhdGVBY3Rpb24uQnVzeSB9XG4gIHwgeyB0eXBlOiBHbG9iYWxTdGF0ZUFjdGlvbi5JZGxlIH1cbiAgfCB7IHR5cGU6IEdsb2JhbFN0YXRlQWN0aW9uLkVycm9yOyBlcnJvcjogc3RyaW5nIH1cbiAgfCB7IHR5cGU6IEdsb2JhbFN0YXRlQWN0aW9uLlNldFBhZ2VUaXRsZTsgdGl0bGU6IHN0cmluZyB9XG4gIHwgeyB0eXBlOiBHbG9iYWxTdGF0ZUFjdGlvbi5Mb2dJbjsgdXNlcjogSVVzZXIgfVxuICB8IHsgdHlwZTogR2xvYmFsU3RhdGVBY3Rpb24uTG9nT3V0IH1cblxuY29uc3QgaW5pdGlhbFN0YXRlOiBJR2xvYmFsU3RhdGUgPSB7XG4gIGJ1c3k6IGZhbHNlLFxuICBlcnJvcjogZmFsc2UsXG4gIHBhZ2VUaXRsZTogXCJIb21lXCIsXG59XG5cbmNvbnN0IGdsb2JhbFN0YXRlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8SUdsb2JhbFN0YXRlPihpbml0aWFsU3RhdGUpXG5jb25zdCBnbG9iYWxEaXNwYXRjaENvbnRleHQgPSBjcmVhdGVDb250ZXh0PFJlYWN0LkRpc3BhdGNoPEdsb2JhbEFjdGlvbj4+KFxuICAoKSA9PiB7fVxuKVxuXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlOiBJR2xvYmFsU3RhdGUsIGFjdGlvbjogR2xvYmFsQWN0aW9uKTogSUdsb2JhbFN0YXRlID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgR2xvYmFsU3RhdGVBY3Rpb24uQnVzeTpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBidXN5OiB0cnVlIH1cbiAgICBjYXNlIEdsb2JhbFN0YXRlQWN0aW9uLklkbGU6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgYnVzeTogZmFsc2UgfVxuICAgIGNhc2UgR2xvYmFsU3RhdGVBY3Rpb24uRXJyb3I6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZXJyb3I6IHRydWUsIGVycm9yTWVzc2FnZTogYWN0aW9uLmVycm9yIH1cbiAgICBjYXNlIEdsb2JhbFN0YXRlQWN0aW9uLkxvZ0luOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHVzZXI6IGFjdGlvbi51c2VyIH1cbiAgICBjYXNlIEdsb2JhbFN0YXRlQWN0aW9uLkxvZ091dDpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCB1c2VyOiB1bmRlZmluZWQgfVxuICAgIGNhc2UgR2xvYmFsU3RhdGVBY3Rpb24uU2V0UGFnZVRpdGxlOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHBhZ2VUaXRsZTogYWN0aW9uLnRpdGxlIH1cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuY29uc3QgR2xvYmFsU3RhdGVQcm92aWRlcjogUmVhY3QuRkMgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcjxcbiAgICBSZWFjdC5SZWR1Y2VyPElHbG9iYWxTdGF0ZSwgR2xvYmFsQWN0aW9uPlxuICA+KHJlZHVjZXIsIGluaXRpYWxTdGF0ZSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge30sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPGdsb2JhbFN0YXRlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17c3RhdGV9PlxuICAgICAgPGdsb2JhbERpc3BhdGNoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17ZGlzcGF0Y2h9PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2dsb2JhbERpc3BhdGNoQ29udGV4dC5Qcm92aWRlcj5cbiAgICA8L2dsb2JhbFN0YXRlQ29udGV4dC5Qcm92aWRlcj5cbiAgKVxufVxuXG5jb25zdCB1c2VHbG9iYWxTdGF0ZSA9ICgpID0+IHVzZUNvbnRleHQoZ2xvYmFsU3RhdGVDb250ZXh0KVxuY29uc3QgdXNlR2xvYmFsRGlzcGF0Y2ggPSAoKSA9PiB1c2VDb250ZXh0KGdsb2JhbERpc3BhdGNoQ29udGV4dClcbmNvbnN0IHNldFRpdGxlID0gKHRpdGxlOiBzdHJpbmcpID0+XG4gIHVzZUdsb2JhbERpc3BhdGNoKCkoeyB0eXBlOiBHbG9iYWxTdGF0ZUFjdGlvbi5TZXRQYWdlVGl0bGUsIHRpdGxlIH0pXG5cbmV4cG9ydCB7IEdsb2JhbFN0YXRlUHJvdmlkZXIsIHVzZUdsb2JhbFN0YXRlLCB1c2VHbG9iYWxEaXNwYXRjaCwgc2V0VGl0bGUgfVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGhlYWRsZXNzdWkvcmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZy5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=