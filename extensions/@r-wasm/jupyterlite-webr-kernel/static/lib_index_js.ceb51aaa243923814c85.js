"use strict";
(self["webpackChunk_r_wasm_jupyterlite_webr_kernel"] = self["webpackChunk_r_wasm_jupyterlite_webr_kernel"] || []).push([["lib_index_js"],{

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _jupyterlite_kernel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyterlite/kernel */ "webpack/sharing/consume/default/@jupyterlite/kernel");
/* harmony import */ var _jupyterlite_kernel__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_jupyterlite_kernel__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _webr_kernel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./webr_kernel */ "./lib/webr_kernel.js");
/* harmony import */ var _file_loader_context_style_logos_r_logo_32x32_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!file-loader?context=.!../style/logos/r-logo-32x32.png */ "./node_modules/file-loader/dist/cjs.js?context=.!./style/logos/r-logo-32x32.png");
/* harmony import */ var _file_loader_context_style_logos_r_logo_64x64_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !!file-loader?context=.!../style/logos/r-logo-64x64.png */ "./node_modules/file-loader/dist/cjs.js?context=.!./style/logos/r-logo-64x64.png");




const server_kernel = {
    id: '@jupyterlite/webr-kernel-extension:kernel',
    autoStart: true,
    requires: [_jupyterlite_kernel__WEBPACK_IMPORTED_MODULE_0__.IKernelSpecs],
    activate: (app, kernelspecs) => {
        kernelspecs.register({
            spec: {
                name: 'webR',
                display_name: 'R (webR)',
                language: 'R',
                argv: [],
                spec: {
                    argv: [],
                    env: {},
                    display_name: 'R (webR)',
                    language: 'R',
                    interrupt_mode: 'message',
                    metadata: {},
                },
                resources: {
                    'logo-32x32': _file_loader_context_style_logos_r_logo_32x32_png__WEBPACK_IMPORTED_MODULE_1__["default"],
                    'logo-64x64': _file_loader_context_style_logos_r_logo_64x64_png__WEBPACK_IMPORTED_MODULE_2__["default"],
                },
            },
            create: async (options) => {
                return new _webr_kernel__WEBPACK_IMPORTED_MODULE_3__.WebRKernel({ ...options });
            },
        });
    },
};
const plugins = [server_kernel];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (plugins);


/***/ }),

/***/ "./lib/webr_kernel.js":
/*!****************************!*\
  !*** ./lib/webr_kernel.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebRKernel": () => (/* binding */ WebRKernel)
/* harmony export */ });
/* harmony import */ var _lumino_signaling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lumino/signaling */ "webpack/sharing/consume/default/@lumino/signaling");
/* harmony import */ var _lumino_signaling__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lumino_signaling__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var hash_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hash.js */ "webpack/sharing/consume/default/hash.js/hash.js");
/* harmony import */ var hash_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hash_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _r_wasm_webr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @r-wasm/webr */ "webpack/sharing/consume/default/@r-wasm/webr/@r-wasm/webr");
/* harmony import */ var _r_wasm_webr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_r_wasm_webr__WEBPACK_IMPORTED_MODULE_2__);
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _WebRKernel_id, _WebRKernel_name, _WebRKernel_location, _WebRKernel_isDisposed, _WebRKernel_disposed, _WebRKernel_sendMessage, _WebRKernel_parentHeader, _WebRKernel_executionCounter, _WebRKernel_webRConsole, _WebRKernel_init, _WebRKernel_envSetup, _WebRKernel_shelter, _WebRKernel_lastPlotHash;




const webRVersion = '0.1.0';
const baseRVersion = '3.1.4';
const protolcolVersion = '5.2';
class WebRKernel {
    constructor(options) {
        _WebRKernel_id.set(this, void 0);
        _WebRKernel_name.set(this, void 0);
        _WebRKernel_location.set(this, void 0);
        _WebRKernel_isDisposed.set(this, false);
        _WebRKernel_disposed.set(this, new _lumino_signaling__WEBPACK_IMPORTED_MODULE_0__.Signal(this));
        _WebRKernel_sendMessage.set(this, void 0);
        _WebRKernel_parentHeader.set(this, undefined);
        _WebRKernel_executionCounter.set(this, 0);
        _WebRKernel_webRConsole.set(this, void 0);
        _WebRKernel_init.set(this, void 0);
        _WebRKernel_envSetup.set(this, void 0);
        _WebRKernel_shelter.set(this, void 0);
        _WebRKernel_lastPlotHash.set(this, undefined);
        const { id, name, sendMessage, location } = options;
        __classPrivateFieldSet(this, _WebRKernel_id, id, "f");
        __classPrivateFieldSet(this, _WebRKernel_name, name, "f");
        __classPrivateFieldSet(this, _WebRKernel_location, location, "f");
        __classPrivateFieldSet(this, _WebRKernel_sendMessage, sendMessage, "f");
        __classPrivateFieldSet(this, _WebRKernel_webRConsole, new _r_wasm_webr__WEBPACK_IMPORTED_MODULE_2__.Console({
            stdout: (line) => console.log(line),
            stderr: (line) => console.error(line),
            prompt: (prompt) => this.sendStdinRequest({ prompt, password: false }),
        }), "f");
        this.sendKernelStatus('starting');
        __classPrivateFieldGet(this, _WebRKernel_webRConsole, "f").run();
        __classPrivateFieldSet(this, _WebRKernel_init, __classPrivateFieldGet(this, _WebRKernel_webRConsole, "f").webR.init(), "f");
        __classPrivateFieldSet(this, _WebRKernel_envSetup, this.setupEnvironment(), "f");
    }
    get id() {
        return __classPrivateFieldGet(this, _WebRKernel_id, "f");
    }
    get name() {
        return __classPrivateFieldGet(this, _WebRKernel_name, "f");
    }
    get location() {
        return __classPrivateFieldGet(this, _WebRKernel_location, "f");
    }
    get ready() {
        return __classPrivateFieldGet(this, _WebRKernel_init, "f");
    }
    get isDisposed() {
        return __classPrivateFieldGet(this, _WebRKernel_isDisposed, "f");
    }
    get disposed() {
        return __classPrivateFieldGet(this, _WebRKernel_disposed, "f");
    }
    dispose() {
        if (this.isDisposed) {
            return;
        }
        __classPrivateFieldSet(this, _WebRKernel_isDisposed, true, "f");
        __classPrivateFieldGet(this, _WebRKernel_disposed, "f").emit(void 0);
    }
    async setupEnvironment() {
        await this.ready;
        __classPrivateFieldSet(this, _WebRKernel_shelter, await new (__classPrivateFieldGet(this, _WebRKernel_webRConsole, "f").webR.Shelter)(), "f");
        await __classPrivateFieldGet(this, _WebRKernel_webRConsole, "f").webR.installPackages(['svglite']);
        await __classPrivateFieldGet(this, _WebRKernel_webRConsole, "f").webR.evalRVoid('library(svglite)');
        // Enable dev.control to allow active plots to be copied
        await __classPrivateFieldGet(this, _WebRKernel_webRConsole, "f").webR.evalRVoid(`
      options(device = function(...){
        pdf(...)
        dev.control("enable")
      }, webr.plot.new = FALSE)
    `);
        // Create a signal when there is a new plot to be shown in JupyterLite
        await __classPrivateFieldGet(this, _WebRKernel_webRConsole, "f").webR.evalRVoid(`
      setHook("grid.newpage", function() {
        options(webr.plot.new = TRUE)
      }, "replace")
    `);
        // Default plot size
        await __classPrivateFieldGet(this, _WebRKernel_webRConsole, "f").webR.evalRVoid(`
      options(webr.plot.width = 7, webr.plot.height = 5.25)
    `);
    }
    async handleMessage(msg) {
        switch (msg.header.msg_type) {
            case 'execute_request': {
                __classPrivateFieldSet(this, _WebRKernel_parentHeader, msg.header, "f");
                await this.handleExecRequest(msg);
                break;
            }
            case 'input_reply': {
                const stdin = msg.content;
                if (stdin.status === 'ok') {
                    __classPrivateFieldGet(this, _WebRKernel_webRConsole, "f").stdin(stdin.value);
                }
                break;
            }
            case 'kernel_info_request': {
                __classPrivateFieldSet(this, _WebRKernel_parentHeader, msg.header, "f");
                this.sendKernelInfoReply(msg);
                await this.ready;
                this.sendKernelStatus('idle');
                break;
            }
            default:
                console.warn(`Unhandled message type: ${msg.header.msg_type}`);
        }
    }
    async handleExecRequest(msg) {
        const req = msg;
        this.sendKernelStatus('busy');
        if (req.content.store_history) {
            __classPrivateFieldSet(this, _WebRKernel_executionCounter, __classPrivateFieldGet(this, _WebRKernel_executionCounter, "f") + 1, "f");
        }
        await __classPrivateFieldGet(this, _WebRKernel_envSetup, "f");
        try {
            const exec = await __classPrivateFieldGet(this, _WebRKernel_shelter, "f").captureR(req.content.code, { withAutoprint: true });
            const output = exec.output;
            // Deal with showing stream and condition outputs
            output.forEach(async (out) => {
                switch (out.type) {
                    case 'stdout':
                        this.sendIOReply(msg, 'stream', { name: 'stdout', text: out.data + '\n' });
                        break;
                    case 'stderr':
                        this.sendIOReply(msg, 'stream', { name: 'stderr', text: out.data + '\n' });
                        break;
                    case 'message': {
                        const cnd = out.data;
                        const message = (await cnd.get('message'));
                        this.sendIOReply(msg, 'stream', {
                            name: 'stderr',
                            text: (await message.toString()) + '\n',
                        });
                        break;
                    }
                    case 'warning': {
                        const cnd = out.data;
                        const message = (await cnd.get('message'));
                        this.sendIOReply(msg, 'stream', {
                            name: 'stderr',
                            text: 'Warning message:\n' + (await message.toString()) + '\n',
                        });
                        break;
                    }
                }
            });
            // Send an R plot if there are changes to the graphics device
            await this.sendPlotOutput(msg);
            // Send success signal
            this.sendShellReply(msg, 'execute_reply', {
                status: 'ok',
                execution_count: __classPrivateFieldGet(this, _WebRKernel_executionCounter, "f"),
                user_expressions: {},
            });
        }
        catch (e) {
            const evalue = e.message;
            this.sendIOReply(msg, 'stream', { name: 'stderr', text: 'Error: ' + evalue + '\n' });
            this.sendShellReply(msg, 'execute_reply', {
                status: 'error',
                execution_count: __classPrivateFieldGet(this, _WebRKernel_executionCounter, "f"),
                ename: 'error',
                evalue: evalue,
                traceback: [],
            });
        }
        finally {
            await __classPrivateFieldGet(this, _WebRKernel_shelter, "f").purge();
        }
        this.sendKernelStatus('idle');
    }
    async sendPlotOutput(msg) {
        const dev = await __classPrivateFieldGet(this, _WebRKernel_webRConsole, "f").webR.evalRNumber('dev.cur()');
        const newPlot = await __classPrivateFieldGet(this, _WebRKernel_webRConsole, "f").webR.evalRBoolean('options("webr.plot.new")[[1]]');
        if (dev > 1) {
            await __classPrivateFieldGet(this, _WebRKernel_webRConsole, "f").webR.evalRVoid(`
        try({
          dev.copy(function(...) {
            w <- options("webr.plot.width")[[1]]
            h <- options("webr.plot.height")[[1]]
            svglite(width = w, height = h, ...)
          }, "/tmp/_webRplots.svg")
          dev.off()
        }, silent=TRUE)
      `);
            const plotData = await __classPrivateFieldGet(this, _WebRKernel_webRConsole, "f").webR.FS.readFile('/tmp/_webRplots.svg');
            // Send plot data to client if a new.plot() has been triggered or if
            // the plot has changed since last time
            const plotHash = (0,hash_js__WEBPACK_IMPORTED_MODULE_1__.sha256)().update(plotData).digest('hex');
            if (newPlot || !__classPrivateFieldGet(this, _WebRKernel_lastPlotHash, "f") || plotHash !== __classPrivateFieldGet(this, _WebRKernel_lastPlotHash, "f")) {
                __classPrivateFieldSet(this, _WebRKernel_lastPlotHash, plotHash, "f");
                this.sendIOReply(msg, 'display_data', {
                    data: {
                        'image/svg+xml': new TextDecoder().decode(plotData),
                    },
                    metadata: {
                        'image/svg+xml': {
                            isolated: true,
                        },
                    },
                });
                await __classPrivateFieldGet(this, _WebRKernel_webRConsole, "f").webR.evalRVoid('options(webr.plot.new = FALSE)');
            }
        }
    }
    sendStdinRequest(content) {
        const reply = {
            header: {
                msg_id: (0,uuid__WEBPACK_IMPORTED_MODULE_3__["default"])(),
                username: __classPrivateFieldGet(this, _WebRKernel_parentHeader, "f") ? __classPrivateFieldGet(this, _WebRKernel_parentHeader, "f").username : '',
                session: __classPrivateFieldGet(this, _WebRKernel_parentHeader, "f") ? __classPrivateFieldGet(this, _WebRKernel_parentHeader, "f").session : '',
                date: new Date().toISOString(),
                msg_type: 'input_request',
                version: protolcolVersion,
            },
            parent_header: __classPrivateFieldGet(this, _WebRKernel_parentHeader, "f"),
            metadata: {},
            content,
            buffers: [],
            channel: 'stdin',
        };
        __classPrivateFieldGet(this, _WebRKernel_sendMessage, "f").call(this, reply);
    }
    sendIOReply(msg, type, content) {
        const reply = {
            header: {
                msg_id: (0,uuid__WEBPACK_IMPORTED_MODULE_3__["default"])(),
                username: msg.header.username,
                session: msg.header.session,
                date: new Date().toISOString(),
                msg_type: type,
                version: protolcolVersion,
            },
            parent_header: msg.header,
            metadata: {},
            content,
            buffers: [],
            channel: 'iopub',
        };
        __classPrivateFieldGet(this, _WebRKernel_sendMessage, "f").call(this, reply);
    }
    sendShellReply(msg, type, content) {
        const reply = {
            header: {
                msg_id: (0,uuid__WEBPACK_IMPORTED_MODULE_3__["default"])(),
                username: msg.header.username,
                session: msg.header.session,
                date: new Date().toISOString(),
                msg_type: type,
                version: protolcolVersion,
            },
            parent_header: msg.header,
            metadata: {},
            content,
            buffers: [],
            channel: 'shell',
        };
        __classPrivateFieldGet(this, _WebRKernel_sendMessage, "f").call(this, reply);
    }
    sendKernelInfoReply(msg) {
        const reply = {
            header: {
                msg_id: (0,uuid__WEBPACK_IMPORTED_MODULE_3__["default"])(),
                username: msg.header.username,
                session: msg.header.session,
                date: new Date().toISOString(),
                msg_type: 'kernel_info_reply',
                version: protolcolVersion,
            },
            parent_header: msg.header,
            metadata: {},
            content: {
                status: 'ok',
                protocol_version: protolcolVersion,
                implementation: 'webr',
                implementation_version: webRVersion,
                language_info: {
                    name: 'R',
                    version: baseRVersion,
                    mimetype: 'text/x-rsrc',
                    file_extension: '.R',
                },
                banner: `webR v${webRVersion} - R v${baseRVersion}`,
                help_links: [],
            },
            buffers: [],
            channel: 'shell',
        };
        __classPrivateFieldGet(this, _WebRKernel_sendMessage, "f").call(this, reply);
    }
    sendKernelStatus(status) {
        const msg = {
            channel: 'iopub',
            header: {
                msg_id: (0,uuid__WEBPACK_IMPORTED_MODULE_3__["default"])(),
                username: __classPrivateFieldGet(this, _WebRKernel_parentHeader, "f") ? __classPrivateFieldGet(this, _WebRKernel_parentHeader, "f").username : '',
                session: __classPrivateFieldGet(this, _WebRKernel_parentHeader, "f") ? __classPrivateFieldGet(this, _WebRKernel_parentHeader, "f").session : '',
                date: new Date().toISOString(),
                msg_type: 'status',
                version: protolcolVersion,
            },
            content: {
                execution_state: status,
            },
            metadata: {},
            parent_header: {},
        };
        __classPrivateFieldGet(this, _WebRKernel_sendMessage, "f").call(this, msg);
    }
}
_WebRKernel_id = new WeakMap(), _WebRKernel_name = new WeakMap(), _WebRKernel_location = new WeakMap(), _WebRKernel_isDisposed = new WeakMap(), _WebRKernel_disposed = new WeakMap(), _WebRKernel_sendMessage = new WeakMap(), _WebRKernel_parentHeader = new WeakMap(), _WebRKernel_executionCounter = new WeakMap(), _WebRKernel_webRConsole = new WeakMap(), _WebRKernel_init = new WeakMap(), _WebRKernel_envSetup = new WeakMap(), _WebRKernel_shelter = new WeakMap(), _WebRKernel_lastPlotHash = new WeakMap();


/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?context=.!./style/logos/r-logo-32x32.png":
/*!***************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?context=.!./style/logos/r-logo-32x32.png ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "673490063efb564025c18d94159423829e3ce1ffcf8dd0169a6e87e69b3df37e.png");

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?context=.!./style/logos/r-logo-64x64.png":
/*!***************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?context=.!./style/logos/r-logo-64x64.png ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "a09500d3b231a4ffaa14f44f3afda2d607a69d4a70f8c48db760191b4765c97a.png");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/native.js":
/*!******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/native.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  randomUUID
});

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "unsafeStringify": () => (/* binding */ unsafeStringify)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}

function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}

function stringify(arr, offset = 0) {
  const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./native.js */ "./node_modules/uuid/dist/esm-browser/native.js");
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");




function v4(options, buf, offset) {
  if (_native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID && !buf && !options) {
    return _native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID();
  }

  options = options || {};
  const rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_1__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_2__.unsafeStringify)(rnds);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ })

}]);
//# sourceMappingURL=lib_index_js.ceb51aaa243923814c85.js.map