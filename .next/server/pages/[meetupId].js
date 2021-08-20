module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/[meetupId]/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/meetups/MeetupDetail.js":
/*!********************************************!*\
  !*** ./components/meetups/MeetupDetail.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _MeetupDetail_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MeetupDetail.module.css */ \"./components/meetups/MeetupDetail.module.css\");\n/* harmony import */ var _MeetupDetail_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_MeetupDetail_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/braulio-rodriguez/Documents/Development/tutorial-projects/nextjs-course/react-meetups/components/meetups/MeetupDetail.js\";\n\n\nconst MeetupDetail = props => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n    className: _MeetupDetail_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.detail,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      alt: props.title,\n      src: props.image\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: props.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"address\", {\n      children: props.address\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: props.description\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MeetupDetail);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwRGV0YWlsLmpzP2YyYmYiXSwibmFtZXMiOlsiTWVldHVwRGV0YWlsIiwicHJvcHMiLCJjbGFzc2VzIiwiZGV0YWlsIiwidGl0bGUiLCJpbWFnZSIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBLE1BQU1BLFlBQVksR0FBSUMsS0FBRCxJQUFXO0FBQzlCLHNCQUNFO0FBQVMsYUFBUyxFQUFFQywrREFBTyxDQUFDQyxNQUE1QjtBQUFBLDRCQUNFO0FBQUssU0FBRyxFQUFFRixLQUFLLENBQUNHLEtBQWhCO0FBQXVCLFNBQUcsRUFBRUgsS0FBSyxDQUFDSTtBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBQSxnQkFBS0osS0FBSyxDQUFDRztBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsZUFHRTtBQUFBLGdCQUFVSCxLQUFLLENBQUNLO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEYsZUFJRTtBQUFBLGdCQUFJTCxLQUFLLENBQUNNO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQVFELENBVEQ7O0FBV2VQLDJFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cERldGFpbC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGFzc2VzIGZyb20gXCIuL01lZXR1cERldGFpbC5tb2R1bGUuY3NzXCI7XG5cbmNvbnN0IE1lZXR1cERldGFpbCA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXRhaWx9PlxuICAgICAgPGltZyBhbHQ9e3Byb3BzLnRpdGxlfSBzcmM9e3Byb3BzLmltYWdlfSAvPlxuICAgICAgPGgxPntwcm9wcy50aXRsZX08L2gxPlxuICAgICAgPGFkZHJlc3M+e3Byb3BzLmFkZHJlc3N9PC9hZGRyZXNzPlxuICAgICAgPHA+e3Byb3BzLmRlc2NyaXB0aW9ufTwvcD5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNZWV0dXBEZXRhaWw7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/meetups/MeetupDetail.js\n");

/***/ }),

/***/ "./components/meetups/MeetupDetail.module.css":
/*!****************************************************!*\
  !*** ./components/meetups/MeetupDetail.module.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"detail\": \"MeetupDetail_detail__C_8IT\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwRGV0YWlsLm1vZHVsZS5jc3M/ZTY0MSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBEZXRhaWwubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImRldGFpbFwiOiBcIk1lZXR1cERldGFpbF9kZXRhaWxfX0NfOElUXCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/meetups/MeetupDetail.module.css\n");

/***/ }),

/***/ "./pages/[meetupId]/index.js":
/*!***********************************!*\
  !*** ./pages/[meetupId]/index.js ***!
  \***********************************/
/*! exports provided: getStaticPaths, getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticPaths\", function() { return getStaticPaths; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_meetups_MeetupDetail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/meetups/MeetupDetail */ \"./components/meetups/MeetupDetail.js\");\n/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/helpers */ \"./utils/helpers.js\");\n\nvar _jsxFileName = \"/Users/braulio-rodriguez/Documents/Development/tutorial-projects/nextjs-course/react-meetups/pages/[meetupId]/index.js\";\n\n\n\n\nconst MeetupDetailsPage = props => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_meetups_MeetupDetail__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    title: props.meetupData.title,\n    image: props.meetupData.image,\n    address: props.meetupData.address,\n    description: props.meetupData.description\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 5\n  }, undefined);\n};\n\nasync function getStaticPaths() {\n  const meetups = await Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_3__[\"connectToMongoDBAndRunQuery\"])(collection => {\n    return collection.find({}, {\n      _id: 1\n    }).toArray();\n  });\n  console.log(meetups); // const pathIdArray =\n  // console.log(pathIdArray);\n\n  return {\n    fallback: false,\n    paths: meetups.map(meetup => {\n      return {\n        params: {\n          meetupId: meetup._id.toString()\n        }\n      };\n    })\n  };\n}\nasync function getStaticProps(context) {\n  // fetch data for single meetup\n  const meetupId = context.params.meetupId; // console.log(`Hey, I'm the meetupId: ${meetupId}`);\n\n  let meetupData;\n\n  try {\n    meetupData = await Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_3__[\"connectToMongoDBAndRunQuery\"])(collection => {\n      return collection.findOne({\n        _id: Object(mongodb__WEBPACK_IMPORTED_MODULE_1__[\"ObjectId\"])(meetupId)\n      });\n    }); // console.log(`Hi, I'm the meetupData: ${JSON.stringify(meetupData)}`);\n  } catch (e) {\n    console.log(e);\n  }\n\n  return {\n    props: {\n      meetupData: {\n        title: meetupData.title,\n        image: meetupData.image,\n        address: meetupData.address,\n        description: meetupData.description\n      }\n    }\n  };\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (MeetupDetailsPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9bbWVldHVwSWRdL2luZGV4LmpzPzkyYTYiXSwibmFtZXMiOlsiTWVldHVwRGV0YWlsc1BhZ2UiLCJwcm9wcyIsIm1lZXR1cERhdGEiLCJ0aXRsZSIsImltYWdlIiwiYWRkcmVzcyIsImRlc2NyaXB0aW9uIiwiZ2V0U3RhdGljUGF0aHMiLCJtZWV0dXBzIiwiY29ubmVjdFRvTW9uZ29EQkFuZFJ1blF1ZXJ5IiwiY29sbGVjdGlvbiIsImZpbmQiLCJfaWQiLCJ0b0FycmF5IiwiY29uc29sZSIsImxvZyIsImZhbGxiYWNrIiwicGF0aHMiLCJtYXAiLCJtZWV0dXAiLCJwYXJhbXMiLCJtZWV0dXBJZCIsInRvU3RyaW5nIiwiZ2V0U3RhdGljUHJvcHMiLCJjb250ZXh0IiwiZmluZE9uZSIsIk9iamVjdElkIiwiZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsaUJBQWlCLEdBQUlDLEtBQUQsSUFBVztBQUNuQyxzQkFDRSxxRUFBQyx3RUFBRDtBQUNFLFNBQUssRUFBRUEsS0FBSyxDQUFDQyxVQUFOLENBQWlCQyxLQUQxQjtBQUVFLFNBQUssRUFBRUYsS0FBSyxDQUFDQyxVQUFOLENBQWlCRSxLQUYxQjtBQUdFLFdBQU8sRUFBRUgsS0FBSyxDQUFDQyxVQUFOLENBQWlCRyxPQUg1QjtBQUlFLGVBQVcsRUFBRUosS0FBSyxDQUFDQyxVQUFOLENBQWlCSTtBQUpoQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFRRCxDQVREOztBQVdPLGVBQWVDLGNBQWYsR0FBZ0M7QUFDckMsUUFBTUMsT0FBTyxHQUFHLE1BQU1DLGtGQUEyQixDQUFFQyxVQUFELElBQWdCO0FBQ2hFLFdBQU9BLFVBQVUsQ0FBQ0MsSUFBWCxDQUFnQixFQUFoQixFQUFvQjtBQUFFQyxTQUFHLEVBQUU7QUFBUCxLQUFwQixFQUFnQ0MsT0FBaEMsRUFBUDtBQUNELEdBRmdELENBQWpEO0FBSUFDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZUCxPQUFaLEVBTHFDLENBT3JDO0FBRUE7O0FBRUEsU0FBTztBQUNMUSxZQUFRLEVBQUUsS0FETDtBQUVMQyxTQUFLLEVBQUVULE9BQU8sQ0FBQ1UsR0FBUixDQUFhQyxNQUFELElBQVk7QUFDN0IsYUFBTztBQUNMQyxjQUFNLEVBQUU7QUFDTkMsa0JBQVEsRUFBRUYsTUFBTSxDQUFDUCxHQUFQLENBQVdVLFFBQVg7QUFESjtBQURILE9BQVA7QUFLRCxLQU5NO0FBRkYsR0FBUDtBQVVEO0FBRU0sZUFBZUMsY0FBZixDQUE4QkMsT0FBOUIsRUFBdUM7QUFDNUM7QUFDQSxRQUFNSCxRQUFRLEdBQUdHLE9BQU8sQ0FBQ0osTUFBUixDQUFlQyxRQUFoQyxDQUY0QyxDQUc1Qzs7QUFDQSxNQUFJbkIsVUFBSjs7QUFDQSxNQUFJO0FBQ0ZBLGNBQVUsR0FBRyxNQUFNTyxrRkFBMkIsQ0FBRUMsVUFBRCxJQUFnQjtBQUM3RCxhQUFPQSxVQUFVLENBQUNlLE9BQVgsQ0FBbUI7QUFBRWIsV0FBRyxFQUFFYyx3REFBUSxDQUFDTCxRQUFEO0FBQWYsT0FBbkIsQ0FBUDtBQUNELEtBRjZDLENBQTlDLENBREUsQ0FJRjtBQUNELEdBTEQsQ0FLRSxPQUFPTSxDQUFQLEVBQVU7QUFDVmIsV0FBTyxDQUFDQyxHQUFSLENBQVlZLENBQVo7QUFDRDs7QUFDRCxTQUFPO0FBQ0wxQixTQUFLLEVBQUU7QUFDTEMsZ0JBQVUsRUFBRTtBQUNWQyxhQUFLLEVBQUVELFVBQVUsQ0FBQ0MsS0FEUjtBQUVWQyxhQUFLLEVBQUVGLFVBQVUsQ0FBQ0UsS0FGUjtBQUdWQyxlQUFPLEVBQUVILFVBQVUsQ0FBQ0csT0FIVjtBQUlWQyxtQkFBVyxFQUFFSixVQUFVLENBQUNJO0FBSmQ7QUFEUDtBQURGLEdBQVA7QUFVRDtBQUVjTixnRkFBZiIsImZpbGUiOiIuL3BhZ2VzL1ttZWV0dXBJZF0vaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYmplY3RJZCB9IGZyb20gXCJtb25nb2RiXCI7XG5pbXBvcnQgTWVldHVwRGV0YWlsIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwRGV0YWlsXCI7XG5pbXBvcnQgeyBjb25uZWN0VG9Nb25nb0RCQW5kUnVuUXVlcnkgfSBmcm9tIFwiLi4vLi4vdXRpbHMvaGVscGVyc1wiO1xuXG5jb25zdCBNZWV0dXBEZXRhaWxzUGFnZSA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxNZWV0dXBEZXRhaWxcbiAgICAgIHRpdGxlPXtwcm9wcy5tZWV0dXBEYXRhLnRpdGxlfVxuICAgICAgaW1hZ2U9e3Byb3BzLm1lZXR1cERhdGEuaW1hZ2V9XG4gICAgICBhZGRyZXNzPXtwcm9wcy5tZWV0dXBEYXRhLmFkZHJlc3N9XG4gICAgICBkZXNjcmlwdGlvbj17cHJvcHMubWVldHVwRGF0YS5kZXNjcmlwdGlvbn1cbiAgICAvPlxuICApO1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICBjb25zdCBtZWV0dXBzID0gYXdhaXQgY29ubmVjdFRvTW9uZ29EQkFuZFJ1blF1ZXJ5KChjb2xsZWN0aW9uKSA9PiB7XG4gICAgcmV0dXJuIGNvbGxlY3Rpb24uZmluZCh7fSwgeyBfaWQ6IDEgfSkudG9BcnJheSgpO1xuICB9KTtcblxuICBjb25zb2xlLmxvZyhtZWV0dXBzKTtcblxuICAvLyBjb25zdCBwYXRoSWRBcnJheSA9XG5cbiAgLy8gY29uc29sZS5sb2cocGF0aElkQXJyYXkpO1xuXG4gIHJldHVybiB7XG4gICAgZmFsbGJhY2s6IGZhbHNlLFxuICAgIHBhdGhzOiBtZWV0dXBzLm1hcCgobWVldHVwKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBtZWV0dXBJZDogbWVldHVwLl9pZC50b1N0cmluZygpLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9KSxcbiAgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcbiAgLy8gZmV0Y2ggZGF0YSBmb3Igc2luZ2xlIG1lZXR1cFxuICBjb25zdCBtZWV0dXBJZCA9IGNvbnRleHQucGFyYW1zLm1lZXR1cElkO1xuICAvLyBjb25zb2xlLmxvZyhgSGV5LCBJJ20gdGhlIG1lZXR1cElkOiAke21lZXR1cElkfWApO1xuICBsZXQgbWVldHVwRGF0YTtcbiAgdHJ5IHtcbiAgICBtZWV0dXBEYXRhID0gYXdhaXQgY29ubmVjdFRvTW9uZ29EQkFuZFJ1blF1ZXJ5KChjb2xsZWN0aW9uKSA9PiB7XG4gICAgICByZXR1cm4gY29sbGVjdGlvbi5maW5kT25lKHsgX2lkOiBPYmplY3RJZChtZWV0dXBJZCkgfSk7XG4gICAgfSk7XG4gICAgLy8gY29uc29sZS5sb2coYEhpLCBJJ20gdGhlIG1lZXR1cERhdGE6ICR7SlNPTi5zdHJpbmdpZnkobWVldHVwRGF0YSl9YCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmxvZyhlKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBtZWV0dXBEYXRhOiB7XG4gICAgICAgIHRpdGxlOiBtZWV0dXBEYXRhLnRpdGxlLFxuICAgICAgICBpbWFnZTogbWVldHVwRGF0YS5pbWFnZSxcbiAgICAgICAgYWRkcmVzczogbWVldHVwRGF0YS5hZGRyZXNzLFxuICAgICAgICBkZXNjcmlwdGlvbjogbWVldHVwRGF0YS5kZXNjcmlwdGlvbixcbiAgICAgIH0sXG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWVldHVwRGV0YWlsc1BhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/[meetupId]/index.js\n");

/***/ }),

/***/ "./utils/helpers.js":
/*!**************************!*\
  !*** ./utils/helpers.js ***!
  \**************************/
/*! exports provided: connectToMongoDBAndRunQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"connectToMongoDBAndRunQuery\", function() { return connectToMongoDBAndRunQuery; });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function connectToMongoDBAndRunQuery(queryCallback) {\n  try {\n    const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__[\"MongoClient\"].connect(\"mongodb+srv://brodriguez:qwg0pFdmOTAEtqQf@cluster0.knibf.mongodb.net/meetups?retryWrites=true&w=majority\");\n    const db = client.db();\n    const meetupsCollection = db.collection(\"meetups\");\n    const result = await queryCallback(meetupsCollection);\n    await client.close();\n    return result;\n  } catch (e) {\n    console.log(e);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9oZWxwZXJzLmpzPzIwNWYiXSwibmFtZXMiOlsiY29ubmVjdFRvTW9uZ29EQkFuZFJ1blF1ZXJ5IiwicXVlcnlDYWxsYmFjayIsImNsaWVudCIsIk1vbmdvQ2xpZW50IiwiY29ubmVjdCIsImRiIiwibWVldHVwc0NvbGxlY3Rpb24iLCJjb2xsZWN0aW9uIiwicmVzdWx0IiwiY2xvc2UiLCJlIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLGVBQWVBLDJCQUFmLENBQTJDQyxhQUEzQyxFQUEwRDtBQUMvRCxNQUFJO0FBQ0YsVUFBTUMsTUFBTSxHQUFHLE1BQU1DLG1EQUFXLENBQUNDLE9BQVosQ0FDbkIsMEdBRG1CLENBQXJCO0FBR0EsVUFBTUMsRUFBRSxHQUFHSCxNQUFNLENBQUNHLEVBQVAsRUFBWDtBQUNBLFVBQU1DLGlCQUFpQixHQUFHRCxFQUFFLENBQUNFLFVBQUgsQ0FBYyxTQUFkLENBQTFCO0FBQ0EsVUFBTUMsTUFBTSxHQUFHLE1BQU1QLGFBQWEsQ0FBQ0ssaUJBQUQsQ0FBbEM7QUFDQSxVQUFNSixNQUFNLENBQUNPLEtBQVAsRUFBTjtBQUNBLFdBQU9ELE1BQVA7QUFDRCxHQVRELENBU0UsT0FBT0UsQ0FBUCxFQUFVO0FBQ1ZDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixDQUFaO0FBQ0Q7QUFDRiIsImZpbGUiOiIuL3V0aWxzL2hlbHBlcnMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gXCJtb25nb2RiXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjb25uZWN0VG9Nb25nb0RCQW5kUnVuUXVlcnkocXVlcnlDYWxsYmFjaykge1xuICB0cnkge1xuICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoXG4gICAgICBcIm1vbmdvZGIrc3J2Oi8vYnJvZHJpZ3Vlejpxd2cwcEZkbU9UQUV0cVFmQGNsdXN0ZXIwLmtuaWJmLm1vbmdvZGIubmV0L21lZXR1cHM/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XCJcbiAgICApO1xuICAgIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XG4gICAgY29uc3QgbWVldHVwc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKFwibWVldHVwc1wiKTtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBxdWVyeUNhbGxiYWNrKG1lZXR1cHNDb2xsZWN0aW9uKTtcbiAgICBhd2FpdCBjbGllbnQuY2xvc2UoKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5sb2coZSk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/helpers.js\n");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongodb\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb2RiXCI/ZGVmZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJtb25nb2RiLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29kYlwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mongodb\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });