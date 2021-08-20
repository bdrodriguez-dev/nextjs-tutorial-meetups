module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/new-meetup.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/new-meetup.js":
/*!*********************************!*\
  !*** ./pages/api/new-meetup.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/helpers */ \"./utils/helpers.js\");\n // .../api/new-meetup\n\nconst handler = async (req, res) => {\n  if (req.method === \"POST\") {\n    const data = req.body; // const { title, description, image, address } = data;\n\n    let result;\n\n    try {\n      const result = await Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_0__[\"connectToMongoDBAndRunQuery\"])(collection => {\n        return collection.insertOne(data);\n      });\n      console.log(result);\n      res.status(201).json({\n        message: \"Meetup created successfully\",\n        result: result\n      });\n    } catch (e) {\n      console.log(e);\n    }\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (handler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvbmV3LW1lZXR1cC5qcz84Yjg2Il0sIm5hbWVzIjpbImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJkYXRhIiwiYm9keSIsInJlc3VsdCIsImNvbm5lY3RUb01vbmdvREJBbmRSdW5RdWVyeSIsImNvbGxlY3Rpb24iLCJpbnNlcnRPbmUiLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0NBQ0E7O0FBRUEsTUFBTUEsT0FBTyxHQUFHLE9BQU9DLEdBQVAsRUFBWUMsR0FBWixLQUFvQjtBQUNsQyxNQUFJRCxHQUFHLENBQUNFLE1BQUosS0FBZSxNQUFuQixFQUEyQjtBQUN6QixVQUFNQyxJQUFJLEdBQUdILEdBQUcsQ0FBQ0ksSUFBakIsQ0FEeUIsQ0FFekI7O0FBRUEsUUFBSUMsTUFBSjs7QUFDQSxRQUFJO0FBQ0YsWUFBTUEsTUFBTSxHQUFHLE1BQU1DLGtGQUEyQixDQUFFQyxVQUFELElBQWdCO0FBQy9ELGVBQU9BLFVBQVUsQ0FBQ0MsU0FBWCxDQUFxQkwsSUFBckIsQ0FBUDtBQUNELE9BRitDLENBQWhEO0FBSUFNLGFBQU8sQ0FBQ0MsR0FBUixDQUFZTCxNQUFaO0FBQ0FKLFNBQUcsQ0FDQVUsTUFESCxDQUNVLEdBRFYsRUFFR0MsSUFGSCxDQUVRO0FBQUVDLGVBQU8sRUFBRSw2QkFBWDtBQUEwQ1IsY0FBTSxFQUFFQTtBQUFsRCxPQUZSO0FBR0QsS0FURCxDQVNFLE9BQU9TLENBQVAsRUFBVTtBQUNWTCxhQUFPLENBQUNDLEdBQVIsQ0FBWUksQ0FBWjtBQUNEO0FBQ0Y7QUFDRixDQW5CRDs7QUFxQmVmLHNFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL25ldy1tZWV0dXAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25uZWN0VG9Nb25nb0RCQW5kUnVuUXVlcnkgfSBmcm9tIFwiLi4vLi4vdXRpbHMvaGVscGVyc1wiO1xuLy8gLi4uL2FwaS9uZXctbWVldHVwXG5cbmNvbnN0IGhhbmRsZXIgPSBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XG4gICAgY29uc3QgZGF0YSA9IHJlcS5ib2R5O1xuICAgIC8vIGNvbnN0IHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBpbWFnZSwgYWRkcmVzcyB9ID0gZGF0YTtcblxuICAgIGxldCByZXN1bHQ7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNvbm5lY3RUb01vbmdvREJBbmRSdW5RdWVyeSgoY29sbGVjdGlvbikgPT4ge1xuICAgICAgICByZXR1cm4gY29sbGVjdGlvbi5pbnNlcnRPbmUoZGF0YSk7XG4gICAgICB9KTtcblxuICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgIHJlc1xuICAgICAgICAuc3RhdHVzKDIwMSlcbiAgICAgICAgLmpzb24oeyBtZXNzYWdlOiBcIk1lZXR1cCBjcmVhdGVkIHN1Y2Nlc3NmdWxseVwiLCByZXN1bHQ6IHJlc3VsdCB9KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/new-meetup.js\n");

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

/***/ })

/******/ });