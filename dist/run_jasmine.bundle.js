/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		6: 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData === 0) {
/******/ 			return new Promise(function(resolve) { resolve(); });
/******/ 		}
/******/
/******/ 		// a Promise means "currently loading".
/******/ 		if(installedChunkData) {
/******/ 			return installedChunkData[2];
/******/ 		}
/******/
/******/ 		// setup Promise in chunk cache
/******/ 		var promise = new Promise(function(resolve, reject) {
/******/ 			installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 		});
/******/ 		installedChunkData[2] = promise;
/******/
/******/ 		// start chunk loading
/******/ 		var head = document.getElementsByTagName('head')[0];
/******/ 		var script = document.createElement('script');
/******/ 		script.type = "text/javascript";
/******/ 		script.charset = 'utf-8';
/******/ 		script.async = true;
/******/ 		script.timeout = 120000;
/******/
/******/ 		if (__webpack_require__.nc) {
/******/ 			script.setAttribute("nonce", __webpack_require__.nc);
/******/ 		}
/******/ 		script.src = __webpack_require__.p + "" + ({}[chunkId]||chunkId) + ".bundle.js";
/******/ 		var timeout = setTimeout(onScriptComplete, 120000);
/******/ 		script.onerror = script.onload = onScriptComplete;
/******/ 		function onScriptComplete() {
/******/ 			// avoid mem leaks in IE.
/******/ 			script.onerror = script.onload = null;
/******/ 			clearTimeout(timeout);
/******/ 			var chunk = installedChunks[chunkId];
/******/ 			if(chunk !== 0) {
/******/ 				if(chunk) {
/******/ 					chunk[1](new Error('Loading chunk ' + chunkId + ' failed.'));
/******/ 				}
/******/ 				installedChunks[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		head.appendChild(script);
/******/
/******/ 		return promise;
/******/ 	};
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
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/ 	(function() { /* Start undefined extensions */
/******/ 			function mix(dest, src) { // eslint-disable-line no-unused-vars
/******/ 				for(var n in src) dest[n] = src[n];
/******/ 				return src;
/******/ 			}
/******/
/******/ 			function toUrl(name, referenceModule) {
/******/ 				return loaderScope.require.toUrl(name, referenceModule);
/******/ 			}
/******/
/******/ 			function toAbsMid(name, referenceModule) {
/******/ 				return loaderScope.require.toAbsMid(name, referenceModule);
/******/ 			}
/******/
/******/ 			// dojo require function.
/******/ 			function req(config, dependencies, callback) {
/******/ 				return contextRequire(config, dependencies, callback, 0, req);
/******/ 			};
/******/
/******/ 			function createContextRequire(moduleId) { // eslint-disable-line no-unused-vars
/******/ 				if (req.absMidsById[moduleId]) {
/******/ 					moduleId = req.absMidsById[moduleId];
/******/ 				}
/******/ 				if (!moduleId) return req;
/******/ 				var result = function(a1, a2, a3) {
/******/ 					return contextRequire(a1, a2, a3, moduleId, req);
/******/ 				};
/******/ 				for (var p in req) {
/******/ 					if (req.hasOwnProperty(p)) {
/******/ 						result[p] = req[p];
/******/ 					}
/******/ 				}
/******/ 				result.toUrl = function(name) {
/******/ 					return toUrl(name, moduleId ? {mid: moduleId} : null);
/******/ 				};
/******/ 				result.toAbsMid = function(name) {
/******/ 					return toAbsMid(name, moduleId ? {mid: moduleId} : null);
/******/ 				};
/******/
/******/ 				if (req.undef) {
/******/ 					result.undef = function(mid) {
/******/ 						req.undef(mid, moduleId);
/******/ 					};
/******/ 				}
/******/ 				return result;
/******/ 			}
/******/
/******/ 			function registerAbsMids(absMids) { // eslint-disable-line no-unused-vars
/******/ 				for (var s in absMids) {
/******/ 					req.absMids[s] = absMids[s];
/******/ 					req.absMidsById[absMids[s]] = s;
/******/ 				}
/******/ 			}
/******/
/******/ 			function resolveTernaryHasExpression(expr) { // eslint-disable-line no-unused-vars
/******/ 				// Expects an expression of the form supported by dojo/has.js loader, except that module identifiers are
/******/ 				// integers corresponding to webpack module ids.  Returns a module reference if evaluation of the expression
/******/ 				// using the currently defined features returns a module id, or else undefined.
/******/
/******/ 				var has = req("dojo/has");
/******/ 				var id = has.normalize(expr, function(arg){return arg;});
/******/ 				return id && __webpack_require__(id) || undefined;
/******/ 			}
/******/
/******/ 			function findModule(mid, referenceModule, noInstall, asModuleObj) {
/******/ 				mid = mid.split("!").map(function(segment) {
/******/ 					var isRelative = segment.charAt(0) === '.';
/******/ 					if(isRelative && !referenceModule){
/******/ 						return mid;
/******/ 					}
/******/ 					return toAbsMid(segment, referenceModule ? {mid: referenceModule} : null);
/******/ 				}).join("!");
/******/ 				var result;
/******/ 				if (mid in req.absMids && __webpack_require__.m[req.absMids[mid]]) {
/******/ 					if (noInstall) {
/******/ 						var module = installedModules[req.absMids[mid]];
/******/ 						result = module && module.l && (asModuleObj ? module : module.exports);
/******/ 					} else {
/******/ 						result = __webpack_require__(req.absMids[mid]);
/******/ 					}
/******/ 				}
/******/ 				if (!result) {
/******/ 					throw new Error('Module not found: ' + mid);
/******/ 				}
/******/ 				return result;
/******/ 			}
/******/
/******/ 			function dojoModuleFromWebpackModule(webpackModule) { // eslint-disable-line no-unused-vars
/******/ 				var result = {exports: webpackModule.exports};
/******/ 				var id = webpackModule.i;
/******/ 				if (req.absMidsById[id]) {
/******/ 					id = req.absMidsById[id];
/******/ 				}
/******/ 				result.i = result.id = id;
/******/ 				return result;
/******/ 			}
/******/
/******/ 			function contextRequire(a1, a2, a3, referenceModule, req) { // eslint-disable-line no-shadow
/******/ 				var type = ({}.toString).call(a1);
/******/ 				if (type === '[object String]') {
/******/ 					// a3 is passed by require calls injected into dependency arrays for dependencies specified
/******/ 					// as identifiers (vs. string literals).
/******/ 					var noInstall = !(a3 === false);
/******/ 					return findModule(a1, referenceModule, noInstall);
/******/ 				} else if (type === '[object Object]') {
/******/ 					throw new Error('Require config is not supported by WebPack');
/******/ 				}
/******/ 				if (type === '[object Array]') {
/******/ 					var modules = [], callback = a2, errors = [];
/******/ 					a1.forEach(function (mid) {
/******/ 						try {
/******/ 							modules.push(findModule(mid, referenceModule));
/******/ 						} catch (e) {
/******/ 							errors.push({mid: mid, error: e});
/******/ 						}
/******/ 					});
/******/ 					if (callback && errors.length === 0) {
/******/ 						callback.apply(this, modules);
/******/ 					} else {
/******/ 						var error = new Error("findModules");
/******/ 						error.src = "dojo-webpack-plugin";
/******/ 						error.info = errors;
/******/ 						req.signal("error", error);
/******/ 					}
/******/ 					return req;
/******/ 				} else {
/******/ 					throw new Error('Unsupported require call');
/******/ 				}
/******/ 			}
/******/ 			req.toUrl = toUrl;
/******/ 			req.toAbsMid = toAbsMid;
/******/ 			req.absMids = {};
/******/ 			req.absMidsById = [];
/******/ 			req.async = 1;
/******/ 		var globalObj = this||window;
/******/ 		registerAbsMids({
/******/ 			// ./_export = 0
/******/ 			// ./_an-object = 1
/******/ 			// ./_global = 2
/******/ 			// ./_fails = 3
/******/ 			// ./_is-object = 4
/******/ 			// ./_wks = 5
/******/ 			// ./_descriptors = 6
/******/ 			// ./_object-dp = 7
/******/ 			// ./_to-length = 8
/******/ 			// ./_to-object = 9
/******/ 			// ./_a-function = 10
/******/ 			// ./_hide = 11
/******/ 			// ./_redefine = 12
/******/ 			// ./_string-html = 13
/******/ 			// ./_has = 14
/******/ 			// ./_to-iobject = 15
/******/ 			// ./_object-gopd = 16
/******/ 			// ./_object-gpo = 17
/******/ 			// ../../modules/_core = 18
/******/ 			// ./_ctx = 19
/******/ 			// ./_cof = 20
/******/ 			// ./_strict-method = 21
/******/ 			// ./_to-primitive = 22
/******/ 			// ./_defined = 23
/******/ 			// ./_to-integer = 24
/******/ 			// ./_object-sap = 25
/******/ 			// ./_array-methods = 26
/******/ 			// ./_typed-array = 27
/******/ 			// ./_metadata = 28
/******/ 			// ./_meta = 30
/******/ 			// ./_library = 31
/******/ 			// ./_add-to-unscopables = 32
/******/ 			// ./_property-desc = 33
/******/ 			// ./_uid = 34
/******/ 			// ./_object-keys = 35
/******/ 			// ./_to-absolute-index = 36
/******/ 			// ./_object-create = 37
/******/ 			// ./_object-gopn = 38
/******/ 			// ./_set-species = 39
/******/ 			// ./_an-instance = 40
/******/ 			// ./_for-of = 41
/******/ 			// ./_redefine-all = 42
/******/ 			// ./_set-to-string-tag = 43
/******/ 			// ./_string-trim = 44
/******/ 			// ./_iterators = 45
/******/ 			// ./_validate-collection = 46
/******/ 			// ./_iobject = 48
/******/ 			// ./_object-pie = 49
/******/ 			// ./_classof = 50
/******/ 			// ./_shared = 52
/******/ 			// ./_array-includes = 53
/******/ 			// ./_object-gops = 54
/******/ 			// ./_is-array = 55
/******/ 			// ./_is-regexp = 56
/******/ 			// ./_iter-detect = 57
/******/ 			// ./_flags = 58
/******/ 			// ./_fix-re-wks = 59
/******/ 			// ./_species-constructor = 60
/******/ 			// ./_user-agent = 61
/******/ 			// ./_collection = 62
/******/ 			// ./_typed = 63
/******/ 			// ./_object-forced-pam = 64
/******/ 			// ./_set-collection-of = 65
/******/ 			// ./_set-collection-from = 66
/******/ 			// ./_dom-create = 67
/******/ 			// ./_wks-define = 68
/******/ 			// ./_shared-key = 69
/******/ 			// ./_enum-bug-keys = 70
/******/ 			// ./_html = 71
/******/ 			// ./_set-proto = 72
/******/ 			// ./_string-ws = 73
/******/ 			// ./_inherit-if-required = 74
/******/ 			// ./_string-repeat = 75
/******/ 			// ./_math-sign = 76
/******/ 			// ./_math-expm1 = 77
/******/ 			// ./_string-at = 78
/******/ 			// ./_iter-define = 79
/******/ 			// ./_iter-create = 80
/******/ 			// ./_string-context = 81
/******/ 			// ./_fails-is-regexp = 82
/******/ 			// ./_is-array-iter = 83
/******/ 			// ./_create-property = 84
/******/ 			// ./core.get-iterator-method = 85
/******/ 			// ./_array-species-create = 86
/******/ 			// ./_array-fill = 87
/******/ 			// ./es6.array.iterator = 88
/******/ 			// ./_task = 89
/******/ 			// ./_microtask = 90
/******/ 			// ./_new-promise-capability = 91
/******/ 			// ./_typed-buffer = 92
/******/ 			// ./../../webpack/buildin/global.js = 93
/******/ 			// ./_ie8-dom-define = 94
/******/ 			// ./_wks-ext = 95
/******/ 			// ./_object-keys-internal = 96
/******/ 			// ./_object-dps = 97
/******/ 			// ./_object-gopn-ext = 98
/******/ 			// ./_object-assign = 99
/******/ 			// ./_bind = 100
/******/ 			// ./_invoke = 101
/******/ 			// ./_parse-int = 102
/******/ 			// ./_parse-float = 103
/******/ 			// ./_a-number-value = 104
/******/ 			// ./_is-integer = 105
/******/ 			// ./_math-log1p = 106
/******/ 			// ./_math-fround = 107
/******/ 			// ./_iter-call = 108
/******/ 			// ./_array-reduce = 109
/******/ 			// ./_array-copy-within = 110
/******/ 			// ./_iter-step = 111
/******/ 			// ./modules/es6.regexp.flags = 112
/******/ 			// ./_perform = 113
/******/ 			// ./_promise-resolve = 114
/******/ 			// ./es6.map = 115
/******/ 			// ./_collection-strong = 116
/******/ 			// ./es6.set = 117
/******/ 			// ./es6.weak-map = 118
/******/ 			// ./_collection-weak = 119
/******/ 			// ./_to-index = 120
/******/ 			// ./_own-keys = 121
/******/ 			// ./_flatten-into-array = 122
/******/ 			// ./_string-pad = 123
/******/ 			// ./_object-to-array = 124
/******/ 			// ./_collection-to-json = 125
/******/ 			// ./_array-from-iterable = 126
/******/ 			// ./_math-scale = 127
/******/ 			// babel-polyfill = 130
/******/ 			// core-js/shim = 131
/******/ 			// ./modules/es6.symbol = 132
/******/ 			// ./_enum-keys = 133
/******/ 			// ./modules/es6.object.create = 134
/******/ 			// ./modules/es6.object.define-property = 135
/******/ 			// ./modules/es6.object.define-properties = 136
/******/ 			// ./modules/es6.object.get-own-property-descriptor = 137
/******/ 			// ./modules/es6.object.get-prototype-of = 138
/******/ 			// ./modules/es6.object.keys = 139
/******/ 			// ./modules/es6.object.get-own-property-names = 140
/******/ 			// ./modules/es6.object.freeze = 141
/******/ 			// ./modules/es6.object.seal = 142
/******/ 			// ./modules/es6.object.prevent-extensions = 143
/******/ 			// ./modules/es6.object.is-frozen = 144
/******/ 			// ./modules/es6.object.is-sealed = 145
/******/ 			// ./modules/es6.object.is-extensible = 146
/******/ 			// ./modules/es6.object.assign = 147
/******/ 			// ./modules/es6.object.is = 148
/******/ 			// ./_same-value = 149
/******/ 			// ./modules/es6.object.set-prototype-of = 150
/******/ 			// ./modules/es6.object.to-string = 151
/******/ 			// ./modules/es6.function.bind = 152
/******/ 			// ./modules/es6.function.name = 153
/******/ 			// ./modules/es6.function.has-instance = 154
/******/ 			// ./modules/es6.parse-int = 155
/******/ 			// ./modules/es6.parse-float = 156
/******/ 			// ./modules/es6.number.constructor = 157
/******/ 			// ./modules/es6.number.to-fixed = 158
/******/ 			// ./modules/es6.number.to-precision = 159
/******/ 			// ./modules/es6.number.epsilon = 160
/******/ 			// ./modules/es6.number.is-finite = 161
/******/ 			// ./modules/es6.number.is-integer = 162
/******/ 			// ./modules/es6.number.is-nan = 163
/******/ 			// ./modules/es6.number.is-safe-integer = 164
/******/ 			// ./modules/es6.number.max-safe-integer = 165
/******/ 			// ./modules/es6.number.min-safe-integer = 166
/******/ 			// ./modules/es6.number.parse-float = 167
/******/ 			// ./modules/es6.number.parse-int = 168
/******/ 			// ./modules/es6.math.acosh = 169
/******/ 			// ./modules/es6.math.asinh = 170
/******/ 			// ./modules/es6.math.atanh = 171
/******/ 			// ./modules/es6.math.cbrt = 172
/******/ 			// ./modules/es6.math.clz32 = 173
/******/ 			// ./modules/es6.math.cosh = 174
/******/ 			// ./modules/es6.math.expm1 = 175
/******/ 			// ./modules/es6.math.fround = 176
/******/ 			// ./modules/es6.math.hypot = 177
/******/ 			// ./modules/es6.math.imul = 178
/******/ 			// ./modules/es6.math.log10 = 179
/******/ 			// ./modules/es6.math.log1p = 180
/******/ 			// ./modules/es6.math.log2 = 181
/******/ 			// ./modules/es6.math.sign = 182
/******/ 			// ./modules/es6.math.sinh = 183
/******/ 			// ./modules/es6.math.tanh = 184
/******/ 			// ./modules/es6.math.trunc = 185
/******/ 			// ./modules/es6.string.from-code-point = 186
/******/ 			// ./modules/es6.string.raw = 187
/******/ 			// ./modules/es6.string.trim = 188
/******/ 			// ./modules/es6.string.iterator = 189
/******/ 			// ./modules/es6.string.code-point-at = 190
/******/ 			// ./modules/es6.string.ends-with = 191
/******/ 			// ./modules/es6.string.includes = 192
/******/ 			// ./modules/es6.string.repeat = 193
/******/ 			// ./modules/es6.string.starts-with = 194
/******/ 			// ./modules/es6.string.anchor = 195
/******/ 			// ./modules/es6.string.big = 196
/******/ 			// ./modules/es6.string.blink = 197
/******/ 			// ./modules/es6.string.bold = 198
/******/ 			// ./modules/es6.string.fixed = 199
/******/ 			// ./modules/es6.string.fontcolor = 200
/******/ 			// ./modules/es6.string.fontsize = 201
/******/ 			// ./modules/es6.string.italics = 202
/******/ 			// ./modules/es6.string.link = 203
/******/ 			// ./modules/es6.string.small = 204
/******/ 			// ./modules/es6.string.strike = 205
/******/ 			// ./modules/es6.string.sub = 206
/******/ 			// ./modules/es6.string.sup = 207
/******/ 			// ./modules/es6.date.now = 208
/******/ 			// ./modules/es6.date.to-json = 209
/******/ 			// ./modules/es6.date.to-iso-string = 210
/******/ 			// ./_date-to-iso-string = 211
/******/ 			// ./modules/es6.date.to-string = 212
/******/ 			// ./modules/es6.date.to-primitive = 213
/******/ 			// ./_date-to-primitive = 214
/******/ 			// ./modules/es6.array.is-array = 215
/******/ 			// ./modules/es6.array.from = 216
/******/ 			// ./modules/es6.array.of = 217
/******/ 			// ./modules/es6.array.join = 218
/******/ 			// ./modules/es6.array.slice = 219
/******/ 			// ./modules/es6.array.sort = 220
/******/ 			// ./modules/es6.array.for-each = 221
/******/ 			// ./_array-species-constructor = 222
/******/ 			// ./modules/es6.array.map = 223
/******/ 			// ./modules/es6.array.filter = 224
/******/ 			// ./modules/es6.array.some = 225
/******/ 			// ./modules/es6.array.every = 226
/******/ 			// ./modules/es6.array.reduce = 227
/******/ 			// ./modules/es6.array.reduce-right = 228
/******/ 			// ./modules/es6.array.index-of = 229
/******/ 			// ./modules/es6.array.last-index-of = 230
/******/ 			// ./modules/es6.array.copy-within = 231
/******/ 			// ./modules/es6.array.fill = 232
/******/ 			// ./modules/es6.array.find = 233
/******/ 			// ./modules/es6.array.find-index = 234
/******/ 			// ./modules/es6.array.species = 235
/******/ 			// ./modules/es6.regexp.constructor = 236
/******/ 			// ./modules/es6.regexp.to-string = 237
/******/ 			// ./modules/es6.regexp.match = 238
/******/ 			// ./modules/es6.regexp.replace = 239
/******/ 			// ./modules/es6.regexp.search = 240
/******/ 			// ./modules/es6.regexp.split = 241
/******/ 			// ./modules/es6.promise = 242
/******/ 			// ./modules/es6.weak-set = 243
/******/ 			// ./modules/es6.typed.array-buffer = 244
/******/ 			// ./modules/es6.typed.data-view = 245
/******/ 			// ./modules/es6.typed.int8-array = 246
/******/ 			// ./modules/es6.typed.uint8-array = 247
/******/ 			// ./modules/es6.typed.uint8-clamped-array = 248
/******/ 			// ./modules/es6.typed.int16-array = 249
/******/ 			// ./modules/es6.typed.uint16-array = 250
/******/ 			// ./modules/es6.typed.int32-array = 251
/******/ 			// ./modules/es6.typed.uint32-array = 252
/******/ 			// ./modules/es6.typed.float32-array = 253
/******/ 			// ./modules/es6.typed.float64-array = 254
/******/ 			// ./modules/es6.reflect.apply = 255
/******/ 			// ./modules/es6.reflect.construct = 256
/******/ 			// ./modules/es6.reflect.define-property = 257
/******/ 			// ./modules/es6.reflect.delete-property = 258
/******/ 			// ./modules/es6.reflect.enumerate = 259
/******/ 			// ./modules/es6.reflect.get = 260
/******/ 			// ./modules/es6.reflect.get-own-property-descriptor = 261
/******/ 			// ./modules/es6.reflect.get-prototype-of = 262
/******/ 			// ./modules/es6.reflect.has = 263
/******/ 			// ./modules/es6.reflect.is-extensible = 264
/******/ 			// ./modules/es6.reflect.own-keys = 265
/******/ 			// ./modules/es6.reflect.prevent-extensions = 266
/******/ 			// ./modules/es6.reflect.set = 267
/******/ 			// ./modules/es6.reflect.set-prototype-of = 268
/******/ 			// ./modules/es7.array.includes = 269
/******/ 			// ./modules/es7.array.flat-map = 270
/******/ 			// ./modules/es7.array.flatten = 271
/******/ 			// ./modules/es7.string.at = 272
/******/ 			// ./modules/es7.string.pad-start = 273
/******/ 			// ./modules/es7.string.pad-end = 274
/******/ 			// ./modules/es7.string.trim-left = 275
/******/ 			// ./modules/es7.string.trim-right = 276
/******/ 			// ./modules/es7.string.match-all = 277
/******/ 			// ./modules/es7.symbol.async-iterator = 278
/******/ 			// ./modules/es7.symbol.observable = 279
/******/ 			// ./modules/es7.object.get-own-property-descriptors = 280
/******/ 			// ./modules/es7.object.values = 281
/******/ 			// ./modules/es7.object.entries = 282
/******/ 			// ./modules/es7.object.define-getter = 283
/******/ 			// ./modules/es7.object.define-setter = 284
/******/ 			// ./modules/es7.object.lookup-getter = 285
/******/ 			// ./modules/es7.object.lookup-setter = 286
/******/ 			// ./modules/es7.map.to-json = 287
/******/ 			// ./modules/es7.set.to-json = 288
/******/ 			// ./modules/es7.map.of = 289
/******/ 			// ./modules/es7.set.of = 290
/******/ 			// ./modules/es7.weak-map.of = 291
/******/ 			// ./modules/es7.weak-set.of = 292
/******/ 			// ./modules/es7.map.from = 293
/******/ 			// ./modules/es7.set.from = 294
/******/ 			// ./modules/es7.weak-map.from = 295
/******/ 			// ./modules/es7.weak-set.from = 296
/******/ 			// ./modules/es7.global = 297
/******/ 			// ./modules/es7.system.global = 298
/******/ 			// ./modules/es7.error.is-error = 299
/******/ 			// ./modules/es7.math.clamp = 300
/******/ 			// ./modules/es7.math.deg-per-rad = 301
/******/ 			// ./modules/es7.math.degrees = 302
/******/ 			// ./modules/es7.math.fscale = 303
/******/ 			// ./modules/es7.math.iaddh = 304
/******/ 			// ./modules/es7.math.isubh = 305
/******/ 			// ./modules/es7.math.imulh = 306
/******/ 			// ./modules/es7.math.rad-per-deg = 307
/******/ 			// ./modules/es7.math.radians = 308
/******/ 			// ./modules/es7.math.scale = 309
/******/ 			// ./modules/es7.math.umulh = 310
/******/ 			// ./modules/es7.math.signbit = 311
/******/ 			// ./modules/es7.promise.finally = 312
/******/ 			// ./modules/es7.promise.try = 313
/******/ 			// ./modules/es7.reflect.define-metadata = 314
/******/ 			// ./modules/es7.reflect.delete-metadata = 315
/******/ 			// ./modules/es7.reflect.get-metadata = 316
/******/ 			// ./modules/es7.reflect.get-metadata-keys = 317
/******/ 			// ./modules/es7.reflect.get-own-metadata = 318
/******/ 			// ./modules/es7.reflect.get-own-metadata-keys = 319
/******/ 			// ./modules/es7.reflect.has-metadata = 320
/******/ 			// ./modules/es7.reflect.has-own-metadata = 321
/******/ 			// ./modules/es7.reflect.metadata = 322
/******/ 			// ./modules/es7.asap = 323
/******/ 			// ./modules/es7.observable = 324
/******/ 			// ./modules/web.timers = 325
/******/ 			// ./modules/web.immediate = 326
/******/ 			// ./modules/web.dom.iterable = 327
/******/ 			// regenerator-runtime/runtime = 328
/******/ 			// core-js/fn/regexp/escape = 329
/******/ 			// ../../modules/core.regexp.escape = 330
/******/ 			// ./_replacer = 331
/******/ 			// /var/www/html/Moringa_genome/build/dojo-webpack-plugin-loader/dojo/dojo.js = 332
/******/ 			'tests/js_tests/main.js':370
/******/ 			// ./spec/ExportGFF3.spec.js = 371
/******/ 			// ./spec/QueryParamConfigMapper.spec.js = 372
/******/ 			// ./spec/LazyArray.spec.js = 373
/******/ 			// ./spec/FeatureLayout.spec.js = 374
/******/ 			// ./spec/BigWig.spec.js = 375
/******/ 			// ./spec/ConfigManager.spec.js = 376
/******/ 			// ./spec/BAM.spec.js = 377
/******/ 			// ./spec/RemoteBinaryFile.spec.js = 378
/******/ 			// ./spec/Util.spec.js = 379
/******/ 			// ./spec/AddFiles.spec.js = 380
/******/ 			// ./spec/GBrowseParser.spec.js = 381
/******/ 			// ./spec/NestedFrequencyTable.spec.js = 382
/******/ 			// ./spec/TabixIndex.spec.js = 383
/******/ 			// ./spec/TabixIndexedFile.spec.js = 384
/******/ 			// ./spec/TribbleIndexedFile.spec.js = 385
/******/ 			// ./spec/RESTStore.spec.js = 386
/******/ 			// ./spec/RegularizeRefSeqs.spec.js = 387
/******/ 			// ./spec/GFF3.spec.js = 388
/******/ 			// ./spec/SPARQLStore.spec.js = 389
/******/ 			// ./spec/SequenceChunkStore.spec.js = 390
/******/ 			// ./spec/GFF3Tabix.spec.js = 391
/******/ 			// ./spec/BEDTabix.spec.js = 392
/******/ 			// ./spec/BED.spec.js = 393
/******/ 			// ./spec/TwoBit.spec.js = 394
/******/ 			// ./spec/SequenceTrack.spec.js = 395
/******/ 			// ./spec/VCF.spec.js = 396
/******/ 			// ./spec/BigBed.spec.js = 397
/******/ 		});
/******/
/******/ 		globalObj.require = req;
/******/ 			(this||window)["webpackJsonp"].registerAbsMids = registerAbsMids;
/******/
/******/ 		// expose the Dojo compatibility functions as a properties of __webpack_require__
/******/ 		if (__webpack_require__.dj) throw new Error("__webpack_require__.dj name collision.")
/******/ 		__webpack_require__.dj = {
/******/ 			r: req,
/******/ 			c: createContextRequire,
/******/ 			m: dojoModuleFromWebpackModule,
/******/ 			h: resolveTernaryHasExpression
/******/ 		};
/******/ 		var loaderScope = {document:globalObj.document};
/******/ 		loaderScope.global = loaderScope.window = loaderScope;
/******/ 		globalObj.dojoConfig = globalObj.dojoConfig || {}
/******/ 		var userConfig = mix(globalObj.dojoConfig, ({'baseUrl':'.','packages':[({'name':'dojo','location':'./dist/dojo'}),({'name':'dijit','location':'./dist/dijit'}),({'name':'dojox','location':'./dist/dojox'}),({'name':'JBrowse','location':'src/JBrowse','lib':'.'}),({'name':'dgrid','location':'./dist/dgrid','lib':'.'}),({'name':'dstore','location':'./dist/dojo-dstore','lib':'.'}),({'name':'jszlib','location':'./dist/jszlib','lib':'.'}),({'name':'FileSaver','location':'./dist/filesaver.js','lib':'.'}),({'name':'CategoryUrl','css':'css','js':'js','location':'plugins/CategoryUrl/js','pluginDir':'plugins/CategoryUrl'}),({'name':'DebugEvents','css':'css','js':'js','location':'plugins/DebugEvents/js','pluginDir':'plugins/DebugEvents'}),({'name':'FeatureSequence','css':'css','js':'js','location':'plugins/FeatureSequence/js','pluginDir':'plugins/FeatureSequence'}),({'name':'HideTrackLabels','css':'css','js':'js','location':'plugins/HideTrackLabels/js','pluginDir':'plugins/HideTrackLabels'}),({'name':'NeatCanvasFeatures','css':'css','js':'js','location':'plugins/NeatCanvasFeatures/js','pluginDir':'plugins/NeatCanvasFeatures'}),({'name':'NeatHTMLFeatures','css':'css','js':'js','location':'plugins/NeatHTMLFeatures/js','pluginDir':'plugins/NeatHTMLFeatures'}),({'name':'RegexSequenceSearch','css':'css','js':'js','location':'plugins/RegexSequenceSearch/js','pluginDir':'plugins/RegexSequenceSearch'})],'async':true}));
/******/ 		var defaultConfig = ({'hasCache':({'webpack':1,'host-browser':1,'dom':1,'dojo-loader':1,'dojo-has-api':1,'dojo-dom-ready-api':1,'dojo-sniff':1,'dojo-test-sniff':1,'config-deferredInstrumentation':1,'config-tlmSiblingOfDojo':1})});
/******/ 		var dojoLoader = __webpack_require__(332);
/******/ 		dojoLoader.call(loaderScope, userConfig, defaultConfig, loaderScope, loaderScope);
/******/ 		['baseUrl','has','rawConfig','on','signal'].forEach(function(name) {req[name] = loaderScope.require[name]})
/******/ 	})(); /* End undefined extensions */
/******/ 	var req=	(function() {
/******/ 			function warnDeprecated() {
/******/ 				console.warn('req is deprecated and will be removed in a future release.');
/******/ 			}
/******/ 			var req = __webpack_require__.dj.r;
/******/ 			function depReq() {
/******/ 				warnDeprecated();
/******/ 				return req.apply(this, arguments);
/******/ 			};
/******/ 			Object.keys(req).forEach(function(name) {
/******/ 				Object.defineProperty(depReq, name, {
/******/ 					get: function() {
/******/ 						warnDeprecated();
/******/ 						return req[name];
/******/ 					},
/******/ 					enumerable: true,
/******/ 					configurable: false
/******/ 				});
/******/ 			});
/******/ 			return depReq;
/******/ 		})();
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 370);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var core = __webpack_require__(18);
var hide = __webpack_require__(11);
var redefine = __webpack_require__(12);
var ctx = __webpack_require__(19);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 2 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(52)('wks');
var uid = __webpack_require__(34);
var Symbol = __webpack_require__(2).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(3)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(1);
var IE8_DOM_DEFINE = __webpack_require__(94);
var toPrimitive = __webpack_require__(22);
var dP = Object.defineProperty;

exports.f = __webpack_require__(6) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(24);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(23);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(7);
var createDesc = __webpack_require__(33);
module.exports = __webpack_require__(6) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var hide = __webpack_require__(11);
var has = __webpack_require__(14);
var SRC = __webpack_require__(34)('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(18).inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);
var fails = __webpack_require__(3);
var defined = __webpack_require__(23);
var quot = /"/g;
// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
var createHTML = function (string, tag, attribute, value) {
  var S = String(defined(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};
module.exports = function (NAME, exec) {
  var O = {};
  O[NAME] = exec(createHTML);
  $export($export.P + $export.F * fails(function () {
    var test = ''[NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  }), 'String', O);
};


/***/ }),
/* 14 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(48);
var defined = __webpack_require__(23);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(49);
var createDesc = __webpack_require__(33);
var toIObject = __webpack_require__(15);
var toPrimitive = __webpack_require__(22);
var has = __webpack_require__(14);
var IE8_DOM_DEFINE = __webpack_require__(94);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(6) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(14);
var toObject = __webpack_require__(9);
var IE_PROTO = __webpack_require__(69)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 18 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.6' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(10);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 20 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(3);

module.exports = function (method, arg) {
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call
    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);
  });
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(4);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 23 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 24 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(0);
var core = __webpack_require__(18);
var fails = __webpack_require__(3);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(19);
var IObject = __webpack_require__(48);
var toObject = __webpack_require__(9);
var toLength = __webpack_require__(8);
var asc = __webpack_require__(86);
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

if (__webpack_require__(6)) {
  var LIBRARY = __webpack_require__(31);
  var global = __webpack_require__(2);
  var fails = __webpack_require__(3);
  var $export = __webpack_require__(0);
  var $typed = __webpack_require__(63);
  var $buffer = __webpack_require__(92);
  var ctx = __webpack_require__(19);
  var anInstance = __webpack_require__(40);
  var propertyDesc = __webpack_require__(33);
  var hide = __webpack_require__(11);
  var redefineAll = __webpack_require__(42);
  var toInteger = __webpack_require__(24);
  var toLength = __webpack_require__(8);
  var toIndex = __webpack_require__(120);
  var toAbsoluteIndex = __webpack_require__(36);
  var toPrimitive = __webpack_require__(22);
  var has = __webpack_require__(14);
  var classof = __webpack_require__(50);
  var isObject = __webpack_require__(4);
  var toObject = __webpack_require__(9);
  var isArrayIter = __webpack_require__(83);
  var create = __webpack_require__(37);
  var getPrototypeOf = __webpack_require__(17);
  var gOPN = __webpack_require__(38).f;
  var getIterFn = __webpack_require__(85);
  var uid = __webpack_require__(34);
  var wks = __webpack_require__(5);
  var createArrayMethod = __webpack_require__(26);
  var createArrayIncludes = __webpack_require__(53);
  var speciesConstructor = __webpack_require__(60);
  var ArrayIterators = __webpack_require__(88);
  var Iterators = __webpack_require__(45);
  var $iterDetect = __webpack_require__(57);
  var setSpecies = __webpack_require__(39);
  var arrayFill = __webpack_require__(87);
  var arrayCopyWithin = __webpack_require__(110);
  var $DP = __webpack_require__(7);
  var $GOPD = __webpack_require__(16);
  var dP = $DP.f;
  var gOPD = $GOPD.f;
  var RangeError = global.RangeError;
  var TypeError = global.TypeError;
  var Uint8Array = global.Uint8Array;
  var ARRAY_BUFFER = 'ArrayBuffer';
  var SHARED_BUFFER = 'Shared' + ARRAY_BUFFER;
  var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
  var PROTOTYPE = 'prototype';
  var ArrayProto = Array[PROTOTYPE];
  var $ArrayBuffer = $buffer.ArrayBuffer;
  var $DataView = $buffer.DataView;
  var arrayForEach = createArrayMethod(0);
  var arrayFilter = createArrayMethod(2);
  var arraySome = createArrayMethod(3);
  var arrayEvery = createArrayMethod(4);
  var arrayFind = createArrayMethod(5);
  var arrayFindIndex = createArrayMethod(6);
  var arrayIncludes = createArrayIncludes(true);
  var arrayIndexOf = createArrayIncludes(false);
  var arrayValues = ArrayIterators.values;
  var arrayKeys = ArrayIterators.keys;
  var arrayEntries = ArrayIterators.entries;
  var arrayLastIndexOf = ArrayProto.lastIndexOf;
  var arrayReduce = ArrayProto.reduce;
  var arrayReduceRight = ArrayProto.reduceRight;
  var arrayJoin = ArrayProto.join;
  var arraySort = ArrayProto.sort;
  var arraySlice = ArrayProto.slice;
  var arrayToString = ArrayProto.toString;
  var arrayToLocaleString = ArrayProto.toLocaleString;
  var ITERATOR = wks('iterator');
  var TAG = wks('toStringTag');
  var TYPED_CONSTRUCTOR = uid('typed_constructor');
  var DEF_CONSTRUCTOR = uid('def_constructor');
  var ALL_CONSTRUCTORS = $typed.CONSTR;
  var TYPED_ARRAY = $typed.TYPED;
  var VIEW = $typed.VIEW;
  var WRONG_LENGTH = 'Wrong length!';

  var $map = createArrayMethod(1, function (O, length) {
    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
  });

  var LITTLE_ENDIAN = fails(function () {
    // eslint-disable-next-line no-undef
    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
  });

  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function () {
    new Uint8Array(1).set({});
  });

  var toOffset = function (it, BYTES) {
    var offset = toInteger(it);
    if (offset < 0 || offset % BYTES) throw RangeError('Wrong offset!');
    return offset;
  };

  var validate = function (it) {
    if (isObject(it) && TYPED_ARRAY in it) return it;
    throw TypeError(it + ' is not a typed array!');
  };

  var allocate = function (C, length) {
    if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) {
      throw TypeError('It is not a typed array constructor!');
    } return new C(length);
  };

  var speciesFromList = function (O, list) {
    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
  };

  var fromList = function (C, list) {
    var index = 0;
    var length = list.length;
    var result = allocate(C, length);
    while (length > index) result[index] = list[index++];
    return result;
  };

  var addGetter = function (it, key, internal) {
    dP(it, key, { get: function () { return this._d[internal]; } });
  };

  var $from = function from(source /* , mapfn, thisArg */) {
    var O = toObject(source);
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var iterFn = getIterFn(O);
    var i, length, values, result, step, iterator;
    if (iterFn != undefined && !isArrayIter(iterFn)) {
      for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) {
        values.push(step.value);
      } O = values;
    }
    if (mapping && aLen > 2) mapfn = ctx(mapfn, arguments[2], 2);
    for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++) {
      result[i] = mapping ? mapfn(O[i], i) : O[i];
    }
    return result;
  };

  var $of = function of(/* ...items */) {
    var index = 0;
    var length = arguments.length;
    var result = allocate(this, length);
    while (length > index) result[index] = arguments[index++];
    return result;
  };

  // iOS Safari 6.x fails here
  var TO_LOCALE_BUG = !!Uint8Array && fails(function () { arrayToLocaleString.call(new Uint8Array(1)); });

  var $toLocaleString = function toLocaleString() {
    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
  };

  var proto = {
    copyWithin: function copyWithin(target, start /* , end */) {
      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
    },
    every: function every(callbackfn /* , thisArg */) {
      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    fill: function fill(value /* , start, end */) { // eslint-disable-line no-unused-vars
      return arrayFill.apply(validate(this), arguments);
    },
    filter: function filter(callbackfn /* , thisArg */) {
      return speciesFromList(this, arrayFilter(validate(this), callbackfn,
        arguments.length > 1 ? arguments[1] : undefined));
    },
    find: function find(predicate /* , thisArg */) {
      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    findIndex: function findIndex(predicate /* , thisArg */) {
      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    forEach: function forEach(callbackfn /* , thisArg */) {
      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    indexOf: function indexOf(searchElement /* , fromIndex */) {
      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    includes: function includes(searchElement /* , fromIndex */) {
      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    join: function join(separator) { // eslint-disable-line no-unused-vars
      return arrayJoin.apply(validate(this), arguments);
    },
    lastIndexOf: function lastIndexOf(searchElement /* , fromIndex */) { // eslint-disable-line no-unused-vars
      return arrayLastIndexOf.apply(validate(this), arguments);
    },
    map: function map(mapfn /* , thisArg */) {
      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    reduce: function reduce(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
      return arrayReduce.apply(validate(this), arguments);
    },
    reduceRight: function reduceRight(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
      return arrayReduceRight.apply(validate(this), arguments);
    },
    reverse: function reverse() {
      var that = this;
      var length = validate(that).length;
      var middle = Math.floor(length / 2);
      var index = 0;
      var value;
      while (index < middle) {
        value = that[index];
        that[index++] = that[--length];
        that[length] = value;
      } return that;
    },
    some: function some(callbackfn /* , thisArg */) {
      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    sort: function sort(comparefn) {
      return arraySort.call(validate(this), comparefn);
    },
    subarray: function subarray(begin, end) {
      var O = validate(this);
      var length = O.length;
      var $begin = toAbsoluteIndex(begin, length);
      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
        O.buffer,
        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
        toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - $begin)
      );
    }
  };

  var $slice = function slice(start, end) {
    return speciesFromList(this, arraySlice.call(validate(this), start, end));
  };

  var $set = function set(arrayLike /* , offset */) {
    validate(this);
    var offset = toOffset(arguments[1], 1);
    var length = this.length;
    var src = toObject(arrayLike);
    var len = toLength(src.length);
    var index = 0;
    if (len + offset > length) throw RangeError(WRONG_LENGTH);
    while (index < len) this[offset + index] = src[index++];
  };

  var $iterators = {
    entries: function entries() {
      return arrayEntries.call(validate(this));
    },
    keys: function keys() {
      return arrayKeys.call(validate(this));
    },
    values: function values() {
      return arrayValues.call(validate(this));
    }
  };

  var isTAIndex = function (target, key) {
    return isObject(target)
      && target[TYPED_ARRAY]
      && typeof key != 'symbol'
      && key in target
      && String(+key) == String(key);
  };
  var $getDesc = function getOwnPropertyDescriptor(target, key) {
    return isTAIndex(target, key = toPrimitive(key, true))
      ? propertyDesc(2, target[key])
      : gOPD(target, key);
  };
  var $setDesc = function defineProperty(target, key, desc) {
    if (isTAIndex(target, key = toPrimitive(key, true))
      && isObject(desc)
      && has(desc, 'value')
      && !has(desc, 'get')
      && !has(desc, 'set')
      // TODO: add validation descriptor w/o calling accessors
      && !desc.configurable
      && (!has(desc, 'writable') || desc.writable)
      && (!has(desc, 'enumerable') || desc.enumerable)
    ) {
      target[key] = desc.value;
      return target;
    } return dP(target, key, desc);
  };

  if (!ALL_CONSTRUCTORS) {
    $GOPD.f = $getDesc;
    $DP.f = $setDesc;
  }

  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
    getOwnPropertyDescriptor: $getDesc,
    defineProperty: $setDesc
  });

  if (fails(function () { arrayToString.call({}); })) {
    arrayToString = arrayToLocaleString = function toString() {
      return arrayJoin.call(this);
    };
  }

  var $TypedArrayPrototype$ = redefineAll({}, proto);
  redefineAll($TypedArrayPrototype$, $iterators);
  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
  redefineAll($TypedArrayPrototype$, {
    slice: $slice,
    set: $set,
    constructor: function () { /* noop */ },
    toString: arrayToString,
    toLocaleString: $toLocaleString
  });
  addGetter($TypedArrayPrototype$, 'buffer', 'b');
  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
  addGetter($TypedArrayPrototype$, 'length', 'e');
  dP($TypedArrayPrototype$, TAG, {
    get: function () { return this[TYPED_ARRAY]; }
  });

  // eslint-disable-next-line max-statements
  module.exports = function (KEY, BYTES, wrapper, CLAMPED) {
    CLAMPED = !!CLAMPED;
    var NAME = KEY + (CLAMPED ? 'Clamped' : '') + 'Array';
    var GETTER = 'get' + KEY;
    var SETTER = 'set' + KEY;
    var TypedArray = global[NAME];
    var Base = TypedArray || {};
    var TAC = TypedArray && getPrototypeOf(TypedArray);
    var FORCED = !TypedArray || !$typed.ABV;
    var O = {};
    var TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
    var getter = function (that, index) {
      var data = that._d;
      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
    };
    var setter = function (that, index, value) {
      var data = that._d;
      if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
    };
    var addElement = function (that, index) {
      dP(that, index, {
        get: function () {
          return getter(this, index);
        },
        set: function (value) {
          return setter(this, index, value);
        },
        enumerable: true
      });
    };
    if (FORCED) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME, '_d');
        var index = 0;
        var offset = 0;
        var buffer, byteLength, length, klass;
        if (!isObject(data)) {
          length = toIndex(data);
          byteLength = length * BYTES;
          buffer = new $ArrayBuffer(byteLength);
        } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          buffer = data;
          offset = toOffset($offset, BYTES);
          var $len = data.byteLength;
          if ($length === undefined) {
            if ($len % BYTES) throw RangeError(WRONG_LENGTH);
            byteLength = $len - offset;
            if (byteLength < 0) throw RangeError(WRONG_LENGTH);
          } else {
            byteLength = toLength($length) * BYTES;
            if (byteLength + offset > $len) throw RangeError(WRONG_LENGTH);
          }
          length = byteLength / BYTES;
        } else if (TYPED_ARRAY in data) {
          return fromList(TypedArray, data);
        } else {
          return $from.call(TypedArray, data);
        }
        hide(that, '_d', {
          b: buffer,
          o: offset,
          l: byteLength,
          e: length,
          v: new $DataView(buffer)
        });
        while (index < length) addElement(that, index++);
      });
      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
      hide(TypedArrayPrototype, 'constructor', TypedArray);
    } else if (!fails(function () {
      TypedArray(1);
    }) || !fails(function () {
      new TypedArray(-1); // eslint-disable-line no-new
    }) || !$iterDetect(function (iter) {
      new TypedArray(); // eslint-disable-line no-new
      new TypedArray(null); // eslint-disable-line no-new
      new TypedArray(1.5); // eslint-disable-line no-new
      new TypedArray(iter); // eslint-disable-line no-new
    }, true)) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME);
        var klass;
        // `ws` module bug, temporarily remove validation length for Uint8Array
        // https://github.com/websockets/ws/pull/645
        if (!isObject(data)) return new Base(toIndex(data));
        if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          return $length !== undefined
            ? new Base(data, toOffset($offset, BYTES), $length)
            : $offset !== undefined
              ? new Base(data, toOffset($offset, BYTES))
              : new Base(data);
        }
        if (TYPED_ARRAY in data) return fromList(TypedArray, data);
        return $from.call(TypedArray, data);
      });
      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function (key) {
        if (!(key in TypedArray)) hide(TypedArray, key, Base[key]);
      });
      TypedArray[PROTOTYPE] = TypedArrayPrototype;
      if (!LIBRARY) TypedArrayPrototype.constructor = TypedArray;
    }
    var $nativeIterator = TypedArrayPrototype[ITERATOR];
    var CORRECT_ITER_NAME = !!$nativeIterator
      && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined);
    var $iterator = $iterators.values;
    hide(TypedArray, TYPED_CONSTRUCTOR, true);
    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
    hide(TypedArrayPrototype, VIEW, true);
    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

    if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {
      dP(TypedArrayPrototype, TAG, {
        get: function () { return NAME; }
      });
    }

    O[NAME] = TypedArray;

    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);

    $export($export.S, NAME, {
      BYTES_PER_ELEMENT: BYTES
    });

    $export($export.S + $export.F * fails(function () { Base.of.call(TypedArray, 1); }), NAME, {
      from: $from,
      of: $of
    });

    if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);

    $export($export.P, NAME, proto);

    setSpecies(NAME);

    $export($export.P + $export.F * FORCED_SET, NAME, { set: $set });

    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);

    if (!LIBRARY && TypedArrayPrototype.toString != arrayToString) TypedArrayPrototype.toString = arrayToString;

    $export($export.P + $export.F * fails(function () {
      new TypedArray(1).slice();
    }), NAME, { slice: $slice });

    $export($export.P + $export.F * (fails(function () {
      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString();
    }) || !fails(function () {
      TypedArrayPrototype.toLocaleString.call([1, 2]);
    })), NAME, { toLocaleString: $toLocaleString });

    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
    if (!LIBRARY && !CORRECT_ITER_NAME) hide(TypedArrayPrototype, ITERATOR, $iterator);
  };
} else module.exports = function () { /* empty */ };


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var Map = __webpack_require__(115);
var $export = __webpack_require__(0);
var shared = __webpack_require__(52)('metadata');
var store = shared.store || (shared.store = new (__webpack_require__(118))());

var getOrCreateMetadataMap = function (target, targetKey, create) {
  var targetMetadata = store.get(target);
  if (!targetMetadata) {
    if (!create) return undefined;
    store.set(target, targetMetadata = new Map());
  }
  var keyMetadata = targetMetadata.get(targetKey);
  if (!keyMetadata) {
    if (!create) return undefined;
    targetMetadata.set(targetKey, keyMetadata = new Map());
  } return keyMetadata;
};
var ordinaryHasOwnMetadata = function (MetadataKey, O, P) {
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
};
var ordinaryGetOwnMetadata = function (MetadataKey, O, P) {
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
};
var ordinaryDefineOwnMetadata = function (MetadataKey, MetadataValue, O, P) {
  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
};
var ordinaryOwnMetadataKeys = function (target, targetKey) {
  var metadataMap = getOrCreateMetadataMap(target, targetKey, false);
  var keys = [];
  if (metadataMap) metadataMap.forEach(function (_, key) { keys.push(key); });
  return keys;
};
var toMetaKey = function (it) {
  return it === undefined || typeof it == 'symbol' ? it : String(it);
};
var exp = function (O) {
  $export($export.S, 'Reflect', O);
};

module.exports = {
  store: store,
  map: getOrCreateMetadataMap,
  has: ordinaryHasOwnMetadata,
  get: ordinaryGetOwnMetadata,
  set: ordinaryDefineOwnMetadata,
  keys: ordinaryOwnMetadataKeys,
  key: toMetaKey,
  exp: exp
};


/***/ }),
/* 29 */,
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(34)('meta');
var isObject = __webpack_require__(4);
var has = __webpack_require__(14);
var setDesc = __webpack_require__(7).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(3)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(5)('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(11)(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 34 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(96);
var enumBugKeys = __webpack_require__(70);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(24);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(1);
var dPs = __webpack_require__(97);
var enumBugKeys = __webpack_require__(70);
var IE_PROTO = __webpack_require__(69)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(67)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(71).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(96);
var hiddenKeys = __webpack_require__(70).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(2);
var dP = __webpack_require__(7);
var DESCRIPTORS = __webpack_require__(6);
var SPECIES = __webpack_require__(5)('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(19);
var call = __webpack_require__(108);
var isArrayIter = __webpack_require__(83);
var anObject = __webpack_require__(1);
var toLength = __webpack_require__(8);
var getIterFn = __webpack_require__(85);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(12);
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(7).f;
var has = __webpack_require__(14);
var TAG = __webpack_require__(5)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);
var defined = __webpack_require__(23);
var fails = __webpack_require__(3);
var spaces = __webpack_require__(73);
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4);
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),
/* 47 */,
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(20);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 49 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(20);
var TAG = __webpack_require__(5)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 51 */,
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(18);
var global = __webpack_require__(2);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(31) ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(15);
var toLength = __webpack_require__(8);
var toAbsoluteIndex = __webpack_require__(36);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 54 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(20);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__(4);
var cof = __webpack_require__(20);
var MATCH = __webpack_require__(5)('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(5)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__(1);
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var hide = __webpack_require__(11);
var redefine = __webpack_require__(12);
var fails = __webpack_require__(3);
var defined = __webpack_require__(23);
var wks = __webpack_require__(5);

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);
  var fns = exec(defined, SYMBOL, ''[KEY]);
  var strfn = fns[0];
  var rxfn = fns[1];
  if (fails(function () {
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  })) {
    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(1);
var aFunction = __webpack_require__(10);
var SPECIES = __webpack_require__(5)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(2);
var $export = __webpack_require__(0);
var redefine = __webpack_require__(12);
var redefineAll = __webpack_require__(42);
var meta = __webpack_require__(30);
var forOf = __webpack_require__(41);
var anInstance = __webpack_require__(40);
var isObject = __webpack_require__(4);
var fails = __webpack_require__(3);
var $iterDetect = __webpack_require__(57);
var setToStringTag = __webpack_require__(43);
var inheritIfRequired = __webpack_require__(74);

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  var fixMethod = function (KEY) {
    var fn = proto[KEY];
    redefine(proto, KEY,
      KEY == 'delete' ? function (a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'has' ? function has(a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'get' ? function get(a) {
        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'add' ? function add(a) { fn.call(this, a === 0 ? 0 : a); return this; }
        : function set(a, b) { fn.call(this, a === 0 ? 0 : a, b); return this; }
    );
  };
  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    var instance = new C();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    var ACCEPT_ITERABLES = $iterDetect(function (iter) { new C(iter); }); // eslint-disable-line no-new
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new C();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });
    if (!ACCEPT_ITERABLES) {
      C = wrapper(function (target, iterable) {
        anInstance(target, C, NAME);
        var that = inheritIfRequired(new Base(), target, C);
        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }
    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }
    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
    // weak collections should not contains .clear method
    if (IS_WEAK && proto.clear) delete proto.clear;
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F * (C != Base), O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var hide = __webpack_require__(11);
var uid = __webpack_require__(34);
var TYPED = uid('typed_array');
var VIEW = uid('view');
var ABV = !!(global.ArrayBuffer && global.DataView);
var CONSTR = ABV;
var i = 0;
var l = 9;
var Typed;

var TypedArrayConstructors = (
  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
).split(',');

while (i < l) {
  if (Typed = global[TypedArrayConstructors[i++]]) {
    hide(Typed.prototype, TYPED, true);
    hide(Typed.prototype, VIEW, true);
  } else CONSTR = false;
}

module.exports = {
  ABV: ABV,
  CONSTR: CONSTR,
  TYPED: TYPED,
  VIEW: VIEW
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Forced replacement prototype accessors methods
module.exports = __webpack_require__(31) || !__webpack_require__(3)(function () {
  var K = Math.random();
  // In FF throws only define methods
  // eslint-disable-next-line no-undef, no-useless-call
  __defineSetter__.call(null, K, function () { /* empty */ });
  delete __webpack_require__(2)[K];
});


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(0);

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { of: function of() {
    var length = arguments.length;
    var A = new Array(length);
    while (length--) A[length] = arguments[length];
    return new this(A);
  } });
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(0);
var aFunction = __webpack_require__(10);
var ctx = __webpack_require__(19);
var forOf = __webpack_require__(41);

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
    var mapFn = arguments[1];
    var mapping, A, n, cb;
    aFunction(this);
    mapping = mapFn !== undefined;
    if (mapping) aFunction(mapFn);
    if (source == undefined) return new this();
    A = [];
    if (mapping) {
      n = 0;
      cb = ctx(mapFn, arguments[2], 2);
      forOf(source, false, function (nextItem) {
        A.push(cb(nextItem, n++));
      });
    } else {
      forOf(source, false, A.push, A);
    }
    return new this(A);
  } });
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4);
var document = __webpack_require__(2).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var core = __webpack_require__(18);
var LIBRARY = __webpack_require__(31);
var wksExt = __webpack_require__(95);
var defineProperty = __webpack_require__(7).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(52)('keys');
var uid = __webpack_require__(34);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 70 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(2).document;
module.exports = document && document.documentElement;


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(4);
var anObject = __webpack_require__(1);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(19)(Function.call, __webpack_require__(16).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4);
var setPrototypeOf = __webpack_require__(72).set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toInteger = __webpack_require__(24);
var defined = __webpack_require__(23);

module.exports = function repeat(count) {
  var str = String(defined(this));
  var res = '';
  var n = toInteger(count);
  if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) res += str;
  return res;
};


/***/ }),
/* 76 */
/***/ (function(module, exports) {

// 20.2.2.28 Math.sign(x)
module.exports = Math.sign || function sign(x) {
  // eslint-disable-next-line no-self-compare
  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
};


/***/ }),
/* 77 */
/***/ (function(module, exports) {

// 20.2.2.14 Math.expm1(x)
var $expm1 = Math.expm1;
module.exports = (!$expm1
  // Old FF bug
  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
  // Tor Browser bug
  || $expm1(-2e-17) != -2e-17
) ? function expm1(x) {
  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
} : $expm1;


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(24);
var defined = __webpack_require__(23);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(31);
var $export = __webpack_require__(0);
var redefine = __webpack_require__(12);
var hide = __webpack_require__(11);
var Iterators = __webpack_require__(45);
var $iterCreate = __webpack_require__(80);
var setToStringTag = __webpack_require__(43);
var getPrototypeOf = __webpack_require__(17);
var ITERATOR = __webpack_require__(5)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(37);
var descriptor = __webpack_require__(33);
var setToStringTag = __webpack_require__(43);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(11)(IteratorPrototype, __webpack_require__(5)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

// helper for String#{startsWith, endsWith, includes}
var isRegExp = __webpack_require__(56);
var defined = __webpack_require__(23);

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var MATCH = __webpack_require__(5)('match');
module.exports = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) { /* empty */ }
  } return true;
};


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(45);
var ITERATOR = __webpack_require__(5)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(7);
var createDesc = __webpack_require__(33);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(50);
var ITERATOR = __webpack_require__(5)('iterator');
var Iterators = __webpack_require__(45);
module.exports = __webpack_require__(18).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(222);

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)

var toObject = __webpack_require__(9);
var toAbsoluteIndex = __webpack_require__(36);
var toLength = __webpack_require__(8);
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = toLength(O.length);
  var aLen = arguments.length;
  var index = toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);
  var end = aLen > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(32);
var step = __webpack_require__(111);
var Iterators = __webpack_require__(45);
var toIObject = __webpack_require__(15);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(79)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(19);
var invoke = __webpack_require__(101);
var html = __webpack_require__(71);
var cel = __webpack_require__(67);
var global = __webpack_require__(2);
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(20)(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var macrotask = __webpack_require__(89).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(20)(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(10);

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(2);
var DESCRIPTORS = __webpack_require__(6);
var LIBRARY = __webpack_require__(31);
var $typed = __webpack_require__(63);
var hide = __webpack_require__(11);
var redefineAll = __webpack_require__(42);
var fails = __webpack_require__(3);
var anInstance = __webpack_require__(40);
var toInteger = __webpack_require__(24);
var toLength = __webpack_require__(8);
var toIndex = __webpack_require__(120);
var gOPN = __webpack_require__(38).f;
var dP = __webpack_require__(7).f;
var arrayFill = __webpack_require__(87);
var setToStringTag = __webpack_require__(43);
var ARRAY_BUFFER = 'ArrayBuffer';
var DATA_VIEW = 'DataView';
var PROTOTYPE = 'prototype';
var WRONG_LENGTH = 'Wrong length!';
var WRONG_INDEX = 'Wrong index!';
var $ArrayBuffer = global[ARRAY_BUFFER];
var $DataView = global[DATA_VIEW];
var Math = global.Math;
var RangeError = global.RangeError;
// eslint-disable-next-line no-shadow-restricted-names
var Infinity = global.Infinity;
var BaseBuffer = $ArrayBuffer;
var abs = Math.abs;
var pow = Math.pow;
var floor = Math.floor;
var log = Math.log;
var LN2 = Math.LN2;
var BUFFER = 'buffer';
var BYTE_LENGTH = 'byteLength';
var BYTE_OFFSET = 'byteOffset';
var $BUFFER = DESCRIPTORS ? '_b' : BUFFER;
var $LENGTH = DESCRIPTORS ? '_l' : BYTE_LENGTH;
var $OFFSET = DESCRIPTORS ? '_o' : BYTE_OFFSET;

// IEEE754 conversions based on https://github.com/feross/ieee754
function packIEEE754(value, mLen, nBytes) {
  var buffer = new Array(nBytes);
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0;
  var i = 0;
  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
  var e, m, c;
  value = abs(value);
  // eslint-disable-next-line no-self-compare
  if (value != value || value === Infinity) {
    // eslint-disable-next-line no-self-compare
    m = value != value ? 1 : 0;
    e = eMax;
  } else {
    e = floor(log(value) / LN2);
    if (value * (c = pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }
    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * pow(2, eBias - 1) * pow(2, mLen);
      e = 0;
    }
  }
  for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
  e = e << mLen | m;
  eLen += mLen;
  for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
  buffer[--i] |= s * 128;
  return buffer;
}
function unpackIEEE754(buffer, mLen, nBytes) {
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = eLen - 7;
  var i = nBytes - 1;
  var s = buffer[i--];
  var e = s & 127;
  var m;
  s >>= 7;
  for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : s ? -Infinity : Infinity;
  } else {
    m = m + pow(2, mLen);
    e = e - eBias;
  } return (s ? -1 : 1) * m * pow(2, e - mLen);
}

function unpackI32(bytes) {
  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
}
function packI8(it) {
  return [it & 0xff];
}
function packI16(it) {
  return [it & 0xff, it >> 8 & 0xff];
}
function packI32(it) {
  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
}
function packF64(it) {
  return packIEEE754(it, 52, 8);
}
function packF32(it) {
  return packIEEE754(it, 23, 4);
}

function addGetter(C, key, internal) {
  dP(C[PROTOTYPE], key, { get: function () { return this[internal]; } });
}

function get(view, bytes, index, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = store.slice(start, start + bytes);
  return isLittleEndian ? pack : pack.reverse();
}
function set(view, bytes, index, conversion, value, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = conversion(+value);
  for (var i = 0; i < bytes; i++) store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
}

if (!$typed.ABV) {
  $ArrayBuffer = function ArrayBuffer(length) {
    anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
    var byteLength = toIndex(length);
    this._b = arrayFill.call(new Array(byteLength), 0);
    this[$LENGTH] = byteLength;
  };

  $DataView = function DataView(buffer, byteOffset, byteLength) {
    anInstance(this, $DataView, DATA_VIEW);
    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
    var bufferLength = buffer[$LENGTH];
    var offset = toInteger(byteOffset);
    if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset!');
    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
    if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
    this[$BUFFER] = buffer;
    this[$OFFSET] = offset;
    this[$LENGTH] = byteLength;
  };

  if (DESCRIPTORS) {
    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
    addGetter($DataView, BUFFER, '_b');
    addGetter($DataView, BYTE_LENGTH, '_l');
    addGetter($DataView, BYTE_OFFSET, '_o');
  }

  redefineAll($DataView[PROTOTYPE], {
    getInt8: function getInt8(byteOffset) {
      return get(this, 1, byteOffset)[0] << 24 >> 24;
    },
    getUint8: function getUint8(byteOffset) {
      return get(this, 1, byteOffset)[0];
    },
    getInt16: function getInt16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
    },
    getUint16: function getUint16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return bytes[1] << 8 | bytes[0];
    },
    getInt32: function getInt32(byteOffset /* , littleEndian */) {
      return unpackI32(get(this, 4, byteOffset, arguments[1]));
    },
    getUint32: function getUint32(byteOffset /* , littleEndian */) {
      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
    },
    getFloat32: function getFloat32(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
    },
    getFloat64: function getFloat64(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
    },
    setInt8: function setInt8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setUint8: function setUint8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setInt16: function setInt16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setUint16: function setUint16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setInt32: function setInt32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setUint32: function setUint32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packF32, value, arguments[2]);
    },
    setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {
      set(this, 8, byteOffset, packF64, value, arguments[2]);
    }
  });
} else {
  if (!fails(function () {
    $ArrayBuffer(1);
  }) || !fails(function () {
    new $ArrayBuffer(-1); // eslint-disable-line no-new
  }) || fails(function () {
    new $ArrayBuffer(); // eslint-disable-line no-new
    new $ArrayBuffer(1.5); // eslint-disable-line no-new
    new $ArrayBuffer(NaN); // eslint-disable-line no-new
    return $ArrayBuffer.name != ARRAY_BUFFER;
  })) {
    $ArrayBuffer = function ArrayBuffer(length) {
      anInstance(this, $ArrayBuffer);
      return new BaseBuffer(toIndex(length));
    };
    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
    for (var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j;) {
      if (!((key = keys[j++]) in $ArrayBuffer)) hide($ArrayBuffer, key, BaseBuffer[key]);
    }
    if (!LIBRARY) ArrayBufferProto.constructor = $ArrayBuffer;
  }
  // iOS Safari 7.x bug
  var view = new $DataView(new $ArrayBuffer(2));
  var $setInt8 = $DataView[PROTOTYPE].setInt8;
  view.setInt8(0, 2147483648);
  view.setInt8(1, 2147483649);
  if (view.getInt8(0) || !view.getInt8(1)) redefineAll($DataView[PROTOTYPE], {
    setInt8: function setInt8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    },
    setUint8: function setUint8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    }
  }, true);
}
setToStringTag($ArrayBuffer, ARRAY_BUFFER);
setToStringTag($DataView, DATA_VIEW);
hide($DataView[PROTOTYPE], $typed.VIEW, true);
exports[ARRAY_BUFFER] = $ArrayBuffer;
exports[DATA_VIEW] = $DataView;


/***/ }),
/* 93 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(6) && !__webpack_require__(3)(function () {
  return Object.defineProperty(__webpack_require__(67)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(5);


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(14);
var toIObject = __webpack_require__(15);
var arrayIndexOf = __webpack_require__(53)(false);
var IE_PROTO = __webpack_require__(69)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(7);
var anObject = __webpack_require__(1);
var getKeys = __webpack_require__(35);

module.exports = __webpack_require__(6) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(15);
var gOPN = __webpack_require__(38).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(35);
var gOPS = __webpack_require__(54);
var pIE = __webpack_require__(49);
var toObject = __webpack_require__(9);
var IObject = __webpack_require__(48);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(3)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(10);
var isObject = __webpack_require__(4);
var invoke = __webpack_require__(101);
var arraySlice = [].slice;
var factories = {};

var construct = function (F, len, args) {
  if (!(len in factories)) {
    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  } return factories[len](F, args);
};

module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = arraySlice.call(arguments, 1);
  var bound = function (/* args... */) {
    var args = partArgs.concat(arraySlice.call(arguments));
    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
  };
  if (isObject(fn.prototype)) bound.prototype = fn.prototype;
  return bound;
};


/***/ }),
/* 101 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

var $parseInt = __webpack_require__(2).parseInt;
var $trim = __webpack_require__(44).trim;
var ws = __webpack_require__(73);
var hex = /^[-+]?0[xX]/;

module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {
  var string = $trim(String(str), 3);
  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
} : $parseInt;


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

var $parseFloat = __webpack_require__(2).parseFloat;
var $trim = __webpack_require__(44).trim;

module.exports = 1 / $parseFloat(__webpack_require__(73) + '-0') !== -Infinity ? function parseFloat(str) {
  var string = $trim(String(str), 3);
  var result = $parseFloat(string);
  return result === 0 && string.charAt(0) == '-' ? -0 : result;
} : $parseFloat;


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var cof = __webpack_require__(20);
module.exports = function (it, msg) {
  if (typeof it != 'number' && cof(it) != 'Number') throw TypeError(msg);
  return +it;
};


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.3 Number.isInteger(number)
var isObject = __webpack_require__(4);
var floor = Math.floor;
module.exports = function isInteger(it) {
  return !isObject(it) && isFinite(it) && floor(it) === it;
};


/***/ }),
/* 106 */
/***/ (function(module, exports) {

// 20.2.2.20 Math.log1p(x)
module.exports = Math.log1p || function log1p(x) {
  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
};


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.16 Math.fround(x)
var sign = __webpack_require__(76);
var pow = Math.pow;
var EPSILON = pow(2, -52);
var EPSILON32 = pow(2, -23);
var MAX32 = pow(2, 127) * (2 - EPSILON32);
var MIN32 = pow(2, -126);

var roundTiesToEven = function (n) {
  return n + 1 / EPSILON - 1 / EPSILON;
};

module.exports = Math.fround || function fround(x) {
  var $abs = Math.abs(x);
  var $sign = sign(x);
  var a, result;
  if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
  a = (1 + EPSILON32 / EPSILON) * $abs;
  result = a - (a - $abs);
  // eslint-disable-next-line no-self-compare
  if (result > MAX32 || result != result) return $sign * Infinity;
  return $sign * result;
};


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(1);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(10);
var toObject = __webpack_require__(9);
var IObject = __webpack_require__(48);
var toLength = __webpack_require__(8);

module.exports = function (that, callbackfn, aLen, memo, isRight) {
  aFunction(callbackfn);
  var O = toObject(that);
  var self = IObject(O);
  var length = toLength(O.length);
  var index = isRight ? length - 1 : 0;
  var i = isRight ? -1 : 1;
  if (aLen < 2) for (;;) {
    if (index in self) {
      memo = self[index];
      index += i;
      break;
    }
    index += i;
    if (isRight ? index < 0 : length <= index) {
      throw TypeError('Reduce of empty array with no initial value');
    }
  }
  for (;isRight ? index >= 0 : length > index; index += i) if (index in self) {
    memo = callbackfn(memo, self[index], index, O);
  }
  return memo;
};


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)

var toObject = __webpack_require__(9);
var toAbsoluteIndex = __webpack_require__(36);
var toLength = __webpack_require__(8);

module.exports = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {
  var O = toObject(this);
  var len = toLength(O.length);
  var to = toAbsoluteIndex(target, len);
  var from = toAbsoluteIndex(start, len);
  var end = arguments.length > 2 ? arguments[2] : undefined;
  var count = Math.min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
  var inc = 1;
  if (from < to && to < from + count) {
    inc = -1;
    from += count - 1;
    to += count - 1;
  }
  while (count-- > 0) {
    if (from in O) O[to] = O[from];
    else delete O[to];
    to += inc;
    from += inc;
  } return O;
};


/***/ }),
/* 111 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

// 21.2.5.3 get RegExp.prototype.flags()
if (__webpack_require__(6) && /./g.flags != 'g') __webpack_require__(7).f(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__(58)
});


/***/ }),
/* 113 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(1);
var isObject = __webpack_require__(4);
var newPromiseCapability = __webpack_require__(91);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(116);
var validate = __webpack_require__(46);
var MAP = 'Map';

// 23.1 Map Objects
module.exports = __webpack_require__(62)(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP = __webpack_require__(7).f;
var create = __webpack_require__(37);
var redefineAll = __webpack_require__(42);
var ctx = __webpack_require__(19);
var anInstance = __webpack_require__(40);
var forOf = __webpack_require__(41);
var $iterDefine = __webpack_require__(79);
var step = __webpack_require__(111);
var setSpecies = __webpack_require__(39);
var DESCRIPTORS = __webpack_require__(6);
var fastKey = __webpack_require__(30).fastKey;
var validate = __webpack_require__(46);
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(116);
var validate = __webpack_require__(46);
var SET = 'Set';

// 23.2 Set Objects
module.exports = __webpack_require__(62)(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var each = __webpack_require__(26)(0);
var redefine = __webpack_require__(12);
var meta = __webpack_require__(30);
var assign = __webpack_require__(99);
var weak = __webpack_require__(119);
var isObject = __webpack_require__(4);
var fails = __webpack_require__(3);
var validate = __webpack_require__(46);
var WEAK_MAP = 'WeakMap';
var getWeak = meta.getWeak;
var isExtensible = Object.isExtensible;
var uncaughtFrozenStore = weak.ufstore;
var tmp = {};
var InternalMap;

var wrapper = function (get) {
  return function WeakMap() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
};

var methods = {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function get(key) {
    if (isObject(key)) {
      var data = getWeak(key);
      if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
      return data ? data[this._i] : undefined;
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function set(key, value) {
    return weak.def(validate(this, WEAK_MAP), key, value);
  }
};

// 23.3 WeakMap Objects
var $WeakMap = module.exports = __webpack_require__(62)(WEAK_MAP, wrapper, methods, weak, true, true);

// IE11 WeakMap frozen keys fix
if (fails(function () { return new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7; })) {
  InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
  assign(InternalMap.prototype, methods);
  meta.NEED = true;
  each(['delete', 'has', 'get', 'set'], function (key) {
    var proto = $WeakMap.prototype;
    var method = proto[key];
    redefine(proto, key, function (a, b) {
      // store frozen objects on internal weakmap shim
      if (isObject(a) && !isExtensible(a)) {
        if (!this._f) this._f = new InternalMap();
        var result = this._f[key](a, b);
        return key == 'set' ? this : result;
      // store all the rest on native weakmap
      } return method.call(this, a, b);
    });
  });
}


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefineAll = __webpack_require__(42);
var getWeak = __webpack_require__(30).getWeak;
var anObject = __webpack_require__(1);
var isObject = __webpack_require__(4);
var anInstance = __webpack_require__(40);
var forOf = __webpack_require__(41);
var createArrayMethod = __webpack_require__(26);
var $has = __webpack_require__(14);
var validate = __webpack_require__(46);
var arrayFind = createArrayMethod(5);
var arrayFindIndex = createArrayMethod(6);
var id = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function (that) {
  return that._l || (that._l = new UncaughtFrozenStore());
};
var UncaughtFrozenStore = function () {
  this.a = [];
};
var findUncaughtFrozen = function (store, key) {
  return arrayFind(store.a, function (it) {
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function (key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function (key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function (key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;
    else this.a.push([key, value]);
  },
  'delete': function (key) {
    var index = arrayFindIndex(this.a, function (it) {
      return it[0] === key;
    });
    if (~index) this.a.splice(index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;      // collection type
      that._i = id++;      // collection id
      that._l = undefined; // leak store for uncaught frozen objects
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function (key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);
        return data && $has(data, this._i) && delete data[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);
        return data && $has(data, this._i);
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var data = getWeak(anObject(key), true);
    if (data === true) uncaughtFrozenStore(that).set(key, value);
    else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/ecma262/#sec-toindex
var toInteger = __webpack_require__(24);
var toLength = __webpack_require__(8);
module.exports = function (it) {
  if (it === undefined) return 0;
  var number = toInteger(it);
  var length = toLength(number);
  if (number !== length) throw RangeError('Wrong length!');
  return length;
};


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

// all object keys, includes non-enumerable and symbols
var gOPN = __webpack_require__(38);
var gOPS = __webpack_require__(54);
var anObject = __webpack_require__(1);
var Reflect = __webpack_require__(2).Reflect;
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = gOPN.f(anObject(it));
  var getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray
var isArray = __webpack_require__(55);
var isObject = __webpack_require__(4);
var toLength = __webpack_require__(8);
var ctx = __webpack_require__(19);
var IS_CONCAT_SPREADABLE = __webpack_require__(5)('isConcatSpreadable');

function flattenIntoArray(target, original, source, sourceLen, start, depth, mapper, thisArg) {
  var targetIndex = start;
  var sourceIndex = 0;
  var mapFn = mapper ? ctx(mapper, thisArg, 3) : false;
  var element, spreadable;

  while (sourceIndex < sourceLen) {
    if (sourceIndex in source) {
      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

      spreadable = false;
      if (isObject(element)) {
        spreadable = element[IS_CONCAT_SPREADABLE];
        spreadable = spreadable !== undefined ? !!spreadable : isArray(element);
      }

      if (spreadable && depth > 0) {
        targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;
      } else {
        if (targetIndex >= 0x1fffffffffffff) throw TypeError();
        target[targetIndex] = element;
      }

      targetIndex++;
    }
    sourceIndex++;
  }
  return targetIndex;
}

module.exports = flattenIntoArray;


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-string-pad-start-end
var toLength = __webpack_require__(8);
var repeat = __webpack_require__(75);
var defined = __webpack_require__(23);

module.exports = function (that, maxLength, fillString, left) {
  var S = String(defined(that));
  var stringLength = S.length;
  var fillStr = fillString === undefined ? ' ' : String(fillString);
  var intMaxLength = toLength(maxLength);
  if (intMaxLength <= stringLength || fillStr == '') return S;
  var fillLen = intMaxLength - stringLength;
  var stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
  if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
  return left ? stringFiller + S : S + stringFiller;
};


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

var getKeys = __webpack_require__(35);
var toIObject = __webpack_require__(15);
var isEnum = __webpack_require__(49).f;
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) if (isEnum.call(O, key = keys[i++])) {
      result.push(isEntries ? [key, O[key]] : O[key]);
    } return result;
  };
};


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = __webpack_require__(50);
var from = __webpack_require__(126);
module.exports = function (NAME) {
  return function toJSON() {
    if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

var forOf = __webpack_require__(41);

module.exports = function (iter, ITERATOR) {
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};


/***/ }),
/* 127 */
/***/ (function(module, exports) {

// https://rwaldron.github.io/proposal-math-extensions/
module.exports = Math.scale || function scale(x, inLow, inHigh, outLow, outHigh) {
  if (
    arguments.length === 0
      // eslint-disable-next-line no-self-compare
      || x != x
      // eslint-disable-next-line no-self-compare
      || inLow != inLow
      // eslint-disable-next-line no-self-compare
      || inHigh != inHigh
      // eslint-disable-next-line no-self-compare
      || outLow != outLow
      // eslint-disable-next-line no-self-compare
      || outHigh != outHigh
  ) return NaN;
  if (x === Infinity || x === -Infinity) return x;
  return (x - inLow) * (outHigh - outLow) / (inHigh - inLow) + outLow;
};


/***/ }),
/* 128 */,
/* 129 */,
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

__webpack_require__(131);

__webpack_require__(328);

__webpack_require__(329);

if (global._babelPolyfill) {
  throw new Error("only one instance of babel-polyfill is allowed");
}
global._babelPolyfill = true;

var DEFINE_PROPERTY = "defineProperty";
function define(O, key, value) {
  O[key] || Object[DEFINE_PROPERTY](O, key, {
    writable: true,
    configurable: true,
    value: value
  });
}

define(String.prototype, "padLeft", "".padStart);
define(String.prototype, "padRight", "".padEnd);

"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function (key) {
  [][key] && define(Array, key, Function.call.bind([][key]));
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(93)))

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(132);
__webpack_require__(134);
__webpack_require__(135);
__webpack_require__(136);
__webpack_require__(137);
__webpack_require__(138);
__webpack_require__(139);
__webpack_require__(140);
__webpack_require__(141);
__webpack_require__(142);
__webpack_require__(143);
__webpack_require__(144);
__webpack_require__(145);
__webpack_require__(146);
__webpack_require__(147);
__webpack_require__(148);
__webpack_require__(150);
__webpack_require__(151);
__webpack_require__(152);
__webpack_require__(153);
__webpack_require__(154);
__webpack_require__(155);
__webpack_require__(156);
__webpack_require__(157);
__webpack_require__(158);
__webpack_require__(159);
__webpack_require__(160);
__webpack_require__(161);
__webpack_require__(162);
__webpack_require__(163);
__webpack_require__(164);
__webpack_require__(165);
__webpack_require__(166);
__webpack_require__(167);
__webpack_require__(168);
__webpack_require__(169);
__webpack_require__(170);
__webpack_require__(171);
__webpack_require__(172);
__webpack_require__(173);
__webpack_require__(174);
__webpack_require__(175);
__webpack_require__(176);
__webpack_require__(177);
__webpack_require__(178);
__webpack_require__(179);
__webpack_require__(180);
__webpack_require__(181);
__webpack_require__(182);
__webpack_require__(183);
__webpack_require__(184);
__webpack_require__(185);
__webpack_require__(186);
__webpack_require__(187);
__webpack_require__(188);
__webpack_require__(189);
__webpack_require__(190);
__webpack_require__(191);
__webpack_require__(192);
__webpack_require__(193);
__webpack_require__(194);
__webpack_require__(195);
__webpack_require__(196);
__webpack_require__(197);
__webpack_require__(198);
__webpack_require__(199);
__webpack_require__(200);
__webpack_require__(201);
__webpack_require__(202);
__webpack_require__(203);
__webpack_require__(204);
__webpack_require__(205);
__webpack_require__(206);
__webpack_require__(207);
__webpack_require__(208);
__webpack_require__(209);
__webpack_require__(210);
__webpack_require__(212);
__webpack_require__(213);
__webpack_require__(215);
__webpack_require__(216);
__webpack_require__(217);
__webpack_require__(218);
__webpack_require__(219);
__webpack_require__(220);
__webpack_require__(221);
__webpack_require__(223);
__webpack_require__(224);
__webpack_require__(225);
__webpack_require__(226);
__webpack_require__(227);
__webpack_require__(228);
__webpack_require__(229);
__webpack_require__(230);
__webpack_require__(231);
__webpack_require__(232);
__webpack_require__(233);
__webpack_require__(234);
__webpack_require__(235);
__webpack_require__(88);
__webpack_require__(236);
__webpack_require__(237);
__webpack_require__(112);
__webpack_require__(238);
__webpack_require__(239);
__webpack_require__(240);
__webpack_require__(241);
__webpack_require__(242);
__webpack_require__(115);
__webpack_require__(117);
__webpack_require__(118);
__webpack_require__(243);
__webpack_require__(244);
__webpack_require__(245);
__webpack_require__(246);
__webpack_require__(247);
__webpack_require__(248);
__webpack_require__(249);
__webpack_require__(250);
__webpack_require__(251);
__webpack_require__(252);
__webpack_require__(253);
__webpack_require__(254);
__webpack_require__(255);
__webpack_require__(256);
__webpack_require__(257);
__webpack_require__(258);
__webpack_require__(259);
__webpack_require__(260);
__webpack_require__(261);
__webpack_require__(262);
__webpack_require__(263);
__webpack_require__(264);
__webpack_require__(265);
__webpack_require__(266);
__webpack_require__(267);
__webpack_require__(268);
__webpack_require__(269);
__webpack_require__(270);
__webpack_require__(271);
__webpack_require__(272);
__webpack_require__(273);
__webpack_require__(274);
__webpack_require__(275);
__webpack_require__(276);
__webpack_require__(277);
__webpack_require__(278);
__webpack_require__(279);
__webpack_require__(280);
__webpack_require__(281);
__webpack_require__(282);
__webpack_require__(283);
__webpack_require__(284);
__webpack_require__(285);
__webpack_require__(286);
__webpack_require__(287);
__webpack_require__(288);
__webpack_require__(289);
__webpack_require__(290);
__webpack_require__(291);
__webpack_require__(292);
__webpack_require__(293);
__webpack_require__(294);
__webpack_require__(295);
__webpack_require__(296);
__webpack_require__(297);
__webpack_require__(298);
__webpack_require__(299);
__webpack_require__(300);
__webpack_require__(301);
__webpack_require__(302);
__webpack_require__(303);
__webpack_require__(304);
__webpack_require__(305);
__webpack_require__(306);
__webpack_require__(307);
__webpack_require__(308);
__webpack_require__(309);
__webpack_require__(310);
__webpack_require__(311);
__webpack_require__(312);
__webpack_require__(313);
__webpack_require__(314);
__webpack_require__(315);
__webpack_require__(316);
__webpack_require__(317);
__webpack_require__(318);
__webpack_require__(319);
__webpack_require__(320);
__webpack_require__(321);
__webpack_require__(322);
__webpack_require__(323);
__webpack_require__(324);
__webpack_require__(325);
__webpack_require__(326);
__webpack_require__(327);
module.exports = __webpack_require__(18);


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(2);
var has = __webpack_require__(14);
var DESCRIPTORS = __webpack_require__(6);
var $export = __webpack_require__(0);
var redefine = __webpack_require__(12);
var META = __webpack_require__(30).KEY;
var $fails = __webpack_require__(3);
var shared = __webpack_require__(52);
var setToStringTag = __webpack_require__(43);
var uid = __webpack_require__(34);
var wks = __webpack_require__(5);
var wksExt = __webpack_require__(95);
var wksDefine = __webpack_require__(68);
var enumKeys = __webpack_require__(133);
var isArray = __webpack_require__(55);
var anObject = __webpack_require__(1);
var isObject = __webpack_require__(4);
var toIObject = __webpack_require__(15);
var toPrimitive = __webpack_require__(22);
var createDesc = __webpack_require__(33);
var _create = __webpack_require__(37);
var gOPNExt = __webpack_require__(98);
var $GOPD = __webpack_require__(16);
var $DP = __webpack_require__(7);
var $keys = __webpack_require__(35);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(38).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(49).f = $propertyIsEnumerable;
  __webpack_require__(54).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(31)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(11)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(35);
var gOPS = __webpack_require__(54);
var pIE = __webpack_require__(49);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(37) });


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(6), 'Object', { defineProperty: __webpack_require__(7).f });


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);
// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
$export($export.S + $export.F * !__webpack_require__(6), 'Object', { defineProperties: __webpack_require__(97) });


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(15);
var $getOwnPropertyDescriptor = __webpack_require__(16).f;

__webpack_require__(25)('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(9);
var $getPrototypeOf = __webpack_require__(17);

__webpack_require__(25)('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(9);
var $keys = __webpack_require__(35);

__webpack_require__(25)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 Object.getOwnPropertyNames(O)
__webpack_require__(25)('getOwnPropertyNames', function () {
  return __webpack_require__(98).f;
});


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.5 Object.freeze(O)
var isObject = __webpack_require__(4);
var meta = __webpack_require__(30).onFreeze;

__webpack_require__(25)('freeze', function ($freeze) {
  return function freeze(it) {
    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
  };
});


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.17 Object.seal(O)
var isObject = __webpack_require__(4);
var meta = __webpack_require__(30).onFreeze;

__webpack_require__(25)('seal', function ($seal) {
  return function seal(it) {
    return $seal && isObject(it) ? $seal(meta(it)) : it;
  };
});


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.15 Object.preventExtensions(O)
var isObject = __webpack_require__(4);
var meta = __webpack_require__(30).onFreeze;

__webpack_require__(25)('preventExtensions', function ($preventExtensions) {
  return function preventExtensions(it) {
    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
  };
});


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.12 Object.isFrozen(O)
var isObject = __webpack_require__(4);

__webpack_require__(25)('isFrozen', function ($isFrozen) {
  return function isFrozen(it) {
    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
  };
});


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.13 Object.isSealed(O)
var isObject = __webpack_require__(4);

__webpack_require__(25)('isSealed', function ($isSealed) {
  return function isSealed(it) {
    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
  };
});


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.11 Object.isExtensible(O)
var isObject = __webpack_require__(4);

__webpack_require__(25)('isExtensible', function ($isExtensible) {
  return function isExtensible(it) {
    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
  };
});


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(0);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(99) });


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.10 Object.is(value1, value2)
var $export = __webpack_require__(0);
$export($export.S, 'Object', { is: __webpack_require__(149) });


/***/ }),
/* 149 */
/***/ (function(module, exports) {

// 7.2.9 SameValue(x, y)
module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(0);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(72).set });


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.3.6 Object.prototype.toString()
var classof = __webpack_require__(50);
var test = {};
test[__webpack_require__(5)('toStringTag')] = 'z';
if (test + '' != '[object z]') {
  __webpack_require__(12)(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
var $export = __webpack_require__(0);

$export($export.P, 'Function', { bind: __webpack_require__(100) });


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(7).f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__(6) && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isObject = __webpack_require__(4);
var getPrototypeOf = __webpack_require__(17);
var HAS_INSTANCE = __webpack_require__(5)('hasInstance');
var FunctionProto = Function.prototype;
// 19.2.3.6 Function.prototype[@@hasInstance](V)
if (!(HAS_INSTANCE in FunctionProto)) __webpack_require__(7).f(FunctionProto, HAS_INSTANCE, { value: function (O) {
  if (typeof this != 'function' || !isObject(O)) return false;
  if (!isObject(this.prototype)) return O instanceof this;
  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
  while (O = getPrototypeOf(O)) if (this.prototype === O) return true;
  return false;
} });


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);
var $parseInt = __webpack_require__(102);
// 18.2.5 parseInt(string, radix)
$export($export.G + $export.F * (parseInt != $parseInt), { parseInt: $parseInt });


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);
var $parseFloat = __webpack_require__(103);
// 18.2.4 parseFloat(string)
$export($export.G + $export.F * (parseFloat != $parseFloat), { parseFloat: $parseFloat });


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(2);
var has = __webpack_require__(14);
var cof = __webpack_require__(20);
var inheritIfRequired = __webpack_require__(74);
var toPrimitive = __webpack_require__(22);
var fails = __webpack_require__(3);
var gOPN = __webpack_require__(38).f;
var gOPD = __webpack_require__(16).f;
var dP = __webpack_require__(7).f;
var $trim = __webpack_require__(44).trim;
var NUMBER = 'Number';
var $Number = global[NUMBER];
var Base = $Number;
var proto = $Number.prototype;
// Opera ~12 has broken Object#toString
var BROKEN_COF = cof(__webpack_require__(37)(proto)) == NUMBER;
var TRIM = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default: return +it;
      }
      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)
        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for (var keys = __webpack_require__(6) ? gOPN(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(Base, key = keys[j]) && !has($Number, key)) {
      dP($Number, key, gOPD(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  __webpack_require__(12)(global, NUMBER, $Number);
}


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var toInteger = __webpack_require__(24);
var aNumberValue = __webpack_require__(104);
var repeat = __webpack_require__(75);
var $toFixed = 1.0.toFixed;
var floor = Math.floor;
var data = [0, 0, 0, 0, 0, 0];
var ERROR = 'Number.toFixed: incorrect invocation!';
var ZERO = '0';

var multiply = function (n, c) {
  var i = -1;
  var c2 = c;
  while (++i < 6) {
    c2 += n * data[i];
    data[i] = c2 % 1e7;
    c2 = floor(c2 / 1e7);
  }
};
var divide = function (n) {
  var i = 6;
  var c = 0;
  while (--i >= 0) {
    c += data[i];
    data[i] = floor(c / n);
    c = (c % n) * 1e7;
  }
};
var numToString = function () {
  var i = 6;
  var s = '';
  while (--i >= 0) {
    if (s !== '' || i === 0 || data[i] !== 0) {
      var t = String(data[i]);
      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
    }
  } return s;
};
var pow = function (x, n, acc) {
  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
};
var log = function (x) {
  var n = 0;
  var x2 = x;
  while (x2 >= 4096) {
    n += 12;
    x2 /= 4096;
  }
  while (x2 >= 2) {
    n += 1;
    x2 /= 2;
  } return n;
};

$export($export.P + $export.F * (!!$toFixed && (
  0.00008.toFixed(3) !== '0.000' ||
  0.9.toFixed(0) !== '1' ||
  1.255.toFixed(2) !== '1.25' ||
  1000000000000000128.0.toFixed(0) !== '1000000000000000128'
) || !__webpack_require__(3)(function () {
  // V8 ~ Android 4.3-
  $toFixed.call({});
})), 'Number', {
  toFixed: function toFixed(fractionDigits) {
    var x = aNumberValue(this, ERROR);
    var f = toInteger(fractionDigits);
    var s = '';
    var m = ZERO;
    var e, z, j, k;
    if (f < 0 || f > 20) throw RangeError(ERROR);
    // eslint-disable-next-line no-self-compare
    if (x != x) return 'NaN';
    if (x <= -1e21 || x >= 1e21) return String(x);
    if (x < 0) {
      s = '-';
      x = -x;
    }
    if (x > 1e-21) {
      e = log(x * pow(2, 69, 1)) - 69;
      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
      z *= 0x10000000000000;
      e = 52 - e;
      if (e > 0) {
        multiply(0, z);
        j = f;
        while (j >= 7) {
          multiply(1e7, 0);
          j -= 7;
        }
        multiply(pow(10, j, 1), 0);
        j = e - 1;
        while (j >= 23) {
          divide(1 << 23);
          j -= 23;
        }
        divide(1 << j);
        multiply(1, 1);
        divide(2);
        m = numToString();
      } else {
        multiply(0, z);
        multiply(1 << -e, 0);
        m = numToString() + repeat.call(ZERO, f);
      }
    }
    if (f > 0) {
      k = m.length;
      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
    } else {
      m = s + m;
    } return m;
  }
});


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var $fails = __webpack_require__(3);
var aNumberValue = __webpack_require__(104);
var $toPrecision = 1.0.toPrecision;

$export($export.P + $export.F * ($fails(function () {
  // IE7-
  return $toPrecision.call(1, undefined) !== '1';
}) || !$fails(function () {
  // V8 ~ Android 4.3-
  $toPrecision.call({});
})), 'Number', {
  toPrecision: function toPrecision(precision) {
    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision);
  }
});


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.1 Number.EPSILON
var $export = __webpack_require__(0);

$export($export.S, 'Number', { EPSILON: Math.pow(2, -52) });


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.2 Number.isFinite(number)
var $export = __webpack_require__(0);
var _isFinite = __webpack_require__(2).isFinite;

$export($export.S, 'Number', {
  isFinite: function isFinite(it) {
    return typeof it == 'number' && _isFinite(it);
  }
});


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.3 Number.isInteger(number)
var $export = __webpack_require__(0);

$export($export.S, 'Number', { isInteger: __webpack_require__(105) });


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.4 Number.isNaN(number)
var $export = __webpack_require__(0);

$export($export.S, 'Number', {
  isNaN: function isNaN(number) {
    // eslint-disable-next-line no-self-compare
    return number != number;
  }
});


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.5 Number.isSafeInteger(number)
var $export = __webpack_require__(0);
var isInteger = __webpack_require__(105);
var abs = Math.abs;

$export($export.S, 'Number', {
  isSafeInteger: function isSafeInteger(number) {
    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
  }
});


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.6 Number.MAX_SAFE_INTEGER
var $export = __webpack_require__(0);

$export($export.S, 'Number', { MAX_SAFE_INTEGER: 0x1fffffffffffff });


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.10 Number.MIN_SAFE_INTEGER
var $export = __webpack_require__(0);

$export($export.S, 'Number', { MIN_SAFE_INTEGER: -0x1fffffffffffff });


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);
var $parseFloat = __webpack_require__(103);
// 20.1.2.12 Number.parseFloat(string)
$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', { parseFloat: $parseFloat });


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);
var $parseInt = __webpack_require__(102);
// 20.1.2.13 Number.parseInt(string, radix)
$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', { parseInt: $parseInt });


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.3 Math.acosh(x)
var $export = __webpack_require__(0);
var log1p = __webpack_require__(106);
var sqrt = Math.sqrt;
var $acosh = Math.acosh;

$export($export.S + $export.F * !($acosh
  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
  && Math.floor($acosh(Number.MAX_VALUE)) == 710
  // Tor Browser bug: Math.acosh(Infinity) -> NaN
  && $acosh(Infinity) == Infinity
), 'Math', {
  acosh: function acosh(x) {
    return (x = +x) < 1 ? NaN : x > 94906265.62425156
      ? Math.log(x) + Math.LN2
      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
  }
});


/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.5 Math.asinh(x)
var $export = __webpack_require__(0);
var $asinh = Math.asinh;

function asinh(x) {
  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
}

// Tor Browser bug: Math.asinh(0) -> -0
$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', { asinh: asinh });


/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.7 Math.atanh(x)
var $export = __webpack_require__(0);
var $atanh = Math.atanh;

// Tor Browser bug: Math.atanh(-0) -> 0
$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
  atanh: function atanh(x) {
    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
  }
});


/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.9 Math.cbrt(x)
var $export = __webpack_require__(0);
var sign = __webpack_require__(76);

$export($export.S, 'Math', {
  cbrt: function cbrt(x) {
    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
  }
});


/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.11 Math.clz32(x)
var $export = __webpack_require__(0);

$export($export.S, 'Math', {
  clz32: function clz32(x) {
    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
  }
});


/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.12 Math.cosh(x)
var $export = __webpack_require__(0);
var exp = Math.exp;

$export($export.S, 'Math', {
  cosh: function cosh(x) {
    return (exp(x = +x) + exp(-x)) / 2;
  }
});


/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.14 Math.expm1(x)
var $export = __webpack_require__(0);
var $expm1 = __webpack_require__(77);

$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', { expm1: $expm1 });


/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.16 Math.fround(x)
var $export = __webpack_require__(0);

$export($export.S, 'Math', { fround: __webpack_require__(107) });


/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
var $export = __webpack_require__(0);
var abs = Math.abs;

$export($export.S, 'Math', {
  hypot: function hypot(value1, value2) { // eslint-disable-line no-unused-vars
    var sum = 0;
    var i = 0;
    var aLen = arguments.length;
    var larg = 0;
    var arg, div;
    while (i < aLen) {
      arg = abs(arguments[i++]);
      if (larg < arg) {
        div = larg / arg;
        sum = sum * div * div + 1;
        larg = arg;
      } else if (arg > 0) {
        div = arg / larg;
        sum += div * div;
      } else sum += arg;
    }
    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
  }
});


/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.18 Math.imul(x, y)
var $export = __webpack_require__(0);
var $imul = Math.imul;

// some WebKit versions fails with big numbers, some has wrong arity
$export($export.S + $export.F * __webpack_require__(3)(function () {
  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
}), 'Math', {
  imul: function imul(x, y) {
    var UINT16 = 0xffff;
    var xn = +x;
    var yn = +y;
    var xl = UINT16 & xn;
    var yl = UINT16 & yn;
    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
  }
});


/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.21 Math.log10(x)
var $export = __webpack_require__(0);

$export($export.S, 'Math', {
  log10: function log10(x) {
    return Math.log(x) * Math.LOG10E;
  }
});


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.20 Math.log1p(x)
var $export = __webpack_require__(0);

$export($export.S, 'Math', { log1p: __webpack_require__(106) });


/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.22 Math.log2(x)
var $export = __webpack_require__(0);

$export($export.S, 'Math', {
  log2: function log2(x) {
    return Math.log(x) / Math.LN2;
  }
});


/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.28 Math.sign(x)
var $export = __webpack_require__(0);

$export($export.S, 'Math', { sign: __webpack_require__(76) });


/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.30 Math.sinh(x)
var $export = __webpack_require__(0);
var expm1 = __webpack_require__(77);
var exp = Math.exp;

// V8 near Chromium 38 has a problem with very small numbers
$export($export.S + $export.F * __webpack_require__(3)(function () {
  return !Math.sinh(-2e-17) != -2e-17;
}), 'Math', {
  sinh: function sinh(x) {
    return Math.abs(x = +x) < 1
      ? (expm1(x) - expm1(-x)) / 2
      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
  }
});


/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.33 Math.tanh(x)
var $export = __webpack_require__(0);
var expm1 = __webpack_require__(77);
var exp = Math.exp;

$export($export.S, 'Math', {
  tanh: function tanh(x) {
    var a = expm1(x = +x);
    var b = expm1(-x);
    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
  }
});


/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.34 Math.trunc(x)
var $export = __webpack_require__(0);

$export($export.S, 'Math', {
  trunc: function trunc(it) {
    return (it > 0 ? Math.floor : Math.ceil)(it);
  }
});


/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);
var toAbsoluteIndex = __webpack_require__(36);
var fromCharCode = String.fromCharCode;
var $fromCodePoint = String.fromCodePoint;

// length should be 1, old FF problem
$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
  // 21.1.2.2 String.fromCodePoint(...codePoints)
  fromCodePoint: function fromCodePoint(x) { // eslint-disable-line no-unused-vars
    var res = [];
    var aLen = arguments.length;
    var i = 0;
    var code;
    while (aLen > i) {
      code = +arguments[i++];
      if (toAbsoluteIndex(code, 0x10ffff) !== code) throw RangeError(code + ' is not a valid code point');
      res.push(code < 0x10000
        ? fromCharCode(code)
        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
      );
    } return res.join('');
  }
});


/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);
var toIObject = __webpack_require__(15);
var toLength = __webpack_require__(8);

$export($export.S, 'String', {
  // 21.1.2.4 String.raw(callSite, ...substitutions)
  raw: function raw(callSite) {
    var tpl = toIObject(callSite.raw);
    var len = toLength(tpl.length);
    var aLen = arguments.length;
    var res = [];
    var i = 0;
    while (len > i) {
      res.push(String(tpl[i++]));
      if (i < aLen) res.push(String(arguments[i]));
    } return res.join('');
  }
});


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.1.3.25 String.prototype.trim()
__webpack_require__(44)('trim', function ($trim) {
  return function trim() {
    return $trim(this, 3);
  };
});


/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(78)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(79)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var $at = __webpack_require__(78)(false);
$export($export.P, 'String', {
  // 21.1.3.3 String.prototype.codePointAt(pos)
  codePointAt: function codePointAt(pos) {
    return $at(this, pos);
  }
});


/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])

var $export = __webpack_require__(0);
var toLength = __webpack_require__(8);
var context = __webpack_require__(81);
var ENDS_WITH = 'endsWith';
var $endsWith = ''[ENDS_WITH];

$export($export.P + $export.F * __webpack_require__(82)(ENDS_WITH), 'String', {
  endsWith: function endsWith(searchString /* , endPosition = @length */) {
    var that = context(this, searchString, ENDS_WITH);
    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
    var len = toLength(that.length);
    var end = endPosition === undefined ? len : Math.min(toLength(endPosition), len);
    var search = String(searchString);
    return $endsWith
      ? $endsWith.call(that, search, end)
      : that.slice(end - search.length, end) === search;
  }
});


/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)

var $export = __webpack_require__(0);
var context = __webpack_require__(81);
var INCLUDES = 'includes';

$export($export.P + $export.F * __webpack_require__(82)(INCLUDES), 'String', {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);

$export($export.P, 'String', {
  // 21.1.3.13 String.prototype.repeat(count)
  repeat: __webpack_require__(75)
});


/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.18 String.prototype.startsWith(searchString [, position ])

var $export = __webpack_require__(0);
var toLength = __webpack_require__(8);
var context = __webpack_require__(81);
var STARTS_WITH = 'startsWith';
var $startsWith = ''[STARTS_WITH];

$export($export.P + $export.F * __webpack_require__(82)(STARTS_WITH), 'String', {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = context(this, searchString, STARTS_WITH);
    var index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = String(searchString);
    return $startsWith
      ? $startsWith.call(that, search, index)
      : that.slice(index, index + search.length) === search;
  }
});


/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.2 String.prototype.anchor(name)
__webpack_require__(13)('anchor', function (createHTML) {
  return function anchor(name) {
    return createHTML(this, 'a', 'name', name);
  };
});


/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.3 String.prototype.big()
__webpack_require__(13)('big', function (createHTML) {
  return function big() {
    return createHTML(this, 'big', '', '');
  };
});


/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.4 String.prototype.blink()
__webpack_require__(13)('blink', function (createHTML) {
  return function blink() {
    return createHTML(this, 'blink', '', '');
  };
});


/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.5 String.prototype.bold()
__webpack_require__(13)('bold', function (createHTML) {
  return function bold() {
    return createHTML(this, 'b', '', '');
  };
});


/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.6 String.prototype.fixed()
__webpack_require__(13)('fixed', function (createHTML) {
  return function fixed() {
    return createHTML(this, 'tt', '', '');
  };
});


/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.7 String.prototype.fontcolor(color)
__webpack_require__(13)('fontcolor', function (createHTML) {
  return function fontcolor(color) {
    return createHTML(this, 'font', 'color', color);
  };
});


/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.8 String.prototype.fontsize(size)
__webpack_require__(13)('fontsize', function (createHTML) {
  return function fontsize(size) {
    return createHTML(this, 'font', 'size', size);
  };
});


/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.9 String.prototype.italics()
__webpack_require__(13)('italics', function (createHTML) {
  return function italics() {
    return createHTML(this, 'i', '', '');
  };
});


/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.10 String.prototype.link(url)
__webpack_require__(13)('link', function (createHTML) {
  return function link(url) {
    return createHTML(this, 'a', 'href', url);
  };
});


/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.11 String.prototype.small()
__webpack_require__(13)('small', function (createHTML) {
  return function small() {
    return createHTML(this, 'small', '', '');
  };
});


/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.12 String.prototype.strike()
__webpack_require__(13)('strike', function (createHTML) {
  return function strike() {
    return createHTML(this, 'strike', '', '');
  };
});


/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.13 String.prototype.sub()
__webpack_require__(13)('sub', function (createHTML) {
  return function sub() {
    return createHTML(this, 'sub', '', '');
  };
});


/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.14 String.prototype.sup()
__webpack_require__(13)('sup', function (createHTML) {
  return function sup() {
    return createHTML(this, 'sup', '', '');
  };
});


/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

// 20.3.3.1 / 15.9.4.4 Date.now()
var $export = __webpack_require__(0);

$export($export.S, 'Date', { now: function () { return new Date().getTime(); } });


/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var toObject = __webpack_require__(9);
var toPrimitive = __webpack_require__(22);

$export($export.P + $export.F * __webpack_require__(3)(function () {
  return new Date(NaN).toJSON() !== null
    || Date.prototype.toJSON.call({ toISOString: function () { return 1; } }) !== 1;
}), 'Date', {
  // eslint-disable-next-line no-unused-vars
  toJSON: function toJSON(key) {
    var O = toObject(this);
    var pv = toPrimitive(O);
    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
  }
});


/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var $export = __webpack_require__(0);
var toISOString = __webpack_require__(211);

// PhantomJS / old WebKit has a broken implementations
$export($export.P + $export.F * (Date.prototype.toISOString !== toISOString), 'Date', {
  toISOString: toISOString
});


/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var fails = __webpack_require__(3);
var getTime = Date.prototype.getTime;
var $toISOString = Date.prototype.toISOString;

var lz = function (num) {
  return num > 9 ? num : '0' + num;
};

// PhantomJS / old WebKit has a broken implementations
module.exports = (fails(function () {
  return $toISOString.call(new Date(-5e13 - 1)) != '0385-07-25T07:06:39.999Z';
}) || !fails(function () {
  $toISOString.call(new Date(NaN));
})) ? function toISOString() {
  if (!isFinite(getTime.call(this))) throw RangeError('Invalid time value');
  var d = this;
  var y = d.getUTCFullYear();
  var m = d.getUTCMilliseconds();
  var s = y < 0 ? '-' : y > 9999 ? '+' : '';
  return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
    '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
    'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
    ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
} : $toISOString;


/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

var DateProto = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var $toString = DateProto[TO_STRING];
var getTime = DateProto.getTime;
if (new Date(NaN) + '' != INVALID_DATE) {
  __webpack_require__(12)(DateProto, TO_STRING, function toString() {
    var value = getTime.call(this);
    // eslint-disable-next-line no-self-compare
    return value === value ? $toString.call(this) : INVALID_DATE;
  });
}


/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

var TO_PRIMITIVE = __webpack_require__(5)('toPrimitive');
var proto = Date.prototype;

if (!(TO_PRIMITIVE in proto)) __webpack_require__(11)(proto, TO_PRIMITIVE, __webpack_require__(214));


/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__(1);
var toPrimitive = __webpack_require__(22);
var NUMBER = 'number';

module.exports = function (hint) {
  if (hint !== 'string' && hint !== NUMBER && hint !== 'default') throw TypeError('Incorrect hint');
  return toPrimitive(anObject(this), hint != NUMBER);
};


/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = __webpack_require__(0);

$export($export.S, 'Array', { isArray: __webpack_require__(55) });


/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(19);
var $export = __webpack_require__(0);
var toObject = __webpack_require__(9);
var call = __webpack_require__(108);
var isArrayIter = __webpack_require__(83);
var toLength = __webpack_require__(8);
var createProperty = __webpack_require__(84);
var getIterFn = __webpack_require__(85);

$export($export.S + $export.F * !__webpack_require__(57)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var createProperty = __webpack_require__(84);

// WebKit Array.of isn't generic
$export($export.S + $export.F * __webpack_require__(3)(function () {
  function F() { /* empty */ }
  return !(Array.of.call(F) instanceof F);
}), 'Array', {
  // 22.1.2.3 Array.of( ...items)
  of: function of(/* ...args */) {
    var index = 0;
    var aLen = arguments.length;
    var result = new (typeof this == 'function' ? this : Array)(aLen);
    while (aLen > index) createProperty(result, index, arguments[index++]);
    result.length = aLen;
    return result;
  }
});


/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.13 Array.prototype.join(separator)
var $export = __webpack_require__(0);
var toIObject = __webpack_require__(15);
var arrayJoin = [].join;

// fallback for not array-like strings
$export($export.P + $export.F * (__webpack_require__(48) != Object || !__webpack_require__(21)(arrayJoin)), 'Array', {
  join: function join(separator) {
    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
  }
});


/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var html = __webpack_require__(71);
var cof = __webpack_require__(20);
var toAbsoluteIndex = __webpack_require__(36);
var toLength = __webpack_require__(8);
var arraySlice = [].slice;

// fallback for not array-like ES3 strings and DOM objects
$export($export.P + $export.F * __webpack_require__(3)(function () {
  if (html) arraySlice.call(html);
}), 'Array', {
  slice: function slice(begin, end) {
    var len = toLength(this.length);
    var klass = cof(this);
    end = end === undefined ? len : end;
    if (klass == 'Array') return arraySlice.call(this, begin, end);
    var start = toAbsoluteIndex(begin, len);
    var upTo = toAbsoluteIndex(end, len);
    var size = toLength(upTo - start);
    var cloned = new Array(size);
    var i = 0;
    for (; i < size; i++) cloned[i] = klass == 'String'
      ? this.charAt(start + i)
      : this[start + i];
    return cloned;
  }
});


/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var aFunction = __webpack_require__(10);
var toObject = __webpack_require__(9);
var fails = __webpack_require__(3);
var $sort = [].sort;
var test = [1, 2, 3];

$export($export.P + $export.F * (fails(function () {
  // IE8-
  test.sort(undefined);
}) || !fails(function () {
  // V8 bug
  test.sort(null);
  // Old WebKit
}) || !__webpack_require__(21)($sort)), 'Array', {
  // 22.1.3.25 Array.prototype.sort(comparefn)
  sort: function sort(comparefn) {
    return comparefn === undefined
      ? $sort.call(toObject(this))
      : $sort.call(toObject(this), aFunction(comparefn));
  }
});


/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var $forEach = __webpack_require__(26)(0);
var STRICT = __webpack_require__(21)([].forEach, true);

$export($export.P + $export.F * !STRICT, 'Array', {
  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
  forEach: function forEach(callbackfn /* , thisArg */) {
    return $forEach(this, callbackfn, arguments[1]);
  }
});


/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4);
var isArray = __webpack_require__(55);
var SPECIES = __webpack_require__(5)('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var $map = __webpack_require__(26)(1);

$export($export.P + $export.F * !__webpack_require__(21)([].map, true), 'Array', {
  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments[1]);
  }
});


/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var $filter = __webpack_require__(26)(2);

$export($export.P + $export.F * !__webpack_require__(21)([].filter, true), 'Array', {
  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments[1]);
  }
});


/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var $some = __webpack_require__(26)(3);

$export($export.P + $export.F * !__webpack_require__(21)([].some, true), 'Array', {
  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
  some: function some(callbackfn /* , thisArg */) {
    return $some(this, callbackfn, arguments[1]);
  }
});


/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var $every = __webpack_require__(26)(4);

$export($export.P + $export.F * !__webpack_require__(21)([].every, true), 'Array', {
  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
  every: function every(callbackfn /* , thisArg */) {
    return $every(this, callbackfn, arguments[1]);
  }
});


/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var $reduce = __webpack_require__(109);

$export($export.P + $export.F * !__webpack_require__(21)([].reduce, true), 'Array', {
  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
  reduce: function reduce(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
  }
});


/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var $reduce = __webpack_require__(109);

$export($export.P + $export.F * !__webpack_require__(21)([].reduceRight, true), 'Array', {
  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
  reduceRight: function reduceRight(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
  }
});


/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var $indexOf = __webpack_require__(53)(false);
var $native = [].indexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(21)($native)), 'Array', {
  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? $native.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments[1]);
  }
});


/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var toIObject = __webpack_require__(15);
var toInteger = __webpack_require__(24);
var toLength = __webpack_require__(8);
var $native = [].lastIndexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(21)($native)), 'Array', {
  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
  lastIndexOf: function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {
    // convert -0 to +0
    if (NEGATIVE_ZERO) return $native.apply(this, arguments) || 0;
    var O = toIObject(this);
    var length = toLength(O.length);
    var index = length - 1;
    if (arguments.length > 1) index = Math.min(index, toInteger(arguments[1]));
    if (index < 0) index = length + index;
    for (;index >= 0; index--) if (index in O) if (O[index] === searchElement) return index || 0;
    return -1;
  }
});


/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
var $export = __webpack_require__(0);

$export($export.P, 'Array', { copyWithin: __webpack_require__(110) });

__webpack_require__(32)('copyWithin');


/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
var $export = __webpack_require__(0);

$export($export.P, 'Array', { fill: __webpack_require__(87) });

__webpack_require__(32)('fill');


/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = __webpack_require__(0);
var $find = __webpack_require__(26)(5);
var KEY = 'find';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(32)(KEY);


/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
var $export = __webpack_require__(0);
var $find = __webpack_require__(26)(6);
var KEY = 'findIndex';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(32)(KEY);


/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(39)('Array');


/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var inheritIfRequired = __webpack_require__(74);
var dP = __webpack_require__(7).f;
var gOPN = __webpack_require__(38).f;
var isRegExp = __webpack_require__(56);
var $flags = __webpack_require__(58);
var $RegExp = global.RegExp;
var Base = $RegExp;
var proto = $RegExp.prototype;
var re1 = /a/g;
var re2 = /a/g;
// "new" creates a new object, old webkit buggy here
var CORRECT_NEW = new $RegExp(re1) !== re1;

if (__webpack_require__(6) && (!CORRECT_NEW || __webpack_require__(3)(function () {
  re2[__webpack_require__(5)('match')] = false;
  // RegExp constructor can alter flags and IsRegExp works correct with @@match
  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
}))) {
  $RegExp = function RegExp(p, f) {
    var tiRE = this instanceof $RegExp;
    var piRE = isRegExp(p);
    var fiU = f === undefined;
    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
      : inheritIfRequired(CORRECT_NEW
        ? new Base(piRE && !fiU ? p.source : p, f)
        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
      , tiRE ? this : proto, $RegExp);
  };
  var proxy = function (key) {
    key in $RegExp || dP($RegExp, key, {
      configurable: true,
      get: function () { return Base[key]; },
      set: function (it) { Base[key] = it; }
    });
  };
  for (var keys = gOPN(Base), i = 0; keys.length > i;) proxy(keys[i++]);
  proto.constructor = $RegExp;
  $RegExp.prototype = proto;
  __webpack_require__(12)(global, 'RegExp', $RegExp);
}

__webpack_require__(39)('RegExp');


/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(112);
var anObject = __webpack_require__(1);
var $flags = __webpack_require__(58);
var DESCRIPTORS = __webpack_require__(6);
var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function (fn) {
  __webpack_require__(12)(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (__webpack_require__(3)(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}


/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

// @@match logic
__webpack_require__(59)('match', 1, function (defined, MATCH, $match) {
  // 21.1.3.11 String.prototype.match(regexp)
  return [function match(regexp) {
    'use strict';
    var O = defined(this);
    var fn = regexp == undefined ? undefined : regexp[MATCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
  }, $match];
});


/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

// @@replace logic
__webpack_require__(59)('replace', 2, function (defined, REPLACE, $replace) {
  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
  return [function replace(searchValue, replaceValue) {
    'use strict';
    var O = defined(this);
    var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
    return fn !== undefined
      ? fn.call(searchValue, O, replaceValue)
      : $replace.call(String(O), searchValue, replaceValue);
  }, $replace];
});


/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

// @@search logic
__webpack_require__(59)('search', 1, function (defined, SEARCH, $search) {
  // 21.1.3.15 String.prototype.search(regexp)
  return [function search(regexp) {
    'use strict';
    var O = defined(this);
    var fn = regexp == undefined ? undefined : regexp[SEARCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
  }, $search];
});


/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

// @@split logic
__webpack_require__(59)('split', 2, function (defined, SPLIT, $split) {
  'use strict';
  var isRegExp = __webpack_require__(56);
  var _split = $split;
  var $push = [].push;
  var $SPLIT = 'split';
  var LENGTH = 'length';
  var LAST_INDEX = 'lastIndex';
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
    // based on es5-shim implementation, need to rework it
    $split = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return _split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var separator2, match, lastIndex, lastLength, i;
      // Doesn't need flags gy, but they don't hurt
      if (!NPCG) separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
      while (match = separatorCopy.exec(string)) {
        // `separatorCopy.lastIndex` is not reliable cross-browser
        lastIndex = match.index + match[0][LENGTH];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
          // eslint-disable-next-line no-loop-func
          if (!NPCG && match[LENGTH] > 1) match[0].replace(separator2, function () {
            for (i = 1; i < arguments[LENGTH] - 2; i++) if (arguments[i] === undefined) match[i] = undefined;
          });
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    $split = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
    };
  }
  // 21.1.3.17 String.prototype.split(separator, limit)
  return [function split(separator, limit) {
    var O = defined(this);
    var fn = separator == undefined ? undefined : separator[SPLIT];
    return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
  }, $split];
});


/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(31);
var global = __webpack_require__(2);
var ctx = __webpack_require__(19);
var classof = __webpack_require__(50);
var $export = __webpack_require__(0);
var isObject = __webpack_require__(4);
var aFunction = __webpack_require__(10);
var anInstance = __webpack_require__(40);
var forOf = __webpack_require__(41);
var speciesConstructor = __webpack_require__(60);
var task = __webpack_require__(89).set;
var microtask = __webpack_require__(90)();
var newPromiseCapabilityModule = __webpack_require__(91);
var perform = __webpack_require__(113);
var userAgent = __webpack_require__(61);
var promiseResolve = __webpack_require__(114);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(5)('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(42)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(43)($Promise, PROMISE);
__webpack_require__(39)(PROMISE);
Wrapper = __webpack_require__(18)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(57)(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var weak = __webpack_require__(119);
var validate = __webpack_require__(46);
var WEAK_SET = 'WeakSet';

// 23.4 WeakSet Objects
__webpack_require__(62)(WEAK_SET, function (get) {
  return function WeakSet() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.4.3.1 WeakSet.prototype.add(value)
  add: function add(value) {
    return weak.def(validate(this, WEAK_SET), value, true);
  }
}, weak, false, true);


/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var $typed = __webpack_require__(63);
var buffer = __webpack_require__(92);
var anObject = __webpack_require__(1);
var toAbsoluteIndex = __webpack_require__(36);
var toLength = __webpack_require__(8);
var isObject = __webpack_require__(4);
var ArrayBuffer = __webpack_require__(2).ArrayBuffer;
var speciesConstructor = __webpack_require__(60);
var $ArrayBuffer = buffer.ArrayBuffer;
var $DataView = buffer.DataView;
var $isView = $typed.ABV && ArrayBuffer.isView;
var $slice = $ArrayBuffer.prototype.slice;
var VIEW = $typed.VIEW;
var ARRAY_BUFFER = 'ArrayBuffer';

$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), { ArrayBuffer: $ArrayBuffer });

$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
  // 24.1.3.1 ArrayBuffer.isView(arg)
  isView: function isView(it) {
    return $isView && $isView(it) || isObject(it) && VIEW in it;
  }
});

$export($export.P + $export.U + $export.F * __webpack_require__(3)(function () {
  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
}), ARRAY_BUFFER, {
  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
  slice: function slice(start, end) {
    if ($slice !== undefined && end === undefined) return $slice.call(anObject(this), start); // FF fix
    var len = anObject(this).byteLength;
    var first = toAbsoluteIndex(start, len);
    var final = toAbsoluteIndex(end === undefined ? len : end, len);
    var result = new (speciesConstructor(this, $ArrayBuffer))(toLength(final - first));
    var viewS = new $DataView(this);
    var viewT = new $DataView(result);
    var index = 0;
    while (first < final) {
      viewT.setUint8(index++, viewS.getUint8(first++));
    } return result;
  }
});

__webpack_require__(39)(ARRAY_BUFFER);


/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);
$export($export.G + $export.W + $export.F * !__webpack_require__(63).ABV, {
  DataView: __webpack_require__(92).DataView
});


/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(27)('Int8', 1, function (init) {
  return function Int8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(27)('Uint8', 1, function (init) {
  return function Uint8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(27)('Uint8', 1, function (init) {
  return function Uint8ClampedArray(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
}, true);


/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(27)('Int16', 2, function (init) {
  return function Int16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(27)('Uint16', 2, function (init) {
  return function Uint16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(27)('Int32', 4, function (init) {
  return function Int32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(27)('Uint32', 4, function (init) {
  return function Uint32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(27)('Float32', 4, function (init) {
  return function Float32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(27)('Float64', 8, function (init) {
  return function Float64Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
var $export = __webpack_require__(0);
var aFunction = __webpack_require__(10);
var anObject = __webpack_require__(1);
var rApply = (__webpack_require__(2).Reflect || {}).apply;
var fApply = Function.apply;
// MS Edge argumentsList argument is optional
$export($export.S + $export.F * !__webpack_require__(3)(function () {
  rApply(function () { /* empty */ });
}), 'Reflect', {
  apply: function apply(target, thisArgument, argumentsList) {
    var T = aFunction(target);
    var L = anObject(argumentsList);
    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
  }
});


/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
var $export = __webpack_require__(0);
var create = __webpack_require__(37);
var aFunction = __webpack_require__(10);
var anObject = __webpack_require__(1);
var isObject = __webpack_require__(4);
var fails = __webpack_require__(3);
var bind = __webpack_require__(100);
var rConstruct = (__webpack_require__(2).Reflect || {}).construct;

// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function () {
  function F() { /* empty */ }
  return !(rConstruct(function () { /* empty */ }, [], F) instanceof F);
});
var ARGS_BUG = !fails(function () {
  rConstruct(function () { /* empty */ });
});

$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
  construct: function construct(Target, args /* , newTarget */) {
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0: return new Target();
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : Object.prototype);
    var result = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});


/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
var dP = __webpack_require__(7);
var $export = __webpack_require__(0);
var anObject = __webpack_require__(1);
var toPrimitive = __webpack_require__(22);

// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
$export($export.S + $export.F * __webpack_require__(3)(function () {
  // eslint-disable-next-line no-undef
  Reflect.defineProperty(dP.f({}, 1, { value: 1 }), 1, { value: 2 });
}), 'Reflect', {
  defineProperty: function defineProperty(target, propertyKey, attributes) {
    anObject(target);
    propertyKey = toPrimitive(propertyKey, true);
    anObject(attributes);
    try {
      dP.f(target, propertyKey, attributes);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.4 Reflect.deleteProperty(target, propertyKey)
var $export = __webpack_require__(0);
var gOPD = __webpack_require__(16).f;
var anObject = __webpack_require__(1);

$export($export.S, 'Reflect', {
  deleteProperty: function deleteProperty(target, propertyKey) {
    var desc = gOPD(anObject(target), propertyKey);
    return desc && !desc.configurable ? false : delete target[propertyKey];
  }
});


/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 26.1.5 Reflect.enumerate(target)
var $export = __webpack_require__(0);
var anObject = __webpack_require__(1);
var Enumerate = function (iterated) {
  this._t = anObject(iterated); // target
  this._i = 0;                  // next index
  var keys = this._k = [];      // keys
  var key;
  for (key in iterated) keys.push(key);
};
__webpack_require__(80)(Enumerate, 'Object', function () {
  var that = this;
  var keys = that._k;
  var key;
  do {
    if (that._i >= keys.length) return { value: undefined, done: true };
  } while (!((key = keys[that._i++]) in that._t));
  return { value: key, done: false };
});

$export($export.S, 'Reflect', {
  enumerate: function enumerate(target) {
    return new Enumerate(target);
  }
});


/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.6 Reflect.get(target, propertyKey [, receiver])
var gOPD = __webpack_require__(16);
var getPrototypeOf = __webpack_require__(17);
var has = __webpack_require__(14);
var $export = __webpack_require__(0);
var isObject = __webpack_require__(4);
var anObject = __webpack_require__(1);

function get(target, propertyKey /* , receiver */) {
  var receiver = arguments.length < 3 ? target : arguments[2];
  var desc, proto;
  if (anObject(target) === receiver) return target[propertyKey];
  if (desc = gOPD.f(target, propertyKey)) return has(desc, 'value')
    ? desc.value
    : desc.get !== undefined
      ? desc.get.call(receiver)
      : undefined;
  if (isObject(proto = getPrototypeOf(target))) return get(proto, propertyKey, receiver);
}

$export($export.S, 'Reflect', { get: get });


/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
var gOPD = __webpack_require__(16);
var $export = __webpack_require__(0);
var anObject = __webpack_require__(1);

$export($export.S, 'Reflect', {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
    return gOPD.f(anObject(target), propertyKey);
  }
});


/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.8 Reflect.getPrototypeOf(target)
var $export = __webpack_require__(0);
var getProto = __webpack_require__(17);
var anObject = __webpack_require__(1);

$export($export.S, 'Reflect', {
  getPrototypeOf: function getPrototypeOf(target) {
    return getProto(anObject(target));
  }
});


/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.9 Reflect.has(target, propertyKey)
var $export = __webpack_require__(0);

$export($export.S, 'Reflect', {
  has: function has(target, propertyKey) {
    return propertyKey in target;
  }
});


/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.10 Reflect.isExtensible(target)
var $export = __webpack_require__(0);
var anObject = __webpack_require__(1);
var $isExtensible = Object.isExtensible;

$export($export.S, 'Reflect', {
  isExtensible: function isExtensible(target) {
    anObject(target);
    return $isExtensible ? $isExtensible(target) : true;
  }
});


/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.11 Reflect.ownKeys(target)
var $export = __webpack_require__(0);

$export($export.S, 'Reflect', { ownKeys: __webpack_require__(121) });


/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.12 Reflect.preventExtensions(target)
var $export = __webpack_require__(0);
var anObject = __webpack_require__(1);
var $preventExtensions = Object.preventExtensions;

$export($export.S, 'Reflect', {
  preventExtensions: function preventExtensions(target) {
    anObject(target);
    try {
      if ($preventExtensions) $preventExtensions(target);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
var dP = __webpack_require__(7);
var gOPD = __webpack_require__(16);
var getPrototypeOf = __webpack_require__(17);
var has = __webpack_require__(14);
var $export = __webpack_require__(0);
var createDesc = __webpack_require__(33);
var anObject = __webpack_require__(1);
var isObject = __webpack_require__(4);

function set(target, propertyKey, V /* , receiver */) {
  var receiver = arguments.length < 4 ? target : arguments[3];
  var ownDesc = gOPD.f(anObject(target), propertyKey);
  var existingDescriptor, proto;
  if (!ownDesc) {
    if (isObject(proto = getPrototypeOf(target))) {
      return set(proto, propertyKey, V, receiver);
    }
    ownDesc = createDesc(0);
  }
  if (has(ownDesc, 'value')) {
    if (ownDesc.writable === false || !isObject(receiver)) return false;
    if (existingDescriptor = gOPD.f(receiver, propertyKey)) {
      if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;
      existingDescriptor.value = V;
      dP.f(receiver, propertyKey, existingDescriptor);
    } else dP.f(receiver, propertyKey, createDesc(0, V));
    return true;
  }
  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
}

$export($export.S, 'Reflect', { set: set });


/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.14 Reflect.setPrototypeOf(target, proto)
var $export = __webpack_require__(0);
var setProto = __webpack_require__(72);

if (setProto) $export($export.S, 'Reflect', {
  setPrototypeOf: function setPrototypeOf(target, proto) {
    setProto.check(target, proto);
    try {
      setProto.set(target, proto);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/Array.prototype.includes
var $export = __webpack_require__(0);
var $includes = __webpack_require__(53)(true);

$export($export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__(32)('includes');


/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatMap
var $export = __webpack_require__(0);
var flattenIntoArray = __webpack_require__(122);
var toObject = __webpack_require__(9);
var toLength = __webpack_require__(8);
var aFunction = __webpack_require__(10);
var arraySpeciesCreate = __webpack_require__(86);

$export($export.P, 'Array', {
  flatMap: function flatMap(callbackfn /* , thisArg */) {
    var O = toObject(this);
    var sourceLen, A;
    aFunction(callbackfn);
    sourceLen = toLength(O.length);
    A = arraySpeciesCreate(O, 0);
    flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments[1]);
    return A;
  }
});

__webpack_require__(32)('flatMap');


/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatten
var $export = __webpack_require__(0);
var flattenIntoArray = __webpack_require__(122);
var toObject = __webpack_require__(9);
var toLength = __webpack_require__(8);
var toInteger = __webpack_require__(24);
var arraySpeciesCreate = __webpack_require__(86);

$export($export.P, 'Array', {
  flatten: function flatten(/* depthArg = 1 */) {
    var depthArg = arguments[0];
    var O = toObject(this);
    var sourceLen = toLength(O.length);
    var A = arraySpeciesCreate(O, 0);
    flattenIntoArray(A, O, O, sourceLen, 0, depthArg === undefined ? 1 : toInteger(depthArg));
    return A;
  }
});

__webpack_require__(32)('flatten');


/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/mathiasbynens/String.prototype.at
var $export = __webpack_require__(0);
var $at = __webpack_require__(78)(true);

$export($export.P, 'String', {
  at: function at(pos) {
    return $at(this, pos);
  }
});


/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-string-pad-start-end
var $export = __webpack_require__(0);
var $pad = __webpack_require__(123);
var userAgent = __webpack_require__(61);

// https://github.com/zloirock/core-js/issues/280
$export($export.P + $export.F * /Version\/10\.\d+(\.\d+)? Safari\//.test(userAgent), 'String', {
  padStart: function padStart(maxLength /* , fillString = ' ' */) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
  }
});


/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-string-pad-start-end
var $export = __webpack_require__(0);
var $pad = __webpack_require__(123);
var userAgent = __webpack_require__(61);

// https://github.com/zloirock/core-js/issues/280
$export($export.P + $export.F * /Version\/10\.\d+(\.\d+)? Safari\//.test(userAgent), 'String', {
  padEnd: function padEnd(maxLength /* , fillString = ' ' */) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
  }
});


/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
__webpack_require__(44)('trimLeft', function ($trim) {
  return function trimLeft() {
    return $trim(this, 1);
  };
}, 'trimStart');


/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
__webpack_require__(44)('trimRight', function ($trim) {
  return function trimRight() {
    return $trim(this, 2);
  };
}, 'trimEnd');


/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/String.prototype.matchAll/
var $export = __webpack_require__(0);
var defined = __webpack_require__(23);
var toLength = __webpack_require__(8);
var isRegExp = __webpack_require__(56);
var getFlags = __webpack_require__(58);
var RegExpProto = RegExp.prototype;

var $RegExpStringIterator = function (regexp, string) {
  this._r = regexp;
  this._s = string;
};

__webpack_require__(80)($RegExpStringIterator, 'RegExp String', function next() {
  var match = this._r.exec(this._s);
  return { value: match, done: match === null };
});

$export($export.P, 'String', {
  matchAll: function matchAll(regexp) {
    defined(this);
    if (!isRegExp(regexp)) throw TypeError(regexp + ' is not a regexp!');
    var S = String(this);
    var flags = 'flags' in RegExpProto ? String(regexp.flags) : getFlags.call(regexp);
    var rx = new RegExp(regexp.source, ~flags.indexOf('g') ? flags : 'g' + flags);
    rx.lastIndex = toLength(regexp.lastIndex);
    return new $RegExpStringIterator(rx, S);
  }
});


/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(68)('asyncIterator');


/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(68)('observable');


/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-getownpropertydescriptors
var $export = __webpack_require__(0);
var ownKeys = __webpack_require__(121);
var toIObject = __webpack_require__(15);
var gOPD = __webpack_require__(16);
var createProperty = __webpack_require__(84);

$export($export.S, 'Object', {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIObject(object);
    var getDesc = gOPD.f;
    var keys = ownKeys(O);
    var result = {};
    var i = 0;
    var key, desc;
    while (keys.length > i) {
      desc = getDesc(O, key = keys[i++]);
      if (desc !== undefined) createProperty(result, key, desc);
    }
    return result;
  }
});


/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(0);
var $values = __webpack_require__(124)(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});


/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(0);
var $entries = __webpack_require__(124)(true);

$export($export.S, 'Object', {
  entries: function entries(it) {
    return $entries(it);
  }
});


/***/ }),
/* 283 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var toObject = __webpack_require__(9);
var aFunction = __webpack_require__(10);
var $defineProperty = __webpack_require__(7);

// B.2.2.2 Object.prototype.__defineGetter__(P, getter)
__webpack_require__(6) && $export($export.P + __webpack_require__(64), 'Object', {
  __defineGetter__: function __defineGetter__(P, getter) {
    $defineProperty.f(toObject(this), P, { get: aFunction(getter), enumerable: true, configurable: true });
  }
});


/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var toObject = __webpack_require__(9);
var aFunction = __webpack_require__(10);
var $defineProperty = __webpack_require__(7);

// B.2.2.3 Object.prototype.__defineSetter__(P, setter)
__webpack_require__(6) && $export($export.P + __webpack_require__(64), 'Object', {
  __defineSetter__: function __defineSetter__(P, setter) {
    $defineProperty.f(toObject(this), P, { set: aFunction(setter), enumerable: true, configurable: true });
  }
});


/***/ }),
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var toObject = __webpack_require__(9);
var toPrimitive = __webpack_require__(22);
var getPrototypeOf = __webpack_require__(17);
var getOwnPropertyDescriptor = __webpack_require__(16).f;

// B.2.2.4 Object.prototype.__lookupGetter__(P)
__webpack_require__(6) && $export($export.P + __webpack_require__(64), 'Object', {
  __lookupGetter__: function __lookupGetter__(P) {
    var O = toObject(this);
    var K = toPrimitive(P, true);
    var D;
    do {
      if (D = getOwnPropertyDescriptor(O, K)) return D.get;
    } while (O = getPrototypeOf(O));
  }
});


/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var toObject = __webpack_require__(9);
var toPrimitive = __webpack_require__(22);
var getPrototypeOf = __webpack_require__(17);
var getOwnPropertyDescriptor = __webpack_require__(16).f;

// B.2.2.5 Object.prototype.__lookupSetter__(P)
__webpack_require__(6) && $export($export.P + __webpack_require__(64), 'Object', {
  __lookupSetter__: function __lookupSetter__(P) {
    var O = toObject(this);
    var K = toPrimitive(P, true);
    var D;
    do {
      if (D = getOwnPropertyDescriptor(O, K)) return D.set;
    } while (O = getPrototypeOf(O));
  }
});


/***/ }),
/* 287 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__(0);

$export($export.P + $export.R, 'Map', { toJSON: __webpack_require__(125)('Map') });


/***/ }),
/* 288 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__(0);

$export($export.P + $export.R, 'Set', { toJSON: __webpack_require__(125)('Set') });


/***/ }),
/* 289 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
__webpack_require__(65)('Map');


/***/ }),
/* 290 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
__webpack_require__(65)('Set');


/***/ }),
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.of
__webpack_require__(65)('WeakMap');


/***/ }),
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.of
__webpack_require__(65)('WeakSet');


/***/ }),
/* 293 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
__webpack_require__(66)('Map');


/***/ }),
/* 294 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
__webpack_require__(66)('Set');


/***/ }),
/* 295 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.from
__webpack_require__(66)('WeakMap');


/***/ }),
/* 296 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.from
__webpack_require__(66)('WeakSet');


/***/ }),
/* 297 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-global
var $export = __webpack_require__(0);

$export($export.G, { global: __webpack_require__(2) });


/***/ }),
/* 298 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-global
var $export = __webpack_require__(0);

$export($export.S, 'System', { global: __webpack_require__(2) });


/***/ }),
/* 299 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/ljharb/proposal-is-error
var $export = __webpack_require__(0);
var cof = __webpack_require__(20);

$export($export.S, 'Error', {
  isError: function isError(it) {
    return cof(it) === 'Error';
  }
});


/***/ }),
/* 300 */
/***/ (function(module, exports, __webpack_require__) {

// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__(0);

$export($export.S, 'Math', {
  clamp: function clamp(x, lower, upper) {
    return Math.min(upper, Math.max(lower, x));
  }
});


/***/ }),
/* 301 */
/***/ (function(module, exports, __webpack_require__) {

// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__(0);

$export($export.S, 'Math', { DEG_PER_RAD: Math.PI / 180 });


/***/ }),
/* 302 */
/***/ (function(module, exports, __webpack_require__) {

// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__(0);
var RAD_PER_DEG = 180 / Math.PI;

$export($export.S, 'Math', {
  degrees: function degrees(radians) {
    return radians * RAD_PER_DEG;
  }
});


/***/ }),
/* 303 */
/***/ (function(module, exports, __webpack_require__) {

// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__(0);
var scale = __webpack_require__(127);
var fround = __webpack_require__(107);

$export($export.S, 'Math', {
  fscale: function fscale(x, inLow, inHigh, outLow, outHigh) {
    return fround(scale(x, inLow, inHigh, outLow, outHigh));
  }
});


/***/ }),
/* 304 */
/***/ (function(module, exports, __webpack_require__) {

// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = __webpack_require__(0);

$export($export.S, 'Math', {
  iaddh: function iaddh(x0, x1, y0, y1) {
    var $x0 = x0 >>> 0;
    var $x1 = x1 >>> 0;
    var $y0 = y0 >>> 0;
    return $x1 + (y1 >>> 0) + (($x0 & $y0 | ($x0 | $y0) & ~($x0 + $y0 >>> 0)) >>> 31) | 0;
  }
});


/***/ }),
/* 305 */
/***/ (function(module, exports, __webpack_require__) {

// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = __webpack_require__(0);

$export($export.S, 'Math', {
  isubh: function isubh(x0, x1, y0, y1) {
    var $x0 = x0 >>> 0;
    var $x1 = x1 >>> 0;
    var $y0 = y0 >>> 0;
    return $x1 - (y1 >>> 0) - ((~$x0 & $y0 | ~($x0 ^ $y0) & $x0 - $y0 >>> 0) >>> 31) | 0;
  }
});


/***/ }),
/* 306 */
/***/ (function(module, exports, __webpack_require__) {

// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = __webpack_require__(0);

$export($export.S, 'Math', {
  imulh: function imulh(u, v) {
    var UINT16 = 0xffff;
    var $u = +u;
    var $v = +v;
    var u0 = $u & UINT16;
    var v0 = $v & UINT16;
    var u1 = $u >> 16;
    var v1 = $v >> 16;
    var t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
    return u1 * v1 + (t >> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >> 16);
  }
});


/***/ }),
/* 307 */
/***/ (function(module, exports, __webpack_require__) {

// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__(0);

$export($export.S, 'Math', { RAD_PER_DEG: 180 / Math.PI });


/***/ }),
/* 308 */
/***/ (function(module, exports, __webpack_require__) {

// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__(0);
var DEG_PER_RAD = Math.PI / 180;

$export($export.S, 'Math', {
  radians: function radians(degrees) {
    return degrees * DEG_PER_RAD;
  }
});


/***/ }),
/* 309 */
/***/ (function(module, exports, __webpack_require__) {

// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__(0);

$export($export.S, 'Math', { scale: __webpack_require__(127) });


/***/ }),
/* 310 */
/***/ (function(module, exports, __webpack_require__) {

// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = __webpack_require__(0);

$export($export.S, 'Math', {
  umulh: function umulh(u, v) {
    var UINT16 = 0xffff;
    var $u = +u;
    var $v = +v;
    var u0 = $u & UINT16;
    var v0 = $v & UINT16;
    var u1 = $u >>> 16;
    var v1 = $v >>> 16;
    var t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
    return u1 * v1 + (t >>> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >>> 16);
  }
});


/***/ }),
/* 311 */
/***/ (function(module, exports, __webpack_require__) {

// http://jfbastien.github.io/papers/Math.signbit.html
var $export = __webpack_require__(0);

$export($export.S, 'Math', { signbit: function signbit(x) {
  // eslint-disable-next-line no-self-compare
  return (x = +x) != x ? x : x == 0 ? 1 / x == Infinity : x > 0;
} });


/***/ }),
/* 312 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(0);
var core = __webpack_require__(18);
var global = __webpack_require__(2);
var speciesConstructor = __webpack_require__(60);
var promiseResolve = __webpack_require__(114);

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),
/* 313 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(0);
var newPromiseCapability = __webpack_require__(91);
var perform = __webpack_require__(113);

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),
/* 314 */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(28);
var anObject = __webpack_require__(1);
var toMetaKey = metadata.key;
var ordinaryDefineOwnMetadata = metadata.set;

metadata.exp({ defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey) {
  ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
} });


/***/ }),
/* 315 */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(28);
var anObject = __webpack_require__(1);
var toMetaKey = metadata.key;
var getOrCreateMetadataMap = metadata.map;
var store = metadata.store;

metadata.exp({ deleteMetadata: function deleteMetadata(metadataKey, target /* , targetKey */) {
  var targetKey = arguments.length < 3 ? undefined : toMetaKey(arguments[2]);
  var metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
  if (metadataMap === undefined || !metadataMap['delete'](metadataKey)) return false;
  if (metadataMap.size) return true;
  var targetMetadata = store.get(target);
  targetMetadata['delete'](targetKey);
  return !!targetMetadata.size || store['delete'](target);
} });


/***/ }),
/* 316 */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(28);
var anObject = __webpack_require__(1);
var getPrototypeOf = __webpack_require__(17);
var ordinaryHasOwnMetadata = metadata.has;
var ordinaryGetOwnMetadata = metadata.get;
var toMetaKey = metadata.key;

var ordinaryGetMetadata = function (MetadataKey, O, P) {
  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
  if (hasOwn) return ordinaryGetOwnMetadata(MetadataKey, O, P);
  var parent = getPrototypeOf(O);
  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
};

metadata.exp({ getMetadata: function getMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),
/* 317 */
/***/ (function(module, exports, __webpack_require__) {

var Set = __webpack_require__(117);
var from = __webpack_require__(126);
var metadata = __webpack_require__(28);
var anObject = __webpack_require__(1);
var getPrototypeOf = __webpack_require__(17);
var ordinaryOwnMetadataKeys = metadata.keys;
var toMetaKey = metadata.key;

var ordinaryMetadataKeys = function (O, P) {
  var oKeys = ordinaryOwnMetadataKeys(O, P);
  var parent = getPrototypeOf(O);
  if (parent === null) return oKeys;
  var pKeys = ordinaryMetadataKeys(parent, P);
  return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
};

metadata.exp({ getMetadataKeys: function getMetadataKeys(target /* , targetKey */) {
  return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
} });


/***/ }),
/* 318 */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(28);
var anObject = __webpack_require__(1);
var ordinaryGetOwnMetadata = metadata.get;
var toMetaKey = metadata.key;

metadata.exp({ getOwnMetadata: function getOwnMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryGetOwnMetadata(metadataKey, anObject(target)
    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),
/* 319 */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(28);
var anObject = __webpack_require__(1);
var ordinaryOwnMetadataKeys = metadata.keys;
var toMetaKey = metadata.key;

metadata.exp({ getOwnMetadataKeys: function getOwnMetadataKeys(target /* , targetKey */) {
  return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
} });


/***/ }),
/* 320 */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(28);
var anObject = __webpack_require__(1);
var getPrototypeOf = __webpack_require__(17);
var ordinaryHasOwnMetadata = metadata.has;
var toMetaKey = metadata.key;

var ordinaryHasMetadata = function (MetadataKey, O, P) {
  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
  if (hasOwn) return true;
  var parent = getPrototypeOf(O);
  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
};

metadata.exp({ hasMetadata: function hasMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),
/* 321 */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(28);
var anObject = __webpack_require__(1);
var ordinaryHasOwnMetadata = metadata.has;
var toMetaKey = metadata.key;

metadata.exp({ hasOwnMetadata: function hasOwnMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryHasOwnMetadata(metadataKey, anObject(target)
    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),
/* 322 */
/***/ (function(module, exports, __webpack_require__) {

var $metadata = __webpack_require__(28);
var anObject = __webpack_require__(1);
var aFunction = __webpack_require__(10);
var toMetaKey = $metadata.key;
var ordinaryDefineOwnMetadata = $metadata.set;

$metadata.exp({ metadata: function metadata(metadataKey, metadataValue) {
  return function decorator(target, targetKey) {
    ordinaryDefineOwnMetadata(
      metadataKey, metadataValue,
      (targetKey !== undefined ? anObject : aFunction)(target),
      toMetaKey(targetKey)
    );
  };
} });


/***/ }),
/* 323 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask
var $export = __webpack_require__(0);
var microtask = __webpack_require__(90)();
var process = __webpack_require__(2).process;
var isNode = __webpack_require__(20)(process) == 'process';

$export($export.G, {
  asap: function asap(fn) {
    var domain = isNode && process.domain;
    microtask(domain ? domain.bind(fn) : fn);
  }
});


/***/ }),
/* 324 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/zenparsing/es-observable
var $export = __webpack_require__(0);
var global = __webpack_require__(2);
var core = __webpack_require__(18);
var microtask = __webpack_require__(90)();
var OBSERVABLE = __webpack_require__(5)('observable');
var aFunction = __webpack_require__(10);
var anObject = __webpack_require__(1);
var anInstance = __webpack_require__(40);
var redefineAll = __webpack_require__(42);
var hide = __webpack_require__(11);
var forOf = __webpack_require__(41);
var RETURN = forOf.RETURN;

var getMethod = function (fn) {
  return fn == null ? undefined : aFunction(fn);
};

var cleanupSubscription = function (subscription) {
  var cleanup = subscription._c;
  if (cleanup) {
    subscription._c = undefined;
    cleanup();
  }
};

var subscriptionClosed = function (subscription) {
  return subscription._o === undefined;
};

var closeSubscription = function (subscription) {
  if (!subscriptionClosed(subscription)) {
    subscription._o = undefined;
    cleanupSubscription(subscription);
  }
};

var Subscription = function (observer, subscriber) {
  anObject(observer);
  this._c = undefined;
  this._o = observer;
  observer = new SubscriptionObserver(this);
  try {
    var cleanup = subscriber(observer);
    var subscription = cleanup;
    if (cleanup != null) {
      if (typeof cleanup.unsubscribe === 'function') cleanup = function () { subscription.unsubscribe(); };
      else aFunction(cleanup);
      this._c = cleanup;
    }
  } catch (e) {
    observer.error(e);
    return;
  } if (subscriptionClosed(this)) cleanupSubscription(this);
};

Subscription.prototype = redefineAll({}, {
  unsubscribe: function unsubscribe() { closeSubscription(this); }
});

var SubscriptionObserver = function (subscription) {
  this._s = subscription;
};

SubscriptionObserver.prototype = redefineAll({}, {
  next: function next(value) {
    var subscription = this._s;
    if (!subscriptionClosed(subscription)) {
      var observer = subscription._o;
      try {
        var m = getMethod(observer.next);
        if (m) return m.call(observer, value);
      } catch (e) {
        try {
          closeSubscription(subscription);
        } finally {
          throw e;
        }
      }
    }
  },
  error: function error(value) {
    var subscription = this._s;
    if (subscriptionClosed(subscription)) throw value;
    var observer = subscription._o;
    subscription._o = undefined;
    try {
      var m = getMethod(observer.error);
      if (!m) throw value;
      value = m.call(observer, value);
    } catch (e) {
      try {
        cleanupSubscription(subscription);
      } finally {
        throw e;
      }
    } cleanupSubscription(subscription);
    return value;
  },
  complete: function complete(value) {
    var subscription = this._s;
    if (!subscriptionClosed(subscription)) {
      var observer = subscription._o;
      subscription._o = undefined;
      try {
        var m = getMethod(observer.complete);
        value = m ? m.call(observer, value) : undefined;
      } catch (e) {
        try {
          cleanupSubscription(subscription);
        } finally {
          throw e;
        }
      } cleanupSubscription(subscription);
      return value;
    }
  }
});

var $Observable = function Observable(subscriber) {
  anInstance(this, $Observable, 'Observable', '_f')._f = aFunction(subscriber);
};

redefineAll($Observable.prototype, {
  subscribe: function subscribe(observer) {
    return new Subscription(observer, this._f);
  },
  forEach: function forEach(fn) {
    var that = this;
    return new (core.Promise || global.Promise)(function (resolve, reject) {
      aFunction(fn);
      var subscription = that.subscribe({
        next: function (value) {
          try {
            return fn(value);
          } catch (e) {
            reject(e);
            subscription.unsubscribe();
          }
        },
        error: reject,
        complete: resolve
      });
    });
  }
});

redefineAll($Observable, {
  from: function from(x) {
    var C = typeof this === 'function' ? this : $Observable;
    var method = getMethod(anObject(x)[OBSERVABLE]);
    if (method) {
      var observable = anObject(method.call(x));
      return observable.constructor === C ? observable : new C(function (observer) {
        return observable.subscribe(observer);
      });
    }
    return new C(function (observer) {
      var done = false;
      microtask(function () {
        if (!done) {
          try {
            if (forOf(x, false, function (it) {
              observer.next(it);
              if (done) return RETURN;
            }) === RETURN) return;
          } catch (e) {
            if (done) throw e;
            observer.error(e);
            return;
          } observer.complete();
        }
      });
      return function () { done = true; };
    });
  },
  of: function of() {
    for (var i = 0, l = arguments.length, items = new Array(l); i < l;) items[i] = arguments[i++];
    return new (typeof this === 'function' ? this : $Observable)(function (observer) {
      var done = false;
      microtask(function () {
        if (!done) {
          for (var j = 0; j < items.length; ++j) {
            observer.next(items[j]);
            if (done) return;
          } observer.complete();
        }
      });
      return function () { done = true; };
    });
  }
});

hide($Observable.prototype, OBSERVABLE, function () { return this; });

$export($export.G, { Observable: $Observable });

__webpack_require__(39)('Observable');


/***/ }),
/* 325 */
/***/ (function(module, exports, __webpack_require__) {

// ie9- setTimeout & setInterval additional parameters fix
var global = __webpack_require__(2);
var $export = __webpack_require__(0);
var userAgent = __webpack_require__(61);
var slice = [].slice;
var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check
var wrap = function (set) {
  return function (fn, time /* , ...args */) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? slice.call(arguments, 2) : false;
    return set(boundArgs ? function () {
      // eslint-disable-next-line no-new-func
      (typeof fn == 'function' ? fn : Function(fn)).apply(this, args);
    } : fn, time);
  };
};
$export($export.G + $export.B + $export.F * MSIE, {
  setTimeout: wrap(global.setTimeout),
  setInterval: wrap(global.setInterval)
});


/***/ }),
/* 326 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);
var $task = __webpack_require__(89);
$export($export.G + $export.B, {
  setImmediate: $task.set,
  clearImmediate: $task.clear
});


/***/ }),
/* 327 */
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__(88);
var getKeys = __webpack_require__(35);
var redefine = __webpack_require__(12);
var global = __webpack_require__(2);
var hide = __webpack_require__(11);
var Iterators = __webpack_require__(45);
var wks = __webpack_require__(5);
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),
/* 328 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    if (typeof global.process === "object" && global.process.domain) {
      invoke = global.process.domain.bind(invoke);
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // Among the various tricks for obtaining a reference to the global
  // object, this seems to be the most reliable technique that does not
  // use indirect eval (which violates Content Security Policy).
  typeof global === "object" ? global :
  typeof window === "object" ? window :
  typeof self === "object" ? self : this
);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(93)))

/***/ }),
/* 329 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(330);
module.exports = __webpack_require__(18).RegExp.escape;


/***/ }),
/* 330 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/benjamingr/RexExp.escape
var $export = __webpack_require__(0);
var $re = __webpack_require__(331)(/[\\^$*+?.()|[\]{}]/g, '\\$&');

$export($export.S, 'RegExp', { escape: function escape(it) { return $re(it); } });


/***/ }),
/* 331 */
/***/ (function(module, exports) {

module.exports = function (regExp, replace) {
  var replacer = replace === Object(replace) ? function (part) {
    return replace[part];
  } : replace;
  return function (it) {
    return String(it).replace(regExp, replacer);
  };
};


/***/ }),
/* 332 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = function (userConfig, defaultConfig, global, window) {
	this.loaderVersion = "1.13.0";(function (userConfig, defaultConfig) {
		// summary:
		//		This is the "source loader" and is the entry point for Dojo during development. You may also load Dojo with
		//		any AMD-compliant loader via the package main module dojo/main.
		// description:
		//		This is the "source loader" for Dojo. It provides an AMD-compliant loader that can be configured
		//		to operate in either synchronous or asynchronous modes. After the loader is defined, dojo is loaded
		//		IAW the package main module dojo/main. In the event you wish to use a foreign loader, you may load dojo as a package
		//		via the package main module dojo/main and this loader is not required; see dojo/package.json for details.
		//
		//		In order to keep compatibility with the v1.x line, this loader includes additional machinery that enables
		//		the dojo.provide, dojo.require et al API. This machinery is loaded by default, but may be dynamically removed
		//		via the has.js API and statically removed via the build system.
		//
		//		This loader includes sniffing machinery to determine the environment; the following environments are supported:
		//
		//		- browser
		//		- node.js
		//		- rhino
		//
		//		This is the so-called "source loader". As such, it includes many optional features that may be discarded by
		//		building a customized version with the build system.

		// Design and Implementation Notes
		//
		// This is a dojo-specific adaption of bdLoad, donated to the dojo foundation by Altoviso LLC.
		//
		// This function defines an AMD-compliant (http://wiki.commonjs.org/wiki/Modules/AsynchronousDefinition)
		// loader that can be configured to operate in either synchronous or asynchronous modes.
		//
		// Since this machinery implements a loader, it does not have the luxury of using a load system and/or
		// leveraging a utility library. This results in an unpleasantly long file; here is a road map of the contents:
		//
		//	 1. Small library for use implementing the loader.
		//	 2. Define the has.js API; this is used throughout the loader to bracket features.
		//	 3. Define the node.js and rhino sniffs and sniff.
		//	 4. Define the loader's data.
		//	 5. Define the configuration machinery.
		//	 6. Define the script element sniffing machinery and sniff for configuration data.
		//	 7. Configure the loader IAW the provided user, default, and sniffing data.
		//	 8. Define the global require function.
		//	 9. Define the module resolution machinery.
		//	10. Define the module and plugin module definition machinery
		//	11. Define the script injection machinery.
		//	12. Define the window load detection.
		//	13. Define the logging API.
		//	14. Define the tracing API.
		//	16. Define the AMD define function.
		//	17. Define the dojo v1.x provide/require machinery--so called "legacy" modes.
		//	18. Publish global variables.
		//
		// Language and Acronyms and Idioms
		//
		// moduleId: a CJS module identifier, (used for public APIs)
		// mid: moduleId (used internally)
		// packageId: a package identifier (used for public APIs)
		// pid: packageId (used internally); the implied system or default package has pid===""
		// pack: package is used internally to reference a package object (since javascript has reserved words including "package")
		// prid: plugin resource identifier
		// The integer constant 1 is used in place of true and 0 in place of false.

		// define global
		var globalObject = function () {
			if (typeof global !== 'undefined' && typeof global !== 'function') {
				// global spec defines a reference to the global object called 'global'
				// https://github.com/tc39/proposal-global
				// `global` is also defined in NodeJS
				return global;
			} else if (typeof window !== 'undefined') {
				// window is defined in browsers
				return window;
			} else if (typeof self !== 'undefined') {
				// self is defined in WebWorkers
				return self;
			}
			return this;
		}();

		// define a minimal library to help build the loader
		var noop = function noop() {},
		    isEmpty = function isEmpty(it) {
			for (var p in it) {
				return 0;
			}
			return 1;
		},
		    toString = {}.toString,
		    isFunction = function isFunction(it) {
			return toString.call(it) == "[object Function]";
		},
		    isString = function isString(it) {
			return toString.call(it) == "[object String]";
		},
		    isArray = function isArray(it) {
			return toString.call(it) == "[object Array]";
		},
		    forEach = function forEach(vector, callback) {
			if (vector) {
				for (var i = 0; i < vector.length;) {
					callback(vector[i++]);
				}
			}
		},
		    mix = function mix(dest, src) {
			for (var p in src) {
				dest[p] = src[p];
			}
			return dest;
		},
		    makeError = function makeError(error, info) {
			return mix(new Error(error), { src: "dojoLoader", info: info });
		},
		    uidSeed = 1,
		    uid = function uid() {
			// Returns a unique identifier (within the lifetime of the document) of the form /_d+/.
			return "_" + uidSeed++;
		},


		// FIXME: how to doc window.require() api

		// this will be the global require function; define it immediately so we can start hanging things off of it
		req = function req(config, //(object, optional) hash of configuration properties
		dependencies, //(array of commonjs.moduleId, optional) list of modules to be loaded before applying callback
		callback //(function, optional) lambda expression to apply to module values implied by dependencies
		) {
			return contextRequire(config, dependencies, callback, 0, req);
		},


		// the loader uses the has.js API to control feature inclusion/exclusion; define then use throughout
		global = globalObject,
		    doc = global.document,
		    element = doc && doc.createElement("DiV"),
		    has = req.has = function (name) {
			return isFunction(hasCache[name]) ? hasCache[name] = hasCache[name](global, doc, element) : hasCache[name];
		},
		    hasCache = has.cache = defaultConfig.hasCache;

		if (isFunction(userConfig)) {
			userConfig = userConfig(globalObject);
		}

		has.add = function (name, test, now, force) {
			(hasCache[name] === undefined || force) && (hasCache[name] = test);
			return now && has(name);
		};

		0 && has.add("host-node", userConfig.has && "host-node" in userConfig.has ? userConfig.has["host-node"] : (typeof process === 'undefined' ? 'undefined' : _typeof(process)) == "object" && process.versions && process.versions.node && process.versions.v8);
		if (0) {
			// fixup the default config for node.js environment
			require("./_base/configNode.js").config(defaultConfig);
			// remember node's require (with respect to baseUrl==dojo's root)
			defaultConfig.loaderPatch.nodeRequire = require;
		}

		0 && has.add("host-rhino", userConfig.has && "host-rhino" in userConfig.has ? userConfig.has["host-rhino"] : typeof load == "function" && (typeof Packages == "function" || (typeof Packages === 'undefined' ? 'undefined' : _typeof(Packages)) == "object"));
		if (0) {
			// owing to rhino's lame feature that hides the source of the script, give the user a way to specify the baseUrl...
			for (var baseUrl = userConfig.baseUrl || ".", arg, rhinoArgs = this.arguments, i = 0; i < rhinoArgs.length;) {
				arg = (rhinoArgs[i++] + "").split("=");
				if (arg[0] == "baseUrl") {
					baseUrl = arg[1];
					break;
				}
			}
			load(baseUrl + "/_base/configRhino.js");
			rhinoDojoConfig(defaultConfig, baseUrl, rhinoArgs);
		}

		0 && has.add("host-webworker", typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope);
		if (0) {
			mix(defaultConfig.hasCache, {
				"host-browser": 0,
				"dom": 0,
				"dojo-dom-ready-api": 0,
				"dojo-sniff": 0,
				"dojo-inject-api": 1,
				"host-webworker": 1,
				"dojo-guarantee-console": 0 // console is immutable in FF30+, see https://bugs.dojotoolkit.org/ticket/18100
			});

			defaultConfig.loaderPatch = {
				injectUrl: function injectUrl(url, callback) {
					// TODO:
					//		This is not async, nor can it be in Webworkers.  It could be made better by passing
					//		the entire require array into importScripts at.  This way the scripts are loaded in
					//		async mode; even if the callbacks are ran in sync.  It is not a major issue as webworkers
					//		tend to be long running where initial startup is not a major factor.

					try {
						importScripts(url);
						callback();
					} catch (e) {
						console.info("failed to load resource (" + url + ")");
						console.error(e);
					}
				}
			};
		}

		// userConfig has tests override defaultConfig has tests; do this after the environment detection because
		// the environment detection usually sets some has feature values in the hasCache.
		for (var p in userConfig.has) {
			has.add(p, userConfig.has[p], 0, 1);
		}

		//
		// define the loader data
		//

		// the loader will use these like symbols if the loader has the traceApi; otherwise
		// define magic numbers so that modules can be provided as part of defaultConfig
		var requested = 1,
		    arrived = 2,
		    nonmodule = 3,
		    executing = 4,
		    executed = 5;

		if (0) {
			// these make debugging nice; but using strings for symbols is a gross rookie error; don't do it for production code
			requested = "requested";
			arrived = "arrived";
			nonmodule = "not-a-module";
			executing = "executing";
			executed = "executed";
		}

		var legacyMode = 0,
		    sync = "sync",
		    xd = "xd",
		    syncExecStack = [],
		    dojoRequirePlugin = 0,
		    checkDojoRequirePlugin = noop,
		    transformToAmd = noop,
		    getXhr;
		if (0) {
			req.isXdUrl = noop;

			req.initSyncLoader = function (dojoRequirePlugin_, checkDojoRequirePlugin_, transformToAmd_) {
				// the first dojo/_base/loader loaded gets to define these variables; they are designed to work
				// in the presence of zero to many mapped dojo/_base/loaders
				if (!dojoRequirePlugin) {
					dojoRequirePlugin = dojoRequirePlugin_;
					checkDojoRequirePlugin = checkDojoRequirePlugin_;
					transformToAmd = transformToAmd_;
				}

				return {
					sync: sync,
					requested: requested,
					arrived: arrived,
					nonmodule: nonmodule,
					executing: executing,
					executed: executed,
					syncExecStack: syncExecStack,
					modules: modules,
					execQ: execQ,
					getModule: getModule,
					injectModule: injectModule,
					setArrived: setArrived,
					signal: signal,
					finishExec: finishExec,
					execModule: execModule,
					dojoRequirePlugin: dojoRequirePlugin,
					getLegacyMode: function getLegacyMode() {
						return legacyMode;
					},
					guardCheckComplete: guardCheckComplete
				};
			};

			if (0 || 0) {
				// in legacy sync mode, the loader needs a minimal XHR library

				var locationProtocol = location.protocol,
				    locationHost = location.host;
				req.isXdUrl = function (url) {
					if (/^\./.test(url)) {
						// begins with a dot is always relative to page URL; therefore not xdomain
						return false;
					}
					if (/^\/\//.test(url)) {
						// for v1.6- backcompat, url starting with // indicates xdomain
						return true;
					}
					// get protocol and host
					// \/+ takes care of the typical file protocol that looks like file:///drive/path/to/file
					// locationHost is falsy if file protocol => if locationProtocol matches and is "file:", || will return false
					var match = url.match(/^([^\/\:]+\:)\/+([^\/]+)/);
					return match && (match[1] != locationProtocol || locationHost && match[2] != locationHost);
				};

				// note: to get the file:// protocol to work in FF, you must set security.fileuri.strict_origin_policy to false in about:config
				1 || has.add("dojo-xhr-factory", 1);
				0 && has.add("dojo-force-activex-xhr", 1 && !doc.addEventListener && window.location.protocol == "file:");
				has.add("native-xhr", typeof XMLHttpRequest != "undefined");
				if (has("native-xhr") && !0) {
					getXhr = function getXhr() {
						return new XMLHttpRequest();
					};
				} else {
					// if in the browser an old IE; find an xhr
					for (var XMLHTTP_PROGIDS = ['Msxml2.XMLHTTP', 'Microsoft.XMLHTTP', 'Msxml2.XMLHTTP.4.0'], progid, i = 0; i < 3;) {
						try {
							progid = XMLHTTP_PROGIDS[i++];
							if (new ActiveXObject(progid)) {
								// this progid works; therefore, use it from now on
								break;
							}
						} catch (e) {
							// squelch; we're just trying to find a good ActiveX progid
							// if they all fail, then progid ends up as the last attempt and that will signal the error
							// the first time the client actually tries to exec an xhr
						}
					}
					getXhr = function getXhr() {
						return new ActiveXObject(progid);
					};
				}
				req.getXhr = getXhr;

				has.add("dojo-gettext-api", 1);
				req.getText = function (url, async, onLoad) {
					var xhr = getXhr();
					xhr.open('GET', fixupUrl(url), false);
					xhr.send(null);
					if (xhr.status == 200 || !location.host && !xhr.status) {
						if (onLoad) {
							onLoad(xhr.responseText, async);
						}
					} else {
						throw makeError("xhrFailed", xhr.status);
					}
					return xhr.responseText;
				};
			}
		} else {
			req.async = 1;
		}

		//
		// loader eval
		//
		var eval_ = 1 ?
		// noop eval if there are csp restrictions
		function () {} :
		// use the function constructor so our eval is scoped close to (but not in) in the global space with minimal pollution
		new Function('return eval(arguments[0]);');

		req.eval = function (text, hint) {
			return eval_(text + "\r\n//# sourceURL=" + hint);
		};

		//
		// loader micro events API
		//
		var listenerQueues = {},
		    error = "error",
		    signal = req.signal = function (type, args) {
			var queue = listenerQueues[type];
			// notice we run a copy of the queue; this allows listeners to add/remove
			// other listeners without affecting this particular signal
			forEach(queue && queue.slice(0), function (listener) {
				listener.apply(null, isArray(args) ? args : [args]);
			});
		},
		    on = req.on = function (type, listener) {
			// notice a queue is not created until a client actually connects
			var queue = listenerQueues[type] || (listenerQueues[type] = []);
			queue.push(listener);
			return {
				remove: function remove() {
					for (var i = 0; i < queue.length; i++) {
						if (queue[i] === listener) {
							queue.splice(i, 1);
							return;
						}
					}
				}
			};
		};

		// configuration machinery; with an optimized/built defaultConfig, all configuration machinery can be discarded
		// lexical variables hold key loader data structures to help with minification; these may be completely,
		// one-time initialized by defaultConfig for optimized/built versions
		var aliases
		// a vector of pairs of [regexs or string, replacement] => (alias, actual)
		= [],
		    paths
		// CommonJS paths
		= {},
		    pathsMapProg
		// list of (from-path, to-path, regex, length) derived from paths;
		// a "program" to apply paths; see computeMapProg
		= [],
		    packs
		// a map from packageId to package configuration object; see fixupPackageInfo
		= {},
		    map = req.map
		// AMD map config variable; dojo/_base/kernel needs req.map to figure out the scope map
		= {},
		    mapProgs
		// vector of quads as described by computeMapProg; map-key is AMD map key, map-value is AMD map value
		= [],
		    modules
		// A hash:(mid) --> (module-object) the module namespace
		//
		// pid: the package identifier to which the module belongs (e.g., "dojo"); "" indicates the system or default package
		// mid: the fully-resolved (i.e., mappings have been applied) module identifier without the package identifier (e.g., "dojo/io/script")
		// url: the URL from which the module was retrieved
		// pack: the package object of the package to which the module belongs
		// executed: 0 => not executed; executing => in the process of traversing deps and running factory; executed => factory has been executed
		// deps: the dependency vector for this module (vector of modules objects)
		// def: the factory for this module
		// result: the result of the running the factory for this module
		// injected: (0 | requested | arrived) the status of the module; nonmodule means the resource did not call define
		// load: plugin load function; applicable only for plugins
		//
		// Modules go through several phases in creation:
		//
		// 1. Requested: some other module's definition or a require application contained the requested module in
		//	  its dependency vector or executing code explicitly demands a module via req.require.
		//
		// 2. Injected: a script element has been appended to the insert-point element demanding the resource implied by the URL
		//
		// 3. Loaded: the resource injected in [2] has been evaluated.
		//
		// 4. Defined: the resource contained a define statement that advised the loader about the module. Notice that some
		//	  resources may just contain a bundle of code and never formally define a module via define
		//
		// 5. Evaluated: the module was defined via define and the loader has evaluated the factory and computed a result.
		= {},
		    cacheBust
		// query string to append to module URLs to bust browser cache
		= "",
		    cache
		// hash:(mid | url)-->(function | string)
		//
		// A cache of resources. The resources arrive via a config.cache object, which is a hash from either mid --> function or
		// url --> string. The url key is distinguished from the mid key by always containing the prefix "url:". url keys as provided
		// by config.cache always have a string value that represents the contents of the resource at the given url. mid keys as provided
		// by configl.cache always have a function value that causes the same code to execute as if the module was script injected.
		//
		// Both kinds of key-value pairs are entered into cache via the function consumePendingCache, which may relocate keys as given
		// by any mappings *iff* the config.cache was received as part of a module resource request.
		//
		// Further, for mid keys, the implied url is computed and the value is entered into that key as well. This allows mapped modules
		// to retrieve cached items that may have arrived consequent to another namespace.
		//
		= {},
		    urlKeyPrefix
		// the prefix to prepend to a URL key in the cache.
		= "url:",
		    pendingCacheInsert
		// hash:(mid)-->(function)
		//
		// Gives a set of cache modules pending entry into cache. When cached modules are published to the loader, they are
		// entered into pendingCacheInsert; modules are then pressed into cache upon (1) AMD define or (2) upon receiving another
		// independent set of cached modules. (1) is the usual case, and this case allows normalizing mids given in the pending
		// cache for the local configuration, possibly relocating modules.
		= {},
		    dojoSniffConfig
		// map of configuration variables
		// give the data-dojo-config as sniffed from the document (if any)
		= {},
		    insertPointSibling
		// the nodes used to locate where scripts are injected into the document
		= 0;

		if (1) {
			var consumePendingCacheInsert = function consumePendingCacheInsert(referenceModule, clear) {
				clear = clear !== false;
				var p, item, match, now, m;
				for (p in pendingCacheInsert) {
					item = pendingCacheInsert[p];
					match = p.match(/^url\:(.+)/);
					if (match) {
						cache[urlKeyPrefix + toUrl(match[1], referenceModule)] = item;
					} else if (p == "*now") {
						now = item;
					} else if (p != "*noref") {
						m = getModuleInfo(p, referenceModule, true);
						cache[m.mid] = cache[urlKeyPrefix + m.url] = item;
					}
				}
				if (now) {
					now(createRequire(referenceModule));
				}
				if (clear) {
					pendingCacheInsert = {};
				}
			},
			    escapeString = function escapeString(s) {
				return s.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, function (c) {
					return "\\" + c;
				});
			},
			    computeMapProg = function computeMapProg(map, dest) {
				// This routine takes a map as represented by a JavaScript object and initializes dest, a vector of
				// quads of (map-key, map-value, refex-for-map-key, length-of-map-key), sorted decreasing by length-
				// of-map-key. The regex looks for the map-key followed by either "/" or end-of-string at the beginning
				// of a the search source. Notice the map-value is irrelevant to the algorithm
				dest.splice(0, dest.length);
				for (var p in map) {
					dest.push([p, map[p], new RegExp("^" + escapeString(p) + "(\/|$)"), p.length]);
				}
				dest.sort(function (lhs, rhs) {
					return rhs[3] - lhs[3];
				});
				return dest;
			},
			    computeAliases = function computeAliases(config, dest) {
				forEach(config, function (pair) {
					// take a fixed-up copy...
					dest.push([isString(pair[0]) ? new RegExp("^" + escapeString(pair[0]) + "$") : pair[0], pair[1]]);
				});
			},
			    fixupPackageInfo = function fixupPackageInfo(packageInfo) {
				// calculate the precise (name, location, main, mappings) for a package
				var name = packageInfo.name;
				if (!name) {
					// packageInfo must be a string that gives the name
					name = packageInfo;
					packageInfo = { name: name };
				}
				packageInfo = mix({ main: "main" }, packageInfo);
				packageInfo.location = packageInfo.location ? packageInfo.location : name;

				// packageMap is deprecated in favor of AMD map
				if (packageInfo.packageMap) {
					map[name] = packageInfo.packageMap;
				}

				if (!packageInfo.main.indexOf("./")) {
					packageInfo.main = packageInfo.main.substring(2);
				}

				// now that we've got a fully-resolved package object, push it into the configuration
				packs[name] = packageInfo;
			},
			    delayedModuleConfig
			// module config cannot be consumed until the loader is completely initialized; therefore, all
			// module config detected during booting is memorized and applied at the end of loader initialization
			// TODO: this is a bit of a kludge; all config should be moved to end of loader initialization, but
			// we'll delay this chore and do it with a final loader 1.x cleanup after the 2.x loader prototyping is complete
			= [],
			    config = function config(_config, booting, referenceModule) {
				for (var p in _config) {
					if (p == "waitSeconds") {
						req.waitms = (_config[p] || 0) * 1000;
					}
					if (p == "cacheBust") {
						cacheBust = _config[p] ? isString(_config[p]) ? _config[p] : new Date().getTime() + "" : "";
					}
					if (p == "baseUrl" || p == "combo") {
						req[p] = _config[p];
					}
					if (false) {
						// falsy or "sync" => legacy sync loader
						// "xd" => sync but loading xdomain tree and therefore loading asynchronously (not configurable, set automatically by the loader)
						// "legacyAsync" => permanently in "xd" by choice
						// "debugAtAllCosts" => trying to load everything via script injection (not implemented)
						// otherwise, must be truthy => AMD
						// legacyMode: sync | legacyAsync | xd | false
						var mode = _config[p];
						req.legacyMode = legacyMode = isString(mode) && /sync|legacyAsync/.test(mode) ? mode : !mode ? sync : false;
						req.async = !legacyMode;
					}
					if (_config[p] !== hasCache) {
						// accumulate raw config info for client apps which can use this to pass their own config
						req.rawConfig[p] = _config[p];
						p != "has" && has.add("config-" + p, _config[p], 0, booting);
					}
				}

				// make sure baseUrl exists
				if (!req.baseUrl) {
					req.baseUrl = "./";
				}
				// make sure baseUrl ends with a slash
				if (!/\/$/.test(req.baseUrl)) {
					req.baseUrl += "/";
				}

				// now do the special work for has, packages, packagePaths, paths, aliases, and cache

				for (p in _config.has) {
					has.add(p, _config.has[p], 0, booting);
				}

				// for each package found in any packages config item, augment the packs map owned by the loader
				forEach(_config.packages, fixupPackageInfo);

				// for each packagePath found in any packagePaths config item, augment the packageConfig
				// packagePaths is deprecated; remove in 2.0
				for (var baseUrl in _config.packagePaths) {
					forEach(_config.packagePaths[baseUrl], function (packageInfo) {
						var location = baseUrl + "/" + packageInfo;
						if (isString(packageInfo)) {
							packageInfo = { name: packageInfo };
						}
						packageInfo.location = location;
						fixupPackageInfo(packageInfo);
					});
				}

				// notice that computeMapProg treats the dest as a reference; therefore, if/when that variable
				// is published (see dojo-publish-privates), the published variable will always hold a valid value.

				// this must come after all package processing since package processing may mutate map
				computeMapProg(mix(map, _config.map), mapProgs);
				forEach(mapProgs, function (item) {
					item[1] = computeMapProg(item[1], []);
					if (item[0] == "*") {
						mapProgs.star = item;
					}
				});

				// push in any paths and recompute the internal pathmap
				computeMapProg(mix(paths, _config.paths), pathsMapProg);

				// aliases
				computeAliases(_config.aliases, aliases);

				if (booting) {
					delayedModuleConfig.push({ config: _config.config });
				} else {
					for (p in _config.config) {
						var module = getModule(p, referenceModule);
						module.config = mix(module.config || {}, _config.config[p]);
					}
				}

				// push in any new cache values
				if (_config.cache) {
					consumePendingCacheInsert();
					pendingCacheInsert = _config.cache;
					//inject now all depencies so cache is available for mapped module
					consumePendingCacheInsert(0, !!_config.cache["*noref"]);
				}

				signal("config", [_config, req.rawConfig]);
			};

			//
			// execute the various sniffs; userConfig can override and value
			//

			if (false) {
				// the sniff regex looks for a src attribute ending in dojo.js, optionally preceded with a path.
				// match[3] returns the path to dojo.js (if any) without the trailing slash. This is used for the
				// dojo location on CDN deployments and baseUrl when either/both of these are not provided
				// explicitly in the config data; this is the 1.6- behavior.

				var scripts = doc.getElementsByTagName("script"),
				    i = 0,
				    script,
				    dojoDir,
				    src,
				    match;
				while (i < scripts.length) {
					script = scripts[i++];
					if ((src = script.getAttribute("src")) && (match = src.match(/(((.*)\/)|^)dojo\.js(\W|$)/i))) {
						// sniff dojoDir and baseUrl
						dojoDir = match[3] || "";
						defaultConfig.baseUrl = defaultConfig.baseUrl || dojoDir;

						// remember an insertPointSibling
						insertPointSibling = script;
					}

					// sniff configuration on attribute in script element
					if (src = script.getAttribute("data-dojo-config") || script.getAttribute("djConfig")) {
						dojoSniffConfig = req.eval("({ " + src + " })", "data-dojo-config");

						// remember an insertPointSibling
						insertPointSibling = script;
					}

					// sniff requirejs attribute
					if (0) {
						if (src = script.getAttribute("data-main")) {
							dojoSniffConfig.deps = dojoSniffConfig.deps || [src];
						}
					}
				}
			}

			if (0) {
				// pass down doh.testConfig from parent as if it were a data-dojo-config
				try {
					if (window.parent != window && window.parent.require) {
						var doh = window.parent.require("doh");
						doh && mix(dojoSniffConfig, doh.testConfig);
					}
				} catch (e) {}
			}

			// configure the loader; let the user override defaults
			req.rawConfig = {};
			config(defaultConfig, 1);

			// do this before setting userConfig/sniffConfig to allow userConfig/sniff overrides
			if (0) {
				packs.dojo.location = dojoDir;
				if (dojoDir) {
					dojoDir += "/";
				}
				packs.dijit.location = dojoDir + "../dijit/";
				packs.dojox.location = dojoDir + "../dojox/";
			}

			config(userConfig, 1);
			config(dojoSniffConfig, 1);
		} else {
			// no config API, assume defaultConfig has everything the loader needs...for the entire lifetime of the application
			paths = defaultConfig.paths;
			pathsMapProg = defaultConfig.pathsMapProg;
			packs = defaultConfig.packs;
			aliases = defaultConfig.aliases;
			mapProgs = defaultConfig.mapProgs;
			modules = defaultConfig.modules;
			cache = defaultConfig.cache;
			cacheBust = defaultConfig.cacheBust;

			// remember the default config for other processes (e.g., dojo/config)
			req.rawConfig = defaultConfig;
		}

		if (0) {
			req.combo = req.combo || { add: noop };
			var comboPending = 0,
			    combosPending = [],
			    comboPendingTimer = null;
		}

		// build the loader machinery iaw configuration, including has feature tests
		var injectDependencies = function injectDependencies(module) {
			// checkComplete!=0 holds the idle signal; we're not idle if we're injecting dependencies
			guardCheckComplete(function () {
				forEach(module.deps, injectModule);
				if (false) {
					comboPendingTimer = setTimeout(function () {
						comboPending = 0;
						comboPendingTimer = null;
						req.combo.done(function (mids, url) {
							var onLoadCallback = function onLoadCallback() {
								// defQ is a vector of module definitions 1-to-1, onto mids
								runDefQ(0, mids);
								checkComplete();
							};
							combosPending.push(mids);
							injectingModule = mids;
							req.injectUrl(url, onLoadCallback, mids);
							injectingModule = 0;
						}, req);
					}, 0);
				}
			});
		},
		    contextRequire = function contextRequire(a1, a2, a3, referenceModule, _contextRequire) {
			var module, syntheticMid;
			if (isString(a1)) {
				// signature is (moduleId)
				module = getModule(a1, referenceModule, true);
				if (module && module.executed) {
					return module.result;
				}
				throw makeError("undefinedModule", a1);
			}
			if (!isArray(a1)) {
				// a1 is a configuration
				config(a1, 0, referenceModule);

				// juggle args; (a2, a3) may be (dependencies, callback)
				a1 = a2;
				a2 = a3;
			}
			if (isArray(a1)) {
				// signature is (requestList [,callback])
				if (!a1.length) {
					a2 && a2();
				} else {
					syntheticMid = "require*" + uid();

					// resolve the request list with respect to the reference module
					for (var mid, deps = [], i = 0; i < a1.length;) {
						mid = a1[i++];
						deps.push(getModule(mid, referenceModule));
					}

					// construct a synthetic module to control execution of the requestList, and, optionally, callback
					module = mix(makeModuleInfo("", syntheticMid, 0, ""), {
						injected: arrived,
						deps: deps,
						def: a2 || noop,
						require: referenceModule ? referenceModule.require : req,
						gc: 1 //garbage collect
					});
					modules[module.mid] = module;

					// checkComplete!=0 holds the idle signal; we're not idle if we're injecting dependencies
					injectDependencies(module);

					// try to immediately execute
					// if already traversing a factory tree, then strict causes circular dependency to abort the execution; maybe
					// it's possible to execute this require later after the current traversal completes and avoid the circular dependency.
					// ...but *always* insist on immediate in synch mode
					var strict = checkCompleteGuard && legacyMode != sync;
					guardCheckComplete(function () {
						execModule(module, strict);
					});
					if (!module.executed) {
						// some deps weren't on board or circular dependency detected and strict; therefore, push into the execQ
						execQ.push(module);
					}
					checkComplete();
				}
			}
			return _contextRequire;
		},
		    createRequire = function createRequire(module) {
			if (!module) {
				return req;
			}
			var _result = module.require;
			if (!_result) {
				_result = function result(a1, a2, a3) {
					return contextRequire(a1, a2, a3, module, _result);
				};
				module.require = mix(_result, req);
				_result.module = module;
				_result.toUrl = function (name) {
					return toUrl(name, module);
				};
				_result.toAbsMid = function (mid) {
					return toAbsMid(mid, module);
				};
				if (0) {
					_result.undef = function (mid) {
						req.undef(mid, module);
					};
				}
				if (0) {
					_result.syncLoadNls = function (mid) {
						var nlsModuleInfo = getModuleInfo(mid, module),
						    nlsModule = modules[nlsModuleInfo.mid];
						if (!nlsModule || !nlsModule.executed) {
							cached = cache[nlsModuleInfo.mid] || cache[urlKeyPrefix + nlsModuleInfo.url];
							if (cached) {
								evalModuleText(cached);
								nlsModule = modules[nlsModuleInfo.mid];
							}
						}
						return nlsModule && nlsModule.executed && nlsModule.result;
					};
				}
			}
			return _result;
		},
		    execQ =
		// The list of modules that need to be evaluated.
		[],
		    defQ =
		// The queue of define arguments sent to loader.
		[],
		    waiting =
		// The set of modules upon which the loader is waiting for definition to arrive
		{},
		    setRequested = function setRequested(module) {
			module.injected = requested;
			waiting[module.mid] = 1;
			if (module.url) {
				waiting[module.url] = module.pack || 1;
			}
			startTimer();
		},
		    setArrived = function setArrived(module) {
			module.injected = arrived;
			delete waiting[module.mid];
			if (module.url) {
				delete waiting[module.url];
			}
			if (isEmpty(waiting)) {
				clearTimer();
				0 && legacyMode == xd && (legacyMode = sync);
			}
		},
		    execComplete = req.idle =
		// says the loader has completed (or not) its work
		function () {
			return !defQ.length && isEmpty(waiting) && !execQ.length && !checkCompleteGuard;
		},
		    runMapProg = function runMapProg(targetMid, map) {
			// search for targetMid in map; return the map item if found; falsy otherwise
			if (map) {
				for (var i = 0; i < map.length; i++) {
					if (map[i][2].test(targetMid)) {
						return map[i];
					}
				}
			}
			return 0;
		},
		    compactPath = function compactPath(path) {
			var result = [],
			    segment,
			    lastSegment;
			path = path.replace(/\\/g, '/').split('/');
			while (path.length) {
				segment = path.shift();
				if (segment == ".." && result.length && lastSegment != "..") {
					result.pop();
					lastSegment = result[result.length - 1];
				} else if (segment != ".") {
					result.push(lastSegment = segment);
				} // else ignore "."
			}
			return result.join("/");
		},
		    makeModuleInfo = function makeModuleInfo(pid, mid, pack, url) {
			if (0) {
				var xd = req.isXdUrl(url);
				return { pid: pid, mid: mid, pack: pack, url: url, executed: 0, def: 0, isXd: xd, isAmd: !!(xd || packs[pid] && packs[pid].isAmd) };
			} else {
				return { pid: pid, mid: mid, pack: pack, url: url, executed: 0, def: 0 };
			}
		},
		    getModuleInfo_ = function getModuleInfo_(mid, referenceModule, packs, modules, baseUrl, mapProgs, pathsMapProg, aliases, alwaysCreate, fromPendingCache) {
			// arguments are passed instead of using lexical variables so that this function my be used independent of the loader (e.g., the builder)
			// alwaysCreate is useful in this case so that getModuleInfo never returns references to real modules owned by the loader
			var pid, pack, midInPackage, mapItem, url, result, isRelative, requestedMid;
			requestedMid = mid;
			isRelative = /^\./.test(mid);
			if (/(^\/)|(\:)|(\.js$)/.test(mid) || isRelative && !referenceModule) {
				// absolute path or protocol of .js filetype, or relative path but no reference module and therefore relative to page
				// whatever it is, it's not a module but just a URL of some sort
				// note: pid===0 indicates the routine is returning an unmodified mid

				return makeModuleInfo(0, mid, 0, mid);
			} else {
				// relative module ids are relative to the referenceModule; get rid of any dots
				mid = compactPath(isRelative ? referenceModule.mid + "/../" + mid : mid);
				if (/^\./.test(mid)) {
					throw makeError("irrationalPath", mid);
				}
				// at this point, mid is an absolute mid

				// map the mid
				if (!fromPendingCache && !isRelative && mapProgs.star) {
					mapItem = runMapProg(mid, mapProgs.star[1]);
				}
				if (!mapItem && referenceModule) {
					mapItem = runMapProg(referenceModule.mid, mapProgs);
					mapItem = mapItem && runMapProg(mid, mapItem[1]);
				}

				if (mapItem) {
					mid = mapItem[1] + mid.substring(mapItem[3]);
				}

				match = mid.match(/^([^\/]+)(\/(.+))?$/);
				pid = match ? match[1] : "";
				if (pack = packs[pid]) {
					mid = pid + "/" + (midInPackage = match[3] || pack.main);
				} else {
					pid = "";
				}

				// search aliases
				var candidateLength = 0,
				    candidate = 0;
				forEach(aliases, function (pair) {
					var match = mid.match(pair[0]);
					if (match && match.length > candidateLength) {
						candidate = isFunction(pair[1]) ? mid.replace(pair[0], pair[1]) : pair[1];
					}
				});
				if (candidate) {
					return getModuleInfo_(candidate, 0, packs, modules, baseUrl, mapProgs, pathsMapProg, aliases, alwaysCreate);
				}

				result = modules[mid];
				if (result) {
					return alwaysCreate ? makeModuleInfo(result.pid, result.mid, result.pack, result.url) : modules[mid];
				}
			}
			// get here iff the sought-after module does not yet exist; therefore, we need to compute the URL given the
			// fully resolved (i.e., all relative indicators and package mapping resolved) module id

			// note: pid!==0 indicates the routine is returning a url that has .js appended unmodified mid
			mapItem = runMapProg(mid, pathsMapProg);
			if (mapItem) {
				url = mapItem[1] + mid.substring(mapItem[3]);
			} else if (pid) {
				url = pack.location + "/" + midInPackage;
			} else if (0) {
				url = "../" + mid;
			} else {
				url = mid;
			}
			// if result is not absolute, add baseUrl
			if (!/(^\/)|(\:)/.test(url)) {
				url = baseUrl + url;
			}
			url += ".js";
			return makeModuleInfo(pid, mid, pack, compactPath(url));
		},
		    getModuleInfo = function getModuleInfo(mid, referenceModule, fromPendingCache) {
			return getModuleInfo_(mid, referenceModule, packs, modules, req.baseUrl, mapProgs, pathsMapProg, aliases, undefined, fromPendingCache);
		},
		    resolvePluginResourceId = function resolvePluginResourceId(plugin, prid, referenceModule) {
			return plugin.normalize ? plugin.normalize(prid, function (mid) {
				return toAbsMid(mid, referenceModule);
			}) : toAbsMid(prid, referenceModule);
		},
		    dynamicPluginUidGenerator = 0,
		    getModule = function getModule(mid, referenceModule, immediate) {
			// compute and optionally construct (if necessary) the module implied by the mid with respect to referenceModule
			var match, plugin, prid, result;
			match = mid.match(/^(.+?)\!(.*)$/);
			if (match) {
				// name was <plugin-module>!<plugin-resource-id>
				plugin = getModule(match[1], referenceModule, immediate);

				if (false) {
					injectModule(plugin);
					if (plugin.injected === arrived && !plugin.executed) {
						guardCheckComplete(function () {
							execModule(plugin);
						});
					}
					if (plugin.executed) {
						promoteModuleToPlugin(plugin);
					} else {
						// we are in xdomain mode for some reason
						execQ.unshift(plugin);
					}
				}

				if (plugin.executed === executed && !plugin.load) {
					// executed the module not knowing it was a plugin
					promoteModuleToPlugin(plugin);
				}

				// if the plugin has not been loaded, then can't resolve the prid and  must assume this plugin is dynamic until we find out otherwise
				if (plugin.load) {
					prid = resolvePluginResourceId(plugin, match[2], referenceModule);
					mid = plugin.mid + "!" + (plugin.dynamic ? ++dynamicPluginUidGenerator + "!" : "") + prid;
				} else {
					prid = match[2];
					mid = plugin.mid + "!" + ++dynamicPluginUidGenerator + "!waitingForPlugin";
				}
				result = { plugin: plugin, mid: mid, req: createRequire(referenceModule), prid: prid };
			} else {
				result = getModuleInfo(mid, referenceModule);
			}
			return modules[result.mid] || !immediate && (modules[result.mid] = result);
		},
		    toAbsMid = req.toAbsMid = function (mid, referenceModule) {
			return getModuleInfo(mid, referenceModule).mid;
		},
		    toUrl = req.toUrl = function (name, referenceModule) {
			var moduleInfo = getModuleInfo(name + "/x", referenceModule),
			    url = moduleInfo.url;
			return fixupUrl(moduleInfo.pid === 0 ?
			// if pid===0, then name had a protocol or absolute path; either way, toUrl is the identify function in such cases
			name :
			// "/x.js" since getModuleInfo automatically appends ".js" and we appended "/x" to make name look like a module id
			url.substring(0, url.length - 5));
		},
		    nonModuleProps = {
			injected: arrived,
			executed: executed,
			def: nonmodule,
			result: nonmodule
		},
		    makeCjs = function makeCjs(mid) {
			return modules[mid] = mix({ mid: mid }, nonModuleProps);
		},
		    cjsRequireModule = makeCjs("require"),
		    cjsExportsModule = makeCjs("exports"),
		    cjsModuleModule = makeCjs("module"),
		    runFactory = function runFactory(module, args) {
			req.trace("loader-run-factory", [module.mid]);
			var factory = module.def,
			    result;
			0 && syncExecStack.unshift(module);
			if (0) {
				try {
					result = isFunction(factory) ? factory.apply(null, args) : factory;
				} catch (e) {
					signal(error, module.result = makeError("factoryThrew", [module, e]));
				}
			} else {
				result = isFunction(factory) ? factory.apply(null, args) : factory;
			}
			module.result = result === undefined && module.cjs ? module.cjs.exports : result;
			0 && syncExecStack.shift(module);
		},
		    abortExec = {},
		    defOrder = 0,
		    promoteModuleToPlugin = function promoteModuleToPlugin(pluginModule) {
			var plugin = pluginModule.result;
			pluginModule.dynamic = plugin.dynamic;
			pluginModule.normalize = plugin.normalize;
			pluginModule.load = plugin.load;
			return pluginModule;
		},
		    resolvePluginLoadQ = function resolvePluginLoadQ(plugin) {
			// plugins is a newly executed module that has a loadQ waiting to run

			// step 1: traverse the loadQ and fixup the mid and prid; remember the map from original mid to new mid
			// recall the original mid was created before the plugin was on board and therefore it was impossible to
			// compute the final mid; accordingly, prid may or may not change, but the mid will definitely change
			var map = {};
			forEach(plugin.loadQ, function (pseudoPluginResource) {
				// manufacture and insert the real module in modules
				var prid = resolvePluginResourceId(plugin, pseudoPluginResource.prid, pseudoPluginResource.req.module),
				    mid = plugin.dynamic ? pseudoPluginResource.mid.replace(/waitingForPlugin$/, prid) : plugin.mid + "!" + prid,
				    pluginResource = mix(mix({}, pseudoPluginResource), { mid: mid, prid: prid, injected: 0 });
				if (!modules[mid] || !modules[mid].injected /*for require.undef*/) {
						// create a new (the real) plugin resource and inject it normally now that the plugin is on board
						injectPlugin(modules[mid] = pluginResource);
					} // else this was a duplicate request for the same (plugin, rid) for a nondynamic plugin

				// pluginResource is really just a placeholder with the wrong mid (because we couldn't calculate it until the plugin was on board)
				// mark is as arrived and delete it from modules; the real module was requested above
				map[pseudoPluginResource.mid] = modules[mid];
				setArrived(pseudoPluginResource);
				delete modules[pseudoPluginResource.mid];
			});
			plugin.loadQ = 0;

			// step2: replace all references to any placeholder modules with real modules
			var substituteModules = function substituteModules(module) {
				for (var replacement, deps = module.deps || [], i = 0; i < deps.length; i++) {
					replacement = map[deps[i].mid];
					if (replacement) {
						deps[i] = replacement;
					}
				}
			};
			for (var p in modules) {
				substituteModules(modules[p]);
			}
			forEach(execQ, substituteModules);
		},
		    finishExec = function finishExec(module) {
			req.trace("loader-finish-exec", [module.mid]);
			module.executed = executed;
			module.defOrder = defOrder++;
			0 && forEach(module.provides, function (cb) {
				cb();
			});
			if (module.loadQ) {
				// the module was a plugin
				promoteModuleToPlugin(module);
				resolvePluginLoadQ(module);
			}
			// remove all occurrences of this module from the execQ
			for (i = 0; i < execQ.length;) {
				if (execQ[i] === module) {
					execQ.splice(i, 1);
				} else {
					i++;
				}
			}
			// delete references to synthetic modules
			if (/^require\*/.test(module.mid)) {
				delete modules[module.mid];
			}
		},
		    circleTrace = [],
		    execModule = function execModule(module, strict) {
			// run the dependency vector, then run the factory for module
			if (module.executed === executing) {
				req.trace("loader-circular-dependency", [circleTrace.concat(module.mid).join("->")]);
				return !module.def || strict ? abortExec : module.cjs && module.cjs.exports;
			}
			// at this point the module is either not executed or fully executed


			if (!module.executed) {
				if (!module.def) {
					return abortExec;
				}
				var mid = module.mid,
				    deps = module.deps || [],
				    arg,
				    argResult,
				    args = [],
				    i = 0;

				if (0) {
					circleTrace.push(mid);
					req.trace("loader-exec-module", ["exec", circleTrace.length, mid]);
				}

				// for circular dependencies, assume the first module encountered was executed OK
				// modules that circularly depend on a module that has not run its factory will get
				// the pre-made cjs.exports===module.result. They can take a reference to this object and/or
				// add properties to it. When the module finally runs its factory, the factory can
				// read/write/replace this object. Notice that so long as the object isn't replaced, any
				// reference taken earlier while walking the deps list is still valid.
				module.executed = executing;
				while (arg = deps[i++]) {
					argResult = arg === cjsRequireModule ? createRequire(module) : arg === cjsExportsModule ? module.cjs.exports : arg === cjsModuleModule ? module.cjs : execModule(arg, strict);
					if (argResult === abortExec) {
						module.executed = 0;
						req.trace("loader-exec-module", ["abort", mid]);
						0 && circleTrace.pop();
						return abortExec;
					}
					args.push(argResult);
				}
				runFactory(module, args);
				finishExec(module);
				0 && circleTrace.pop();
			}
			// at this point the module is guaranteed fully executed

			return module.result;
		},
		    checkCompleteGuard = 0,
		    guardCheckComplete = function guardCheckComplete(proc) {
			try {
				checkCompleteGuard++;
				proc();
			} catch (e) {
				// https://bugs.dojotoolkit.org/ticket/16617
				throw e;
			} finally {
				checkCompleteGuard--;
			}
			if (execComplete()) {
				signal("idle", []);
			}
		},
		    checkComplete = function checkComplete() {
			// keep going through the execQ as long as at least one factory is executed
			// plugins, recursion, cached modules all make for many execution path possibilities
			if (checkCompleteGuard) {
				return;
			}
			guardCheckComplete(function () {
				checkDojoRequirePlugin();
				for (var currentDefOrder, module, i = 0; i < execQ.length;) {
					currentDefOrder = defOrder;
					module = execQ[i];
					execModule(module);
					if (currentDefOrder != defOrder) {
						// defOrder was bumped one or more times indicating something was executed (note, this indicates
						// the execQ was modified, maybe a lot (for example a later module causes an earlier module to execute)
						checkDojoRequirePlugin();
						i = 0;
					} else {
						// nothing happened; check the next module in the exec queue
						i++;
					}
				}
			});
		},
		    fixupUrl = typeof userConfig.fixupUrl == "function" ? userConfig.fixupUrl : function (url) {
			url += ""; // make sure url is a Javascript string (some paths may be a Java string)
			return url + (cacheBust ? (/\?/.test(url) ? "&" : "?") + cacheBust : "");
		};

		if (0) {
			req.undef = function (moduleId, referenceModule) {
				// In order to reload a module, it must be undefined (this routine) and then re-requested.
				// This is useful for testing frameworks (at least).
				var module = getModule(moduleId, referenceModule);
				setArrived(module);
				mix(module, { def: 0, executed: 0, injected: 0, node: 0, load: 0 });
			};
		}

		if (false) {
			if (0 === undefined) {
				0 && has.add("dojo-loader-eval-hint-url", 1);
			}

			var injectPlugin = function injectPlugin(module) {
				// injects the plugin module given by module; may have to inject the plugin itself
				var plugin = module.plugin;

				if (plugin.executed === executed && !plugin.load) {
					// executed the module not knowing it was a plugin
					promoteModuleToPlugin(plugin);
				}

				var onLoad = function onLoad(def) {
					module.result = def;
					setArrived(module);
					finishExec(module);
					checkComplete();
				};

				if (plugin.load) {
					plugin.load(module.prid, module.req, onLoad);
				} else if (plugin.loadQ) {
					plugin.loadQ.push(module);
				} else {
					// the unshift instead of push is important: we don't want plugins to execute as
					// dependencies of some other module because this may cause circles when the plugin
					// loadQ is run; also, generally, we want plugins to run early since they may load
					// several other modules and therefore can potentially unblock many modules
					plugin.loadQ = [module];
					execQ.unshift(plugin);
					injectModule(plugin);
				}
			},


			// for IE, injecting a module may result in a recursive execution if the module is in the cache

			cached = 0,
			    injectingModule = 0,
			    injectingCachedModule = 0,
			    evalModuleText = function evalModuleText(text, module) {
				// see def() for the injectingCachedModule bracket; it simply causes a short, safe circuit
				if (0) {
					text = text.replace(/(["'])use strict\1/g, '');
				}
				injectingCachedModule = 1;
				if (0) {
					try {
						if (text === cached) {
							cached.call(null);
						} else {
							req.eval(text, 0 ? module.url : module.mid);
						}
					} catch (e) {
						signal(error, makeError("evalModuleThrew", module));
					}
				} else {
					if (text === cached) {
						cached.call(null);
					} else {
						req.eval(text, 0 ? module.url : module.mid);
					}
				}
				injectingCachedModule = 0;
			},
			    injectModule = function injectModule(module) {
				// Inject the module. In the browser environment, this means appending a script element into
				// the document; in other environments, it means loading a file.
				//
				// If in synchronous mode, then get the module synchronously if it's not xdomainLoading.

				var mid = module.mid,
				    url = module.url;
				if (module.executed || module.injected || waiting[mid] || module.url && (module.pack && waiting[module.url] === module.pack || waiting[module.url] == 1)) {
					return;
				}
				setRequested(module);

				if (0) {
					var viaCombo = 0;
					if (module.plugin && module.plugin.isCombo) {
						// a combo plugin; therefore, must be handled by combo service
						// the prid should have already been converted to a URL (if required by the plugin) during
						// the normalize process; in any event, there is no way for the loader to know how to
						// to the conversion; therefore the third argument is zero
						req.combo.add(module.plugin.mid, module.prid, 0, req);
						viaCombo = 1;
					} else if (!module.plugin) {
						viaCombo = req.combo.add(0, module.mid, module.url, req);
					}
					if (viaCombo) {
						comboPending = 1;
						return;
					}
				}

				if (module.plugin) {
					injectPlugin(module);
					return;
				} // else a normal module (not a plugin)


				var onLoadCallback = function onLoadCallback() {
					runDefQ(module);
					if (module.injected !== arrived) {
						// the script that contained the module arrived and has been executed yet
						// nothing was added to the defQ (so it wasn't an AMD module) and the module
						// wasn't marked as arrived by dojo.provide (so it wasn't a v1.6- module);
						// therefore, it must not have been a module; adjust state accordingly
						if (0) {
							signal(error, makeError("noDefine", module));
							return;
						}
						setArrived(module);
						mix(module, nonModuleProps);
						req.trace("loader-define-nonmodule", [module.url]);
					}

					if (0 && legacyMode) {
						// must call checkComplete even in for sync loader because we may be in xdomainLoading mode;
						// but, if xd loading, then don't call checkComplete until out of the current sync traversal
						// in order to preserve order of execution of the dojo.required modules
						!syncExecStack.length && checkComplete();
					} else {
						checkComplete();
					}
				};
				cached = cache[mid] || cache[urlKeyPrefix + module.url];
				if (cached) {
					req.trace("loader-inject", ["cache", module.mid, url]);
					evalModuleText(cached, module);
					onLoadCallback();
					return;
				}
				if (0 && legacyMode) {
					if (module.isXd) {
						// switch to async mode temporarily; if current legacyMode!=sync, then is must be one of {legacyAsync, xd, false}
						legacyMode == sync && (legacyMode = xd);
						// fall through and load via script injection
					} else if (module.isAmd && legacyMode != sync) {
						// fall through and load via script injection
					} else {
						// mode may be sync, xd/legacyAsync, or async; module may be AMD or legacy; but module is always located on the same domain
						var xhrCallback = function xhrCallback(text) {
							if (legacyMode == sync) {
								// the top of syncExecStack gives the current synchronously executing module; the loader needs
								// to know this if it has to switch to async loading in the middle of evaluating a legacy module
								// this happens when a modules dojo.require's a module that must be loaded async because it's xdomain
								// (using unshift/shift because there is no back() methods for Javascript arrays)
								syncExecStack.unshift(module);
								evalModuleText(text, module);
								syncExecStack.shift();

								// maybe the module was an AMD module
								runDefQ(module);

								// legacy modules never get to defineModule() => cjs and injected never set; also evaluation implies executing
								if (!module.cjs) {
									setArrived(module);
									finishExec(module);
								}

								if (module.finish) {
									// while synchronously evaluating this module, dojo.require was applied referencing a module
									// that had to be loaded async; therefore, the loader stopped answering all dojo.require
									// requests so they could be answered completely in the correct sequence; module.finish gives
									// the list of dojo.requires that must be re-applied once all target modules are available;
									// make a synthetic module to execute the dojo.require's in the correct order

									// compute a guaranteed-unique mid for the synthetic finish module; remember the finish vector; remove it from the reference module
									// TODO: can we just leave the module.finish...what's it hurting?
									var finishMid = mid + "*finish",
									    finish = module.finish;
									delete module.finish;

									def(finishMid, ["dojo", ("dojo/require!" + finish.join(",")).replace(/\./g, "/")], function (dojo) {
										forEach(finish, function (mid) {
											dojo.require(mid);
										});
									});
									// unshift, not push, which causes the current traversal to be reattempted from the top
									execQ.unshift(getModule(finishMid));
								}
								onLoadCallback();
							} else {
								text = transformToAmd(module, text);
								if (text) {
									evalModuleText(text, module);
									onLoadCallback();
								} else {
									// if transformToAmd returned falsy, then the module was already AMD and it can be script-injected
									// do so to improve debugability(even though it means another download...which probably won't happen with a good browser cache)
									injectingModule = module;
									req.injectUrl(fixupUrl(url), onLoadCallback, module);
									injectingModule = 0;
								}
							}
						};

						req.trace("loader-inject", ["xhr", module.mid, url, legacyMode != sync]);
						if (0) {
							try {
								req.getText(url, legacyMode != sync, xhrCallback);
							} catch (e) {
								signal(error, makeError("xhrInjectFailed", [module, e]));
							}
						} else {
							req.getText(url, legacyMode != sync, xhrCallback);
						}
						return;
					}
				} // else async mode or fell through in xdomain loading mode; either way, load by script injection
				req.trace("loader-inject", ["script", module.mid, url]);
				injectingModule = module;
				req.injectUrl(fixupUrl(url), onLoadCallback, module);
				injectingModule = 0;
			},
			    defineModule = function defineModule(module, deps, def) {
				req.trace("loader-define-module", [module.mid, deps]);

				if (0 && module.plugin && module.plugin.isCombo) {
					// the module is a plugin resource loaded by the combo service
					// note: check for module.plugin should be enough since normal plugin resources should
					// not follow this path; module.plugin.isCombo is future-proofing belt and suspenders
					module.result = isFunction(def) ? def() : def;
					setArrived(module);
					finishExec(module);
					return module;
				}

				var mid = module.mid;
				if (module.injected === arrived) {
					signal(error, makeError("multipleDefine", module));
					return module;
				}
				mix(module, {
					deps: deps,
					def: def,
					cjs: {
						id: module.mid,
						uri: module.url,
						exports: module.result = {},
						setExports: function setExports(exports) {
							module.cjs.exports = exports;
						},
						config: function config() {
							return module.config;
						}
					}
				});

				// resolve deps with respect to this module
				for (var i = 0; deps[i]; i++) {
					deps[i] = getModule(deps[i], module);
				}

				if (0 && legacyMode && !waiting[mid]) {
					// the module showed up without being asked for; it was probably in a <script> element
					injectDependencies(module);
					execQ.push(module);
					checkComplete();
				}
				setArrived(module);

				if (!isFunction(def) && !deps.length) {
					module.result = def;
					finishExec(module);
				}

				return module;
			},
			    runDefQ = function runDefQ(referenceModule, mids) {
				// defQ is an array of [id, dependencies, factory]
				// mids (if any) is a vector of mids given by a combo service
				var definedModules = [],
				    module,
				    args;
				while (defQ.length) {
					args = defQ.shift();
					mids && (args[0] = mids.shift());
					// explicit define indicates possible multiple modules in a single file; delay injecting dependencies until defQ fully
					// processed since modules earlier in the queue depend on already-arrived modules that are later in the queue
					// TODO: what if no args[0] and no referenceModule
					module = args[0] && getModule(args[0]) || referenceModule;
					definedModules.push([module, args[1], args[2]]);
				}
				consumePendingCacheInsert(referenceModule);
				forEach(definedModules, function (args) {
					injectDependencies(defineModule.apply(null, args));
				});
			};
		}

		var timerId = 0,
		    clearTimer = noop,
		    startTimer = noop;
		if (0) {
			// Timer machinery that monitors how long the loader is waiting and signals an error when the timer runs out.
			clearTimer = function clearTimer() {
				timerId && clearTimeout(timerId);
				timerId = 0;
			};

			startTimer = function startTimer() {
				clearTimer();
				if (req.waitms) {
					timerId = global.setTimeout(function () {
						clearTimer();
						signal(error, makeError("timeout", waiting));
					}, req.waitms);
				}
			};
		}

		if (0) {
			// Test for IE's different way of signaling when scripts finish loading.  Note that according to
			// http://bugs.dojotoolkit.org/ticket/15096#comment:14, IE9 also needs to follow the
			// IE specific code path even though it has an addEventListener() method.
			// Unknown if special path needed on IE10+, which also has a document.attachEvent() method.
			// Should evaluate to false for Opera and Windows 8 apps, even though they document.attachEvent()
			//  is defined in both those environments.
			0 && has.add("ie-event-behavior", doc.attachEvent && typeof Windows === "undefined" && (typeof opera === "undefined" || opera.toString() != "[object Opera]"));
		}

		if (false) {
			var domOn = function domOn(node, eventName, ieEventName, handler) {
				// Add an event listener to a DOM node using the API appropriate for the current browser;
				// return a function that will disconnect the listener.
				if (!0) {
					node.addEventListener(eventName, handler, false);
					return function () {
						node.removeEventListener(eventName, handler, false);
					};
				} else {
					node.attachEvent(ieEventName, handler);
					return function () {
						node.detachEvent(ieEventName, handler);
					};
				}
			},
			    windowOnLoadListener = domOn(window, "load", "onload", function () {
				req.pageLoaded = 1;
				// https://bugs.dojotoolkit.org/ticket/16248
				try {
					doc.readyState != "complete" && (doc.readyState = "complete");
				} catch (e) {}
				windowOnLoadListener();
			});

			if (false) {
				// if the loader is on the page, there must be at least one script element
				// getting its parent and then doing insertBefore solves the "Operation Aborted"
				// error in IE from appending to a node that isn't properly closed; see
				// dojo/tests/_base/loader/requirejs/simple-badbase.html for an example
				// don't use scripts with type dojo/... since these may be removed; see #15809
				// prefer to use the insertPoint computed during the config sniff in case a script is removed; see #16958
				var scripts = doc.getElementsByTagName("script"),
				    i = 0,
				    script;
				while (!insertPointSibling) {
					if (!/^dojo/.test((script = scripts[i++]) && script.type)) {
						insertPointSibling = script;
					}
				}

				req.injectUrl = function (url, callback, owner) {
					// insert a script element to the insert-point element with src=url;
					// apply callback upon detecting the script has loaded.

					var node = owner.node = doc.createElement("script"),
					    onLoad = function onLoad(e) {
						e = e || window.event;
						var node = e.target || e.srcElement;
						if (e.type === "load" || /complete|loaded/.test(node.readyState)) {
							loadDisconnector();
							errorDisconnector();
							callback && callback();
						}
					},
					    loadDisconnector = domOn(node, "load", "onreadystatechange", onLoad),
					    errorDisconnector = domOn(node, "error", "onerror", function (e) {
						loadDisconnector();
						errorDisconnector();
						signal(error, makeError("scriptError", [url, e]));
					});

					node.type = "text/javascript";
					node.charset = "utf-8";
					node.src = url;
					insertPointSibling.parentNode.insertBefore(node, insertPointSibling);
					return node;
				};
			}
		}

		if (0) {
			req.log = function () {
				try {
					for (var i = 0; i < arguments.length; i++) {
						console.log(arguments[i]);
					}
				} catch (e) {}
			};
		} else {
			req.log = noop;
		}

		if (0) {
			var trace = req.trace = function (group, // the trace group to which this application belongs
			args // the contents of the trace
			) {
				///
				// Tracing interface by group.
				//
				// Sends the contents of args to the console iff (req.trace.on && req.trace[group])

				if (trace.on && trace.group[group]) {
					signal("trace", [group, args]);
					for (var arg, dump = [], text = "trace:" + group + (args.length ? ":" + args[0] : ""), i = 1; i < args.length;) {
						arg = args[i++];
						if (isString(arg)) {
							text += ", " + arg;
						} else {
							dump.push(arg);
						}
					}
					req.log(text);
					dump.length && dump.push(".");
					req.log.apply(req, dump);
				}
			};
			mix(trace, {
				on: 1,
				group: {},
				set: function set(group, value) {
					if (isString(group)) {
						trace.group[group] = value;
					} else {
						mix(trace.group, group);
					}
				}
			});
			trace.set(mix(mix(mix({}, defaultConfig.trace), userConfig.trace), dojoSniffConfig.trace));
			on("config", function (config) {
				config.trace && trace.set(config.trace);
			});
		} else {
			req.trace = noop;
		}

		var def = function def(mid, //(commonjs.moduleId, optional)
		dependencies, //(array of commonjs.moduleId, optional) list of modules to be loaded before running factory
		factory //(any)
		) {
			///
			// Advises the loader of a module factory. //Implements http://wiki.commonjs.org/wiki/Modules/AsynchronousDefinition.
			///
			//note
			// CommonJS factory scan courtesy of http://requirejs.org

			var arity = arguments.length,
			    defaultDeps = ["require", "exports", "module"],

			// the predominate signature...
			args = [0, mid, dependencies];
			if (arity == 1) {
				args = [0, isFunction(mid) ? defaultDeps : [], mid];
			} else if (arity == 2 && isString(mid)) {
				args = [mid, isFunction(dependencies) ? defaultDeps : [], dependencies];
			} else if (arity == 3) {
				args = [mid, dependencies, factory];
			}

			if (false) {
				args[2].toString().replace(/(\/\*([\s\S]*?)\*\/|\/\/(.*)$)/mg, "").replace(/require\(["']([\w\!\-_\.\/]+)["']\)/g, function (match, dep) {
					args[1].push(dep);
				});
			}

			req.trace("loader-define", args.slice(0, 2));
			var targetModule = args[0] && getModule(args[0]),
			    module;
			if (targetModule && !waiting[targetModule.mid]) {
				// given a mid that hasn't been requested; therefore, defined through means other than injecting
				// consequent to a require() or define() application; examples include defining modules on-the-fly
				// due to some code path or including a module in a script element. In any case,
				// there is no callback waiting to finish processing and nothing to trigger the defQ and the
				// dependencies are never requested; therefore, do it here.
				injectDependencies(defineModule(targetModule, args[1], args[2]));
			} else if (true) {
				// not IE path: anonymous module and therefore must have been injected; therefore, onLoad will fire immediately
				// after script finishes being evaluated and the defQ can be run from that callback to detect the module id
				defQ.push(args);
			} else {
				// IE path: possibly anonymous module and therefore injected; therefore, cannot depend on 1-to-1,
				// in-order exec of onLoad with script eval (since it's IE) and must manually detect here
				targetModule = targetModule || injectingModule;
				if (!targetModule) {
					for (mid in waiting) {
						module = modules[mid];
						if (module && module.node && module.node.readyState === 'interactive') {
							targetModule = module;
							break;
						}
					}
					if (0 && !targetModule) {
						for (var i = 0; i < combosPending.length; i++) {
							targetModule = combosPending[i];
							if (targetModule.node && targetModule.node.readyState === 'interactive') {
								break;
							}
							targetModule = 0;
						}
					}
				}
				if (0 && isArray(targetModule)) {
					injectDependencies(defineModule(getModule(targetModule.shift()), args[1], args[2]));
					if (!targetModule.length) {
						combosPending.splice(i, 1);
					}
				} else if (targetModule) {
					consumePendingCacheInsert(targetModule);
					injectDependencies(defineModule(targetModule, args[1], args[2]));
				} else {
					signal(error, makeError("ieDefineFailed", args[0]));
				}
				checkComplete();
			}
		};
		def.amd = {
			vendor: "dojotoolkit.org"
		};

		if (0) {
			req.def = def;
		}

		// allow config to override default implementation of named functions; this is useful for
		// non-browser environments, e.g., overriding injectUrl, getText, log, etc. in node.js, Rhino, etc.
		// also useful for testing and monkey patching loader
		mix(mix(req, defaultConfig.loaderPatch), userConfig.loaderPatch);

		// now that req is fully initialized and won't change, we can hook it up to the error signal
		on(error, function (arg) {
			try {
				console.error(arg);
				if (arg instanceof Error) {
					for (var p in arg) {
						console.log(p + ":", arg[p]);
					}
					console.log(".");
				}
			} catch (e) {}
		});

		// always publish these
		mix(req, {
			uid: uid,
			cache: cache,
			packs: packs
		});

		if (0) {
			mix(req, {
				// these may be interesting to look at when debugging
				paths: paths,
				aliases: aliases,
				modules: modules,
				legacyMode: legacyMode,
				execQ: execQ,
				defQ: defQ,
				waiting: waiting,

				// these are used for testing
				// TODO: move testing infrastructure to a different has feature
				packs: packs,
				mapProgs: mapProgs,
				pathsMapProg: pathsMapProg,
				listenerQueues: listenerQueues,

				// these are used by the builder (at least)
				computeMapProg: computeMapProg,
				computeAliases: computeAliases,
				runMapProg: runMapProg,
				compactPath: compactPath,
				getModuleInfo: getModuleInfo_
			});
		}

		// the loader can be defined exactly once; look for global define which is the symbol AMD loaders are
		// *required* to define (as opposed to require, which is optional)
		if (global.define) {
			if (0) {
				signal(error, makeError("defineAlreadyDefined", 0));
			}
			return;
		} else {
			global.define = def;
			global.require = req;
			if (0) {
				require = req;
			}
		}

		if (false) {
			var plugins = req.combo.plugins,
			    pluginName;
			for (pluginName in plugins) {
				mix(mix(getModule(pluginName), plugins[pluginName]), { isCombo: 1, executed: "executed", load: 1 });
			}
		}

		if (1) {
			forEach(delayedModuleConfig, function (c) {
				config(c);
			});
			var bootDeps = dojoSniffConfig.deps || userConfig.deps || defaultConfig.deps,
			    bootCallback = dojoSniffConfig.callback || userConfig.callback || defaultConfig.callback;
			req.boot = bootDeps || bootCallback ? [bootDeps || [], bootCallback] : 0;
		}
		if (false) {
			!req.async && req(["dojo"]);
			req.boot && req.apply(null, req.boot);
		}
	}).call(this, userConfig, defaultConfig);
};

/***/ }),
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */,
/* 370 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(130);

__webpack_require__.p = '../../dist/';

var jasmine = window.jasmine;
var jasmineEnv = jasmine.getEnv();
jasmineEnv.updateInterval = 1000;

var htmlReporter = new jasmine.HtmlReporter();

jasmineEnv.addReporter(htmlReporter);
jasmineEnv.specFilter = function (spec) {
    return htmlReporter.specFilter(spec);
};

window.addEventListener("load", function (event) {
    jasmineEnv.execute();
});

__webpack_require__(371);
__webpack_require__(372);
__webpack_require__(373);
__webpack_require__(374);
__webpack_require__(375);
__webpack_require__(376);
__webpack_require__(377);
__webpack_require__(378);
__webpack_require__(379);
__webpack_require__(380);
__webpack_require__(381);
__webpack_require__(382);
__webpack_require__(383);
__webpack_require__(384);
__webpack_require__(385);
__webpack_require__(386);
__webpack_require__(387);
__webpack_require__(388);
__webpack_require__(389);
__webpack_require__(390);
__webpack_require__(391);
__webpack_require__(392);
__webpack_require__(393);
__webpack_require__(394);
__webpack_require__(395);
__webpack_require__(396);
__webpack_require__(397);

/***/ }),
/* 371 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__.e/* require */(3).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(354)]; ((function (ExportGFF3) {
    describe("GFF3 Exporter", function () {
        var e = new ExportGFF3();

        it('constructs', function () {
            expect(e).toBeTruthy();
        });
    });
}).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}).catch(__webpack_require__.oe);

/***/ }),
/* 372 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__.e/* require */(2/* aggressive-merge */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(336), __webpack_require__(338)]; ((function (QueryParamConfigMapper, ioQuery) {

    describe("QueryParamConfigMapper", function () {
        var mapper = QueryParamConfigMapper();
        it('should construct', function () {
            expect(mapper).toBeTruthy();
        });

        it("should interpret addStores properly", function () {
            var queryString = 'addStores.store1.type=HMLFeatures&addStores.store1.urlTemplate=http://abc.com/test.gff';
            var config = {};
            var queryParams = ioQuery.queryToObject(queryString);
            runs(function () {
                mapper.handleQueryParams(config, queryParams);
                var answer = { "stores": { "store1": { "type": "HMLFeatures", "urlTemplate": "http://abc.com/test.gff" } } };
                expect(config.stores).toEqual(answer.stores);
            });
        });

        it("tests addBookmarks, addStores, and addTracks", function () {
            var queryString = 'addStores.store1.type=JBrowse/Store/SeqFeature/GFF3&addStores.store1.urlTemplate=http://localhost/volvox.gff3&addTracks.store1.label=genes&addTracks.store1.type=JBrowse/View/Track/HTMLFeatures&highlight=&addBookmarks.bookmark1.start=3000&addBookmarks.bookmark1.end=4000&addBookmarks.bookmark1.ref=ctgA';
            var config = {};
            var queryParams = ioQuery.queryToObject(queryString);
            runs(function () {
                mapper.handleQueryParams(config, queryParams);
                var answer = {
                    "stores": {
                        "store1": {
                            "type": "JBrowse/Store/SeqFeature/GFF3",
                            "urlTemplate": "http://localhost/volvox.gff3"
                        }
                    },
                    "tracks": [{ "label": "genes", "type": "JBrowse/View/Track/HTMLFeatures", "store": "store1" }],
                    "bookmarks": { "features": [{ "start": "3000", "end": "4000", "ref": "ctgA" }] }
                };
                expect(config).toEqual(answer);
            });
        });

        it("convert JSON into URL for large nested string", function () {
            var queryString = 'store1.style.view.className=bestGff3';
            var inputJson = {};
            runs(function () {
                mapper.generateJsonFromKey(inputJson, queryString, null);
                var answer = { "store1": { "style": { "view": { "className": "bestGff3" } } } };
                expect(inputJson).toEqual(answer);
            });
        });

        it("convert JSON into URL", function () {
            var inputJson = {
                'addStores': {
                    'stores': {
                        'store1': {
                            'type': 'HMLFeatures',
                            'urlTemplate': 'http://abc.com/test.gff'
                        }
                    }
                }
            };
            runs(function () {
                var generatedUrl = mapper.generateUrl(inputJson);
                var answer = 'addStores.stores.store1.type=HMLFeatures&addStores.stores.store1.urlTemplate=http://abc.com/test.gff';
                expect(generatedUrl).toEqual(answer);
            });
        });

        it("test multiple nested ingest", function () {
            var queryString = 'addStores.stores.store1.type=HMLFeatures&addStores.stores.store1.urlTemplate=http://abc.com/test.gff';
            var config = {};
            var answer = {
                'addStores': {
                    'stores': {
                        'store1': {
                            'type': 'HMLFeatures',
                            'urlTemplate': 'http://abc.com/test.gff'
                        }
                    }
                }
            };
            runs(function () {
                mapper.generateJsonFromKey(config, queryString);
                expect(config).toEqual(answer);
            });
        });

        it("test multiple nested views", function () {
            var queryString = 'addStores.store1.type=HMLFeatures&addStores.store1.urlTemplate=http://abc.com/test.gff';
            var config = {};
            var answer = {
                'stores': {
                    'store1': {
                        'type': 'HMLFeatures',
                        'urlTemplate': 'http://abc.com/test.gff'
                    }
                }
            };
            var queryParams = ioQuery.queryToObject(queryString);
            runs(function () {
                mapper.handleQueryParams(config, queryParams);
                expect(config).toEqual(answer);
            });
        });

        it("decode real addTracks JSON into URL", function () {
            var queryObject = { "addTracks": { "store1": { "label": "BLAST++Results", "category": "0.+Reference+Assembly", "type": "WebApollo/View/Track/DraggableBLASTFeatures", "store": "url", "style": { "renderClassName": "gray-center-30pct", "subfeatureClasses": { "match_part": "blast-match_part" } } } } };
            runs(function () {
                var url = mapper.generateUrl(queryObject);
                var answer = 'addTracks.store1.label=BLAST++Results&addTracks.store1.category=0.+Reference+Assembly&addTracks.store1.type=WebApollo/View/Track/DraggableBLASTFeatures&addTracks.store1.store=url&addTracks.store1.style.renderClassName=gray-center-30pct&addTracks.store1.style.subfeatureClasses.match_part=blast-match_part';
                expect(url).toEqual(answer);
            });
        });

        it("properly encode addTracks URL into JSON", function () {
            var queryString = 'addTracks.store1.label=BLAST++Results&addTracks.store1.category=0.+Reference+Assembly&addTracks.store1.type=WebApollo/View/Track/DraggableBLASTFeatures&addTracks.store1.style.renderClassName=gray-center-30pct&addTracks.store1.style.subfeatureClasses.match_part=blast-match_part';
            var config = {};
            var queryParams = ioQuery.queryToObject(queryString);
            var answer = { "tracks": [{ "store": "store1", "label": "BLAST++Results", "category": "0.+Reference+Assembly", "type": "WebApollo/View/Track/DraggableBLASTFeatures", "style": { "renderClassName": "gray-center-30pct", "subfeatureClasses": { "match_part": "blast-match_part" } } }] };
            runs(function () {
                mapper.handleQueryParams(config, queryParams);
                expect(config).toEqual(answer);
            });
        });

        it("properly encode addFeatures URL into JSON", function () {
            var queryString = "addFeatures.1.seq_id=scf7180000394085&addFeatures.1.start=914360&addFeatures.1.end=914389&addFeatures.1.strand=1&addFeatures.1.name=HSP";
            queryString += "&addFeatures.2.seq_id=scf7180000394085&addFeatures.2.start=917599&addFeatures.2.end=917628&addFeatures.2.strand=1&addFeatures.2.name=HSP";
            var config = {};
            var queryParams = ioQuery.queryToObject(queryString);

            // config.stores.url.features = JSON.parse( queryParams.addFeatures );
            var answer = { "stores": { "url": { "features": [{ "seq_id": "scf7180000394085", "start": "914360", "end": "914389", "strand": "1", "name": "HSP" }, { "seq_id": "scf7180000394085", "start": "917599", "end": "917628", "strand": "1", "name": "HSP" }] } } };
            runs(function () {
                mapper.handleQueryParams(config, queryParams);
                expect(config).toEqual(answer);
            });
        });

        it("put addTracks and addFeatures together", function () {
            var queryString = "addFeatures.1.seq_id=scf7180000394085&addFeatures.1.start=914360&addFeatures.1.end=914389&addFeatures.1.strand=1&addFeatures.1.name=HSP";
            queryString += "&addFeatures.2.seq_id=scf7180000394085&addFeatures.2.start=917599&addFeatures.2.end=917628&addFeatures.2.strand=1&addFeatures.2.name=HSP";
            queryString += '&addTracks.store1.label=BLAST++Results&addTracks.store1.category=0.+Reference+Assembly&addTracks.store1.type=WebApollo/View/Track/DraggableBLASTFeatures&addTracks.store1.style.renderClassName=gray-center-30pct&addTracks.store1.style.subfeatureClasses.match_part=blast-match_part';
            var config = {};
            var queryParams = ioQuery.queryToObject(queryString);
            var answer = { "stores": { "url": { "features": [{ "seq_id": "scf7180000394085", "start": "914360", "end": "914389", "strand": "1", "name": "HSP" }, { "seq_id": "scf7180000394085", "start": "917599", "end": "917628", "strand": "1", "name": "HSP" }] } } };
            answer.tracks = [{ "store": "store1", "label": "BLAST++Results", "category": "0.+Reference+Assembly", "type": "WebApollo/View/Track/DraggableBLASTFeatures", "style": { "renderClassName": "gray-center-30pct", "subfeatureClasses": { "match_part": "blast-match_part" } } }];
            runs(function () {
                mapper.handleQueryParams(config, queryParams);
                expect(config).toEqual(answer);
            });
        });
    });
}).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}).catch(__webpack_require__.oe);

/***/ }),
/* 373 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__.e/* require */(1/* aggressive-merge */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(347)]; ((function (LazyArray) {

    describe("LazyArray with test data", function () {
        var la;

        beforeEach(function () {
            la = new LazyArray({
                urlTemplate: "../data/lazyarray-{chunk}.json",
                length: 12,
                chunkSize: 5
            });
        });

        it("should have length 12", function () {
            expect(la.length).toEqual(12);
        });

        it("should have \"zero\" at index 0", function () {
            var _this = this;

            runs(function () {
                this.callback = jasmine.createSpy();
                la.index(0, this.callback);
                expect(this.callback).wasNotCalled();
            });

            waitsFor(function () {
                return _this.callback.callCount === 1;
            });

            runs(function () {
                expect(this.callback).wasCalledWith(0, "zero", undefined);
            });
        });

        it("should have \"five\" at index 5", function () {
            var _this2 = this;

            runs(function () {
                this.callback = jasmine.createSpy();
                la.index(5, this.callback);
                expect(this.callback).wasNotCalled();
            });

            waitsFor(function () {
                return _this2.callback.callCount === 1;
            });

            runs(function () {
                expect(this.callback).wasCalledWith(5, "five", undefined);
            });
        });

        it("should run a range call properly", function () {
            var _this3 = this;

            runs(function () {
                this.callback = jasmine.createSpy();
                la.range(3, 7, this.callback);
                expect(this.callback).wasNotCalled();
            });

            waitsFor(function () {
                return _this3.callback.callCount === 5;
            });

            // how do we handle the fact that the async calls can return
            // in any order?
            // OTOH, when you reload the data should be cached
            runs(function () {
                expect(this.callback.callCount).toEqual(5);
                var callsSorted = this.callback.argsForCall.sort(function (a, b) {
                    return a[0] - b[0];
                });

                expect(callsSorted[0]).toEqual([3, "three", undefined]);
                expect(callsSorted[1]).toEqual([4, "four", undefined]);
                expect(callsSorted[2]).toEqual([5, "five", undefined]);
                expect(callsSorted[3]).toEqual([6, "six", undefined]);
                expect(callsSorted[4]).toEqual([7, "seven", undefined]);

                var cb2 = jasmine.createSpy();
                la.range(4, 5, cb2);
                expect(cb2.callCount).toEqual(2);
                expect(cb2.argsForCall[0]).toEqual([4, "four", undefined]);
                expect(cb2.argsForCall[1]).toEqual([5, "five", undefined]);
            });
        });
    });
}).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}).catch(__webpack_require__.oe);

/***/ }),
/* 374 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__.e/* require */(2/* aggressive-merge */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(344)]; ((function (Layout) {
    describe("JBrowse.View.Layout", function () {
        var l;
        beforeEach(function () {
            l = new Layout({ pitchX: 10, pitchY: 4 });
        });

        it('constructs', function () {
            expect(l).toBeTruthy();
        });

        it('lays out non-overlapping features end to end', function () {
            var test_rects = [["1,0", 4133, 5923, 16], ["1,1", 11299, 12389, 16], ["1,2", 21050, 22778, 16], ["1,3", 41125, 47459, 16], ["1,4", 47926, 49272, 16], ["1,5", 50240, 52495, 16], ["1,6", 53329, 56283, 16], ["1,7", 59309, 79441, 16], ["1,8", 80359, 83196, 16], ["1,9", 92147, 94188, 16], ["1,10", 96241, 103626, 16], ["1,11", 104396, 108110, 16], ["1,12", 111878, 125251, 16], ["1,13", 125747, 128085, 16], ["1,14", 131492, 132641, 16], ["1,15", 133857, 134931, 16], ["1,16", 137023, 138220, 16], ["1,17", 140703, 145668, 16], ["1,18", 146045, 147059, 16], ["1,19", 162296, 165395, 16], ["1,20", 168531, 170795, 16], ["1,21", 174812, 180475, 16], ["1,22", 184302, 188826, 16], ["1,23", 189609, 191141, 16], ["1,24", 199799, 201389, 16], ["1,25", 203436, 211345, 16], ["1,26", 212100, 212379, 16], ["1,27", 213418, 214627, 16], ["1,28", 215115, 219344, 16], ["1,29", 220067, 222525, 16], ["1,30", 223308, 228141, 16], ["1,31", 234473, 236768, 16], ["1,32", 239691, 245015, 16]];

            for (var i = 0; i < test_rects.length; i++) {
                var top = l.addRect.apply(l, test_rects[i]);
                expect(top).toEqual(0);
            }
        });

        it('stacks up overlapping features', function () {
            var test_rects = [];
            var uniq = 0;
            for (var i = 1; i <= 20; i++) {
                test_rects.push([(uniq++).toString(), 100 * i - 60, 100 * i + 60, 1]);
            }

            //console.log( test_rects );

            for (i = 0; i < test_rects.length; i++) {
                var top = l.addRect.apply(l, test_rects[i]);
                expect(top).toEqual(i % 2 * 4);
            }
        });
    });
}).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}).catch(__webpack_require__.oe);

/***/ }),
/* 375 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__.e/* require */(0/* aggressive-merge */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(29), __webpack_require__(368), __webpack_require__(47)]; ((function (Browser, BigWig, XHRBlob) {

    var errorFunc = function errorFunc(e) {
        console.error(e);
    };

    describe('BigWig with volvox_microarray.bw', function () {
        var browser = new Browser({ unitTestMode: true });
        var b = new BigWig({
            browser: browser,
            blob: new XHRBlob('../../sample_data/raw/volvox/volvox_microarray.bw')
        });

        it('constructs', function () {
            expect(b).toBeTruthy();
        });

        it('returns empty array of features for a nonexistent chrom', function () {
            var v = b.getUnzoomedView();
            var wigData;
            v.readWigData('nonexistent', 1, 10000, function (features) {
                wigData = features;
            }, errorFunc);
            waitsFor(function () {
                return wigData;
            });
            runs(function () {
                expect(wigData.length).toEqual(0);
            });
        });
        it('reads some good data unzoomed', function () {
            var v = b.getUnzoomedView();
            var wigData;
            v.readWigData(browser.regularizeReferenceName('ctgA'), 0, 10000, function (features) {
                wigData = features;
            }, errorFunc);
            waitsFor(function () {
                return wigData;
            }, 1000);
            runs(function () {
                expect(wigData.length).toBeGreaterThan(100);
                dojo.forEach(wigData.slice(1, 20), function (feature) {
                    expect(feature.get('start')).toBeGreaterThan(0);
                    expect(feature.get('end')).toBeLessThan(10000);
                });
                //console.log(wigData);
            });
        });

        it('reads some good data when zoomed out', function () {
            var v = b.getView(1 / 20000);
            var wigData;
            v.readWigData(browser.regularizeReferenceName('ctgA'), 100, 20000, function (features) {
                wigData = features;
            }, errorFunc);
            waitsFor(function () {
                return wigData;
            }, 500);
            runs(function () {
                expect(wigData.length).toEqual(2);
                dojo.forEach(wigData, function (feature) {
                    expect(feature.get('start')).toBeGreaterThan(-1);
                    expect(feature.get('end')).toBeLessThan(40000);
                });
                //console.log(wigData);
            });
        });

        it('reads the file stats (the totalSummary section)', function () {
            var stats;
            b.getGlobalStats(function (s) {
                stats = s;
            });
            waitsFor(function () {
                return stats;
            });
            runs(function () {
                //console.log(stats);
                expect(stats.basesCovered).toEqual(50690);
                expect(stats.scoreMin).toEqual(100);
                expect(stats.scoreMax).toEqual(899);
                expect(stats.scoreSum).toEqual(16863706);
                expect(stats.scoreSumSquares).toEqual(8911515204);
                expect(stats.scoreStdDev).toEqual(255.20080383762445);
                expect(stats.scoreMean).toEqual(332.6830933122904);
            });
        });

        it('reads good data when zoomed very little', function () {
            var v = b.getView(1 / 17.34);
            var wigData;
            v.readWigData(browser.regularizeReferenceName('ctgA'), 19999, 24999, function (features) {
                wigData = features;
            }, errorFunc);
            waitsFor(function () {
                return wigData;
            }, 1000);
            runs(function () {
                expect(wigData.length).toBeGreaterThan(19);
                expect(wigData.length).toBeLessThan(1000);
                dojo.forEach(wigData, function (feature) {
                    expect(feature.get('start')).toBeGreaterThan(10000);
                    expect(feature.get('end')).toBeLessThan(30000);
                });
                //console.log(wigData);
            });
        });
    });

    describe('empty BigWig file', function () {
        var browser = new Browser({ unitTestMode: true });
        var b = new BigWig({
            browser: browser,
            blob: new XHRBlob('../data/empty.bigWig')
        });

        it('constructs', function () {
            expect(b).toBeTruthy();
        });

        it('returns empty array of features for a nonexistent chrom', function () {
            var v = b.getUnzoomedView();
            var wigData;
            v.readWigData('nonexistent', 1, 10000, function (features) {
                wigData = features;
            }, errorFunc);
            waitsFor(function () {
                return wigData;
            });
            runs(function () {
                expect(wigData.length).toEqual(0);
            });
        });
        it('reads some good data unzoomed', function () {
            var v = b.getUnzoomedView();
            var wigData;
            v.readWigData(browser.regularizeReferenceName('ctgA'), 0, 10000, function (features) {
                wigData = features;
            }, errorFunc);
            waitsFor(function () {
                return wigData;
            }, 1000);
            runs(function () {
                expect(wigData.length).toEqual(0);
            });
        });

        it('reads some good data when zoomed out', function () {
            var v = b.getView(1 / 20000);
            var wigData;
            v.readWigData(browser.regularizeReferenceName('ctgA'), 100, 20000, function (features) {
                wigData = features;
            }, errorFunc);
            waitsFor(function () {
                return wigData;
            }, 500);
            runs(function () {
                expect(wigData.length).toEqual(0);
            });
        });

        it('reads the file stats (the totalSummary section)', function () {
            var stats;
            b.getGlobalStats(function (s) {
                stats = s;
            });
            waitsFor(function () {
                return stats;
            });
            runs(function () {
                console.log(stats);
                expect(stats.basesCovered).toEqual(0);
                expect(stats.scoreMin).toEqual(0);
                expect(stats.scoreMax).toEqual(3);
                expect(stats.scoreSum).toEqual(0);
                expect(stats.scoreSumSquares).toEqual(0);
                expect(stats.scoreStdDev).toEqual(0);
                expect(stats.scoreMean).toEqual(0);
            });
        });

        it('reads good data when zoomed very little', function () {
            var v = b.getView(1 / 17.34);
            var wigData;
            v.readWigData(browser.regularizeReferenceName('ctgA'), 19999, 24999, function (features) {
                wigData = features;
            }, errorFunc);
            waitsFor(function () {
                return wigData;
            }, 1000);
            runs(function () {
                expect(wigData.length).toEqual(0);
            });
        });
    });

    // only run the tomato_rnaseq test if it's in the URL someplace
    if (document.location.href.indexOf('tomato_rnaseq') > -1) {

        describe('BigWig with tomato RNAseq coverage', function () {
            var b = new BigWig({
                browser: new Browser({ unitTestMode: true }),
                blob: new XHRBlob('../data/SL2.40_all_rna_seq.v1.bigwig')
            });

            it('constructs', function () {
                expect(b).toBeTruthy();
            });

            it('returns empty array of features for a nonexistent chrom', function () {
                var v = b.getUnzoomedView();
                var wigData;
                v.readWigData('nonexistent', 1, 10000, function (features) {
                    wigData = features;
                });
                waitsFor(function () {
                    return wigData;
                });
                runs(function () {
                    expect(wigData.length).toEqual(0);
                });
            });

            it('reads some good data unzoomed', function () {
                var v = b.getUnzoomedView();
                var wigData;
                v.readWigData('SL2.40ch01', 1, 100000, function (features) {
                    wigData = features;
                });
                waitsFor(function () {
                    return wigData;
                }, 1000);
                runs(function () {
                    expect(wigData.length).toBeGreaterThan(10000);
                    dojo.forEach(wigData.slice(0, 20), function (feature) {
                        expect(feature.get('start')).toBeGreaterThan(0);
                        expect(feature.get('end')).toBeLessThan(100001);
                    });
                    //console.log(wigData);
                });
            });

            it('reads some good data when zoomed', function () {
                var v = b.getView(1 / 100000);
                var wigData;
                v.readWigData('SL2.40ch01', 100000, 2000000, function (features) {
                    wigData = features;
                });
                waitsFor(function () {
                    return wigData;
                }, 1000);
                runs(function () {
                    expect(wigData.length).toBeGreaterThan(19);
                    expect(wigData.length).toBeLessThan(100);
                    dojo.forEach(wigData, function (feature) {
                        expect(feature.get('start')).toBeGreaterThan(80000);
                        expect(feature.get('end')).toBeLessThan(2050000);
                    });
                    //console.log(wigData);
                });
            });

            it('reads the file stats (the totalSummary section)', function () {
                var stats = b.getGlobalStats();
                expect(stats.basesCovered).toEqual(141149153);
                expect(stats.minVal).toEqual(1);
                expect(stats.maxVal).toEqual(62066);
                expect(stats.sumData).toEqual(16922295025);
                expect(stats.sumSquares).toEqual(45582937421360);
                expect(stats.stdDev).toEqual(555.4891087210976);
                expect(stats.mean).toEqual(119.88945498666932);
            });

            it('reads good data when zoomed very little', function () {
                var v = b.getView(1 / 17.34);
                var wigData;
                v.readWigData('SL2.40ch01', 19999, 24999, function (features) {
                    wigData = features;
                });
                waitsFor(function () {
                    return wigData;
                }, 1000);
                runs(function () {
                    expect(wigData.length).toBeGreaterThan(19);
                    expect(wigData.length).toBeLessThan(1000);
                    dojo.forEach(wigData, function (feature) {
                        expect(feature.get('start')).toBeGreaterThan(10000);
                        expect(feature.get('end')).toBeLessThan(30000);
                    });
                    //console.log(wigData);
                });
            });
        });
    }
}).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}).catch(__webpack_require__.oe);

/***/ }),
/* 376 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__.e/* require */(1/* aggressive-merge */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(348)]; ((function (ConfigManager) {

    describe("ConfigManager", function () {
        it("should work with a config with no includes", function () {
            var m = new ConfigManager({
                bootConfig: { foo: 1 },
                browser: { fatalError: function fatalError(error) {
                        throw error;
                    } },
                skipValidation: true
            });
            var config;
            expect(m).toBeTruthy();
            waitsFor(function () {
                return config;
            }, 1000);
            m.getFinalConfig().then(function (c) {
                config = c;
            });
            runs(function () {
                expect(config.foo).toEqual(1);
            });
        });

        it("should work with a config with one include", function () {
            var m = new ConfigManager({
                bootConfig: {
                    include: ['../data/conf/no_includes.json'],
                    overrideMe: 'rootConfig',
                    foo: 1,
                    tracks: [{ label: "zoo", zonk: "quux" }, { label: "zaz", honk: "beep", root: "root!" }]
                },
                browser: { fatalError: function fatalError(error) {
                        throw error;
                    } },
                skipValidation: true
            });
            var config;
            expect(m).toBeTruthy();
            waitsFor(function () {
                return config;
            }, 1000);
            m.getFinalConfig().then(function (c) {
                config = c;
            });
            runs(function () {
                expect(config.foo).toEqual(1);
                expect(config.bar).toEqual(42);
                expect(config.overrideMe).toEqual('rootConfig');

                expect(config.tracks.length).toEqual(3);
                expect(config.tracks[1].honk).toEqual('beep');
                expect(config.tracks[1].noinclude).toEqual('also here');
                expect(config.tracks[1].root).toEqual('root!');

                expect(config.tracks[1].label).toEqual('zaz');
                expect(config.tracks[2].label).toEqual('noinclude');
                expect(config.tracks[0].label).toEqual('zoo');
            });
        });

        it("should work with a config with nested includes", function () {
            var m = new ConfigManager({
                bootConfig: {
                    include: ['../data/conf/includes.json'],
                    overrideMe: 'rootConfig',
                    foo: 1,
                    tracks: [{ label: "zoo", zonk: "quux" }, { label: "zaz", honk: "beep", root: "root!" }]
                },
                browser: { fatalError: function fatalError(error) {
                        throw error;
                    } },
                skipValidation: true
            });
            var config;
            expect(m).toBeTruthy();
            waitsFor(function () {
                return config;
            }, 1000);
            m.getFinalConfig().then(function (c) {
                config = c;
            });
            runs(function () {
                expect(config.foo).toEqual(1);
                expect(config.bar).toEqual(42);
                expect(config.overrideMe).toEqual('rootConfig');
                expect(config.override2).toEqual('no_includes.json');
                expect(config.zoz).toEqual(42);

                expect(config.tracks.length).toEqual(4);

                expect(config.tracks[1].label).toEqual('zaz');
                expect(config.tracks[1].honk).toEqual('beep');
                expect(config.tracks[1].noinclude).toEqual('also here');
                expect(config.tracks[1].root).toEqual('root!');
                expect(config.tracks[1].quux).toEqual('foo');

                expect(config.tracks[2].label).toEqual('includes');
                expect(config.tracks[3].label).toEqual('noinclude');
                expect(config.tracks[0].label).toEqual('zoo');
            });
        });

        it("should work with dataRoot specified in baseConfig", function () {
            var m = new ConfigManager({
                bootConfig: { dataRoot: 'notdefault' },
                defaults: { dataRoot: 'data' },
                browser: { fatalError: function fatalError(error) {
                        throw error;
                    } },
                skipValidation: true
            });
            var config;
            expect(m).toBeTruthy();
            waitsFor(function () {
                return config;
            }, 1000);
            m.getFinalConfig().then(function (c) {
                config = c;
            });
            runs(function () {
                expect(config.dataRoot).toEqual('notdefault');
            });
        });

        it("should work with dataRoot not specified in baseConfig", function () {
            var m = new ConfigManager({
                bootConfig: { foo: 'a' },
                defaults: { dataRoot: 'data' },
                browser: { fatalError: function fatalError(error) {
                        throw error;
                    } },
                skipValidation: true
            });
            var config;
            expect(m).toBeTruthy();
            waitsFor(function () {
                return config;
            }, 1000);
            m.getFinalConfig().then(function (c) {
                config = c;
            });
            runs(function () {
                expect(config.dataRoot).toEqual('data');
            });
        });

        it("should work with a config with dataRoot in it", function () {
            var m = new ConfigManager({
                bootConfig: {
                    include: ['../data/conf/dataRoot.json']
                },
                defaults: { dataRoot: 'data' },
                browser: { fatalError: function fatalError(error) {
                        throw error;
                    } },
                skipValidation: true
            });
            var config;
            expect(m).toBeTruthy();
            waitsFor(function () {
                return config;
            }, 1000);
            m.getFinalConfig().then(function (c) {
                config = c;
            });
            runs(function () {
                expect(config.dataRoot).toEqual('notdefault');
            });
        });
    });
}).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}).catch(__webpack_require__.oe);

/***/ }),
/* 377 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__.e/* require */(0/* aggressive-merge */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(335), __webpack_require__(333), __webpack_require__(51), __webpack_require__(29), __webpack_require__(339), __webpack_require__(367), __webpack_require__(47), __webpack_require__(342), __webpack_require__(341), __webpack_require__(337)]; ((function (aspect, declare, array, Browser, FeatureFiltererMixin, BAMStore, XHRBlob, MismatchesMixin, AlignmentsMixin, SimpleFeature) {

    // function distinctBins( features ) {
    //     var bins = {};
    //     features.forEach( function(f) {
    //         bins[ f.data._bin ] = ( bins[ f.data._bin ] || 0 ) + 1;
    //     });
    //     return bins;
    // }


    describe('BAM mismatches test', function () {
        var feature = new SimpleFeature({ data: {
                start: 7903922,
                length: 90,
                cigar: "89M2741N1M",
                md: "89A0",
                seq: "TACTTGATAAATCAGCTCACTCTCTGGTGCTTTTTAGAGAAGTCCCTGATTCCTTCTTAAACTTGGAATGATAGATGAAATTCACACCCG"
            } });

        //Config workaround since we aren't directly instantiating anything with Browser/config
        var Config = declare(null, {
            constructor: function constructor() {
                this.config = {};
            }
        });
        //Use Config workaround
        var MismatchParser = declare([Config, MismatchesMixin, FeatureFiltererMixin]);

        it('getMismatches test', function () {
            var parser = new MismatchParser();
            var obj = parser._getMismatches(feature);
            expect(obj[1].base).toEqual("G");
            expect(obj[1].length).toEqual(1);
            expect(obj[1].start).toEqual(2830);
            expect(obj[1].type).toEqual("mismatch");
        });
    });

    describe('BAM with volvox-sorted.bam', function () {
        var b;
        beforeEach(function () {
            b = new BAMStore({
                browser: new Browser({ unitTestMode: true }),
                bam: new XHRBlob('../../sample_data/raw/volvox/volvox-sorted.bam'),
                bai: new XHRBlob('../../sample_data/raw/volvox/volvox-sorted.bam.bai'),
                refSeq: { name: 'ctgA', start: 1, end: 500001 }
            });
        });

        it('constructs', function () {
            expect(b).toBeTruthy();
        });

        it('loads some data', function () {
            var loaded;
            var features = [];
            var done;
            aspect.after(b, 'loadSuccess', function () {
                loaded = true;
            });
            b.getFeatures({ start: 0, end: 50000 }, function (feature) {
                features.push(feature);
            }, function () {
                done = true;
            });
            waitsFor(function () {
                return done;
            }, 2000);
            runs(function () {
                expect(features.length).toBeGreaterThan(1000);
            });
        });
    });

    describe('BAM with test_deletion_2_0.snps.bwa_align.sorted.grouped.bam', function () {
        var b;
        beforeEach(function () {
            b = new BAMStore({
                browser: new Browser({ unitTestMode: true }),
                bam: new XHRBlob('../data/test_deletion_2_0.snps.bwa_align.sorted.grouped.bam'),
                bai: new XHRBlob('../data/test_deletion_2_0.snps.bwa_align.sorted.grouped.bam.bai'),
                refSeq: { name: 'Chromosome', start: 1, end: 20000 }
            });
        });

        it('constructs', function () {
            expect(b).toBeTruthy();
        });

        it('loads some data', function () {
            var loaded;
            var features = [];
            var done;
            aspect.after(b, 'loadSuccess', function () {
                loaded = true;
            });
            b.getFeatures({ start: 17000, end: 18000 }, function (feature) {
                features.push(feature);
            }, function () {
                done = true;
            });
            waitsFor(function () {
                return done;
            }, 2000);
            runs(function () {
                expect(features.length).toEqual(124);
                //console.log( distinctBins(features) );
            });
        });

        it('check that seqlength == seq.length', function () {
            var loaded;
            var features = [];
            var done;
            aspect.after(b, 'loadSuccess', function () {
                loaded = true;
            });
            b.getFeatures({ start: 17000, end: 18000 }, function (feature) {
                features.push(feature);
            }, function () {
                done = true;
            });
            waitsFor(function () {
                return done;
            }, 2000);
            runs(function () {
                expect(array.every(features, function (feature) {
                    return feature.get('seq_length') == feature.get('seq').length;
                })).toBeTruthy();
            });
        });
    });

    describe('empty BAM', function () {
        var b;
        beforeEach(function () {
            b = new BAMStore({
                browser: new Browser({ unitTestMode: true }),
                bam: new XHRBlob('../data/empty.bam'),
                bai: new XHRBlob('../data/empty.bam.bai'),
                refSeq: { name: 'Chromosome', start: 1, end: 20000 }
            });
        });

        it('constructs', function () {
            expect(b).toBeTruthy();
        });

        it("returns no data, but doesn't crash", function () {
            var loaded;
            var features = [];
            var done;
            aspect.after(b, 'loadSuccess', function () {
                loaded = true;
            });
            b.getFeatures({ start: 0, end: 50000 }, function (feature) {
                features.push(feature);
            }, function () {
                done = true;
            });
            waitsFor(function () {
                return done;
            }, 2000);
            runs(function () {
                expect(features.length).toEqual(0);
            });
        });
    });

    describe('BAM with B tags', function () {
        var b;
        beforeEach(function () {
            b = new BAMStore({
                browser: new Browser({ unitTestMode: true }),
                bam: new XHRBlob('../data/Btag.bam'),
                bai: new XHRBlob('../data/Btag.bam.bai'),
                refSeq: { end: 1000000,
                    length: 1000000,
                    name: "chr1",
                    seqChunkSize: 80000,
                    start: 0
                }
            });
        });

        it('constructs', function () {
            expect(b).toBeTruthy();
        });

        it('loads some data', function () {
            var loaded;
            var features = [];
            var done;
            aspect.after(b, 'loadSuccess', function () {
                loaded = true;
            });
            b.getFeatures({ start: 980654, end: 981663 }, function (feature) {
                features.push(feature);
            }, function () {
                done = true;
            });
            waitsFor(function () {
                return done;
            }, 2000);
            runs(function () {
                //ZC:B:i,364,359,1,0	ZD:B:f,0.01,0.02,0.03	ZE:B:c,0,1,2,3	ZK:B:s,45,46,47
                var ret = features[1].get('ZD').split(",");
                expect(features[1].get('ZC')).toEqual("364,359,1,0");
                expect(features[1].get('ZE')).toEqual("0,1,2,3");
                expect(features[1].get('ZK')).toEqual("45,46,47");
                expect(Math.abs(+ret[0] - 0.01) < Number.EPSILON);
                expect(Math.abs(+ret[1] - 0.02) < Number.EPSILON);
                expect(Math.abs(+ret[2] - 0.03) < Number.EPSILON);
                expect(features.length).toEqual(2);
                //console.log( distinctBins(features) );
            });
        });
    });
    describe('BAM with tests/data/final.merged.sorted.rgid.mkdup.realign.recal.bam', function () {
        var b;
        beforeEach(function () {
            b = new BAMStore({
                browser: new Browser({ unitTestMode: true }),
                bam: new XHRBlob('../data/final.merged.sorted.rgid.mkdup.realign.recal.bam'),
                bai: new XHRBlob('../data/final.merged.sorted.rgid.mkdup.realign.recal.bam.bai'),
                refSeq: { end: 27682,
                    length: 27682,
                    name: "chr21_gl000210_random",
                    seqChunkSize: 80000,
                    start: 0
                }
            });
        });

        it('constructs', function () {
            expect(b).toBeTruthy();
        });

        it('loads some data', function () {
            var loaded;
            var features = [];
            var done;
            aspect.after(b, 'loadSuccess', function () {
                loaded = true;
            });
            b.getFeatures({ start: 16589, end: 18964 }, function (feature) {
                features.push(feature);
            }, function () {
                done = true;
            });
            waitsFor(function () {
                return done;
            }, 2000);
            runs(function () {
                expect(features.length).toEqual(281);
                //console.log( distinctBins(features) );
            });
        });
    });

    describe('BAM mismatch test', function () {
        var b;
        //Config workaround since we aren't directly instantiating anything with Browser/config
        var Config = declare(null, {
            constructor: function constructor() {
                this.config = { renderAlignment: { singleline: true } };
            }
        });
        //Use Config workaround
        var MismatchParser = declare([Config, MismatchesMixin, FeatureFiltererMixin]);
        //Use Config workaround
        var AlignmentParser = declare([Config, AlignmentsMixin, FeatureFiltererMixin]);

        it('resultTable test', function () {
            var parser = new AlignmentParser();
            var elt = dojo.create('div');
            var res = parser._renderTable(elt, new MismatchParser(), new SimpleFeature({ data: { id: "read162/ctgA:g2.t1", seq: "TACACAAGCACCGGGCGCGCGAGACACGATTGAATCCTTCAAACAGGGTTACTCGTTCGTGACAACCGATTACAGCATTCTTAACGTGGTACGTGCACAT", md: "77G18", cigar: "4S22M50N74M" } }));
            expect(res.val1).toEqual("TACACAAGCACCGGGCGCGCGAGACA..................................................CGATTGAATCCTTCAAACAGGGTTACTCGTTCGTGACAACCGATTACAGCATTCTTAACGTGGTACGTGCACAT");
            expect(res.val2).toEqual("    ||||||||||||||||||||||                                                  ||||||||||||||||||||||||||||||||||||||||||||||||||||||| ||||||||||||||||||");
            expect(res.val3).toEqual("....CAAGCACCGGGCGCGCGAGACANNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNCGATTGAATCCTTCAAACAGGGTTACTCGTTCGTGACAACCGATTACAGCATTCTGAACGTGGTACGTGCACAT");
        });
        it('resultTable test insertion', function () {
            var parser = new AlignmentParser();
            var elt = dojo.create('div');
            var res = parser._renderTable(elt, new MismatchParser(), new SimpleFeature({ data: { id: "ctgA_15155_15557_3:0:1_0:0:0_1dde", seq: "TTTAGTGGGACCCAATCGCAACCCTGCTCCCCTCCCTTACGCCTTATACACTTCAGTGTAAATTCATGCGTTCAGCGAACAACTGGACTTCTGTTGTACG", md: "11A45C41", cigar: "9M1I90M" } }));
            expect(res.val1).toEqual("TTTAGTGGGACCCAATCGCAACCCTGCTCCCCTCCCTTACGCCTTATACACTTCAGTGTAAATTCATGCGTTCAGCGAACAACTGGACTTCTGTTGTACG");
            expect(res.val2).toEqual("||||||||| || ||||||||||||||||||||||||||||||||||||||||||||| |||||||||||||||||||||||||||||||||||||||||");
            expect(res.val3).toEqual("TTTAGTGGG-CCAAATCGCAACCCTGCTCCCCTCCCTTACGCCTTATACACTTCAGTGCAAATTCATGCGTTCAGCGAACAACTGGACTTCTGTTGTACG");
        });

        it('resultTable test large deletion', function () {
            var parser = new AlignmentParser();
            var elt = dojo.create('div');
            var res = parser._renderTable(elt, new MismatchParser(), new SimpleFeature({ data: { seq: "TGATGAGGTCCCTACAAAATCCTATGCTCCCTGCGAATTACAACTCACAGTAAGAAGGGTCACTCTACCAGCGGGGTTAAATATACCGGCCGACTGTCTC", md: "50^agaacagcctaggctttcttagttattgatgcacattctactgacgaacgcagcattcgaactaaaccattggtaatgtaattgtgacacgtgggaatctatttaaagctgcaagaactccaccacgtgttcatccacatcggtctctgtggaatggtccaggaccgtcccaatagggggaattgcgagacccaactaatcgagtgattgaacatgggagcaattcccgaatagaaacttgcaacgcgcagtactacgacgatggtagcaataacgacgcgctacttcagctcatgggtctaaattagggcgaacgattgcacctaatctgctggcttctctagattgtagatccacagggccaattaacagtgcaaagaatagcgtcatatgattagtttgaaaataatatacatgaaaatcgagcacccgcatcaataagctacgagagtctttggagagtgccaatacacctagcacatgctgtgcttatgttatgaaaattcatacttgactaacgttagccaccagccgatggcgctgtcacaacgaccctgggttaccgtttagttctc50", cigar: "50M575D50M" } }));
            expect(res.val1).toEqual("TGATGAGGTCCCTACAAAATCCTATGCTCCCTGCGAATTACAACTCACAG-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------TAAGAAGGGTCACTCTACCAGCGGGGTTAAATATACCGGCCGACTGTCTC");
            expect(res.val2).toEqual("||||||||||||||||||||||||||||||||||||||||||||||||||                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               ||||||||||||||||||||||||||||||||||||||||||||||||||");
            expect(res.val3).toEqual("TGATGAGGTCCCTACAAAATCCTATGCTCCCTGCGAATTACAACTCACAGagaacagcctaggctttcttagttattgatgcacattctactgacgaacgcagcattcgaactaaaccattggtaatgtaattgtgacacgtgggaatctatttaaagctgcaagaactccaccacgtgttcatccacatcggtctctgtggaatggtccaggaccgtcccaatagggggaattgcgagacccaactaatcgagtgattgaacatgggagcaattcccgaatagaaacttgcaacgcgcagtactacgacgatggtagcaataacgacgcgctacttcagctcatgggtctaaattagggcgaacgattgcacctaatctgctggcttctctagattgtagatccacagggccaattaacagtgcaaagaatagcgtcatatgattagtttgaaaataatatacatgaaaatcgagcacccgcatcaataagctacgagagtctttggagagtgccaatacacctagcacatgctgtgcttatgttatgaaaattcatacttgactaacgttagccaccagccgatggcgctgtcacaacgaccctgggttaccgtttagttctcTAAGAAGGGTCACTCTACCAGCGGGGTTAAATATACCGGCCGACTGTCTC");
        });

        it('resultTable long read', function () {
            var parser = new AlignmentParser();
            var elt = dojo.create('div');
            var res = parser._renderTable(elt, new MismatchParser(), new SimpleFeature({
                data: {
                    seq: "TAAGGGCAAGTGGCCGCAACAACTGCGATTACTGACCAACTTGAGTGAGAACTAAGCCTTGAAGCATAGTAGTTGCAATGTTGTAGAAAAGTATACATGTGACAAAAGACAGGGCCTGGTGTCAAGTGTCCTCAGTGATCTGGATAATCATCACGCCTTGTTAGCAGGATTTACCCGCATAGTAATGGCCGGACTTTATATTGCCCTGCTGCGCTAGCTAGTACTGCGGAGGCTCTCTCCCCCTAATTGATATCCGGGCAAGAATGCGCGGGTAGTCAGCATTCATGTCAGTGCTTCTATCAACGTCCTCATTCACCTTGGAAGTGTTGACCTACAGTGTTAAGAGGCAATGTAGCCCGAGACGCCCGTTCAAAGACAAAGCTCCCTGTAATTAAACAGACACCGGTTATGGAGAGTGTGAGTAAGTGACTTCCGACCAGTGTTTGGTATTACAGCCTGGTCCGGTTAACCTCGCAGGGCTAGGAGAATGAGCGCTAGATAGGTGATTACCGAAGTCTCCCCAAAAGGGAACAGTCTTATTAGAGTAGAGAATGTCAAATAGCGTTTATTGAGTTCTGTCTACTGCCCTACCAAGAGCATGCACCAGAGATGCGTCGCAGTCGTAGCGGTAGACGTCGTAATGACCCAGGTGGCGTTCGCGACCTATTCGCGTCGGACGCGCGCGCTACTACAACGAAGGGGTCTGAAAGTGCATGTTCACACTGAAATTCTAGTGTTAGTAAACAAACGCGTGTATTCCAGGGTCGTGTGTGACATTATATGGCTGTCTGCGCCCCTCAATGATCATCCAAGACGTTCAATTGTATCGTTAACGTAGATATCAGGTTTACGTTATCCGTATACTTATTTACGCCGCGCGCTTGAACAGATTCTCCTAACAGCCCTCGCGGTTTCAAAAAGAATCCAAAGTCTACGTACCATCCTTGTTCCAATTCTGCCTGGTTGCGGAGAAAAGATCCGCCTCCGATTACGTACCCGACTCGGTATTGGTAAGTGGGGAAGCAGTCGAACGCATATTTCTTGTTGGTTATATCACAGGCCACGTTTATATCCGGAAGTGGCCGGGATTACGATTTGACGTTCTATCCCCGAGAGCGCATTCTTGTTTGTTACGTACTACCACGCGGGCGCTTCTTATTCCCAGACCAGAGGGAATGTGCGGAAGCTTCTTTCCACAGATTGGCGGAACTTCCGCGTGCTTAGTGCAGGCGGAGAACGTCCGTTCAGTGGTGCGGCTTTATTTTCAATCTGACCCGACCTGCGCTCAAGAGTTGACTAAGTTGTTGTGCGCCCCGAGTAATAGGCGACTCGTCGCAATGGGTCTGGTACATTTAGCATTTTCATCGGTACTGGCGCTTCATAAAGTGCGGCAAATTTCTCACCCCAGTACTCATGTTTATTAGGGTATCAGGACCCGAAGCTTCTCTGTTCCAAAGAAATGTACTGTTTGCTCCCCTGTCCATCATTTGGAGGAGATCACTTGTGGATTCATGCAATGATGAATGATAAGTTTGGTGCTCCCCACCCGGGGCGCTCTCCAAAAGAGTGAGCAATTTGAACATTTAAATTGCTATTCCAACCCGGAGTCCTGACCGGAACAGTAATGAAACTTCAACCATGCCGTGACAGACTAGAAGAAGGGAAAGTGCTTGTATATGGGAGTAAAATGATGTTGGTGCCGTAATGGTGCCGGGAAGTACTATAGACGCATGTCGTGACGCACCGAGGTAGGCAGTGCTATAATCGTACTGATCCTTCAGGCGCCGCCGGACCTACGAAGCTGAGATTAGACACCGGCACACTAGCCCCGTCAGCGACGGCTGCGCGGCCGTAGCCCTGCAGCGGAATGGGGCTAACACGCATAAACGCCCGCATAACCACTCGAGTCTACGGGAGATTCACTCAGGCTGTTTGCTTCGAACGTGTAGTCTCATTACATAATTCATAATACCTCCAAGACCAACGGCTGCTCATGACTCTCTTACCTTGTTAGAGGACATTTCGGCACTAGGGAAGAGTACTGAGGACTTTGAAAACGTCGATAAAACCATCGCGGGAACTAGACTAGCGTTAGACACTCCATATTTTACGGGTCGCAAGCTTGAGGTCACTGTCCCGGCCAGCTGCAAGTGCTACGGCAGGAGGGGATCTACCTAACGTGCAGTAAACGAGCCCTTGCCCAGTAATGAGGCGTACTCCGTCTCTAATCGTCAGTAAGTTACATGTCCGAGGACGCCCTCTACGAGTTGAACTCTGGCTACGGCACCACCTGTCGCGCGCCCTGCTCGGGTCCCCATCTTGCTTATCCAAACTCACCTCGCCTTACGGAATCTCTGGTTGCCAGTCATCCGATGGTCATTGAAGCAGCCGTGGTACATCGTAGCCAGATACTTCCAGGGCGGCCAGCCATATTCCTACAGCCAAGTCGGCTGCATAATTACAGCGCCTGGCACGGACTAATACGATCCCACAAGCCTGGTAGATGACCCTTAGACACCTAAAGCGCCCTCTGACCTATCTGCACGTGATACTTGATTTTTTGTCAATGAGCGGACAGGTAGATGACTAATATCACAGGTGTCGTCTAGGTTTGCACAATGTCAGCACGACTCATCCCGCAAGGCCCGGACGGCTGACTCACATCAGCTAGCTCCATCTCCCTCAGCAGCACTAAGATTCCCACGTGACCAGGGCGACGGGCCTCAGCCAAACGTATCCTTGATATCTACTTAAGTCAAGGTTGACTCCGAACCCTATGGGTCGGTAGCCGTTAACAGGGAGTCTATATCTCGGCGTTCCATTGCTTGTTTCAAACTACTGCTATAAGGTGAAAGCGCTGGAGGGCATAGTATTATGCCCAAAGTTGCGCGTAGATCCGTCGGGATATGTTGCTATAATAAGGACTGCTTCGAGAGTAGGCGGTAACGGCCTCCCGCCTTCAGTGGCGCGGAACATCGAATCGGAGTTACAAGCGACTTGACCGATGTCATGATCCAAGTTTATGTTACCCGATCGGATCCGGATGCTCGATCGTGCGACGAGGTCGGAAAGACGGACGAAATACGATTCAACCGCGCGCAACTCATTAGCATCTAACCTTTAGCCTCACATGGGTGTTAACGTGGTGGGCTCACTCGGCGTACTCTTTGTGCACTATTCGCGTATAGAACAACAGCTCAAGTTGCGACATGATGCTCTTACGTGATTCCCACAGTTTCCCACCTCAGGATGCTTTCTTTAGCTAAAAGCCCAATAGTTATGGGCGGCACCTTCCAGACTCCCACGAGGACGGCTATGACGTTGCTAAACCATCGCCGCCAAAGGCTAGCGCTAACGAGTTCTGTGAGTTTGTTCCGGGCCAGATCTCCAGAGATGGTCGCAACAACGCAGTACCGGTCTTTATACTGGTGACCCTCTACCTGTATTAAGTTAAGCGTTGTCCTACGTACATGGTCGTGAGTACCTCGCGTAGCTCAAACGCCAACGGCACTAGCAGCGAGAATTATTGTCGCGATACTTACTACAATACTTTACCCGATATTGACGTGCAGGGTTGAAAGACGATGGGACAGTTGAATATCCTATTTTGACGGAATCCTCAAAACTCCCTCCACCTCAGGTACGGCCCTGTCCGGGACCGCATTCTTGCATATATTGGGTCCCAGAGCGTATCTAAGTTAGTTCTCTTGACCGTTCACCGACTCATAGGGCGACTCGTTATCGCCCTCCGAAACCGATAGCTTCGTTACCTCAGAATGATGACAGAGCCTGTAACGTAGAGTGATCCCAATCTCACTCGTGCCTTGTCCACCGTTCCGTGAAGACGAAGCAATACGCGGAATACGTGGCTTCGTAATATTTTGACGATATGGGGGCTGGGACGCGTCAAGACTTCCATGACAAACAAAGTGAAGAGCAACTGCATACCCTCATCATGAGTCACTATTACCAGAGGTAGCGATGGAAACGCTAATTTGGGTCAGGGCAGCTATCGCAGTCCCGCAGGTGTAGGCGCGAAGACTTTTTCTTTTGTTGCGGAGTTGATCAAGGTAATCTCACGGTATAAGCACGGTTATTTACGCCAAGCGACGTCCCTGGGAGATCCGCCCACGTAGGGACCCCATAATCCATAAATGACCTGCGTCGAAACCTTCATATCGTGACAGAACCGCTTTCCTAGGGATGACGGTCCCCGCATTCAGAGTTCTGACTTTGGCCAGCGTGTAGACTTAACAACTCCACTTACGCGGTACATTGAAGTCCCGTTCAGTCCAGTGTGACCTGTGTACTCGAATAACGTGTAGACCAGCGCGTCTACGACTTAGCGCGGCTCCACTCCAAGAGCACCTTTTGGAACTTTCGCAACGAGCGCTGTTGGCCGTTAAGCGGTATTTCACAAATAGATCACCCTAGTGTCGGTAAACCGACTACCCTATTGGGATCATCGTGAGCTCGAAACACTAGAGGCGGACCAACGGATATGACATTGATTCGGCTCTACAGAGCTTTCGCCCAGAGGAAAAACTGTGGCAATCTACGCTCGCGGGGGAATTGACTTTAGCGGCCCCTTAGACAGGTGTGGGACACTAGTCTAGATTCACGTCCTACACGACATAACAGCACTTCCTGGCCAGCCCAGAAATAGTACCTGGACGACATCCAGCCTTCCGACGCCATAATGTGGAGCCGTAGCGCCCACGACGATCAACGAGGAGAAATTTACAAAAGGCTGTGTGAATGCTACGTCGTCTACCATTGCCTCATCGAAACGAACGCAACGCACAGCATACAACGTTTTACCATGCCGGAGCGGGATTCCTCAAGTACAGAAGAACAGAGGTCTAAACATGATCCTGAACAAATCGGTGGTTTACACAGCTACCTCAGTCGCATTGGCGTACTGCATCGATCGTGCTTAATCTACGGTCATGCCGGCCCGCGATGCACGTACGAATGGAATACCCTGTCTGCCCCCGCGCGAGTTACGCTGTCTCGCACATACCGAGCACTTGTCGTTCGAAGCTAAACTATGAGCCCACCGAGCTCCTTATGGCCGCAACCGCGGTGCGGCCAGCTGATAAATTTCCACAGAACACGATCCTCGTGTAAGATCTCGCGGCATAGTAAGTCATTTTCACATGGTTAGGAGAGATAGAATACATGGTTCTGGTAGCTCAACCAGGCATTTGTGGAACCACTTGGCCCTTGGTGAGTGCTAACAATAAAATTCTCCGTATGGGACCAACCAAAGGGTGCTGGATGTGACTTCCCGGCCCAGGTTAGATGTCCATATCATTCATATCATTGCCCGACCGACCCAATGCCTACAATCGATGATGGCGCCTTAGCTAGTTCTTGAGTGTGCCACGTGCCGGCCACGCAGACACGACCCTGCGGCGAGTGATCACCATTACCGGGATTGGCATCGAAGTCTTTTTCTGGGAAGTTAGCCAGTTGAGTGTGCGGTGGCTTAGAATCTCTATTCCCACGTCAAACGCCCCTGGGACGATATTGCTTAACCCTAGTTGGCCACCACCGGAACCATCTTACGGGAGAGCTAGAGCACAGATCCGAGGTTAGATATGTTAGCGTCTCTCGTGAGTCTGAAATGTATCACTTCACCGCGAGAATAGCGCGAATGTCTGTTTGCCCTGGACCATGACGGATTGGCTTAAAAGCACGCTAGTAGCATTTTGGTACGGTTTCCGATCCCGCGATCGTAATTACCTATCTAGGTTATCGCTAG",
                    md: "24^a196^g7^t15^t60^c163^t24^c4^g61a14^c1^c97^t29^a145^g64^c111^c142^a41^t10^t26^g171^g22^t25^a40^g9^ta95^t16^a34^g81a45^c31^a297^c44^t65^a19^t98^c114^a18^g53^g19^t179c121^a81^t118^a152^t110^t9^c180^a38^t79^t212^t35^c92^a38^g191^a12g127^t21^g111^c237^a165^g24^t27^t255^t95^t70g120^a15^a23t36",
                    cigar: "7=1I9=1I8=1D10=2I32=1I4=1I20=1I10=1I37=1I83=1I1D7=1D8=1I7=1D7=1I30=1I14=1I9=1D6=1I3=1I8=1I6=1I19=1I17=1I5=1I1=1I23=1I10=1I24=1I2=1I6=1I2=1I31=1D5=1I19=1D3=1I1=1D17=1I25=1I19=1X14=1D1=1D26=1I30=1I1=1I36=1I4=1D29=1D45=2I30=1I17=1I22=1I15=1I16=1D40=1I10=2I14=1D27=1I8=1I1=1I53=3I22=1D6=1I12=1I47=1I54=1I20=1I3=1D41=1D10=1D25=1I1=1D3=1I1=1I14=1I40=2I16=1I26=1X21=1I49=1D14=1I1=1I7=1D16=1I9=1D7=1I18=1I12=1I3=1D9=2D72=1I23=1D16=1D30=1I4=1D8=1I18=1I1=1I20=1I2=1I32=1X35=1I10=1D1=1I10=1I20=1D22=1I8=1I15=1I8=1I20=1I51=1I24=2I43=1I2=1I8=1I33=1I10=1I44=1I9=1D1I5=1I15=1I24=1D15=1I22=1I3=1I9=1I16=1D7=1I11=1I1=1D48=1I7=1I17=1I1=1X4=1I7=1I13=1D1I1=2I6=1I28=1I6=1I31=1I1=1I41=1D2=1I3=1I13=1D15=1I5=1I21=1I3=1I2=1I1=1I6=1D19=1D7=1I122=1I50=1X33=1I37=1I18=1I5=1I14=1I14=1D10=1I15=1I2=1I11=1I5=1I38=1D3=1I14=1I30=1I3=1I25=1I43=1D7=1I5=1I9=1I67=1I3=1I14=1I9=1I38=1D59=1I26=1I25=1D9=1D31=1I8=1I10=2I2=1I41=1I31=1I5=1I13=1I39=1D36=1I2=1D21=1I22=1I28=1I4=1I4=1D10=1I1=1I9=1I1=1I10=1I95=1I9=1I40=1I12=1I15=1I10=1D12=1I18=1I5=1I1D11=1I1=1I19=1I7=1I2=1I33=1I19=1D15=1I18=1I2=1I3=1D34=1I8=1I22=1I15=1I36=1I1=1I25=1I50=1I1D1I12=1X6=1I8=1I51=1I56=2I6=1D21=1D4=1I5=1I29=1I20=1I53=1D59=1I42=1I33=1I36=1I19=1I14=1I22=1I12=1D18=1I3=1I28=2I34=1I55=1I27=1D22=1I2=1D21=1I6=1D1=1I23=1I14=1I51=1I12=1I21=1I23=1I58=1I25=1I4=1I1=1I2=1I20=1D12=1I22=1I21=1I40=1D1=1I10=1I10=1I8=1I20=1I5=1I11=1I5=1I1X13=1I8=1I4=1I2=1I1=1I6=1I19=1I30=1I6=1I24=2I7=1D13=1I2=1D4=1I16=1I3=1X4=1I5=1I27="
                }
            }));
            expect(res.val1).toEqual("TAAGGGCAAGTGGCCGCAACAACTGC-GATTACTGACCAACTTGAGTGAGAACTAAGCCTTGAAGCATAGTAGTTGCAATGTTGTAGAAAAGTATACATGTGACAAAAGACAGGGCCTGGTGTCAAGTGTCCTCAGTGATCTGGATAATCATCACGCCTTGTTAGCAGGATTTACCCGCATAGTAATGGCCGGACTTTATATTGCCCTGCTGCGCTAGCTAGTACTGCGGA-GGCTCTC-TCCCCCTAATTGATAT-CCGGGCAAGAATGCGCGGGTAGTCAGCATTCATGTCAGTGCTTCTATCAACGTCCTCATTCAC-CTTGGAAGTGTTGACCTACAGTGTTAAGAGGCAATGTAGCCCGAGACGCCCGTTCAAAGACAAAGCTCCCTGTAATTAAACAGACACCGGTTATGGAGAGTGTGAGTAAGTGACTTCCGACCAGTGTTTGGTATTACAGCCTGGTCCGGTTAACCTCGCAGGGCTAGGAGAATGAGC-GCTAGATAGGTGATTACCGAAGTCT-CCCCA-AAAGGGAACAGTCTTATTAGAGTAGAGAATGTCAAATAGCGTTTATTGAGTTCTGTCTACTGCCCTACCAAGAGCATG-C-ACCAGAGATGCGTCGCAGTCGTAGCGGTAGACGTCGTAATGACCCAGGTGGCGTTCGCGACCTATTCGCGTCGGACGCGCGCGCTACTACAACGAAGGGGT-CTGAAAGTGCATGTTCACACTGAAATTCT-AGTGTTAGTAAACAAACGCGTGTATTCCAGGGTCGTGTGTGACATTATATGGCTGTCTGCGCCCCTCAATGATCATCCAAGACGTTCAATTGTATCGTTAACGTAGATATCAGGTTTACGTTATCCGTATACTTATTTACGCCGCGCGCTT-GAACAGATTCTCCTAACAGCCCTCGCGGTTTCAAAAAGAATCCAAAGTCTACGTACCATCCTTGTTC-CAATTCTGCCTGGTTGCGGAGAAAAGATCCGCCTCCGATTACGTACCCGACTCGGTATTGGTAAGTGGGGAAGCAGTCGAACGCATATTTCTTGTTGGTTATATCACAGGCCACGTT-TATATCCGGAAGTGGCCGGGATTACGATTTGACGTTCTATCCCCGAGAGCGCATTCTTGTTTGTTACGTACTACCACGCGGGCGCTTCTTATTCCCAGACCAGAGGGAATGTGCGGAAGCTTCTTTCCACAGATTGGCGGAACTTCC-GCGTGCTTAGTGCAGGCGGAGAACGTCCGTTCAGTGGTGCG-GCTTTATTTT-CAATCTGACCCGACCTGCGCTCAAGAG-TTGACTAAGTTGTTGTGCGCCCCGAGTAATAGGCGACTCGTCGCAATGGGTCTGGTACATTTAGCATTTTCATCGGTACTGGCGCTTCATAAAGTGCGGCAAATTTCTCACCCCAGTACTCATGTTTATTAGGGTATCAGGACCCGAAGCTTCTCTGTTCCAAAGAAATGTACTGTTT-GCTCCCCTGTCCATCATTTGGAGG-AGATCACTTGTGGATTCATGCAATGA-TGAATGATAAGTTTGGTGCTCCCCACCCGGGGCGCTCTCCAAA-AGAGTGAGC--AATTTGAACATTTAAATTGCTATTCCAACCCGGAGTCCTGACCGGAACAGTAATGAAACTTCAACCATGCCGTGACAGACTAGAAGAAGGGAAAGT-GCTTGTATATGGGAGT-AAAATGATGTTGGTGCCGTAATGGTGCCGGGAAGT-ACTATAGACGCATGTCGTGACGCACCGAGGTAGGCAGTGCTATAATCGTACTGATCCTTCAGGCGCCGCCGGACCTACGAAGCTGAGATTAGACACCGGCACACTAGCCCCGTCAGCGACGGCTGCGCGGCCG-TAGCCCTGCAGCGGAATGGGGCTAACACGCATA-AACGCCCGCATAACCACTCGAGTCTACGGGAGATTCACTCAGGCTGTTTGCTTCGAACGTGTAGTCTCATTACATAATTCATAATACCTCCAAGACCAACGGCTGCTCATGACTCTCTTACCTTGTTAGAGGACATTTCGGCACTAGGGAAGAGTACTGAGGACTTTGAAAACGTCGATAAAACCATCGCGGGAACTAGACTAGCGTTAGACACTCCATATTTTACGGGTCGCAAGCTTGAGGTCACTGTCCCGGCCAGCTGCAAGTGCTACGGCAGGAGGGGATCTACCTAACGTGCAGTAAACGAGCCC-TTGCCCAGTAATGAGGCGTACTCCGTCTCTAATCGTCAGTAAGTTAC-ATGTCCGAGGACGCCCTCTACGAGTTGAACTCTGGCTACGGCACCACCTGTCGCGCGCCCTGCTCGGGT-CCCCATCTTGCTTATCCAAAC-TCACCTCGCCTTACGGAATCTCTGGTTGCCAGTCATCCGATGGTCATTGAAGCAGCCGTGGTACATCGTAGCCAGATACTTCCAGGGCGGCCAGCCATATTCC-TACAGCCAAGTCGGCTGCATAATTACAGCGCCTGGCACGGACTAATACGATCCCACAAGCCTGGTAGATGACCCTTAGACACCTAAAGCGCCCTCTGACCTATCTGCACGTGATACTTGATT-TTTTGTCAATGAGCGGACAG-GTAGATGACTAATATCACAGGTGTCGTCTAGGTTTGCACAATGTCAGCACGACTCATCC-CGCAAGGCCCGGACGGCTG-ACTCACATCAGCTAGCTCCATCTCCCTCAGCAGCACTAAGATTCCCACGTGACCAGGGCGACGGGCCTCAGCCAAACGTATCCTTGATATCTACTTAAGTCAAGGTTGACTCCGAACCCTATGGGTCGGTAGCCGTTAACAGGGAGTCTATATCTCGGCGTTCCATTGCTTGTTTCAAACTACTGCTATAAGGTGAAAGCGCTGGAGGGCATAGTATTATGCCCAAAGTTGCGCGTAGATCCGTCGGGATATGTTGCTATAATAAGGACTGCTTCGAGAGTAGGCGGTAACGGCCTCCCGCCTTCAGT-GGCGCGGAACATCGAATCGGAGTTACAAGCGACTTGACCGATGTCATGATCCAAGTTTATGTTACCCGATCGGATCCGGATGCTCG-ATCGTGCGACGAGGTCGGAAAGACGGACGAAATACGATTCAACCGCGCGCAACTCATTAGCATCTAACCTTTAGCCTCACATGGGTGTTAACGTGGTGGGCTCACTCGGCGTACTCTTTGTGC-ACTATTCGCGTATAGAACAACAGCTCAAGTTGCGACATGATGCTCTTACGTGATTCCCACAGTTTCCCACCTCAGGATGCTTTCTTTAGCTAAAAGCCCAATAGTTATGGGCGGCACCTTCCAGACTCCCACGAGGACGGCTATGACGTTGCTAAACCA-TCGCCGCCAAAGGCTAGCGCTAACGAGTTCTGTGAGTTTGTTCCGGGCCAGATCTCCAGAGATGGTCGCAACAACGCAGTACCGGTCTTTATACTGGTGACCCTCTACCTGT-ATTAAGTTA-AGCGTTGTCCTACGTACATGGTCGTGAGTACCTCGCGTAGCTCAAACGCCAACGGCACTAGCAGCGAGAATTATTGTCGCGATACTTACTACAATACTTTACCCGATATTGACGTGCAGGGTTGAAAGACGATGGGACAGTTGAATATCCTATTTTGACGGAATCCTCAAAACTCCCTCCACCTCAGGT-ACGGCCCTGTCCGGGACCGCATTCTTGCATATATTGGGT-CCCAGAGCGTATCTAAGTTAGTTCTCTTGACCGTTCACCGACTCATAGGGCGACTCGTTATCGCCCTCCGAAACCGATAGCTT-CGTTACCTCAGAATGATGACAGAGCCTGTAACGTAGAGTGATCCCAATCTCACTCGTGCCTTGTCCACCGTTCCGTGAAGACGAAGCAATACGCGGAATACGTGGCTTCGTAATATTTTGACGATATGGGGGCTGGGACGCGTCAAGACTTCCATGACAAACAAAGTGAAGAGCAACTGCATACCCTCATCATGAGTCACTATTACCAGAGGTAGCGATGGA-AACGCTAATTTGGGTCAGGGCAGCTATCGCAGTCCCGC-AGGTGTAGGCGCGAAGACTTTTTCTTTTGTTGCGGAGTTGATCAAGGTAATCTCACGGTATAAGCACGGTTATTTACGCCAAGCGACGTCCCTGGGAG-ATCCGCCCACGTAGGGACCCCATAATCCATAAATGACCTGC-GTCGAAACCTTCATATCGTGACAGAACCGCTTTCCTAGGGATGACGGTCCCCGCATTCAGAGTTCTGACTTTGGCCAGCGTGTAGACTTAACAACTCCACTTACGCGGTACATTGAAGTCCCGTTCAGTCCAGTGTGACCTGTGTACTCGAATAACGTGTAGACCAGCGCGTCTACGACTTAGCGCGGCTCCACTCCAA-GAGCACCTTTTGGAACTTTCGCAACGAGCGCTGTTGGCCGTTAAGCGGTATTTCACAAATAGATCACCCTAGTGTCGGTAAACCGACTACCCTATTGGGATCATCGTGAGCTCGAAACACTAGAGGCGGACCAACGGATATGACAT-TGATTCGGCTCTACAGAGCTT-TCGCCCAGAGGAAAAACTGTGGCAATCTACGCTCGCGGGGGAATTGACTTTAGCGGCCCCTTAGACAGGTGTGGGACACTAGTCTAGATTCACGTCCTACACGACATAACAGCAC-TTCCTGGCCAGCCCAGAAATAGTACCTGGACGACATCCAGCCTTCCGACGCCATAATGTGGAGCCGTAGCGCCCACGACGATCAACGAGGAGAAATTTACAAAAGGCTGTGTGAATGCTACGTCGTCTACCATTGCCTCATCGAAACGAACGCAACGCACAGCATACAACGTTTTACCATGCCGGAGCGGGATTCCTCAAGTACAGAAGAACAGAGGTCTAAACATGATCCTGAACAAATCGGT-GGTTTACACAGCTACCTCAGTCGCATTGGCGTACTGCATCGATCGTGCTTAATCTACGGTCATGCCGGCCCGCGATGCACGTACGAATGGAATACCCTGTCTGCCCCCGCGCGAGTTACGCTGTCTCGCACATACCGAGCACTTGTCGTTCGAAGCTAAACTATGAGCCCA-CCGAGCTCCTTATGGCCGCAACCGC-GGTGCGGCCAGCTGATAAATTTCCACAG-AACACGATCCTCGTGTAAGATCTCGCGGCATAGTAAGTCATTTTCACATGGTTAGGAGAGATAGAATACATGGTTCTGGTAGCTCAACCAGGCATTTGTGGAACCACTTGGCCCTTGGTGAGTGCTAACAATAAAATTCTCCGTATGGGACCAACCAAAGGGTGCTGGATGTGACTTCCCGGCCCAGGTTAGATGTCCATATCATTCATATCATTGCCCGACCGACCCAATGCCTACAATCGATGATGGCGCCTTAGCTAGTTCTTG-AGTGTGCCACGTGCCGGCCACGCAGACACGACCCTGCGGCGAGTGATCACCATTACCGGGATTGGCATCGAAGTCTTTTTCTGGGAAGTTAGCCAGTT-GAGTGTGCGGTGGCTTAGAATCTCTATTCCCACGTCAAACGCCCCTGGGACGATATTGCTTAACCCTAGTTGGCCACCACCGGAACCATCTTACGGGAGAGCTAGAGCACAGATCCGAGGTTAGATATGTTAGCGTCTCTCGTGAGTCTGAAATGTATCACTTCACCGCGAGAATAGCGCGAATGTCTGTTTGCCCTGGACCATGACGGA-TTGGCTTAAAAGCACG-CTAGTAGCATTTTGGTACGGTTTCCGATCCCGCGATCGTAATTACCTATCTAGGTTATCGCTAG");
            expect(res.val2).toEqual("||||||| ||||||||| |||||||| ||||||||||  |||||||||||||||||||||||||||||||| |||| |||||||||||||||||||| |||||||||| ||||||||||||||||||||||||||||||||||||| |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||  ||||||| |||||||| ||||||| ||||||| |||||||||||||||||||||||||||||| |||||||||||||| ||||||||| |||||| ||| |||||||| |||||| ||||||||||||||||||| ||||||||||||||||| ||||| | ||||||||||||||||||||||| |||||||||| |||||||||||||||||||||||| || |||||| || ||||||||||||||||||||||||||||||| ||||| ||||||||||||||||||| ||| | ||||||||||||||||| ||||||||||||||||||||||||| ||||||||||||||||||| |||||||||||||| | |||||||||||||||||||||||||| |||||||||||||||||||||||||||||| | |||||||||||||||||||||||||||||||||||| |||| ||||||||||||||||||||||||||||| |||||||||||||||||||||||||||||||||||||||||||||  |||||||||||||||||||||||||||||| ||||||||||||||||| |||||||||||||||||||||| ||||||||||||||| |||||||||||||||| |||||||||||||||||||||||||||||||||||||||| ||||||||||  |||||||||||||| ||||||||||||||||||||||||||| |||||||| | |||||||||||||||||||||||||||||||||||||||||||||||||||||   |||||||||||||||||||||| |||||| |||||||||||| ||||||||||||||||||||||||||||||||||||||||||||||| |||||||||||||||||||||||||||||||||||||||||||||||||||||| |||||||||||||||||||| ||| ||||||||||||||||||||||||||||||||||||||||| |||||||||| ||||||||||||||||||||||||| | ||| | |||||||||||||| ||||||||||||||||||||||||||||||||||||||||  |||||||||||||||| |||||||||||||||||||||||||||||||||||||||||||||||| ||||||||||||||||||||||||||||||||||||||||||||||||| |||||||||||||| | ||||||| |||||||||||||||| ||||||||| ||||||| |||||||||||||||||| |||||||||||| ||| |||||||||  |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| ||||||||||||||||||||||| |||||||||||||||| |||||||||||||||||||||||||||||| |||| |||||||| |||||||||||||||||| | |||||||||||||||||||| || |||||||||||||||||||||||||||||||| ||||||||||||||||||||||||||||||||||| |||||||||| | |||||||||| |||||||||||||||||||| |||||||||||||||||||||| |||||||| ||||||||||||||| |||||||| |||||||||||||||||||| ||||||||||||||||||||||||||||||||||||||||||||||||||| ||||||||||||||||||||||||  ||||||||||||||||||||||||||||||||||||||||||| || |||||||| ||||||||||||||||||||||||||||||||| |||||||||| |||||||||||||||||||||||||||||||||||||||||||| |||||||||  ||||| ||||||||||||||| |||||||||||||||||||||||| ||||||||||||||| |||||||||||||||||||||| ||| ||||||||| |||||||||||||||| ||||||| ||||||||||| | |||||||||||||||||||||||||||||||||||||||||||||||| ||||||| ||||||||||||||||| |||||| ||||||| |||||||||||||  |  |||||| |||||||||||||||||||||||||||| |||||| ||||||||||||||||||||||||||||||| | ||||||||||||||||||||||||||||||||||||||||| || ||| ||||||||||||| ||||||||||||||| ||||| ||||||||||||||||||||| ||| || | |||||| ||||||||||||||||||| ||||||| |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| |||||||||||||||||||||||||||||||||||||||||||||||||| ||||||||||||||||||||||||||||||||| ||||||||||||||||||||||||||||||||||||| |||||||||||||||||| ||||| |||||||||||||| |||||||||||||| |||||||||| ||||||||||||||| || ||||||||||| ||||| |||||||||||||||||||||||||||||||||||||| ||| |||||||||||||| |||||||||||||||||||||||||||||| ||| ||||||||||||||||||||||||| ||||||||||||||||||||||||||||||||||||||||||| ||||||| ||||| ||||||||| ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| ||| |||||||||||||| ||||||||| |||||||||||||||||||||||||||||||||||||| ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| |||||||||||||||||||||||||| ||||||||||||||||||||||||| ||||||||| ||||||||||||||||||||||||||||||| |||||||| ||||||||||  || ||||||||||||||||||||||||||||||||||||||||| ||||||||||||||||||||||||||||||| ||||| ||||||||||||| ||||||||||||||||||||||||||||||||||||||| |||||||||||||||||||||||||||||||||||| || ||||||||||||||||||||| |||||||||||||||||||||| |||||||||||||||||||||||||||| |||| |||| |||||||||| | ||||||||| | |||||||||| ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| ||||||||| |||||||||||||||||||||||||||||||||||||||| |||||||||||| ||||||||||||||| |||||||||| |||||||||||| |||||||||||||||||| |||||  ||||||||||| | ||||||||||||||||||| ||||||| || ||||||||||||||||||||||||||||||||| ||||||||||||||||||| ||||||||||||||| |||||||||||||||||| || ||| |||||||||||||||||||||||||||||||||| |||||||| |||||||||||||||||||||| ||||||||||||||| |||||||||||||||||||||||||||||||||||| | ||||||||||||||||||||||||| ||||||||||||||||||||||||||||||||||||||||||||||||||   |||||||||||| |||||| |||||||| ||||||||||||||||||||||||||||||||||||||||||||||||||| ||||||||||||||||||||||||||||||||||||||||||||||||||||||||  |||||| ||||||||||||||||||||| |||| ||||| ||||||||||||||||||||||||||||| |||||||||||||||||||| ||||||||||||||||||||||||||||||||||||||||||||||||||||| ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| |||||||||||||||||||||||||||||||||||||||||| ||||||||||||||||||||||||||||||||| |||||||||||||||||||||||||||||||||||| ||||||||||||||||||| |||||||||||||| |||||||||||||||||||||| |||||||||||| |||||||||||||||||| ||| ||||||||||||||||||||||||||||  |||||||||||||||||||||||||||||||||| ||||||||||||||||||||||||||||||||||||||||||||||||||||||| ||||||||||||||||||||||||||| |||||||||||||||||||||| || ||||||||||||||||||||| |||||| | ||||||||||||||||||||||| |||||||||||||| ||||||||||||||||||||||||||||||||||||||||||||||||||| |||||||||||| ||||||||||||||||||||| ||||||||||||||||||||||| |||||||||||||||||||||||||||||||||||||||||||||||||||||||||| ||||||||||||||||||||||||| |||| | || |||||||||||||||||||| |||||||||||| |||||||||||||||||||||| ||||||||||||||||||||| |||||||||||||||||||||||||||||||||||||||| | |||||||||| |||||||||| |||||||| |||||||||||||||||||| ||||| ||||||||||| |||||  ||||||||||||| |||||||| |||| || | |||||| ||||||||||||||||||| |||||||||||||||||||||||||||||| |||||| ||||||||||||||||||||||||  ||||||| ||||||||||||| || |||| |||||||||||||||| ||| |||| ||||| |||||||||||||||||||||||||||");
            expect(res.val3).toEqual("TAAGGGC-AGTGGCCGC-ACAACTGCaGATTACTGAC--ACTTGAGTGAGAACTAAGCCTTGAAGCATAGT-GTTG-AATGTTGTAGAAAAGTATAC-TGTGACAAAA-ACAGGGCCTGGTGTCAAGTGTCCTCAGTGATCTGGAT-ATCATCACGCCTTGTTAGCAGGATTTACCCGCATAGTAATGGCCGGACTTTATATTGCCCTGCTGCGCTAGCTAGTACTGCGG-gGGCTCTCtTCCCCCTA-TTGATATtCCGGGCA-GAATGCGCGGGTAGTCAGCATTCATGTCAG-GCTTCTATCAACGT-CTCATTCACcCTTGGA-GTG-TGACCTAC-GTGTTA-GAGGCAATGTAGCCCGAGA-GCCCGTTCAAAGACAAA-CTCCC-G-AATTAAACAGACACCGGTTATGG-GAGTGTGAGT-AGTGACTTCCGACCAGTGTTTGGT-TT-CAGCCT-GT-CGGTTAACCTCGCAGGGCTAGGAGAATGAGCtGCTAG-TAGGTGATTACCGAAGTCTcCCC-AgAAAGGGAACAGTCTTAT-AGAGTAGAGAATGTCAAATAGCGTT-ATTGAGTTCTGTCTACTGCaCTACCAAGAGCATGcCcACCAGAGATGCGTCGCAGTCGTAGCG-TAGACGTCGTAATGACCCAGGTGGCGTTCG-G-CCTATTCGCGTCGGACGCGCGCGCTACTACAACGAA-GGGTtCTGAAAGTGCATGTTCACACTGAAATTCTaAGTGTTAGTAAACAAACGCGTGTATTCCAGGGTCGTGTGTGACAT--TATGGCTGTCTGCGCCCCTCAATGATCATC-AAGACGTTCAATTGTAT-GTTAACGTAGATATCAGGTTTA-GTTATCCGTATACTT-TTTACGCCGCGCGCTTgGAACAGATTCTCCTAACAGCCCTCGCGGTTTCAAAAAGAA-CCAAAGTCTA--TACCATCCTTGTTCcCAATTCTGCCTGGTTGCGGAGAAAAGA-CCGCCTCC-A-TACGTACCCGACTCGGTATTGGTAAGTGGGGAAGCAGTCGAACGCATATTTCT---TGGTTATATCACAGGCCACGTTcTATATC-GGAAGTGGCCGG-ATTACGATTTGACGTTCTATCCCCGAGAGCGCATTCTTGTTTGTTAC-TACTACCACGCGGGCGCTTCTTATTCCCAGACCAGAGGGAATGTGCGGAAGCTT-TTTCCACAGATTGGCGGAAC-TCCaGCGTGCTTAGTGCAGGCGGAGAACGTCCGTTCAGTGGTGCGtGCTTTATTTTtCAATCTGACCCGACCTGCGCTCAAG-GgTTG-C-AAGTTGTTGTGCGC-CCGAGTAATAGGCGACTCGTCGCAATGGGTCTGGTACATT--GCATTTTCATCGGTAC-GGCGCTTCATAAAGTGCGGCAAATTTCTCACCCCAGTACTCATGTTTA-TAGGGTATCAGGACCCGAAGCTTCTCTGTTCCAAAGAAATGTACTGTTTgGCTCCCCTGTCCAT-A-TTGGAGGtAGATCACTTGTGGATT-ATGCAATGAaTGAATGA-AAGTTTGGTGCTCCCCAC-CGGGGCGCTCTC-AAAgAGAGTGAGCtaAATTTGAACATTTAAATTGCTATTCCAACCCGGAGTCCTGACCGGAACAGTAATGAAACTTCAACCATGCCG-GACAGACTAGAAGAAGGGAAAGTtGCTTGTATATGGGAGTaAAAATGATGTTGGTGCCGTAATGGTGCCGG-AAGTgACTATAGA-GCATGTCGTGACGCACCG-G-TAGGCAGTGCTATAATCGTA-TG-TCCTTCAGGCGCCGCCGGACCTACGAAGCTGAaATTAGACACCGGCACACTAGCCCCGTCAGCGACGG-TGCGCGGCCGcT-GCCCTGCAGC-GAATGGGGCTAACACGCATAaAACGCCCGCATAACCACTCGAG-CTACGGGA-ATTCACTCAGGCTGT-TGCTTCGA-CGTGTAGTCTCATTACATAA-TCATAATACCTCCAAGACCAACGGCTGCTCATGACTCTCTTACCTTGTTAG-GGACATTTCGGCACTAGGGAAGAG--CTGAGGACTTTGAAAACGTCGATAAAACCATCGCGGGAACTAG-CT-GCGTTAGA-ACTCCATATTTTACGGGTCGCAAGCTTGAGGTC-CTGTCCCGGC-AGCTGCAAGTGCTACGGCAGGAGGGGATCTACCTAACGTGCAGT-AACGAGCCCc-TGCCC-GTAATGAGGCGTACT-CGTCTCTAATCGTCAGTAAGTTACtATGTCCGAGGACGCC-TCTACGAGTTGAACTCTGGCTA-GGC-CCACCTGTC-CGCGCCCTGCTCGGGTaCCCCATC-TGCTTATCCAA-CtTCACCTCGCCTTACGGAATCTCTGGTTGCCAGTCATCCGATGGTCATT-AAGCAGC-GTGGTACATCGTAGCCA-ATACTT-CAGGGCG-CCAGCCATATTCCc-A--GCCAAG-CGGCTGCATAATTACAGCGCCTGGCACG-ACTAAT-CGATCCCACAAGCCTGGTAGATGACCCTTAG-C-CCTAAAGCGCCCTCTGACCTATCTGCACGTGATACTTGATTaTT-TGT-AATGAGCGGACAGgGTAGATGACTAATAT-ACAGG-GTCGTCTAGGTTTGCACAATG-CAG-AC-A-TCATCCgCGCAAGGCCCGGACGGCTGtACTCACA-CAGCTAGCTCCATCTCCCTCAGCAGCACTAAGATTCCCACGTGACCAGGGCGACGGGCCTCAGCCAAACGTATCCTTGATATCTACTTAAGTCAAGGTTGACTCCGAACCCTATGGGTCGGT-GCCGTTAACAGGGAGTCTATATCTCGGCGTTCCATTGCTTGTTTCAAACTcCTGCTATAAGGTGAAAGCGCTGGAGGGCATAGT-TTATGCCCAAAGTTGCGCGTAGATCCGTCGGGATATG-TGCTATAATAAGGACTGC-TCGAG-GTAGGCGGTAACGG-CTCCCGCCTTCAGTaGGCGCGGAAC-TCGAATCGGAGTTAC-AG-GACTTGACCGA-GTCAT-ATCCAAGTTTATGTTACCCGATCGGATCCGGATGCTCGtATC-TGCGACGAGGTCGG-AAGACGGACGAAATACGATTCAACCGCGCG-AAC-CATTAGCATCTAACCTTTAGCCTCA-ATGGGTGTTAACGTGGTGGGCTCACTCGGCGTACTCTTTGTGCaACTATTC-CGTAT-GAACAACAG-TCAAGTTGCGACATGATGCTCTTACGTGATTCCCACAGTTTCCCACCTCAGGATGCTTTCTTTAGCT-AAA-CCCAATAGTTATGG-CGGCACCTT-CAGACTCCCACGAGGACGGCTATGACGTTGCTAAACCAtTCGCCGCCAAAGGCTAGCGCTAACGAGTTCTGTGAGTTTGTTCCGGGCCAGATCTCCAG-GATGGTCGCAACAACGCAGTACCGGT-TTTATACTGGTGACCCTCTACCTGTtATTAAGTTAcAGCGTTGTCCTACGTACATGGTCGTGAGTAC-TCGCGTAG-TCAAACGCCA--GG-ACTAGCAGCGAGAATTATTGTCGCGATACTTACTACAATAC-TTACCCGATATTGACGTGCAGGGTTGAAAGA-GATGG-ACAGTTGAATATC-TATTTTGACGGAATCCTCAAAACTCCCTCCACCTCAGGTaACGGCCCTGTCCGGGACCGCATTCTTGCATATATTG-GTtCCCAGAGCGTATCTAAGTTAG-TCTCTTGACCGTTCACCGACTC-TAGGGCGACTCGTTATCGCCCTCCGAAA-CGAT-GCTTtCGTTACCTCA-A-TGATGACAG-G-CTGTAACGTA-AGTGATCCCAATCTCACTCGTGCCTTGTCCACCGTTCCGTGAAGACGAAGCAATACGCGGAATACGTGGCTTCGTAATATTTTGACGATATGGGG-CTGGGACGC-TCAAGACTTCCATGACAAACAAAGTGAAGAGCAACTGCAT-CCCTCATCATGA-TCACTATTACCAGAG-TAGCGATGGAtAACGCTAATTTG-GTCAGGGCAGCTATCGCA-TCCCG-cAGGTGTAGGCG-G-AGACTTTTTCTTTTGTTGC-GAGTTGA-CA-GGTAATCTCACGGTATAAGCACGGTTATTTACG-CAAGCGACGTCCCTGGGAGaATCCGCCCACGTAGG-ACCCCATAATCCATAAAT-AC-TGCgGTCGAAACCTTCATATCGTGACAGAACCGCTTTC-TAGGGATG-CGGTCCCCGCATTCAGAGTTCT-ACTTTGGCCAGCGTG-AGACTTAACAACTCCACTTACGCGGTACATTGAAGT-C-GTTCAGTCCAGTGTGACCTGTGTAC-CGAATAACGTGTAGACCAGCGCGTCTACGACTTAGCGCGGCTCCACTCCA-a-AGCACCTTTTGGgACTTTC-CAACGAGC-CTGTTGGCCGTTAAGCGGTATTTCACAAATAGATCACCCTAGTGTCGGTAA-CCGACTACCCTATTGGGATCATCGTGAGCTCGAAACACTAGAGGCGGACCAACGGA--TGACATtTGATTCGGCTCTACAGAGCTTgTCGC-CAGAG-AAAAACTGTGGCAATCTACGCTCGCGGGG-AATTGACTTTAGCGGCCCCT-AGACAGGTGTGGGACACTAGTCTAGATTCACGTCCTACACGACATAACAGCACcTTCCTGGCCAGCCCAGAAATAGTACCTGGACGACATCCAGCCTTCCGACGCCATAATGT-GAGCCGTAGCGCCCACGACGATCAACGAGGAGAAATTTACAA-AGGCTGTGTGAATGCTACGTCGTCTACCATTGC-TCATCGAAACGAACGCAACGCACAGCATACAACGTT-TACCATGCCGGAGCGGGAT-CCTCAAGTACAGAA-AACAGAGGTCTAAACATGATCC-GAACAAATCGGTaGGTTTACACAGCTACCTC-GTC-CATTGGCGTACTGCATCGATCGTGCTTA--CTACGGTCATGCCGGCCCGCGATGCACGTACGAA-GGAATACCCTGTCTGCCCCCGCGCGAGTTACGCTGTCTCGCACATACCGAGCACT-GTCGTTCGAAGCTAAACTATGAGCCCAgCCGAGCTCCTTATGGCCGCAAC-GCtGGTGCGGCCAGCTGATAAATT-CCACAGtA-CACGATCCTCGTGTAAGATCTCG-GGCATAGTAAGTCA-TTTCACATGGTTAGGAGAGATAGAATACATGGTTCTGGTAGCTCAACCAGG-ATTTGTGGAACC-CTTGGCCCTTGGTGAGTGCTA-CAATAAAATTCTCCGTATGGGAC-AACCAAAGGGTGCTGGATGTGACTTCCCGGCCCAGGTTAGATGTCCATATCATTCATA-CATTGCCCGACCGACCCAATGCCTA-AATC-A-GA-GGCGCCTTAGCTAGTTCTTGtAGTGTGCCACGT-CCGGCCACGCAGACACGACCCT-CGGCGAGTGATCACCATTACC-GGATTGGCATCGAAGTCTTTTTCTGGGAAGTTAGCCAGTTtG-GTGTGCGGTG-CTTAGAATCT-TATTCCCA-GTCAAACGCCCCTGGGACGA-ATTGC-TAACCCTAGTT-GCCAC-gCCGGAACCATCTT-CGGGAGAG-TAGA-CA-A-ATCCGA-GTTAGATATGTTAGCGTCT-TCGTGAGTCTGAAATGTATCACTTCACCGC-AGAATA-CGCGAATGTCTGTTTGCCCTGGAC--TGACGGAaTTGGCTTAAAAGC-CGaCTAG-AGCATTTTGGTACGGT-TCCtATCC-GCGAT-GTAATTACCTATCTAGGTTATCGCTAG");
        });
    });
    // only run the cabone_test_2 if it's in the URL someplace
    if (document.location.href.indexOf('extended_tests=1') > -1) {
        describe('BAM with carbone_test_2', function () {
            var b;
            beforeEach(function () {
                b = new BAMStore({
                    browser: new Browser({ unitTestMode: true }),
                    bam: new XHRBlob('../../../data/carbone_test_2/RIB40_278_k51_cd_hit_est_sorted.bam'),
                    bai: new XHRBlob('../../../data/carbone_test_2/RIB40_278_k51_cd_hit_est_sorted.bam.bai'),
                    refSeq: { name: 'gi|338162049|dbj|BA000051.1|', start: 1, end: 5123684 }
                });
            });

            it('loads some data', function () {
                var loaded;
                var features = [];
                var done;
                aspect.after(b, 'loadSuccess', function () {
                    loaded = true;
                });

                // need 2:3905491-4019507 NODE_423_length_210786_cov_16.121635 3919331 3979772

                b.getFeatures({ start: 3799999, end: 4049999 }, function (feature) {
                    features.push(feature);
                }, function () {
                    done = true;
                });
                waitsFor(function () {
                    return done;
                }, 2000);
                runs(function () {
                    expect(features.length).toEqual(13);
                    //console.log( distinctBins(features) );
                });
            });
        });
    }
}).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}).catch(__webpack_require__.oe);

/***/ }),
/* 378 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__.e/* require */(1/* aggressive-merge */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(340), __webpack_require__(335)]; ((function (RemoteBinaryFile, aspect) {
    describe('RemoteBinaryFile', function () {
        var b = new RemoteBinaryFile({
            name: 'tester',
            minChunkSize: 1
        });
        var testURL = '../../sample_data/raw/volvox/volvox-sorted.bam';

        it('constructs', function () {
            expect(b).toBeTruthy();
        });

        it('appears to fetch data correctly', function () {
            var get = function get(start, end, callback) {
                var data;
                b.get({ url: testURL, start: start, end: end, success: function success(d) {
                        data = d;
                    }, failure: console.error });
                waitsFor(function () {
                    return data;
                });
                runs(function () {
                    callback(data);
                });
            };
            get(0, 4000, function (data) {
                expect(data.byteLength).toEqual(4001);
                expect(b._fetchCount).toEqual(1);
                get(1000, 2000, function (data) {
                    expect(data.byteLength).toEqual(1001);
                    expect(b._fetchCount).toEqual(1);
                    get(4000, 4000, function (data) {
                        // we should have a total size for the file by now
                        expect(b.totalSizes[testURL]).toEqual(395273);
                        expect(data.byteLength).toEqual(1);
                        expect(b._fetchCount).toEqual(1);
                        get(4000, 4000, function (data) {
                            expect(data.byteLength).toEqual(1);
                            expect(b._fetchCount).toEqual(1);
                            // fetch the whole file
                            get(undefined, undefined, function (data) {
                                expect(data.byteLength).toEqual(395273);
                                expect(b._fetchCount).toEqual(2);
                                console.log('array copy count', b._arrayCopyCount);
                            });
                        });
                    });
                });
            });
        });
    });
}).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}).catch(__webpack_require__.oe);

/***/ }),
/* 379 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__.e/* require */(1/* aggressive-merge */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(51), __webpack_require__(334)]; ((function (array, Util) {

    function expectDeepEqual(func, input, output) {
        it(JSON.stringify(input) + ' -> ' + JSON.stringify(output), function () {
            expect(func.apply(Util, input)).toEqual(output);
        });
    }

    function testAll(func, inOut) {
        array.forEach(inOut, function (testcase) {
            expectDeepEqual(func, testcase[0], testcase[1]);
        });
    }

    describe('Util.fillTemplate', function () {

        testAll(Util.fillTemplate, [[['{bar}', { 'bar': 'someurl', 'baz': { 'foo': 42 } }], 'someurl'], [['{ bar}', { 'bar': 'someurl', 'baz': { 'foo': 42 } }], 'someurl'], [['{ bar  }', { 'bar': 'someurl', 'baz': { 'foo': 42 } }], 'someurl'], [['{bar  }', { 'bar': 'someurl', 'baz': { 'foo': 42 } }], 'someurl'], [['{baz.foo}', { 'bar': 'someurl', 'baz': { 'foo': 42 } }], '42'], [['{ baz.  foo }', { 'bar': 'someurl', 'baz': { 'foo': 42 } }], '42'], [['{ baz.foo}', { 'bar': 'someurl', 'baz': { 'foo': 42 } }], '42'], [['{baz.foo }', { 'bar': 'someurl', 'baz': { 'foo': 42 } }], '42']]);
    });

    describe('Util.basename', function () {

        testAll(Util.basename, [[[null], undefined], [[{}, '.baz'], undefined], [['bar.baz'], 'bar.baz'], [['foo/bar.baz'], 'bar.baz'], [['foo/bar.baz', '.baz'], 'bar'], [['foo/bar.BAZ', '.baz'], 'bar'], [['foo/bar.baz', '.BAZ'], 'bar'], [['/noggin/boggin/'], 'boggin'], [['/bee/boo/foo/bar.baz', '.BAZ'], 'bar'], [['foo/barfbaz', '.baz'], 'barfbaz'], [['foo\\barfbaz', '.baz'], 'barfbaz'], [['foo\\bar.baz', '.baz'], 'bar']]);
    });

    describe('Util.parseLocString', function () {

        testAll(Util.parseLocString, [[['2RHet'], null], [['2L'], null], [['snark123'], null], [['ctgA:3000..4000'], { ref: 'ctgA', start: 2999, end: 4000 }], [['ctgA:4000..3000'], { ref: 'ctgA', start: 2999, end: 4000 }], [['ctgA^:3,000..4,000.0'], { ref: 'ctgA^', start: 2999, end: 4000 }], [['ctgA^:3,000..4,000.0 (42 kb)'], { ref: 'ctgA^', start: 2999, end: 4000, extra: '42 kb' }], [['ziggy234.1:3,000..4,000.0 (42 kb)'], { ref: 'ziggy234.1', start: 2999, end: 4000, extra: '42 kb' }], [['3,000..4,000.0 (42 kb)'], { start: 2999, end: 4000, extra: '42 kb' }], [['3,000'], { start: 2999, end: 3000 }], [['  3000 (42kb) '], { start: 2999, end: 3000, extra: '42kb' }], [['  3000 (42) '], { start: 2999, end: 3000, extra: '42' }], [['  3000 ( 42 ) '], { start: 2999, end: 3000, extra: ' 42 ' }], [['3000 ( 42 ) '], { start: 2999, end: 3000, extra: ' 42 ' }], [[' higgleplonk: 3000 ( 42 ) '], { ref: 'higgleplonk', start: 2999, end: 3000, extra: ' 42 ' }], [['234324x#21: 3000 ( 42 ) '], { ref: '234324x#21', start: 2999, end: 3000, extra: ' 42 ' }], [['ctgA:3000'], { ref: 'ctgA', start: 2999, end: 3000 }], [['ctgA:3000-4000 (42 kb)'], { ref: 'ctgA', start: 2999, end: 4000, extra: '42 kb' }], [['ctgA:3000-4000'], { ref: 'ctgA', start: 2999, end: 4000 }], [['ctgA:3000...4000'], { ref: 'ctgA', start: 2999, end: 4000 }], [['ctgA:3000--4000'], { ref: 'ctgA', start: 2999, end: 4000 }], [['ctgA:3,000..4,000.0'], { ref: 'ctgA', start: 2999, end: 4000 }], [['HLA-A*01:01:01:01:3000-4000'], { ref: 'HLA-A*01:01:01:01', start: 2999, end: 4000 }], [['HLA-A*01:01:01:01:3000'], { ref: 'HLA-A*01:01:01:01', start: 2999, end: 3000 }],
        //                 [ ['HLA-A*01:01:01:01:'], { ref: 'HLA-A*01:01:01:01', start: 0, end: 1 } ],
        [['ctgA:3000-4000:50-100'], { ref: 'ctgA:3000-4000', start: 49, end: 100 }], [['ctgA:3000-4000:50'], { ref: 'ctgA:3000-4000', start: 49, end: 50 }]]
        //                 [ ['ctgA:3000-4000:'], { ref: 'ctgA:3000-4000', start: 49, end: 50 } ]
        );
    });
}).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}).catch(__webpack_require__.oe);

/***/ }),
/* 380 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__.e/* require */(1/* aggressive-merge */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(349), __webpack_require__(350), __webpack_require__(351)]; ((function (BAMDriver, GFF3TabixDriver, IndexedFastaDriver) {

    describe('FileDialog drivers', function () {

        it('can match a simple BAM URL with its BAI URL', function () {
            var confs = { foo: { baiUrlTemplate: 'zee.bam.bai' } };
            expect(new BAMDriver().tryResource(confs, { type: 'bam', url: 'zee.bam' })).toBeTruthy();
            expect(confs.foo.bam.url).toEqual('zee.bam');
        });

        it('can match a simple BAM file with its BAI URL', function () {
            var confs = { foo: { baiUrlTemplate: 'zee.bam.bai' } };
            expect(new BAMDriver().tryResource(confs, { type: 'bam', file: { name: 'zee.bam' } })).toBeTruthy();
            expect(confs.foo.bam.blob.name).toEqual('zee.bam');
        });

        it('can match a simple BAM file with its BAI XHRBlob', function () {
            var confs = { foo: { bai: { url: 'zee.bam.bai' } } };
            expect(new BAMDriver().tryResource(confs, { type: 'bam', file: { name: 'zee.bam' } })).toBeTruthy();
            expect(confs.foo.bam.blob.name).toEqual('zee.bam');
        });

        it('can match a simple BAM file with its CSI XHRBlob', function () {
            var confs = { foo: { csi: { url: 'zee.bam.csi' } } };
            expect(new BAMDriver().tryResource(confs, { type: 'bam', file: { name: 'zee.bam' } })).toBeTruthy();
            expect(confs.foo.bam.blob.name).toEqual('zee.bam');
        });

        it('can remove singleton BAM file', function () {
            var confs = {};
            var driver = new BAMDriver();
            expect(driver.tryResource(confs, { type: 'bam', file: { name: 'zee.bam' } })).toBeTruthy();
            driver.finalizeConfiguration(confs);
            expect(confs).toEqual({});
        });
        it('can remove singleton CSI file', function () {
            var confs = {};
            var driver = new BAMDriver();
            driver.tryResource(confs, { type: 'bam.csi', file: { name: 'zee.bam.csi' } });
            driver.finalizeConfiguration(confs);
            expect(confs).toEqual({});
        });

        it('can finalize with CSI+BAM file', function () {
            var confs = { foo: { csi: { url: 'zee.bam.csi' } } };
            var driver = new BAMDriver();
            expect(driver.tryResource(confs, { type: 'bam', file: { name: 'zee.bam' } })).toBeTruthy();
            driver.finalizeConfiguration(confs);
            expect(confs.foo.bam.blob.name).toEqual('zee.bam');
            expect(confs.foo.csi.url).toEqual('zee.bam.csi');
        });

        it('can finalize with opposite order, BAM+CSI file', function () {
            var confs = { foo: { bam: { url: 'zee.bam' } } };
            var driver = new BAMDriver();
            expect(driver.tryResource(confs, { type: 'bam.csi', file: { name: 'zee.bam.csi' } })).toBeTruthy();
            driver.finalizeConfiguration(confs);
            expect(confs.foo.csi.blob.name).toEqual('zee.bam.csi');
            expect(confs.foo.bam.url).toEqual('zee.bam');
        });

        it('can finalize with opposite order, both blobs', function () {
            var confs = { foo: { bam: { blob: { name: 'zee.bam' } } } };
            var driver = new BAMDriver();
            expect(driver.tryResource(confs, { type: 'bam.csi', file: { name: 'zee.bam.csi' } })).toBeTruthy();
            driver.finalizeConfiguration(confs);
            expect(confs.foo.csi.blob.name).toEqual('zee.bam.csi');
            expect(confs.foo.bam.blob.name).toEqual('zee.bam');
        });

        it('GFF3 tabix file extension test with .gff3', function () {
            var confs = { foo: { file: { blob: { name: 'zee.gff3.gz' } } } };
            var driver = new GFF3TabixDriver();
            expect(driver.tryResource(confs, { type: 'gff3.gz.tbi', file: { name: 'zee.gff3.gz.tbi' } })).toBeTruthy();
            driver.finalizeConfiguration(confs);
            expect(confs.foo.tbi.blob.name).toEqual('zee.gff3.gz.tbi');
            expect(confs.foo.file.blob.name).toEqual('zee.gff3.gz');
        });

        it('GFF3 tabix file extension test with .gff', function () {
            var confs = { foo: { file: { blob: { name: 'zee.gff.gz' } } } };
            var driver = new GFF3TabixDriver();
            expect(driver.tryResource(confs, { type: 'gff3.gz.tbi', file: { name: 'zee.gff.gz.tbi' } })).toBeTruthy();
            driver.finalizeConfiguration(confs);
            expect(confs.foo.tbi.blob.name).toEqual('zee.gff.gz.tbi');
            expect(confs.foo.file.blob.name).toEqual('zee.gff.gz');
        });
        it('FASTA file extension test with .fasta', function () {
            var confs = { foo: { fasta: { blob: { name: 'zee.fasta' } } } };
            var driver = new IndexedFastaDriver();
            expect(driver.tryResource(confs, { type: 'fai', file: { name: 'zee.fasta.fai' } })).toBeTruthy();
            driver.finalizeConfiguration(confs);
            expect(confs.foo.fai.blob.name).toEqual('zee.fasta.fai');
            expect(confs.foo.fasta.blob.name).toEqual('zee.fasta');
        });
        it('FASTA file extension test with .fa', function () {
            var confs = { foo: { fasta: { blob: { name: 'zee.fa' } } } };
            var driver = new IndexedFastaDriver();
            expect(driver.tryResource(confs, { type: 'fai', file: { name: 'zee.fa.fai' } })).toBeTruthy();
            driver.finalizeConfiguration(confs);
            expect(confs.foo.fai.blob.name).toEqual('zee.fa.fai');
            expect(confs.foo.fasta.blob.name).toEqual('zee.fa');
        });
        it('FASTA file unindexed', function () {
            var confs = { foo: { fasta: { blob: { name: 'zee.fa' } } } };
            var driver = new IndexedFastaDriver();
            driver.finalizeConfiguration(confs);
            expect(confs.foo.fasta.blob.name).toEqual('zee.fa');
        });
    });
}).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}).catch(__webpack_require__.oe);

/***/ }),
/* 381 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

__webpack_require__.e/* require */(1/* aggressive-merge */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(358)]; ((function (gbrowseConfigAdaptor) {
    describe('GBrowse-like config file parser', function () {
        var gbrowse = new gbrowseConfigAdaptor();
        var gbConfig;

        // run the script with GBrowseParseTestBasic.conf as input
        // to test different kinds of input
        // config file => ./spec/GBrowseParseTestBasic.conf

        it('should parse', function () {
            gbrowse.load({
                config: { url: 'spec/GBrowseParseTestBasic.conf' }
            }).then(function (c) {
                gbConfig = c;
            }, function (error) {
                console.error(error.stack || '' + error);
            });

            waitsFor(function () {
                return gbConfig;
            });
            runs(function () {
                expect(typeof gbConfig === 'undefined' ? 'undefined' : _typeof(gbConfig)).toEqual('object');
                expect(gbConfig['TRACK DEFAULTS']).toBeTruthy();
                expect(gbConfig['TRACK DEFAULTS']['glyph']).toBe('generic');
                expect(gbConfig['TRACK DEFAULTS']['height']).toBe(8);
                expect(gbConfig['TRACK DEFAULTS']['bgcolor']).toBe('#fefefe');
                expect(gbConfig['TRACK DEFAULTS']['fgcolor']).toBe('black');
                expect(gbConfig['TRACK DEFAULTS']['label density']).toBe(25);
                expect(gbConfig['TRACK DEFAULTS']['bump density']).toBe(25);
                expect(gbConfig['TRACK DEFAULTS']['fogbat']).toBe('');

                expect(gbConfig['Markers:region']).toBeTruthy();
                expect(gbConfig['Markers:region']['feature']).toBe('match:ITAG_sgn_markers');
                expect(gbConfig['Markers:region']['ignore_sub_part']).toBe('match_part');
                expect(gbConfig['Markers:region']['key']).toBe('Markers');
                expect(gbConfig['Markers:region']['fgcolor']).toBe('black');
                expect(gbConfig['Markers:region']['bgcolor']).toBe('yellow');
                expect(gbConfig['Markers:region']['glyph']).toBe('generic');
                expect(gbConfig['Markers:region']['label density']).toBe(100);
                expect(gbConfig['Markers:region']['bump density']).toBe(100);
                expect(gbConfig['Markers:region']['link']).toBe('/search/quick?term=$name');
                expect(gbConfig['Markers:region']['citation']).toBe('GenomeThreader alignments of SGN marker sequences.');

                expect(gbConfig['DM_BAC']).toBeTruthy();
                expect(gbConfig['DM_BAC']['feature']).toBe('\"BAC_clone:DBolser_Dundee_BES_SSAHA_dm_bes_sg\" \"BAC_clone:DBolser_Dundee_BES_SSAHA_dm_bes_sb\" \"BAC_clone:DBolser_Dundee_BES_SSAHA_dm_bes_lg\" \"BAC_clone:DBolser_Dundee_BES_SSAHA_dm_bes_lb\" \"BAC_clone:DBolser_Dundee_BES_SSAHA_dm_bes_hg\" \"BAC_clone:DBolser_Dundee_BES_SSAHA_dm_bes_hb\"');
                expect(gbConfig['DM_BAC']['citation']).toBe('BAC ends from the \'POTATO-B-01-100-110KB\' library aligned using SSAHA2. The clone ends pair correctly (solid connector) or not (dashed connector), and are color coded by insert-size.  Provided by Dan Bolser, <a href="http://www.compbio.dundee.ac.uk/">University of Dundee</a>.');

                expect(gbConfig['sub']['section']['giant word']).toBe('Antidisestablishmentarianism');
                expect(gbConfig['sub']['section']['multiline']).toBe('herp derp');
                expect(gbConfig['sub']['section']['fancyMultiline']).toBe('Le herp derp');
                expect(gbConfig.sub.section.array.length).toBe(3);
                expect(gbConfig.sub.section.array[0]).toBe(1);
                expect(gbConfig.sub.section.array[1]).toBe(2);
                expect(gbConfig.sub.section.array[2]).toBe(3);
                expect(gbConfig.sub.section.inline.subsection.deeply).toBe('hihi');
                expect(gbConfig.sub.section.inline.con.spaces).toBe('hoho');

                expect(gbConfig.threshold).toBe(-1234221e-02);

                expect(gbConfig.em.bedded.json.myjson.length).toBe(2);
                expect(gbConfig.em.bedded.json.myjson[0].zee).toBe('hallo');
                expect(gbConfig.em.bedded.json.myjson[1]).toBe(53);

                expect(gbConfig.function_testing.randomNumberTitle.charAt(gbConfig.function_testing.randomNumberTitle.length - 1)).toBe('}');

                expect(gbConfig.function_testing.alertTest.charAt(gbConfig.function_testing.alertTest.length - 1)).toBe('}');

                expect(gbConfig.array_of_objects.foo[0].nog).toBe(1);
                expect(gbConfig.array_of_objects.foo[1].egg).toBe(2);

                expect(gbConfig.array_of_objects.bar[0]).toBe('one');
                expect(gbConfig.array_of_objects.bar[1]).toBe('two');
                expect(gbConfig.array_of_objects.bar[2]).toBe('three and a half');
                expect(gbConfig.array_of_objects.bar[3]).toBe('four');
            });
        });
    });
}).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}).catch(__webpack_require__.oe);

/***/ }),
/* 382 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__.e/* require */(1/* aggressive-merge */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(343)]; ((function (NestedFrequencyTable) {
        describe('nested frequency table', function () {
                it('works when empty', function () {
                        var t = new NestedFrequencyTable();
                        expect(t.total()).toEqual(0);
                        var fe = [];
                        t.forEach(function (ct, name) {
                                fe.push(ct);
                        });
                        expect(fe.length).toEqual(0);
                });

                it('increments', function () {
                        var t = new NestedFrequencyTable();
                        t.increment('foobar');
                        expect(t.get('foobar')).toEqual(1);
                        expect(t.get('rubber')).toEqual(0);
                        expect(t.total()).toEqual(1);

                        t.increment('noggin');
                        expect(t.total()).toEqual(2);
                });

                it('can nest', function () {
                        var t = new NestedFrequencyTable();
                        t.increment('foobar');
                        expect(t.get('foobar')).toEqual(1);

                        t.getNested('foo/ziggy').increment();
                        expect(t.total()).toEqual(2);

                        t.getNested('foo/noggin').increment();
                        expect(t.total()).toEqual(3);

                        expect(t.get('foo').total()).toEqual(2);
                });
        });
}).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}).catch(__webpack_require__.oe);

/***/ }),
/* 383 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__.e/* require */(0/* aggressive-merge */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(29), __webpack_require__(346), __webpack_require__(47), __webpack_require__(353)]; ((function (Browser, TabixIndex, XHRBlob, BGZBlob) {

    describe("TabixIndex", function () {

        var ti;
        beforeEach(function () {
            ti = new TabixIndex({ blob: new BGZBlob(new XHRBlob('../../sample_data/raw/volvox/volvox.test.vcf.gz.tbi')),
                browser: new Browser({ unitTestMode: true })
            });
        });

        it('constructs', function () {
            expect(ti).toBeTruthy();
        });
        it('loads', function () {
            var loaded;
            waitsFor(function () {
                return loaded;
            }, 1000);
            ti.load().then(function () {
                loaded = true;
            });
            runs(function () {
                expect(ti.columnNumbers.start).toEqual(2);
                expect(ti.columnNumbers.ref).toEqual(1);
                expect(ti.columnNumbers.end).toEqual(0);
                //console.log( ti );
                var blocks = ti.blocksForRange('ctgA', 1, 4000);
                expect(blocks.length).toEqual(1);
                expect(blocks[0].minv.block).toEqual(0);
                expect(blocks[0].minv.offset).toEqual(10431);
                //console.log( blocks );
            });
        });
    });
}).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}).catch(__webpack_require__.oe);

/***/ }),
/* 384 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__.e/* require */(0/* aggressive-merge */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(333), __webpack_require__(51), __webpack_require__(29), __webpack_require__(345), __webpack_require__(47)]; ((function (declare, array, Browser, TabixIndexedFile, XHRBlob) {

    describe("tabix-indexed file", function () {

        var VCFIndexedFile = declare(TabixIndexedFile, {
            parseItem: function parseItem() {
                var i = this.inherited(arguments);
                if (i) {
                    i.start--;
                    i.end = i.start + i.fields[3].length;
                }
                return i;
            }
        });

        var f;
        beforeEach(function () {
            f = new VCFIndexedFile({
                browser: new Browser({ unitTestMode: true }),
                tbi: new XHRBlob('../../sample_data/raw/volvox/volvox.test.vcf.gz.tbi'),
                file: new XHRBlob('../../sample_data/raw/volvox/volvox.test.vcf.gz')
            });
        });

        it('can read ctgA:1000..4000', function () {
            var items = [];
            f.getLines('ctgA', 1000, 4000, function (i) {
                items.push(i);
            }, function () {
                items.done = true;
            });

            waitsFor(function () {
                return items.done;
            });
            runs(function () {
                expect(items.length).toEqual(8);
                array.forEach(items, function (item, i) {
                    expect(item.ref).toEqual('contigA');
                    expect(item.start).toBeGreaterThan(999);
                    expect(item.start).toBeLessThan(4001);
                });
            });
        });
    });
}).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}).catch(__webpack_require__.oe);

/***/ }),
/* 385 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__.e/* require */(0/* aggressive-merge */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(333), __webpack_require__(51), __webpack_require__(29), __webpack_require__(355), __webpack_require__(47)]; ((function (declare, array, Browser, TribbleIndexedFile, XHRBlob) {

    describe("tribble-indexed file", function () {

        var VCFIndexedFile = declare(TribbleIndexedFile, {
            parseItem: function parseItem() {
                var i = this.inherited(arguments);
                if (i) {
                    i.start--;
                    i.end = i.start + i.fields[3].length;
                }
                return i;
            },

            getColumnNumbers: function getColumnNumbers() {
                return {
                    ref: 1,
                    start: 2,
                    end: -1
                };
            }
        });

        var f;
        beforeEach(function () {
            f = new VCFIndexedFile({
                browser: new Browser({ unitTestMode: true }),
                idx: new XHRBlob('../data/1801160099-N32519_26611_S51_56704.hard-filtered.vcf.idx'),
                file: new XHRBlob('../data/1801160099-N32519_26611_S51_56704.hard-filtered.vcf')
            });
        });

        it('can read 17:41200000..41290000', function () {
            var items = [];
            f.getLines('17', 41200000, 41290000, function (i) {
                items.push(i);
            }, function () {
                items.done = true;
            });

            waitsFor(function () {
                return items.done;
            });
            runs(function () {
                expect(items.length).toEqual(9);
                array.forEach(items, function (item, i) {
                    expect(item.ref).toEqual('17');
                    expect(item.start).toBeGreaterThan(41200000);
                    expect(item.start).toBeLessThan(41290000);
                });
            });
        });
    });
}).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}).catch(__webpack_require__.oe);

/***/ }),
/* 386 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__.e/* require */(1/* aggressive-merge */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(128), __webpack_require__(357)]; ((function (lang, RESTStore) {

    function testWithConfig(config) {
        var store = new RESTStore({
            browser: {},
            baseUrl: '../data/rest_store_test',
            refSeq: { name: 'ctgA', start: 1, end: 500001 },
            config: config || {}
        });

        return function () {
            it('constructs', function () {
                expect(store).toBeTruthy();
            });

            it('loads some data', function () {
                var features = [];
                var done;
                store.getFeatures({ start: 0, end: 50000 }, function (feature) {
                    features.push(feature);
                }, function () {
                    done = true;
                });
                waitsFor(function () {
                    return done;
                }, 2000);
                runs(function () {
                    expect(features.length).toEqual(6);
                    expect(features[0].get('start')).toEqual(1);
                    expect(features[4].children().length).toEqual(2);
                    expect(features[4].children()[1].children()[0].get('type')).toEqual('SNV');
                });
            });

            it('supports global stats', function () {
                var stats;
                var done;
                store.getGlobalStats(function (s) {
                    stats = s;
                });
                waitsFor(function () {
                    return stats;
                }, 2000);
                runs(function () {
                    expect(stats.featureDensity).toEqual(20);
                });
            });

            it('emulates region stats', function () {
                var stats;
                var done;
                store.getRegionStats({ start: 0, end: 50000 }, function (s) {
                    stats = s;
                });
                waitsFor(function () {
                    return stats;
                }, 2000);
                runs(function () {
                    expect(stats.featureDensity).toEqual(0.00012);
                });
            });

            it('supports region stats if implemented', function () {
                var store = new RESTStore({
                    browser: {},
                    baseUrl: '../data/rest_store_test',
                    refSeq: { name: 'ctgC', start: 1, end: 200 },
                    config: lang.mixin({ region_stats: true }, config || {})
                });
                var stats;
                var done;
                store.getRegionStats({ start: 0, end: 50000 }, function (s) {
                    stats = s;
                });
                waitsFor(function () {
                    return stats;
                }, 2000);
                runs(function () {
                    expect(stats.featureDensity).toEqual(123);
                    expect(stats.featureCount).toEqual(456);
                    expect(stats.scoreMin).toEqual(-1);
                    expect(stats.scoreMax).toEqual(4);
                });
            });

            if (!config.noCache) // this test does not work under noCache because the backend is not dynamic
                it('supports feature_range_cache', function () {
                    var withRangeCache = new RESTStore({
                        browser: {},
                        baseUrl: '../data/rest_store_test',
                        refSeq: { name: 'ctgA', start: 0, end: 50000 },
                        config: lang.mixin({ feature_range_cache: true }, config || {})
                    });

                    expect(withRangeCache.region_cache_hits).toEqual(0);

                    var features = [];
                    var done1, done2;
                    withRangeCache.getFeatures({ start: 0, end: 50000 }, function (feature) {
                        features.push(feature);
                    }, function () {
                        done1 = true;
                    });
                    waitsFor(function () {
                        return done1;
                    }, 2000);
                    runs(function () {
                        expect(withRangeCache.region_cache_hits).toEqual(0);
                        expect(features.length).toEqual(6);
                        expect(features[0].get('start')).toEqual(1);
                        expect(features[4].children().length).toEqual(2);
                        expect(features[4].children()[1].children()[0].get('type')).toEqual('SNV');

                        features = [];
                        withRangeCache.getFeatures({ start: 100, end: 400 }, function (feature) {
                            features.push(feature);
                        }, function () {
                            done2 = true;
                        });
                    });
                    waitsFor(function () {
                        return done2;
                    }, 2000);
                    runs(function () {
                        expect(withRangeCache.region_cache_hits).toEqual(1);
                        expect(features.length).toEqual(4);
                        expect(features[0].get('start')).toEqual(300);
                        expect(features[3].children().length).toEqual(2);
                        expect(features[3].children()[1].children()[0].get('type')).toEqual('SNV');
                    });
                });

            it('supports feature histograms if implemented', function () {
                expect(store.getRegionFeatureDensities).toBeFalsy();

                var withHist = new RESTStore({
                    browser: {},
                    baseUrl: '../data/rest_store_test',
                    refSeq: { name: 'ctgA', start: 1, end: 200 },
                    config: lang.mixin({ region_feature_densities: true }, config || {})
                });

                var hist;
                var done;
                withHist.getRegionFeatureDensities({ start: 0, end: 50000 }, function (s) {
                    hist = s;
                });
                waitsFor(function () {
                    return hist;
                }, 2000);
                runs(function () {
                    expect(hist.bins.length).toEqual(25);
                    expect(hist.stats.basesPerBin).toEqual(200);
                    expect(hist.stats.mean).toEqual(57.772);
                });
            });
        };
    };

    describe('REST store', testWithConfig({ foo: 1 }));
    describe('REST store with nocache', testWithConfig({ noCache: true, foo: 2 }));
}).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}).catch(__webpack_require__.oe);

/***/ }),
/* 387 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__.e/* require */(0/* aggressive-merge */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(51), __webpack_require__(29)]; ((function (array, Browser) {

    describe('centralized ref seq name regularization', function () {

        var b = new Browser({ unitTestMode: true });

        var testCases = [['ctgA', 'ctga'], ['chrom01', 'chr1'], ['chr01', 'chr1'], ['CHROMOSOME11', 'chr11'], ['SCAFFOLD0231', 'scaffold231'], ['contig47', 'ctg47'], ['ctg47', 'ctg47'], ['Oryza_sativa_1234.01', 'oryza_sativa_1234.01'], ['01', 'chr1'], ['1', 'chr1']];
        array.forEach(testCases, function (testCase) {
            it('works for ' + testCase[0], function () {
                expect(b.regularizeReferenceName(testCase[0])).toEqual(testCase[1]);
            });
        });
    });
}).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}).catch(__webpack_require__.oe);

/***/ }),
/* 388 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__.e/* require */(0/* aggressive-merge */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(51), __webpack_require__(128), __webpack_require__(129), __webpack_require__(29), __webpack_require__(47), __webpack_require__(363)]; ((function (array, lang, xhr, Browser, XHRBlob, GFF3Store) {

    describe('GFF3 store', function () {
        it('can parse volvox.gff3', function () {
            var p = new GFF3Store({
                browser: new Browser({ unitTestMode: true }),
                blob: new XHRBlob('../../sample_data/raw/volvox/volvox.gff3'),
                refSeq: { name: 'ctgA', start: 0, end: 50001 }
            });
            (function () {
                var features = [];
                var done;

                p.getFeatures({ ref: 'ctgA', start: 1, end: 50000 }, function (f) {
                    features.push(f);
                }, function () {
                    done = true;
                }, function (e) {
                    console.error(e);
                });

                waitsFor(function () {
                    return done;
                });
                runs(function () {
                    //console.log( features );
                    expect(features.length).toEqual(197);
                    var edenIndex;
                    array.some(features, function (f, i) {
                        if (f.get('name') == 'EDEN') {
                            edenIndex = i;
                            return true;
                        }
                        return false;
                    });
                    expect(edenIndex).toBeGreaterThan(3);
                    expect(edenIndex).toBeLessThan(7);
                    expect(features[edenIndex].get('subfeatures').length).toEqual(3);
                    expect(features[edenIndex].get('subfeatures')[0].get('subfeatures').length).toEqual(6);
                });
            }).call();

            (function () {
                var features = [];
                var done;

                p.getFeatures({ ref: 'ctgA', start: -1, end: 2499 }, function (f) {
                    features.push(f);
                }, function () {
                    done = true;
                }, function (e) {
                    console.error(e);
                });

                waitsFor(function () {
                    return done;
                });
                runs(function () {
                    //console.log( features );
                    expect(features.length).toEqual(13);
                    // expect( features[191].get('subfeatures').length ).toEqual( 3 );
                    // expect( features[191].get('subfeatures')[0].get('subfeatures').length ).toEqual( 6 );
                });
            }).call();

            (function () {
                var features = [];
                var done;

                p.getFeatures({ ref: 'ctgB', start: -1, end: 5000 }, function (f) {
                    features.push(f);
                }, function () {
                    done = true;
                }, function (e) {
                    console.error(e);
                });

                waitsFor(function () {
                    return done;
                });
                runs(function () {
                    //console.log( features );
                    expect(features.length).toEqual(4);
                    // expect( features[191].get('subfeatures').length ).toEqual( 3 );
                    // expect( features[191].get('subfeatures')[0].get('subfeatures').length ).toEqual( 6 );
                    expect(features[3].get('note')).toEqual('ああ、この機能は、世界中を旅しています！');
                });
            }).call();
        });
    });
}).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}).catch(__webpack_require__.oe);

/***/ }),
/* 389 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__.e/* require */(0/* aggressive-merge */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(29), __webpack_require__(361)]; ((function (Browser, SPARQLStore) {

    var testResults = { "head": { "link": [], "vars": ["start", "end", "strand", "type", "name", "description", "uniqueID", "parentUniqueID"] },
        "results": { "distinct": false, "ordered": true, "bindings": [{ "start": { "type": "typed-literal", "datatype": "http://www.w3.org/2001/XMLSchema#integer", "value": "109911" }, "end": { "type": "typed-literal", "datatype": "http://www.w3.org/2001/XMLSchema#integer", "value": "111062" }, "strand": { "type": "typed-literal", "datatype": "http://www.w3.org/2001/XMLSchema#integer", "value": "1" }, "type": { "type": "literal", "value": "gene" }, "name": { "type": "literal", "value": "Z0105" }, "uniqueID": { "type": "uri", "value": "urn:uuid:a13be970-7b65-4c19-ba02-6f4c70d6554c" }, "parentUniqueID": { "type": "uri", "value": "urn:uuid:75114bb8-2125-40f4-9f84-7b282947545a" } }, { "start": { "type": "typed-literal", "datatype": "http://www.w3.org/2001/XMLSchema#integer", "value": "111163" }, "end": { "type": "typed-literal", "datatype": "http://www.w3.org/2001/XMLSchema#integer", "value": "112080" }, "strand": { "type": "typed-literal", "datatype": "http://www.w3.org/2001/XMLSchema#integer", "value": "1" }, "type": { "type": "literal", "value": "gene" }, "name": { "type": "literal", "value": "Z0106" }, "uniqueID": { "type": "uri", "value": "urn:uuid:93363802-5b35-459f-aa50-156d0a903cb5" }, "parentUniqueID": { "type": "uri", "value": "urn:uuid:75114bb8-2125-40f4-9f84-7b282947545a" } }, { "start": { "type": "typed-literal", "datatype": "http://www.w3.org/2001/XMLSchema#integer", "value": "112311" }, "end": { "type": "typed-literal", "datatype": "http://www.w3.org/2001/XMLSchema#integer", "value": "112823" }, "strand": { "type": "typed-literal", "datatype": "http://www.w3.org/2001/XMLSchema#integer", "value": "1" }, "type": { "type": "literal", "value": "gene" }, "name": { "type": "literal", "value": "Z0107" }, "uniqueID": { "type": "uri", "value": "urn:uuid:0dd1db96-dc98-43db-869e-23d8a85acafc" }, "parentUniqueID": { "type": "uri", "value": "urn:uuid:75114bb8-2125-40f4-9f84-7b282947545a" } }, { "start": { "type": "typed-literal", "datatype": "http://www.w3.org/2001/XMLSchema#integer", "value": "112311" }, "end": { "type": "typed-literal", "datatype": "http://www.w3.org/2001/XMLSchema#integer", "value": "112823" }, "strand": { "type": "typed-literal", "datatype": "http://www.w3.org/2001/XMLSchema#integer", "value": "1" }, "type": { "type": "literal", "value": "CDS" }, "name": { "type": "literal", "value": "Z0107" }, "description": { "type": "literal", "value": "SecA regulator SecM" }, "uniqueID": { "type": "uri", "value": "urn:uuid:1067b2b7-2f61-40e4-a605-c47fbd413a04" }, "parentUniqueID": { "type": "uri", "value": "urn:uuid:0dd1db96-dc98-43db-869e-23d8a85acafc" } }, { "start": { "type": "typed-literal", "datatype": "http://www.w3.org/2001/XMLSchema#integer", "value": "109911" }, "end": { "type": "typed-literal", "datatype": "http://www.w3.org/2001/XMLSchema#integer", "value": "111062" }, "strand": { "type": "typed-literal", "datatype": "http://www.w3.org/2001/XMLSchema#integer", "value": "1" }, "type": { "type": "literal", "value": "CDS" }, "name": { "type": "literal", "value": "Z0105" }, "description": { "type": "literal", "value": "cell division protein FtsZ" }, "uniqueID": { "type": "uri", "value": "urn:uuid:07e9f502-3697-4073-b09d-7b7bea16b6c4" }, "parentUniqueID": { "type": "uri", "value": "urn:uuid:a13be970-7b65-4c19-ba02-6f4c70d6554c" } }, { "start": { "type": "typed-literal", "datatype": "http://www.w3.org/2001/XMLSchema#integer", "value": "111163" }, "end": { "type": "typed-literal", "datatype": "http://www.w3.org/2001/XMLSchema#integer", "value": "112080" }, "strand": { "type": "typed-literal", "datatype": "http://www.w3.org/2001/XMLSchema#integer", "value": "1" }, "type": { "type": "literal", "value": "CDS" }, "name": { "type": "literal", "value": "Z0106" }, "description": { "type": "literal", "value": "UDP-3-O-[3-hydroxymyristoyl] N-acetylglucosamine deacetylase" }, "uniqueID": { "type": "uri", "value": "urn:uuid:7d2f4928-b995-4077-84ce-b34040ec6ed1" }, "parentUniqueID": { "type": "uri", "value": "urn:uuid:93363802-5b35-459f-aa50-156d0a903cb5" } }, { "start": { "type": "typed-literal", "datatype": "http://www.w3.org/2001/XMLSchema#integer", "value": "109911" }, "end": { "type": "typed-literal", "datatype": "http://www.w3.org/2001/XMLSchema#integer", "value": "111062" }, "strand": { "type": "typed-literal", "datatype": "http://www.w3.org/2001/XMLSchema#integer", "value": "1" }, "type": { "type": "literal", "value": "gene" }, "name": { "type": "literal", "value": "Z0105" }, "uniqueID": { "type": "uri", "value": "urn:uuid:a13be970-7b65-4c19-ba02-6f4c70d6554c" }, "parentUniqueID": { "type": "uri", "value": "urn:uuid:75114bb8-2125-40f4-9f84-7b282947545a" } }, { "start": { "type": "typed-literal", "datatype": "http://www.w3.org/2001/XMLSchema#integer", "value": "111163" }, "end": { "type": "typed-literal", "datatype": "http://www.w3.org/2001/XMLSchema#integer", "value": "112080" }, "strand": { "type": "typed-literal", "datatype": "http://www.w3.org/2001/XMLSchema#integer", "value": "1" }, "type": { "type": "literal", "value": "gene" }, "name": { "type": "literal", "value": "Z0106" }, "uniqueID": { "type": "uri", "value": "urn:uuid:93363802-5b35-459f-aa50-156d0a903cb5" }, "parentUniqueID": { "type": "uri", "value": "urn:uuid:75114bb8-2125-40f4-9f84-7b282947545a" } }, { "start": { "type": "typed-literal", "datatype": "http://www.w3.org/2001/XMLSchema#integer", "value": "112311" }, "end": { "type": "typed-literal", "datatype": "http://www.w3.org/2001/XMLSchema#integer", "value": "112823" }, "strand": { "type": "typed-literal", "datatype": "http://www.w3.org/2001/XMLSchema#integer", "value": "1" }, "type": { "type": "literal", "value": "gene" }, "name": { "type": "literal", "value": "Z0107" }, "uniqueID": { "type": "uri", "value": "urn:uuid:0dd1db96-dc98-43db-869e-23d8a85acafc" }, "parentUniqueID": { "type": "uri", "value": "urn:uuid:75114bb8-2125-40f4-9f84-7b282947545a" } }, { "start": { "type": "typed-literal", "datatype": "http://www.w3.org/2001/XMLSchema#integer", "value": "112311" }, "end": { "type": "typed-literal", "datatype": "http://www.w3.org/2001/XMLSchema#integer", "value": "112823" }, "strand": { "type": "typed-literal", "datatype": "http://www.w3.org/2001/XMLSchema#integer", "value": "1" }, "type": { "type": "literal", "value": "CDS" }, "name": { "type": "literal", "value": "Z0107" }, "description": { "type": "literal", "value": "SecA regulator SecM" }, "uniqueID": { "type": "uri", "value": "urn:uuid:1067b2b7-2f61-40e4-a605-c47fbd413a04" }, "parentUniqueID": { "type": "uri", "value": "urn:uuid:0dd1db96-dc98-43db-869e-23d8a85acafc" } }, { "start": { "type": "typed-literal", "datatype": "http://www.w3.org/2001/XMLSchema#integer", "value": "109911" }, "end": { "type": "typed-literal", "datatype": "http://www.w3.org/2001/XMLSchema#integer", "value": "111062" }, "strand": { "type": "typed-literal", "datatype": "http://www.w3.org/2001/XMLSchema#integer", "value": "1" }, "type": { "type": "literal", "value": "CDS" }, "name": { "type": "literal", "value": "Z0105" }, "description": { "type": "literal", "value": "cell division protein FtsZ" }, "uniqueID": { "type": "uri", "value": "urn:uuid:07e9f502-3697-4073-b09d-7b7bea16b6c4" }, "parentUniqueID": { "type": "uri", "value": "urn:uuid:a13be970-7b65-4c19-ba02-6f4c70d6554c" } }, { "start": { "type": "typed-literal", "datatype": "http://www.w3.org/2001/XMLSchema#integer", "value": "111163" }, "end": { "type": "typed-literal", "datatype": "http://www.w3.org/2001/XMLSchema#integer", "value": "112080" }, "strand": { "type": "typed-literal", "datatype": "http://www.w3.org/2001/XMLSchema#integer", "value": "1" }, "type": { "type": "literal", "value": "CDS" }, "name": { "type": "literal", "value": "Z0106" }, "description": { "type": "literal", "value": "UDP-3-O-[3-hydroxymyristoyl] N-acetylglucosamine deacetylase" }, "uniqueID": { "type": "uri", "value": "urn:uuid:7d2f4928-b995-4077-84ce-b34040ec6ed1" }, "parentUniqueID": { "type": "uri", "value": "urn:uuid:93363802-5b35-459f-aa50-156d0a903cb5" } }] } };

    describe('SPARQL store', function () {
        var s;
        beforeEach(function () {
            s = new SPARQLStore({
                baseUrl: '',
                browser: new Browser({ unitTestMode: true }),
                refSeq: { name: 'ctgA', start: 1, end: 500001 },
                queryTemplate: "fake query",
                urlTemplate: "/sparql",
                variables: { foo: 42 }
            });
        });

        it('parses responses correctly', function () {
            var features = [];
            s._resultsToFeatures(testResults, function (f) {
                features.push(f);
            });
            expect(features.length).toEqual(3);
        });
    });
}).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}).catch(__webpack_require__.oe);

// "DEFINE sql:select-option \"order\""
//     + "prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>"+"prefix rdfs:   <http://www.w3.org/2000/01/rdf-schema#>"
//     + "prefix xsd:    <http://www.w3.org/2001/XMLSchema#>"+"prefix obo:    <http://purl.obolibrary.org/obo/>"+"prefix faldo:  <http://biohackathon.org/resource/faldo#>"
//     + "prefix idorg: <http://rdf.identifiers.org/database/>"
//     + "prefix insdc:  <http://insdc.org/owl/>"
//     + "select ?start,"+"       ?end,"+"       IF( ?faldo_type = faldo:ForwardStrandPosition,"+"           1,"+"           IF( ?faldo_type = faldo:ReverseStrandPosition,"+"               -1,"+"                0"+"             )"+"         ) as ?strand,"+"       str(?obj_type_name) as ?type,"+"       str(?label) as ?name,"+"       str(?obj_name) as ?description,"+"       ?obj as ?uniqueID,"+"       ?parent as ?parentUniqueID"+"from <http://togogenome.org/refseq/>"+"from <http://togogenome.org/so/>"+"from <http://togogenome.org/faldo/>"+"where {"+""+"  values ?faldo_type { faldo:ForwardStrandPosition faldo:ReverseStrandPosition faldo:BothStrandsPosition }"+"  values ?refseq_label { \"{ref}\" }"+"  #values ?obj_type {  obo:SO_0000704 }"+"  #filter( ?obj_type != obo:SO_0000704 )"+""+"  # on reference sequence"+"  ?obj obo:so_part_of+  ?seq ."+"  ?seq a ?seq_type."+"  ?seq_type rdfs:label ?seq_type_label."+"  ?seq rdfs:seeAlso ?refseq ."+"  ?refseq a idorg:RefSeq ."+"  ?refseq rdfs:label ?refseq_label ."+""+"  # get faldo begin and end"+"  ?obj faldo:location ?faldo ."+"  ?faldo faldo:begin/rdf:type ?faldo_type ."+"  ?faldo faldo:begin/faldo:position ?start ."+"  ?faldo faldo:end/faldo:position ?end ."+"  filter ( !(?start > {end} || ?end < {start}) )"+""+"  # feature type"+"  ?obj rdf:type ?obj_type ."+"  ?obj_type rdfs:label ?obj_type_name ."+"  optional {"+"    ?obj insdc:feature_locus_tag ?label ."+"  }"+""+"  # feature name is the feature product"+"  optional {"+"    ?obj insdc:feature_product ?obj_name ."+"  }"+""+"  #optional {"+"  #  ?obj rdfs:seeAlso ?obj_seealso ."+"  #}"+""+"  # faldo parent"+"  optional {"+"    ?obj obo:so_part_of ?parent ."+"   }"+"}"

/***/ }),
/* 390 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__.e/* require */(0/* aggressive-merge */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(29), __webpack_require__(356)]; ((function (Browser, ChunkStore) {

    describe('sequence chunk store', function () {
        var s;
        beforeEach(function () {
            s = new ChunkStore({
                browser: new Browser({ unitTestMode: true }),
                refSeq: { name: 'ctgA', start: 1, end: 500001 },
                config: {
                    baseUrl: '.',
                    urlTemplate: "../../sample_data/json/volvox/seq/{refseq_dirpath}/{refseq}-",
                    seqChunkSize: 20000
                }
            });
        });

        it('fetches some features', function () {
            var done,
                features = [];
            s.getFeatures({ ref: 'ctga', start: 100, end: 40000 }, function (f) {
                features.push(f);
            }, function () {
                done = true;
            }, function (e) {
                console.error(e);
            });
            waitsFor(function () {
                return done;
            });
            runs(function () {
                expect(features.length).toEqual(2);
                expect(features[0].get('residues').length).toEqual(20000);
                expect(features[1].get('residues').length).toEqual(20000);
            });
        });

        it('fetches ref seq as string 1', function () {
            var seq;
            s.getReferenceSequence({ ref: 'ctga', start: 0, end: 5 }, function (s) {
                seq = s;
            }, function (e) {
                console.error(e);
            });
            waitsFor(function () {
                return seq;
            });
            runs(function () {
                expect(seq).toEqual("cattg");
            });
        });

        it('fetches ref seq as string 2', function () {
            var seq;
            s.getReferenceSequence({ ref: 'ctga', start: 1, end: 5 }, function (s) {
                seq = s;
            }, function (e) {
                console.error(e);
            });
            waitsFor(function () {
                return seq;
            });
            runs(function () {
                expect(seq).toEqual("attg");
            });
        });

        it('fetches ref seq as string 3', function () {
            var seq;
            s.getReferenceSequence({ ref: 'ctga', start: 49999, end: 50001 }, function (s) {
                seq = s;
            }, function (e) {
                console.error(e);
            });
            waitsFor(function () {
                return seq;
            });
            runs(function () {
                expect(seq).toEqual("ac");
            });
        });

        it('fetches ref seq as string 4', function () {
            var seq;
            s.getReferenceSequence({ ref: 'ctga', start: 100, end: 105 }, function (s) {
                seq = s;
            }, function (e) {
                console.error(e);
            });
            waitsFor(function () {
                return seq;
            });
            runs(function () {
                expect(seq).toEqual("agcgg");
            });
        });

        it('fetches ref seq as string 5', function () {
            var seq;
            s.getReferenceSequence({ ref: 'ctga', start: 19996, end: 20005 }, function (s) {
                seq = s;
            }, function (e) {
                console.error(e);
            });
            waitsFor(function () {
                return seq;
            });
            runs(function () {
                expect(seq).toEqual("ttaccgcgt");
            });
        });

        it('fetches ref seq as string 6, with space padding at the beginning', function () {
            var seq;
            s.getReferenceSequence({ ref: 'ctga', start: -3, end: 5 }, function (s) {
                seq = s;
            }, function (e) {
                console.error(e);
            });
            waitsFor(function () {
                return seq;
            });
            runs(function () {
                expect(seq).toEqual("   cattg");
            });
        });

        it('fetches ref seq as string 7, with space padding at the end', function () {
            var seq;
            s.getReferenceSequence({ ref: 'ctga', start: 49999, end: 50003 }, function (s) {
                seq = s;
            }, function (e) {
                console.error(e);
            });
            waitsFor(function () {
                return seq;
            });
            runs(function () {
                expect(seq).toEqual("ac  ");
            });
        });

        it('fetches ref seq as string 8, with space padding at the beginning', function () {
            var seq;
            s.getReferenceSequence({ ref: 'ctga', start: -5, end: 1 }, function (s) {
                seq = s;
            }, function (e) {
                console.error(e);
            });
            waitsFor(function () {
                return seq;
            });
            runs(function () {
                expect(seq).toEqual("     c");
            });
        });

        it('fetches ref seq as string 9, with space padding at the beginning', function () {
            var seq;
            s.getReferenceSequence({ ref: 'ctga', start: -28, end: 1, seqChunkSize: 20000 }, function (s) {
                seq = s;
            }, function (e) {
                console.error(e);
            });
            waitsFor(function () {
                return seq;
            });
            runs(function () {
                expect(seq).toEqual("                            c");
            });
        });
    });
}).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}).catch(__webpack_require__.oe);

/***/ }),
/* 391 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__.e/* require */(0/* aggressive-merge */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(51), __webpack_require__(128), __webpack_require__(129), __webpack_require__(29), __webpack_require__(47), __webpack_require__(362)]; ((function (array, lang, xhr, Browser, XHRBlob, GFF3TabixStore) {

  describe('GFF3 tabix store', function () {
    it('can parse volvox_tabix.gff3.gz', function () {
      var p = new GFF3TabixStore({
        browser: new Browser({ unitTestMode: true }),
        file: new XHRBlob('../../sample_data/raw/volvox/volvox.sort.gff3.gz.1'),
        tbi: new XHRBlob('../../sample_data/raw/volvox/volvox.sort.gff3.gz.tbi'),
        refSeq: { name: 'ctgA', start: 0, end: 50001 }
      });

      var rangeStart = 1055,
          rangeEnd = 2500;


      var features = [];
      p.getFeatures({ ref: 'ctgA', start: rangeStart, end: rangeEnd }, function (f) {
        features.push(f);
      }, function () {
        features.done = true;
      }, function (e) {
        console.error(e.stack || '' + e);
      });

      waitsFor(function () {
        return features.done;
      });
      runs(function () {
        expect(features.length).toEqual(12);
        //console.log(JSON.stringify(features,undefined,2))

        // check that every top-level feature overlaps the fetched range
        features.forEach(function (feature) {
          expect(feature.get('start')).toBeLessThan(rangeEnd);
          expect(feature.get('end')).toBeGreaterThan(rangeStart);
        });

        var isEden = function isEden(f) {
          return f.get('name') === 'EDEN';
        };
        expect(features.filter(isEden).length).toEqual(1);
        var eden = features.find(isEden);
        //console.log(JSON.stringify(eden,undefined,2))
        // we should still get all the subfeatures of EDEN, some of which lie
        // entirely outside of the queried range
        expect(JSON.stringify(eden)).toEqual(JSON.stringify({
          "data": {
            "seq_id": "ctgA",
            "source": "example",
            "type": "gene",
            "start": 1049,
            "end": 9000,
            "score": null,
            "strand": 1,
            "phase": null,
            "id": "EDEN",
            "name": "EDEN",
            "note": "protein kinase",
            "uniqueID": "offset-873",
            "subfeatures": [{
              "data": {
                "seq_id": "ctgA",
                "source": "example",
                "type": "mRNA",
                "start": 1049,
                "end": 9000,
                "score": null,
                "strand": 1,
                "phase": null,
                "id": "EDEN.1",
                "parent": "EDEN",
                "name": "EDEN.1",
                "note": "Eden splice form 1",
                "index": "1",
                "uniqueID": "offset-945",
                "subfeatures": [{
                  "data": {
                    "seq_id": "ctgA",
                    "source": "example",
                    "type": "five_prime_UTR",
                    "start": 1049,
                    "end": 1200,
                    "score": null,
                    "strand": 1,
                    "phase": null,
                    "parent": "EDEN.1",
                    "uniqueID": "offset-1145"
                  },
                  "_uniqueID": "offset-1145"
                }, {
                  "data": {
                    "seq_id": "ctgA",
                    "source": "example",
                    "type": "CDS",
                    "start": 1200,
                    "end": 1500,
                    "score": null,
                    "strand": 1,
                    "phase": "0",
                    "parent": "EDEN.1",
                    "uniqueID": "offset-1584"
                  },
                  "_uniqueID": "offset-1584"
                }, {
                  "data": {
                    "seq_id": "ctgA",
                    "source": "example",
                    "type": "CDS",
                    "start": 2999,
                    "end": 3902,
                    "score": null,
                    "strand": 1,
                    "phase": "0",
                    "parent": "EDEN.1",
                    "uniqueID": "offset-2148"
                  },
                  "_uniqueID": "offset-2148"
                }, {
                  "data": {
                    "seq_id": "ctgA",
                    "source": "example",
                    "type": "CDS",
                    "start": 4999,
                    "end": 5500,
                    "score": null,
                    "strand": 1,
                    "phase": "0",
                    "parent": "EDEN.1",
                    "uniqueID": "offset-2627"
                  },
                  "_uniqueID": "offset-2627"
                }, {
                  "data": {
                    "seq_id": "ctgA",
                    "source": "example",
                    "type": "CDS",
                    "start": 6999,
                    "end": 7608,
                    "score": null,
                    "strand": 1,
                    "phase": "0",
                    "parent": "EDEN.1",
                    "uniqueID": "offset-3432"
                  },
                  "_uniqueID": "offset-3432"
                }, {
                  "data": {
                    "seq_id": "ctgA",
                    "source": "example",
                    "type": "three_prime_UTR",
                    "start": 7608,
                    "end": 9000,
                    "score": null,
                    "strand": 1,
                    "phase": null,
                    "parent": "EDEN.1",
                    "uniqueID": "offset-3758"
                  },
                  "_uniqueID": "offset-3758"
                }]
              },
              "_uniqueID": "offset-945"
            }, {
              "data": {
                "seq_id": "ctgA",
                "source": "example",
                "type": "mRNA",
                "start": 1049,
                "end": 9000,
                "score": null,
                "strand": 1,
                "phase": null,
                "id": "EDEN.2",
                "parent": "EDEN",
                "name": "EDEN.2",
                "note": "Eden splice form 2",
                "index": "1",
                "uniqueID": "offset-1045",
                "subfeatures": [{
                  "data": {
                    "seq_id": "ctgA",
                    "source": "example",
                    "type": "five_prime_UTR",
                    "start": 1049,
                    "end": 1200,
                    "score": null,
                    "strand": 1,
                    "phase": null,
                    "parent": "EDEN.2",
                    "uniqueID": "offset-1203"
                  },
                  "_uniqueID": "offset-1203"
                }, {
                  "data": {
                    "seq_id": "ctgA",
                    "source": "example",
                    "type": "CDS",
                    "start": 1200,
                    "end": 1500,
                    "score": null,
                    "strand": 1,
                    "phase": "0",
                    "parent": "EDEN.2",
                    "uniqueID": "offset-1631"
                  },
                  "_uniqueID": "offset-1631"
                }, {
                  "data": {
                    "seq_id": "ctgA",
                    "source": "example",
                    "type": "CDS",
                    "start": 4999,
                    "end": 5500,
                    "score": null,
                    "strand": 1,
                    "phase": "0",
                    "parent": "EDEN.2",
                    "uniqueID": "offset-2674"
                  },
                  "_uniqueID": "offset-2674"
                }, {
                  "data": {
                    "seq_id": "ctgA",
                    "source": "example",
                    "type": "CDS",
                    "start": 6999,
                    "end": 7608,
                    "score": null,
                    "strand": 1,
                    "phase": "0",
                    "parent": "EDEN.2",
                    "uniqueID": "offset-3479"
                  },
                  "_uniqueID": "offset-3479"
                }, {
                  "data": {
                    "seq_id": "ctgA",
                    "source": "example",
                    "type": "three_prime_UTR",
                    "start": 7608,
                    "end": 9000,
                    "score": null,
                    "strand": 1,
                    "phase": null,
                    "parent": "EDEN.2",
                    "uniqueID": "offset-3817"
                  },
                  "_uniqueID": "offset-3817"
                }]
              },
              "_uniqueID": "offset-1045"
            }, {
              "data": {
                "seq_id": "ctgA",
                "source": "example",
                "type": "mRNA",
                "start": 1299,
                "end": 9000,
                "score": null,
                "strand": 1,
                "phase": null,
                "id": "EDEN.3",
                "parent": "EDEN",
                "name": "EDEN.3",
                "note": "Eden splice form 3",
                "index": "1",
                "uniqueID": "offset-1678",
                "subfeatures": [{
                  "data": {
                    "seq_id": "ctgA",
                    "source": "example",
                    "type": "five_prime_UTR",
                    "start": 1299,
                    "end": 1500,
                    "score": null,
                    "strand": 1,
                    "phase": null,
                    "parent": "EDEN.3",
                    "uniqueID": "offset-1778"
                  },
                  "_uniqueID": "offset-1778"
                }, {
                  "data": {
                    "seq_id": "ctgA",
                    "source": "example",
                    "type": "five_prime_UTR",
                    "start": 2999,
                    "end": 3300,
                    "score": null,
                    "strand": 1,
                    "phase": null,
                    "parent": "EDEN.3",
                    "uniqueID": "offset-2195"
                  },
                  "_uniqueID": "offset-2195"
                }, {
                  "data": {
                    "seq_id": "ctgA",
                    "source": "example",
                    "type": "CDS",
                    "start": 3300,
                    "end": 3902,
                    "score": null,
                    "strand": 1,
                    "phase": "0",
                    "parent": "EDEN.3",
                    "uniqueID": "offset-2327"
                  },
                  "_uniqueID": "offset-2327"
                }, {
                  "data": {
                    "seq_id": "ctgA",
                    "source": "example",
                    "type": "CDS",
                    "start": 4999,
                    "end": 5500,
                    "score": null,
                    "strand": 1,
                    "phase": "1",
                    "parent": "EDEN.3",
                    "uniqueID": "offset-2721"
                  },
                  "_uniqueID": "offset-2721"
                }, {
                  "data": {
                    "seq_id": "ctgA",
                    "source": "example",
                    "type": "CDS",
                    "start": 6999,
                    "end": 7600,
                    "score": null,
                    "strand": 1,
                    "phase": "1",
                    "parent": "EDEN.3",
                    "uniqueID": "offset-3385"
                  },
                  "_uniqueID": "offset-3385"
                }, {
                  "data": {
                    "seq_id": "ctgA",
                    "source": "example",
                    "type": "three_prime_UTR",
                    "start": 7600,
                    "end": 9000,
                    "score": null,
                    "strand": 1,
                    "phase": null,
                    "parent": "EDEN.3",
                    "uniqueID": "offset-3699"
                  },
                  "_uniqueID": "offset-3699"
                }]
              },
              "_uniqueID": "offset-1678"
            }]
          },
          "_uniqueID": "EDEN",
          "_reg_seq_id": "ctga"
        }));

        expect(eden.children().length).toEqual(3);
        expect(eden.children()[0].children().length).toEqual(6);
      });
    });
    it('reads a CSI index', function () {
      var store = new GFF3TabixStore({
        browser: new Browser({ unitTestMode: true }),
        config: {
          urlTemplate: '../data/fake_large_chromosome/test.gff3.gz',
          csiUrlTemplate: '../data/fake_large_chromosome/test.gff3.gz.csi',
          baseUrl: '.'
        },
        refSeq: { name: '1', start: 0, end: 1248055161 }
      });

      var rangeStart = 1000001055,
          rangeEnd = 1000002500;


      var features = [];
      waitsFor(function () {
        return features.done;
      });
      store.getFeatures({ ref: '1',
        start: rangeStart,
        end: rangeEnd
      }, function (f) {
        features.push(f);
      }, function () {
        features.done = true;
      }, function (e) {
        console.error(e.stack || '' + e);
      });
      runs(function () {
        expect(features.length).toEqual(12);
      });
    });
  });
}).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}).catch(__webpack_require__.oe);

/***/ }),
/* 392 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__.e/* require */(0/* aggressive-merge */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(51), __webpack_require__(128), __webpack_require__(129), __webpack_require__(29), __webpack_require__(47), __webpack_require__(365)]; ((function (array, lang, xhr, Browser, XHRBlob, BEDTabixStore) {

    describe('BED store', function () {
        it('can parse BED-6 tabix', function () {
            var p = new BEDTabixStore({
                browser: new Browser({ unitTestMode: true }),
                file: new XHRBlob('../data/volvox-remark.bed.gz'),
                tbi: new XHRBlob('../data/volvox-remark.bed.gz.tbi'),
                refSeq: { name: 'ctgA', start: 0, end: 50001 }
            });
            (function () {
                var features = [];
                p.getFeatures({ ref: 'ctgA', start: 1, end: 50000 }, function (f) {
                    features.push(f);
                }, function () {
                    features.done = true;
                }, function (e) {
                    console.error(e.stack || '' + e);
                });

                waitsFor(function () {
                    return features.done;
                });
                runs(function () {
                    expect(features.length).toEqual(16);
                    var c = 0;
                    features.forEach(function (elt) {
                        c += elt.get('strand') == 1;
                    });
                    expect(c).toEqual(9);
                    var d = 0;
                    features.forEach(function (elt) {
                        d += elt.get('strand') == -1;
                    });
                    expect(d).toEqual(6);
                    var e = 0;
                    features.forEach(function (elt) {
                        e += elt.get('strand') == 0;
                    });
                    expect(e).toEqual(1);
                });
            }).call();
        });
        it('can parse BED-3 tabix', function () {
            var p = new BEDTabixStore({
                browser: new Browser({ unitTestMode: true }),
                file: new XHRBlob('../../sample_data/raw/volvox/volvox.sort.bed.gz.1'),
                tbi: new XHRBlob('../../sample_data/raw/volvox/volvox.sort.bed.gz.tbi'),
                refSeq: { name: 'ctgA', start: 0, end: 50001 }
            });
            (function () {
                var features = [];
                p.getFeatures({ ref: 'ctgA', start: 1, end: 50000 }, function (f) {
                    features.push(f);
                }, function () {
                    features.done = true;
                }, function (e) {
                    console.error(e.stack || '' + e);
                });

                waitsFor(function () {
                    return features.done;
                });
                runs(function () {
                    //console.log( features );
                    expect(features.length).toEqual(109);
                });
            }).call();
        });
    });
}).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}).catch(__webpack_require__.oe);

/***/ }),
/* 393 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__.e/* require */(0/* aggressive-merge */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(51), __webpack_require__(128), __webpack_require__(129), __webpack_require__(29), __webpack_require__(47), __webpack_require__(366)]; ((function (array, lang, xhr, Browser, XHRBlob, BEDStore) {

    describe('BED store', function () {
        it('can parse BED-6', function () {
            var p = new BEDStore({
                browser: new Browser({ unitTestMode: true }),
                blob: new XHRBlob('../../sample_data/raw/volvox/volvox-remark.bed'),
                refSeq: { name: 'ctgA', start: 0, end: 50001 }
            });
            (function () {
                var features = [];
                p.getFeatures({ ref: 'ctgA', start: 1, end: 50000 }, function (f) {
                    features.push(f);
                }, function () {
                    features.done = true;
                }, function (e) {
                    console.error(e.stack || '' + e);
                });

                waitsFor(function () {
                    return features.done;
                });
                runs(function () {
                    expect(features.length).toEqual(16);
                    var c = 0;
                    features.forEach(function (elt) {
                        c += elt.get('strand') == 1;
                    });
                    expect(c).toEqual(9);
                    var d = 0;
                    features.forEach(function (elt) {
                        d += elt.get('strand') == -1;
                    });
                    expect(d).toEqual(6);
                    var e = 0;
                    features.forEach(function (elt) {
                        e += elt.get('strand') == 0;
                    });
                    expect(e).toEqual(1);
                });
            }).call();
        });
        it('can parse BED-3', function () {
            var p = new BEDStore({
                browser: new Browser({ unitTestMode: true }),
                blob: new XHRBlob('../data/volvox.sort.bed'),
                refSeq: { name: 'ctgA', start: 0, end: 50001 }
            });
            (function () {
                var features = [];
                p.getFeatures({ ref: 'ctgA', start: 1, end: 50000 }, function (f) {
                    features.push(f);
                }, function () {
                    features.done = true;
                }, function (e) {
                    console.error(e.stack || '' + e);
                });

                waitsFor(function () {
                    return features.done;
                });
                runs(function () {
                    expect(features.length).toEqual(109);
                });
            }).call();
        });
    });
}).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}).catch(__webpack_require__.oe);

/***/ }),
/* 394 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__.e/* require */(0/* aggressive-merge */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(352), __webpack_require__(29), __webpack_require__(335), __webpack_require__(47)]; ((function (TwoBitStore, Browser, aspect, XHRBlob) {

    describe(".2bit data store with T_ko.2bit", function () {

        var t = new TwoBitStore({
            browser: new Browser({ unitTestMode: true }),
            blob: new XHRBlob("../data/T_ko.2bit")
        });

        it("constructs", function () {
            expect(t).toBeTruthy();
        });

        it("loads some data", function () {
            var done;
            var features = [];

            var pythonReaderOutput = "ATGATCCTCGACACTGACTACATAACCGAGGATGGAAAGCCTGTCATAAGAATTTTCAAG AAGGAAAACGGCGAGTTTAAGATTGAGTACGACCGGACTTTTGAACCCTACTTCTACGCC CTCCTGAAGGACGATTCTGCCATTGAGGAAGTCAAGAAGATAACCGCCGAGAGGCACGGG ACGGTTGTAACGGTTAAGCGGGTTGAAAAGGTTCAGAAGAAGTTCCTCGGGAGACCAGTT GAGGTCTGGAAACTCTACTTTACTCATCCGCAGGACGTCCCAGCGATAAGGGACAAGATA CGAGAGCATCCAGCAGTTATTGACATCTACGAGTACGACATACCCTTCGCCAAGCGCTAC CTCATAGACAAGGGATTAGTGCCAATGGAAGGCGACGAGGAGCTGAAAATGCTCGCCTTC GACATTGAAACTCTCTACCATGAGGGCGAGGAGTTCGCCGAGGGGCCAATCCTTATGATA AGCTACGCCGACGAGGAAGGGGCCAGGGTGATAACTTGGAAGAACGTGGATCTCCCCTAC GTTGACGTCGTCTCGACGGAGAGGGAGATGATAAAGCGCTTCCTCCGTGTTGTGAAGGAG AAAGACCCGGACGTTCTCATAACCTACAACGGCGACAACTTCGACTTCGCCTATCTGAAA AAGCGCTGTGAAAAGCTCGGAATAAACTTCGCCCTCGGAAGGGATGGAAGCGAGCCGAAG ATTCAGAGGATGGGCGACAGGTTTGCCGTCGAAGTGAAGGGACGGATACACTTCGATCTC TATCCTGTGATAAGACGGACGATAAACCTGCCCACATACACGCTTGAGGCCGTTTATGAA GCCGTCTTCGGTCAGCCGAAGGAGAAGGTTTACGCTGAGGAAATAACCACAGCCTGGGAA ACCGGCGAGAACCTTGAGAGAGTCGCCCGCTACTCGATGGAAGATGCGAAGGTCACATAC GAGCTTGGGAAGGAGTTCCTTCCGATGGAGGCCCAGCTTTCTCGCTTAATCGGCCAGTCC CTCTGGGACGTCTCCCGCTCCAGCACTGGCAACCTCGTTGAGTGGTTCCTCCTCAGGAAG GCCTATGAGAGGAATGAGCTGGCCCCGAACAAGCCCGATGAAAAGGAGCTGGCCAGAAGA CGGCAGAGCTATGAAGGAGGCTATGTAAAAGAGCCCGAGAGAGGGTTGTGGGAGAACATA GTGTACCTAGATTTTAGATGCCATCCAGCCGATACGAAGGTTGTCGTCAAGGGGAAGGGG ATTATAAACATCAGCGAGGTTCAGGAAGGTGACTATGTCCTTGGGATTGACGGCTGGCAG AGAGTTAGAAAAGTATGGGAATACGACTACAAAGGGGAGCTTGTAAACATAAACGGGTTA AAGTGTACGCCCAATCATAAGCTTCCCGTTGTTACAAAGAACGAACGACAAACGAGAATA AGAGACAGTCTTGCTAAGTCTTTCCTTACTAAAAAAGTTAAGGGCAAGATAATAACCACT CCCCTTTTCTATGAAATAGGCAGAGCGACAAGTGAGAATATTCCAGAAGAAGAGGTTCTC AAGGGAGAGCTCGCTGGCATACTATTGGCTGAAGGAACGCTCTTGAGGAAAGACGTTGAA TACTTTGATTCATCCCGCAAAAAACGGAGGATTTCACACCAGTATCGTGTTGAGATAACC ATTGGGAAAGACGAGGAGGAGTTTAGGGATCGTATCACATACATTTTTGAGCGTTTGTTT GGGATTACTCCAAGCATCTCGGAGAAGAAAGGAACTAACGCAGTAACACTCAAAGTTGCG AAGAAGAATGTTTATCTTAAAGTCAAGGAAATTATGGACAACATAGAGTCCCTACATGCC CCCTCGGTTCTCAGGGGATTCTTCGAAGGCGACGGTTCAGTAAACAGGGTTAGGAGGAGT ATTGTTGCAACCCAGGGTACAAAGAACGAGTGGAAGATTAAACTGGTGTCAAAACTGCTC TCCCAGCTTGGTATCCCTCATCAAACGTACACGTATCAGTATCAGGAAAATGGGAAAGAT CGGAGCAGGTATATACTGGAGATAACTGGAAAGGACGGATTGATACTGTTCCAAACACTC ATTGGATTCATCAGTGAAAGAAAGAACGCTCTGCTTAATAAGGCAATATCTCAGAGGGAA ATGAACAACTTGGAAAACAATGGATTTTACAGGCTCAGTGAATTCAATGTCAGCACGGAA TACTATGAGGGCAAGGTCTATGACTTAACTCTTGAAGGAACTCCCTACTACTTTGCCAAT GGCATATTGACCCATAACTCCCTGTACCCCTCAATCATCATCACCCACAACGTCTCGCCG GATACGCTCAACAGAGAAGGATGCAAGGAATATGACGTTGCCCCACAGGTCGGCCACCGC TTCTGCAAGGACTTCCCAGGATTTATCCCGAGCCTGCTTGGAGACCTCCTAGAGGAGAGG CAGAAGATAAAGAAGAAGATGAAGGCCACGATTGACCCGATCGAGAGGAAGCTCCTCGAT TACAGGCAGAGGGCCATCAAGATCCTGGCAAACAGCATCCTACCCGAGGAATGGCTTCCA GTCCTCGAGGAAGGGGAGGTTCACTTCGTCAGGATTGGAGAGCTCATAGACCGGATGATG GAGGAAAATGCTGGGAAAGTAAAGAGAGAGGGCGAGACGGAAGTGCTTGAGGTCAGTGGG CTTGAAGTCCCGTCCTTTAACAGGAGAACTAAGAAGGCCGAGCTCAAGAGAGTAAAGGCC CTGATTAGGCACGATTATTCTGGCAAGGTCTACACCATCAGACTGAAGTCGGGGAGGAGA ATAAAGATAACCTCTGGCCACAGCCTCTTCTCTGTGAGAAACGGGGAGCTCGTTGAAGTT ACGGGCGATGAACTAAAGCCAGGTGACCTCGTTGCAGTCCCGCGGAGATTGGAGCTTCCT GAGAGAAACCACGTGCTGAACCTCGTTGAACTGCTCCTTGGAACGCCAGAAGAAGAAACT TTGGACATCGTCATGACGATCCCAGTCAAGGGTAAGAAGAACTTCTTTAAAGGGATGCTC AGGACTTTGCGCTGGATTTTCGGAGAGGAAAAGAGGCCCAGAACCGCGAGACGCTATCTC AGGCACCTTGAGGATCTGGGCTATGTCCGGCTTAAGAAGATCGGCTACGAAGTCCTCGAC TGGGACTCACTTAAGAACTACAGAAGGCTCTACGAGGCGCTTGTCGAGAACGTCAGATAC AACGGCAACAAGAGGGAGTACCTCGTTGAATTCAATTCCATCCGGGATGCAGTTGGCATA ATGCCCCTAAAAGAGCTGAAGGAGTGGAAGATCGGCACGCTGAACGGCTTCAGAATGAGC CCGCTCATTGAAGTGGACGAGTCGTTAGCAAAGCTCCTCGGCTACTACGTGAGCGAGGGC TATGCAAGAAAGCAGAGGAATCCCAAAAACGGCTGGAGCTACAGCGTGAAGCTCTACAAC GAAGACCCTGAAGTGCTGGACGATATGGAGAGACTCGCCAGCAGGTTTTTCGGGAAGGTG AGGCGGGGCAGGAACTACGTTGAGATACCGAAGAAGATCGGCTACCTGCTCTTTGAGAAC ATGTGCGGTGTCCTAGCGGAGAACAAGAGGATTCCCGAGTTCGTCTTCACGTCCCCGAAA GGGGTTCGGCTGGCCTTCCTTGAGGGGTACTTCATCGGCGATGGCGACGTCCACCCGAAC AAGAGACTCAGGCTCTCAACGAAAAGCGAGCTTTTAGCGAACCAGCTCGTCCTCCTCTTG AACTCGGTGGGGGTCTCTGCTGTAAAACTTGGGCACGACAGCGGCGTTTACAGGGTCTAT ATAAACGAGGAGCTCCCGTTCGTAAAGCTGGACAAGAAAAAGAACGCCTACTACTCACAC GTGATCCCCAAGGAAGTCCTGAGCGAGGTCTTTGGGAAGGTTTTCCAGAAAAACGTCAGT CCTCAGACCTTCAGGAAGATGGTCGAGGACGGAAGACTCGATCCCGAAAAGGCCCAGAGG CTCTCCTGGCTCATTGAGGGGGACGTAGTGCTCGACCGCGTTGAGTCCGTTGATGTGGAA GACTACGATGGTTATGTCTATGACCTGAGCGTCGAGGACAACGAGAACTTCCTCGTTGGC TTTGGGTTGGTCTATGCTCACAACAGCTACTACGGTTACTACGGCTATGCAAGGGCGCGC TGGTACTGCAAGGAGTGTGCAGAGAGCGTAACGGCCTGGGGAAGGGAGTACATAACGATG ACCATCAAGGAGATAGAGGAAAAGTACGGCTTTAAGGTAATCTACAGCGACACCGACGGA TTTTTTGCCACAATACCTGGAGCCGATGCTGAAACCGTCAAAAAGAAGGCTATGGAGTTC CTCAAGTATATCAACGCCAAACTTCCGGGCGCGCTTGAGCTCGAGTACGAGGGCTTCTAC AAACGCGGCTTCTTCGTCACGAAGAAGAAGTATGCGGTGATAGACGAGGAAGGCAAGATA ACAACGCGCGGACTTGAGATTGTGAGGCGTGACTGGAGCGAGATAGCGAAAGAGACGCAG GCGAGGGTTCTTGAAGCTTTGCTAAAGGACGGTGACGTCGAGAAGGCCGTGAGGATAGTC AAAGAAGTTACCGAAAAGCTGAGCAAGTACGAGGTTCCGCCGGAGAAGCTGGTGATCCAC GAGCAGATAACGAGGGATTTAAAGGACTACAAGGCAACCGGTCCCCACGTTGCCGTTGCC AAGAGGTTGGCCGCGAGAGGAGTCAAAATACGCCCTGGAACGGTGATAAGCTACATCGTG CTCAAGGGCTCTGGGAGGATAGGCGACAGGGCGATACCGTTCGACGAGTTCGACCCGACG AAGCACAAGTACGACGCCGAGTACTACATTGAGAACCAGGTTCTCCCAGCCGTTGAGAGA ATTCTGAGAGCCTTCGGTTACCGCAAGGAAGACCTGCGCTACCAGAAGACGAGACAGGTT GGTTTGAGTGCTTGGCTGAAGCCGAAGGGAACTTGACCTTTCCATTTGTTTTCCAGCGGA TAACCCTTTAACTTCCCTTTCAAAAACTCCCTTTAGGGAAAGACCATGAAGATAGAAATC CGGCGGCGCCCGGTTAAATACGCTAGGATAGAAGTGAAGCCAGACGGCAGGGTAGTCGTC ACTGCCCCCGAGGGGTTCAACGTTGAGAAGTTCATAGCAAAGAACGCCGCCTGGCTGGAG GGGAAGCTGGCCCAGATTGAAGGTCTGAAAGAGCTTGCAGAGTCGGGCTTTCCCCTGAAC GGCGAGTTCTACAAGGTCATACACGGAAGGAGGGCGAAAGTTCATGACAGCTTTAGGACC GTTGTTCTCCCCCCTTATCCCGAAGACATGCGGGAAGAACTGAAAAGGCTTCTCCGGCCG GAGATATTTGGGCTTATTGAAAAATACGCAGGAAAAATGGGAGTATCCCCCGGCAAGGTC TTCATCCGTTCGCAGAGGACAAGGTGGGGCAGCTGTTCTGGAAAGGGCAACCTGAACTTC AACCTTCGCCTGATAGCCCTTCCGCCGGAGCTCAGGGAGTACGTTGTCGTCCACGAGCTT GCTCACCTTAAGCACAGAAACCACTCAAAGGCCTTCTGGAGCCTTGTCTCCCGCTTCTAC CCGGACTACCGCTCCGCAAGGGAAGAGCTGAAGAAGTGGTGGAGCATTCTGGAGCTGAAC CCGTACTGGCGGTGGCTGGAGGGAAGGGAGTGACGCTGAAGGGAGTTTTAAAGCTCCTCC TTCTTTCAGCGGACGAAATAGCTGTCGCGGTCTTTATCTTTGTAGTTCTCCCCGGATTTG GGGTTGATGTGCCCTTGAAAGTATCCGTTCCACTTTTGGTGCTCCTGCTCCTCAAGGATA TTTTAATCGCCCCATACGTCCTCGGAGGCGGACTCGAAAAGAGGCCTTTAACTGGCCCTG AGGCTTTGATAGGGATGGAGGCGGTGGTCGTTGAAGACCTATCTCCAGAGGGTATCGTCA AAGTTGGGAACGAGCTGTGGAGAGGGGTCTGCTTAAACGGAAGGGCCAAGAGGGGAGAAA AAGTCAGGATCGTTGGATTCAGGGGGAACCTCCTACTACTGGAACGCCCAGAGTCCTGAG AACCTCTGCCAGCTCTTCGGGCCTGTTGGTGGTGAATGAGATGCTCCAGCCTTTAGTTCT TTCAATGAGAACGCAGGCCTTCCCTGGGTAAGTGTAGTGTATCGTCCCGCTGCAGCTCAT CCAGCCCTCTGAAATTCTGACGAGCTTTATCTCGTCGAGCCGGATCGTCTTTCTGGCGAG GAGACCGAGGGCACTTCTGATTTTCAGTCTCTCCTCATCCACTTCAATCTTTAGCTGCAT CAGGTCAAGGGCTATTGCCACAAACGGAAGAAGAAAAACGAGGAGAAACGTCATGTCTTC GCCTGCCAGGTATGAAGCTCCTATTCCTATGGTCATTCCTAGGAAGGCTGGGAGCATTAT GAGGAGCATCTTCCAGCTCCTGACGGTCTCGGAGTAGATGGCCACCACCGAGGGATTTTC CACTACCTCTTTAAAGCCCTTTTCCAAAGGTTACCAGGTGATAAGATGGTTCGGATAATG CCCGTTGACAGGCTGAGCGATGAGGAGGTAAGAGAAATTCTCACAAAGTACCGGAAGATA GCGCTCGTCGGCGCCTCACCAAAGCCGGAGCGCGATGCTAACAGGGTCATGCGCTATCTC CTCGAACACGGCTATGAGGTCTATCCCGTGAACCCGCGCTACGATGAGGTTCTCGGGAGG AAGTGCTATCCTAGCGTTCTTGACATCCCGGATGAGGTTGAAATCGTTGACCTCTTCGTT AGGCCAGAGTTCACTATGGACTACGTGGAACAGGCGATAAAGAAGGGTGCGAAGGTGGTC TGGTTCCAGTTCAACACCTACAACAGGGAGGCGTTCAGGAAAGCGAAAGAAGCGGGCCTT ACAGCAGTCGCTCACAGGTGCATAAAGCAGGAGCACGAGAGGCTTATCGGGTAATTCCAA GGAGCTCAAGGAGTTCTTTGGTGTTCACCACGTCAATCTCCTCTATTTCCTTCAGTCTCT TGTCGTTGTTCCACAGGGGGCTTTTACTTTTAGGGCCAGTGCCACAAAGTCAGCGTCATC TTTGTCGGGGGTTATTCGAGTGCTAGAGGTATGAACTCGGCGTAGAACCCCTCGTTTACG AATATGACATGCTCTTTAAGAACGGACAGTATTTCCTCGAACTCTTTCTCTCCGATCTTT GCTTTTTTCAGGACTTCGTCCCTGTGCTCGTGAAGCTCTTCCAGTGCAAACTCGGGACTT ATAAGTCTCCCTGATACCAAGAACACGAGCTCTCTGGTTACTGTTGATTTCCCGAAGAAA GAGAATAGCACGTTTGTGTTAACTACGAGAAGAATATCTTCTCTCAAGGTACTCGCCCCT TCCCATTTTCGCCTTCCGTCCGAGTTCTATTGCATCCTCTTCTGAGAGTTCGGAGTTCTT GAGCATCTCATTGAGCCTTGCGAGGGTTTTCAGTCTCTCCGCGATAGTCTTTGCTATCAA ATCGGCCAGCTTTTCGTCCACACTCGGGGGGACCTTGACCACTATGTCTCCCACGCTATC ACCGCTCTTACTACGCCGCTCTGCTTATAACGGTTTATCCTCTGTACCTCAGCACGTGGA TGTCCCTTACGACCCTGTGCCTCTCCTCGTAGTCAGGGTACCTCCCGAGGACTTCAAAGC CGAGCTTCACGAGCCACTTCCTCTCCTTCCGGTATATTCCACCGCCGCTCAGCTTGTAGG CCGGGAAGACAAAGACAACCTTTCCGTTTCTTTTCAGAACGTCGGCAAAGCTCTCGAAGA CCGAATAATAGAAGCGGTCGAGCTCGTTGGCCAGCTTTATGGCCTCGCCCCTACTCGGGT GTCTTTTGAGGGGCTTTCCGAGGTAGGGTTCGGTGACTATAGCATCGAACCTCTGTCTAA AACACTTCTTCAGCTTTCTGGCGTCGCAGACTTCTAAGTGAGCCGAGTTTTTGAGCCGGA ACTCTTTCCTCAGCCAGGTGAGATTCTTCTTGGCATCCCTGATCTGCCCCTCGTCGCGGT CGCTCCCGTAGGCAGTAAGCCCCTGAAGAACGAACTCCTGAACCACCGTTCCAATGCCGC AGAACGGATCCAGGAAGCTCCCCTTTCTAACCTCCGTCAGGTTCACCATTATCCTTGCCA GTCTCGGCGGAATCGAGAGGATGGGCTTCTGGACGGGCCTCTCGACGTCGAGCTTCTTCA GCTCGAAGGGGTCCGTTACTCTGATCGTCTCGCCGACGAGGAAGCTCCCGTCTTCCCTGA ACAGAAAGACGAAGTCCTTAACCTCCGGAAAGCCCTTGAGGATGAGCTCCGCGGGCATGG CATATGTTTTTGCGGGCTTGAAGAACTTAGCTGACCCCTCCTCTTTGAACCTCTTCTTTA TCTCGCTCCCGAGCTTACGCCAGAGCTTCCAGTCGCTCTTCCCGTAGAGACTGACCGTAA AAAGCCTGGAGTACTCCAGCTCCTCCAGAGCCTCTTCTCCCTCCCCAACTATCCTGACGA GCTTGAGAGAACCGCCTATCCACCGGAAATATCTCTCCACCGAAGGCTTGGATTCAAAGA CTATCCAGTTATGCTCTTCCTCAATCGATTTAACTTTTAGTCCGAATCTTCTCCCGAAAG AGTAAAATTCAGCACGGCTGAGCTCTGAATTCTTTCCTAAGATTACTCCATACATGGATT GCGCTTTGAGTAAGCTTTTAAAAAGGTTCCGCGTAAATATAATTGGGATTTAATCAAAAA CATGAGTCCACGGTGACCACCTATGCTGACGGTTGAGGTTCTTAAATCAGCTGACATCAT ACCTGATCCATATACGCGCGCGGTAACCTACGCCCGGTTAGGTGAGACGCTTGTGCGCAG GAAGGATCCCCTTTATAAGGAGGCGTTTTTGAAGGCGTTTGACGCGTTGAACGATATAAA CGATCCCGAACTTCTACTCAGGGCAACCCTAGCCATAGGGTACCACATGGGAAAAGCTGG GATCAAAGCGTACTACAAGGTGTTTCTGAGGGTGGTTGAAGATTCCTCTGCTTTATCTCC TCCAGTTAGAGACGAAATTTTAGCACTTGCCGTCAGGTACCTAGTGAGCCTCGGGAACCT CGGACAGGCCGTAACACTCGCGACGGAAATTTCGGATAAGAAACTTGCACAGGCCACTCT CTTCTCCATAGTCCGGGCGGGGAGCAGGTTAATTCAGGACAGCTCCCTAAAGGCGGCCTA CAAGCTCAGGAAAATCAAGCTGGCGCTTGAGTATATAACTGACGAGCCATATCGCTCAAA GGCCCTGATAGAGCTGGCAAAGGCTTTTATTGCGGTGGGGAGTTATGAGAGGGCGCTGGC CACGATTAGGGAAATAGAATCCCCAGATTGGGCTAAGGTTGCCTTCAAGGAACTTACCTT TAGTTTGGGCAGGATGGGCGTCATAGACAAGTTCATAAGCGGGCTTTCTGAGCTGGCGGA TGATTTCAGCTCGCGTTTTGGTGCCGATTTTGTTGTGGAGCTTGCAGAGGCTTTTCTGCT TGCTGGGAAACCGGATATTGCCGTTGGAATGCTCCGCAATCTTGATGATTCAGTTCAGGT GATCTCTGAAGTTGCACTTGAGGTTCTGGACAAAAATCCCGCGGTTATTCCGGGTTTTCT TGAAGTTCTCTCCGATGATGAGGCACGTATCGTTGGAAAGTTGTTGATGGATAAAATCCT TGAGCATCCGACAAAGGCCCTTGAGGAAGTTGTCAAGGCCGTGGCGAGGAGGGTTAGATC AGAAGCCATGTGGGTAAAGGTCGCCAGGTACTACACTCTGCTGGGGGACGTTGAGACGGC TAGAAATATCGGGGTTGTACTCCAGAATCCCAAGCTCCGCTCGATAGTTCTTGCGGACGT TGCCAGAAGTTACTTGAAACAGAACAAAATAGAAGAGGCC";
            pythonReaderOutput = pythonReaderOutput.replace(/\s/g, '');

            t.getFeatures({ ref: "chr1", start: 0, end: 10000 }, function (feature) {
                features.push(feature);
            }, function () {
                done = true;
            });

            waitsFor(function () {
                return done;
            }, 2000);
            runs(function () {
                expect(features.length).toEqual(1);
                expect(features[0].get('seq').length).toEqual(10000);
                expect(features[0].get('seq')).toEqual(pythonReaderOutput);
            });
        });

        it("has correct behavior when refSeq not defined in file", function () {
            var done;
            var features = [];

            t.getFeatures({ ref: "chr2", start: 0, end: 50000 }, function (feature) {
                features.push(feature);
                console.log(feature);
            }, function () {
                done = true;
            });

            waitsFor(function () {
                return done;
            }, 2000);
            runs(function () {
                expect(features.length).toEqual(0);
            });
        });
    });

    describe(".2bit data store with volvox.2bit", function () {

        var t2 = new TwoBitStore({
            browser: new Browser({ unitTestMode: true }),
            blob: new XHRBlob("../data/volvox.2bit")
        });

        it("constructs", function () {
            expect(t2).toBeTruthy();
        });

        it("loads some data", function () {
            var done;
            var features = [];

            t2.getFeatures({ ref: "ctgA", start: 0, end: 50000 }, function (feature) {
                features.push(feature);
            }, function () {
                done = true;
            });

            waitsFor(function () {
                return done;
            }, 2000);

            runs(function () {
                expect(features.length).toEqual(1);
                expect(features[0].get('seq').length).toEqual(50000);
            });
        });

        it("loads some more data", function () {
            var done;
            var features = [];

            var seqFromFasta = "ACATGCTAGCTACGTGCATGCTCGACATGCATCATCAGCCTGATGCTGATACATGCTAGCTACGTGCATGCTCGACATGCATCATCAGCCTGATGCTGATACATGCTAGCTACGTGCATGCTCGACATGCATCATCAGCCTGATGCTGATACATGCTAGCTACGTGCATGCTCGACATGCATCATCAGCCTGATGCTGATACATGCTAGCTACGTGCATGCTCGACATGCATCATCAGCCTGATGCTGATACATGCTAGCTACGTGCATGCTCGACATGCATCATCAGCCTGATGCTGATACATGCTAGCTACGTGCATGCTCGACATGCATCATCAGCCTGATGCTGATACATGCTAGCTACGTGCATGCTCGACATGCATCATCAGCCTGATGCTGATACATGCTAGCTACGTGCATGCTCGACATGCATCATCAGCCTGATGCTGATACATGCTAGCTACGTGCATGCTCGACATGCATCATCAGCCTGATGCTGATACATGCTAGCTACGTGCATGCTCGACATGCATCATCAGCCTGATGCTGATACATGCTAGCTACGTGCATGCTCGACATGCATCATCAGCCTGATGCTGATACATGCTAGCTACGTGCATGCTCGACATGCATCATCAGCCTGATGCTGATACATGCTAGCTACGTGCATGCTCGACATGCATCATCAGCCTGATGCTGATACATGCTAGCTACGTGCATGCTCGACATGCATCATCAGCCTGATGCTGATACATGCTAGCTACGTGCATGCTCGACATGCATCATCAGCCTGATGCTGATACATGCTAGCTACGTGCATGCTCGACATGCATCATCAGCCTGATGCTGATACATGCTAGCTACGTGCATGCTCGACATGCATCATCAGCCTGATGCTGATACATGCTAGCTACGTGCATGCTCGACATGCATCATCAGCCTGATGCTGATACATGCTAGCTACGTGCATGCTCGACATGCATCATCAGCCTGATGCTGATACATGCTAGCTACGTGCATGCTCGACATGCATCATCAGCCTGATGCTGATACATGCTAGCTACGTGCATGCTCGACATGCATCATCAGCCTGATGCTGATACATGCTAGCTACGTGCATGCTCGACATGCATCATCAGCCTGATGCTGATACATGCTAGCTACGTGCATGCTCGACATGCATCATCAGCCTGATGCTGATACATGCTAGCTACGTGCATGCTCGACATGCATCATCAGCCTGATGCTGATACATGCTAGCTACGTGCATGCTCGACATGCATCATCAGCCTGATGCTGATACATGCTAGCTACGTGCATGCTCGACATGCATCATCAGCCTGATGCTGATACATGCTAGCTACGTGCATGCTCGACATGCATCATCAGCCTGATGCTGATACATGCTAGCTACGTGCATGCTCGACATGCATCATCAGCCTGATGCTGATACATGCTAGCTACGTGCATGCTCGACATGCATCATCAGCCTGATGCTGATACATGCTAGCTACGTGCATGCTCGACATGCATCATCAGCCTGATGCTGATACATGCTAGCTACGTGCATGCTCGACATGCATCATCAGCCTGATGCTGATACATGCTAGCTACGTGCATGCTCGACATGCATCATCAGCCTGATGCTGATACATGCTAGCTACGTGCATGCTCGACATGCATCATCAGCCTGATGCTGATACATGCTAGCTACGTGCATGCTCGACATGCATCATCAGCCTGATGCTGATACATGCTAGCTACGTGCATGCTCGACATGCATCATCAGCCTGATGCTGATACATGCTAGCTACGTGCATGCTCGACATGCATCATCAGCCTGATGCTGATACATGCTAGCTACGTGCATGCTCGACATGCATCATCAGCCTGATGCTGATACATGCTAGCTACGTGCATGCTCGACATGCATCATCAGCCTGATGCTGATACATGCTAGCTACGTGCATGCTCGACATGCATCATCAGCCTGATGCTGATACATGCTAGCTACGTGCATGCTCGACATGCATCATCAGCCTGATGCTGATACATGCTAGCTACGTGCATGCTCGACATGCATCATCAGCCTGATGCTGATACATGCTAGCTACGTGCATGCTCGACATGCATCATCAGCCTGATGCTGATACATGCTAGCTACGTGCATGCTCGACATGCATCATCAGCCTGATGCTGATACATGCTAGCTACGTGCATGCTCGACATGCATCATCAGCCTGATGCTGATACATGCTAGCTACGTGCATGCTCGACATGCATCATCAGCCTGATGCTGATACATGCTAGCTACGTGCATGCTCGACATGCATCATCAGCCTGATGCTGATACATGCTAGCTACGTGCATGCTCGACATGCATCATCAGCCTGATGCTGATACATGCTAGCTACGTGCATGCTCGACATGCATCATCAGCCTGATGCTGATACATGCTAGCTACGTGCATGCTCGACATGCATCATCAGCCTGATGCTGATACATGCTAGCTACGTGCATGCTCGACATGCATCATCAGCCTGATGCTGATACATGCTAGCTACGTGCATGCTCGACATGCATCATCAGCCTGATGCTGATACATGCTAGCTACGTGCATGCTCGACATGCATCATCAGCCTGATGCTGATACATGCTAGCTACGTGCATGCTCGACATGCATCATCAGCCTGATGCTGATACATGCTAGCTACGTGCATGCTCGACATGCATCATCAGCCTGATGCTGATACATGCTAGCTACGTGCATGCTCGACATGCATCATCAGCCTGATGCTGATACATGCTAGCTACGTGCATGCTCGACATGCATCATCAGCCTGATGCTGATACATGCTAGCTACGTGCATGCTCGACATGCATCATCAGCCTGATGCTGATACATGCTAGCTACGTGCATGCTCGACATGCATCATCAGCCTGATGCTGATACATGCTAGCTACGTGCATGCTCGACATGCATCATCAGCCTGATGCTGATACATGCTAGCTACGTGCATGCTCGACATGCATCATCAGCCTGATGCTGATACATGCTAGCTACGTGCATGCTCGACATGCATCATCAGCCTGATGCTGATACATGCTAGCTACGTGCATGCTCGACATGCATCATCAGCCTGATGCTGATACATGCTAGCTACGTGCATGCTCGACATGCATCATCAGCCTGATGCTGATACATGCTAGCTACGTGCATGCTCGACATGCATCATCAGCCTGATGCTGATACATGCTAGCTACGTGCATGCTCGACATGCATCATCAGCCTGATGCTGATACATGCTAGCTACGTGCATGCTCGACATGCATCATCAGCCTGATGCTGATACATGCTAGCTACGTGCATGCTCGACATGCATCATCAGCCTGATGCTGATACATGCTAGCTACGTGCATGCTCGACATGCATCATCAGCCTGATGCTGATACATGCTAGCTACGTGCATGCTCGACATGCATCATCAGCCTGATGCTGATACATGCTAGCTACGTGCATGCTCGACATGCATCATCAGCCTGATGCTGATACATGCTAGCTACGTGCATGCTCGACATGCATCATCAGCCTGATGCTGATACATGCTAGCTACGTGCATGCTCGACATGCATCATCAGCCTGATGCTGATACATGCTAGCTACGTGCATGCTCGACATGCATCATCAGCCTGATGCTGATACATGCTAGCTACGTGCATGCTCGACATGCATCATCAGCCTGATGCTGATACATGCTAGCTACGTGCATGCTCGACATGCATCATCAGCCTGATGCTGATACATGCTAGCTACGTGCATGCTCGACATGCATCATCAGCCTGATGCTGATACATGCTAGCTACGTGCATGCTCGACATGCATCATCAGCCTGATGCTGATACATGCTAGCTACGTGCATGCTCGACATGCATCATCAGCCTGATGCTGATACATGCTAGCTACGTGCATGCTCGACATGCATCATCAGCCTGATGCTGATACATGCTAGCTACGTGCATGCTCGACATGCATCATCAGCCTGATGCTGATACATGCTAGCTACGTGCATGCTCGACATGCATCATCAGCCTGATGCTGATACATGCTAGCTACGTGCATGCTCGACATGCATCATCAGCCTGATGCTGATACATGCTAGCTACGTGCATGCTCGACATGCATCATCAGCCTGATGCTGATACATGCTAGCTACGTGCATGCTCGACATGCATCATCAGCCTGATGCTGATACATGCTAGCTACGTGCATGCTCGACATGCATCATCAGCCTGATGCTGATACATGCTAGCTACGTGCATGCTCGACATGCATCATCAGCCTGATGCTGATACATGCTAGCTACGTGCATGCTCGACATGCATCATCAGCCTGATGCTGATACATGCTAGCTACGTGCATGCTCGACATGCATCATCAGCCTGATGCTGATACATGCTAGCTACGTGCATGCTCGACATGCATCATCAGCCTGATGCTGATACATGCTAGCTACGTGCATGCTCGACATGCATCATCAGCCTGATGCTGATACATGCTAGCTACGTGCATGCTCGACATGCATCATCAGCCTGATGCTGATACATGCTAGCTACGTGCATGCTCGACATGCATCATCAGCCTGATGCTGATACATGCTAGCTACGTGCATGCTCGACATGCATCATCAGCCTGATGCTGATACATGCTAGCTACGTGCATGCTCGACATGCATCATCAGCCTGATGCTGATACATGCTAGCTACGTGCATGCTCGACATGCATCATCAGCCTGATGCTGATACATGCTAGCTACGTGCATGCTCGACATGCATCATCAGCCTGATGCTGATACATGCTAGCTACGTGCATGCTCGACATGCATCATCAGCCTGATGCTGATACATGCTAGCTACGTGCATGCTCGACATGCATCATCAGCCTGATGCTGATACATGCTAGCTACGTGCATGCTCGACATGCATCATCAGCCTGATGCTGAT";
            t2.getFeatures({ ref: "ctgB", start: 0, end: 5000 }, function (feature) {
                features.push(feature);
            }, function () {
                done = true;
            });

            waitsFor(function () {
                return done;
            }, 2000);
            runs(function () {
                expect(features.length).toEqual(1);
                expect(features[0].get('seq').length).toEqual(5000);
                expect(features[0].get('seq')).toEqual(seqFromFasta);
            });
        });

        it("has correct behavior when refSeq not defined in file", function () {
            var done;
            var features = [];

            t2.getFeatures({ ref: "nonexistent", start: 0, end: 50000 }, function (feature) {
                features.push(feature);
            }, function () {
                done = true;
            });

            waitsFor(function () {
                return done;
            }, 2000);
            runs(function () {
                expect(features.length).toEqual(0);
            });
        });
    });

    var seqString = "NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNACTCTATCTATCTATCTATCTATCTTTTTCCCCCCGGGGGGagagagagactctagcatcctcctacctcacNNacCNctTGGACNCcCaGGGatttcNNNcccNNCCNCgN";

    describe(".2bit data store with random data foo.2bit", function () {

        var t3 = new TwoBitStore({
            browser: new Browser({ unitTestMode: true }),
            blob: new XHRBlob("../data/foo.2bit")
        });

        it("constructs", function () {
            expect(t3).toBeTruthy();
        });

        it("loads data properly (even with masks and N blocks)", function () {
            var done;
            var features = [];

            t3.getFeatures({ ref: "chr1", start: 0, end: 159 }, function (feature) {
                features.push(feature);
            }, function () {
                done = true;
            });

            waitsFor(function () {
                return done;
            }, 2000);
            runs(function () {
                expect(features.length).toEqual(1);
                expect(features[0].get('seq').length).toEqual(159);
                expect(features[0].get('seq')).toEqual(seqString);
            });
        });

        it("isn't fazed by being asked to look past the beginning or end of a sequence", function () {
            var done;
            var features = [];
            t3.getFeatures({ ref: "chr1", start: -17, end: 300 }, function (feature) {
                features.push(feature);
            }, function () {
                done = true;
            });

            waitsFor(function () {
                return done;
            }, 2000);
            runs(function () {
                expect(features.length).toEqual(1);
                expect(features[0].get('seq').length).toEqual(159);
                expect(features[0].get('seq')).toEqual(seqString);
            });
        });
    });

    describe("empty 2bit", function () {
        var t4 = new TwoBitStore({
            browser: new Browser({ unitTestMode: true }),
            blob: new XHRBlob("../data/empty.2bit")
        });

        it("constructs", function () {
            expect(t4).toBeTruthy();
        });

        it("returns no data, but doesn't crash", function () {
            var done;
            var features = [];
            t4.getFeatures({ ref: "unimportant", start: 0, end: 4000 }, function (feature) {
                features.push(feature);
            }, function () {
                done = true;
            }, function (err) {
                console.log(err);
            });

            waitsFor(function () {
                return done;
            }, 2000);
            runs(function () {
                expect(features.length).toEqual(0);
            });
        });
    });
}).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}).catch(__webpack_require__.oe);

/***/ }),
/* 395 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__.e/* require */(0/* aggressive-merge */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(29), __webpack_require__(359)]; ((function (Browser, SequenceTrack) {

    describe('sequence track', function () {

        it('test track rendering', function () {
            var browser = new Browser({ unitTestMode: true });

            var output = dojo.create('div', {
                style: {
                    display: 'none'
                }
            }, document.body);
            var track = new SequenceTrack({
                browser: browser
            });
            track.div = output;
            track.blockHeights = [];
            track.heightUpdateCallback = function () {};

            var block = {
                startBase: 0,
                endBase: 6,
                domNode: output
            };

            track._fillSequenceBlock(block, 0, 25, "XXATGATGATGATGATGATGXX");
            console.log(output);

            var f = output.children[2].children[0].children[0].children;
            var arr = Array.prototype.slice.call(f);
            var seq = arr.map(function (elt) {
                return elt.innerHTML;
            }).join('');
            expect('MMMMMM').toEqual(seq);

            var f = output.children[1].children[0].children[0].children;
            var arr = Array.prototype.slice.call(f);
            var seq = arr.map(function (elt) {
                return elt.innerHTML;
            }).join('');
            expect('*****&nbsp;').toEqual(seq);

            var f = output.children[4].children[0].children[0].children;
            var arr = Array.prototype.slice.call(f);
            var seq = arr.map(function (elt) {
                return elt.innerHTML;
            }).join('');
            expect('HHHHHH').toEqual(seq);

            dojo.empty(output);

            track._fillSequenceBlock(block, 0, 1, "XXATGATGATGATGATGATGXX");
            console.log(output);

            var f = output.children[2].children[0].children[0].children;
            var arr = Array.prototype.slice.call(f);
            var seq = arr.map(function (elt) {
                console.log(elt.className);
                return dojo.hasClass(elt, 'aminoAcid_start') ? 'M' : 'X';
            }).join('');
            expect('MMMMMM').toEqual(seq);

            var f = output.children[1].children[0].children[0].children;
            var arr = Array.prototype.slice.call(f);
            var seq = arr.map(function (elt) {
                return dojo.hasClass(elt, 'aminoAcid_stop') ? '*' : 'X';
            }).join('');
            expect('*****X').toEqual(seq);

            var f = output.children[4].children[0].children[0].children;
            var arr = Array.prototype.slice.call(f);
            var seq = arr.map(function (elt) {
                return dojo.hasClass(elt, 'aminoAcid_h') ? 'H' : 'X';
            }).join('');
            expect('HHHHHH').toEqual(seq);
        });
    });
}).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}).catch(__webpack_require__.oe);

/***/ }),
/* 396 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__.e/* require */(0/* aggressive-merge */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(29), __webpack_require__(360), __webpack_require__(47)]; ((function (Browser, VCFStore, XHRBlob) {
    describe('VCF store', function () {

        xit('reads big dbsnp', function () {
            var store = new VCFStore({
                browser: new Browser({ unitTestMode: true }),
                config: {
                    urlTemplate: '../../../data/big_vcf/00-All.vcf.gz',
                    baseUrl: '.'
                },
                refSeq: { name: 'chr10', start: 0, end: 135534747 }
            });

            var features = [];
            waitsFor(function () {
                return features.done;
            });
            store.getFeatures({ ref: 'chr10',
                start: 33870887,
                end: 33896487
            }, function (f) {
                features.push(f);
            }, function () {
                features.done = true;
            }, function (e) {
                console.error(e.stack || '' + e);
            });
            runs(function () {
                expect(features.length).toEqual(560);
            });
        });

        it('reads gvcf * alleles', function () {
            var store = new VCFStore({
                browser: new Browser({ unitTestMode: true }),
                config: {
                    urlTemplate: '../../docs/tutorial/data_files/gvcf.vcf.gz',
                    baseUrl: '.'
                },
                refSeq: { name: '1', start: 0, end: 5000 }
            });

            var features = [];
            waitsFor(function () {
                return features.done;
            });
            store.getFeatures({ ref: 'ctgA',
                start: 0,
                end: 5000
            }, function (f) {
                features.push(f);
            }, function () {
                features.done = true;
            }, function (e) {
                console.error(e.stack || '' + e);
            });
            runs(function () {
                expect(features.length).toEqual(7);
                expect(features[2].get('alternative_alleles').values).toEqual("TC,<*>");
            });
        });

        it('no newline in VCF genotypes', function () {
            var store = new VCFStore({
                browser: new Browser({ unitTestMode: true }),
                config: {
                    urlTemplate: '../../docs/tutorial/data_files/volvox.test.vcf.gz',
                    baseUrl: '.'
                },
                refSeq: { name: 'ctgA', start: 0, end: 50000 }

            });

            var features = [];
            waitsFor(function () {
                return features.done;
            });
            store.getFeatures({ ref: 'ctgA',
                start: 0,
                end: 7000
            }, function (f) {
                features.push(f);
            }, function () {
                features.done = true;
            }, function (e) {
                console.error(e.stack || '' + e);
            });
            runs(function () {
                var gt = features[0].get('genotypes');
                var names = Object.keys(gt);
                var last = names[names.length - 1];
                expect(last.match("\n")).toEqual(null);
            });
        });

        it('reads gatk non_ref alleles', function () {
            var store = new VCFStore({
                browser: new Browser({ unitTestMode: true }),
                config: {
                    urlTemplate: '../data/raw.g.vcf.gz',
                    baseUrl: '.'
                },
                refSeq: { name: 'ctgA', start: 0, end: 5000 }
            });

            var features = [];
            waitsFor(function () {
                return features.done;
            });
            store.getFeatures({ ref: 'ctgA',
                start: 0,
                end: 100
            }, function (f) {
                features.push(f);
            }, function () {
                features.done = true;
            }, function (e) {
                console.error(e.stack || '' + e);
            });
            runs(function () {
                expect(features.length).toEqual(37);
                expect(features[0].get('alternative_alleles').values).toEqual('<NON_REF>');
            });
        });

        it('parses END field', function () {
            var store = new VCFStore({
                browser: new Browser({ unitTestMode: true }),
                config: {
                    urlTemplate: '../data/vcf.end.gz',
                    baseUrl: '.'
                },
                refSeq: { name: '1', start: 0, end: 50000 }
            });

            var features = [];
            waitsFor(function () {
                return features.done;
            });
            store.getFeatures({ ref: '1',
                start: 0,
                end: 5000
            }, function (f) {
                features.push(f);
            }, function () {
                features.done = true;
            }, function (e) {
                console.error(e.stack || '' + e);
            });
            runs(function () {
                expect(features[0].get('end')).toEqual(4388);
                expect(features[1].get('end')).toEqual(4600);
                expect(features.length).toEqual(2);
            });
        });

        it('reads a CSI index', function () {
            var store = new VCFStore({
                browser: new Browser({ unitTestMode: true }),
                config: {
                    urlTemplate: '../data/fake_large_chromosome/test.vcf.gz',
                    csiUrlTemplate: '../data/fake_large_chromosome/test.vcf.gz.csi',
                    baseUrl: '.'
                },
                refSeq: { name: '1', start: 1206808844, end: 1206851071 }
            });

            var features = [];
            waitsFor(function () {
                return features.done;
            });
            store.getFeatures({ ref: '1',
                start: 1206808844,
                end: 12068510710
            }, function (f) {
                features.push(f);
            }, function () {
                features.done = true;
            }, function (e) {
                console.error(e.stack || '' + e);
            });
            runs(function () {
                expect(features.length).toEqual(111);
            });
        });

        xit('large VCF header', function () {
            var store = new VCFStore({
                browser: new Browser({ unitTestMode: true }),
                config: {
                    urlTemplate: '../data/large_vcf_header/large_vcf_header.vcf.gz',
                    baseUrl: '.'
                },
                refSeq: { name: 'LcChr1', start: 0, end: 1000 }
            });

            var features = [];
            waitsFor(function () {
                return features.done;
            });
            store.getFeatures({ ref: 'LcChr1',
                start: 1,
                end: 10000
            }, function (f) {
                features.push(f);
            }, function () {
                features.done = true;
            }, function (e) {
                console.error(e.stack || '' + e);
            });
            runs(function () {
                var a = features[0].get('genotypes');
                expect(Object.keys(a).length).toBeTruthy(); // expect non empty object
            });
        });
    });
}).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}).catch(__webpack_require__.oe);

/***/ }),
/* 397 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

__webpack_require__.e/* require */(0/* aggressive-merge */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(51), __webpack_require__(29), __webpack_require__(364), __webpack_require__(47)]; ((function (array, Browser, BigBed, XHRBlob) {

    var errorFunc = function errorFunc(e) {
        console.error(e);
    };

    describe('BigBed with volvox eden genes', function () {
        var browser = new Browser({ unitTestMode: true });
        var b = new BigBed({
            browser: browser,
            blob: new XHRBlob('../../sample_data/raw/volvox/volvox.bb')
        });

        it('constructs', function () {
            expect(b).toBeTruthy();
        });

        it('accesses volvox bigbed', function () {
            var features = [];
            var expectedFeatureData = __webpack_require__(581);
            deleteUniqueIDSerial(expectedFeatureData);

            b.getFeatures({ ref: 'ctgA', start: 1, end: 50000 }, function (f) {
                return features.push(f);
            }, function () {
                features.done = true;
            }, function (e) {
                console.error(e.stack || '' + e);
            });

            waitsFor(function () {
                return features.done;
            });
            runs(function () {
                deleteUniqueIDSerial(expectedFeatureData);
                // console.log(JSON.stringify(features,undefined,2))
                var featureData = JSON.parse(JSON.stringify(features));
                deleteUniqueIDSerial(featureData);
                expect(featureData).toEqual(expectedFeatureData);
            });
        });
    });

    describe('BigBed with human peaks', function () {
        var browser = new Browser({ unitTestMode: true });
        var b = new BigBed({
            browser: browser,
            blob: new XHRBlob('../data/human_bigbed/peaks.bb')
        });

        it('constructs', function () {
            expect(b).toBeTruthy();
        });

        it('accesses peaks bigbed', function () {
            var features = [];
            b.getFeatures({ ref: 'chr1', start: 18000000, end: 19000000 }, function (f) {
                features.push(f);
            }, function () {
                features.done = true;
            }, function (e) {
                console.error(e.stack || '' + e);
            });

            waitsFor(function () {
                return features.done;
            });
            runs(function () {
                expect(features.length).toEqual(33);
            });
        });
    });

    describe('malformed bigbed', function () {
        var browser = new Browser({ unitTestMode: true });
        var b = new BigBed({
            browser: browser,
            blob: new XHRBlob('../data/malformed.bb')
        });

        it('constructs', function () {
            expect(b).toBeTruthy();
        });

        it('calls the error callback', function () {
            var features = [];
            var error = void 0;
            b.getFeatures({ ref: 'chr1', start: 18000000, end: 19000000 }, function (f) {
                return features.push(f);
            }, function () {
                features.done = true;
            }, function (e) {
                error = e;
            });

            waitsFor(function () {
                return error || features.done;
            });
            runs(function () {
                expect(features.length).toEqual(0);
                expect(error).toContain('Not a BigWig or BigBed file');
            });
        });
    });

    describe('BigBed with less than bed12 and autosql', function () {
        var browser = new Browser({ unitTestMode: true });
        var b = new BigBed({
            browser: browser,
            blob: new XHRBlob('../data/human_bigbed/genes.bb')
        });

        it('constructs', function () {
            expect(b).toBeTruthy();
        });

        it('accesses gene bigbed', function () {
            var features = [];
            b.getFeatures({ ref: 'chr1', start: 18000000, end: 19000000 }, function (f) {
                features.push(f);
            }, function () {
                features.done = true;
            }, function (e) {
                console.error(e.stack || '' + e);
            });

            waitsFor(function () {
                return features.done;
            });
            runs(function () {
                expect(features.length).toEqual(14);
                expect(features[0].get('gene_symbol')).toEqual('PRPS1L1');
                expect(features[0].get('name')).toEqual('uc003stz.1');
                expect(features[0].get('strand')).toEqual(-1);
                expect(features[13].get('gene_symbol')).toEqual('HDAC9');
                expect(features[13].get('name')).toEqual('uc003suk.1');
                expect(features[13].get('strand')).toEqual(1);
            });
        });
    });

    describe('BigBed GENCODE bed12+4 and autosql', function () {
        var browser = new Browser({ unitTestMode: true });
        var b = new BigBed({
            browser: browser,
            blob: new XHRBlob('../data/human_bigbed/gencode.bb')
        });
        var expectedFeatureData = __webpack_require__(582);

        it('constructs', function () {
            expect(b).toBeTruthy();
        });

        it('accesses gencode bigbed', function () {
            var features = [];
            b.getFeatures({ ref: 'chr1', start: 18000000, end: 19000000 }, function (f) {
                return features.push(f);
            }, function () {
                features.done = true;
            }, function (e) {
                console.error(e.stack || '' + e);
            });

            waitsFor(function () {
                return features.done;
            });
            runs(function () {
                expect(features.length).toEqual(114);
                var featureData = JSON.parse(JSON.stringify(features[88], undefined, 2));
                // console.log(JSON.stringify(features[88],undefined,2))
                deleteUniqueIDSerial(featureData);
                deleteUniqueIDSerial(expectedFeatureData);
                expect(featureData).toEqual(expectedFeatureData);
            });
        });
    });
}).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}).catch(__webpack_require__.oe);

// recursively delete the unique serial numbers in all the _uniqueID properties of an
// object containing feature data
function deleteUniqueIDSerial(featureData) {
    Object.entries(featureData).forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            name = _ref2[0],
            val = _ref2[1];

        if (!val) return;

        if (name === '_uniqueID') {
            featureData[name] = val.replace(/_\d+$/, '_(serial redacted)');
        } else if (Array.isArray(val)) {
            val.forEach(function (v) {
                return deleteUniqueIDSerial(v);
            });
        } else if ((typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object') {
            deleteUniqueIDSerial(val);
        }
    });
}

/***/ })
/******/ ]);
//# sourceMappingURL=run_jasmine.bundle.js.map