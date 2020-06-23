"use weex:vue";
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	return __webpack_require__(__webpack_require__.s = 29);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/*!******************************************************************************!*\
  !*** /Users/guoqiwen/Desktop/uni-app/agora实时音视频/main.js?{"type":"appStyle"} ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("Vue.prototype.__$appStyle__ = {}\nVue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css */ 2).default,Vue.prototype.__$appStyle__)\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsMkRBQTJELG1CQUFPLENBQUMsa0RBQTJDIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18gPSB7fVxuVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIikuZGVmYXVsdCxWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!******************************************************************************************!*\
  !*** /Users/guoqiwen/Desktop/uni-app/agora实时音视频/App.vue?vue&type=style&index=0&lang=css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-0-2!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css */ 3);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 3 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/guoqiwen/Desktop/uni-app/agora实时音视频/App.vue?vue&type=style&index=0&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {}

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.log = log;exports.default = formatLog;function typof(v) {
  var s = Object.prototype.toString.call(v);
  return s.substring(8, s.length - 1);
}

function isDebugMode() {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__;
}

function log(type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  console[type].apply(console, args);
}

function formatLog() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var type = args.shift();
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'));
    return console[type].apply(console, args);
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase();

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v) + '---END:JSON---';
      } catch (e) {
        v = '[object object]';
      }
    } else {
      if (v === null) {
        v = '---NULL---';
      } else if (v === undefined) {
        v = '---UNDEFINED---';
      } else {
        var vType = typof(v).toUpperCase();

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---';
        } else {
          v = String(v);
        }
      }
    }

    return v;
  });
  var msg = '';

  if (msgs.length > 1) {
    var lastMsg = msgs.pop();
    msg = msgs.join('---COMMA---');

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg;
    } else {
      msg += '---COMMA---' + lastMsg;
    }
  } else {
    msg = msgs[0];
  }

  console[type](msg);
}

/***/ }),
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */
/*!*************************************************************************************************!*\
  !*** /Users/guoqiwen/Desktop/uni-app/agora实时音视频/main.js?{"page":"pages%2Fliveshow%2Fliveshow"} ***!
  \*************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 1);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_liveshow_liveshow_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/liveshow/liveshow.nvue?mpType=page */ 30);\n\n        \n        \n        \n        _pages_liveshow_liveshow_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mpType = 'page'\n        _pages_liveshow_liveshow_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].route = 'pages/liveshow/liveshow'\n        _pages_liveshow_liveshow_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].el = '#root'\n        new Vue(_pages_liveshow_liveshow_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLFFBQThCO0FBQzlCLFFBQW9FO0FBQ3BFLFFBQVEsaUZBQUc7QUFDWCxRQUFRLGlGQUFHO0FBQ1gsUUFBUSxpRkFBRztBQUNYLGdCQUFnQixpRkFBRyIsImZpbGUiOiIyOS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICBcbiAgICAgICAgaW1wb3J0ICd1bmktYXBwLXN0eWxlJ1xuICAgICAgICBpbXBvcnQgQXBwIGZyb20gJy4vcGFnZXMvbGl2ZXNob3cvbGl2ZXNob3cubnZ1ZT9tcFR5cGU9cGFnZSdcbiAgICAgICAgQXBwLm1wVHlwZSA9ICdwYWdlJ1xuICAgICAgICBBcHAucm91dGUgPSAncGFnZXMvbGl2ZXNob3cvbGl2ZXNob3cnXG4gICAgICAgIEFwcC5lbCA9ICcjcm9vdCdcbiAgICAgICAgbmV3IFZ1ZShBcHApXG4gICAgICAgICJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///29\n");

/***/ }),
/* 30 */
/*!*******************************************************************************************!*\
  !*** /Users/guoqiwen/Desktop/uni-app/agora实时音视频/pages/liveshow/liveshow.nvue?mpType=page ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _liveshow_nvue_vue_type_template_id_4880284a_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./liveshow.nvue?vue&type=template&id=4880284a&mpType=page */ 31);\n/* harmony import */ var _liveshow_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./liveshow.nvue?vue&type=script&lang=js&mpType=page */ 33);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _liveshow_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _liveshow_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 11);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./liveshow.nvue?vue&type=style&index=0&lang=scss&mpType=page */ 43).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./liveshow.nvue?vue&type=style&index=0&lang=scss&mpType=page */ 43).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _liveshow_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _liveshow_nvue_vue_type_template_id_4880284a_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _liveshow_nvue_vue_type_template_id_4880284a_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"a6892b84\",\n  false,\n  _liveshow_nvue_vue_type_template_id_4880284a_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"Users/guoqiwen/Desktop/uni-app/agora实时音视频/pages/liveshow/liveshow.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBaUk7QUFDakk7QUFDd0U7QUFDTDtBQUNuRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLHNFQUE4RDtBQUNsSCxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsc0VBQThEO0FBQ3ZIOztBQUVBOztBQUVBO0FBQ2dOO0FBQ2hOLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLDBGQUFNO0FBQ1IsRUFBRSwrRkFBTTtBQUNSLEVBQUUsd0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsbUdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiIzMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vbGl2ZXNob3cubnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00ODgwMjg0YSZtcFR5cGU9cGFnZVwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vbGl2ZXNob3cubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5leHBvcnQgKiBmcm9tIFwiLi9saXZlc2hvdy5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9saXZlc2hvdy5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL2xpdmVzaG93Lm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmbXBUeXBlPXBhZ2VcIikuZGVmYXVsdClcbiAgICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgXCJhNjg5MmI4NFwiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJVc2Vycy9ndW9xaXdlbi9EZXNrdG9wL3VuaS1hcHAvYWdvcmHlrp7ml7bpn7Pop4bpopEvcGFnZXMvbGl2ZXNob3cvbGl2ZXNob3cubnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///30\n");

/***/ }),
/* 31 */
/*!*************************************************************************************************************************!*\
  !*** /Users/guoqiwen/Desktop/uni-app/agora实时音视频/pages/liveshow/liveshow.nvue?vue&type=template&id=4880284a&mpType=page ***!
  \*************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_liveshow_nvue_vue_type_template_id_4880284a_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./liveshow.nvue?vue&type=template&id=4880284a&mpType=page */ 32);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_liveshow_nvue_vue_type_template_id_4880284a_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_liveshow_nvue_vue_type_template_id_4880284a_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_liveshow_nvue_vue_type_template_id_4880284a_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_liveshow_nvue_vue_type_template_id_4880284a_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 32 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/guoqiwen/Desktop/uni-app/agora实时音视频/pages/liveshow/liveshow.nvue?vue&type=template&id=4880284a&mpType=page ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "scroll-view",
    {
      staticStyle: { flexDirection: "column" },
      attrs: {
        scrollY: true,
        showScrollbar: true,
        enableBackToTop: true,
        bubble: "true"
      }
    },
    [
      _c(
        "view",
        { staticClass: ["chatBox"] },
        [
          _c("TX-AgoraView", {
            ref: "maxTxAgoraView",
            staticClass: ["maxTxAgoraView"],
            style: { height: _vm.windowHeight },
            attrs: {
              channelId: _vm.roomId,
              uid: _vm.uid,
              renderModel: _vm.renderModel,
              channelProfile: "1",
              clientRole: _vm.role,
              contrastLevel: _vm.beautyValue,
              lighteningLevel: _vm.beautyValue,
              smoothneesLevel: _vm.beautyValue,
              rednessLevel: _vm.beautyValue,
              remoteUid: _vm.hisId,
              publishStreamUrl: "",
              enableVideo: _vm.enable,
              enableAudio: _vm.enable
            },
            on: { statechange: _vm.onPush }
          }),
          _c(
            "view",
            { staticClass: ["header"] },
            [
              _c(
                "u-text",
                { staticClass: ["viewIco"], on: { click: _vm.changeMode } },
                [_vm._v("")]
              ),
              _c("TX-AgoraView", {
                ref: "minTxAgoraView",
                staticClass: ["minTxAgoraView"],
                style: _vm.minStyle,
                attrs: { localUid: _vm.localUid, remoteUid: _vm.cohostId }
              })
            ],
            1
          ),
          _c(
            "view",
            { staticClass: ["foot-content"] },
            [
              _c("chat-room", {
                ref: "chatRoom",
                staticClass: ["chat-room"],
                attrs: { id: "chatRoom", roomId: _vm.roomId }
              })
            ],
            1
          ),
          _c("view", { staticClass: ["tools"] }, [
            _c("view", { staticClass: ["circleBoxAll"] }, [
              _c(
                "view",
                {
                  staticClass: ["circleBox"],
                  on: {
                    click: function($event) {
                      _vm.menuAction()
                    }
                  }
                },
                [
                  _c("u-text", { staticClass: ["circleIco", "phone"] }, [
                    _vm._v("")
                  ]),
                  _c("u-text", { staticClass: ["hint"] }, [_vm._v("菜单操作")])
                ]
              ),
              _c(
                "view",
                {
                  staticClass: ["circleBox"],
                  on: {
                    click: function($event) {
                      _vm.startAll()
                    }
                  }
                },
                [
                  _c("u-text", { staticClass: ["circleIco", "phone"] }, [
                    _vm._v("")
                  ]),
                  _c("u-text", { staticClass: ["hint"] }, [_vm._v("加入房间")])
                ]
              ),
              _c(
                "view",
                { staticClass: ["circleBox"], on: { click: _vm.stopAll } },
                [
                  _c("u-text", { staticClass: ["circleIco", "phone"] }, [
                    _vm._v("")
                  ]),
                  _c("u-text", { staticClass: ["hint"] }, [_vm._v("离开房间")])
                ]
              ),
              _c(
                "view",
                {
                  staticClass: ["circleBox"],
                  on: {
                    click: function($event) {
                      _vm.switchCamera()
                    }
                  }
                },
                [
                  _c("u-text", { staticClass: ["circleIco", "phone"] }, [
                    _vm._v("")
                  ]),
                  _c("u-text", { staticClass: ["hint"] }, [
                    _vm._v("转换摄像头")
                  ])
                ]
              )
            ])
          ]),
          _c(
            "view",
            { ref: "showSlider", staticClass: ["showSlider"] },
            [
              _c("u-slider", {
                attrs: {
                  value: _vm.beauty,
                  max: 100,
                  min: 0,
                  activeColor: "#ff7f23",
                  backgroundColor: "#bfbfbf",
                  blockColor: "#e94267",
                  blockSize: "20"
                },
                on: { change: _vm.sliderChange }
              })
            ],
            1
          )
        ],
        1
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 33 */
/*!*******************************************************************************************************************!*\
  !*** /Users/guoqiwen/Desktop/uni-app/agora实时音视频/pages/liveshow/liveshow.nvue?vue&type=script&lang=js&mpType=page ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_liveshow_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./liveshow.nvue?vue&type=script&lang=js&mpType=page */ 34);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_liveshow_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_liveshow_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_liveshow_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_liveshow_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_liveshow_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTBqQixDQUFnQixva0JBQUcsRUFBQyIsImZpbGUiOiIzMy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9saXZlc2hvdy5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9saXZlc2hvdy5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///33\n");

/***/ }),
/* 34 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/guoqiwen/Desktop/uni-app/agora实时音视频/pages/liveshow/liveshow.nvue?vue&type=script&lang=js&mpType=page ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__webpack_provided_uni_dot_requireNativePlugin, __f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _chatRoom = _interopRequireDefault(__webpack_require__(/*! ../../components/chat-room */ 36));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar agoraKit = __webpack_provided_uni_dot_requireNativePlugin('TX-AgoraEngineKit');var _default = { components: { chatRoom: _chatRoom.default }, data: function data() {return { uid: 0, role: 1, roomId: 1, hisId: 0, cohostId: 0, localUid: 0, windowHeight: 0, beauty: 0, beautyValue: 0, mode: \"me\", //大小窗口显示模式\n      enable: false, renderModel: 1 };}, onLoad: function onLoad(params) {// 获取上一个页面传入的参数\n    this.windowHeight = uni.getSystemInfoSync().windowHeight; //主要步骤如下：\n    //1. 开启本地视频的预览画面，并开启声音\n    this.uid = 1 + Math.ceil(Math.random() * 1000000);this.role = params.role;this.renderModel = params.renderModel;if (this.role == 1) {this.enable = true;} else {this.enable = false;} //设备的唯一标识\n  }, onReady: function onReady() {this.join();}, onNavigationBarButtonTap: function onNavigationBarButtonTap() {uni.navigateBack({ delta: 1, animationType: 'pop-out', animationDuration: 200 });}, onBackPress: function onBackPress() {this.$refs.maxTxAgoraView.leaveChannel();this.$refs.maxTxAgoraView.destroyRtc();}, methods: { switchCamera: function switchCamera() {this.$refs.maxTxAgoraView.switchCamera();}, startAll: function startAll() {this.$refs.maxTxAgoraView.joinChannel();}, stopAll: function stopAll() {this.$refs.maxTxAgoraView.leaveChannel();}, menuAction: function menuAction() {var me = this;if (this.role == 2) {\n        uni.showActionSheet({\n          itemList: [\"连麦\", \"停止连麦\"],\n          success: function success(res) {\n            var index = res.tapIndex;\n            if (index == 0) {\n              me.localUid = me.uid;\n              agoraKit.setClientRole(1);\n            } else if (index == 1) {\n              me.localUid = 0;\n              agoraKit.setClientRole(2);\n            }\n\n\n          } });\n\n      } else if (this.role == 1) {\n        uni.showActionSheet({\n          itemList: [\"播放音乐\", \"播放音效\"],\n          success: function success(res) {\n            var index = res.tapIndex;\n            if (index == 0) {\n              agoraKit.downloadUrls(\"\", function (result) {\n                __f__(\"log\", result, \" at pages/liveshow/liveshow.nvue:158\");\n                agoraKit.adjustAudioMixingVolume(10);\n                agoraKit.startAudioMixing({\n                  filePath: result.filePath,\n                  loopBack: false,\n                  replace: false,\n                  cycle: -1 });\n\n\n              });\n            } else if (index == 1) {\n              agoraKit.downloadUrls(\"\", function (result) {\n                __f__(\"log\", result, \" at pages/liveshow/liveshow.nvue:170\");\n\n                agoraKit.playEffect({\n                  id: 101,\n                  filePath: result.filePath,\n                  loopCount: 0,\n                  pitch: 1,\n                  pan: 0,\n                  gain: 50,\n                  publish: true });\n\n\n              });\n            }\n\n\n          } });\n\n      }\n\n    },\n    hideKeyboard: function hideKeyboard() {\n      __f__(\"log\", 'hideKeyboard', \" at pages/liveshow/liveshow.nvue:192\");\n    },\n    sliderChange: function sliderChange(e) {\n      __f__(\"log\", e.detail.value, \" at pages/liveshow/liveshow.nvue:195\");\n      this.beauty = e.detail.value;\n      this.beautyValue = this.beauty / 100;\n    },\n\n    onPush: function onPush(e) {\n\n      var result = e.detail;\n      __f__(\"log\", result, \" at pages/liveshow/liveshow.nvue:203\");\n      switch (result.type) {\n        case 'onFirstRemoteVideoDecoded':\n          __f__(\"log\", 'onFirstRemoteVideoDecoded', \" at pages/liveshow/liveshow.nvue:206\");\n          break;\n        case 'onUserJoined':\n          if (this.role == 2) {\n            this.hisId = result.uid;\n          } else {\n            this.cohostId = result.uid;\n          }\n          break;}\n\n    },\n\n    join: function join() {\n\n      this.$refs.maxTxAgoraView.joinChannel();\n\n\n    } },\n\n  beforeCreate: function beforeCreate() {\n\n    var domModule = weex.requireModule('dom');\n    domModule.addRule('fontFace', {\n      'fontFamily': \"iconfont\",\n      'src': 'url(\"' + \"file:/\" + plus.io.convertLocalFileSystemURL(\"_www/static/iconfont.ttf\") + '\")' });\n\n\n  } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js */ 35)[\"default\"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 18)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvbGl2ZXNob3cvbGl2ZXNob3cubnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlFQSxrRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLG1GLGVBQ0EsRUFFQSxjQUNBLDJCQURBLEVBRkEsRUFNQSxJQU5BLGtCQU1BLENBQ0EsU0FDQSxNQURBLEVBRUEsT0FGQSxFQUdBLFNBSEEsRUFJQSxRQUpBLEVBS0EsV0FMQSxFQU1BLFdBTkEsRUFPQSxlQVBBLEVBUUEsU0FSQSxFQVNBLGNBVEEsRUFVQSxVQVZBLEVBVUE7QUFDQSxtQkFYQSxFQVlBLGNBWkEsR0FjQSxDQXJCQSxFQXNCQSxNQXRCQSxrQkFzQkEsTUF0QkEsRUFzQkEsQ0FDQTtBQUVBLDZEQUhBLENBSUE7QUFDQTtBQUNBLHNEQUNBLHdCQUNBLHNDQUNBLHFCQUNBLG1CQUNBLENBRkEsTUFFQSxDQUNBLG9CQUNBLENBYkEsQ0FjQTtBQUNBLEdBckNBLEVBc0NBLE9BdENBLHFCQXNDQSxDQUNBLFlBQ0EsQ0F4Q0EsRUF5Q0Esd0JBekNBLHNDQXlDQSxDQUVBLG1CQUNBLFFBREEsRUFFQSx3QkFGQSxFQUdBLHNCQUhBLElBS0EsQ0FoREEsRUFpREEsV0FqREEseUJBaURBLENBQ0EseUNBQ0EsdUNBQ0EsQ0FwREEsRUFxREEsV0FDQSxZQURBLDBCQUNBLENBQ0EseUNBQ0EsQ0FIQSxFQUlBLFFBSkEsc0JBSUEsQ0FDQSx3Q0FFQSxDQVBBLEVBUUEsT0FSQSxxQkFRQSxDQUNBLHlDQUNBLENBVkEsRUFXQSxVQVhBLHdCQVdBLENBQ0EsY0FDQTtBQUNBO0FBQ0Esa0NBREE7QUFFQSxpQkFGQSxtQkFFQSxHQUZBLEVBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBSEEsTUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsV0FiQTs7QUFlQSxPQWhCQSxNQWdCQTtBQUNBO0FBQ0Esb0NBREE7QUFFQSxpQkFGQSxtQkFFQSxHQUZBLEVBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FEQTtBQUVBLGlDQUZBO0FBR0EsZ0NBSEE7QUFJQSwyQkFKQTs7O0FBT0EsZUFWQTtBQVdBLGFBWkEsTUFZQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5QkFEQTtBQUVBLDJDQUZBO0FBR0EsOEJBSEE7QUFJQSwwQkFKQTtBQUtBLHdCQUxBO0FBTUEsMEJBTkE7QUFPQSwrQkFQQTs7O0FBVUEsZUFiQTtBQWNBOzs7QUFHQSxXQWxDQTs7QUFvQ0E7O0FBRUEsS0FwRUE7QUFxRUEsZ0JBckVBLDBCQXFFQTtBQUNBO0FBQ0EsS0F2RUE7QUF3RUEsZ0JBeEVBLHdCQXdFQSxDQXhFQSxFQXdFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBNUVBOztBQThFQSxVQTlFQSxrQkE4RUEsQ0E5RUEsRUE4RUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FGQSxNQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQVZBOztBQVlBLEtBOUZBOztBQWdHQSxRQWhHQSxrQkFnR0E7O0FBRUE7OztBQUdBLEtBckdBLEVBckRBOztBQTRKQTs7QUFFQTtBQUNBO0FBQ0EsOEJBREE7QUFFQSxzR0FGQTs7O0FBS0EsR0FwS0EsRSIsImZpbGUiOiIzNC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cblx0PHZpZXcgY2xhc3M9XCJjaGF0Qm94XCIgPlxuXHRcdDxUWC1BZ29yYVZpZXcgXG5cdFx0XHQ6Y2hhbm5lbElkPVwicm9vbUlkXCJcblx0XHRcdDp1aWQ9XCJ1aWRcIlxuXHRcdFx0OnJlbmRlck1vZGVsPVwicmVuZGVyTW9kZWxcIlxuXHRcdFx0Y2hhbm5lbFByb2ZpbGU9MVxuXHRcdFx0OmNsaWVudFJvbGU9XCJyb2xlXCJcblx0XHRcdHJlZj1cIm1heFR4QWdvcmFWaWV3XCIgXG5cdFx0XHRjbGFzcz1cIm1heFR4QWdvcmFWaWV3XCIgXG5cdFx0XHQ6c3R5bGU9XCJ7aGVpZ2h0OndpbmRvd0hlaWdodH1cIlxuXHRcdFx0OmNvbnRyYXN0TGV2ZWw9XCJiZWF1dHlWYWx1ZVwiXG5cdFx0XHQ6bGlnaHRlbmluZ0xldmVsPVwiYmVhdXR5VmFsdWVcIlxuXHRcdFx0OnNtb290aG5lZXNMZXZlbD1cImJlYXV0eVZhbHVlXCJcblx0XHRcdDpyZWRuZXNzTGV2ZWw9XCJiZWF1dHlWYWx1ZVwiXG5cdFx0XHQ6cmVtb3RlVWlkPVwiaGlzSWRcIlxuXHRcdFx0cHVibGlzaFN0cmVhbVVybCA9IFwiXCJcblx0XHRcdDplbmFibGVWaWRlbz1cImVuYWJsZVwiXG5cdFx0XHQ6ZW5hYmxlQXVkaW89XCJlbmFibGVcIlxuXHRcdFx0QHN0YXRlY2hhbmdlPVwib25QdXNoXCJcblx0XHQ+PC9UWC1BZ29yYVZpZXc+XG5cdFxuICAgIDx2aWV3IGNsYXNzPVwiaGVhZGVyXCI+XG4gICAgXHQ8dGV4dCBAY2xpY2s9XCJjaGFuZ2VNb2RlXCIgY2xhc3M9XCJ2aWV3SWNvXCI+JiN4ZTYwMDs8L3RleHQ+XG4gICAgXHQ8VFgtQWdvcmFWaWV3XG4gICAgXHQgcmVmPVwibWluVHhBZ29yYVZpZXdcIiBcbiAgICBcdCBjbGFzcz1cIm1pblR4QWdvcmFWaWV3XCIgXG5cdFx0IDpsb2NhbFVpZD1cImxvY2FsVWlkXCJcblx0XHQgOnJlbW90ZVVpZD1cImNvaG9zdElkXCJcbiAgICBcdCA6c3R5bGU9XCJtaW5TdHlsZVwiPjwvVFgtQWdvcmFWaWV3PlxuICAgIDwvdmlldz5cbiAgICBcbiAgICA8dmlldyBjbGFzcz1cImZvb3QtY29udGVudFwiPlxuICAgICAgPGNoYXQtcm9vbSBpZD1cImNoYXRSb29tXCIgcmVmPVwiY2hhdFJvb21cIiBjbGFzcz1cImNoYXQtcm9vbVwiIDpyb29tSWQ9XCJyb29tSWRcIj48L2NoYXQtcm9vbT5cbiAgICA8L3ZpZXc+XG4gICAgXG5cdFx0PHZpZXcgY2xhc3M9XCJ0b29sc1wiPlxuXHRcdFx0PHZpZXcgY2xhc3M9XCJjaXJjbGVCb3hBbGxcIj5cblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjaXJjbGVCb3hcIiBAY2xpY2s9XCJtZW51QWN0aW9uKClcIj5cblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImNpcmNsZUljbyBwaG9uZVwiPiYjeGU2MjY7PC90ZXh0PlxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiaGludFwiPuiPnOWNleaTjeS9nDwvdGV4dD5cblx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImNpcmNsZUJveFwiIEBjbGljaz1cInN0YXJ0QWxsKClcIj5cblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImNpcmNsZUljbyBwaG9uZVwiPiYjeGU2MjY7PC90ZXh0PlxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiaGludFwiPuWKoOWFpeaIv+mXtDwvdGV4dD5cblx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImNpcmNsZUJveFwiIEBjbGljaz1cInN0b3BBbGxcIj5cblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImNpcmNsZUljbyBwaG9uZVwiPiYjeGU2Zjk7PC90ZXh0PlxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiaGludFwiPuemu+W8gOaIv+mXtDwvdGV4dD5cblx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImNpcmNsZUJveFwiIEBjbGljaz1cInN3aXRjaENhbWVyYSgpXCI+XG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJjaXJjbGVJY28gcGhvbmVcIj4mI3hlNmFhOzwvdGV4dD5cblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImhpbnRcIj7ovazmjaLmkYTlg4/lpLQ8L3RleHQ+XG5cdFx0XHRcdDwvdmlldz5cblx0XHRcdDwvdmlldz5cblx0XHQ8L3ZpZXc+XG5cdFx0PHZpZXcgY2xhc3M9XCJzaG93U2xpZGVyXCIgcmVmPVwic2hvd1NsaWRlclwiPlxuXHRcdFx0PHNsaWRlciA6dmFsdWU9XCJiZWF1dHlcIiA6bWF4PVwiMTAwXCIgOm1pbj1cIjBcIiBAY2hhbmdlPVwic2xpZGVyQ2hhbmdlXCIgYWN0aXZlQ29sb3I9XCIjZmY3ZjIzXCIgYmFja2dyb3VuZENvbG9yPVwiI2JmYmZiZlwiIGJsb2NrLWNvbG9yPVwiI2U5NDI2N1wiIGJsb2NrLXNpemU9XCIyMFwiLz5cblx0XHQ8L3ZpZXc+XG5cdFx0XG5cdFx0XG5cdDwvdmlldz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgY2hhdFJvb20gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvY2hhdC1yb29tXCJcblxuY29uc3QgYWdvcmFLaXQgPSB1bmkucmVxdWlyZU5hdGl2ZVBsdWdpbignVFgtQWdvcmFFbmdpbmVLaXQnKVxuZXhwb3J0IGRlZmF1bHQge1xuICBcbiAgY29tcG9uZW50czoge1xuICAgIGNoYXRSb29tXG4gIH0sXG4gIFxuXHRkYXRhKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHR1aWQgOjAsXG5cdFx0XHRyb2xlOjEsXG5cdFx0XHRyb29tSWQ6IDEsXG5cdFx0XHRoaXNJZDowLFxuXHRcdFx0Y29ob3N0SWQ6MCxcblx0XHRcdGxvY2FsVWlkOjAsXG5cdFx0XHR3aW5kb3dIZWlnaHQ6MCxcblx0XHRcdGJlYXV0eTowLFxuXHRcdFx0YmVhdXR5VmFsdWU6MCxcblx0XHRcdG1vZGU6XCJtZVwiLC8v5aSn5bCP56qX5Y+j5pi+56S65qih5byPXG5cdFx0XHRlbmFibGU6ZmFsc2UsXG5cdFx0XHRyZW5kZXJNb2RlbDoxXG5cdFx0fVxuXHR9LFxuXHRvbkxvYWQocGFyYW1zKSB7XG5cdFx0Ly8g6I635Y+W5LiK5LiA5Liq6aG16Z2i5Lyg5YWl55qE5Y+C5pWwXG5cdCBcblx0XHR0aGlzLndpbmRvd0hlaWdodCA9IHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpLndpbmRvd0hlaWdodDtcblx0XHQvL+S4u+imgeatpemqpOWmguS4i++8mlxuXHRcdC8vMS4g5byA5ZCv5pys5Zyw6KeG6aKR55qE6aKE6KeI55S76Z2i77yM5bm25byA5ZCv5aOw6Z+zXG5cdFx0dGhpcy51aWQgID0gIDEgKyBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSoxMDAwMDAwKTtcblx0XHR0aGlzLnJvbGUgPSBwYXJhbXMucm9sZTtcblx0XHR0aGlzLnJlbmRlck1vZGVsID0gcGFyYW1zLnJlbmRlck1vZGVsO1xuXHRcdGlmICh0aGlzLnJvbGUgPT0gMSkge1xuXHRcdCAgIHRoaXMuZW5hYmxlID0gdHJ1ZSA7XG5cdFx0fWVsc2Uge1xuXHRcdCAgIHRoaXMuZW5hYmxlID0gZmFsc2U7XG5cdFx0fVxuXHRcdC8v6K6+5aSH55qE5ZSv5LiA5qCH6K+GXG5cdH0sXG5cdG9uUmVhZHkoKSB7XG5cdFx0dGhpcy5qb2luKCk7XG5cdH0sXG5cdG9uTmF2aWdhdGlvbkJhckJ1dHRvblRhcCgpIHtcblx0XHRcblx0XHR1bmkubmF2aWdhdGVCYWNrKHtcblx0XHQgICAgZGVsdGE6IDEsXG5cdFx0ICAgIGFuaW1hdGlvblR5cGU6ICdwb3Atb3V0Jyxcblx0XHQgICAgYW5pbWF0aW9uRHVyYXRpb246IDIwMFxuXHRcdH0pO1xuXHR9LFxuXHRvbkJhY2tQcmVzcygpIHtcblx0XHR0aGlzLiRyZWZzLm1heFR4QWdvcmFWaWV3LmxlYXZlQ2hhbm5lbCgpO1xuXHRcdHRoaXMuJHJlZnMubWF4VHhBZ29yYVZpZXcuZGVzdHJveVJ0YygpO1xuXHR9LFxuXHRtZXRob2RzOiB7XG5cdFx0c3dpdGNoQ2FtZXJhKCl7XG5cdFx0XHQgdGhpcy4kcmVmcy5tYXhUeEFnb3JhVmlldy5zd2l0Y2hDYW1lcmEoKTtcblx0XHR9LFxuXHRcdHN0YXJ0QWxsKCl7XG5cdFx0XHR0aGlzLiRyZWZzLm1heFR4QWdvcmFWaWV3LmpvaW5DaGFubmVsKCk7XG5cdFx0XHRcblx0XHR9LFxuXHRcdHN0b3BBbGwoKXtcblx0XHRcdHRoaXMuJHJlZnMubWF4VHhBZ29yYVZpZXcubGVhdmVDaGFubmVsKCk7XG5cdFx0fSxcblx0XHRtZW51QWN0aW9uKCl7XG5cdFx0XHR2YXIgbWUgPSB0aGlzO1xuXHRcdFx0IGlmKHRoaXMucm9sZSA9PSAyKSB7XG5cdFx0XHRcdCB1bmkuc2hvd0FjdGlvblNoZWV0KHtcblx0XHRcdFx0IFx0aXRlbUxpc3Q6IFtcIui/num6plwiLCBcIuWBnOatoui/num6plwiXSxcblx0XHRcdFx0IFx0c3VjY2VzcyhyZXMpIHtcblx0XHRcdFx0IFx0XHR2YXIgaW5kZXggPSByZXMudGFwSW5kZXg7XG5cdFx0XHRcdCBcdFx0aWYgKGluZGV4ID09IDApIHtcblx0XHRcdFx0XHRcdFx0bWUubG9jYWxVaWQgPSBtZS51aWQ7XG5cdFx0XHRcdCBcdFx0ICAgIGFnb3JhS2l0LnNldENsaWVudFJvbGUoMSk7XG5cdFx0XHRcdCBcdFx0fSBlbHNlIGlmIChpbmRleCA9PSAxKSB7XG5cdFx0XHRcdFx0XHRcdG1lLmxvY2FsVWlkID0gMDtcblx0XHRcdFx0XHRcdFx0YWdvcmFLaXQuc2V0Q2xpZW50Um9sZSgyKTtcblx0XHRcdFx0IFx0XHR9XG5cdFx0XHRcdCBcdFx0XG5cdFx0XHRcdCBcdFx0XG5cdFx0XHRcdCBcdH1cblx0XHRcdFx0IH0pXG5cdFx0XHQgIH1lbHNlIGlmICh0aGlzLnJvbGUgPT0gMSkge1xuXHRcdFx0XHQgIHVuaS5zaG93QWN0aW9uU2hlZXQoe1xuXHRcdFx0XHQgIFx0aXRlbUxpc3Q6IFtcIuaSreaUvumfs+S5kFwiLFwi5pKt5pS+6Z+z5pWIXCJdLFxuXHRcdFx0XHQgIFx0c3VjY2VzcyhyZXMpIHtcblx0XHRcdFx0ICBcdFx0dmFyIGluZGV4ID0gcmVzLnRhcEluZGV4O1xuXHRcdFx0XHQgIFx0XHRpZiAoaW5kZXggPT0gMCkge1xuXHRcdFx0XHQgIFx0XHQgICBhZ29yYUtpdC5kb3dubG9hZFVybHMoXCJcIixyZXN1bHQ9Pntcblx0XHRcdFx0ICBcdFx0ICAgXHRjb25zb2xlLmxvZyhyZXN1bHQpO1xuXHRcdFx0XHRcdFx0XHRhZ29yYUtpdC5hZGp1c3RBdWRpb01peGluZ1ZvbHVtZSgxMCk7XG5cdFx0XHRcdFx0XHRcdGFnb3JhS2l0LnN0YXJ0QXVkaW9NaXhpbmcoe1xuXHRcdFx0XHRcdFx0XHRcdGZpbGVQYXRoOnJlc3VsdC5maWxlUGF0aCxcblx0XHRcdFx0XHRcdFx0XHRsb29wQmFjazpmYWxzZSxcblx0XHRcdFx0XHRcdFx0XHRyZXBsYWNlOmZhbHNlLFxuXHRcdFx0XHRcdFx0XHRcdGN5Y2xlOi0xXG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHQgIFx0XHQgICBcdFxuXHRcdFx0XHQgIFx0XHQgICB9KTtcblx0XHRcdFx0ICBcdFx0fSBlbHNlIGlmIChpbmRleCA9PSAxKSB7XG5cdFx0XHRcdCAgXHRcdFx0YWdvcmFLaXQuZG93bmxvYWRVcmxzKFwiXCIscmVzdWx0PT57XG5cdFx0XHRcdCAgXHRcdFx0XHRjb25zb2xlLmxvZyhyZXN1bHQpO1xuXHRcdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHRcdGFnb3JhS2l0LnBsYXlFZmZlY3Qoe1xuXHRcdFx0XHRcdFx0XHRcdFx0aWQ6MTAxLFxuXHRcdFx0XHRcdFx0XHRcdFx0ZmlsZVBhdGg6cmVzdWx0LmZpbGVQYXRoLFxuXHRcdFx0XHRcdFx0XHRcdFx0bG9vcENvdW50OjAsXG5cdFx0XHRcdFx0XHRcdFx0XHRwaXRjaDoxLFxuXHRcdFx0XHRcdFx0XHRcdFx0cGFuOjAsXG5cdFx0XHRcdFx0XHRcdFx0XHRnYWluOjUwLFxuXHRcdFx0XHRcdFx0XHRcdFx0cHVibGlzaDp0cnVlXG5cdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdCAgXHRcdFx0XHRcblx0XHRcdFx0ICBcdFx0XHR9KTtcdFxuXHRcdFx0XHQgIFx0XHR9XG5cdFx0XHRcdCAgXHRcdFxuXHRcdFx0XHQgIFx0XHRcblx0XHRcdFx0ICBcdH1cblx0XHRcdFx0ICB9KVxuXHRcdFx0ICB9XG5cdFx0XHRcblx0XHR9LFxuXHRcdGhpZGVLZXlib2FyZCgpe1xuXHRcdFx0Y29uc29sZS5sb2coJ2hpZGVLZXlib2FyZCcpO1xuXHRcdH0sXG5cdFx0c2xpZGVyQ2hhbmdlKGUpe1xuXHRcdFx0Y29uc29sZS5sb2coZS5kZXRhaWwudmFsdWUpO1xuXHRcdFx0dGhpcy5iZWF1dHkgPSBlLmRldGFpbC52YWx1ZTtcblx0XHRcdHRoaXMuYmVhdXR5VmFsdWUgPSB0aGlzLmJlYXV0eSAvIDEwMFxuXHRcdH0sXG5cdFx0XG5cdFx0b25QdXNoKGUpe1xuXHRcdFxuXHRcdFx0dmFyIHJlc3VsdCA9IGUuZGV0YWlsO1xuXHRcdFx0Y29uc29sZS5sb2cocmVzdWx0KTtcblx0XHRcdHN3aXRjaCAocmVzdWx0LnR5cGUpIHtcblx0XHRcdFx0Y2FzZSAnb25GaXJzdFJlbW90ZVZpZGVvRGVjb2RlZCc6XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ29uRmlyc3RSZW1vdGVWaWRlb0RlY29kZWQnKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnb25Vc2VySm9pbmVkJzpcblx0XHRcdFx0ICAgIGlmICh0aGlzLnJvbGUgPT0gMikge1xuXHRcdFx0XHRcdFx0dGhpcy5oaXNJZCA9IHJlc3VsdC51aWQ7XG5cdFx0XHRcdFx0fWVsc2Uge1xuXHRcdFx0XHRcdFx0dGhpcy5jb2hvc3RJZCA9IHJlc3VsdC51aWQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0XG5cdFx0am9pbigpe1xuXHRcdFx0XG5cdFx0ICAgdGhpcy4kcmVmcy5tYXhUeEFnb3JhVmlldy5qb2luQ2hhbm5lbCgpO1xuXHRcdFx0XG5cdFx0ICAgXG5cdFx0fVxuXHR9LFxuXHRiZWZvcmVDcmVhdGUgOiBmdW5jdGlvbigpe1xuXHRcdC8vICNpZmRlZiBBUFAtUExVUy1OVlVFXG5cdFx0Y29uc3QgZG9tTW9kdWxlID0gd2VleC5yZXF1aXJlTW9kdWxlKCdkb20nKVxuXHRcdGRvbU1vZHVsZS5hZGRSdWxlKCdmb250RmFjZScsIHtcblx0XHRcdCdmb250RmFtaWx5JzogXCJpY29uZm9udFwiLFxuXHRcdFx0J3NyYyc6ICd1cmwoXCInK1wiZmlsZTovXCIgKyBwbHVzLmlvLmNvbnZlcnRMb2NhbEZpbGVTeXN0ZW1VUkwoXCJfd3d3L3N0YXRpYy9pY29uZm9udC50dGZcIikrJ1wiKSdcblx0XHR9KTtcblx0XHQvLyAjZW5kaWZcblx0fSxcbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cbi5jaGF0Qm94e1xuXHR3aWR0aDogNzUwcnB4O1xuXHRmbGV4OiAxO1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiMxMTExMTE7XG59XG4uaGVhZGVye1xuXHR3aWR0aDogNzUwcnB4O1xuXHRwb3NpdGlvbjogZml4ZWQ7XG5cdHRvcDowIDtcblx0bGVmdDogMDtcblx0bWFyZ2luOjIwcnB4IDA7XG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi52aWV3SWNve1xuXHRtYXJnaW4tbGVmdDogMjBycHg7XG5cdGZvbnQtZmFtaWx5Omljb25mb250O1xuXHRmb250LXNpemU6NjBycHg7XG5cdGNvbG9yOiAjRkZGRkZGO1xufVxuLm1heFR4QWdvcmFWaWV3e1xuXHR3aWR0aDo3NTBycHg7XG5cdGJhY2tncm91bmQtY29sb3I6IzExMTExMTtcblx0cG9zaXRpb246IGZpeGVkO1xuXHR0b3A6IDA7XG5cdHJpZ2h0OiAwO1xufVxuLm1pblR4QWdvcmFWaWV3e1xuXHR3aWR0aDogMjIwcnB4O1xuXHRoZWlnaHQ6IDMwMHJweDtcblx0cG9zaXRpb246IGZpeGVkO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiMwMDAwMDA7XG5cdHJpZ2h0OjIwcnB4O1xuXHR0b3A6MjBycHg7XG5cblx0Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcblx0Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG5cdGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XG5cdGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xuXG5cdGJvcmRlci1zdHlsZTogc29saWQ7XG5cdGJvcmRlci13aWR0aDogMXB4OyBcblx0Ym9yZGVyLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC4yKTtcblx0XG59XG4uZm9vdHtcblx0d2lkdGg6IDcxMHJweDtcblx0cG9zaXRpb246IGZpeGVkO1xuXHRib3R0b206MDtcblx0bGVmdDogMDtcblx0bWFyZ2luOjIwcnB4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmNpcmNsZUJveEFsbHtcblx0Ly8gZmxleC1kaXJlY3Rpb246IHJvdztcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uaW5wdXRCb3hBbGx7XG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uaW5wdXRCb3h7XG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdG1hcmdpbjogMTVycHg7XG5cdHBhZGRpbmc6IDE1cnB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuXHRib3JkZXItcmFkaXVzOiA2cHg7XG59XG4uaW5wdXRUaXRsZXtcblx0aGVpZ2h0OjgwcnB4O1xuXHRsaW5lLWhlaWdodDogODBycHg7XG59XG4uaW5wdXR7XG5cdGhlaWdodDogODBycHg7XG5cdHdpZHRoOiAzNDBycHg7XG5cdGZvbnQtc2l6ZTozMHJweDtcblx0cGFkZGluZzogMTVycHg7XG59XG4uam9pbntcblx0YmFja2dyb3VuZC1jb2xvcjogI0RENTI0RDtcblx0d2lkdGg6IDE2MHJweDtcblx0aGVpZ2h0OiAxMjBycHg7XG5cdGxpbmUtaGVpZ2h0OiAxMjBycHg7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0Y29sb3I6ICNGRkZGRkY7XG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4uY2lyY2xlQm94e1xuXHR3aWR0aDogMTUwcnB4O1xuXHRwYWRkaW5nOiAxMHJweCAwO1xuXHRtYXJnaW46MTBycHg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jaXJjbGVJY297XG5cdGZvbnQtc2l6ZTogMzZycHg7XG5cdHdpZHRoOjY0cnB4O1xuXHRoZWlnaHQ6NjRycHg7XG5cdGxpbmUtaGVpZ2h0OiA2NHJweDtcblx0Ym9yZGVyLXJhZGl1czogNTAwcHg7XG5cdGJvcmRlci1zdHlsZTogc29saWQ7XG5cdGJvcmRlci13aWR0aDogMXB4OyBcblx0Ym9yZGVyLWNvbG9yOiNGRkZGRkY7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0Zm9udC1mYW1pbHk6aWNvbmZvbnQ7XG5cdGNvbG9yOiAjRkZGRkZGO1xufVxuLnBob25le1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiNjNTQzM2E7XG5cdGJvcmRlci1zdHlsZTogc29saWQ7XG5cdGJvcmRlci13aWR0aDogMXB4OyBcblx0Ym9yZGVyLWNvbG9yOiNjNTQzM2E7XG59XG4uaGludHtcblx0Zm9udC1zaXplOiAyMnJweDtcblx0Y29sb3I6ICNGRkZGRkY7XG5cdHBhZGRpbmctdG9wOiAyMHJweDtcbn1cblxuXG4udG9vbHMge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDEwMHJweDtcbiAgei1pbmRleDogMTE7XG5cbiAgd2lkdGg6IDE1MHJweDtcbn1cblxuLnNob3dTbGlkZXJ7XG5cdHBvc2l0aW9uOiBmaXhlZDtcblx0cmlnaHQ6IDE4MHJweDtcblx0Ym90dG9tOiAxMDBycHg7XG5cdHotaW5kZXg6MTI7XG5cdHdpZHRoOiAyMDBycHg7XG59XG4uZm9vdC1jb250ZW50IHtcbiAgXG4gIC8qICNpZm5kZWYgQVBQLVBMVVMtTlZVRSAqL1xuICBkaXNwbGF5OiBmbGV4O1xuICAvKiAjZW5kaWYgKi9cbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICBcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBcbiAgaGVpZ2h0OiA1MDBycHg7ICAgICAgICAgLy8g6IGK5aSp5Yy65pyA6auY5pi+56S655qE6auY5bqmXG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIFxuICBwYWRkaW5nLXRvcDogMjBycHg7XG4gIHBhZGRpbmctcmlnaHQ6IDQwcnB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBycHg7XG4gIHBhZGRpbmctbGVmdDogNDBycHg7XG59XG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///34\n");

/***/ }),
/* 35 */
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = requireNativePlugin;function requireNativePlugin(name) {
  return weex.requireModule(name);
}

/***/ }),
/* 36 */
/*!****************************************************************************!*\
  !*** /Users/guoqiwen/Desktop/uni-app/agora实时音视频/components/chat-room.nvue ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _chat_room_nvue_vue_type_template_id_61d97e92___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat-room.nvue?vue&type=template&id=61d97e92& */ 37);\n/* harmony import */ var _chat_room_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat-room.nvue?vue&type=script&lang=js& */ 39);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _chat_room_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _chat_room_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 11);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./chat-room.nvue?vue&type=style&index=0&lang=scss& */ 41).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./chat-room.nvue?vue&type=style&index=0&lang=scss& */ 41).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _chat_room_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _chat_room_nvue_vue_type_template_id_61d97e92___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _chat_room_nvue_vue_type_template_id_61d97e92___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"5f02d543\",\n  false,\n  _chat_room_nvue_vue_type_template_id_61d97e92___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"Users/guoqiwen/Desktop/uni-app/agora实时音视频/components/chat-room.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdUg7QUFDdkg7QUFDOEQ7QUFDTDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLDREQUFvRDtBQUN4RyxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsNERBQW9EO0FBQzdHOztBQUVBOztBQUVBO0FBQzZNO0FBQzdNLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLGdGQUFNO0FBQ1IsRUFBRSxxRkFBTTtBQUNSLEVBQUUsOEZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUseUZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiIzNi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vY2hhdC1yb29tLm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjFkOTdlOTImXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9jaGF0LXJvb20ubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vY2hhdC1yb29tLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9jaGF0LXJvb20ubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIikuZGVmYXVsdCwgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMuc3R5bGUscmVxdWlyZShcIi4vY2hhdC1yb29tLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIpLmRlZmF1bHQpXG4gICAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIFwiNWYwMmQ1NDNcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiVXNlcnMvZ3VvcWl3ZW4vRGVza3RvcC91bmktYXBwL2Fnb3Jh5a6e5pe26Z+z6KeG6aKRL2NvbXBvbmVudHMvY2hhdC1yb29tLm52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///36\n");

/***/ }),
/* 37 */
/*!***********************************************************************************************************!*\
  !*** /Users/guoqiwen/Desktop/uni-app/agora实时音视频/components/chat-room.nvue?vue&type=template&id=61d97e92& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chat_room_nvue_vue_type_template_id_61d97e92___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./chat-room.nvue?vue&type=template&id=61d97e92& */ 38);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chat_room_nvue_vue_type_template_id_61d97e92___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chat_room_nvue_vue_type_template_id_61d97e92___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chat_room_nvue_vue_type_template_id_61d97e92___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chat_room_nvue_vue_type_template_id_61d97e92___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 38 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/guoqiwen/Desktop/uni-app/agora实时音视频/components/chat-room.nvue?vue&type=template&id=61d97e92& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: ["chat-block"] },
    [
      _c(
        "scroll-view",
        {
          staticClass: ["message-block"],
          attrs: { scrollWithAnimation: "true" }
        },
        [
          _c(
            "view",
            { staticClass: ["message-main"], attrs: { id: "message-main" } },
            [
              _vm._l(_vm.messageList, function(item, index) {
                return _c("block", { key: index }, [
                  _c("view", { staticClass: ["message-box"] }, [
                    _c(
                      "view",
                      { staticClass: ["avatar-box", "message-box-avatar-box"] },
                      [
                        _c("u-image", {
                          staticClass: [
                            "avatar",
                            "avatar-box-avatar",
                            "message-box-avatar"
                          ],
                          attrs: {
                            src: item.avatarUrl
                              ? item.avatarUrl
                              : "/static/logo.png"
                          }
                        })
                      ],
                      1
                    ),
                    _c(
                      "view",
                      {
                        class: [
                          "message-content",
                          "message-box-content",
                          item.messageType === "Join" ? "room-info" : ""
                        ]
                      },
                      [
                        item.messageType === "Join"
                          ? _c(
                              "view",
                              {
                                class: [
                                  "message",
                                  "message-box-message",
                                  "message-box-message-info"
                                ]
                              },
                              [
                                _c(
                                  "u-text",
                                  {
                                    staticClass: [
                                      "message-box-content-message",
                                      "message-box-message-info-text"
                                    ]
                                  },
                                  [_vm._v(_vm._s(item.message))]
                                )
                              ]
                            )
                          : _c(
                              "view",
                              { class: ["message", "message-box-message"] },
                              [
                                _c(
                                  "u-text",
                                  {
                                    staticClass: ["message-box-content-message"]
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(item.nickName) +
                                        "：" +
                                        _vm._s(item.message)
                                    )
                                  ]
                                )
                              ]
                            )
                      ]
                    )
                  ])
                ])
              }),
              _c("view", { staticClass: ["message-box-space"] })
            ],
            2
          )
        ]
      ),
      _c("view", { staticClass: ["bottom-bar"] }, [
        _c(
          "view",
          { staticClass: ["input-content", "bottom-bar-input-content"] },
          [
            _c("u-input", {
              staticClass: ["input", "bottom-bar-input-content-input"],
              attrs: {
                type: "text",
                confirmType: "send",
                placeholder: "说点什么...",
                value: _vm.message
              },
              on: {
                confirm: _vm.sendMessage,
                input: function($event) {
                  _vm.message = $event.detail.value
                }
              }
            })
          ],
          1
        )
      ])
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 39 */
/*!*****************************************************************************************************!*\
  !*** /Users/guoqiwen/Desktop/uni-app/agora实时音视频/components/chat-room.nvue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chat_room_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./chat-room.nvue?vue&type=script&lang=js& */ 40);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chat_room_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chat_room_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chat_room_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chat_room_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chat_room_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVpQixDQUFnQiwwakJBQUcsRUFBQyIsImZpbGUiOiIzOS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jaGF0LXJvb20ubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NoYXQtcm9vbS5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///39\n");

/***/ }),
/* 40 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/guoqiwen/Desktop/uni-app/agora实时音视频/components/chat-room.nvue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__webpack_provided_uni_dot_requireNativePlugin, __f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\nvar txRtm = __webpack_provided_uni_dot_requireNativePlugin('TX-AgoraRTM');var _default2 =\n\n{\n  name: 'chat-room',\n\n  data: function data() {\n    return {\n\n      chatroomId: '',\n\n      userInfo: { // 我的信息\n        nickName: '我的大名',\n        avatarUrl: '', // 我的头像\n        userId: '9527' },\n\n\n      message: '', // 用户输入的，不用动\n      messageList: [], // 消息列表\n      chatScrollTop: 0 };\n\n  },\n\n  props: {\n    roomId: { type: String, default: function _default() {return '';} } },\n\n\n  watch: {\n    roomId: function (_roomId) {function roomId(_x) {return _roomId.apply(this, arguments);}roomId.toString = function () {return _roomId.toString();};return roomId;}(function (val) {\n      __f__(\"log\", 'watch roomId', roomId, \" at components/chat-room.nvue:76\");\n      this.chatroomId = val;\n    }) },\n\n\n  created: function created() {var _this = this;\n    var userId = plus.device.uuid;\n    txRtm.loginRtm({\n      \"appId\": \"c55f8994e73f484ba557c9c7d232b3e0\",\n      \"rtmToken\": \"\",\n      \"userId\": userId },\n    function (result) {\n      switch (result.type) {\n        case 'AgoraRtmLoginSuccess':\n          __f__(\"log\", 'AgoraRtmLoginSuccess', \" at components/chat-room.nvue:90\");\n          txRtm.joinChannel({\n            \"channelId\": \"1\" },\n          function (result) {\n            __f__(\"log\", result, \" at components/chat-room.nvue:94\");\n\n            switch (result.type) {\n              case 'onMessageReceivedFromMember':\n                // 超过200条消息，就删除最早的1条再加入新消息\n                if (_this.messageList.length > 200) {\n                  _this.messageList.shift();\n                }\n                _this.messageList.push({\n                  nickName: _this.userInfo.nickName,\n                  avatarUrl: _this.userInfo.avatarUrl,\n                  roomNo: _this.roomNo,\n                  userId: _this.userInfo.userId, // send message member\n                  date: new Date(),\n                  message: result.msg,\n                  messageType: ' ',\n                  isSelf: false });}\n\n\n\n          });\n          break;}\n\n    });\n  },\n\n  mounted: function mounted() {\n    this.$nextTick(function () {\n\n    });\n  },\n\n  destroyed: function destroyed() {\n  },\n\n  methods: {\n\n    sendMessage: function sendMessage(e, type, socketClient) {\n      __f__(\"log\", 'sendMessage', e, \" at components/chat-room.nvue:132\");\n\n      var message = e.detail && e.detail.value ? e.detail.value : e;\n      if (typeof message !== 'string') return __f__(\"log\", 'message not a string', message, \" at components/chat-room.nvue:135\");\n      if (message && message.trim()) {\n\n        txRtm.sendChannelMessage(message, function (result) {\n\n        });\n        // websocket code can put here\n        // \n\n        var messageType = type || '';\n        if (message.indexOf('{') === 0 && message.lastIndexOf('}' !== 0)) {\n          message = message.replace(/{|}/g, '');\n          messageType = 'Join';\n        }\n        // 超过200条消息，就删除最早的1条再加入新消息\n        if (this.messageList.length > 200) {\n          this.messageList.shift();\n        }\n        this.messageList.push({\n          nickName: this.userInfo.nickName,\n          avatarUrl: this.userInfo.avatarUrl,\n          roomNo: this.roomNo,\n          userId: this.userInfo.userId, // send message member\n          date: new Date(),\n          message: message,\n          messageType: messageType,\n          isSelf: true });\n\n\n        // 清空输入框的内容\n        // console.log('清空输入框的内容');\n        this.message = '';\n      } else {\n        __f__(\"log\", 'message socketClient', message, this.socketClient, socketClient, \" at components/chat-room.nvue:168\");\n      }\n    } } };exports.default = _default2;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js */ 35)[\"default\"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 18)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy9jaGF0LXJvb20ubnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQStDQSwwRTs7QUFFQTtBQUNBLG1CQURBOztBQUdBLE1BSEEsa0JBR0E7QUFDQTs7QUFFQSxvQkFGQTs7QUFJQTtBQUNBLHdCQURBO0FBRUEscUJBRkEsRUFFQTtBQUNBLHNCQUhBLEVBSkE7OztBQVVBLGlCQVZBLEVBVUE7QUFDQSxxQkFYQSxFQVdBO0FBQ0Esc0JBWkE7O0FBY0EsR0FsQkE7O0FBb0JBO0FBQ0EsdUVBREEsRUFwQkE7OztBQXdCQTtBQUNBLFVBREEsdUtBQ0EsR0FEQSxFQUNBO0FBQ0E7QUFDQTtBQUNBLEtBSkEsR0F4QkE7OztBQStCQSxTQS9CQSxxQkErQkE7QUFDQTtBQUNBO0FBQ0EsaURBREE7QUFFQSxvQkFGQTtBQUdBLHNCQUhBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQURBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQURBO0FBRUEscURBRkE7QUFHQSxzQ0FIQTtBQUlBLCtDQUpBLEVBSUE7QUFDQSxrQ0FMQTtBQU1BLHFDQU5BO0FBT0Esa0NBUEE7QUFRQSwrQkFSQSxJQU5BOzs7O0FBa0JBLFdBdkJBO0FBd0JBLGdCQTNCQTs7QUE2QkEsS0FsQ0E7QUFtQ0EsR0FwRUE7O0FBc0VBLFNBdEVBLHFCQXNFQTtBQUNBOztBQUVBLEtBRkE7QUFHQSxHQTFFQTs7QUE0RUEsV0E1RUEsdUJBNEVBO0FBQ0EsR0E3RUE7O0FBK0VBOztBQUVBLGVBRkEsdUJBRUEsQ0FGQSxFQUVBLElBRkEsRUFFQSxZQUZBLEVBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsU0FGQTtBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FEQTtBQUVBLDRDQUZBO0FBR0EsNkJBSEE7QUFJQSxzQ0FKQSxFQUlBO0FBQ0EsMEJBTEE7QUFNQSwwQkFOQTtBQU9BLGtDQVBBO0FBUUEsc0JBUkE7OztBQVdBO0FBQ0E7QUFDQTtBQUNBLE9BL0JBLE1BK0JBO0FBQ0E7QUFDQTtBQUNBLEtBekNBLEVBL0VBLEUiLCJmaWxlIjoiNDAuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDx2aWV3IGNsYXNzPVwiY2hhdC1ibG9ja1wiPlxuXG4gICAgPHNjcm9sbC12aWV3IGNsYXNzPVwibWVzc2FnZS1ibG9ja1wiICBzY3JvbGwtd2l0aC1hbmltYXRpb249XCJ0cnVlXCI+XG4gICAgICA8dmlldyBjbGFzcz1cIm1lc3NhZ2UtbWFpblwiIGlkPVwibWVzc2FnZS1tYWluXCI+XG4gICAgICAgIDxibG9jayB2LWZvcj1cIihpdGVtLCBpbmRleCkgaW4gbWVzc2FnZUxpc3RcIiA6a2V5PVwiaW5kZXhcIj5cbiAgICAgICAgICA8dmlldyBjbGFzcz1cIm1lc3NhZ2UtYm94XCI+XG4gICAgICAgICAgICA8dmlldyBjbGFzcz1cImF2YXRhci1ib3ggbWVzc2FnZS1ib3gtYXZhdGFyLWJveFwiPlxuICAgICAgICAgICAgICA8aW1hZ2UgY2xhc3M9XCJhdmF0YXIgYXZhdGFyLWJveC1hdmF0YXIgbWVzc2FnZS1ib3gtYXZhdGFyXCIgXG4gICAgICAgICAgICAgICAgICAgIDpzcmM9XCJpdGVtLmF2YXRhclVybCA/IGl0ZW0uYXZhdGFyVXJsIDogJy9zdGF0aWMvbG9nby5wbmcnXCIgLz5cbiAgICAgICAgICAgIDwvdmlldz5cbiAgICAgICAgICAgIDx2aWV3IDpjbGFzcz1cIlsnbWVzc2FnZS1jb250ZW50JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICdtZXNzYWdlLWJveC1jb250ZW50JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIChpdGVtLm1lc3NhZ2VUeXBlID09PSAnSm9pbicpID8gJ3Jvb20taW5mbycgOiAnJ11cIj5cblxuICAgICAgICAgICAgICA8dmlldyB2LWlmPVwiaXRlbS5tZXNzYWdlVHlwZSA9PT0gJ0pvaW4nXCJcbiAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwiWydtZXNzYWdlJywgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICdtZXNzYWdlLWJveC1tZXNzYWdlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ21lc3NhZ2UtYm94LW1lc3NhZ2UtaW5mbyddXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwibWVzc2FnZS1ib3gtY29udGVudC1tZXNzYWdlIG1lc3NhZ2UtYm94LW1lc3NhZ2UtaW5mby10ZXh0XCI+e3tpdGVtLm1lc3NhZ2V9fTwvdGV4dD5cbiAgICAgICAgICAgICAgPC92aWV3PlxuICAgICAgICAgICAgICA8dmlldyB2LWVsc2VcbiAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwiWydtZXNzYWdlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ21lc3NhZ2UtYm94LW1lc3NhZ2UnXVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dCBjbGFzcz1cIm1lc3NhZ2UtYm94LWNvbnRlbnQtbWVzc2FnZVwiPnt7aXRlbS5uaWNrTmFtZX1977yae3tpdGVtLm1lc3NhZ2V9fTwvdGV4dD5cbiAgICAgICAgICAgICAgPC92aWV3PlxuXG4gICAgICAgICAgICA8L3ZpZXc+XG4gICAgICAgICAgPC92aWV3PlxuICAgICAgICA8L2Jsb2NrPlxuICAgICAgICA8dmlldyBjbGFzcz1cIm1lc3NhZ2UtYm94LXNwYWNlXCI+PC92aWV3PlxuICAgIFxuICAgICAgPC92aWV3PlxuICAgIDwvc2Nyb2xsLXZpZXc+XG5cdDx2aWV3IGNsYXNzPVwiYm90dG9tLWJhclwiPlxuXHQgIDx2aWV3IGNsYXNzPVwiaW5wdXQtY29udGVudCBib3R0b20tYmFyLWlucHV0LWNvbnRlbnRcIj5cblx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImlucHV0IGJvdHRvbS1iYXItaW5wdXQtY29udGVudC1pbnB1dFwiIHYtbW9kZWw9XCJtZXNzYWdlXCIgQGNvbmZpcm09XCJzZW5kTWVzc2FnZVwiIGNvbmZpcm0tdHlwZT1cInNlbmRcIiBwbGFjZWhvbGRlcj1cIuivtOeCueS7gOS5iC4uLlwiIC8+XG5cdCAgPC92aWV3PlxuXHQgIDwhLS0gPHZpZXcgY2xhc3M9XCJjaGF0LXRvb2xcIj5cblx0XHRcblx0ICA8L3ZpZXc+IC0tPlxuXHQ8L3ZpZXc+XG4gIDwvdmlldz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cdFxuY29uc3QgdHhSdG0gPSB1bmkucmVxdWlyZU5hdGl2ZVBsdWdpbignVFgtQWdvcmFSVE0nKTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnY2hhdC1yb29tJyxcblxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBcbiAgICAgIGNoYXRyb29tSWQ6ICcnLFxuICAgICAgXG4gICAgICB1c2VySW5mbzogeyAgICAgICAgICAgICAgLy8g5oiR55qE5L+h5oGvXG4gICAgICAgIG5pY2tOYW1lOiAn5oiR55qE5aSn5ZCNJyxcbiAgICAgICAgYXZhdGFyVXJsOiAnJywgICAgICAgICAvLyDmiJHnmoTlpLTlg49cbiAgICAgICAgdXNlcklkOiAnOTUyNydcbiAgICAgIH0sXG5cbiAgICAgIG1lc3NhZ2U6ICcnLCAgICAgICAgICAgIC8vIOeUqOaIt+i+k+WFpeeahO+8jOS4jeeUqOWKqFxuICAgICAgbWVzc2FnZUxpc3Q6IFtdLCAgICAgICAgLy8g5raI5oGv5YiX6KGoXG4gICAgICBjaGF0U2Nyb2xsVG9wOiAwXG4gICAgfVxuICB9LFxuICBcbiAgcHJvcHM6IHtcbiAgICByb29tSWQ6IHsgdHlwZTogU3RyaW5nLCBkZWZhdWx0KCkgeyByZXR1cm4gJycgfSB9LFxuICB9LFxuICBcbiAgd2F0Y2g6IHtcbiAgICByb29tSWQodmFsKSB7XG4gICAgICBjb25zb2xlLmxvZygnd2F0Y2ggcm9vbUlkJywgcm9vbUlkKTtcbiAgICAgIHRoaXMuY2hhdHJvb21JZCA9IHZhbFxuICAgIH1cbiAgfSxcbiAgXG4gIGNyZWF0ZWQoKSB7XG4gICAgbGV0IHVzZXJJZCA9IHBsdXMuZGV2aWNlLnV1aWQ7XG5cdHR4UnRtLmxvZ2luUnRtKHtcblx0XHRcImFwcElkXCI6XCJjNTVmODk5NGU3M2Y0ODRiYTU1N2M5YzdkMjMyYjNlMFwiLFxuXHRcdFwicnRtVG9rZW5cIjpcIlwiLFxuXHRcdFwidXNlcklkXCI6dXNlcklkXG5cdH0scmVzdWx0PT57XG5cdFx0c3dpdGNoIChyZXN1bHQudHlwZSkge1xuXHRcdFx0Y2FzZSAnQWdvcmFSdG1Mb2dpblN1Y2Nlc3MnOlxuXHRcdFx0XHRjb25zb2xlLmxvZygnQWdvcmFSdG1Mb2dpblN1Y2Nlc3MnKTtcblx0XHRcdFx0dHhSdG0uam9pbkNoYW5uZWwoe1xuXHRcdFx0XHRcdCBcImNoYW5uZWxJZFwiOlwiMVwiXG5cdFx0XHRcdH0scmVzdWx0PT57XG5cdFx0XHRcdFx0Y29uc29sZS5sb2cocmVzdWx0KTtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRzd2l0Y2ggKHJlc3VsdC50eXBlKSB7XG5cdFx0XHRcdFx0XHRjYXNlICdvbk1lc3NhZ2VSZWNlaXZlZEZyb21NZW1iZXInOlxuXHRcdFx0XHRcdFx0XHQvLyDotoXov4cyMDDmnaHmtojmga/vvIzlsLHliKDpmaTmnIDml6nnmoQx5p2h5YaN5Yqg5YWl5paw5raI5oGvXG5cdFx0XHRcdFx0XHRcdGlmICh0aGlzLm1lc3NhZ2VMaXN0Lmxlbmd0aCA+IDIwMCkge1xuXHRcdFx0XHRcdFx0XHQgIHRoaXMubWVzc2FnZUxpc3Quc2hpZnQoKVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdHRoaXMubWVzc2FnZUxpc3QucHVzaCh7XG5cdFx0XHRcdFx0XHRcdCAgbmlja05hbWU6IHRoaXMudXNlckluZm8ubmlja05hbWUsXG5cdFx0XHRcdFx0XHRcdCAgYXZhdGFyVXJsOiB0aGlzLnVzZXJJbmZvLmF2YXRhclVybCxcblx0XHRcdFx0XHRcdFx0ICByb29tTm86IHRoaXMucm9vbU5vLFxuXHRcdFx0XHRcdFx0XHQgIHVzZXJJZDogdGhpcy51c2VySW5mby51c2VySWQsICAgLy8gc2VuZCBtZXNzYWdlIG1lbWJlclxuXHRcdFx0XHRcdFx0XHQgIGRhdGU6IG5ldyBEYXRlKCksXG5cdFx0XHRcdFx0XHRcdCAgbWVzc2FnZTogcmVzdWx0Lm1zZyxcblx0XHRcdFx0XHRcdFx0ICBtZXNzYWdlVHlwZTogJyAnLFxuXHRcdFx0XHRcdFx0XHQgIGlzU2VsZjogZmFsc2Vcblx0XHRcdFx0XHRcdFx0fSkgIFxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcblx0XHRcdFx0fSlcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9KVxuICB9LFxuICBcbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB7XG4gICAgICBcbiAgICB9KVxuICB9LFxuICBcbiAgZGVzdHJveWVkKCkge1xuICB9LFxuXG4gIG1ldGhvZHM6IHtcblxuICAgIHNlbmRNZXNzYWdlKGUsIHR5cGUsIHNvY2tldENsaWVudCkge1xuICAgICAgY29uc29sZS5sb2coJ3NlbmRNZXNzYWdlJywgZSk7XG5cbiAgICAgIGxldCBtZXNzYWdlID0gKGUuZGV0YWlsICYmIGUuZGV0YWlsLnZhbHVlKSA/IGUuZGV0YWlsLnZhbHVlIDogZVxuICAgICAgaWYgKHR5cGVvZiBtZXNzYWdlICE9PSAnc3RyaW5nJykgcmV0dXJuIGNvbnNvbGUubG9nKCdtZXNzYWdlIG5vdCBhIHN0cmluZycsIG1lc3NhZ2UpXG4gICAgICBpZiAobWVzc2FnZSAmJiBtZXNzYWdlLnRyaW0oKSkge1xuICAgICAgICBcblx0XHR0eFJ0bS5zZW5kQ2hhbm5lbE1lc3NhZ2UobWVzc2FnZSxyZXN1bHQ9Pntcblx0XHRcdFxuXHRcdH0pO1xuICAgICAgICAvLyB3ZWJzb2NrZXQgY29kZSBjYW4gcHV0IGhlcmVcbiAgICAgICAgLy8gXG4gICAgXG4gICAgICAgIGxldCBtZXNzYWdlVHlwZSA9IHR5cGUgfHwgJydcbiAgICAgICAgaWYgKG1lc3NhZ2UuaW5kZXhPZigneycpID09PSAwICYmIG1lc3NhZ2UubGFzdEluZGV4T2YoJ30nICE9PSAwKSkge1xuICAgICAgICAgIG1lc3NhZ2UgPSBtZXNzYWdlLnJlcGxhY2UoL3t8fS9nLCAnJylcbiAgICAgICAgICBtZXNzYWdlVHlwZSA9ICdKb2luJ1xuICAgICAgICB9XG4gICAgICAgIC8vIOi2hei/hzIwMOadoea2iOaBr++8jOWwseWIoOmZpOacgOaXqeeahDHmnaHlho3liqDlhaXmlrDmtojmga9cbiAgICAgICAgaWYgKHRoaXMubWVzc2FnZUxpc3QubGVuZ3RoID4gMjAwKSB7XG4gICAgICAgICAgdGhpcy5tZXNzYWdlTGlzdC5zaGlmdCgpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tZXNzYWdlTGlzdC5wdXNoKHtcbiAgICAgICAgICBuaWNrTmFtZTogdGhpcy51c2VySW5mby5uaWNrTmFtZSxcbiAgICAgICAgICBhdmF0YXJVcmw6IHRoaXMudXNlckluZm8uYXZhdGFyVXJsLFxuICAgICAgICAgIHJvb21ObzogdGhpcy5yb29tTm8sXG4gICAgICAgICAgdXNlcklkOiB0aGlzLnVzZXJJbmZvLnVzZXJJZCwgICAvLyBzZW5kIG1lc3NhZ2UgbWVtYmVyXG4gICAgICAgICAgZGF0ZTogbmV3IERhdGUoKSxcbiAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlLFxuICAgICAgICAgIG1lc3NhZ2VUeXBlOiBtZXNzYWdlVHlwZSxcbiAgICAgICAgICBpc1NlbGY6IHRydWVcbiAgICAgICAgfSlcbiAgICBcbiAgICAgICAgLy8g5riF56m66L6T5YWl5qGG55qE5YaF5a65XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCfmuIXnqbrovpPlhaXmoYbnmoTlhoXlrrknKTtcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gJydcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdtZXNzYWdlIHNvY2tldENsaWVudCcsIG1lc3NhZ2UsIHRoaXMuc29ja2V0Q2xpZW50LCBzb2NrZXRDbGllbnQpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBcbiAgfVxuXG59XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG5AaW1wb3J0ICcuL2NoYXQtcm9vbSc7XG5cbjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///40\n");

/***/ }),
/* 41 */
/*!**************************************************************************************************************!*\
  !*** /Users/guoqiwen/Desktop/uni-app/agora实时音视频/components/chat-room.nvue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chat_room_nvue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--9-oneOf-0-2!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-0-3!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-4!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./chat-room.nvue?vue&type=style&index=0&lang=scss& */ 42);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chat_room_nvue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chat_room_nvue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chat_room_nvue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chat_room_nvue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chat_room_nvue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 42 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/guoqiwen/Desktop/uni-app/agora实时音视频/components/chat-room.nvue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "chat-block": {
    "position": "absolute",
    "top": 0,
    "bottom": 0,
    "left": 0,
    "right": "20rpx"
  },
  "message-block": {
    "position": "absolute",
    "top": 0,
    "bottom": "100rpx",
    "left": "20rpx",
    "right": 0,
    "flexDirection": "column-reverse",
    "paddingTop": "20rpx",
    "paddingRight": 0,
    "paddingBottom": "20rpx",
    "paddingLeft": 0
  },
  "message-box": {
    "flexDirection": "column",
    "paddingTop": "10rpx",
    "paddingBottom": "10rpx",
    "width": "510rpx"
  },
  "message-box-avatar": {
    "width": "60rpx",
    "height": "60rpx"
  },
  "message-box-avatar-box": {
    "width": "60rpx",
    "height": "60rpx",
    "position": "absolute",
    "left": "10rpx",
    "top": "10rpx"
  },
  "message-box-content": {
    "marginLeft": "80rpx"
  },
  "message-box-message": {
    "paddingTop": "15rpx",
    "paddingRight": "15rpx",
    "paddingBottom": "15rpx",
    "paddingLeft": "15rpx",
    "lineHeight": 1.5,
    "borderTopLeftRadius": "20rpx",
    "borderTopRightRadius": "20rpx",
    "borderBottomRightRadius": "20rpx",
    "borderBottomLeftRadius": "20rpx",
    "color": "#444444",
    "fontSize": "28rpx",
    "backgroundColor": "rgba(0,0,0,0.3)"
  },
  "message-box-name": {
    "display": "inline-block",
    "fontSize": "26rpx",
    "color": "rgba(255,255,255,0.8)"
  },
  "message-box-content-message": {
    "display": "inline-block",
    "fontSize": "26rpx",
    "color": "rgba(255,255,255,0.8)"
  },
  "message-box-message-info-text": {
    "color": "#0086B3"
  },
  "bottom-bar": {
    "flexDirection": "row",
    "position": "fixed",
    "bottom": 0,
    "paddingTop": "20rpx",
    "paddingRight": "30rpx",
    "paddingBottom": "20rpx",
    "paddingLeft": "30rpx",
    "width": "750rpx"
  },
  "bottom-bar-input-content": {
    "flex": 1
  },
  "bottom-bar-input-content-input": {
    "paddingTop": 0,
    "paddingRight": "20rpx",
    "paddingBottom": 0,
    "paddingLeft": "20rpx",
    "lineHeight": 1,
    "borderTopLeftRadius": "999",
    "borderTopRightRadius": "999",
    "borderBottomRightRadius": "999",
    "borderBottomLeftRadius": "999",
    "backgroundColor": "rgba(255,255,255,0.3)",
    "height": "70rpx",
    "fontSize": "26rpx",
    "color": "#ffffff",
    "borderStyle": "solid",
    "borderWidth": "2rpx",
    "borderColor": "rgba(0,0,0,0.3)"
  },
  "bottom-bar-icon-opt": {
    "width": "72rpx",
    "height": "72rpx",
    "marginLeft": "10rpx",
    "borderTopLeftRadius": "999rpx",
    "borderTopRightRadius": "999rpx",
    "borderBottomRightRadius": "999rpx",
    "borderBottomLeftRadius": "999rpx",
    "backgroundColor": "rgba(0,0,0,0.1)",
    "textAlign": "center",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "bottom-bar-opt-img": {
    "width": "60rpx",
    "height": "60rpx"
  }
}

/***/ }),
/* 43 */
/*!****************************************************************************************************************************!*\
  !*** /Users/guoqiwen/Desktop/uni-app/agora实时音视频/pages/liveshow/liveshow.nvue?vue&type=style&index=0&lang=scss&mpType=page ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_liveshow_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--9-oneOf-0-2!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-0-3!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-4!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./liveshow.nvue?vue&type=style&index=0&lang=scss&mpType=page */ 44);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_liveshow_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_liveshow_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_liveshow_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_liveshow_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_liveshow_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 44 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/guoqiwen/Desktop/uni-app/agora实时音视频/pages/liveshow/liveshow.nvue?vue&type=style&index=0&lang=scss&mpType=page ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "chatBox": {
    "width": "750rpx",
    "flex": 1,
    "flexDirection": "column",
    "backgroundColor": "#111111"
  },
  "header": {
    "width": "750rpx",
    "position": "fixed",
    "top": 0,
    "left": 0,
    "marginTop": "20rpx",
    "marginRight": 0,
    "marginBottom": "20rpx",
    "marginLeft": 0,
    "flexDirection": "row",
    "justifyContent": "space-between"
  },
  "viewIco": {
    "marginLeft": "20rpx",
    "fontFamily": "iconfont",
    "fontSize": "60rpx",
    "color": "#FFFFFF"
  },
  "maxTxAgoraView": {
    "width": "750rpx",
    "backgroundColor": "#111111",
    "position": "fixed",
    "top": 0,
    "right": 0
  },
  "minTxAgoraView": {
    "width": "220rpx",
    "height": "300rpx",
    "position": "fixed",
    "backgroundColor": "#000000",
    "right": "20rpx",
    "top": "20rpx",
    "borderTopLeftRadius": "10",
    "borderTopRightRadius": "10",
    "borderBottomLeftRadius": "10",
    "borderBottomRightRadius": "10",
    "borderStyle": "solid",
    "borderWidth": "1",
    "borderColor": "rgba(255,255,255,0.2)"
  },
  "foot": {
    "width": "710rpx",
    "position": "fixed",
    "bottom": 0,
    "left": 0,
    "marginTop": "20rpx",
    "marginRight": "20rpx",
    "marginBottom": "20rpx",
    "marginLeft": "20rpx",
    "alignItems": "center",
    "justifyContent": "center",
    "flexDirection": "column"
  },
  "circleBoxAll": {
    "justifyContent": "center",
    "alignItems": "center"
  },
  "inputBoxAll": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  "inputBox": {
    "flexDirection": "row",
    "marginTop": "15rpx",
    "marginRight": "15rpx",
    "marginBottom": "15rpx",
    "marginLeft": "15rpx",
    "paddingTop": "15rpx",
    "paddingRight": "15rpx",
    "paddingBottom": "15rpx",
    "paddingLeft": "15rpx",
    "backgroundColor": "#FFFFFF",
    "borderRadius": "6"
  },
  "inputTitle": {
    "height": "80rpx",
    "lineHeight": "80rpx"
  },
  "input": {
    "height": "80rpx",
    "width": "340rpx",
    "fontSize": "30rpx",
    "paddingTop": "15rpx",
    "paddingRight": "15rpx",
    "paddingBottom": "15rpx",
    "paddingLeft": "15rpx"
  },
  "join": {
    "backgroundColor": "#DD524D",
    "width": "160rpx",
    "height": "120rpx",
    "lineHeight": "120rpx",
    "textAlign": "center",
    "color": "#FFFFFF",
    "borderRadius": "10"
  },
  "circleBox": {
    "width": "150rpx",
    "paddingTop": "10rpx",
    "paddingRight": 0,
    "paddingBottom": "10rpx",
    "paddingLeft": 0,
    "marginTop": "10rpx",
    "marginRight": "10rpx",
    "marginBottom": "10rpx",
    "marginLeft": "10rpx",
    "alignItems": "center",
    "flexDirection": "column",
    "textAlign": "center"
  },
  "circleIco": {
    "fontSize": "36rpx",
    "width": "64rpx",
    "height": "64rpx",
    "lineHeight": "64rpx",
    "borderRadius": "500",
    "borderStyle": "solid",
    "borderWidth": "1",
    "borderColor": "#FFFFFF",
    "textAlign": "center",
    "fontFamily": "iconfont",
    "color": "#FFFFFF"
  },
  "phone": {
    "backgroundColor": "#c5433a",
    "borderStyle": "solid",
    "borderWidth": "1",
    "borderColor": "#c5433a"
  },
  "hint": {
    "fontSize": "22rpx",
    "color": "#FFFFFF",
    "paddingTop": "20rpx"
  },
  "tools": {
    "position": "fixed",
    "right": 0,
    "bottom": "100rpx",
    "zIndex": 11,
    "width": "150rpx"
  },
  "showSlider": {
    "position": "fixed",
    "right": "180rpx",
    "bottom": "100rpx",
    "zIndex": 12,
    "width": "200rpx"
  },
  "foot-content": {
    "flexDirection": "column-reverse",
    "position": "fixed",
    "bottom": 0,
    "left": 0,
    "right": 0,
    "height": "500rpx",
    "overflow": "hidden",
    "paddingTop": "20rpx",
    "paddingRight": "40rpx",
    "paddingBottom": "20rpx",
    "paddingLeft": "40rpx"
  }
}

/***/ })
/******/ ]);