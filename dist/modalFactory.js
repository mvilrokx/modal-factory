(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("modalFactory", [], factory);
	else if(typeof exports === 'object')
		exports["modalFactory"] = factory();
	else
		root["modalFactory"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _el = __webpack_require__(2);

var _style = __webpack_require__(7);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var modalFactory = function modalFactory() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _options$styles = options.styles,
      styles = _options$styles === undefined ? {} : _options$styles;

  /**
   * Modal structure =
   *    div.modalContainer
   *        div.modalOverlay
   *        div.modalContent
   *            header.modalHeader
   *            section.modalBody
   *            footer.modalFooter
   *        button.modalClose
   */

  var modal = (0, _el.divEl)({
    classes: _style2.default.modalContainer + ' ' + _style2.default.modalContainerDefaults,
    styles: styles.modal
  });

  var modalOverlay = (0, _el.divEl)({
    classes: _style2.default.modalOverlay + ' ' + _style2.default.modalOverlayDefaults,
    styles: styles.modalOverlay
  });
  modalOverlay.addEventListener('click', function () {
    return modal.hide();
  });

  var modalContent = (0, _el.divEl)({
    classes: _style2.default.modalContent + ' ' + _style2.default.modalContentDefaults,
    styles: styles.modalContent
  });

  if (options.header) {
    var modalHeader = (0, _el.headerEl)({
      classes: _style2.default.modalheader + ' ' + _style2.default.modalHeaderDefaults,
      styles: styles.modalHeader
    });
    modalHeader.innerHTML = options.header;
    modalContent.appendChild(modalHeader);
  }

  var modalBody = (0, _el.sectionEl)({
    classes: _style2.default.modalBody + ' ' + _style2.default.modalBodyDefaults,
    styles: styles.modalBody
  });
  modalBody.innerHTML = options.body || '';
  modalContent.appendChild(modalBody);

  if (options.footer) {
    var modalFooter = (0, _el.footerEl)({
      classes: _style2.default.modalFooter + ' ' + _style2.default.modalFooterDefaults,
      styles: styles.modalFooter
    });
    modalFooter.innerHTML = options.footer;
    modalContent.appendChild(modalFooter);
  }

  var modalClose = (0, _el.buttonEl)({
    classes: _style2.default.modalClose + ' ' + _style2.default.modalCloseDefaults,
    styles: styles.modalClose
  });
  modalClose.textContent = '\u2715';
  modalClose.addEventListener('click', function () {
    return modal.hide();
  });

  modal.appendChild(modalOverlay);
  modal.appendChild(modalContent);
  modal.appendChild(modalClose);

  var transitionEndHandler = function transitionEndHandler() {
    modal.style.display = 'none';
    modal.removeEventListener('transitionend', transitionEndHandler);
  };

  modal.show = function () {
    modal.style.display = 'flex';
    setTimeout(function () {
      return modal.classList.add(_style2.default.modalShow);
    }, 20);
  };

  modal.hide = function () {
    modal.addEventListener('transitionend', transitionEndHandler);
    modal.classList.remove(_style2.default.modalShow);
  };

  return modal;
};

exports.default = modalFactory;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @module
*/
var dasherize = function dasherize() {
  var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return str.replace(/[A-Z]/g, function (c, i) {
    return (i !== 0 ? '-' : '') + c.toLowerCase();
  });
};

/**
 * Converts the camelCased/CamelCased string that is passed in to a dash'ed
 * string.
 * This is handy to convert JavaScript object keys and we use it to convert
 * object styles to css styles, e.g. borderWidth becomes 'border-width'
 *
 * @author Mark Vilrokx <mark@vilrokx.com>
 *
 * @example
 *  import dasherize from './lib/dasherize'
 *
 * console.log(dasherize('camelCase')) //'camel-case'
 *
 * @function
 * @param {string} str - camelCased string you would like to convert
 * @returns {string} dasherized string
 *
 */
exports.default = dasherize;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.footerEl = exports.headerEl = exports.sectionEl = exports.buttonEl = exports.divEl = undefined;

var _styleObjectString = __webpack_require__(3);

var _styleObjectString2 = _interopRequireDefault(_styleObjectString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @module
*/

/**
 * Convenience method that allows you to create a DOM element and assign an id,
 * classes (space separated string) and styles to it.
 *
 * @author Mark Vilrokx <mark@vilrokx.com>
 *
 * @example
 *  import el from './lib/el'
 *
 * const divEl = el('div', {
 *   classes: 'myCls1 myCls2',
 *   id: 'myDiv',
 *   styles: {
 *     modalOverlay: { backgroundColor: 'red' }
 *   }
 * })
 * // Also has convenience methods (no need to specify type, only options):
 * // import { divEl } from './lib/el'
 * // const divEl = elDiv({})
 *
 * @function
 * @param {string} type - a string that represents the type of DOM element you
 * want to create
 * @param {object} options - An object that contains css styles
 * @param {string} options.classes - A space seperated list of classes
 * @param {string} options.id - an identifier
 * @param {object} options.styles - an object that contains all the styles you
 * want to apply to the DOM element (and override the class-styles with)
 * @param {object} options.styles.modalContainer - styles for the container
 * @param {object} options.styles.modalOverlay - styles for the overlay
 * @param {object} options.styles.modalClose - styles for the close cross/button
 * @param {object} options.styles.modalContent - styles for the content
 * @param {object} options.styles.modalFooter - styles for the footer
 * @param {object} options.styles.modalBody - styles for the body
 * @param {object} options.styles.modalHeader - styles for the header
 * @returns {object} the DOM object
 *
 */
var el = function el(type) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var element = document.createElement(type);

  if (options.classes) element.className = options.classes;
  if (options.id) element.id = options.id;
  if (options.styles) element.style.cssText = (0, _styleObjectString2.default)(options.styles);

  return element;
};

exports.default = el;

/**
 * Syntactical Sugar method for el to create a <div> DOM element, works
 * exactly the same except you don't have to pass a type.
 */

var divEl = exports.divEl = function divEl(options) {
  return el('div', options);
};
/**
 * Syntactical Sugar method for el to create a <button> DOM element, works
 * exactly the same except you don't have to pass a type.
 */
var buttonEl = exports.buttonEl = function buttonEl(options) {
  return el('button', options);
};
/**
 * Syntactical Sugar method for el to create a <section> DOM element, works
 * exactly the same except you don't have to pass a type.
 */
var sectionEl = exports.sectionEl = function sectionEl(options) {
  return el('section', options);
};
/**
 * Syntactical Sugar method for el to create a <header> DOM element, works
 * exactly the same except you don't have to pass a type.
 */
var headerEl = exports.headerEl = function headerEl(options) {
  return el('header', options);
};
/**
 * Syntactical Sugar method for el to create a <footer> DOM element, works
 * exactly the same except you don't have to pass a type.
 */
var footerEl = exports.footerEl = function footerEl(options) {
  return el('footer', options);
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dasherize = __webpack_require__(1);

var _dasherize2 = _interopRequireDefault(_dasherize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @module
*/
var styleObjectString = function styleObjectString() {
  var style = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Object.keys(style).reduce(function (str, key) {
    return '' + str + (0, _dasherize2.default)(key) + ': ' + style[key] + '; ';
  }, '');
};

/**
 * Converts an object that contains CSS styles into a string.
 * Returns a string of semi-colon-seperated css that can be easily assigned to the
 * cssText proporty of a DOM element
 *
 * @author Mark Vilrokx <mark@vilrokx.com>
 *
 * @example
 *  import style2str from './lib/styleObjectString'
 *
 * console.log(style2str({
 *   backgroundColor: '#dddddd',
 *   borderTopLeftRadius: '3px',
 * }) // 'background-color: #dddddd; border-top-left-radius: 3px; '
 *
 * @function
 * @param {object} style - An object that contains css styles
 * @returns {string} a string that contains a semi-colon-seperated list of css styles
 *
 */
exports.default = styleObjectString;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".PW8S7eg7kzCn_6rCZmGBF {\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  overflow: hidden;\n  z-index: 1;\n  opacity: 0;\n  display: none;\n  -webkit-transition: opacity .15s ease-out;\n  transition: opacity .15s ease-out;\n}\n\n.PW8S7eg7kzCn_6rCZmGBF.Dq4ojJmhqrqJDm-IFhG1- {\n  opacity: 1;\n}\n\n._1zIvNOQH6EifX4NJPp02nd {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n\n.WAvuOw5saxJ0UUAbBL9Bt {\n  font-size: 32px;\n  font-size: 2rem;\n  width: 64px;\n  width: 4rem;\n  height: 64px;\n  height: 4rem;\n  padding: 16px;\n  padding: 1rem;\n  position: fixed;\n  top: 0;\n  right: 0;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  border: none;\n  outline: none;\n  background: none;\n  cursor: pointer;\n  border-radius: 99999px;\n}\n\n._2R9VxgM2ssVY3ybfPOZyla {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  overflow: hidden;\n  max-height: calc(100vh - 2rem);\n  /*max-width: calc(100vw - 2rem);*/\n  width: 50%;\n  position: relative;\n}\n\n.Dq4ojJmhqrqJDm-IFhG1- ._2R9VxgM2ssVY3ybfPOZyla,\n.Dq4ojJmhqrqJDm-IFhG1- ._1IzBtNAwARvaT7a1m9tv__ {\n  -webkit-transform: translate(0, 0);\n          transform: translate(0, 0);\n}\n\n.CTeDNqHcqQwTd4jhb_D- {\n  overflow: auto;\n}\n\n._10xEem18F6D1RgSO_JJsSv {\n  background-color: #000000;\n  opacity: 0.75\n}\n\n._3XIcfpLcXUHDES6VxJ6HSf {\n  color: #ffffff;\n}\n\n._1IzBtNAwARvaT7a1m9tv__ {\n  -webkit-transform: translate(0, -50%);\n          transform: translate(0, -50%);\n  -webkit-transition: -webkit-transform .15s ease-out;\n  transition: -webkit-transform .15s ease-out;\n  transition: transform .15s ease-out;\n  transition: transform .15s ease-out, -webkit-transform .15s ease-out;\n}\n\n._3g3X1o_jP5kXkz7B_BnGt6 {\n  background-color: #dddddd;\n  padding: 16px;\n  padding: 1rem;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  font-size: 24px;\n  font-size: 1.5rem;\n  border-bottom-width: 1px;\n  border-bottom-style: solid;\n  border-bottom-color: rgba(102, 102, 102, 0.4);\n}\n\n._3gTbWfARGde-mPu3ZdwloT {\n  background-color: #ffffff;\n  padding: 16px;\n  padding: 1rem;\n}\n\n.fvziIS0nO2MsCqOoGx0XE {\n  background-color: #dddddd;\n  padding: 16px;\n  padding: 1rem;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n  border-top-width: 1px;\n  border-top-style: solid;\n  border-top-color: rgba(102, 102, 102, 0.4);\n}\n\n", ""]);

// exports
exports.locals = {
	"modalContainer": "PW8S7eg7kzCn_6rCZmGBF",
	"modalShow": "Dq4ojJmhqrqJDm-IFhG1-",
	"modalOverlay": "_1zIvNOQH6EifX4NJPp02nd",
	"modalClose": "WAvuOw5saxJ0UUAbBL9Bt",
	"modalContent": "_2R9VxgM2ssVY3ybfPOZyla",
	"modalContentDefaults": "_1IzBtNAwARvaT7a1m9tv__",
	"modalBody": "CTeDNqHcqQwTd4jhb_D-",
	"modalOverlayDefaults": "_10xEem18F6D1RgSO_JJsSv",
	"modalCloseDefaults": "_3XIcfpLcXUHDES6VxJ6HSf",
	"modalHeaderDefaults": "_3g3X1o_jP5kXkz7B_BnGt6",
	"modalBodyDefaults": "_3gTbWfARGde-mPu3ZdwloT",
	"modalFooterDefaults": "fvziIS0nO2MsCqOoGx0XE"
};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 6 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(4);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(6)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js??ref--1-1!../../node_modules/postcss-loader/index.js!./style.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js??ref--1-1!../../node_modules/postcss-loader/index.js!./style.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _modalFactory = __webpack_require__(0);

var _modalFactory2 = _interopRequireDefault(_modalFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _modalFactory2.default;

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAwOTY5ODljMDBjOWEwZTIzZmMwNyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL21vZGFsRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL2Rhc2hlcml6ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL2VsLmpzIiwid2VicGFjazovLy8uL3NyYy9saWIvc3R5bGVPYmplY3RTdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9zdHlsZS5jc3M/YThlYSIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsibW9kYWxGYWN0b3J5Iiwib3B0aW9ucyIsInN0eWxlcyIsIm1vZGFsIiwiY2xhc3NlcyIsIm1vZGFsQ29udGFpbmVyIiwibW9kYWxDb250YWluZXJEZWZhdWx0cyIsIm1vZGFsT3ZlcmxheSIsIm1vZGFsT3ZlcmxheURlZmF1bHRzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhpZGUiLCJtb2RhbENvbnRlbnQiLCJtb2RhbENvbnRlbnREZWZhdWx0cyIsImhlYWRlciIsIm1vZGFsSGVhZGVyIiwibW9kYWxoZWFkZXIiLCJtb2RhbEhlYWRlckRlZmF1bHRzIiwiaW5uZXJIVE1MIiwiYXBwZW5kQ2hpbGQiLCJtb2RhbEJvZHkiLCJtb2RhbEJvZHlEZWZhdWx0cyIsImJvZHkiLCJmb290ZXIiLCJtb2RhbEZvb3RlciIsIm1vZGFsRm9vdGVyRGVmYXVsdHMiLCJtb2RhbENsb3NlIiwibW9kYWxDbG9zZURlZmF1bHRzIiwidGV4dENvbnRlbnQiLCJ0cmFuc2l0aW9uRW5kSGFuZGxlciIsInN0eWxlIiwiZGlzcGxheSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzaG93Iiwic2V0VGltZW91dCIsImNsYXNzTGlzdCIsImFkZCIsIm1vZGFsU2hvdyIsInJlbW92ZSIsImRhc2hlcml6ZSIsInN0ciIsInJlcGxhY2UiLCJjIiwiaSIsInRvTG93ZXJDYXNlIiwiZWwiLCJ0eXBlIiwiZWxlbWVudCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImlkIiwiY3NzVGV4dCIsImRpdkVsIiwiYnV0dG9uRWwiLCJzZWN0aW9uRWwiLCJoZWFkZXJFbCIsImZvb3RlckVsIiwic3R5bGVPYmplY3RTdHJpbmciLCJPYmplY3QiLCJrZXlzIiwicmVkdWNlIiwia2V5IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2hFQTs7QUFFQTs7Ozs7O0FBRUEsSUFBTUEsZUFBZSxTQUFmQSxZQUFlLEdBQWtCO0FBQUEsTUFBakJDLE9BQWlCLHVFQUFQLEVBQU87QUFBQSx3QkFDYkEsT0FEYSxDQUM3QkMsTUFENkI7QUFBQSxNQUM3QkEsTUFENkIsbUNBQ3BCLEVBRG9COztBQUdyQzs7Ozs7Ozs7Ozs7QUFVQSxNQUFNQyxRQUFRLGVBQU07QUFDbEJDLGFBQVksZ0JBQVVDLGNBQXRCLFNBQXdDLGdCQUFVQyxzQkFEaEM7QUFFbEJKLFlBQVFBLE9BQU9DO0FBRkcsR0FBTixDQUFkOztBQUtBLE1BQU1JLGVBQWUsZUFBTTtBQUN6QkgsYUFBWSxnQkFBVUcsWUFBdEIsU0FBc0MsZ0JBQVVDLG9CQUR2QjtBQUV6Qk4sWUFBUUEsT0FBT0s7QUFGVSxHQUFOLENBQXJCO0FBSUFBLGVBQWFFLGdCQUFiLENBQThCLE9BQTlCLEVBQXVDO0FBQUEsV0FBTU4sTUFBTU8sSUFBTixFQUFOO0FBQUEsR0FBdkM7O0FBRUEsTUFBTUMsZUFBZSxlQUFNO0FBQ3pCUCxhQUFZLGdCQUFVTyxZQUF0QixTQUFzQyxnQkFBVUMsb0JBRHZCO0FBRXpCVixZQUFRQSxPQUFPUztBQUZVLEdBQU4sQ0FBckI7O0FBS0EsTUFBSVYsUUFBUVksTUFBWixFQUFvQjtBQUNsQixRQUFNQyxjQUFjLGtCQUFTO0FBQzNCVixlQUFZLGdCQUFVVyxXQUF0QixTQUFxQyxnQkFBVUMsbUJBRHBCO0FBRTNCZCxjQUFRQSxPQUFPWTtBQUZZLEtBQVQsQ0FBcEI7QUFJQUEsZ0JBQVlHLFNBQVosR0FBd0JoQixRQUFRWSxNQUFoQztBQUNBRixpQkFBYU8sV0FBYixDQUF5QkosV0FBekI7QUFDRDs7QUFFRCxNQUFNSyxZQUFZLG1CQUFVO0FBQzFCZixhQUFZLGdCQUFVZSxTQUF0QixTQUFtQyxnQkFBVUMsaUJBRG5CO0FBRTFCbEIsWUFBUUEsT0FBT2lCO0FBRlcsR0FBVixDQUFsQjtBQUlBQSxZQUFVRixTQUFWLEdBQXNCaEIsUUFBUW9CLElBQVIsSUFBZ0IsRUFBdEM7QUFDQVYsZUFBYU8sV0FBYixDQUF5QkMsU0FBekI7O0FBRUEsTUFBSWxCLFFBQVFxQixNQUFaLEVBQW9CO0FBQ2xCLFFBQU1DLGNBQWMsa0JBQVM7QUFDM0JuQixlQUFZLGdCQUFVbUIsV0FBdEIsU0FBcUMsZ0JBQVVDLG1CQURwQjtBQUUzQnRCLGNBQVFBLE9BQU9xQjtBQUZZLEtBQVQsQ0FBcEI7QUFJQUEsZ0JBQVlOLFNBQVosR0FBd0JoQixRQUFRcUIsTUFBaEM7QUFDQVgsaUJBQWFPLFdBQWIsQ0FBeUJLLFdBQXpCO0FBQ0Q7O0FBRUQsTUFBTUUsYUFBYSxrQkFBUztBQUMxQnJCLGFBQVksZ0JBQVVxQixVQUF0QixTQUFvQyxnQkFBVUMsa0JBRHBCO0FBRTFCeEIsWUFBUUEsT0FBT3VCO0FBRlcsR0FBVCxDQUFuQjtBQUlBQSxhQUFXRSxXQUFYLEdBQXlCLFFBQXpCO0FBQ0FGLGFBQVdoQixnQkFBWCxDQUE0QixPQUE1QixFQUFxQztBQUFBLFdBQU1OLE1BQU1PLElBQU4sRUFBTjtBQUFBLEdBQXJDOztBQUdBUCxRQUFNZSxXQUFOLENBQWtCWCxZQUFsQjtBQUNBSixRQUFNZSxXQUFOLENBQWtCUCxZQUFsQjtBQUNBUixRQUFNZSxXQUFOLENBQWtCTyxVQUFsQjs7QUFFQSxNQUFNRyx1QkFBdUIsU0FBdkJBLG9CQUF1QixHQUFNO0FBQ2pDekIsVUFBTTBCLEtBQU4sQ0FBWUMsT0FBWixHQUFzQixNQUF0QjtBQUNBM0IsVUFBTTRCLG1CQUFOLENBQTBCLGVBQTFCLEVBQTJDSCxvQkFBM0M7QUFDRCxHQUhEOztBQUtBekIsUUFBTTZCLElBQU4sR0FBYSxZQUFNO0FBQ2pCN0IsVUFBTTBCLEtBQU4sQ0FBWUMsT0FBWixHQUFzQixNQUF0QjtBQUNBRyxlQUFXO0FBQUEsYUFBTTlCLE1BQU0rQixTQUFOLENBQWdCQyxHQUFoQixDQUFvQixnQkFBVUMsU0FBOUIsQ0FBTjtBQUFBLEtBQVgsRUFBMkQsRUFBM0Q7QUFDRCxHQUhEOztBQUtBakMsUUFBTU8sSUFBTixHQUFhLFlBQU07QUFDakJQLFVBQU1NLGdCQUFOLENBQXVCLGVBQXZCLEVBQXdDbUIsb0JBQXhDO0FBQ0F6QixVQUFNK0IsU0FBTixDQUFnQkcsTUFBaEIsQ0FBdUIsZ0JBQVVELFNBQWpDO0FBQ0QsR0FIRDs7QUFLQSxTQUFPakMsS0FBUDtBQUNELENBbEZEOztrQkFvRmVILFk7Ozs7Ozs7Ozs7OztBQ3hGZjs7O0FBR0EsSUFBTXNDLFlBQVksU0FBWkEsU0FBWTtBQUFBLE1BQUNDLEdBQUQsdUVBQU8sRUFBUDtBQUFBLFNBQWNBLElBQUlDLE9BQUosQ0FBWSxRQUFaLEVBQXNCLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLFdBQVUsQ0FBQ0EsTUFBTSxDQUFOLEdBQVUsR0FBVixHQUFnQixFQUFqQixJQUF1QkQsRUFBRUUsV0FBRixFQUFqQztBQUFBLEdBQXRCLENBQWQ7QUFBQSxDQUFsQjs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQWtCZUwsUzs7Ozs7Ozs7Ozs7Ozs7QUN2QmY7Ozs7OztBQUVBOzs7O0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0NBLElBQU1NLEtBQUssU0FBTEEsRUFBSyxDQUFDQyxJQUFELEVBQXdCO0FBQUEsTUFBakI1QyxPQUFpQix1RUFBUCxFQUFPOztBQUNqQyxNQUFNNkMsVUFBVUMsU0FBU0MsYUFBVCxDQUF1QkgsSUFBdkIsQ0FBaEI7O0FBRUEsTUFBSTVDLFFBQVFHLE9BQVosRUFBcUIwQyxRQUFRRyxTQUFSLEdBQW9CaEQsUUFBUUcsT0FBNUI7QUFDckIsTUFBSUgsUUFBUWlELEVBQVosRUFBZ0JKLFFBQVFJLEVBQVIsR0FBYWpELFFBQVFpRCxFQUFyQjtBQUNoQixNQUFJakQsUUFBUUMsTUFBWixFQUFvQjRDLFFBQVFqQixLQUFSLENBQWNzQixPQUFkLEdBQXdCLGlDQUFrQmxELFFBQVFDLE1BQTFCLENBQXhCOztBQUVwQixTQUFPNEMsT0FBUDtBQUNELENBUkQ7O2tCQVVlRixFOztBQUVmOzs7OztBQUlPLElBQU1RLHdCQUFRLFNBQVJBLEtBQVE7QUFBQSxTQUFXUixHQUFHLEtBQUgsRUFBVTNDLE9BQVYsQ0FBWDtBQUFBLENBQWQ7QUFDUDs7OztBQUlPLElBQU1vRCw4QkFBVyxTQUFYQSxRQUFXO0FBQUEsU0FBV1QsR0FBRyxRQUFILEVBQWEzQyxPQUFiLENBQVg7QUFBQSxDQUFqQjtBQUNQOzs7O0FBSU8sSUFBTXFELGdDQUFZLFNBQVpBLFNBQVk7QUFBQSxTQUFXVixHQUFHLFNBQUgsRUFBYzNDLE9BQWQsQ0FBWDtBQUFBLENBQWxCO0FBQ1A7Ozs7QUFJTyxJQUFNc0QsOEJBQVcsU0FBWEEsUUFBVztBQUFBLFNBQVdYLEdBQUcsUUFBSCxFQUFhM0MsT0FBYixDQUFYO0FBQUEsQ0FBakI7QUFDUDs7OztBQUlPLElBQU11RCw4QkFBVyxTQUFYQSxRQUFXO0FBQUEsU0FBV1osR0FBRyxRQUFILEVBQWEzQyxPQUFiLENBQVg7QUFBQSxDQUFqQixDOzs7Ozs7Ozs7Ozs7O0FDaEZQOzs7Ozs7QUFFQTs7O0FBR0EsSUFBTXdELG9CQUFvQixTQUFwQkEsaUJBQW9CO0FBQUEsTUFBQzVCLEtBQUQsdUVBQVMsRUFBVDtBQUFBLFNBQWdCNkIsT0FBT0MsSUFBUCxDQUFZOUIsS0FBWixFQUFtQitCLE1BQW5CLENBQTBCLFVBQUNyQixHQUFELEVBQU1zQixHQUFOO0FBQUEsZ0JBQWlCdEIsR0FBakIsR0FBdUIseUJBQVVzQixHQUFWLENBQXZCLFVBQTBDaEMsTUFBTWdDLEdBQU4sQ0FBMUM7QUFBQSxHQUExQixFQUFvRixFQUFwRixDQUFoQjtBQUFBLENBQTFCOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkFvQmVKLGlCOzs7Ozs7QUMzQmY7QUFDQTs7O0FBR0E7QUFDQSxpREFBa0Qsb0JBQW9CLFdBQVcsWUFBWSxjQUFjLGFBQWEsNkJBQTZCLDhCQUE4QixvQ0FBb0MsOEJBQThCLCtCQUErQixnQ0FBZ0MscUJBQXFCLGVBQWUsZUFBZSxrQkFBa0IsOENBQThDLHNDQUFzQyxHQUFHLGtEQUFrRCxlQUFlLEdBQUcsOEJBQThCLHVCQUF1QixXQUFXLFlBQVksY0FBYyxhQUFhLEdBQUcsNEJBQTRCLG9CQUFvQixvQkFBb0IsZ0JBQWdCLGdCQUFnQixpQkFBaUIsaUJBQWlCLGtCQUFrQixrQkFBa0Isb0JBQW9CLFdBQVcsYUFBYSw4QkFBOEIsOEJBQThCLDhCQUE4Qiw4QkFBOEIsaUJBQWlCLGtCQUFrQixxQkFBcUIsb0JBQW9CLDJCQUEyQixHQUFHLDhCQUE4Qix5QkFBeUIseUJBQXlCLGtCQUFrQixpQ0FBaUMsa0NBQWtDLG1DQUFtQyxtQ0FBbUMscUJBQXFCLG1DQUFtQyxvQ0FBb0MsaUJBQWlCLHVCQUF1QixHQUFHLHVHQUF1Ryx1Q0FBdUMsdUNBQXVDLEdBQUcsMkJBQTJCLG1CQUFtQixHQUFHLDhCQUE4Qiw4QkFBOEIsb0JBQW9CLDhCQUE4QixtQkFBbUIsR0FBRyw4QkFBOEIsMENBQTBDLDBDQUEwQyx3REFBd0QsZ0RBQWdELHdDQUF3Qyx5RUFBeUUsR0FBRyw4QkFBOEIsOEJBQThCLGtCQUFrQixrQkFBa0IsZ0NBQWdDLGlDQUFpQyxvQkFBb0Isc0JBQXNCLDZCQUE2QiwrQkFBK0Isa0RBQWtELEdBQUcsOEJBQThCLDhCQUE4QixrQkFBa0Isa0JBQWtCLEdBQUcsNEJBQTRCLDhCQUE4QixrQkFBa0Isa0JBQWtCLG1DQUFtQyxvQ0FBb0MsMEJBQTBCLDRCQUE0QiwrQ0FBK0MsR0FBRzs7QUFFL3dGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGlCQUFpQjtBQUNqQztBQUNBO0FBQ0Esd0NBQXdDLGdCQUFnQjtBQUN4RCxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGlCQUFpQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksb0JBQW9CO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQixtQkFBbUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHNCQUFzQjtBQUN0QztBQUNBO0FBQ0Esa0JBQWtCLDJCQUEyQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLG1CQUFtQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiwyQkFBMkI7QUFDNUM7QUFDQTtBQUNBLFFBQVEsdUJBQXVCO0FBQy9CO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxpQkFBaUIsdUJBQXVCO0FBQ3hDO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsaUJBQWlCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQSxnQ0FBZ0Msc0JBQXNCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7O0FBRUEsNkJBQTZCLG1CQUFtQjs7QUFFaEQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7O0FDclBBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDOzs7Ozs7Ozs7QUNwQkE7Ozs7OztBQUVBSyxPQUFPQyxPQUFQLDBCIiwiZmlsZSI6Im1vZGFsRmFjdG9yeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwibW9kYWxGYWN0b3J5XCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIm1vZGFsRmFjdG9yeVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJtb2RhbEZhY3RvcnlcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gOCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMDk2OTg5YzAwYzlhMGUyM2ZjMDciLCJpbXBvcnQgeyBkaXZFbCwgaGVhZGVyRWwsIHNlY3Rpb25FbCwgZm9vdGVyRWwsIGJ1dHRvbkVsIH0gZnJvbSAnLi9lbCdcblxuaW1wb3J0IGNzc1N0eWxlcyBmcm9tICcuL3N0eWxlLmNzcydcblxuY29uc3QgbW9kYWxGYWN0b3J5ID0gKG9wdGlvbnMgPSB7fSkgPT4ge1xuICBjb25zdCB7IHN0eWxlcyA9IHt9IH0gPSBvcHRpb25zXG5cbiAgLyoqXG4gICAqIE1vZGFsIHN0cnVjdHVyZSA9XG4gICAqICAgIGRpdi5tb2RhbENvbnRhaW5lclxuICAgKiAgICAgICAgZGl2Lm1vZGFsT3ZlcmxheVxuICAgKiAgICAgICAgZGl2Lm1vZGFsQ29udGVudFxuICAgKiAgICAgICAgICAgIGhlYWRlci5tb2RhbEhlYWRlclxuICAgKiAgICAgICAgICAgIHNlY3Rpb24ubW9kYWxCb2R5XG4gICAqICAgICAgICAgICAgZm9vdGVyLm1vZGFsRm9vdGVyXG4gICAqICAgICAgICBidXR0b24ubW9kYWxDbG9zZVxuICAgKi9cbiAgY29uc3QgbW9kYWwgPSBkaXZFbCh7XG4gICAgY2xhc3NlczogYCR7Y3NzU3R5bGVzLm1vZGFsQ29udGFpbmVyfSAke2Nzc1N0eWxlcy5tb2RhbENvbnRhaW5lckRlZmF1bHRzfWAsXG4gICAgc3R5bGVzOiBzdHlsZXMubW9kYWwsXG4gIH0pXG5cbiAgY29uc3QgbW9kYWxPdmVybGF5ID0gZGl2RWwoe1xuICAgIGNsYXNzZXM6IGAke2Nzc1N0eWxlcy5tb2RhbE92ZXJsYXl9ICR7Y3NzU3R5bGVzLm1vZGFsT3ZlcmxheURlZmF1bHRzfWAsXG4gICAgc3R5bGVzOiBzdHlsZXMubW9kYWxPdmVybGF5LFxuICB9KVxuICBtb2RhbE92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBtb2RhbC5oaWRlKCkpXG5cbiAgY29uc3QgbW9kYWxDb250ZW50ID0gZGl2RWwoe1xuICAgIGNsYXNzZXM6IGAke2Nzc1N0eWxlcy5tb2RhbENvbnRlbnR9ICR7Y3NzU3R5bGVzLm1vZGFsQ29udGVudERlZmF1bHRzfWAsXG4gICAgc3R5bGVzOiBzdHlsZXMubW9kYWxDb250ZW50LFxuICB9KVxuXG4gIGlmIChvcHRpb25zLmhlYWRlcikge1xuICAgIGNvbnN0IG1vZGFsSGVhZGVyID0gaGVhZGVyRWwoe1xuICAgICAgY2xhc3NlczogYCR7Y3NzU3R5bGVzLm1vZGFsaGVhZGVyfSAke2Nzc1N0eWxlcy5tb2RhbEhlYWRlckRlZmF1bHRzfWAsXG4gICAgICBzdHlsZXM6IHN0eWxlcy5tb2RhbEhlYWRlcixcbiAgICB9KVxuICAgIG1vZGFsSGVhZGVyLmlubmVySFRNTCA9IG9wdGlvbnMuaGVhZGVyXG4gICAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKG1vZGFsSGVhZGVyKVxuICB9XG5cbiAgY29uc3QgbW9kYWxCb2R5ID0gc2VjdGlvbkVsKHtcbiAgICBjbGFzc2VzOiBgJHtjc3NTdHlsZXMubW9kYWxCb2R5fSAke2Nzc1N0eWxlcy5tb2RhbEJvZHlEZWZhdWx0c31gLFxuICAgIHN0eWxlczogc3R5bGVzLm1vZGFsQm9keSxcbiAgfSlcbiAgbW9kYWxCb2R5LmlubmVySFRNTCA9IG9wdGlvbnMuYm9keSB8fCAnJ1xuICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQobW9kYWxCb2R5KVxuXG4gIGlmIChvcHRpb25zLmZvb3Rlcikge1xuICAgIGNvbnN0IG1vZGFsRm9vdGVyID0gZm9vdGVyRWwoe1xuICAgICAgY2xhc3NlczogYCR7Y3NzU3R5bGVzLm1vZGFsRm9vdGVyfSAke2Nzc1N0eWxlcy5tb2RhbEZvb3RlckRlZmF1bHRzfWAsXG4gICAgICBzdHlsZXM6IHN0eWxlcy5tb2RhbEZvb3RlcixcbiAgICB9KVxuICAgIG1vZGFsRm9vdGVyLmlubmVySFRNTCA9IG9wdGlvbnMuZm9vdGVyXG4gICAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKG1vZGFsRm9vdGVyKVxuICB9XG5cbiAgY29uc3QgbW9kYWxDbG9zZSA9IGJ1dHRvbkVsKHtcbiAgICBjbGFzc2VzOiBgJHtjc3NTdHlsZXMubW9kYWxDbG9zZX0gJHtjc3NTdHlsZXMubW9kYWxDbG9zZURlZmF1bHRzfWAsXG4gICAgc3R5bGVzOiBzdHlsZXMubW9kYWxDbG9zZSxcbiAgfSlcbiAgbW9kYWxDbG9zZS50ZXh0Q29udGVudCA9ICdcXHUyNzE1J1xuICBtb2RhbENsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gbW9kYWwuaGlkZSgpKVxuXG5cbiAgbW9kYWwuYXBwZW5kQ2hpbGQobW9kYWxPdmVybGF5KVxuICBtb2RhbC5hcHBlbmRDaGlsZChtb2RhbENvbnRlbnQpXG4gIG1vZGFsLmFwcGVuZENoaWxkKG1vZGFsQ2xvc2UpXG5cbiAgY29uc3QgdHJhbnNpdGlvbkVuZEhhbmRsZXIgPSAoKSA9PiB7XG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgIG1vZGFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCB0cmFuc2l0aW9uRW5kSGFuZGxlcilcbiAgfVxuXG4gIG1vZGFsLnNob3cgPSAoKSA9PiB7XG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xuICAgIHNldFRpbWVvdXQoKCkgPT4gbW9kYWwuY2xhc3NMaXN0LmFkZChjc3NTdHlsZXMubW9kYWxTaG93KSwgMjApXG4gIH1cblxuICBtb2RhbC5oaWRlID0gKCkgPT4ge1xuICAgIG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCB0cmFuc2l0aW9uRW5kSGFuZGxlcilcbiAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKGNzc1N0eWxlcy5tb2RhbFNob3cpXG4gIH1cblxuICByZXR1cm4gbW9kYWxcbn1cblxuZXhwb3J0IGRlZmF1bHQgbW9kYWxGYWN0b3J5XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbGliL21vZGFsRmFjdG9yeS5qcyIsIi8qKlxuICogQG1vZHVsZVxuKi9cbmNvbnN0IGRhc2hlcml6ZSA9IChzdHIgPSAnJykgPT4gc3RyLnJlcGxhY2UoL1tBLVpdL2csIChjLCBpKSA9PiAoaSAhPT0gMCA/ICctJyA6ICcnKSArIGMudG9Mb3dlckNhc2UoKSlcblxuLyoqXG4gKiBDb252ZXJ0cyB0aGUgY2FtZWxDYXNlZC9DYW1lbENhc2VkIHN0cmluZyB0aGF0IGlzIHBhc3NlZCBpbiB0byBhIGRhc2gnZWRcbiAqIHN0cmluZy5cbiAqIFRoaXMgaXMgaGFuZHkgdG8gY29udmVydCBKYXZhU2NyaXB0IG9iamVjdCBrZXlzIGFuZCB3ZSB1c2UgaXQgdG8gY29udmVydFxuICogb2JqZWN0IHN0eWxlcyB0byBjc3Mgc3R5bGVzLCBlLmcuIGJvcmRlcldpZHRoIGJlY29tZXMgJ2JvcmRlci13aWR0aCdcbiAqXG4gKiBAYXV0aG9yIE1hcmsgVmlscm9reCA8bWFya0B2aWxyb2t4LmNvbT5cbiAqXG4gKiBAZXhhbXBsZVxuICogIGltcG9ydCBkYXNoZXJpemUgZnJvbSAnLi9saWIvZGFzaGVyaXplJ1xuICpcbiAqIGNvbnNvbGUubG9nKGRhc2hlcml6ZSgnY2FtZWxDYXNlJykpIC8vJ2NhbWVsLWNhc2UnXG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIC0gY2FtZWxDYXNlZCBzdHJpbmcgeW91IHdvdWxkIGxpa2UgdG8gY29udmVydFxuICogQHJldHVybnMge3N0cmluZ30gZGFzaGVyaXplZCBzdHJpbmdcbiAqXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGRhc2hlcml6ZVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xpYi9kYXNoZXJpemUuanMiLCJpbXBvcnQgc3R5bGVPYmplY3RTdHJpbmcgZnJvbSAnLi9zdHlsZU9iamVjdFN0cmluZydcblxuLyoqXG4gKiBAbW9kdWxlXG4qL1xuXG4vKipcbiAqIENvbnZlbmllbmNlIG1ldGhvZCB0aGF0IGFsbG93cyB5b3UgdG8gY3JlYXRlIGEgRE9NIGVsZW1lbnQgYW5kIGFzc2lnbiBhbiBpZCxcbiAqIGNsYXNzZXMgKHNwYWNlIHNlcGFyYXRlZCBzdHJpbmcpIGFuZCBzdHlsZXMgdG8gaXQuXG4gKlxuICogQGF1dGhvciBNYXJrIFZpbHJva3ggPG1hcmtAdmlscm9reC5jb20+XG4gKlxuICogQGV4YW1wbGVcbiAqICBpbXBvcnQgZWwgZnJvbSAnLi9saWIvZWwnXG4gKlxuICogY29uc3QgZGl2RWwgPSBlbCgnZGl2Jywge1xuICogICBjbGFzc2VzOiAnbXlDbHMxIG15Q2xzMicsXG4gKiAgIGlkOiAnbXlEaXYnLFxuICogICBzdHlsZXM6IHtcbiAqICAgICBtb2RhbE92ZXJsYXk6IHsgYmFja2dyb3VuZENvbG9yOiAncmVkJyB9XG4gKiAgIH1cbiAqIH0pXG4gKiAvLyBBbHNvIGhhcyBjb252ZW5pZW5jZSBtZXRob2RzIChubyBuZWVkIHRvIHNwZWNpZnkgdHlwZSwgb25seSBvcHRpb25zKTpcbiAqIC8vIGltcG9ydCB7IGRpdkVsIH0gZnJvbSAnLi9saWIvZWwnXG4gKiAvLyBjb25zdCBkaXZFbCA9IGVsRGl2KHt9KVxuICpcbiAqIEBmdW5jdGlvblxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgLSBhIHN0cmluZyB0aGF0IHJlcHJlc2VudHMgdGhlIHR5cGUgb2YgRE9NIGVsZW1lbnQgeW91XG4gKiB3YW50IHRvIGNyZWF0ZVxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBBbiBvYmplY3QgdGhhdCBjb250YWlucyBjc3Mgc3R5bGVzXG4gKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5jbGFzc2VzIC0gQSBzcGFjZSBzZXBlcmF0ZWQgbGlzdCBvZiBjbGFzc2VzXG4gKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5pZCAtIGFuIGlkZW50aWZpZXJcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zLnN0eWxlcyAtIGFuIG9iamVjdCB0aGF0IGNvbnRhaW5zIGFsbCB0aGUgc3R5bGVzIHlvdVxuICogd2FudCB0byBhcHBseSB0byB0aGUgRE9NIGVsZW1lbnQgKGFuZCBvdmVycmlkZSB0aGUgY2xhc3Mtc3R5bGVzIHdpdGgpXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucy5zdHlsZXMubW9kYWxDb250YWluZXIgLSBzdHlsZXMgZm9yIHRoZSBjb250YWluZXJcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zLnN0eWxlcy5tb2RhbE92ZXJsYXkgLSBzdHlsZXMgZm9yIHRoZSBvdmVybGF5XG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucy5zdHlsZXMubW9kYWxDbG9zZSAtIHN0eWxlcyBmb3IgdGhlIGNsb3NlIGNyb3NzL2J1dHRvblxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMuc3R5bGVzLm1vZGFsQ29udGVudCAtIHN0eWxlcyBmb3IgdGhlIGNvbnRlbnRcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zLnN0eWxlcy5tb2RhbEZvb3RlciAtIHN0eWxlcyBmb3IgdGhlIGZvb3RlclxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMuc3R5bGVzLm1vZGFsQm9keSAtIHN0eWxlcyBmb3IgdGhlIGJvZHlcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zLnN0eWxlcy5tb2RhbEhlYWRlciAtIHN0eWxlcyBmb3IgdGhlIGhlYWRlclxuICogQHJldHVybnMge29iamVjdH0gdGhlIERPTSBvYmplY3RcbiAqXG4gKi9cbmNvbnN0IGVsID0gKHR5cGUsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKVxuXG4gIGlmIChvcHRpb25zLmNsYXNzZXMpIGVsZW1lbnQuY2xhc3NOYW1lID0gb3B0aW9ucy5jbGFzc2VzXG4gIGlmIChvcHRpb25zLmlkKSBlbGVtZW50LmlkID0gb3B0aW9ucy5pZFxuICBpZiAob3B0aW9ucy5zdHlsZXMpIGVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT2JqZWN0U3RyaW5nKG9wdGlvbnMuc3R5bGVzKVxuXG4gIHJldHVybiBlbGVtZW50XG59XG5cbmV4cG9ydCBkZWZhdWx0IGVsXG5cbi8qKlxuICogU3ludGFjdGljYWwgU3VnYXIgbWV0aG9kIGZvciBlbCB0byBjcmVhdGUgYSA8ZGl2PiBET00gZWxlbWVudCwgd29ya3NcbiAqIGV4YWN0bHkgdGhlIHNhbWUgZXhjZXB0IHlvdSBkb24ndCBoYXZlIHRvIHBhc3MgYSB0eXBlLlxuICovXG5leHBvcnQgY29uc3QgZGl2RWwgPSBvcHRpb25zID0+IGVsKCdkaXYnLCBvcHRpb25zKVxuLyoqXG4gKiBTeW50YWN0aWNhbCBTdWdhciBtZXRob2QgZm9yIGVsIHRvIGNyZWF0ZSBhIDxidXR0b24+IERPTSBlbGVtZW50LCB3b3Jrc1xuICogZXhhY3RseSB0aGUgc2FtZSBleGNlcHQgeW91IGRvbid0IGhhdmUgdG8gcGFzcyBhIHR5cGUuXG4gKi9cbmV4cG9ydCBjb25zdCBidXR0b25FbCA9IG9wdGlvbnMgPT4gZWwoJ2J1dHRvbicsIG9wdGlvbnMpXG4vKipcbiAqIFN5bnRhY3RpY2FsIFN1Z2FyIG1ldGhvZCBmb3IgZWwgdG8gY3JlYXRlIGEgPHNlY3Rpb24+IERPTSBlbGVtZW50LCB3b3Jrc1xuICogZXhhY3RseSB0aGUgc2FtZSBleGNlcHQgeW91IGRvbid0IGhhdmUgdG8gcGFzcyBhIHR5cGUuXG4gKi9cbmV4cG9ydCBjb25zdCBzZWN0aW9uRWwgPSBvcHRpb25zID0+IGVsKCdzZWN0aW9uJywgb3B0aW9ucylcbi8qKlxuICogU3ludGFjdGljYWwgU3VnYXIgbWV0aG9kIGZvciBlbCB0byBjcmVhdGUgYSA8aGVhZGVyPiBET00gZWxlbWVudCwgd29ya3NcbiAqIGV4YWN0bHkgdGhlIHNhbWUgZXhjZXB0IHlvdSBkb24ndCBoYXZlIHRvIHBhc3MgYSB0eXBlLlxuICovXG5leHBvcnQgY29uc3QgaGVhZGVyRWwgPSBvcHRpb25zID0+IGVsKCdoZWFkZXInLCBvcHRpb25zKVxuLyoqXG4gKiBTeW50YWN0aWNhbCBTdWdhciBtZXRob2QgZm9yIGVsIHRvIGNyZWF0ZSBhIDxmb290ZXI+IERPTSBlbGVtZW50LCB3b3Jrc1xuICogZXhhY3RseSB0aGUgc2FtZSBleGNlcHQgeW91IGRvbid0IGhhdmUgdG8gcGFzcyBhIHR5cGUuXG4gKi9cbmV4cG9ydCBjb25zdCBmb290ZXJFbCA9IG9wdGlvbnMgPT4gZWwoJ2Zvb3RlcicsIG9wdGlvbnMpXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbGliL2VsLmpzIiwiaW1wb3J0IGRhc2hlcml6ZSBmcm9tICcuL2Rhc2hlcml6ZSdcblxuLyoqXG4gKiBAbW9kdWxlXG4qL1xuY29uc3Qgc3R5bGVPYmplY3RTdHJpbmcgPSAoc3R5bGUgPSB7fSkgPT4gT2JqZWN0LmtleXMoc3R5bGUpLnJlZHVjZSgoc3RyLCBrZXkpID0+IGAke3N0cn0ke2Rhc2hlcml6ZShrZXkpfTogJHtzdHlsZVtrZXldfTsgYCwgJycpXG5cbi8qKlxuICogQ29udmVydHMgYW4gb2JqZWN0IHRoYXQgY29udGFpbnMgQ1NTIHN0eWxlcyBpbnRvIGEgc3RyaW5nLlxuICogUmV0dXJucyBhIHN0cmluZyBvZiBzZW1pLWNvbG9uLXNlcGVyYXRlZCBjc3MgdGhhdCBjYW4gYmUgZWFzaWx5IGFzc2lnbmVkIHRvIHRoZVxuICogY3NzVGV4dCBwcm9wb3J0eSBvZiBhIERPTSBlbGVtZW50XG4gKlxuICogQGF1dGhvciBNYXJrIFZpbHJva3ggPG1hcmtAdmlscm9reC5jb20+XG4gKlxuICogQGV4YW1wbGVcbiAqICBpbXBvcnQgc3R5bGUyc3RyIGZyb20gJy4vbGliL3N0eWxlT2JqZWN0U3RyaW5nJ1xuICpcbiAqIGNvbnNvbGUubG9nKHN0eWxlMnN0cih7XG4gKiAgIGJhY2tncm91bmRDb2xvcjogJyNkZGRkZGQnLFxuICogICBib3JkZXJUb3BMZWZ0UmFkaXVzOiAnM3B4JyxcbiAqIH0pIC8vICdiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkZGRkOyBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzcHg7ICdcbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBwYXJhbSB7b2JqZWN0fSBzdHlsZSAtIEFuIG9iamVjdCB0aGF0IGNvbnRhaW5zIGNzcyBzdHlsZXNcbiAqIEByZXR1cm5zIHtzdHJpbmd9IGEgc3RyaW5nIHRoYXQgY29udGFpbnMgYSBzZW1pLWNvbG9uLXNlcGVyYXRlZCBsaXN0IG9mIGNzcyBzdHlsZXNcbiAqXG4gKi9cbmV4cG9ydCBkZWZhdWx0IHN0eWxlT2JqZWN0U3RyaW5nXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbGliL3N0eWxlT2JqZWN0U3RyaW5nLmpzIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLlBXOFM3ZWc3a3pDbl82ckNabUdCRiB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB6LWluZGV4OiAxO1xcbiAgb3BhY2l0eTogMDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgLjE1cyBlYXNlLW91dDtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgLjE1cyBlYXNlLW91dDtcXG59XFxuXFxuLlBXOFM3ZWc3a3pDbl82ckNabUdCRi5EcTRvakptaHFycUpEbS1JRmhHMS0ge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLl8xekl2Tk9RSDZFaWZYNE5KUHAwMm5kIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBib3R0b206IDA7XFxuICByaWdodDogMDtcXG59XFxuXFxuLldBdnVPdzVzYXhKMFVVQWJCTDlCdCB7XFxuICBmb250LXNpemU6IDMycHg7XFxuICBmb250LXNpemU6IDJyZW07XFxuICB3aWR0aDogNjRweDtcXG4gIHdpZHRoOiA0cmVtO1xcbiAgaGVpZ2h0OiA2NHB4O1xcbiAgaGVpZ2h0OiA0cmVtO1xcbiAgcGFkZGluZzogMTZweDtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDk5OTk5cHg7XFxufVxcblxcbi5fMlI5VnhnTTJzc1ZZM3liZlBPWnlsYSB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XFxuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMnJlbSk7XFxuICAvKm1heC13aWR0aDogY2FsYygxMDB2dyAtIDJyZW0pOyovXFxuICB3aWR0aDogNTAlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uRHE0b2pKbWhxcnFKRG0tSUZoRzEtIC5fMlI5VnhnTTJzc1ZZM3liZlBPWnlsYSxcXG4uRHE0b2pKbWhxcnFKRG0tSUZoRzEtIC5fMUl6QnROQXdBUnZhVDdhMW05dHZfXyB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcXG59XFxuXFxuLkNUZUROcUhjcVF3VGQ0amhiX0QtIHtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4uXzEweEVlbTE4RjZEMVJnU09fSkpzU3Yge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcXG4gIG9wYWNpdHk6IDAuNzVcXG59XFxuXFxuLl8zWEljZnBMY1hVSERFUzZWeEo2SFNmIHtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbn1cXG5cXG4uXzFJekJ0TkF3QVJ2YVQ3YTFtOXR2X18ge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIC4xNXMgZWFzZS1vdXQ7XFxuICB0cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAuMTVzIGVhc2Utb3V0O1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4xNXMgZWFzZS1vdXQ7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjE1cyBlYXNlLW91dCwgLXdlYmtpdC10cmFuc2Zvcm0gLjE1cyBlYXNlLW91dDtcXG59XFxuXFxuLl8zZzNYMW9falA1a1hrejdCX0JuR3Q2IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQ7XFxuICBwYWRkaW5nOiAxNnB4O1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcXG4gIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogcmdiYSgxMDIsIDEwMiwgMTAyLCAwLjQpO1xcbn1cXG5cXG4uXzNnVGJXZkFSR2RlLW1QdTNaZHdsb1Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gIHBhZGRpbmc6IDE2cHg7XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4uZnZ6aUlTMG5PMk1zQ3FPb0d4MFhFIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQ7XFxuICBwYWRkaW5nOiAxNnB4O1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XFxuICBib3JkZXItdG9wLXdpZHRoOiAxcHg7XFxuICBib3JkZXItdG9wLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci10b3AtY29sb3I6IHJnYmEoMTAyLCAxMDIsIDEwMiwgMC40KTtcXG59XFxuXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwibW9kYWxDb250YWluZXJcIjogXCJQVzhTN2VnN2t6Q25fNnJDWm1HQkZcIixcblx0XCJtb2RhbFNob3dcIjogXCJEcTRvakptaHFycUpEbS1JRmhHMS1cIixcblx0XCJtb2RhbE92ZXJsYXlcIjogXCJfMXpJdk5PUUg2RWlmWDROSlBwMDJuZFwiLFxuXHRcIm1vZGFsQ2xvc2VcIjogXCJXQXZ1T3c1c2F4SjBVVUFiQkw5QnRcIixcblx0XCJtb2RhbENvbnRlbnRcIjogXCJfMlI5VnhnTTJzc1ZZM3liZlBPWnlsYVwiLFxuXHRcIm1vZGFsQ29udGVudERlZmF1bHRzXCI6IFwiXzFJekJ0TkF3QVJ2YVQ3YTFtOXR2X19cIixcblx0XCJtb2RhbEJvZHlcIjogXCJDVGVETnFIY3FRd1RkNGpoYl9ELVwiLFxuXHRcIm1vZGFsT3ZlcmxheURlZmF1bHRzXCI6IFwiXzEweEVlbTE4RjZEMVJnU09fSkpzU3ZcIixcblx0XCJtb2RhbENsb3NlRGVmYXVsdHNcIjogXCJfM1hJY2ZwTGNYVUhERVM2VnhKNkhTZlwiLFxuXHRcIm1vZGFsSGVhZGVyRGVmYXVsdHNcIjogXCJfM2czWDFvX2pQNWtYa3o3Ql9Cbkd0NlwiLFxuXHRcIm1vZGFsQm9keURlZmF1bHRzXCI6IFwiXzNnVGJXZkFSR2RlLW1QdTNaZHdsb1RcIixcblx0XCJtb2RhbEZvb3RlckRlZmF1bHRzXCI6IFwiZnZ6aUlTMG5PMk1zQ3FPb0d4MFhFXCJcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/e1wibW9kdWxlc1wiOnRydWV9IS4vfi9wb3N0Y3NzLWxvYWRlciEuL3NyYy9saWIvc3R5bGUuY3NzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcblx0dmFyIGxpc3QgPSBbXTtcblxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcblx0XHR2YXIgcmVzdWx0ID0gW107XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gdGhpc1tpXTtcblx0XHRcdGlmKGl0ZW1bMl0pIHtcblx0XHRcdFx0cmVzdWx0LnB1c2goXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBpdGVtWzFdICsgXCJ9XCIpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmVzdWx0LnB1c2goaXRlbVsxXSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiByZXN1bHQuam9pbihcIlwiKTtcblx0fTtcblxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuXHRcdH1cblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdHJldHVybiBsaXN0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xudmFyIHN0eWxlc0luRG9tID0ge30sXG5cdG1lbW9pemUgPSBmdW5jdGlvbihmbikge1xuXHRcdHZhciBtZW1vO1xuXHRcdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdFx0cmV0dXJuIG1lbW87XG5cdFx0fTtcblx0fSxcblx0aXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIC9tc2llIFs2LTldXFxiLy50ZXN0KHNlbGYubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKTtcblx0fSksXG5cdGdldEhlYWRFbGVtZW50ID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdO1xuXHR9KSxcblx0c2luZ2xldG9uRWxlbWVudCA9IG51bGwsXG5cdHNpbmdsZXRvbkNvdW50ZXIgPSAwLFxuXHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIDxoZWFkPi5cblx0aWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcInVuZGVmaW5lZFwiKSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QpO1xuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspXG5cdFx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oKTtcblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyhsaXN0KSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKVxuXHRcdFx0c3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlXG5cdFx0XHRuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCkge1xuXHR2YXIgaGVhZCA9IGdldEhlYWRFbGVtZW50KCk7XG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wW3N0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0aGVhZC5pbnNlcnRCZWZvcmUoc3R5bGVFbGVtZW50LCBoZWFkLmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZihsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0aGVhZC5pbnNlcnRCZWZvcmUoc3R5bGVFbGVtZW50LCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcblx0XHR9XG5cdFx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AucHVzaChzdHlsZUVsZW1lbnQpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHRoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcuIE11c3QgYmUgJ3RvcCcgb3IgJ2JvdHRvbScuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcblx0c3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcblx0dmFyIGlkeCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGVFbGVtZW50KTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuXHR2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXHRzdHlsZUVsZW1lbnQudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCk7XG5cdHJldHVybiBzdHlsZUVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpIHtcblx0dmFyIGxpbmtFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cdGxpbmtFbGVtZW50LnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGlua0VsZW1lbnQpO1xuXHRyZXR1cm4gbGlua0VsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVFbGVtZW50LCB1cGRhdGUsIHJlbW92ZTtcblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblx0XHRzdHlsZUVsZW1lbnQgPSBzaW5nbGV0b25FbGVtZW50IHx8IChzaW5nbGV0b25FbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cdH0gZWxzZSBpZihvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdHN0eWxlRWxlbWVudCA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG5cdFx0XHRpZihzdHlsZUVsZW1lbnQuaHJlZilcblx0XHRcdFx0VVJMLnJldm9rZU9iamVjdFVSTChzdHlsZUVsZW1lbnQuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZUVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuXHRcdGlmKG5ld09iaikge1xuXHRcdFx0aWYobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKVxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlRWxlbWVudCwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGVFbGVtZW50LmNoaWxkTm9kZXM7XG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGVFbGVtZW50Lmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZUVsZW1lbnQsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuXHRcdH1cblx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayhsaW5rRWxlbWVudCwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHRpZihzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rRWxlbWVudC5ocmVmO1xuXG5cdGxpbmtFbGVtZW50LmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYylcblx0XHRVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS0xIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcyEuL3N0eWxlLmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLTEhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzIS4vc3R5bGUuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLTEhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzIS4vc3R5bGUuY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9saWIvc3R5bGUuY3NzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBtb2RhbEZhY3RvcnkgZnJvbSAnLi9saWIvbW9kYWxGYWN0b3J5J1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1vZGFsRmFjdG9yeVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==