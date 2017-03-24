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
 * Syntactical Sugar method for el to create a <div> DOM element, works exactly the same except you don't have to pass a type
 */

var divEl = exports.divEl = function divEl(options) {
  return el('div', options);
};
/**
 * Syntactical Sugar method for el to create a <button> DOM element, works exactly the same except you don't have to pass a type
 */
var buttonEl = exports.buttonEl = function buttonEl(options) {
  return el('button', options);
};
/**
 * Syntactical Sugar method for el to create a <section> DOM element, works exactly the same except you don't have to pass a type
 */
var sectionEl = exports.sectionEl = function sectionEl(options) {
  return el('section', options);
};
/**
 * Syntactical Sugar method for el to create a <header> DOM element, works exactly the same except you don't have to pass a type
 */
var headerEl = exports.headerEl = function headerEl(options) {
  return el('header', options);
};
/**
 * Syntactical Sugar method for el to create a <footer> DOM element, works exactly the same except you don't have to pass a type
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAwNzkzYzJiNTVlMGI1MWJiNGM5OCIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL21vZGFsRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL2Rhc2hlcml6ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL2VsLmpzIiwid2VicGFjazovLy8uL3NyYy9saWIvc3R5bGVPYmplY3RTdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9zdHlsZS5jc3M/YThlYSIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsibW9kYWxGYWN0b3J5Iiwib3B0aW9ucyIsInN0eWxlcyIsIm1vZGFsIiwiY2xhc3NlcyIsIm1vZGFsQ29udGFpbmVyIiwibW9kYWxDb250YWluZXJEZWZhdWx0cyIsIm1vZGFsT3ZlcmxheSIsIm1vZGFsT3ZlcmxheURlZmF1bHRzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhpZGUiLCJtb2RhbENvbnRlbnQiLCJtb2RhbENvbnRlbnREZWZhdWx0cyIsImhlYWRlciIsIm1vZGFsSGVhZGVyIiwibW9kYWxoZWFkZXIiLCJtb2RhbEhlYWRlckRlZmF1bHRzIiwiaW5uZXJIVE1MIiwiYXBwZW5kQ2hpbGQiLCJtb2RhbEJvZHkiLCJtb2RhbEJvZHlEZWZhdWx0cyIsImJvZHkiLCJmb290ZXIiLCJtb2RhbEZvb3RlciIsIm1vZGFsRm9vdGVyRGVmYXVsdHMiLCJtb2RhbENsb3NlIiwibW9kYWxDbG9zZURlZmF1bHRzIiwidGV4dENvbnRlbnQiLCJ0cmFuc2l0aW9uRW5kSGFuZGxlciIsInN0eWxlIiwiZGlzcGxheSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzaG93Iiwic2V0VGltZW91dCIsImNsYXNzTGlzdCIsImFkZCIsIm1vZGFsU2hvdyIsInJlbW92ZSIsImRhc2hlcml6ZSIsInN0ciIsInJlcGxhY2UiLCJjIiwiaSIsInRvTG93ZXJDYXNlIiwiZWwiLCJ0eXBlIiwiZWxlbWVudCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImlkIiwiY3NzVGV4dCIsImRpdkVsIiwiYnV0dG9uRWwiLCJzZWN0aW9uRWwiLCJoZWFkZXJFbCIsImZvb3RlckVsIiwic3R5bGVPYmplY3RTdHJpbmciLCJPYmplY3QiLCJrZXlzIiwicmVkdWNlIiwia2V5IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2hFQTs7QUFFQTs7Ozs7O0FBRUEsSUFBTUEsZUFBZSxTQUFmQSxZQUFlLEdBQWtCO0FBQUEsTUFBakJDLE9BQWlCLHVFQUFQLEVBQU87QUFBQSx3QkFDYkEsT0FEYSxDQUM3QkMsTUFENkI7QUFBQSxNQUM3QkEsTUFENkIsbUNB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QUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEOztBQUVBLDZCQUE2QixtQkFBbUI7O0FBRWhEOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7OztBQ3JQQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQzs7Ozs7Ozs7O0FDcEJBOzs7Ozs7QUFFQUssT0FBT0MsT0FBUCwwQiIsImZpbGUiOiJtb2RhbEZhY3RvcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIm1vZGFsRmFjdG9yeVwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJtb2RhbEZhY3RvcnlcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wibW9kYWxGYWN0b3J5XCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDA3OTNjMmI1NWUwYjUxYmI0Yzk4IiwiaW1wb3J0IHsgZGl2RWwsIGhlYWRlckVsLCBzZWN0aW9uRWwsIGZvb3RlckVsLCBidXR0b25FbCB9IGZyb20gJy4vZWwnXG5cbmltcG9ydCBjc3NTdHlsZXMgZnJvbSAnLi9zdHlsZS5jc3MnXG5cbmNvbnN0IG1vZGFsRmFjdG9yeSA9IChvcHRpb25zID0ge30pID0+IHtcbiAgY29uc3QgeyBzdHlsZXMgPSB7fSB9ID0gb3B0aW9uc1xuXG4gIC8qKlxuICAgKiBNb2RhbCBzdHJ1Y3R1cmUgPVxuICAgKiAgICBkaXYubW9kYWxDb250YWluZXJcbiAgICogICAgICAgIGRpdi5tb2RhbE92ZXJsYXlcbiAgICogICAgICAgIGRpdi5tb2RhbENvbnRlbnRcbiAgICogICAgICAgICAgICBoZWFkZXIubW9kYWxIZWFkZXJcbiAgICogICAgICAgICAgICBzZWN0aW9uLm1vZGFsQm9keVxuICAgKiAgICAgICAgICAgIGZvb3Rlci5tb2RhbEZvb3RlclxuICAgKiAgICAgICAgYnV0dG9uLm1vZGFsQ2xvc2VcbiAgICovXG4gIGNvbnN0IG1vZGFsID0gZGl2RWwoe1xuICAgIGNsYXNzZXM6IGAke2Nzc1N0eWxlcy5tb2RhbENvbnRhaW5lcn0gJHtjc3NTdHlsZXMubW9kYWxDb250YWluZXJEZWZhdWx0c31gLFxuICAgIHN0eWxlczogc3R5bGVzLm1vZGFsLFxuICB9KVxuXG4gIGNvbnN0IG1vZGFsT3ZlcmxheSA9IGRpdkVsKHtcbiAgICBjbGFzc2VzOiBgJHtjc3NTdHlsZXMubW9kYWxPdmVybGF5fSAke2Nzc1N0eWxlcy5tb2RhbE92ZXJsYXlEZWZhdWx0c31gLFxuICAgIHN0eWxlczogc3R5bGVzLm1vZGFsT3ZlcmxheSxcbiAgfSlcbiAgbW9kYWxPdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gbW9kYWwuaGlkZSgpKVxuXG4gIGNvbnN0IG1vZGFsQ29udGVudCA9IGRpdkVsKHtcbiAgICBjbGFzc2VzOiBgJHtjc3NTdHlsZXMubW9kYWxDb250ZW50fSAke2Nzc1N0eWxlcy5tb2RhbENvbnRlbnREZWZhdWx0c31gLFxuICAgIHN0eWxlczogc3R5bGVzLm1vZGFsQ29udGVudCxcbiAgfSlcblxuICBpZiAob3B0aW9ucy5oZWFkZXIpIHtcbiAgICBjb25zdCBtb2RhbEhlYWRlciA9IGhlYWRlckVsKHtcbiAgICAgIGNsYXNzZXM6IGAke2Nzc1N0eWxlcy5tb2RhbGhlYWRlcn0gJHtjc3NTdHlsZXMubW9kYWxIZWFkZXJEZWZhdWx0c31gLFxuICAgICAgc3R5bGVzOiBzdHlsZXMubW9kYWxIZWFkZXIsXG4gICAgfSlcbiAgICBtb2RhbEhlYWRlci5pbm5lckhUTUwgPSBvcHRpb25zLmhlYWRlclxuICAgIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChtb2RhbEhlYWRlcilcbiAgfVxuXG4gIGNvbnN0IG1vZGFsQm9keSA9IHNlY3Rpb25FbCh7XG4gICAgY2xhc3NlczogYCR7Y3NzU3R5bGVzLm1vZGFsQm9keX0gJHtjc3NTdHlsZXMubW9kYWxCb2R5RGVmYXVsdHN9YCxcbiAgICBzdHlsZXM6IHN0eWxlcy5tb2RhbEJvZHksXG4gIH0pXG4gIG1vZGFsQm9keS5pbm5lckhUTUwgPSBvcHRpb25zLmJvZHkgfHwgJydcbiAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKG1vZGFsQm9keSlcblxuICBpZiAob3B0aW9ucy5mb290ZXIpIHtcbiAgICBjb25zdCBtb2RhbEZvb3RlciA9IGZvb3RlckVsKHtcbiAgICAgIGNsYXNzZXM6IGAke2Nzc1N0eWxlcy5tb2RhbEZvb3Rlcn0gJHtjc3NTdHlsZXMubW9kYWxGb290ZXJEZWZhdWx0c31gLFxuICAgICAgc3R5bGVzOiBzdHlsZXMubW9kYWxGb290ZXIsXG4gICAgfSlcbiAgICBtb2RhbEZvb3Rlci5pbm5lckhUTUwgPSBvcHRpb25zLmZvb3RlclxuICAgIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChtb2RhbEZvb3RlcilcbiAgfVxuXG4gIGNvbnN0IG1vZGFsQ2xvc2UgPSBidXR0b25FbCh7XG4gICAgY2xhc3NlczogYCR7Y3NzU3R5bGVzLm1vZGFsQ2xvc2V9ICR7Y3NzU3R5bGVzLm1vZGFsQ2xvc2VEZWZhdWx0c31gLFxuICAgIHN0eWxlczogc3R5bGVzLm1vZGFsQ2xvc2UsXG4gIH0pXG4gIG1vZGFsQ2xvc2UudGV4dENvbnRlbnQgPSAnXFx1MjcxNSdcbiAgbW9kYWxDbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG1vZGFsLmhpZGUoKSlcblxuXG4gIG1vZGFsLmFwcGVuZENoaWxkKG1vZGFsT3ZlcmxheSlcbiAgbW9kYWwuYXBwZW5kQ2hpbGQobW9kYWxDb250ZW50KVxuICBtb2RhbC5hcHBlbmRDaGlsZChtb2RhbENsb3NlKVxuXG4gIGNvbnN0IHRyYW5zaXRpb25FbmRIYW5kbGVyID0gKCkgPT4ge1xuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICBtb2RhbC5yZW1vdmVFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgdHJhbnNpdGlvbkVuZEhhbmRsZXIpXG4gIH1cblxuICBtb2RhbC5zaG93ID0gKCkgPT4ge1xuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcbiAgICBzZXRUaW1lb3V0KCgpID0+IG1vZGFsLmNsYXNzTGlzdC5hZGQoY3NzU3R5bGVzLm1vZGFsU2hvdyksIDIwKVxuICB9XG5cbiAgbW9kYWwuaGlkZSA9ICgpID0+IHtcbiAgICBtb2RhbC5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgdHJhbnNpdGlvbkVuZEhhbmRsZXIpXG4gICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZShjc3NTdHlsZXMubW9kYWxTaG93KVxuICB9XG5cbiAgcmV0dXJuIG1vZGFsXG59XG5cbmV4cG9ydCBkZWZhdWx0IG1vZGFsRmFjdG9yeVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xpYi9tb2RhbEZhY3RvcnkuanMiLCIvKipcbiAqIEBtb2R1bGVcbiovXG5jb25zdCBkYXNoZXJpemUgPSAoc3RyID0gJycpID0+IHN0ci5yZXBsYWNlKC9bQS1aXS9nLCAoYywgaSkgPT4gKGkgIT09IDAgPyAnLScgOiAnJykgKyBjLnRvTG93ZXJDYXNlKCkpXG5cbi8qKlxuICogQ29udmVydHMgdGhlIGNhbWVsQ2FzZWQvQ2FtZWxDYXNlZCBzdHJpbmcgdGhhdCBpcyBwYXNzZWQgaW4gdG8gYSBkYXNoJ2VkXG4gKiBzdHJpbmcuXG4gKiBUaGlzIGlzIGhhbmR5IHRvIGNvbnZlcnQgSmF2YVNjcmlwdCBvYmplY3Qga2V5cyBhbmQgd2UgdXNlIGl0IHRvIGNvbnZlcnRcbiAqIG9iamVjdCBzdHlsZXMgdG8gY3NzIHN0eWxlcywgZS5nLiBib3JkZXJXaWR0aCBiZWNvbWVzICdib3JkZXItd2lkdGgnXG4gKlxuICogQGF1dGhvciBNYXJrIFZpbHJva3ggPG1hcmtAdmlscm9reC5jb20+XG4gKlxuICogQGV4YW1wbGVcbiAqICBpbXBvcnQgZGFzaGVyaXplIGZyb20gJy4vbGliL2Rhc2hlcml6ZSdcbiAqXG4gKiBjb25zb2xlLmxvZyhkYXNoZXJpemUoJ2NhbWVsQ2FzZScpKSAvLydjYW1lbC1jYXNlJ1xuICpcbiAqIEBmdW5jdGlvblxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciAtIGNhbWVsQ2FzZWQgc3RyaW5nIHlvdSB3b3VsZCBsaWtlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtzdHJpbmd9IGRhc2hlcml6ZWQgc3RyaW5nXG4gKlxuICovXG5leHBvcnQgZGVmYXVsdCBkYXNoZXJpemVcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9saWIvZGFzaGVyaXplLmpzIiwiaW1wb3J0IHN0eWxlT2JqZWN0U3RyaW5nIGZyb20gJy4vc3R5bGVPYmplY3RTdHJpbmcnXG5cbi8qKlxuICogQG1vZHVsZVxuKi9cblxuLyoqXG4gKiBDb252ZW5pZW5jZSBtZXRob2QgdGhhdCBhbGxvd3MgeW91IHRvIGNyZWF0ZSBhIERPTSBlbGVtZW50IGFuZCBhc3NpZ24gYW4gaWQsXG4gKiBjbGFzc2VzIChzcGFjZSBzZXBhcmF0ZWQgc3RyaW5nKSBhbmQgc3R5bGVzIHRvIGl0LlxuICpcbiAqIEBhdXRob3IgTWFyayBWaWxyb2t4IDxtYXJrQHZpbHJva3guY29tPlxuICpcbiAqIEBleGFtcGxlXG4gKiAgaW1wb3J0IGVsIGZyb20gJy4vbGliL2VsJ1xuICpcbiAqIGNvbnN0IGRpdkVsID0gZWwoJ2RpdicsIHtcbiAqICAgY2xhc3NlczogJ215Q2xzMSBteUNsczInLFxuICogICBpZDogJ215RGl2JyxcbiAqICAgc3R5bGVzOiB7XG4gKiAgICAgbW9kYWxPdmVybGF5OiB7IGJhY2tncm91bmRDb2xvcjogJ3JlZCcgfVxuICogICB9XG4gKiB9KVxuICogLy8gQWxzbyBoYXMgY29udmVuaWVuY2UgbWV0aG9kcyAobm8gbmVlZCB0byBzcGVjaWZ5IHR5cGUsIG9ubHkgb3B0aW9ucyk6XG4gKiAvLyBpbXBvcnQgeyBkaXZFbCB9IGZyb20gJy4vbGliL2VsJ1xuICogLy8gY29uc3QgZGl2RWwgPSBlbERpdih7fSlcbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIC0gYSBzdHJpbmcgdGhhdCByZXByZXNlbnRzIHRoZSB0eXBlIG9mIERPTSBlbGVtZW50IHlvdVxuICogd2FudCB0byBjcmVhdGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gQW4gb2JqZWN0IHRoYXQgY29udGFpbnMgY3NzIHN0eWxlc1xuICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuY2xhc3NlcyAtIEEgc3BhY2Ugc2VwZXJhdGVkIGxpc3Qgb2YgY2xhc3Nlc1xuICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuaWQgLSBhbiBpZGVudGlmaWVyXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucy5zdHlsZXMgLSBhbiBvYmplY3QgdGhhdCBjb250YWlucyBhbGwgdGhlIHN0eWxlcyB5b3VcbiAqIHdhbnQgdG8gYXBwbHkgdG8gdGhlIERPTSBlbGVtZW50IChhbmQgb3ZlcnJpZGUgdGhlIGNsYXNzLXN0eWxlcyB3aXRoKVxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMuc3R5bGVzLm1vZGFsQ29udGFpbmVyIC0gc3R5bGVzIGZvciB0aGUgY29udGFpbmVyXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucy5zdHlsZXMubW9kYWxPdmVybGF5IC0gc3R5bGVzIGZvciB0aGUgb3ZlcmxheVxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMuc3R5bGVzLm1vZGFsQ2xvc2UgLSBzdHlsZXMgZm9yIHRoZSBjbG9zZSBjcm9zcy9idXR0b25cbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zLnN0eWxlcy5tb2RhbENvbnRlbnQgLSBzdHlsZXMgZm9yIHRoZSBjb250ZW50XG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucy5zdHlsZXMubW9kYWxGb290ZXIgLSBzdHlsZXMgZm9yIHRoZSBmb290ZXJcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zLnN0eWxlcy5tb2RhbEJvZHkgLSBzdHlsZXMgZm9yIHRoZSBib2R5XG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucy5zdHlsZXMubW9kYWxIZWFkZXIgLSBzdHlsZXMgZm9yIHRoZSBoZWFkZXJcbiAqIEByZXR1cm5zIHtvYmplY3R9IHRoZSBET00gb2JqZWN0XG4gKlxuICovXG5jb25zdCBlbCA9ICh0eXBlLCBvcHRpb25zID0ge30pID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSlcblxuICBpZiAob3B0aW9ucy5jbGFzc2VzKSBlbGVtZW50LmNsYXNzTmFtZSA9IG9wdGlvbnMuY2xhc3Nlc1xuICBpZiAob3B0aW9ucy5pZCkgZWxlbWVudC5pZCA9IG9wdGlvbnMuaWRcbiAgaWYgKG9wdGlvbnMuc3R5bGVzKSBlbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9iamVjdFN0cmluZyhvcHRpb25zLnN0eWxlcylcblxuICByZXR1cm4gZWxlbWVudFxufVxuXG5leHBvcnQgZGVmYXVsdCBlbFxuXG4vKipcbiAqIFN5bnRhY3RpY2FsIFN1Z2FyIG1ldGhvZCBmb3IgZWwgdG8gY3JlYXRlIGEgPGRpdj4gRE9NIGVsZW1lbnQsIHdvcmtzIGV4YWN0bHkgdGhlIHNhbWUgZXhjZXB0IHlvdSBkb24ndCBoYXZlIHRvIHBhc3MgYSB0eXBlXG4gKi9cbmV4cG9ydCBjb25zdCBkaXZFbCA9IG9wdGlvbnMgPT4gZWwoJ2RpdicsIG9wdGlvbnMpXG4vKipcbiAqIFN5bnRhY3RpY2FsIFN1Z2FyIG1ldGhvZCBmb3IgZWwgdG8gY3JlYXRlIGEgPGJ1dHRvbj4gRE9NIGVsZW1lbnQsIHdvcmtzIGV4YWN0bHkgdGhlIHNhbWUgZXhjZXB0IHlvdSBkb24ndCBoYXZlIHRvIHBhc3MgYSB0eXBlXG4gKi9cbmV4cG9ydCBjb25zdCBidXR0b25FbCA9IG9wdGlvbnMgPT4gZWwoJ2J1dHRvbicsIG9wdGlvbnMpXG4vKipcbiAqIFN5bnRhY3RpY2FsIFN1Z2FyIG1ldGhvZCBmb3IgZWwgdG8gY3JlYXRlIGEgPHNlY3Rpb24+IERPTSBlbGVtZW50LCB3b3JrcyBleGFjdGx5IHRoZSBzYW1lIGV4Y2VwdCB5b3UgZG9uJ3QgaGF2ZSB0byBwYXNzIGEgdHlwZVxuICovXG5leHBvcnQgY29uc3Qgc2VjdGlvbkVsID0gb3B0aW9ucyA9PiBlbCgnc2VjdGlvbicsIG9wdGlvbnMpXG4vKipcbiAqIFN5bnRhY3RpY2FsIFN1Z2FyIG1ldGhvZCBmb3IgZWwgdG8gY3JlYXRlIGEgPGhlYWRlcj4gRE9NIGVsZW1lbnQsIHdvcmtzIGV4YWN0bHkgdGhlIHNhbWUgZXhjZXB0IHlvdSBkb24ndCBoYXZlIHRvIHBhc3MgYSB0eXBlXG4gKi9cbmV4cG9ydCBjb25zdCBoZWFkZXJFbCA9IG9wdGlvbnMgPT4gZWwoJ2hlYWRlcicsIG9wdGlvbnMpXG4vKipcbiAqIFN5bnRhY3RpY2FsIFN1Z2FyIG1ldGhvZCBmb3IgZWwgdG8gY3JlYXRlIGEgPGZvb3Rlcj4gRE9NIGVsZW1lbnQsIHdvcmtzIGV4YWN0bHkgdGhlIHNhbWUgZXhjZXB0IHlvdSBkb24ndCBoYXZlIHRvIHBhc3MgYSB0eXBlXG4gKi9cbmV4cG9ydCBjb25zdCBmb290ZXJFbCA9IG9wdGlvbnMgPT4gZWwoJ2Zvb3RlcicsIG9wdGlvbnMpXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbGliL2VsLmpzIiwiaW1wb3J0IGRhc2hlcml6ZSBmcm9tICcuL2Rhc2hlcml6ZSdcblxuLyoqXG4gKiBAbW9kdWxlXG4qL1xuY29uc3Qgc3R5bGVPYmplY3RTdHJpbmcgPSAoc3R5bGUgPSB7fSkgPT4gT2JqZWN0LmtleXMoc3R5bGUpLnJlZHVjZSgoc3RyLCBrZXkpID0+IGAke3N0cn0ke2Rhc2hlcml6ZShrZXkpfTogJHtzdHlsZVtrZXldfTsgYCwgJycpXG5cbi8qKlxuICogQ29udmVydHMgYW4gb2JqZWN0IHRoYXQgY29udGFpbnMgQ1NTIHN0eWxlcyBpbnRvIGEgc3RyaW5nLlxuICogUmV0dXJucyBhIHN0cmluZyBvZiBzZW1pLWNvbG9uLXNlcGVyYXRlZCBjc3MgdGhhdCBjYW4gYmUgZWFzaWx5IGFzc2lnbmVkIHRvIHRoZVxuICogY3NzVGV4dCBwcm9wb3J0eSBvZiBhIERPTSBlbGVtZW50XG4gKlxuICogQGF1dGhvciBNYXJrIFZpbHJva3ggPG1hcmtAdmlscm9reC5jb20+XG4gKlxuICogQGV4YW1wbGVcbiAqICBpbXBvcnQgc3R5bGUyc3RyIGZyb20gJy4vbGliL3N0eWxlT2JqZWN0U3RyaW5nJ1xuICpcbiAqIGNvbnNvbGUubG9nKHN0eWxlMnN0cih7XG4gKiAgIGJhY2tncm91bmRDb2xvcjogJyNkZGRkZGQnLFxuICogICBib3JkZXJUb3BMZWZ0UmFkaXVzOiAnM3B4JyxcbiAqIH0pIC8vICdiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkZGRkOyBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzcHg7ICdcbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBwYXJhbSB7b2JqZWN0fSBzdHlsZSAtIEFuIG9iamVjdCB0aGF0IGNvbnRhaW5zIGNzcyBzdHlsZXNcbiAqIEByZXR1cm5zIHtzdHJpbmd9IGEgc3RyaW5nIHRoYXQgY29udGFpbnMgYSBzZW1pLWNvbG9uLXNlcGVyYXRlZCBsaXN0IG9mIGNzcyBzdHlsZXNcbiAqXG4gKi9cbmV4cG9ydCBkZWZhdWx0IHN0eWxlT2JqZWN0U3RyaW5nXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbGliL3N0eWxlT2JqZWN0U3RyaW5nLmpzIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLlBXOFM3ZWc3a3pDbl82ckNabUdCRiB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB6LWluZGV4OiAxO1xcbiAgb3BhY2l0eTogMDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgLjE1cyBlYXNlLW91dDtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgLjE1cyBlYXNlLW91dDtcXG59XFxuXFxuLlBXOFM3ZWc3a3pDbl82ckNabUdCRi5EcTRvakptaHFycUpEbS1JRmhHMS0ge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLl8xekl2Tk9RSDZFaWZYNE5KUHAwMm5kIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBib3R0b206IDA7XFxuICByaWdodDogMDtcXG59XFxuXFxuLldBdnVPdzVzYXhKMFVVQWJCTDlCdCB7XFxuICBmb250LXNpemU6IDMycHg7XFxuICBmb250LXNpemU6IDJyZW07XFxuICB3aWR0aDogNjRweDtcXG4gIHdpZHRoOiA0cmVtO1xcbiAgaGVpZ2h0OiA2NHB4O1xcbiAgaGVpZ2h0OiA0cmVtO1xcbiAgcGFkZGluZzogMTZweDtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDk5OTk5cHg7XFxufVxcblxcbi5fMlI5VnhnTTJzc1ZZM3liZlBPWnlsYSB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XFxuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMnJlbSk7XFxuICAvKm1heC13aWR0aDogY2FsYygxMDB2dyAtIDJyZW0pOyovXFxuICB3aWR0aDogNTAlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uRHE0b2pKbWhxcnFKRG0tSUZoRzEtIC5fMlI5VnhnTTJzc1ZZM3liZlBPWnlsYSxcXG4uRHE0b2pKbWhxcnFKRG0tSUZoRzEtIC5fMUl6QnROQXdBUnZhVDdhMW05dHZfXyB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcXG59XFxuXFxuLkNUZUROcUhjcVF3VGQ0amhiX0QtIHtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4uXzEweEVlbTE4RjZEMVJnU09fSkpzU3Yge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcXG4gIG9wYWNpdHk6IDAuNzVcXG59XFxuXFxuLl8zWEljZnBMY1hVSERFUzZWeEo2SFNmIHtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbn1cXG5cXG4uXzFJekJ0TkF3QVJ2YVQ3YTFtOXR2X18ge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIC4xNXMgZWFzZS1vdXQ7XFxuICB0cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAuMTVzIGVhc2Utb3V0O1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4xNXMgZWFzZS1vdXQ7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjE1cyBlYXNlLW91dCwgLXdlYmtpdC10cmFuc2Zvcm0gLjE1cyBlYXNlLW91dDtcXG59XFxuXFxuLl8zZzNYMW9falA1a1hrejdCX0JuR3Q2IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQ7XFxuICBwYWRkaW5nOiAxNnB4O1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcXG4gIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogcmdiYSgxMDIsIDEwMiwgMTAyLCAwLjQpO1xcbn1cXG5cXG4uXzNnVGJXZkFSR2RlLW1QdTNaZHdsb1Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gIHBhZGRpbmc6IDE2cHg7XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4uZnZ6aUlTMG5PMk1zQ3FPb0d4MFhFIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQ7XFxuICBwYWRkaW5nOiAxNnB4O1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XFxuICBib3JkZXItdG9wLXdpZHRoOiAxcHg7XFxuICBib3JkZXItdG9wLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci10b3AtY29sb3I6IHJnYmEoMTAyLCAxMDIsIDEwMiwgMC40KTtcXG59XFxuXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwibW9kYWxDb250YWluZXJcIjogXCJQVzhTN2VnN2t6Q25fNnJDWm1HQkZcIixcblx0XCJtb2RhbFNob3dcIjogXCJEcTRvakptaHFycUpEbS1JRmhHMS1cIixcblx0XCJtb2RhbE92ZXJsYXlcIjogXCJfMXpJdk5PUUg2RWlmWDROSlBwMDJuZFwiLFxuXHRcIm1vZGFsQ2xvc2VcIjogXCJXQXZ1T3c1c2F4SjBVVUFiQkw5QnRcIixcblx0XCJtb2RhbENvbnRlbnRcIjogXCJfMlI5VnhnTTJzc1ZZM3liZlBPWnlsYVwiLFxuXHRcIm1vZGFsQ29udGVudERlZmF1bHRzXCI6IFwiXzFJekJ0TkF3QVJ2YVQ3YTFtOXR2X19cIixcblx0XCJtb2RhbEJvZHlcIjogXCJDVGVETnFIY3FRd1RkNGpoYl9ELVwiLFxuXHRcIm1vZGFsT3ZlcmxheURlZmF1bHRzXCI6IFwiXzEweEVlbTE4RjZEMVJnU09fSkpzU3ZcIixcblx0XCJtb2RhbENsb3NlRGVmYXVsdHNcIjogXCJfM1hJY2ZwTGNYVUhERVM2VnhKNkhTZlwiLFxuXHRcIm1vZGFsSGVhZGVyRGVmYXVsdHNcIjogXCJfM2czWDFvX2pQNWtYa3o3Ql9Cbkd0NlwiLFxuXHRcIm1vZGFsQm9keURlZmF1bHRzXCI6IFwiXzNnVGJXZkFSR2RlLW1QdTNaZHdsb1RcIixcblx0XCJtb2RhbEZvb3RlckRlZmF1bHRzXCI6IFwiZnZ6aUlTMG5PMk1zQ3FPb0d4MFhFXCJcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/e1wibW9kdWxlc1wiOnRydWV9IS4vfi9wb3N0Y3NzLWxvYWRlciEuL3NyYy9saWIvc3R5bGUuY3NzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcblx0dmFyIGxpc3QgPSBbXTtcblxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcblx0XHR2YXIgcmVzdWx0ID0gW107XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gdGhpc1tpXTtcblx0XHRcdGlmKGl0ZW1bMl0pIHtcblx0XHRcdFx0cmVzdWx0LnB1c2goXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBpdGVtWzFdICsgXCJ9XCIpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmVzdWx0LnB1c2goaXRlbVsxXSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiByZXN1bHQuam9pbihcIlwiKTtcblx0fTtcblxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuXHRcdH1cblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdHJldHVybiBsaXN0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xudmFyIHN0eWxlc0luRG9tID0ge30sXG5cdG1lbW9pemUgPSBmdW5jdGlvbihmbikge1xuXHRcdHZhciBtZW1vO1xuXHRcdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdFx0cmV0dXJuIG1lbW87XG5cdFx0fTtcblx0fSxcblx0aXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIC9tc2llIFs2LTldXFxiLy50ZXN0KHNlbGYubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKTtcblx0fSksXG5cdGdldEhlYWRFbGVtZW50ID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdO1xuXHR9KSxcblx0c2luZ2xldG9uRWxlbWVudCA9IG51bGwsXG5cdHNpbmdsZXRvbkNvdW50ZXIgPSAwLFxuXHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIDxoZWFkPi5cblx0aWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcInVuZGVmaW5lZFwiKSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QpO1xuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspXG5cdFx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oKTtcblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyhsaXN0KSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKVxuXHRcdFx0c3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlXG5cdFx0XHRuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCkge1xuXHR2YXIgaGVhZCA9IGdldEhlYWRFbGVtZW50KCk7XG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wW3N0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0aGVhZC5pbnNlcnRCZWZvcmUoc3R5bGVFbGVtZW50LCBoZWFkLmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZihsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0aGVhZC5pbnNlcnRCZWZvcmUoc3R5bGVFbGVtZW50LCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcblx0XHR9XG5cdFx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AucHVzaChzdHlsZUVsZW1lbnQpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHRoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcuIE11c3QgYmUgJ3RvcCcgb3IgJ2JvdHRvbScuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcblx0c3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcblx0dmFyIGlkeCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGVFbGVtZW50KTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuXHR2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXHRzdHlsZUVsZW1lbnQudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCk7XG5cdHJldHVybiBzdHlsZUVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpIHtcblx0dmFyIGxpbmtFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cdGxpbmtFbGVtZW50LnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGlua0VsZW1lbnQpO1xuXHRyZXR1cm4gbGlua0VsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVFbGVtZW50LCB1cGRhdGUsIHJlbW92ZTtcblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblx0XHRzdHlsZUVsZW1lbnQgPSBzaW5nbGV0b25FbGVtZW50IHx8IChzaW5nbGV0b25FbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cdH0gZWxzZSBpZihvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdHN0eWxlRWxlbWVudCA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG5cdFx0XHRpZihzdHlsZUVsZW1lbnQuaHJlZilcblx0XHRcdFx0VVJMLnJldm9rZU9iamVjdFVSTChzdHlsZUVsZW1lbnQuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZUVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuXHRcdGlmKG5ld09iaikge1xuXHRcdFx0aWYobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKVxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlRWxlbWVudCwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGVFbGVtZW50LmNoaWxkTm9kZXM7XG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGVFbGVtZW50Lmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZUVsZW1lbnQsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuXHRcdH1cblx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayhsaW5rRWxlbWVudCwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHRpZihzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rRWxlbWVudC5ocmVmO1xuXG5cdGxpbmtFbGVtZW50LmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYylcblx0XHRVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS0xIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcyEuL3N0eWxlLmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLTEhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzIS4vc3R5bGUuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLTEhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzIS4vc3R5bGUuY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9saWIvc3R5bGUuY3NzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBtb2RhbEZhY3RvcnkgZnJvbSAnLi9saWIvbW9kYWxGYWN0b3J5J1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1vZGFsRmFjdG9yeVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==