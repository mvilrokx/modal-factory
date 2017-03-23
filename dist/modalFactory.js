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
var divEl = exports.divEl = function divEl(options) {
  return el('div', options);
};
var buttonEl = exports.buttonEl = function buttonEl(options) {
  return el('button', options);
};
var sectionEl = exports.sectionEl = function sectionEl(options) {
  return el('section', options);
};
var headerEl = exports.headerEl = function headerEl(options) {
  return el('header', options);
};
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBiY2VjMTI5MWQ2YmZjYzg0OTBhMiIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL21vZGFsRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL2Rhc2hlcml6ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL2VsLmpzIiwid2VicGFjazovLy8uL3NyYy9saWIvc3R5bGVPYmplY3RTdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9zdHlsZS5jc3M/YThlYSIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsibW9kYWxGYWN0b3J5Iiwib3B0aW9ucyIsInN0eWxlcyIsIm1vZGFsIiwiY2xhc3NlcyIsIm1vZGFsQ29udGFpbmVyIiwibW9kYWxDb250YWluZXJEZWZhdWx0cyIsIm1vZGFsT3ZlcmxheSIsIm1vZGFsT3ZlcmxheURlZmF1bHRzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhpZGUiLCJtb2RhbENvbnRlbnQiLCJtb2RhbENvbnRlbnREZWZhdWx0cyIsImhlYWRlciIsIm1vZGFsSGVhZGVyIiwibW9kYWxoZWFkZXIiLCJtb2RhbEhlYWRlckRlZmF1bHRzIiwiaW5uZXJIVE1MIiwiYXBwZW5kQ2hpbGQiLCJtb2RhbEJvZHkiLCJtb2RhbEJvZHlEZWZhdWx0cyIsImJvZHkiLCJmb290ZXIiLCJtb2RhbEZvb3RlciIsIm1vZGFsRm9vdGVyRGVmYXVsdHMiLCJtb2RhbENsb3NlIiwibW9kYWxDbG9zZURlZmF1bHRzIiwidGV4dENvbnRlbnQiLCJ0cmFuc2l0aW9uRW5kSGFuZGxlciIsInN0eWxlIiwiZGlzcGxheSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzaG93Iiwic2V0VGltZW91dCIsImNsYXNzTGlzdCIsImFkZCIsIm1vZGFsU2hvdyIsInJlbW92ZSIsImRhc2hlcml6ZSIsInN0ciIsInJlcGxhY2UiLCJjIiwiaSIsInRvTG93ZXJDYXNlIiwiZWwiLCJ0eXBlIiwiZWxlbWVudCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImlkIiwiY3NzVGV4dCIsImRpdkVsIiwiYnV0dG9uRWwiLCJzZWN0aW9uRWwiLCJoZWFkZXJFbCIsImZvb3RlckVsIiwic3R5bGVPYmplY3RTdHJpbmciLCJPYmplY3QiLCJrZXlzIiwicmVkdWNlIiwia2V5IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2hFQTs7QUFFQTs7Ozs7O0FBRUEsSUFBTUEsZUFBZSxTQUFmQSxZQUFlLEdBQWtCO0FBQUEsTUFBakJDLE9BQWlCLHVFQUFQLEVBQU87QUFBQSx3QkFDYkEsT0FEYSxDQUM3QkMsTUFENkI7QUFBQSxNQUM3QkEsTUFENkIsbUNB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QTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7O0FBRUEsNkJBQTZCLG1CQUFtQjs7QUFFaEQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7O0FDclBBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDOzs7Ozs7Ozs7QUNwQkE7Ozs7OztBQUVBSyxPQUFPQyxPQUFQLDBCIiwiZmlsZSI6Im1vZGFsRmFjdG9yeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwibW9kYWxGYWN0b3J5XCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIm1vZGFsRmFjdG9yeVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJtb2RhbEZhY3RvcnlcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gOCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYmNlYzEyOTFkNmJmY2M4NDkwYTIiLCJpbXBvcnQgeyBkaXZFbCwgaGVhZGVyRWwsIHNlY3Rpb25FbCwgZm9vdGVyRWwsIGJ1dHRvbkVsIH0gZnJvbSAnLi9lbCdcblxuaW1wb3J0IGNzc1N0eWxlcyBmcm9tICcuL3N0eWxlLmNzcydcblxuY29uc3QgbW9kYWxGYWN0b3J5ID0gKG9wdGlvbnMgPSB7fSkgPT4ge1xuICBjb25zdCB7IHN0eWxlcyA9IHt9IH0gPSBvcHRpb25zXG5cbiAgLyoqXG4gICAqIE1vZGFsIHN0cnVjdHVyZSA9XG4gICAqICAgIGRpdi5tb2RhbENvbnRhaW5lclxuICAgKiAgICAgICAgZGl2Lm1vZGFsT3ZlcmxheVxuICAgKiAgICAgICAgZGl2Lm1vZGFsQ29udGVudFxuICAgKiAgICAgICAgICAgIGhlYWRlci5tb2RhbEhlYWRlclxuICAgKiAgICAgICAgICAgIHNlY3Rpb24ubW9kYWxCb2R5XG4gICAqICAgICAgICAgICAgZm9vdGVyLm1vZGFsRm9vdGVyXG4gICAqICAgICAgICBidXR0b24ubW9kYWxDbG9zZVxuICAgKi9cbiAgY29uc3QgbW9kYWwgPSBkaXZFbCh7XG4gICAgY2xhc3NlczogYCR7Y3NzU3R5bGVzLm1vZGFsQ29udGFpbmVyfSAke2Nzc1N0eWxlcy5tb2RhbENvbnRhaW5lckRlZmF1bHRzfWAsXG4gICAgc3R5bGVzOiBzdHlsZXMubW9kYWwsXG4gIH0pXG5cbiAgY29uc3QgbW9kYWxPdmVybGF5ID0gZGl2RWwoe1xuICAgIGNsYXNzZXM6IGAke2Nzc1N0eWxlcy5tb2RhbE92ZXJsYXl9ICR7Y3NzU3R5bGVzLm1vZGFsT3ZlcmxheURlZmF1bHRzfWAsXG4gICAgc3R5bGVzOiBzdHlsZXMubW9kYWxPdmVybGF5LFxuICB9KVxuICBtb2RhbE92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBtb2RhbC5oaWRlKCkpXG5cbiAgY29uc3QgbW9kYWxDb250ZW50ID0gZGl2RWwoe1xuICAgIGNsYXNzZXM6IGAke2Nzc1N0eWxlcy5tb2RhbENvbnRlbnR9ICR7Y3NzU3R5bGVzLm1vZGFsQ29udGVudERlZmF1bHRzfWAsXG4gICAgc3R5bGVzOiBzdHlsZXMubW9kYWxDb250ZW50LFxuICB9KVxuXG4gIGlmIChvcHRpb25zLmhlYWRlcikge1xuICAgIGNvbnN0IG1vZGFsSGVhZGVyID0gaGVhZGVyRWwoe1xuICAgICAgY2xhc3NlczogYCR7Y3NzU3R5bGVzLm1vZGFsaGVhZGVyfSAke2Nzc1N0eWxlcy5tb2RhbEhlYWRlckRlZmF1bHRzfWAsXG4gICAgICBzdHlsZXM6IHN0eWxlcy5tb2RhbEhlYWRlcixcbiAgICB9KVxuICAgIG1vZGFsSGVhZGVyLmlubmVySFRNTCA9IG9wdGlvbnMuaGVhZGVyXG4gICAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKG1vZGFsSGVhZGVyKVxuICB9XG5cbiAgY29uc3QgbW9kYWxCb2R5ID0gc2VjdGlvbkVsKHtcbiAgICBjbGFzc2VzOiBgJHtjc3NTdHlsZXMubW9kYWxCb2R5fSAke2Nzc1N0eWxlcy5tb2RhbEJvZHlEZWZhdWx0c31gLFxuICAgIHN0eWxlczogc3R5bGVzLm1vZGFsQm9keSxcbiAgfSlcbiAgbW9kYWxCb2R5LmlubmVySFRNTCA9IG9wdGlvbnMuYm9keSB8fCAnJ1xuICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQobW9kYWxCb2R5KVxuXG4gIGlmIChvcHRpb25zLmZvb3Rlcikge1xuICAgIGNvbnN0IG1vZGFsRm9vdGVyID0gZm9vdGVyRWwoe1xuICAgICAgY2xhc3NlczogYCR7Y3NzU3R5bGVzLm1vZGFsRm9vdGVyfSAke2Nzc1N0eWxlcy5tb2RhbEZvb3RlckRlZmF1bHRzfWAsXG4gICAgICBzdHlsZXM6IHN0eWxlcy5tb2RhbEZvb3RlcixcbiAgICB9KVxuICAgIG1vZGFsRm9vdGVyLmlubmVySFRNTCA9IG9wdGlvbnMuZm9vdGVyXG4gICAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKG1vZGFsRm9vdGVyKVxuICB9XG5cbiAgY29uc3QgbW9kYWxDbG9zZSA9IGJ1dHRvbkVsKHtcbiAgICBjbGFzc2VzOiBgJHtjc3NTdHlsZXMubW9kYWxDbG9zZX0gJHtjc3NTdHlsZXMubW9kYWxDbG9zZURlZmF1bHRzfWAsXG4gICAgc3R5bGVzOiBzdHlsZXMubW9kYWxDbG9zZSxcbiAgfSlcbiAgbW9kYWxDbG9zZS50ZXh0Q29udGVudCA9ICdcXHUyNzE1J1xuICBtb2RhbENsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gbW9kYWwuaGlkZSgpKVxuXG5cbiAgbW9kYWwuYXBwZW5kQ2hpbGQobW9kYWxPdmVybGF5KVxuICBtb2RhbC5hcHBlbmRDaGlsZChtb2RhbENvbnRlbnQpXG4gIG1vZGFsLmFwcGVuZENoaWxkKG1vZGFsQ2xvc2UpXG5cbiAgY29uc3QgdHJhbnNpdGlvbkVuZEhhbmRsZXIgPSAoKSA9PiB7XG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgIG1vZGFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCB0cmFuc2l0aW9uRW5kSGFuZGxlcilcbiAgfVxuXG4gIG1vZGFsLnNob3cgPSAoKSA9PiB7XG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xuICAgIHNldFRpbWVvdXQoKCkgPT4gbW9kYWwuY2xhc3NMaXN0LmFkZChjc3NTdHlsZXMubW9kYWxTaG93KSwgMjApXG4gIH1cblxuICBtb2RhbC5oaWRlID0gKCkgPT4ge1xuICAgIG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCB0cmFuc2l0aW9uRW5kSGFuZGxlcilcbiAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKGNzc1N0eWxlcy5tb2RhbFNob3cpXG4gIH1cblxuICByZXR1cm4gbW9kYWxcbn1cblxuZXhwb3J0IGRlZmF1bHQgbW9kYWxGYWN0b3J5XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbGliL21vZGFsRmFjdG9yeS5qcyIsIi8qKlxuICogQG1vZHVsZVxuKi9cbmNvbnN0IGRhc2hlcml6ZSA9IChzdHIgPSAnJykgPT4gc3RyLnJlcGxhY2UoL1tBLVpdL2csIChjLCBpKSA9PiAoaSAhPT0gMCA/ICctJyA6ICcnKSArIGMudG9Mb3dlckNhc2UoKSlcblxuLyoqXG4gKiBDb252ZXJ0cyB0aGUgY2FtZWxDYXNlZC9DYW1lbENhc2VkIHN0cmluZyB0aGF0IGlzIHBhc3NlZCBpbiB0byBhIGRhc2gnZWRcbiAqIHN0cmluZy5cbiAqIFRoaXMgaXMgaGFuZHkgdG8gY29udmVydCBKYXZhU2NyaXB0IG9iamVjdCBrZXlzIGFuZCB3ZSB1c2UgaXQgdG8gY29udmVydFxuICogb2JqZWN0IHN0eWxlcyB0byBjc3Mgc3R5bGVzLCBlLmcuIGJvcmRlcldpZHRoIGJlY29tZXMgJ2JvcmRlci13aWR0aCdcbiAqXG4gKiBAYXV0aG9yIE1hcmsgVmlscm9reCA8bWFya0B2aWxyb2t4LmNvbT5cbiAqXG4gKiBAZXhhbXBsZVxuICogIGltcG9ydCBkYXNoZXJpemUgZnJvbSAnLi9saWIvZGFzaGVyaXplJ1xuICpcbiAqIGNvbnNvbGUubG9nKGRhc2hlcml6ZSgnY2FtZWxDYXNlJykpIC8vJ2NhbWVsLWNhc2UnXG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIC0gY2FtZWxDYXNlZCBzdHJpbmcgeW91IHdvdWxkIGxpa2UgdG8gY29udmVydFxuICogQHJldHVybnMge3N0cmluZ30gZGFzaGVyaXplZCBzdHJpbmdcbiAqXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGRhc2hlcml6ZVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xpYi9kYXNoZXJpemUuanMiLCJpbXBvcnQgc3R5bGVPYmplY3RTdHJpbmcgZnJvbSAnLi9zdHlsZU9iamVjdFN0cmluZydcblxuLyoqXG4gKiBAbW9kdWxlXG4qL1xuXG4vKipcbiAqIENvbnZlbmllbmNlIG1ldGhvZCB0aGF0IGFsbG93cyB5b3UgdG8gY3JlYXRlIGEgRE9NIGVsZW1lbnQgYW5kIGFzc2lnbiBhbiBpZCxcbiAqIGNsYXNzZXMgKHNwYWNlIHNlcGFyYXRlZCBzdHJpbmcpIGFuZCBzdHlsZXMgdG8gaXQuXG4gKlxuICogQGF1dGhvciBNYXJrIFZpbHJva3ggPG1hcmtAdmlscm9reC5jb20+XG4gKlxuICogQGV4YW1wbGVcbiAqICBpbXBvcnQgZWwgZnJvbSAnLi9saWIvZWwnXG4gKlxuICogY29uc3QgZGl2RWwgPSBlbCgnZGl2Jywge1xuICogICBjbGFzc2VzOiAnbXlDbHMxIG15Q2xzMicsXG4gKiAgIGlkOiAnbXlEaXYnLFxuICogICBzdHlsZXM6IHtcbiAqICAgICBtb2RhbE92ZXJsYXk6IHsgYmFja2dyb3VuZENvbG9yOiAncmVkJyB9XG4gKiAgIH1cbiAqIH0pXG4gKiAvLyBBbHNvIGhhcyBjb252ZW5pZW5jZSBtZXRob2RzIChubyBuZWVkIHRvIHNwZWNpZnkgdHlwZSwgb25seSBvcHRpb25zKTpcbiAqIC8vIGltcG9ydCB7IGRpdkVsIH0gZnJvbSAnLi9saWIvZWwnXG4gKiAvLyBjb25zdCBkaXZFbCA9IGVsRGl2KHt9KVxuICpcbiAqIEBmdW5jdGlvblxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgLSBhIHN0cmluZyB0aGF0IHJlcHJlc2VudHMgdGhlIHR5cGUgb2YgRE9NIGVsZW1lbnQgeW91XG4gKiB3YW50IHRvIGNyZWF0ZVxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBBbiBvYmplY3QgdGhhdCBjb250YWlucyBjc3Mgc3R5bGVzXG4gKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5jbGFzc2VzIC0gQSBzcGFjZSBzZXBlcmF0ZWQgbGlzdCBvZiBjbGFzc2VzXG4gKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5pZCAtIGFuIGlkZW50aWZpZXJcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zLnN0eWxlcyAtIGFuIG9iamVjdCB0aGF0IGNvbnRhaW5zIGFsbCB0aGUgc3R5bGVzIHlvdVxuICogd2FudCB0byBhcHBseSB0byB0aGUgRE9NIGVsZW1lbnQgKGFuZCBvdmVycmlkZSB0aGUgY2xhc3Mtc3R5bGVzIHdpdGgpXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucy5zdHlsZXMubW9kYWxDb250YWluZXIgLSBzdHlsZXMgZm9yIHRoZSBjb250YWluZXJcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zLnN0eWxlcy5tb2RhbE92ZXJsYXkgLSBzdHlsZXMgZm9yIHRoZSBvdmVybGF5XG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucy5zdHlsZXMubW9kYWxDbG9zZSAtIHN0eWxlcyBmb3IgdGhlIGNsb3NlIGNyb3NzL2J1dHRvblxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMuc3R5bGVzLm1vZGFsQ29udGVudCAtIHN0eWxlcyBmb3IgdGhlIGNvbnRlbnRcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zLnN0eWxlcy5tb2RhbEZvb3RlciAtIHN0eWxlcyBmb3IgdGhlIGZvb3RlclxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMuc3R5bGVzLm1vZGFsQm9keSAtIHN0eWxlcyBmb3IgdGhlIGJvZHlcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zLnN0eWxlcy5tb2RhbEhlYWRlciAtIHN0eWxlcyBmb3IgdGhlIGhlYWRlclxuICogQHJldHVybnMge29iamVjdH0gdGhlIERPTSBvYmplY3RcbiAqXG4gKi9cbmNvbnN0IGVsID0gKHR5cGUsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKVxuXG4gIGlmIChvcHRpb25zLmNsYXNzZXMpIGVsZW1lbnQuY2xhc3NOYW1lID0gb3B0aW9ucy5jbGFzc2VzXG4gIGlmIChvcHRpb25zLmlkKSBlbGVtZW50LmlkID0gb3B0aW9ucy5pZFxuICBpZiAob3B0aW9ucy5zdHlsZXMpIGVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT2JqZWN0U3RyaW5nKG9wdGlvbnMuc3R5bGVzKVxuXG4gIHJldHVybiBlbGVtZW50XG59XG5cbmV4cG9ydCBkZWZhdWx0IGVsXG5leHBvcnQgY29uc3QgZGl2RWwgPSBvcHRpb25zID0+IGVsKCdkaXYnLCBvcHRpb25zKVxuZXhwb3J0IGNvbnN0IGJ1dHRvbkVsID0gb3B0aW9ucyA9PiBlbCgnYnV0dG9uJywgb3B0aW9ucylcbmV4cG9ydCBjb25zdCBzZWN0aW9uRWwgPSBvcHRpb25zID0+IGVsKCdzZWN0aW9uJywgb3B0aW9ucylcbmV4cG9ydCBjb25zdCBoZWFkZXJFbCA9IG9wdGlvbnMgPT4gZWwoJ2hlYWRlcicsIG9wdGlvbnMpXG5leHBvcnQgY29uc3QgZm9vdGVyRWwgPSBvcHRpb25zID0+IGVsKCdmb290ZXInLCBvcHRpb25zKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xpYi9lbC5qcyIsImltcG9ydCBkYXNoZXJpemUgZnJvbSAnLi9kYXNoZXJpemUnXG5cbi8qKlxuICogQG1vZHVsZVxuKi9cbmNvbnN0IHN0eWxlT2JqZWN0U3RyaW5nID0gKHN0eWxlID0ge30pID0+IE9iamVjdC5rZXlzKHN0eWxlKS5yZWR1Y2UoKHN0ciwga2V5KSA9PiBgJHtzdHJ9JHtkYXNoZXJpemUoa2V5KX06ICR7c3R5bGVba2V5XX07IGAsICcnKVxuXG4vKipcbiAqIENvbnZlcnRzIGFuIG9iamVjdCB0aGF0IGNvbnRhaW5zIENTUyBzdHlsZXMgaW50byBhIHN0cmluZy5cbiAqIFJldHVybnMgYSBzdHJpbmcgb2Ygc2VtaS1jb2xvbi1zZXBlcmF0ZWQgY3NzIHRoYXQgY2FuIGJlIGVhc2lseSBhc3NpZ25lZCB0byB0aGVcbiAqIGNzc1RleHQgcHJvcG9ydHkgb2YgYSBET00gZWxlbWVudFxuICpcbiAqIEBhdXRob3IgTWFyayBWaWxyb2t4IDxtYXJrQHZpbHJva3guY29tPlxuICpcbiAqIEBleGFtcGxlXG4gKiAgaW1wb3J0IHN0eWxlMnN0ciBmcm9tICcuL2xpYi9zdHlsZU9iamVjdFN0cmluZydcbiAqXG4gKiBjb25zb2xlLmxvZyhzdHlsZTJzdHIoe1xuICogICBiYWNrZ3JvdW5kQ29sb3I6ICcjZGRkZGRkJyxcbiAqICAgYm9yZGVyVG9wTGVmdFJhZGl1czogJzNweCcsXG4gKiB9KSAvLyAnYmFja2dyb3VuZC1jb2xvcjogI2RkZGRkZDsgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogM3B4OyAnXG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAcGFyYW0ge29iamVjdH0gc3R5bGUgLSBBbiBvYmplY3QgdGhhdCBjb250YWlucyBjc3Mgc3R5bGVzXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBhIHN0cmluZyB0aGF0IGNvbnRhaW5zIGEgc2VtaS1jb2xvbi1zZXBlcmF0ZWQgbGlzdCBvZiBjc3Mgc3R5bGVzXG4gKlxuICovXG5leHBvcnQgZGVmYXVsdCBzdHlsZU9iamVjdFN0cmluZ1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xpYi9zdHlsZU9iamVjdFN0cmluZy5qcyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5QVzhTN2VnN2t6Q25fNnJDWm1HQkYge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgei1pbmRleDogMTtcXG4gIG9wYWNpdHk6IDA7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IC4xNXMgZWFzZS1vdXQ7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4xNXMgZWFzZS1vdXQ7XFxufVxcblxcbi5QVzhTN2VnN2t6Q25fNnJDWm1HQkYuRHE0b2pKbWhxcnFKRG0tSUZoRzEtIHtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi5fMXpJdk5PUUg2RWlmWDROSlBwMDJuZCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgcmlnaHQ6IDA7XFxufVxcblxcbi5XQXZ1T3c1c2F4SjBVVUFiQkw5QnQge1xcbiAgZm9udC1zaXplOiAzMnB4O1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgd2lkdGg6IDY0cHg7XFxuICB3aWR0aDogNHJlbTtcXG4gIGhlaWdodDogNjRweDtcXG4gIGhlaWdodDogNHJlbTtcXG4gIHBhZGRpbmc6IDE2cHg7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA5OTk5OXB4O1xcbn1cXG5cXG4uXzJSOVZ4Z00yc3NWWTN5YmZQT1p5bGEge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxuICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDJyZW0pO1xcbiAgLyptYXgtd2lkdGg6IGNhbGMoMTAwdncgLSAycmVtKTsqL1xcbiAgd2lkdGg6IDUwJTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLkRxNG9qSm1ocXJxSkRtLUlGaEcxLSAuXzJSOVZ4Z00yc3NWWTN5YmZQT1p5bGEsXFxuLkRxNG9qSm1ocXJxSkRtLUlGaEcxLSAuXzFJekJ0TkF3QVJ2YVQ3YTFtOXR2X18ge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XFxufVxcblxcbi5DVGVETnFIY3FRd1RkNGpoYl9ELSB7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLl8xMHhFZW0xOEY2RDFSZ1NPX0pKc1N2IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XFxuICBvcGFjaXR5OiAwLjc1XFxufVxcblxcbi5fM1hJY2ZwTGNYVUhERVM2VnhKNkhTZiB7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuXFxuLl8xSXpCdE5Bd0FSdmFUN2ExbTl0dl9fIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAuMTVzIGVhc2Utb3V0O1xcbiAgdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gLjE1cyBlYXNlLW91dDtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMTVzIGVhc2Utb3V0O1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4xNXMgZWFzZS1vdXQsIC13ZWJraXQtdHJhbnNmb3JtIC4xNXMgZWFzZS1vdXQ7XFxufVxcblxcbi5fM2czWDFvX2pQNWtYa3o3Ql9Cbkd0NiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkZGRkO1xcbiAgcGFkZGluZzogMTZweDtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XFxuICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHJnYmEoMTAyLCAxMDIsIDEwMiwgMC40KTtcXG59XFxuXFxuLl8zZ1RiV2ZBUkdkZS1tUHUzWmR3bG9UIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICBwYWRkaW5nOiAxNnB4O1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLmZ2emlJUzBuTzJNc0NxT29HeDBYRSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkZGRkO1xcbiAgcGFkZGluZzogMTZweDtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xcbiAgYm9yZGVyLXRvcC13aWR0aDogMXB4O1xcbiAgYm9yZGVyLXRvcC1zdHlsZTogc29saWQ7XFxuICBib3JkZXItdG9wLWNvbG9yOiByZ2JhKDEwMiwgMTAyLCAxMDIsIDAuNCk7XFxufVxcblxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcIm1vZGFsQ29udGFpbmVyXCI6IFwiUFc4UzdlZzdrekNuXzZyQ1ptR0JGXCIsXG5cdFwibW9kYWxTaG93XCI6IFwiRHE0b2pKbWhxcnFKRG0tSUZoRzEtXCIsXG5cdFwibW9kYWxPdmVybGF5XCI6IFwiXzF6SXZOT1FINkVpZlg0TkpQcDAybmRcIixcblx0XCJtb2RhbENsb3NlXCI6IFwiV0F2dU93NXNheEowVVVBYkJMOUJ0XCIsXG5cdFwibW9kYWxDb250ZW50XCI6IFwiXzJSOVZ4Z00yc3NWWTN5YmZQT1p5bGFcIixcblx0XCJtb2RhbENvbnRlbnREZWZhdWx0c1wiOiBcIl8xSXpCdE5Bd0FSdmFUN2ExbTl0dl9fXCIsXG5cdFwibW9kYWxCb2R5XCI6IFwiQ1RlRE5xSGNxUXdUZDRqaGJfRC1cIixcblx0XCJtb2RhbE92ZXJsYXlEZWZhdWx0c1wiOiBcIl8xMHhFZW0xOEY2RDFSZ1NPX0pKc1N2XCIsXG5cdFwibW9kYWxDbG9zZURlZmF1bHRzXCI6IFwiXzNYSWNmcExjWFVIREVTNlZ4SjZIU2ZcIixcblx0XCJtb2RhbEhlYWRlckRlZmF1bHRzXCI6IFwiXzNnM1gxb19qUDVrWGt6N0JfQm5HdDZcIixcblx0XCJtb2RhbEJvZHlEZWZhdWx0c1wiOiBcIl8zZ1RiV2ZBUkdkZS1tUHUzWmR3bG9UXCIsXG5cdFwibW9kYWxGb290ZXJEZWZhdWx0c1wiOiBcImZ2emlJUzBuTzJNc0NxT29HeDBYRVwiXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyP3tcIm1vZHVsZXNcIjp0cnVlfSEuL34vcG9zdGNzcy1sb2FkZXIhLi9zcmMvbGliL3N0eWxlLmNzc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG5cdHZhciBsaXN0ID0gW107XG5cblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG5cdFx0dmFyIHJlc3VsdCA9IFtdO1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHRoaXNbaV07XG5cdFx0XHRpZihpdGVtWzJdKSB7XG5cdFx0XHRcdHJlc3VsdC5wdXNoKFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgaXRlbVsxXSArIFwifVwiKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJlc3VsdC5wdXNoKGl0ZW1bMV0pO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gcmVzdWx0LmpvaW4oXCJcIik7XG5cdH07XG5cblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3Rcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcblx0XHR9XG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRyZXR1cm4gbGlzdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbnZhciBzdHlsZXNJbkRvbSA9IHt9LFxuXHRtZW1vaXplID0gZnVuY3Rpb24oZm4pIHtcblx0XHR2YXIgbWVtbztcblx0XHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRcdHJldHVybiBtZW1vO1xuXHRcdH07XG5cdH0sXG5cdGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiAvbXNpZSBbNi05XVxcYi8udGVzdChzZWxmLm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSk7XG5cdH0pLFxuXHRnZXRIZWFkRWxlbWVudCA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXTtcblx0fSksXG5cdHNpbmdsZXRvbkVsZW1lbnQgPSBudWxsLFxuXHRzaW5nbGV0b25Db3VudGVyID0gMCxcblx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AgPSBbXTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICh0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gPT09IFwidW5kZWZpbmVkXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiA8aGVhZD4uXG5cdGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0KTtcblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0KTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKVxuXHRcdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMobGlzdCkge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblx0Zm9yKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblx0XHRpZighbmV3U3R5bGVzW2lkXSlcblx0XHRcdHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZVxuXHRcdFx0bmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZUVsZW1lbnQpIHtcblx0dmFyIGhlYWQgPSBnZXRIZWFkRWxlbWVudCgpO1xuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcFtzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZighbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgaGVhZC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XG5cdFx0fVxuXHRcdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGVFbGVtZW50KTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0aGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnLiBNdXN0IGJlICd0b3AnIG9yICdib3R0b20nLlwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG5cdHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG5cdHZhciBpZHggPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlRWxlbWVudCk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblx0c3R5bGVFbGVtZW50LnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZUVsZW1lbnQpO1xuXHRyZXR1cm4gc3R5bGVFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKSB7XG5cdHZhciBsaW5rRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXHRsaW5rRWxlbWVudC5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmtFbGVtZW50KTtcblx0cmV0dXJuIGxpbmtFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlRWxlbWVudCwgdXBkYXRlLCByZW1vdmU7XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cdFx0c3R5bGVFbGVtZW50ID0gc2luZ2xldG9uRWxlbWVudCB8fCAoc2luZ2xldG9uRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIHRydWUpO1xuXHR9IGVsc2UgaWYob2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRzdHlsZUVsZW1lbnQgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbigpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuXHRcdFx0aWYoc3R5bGVFbGVtZW50LmhyZWYpXG5cdFx0XHRcdFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGVFbGVtZW50LmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGVFbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcblx0XHRpZihuZXdPYmopIHtcblx0XHRcdGlmKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcClcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZUVsZW1lbnQsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlRWxlbWVudC5jaGlsZE5vZGVzO1xuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlRWxlbWVudC5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGVFbGVtZW50LCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcblx0XHR9XG5cdFx0c3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsobGlua0VsZW1lbnQsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0aWYoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGlua0VsZW1lbnQuaHJlZjtcblxuXHRsaW5rRWxlbWVudC5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpXG5cdFx0VVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEtMSEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvaW5kZXguanMhLi9zdHlsZS5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS0xIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcyEuL3N0eWxlLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS0xIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcyEuL3N0eWxlLmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbGliL3N0eWxlLmNzc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgbW9kYWxGYWN0b3J5IGZyb20gJy4vbGliL21vZGFsRmFjdG9yeSdcblxubW9kdWxlLmV4cG9ydHMgPSBtb2RhbEZhY3RvcnlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VSb290IjoiIn0=