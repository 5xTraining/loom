// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"aVG7R":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "f2c9685dad4863d1";
module.bundle.HMR_BUNDLE_ID = "5e341378d39659f9";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F1() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                } // Render the fancy html overlay
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>\n          ").concat(stack, "\n        </pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>' + hint + '</div>';
            }).join(''), "\n        </div>\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"dkyui":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
// 前端實作程式碼
var _socketIoClient = require("socket.io-client");
var _peerjs = require("peerjs");
var _peerjsDefault = parcelHelpers.interopDefault(_peerjs);
const room_id = document.querySelector("#room_id").dataset.id;
const container = document.querySelector(".video-container");
const socket = _socketIoClient.io();
const users = {
};
const p2p = new _peerjsDefault.default({
    host: "/",
    port: 9527
});
// websocket
socket.on("USER_LEFT", (user_name)=>{
    if (users[user_name]) users[user_name].close();
});
// peer
p2p.on("open", (p_id)=>{
    socket.emit("ENTER_ROOM", room_id, p_id);
});
const v = document.createElement("video");
v.muted = true;
// device
navigator.mediaDevices.getUserMedia({
    audio: true,
    video: true
}).then((stream)=>{
    // 做滿多事情
    attachStreamToTarget(v, stream);
    socket.on("USER_ENTERED", (user_name)=>{
        sendStreamToUser(user_name, stream);
    });
    p2p.on("call", (call)=>{
        call.answer(stream);
        const v1 = document.createElement("video");
        v1.muted = true;
        call.on("stream", (theirStream)=>{
            attachStreamToTarget(v1, theirStream);
        });
    });
});
// helper
function attachStreamToTarget(target, stream) {
    target.srcObject = stream;
    target.addEventListener("loadedmetadata", ()=>{
        target.play();
    });
    container.append(target);
}
function sendStreamToUser(user_name, stream) {
    const call = p2p.call(user_name, stream);
    const v1 = document.createElement("video");
    v1.muted = true;
    call.on("stream", (theirStream)=>{
        attachStreamToTarget(v1, theirStream);
    });
    call.on("close", ()=>{
        v1.remove();
    });
    users[user_name] = call;
}

},{"socket.io-client":"jPDYc","peerjs":"g8wFM","@parcel/transformer-js/src/esmodule-helpers.js":"4N8i7"}],"jPDYc":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.io = exports.Socket = exports.Manager = exports.protocol = void 0;
const url_1 = require("./url");
const manager_1 = require("./manager");
const debug = require("debug")("socket.io-client");
/**
 * Module exports.
 */ module.exports = exports = lookup;
/**
 * Managers cache.
 */ const cache = exports.managers = {
};
function lookup(uri, opts) {
    if (typeof uri === "object") {
        opts = uri;
        uri = undefined;
    }
    opts = opts || {
    };
    const parsed = url_1.url(uri, opts.path || "/socket.io");
    const source = parsed.source;
    const id = parsed.id;
    const path = parsed.path;
    const sameNamespace = cache[id] && path in cache[id]["nsps"];
    const newConnection = opts.forceNew || opts["force new connection"] || false === opts.multiplex || sameNamespace;
    let io;
    if (newConnection) {
        debug("ignoring socket cache for %s", source);
        io = new manager_1.Manager(source, opts);
    } else {
        if (!cache[id]) {
            debug("new io instance for %s", source);
            cache[id] = new manager_1.Manager(source, opts);
        }
        io = cache[id];
    }
    if (parsed.query && !opts.query) opts.query = parsed.queryKey;
    return io.socket(parsed.path, opts);
}
exports.io = lookup;
/**
 * Protocol version.
 *
 * @public
 */ var socket_io_parser_1 = require("socket.io-parser");
Object.defineProperty(exports, "protocol", {
    enumerable: true,
    get: function() {
        return socket_io_parser_1.protocol;
    }
});
/**
 * `connect`.
 *
 * @param {String} uri
 * @public
 */ exports.connect = lookup;
/**
 * Expose constructors for standalone build.
 *
 * @public
 */ var manager_2 = require("./manager");
Object.defineProperty(exports, "Manager", {
    enumerable: true,
    get: function() {
        return manager_2.Manager;
    }
});
var socket_1 = require("./socket");
Object.defineProperty(exports, "Socket", {
    enumerable: true,
    get: function() {
        return socket_1.Socket;
    }
});
exports.default = lookup;

},{"./url":"eXN0Q","./manager":"8YUA2","debug":"aAMyB","socket.io-parser":"1QOft","./socket":"8ZDg9"}],"eXN0Q":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.url = void 0;
const parseuri = require("parseuri");
const debug = require("debug")("socket.io-client:url");
/**
 * URL parser.
 *
 * @param uri - url
 * @param path - the request path of the connection
 * @param loc - An object meant to mimic window.location.
 *        Defaults to window.location.
 * @public
 */ function url(uri, path = "", loc) {
    let obj = uri;
    // default to window.location
    loc = loc || typeof location !== "undefined" && location;
    if (null == uri) uri = loc.protocol + "//" + loc.host;
    // relative path support
    if (typeof uri === "string") {
        if ("/" === uri.charAt(0)) {
            if ("/" === uri.charAt(1)) uri = loc.protocol + uri;
            else uri = loc.host + uri;
        }
        if (!/^(https?|wss?):\/\//.test(uri)) {
            debug("protocol-less url %s", uri);
            if ("undefined" !== typeof loc) uri = loc.protocol + "//" + uri;
            else uri = "https://" + uri;
        }
        // parse
        debug("parse %s", uri);
        obj = parseuri(uri);
    }
    // make sure we treat `localhost:80` and `localhost` equally
    if (!obj.port) {
        if (/^(http|ws)$/.test(obj.protocol)) obj.port = "80";
        else if (/^(http|ws)s$/.test(obj.protocol)) obj.port = "443";
    }
    obj.path = obj.path || "/";
    const ipv6 = obj.host.indexOf(":") !== -1;
    const host = ipv6 ? "[" + obj.host + "]" : obj.host;
    // define unique id
    obj.id = obj.protocol + "://" + host + ":" + obj.port + path;
    // define href
    obj.href = obj.protocol + "://" + host + (loc && loc.port === obj.port ? "" : ":" + obj.port);
    return obj;
}
exports.url = url;

},{"parseuri":"l97Fi","debug":"aAMyB"}],"l97Fi":[function(require,module,exports) {
/**
 * Parses an URI
 *
 * @author Steven Levithan <stevenlevithan.com> (MIT license)
 * @api private
 */ var re = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
var parts = [
    'source',
    'protocol',
    'authority',
    'userInfo',
    'user',
    'password',
    'host',
    'port',
    'relative',
    'path',
    'directory',
    'file',
    'query',
    'anchor'
];
module.exports = function parseuri(str) {
    var src = str, b = str.indexOf('['), e = str.indexOf(']');
    if (b != -1 && e != -1) str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ';') + str.substring(e, str.length);
    var m = re.exec(str || ''), uri = {
    }, i = 14;
    while(i--)uri[parts[i]] = m[i] || '';
    if (b != -1 && e != -1) {
        uri.source = src;
        uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ':');
        uri.authority = uri.authority.replace('[', '').replace(']', '').replace(/;/g, ':');
        uri.ipv6uri = true;
    }
    uri.pathNames = pathNames(uri, uri['path']);
    uri.queryKey = queryKey(uri, uri['query']);
    return uri;
};
function pathNames(obj, path) {
    var regx = /\/{2,9}/g, names = path.replace(regx, "/").split("/");
    if (path.substr(0, 1) == '/' || path.length === 0) names.splice(0, 1);
    if (path.substr(path.length - 1, 1) == '/') names.splice(names.length - 1, 1);
    return names;
}
function queryKey(uri, query) {
    var data = {
    };
    query.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function($0, $1, $2) {
        if ($1) data[$1] = $2;
    });
    return data;
}

},{}],"aAMyB":[function(require,module,exports) {
var process = require("process");
/* eslint-env browser */ /**
 * This is the web browser implementation of `debug()`.
 */ exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();
exports.destroy = (()=>{
    let warned = false;
    return ()=>{
        if (!warned) {
            warned = true;
            console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
        }
    };
})();
/**
 * Colors.
 */ exports.colors = [
    '#0000CC',
    '#0000FF',
    '#0033CC',
    '#0033FF',
    '#0066CC',
    '#0066FF',
    '#0099CC',
    '#0099FF',
    '#00CC00',
    '#00CC33',
    '#00CC66',
    '#00CC99',
    '#00CCCC',
    '#00CCFF',
    '#3300CC',
    '#3300FF',
    '#3333CC',
    '#3333FF',
    '#3366CC',
    '#3366FF',
    '#3399CC',
    '#3399FF',
    '#33CC00',
    '#33CC33',
    '#33CC66',
    '#33CC99',
    '#33CCCC',
    '#33CCFF',
    '#6600CC',
    '#6600FF',
    '#6633CC',
    '#6633FF',
    '#66CC00',
    '#66CC33',
    '#9900CC',
    '#9900FF',
    '#9933CC',
    '#9933FF',
    '#99CC00',
    '#99CC33',
    '#CC0000',
    '#CC0033',
    '#CC0066',
    '#CC0099',
    '#CC00CC',
    '#CC00FF',
    '#CC3300',
    '#CC3333',
    '#CC3366',
    '#CC3399',
    '#CC33CC',
    '#CC33FF',
    '#CC6600',
    '#CC6633',
    '#CC9900',
    '#CC9933',
    '#CCCC00',
    '#CCCC33',
    '#FF0000',
    '#FF0033',
    '#FF0066',
    '#FF0099',
    '#FF00CC',
    '#FF00FF',
    '#FF3300',
    '#FF3333',
    '#FF3366',
    '#FF3399',
    '#FF33CC',
    '#FF33FF',
    '#FF6600',
    '#FF6633',
    '#FF9900',
    '#FF9933',
    '#FFCC00',
    '#FFCC33'
];
/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */ // eslint-disable-next-line complexity
function useColors() {
    // NB: In an Electron preload script, document will be defined but not fully
    // initialized. Since we know we're in Chrome, we'll just detect this case
    // explicitly
    if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) return true;
    // Internet Explorer and Edge do not support colors.
    if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) return false;
    // Is webkit? http://stackoverflow.com/a/16459606/376773
    // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
    return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
}
/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */ function formatArgs(args) {
    args[0] = (this.useColors ? '%c' : '') + this.namespace + (this.useColors ? ' %c' : ' ') + args[0] + (this.useColors ? '%c ' : ' ') + '+' + module.exports.humanize(this.diff);
    if (!this.useColors) return;
    const c = 'color: ' + this.color;
    args.splice(1, 0, c, 'color: inherit');
    // The final "%c" is somewhat tricky, because there could be other
    // arguments passed either before or after the %c, so we need to
    // figure out the correct index to insert the CSS into
    let index = 0;
    let lastC = 0;
    args[0].replace(/%[a-zA-Z%]/g, (match)=>{
        if (match === '%%') return;
        index++;
        if (match === '%c') // We only are interested in the *last* %c
        // (the user may have provided their own)
        lastC = index;
    });
    args.splice(lastC, 0, c);
}
/**
 * Invokes `console.debug()` when available.
 * No-op when `console.debug` is not a "function".
 * If `console.debug` is not available, falls back
 * to `console.log`.
 *
 * @api public
 */ exports.log = console.debug || console.log || (()=>{
});
/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */ function save(namespaces) {
    try {
        if (namespaces) exports.storage.setItem('debug', namespaces);
        else exports.storage.removeItem('debug');
    } catch (error) {
    // Swallow
    // XXX (@Qix-) should we be logging these?
    }
}
/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */ function load() {
    let r;
    try {
        r = exports.storage.getItem('debug');
    } catch (error) {
    // Swallow
    // XXX (@Qix-) should we be logging these?
    }
    // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
    if (!r && typeof process !== 'undefined' && 'env' in process) r = undefined;
    return r;
}
/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */ function localstorage() {
    try {
        // TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
        // The Browser also has localStorage in the global context.
        return localStorage;
    } catch (error) {
    // Swallow
    // XXX (@Qix-) should we be logging these?
    }
}
module.exports = require('./common')(exports);
const { formatters  } = module.exports;
/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */ formatters.j = function(v) {
    try {
        return JSON.stringify(v);
    } catch (error) {
        return '[UnexpectedJSONParseError]: ' + error.message;
    }
};

},{"process":"h7Qgs","./common":"gh4kE"}],"h7Qgs":[function(require,module,exports) {
// shim for using process in browser
var process = module.exports = {
};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function() {
    try {
        if (typeof setTimeout === 'function') cachedSetTimeout = setTimeout;
        else cachedSetTimeout = defaultSetTimout;
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') cachedClearTimeout = clearTimeout;
        else cachedClearTimeout = defaultClearTimeout;
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e1) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e1) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
    if (!draining || !currentQueue) return;
    draining = false;
    if (currentQueue.length) queue = currentQueue.concat(queue);
    else queueIndex = -1;
    if (queue.length) drainQueue();
}
function drainQueue() {
    if (draining) return;
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while(len){
        currentQueue = queue;
        queue = [];
        while((++queueIndex) < len)if (currentQueue) currentQueue[queueIndex].run();
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) runTimeout(drainQueue);
};
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {
};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {
};
function noop() {
}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function(name) {
    return [];
};
process.binding = function(name) {
    throw new Error('process.binding is not supported');
};
process.cwd = function() {
    return '/';
};
process.chdir = function(dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() {
    return 0;
};

},{}],"gh4kE":[function(require,module,exports) {
/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */ function setup(env) {
    createDebug.debug = createDebug;
    createDebug.default = createDebug;
    createDebug.coerce = coerce;
    createDebug.disable = disable;
    createDebug.enable = enable;
    createDebug.enabled = enabled;
    createDebug.humanize = require('ms');
    createDebug.destroy = destroy;
    Object.keys(env).forEach((key)=>{
        createDebug[key] = env[key];
    });
    /**
	* The currently active debug mode names, and names to skip.
	*/ createDebug.names = [];
    createDebug.skips = [];
    /**
	* Map of special "%n" handling functions, for the debug "format" argument.
	*
	* Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	*/ createDebug.formatters = {
    };
    /**
	* Selects a color for a debug namespace
	* @param {String} namespace The namespace string for the for the debug instance to be colored
	* @return {Number|String} An ANSI color code for the given namespace
	* @api private
	*/ function selectColor(namespace) {
        let hash = 0;
        for(let i = 0; i < namespace.length; i++){
            hash = (hash << 5) - hash + namespace.charCodeAt(i);
            hash |= 0; // Convert to 32bit integer
        }
        return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
    }
    createDebug.selectColor = selectColor;
    /**
	* Create a debugger with the given `namespace`.
	*
	* @param {String} namespace
	* @return {Function}
	* @api public
	*/ function createDebug(namespace) {
        let prevTime;
        let enableOverride = null;
        let namespacesCache;
        let enabledCache;
        function debug(...args) {
            // Disabled?
            if (!debug.enabled) return;
            const self = debug;
            // Set `diff` timestamp
            const curr = Number(new Date());
            const ms = curr - (prevTime || curr);
            self.diff = ms;
            self.prev = prevTime;
            self.curr = curr;
            prevTime = curr;
            args[0] = createDebug.coerce(args[0]);
            if (typeof args[0] !== 'string') // Anything else let's inspect with %O
            args.unshift('%O');
            // Apply any `formatters` transformations
            let index = 0;
            args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format)=>{
                // If we encounter an escaped % then don't increase the array index
                if (match === '%%') return '%';
                index++;
                const formatter = createDebug.formatters[format];
                if (typeof formatter === 'function') {
                    const val = args[index];
                    match = formatter.call(self, val);
                    // Now we need to remove `args[index]` since it's inlined in the `format`
                    args.splice(index, 1);
                    index--;
                }
                return match;
            });
            // Apply env-specific formatting (colors, etc.)
            createDebug.formatArgs.call(self, args);
            const logFn = self.log || createDebug.log;
            logFn.apply(self, args);
        }
        debug.namespace = namespace;
        debug.useColors = createDebug.useColors();
        debug.color = createDebug.selectColor(namespace);
        debug.extend = extend;
        debug.destroy = createDebug.destroy; // XXX Temporary. Will be removed in the next major release.
        Object.defineProperty(debug, 'enabled', {
            enumerable: true,
            configurable: false,
            get: ()=>{
                if (enableOverride !== null) return enableOverride;
                if (namespacesCache !== createDebug.namespaces) {
                    namespacesCache = createDebug.namespaces;
                    enabledCache = createDebug.enabled(namespace);
                }
                return enabledCache;
            },
            set: (v)=>{
                enableOverride = v;
            }
        });
        // Env-specific initialization logic for debug instances
        if (typeof createDebug.init === 'function') createDebug.init(debug);
        return debug;
    }
    function extend(namespace, delimiter) {
        const newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
        newDebug.log = this.log;
        return newDebug;
    }
    /**
	* Enables a debug mode by namespaces. This can include modes
	* separated by a colon and wildcards.
	*
	* @param {String} namespaces
	* @api public
	*/ function enable(namespaces) {
        createDebug.save(namespaces);
        createDebug.namespaces = namespaces;
        createDebug.names = [];
        createDebug.skips = [];
        let i;
        const split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
        const len = split.length;
        for(i = 0; i < len; i++){
            if (!split[i]) continue;
            namespaces = split[i].replace(/\*/g, '.*?');
            if (namespaces[0] === '-') createDebug.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
            else createDebug.names.push(new RegExp('^' + namespaces + '$'));
        }
    }
    /**
	* Disable debug output.
	*
	* @return {String} namespaces
	* @api public
	*/ function disable() {
        const namespaces = [
            ...createDebug.names.map(toNamespace),
            ...createDebug.skips.map(toNamespace).map((namespace)=>'-' + namespace
            )
        ].join(',');
        createDebug.enable('');
        return namespaces;
    }
    /**
	* Returns true if the given mode name is enabled, false otherwise.
	*
	* @param {String} name
	* @return {Boolean}
	* @api public
	*/ function enabled(name) {
        if (name[name.length - 1] === '*') return true;
        let i;
        let len;
        for(i = 0, len = createDebug.skips.length; i < len; i++){
            if (createDebug.skips[i].test(name)) return false;
        }
        for(i = 0, len = createDebug.names.length; i < len; i++){
            if (createDebug.names[i].test(name)) return true;
        }
        return false;
    }
    /**
	* Convert regexp to namespace
	*
	* @param {RegExp} regxep
	* @return {String} namespace
	* @api private
	*/ function toNamespace(regexp) {
        return regexp.toString().substring(2, regexp.toString().length - 2).replace(/\.\*\?$/, '*');
    }
    /**
	* Coerce `val`.
	*
	* @param {Mixed} val
	* @return {Mixed}
	* @api private
	*/ function coerce(val) {
        if (val instanceof Error) return val.stack || val.message;
        return val;
    }
    /**
	* XXX DO NOT USE. This is a temporary stub function.
	* XXX It WILL be removed in the next major release.
	*/ function destroy() {
        console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
    }
    createDebug.enable(createDebug.load());
    return createDebug;
}
module.exports = setup;

},{"ms":"bTXdI"}],"bTXdI":[function(require,module,exports) {
/**
 * Helpers.
 */ var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;
/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */ module.exports = function(val, options) {
    options = options || {
    };
    var type = typeof val;
    if (type === 'string' && val.length > 0) return parse(val);
    else if (type === 'number' && isFinite(val)) return options.long ? fmtLong(val) : fmtShort(val);
    throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val));
};
/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */ function parse(str) {
    str = String(str);
    if (str.length > 100) return;
    var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(str);
    if (!match) return;
    var n = parseFloat(match[1]);
    var type = (match[2] || 'ms').toLowerCase();
    switch(type){
        case 'years':
        case 'year':
        case 'yrs':
        case 'yr':
        case 'y':
            return n * y;
        case 'weeks':
        case 'week':
        case 'w':
            return n * w;
        case 'days':
        case 'day':
        case 'd':
            return n * d;
        case 'hours':
        case 'hour':
        case 'hrs':
        case 'hr':
        case 'h':
            return n * h;
        case 'minutes':
        case 'minute':
        case 'mins':
        case 'min':
        case 'm':
            return n * m;
        case 'seconds':
        case 'second':
        case 'secs':
        case 'sec':
        case 's':
            return n * s;
        case 'milliseconds':
        case 'millisecond':
        case 'msecs':
        case 'msec':
        case 'ms':
            return n;
        default:
            return undefined;
    }
}
/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */ function fmtShort(ms) {
    var msAbs = Math.abs(ms);
    if (msAbs >= d) return Math.round(ms / d) + 'd';
    if (msAbs >= h) return Math.round(ms / h) + 'h';
    if (msAbs >= m) return Math.round(ms / m) + 'm';
    if (msAbs >= s) return Math.round(ms / s) + 's';
    return ms + 'ms';
}
/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */ function fmtLong(ms) {
    var msAbs = Math.abs(ms);
    if (msAbs >= d) return plural(ms, msAbs, d, 'day');
    if (msAbs >= h) return plural(ms, msAbs, h, 'hour');
    if (msAbs >= m) return plural(ms, msAbs, m, 'minute');
    if (msAbs >= s) return plural(ms, msAbs, s, 'second');
    return ms + ' ms';
}
/**
 * Pluralization helper.
 */ function plural(ms, msAbs, n, name) {
    var isPlural = msAbs >= n * 1.5;
    return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}

},{}],"8YUA2":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Manager = void 0;
const eio = require("engine.io-client");
const util_1 = require("engine.io-client/lib/util");
const socket_1 = require("./socket");
const parser = require("socket.io-parser");
const on_1 = require("./on");
const Backoff = require("backo2");
const typed_events_1 = require("./typed-events");
const debug = require("debug")("socket.io-client:manager");
class Manager extends typed_events_1.StrictEventEmitter {
    constructor(uri, opts1){
        var _a;
        super();
        this.nsps = {
        };
        this.subs = [];
        if (uri && "object" === typeof uri) {
            opts1 = uri;
            uri = undefined;
        }
        opts1 = opts1 || {
        };
        opts1.path = opts1.path || "/socket.io";
        this.opts = opts1;
        util_1.installTimerFunctions(this, opts1);
        this.reconnection(opts1.reconnection !== false);
        this.reconnectionAttempts(opts1.reconnectionAttempts || Infinity);
        this.reconnectionDelay(opts1.reconnectionDelay || 1000);
        this.reconnectionDelayMax(opts1.reconnectionDelayMax || 5000);
        this.randomizationFactor((_a = opts1.randomizationFactor) !== null && _a !== void 0 ? _a : 0.5);
        this.backoff = new Backoff({
            min: this.reconnectionDelay(),
            max: this.reconnectionDelayMax(),
            jitter: this.randomizationFactor()
        });
        this.timeout(null == opts1.timeout ? 20000 : opts1.timeout);
        this._readyState = "closed";
        this.uri = uri;
        const _parser = opts1.parser || parser;
        this.encoder = new _parser.Encoder();
        this.decoder = new _parser.Decoder();
        this._autoConnect = opts1.autoConnect !== false;
        if (this._autoConnect) this.open();
    }
    reconnection(v) {
        if (!arguments.length) return this._reconnection;
        this._reconnection = !!v;
        return this;
    }
    reconnectionAttempts(v) {
        if (v === undefined) return this._reconnectionAttempts;
        this._reconnectionAttempts = v;
        return this;
    }
    reconnectionDelay(v) {
        var _a1;
        if (v === undefined) return this._reconnectionDelay;
        this._reconnectionDelay = v;
        (_a1 = this.backoff) === null || _a1 === void 0 || _a1.setMin(v);
        return this;
    }
    randomizationFactor(v) {
        var _a2;
        if (v === undefined) return this._randomizationFactor;
        this._randomizationFactor = v;
        (_a2 = this.backoff) === null || _a2 === void 0 || _a2.setJitter(v);
        return this;
    }
    reconnectionDelayMax(v) {
        var _a3;
        if (v === undefined) return this._reconnectionDelayMax;
        this._reconnectionDelayMax = v;
        (_a3 = this.backoff) === null || _a3 === void 0 || _a3.setMax(v);
        return this;
    }
    timeout(v) {
        if (!arguments.length) return this._timeout;
        this._timeout = v;
        return this;
    }
    /**
     * Starts trying to reconnect if reconnection is enabled and we have not
     * started reconnecting yet
     *
     * @private
     */ maybeReconnectOnOpen() {
        // Only try to reconnect if it's the first time we're connecting
        if (!this._reconnecting && this._reconnection && this.backoff.attempts === 0) // keeps reconnection from firing twice for the same reconnection loop
        this.reconnect();
    }
    /**
     * Sets the current transport `socket`.
     *
     * @param {Function} fn - optional, callback
     * @return self
     * @public
     */ open(fn) {
        debug("readyState %s", this._readyState);
        if (~this._readyState.indexOf("open")) return this;
        debug("opening %s", this.uri);
        this.engine = eio(this.uri, this.opts);
        const socket = this.engine;
        const self = this;
        this._readyState = "opening";
        this.skipReconnect = false;
        // emit `open`
        const openSubDestroy = on_1.on(socket, "open", function() {
            self.onopen();
            fn && fn();
        });
        // emit `error`
        const errorSub = on_1.on(socket, "error", (err)=>{
            debug("error");
            self.cleanup();
            self._readyState = "closed";
            this.emitReserved("error", err);
            if (fn) fn(err);
            else // Only do this if there is no fn to handle the error
            self.maybeReconnectOnOpen();
        });
        if (false !== this._timeout) {
            const timeout = this._timeout;
            debug("connect attempt will timeout after %d", timeout);
            if (timeout === 0) openSubDestroy(); // prevents a race condition with the 'open' event
            // set timer
            const timer = this.setTimeoutFn(()=>{
                debug("connect attempt timed out after %d", timeout);
                openSubDestroy();
                socket.close();
                socket.emit("error", new Error("timeout"));
            }, timeout);
            if (this.opts.autoUnref) timer.unref();
            this.subs.push(function subDestroy() {
                clearTimeout(timer);
            });
        }
        this.subs.push(openSubDestroy);
        this.subs.push(errorSub);
        return this;
    }
    /**
     * Alias for open()
     *
     * @return self
     * @public
     */ connect(fn) {
        return this.open(fn);
    }
    /**
     * Called upon transport open.
     *
     * @private
     */ onopen() {
        debug("open");
        // clear old subs
        this.cleanup();
        // mark as open
        this._readyState = "open";
        this.emitReserved("open");
        // add new subs
        const socket = this.engine;
        this.subs.push(on_1.on(socket, "ping", this.onping.bind(this)), on_1.on(socket, "data", this.ondata.bind(this)), on_1.on(socket, "error", this.onerror.bind(this)), on_1.on(socket, "close", this.onclose.bind(this)), on_1.on(this.decoder, "decoded", this.ondecoded.bind(this)));
    }
    /**
     * Called upon a ping.
     *
     * @private
     */ onping() {
        this.emitReserved("ping");
    }
    /**
     * Called with data.
     *
     * @private
     */ ondata(data) {
        this.decoder.add(data);
    }
    /**
     * Called when parser fully decodes a packet.
     *
     * @private
     */ ondecoded(packet) {
        this.emitReserved("packet", packet);
    }
    /**
     * Called upon socket error.
     *
     * @private
     */ onerror(err) {
        debug("error", err);
        this.emitReserved("error", err);
    }
    /**
     * Creates a new socket for the given `nsp`.
     *
     * @return {Socket}
     * @public
     */ socket(nsp, opts) {
        let socket = this.nsps[nsp];
        if (!socket) {
            socket = new socket_1.Socket(this, nsp, opts);
            this.nsps[nsp] = socket;
        }
        return socket;
    }
    /**
     * Called upon a socket close.
     *
     * @param socket
     * @private
     */ _destroy(socket) {
        const nsps = Object.keys(this.nsps);
        for (const nsp of nsps){
            const socket = this.nsps[nsp];
            if (socket.active) {
                debug("socket %s is still active, skipping close", nsp);
                return;
            }
        }
        this._close();
    }
    /**
     * Writes a packet.
     *
     * @param packet
     * @private
     */ _packet(packet) {
        debug("writing packet %j", packet);
        const encodedPackets = this.encoder.encode(packet);
        for(let i = 0; i < encodedPackets.length; i++)this.engine.write(encodedPackets[i], packet.options);
    }
    /**
     * Clean up transport subscriptions and packet buffer.
     *
     * @private
     */ cleanup() {
        debug("cleanup");
        this.subs.forEach((subDestroy)=>subDestroy()
        );
        this.subs.length = 0;
        this.decoder.destroy();
    }
    /**
     * Close the current socket.
     *
     * @private
     */ _close() {
        debug("disconnect");
        this.skipReconnect = true;
        this._reconnecting = false;
        if ("opening" === this._readyState) // `onclose` will not fire because
        // an open event never happened
        this.cleanup();
        this.backoff.reset();
        this._readyState = "closed";
        if (this.engine) this.engine.close();
    }
    /**
     * Alias for close()
     *
     * @private
     */ disconnect() {
        return this._close();
    }
    /**
     * Called upon engine close.
     *
     * @private
     */ onclose(reason) {
        debug("onclose");
        this.cleanup();
        this.backoff.reset();
        this._readyState = "closed";
        this.emitReserved("close", reason);
        if (this._reconnection && !this.skipReconnect) this.reconnect();
    }
    /**
     * Attempt a reconnection.
     *
     * @private
     */ reconnect() {
        if (this._reconnecting || this.skipReconnect) return this;
        const self = this;
        if (this.backoff.attempts >= this._reconnectionAttempts) {
            debug("reconnect failed");
            this.backoff.reset();
            this.emitReserved("reconnect_failed");
            this._reconnecting = false;
        } else {
            const delay = this.backoff.duration();
            debug("will wait %dms before reconnect attempt", delay);
            this._reconnecting = true;
            const timer = this.setTimeoutFn(()=>{
                if (self.skipReconnect) return;
                debug("attempting reconnect");
                this.emitReserved("reconnect_attempt", self.backoff.attempts);
                // check again for the case socket closed in above events
                if (self.skipReconnect) return;
                self.open((err)=>{
                    if (err) {
                        debug("reconnect attempt error");
                        self._reconnecting = false;
                        self.reconnect();
                        this.emitReserved("reconnect_error", err);
                    } else {
                        debug("reconnect success");
                        self.onreconnect();
                    }
                });
            }, delay);
            if (this.opts.autoUnref) timer.unref();
            this.subs.push(function subDestroy() {
                clearTimeout(timer);
            });
        }
    }
    /**
     * Called upon successful reconnect.
     *
     * @private
     */ onreconnect() {
        const attempt = this.backoff.attempts;
        this._reconnecting = false;
        this.backoff.reset();
        this.emitReserved("reconnect", attempt);
    }
}
exports.Manager = Manager;

},{"engine.io-client":"7iAEh","engine.io-client/lib/util":"hnD3h","./socket":"8ZDg9","socket.io-parser":"1QOft","./on":"cCnGT","backo2":"kVvwn","./typed-events":"bet5C","debug":"aAMyB"}],"7iAEh":[function(require,module,exports) {
const Socket = require("./socket");
module.exports = (uri, opts)=>new Socket(uri, opts)
;
/**
 * Expose deps for legacy compatibility
 * and standalone browser access.
 */ module.exports.Socket = Socket;
module.exports.protocol = Socket.protocol; // this is an int
module.exports.Transport = require("./transport");
module.exports.transports = require("./transports/index");
module.exports.parser = require("engine.io-parser");

},{"./socket":"1a4Dn","./transport":"9Vino","./transports/index":"acDXn","engine.io-parser":"6fmhU"}],"1a4Dn":[function(require,module,exports) {
const transports = require("./transports/index");
const Emitter = require("component-emitter");
const debug = require("debug")("engine.io-client:socket");
const parser = require("engine.io-parser");
const parseuri = require("parseuri");
const parseqs = require("parseqs");
const { installTimerFunctions  } = require("./util");
class Socket extends Emitter {
    /**
   * Socket constructor.
   *
   * @param {String|Object} uri or options
   * @param {Object} options
   * @api public
   */ constructor(uri, opts = {
    }){
        super();
        if (uri && "object" === typeof uri) {
            opts = uri;
            uri = null;
        }
        if (uri) {
            uri = parseuri(uri);
            opts.hostname = uri.host;
            opts.secure = uri.protocol === "https" || uri.protocol === "wss";
            opts.port = uri.port;
            if (uri.query) opts.query = uri.query;
        } else if (opts.host) opts.hostname = parseuri(opts.host).host;
        installTimerFunctions(this, opts);
        this.secure = null != opts.secure ? opts.secure : typeof location !== "undefined" && "https:" === location.protocol;
        if (opts.hostname && !opts.port) // if no port is specified manually, use the protocol default
        opts.port = this.secure ? "443" : "80";
        this.hostname = opts.hostname || (typeof location !== "undefined" ? location.hostname : "localhost");
        this.port = opts.port || (typeof location !== "undefined" && location.port ? location.port : this.secure ? 443 : 80);
        this.transports = opts.transports || [
            "polling",
            "websocket"
        ];
        this.readyState = "";
        this.writeBuffer = [];
        this.prevBufferLen = 0;
        this.opts = Object.assign({
            path: "/engine.io",
            agent: false,
            withCredentials: false,
            upgrade: true,
            jsonp: true,
            timestampParam: "t",
            rememberUpgrade: false,
            rejectUnauthorized: true,
            perMessageDeflate: {
                threshold: 1024
            },
            transportOptions: {
            },
            closeOnBeforeunload: true
        }, opts);
        this.opts.path = this.opts.path.replace(/\/$/, "") + "/";
        if (typeof this.opts.query === "string") this.opts.query = parseqs.decode(this.opts.query);
        // set on handshake
        this.id = null;
        this.upgrades = null;
        this.pingInterval = null;
        this.pingTimeout = null;
        // set on heartbeat
        this.pingTimeoutTimer = null;
        if (typeof addEventListener === "function") {
            if (this.opts.closeOnBeforeunload) // Firefox closes the connection when the "beforeunload" event is emitted but not Chrome. This event listener
            // ensures every browser behaves the same (no "disconnect" event at the Socket.IO level when the page is
            // closed/reloaded)
            addEventListener("beforeunload", ()=>{
                if (this.transport) {
                    // silently close the transport
                    this.transport.removeAllListeners();
                    this.transport.close();
                }
            }, false);
            if (this.hostname !== "localhost") {
                this.offlineEventListener = ()=>{
                    this.onClose("transport close");
                };
                addEventListener("offline", this.offlineEventListener, false);
            }
        }
        this.open();
    }
    /**
   * Creates transport of the given type.
   *
   * @param {String} transport name
   * @return {Transport}
   * @api private
   */ createTransport(name) {
        debug('creating transport "%s"', name);
        const query = clone(this.opts.query);
        // append engine.io protocol identifier
        query.EIO = parser.protocol;
        // transport name
        query.transport = name;
        // session id if we already have one
        if (this.id) query.sid = this.id;
        const opts1 = Object.assign({
        }, this.opts.transportOptions[name], this.opts, {
            query,
            socket: this,
            hostname: this.hostname,
            secure: this.secure,
            port: this.port
        });
        debug("options: %j", opts1);
        return new transports[name](opts1);
    }
    /**
   * Initializes transport to use and starts probe.
   *
   * @api private
   */ open() {
        let transport;
        if (this.opts.rememberUpgrade && Socket.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1) transport = "websocket";
        else if (0 === this.transports.length) {
            // Emit error on next tick so it can be listened to
            this.setTimeoutFn(()=>{
                this.emit("error", "No transports available");
            }, 0);
            return;
        } else transport = this.transports[0];
        this.readyState = "opening";
        // Retry with the next transport if the transport is disabled (jsonp: false)
        try {
            transport = this.createTransport(transport);
        } catch (e) {
            debug("error while creating transport: %s", e);
            this.transports.shift();
            this.open();
            return;
        }
        transport.open();
        this.setTransport(transport);
    }
    /**
   * Sets the current transport. Disables the existing one (if any).
   *
   * @api private
   */ setTransport(transport) {
        debug("setting transport %s", transport.name);
        if (this.transport) {
            debug("clearing existing transport %s", this.transport.name);
            this.transport.removeAllListeners();
        }
        // set up transport
        this.transport = transport;
        // set up transport listeners
        transport.on("drain", this.onDrain.bind(this)).on("packet", this.onPacket.bind(this)).on("error", this.onError.bind(this)).on("close", ()=>{
            this.onClose("transport close");
        });
    }
    /**
   * Probes a transport.
   *
   * @param {String} transport name
   * @api private
   */ probe(name) {
        debug('probing transport "%s"', name);
        let transport = this.createTransport(name, {
            probe: 1
        });
        let failed = false;
        Socket.priorWebsocketSuccess = false;
        const onTransportOpen = ()=>{
            if (failed) return;
            debug('probe transport "%s" opened', name);
            transport.send([
                {
                    type: "ping",
                    data: "probe"
                }
            ]);
            transport.once("packet", (msg)=>{
                if (failed) return;
                if ("pong" === msg.type && "probe" === msg.data) {
                    debug('probe transport "%s" pong', name);
                    this.upgrading = true;
                    this.emit("upgrading", transport);
                    if (!transport) return;
                    Socket.priorWebsocketSuccess = "websocket" === transport.name;
                    debug('pausing current transport "%s"', this.transport.name);
                    this.transport.pause(()=>{
                        if (failed) return;
                        if ("closed" === this.readyState) return;
                        debug("changing transport and sending upgrade packet");
                        cleanup();
                        this.setTransport(transport);
                        transport.send([
                            {
                                type: "upgrade"
                            }
                        ]);
                        this.emit("upgrade", transport);
                        transport = null;
                        this.upgrading = false;
                        this.flush();
                    });
                } else {
                    debug('probe transport "%s" failed', name);
                    const err = new Error("probe error");
                    err.transport = transport.name;
                    this.emit("upgradeError", err);
                }
            });
        };
        function freezeTransport() {
            if (failed) return;
            // Any callback called by transport should be ignored since now
            failed = true;
            cleanup();
            transport.close();
            transport = null;
        }
        // Handle any error that happens while probing
        const onerror = (err)=>{
            const error = new Error("probe error: " + err);
            error.transport = transport.name;
            freezeTransport();
            debug('probe transport "%s" failed because of error: %s', name, err);
            this.emit("upgradeError", error);
        };
        function onTransportClose() {
            onerror("transport closed");
        }
        // When the socket is closed while we're probing
        function onclose() {
            onerror("socket closed");
        }
        // When the socket is upgraded while we're probing
        function onupgrade(to) {
            if (transport && to.name !== transport.name) {
                debug('"%s" works - aborting "%s"', to.name, transport.name);
                freezeTransport();
            }
        }
        // Remove all listeners on the transport and on self
        const cleanup = ()=>{
            transport.removeListener("open", onTransportOpen);
            transport.removeListener("error", onerror);
            transport.removeListener("close", onTransportClose);
            this.removeListener("close", onclose);
            this.removeListener("upgrading", onupgrade);
        };
        transport.once("open", onTransportOpen);
        transport.once("error", onerror);
        transport.once("close", onTransportClose);
        this.once("close", onclose);
        this.once("upgrading", onupgrade);
        transport.open();
    }
    /**
   * Called when connection is deemed open.
   *
   * @api public
   */ onOpen() {
        debug("socket open");
        this.readyState = "open";
        Socket.priorWebsocketSuccess = "websocket" === this.transport.name;
        this.emit("open");
        this.flush();
        // we check for `readyState` in case an `open`
        // listener already closed the socket
        if ("open" === this.readyState && this.opts.upgrade && this.transport.pause) {
            debug("starting upgrade probes");
            let i = 0;
            const l = this.upgrades.length;
            for(; i < l; i++)this.probe(this.upgrades[i]);
        }
    }
    /**
   * Handles a packet.
   *
   * @api private
   */ onPacket(packet) {
        if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
            debug('socket receive: type "%s", data "%s"', packet.type, packet.data);
            this.emit("packet", packet);
            // Socket is live - any packet counts
            this.emit("heartbeat");
            switch(packet.type){
                case "open":
                    this.onHandshake(JSON.parse(packet.data));
                    break;
                case "ping":
                    this.resetPingTimeout();
                    this.sendPacket("pong");
                    this.emit("ping");
                    this.emit("pong");
                    break;
                case "error":
                    const err = new Error("server error");
                    err.code = packet.data;
                    this.onError(err);
                    break;
                case "message":
                    this.emit("data", packet.data);
                    this.emit("message", packet.data);
                    break;
            }
        } else debug('packet received with socket readyState "%s"', this.readyState);
    }
    /**
   * Called upon handshake completion.
   *
   * @param {Object} handshake obj
   * @api private
   */ onHandshake(data) {
        this.emit("handshake", data);
        this.id = data.sid;
        this.transport.query.sid = data.sid;
        this.upgrades = this.filterUpgrades(data.upgrades);
        this.pingInterval = data.pingInterval;
        this.pingTimeout = data.pingTimeout;
        this.onOpen();
        // In case open handler closes socket
        if ("closed" === this.readyState) return;
        this.resetPingTimeout();
    }
    /**
   * Sets and resets ping timeout timer based on server pings.
   *
   * @api private
   */ resetPingTimeout() {
        this.clearTimeoutFn(this.pingTimeoutTimer);
        this.pingTimeoutTimer = this.setTimeoutFn(()=>{
            this.onClose("ping timeout");
        }, this.pingInterval + this.pingTimeout);
        if (this.opts.autoUnref) this.pingTimeoutTimer.unref();
    }
    /**
   * Called on `drain` event
   *
   * @api private
   */ onDrain() {
        this.writeBuffer.splice(0, this.prevBufferLen);
        // setting prevBufferLen = 0 is very important
        // for example, when upgrading, upgrade packet is sent over,
        // and a nonzero prevBufferLen could cause problems on `drain`
        this.prevBufferLen = 0;
        if (0 === this.writeBuffer.length) this.emit("drain");
        else this.flush();
    }
    /**
   * Flush write buffers.
   *
   * @api private
   */ flush() {
        if ("closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
            debug("flushing %d packets in socket", this.writeBuffer.length);
            this.transport.send(this.writeBuffer);
            // keep track of current length of writeBuffer
            // splice writeBuffer and callbackBuffer on `drain`
            this.prevBufferLen = this.writeBuffer.length;
            this.emit("flush");
        }
    }
    /**
   * Sends a message.
   *
   * @param {String} message.
   * @param {Function} callback function.
   * @param {Object} options.
   * @return {Socket} for chaining.
   * @api public
   */ write(msg, options, fn) {
        this.sendPacket("message", msg, options, fn);
        return this;
    }
    send(msg, options, fn) {
        this.sendPacket("message", msg, options, fn);
        return this;
    }
    /**
   * Sends a packet.
   *
   * @param {String} packet type.
   * @param {String} data.
   * @param {Object} options.
   * @param {Function} callback function.
   * @api private
   */ sendPacket(type, data, options, fn) {
        if ("function" === typeof data) {
            fn = data;
            data = undefined;
        }
        if ("function" === typeof options) {
            fn = options;
            options = null;
        }
        if ("closing" === this.readyState || "closed" === this.readyState) return;
        options = options || {
        };
        options.compress = false !== options.compress;
        const packet = {
            type: type,
            data: data,
            options: options
        };
        this.emit("packetCreate", packet);
        this.writeBuffer.push(packet);
        if (fn) this.once("flush", fn);
        this.flush();
    }
    /**
   * Closes the connection.
   *
   * @api private
   */ close() {
        const close = ()=>{
            this.onClose("forced close");
            debug("socket closing - telling transport to close");
            this.transport.close();
        };
        const cleanupAndClose = ()=>{
            this.removeListener("upgrade", cleanupAndClose);
            this.removeListener("upgradeError", cleanupAndClose);
            close();
        };
        const waitForUpgrade = ()=>{
            // wait for upgrade to finish since we can't send packets while pausing a transport
            this.once("upgrade", cleanupAndClose);
            this.once("upgradeError", cleanupAndClose);
        };
        if ("opening" === this.readyState || "open" === this.readyState) {
            this.readyState = "closing";
            if (this.writeBuffer.length) this.once("drain", ()=>{
                if (this.upgrading) waitForUpgrade();
                else close();
            });
            else if (this.upgrading) waitForUpgrade();
            else close();
        }
        return this;
    }
    /**
   * Called upon transport error
   *
   * @api private
   */ onError(err) {
        debug("socket error %j", err);
        Socket.priorWebsocketSuccess = false;
        this.emit("error", err);
        this.onClose("transport error", err);
    }
    /**
   * Called upon transport close.
   *
   * @api private
   */ onClose(reason, desc) {
        if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
            debug('socket close with reason: "%s"', reason);
            // clear timers
            this.clearTimeoutFn(this.pingIntervalTimer);
            this.clearTimeoutFn(this.pingTimeoutTimer);
            // stop event from firing again for transport
            this.transport.removeAllListeners("close");
            // ensure transport won't stay open
            this.transport.close();
            // ignore further transport communication
            this.transport.removeAllListeners();
            if (typeof removeEventListener === "function") removeEventListener("offline", this.offlineEventListener, false);
            // set ready state
            this.readyState = "closed";
            // clear session id
            this.id = null;
            // emit close event
            this.emit("close", reason, desc);
            // clean buffers after, so users can still
            // grab the buffers on `close` event
            this.writeBuffer = [];
            this.prevBufferLen = 0;
        }
    }
    /**
   * Filters upgrades, returning only those matching client transports.
   *
   * @param {Array} server upgrades
   * @api private
   *
   */ filterUpgrades(upgrades) {
        const filteredUpgrades = [];
        let i = 0;
        const j = upgrades.length;
        for(; i < j; i++)if (~this.transports.indexOf(upgrades[i])) filteredUpgrades.push(upgrades[i]);
        return filteredUpgrades;
    }
}
Socket.priorWebsocketSuccess = false;
/**
 * Protocol version.
 *
 * @api public
 */ Socket.protocol = parser.protocol; // this is an int
function clone(obj) {
    const o = {
    };
    for(let i in obj)if (obj.hasOwnProperty(i)) o[i] = obj[i];
    return o;
}
module.exports = Socket;

},{"./transports/index":"acDXn","component-emitter":"5Oj9U","debug":"k2DsP","engine.io-parser":"6fmhU","parseuri":"l97Fi","parseqs":"ezvFn","./util":"hnD3h"}],"acDXn":[function(require,module,exports) {
const XMLHttpRequest1 = require("xmlhttprequest-ssl");
const XHR = require("./polling-xhr");
const JSONP = require("./polling-jsonp");
const websocket = require("./websocket");
exports.polling = polling;
exports.websocket = websocket;
/**
 * Polling transport polymorphic constructor.
 * Decides on xhr vs jsonp based on feature detection.
 *
 * @api private
 */ function polling(opts) {
    let xhr;
    let xd = false;
    let xs = false;
    const jsonp = false !== opts.jsonp;
    if (typeof location !== "undefined") {
        const isSSL = "https:" === location.protocol;
        let port = location.port;
        // some user agents have empty `location.port`
        if (!port) port = isSSL ? 443 : 80;
        xd = opts.hostname !== location.hostname || port !== opts.port;
        xs = opts.secure !== isSSL;
    }
    opts.xdomain = xd;
    opts.xscheme = xs;
    xhr = new XMLHttpRequest1(opts);
    if ("open" in xhr && !opts.forceJSONP) return new XHR(opts);
    else {
        if (!jsonp) throw new Error("JSONP disabled");
        return new JSONP(opts);
    }
}

},{"xmlhttprequest-ssl":"9VDnx","./polling-xhr":"ebbAa","./polling-jsonp":"5y6Xm","./websocket":"k4qNy"}],"9VDnx":[function(require,module,exports) {
// browser shim for xmlhttprequest module
const hasCORS = require("has-cors");
const globalThis = require("./globalThis");
module.exports = function(opts) {
    const xdomain = opts.xdomain;
    // scheme must be same when usign XDomainRequest
    // http://blogs.msdn.com/b/ieinternals/archive/2010/05/13/xdomainrequest-restrictions-limitations-and-workarounds.aspx
    const xscheme = opts.xscheme;
    // XDomainRequest has a flow of not sending cookie, therefore it should be disabled as a default.
    // https://github.com/Automattic/engine.io-client/pull/217
    const enablesXDR = opts.enablesXDR;
    // XMLHttpRequest can be disabled on IE
    try {
        if ("undefined" !== typeof XMLHttpRequest && (!xdomain || hasCORS)) return new XMLHttpRequest();
    } catch (e) {
    }
    // Use XDomainRequest for IE8 if enablesXDR is true
    // because loading bar keeps flashing when using jsonp-polling
    // https://github.com/yujiosaka/socke.io-ie8-loading-example
    try {
        if ("undefined" !== typeof XDomainRequest && !xscheme && enablesXDR) return new XDomainRequest();
    } catch (e) {
    }
    if (!xdomain) try {
        return new globalThis[[
            "Active"
        ].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch (e) {
    }
};

},{"has-cors":"juX98","./globalThis":"gsQt4"}],"juX98":[function(require,module,exports) {
/**
 * Module exports.
 *
 * Logic borrowed from Modernizr:
 *
 *   - https://github.com/Modernizr/Modernizr/blob/master/feature-detects/cors.js
 */ try {
    module.exports = typeof XMLHttpRequest !== 'undefined' && 'withCredentials' in new XMLHttpRequest();
} catch (err) {
    // if XMLHttp support is disabled in IE then it will throw
    // when trying to create
    module.exports = false;
}

},{}],"gsQt4":[function(require,module,exports) {
module.exports = (()=>{
    if (typeof self !== "undefined") return self;
    else if (typeof window !== "undefined") return window;
    else return Function("return this")();
})();

},{}],"ebbAa":[function(require,module,exports) {
/* global attachEvent */ const XMLHttpRequest1 = require("xmlhttprequest-ssl");
const Polling = require("./polling");
const Emitter = require("component-emitter");
const { pick , installTimerFunctions  } = require("../util");
const globalThis = require("../globalThis");
const debug = require("debug")("engine.io-client:polling-xhr");
/**
 * Empty function
 */ function empty() {
}
const hasXHR2 = function() {
    const xhr = new XMLHttpRequest1({
        xdomain: false
    });
    return null != xhr.responseType;
}();
class XHR extends Polling {
    /**
   * XHR Polling constructor.
   *
   * @param {Object} opts
   * @api public
   */ constructor(opts1){
        super(opts1);
        if (typeof location !== "undefined") {
            const isSSL = "https:" === location.protocol;
            let port = location.port;
            // some user agents have empty `location.port`
            if (!port) port = isSSL ? 443 : 80;
            this.xd = typeof location !== "undefined" && opts1.hostname !== location.hostname || port !== opts1.port;
            this.xs = opts1.secure !== isSSL;
        }
        /**
     * XHR supports binary
     */ const forceBase64 = opts1 && opts1.forceBase64;
        this.supportsBinary = hasXHR2 && !forceBase64;
    }
    /**
   * Creates a request.
   *
   * @param {String} method
   * @api private
   */ request(opts = {
    }) {
        Object.assign(opts, {
            xd: this.xd,
            xs: this.xs
        }, this.opts);
        return new Request1(this.uri(), opts);
    }
    /**
   * Sends data.
   *
   * @param {String} data to send.
   * @param {Function} called upon flush.
   * @api private
   */ doWrite(data, fn) {
        const req = this.request({
            method: "POST",
            data: data
        });
        req.on("success", fn);
        req.on("error", (err)=>{
            this.onError("xhr post error", err);
        });
    }
    /**
   * Starts a poll cycle.
   *
   * @api private
   */ doPoll() {
        debug("xhr poll");
        const req = this.request();
        req.on("data", this.onData.bind(this));
        req.on("error", (err)=>{
            this.onError("xhr poll error", err);
        });
        this.pollXhr = req;
    }
}
class Request1 extends Emitter {
    /**
   * Request constructor
   *
   * @param {Object} options
   * @api public
   */ constructor(uri, opts2){
        super();
        installTimerFunctions(this, opts2);
        this.opts = opts2;
        this.method = opts2.method || "GET";
        this.uri = uri;
        this.async = false !== opts2.async;
        this.data = undefined !== opts2.data ? opts2.data : null;
        this.create();
    }
    /**
   * Creates the XHR object and sends the request.
   *
   * @api private
   */ create() {
        const opts3 = pick(this.opts, "agent", "enablesXDR", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
        opts3.xdomain = !!this.opts.xd;
        opts3.xscheme = !!this.opts.xs;
        const xhr = this.xhr = new XMLHttpRequest1(opts3);
        try {
            debug("xhr open %s: %s", this.method, this.uri);
            xhr.open(this.method, this.uri, this.async);
            try {
                if (this.opts.extraHeaders) {
                    xhr.setDisableHeaderCheck && xhr.setDisableHeaderCheck(true);
                    for(let i in this.opts.extraHeaders)if (this.opts.extraHeaders.hasOwnProperty(i)) xhr.setRequestHeader(i, this.opts.extraHeaders[i]);
                }
            } catch (e) {
            }
            if ("POST" === this.method) try {
                xhr.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
            } catch (e) {
            }
            try {
                xhr.setRequestHeader("Accept", "*/*");
            } catch (e) {
            }
            // ie6 check
            if ("withCredentials" in xhr) xhr.withCredentials = this.opts.withCredentials;
            if (this.opts.requestTimeout) xhr.timeout = this.opts.requestTimeout;
            if (this.hasXDR()) {
                xhr.onload = ()=>{
                    this.onLoad();
                };
                xhr.onerror = ()=>{
                    this.onError(xhr.responseText);
                };
            } else xhr.onreadystatechange = ()=>{
                if (4 !== xhr.readyState) return;
                if (200 === xhr.status || 1223 === xhr.status) this.onLoad();
                else // make sure the `error` event handler that's user-set
                // does not throw in the same tick and gets caught here
                this.setTimeoutFn(()=>{
                    this.onError(typeof xhr.status === "number" ? xhr.status : 0);
                }, 0);
            };
            debug("xhr data %s", this.data);
            xhr.send(this.data);
        } catch (e) {
            // Need to defer since .create() is called directly from the constructor
            // and thus the 'error' event can only be only bound *after* this exception
            // occurs.  Therefore, also, we cannot throw here at all.
            this.setTimeoutFn(()=>{
                this.onError(e);
            }, 0);
            return;
        }
        if (typeof document !== "undefined") {
            this.index = Request1.requestsCount++;
            Request1.requests[this.index] = this;
        }
    }
    /**
   * Called upon successful response.
   *
   * @api private
   */ onSuccess() {
        this.emit("success");
        this.cleanup();
    }
    /**
   * Called if we have data.
   *
   * @api private
   */ onData(data) {
        this.emit("data", data);
        this.onSuccess();
    }
    /**
   * Called upon error.
   *
   * @api private
   */ onError(err) {
        this.emit("error", err);
        this.cleanup(true);
    }
    /**
   * Cleans up house.
   *
   * @api private
   */ cleanup(fromError) {
        if ("undefined" === typeof this.xhr || null === this.xhr) return;
        // xmlhttprequest
        if (this.hasXDR()) this.xhr.onload = this.xhr.onerror = empty;
        else this.xhr.onreadystatechange = empty;
        if (fromError) try {
            this.xhr.abort();
        } catch (e) {
        }
        if (typeof document !== "undefined") delete Request1.requests[this.index];
        this.xhr = null;
    }
    /**
   * Called upon load.
   *
   * @api private
   */ onLoad() {
        const data = this.xhr.responseText;
        if (data !== null) this.onData(data);
    }
    /**
   * Check if it has XDomainRequest.
   *
   * @api private
   */ hasXDR() {
        return typeof XDomainRequest !== "undefined" && !this.xs && this.enablesXDR;
    }
    /**
   * Aborts the request.
   *
   * @api public
   */ abort() {
        this.cleanup();
    }
}
/**
 * Aborts pending requests when unloading the window. This is needed to prevent
 * memory leaks (e.g. when using IE) and to ensure that no spurious error is
 * emitted.
 */ Request1.requestsCount = 0;
Request1.requests = {
};
if (typeof document !== "undefined") {
    if (typeof attachEvent === "function") attachEvent("onunload", unloadHandler);
    else if (typeof addEventListener === "function") {
        const terminationEvent = "onpagehide" in globalThis ? "pagehide" : "unload";
        addEventListener(terminationEvent, unloadHandler, false);
    }
}
function unloadHandler() {
    for(let i in Request1.requests)if (Request1.requests.hasOwnProperty(i)) Request1.requests[i].abort();
}
module.exports = XHR;
module.exports.Request = Request1;

},{"xmlhttprequest-ssl":"9VDnx","./polling":"cigJ6","component-emitter":"5Oj9U","../util":"hnD3h","../globalThis":"gsQt4","debug":"k2DsP"}],"cigJ6":[function(require,module,exports) {
const Transport = require("../transport");
const parseqs = require("parseqs");
const parser = require("engine.io-parser");
const yeast = require("yeast");
const debug = require("debug")("engine.io-client:polling");
class Polling extends Transport {
    /**
   * Transport name.
   */ get name() {
        return "polling";
    }
    /**
   * Opens the socket (triggers polling). We write a PING message to determine
   * when the transport is open.
   *
   * @api private
   */ doOpen() {
        this.poll();
    }
    /**
   * Pauses polling.
   *
   * @param {Function} callback upon buffers are flushed and transport is paused
   * @api private
   */ pause(onPause) {
        this.readyState = "pausing";
        const pause = ()=>{
            debug("paused");
            this.readyState = "paused";
            onPause();
        };
        if (this.polling || !this.writable) {
            let total = 0;
            if (this.polling) {
                debug("we are currently polling - waiting to pause");
                total++;
                this.once("pollComplete", function() {
                    debug("pre-pause polling complete");
                    (--total) || pause();
                });
            }
            if (!this.writable) {
                debug("we are currently writing - waiting to pause");
                total++;
                this.once("drain", function() {
                    debug("pre-pause writing complete");
                    (--total) || pause();
                });
            }
        } else pause();
    }
    /**
   * Starts polling cycle.
   *
   * @api public
   */ poll() {
        debug("polling");
        this.polling = true;
        this.doPoll();
        this.emit("poll");
    }
    /**
   * Overloads onData to detect payloads.
   *
   * @api private
   */ onData(data) {
        debug("polling got data %s", data);
        const callback = (packet)=>{
            // if its the first message we consider the transport open
            if ("opening" === this.readyState && packet.type === "open") this.onOpen();
            // if its a close packet, we close the ongoing requests
            if ("close" === packet.type) {
                this.onClose();
                return false;
            }
            // otherwise bypass onData and handle the message
            this.onPacket(packet);
        };
        // decode payload
        parser.decodePayload(data, this.socket.binaryType).forEach(callback);
        // if an event did not trigger closing
        if ("closed" !== this.readyState) {
            // if we got data we're not polling
            this.polling = false;
            this.emit("pollComplete");
            if ("open" === this.readyState) this.poll();
            else debug('ignoring poll - transport state "%s"', this.readyState);
        }
    }
    /**
   * For polling, send a close packet.
   *
   * @api private
   */ doClose() {
        const close = ()=>{
            debug("writing close packet");
            this.write([
                {
                    type: "close"
                }
            ]);
        };
        if ("open" === this.readyState) {
            debug("transport open - closing");
            close();
        } else {
            // in case we're trying to close while
            // handshaking is in progress (GH-164)
            debug("transport not open - deferring close");
            this.once("open", close);
        }
    }
    /**
   * Writes a packets payload.
   *
   * @param {Array} data packets
   * @param {Function} drain callback
   * @api private
   */ write(packets) {
        this.writable = false;
        parser.encodePayload(packets, (data)=>{
            this.doWrite(data, ()=>{
                this.writable = true;
                this.emit("drain");
            });
        });
    }
    /**
   * Generates uri for connection.
   *
   * @api private
   */ uri() {
        let query = this.query || {
        };
        const schema = this.opts.secure ? "https" : "http";
        let port = "";
        // cache busting is forced
        if (false !== this.opts.timestampRequests) query[this.opts.timestampParam] = yeast();
        if (!this.supportsBinary && !query.sid) query.b64 = 1;
        query = parseqs.encode(query);
        // avoid port if default for schema
        if (this.opts.port && ("https" === schema && Number(this.opts.port) !== 443 || "http" === schema && Number(this.opts.port) !== 80)) port = ":" + this.opts.port;
        // prepend ? to query
        if (query.length) query = "?" + query;
        const ipv6 = this.opts.hostname.indexOf(":") !== -1;
        return schema + "://" + (ipv6 ? "[" + this.opts.hostname + "]" : this.opts.hostname) + port + this.opts.path + query;
    }
}
module.exports = Polling;

},{"../transport":"9Vino","parseqs":"ezvFn","engine.io-parser":"6fmhU","yeast":"hP57c","debug":"k2DsP"}],"9Vino":[function(require,module,exports) {
const parser = require("engine.io-parser");
const Emitter = require("component-emitter");
const { installTimerFunctions  } = require("./util");
const debug = require("debug")("engine.io-client:transport");
class Transport extends Emitter {
    /**
   * Transport abstract constructor.
   *
   * @param {Object} options.
   * @api private
   */ constructor(opts){
        super();
        installTimerFunctions(this, opts);
        this.opts = opts;
        this.query = opts.query;
        this.readyState = "";
        this.socket = opts.socket;
    }
    /**
   * Emits an error.
   *
   * @param {String} str
   * @return {Transport} for chaining
   * @api public
   */ onError(msg, desc) {
        const err = new Error(msg);
        err.type = "TransportError";
        err.description = desc;
        this.emit("error", err);
        return this;
    }
    /**
   * Opens the transport.
   *
   * @api public
   */ open() {
        if ("closed" === this.readyState || "" === this.readyState) {
            this.readyState = "opening";
            this.doOpen();
        }
        return this;
    }
    /**
   * Closes the transport.
   *
   * @api private
   */ close() {
        if ("opening" === this.readyState || "open" === this.readyState) {
            this.doClose();
            this.onClose();
        }
        return this;
    }
    /**
   * Sends multiple packets.
   *
   * @param {Array} packets
   * @api private
   */ send(packets) {
        if ("open" === this.readyState) this.write(packets);
        else // this might happen if the transport was silently closed in the beforeunload event handler
        debug("transport is not open, discarding packets");
    }
    /**
   * Called upon open
   *
   * @api private
   */ onOpen() {
        this.readyState = "open";
        this.writable = true;
        this.emit("open");
    }
    /**
   * Called with data.
   *
   * @param {String} data
   * @api private
   */ onData(data) {
        const packet = parser.decodePacket(data, this.socket.binaryType);
        this.onPacket(packet);
    }
    /**
   * Called with a decoded packet.
   */ onPacket(packet) {
        this.emit("packet", packet);
    }
    /**
   * Called upon close.
   *
   * @api private
   */ onClose() {
        this.readyState = "closed";
        this.emit("close");
    }
}
module.exports = Transport;

},{"engine.io-parser":"6fmhU","component-emitter":"5Oj9U","./util":"hnD3h","debug":"k2DsP"}],"6fmhU":[function(require,module,exports) {
const encodePacket = require("./encodePacket");
const decodePacket = require("./decodePacket");
const SEPARATOR = String.fromCharCode(30); // see https://en.wikipedia.org/wiki/Delimiter#ASCII_delimited_text
const encodePayload = (packets, callback)=>{
    // some packets may be added to the array while encoding, so the initial length must be saved
    const length = packets.length;
    const encodedPackets = new Array(length);
    let count = 0;
    packets.forEach((packet, i)=>{
        // force base64 encoding for binary packets
        encodePacket(packet, false, (encodedPacket)=>{
            encodedPackets[i] = encodedPacket;
            if ((++count) === length) callback(encodedPackets.join(SEPARATOR));
        });
    });
};
const decodePayload = (encodedPayload, binaryType)=>{
    const encodedPackets = encodedPayload.split(SEPARATOR);
    const packets = [];
    for(let i = 0; i < encodedPackets.length; i++){
        const decodedPacket = decodePacket(encodedPackets[i], binaryType);
        packets.push(decodedPacket);
        if (decodedPacket.type === "error") break;
    }
    return packets;
};
module.exports = {
    protocol: 4,
    encodePacket,
    encodePayload,
    decodePacket,
    decodePayload
};

},{"./encodePacket":"lGOdA","./decodePacket":"3Cc5n"}],"lGOdA":[function(require,module,exports) {
const { PACKET_TYPES  } = require("./commons");
const withNativeBlob = typeof Blob === "function" || typeof Blob !== "undefined" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]";
const withNativeArrayBuffer = typeof ArrayBuffer === "function";
// ArrayBuffer.isView method is not defined in IE10
const isView = (obj)=>{
    return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj && obj.buffer instanceof ArrayBuffer;
};
const encodePacket = ({ type , data  }, supportsBinary, callback)=>{
    if (withNativeBlob && data instanceof Blob) {
        if (supportsBinary) return callback(data);
        else return encodeBlobAsBase64(data, callback);
    } else if (withNativeArrayBuffer && (data instanceof ArrayBuffer || isView(data))) {
        if (supportsBinary) return callback(data);
        else return encodeBlobAsBase64(new Blob([
            data
        ]), callback);
    }
    // plain string
    return callback(PACKET_TYPES[type] + (data || ""));
};
const encodeBlobAsBase64 = (data, callback)=>{
    const fileReader = new FileReader();
    fileReader.onload = function() {
        const content = fileReader.result.split(",")[1];
        callback("b" + content);
    };
    return fileReader.readAsDataURL(data);
};
module.exports = encodePacket;

},{"./commons":"gQIRb"}],"gQIRb":[function(require,module,exports) {
const PACKET_TYPES = Object.create(null); // no Map = no polyfill
PACKET_TYPES["open"] = "0";
PACKET_TYPES["close"] = "1";
PACKET_TYPES["ping"] = "2";
PACKET_TYPES["pong"] = "3";
PACKET_TYPES["message"] = "4";
PACKET_TYPES["upgrade"] = "5";
PACKET_TYPES["noop"] = "6";
const PACKET_TYPES_REVERSE = Object.create(null);
Object.keys(PACKET_TYPES).forEach((key)=>{
    PACKET_TYPES_REVERSE[PACKET_TYPES[key]] = key;
});
const ERROR_PACKET = {
    type: "error",
    data: "parser error"
};
module.exports = {
    PACKET_TYPES,
    PACKET_TYPES_REVERSE,
    ERROR_PACKET
};

},{}],"3Cc5n":[function(require,module,exports) {
const { PACKET_TYPES_REVERSE , ERROR_PACKET  } = require("./commons");
const withNativeArrayBuffer = typeof ArrayBuffer === "function";
let base64decoder;
if (withNativeArrayBuffer) base64decoder = require("base64-arraybuffer");
const decodePacket = (encodedPacket, binaryType)=>{
    if (typeof encodedPacket !== "string") return {
        type: "message",
        data: mapBinary(encodedPacket, binaryType)
    };
    const type = encodedPacket.charAt(0);
    if (type === "b") return {
        type: "message",
        data: decodeBase64Packet(encodedPacket.substring(1), binaryType)
    };
    const packetType = PACKET_TYPES_REVERSE[type];
    if (!packetType) return ERROR_PACKET;
    return encodedPacket.length > 1 ? {
        type: PACKET_TYPES_REVERSE[type],
        data: encodedPacket.substring(1)
    } : {
        type: PACKET_TYPES_REVERSE[type]
    };
};
const decodeBase64Packet = (data, binaryType)=>{
    if (base64decoder) {
        const decoded = base64decoder.decode(data);
        return mapBinary(decoded, binaryType);
    } else return {
        base64: true,
        data
    }; // fallback for old browsers
};
const mapBinary = (data, binaryType)=>{
    switch(binaryType){
        case "blob":
            return data instanceof ArrayBuffer ? new Blob([
                data
            ]) : data;
        case "arraybuffer":
        default:
            return data; // assuming the data is already an ArrayBuffer
    }
};
module.exports = decodePacket;

},{"./commons":"gQIRb","base64-arraybuffer":"iFwIL"}],"iFwIL":[function(require,module,exports) {
/*
 * base64-arraybuffer
 * https://github.com/niklasvh/base64-arraybuffer
 *
 * Copyright (c) 2012 Niklas von Hertzen
 * Licensed under the MIT license.
 */ (function(chars) {
    exports.encode = function(arraybuffer) {
        var bytes = new Uint8Array(arraybuffer), i, len = bytes.length, base64 = "";
        for(i = 0; i < len; i += 3){
            base64 += chars[bytes[i] >> 2];
            base64 += chars[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];
            base64 += chars[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];
            base64 += chars[bytes[i + 2] & 63];
        }
        if (len % 3 === 2) base64 = base64.substring(0, base64.length - 1) + "=";
        else if (len % 3 === 1) base64 = base64.substring(0, base64.length - 2) + "==";
        return base64;
    };
    exports.decode = function(base64) {
        var bufferLength = base64.length * 0.75, len = base64.length, i, p = 0, encoded1, encoded2, encoded3, encoded4;
        if (base64[base64.length - 1] === "=") {
            bufferLength--;
            if (base64[base64.length - 2] === "=") bufferLength--;
        }
        var arraybuffer = new ArrayBuffer(bufferLength), bytes = new Uint8Array(arraybuffer);
        for(i = 0; i < len; i += 4){
            encoded1 = chars.indexOf(base64[i]);
            encoded2 = chars.indexOf(base64[i + 1]);
            encoded3 = chars.indexOf(base64[i + 2]);
            encoded4 = chars.indexOf(base64[i + 3]);
            bytes[p++] = encoded1 << 2 | encoded2 >> 4;
            bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
            bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
        }
        return arraybuffer;
    };
})("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/");

},{}],"5Oj9U":[function(require,module,exports) {
/**
 * Expose `Emitter`.
 */ if (typeof module !== 'undefined') module.exports = Emitter;
/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */ function Emitter(obj) {
    if (obj) return mixin(obj);
}
/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */ function mixin(obj) {
    for(var key in Emitter.prototype)obj[key] = Emitter.prototype[key];
    return obj;
}
/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */ Emitter.prototype.on = Emitter.prototype.addEventListener = function(event, fn) {
    this._callbacks = this._callbacks || {
    };
    (this._callbacks['$' + event] = this._callbacks['$' + event] || []).push(fn);
    return this;
};
/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */ Emitter.prototype.once = function(event, fn) {
    function on() {
        this.off(event, on);
        fn.apply(this, arguments);
    }
    on.fn = fn;
    this.on(event, on);
    return this;
};
/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */ Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function(event, fn) {
    this._callbacks = this._callbacks || {
    };
    // all
    if (0 == arguments.length) {
        this._callbacks = {
        };
        return this;
    }
    // specific event
    var callbacks = this._callbacks['$' + event];
    if (!callbacks) return this;
    // remove all handlers
    if (1 == arguments.length) {
        delete this._callbacks['$' + event];
        return this;
    }
    // remove specific handler
    var cb;
    for(var i = 0; i < callbacks.length; i++){
        cb = callbacks[i];
        if (cb === fn || cb.fn === fn) {
            callbacks.splice(i, 1);
            break;
        }
    }
    // Remove event specific arrays for event types that no
    // one is subscribed for to avoid memory leak.
    if (callbacks.length === 0) delete this._callbacks['$' + event];
    return this;
};
/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */ Emitter.prototype.emit = function(event) {
    this._callbacks = this._callbacks || {
    };
    var args = new Array(arguments.length - 1), callbacks = this._callbacks['$' + event];
    for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    if (callbacks) {
        callbacks = callbacks.slice(0);
        for(var i = 0, len = callbacks.length; i < len; ++i)callbacks[i].apply(this, args);
    }
    return this;
};
/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */ Emitter.prototype.listeners = function(event) {
    this._callbacks = this._callbacks || {
    };
    return this._callbacks['$' + event] || [];
};
/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */ Emitter.prototype.hasListeners = function(event) {
    return !!this.listeners(event).length;
};

},{}],"hnD3h":[function(require,module,exports) {
const globalThis = require("./globalThis");
module.exports.pick = (obj, ...attr)=>{
    return attr.reduce((acc, k)=>{
        if (obj.hasOwnProperty(k)) acc[k] = obj[k];
        return acc;
    }, {
    });
};
// Keep a reference to the real timeout functions so they can be used when overridden
const NATIVE_SET_TIMEOUT = setTimeout;
const NATIVE_CLEAR_TIMEOUT = clearTimeout;
module.exports.installTimerFunctions = (obj, opts)=>{
    if (opts.useNativeTimers) {
        obj.setTimeoutFn = NATIVE_SET_TIMEOUT.bind(globalThis);
        obj.clearTimeoutFn = NATIVE_CLEAR_TIMEOUT.bind(globalThis);
    } else {
        obj.setTimeoutFn = setTimeout.bind(globalThis);
        obj.clearTimeoutFn = clearTimeout.bind(globalThis);
    }
};

},{"./globalThis":"gsQt4"}],"k2DsP":[function(require,module,exports) {
var process = require("process");
/* eslint-env browser */ /**
 * This is the web browser implementation of `debug()`.
 */ exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();
exports.destroy = (()=>{
    let warned = false;
    return ()=>{
        if (!warned) {
            warned = true;
            console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
        }
    };
})();
/**
 * Colors.
 */ exports.colors = [
    '#0000CC',
    '#0000FF',
    '#0033CC',
    '#0033FF',
    '#0066CC',
    '#0066FF',
    '#0099CC',
    '#0099FF',
    '#00CC00',
    '#00CC33',
    '#00CC66',
    '#00CC99',
    '#00CCCC',
    '#00CCFF',
    '#3300CC',
    '#3300FF',
    '#3333CC',
    '#3333FF',
    '#3366CC',
    '#3366FF',
    '#3399CC',
    '#3399FF',
    '#33CC00',
    '#33CC33',
    '#33CC66',
    '#33CC99',
    '#33CCCC',
    '#33CCFF',
    '#6600CC',
    '#6600FF',
    '#6633CC',
    '#6633FF',
    '#66CC00',
    '#66CC33',
    '#9900CC',
    '#9900FF',
    '#9933CC',
    '#9933FF',
    '#99CC00',
    '#99CC33',
    '#CC0000',
    '#CC0033',
    '#CC0066',
    '#CC0099',
    '#CC00CC',
    '#CC00FF',
    '#CC3300',
    '#CC3333',
    '#CC3366',
    '#CC3399',
    '#CC33CC',
    '#CC33FF',
    '#CC6600',
    '#CC6633',
    '#CC9900',
    '#CC9933',
    '#CCCC00',
    '#CCCC33',
    '#FF0000',
    '#FF0033',
    '#FF0066',
    '#FF0099',
    '#FF00CC',
    '#FF00FF',
    '#FF3300',
    '#FF3333',
    '#FF3366',
    '#FF3399',
    '#FF33CC',
    '#FF33FF',
    '#FF6600',
    '#FF6633',
    '#FF9900',
    '#FF9933',
    '#FFCC00',
    '#FFCC33'
];
/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */ // eslint-disable-next-line complexity
function useColors() {
    // NB: In an Electron preload script, document will be defined but not fully
    // initialized. Since we know we're in Chrome, we'll just detect this case
    // explicitly
    if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) return true;
    // Internet Explorer and Edge do not support colors.
    if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) return false;
    // Is webkit? http://stackoverflow.com/a/16459606/376773
    // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
    return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
}
/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */ function formatArgs(args) {
    args[0] = (this.useColors ? '%c' : '') + this.namespace + (this.useColors ? ' %c' : ' ') + args[0] + (this.useColors ? '%c ' : ' ') + '+' + module.exports.humanize(this.diff);
    if (!this.useColors) return;
    const c = 'color: ' + this.color;
    args.splice(1, 0, c, 'color: inherit');
    // The final "%c" is somewhat tricky, because there could be other
    // arguments passed either before or after the %c, so we need to
    // figure out the correct index to insert the CSS into
    let index = 0;
    let lastC = 0;
    args[0].replace(/%[a-zA-Z%]/g, (match)=>{
        if (match === '%%') return;
        index++;
        if (match === '%c') // We only are interested in the *last* %c
        // (the user may have provided their own)
        lastC = index;
    });
    args.splice(lastC, 0, c);
}
/**
 * Invokes `console.debug()` when available.
 * No-op when `console.debug` is not a "function".
 * If `console.debug` is not available, falls back
 * to `console.log`.
 *
 * @api public
 */ exports.log = console.debug || console.log || (()=>{
});
/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */ function save(namespaces) {
    try {
        if (namespaces) exports.storage.setItem('debug', namespaces);
        else exports.storage.removeItem('debug');
    } catch (error) {
    // Swallow
    // XXX (@Qix-) should we be logging these?
    }
}
/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */ function load() {
    let r;
    try {
        r = exports.storage.getItem('debug');
    } catch (error) {
    // Swallow
    // XXX (@Qix-) should we be logging these?
    }
    // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
    if (!r && typeof process !== 'undefined' && 'env' in process) r = undefined;
    return r;
}
/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */ function localstorage() {
    try {
        // TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
        // The Browser also has localStorage in the global context.
        return localStorage;
    } catch (error) {
    // Swallow
    // XXX (@Qix-) should we be logging these?
    }
}
module.exports = require('./common')(exports);
const { formatters  } = module.exports;
/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */ formatters.j = function(v) {
    try {
        return JSON.stringify(v);
    } catch (error) {
        return '[UnexpectedJSONParseError]: ' + error.message;
    }
};

},{"process":"h7Qgs","./common":"e8x9G"}],"e8x9G":[function(require,module,exports) {
/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */ function setup(env) {
    createDebug.debug = createDebug;
    createDebug.default = createDebug;
    createDebug.coerce = coerce;
    createDebug.disable = disable;
    createDebug.enable = enable;
    createDebug.enabled = enabled;
    createDebug.humanize = require('ms');
    createDebug.destroy = destroy;
    Object.keys(env).forEach((key)=>{
        createDebug[key] = env[key];
    });
    /**
	* The currently active debug mode names, and names to skip.
	*/ createDebug.names = [];
    createDebug.skips = [];
    /**
	* Map of special "%n" handling functions, for the debug "format" argument.
	*
	* Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	*/ createDebug.formatters = {
    };
    /**
	* Selects a color for a debug namespace
	* @param {String} namespace The namespace string for the for the debug instance to be colored
	* @return {Number|String} An ANSI color code for the given namespace
	* @api private
	*/ function selectColor(namespace) {
        let hash = 0;
        for(let i = 0; i < namespace.length; i++){
            hash = (hash << 5) - hash + namespace.charCodeAt(i);
            hash |= 0; // Convert to 32bit integer
        }
        return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
    }
    createDebug.selectColor = selectColor;
    /**
	* Create a debugger with the given `namespace`.
	*
	* @param {String} namespace
	* @return {Function}
	* @api public
	*/ function createDebug(namespace) {
        let prevTime;
        let enableOverride = null;
        let namespacesCache;
        let enabledCache;
        function debug(...args) {
            // Disabled?
            if (!debug.enabled) return;
            const self = debug;
            // Set `diff` timestamp
            const curr = Number(new Date());
            const ms = curr - (prevTime || curr);
            self.diff = ms;
            self.prev = prevTime;
            self.curr = curr;
            prevTime = curr;
            args[0] = createDebug.coerce(args[0]);
            if (typeof args[0] !== 'string') // Anything else let's inspect with %O
            args.unshift('%O');
            // Apply any `formatters` transformations
            let index = 0;
            args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format)=>{
                // If we encounter an escaped % then don't increase the array index
                if (match === '%%') return '%';
                index++;
                const formatter = createDebug.formatters[format];
                if (typeof formatter === 'function') {
                    const val = args[index];
                    match = formatter.call(self, val);
                    // Now we need to remove `args[index]` since it's inlined in the `format`
                    args.splice(index, 1);
                    index--;
                }
                return match;
            });
            // Apply env-specific formatting (colors, etc.)
            createDebug.formatArgs.call(self, args);
            const logFn = self.log || createDebug.log;
            logFn.apply(self, args);
        }
        debug.namespace = namespace;
        debug.useColors = createDebug.useColors();
        debug.color = createDebug.selectColor(namespace);
        debug.extend = extend;
        debug.destroy = createDebug.destroy; // XXX Temporary. Will be removed in the next major release.
        Object.defineProperty(debug, 'enabled', {
            enumerable: true,
            configurable: false,
            get: ()=>{
                if (enableOverride !== null) return enableOverride;
                if (namespacesCache !== createDebug.namespaces) {
                    namespacesCache = createDebug.namespaces;
                    enabledCache = createDebug.enabled(namespace);
                }
                return enabledCache;
            },
            set: (v)=>{
                enableOverride = v;
            }
        });
        // Env-specific initialization logic for debug instances
        if (typeof createDebug.init === 'function') createDebug.init(debug);
        return debug;
    }
    function extend(namespace, delimiter) {
        const newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
        newDebug.log = this.log;
        return newDebug;
    }
    /**
	* Enables a debug mode by namespaces. This can include modes
	* separated by a colon and wildcards.
	*
	* @param {String} namespaces
	* @api public
	*/ function enable(namespaces) {
        createDebug.save(namespaces);
        createDebug.namespaces = namespaces;
        createDebug.names = [];
        createDebug.skips = [];
        let i;
        const split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
        const len = split.length;
        for(i = 0; i < len; i++){
            if (!split[i]) continue;
            namespaces = split[i].replace(/\*/g, '.*?');
            if (namespaces[0] === '-') createDebug.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
            else createDebug.names.push(new RegExp('^' + namespaces + '$'));
        }
    }
    /**
	* Disable debug output.
	*
	* @return {String} namespaces
	* @api public
	*/ function disable() {
        const namespaces = [
            ...createDebug.names.map(toNamespace),
            ...createDebug.skips.map(toNamespace).map((namespace)=>'-' + namespace
            )
        ].join(',');
        createDebug.enable('');
        return namespaces;
    }
    /**
	* Returns true if the given mode name is enabled, false otherwise.
	*
	* @param {String} name
	* @return {Boolean}
	* @api public
	*/ function enabled(name) {
        if (name[name.length - 1] === '*') return true;
        let i;
        let len;
        for(i = 0, len = createDebug.skips.length; i < len; i++){
            if (createDebug.skips[i].test(name)) return false;
        }
        for(i = 0, len = createDebug.names.length; i < len; i++){
            if (createDebug.names[i].test(name)) return true;
        }
        return false;
    }
    /**
	* Convert regexp to namespace
	*
	* @param {RegExp} regxep
	* @return {String} namespace
	* @api private
	*/ function toNamespace(regexp) {
        return regexp.toString().substring(2, regexp.toString().length - 2).replace(/\.\*\?$/, '*');
    }
    /**
	* Coerce `val`.
	*
	* @param {Mixed} val
	* @return {Mixed}
	* @api private
	*/ function coerce(val) {
        if (val instanceof Error) return val.stack || val.message;
        return val;
    }
    /**
	* XXX DO NOT USE. This is a temporary stub function.
	* XXX It WILL be removed in the next major release.
	*/ function destroy() {
        console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
    }
    createDebug.enable(createDebug.load());
    return createDebug;
}
module.exports = setup;

},{"ms":"8CxT9"}],"8CxT9":[function(require,module,exports) {
/**
 * Helpers.
 */ var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;
/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */ module.exports = function(val, options) {
    options = options || {
    };
    var type = typeof val;
    if (type === 'string' && val.length > 0) return parse(val);
    else if (type === 'number' && isFinite(val)) return options.long ? fmtLong(val) : fmtShort(val);
    throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val));
};
/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */ function parse(str) {
    str = String(str);
    if (str.length > 100) return;
    var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(str);
    if (!match) return;
    var n = parseFloat(match[1]);
    var type = (match[2] || 'ms').toLowerCase();
    switch(type){
        case 'years':
        case 'year':
        case 'yrs':
        case 'yr':
        case 'y':
            return n * y;
        case 'weeks':
        case 'week':
        case 'w':
            return n * w;
        case 'days':
        case 'day':
        case 'd':
            return n * d;
        case 'hours':
        case 'hour':
        case 'hrs':
        case 'hr':
        case 'h':
            return n * h;
        case 'minutes':
        case 'minute':
        case 'mins':
        case 'min':
        case 'm':
            return n * m;
        case 'seconds':
        case 'second':
        case 'secs':
        case 'sec':
        case 's':
            return n * s;
        case 'milliseconds':
        case 'millisecond':
        case 'msecs':
        case 'msec':
        case 'ms':
            return n;
        default:
            return undefined;
    }
}
/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */ function fmtShort(ms) {
    var msAbs = Math.abs(ms);
    if (msAbs >= d) return Math.round(ms / d) + 'd';
    if (msAbs >= h) return Math.round(ms / h) + 'h';
    if (msAbs >= m) return Math.round(ms / m) + 'm';
    if (msAbs >= s) return Math.round(ms / s) + 's';
    return ms + 'ms';
}
/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */ function fmtLong(ms) {
    var msAbs = Math.abs(ms);
    if (msAbs >= d) return plural(ms, msAbs, d, 'day');
    if (msAbs >= h) return plural(ms, msAbs, h, 'hour');
    if (msAbs >= m) return plural(ms, msAbs, m, 'minute');
    if (msAbs >= s) return plural(ms, msAbs, s, 'second');
    return ms + ' ms';
}
/**
 * Pluralization helper.
 */ function plural(ms, msAbs, n, name) {
    var isPlural = msAbs >= n * 1.5;
    return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}

},{}],"ezvFn":[function(require,module,exports) {
/**
 * Compiles a querystring
 * Returns string representation of the object
 *
 * @param {Object}
 * @api private
 */ exports.encode = function(obj) {
    var str = '';
    for(var i in obj)if (obj.hasOwnProperty(i)) {
        if (str.length) str += '&';
        str += encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]);
    }
    return str;
};
/**
 * Parses a simple querystring into an object
 *
 * @param {String} qs
 * @api private
 */ exports.decode = function(qs) {
    var qry = {
    };
    var pairs = qs.split('&');
    for(var i = 0, l = pairs.length; i < l; i++){
        var pair = pairs[i].split('=');
        qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
    }
    return qry;
};

},{}],"hP57c":[function(require,module,exports) {
'use strict';
var alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split(''), length = 64, map = {
}, seed = 0, i = 0, prev;
/**
 * Return a string representing the specified number.
 *
 * @param {Number} num The number to convert.
 * @returns {String} The string representation of the number.
 * @api public
 */ function encode(num) {
    var encoded = '';
    do {
        encoded = alphabet[num % length] + encoded;
        num = Math.floor(num / length);
    }while (num > 0)
    return encoded;
}
/**
 * Return the integer value specified by the given string.
 *
 * @param {String} str The string to convert.
 * @returns {Number} The integer value represented by the string.
 * @api public
 */ function decode(str) {
    var decoded = 0;
    for(i = 0; i < str.length; i++)decoded = decoded * length + map[str.charAt(i)];
    return decoded;
}
/**
 * Yeast: A tiny growing id generator.
 *
 * @returns {String} A unique id.
 * @api public
 */ function yeast() {
    var now = encode(+new Date());
    if (now !== prev) return seed = 0, prev = now;
    return now + '.' + encode(seed++);
}
//
// Map each character to its index.
//
for(; i < length; i++)map[alphabet[i]] = i;
//
// Expose the `yeast`, `encode` and `decode` functions.
//
yeast.encode = encode;
yeast.decode = decode;
module.exports = yeast;

},{}],"5y6Xm":[function(require,module,exports) {
const Polling = require("./polling");
const globalThis = require("../globalThis");
const rNewline = /\n/g;
const rEscapedNewline = /\\n/g;
/**
 * Global JSONP callbacks.
 */ let callbacks;
class JSONPPolling extends Polling {
    /**
   * JSONP Polling constructor.
   *
   * @param {Object} opts.
   * @api public
   */ constructor(opts){
        super(opts);
        this.query = this.query || {
        };
        // define global callbacks array if not present
        // we do this here (lazily) to avoid unneeded global pollution
        if (!callbacks) // we need to consider multiple engines in the same page
        callbacks = globalThis.___eio = globalThis.___eio || [];
        // callback identifier
        this.index = callbacks.length;
        // add callback to jsonp global
        callbacks.push(this.onData.bind(this));
        // append to query string
        this.query.j = this.index;
    }
    /**
   * JSONP only supports binary as base64 encoded strings
   */ get supportsBinary() {
        return false;
    }
    /**
   * Closes the socket.
   *
   * @api private
   */ doClose() {
        if (this.script) {
            // prevent spurious errors from being emitted when the window is unloaded
            this.script.onerror = ()=>{
            };
            this.script.parentNode.removeChild(this.script);
            this.script = null;
        }
        if (this.form) {
            this.form.parentNode.removeChild(this.form);
            this.form = null;
            this.iframe = null;
        }
        super.doClose();
    }
    /**
   * Starts a poll cycle.
   *
   * @api private
   */ doPoll() {
        const script = document.createElement("script");
        if (this.script) {
            this.script.parentNode.removeChild(this.script);
            this.script = null;
        }
        script.async = true;
        script.src = this.uri();
        script.onerror = (e)=>{
            this.onError("jsonp poll error", e);
        };
        const insertAt = document.getElementsByTagName("script")[0];
        if (insertAt) insertAt.parentNode.insertBefore(script, insertAt);
        else (document.head || document.body).appendChild(script);
        this.script = script;
        const isUAgecko = "undefined" !== typeof navigator && /gecko/i.test(navigator.userAgent);
        if (isUAgecko) this.setTimeoutFn(function() {
            const iframe = document.createElement("iframe");
            document.body.appendChild(iframe);
            document.body.removeChild(iframe);
        }, 100);
    }
    /**
   * Writes with a hidden iframe.
   *
   * @param {String} data to send
   * @param {Function} called upon flush.
   * @api private
   */ doWrite(data, fn) {
        let iframe;
        if (!this.form) {
            const form = document.createElement("form");
            const area = document.createElement("textarea");
            const id = this.iframeId = "eio_iframe_" + this.index;
            form.className = "socketio";
            form.style.position = "absolute";
            form.style.top = "-1000px";
            form.style.left = "-1000px";
            form.target = id;
            form.method = "POST";
            form.setAttribute("accept-charset", "utf-8");
            area.name = "d";
            form.appendChild(area);
            document.body.appendChild(form);
            this.form = form;
            this.area = area;
        }
        this.form.action = this.uri();
        function complete() {
            initIframe();
            fn();
        }
        const initIframe = ()=>{
            if (this.iframe) try {
                this.form.removeChild(this.iframe);
            } catch (e) {
                this.onError("jsonp polling iframe removal error", e);
            }
            try {
                // ie6 dynamic iframes with target="" support (thanks Chris Lambacher)
                const html = '<iframe src="javascript:0" name="' + this.iframeId + '">';
                iframe = document.createElement(html);
            } catch (e) {
                iframe = document.createElement("iframe");
                iframe.name = this.iframeId;
                iframe.src = "javascript:0";
            }
            iframe.id = this.iframeId;
            this.form.appendChild(iframe);
            this.iframe = iframe;
        };
        initIframe();
        // escape \n to prevent it from being converted into \r\n by some UAs
        // double escaping is required for escaped new lines because unescaping of new lines can be done safely on server-side
        data = data.replace(rEscapedNewline, "\\\n");
        this.area.value = data.replace(rNewline, "\\n");
        try {
            this.form.submit();
        } catch (e) {
        }
        if (this.iframe.attachEvent) this.iframe.onreadystatechange = ()=>{
            if (this.iframe.readyState === "complete") complete();
        };
        else this.iframe.onload = complete;
    }
}
module.exports = JSONPPolling;

},{"./polling":"cigJ6","../globalThis":"gsQt4"}],"k4qNy":[function(require,module,exports) {
var Buffer = require("buffer").Buffer;
const Transport = require("../transport");
const parser = require("engine.io-parser");
const parseqs = require("parseqs");
const yeast = require("yeast");
const { pick  } = require("../util");
const { WebSocket: WebSocket1 , usingBrowserWebSocket , defaultBinaryType , nextTick  } = require("./websocket-constructor");
const debug = require("debug")("engine.io-client:websocket");
// detect ReactNative environment
const isReactNative = typeof navigator !== "undefined" && typeof navigator.product === "string" && navigator.product.toLowerCase() === "reactnative";
class WS extends Transport {
    /**
   * WebSocket transport constructor.
   *
   * @api {Object} connection options
   * @api public
   */ constructor(opts){
        super(opts);
        this.supportsBinary = !opts.forceBase64;
    }
    /**
   * Transport name.
   *
   * @api public
   */ get name() {
        return "websocket";
    }
    /**
   * Opens socket.
   *
   * @api private
   */ doOpen() {
        if (!this.check()) // let probe timeout
        return;
        const uri = this.uri();
        const protocols = this.opts.protocols;
        // React Native only supports the 'headers' option, and will print a warning if anything else is passed
        const opts1 = isReactNative ? {
        } : pick(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
        if (this.opts.extraHeaders) opts1.headers = this.opts.extraHeaders;
        try {
            this.ws = usingBrowserWebSocket && !isReactNative ? protocols ? new WebSocket1(uri, protocols) : new WebSocket1(uri) : new WebSocket1(uri, protocols, opts1);
        } catch (err) {
            return this.emit("error", err);
        }
        this.ws.binaryType = this.socket.binaryType || defaultBinaryType;
        this.addEventListeners();
    }
    /**
   * Adds event listeners to the socket
   *
   * @api private
   */ addEventListeners() {
        this.ws.onopen = ()=>{
            if (this.opts.autoUnref) this.ws._socket.unref();
            this.onOpen();
        };
        this.ws.onclose = this.onClose.bind(this);
        this.ws.onmessage = (ev)=>this.onData(ev.data)
        ;
        this.ws.onerror = (e)=>this.onError("websocket error", e)
        ;
    }
    /**
   * Writes data to socket.
   *
   * @param {Array} array of packets.
   * @api private
   */ write(packets) {
        this.writable = false;
        // encodePacket efficient as it uses WS framing
        // no need for encodePayload
        for(let i = 0; i < packets.length; i++){
            const packet = packets[i];
            const lastPacket = i === packets.length - 1;
            parser.encodePacket(packet, this.supportsBinary, (data)=>{
                // always create a new object (GH-437)
                const opts1 = {
                };
                if (!usingBrowserWebSocket) {
                    if (packet.options) opts1.compress = packet.options.compress;
                    if (this.opts.perMessageDeflate) {
                        const len = "string" === typeof data ? Buffer.byteLength(data) : data.length;
                        if (len < this.opts.perMessageDeflate.threshold) opts1.compress = false;
                    }
                }
                // Sometimes the websocket has already been closed but the browser didn't
                // have a chance of informing us about it yet, in that case send will
                // throw an error
                try {
                    if (usingBrowserWebSocket) // TypeError is thrown when passing the second argument on Safari
                    this.ws.send(data);
                    else this.ws.send(data, opts1);
                } catch (e) {
                    debug("websocket closed before onclose event");
                }
                if (lastPacket) // fake drain
                // defer to next tick to allow Socket to clear writeBuffer
                nextTick(()=>{
                    this.writable = true;
                    this.emit("drain");
                }, this.setTimeoutFn);
            });
        }
    }
    /**
   * Called upon close
   *
   * @api private
   */ onClose() {
        Transport.prototype.onClose.call(this);
    }
    /**
   * Closes socket.
   *
   * @api private
   */ doClose() {
        if (typeof this.ws !== "undefined") {
            this.ws.close();
            this.ws = null;
        }
    }
    /**
   * Generates uri for connection.
   *
   * @api private
   */ uri() {
        let query = this.query || {
        };
        const schema = this.opts.secure ? "wss" : "ws";
        let port = "";
        // avoid port if default for schema
        if (this.opts.port && ("wss" === schema && Number(this.opts.port) !== 443 || "ws" === schema && Number(this.opts.port) !== 80)) port = ":" + this.opts.port;
        // append timestamp to URI
        if (this.opts.timestampRequests) query[this.opts.timestampParam] = yeast();
        // communicate binary support capabilities
        if (!this.supportsBinary) query.b64 = 1;
        query = parseqs.encode(query);
        // prepend ? to query
        if (query.length) query = "?" + query;
        const ipv6 = this.opts.hostname.indexOf(":") !== -1;
        return schema + "://" + (ipv6 ? "[" + this.opts.hostname + "]" : this.opts.hostname) + port + this.opts.path + query;
    }
    /**
   * Feature detection for WebSocket.
   *
   * @return {Boolean} whether this transport is available.
   * @api public
   */ check() {
        return !!WebSocket1 && !("__initialize" in WebSocket1 && this.name === WS.prototype.name);
    }
}
module.exports = WS;

},{"buffer":"6wndN","../transport":"9Vino","engine.io-parser":"6fmhU","parseqs":"ezvFn","yeast":"hP57c","../util":"hnD3h","./websocket-constructor":"5mOVG","debug":"k2DsP"}],"6wndN":[function(require,module,exports) {
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ /* eslint-disable no-proto */ 'use strict';
var base64 = require('base64-js');
var ieee754 = require('ieee754');
var customInspectSymbol = typeof Symbol === 'function' && typeof Symbol['for'] === 'function' ? Symbol['for']('nodejs.util.inspect.custom') // eslint-disable-line dot-notation
 : null;
exports.Buffer = Buffer;
exports.SlowBuffer = SlowBuffer;
exports.INSPECT_MAX_BYTES = 50;
var K_MAX_LENGTH = 2147483647;
exports.kMaxLength = K_MAX_LENGTH;
/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */ Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();
if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' && typeof console.error === 'function') console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
function typedArraySupport() {
    // Can typed array instances can be augmented?
    try {
        var arr = new Uint8Array(1);
        var proto = {
            foo: function() {
                return 42;
            }
        };
        Object.setPrototypeOf(proto, Uint8Array.prototype);
        Object.setPrototypeOf(arr, proto);
        return arr.foo() === 42;
    } catch (e) {
        return false;
    }
}
Object.defineProperty(Buffer.prototype, 'parent', {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.buffer;
    }
});
Object.defineProperty(Buffer.prototype, 'offset', {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.byteOffset;
    }
});
function createBuffer(length) {
    if (length > K_MAX_LENGTH) throw new RangeError('The value "' + length + '" is invalid for option "size"');
    // Return an augmented `Uint8Array` instance
    var buf = new Uint8Array(length);
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */ function Buffer(arg, encodingOrOffset, length) {
    // Common case.
    if (typeof arg === 'number') {
        if (typeof encodingOrOffset === 'string') throw new TypeError('The "string" argument must be of type string. Received type number');
        return allocUnsafe(arg);
    }
    return from(arg, encodingOrOffset, length);
}
Buffer.poolSize = 8192 // not used by this implementation
;
function from(value, encodingOrOffset, length) {
    if (typeof value === 'string') return fromString(value, encodingOrOffset);
    if (ArrayBuffer.isView(value)) return fromArrayView(value);
    if (value == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
    if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) return fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof SharedArrayBuffer !== 'undefined' && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) return fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof value === 'number') throw new TypeError('The "value" argument must not be of type number. Received type number');
    var valueOf = value.valueOf && value.valueOf();
    if (valueOf != null && valueOf !== value) return Buffer.from(valueOf, encodingOrOffset, length);
    var b = fromObject(value);
    if (b) return b;
    if (typeof Symbol !== 'undefined' && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === 'function') return Buffer.from(value[Symbol.toPrimitive]('string'), encodingOrOffset, length);
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
}
/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/ Buffer.from = function(value, encodingOrOffset, length) {
    return from(value, encodingOrOffset, length);
};
// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype);
Object.setPrototypeOf(Buffer, Uint8Array);
function assertSize(size) {
    if (typeof size !== 'number') throw new TypeError('"size" argument must be of type number');
    else if (size < 0) throw new RangeError('The value "' + size + '" is invalid for option "size"');
}
function alloc(size, fill, encoding) {
    assertSize(size);
    if (size <= 0) return createBuffer(size);
    if (fill !== undefined) // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpreted as a start offset.
    return typeof encoding === 'string' ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
    return createBuffer(size);
}
/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/ Buffer.alloc = function(size, fill, encoding) {
    return alloc(size, fill, encoding);
};
function allocUnsafe(size) {
    assertSize(size);
    return createBuffer(size < 0 ? 0 : checked(size) | 0);
}
/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */ Buffer.allocUnsafe = function(size) {
    return allocUnsafe(size);
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */ Buffer.allocUnsafeSlow = function(size) {
    return allocUnsafe(size);
};
function fromString(string, encoding) {
    if (typeof encoding !== 'string' || encoding === '') encoding = 'utf8';
    if (!Buffer.isEncoding(encoding)) throw new TypeError('Unknown encoding: ' + encoding);
    var length = byteLength(string, encoding) | 0;
    var buf = createBuffer(length);
    var actual = buf.write(string, encoding);
    if (actual !== length) // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual);
    return buf;
}
function fromArrayLike(array) {
    var length = array.length < 0 ? 0 : checked(array.length) | 0;
    var buf = createBuffer(length);
    for(var i = 0; i < length; i += 1)buf[i] = array[i] & 255;
    return buf;
}
function fromArrayView(arrayView) {
    if (isInstance(arrayView, Uint8Array)) {
        var copy = new Uint8Array(arrayView);
        return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
    }
    return fromArrayLike(arrayView);
}
function fromArrayBuffer(array, byteOffset, length) {
    if (byteOffset < 0 || array.byteLength < byteOffset) throw new RangeError('"offset" is outside of buffer bounds');
    if (array.byteLength < byteOffset + (length || 0)) throw new RangeError('"length" is outside of buffer bounds');
    var buf;
    if (byteOffset === undefined && length === undefined) buf = new Uint8Array(array);
    else if (length === undefined) buf = new Uint8Array(array, byteOffset);
    else buf = new Uint8Array(array, byteOffset, length);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
function fromObject(obj) {
    if (Buffer.isBuffer(obj)) {
        var len = checked(obj.length) | 0;
        var buf = createBuffer(len);
        if (buf.length === 0) return buf;
        obj.copy(buf, 0, 0, len);
        return buf;
    }
    if (obj.length !== undefined) {
        if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) return createBuffer(0);
        return fromArrayLike(obj);
    }
    if (obj.type === 'Buffer' && Array.isArray(obj.data)) return fromArrayLike(obj.data);
}
function checked(length) {
    // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
    // length is NaN (which is otherwise coerced to zero.)
    if (length >= K_MAX_LENGTH) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + ' bytes');
    return length | 0;
}
function SlowBuffer(length) {
    if (+length != length) length = 0;
    return Buffer.alloc(+length);
}
Buffer.isBuffer = function isBuffer(b) {
    return b != null && b._isBuffer === true && b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
    ;
};
Buffer.compare = function compare(a, b) {
    if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength);
    if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength);
    if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
    if (a === b) return 0;
    var x = a.length;
    var y = b.length;
    for(var i = 0, len = Math.min(x, y); i < len; ++i)if (a[i] !== b[i]) {
        x = a[i];
        y = b[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
Buffer.isEncoding = function isEncoding(encoding) {
    switch(String(encoding).toLowerCase()){
        case 'hex':
        case 'utf8':
        case 'utf-8':
        case 'ascii':
        case 'latin1':
        case 'binary':
        case 'base64':
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return true;
        default:
            return false;
    }
};
Buffer.concat = function concat(list, length) {
    if (!Array.isArray(list)) throw new TypeError('"list" argument must be an Array of Buffers');
    if (list.length === 0) return Buffer.alloc(0);
    var i;
    if (length === undefined) {
        length = 0;
        for(i = 0; i < list.length; ++i)length += list[i].length;
    }
    var buffer = Buffer.allocUnsafe(length);
    var pos = 0;
    for(i = 0; i < list.length; ++i){
        var buf = list[i];
        if (isInstance(buf, Uint8Array)) {
            if (pos + buf.length > buffer.length) Buffer.from(buf).copy(buffer, pos);
            else Uint8Array.prototype.set.call(buffer, buf, pos);
        } else if (!Buffer.isBuffer(buf)) throw new TypeError('"list" argument must be an Array of Buffers');
        else buf.copy(buffer, pos);
        pos += buf.length;
    }
    return buffer;
};
function byteLength(string, encoding) {
    if (Buffer.isBuffer(string)) return string.length;
    if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) return string.byteLength;
    if (typeof string !== 'string') throw new TypeError("The \"string\" argument must be one of type string, Buffer, or ArrayBuffer. Received type " + typeof string);
    var len = string.length;
    var mustMatch = arguments.length > 2 && arguments[2] === true;
    if (!mustMatch && len === 0) return 0;
    // Use a for loop to avoid recursion
    var loweredCase = false;
    for(;;)switch(encoding){
        case 'ascii':
        case 'latin1':
        case 'binary':
            return len;
        case 'utf8':
        case 'utf-8':
            return utf8ToBytes(string).length;
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return len * 2;
        case 'hex':
            return len >>> 1;
        case 'base64':
            return base64ToBytes(string).length;
        default:
            if (loweredCase) return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
            ;
            encoding = ('' + encoding).toLowerCase();
            loweredCase = true;
    }
}
Buffer.byteLength = byteLength;
function slowToString(encoding, start, end) {
    var loweredCase = false;
    // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
    // property of a typed array.
    // This behaves neither like String nor Uint8Array in that we set start/end
    // to their upper/lower bounds if the value passed is out of range.
    // undefined is handled specially as per ECMA-262 6th Edition,
    // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
    if (start === undefined || start < 0) start = 0;
    // Return early if start > this.length. Done here to prevent potential uint32
    // coercion fail below.
    if (start > this.length) return '';
    if (end === undefined || end > this.length) end = this.length;
    if (end <= 0) return '';
    // Force coercion to uint32. This will also coerce falsey/NaN values to 0.
    end >>>= 0;
    start >>>= 0;
    if (end <= start) return '';
    if (!encoding) encoding = 'utf8';
    while(true)switch(encoding){
        case 'hex':
            return hexSlice(this, start, end);
        case 'utf8':
        case 'utf-8':
            return utf8Slice(this, start, end);
        case 'ascii':
            return asciiSlice(this, start, end);
        case 'latin1':
        case 'binary':
            return latin1Slice(this, start, end);
        case 'base64':
            return base64Slice(this, start, end);
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return utf16leSlice(this, start, end);
        default:
            if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
            encoding = (encoding + '').toLowerCase();
            loweredCase = true;
    }
}
// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true;
function swap(b, n, m) {
    var i = b[n];
    b[n] = b[m];
    b[m] = i;
}
Buffer.prototype.swap16 = function swap16() {
    var len = this.length;
    if (len % 2 !== 0) throw new RangeError('Buffer size must be a multiple of 16-bits');
    for(var i = 0; i < len; i += 2)swap(this, i, i + 1);
    return this;
};
Buffer.prototype.swap32 = function swap32() {
    var len = this.length;
    if (len % 4 !== 0) throw new RangeError('Buffer size must be a multiple of 32-bits');
    for(var i = 0; i < len; i += 4){
        swap(this, i, i + 3);
        swap(this, i + 1, i + 2);
    }
    return this;
};
Buffer.prototype.swap64 = function swap64() {
    var len = this.length;
    if (len % 8 !== 0) throw new RangeError('Buffer size must be a multiple of 64-bits');
    for(var i = 0; i < len; i += 8){
        swap(this, i, i + 7);
        swap(this, i + 1, i + 6);
        swap(this, i + 2, i + 5);
        swap(this, i + 3, i + 4);
    }
    return this;
};
Buffer.prototype.toString = function toString() {
    var length = this.length;
    if (length === 0) return '';
    if (arguments.length === 0) return utf8Slice(this, 0, length);
    return slowToString.apply(this, arguments);
};
Buffer.prototype.toLocaleString = Buffer.prototype.toString;
Buffer.prototype.equals = function equals(b) {
    if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer');
    if (this === b) return true;
    return Buffer.compare(this, b) === 0;
};
Buffer.prototype.inspect = function inspect() {
    var str = '';
    var max = exports.INSPECT_MAX_BYTES;
    str = this.toString('hex', 0, max).replace(/(.{2})/g, '$1 ').trim();
    if (this.length > max) str += ' ... ';
    return '<Buffer ' + str + '>';
};
if (customInspectSymbol) Buffer.prototype[customInspectSymbol] = Buffer.prototype.inspect;
Buffer.prototype.compare = function compare1(target, start, end, thisStart, thisEnd) {
    if (isInstance(target, Uint8Array)) target = Buffer.from(target, target.offset, target.byteLength);
    if (!Buffer.isBuffer(target)) throw new TypeError("The \"target\" argument must be one of type Buffer or Uint8Array. Received type " + typeof target);
    if (start === undefined) start = 0;
    if (end === undefined) end = target ? target.length : 0;
    if (thisStart === undefined) thisStart = 0;
    if (thisEnd === undefined) thisEnd = this.length;
    if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) throw new RangeError('out of range index');
    if (thisStart >= thisEnd && start >= end) return 0;
    if (thisStart >= thisEnd) return -1;
    if (start >= end) return 1;
    start >>>= 0;
    end >>>= 0;
    thisStart >>>= 0;
    thisEnd >>>= 0;
    if (this === target) return 0;
    var x = thisEnd - thisStart;
    var y = end - start;
    var len = Math.min(x, y);
    var thisCopy = this.slice(thisStart, thisEnd);
    var targetCopy = target.slice(start, end);
    for(var i = 0; i < len; ++i)if (thisCopy[i] !== targetCopy[i]) {
        x = thisCopy[i];
        y = targetCopy[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
    // Empty buffer means no match
    if (buffer.length === 0) return -1;
    // Normalize byteOffset
    if (typeof byteOffset === 'string') {
        encoding = byteOffset;
        byteOffset = 0;
    } else if (byteOffset > 2147483647) byteOffset = 2147483647;
    else if (byteOffset < -2147483648) byteOffset = -2147483648;
    byteOffset = +byteOffset // Coerce to Number.
    ;
    if (numberIsNaN(byteOffset)) // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : buffer.length - 1;
    // Normalize byteOffset: negative offsets start from the end of the buffer
    if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
    if (byteOffset >= buffer.length) {
        if (dir) return -1;
        else byteOffset = buffer.length - 1;
    } else if (byteOffset < 0) {
        if (dir) byteOffset = 0;
        else return -1;
    }
    // Normalize val
    if (typeof val === 'string') val = Buffer.from(val, encoding);
    // Finally, search either indexOf (if dir is true) or lastIndexOf
    if (Buffer.isBuffer(val)) {
        // Special case: looking for empty string/buffer always fails
        if (val.length === 0) return -1;
        return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
    } else if (typeof val === 'number') {
        val = val & 255 // Search for a byte value [0-255]
        ;
        if (typeof Uint8Array.prototype.indexOf === 'function') {
            if (dir) return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
            else return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
        }
        return arrayIndexOf(buffer, [
            val
        ], byteOffset, encoding, dir);
    }
    throw new TypeError('val must be string, number or Buffer');
}
function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
    var indexSize = 1;
    var arrLength = arr.length;
    var valLength = val.length;
    if (encoding !== undefined) {
        encoding = String(encoding).toLowerCase();
        if (encoding === 'ucs2' || encoding === 'ucs-2' || encoding === 'utf16le' || encoding === 'utf-16le') {
            if (arr.length < 2 || val.length < 2) return -1;
            indexSize = 2;
            arrLength /= 2;
            valLength /= 2;
            byteOffset /= 2;
        }
    }
    function read(buf, i) {
        if (indexSize === 1) return buf[i];
        else return buf.readUInt16BE(i * indexSize);
    }
    var i;
    if (dir) {
        var foundIndex = -1;
        for(i = byteOffset; i < arrLength; i++)if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
            if (foundIndex === -1) foundIndex = i;
            if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
        } else {
            if (foundIndex !== -1) i -= i - foundIndex;
            foundIndex = -1;
        }
    } else {
        if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
        for(i = byteOffset; i >= 0; i--){
            var found = true;
            for(var j = 0; j < valLength; j++)if (read(arr, i + j) !== read(val, j)) {
                found = false;
                break;
            }
            if (found) return i;
        }
    }
    return -1;
}
Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
    return this.indexOf(val, byteOffset, encoding) !== -1;
};
Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
};
Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
};
function hexWrite(buf, string, offset, length) {
    offset = Number(offset) || 0;
    var remaining = buf.length - offset;
    if (!length) length = remaining;
    else {
        length = Number(length);
        if (length > remaining) length = remaining;
    }
    var strLen = string.length;
    if (length > strLen / 2) length = strLen / 2;
    for(var i = 0; i < length; ++i){
        var parsed = parseInt(string.substr(i * 2, 2), 16);
        if (numberIsNaN(parsed)) return i;
        buf[offset + i] = parsed;
    }
    return i;
}
function utf8Write(buf, string, offset, length) {
    return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}
function asciiWrite(buf, string, offset, length) {
    return blitBuffer(asciiToBytes(string), buf, offset, length);
}
function base64Write(buf, string, offset, length) {
    return blitBuffer(base64ToBytes(string), buf, offset, length);
}
function ucs2Write(buf, string, offset, length) {
    return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
}
Buffer.prototype.write = function write(string, offset, length, encoding) {
    // Buffer#write(string)
    if (offset === undefined) {
        encoding = 'utf8';
        length = this.length;
        offset = 0;
    // Buffer#write(string, encoding)
    } else if (length === undefined && typeof offset === 'string') {
        encoding = offset;
        length = this.length;
        offset = 0;
    // Buffer#write(string, offset[, length][, encoding])
    } else if (isFinite(offset)) {
        offset = offset >>> 0;
        if (isFinite(length)) {
            length = length >>> 0;
            if (encoding === undefined) encoding = 'utf8';
        } else {
            encoding = length;
            length = undefined;
        }
    } else throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
    var remaining = this.length - offset;
    if (length === undefined || length > remaining) length = remaining;
    if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) throw new RangeError('Attempt to write outside buffer bounds');
    if (!encoding) encoding = 'utf8';
    var loweredCase = false;
    for(;;)switch(encoding){
        case 'hex':
            return hexWrite(this, string, offset, length);
        case 'utf8':
        case 'utf-8':
            return utf8Write(this, string, offset, length);
        case 'ascii':
        case 'latin1':
        case 'binary':
            return asciiWrite(this, string, offset, length);
        case 'base64':
            // Warning: maxLength not taken into account in base64Write
            return base64Write(this, string, offset, length);
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return ucs2Write(this, string, offset, length);
        default:
            if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
            encoding = ('' + encoding).toLowerCase();
            loweredCase = true;
    }
};
Buffer.prototype.toJSON = function toJSON() {
    return {
        type: 'Buffer',
        data: Array.prototype.slice.call(this._arr || this, 0)
    };
};
function base64Slice(buf, start, end) {
    if (start === 0 && end === buf.length) return base64.fromByteArray(buf);
    else return base64.fromByteArray(buf.slice(start, end));
}
function utf8Slice(buf, start, end) {
    end = Math.min(buf.length, end);
    var res = [];
    var i = start;
    while(i < end){
        var firstByte = buf[i];
        var codePoint = null;
        var bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
        if (i + bytesPerSequence <= end) {
            var secondByte, thirdByte, fourthByte, tempCodePoint;
            switch(bytesPerSequence){
                case 1:
                    if (firstByte < 128) codePoint = firstByte;
                    break;
                case 2:
                    secondByte = buf[i + 1];
                    if ((secondByte & 192) === 128) {
                        tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
                        if (tempCodePoint > 127) codePoint = tempCodePoint;
                    }
                    break;
                case 3:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
                        tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
                        if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) codePoint = tempCodePoint;
                    }
                    break;
                case 4:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    fourthByte = buf[i + 3];
                    if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
                        tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
                        if (tempCodePoint > 65535 && tempCodePoint < 1114112) codePoint = tempCodePoint;
                    }
            }
        }
        if (codePoint === null) {
            // we did not generate a valid codePoint so insert a
            // replacement char (U+FFFD) and advance only 1 byte
            codePoint = 65533;
            bytesPerSequence = 1;
        } else if (codePoint > 65535) {
            // encode to utf16 (surrogate pair dance)
            codePoint -= 65536;
            res.push(codePoint >>> 10 & 1023 | 55296);
            codePoint = 56320 | codePoint & 1023;
        }
        res.push(codePoint);
        i += bytesPerSequence;
    }
    return decodeCodePointsArray(res);
}
// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 4096;
function decodeCodePointsArray(codePoints) {
    var len = codePoints.length;
    if (len <= MAX_ARGUMENTS_LENGTH) return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
    ;
    // Decode in chunks to avoid "call stack size exceeded".
    var res = '';
    var i = 0;
    while(i < len)res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
    return res;
}
function asciiSlice(buf, start, end) {
    var ret = '';
    end = Math.min(buf.length, end);
    for(var i = start; i < end; ++i)ret += String.fromCharCode(buf[i] & 127);
    return ret;
}
function latin1Slice(buf, start, end) {
    var ret = '';
    end = Math.min(buf.length, end);
    for(var i = start; i < end; ++i)ret += String.fromCharCode(buf[i]);
    return ret;
}
function hexSlice(buf, start, end) {
    var len = buf.length;
    if (!start || start < 0) start = 0;
    if (!end || end < 0 || end > len) end = len;
    var out = '';
    for(var i = start; i < end; ++i)out += hexSliceLookupTable[buf[i]];
    return out;
}
function utf16leSlice(buf, start, end) {
    var bytes = buf.slice(start, end);
    var res = '';
    // If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
    for(var i = 0; i < bytes.length - 1; i += 2)res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
    return res;
}
Buffer.prototype.slice = function slice(start, end) {
    var len = this.length;
    start = ~~start;
    end = end === undefined ? len : ~~end;
    if (start < 0) {
        start += len;
        if (start < 0) start = 0;
    } else if (start > len) start = len;
    if (end < 0) {
        end += len;
        if (end < 0) end = 0;
    } else if (end > len) end = len;
    if (end < start) end = start;
    var newBuf = this.subarray(start, end);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(newBuf, Buffer.prototype);
    return newBuf;
};
/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */ function checkOffset(offset, ext, length) {
    if (offset % 1 !== 0 || offset < 0) throw new RangeError('offset is not uint');
    if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length');
}
Buffer.prototype.readUintLE = Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength1, noAssert) {
    offset = offset >>> 0;
    byteLength1 = byteLength1 >>> 0;
    if (!noAssert) checkOffset(offset, byteLength1, this.length);
    var val = this[offset];
    var mul = 1;
    var i = 0;
    while((++i) < byteLength1 && (mul *= 256))val += this[offset + i] * mul;
    return val;
};
Buffer.prototype.readUintBE = Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength1, noAssert) {
    offset = offset >>> 0;
    byteLength1 = byteLength1 >>> 0;
    if (!noAssert) checkOffset(offset, byteLength1, this.length);
    var val = this[offset + --byteLength1];
    var mul = 1;
    while(byteLength1 > 0 && (mul *= 256))val += this[offset + --byteLength1] * mul;
    return val;
};
Buffer.prototype.readUint8 = Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    return this[offset];
};
Buffer.prototype.readUint16LE = Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] | this[offset + 1] << 8;
};
Buffer.prototype.readUint16BE = Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] << 8 | this[offset + 1];
};
Buffer.prototype.readUint32LE = Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216;
};
Buffer.prototype.readUint32BE = Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
};
Buffer.prototype.readIntLE = function readIntLE(offset, byteLength1, noAssert) {
    offset = offset >>> 0;
    byteLength1 = byteLength1 >>> 0;
    if (!noAssert) checkOffset(offset, byteLength1, this.length);
    var val = this[offset];
    var mul = 1;
    var i = 0;
    while((++i) < byteLength1 && (mul *= 256))val += this[offset + i] * mul;
    mul *= 128;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength1);
    return val;
};
Buffer.prototype.readIntBE = function readIntBE(offset, byteLength1, noAssert) {
    offset = offset >>> 0;
    byteLength1 = byteLength1 >>> 0;
    if (!noAssert) checkOffset(offset, byteLength1, this.length);
    var i = byteLength1;
    var mul = 1;
    var val = this[offset + --i];
    while(i > 0 && (mul *= 256))val += this[offset + --i] * mul;
    mul *= 128;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength1);
    return val;
};
Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    if (!(this[offset] & 128)) return this[offset];
    return (255 - this[offset] + 1) * -1;
};
Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    var val = this[offset] | this[offset + 1] << 8;
    return val & 32768 ? val | 4294901760 : val;
};
Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    var val = this[offset + 1] | this[offset] << 8;
    return val & 32768 ? val | 4294901760 : val;
};
Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
};
Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
};
Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, true, 23, 4);
};
Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, false, 23, 4);
};
Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, true, 52, 8);
};
Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, false, 52, 8);
};
function checkInt(buf, value, offset, ext, max, min) {
    if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
    if (offset + ext > buf.length) throw new RangeError('Index out of range');
}
Buffer.prototype.writeUintLE = Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength1, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength1 = byteLength1 >>> 0;
    if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength1) - 1;
        checkInt(this, value, offset, byteLength1, maxBytes, 0);
    }
    var mul = 1;
    var i = 0;
    this[offset] = value & 255;
    while((++i) < byteLength1 && (mul *= 256))this[offset + i] = value / mul & 255;
    return offset + byteLength1;
};
Buffer.prototype.writeUintBE = Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength1, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength1 = byteLength1 >>> 0;
    if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength1) - 1;
        checkInt(this, value, offset, byteLength1, maxBytes, 0);
    }
    var i = byteLength1 - 1;
    var mul = 1;
    this[offset + i] = value & 255;
    while((--i) >= 0 && (mul *= 256))this[offset + i] = value / mul & 255;
    return offset + byteLength1;
};
Buffer.prototype.writeUint8 = Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 255, 0);
    this[offset] = value & 255;
    return offset + 1;
};
Buffer.prototype.writeUint16LE = Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
    this[offset] = value & 255;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeUint16BE = Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 255;
    return offset + 2;
};
Buffer.prototype.writeUint32LE = Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
    this[offset + 3] = value >>> 24;
    this[offset + 2] = value >>> 16;
    this[offset + 1] = value >>> 8;
    this[offset] = value & 255;
    return offset + 4;
};
Buffer.prototype.writeUint32BE = Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 255;
    return offset + 4;
};
Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength1, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        var limit = Math.pow(2, 8 * byteLength1 - 1);
        checkInt(this, value, offset, byteLength1, limit - 1, -limit);
    }
    var i = 0;
    var mul = 1;
    var sub = 0;
    this[offset] = value & 255;
    while((++i) < byteLength1 && (mul *= 256)){
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 255;
    }
    return offset + byteLength1;
};
Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength1, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        var limit = Math.pow(2, 8 * byteLength1 - 1);
        checkInt(this, value, offset, byteLength1, limit - 1, -limit);
    }
    var i = byteLength1 - 1;
    var mul = 1;
    var sub = 0;
    this[offset + i] = value & 255;
    while((--i) >= 0 && (mul *= 256)){
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 255;
    }
    return offset + byteLength1;
};
Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 127, -128);
    if (value < 0) value = 255 + value + 1;
    this[offset] = value & 255;
    return offset + 1;
};
Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
    this[offset] = value & 255;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 255;
    return offset + 2;
};
Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
    this[offset] = value & 255;
    this[offset + 1] = value >>> 8;
    this[offset + 2] = value >>> 16;
    this[offset + 3] = value >>> 24;
    return offset + 4;
};
Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
    if (value < 0) value = 4294967295 + value + 1;
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 255;
    return offset + 4;
};
function checkIEEE754(buf, value, offset, ext, max, min) {
    if (offset + ext > buf.length) throw new RangeError('Index out of range');
    if (offset < 0) throw new RangeError('Index out of range');
}
function writeFloat(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkIEEE754(buf, value, offset, 4, 340282346638528860000000000000000000000, -340282346638528860000000000000000000000);
    ieee754.write(buf, value, offset, littleEndian, 23, 4);
    return offset + 4;
}
Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
    return writeFloat(this, value, offset, true, noAssert);
};
Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
    return writeFloat(this, value, offset, false, noAssert);
};
function writeDouble(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkIEEE754(buf, value, offset, 8, 179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, -179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000);
    ieee754.write(buf, value, offset, littleEndian, 52, 8);
    return offset + 8;
}
Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
    return writeDouble(this, value, offset, true, noAssert);
};
Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
    return writeDouble(this, value, offset, false, noAssert);
};
// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy(target, targetStart, start, end) {
    if (!Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer');
    if (!start) start = 0;
    if (!end && end !== 0) end = this.length;
    if (targetStart >= target.length) targetStart = target.length;
    if (!targetStart) targetStart = 0;
    if (end > 0 && end < start) end = start;
    // Copy 0 bytes; we're done
    if (end === start) return 0;
    if (target.length === 0 || this.length === 0) return 0;
    // Fatal error conditions
    if (targetStart < 0) throw new RangeError('targetStart out of bounds');
    if (start < 0 || start >= this.length) throw new RangeError('Index out of range');
    if (end < 0) throw new RangeError('sourceEnd out of bounds');
    // Are we oob?
    if (end > this.length) end = this.length;
    if (target.length - targetStart < end - start) end = target.length - targetStart + start;
    var len = end - start;
    if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end);
    else Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
    return len;
};
// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill(val, start, end, encoding) {
    // Handle string cases:
    if (typeof val === 'string') {
        if (typeof start === 'string') {
            encoding = start;
            start = 0;
            end = this.length;
        } else if (typeof end === 'string') {
            encoding = end;
            end = this.length;
        }
        if (encoding !== undefined && typeof encoding !== 'string') throw new TypeError('encoding must be a string');
        if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) throw new TypeError('Unknown encoding: ' + encoding);
        if (val.length === 1) {
            var code = val.charCodeAt(0);
            if (encoding === 'utf8' && code < 128 || encoding === 'latin1') // Fast path: If `val` fits into a single byte, use that numeric value.
            val = code;
        }
    } else if (typeof val === 'number') val = val & 255;
    else if (typeof val === 'boolean') val = Number(val);
    // Invalid ranges are not set to a default, so can range check early.
    if (start < 0 || this.length < start || this.length < end) throw new RangeError('Out of range index');
    if (end <= start) return this;
    start = start >>> 0;
    end = end === undefined ? this.length : end >>> 0;
    if (!val) val = 0;
    var i;
    if (typeof val === 'number') for(i = start; i < end; ++i)this[i] = val;
    else {
        var bytes = Buffer.isBuffer(val) ? val : Buffer.from(val, encoding);
        var len = bytes.length;
        if (len === 0) throw new TypeError('The value "' + val + '" is invalid for argument "value"');
        for(i = 0; i < end - start; ++i)this[i + start] = bytes[i % len];
    }
    return this;
};
// HELPER FUNCTIONS
// ================
var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
function base64clean(str) {
    // Node takes equal signs as end of the Base64 encoding
    str = str.split('=')[0];
    // Node strips out invalid characters like \n and \t from the string, base64-js does not
    str = str.trim().replace(INVALID_BASE64_RE, '');
    // Node converts strings with length < 2 to ''
    if (str.length < 2) return '';
    // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
    while(str.length % 4 !== 0)str = str + '=';
    return str;
}
function utf8ToBytes(string, units) {
    units = units || Infinity;
    var codePoint;
    var length = string.length;
    var leadSurrogate = null;
    var bytes = [];
    for(var i = 0; i < length; ++i){
        codePoint = string.charCodeAt(i);
        // is surrogate component
        if (codePoint > 55295 && codePoint < 57344) {
            // last char was a lead
            if (!leadSurrogate) {
                // no lead yet
                if (codePoint > 56319) {
                    // unexpected trail
                    if ((units -= 3) > -1) bytes.push(239, 191, 189);
                    continue;
                } else if (i + 1 === length) {
                    // unpaired lead
                    if ((units -= 3) > -1) bytes.push(239, 191, 189);
                    continue;
                }
                // valid lead
                leadSurrogate = codePoint;
                continue;
            }
            // 2 leads in a row
            if (codePoint < 56320) {
                if ((units -= 3) > -1) bytes.push(239, 191, 189);
                leadSurrogate = codePoint;
                continue;
            }
            // valid surrogate pair
            codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
        } else if (leadSurrogate) // valid bmp char, but last char was a lead
        {
            if ((units -= 3) > -1) bytes.push(239, 191, 189);
        }
        leadSurrogate = null;
        // encode utf8
        if (codePoint < 128) {
            if ((units -= 1) < 0) break;
            bytes.push(codePoint);
        } else if (codePoint < 2048) {
            if ((units -= 2) < 0) break;
            bytes.push(codePoint >> 6 | 192, codePoint & 63 | 128);
        } else if (codePoint < 65536) {
            if ((units -= 3) < 0) break;
            bytes.push(codePoint >> 12 | 224, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
        } else if (codePoint < 1114112) {
            if ((units -= 4) < 0) break;
            bytes.push(codePoint >> 18 | 240, codePoint >> 12 & 63 | 128, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
        } else throw new Error('Invalid code point');
    }
    return bytes;
}
function asciiToBytes(str) {
    var byteArray = [];
    for(var i = 0; i < str.length; ++i)// Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 255);
    return byteArray;
}
function utf16leToBytes(str, units) {
    var c, hi, lo;
    var byteArray = [];
    for(var i = 0; i < str.length; ++i){
        if ((units -= 2) < 0) break;
        c = str.charCodeAt(i);
        hi = c >> 8;
        lo = c % 256;
        byteArray.push(lo);
        byteArray.push(hi);
    }
    return byteArray;
}
function base64ToBytes(str) {
    return base64.toByteArray(base64clean(str));
}
function blitBuffer(src, dst, offset, length) {
    for(var i = 0; i < length; ++i){
        if (i + offset >= dst.length || i >= src.length) break;
        dst[i + offset] = src[i];
    }
    return i;
}
// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function isInstance(obj, type) {
    return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
}
function numberIsNaN(obj) {
    // For IE11 support
    return obj !== obj // eslint-disable-line no-self-compare
    ;
}
// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
var hexSliceLookupTable = function() {
    var alphabet = '0123456789abcdef';
    var table = new Array(256);
    for(var i = 0; i < 16; ++i){
        var i16 = i * 16;
        for(var j = 0; j < 16; ++j)table[i16 + j] = alphabet[i] + alphabet[j];
    }
    return table;
}();

},{"base64-js":"jNZ2U","ieee754":"6nbpN"}],"jNZ2U":[function(require,module,exports) {
'use strict';
exports.byteLength = byteLength;
exports.toByteArray = toByteArray;
exports.fromByteArray = fromByteArray;
var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
for(var i = 0, len = code.length; i < len; ++i){
    lookup[i] = code[i];
    revLookup[code.charCodeAt(i)] = i;
}
// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62;
revLookup['_'.charCodeAt(0)] = 63;
function getLens(b64) {
    var len1 = b64.length;
    if (len1 % 4 > 0) throw new Error('Invalid string. Length must be a multiple of 4');
    // Trim off extra bytes after placeholder bytes are found
    // See: https://github.com/beatgammit/base64-js/issues/42
    var validLen = b64.indexOf('=');
    if (validLen === -1) validLen = len1;
    var placeHoldersLen = validLen === len1 ? 0 : 4 - validLen % 4;
    return [
        validLen,
        placeHoldersLen
    ];
}
// base64 is 4/3 + up to two characters of the original data
function byteLength(b64) {
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function _byteLength(b64, validLen, placeHoldersLen) {
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function toByteArray(b64) {
    var tmp;
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
    var curByte = 0;
    // if there are placeholders, only get up to the last complete 4 chars
    var len1 = placeHoldersLen > 0 ? validLen - 4 : validLen;
    var i1;
    for(i1 = 0; i1 < len1; i1 += 4){
        tmp = revLookup[b64.charCodeAt(i1)] << 18 | revLookup[b64.charCodeAt(i1 + 1)] << 12 | revLookup[b64.charCodeAt(i1 + 2)] << 6 | revLookup[b64.charCodeAt(i1 + 3)];
        arr[curByte++] = tmp >> 16 & 255;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = tmp & 255;
    }
    if (placeHoldersLen === 2) {
        tmp = revLookup[b64.charCodeAt(i1)] << 2 | revLookup[b64.charCodeAt(i1 + 1)] >> 4;
        arr[curByte++] = tmp & 255;
    }
    if (placeHoldersLen === 1) {
        tmp = revLookup[b64.charCodeAt(i1)] << 10 | revLookup[b64.charCodeAt(i1 + 1)] << 4 | revLookup[b64.charCodeAt(i1 + 2)] >> 2;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = tmp & 255;
    }
    return arr;
}
function tripletToBase64(num) {
    return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63];
}
function encodeChunk(uint8, start, end) {
    var tmp;
    var output = [];
    for(var i1 = start; i1 < end; i1 += 3){
        tmp = (uint8[i1] << 16 & 16711680) + (uint8[i1 + 1] << 8 & 65280) + (uint8[i1 + 2] & 255);
        output.push(tripletToBase64(tmp));
    }
    return output.join('');
}
function fromByteArray(uint8) {
    var tmp;
    var len1 = uint8.length;
    var extraBytes = len1 % 3 // if we have 1 byte left, pad 2 bytes
    ;
    var parts = [];
    var maxChunkLength = 16383 // must be multiple of 3
    ;
    // go through the array every three bytes, we'll deal with trailing stuff later
    for(var i1 = 0, len2 = len1 - extraBytes; i1 < len2; i1 += maxChunkLength)parts.push(encodeChunk(uint8, i1, i1 + maxChunkLength > len2 ? len2 : i1 + maxChunkLength));
    // pad the end with zeros, but make sure to not forget the extra bytes
    if (extraBytes === 1) {
        tmp = uint8[len1 - 1];
        parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 63] + '==');
    } else if (extraBytes === 2) {
        tmp = (uint8[len1 - 2] << 8) + uint8[len1 - 1];
        parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + '=');
    }
    return parts.join('');
}

},{}],"6nbpN":[function(require,module,exports) {
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ exports.read = function(buffer, offset, isLE, mLen, nBytes) {
    var e, m;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = -7;
    var i = isLE ? nBytes - 1 : 0;
    var d = isLE ? -1 : 1;
    var s = buffer[offset + i];
    i += d;
    e = s & (1 << -nBits) - 1;
    s >>= -nBits;
    nBits += eLen;
    for(; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8);
    m = e & (1 << -nBits) - 1;
    e >>= -nBits;
    nBits += mLen;
    for(; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8);
    if (e === 0) e = 1 - eBias;
    else if (e === eMax) return m ? NaN : (s ? -1 : 1) * Infinity;
    else {
        m = m + Math.pow(2, mLen);
        e = e - eBias;
    }
    return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};
exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
    var e, m, c;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
    var i = isLE ? 0 : nBytes - 1;
    var d = isLE ? 1 : -1;
    var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
    value = Math.abs(value);
    if (isNaN(value) || value === Infinity) {
        m = isNaN(value) ? 1 : 0;
        e = eMax;
    } else {
        e = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c = Math.pow(2, -e)) < 1) {
            e--;
            c *= 2;
        }
        if (e + eBias >= 1) value += rt / c;
        else value += rt * Math.pow(2, 1 - eBias);
        if (value * c >= 2) {
            e++;
            c /= 2;
        }
        if (e + eBias >= eMax) {
            m = 0;
            e = eMax;
        } else if (e + eBias >= 1) {
            m = (value * c - 1) * Math.pow(2, mLen);
            e = e + eBias;
        } else {
            m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
            e = 0;
        }
    }
    for(; mLen >= 8; buffer[offset + i] = m & 255, i += d, m /= 256, mLen -= 8);
    e = e << mLen | m;
    eLen += mLen;
    for(; eLen > 0; buffer[offset + i] = e & 255, i += d, e /= 256, eLen -= 8);
    buffer[offset + i - d] |= s * 128;
};

},{}],"5mOVG":[function(require,module,exports) {
const globalThis = require("../globalThis");
const nextTick = (()=>{
    const isPromiseAvailable = typeof Promise === "function" && typeof Promise.resolve === "function";
    if (isPromiseAvailable) return (cb)=>Promise.resolve().then(cb)
    ;
    else return (cb, setTimeoutFn)=>setTimeoutFn(cb, 0)
    ;
})();
module.exports = {
    WebSocket: globalThis.WebSocket || globalThis.MozWebSocket,
    usingBrowserWebSocket: true,
    defaultBinaryType: "arraybuffer",
    nextTick
};

},{"../globalThis":"gsQt4"}],"8ZDg9":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Socket = void 0;
const socket_io_parser_1 = require("socket.io-parser");
const on_1 = require("./on");
const typed_events_1 = require("./typed-events");
const debug = require("debug")("socket.io-client:socket");
/**
 * Internal events.
 * These events can't be emitted by the user.
 */ const RESERVED_EVENTS = Object.freeze({
    connect: 1,
    connect_error: 1,
    disconnect: 1,
    disconnecting: 1,
    // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
    newListener: 1,
    removeListener: 1
});
class Socket extends typed_events_1.StrictEventEmitter {
    /**
     * `Socket` constructor.
     *
     * @public
     */ constructor(io, nsp, opts){
        super();
        this.connected = false;
        this.disconnected = true;
        this.receiveBuffer = [];
        this.sendBuffer = [];
        this.ids = 0;
        this.acks = {
        };
        this.flags = {
        };
        this.io = io;
        this.nsp = nsp;
        if (opts && opts.auth) this.auth = opts.auth;
        if (this.io._autoConnect) this.open();
    }
    /**
     * Subscribe to open, close and packet events
     *
     * @private
     */ subEvents() {
        if (this.subs) return;
        const io1 = this.io;
        this.subs = [
            on_1.on(io1, "open", this.onopen.bind(this)),
            on_1.on(io1, "packet", this.onpacket.bind(this)),
            on_1.on(io1, "error", this.onerror.bind(this)),
            on_1.on(io1, "close", this.onclose.bind(this)), 
        ];
    }
    /**
     * Whether the Socket will try to reconnect when its Manager connects or reconnects
     */ get active() {
        return !!this.subs;
    }
    /**
     * "Opens" the socket.
     *
     * @public
     */ connect() {
        if (this.connected) return this;
        this.subEvents();
        if (!this.io["_reconnecting"]) this.io.open(); // ensure open
        if ("open" === this.io._readyState) this.onopen();
        return this;
    }
    /**
     * Alias for connect()
     */ open() {
        return this.connect();
    }
    /**
     * Sends a `message` event.
     *
     * @return self
     * @public
     */ send(...args) {
        args.unshift("message");
        this.emit.apply(this, args);
        return this;
    }
    /**
     * Override `emit`.
     * If the event is in `events`, it's emitted normally.
     *
     * @return self
     * @public
     */ emit(ev, ...args) {
        if (RESERVED_EVENTS.hasOwnProperty(ev)) throw new Error('"' + ev + '" is a reserved event name');
        args.unshift(ev);
        const packet = {
            type: socket_io_parser_1.PacketType.EVENT,
            data: args
        };
        packet.options = {
        };
        packet.options.compress = this.flags.compress !== false;
        // event ack callback
        if ("function" === typeof args[args.length - 1]) {
            debug("emitting packet with ack id %d", this.ids);
            this.acks[this.ids] = args.pop();
            packet.id = this.ids++;
        }
        const isTransportWritable = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
        const discardPacket = this.flags.volatile && (!isTransportWritable || !this.connected);
        if (discardPacket) debug("discard packet as the transport is not currently writable");
        else if (this.connected) this.packet(packet);
        else this.sendBuffer.push(packet);
        this.flags = {
        };
        return this;
    }
    /**
     * Sends a packet.
     *
     * @param packet
     * @private
     */ packet(packet) {
        packet.nsp = this.nsp;
        this.io._packet(packet);
    }
    /**
     * Called upon engine `open`.
     *
     * @private
     */ onopen() {
        debug("transport is open - connecting");
        if (typeof this.auth == "function") this.auth((data)=>{
            this.packet({
                type: socket_io_parser_1.PacketType.CONNECT,
                data
            });
        });
        else this.packet({
            type: socket_io_parser_1.PacketType.CONNECT,
            data: this.auth
        });
    }
    /**
     * Called upon engine or manager `error`.
     *
     * @param err
     * @private
     */ onerror(err) {
        if (!this.connected) this.emitReserved("connect_error", err);
    }
    /**
     * Called upon engine `close`.
     *
     * @param reason
     * @private
     */ onclose(reason) {
        debug("close (%s)", reason);
        this.connected = false;
        this.disconnected = true;
        delete this.id;
        this.emitReserved("disconnect", reason);
    }
    /**
     * Called with socket packet.
     *
     * @param packet
     * @private
     */ onpacket(packet) {
        const sameNamespace = packet.nsp === this.nsp;
        if (!sameNamespace) return;
        switch(packet.type){
            case socket_io_parser_1.PacketType.CONNECT:
                if (packet.data && packet.data.sid) {
                    const id = packet.data.sid;
                    this.onconnect(id);
                } else this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
                break;
            case socket_io_parser_1.PacketType.EVENT:
                this.onevent(packet);
                break;
            case socket_io_parser_1.PacketType.BINARY_EVENT:
                this.onevent(packet);
                break;
            case socket_io_parser_1.PacketType.ACK:
                this.onack(packet);
                break;
            case socket_io_parser_1.PacketType.BINARY_ACK:
                this.onack(packet);
                break;
            case socket_io_parser_1.PacketType.DISCONNECT:
                this.ondisconnect();
                break;
            case socket_io_parser_1.PacketType.CONNECT_ERROR:
                const err = new Error(packet.data.message);
                // @ts-ignore
                err.data = packet.data.data;
                this.emitReserved("connect_error", err);
                break;
        }
    }
    /**
     * Called upon a server event.
     *
     * @param packet
     * @private
     */ onevent(packet) {
        const args = packet.data || [];
        debug("emitting event %j", args);
        if (null != packet.id) {
            debug("attaching ack callback to event");
            args.push(this.ack(packet.id));
        }
        if (this.connected) this.emitEvent(args);
        else this.receiveBuffer.push(Object.freeze(args));
    }
    emitEvent(args) {
        if (this._anyListeners && this._anyListeners.length) {
            const listeners = this._anyListeners.slice();
            for (const listener of listeners)listener.apply(this, args);
        }
        super.emit.apply(this, args);
    }
    /**
     * Produces an ack callback to emit with an event.
     *
     * @private
     */ ack(id) {
        const self = this;
        let sent = false;
        return function(...args) {
            // prevent double callbacks
            if (sent) return;
            sent = true;
            debug("sending ack %j", args);
            self.packet({
                type: socket_io_parser_1.PacketType.ACK,
                id: id,
                data: args
            });
        };
    }
    /**
     * Called upon a server acknowlegement.
     *
     * @param packet
     * @private
     */ onack(packet) {
        const ack = this.acks[packet.id];
        if ("function" === typeof ack) {
            debug("calling ack %s with %j", packet.id, packet.data);
            ack.apply(this, packet.data);
            delete this.acks[packet.id];
        } else debug("bad ack %s", packet.id);
    }
    /**
     * Called upon server connect.
     *
     * @private
     */ onconnect(id) {
        debug("socket connected with id %s", id);
        this.id = id;
        this.connected = true;
        this.disconnected = false;
        this.emitBuffered();
        this.emitReserved("connect");
    }
    /**
     * Emit buffered events (received and emitted).
     *
     * @private
     */ emitBuffered() {
        this.receiveBuffer.forEach((args)=>this.emitEvent(args)
        );
        this.receiveBuffer = [];
        this.sendBuffer.forEach((packet)=>this.packet(packet)
        );
        this.sendBuffer = [];
    }
    /**
     * Called upon server disconnect.
     *
     * @private
     */ ondisconnect() {
        debug("server disconnect (%s)", this.nsp);
        this.destroy();
        this.onclose("io server disconnect");
    }
    /**
     * Called upon forced client/server side disconnections,
     * this method ensures the manager stops tracking us and
     * that reconnections don't get triggered for this.
     *
     * @private
     */ destroy() {
        if (this.subs) {
            // clean subscriptions to avoid reconnections
            this.subs.forEach((subDestroy)=>subDestroy()
            );
            this.subs = undefined;
        }
        this.io["_destroy"](this);
    }
    /**
     * Disconnects the socket manually.
     *
     * @return self
     * @public
     */ disconnect() {
        if (this.connected) {
            debug("performing disconnect (%s)", this.nsp);
            this.packet({
                type: socket_io_parser_1.PacketType.DISCONNECT
            });
        }
        // remove socket from pool
        this.destroy();
        if (this.connected) // fire events
        this.onclose("io client disconnect");
        return this;
    }
    /**
     * Alias for disconnect()
     *
     * @return self
     * @public
     */ close() {
        return this.disconnect();
    }
    /**
     * Sets the compress flag.
     *
     * @param compress - if `true`, compresses the sending data
     * @return self
     * @public
     */ compress(compress) {
        this.flags.compress = compress;
        return this;
    }
    /**
     * Sets a modifier for a subsequent event emission that the event message will be dropped when this socket is not
     * ready to send messages.
     *
     * @returns self
     * @public
     */ get volatile() {
        this.flags.volatile = true;
        return this;
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback.
     *
     * @param listener
     * @public
     */ onAny(listener) {
        this._anyListeners = this._anyListeners || [];
        this._anyListeners.push(listener);
        return this;
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback. The listener is added to the beginning of the listeners array.
     *
     * @param listener
     * @public
     */ prependAny(listener) {
        this._anyListeners = this._anyListeners || [];
        this._anyListeners.unshift(listener);
        return this;
    }
    /**
     * Removes the listener that will be fired when any event is emitted.
     *
     * @param listener
     * @public
     */ offAny(listener) {
        if (!this._anyListeners) return this;
        if (listener) {
            const listeners = this._anyListeners;
            for(let i = 0; i < listeners.length; i++)if (listener === listeners[i]) {
                listeners.splice(i, 1);
                return this;
            }
        } else this._anyListeners = [];
        return this;
    }
    /**
     * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
     * e.g. to remove listeners.
     *
     * @public
     */ listenersAny() {
        return this._anyListeners || [];
    }
}
exports.Socket = Socket;

},{"socket.io-parser":"1QOft","./on":"cCnGT","./typed-events":"bet5C","debug":"aAMyB"}],"1QOft":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Decoder = exports.Encoder = exports.PacketType = exports.protocol = void 0;
const Emitter = require("component-emitter");
const binary_1 = require("./binary");
const is_binary_1 = require("./is-binary");
const debug = require("debug")("socket.io-parser");
/**
 * Protocol version.
 *
 * @public
 */ exports.protocol = 5;
var PacketType;
(function(PacketType1) {
    PacketType1[PacketType1["CONNECT"] = 0] = "CONNECT";
    PacketType1[PacketType1["DISCONNECT"] = 1] = "DISCONNECT";
    PacketType1[PacketType1["EVENT"] = 2] = "EVENT";
    PacketType1[PacketType1["ACK"] = 3] = "ACK";
    PacketType1[PacketType1["CONNECT_ERROR"] = 4] = "CONNECT_ERROR";
    PacketType1[PacketType1["BINARY_EVENT"] = 5] = "BINARY_EVENT";
    PacketType1[PacketType1["BINARY_ACK"] = 6] = "BINARY_ACK";
})(PacketType = exports.PacketType || (exports.PacketType = {
}));
/**
 * A socket.io Encoder instance
 */ class Encoder {
    /**
     * Encode a packet as a single string if non-binary, or as a
     * buffer sequence, depending on packet type.
     *
     * @param {Object} obj - packet object
     */ encode(obj) {
        debug("encoding packet %j", obj);
        if (obj.type === PacketType.EVENT || obj.type === PacketType.ACK) {
            if (is_binary_1.hasBinary(obj)) {
                obj.type = obj.type === PacketType.EVENT ? PacketType.BINARY_EVENT : PacketType.BINARY_ACK;
                return this.encodeAsBinary(obj);
            }
        }
        return [
            this.encodeAsString(obj)
        ];
    }
    /**
     * Encode packet as string.
     */ encodeAsString(obj) {
        // first is type
        let str = "" + obj.type;
        // attachments if we have them
        if (obj.type === PacketType.BINARY_EVENT || obj.type === PacketType.BINARY_ACK) str += obj.attachments + "-";
        // if we have a namespace other than `/`
        // we append it followed by a comma `,`
        if (obj.nsp && "/" !== obj.nsp) str += obj.nsp + ",";
        // immediately followed by the id
        if (null != obj.id) str += obj.id;
        // json data
        if (null != obj.data) str += JSON.stringify(obj.data);
        debug("encoded %j as %s", obj, str);
        return str;
    }
    /**
     * Encode packet as 'buffer sequence' by removing blobs, and
     * deconstructing packet into object with placeholders and
     * a list of buffers.
     */ encodeAsBinary(obj) {
        const deconstruction = binary_1.deconstructPacket(obj);
        const pack = this.encodeAsString(deconstruction.packet);
        const buffers = deconstruction.buffers;
        buffers.unshift(pack); // add packet info to beginning of data list
        return buffers; // write all the buffers
    }
}
exports.Encoder = Encoder;
/**
 * A socket.io Decoder instance
 *
 * @return {Object} decoder
 */ class Decoder extends Emitter {
    constructor(){
        super();
    }
    /**
     * Decodes an encoded packet string into packet JSON.
     *
     * @param {String} obj - encoded packet
     */ add(obj) {
        let packet;
        if (typeof obj === "string") {
            packet = this.decodeString(obj);
            if (packet.type === PacketType.BINARY_EVENT || packet.type === PacketType.BINARY_ACK) {
                // binary packet's json
                this.reconstructor = new BinaryReconstructor(packet);
                // no attachments, labeled binary but no binary data to follow
                if (packet.attachments === 0) super.emit("decoded", packet);
            } else // non-binary full packet
            super.emit("decoded", packet);
        } else if (is_binary_1.isBinary(obj) || obj.base64) {
            // raw binary data
            if (!this.reconstructor) throw new Error("got binary data when not reconstructing a packet");
            else {
                packet = this.reconstructor.takeBinaryData(obj);
                if (packet) {
                    // received final buffer
                    this.reconstructor = null;
                    super.emit("decoded", packet);
                }
            }
        } else throw new Error("Unknown type: " + obj);
    }
    /**
     * Decode a packet String (JSON data)
     *
     * @param {String} str
     * @return {Object} packet
     */ decodeString(str) {
        let i = 0;
        // look up type
        const p = {
            type: Number(str.charAt(0))
        };
        if (PacketType[p.type] === undefined) throw new Error("unknown packet type " + p.type);
        // look up attachments if type binary
        if (p.type === PacketType.BINARY_EVENT || p.type === PacketType.BINARY_ACK) {
            const start = i + 1;
            while(str.charAt(++i) !== "-" && i != str.length);
            const buf = str.substring(start, i);
            if (buf != Number(buf) || str.charAt(i) !== "-") throw new Error("Illegal attachments");
            p.attachments = Number(buf);
        }
        // look up namespace (if any)
        if ("/" === str.charAt(i + 1)) {
            const start = i + 1;
            while(++i){
                const c = str.charAt(i);
                if ("," === c) break;
                if (i === str.length) break;
            }
            p.nsp = str.substring(start, i);
        } else p.nsp = "/";
        // look up id
        const next = str.charAt(i + 1);
        if ("" !== next && Number(next) == next) {
            const start = i + 1;
            while(++i){
                const c = str.charAt(i);
                if (null == c || Number(c) != c) {
                    --i;
                    break;
                }
                if (i === str.length) break;
            }
            p.id = Number(str.substring(start, i + 1));
        }
        // look up json data
        if (str.charAt(++i)) {
            const payload = tryParse(str.substr(i));
            if (Decoder.isPayloadValid(p.type, payload)) p.data = payload;
            else throw new Error("invalid payload");
        }
        debug("decoded %s as %j", str, p);
        return p;
    }
    static isPayloadValid(type, payload) {
        switch(type){
            case PacketType.CONNECT:
                return typeof payload === "object";
            case PacketType.DISCONNECT:
                return payload === undefined;
            case PacketType.CONNECT_ERROR:
                return typeof payload === "string" || typeof payload === "object";
            case PacketType.EVENT:
            case PacketType.BINARY_EVENT:
                return Array.isArray(payload) && payload.length > 0;
            case PacketType.ACK:
            case PacketType.BINARY_ACK:
                return Array.isArray(payload);
        }
    }
    /**
     * Deallocates a parser's resources
     */ destroy() {
        if (this.reconstructor) this.reconstructor.finishedReconstruction();
    }
}
exports.Decoder = Decoder;
function tryParse(str) {
    try {
        return JSON.parse(str);
    } catch (e) {
        return false;
    }
}
/**
 * A manager of a binary event's 'buffer sequence'. Should
 * be constructed whenever a packet of type BINARY_EVENT is
 * decoded.
 *
 * @param {Object} packet
 * @return {BinaryReconstructor} initialized reconstructor
 */ class BinaryReconstructor {
    constructor(packet){
        this.packet = packet;
        this.buffers = [];
        this.reconPack = packet;
    }
    /**
     * Method to be called when binary data received from connection
     * after a BINARY_EVENT packet.
     *
     * @param {Buffer | ArrayBuffer} binData - the raw binary data received
     * @return {null | Object} returns null if more binary data is expected or
     *   a reconstructed packet object if all buffers have been received.
     */ takeBinaryData(binData) {
        this.buffers.push(binData);
        if (this.buffers.length === this.reconPack.attachments) {
            // done with buffer list
            const packet1 = binary_1.reconstructPacket(this.reconPack, this.buffers);
            this.finishedReconstruction();
            return packet1;
        }
        return null;
    }
    /**
     * Cleans up binary packet reconstruction variables.
     */ finishedReconstruction() {
        this.reconPack = null;
        this.buffers = [];
    }
}

},{"component-emitter":"5Oj9U","./binary":"iTKfb","./is-binary":"aWrPX","debug":"8tVai"}],"iTKfb":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.reconstructPacket = exports.deconstructPacket = void 0;
const is_binary_1 = require("./is-binary");
/**
 * Replaces every Buffer | ArrayBuffer | Blob | File in packet with a numbered placeholder.
 *
 * @param {Object} packet - socket.io event packet
 * @return {Object} with deconstructed packet and list of buffers
 * @public
 */ function deconstructPacket(packet) {
    const buffers = [];
    const packetData = packet.data;
    const pack = packet;
    pack.data = _deconstructPacket(packetData, buffers);
    pack.attachments = buffers.length; // number of binary 'attachments'
    return {
        packet: pack,
        buffers: buffers
    };
}
exports.deconstructPacket = deconstructPacket;
function _deconstructPacket(data, buffers) {
    if (!data) return data;
    if (is_binary_1.isBinary(data)) {
        const placeholder = {
            _placeholder: true,
            num: buffers.length
        };
        buffers.push(data);
        return placeholder;
    } else if (Array.isArray(data)) {
        const newData = new Array(data.length);
        for(let i = 0; i < data.length; i++)newData[i] = _deconstructPacket(data[i], buffers);
        return newData;
    } else if (typeof data === "object" && !(data instanceof Date)) {
        const newData = {
        };
        for(const key in data)if (data.hasOwnProperty(key)) newData[key] = _deconstructPacket(data[key], buffers);
        return newData;
    }
    return data;
}
/**
 * Reconstructs a binary packet from its placeholder packet and buffers
 *
 * @param {Object} packet - event packet with placeholders
 * @param {Array} buffers - binary buffers to put in placeholder positions
 * @return {Object} reconstructed packet
 * @public
 */ function reconstructPacket(packet, buffers) {
    packet.data = _reconstructPacket(packet.data, buffers);
    packet.attachments = undefined; // no longer useful
    return packet;
}
exports.reconstructPacket = reconstructPacket;
function _reconstructPacket(data, buffers) {
    if (!data) return data;
    if (data && data._placeholder) return buffers[data.num]; // appropriate buffer (should be natural order anyway)
    else if (Array.isArray(data)) for(let i = 0; i < data.length; i++)data[i] = _reconstructPacket(data[i], buffers);
    else if (typeof data === "object") {
        for(const key in data)if (data.hasOwnProperty(key)) data[key] = _reconstructPacket(data[key], buffers);
    }
    return data;
}

},{"./is-binary":"aWrPX"}],"aWrPX":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.hasBinary = exports.isBinary = void 0;
const withNativeArrayBuffer = typeof ArrayBuffer === "function";
const isView = (obj)=>{
    return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj.buffer instanceof ArrayBuffer;
};
const toString = Object.prototype.toString;
const withNativeBlob = typeof Blob === "function" || typeof Blob !== "undefined" && toString.call(Blob) === "[object BlobConstructor]";
const withNativeFile = typeof File === "function" || typeof File !== "undefined" && toString.call(File) === "[object FileConstructor]";
/**
 * Returns true if obj is a Buffer, an ArrayBuffer, a Blob or a File.
 *
 * @private
 */ function isBinary(obj) {
    return withNativeArrayBuffer && (obj instanceof ArrayBuffer || isView(obj)) || withNativeBlob && obj instanceof Blob || withNativeFile && obj instanceof File;
}
exports.isBinary = isBinary;
function hasBinary(obj, toJSON) {
    if (!obj || typeof obj !== "object") return false;
    if (Array.isArray(obj)) {
        for(let i = 0, l = obj.length; i < l; i++){
            if (hasBinary(obj[i])) return true;
        }
        return false;
    }
    if (isBinary(obj)) return true;
    if (obj.toJSON && typeof obj.toJSON === "function" && arguments.length === 1) return hasBinary(obj.toJSON(), true);
    for(const key in obj){
        if (Object.prototype.hasOwnProperty.call(obj, key) && hasBinary(obj[key])) return true;
    }
    return false;
}
exports.hasBinary = hasBinary;

},{}],"8tVai":[function(require,module,exports) {
var process = require("process");
/* eslint-env browser */ /**
 * This is the web browser implementation of `debug()`.
 */ exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();
exports.destroy = (()=>{
    let warned = false;
    return ()=>{
        if (!warned) {
            warned = true;
            console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
        }
    };
})();
/**
 * Colors.
 */ exports.colors = [
    '#0000CC',
    '#0000FF',
    '#0033CC',
    '#0033FF',
    '#0066CC',
    '#0066FF',
    '#0099CC',
    '#0099FF',
    '#00CC00',
    '#00CC33',
    '#00CC66',
    '#00CC99',
    '#00CCCC',
    '#00CCFF',
    '#3300CC',
    '#3300FF',
    '#3333CC',
    '#3333FF',
    '#3366CC',
    '#3366FF',
    '#3399CC',
    '#3399FF',
    '#33CC00',
    '#33CC33',
    '#33CC66',
    '#33CC99',
    '#33CCCC',
    '#33CCFF',
    '#6600CC',
    '#6600FF',
    '#6633CC',
    '#6633FF',
    '#66CC00',
    '#66CC33',
    '#9900CC',
    '#9900FF',
    '#9933CC',
    '#9933FF',
    '#99CC00',
    '#99CC33',
    '#CC0000',
    '#CC0033',
    '#CC0066',
    '#CC0099',
    '#CC00CC',
    '#CC00FF',
    '#CC3300',
    '#CC3333',
    '#CC3366',
    '#CC3399',
    '#CC33CC',
    '#CC33FF',
    '#CC6600',
    '#CC6633',
    '#CC9900',
    '#CC9933',
    '#CCCC00',
    '#CCCC33',
    '#FF0000',
    '#FF0033',
    '#FF0066',
    '#FF0099',
    '#FF00CC',
    '#FF00FF',
    '#FF3300',
    '#FF3333',
    '#FF3366',
    '#FF3399',
    '#FF33CC',
    '#FF33FF',
    '#FF6600',
    '#FF6633',
    '#FF9900',
    '#FF9933',
    '#FFCC00',
    '#FFCC33'
];
/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */ // eslint-disable-next-line complexity
function useColors() {
    // NB: In an Electron preload script, document will be defined but not fully
    // initialized. Since we know we're in Chrome, we'll just detect this case
    // explicitly
    if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) return true;
    // Internet Explorer and Edge do not support colors.
    if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) return false;
    // Is webkit? http://stackoverflow.com/a/16459606/376773
    // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
    return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
}
/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */ function formatArgs(args) {
    args[0] = (this.useColors ? '%c' : '') + this.namespace + (this.useColors ? ' %c' : ' ') + args[0] + (this.useColors ? '%c ' : ' ') + '+' + module.exports.humanize(this.diff);
    if (!this.useColors) return;
    const c = 'color: ' + this.color;
    args.splice(1, 0, c, 'color: inherit');
    // The final "%c" is somewhat tricky, because there could be other
    // arguments passed either before or after the %c, so we need to
    // figure out the correct index to insert the CSS into
    let index = 0;
    let lastC = 0;
    args[0].replace(/%[a-zA-Z%]/g, (match)=>{
        if (match === '%%') return;
        index++;
        if (match === '%c') // We only are interested in the *last* %c
        // (the user may have provided their own)
        lastC = index;
    });
    args.splice(lastC, 0, c);
}
/**
 * Invokes `console.debug()` when available.
 * No-op when `console.debug` is not a "function".
 * If `console.debug` is not available, falls back
 * to `console.log`.
 *
 * @api public
 */ exports.log = console.debug || console.log || (()=>{
});
/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */ function save(namespaces) {
    try {
        if (namespaces) exports.storage.setItem('debug', namespaces);
        else exports.storage.removeItem('debug');
    } catch (error) {
    // Swallow
    // XXX (@Qix-) should we be logging these?
    }
}
/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */ function load() {
    let r;
    try {
        r = exports.storage.getItem('debug');
    } catch (error) {
    // Swallow
    // XXX (@Qix-) should we be logging these?
    }
    // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
    if (!r && typeof process !== 'undefined' && 'env' in process) r = undefined;
    return r;
}
/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */ function localstorage() {
    try {
        // TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
        // The Browser also has localStorage in the global context.
        return localStorage;
    } catch (error) {
    // Swallow
    // XXX (@Qix-) should we be logging these?
    }
}
module.exports = require('./common')(exports);
const { formatters  } = module.exports;
/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */ formatters.j = function(v) {
    try {
        return JSON.stringify(v);
    } catch (error) {
        return '[UnexpectedJSONParseError]: ' + error.message;
    }
};

},{"process":"h7Qgs","./common":"1gSx1"}],"1gSx1":[function(require,module,exports) {
/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */ function setup(env) {
    createDebug.debug = createDebug;
    createDebug.default = createDebug;
    createDebug.coerce = coerce;
    createDebug.disable = disable;
    createDebug.enable = enable;
    createDebug.enabled = enabled;
    createDebug.humanize = require('ms');
    createDebug.destroy = destroy;
    Object.keys(env).forEach((key)=>{
        createDebug[key] = env[key];
    });
    /**
	* The currently active debug mode names, and names to skip.
	*/ createDebug.names = [];
    createDebug.skips = [];
    /**
	* Map of special "%n" handling functions, for the debug "format" argument.
	*
	* Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	*/ createDebug.formatters = {
    };
    /**
	* Selects a color for a debug namespace
	* @param {String} namespace The namespace string for the for the debug instance to be colored
	* @return {Number|String} An ANSI color code for the given namespace
	* @api private
	*/ function selectColor(namespace) {
        let hash = 0;
        for(let i = 0; i < namespace.length; i++){
            hash = (hash << 5) - hash + namespace.charCodeAt(i);
            hash |= 0; // Convert to 32bit integer
        }
        return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
    }
    createDebug.selectColor = selectColor;
    /**
	* Create a debugger with the given `namespace`.
	*
	* @param {String} namespace
	* @return {Function}
	* @api public
	*/ function createDebug(namespace) {
        let prevTime;
        let enableOverride = null;
        let namespacesCache;
        let enabledCache;
        function debug(...args) {
            // Disabled?
            if (!debug.enabled) return;
            const self = debug;
            // Set `diff` timestamp
            const curr = Number(new Date());
            const ms = curr - (prevTime || curr);
            self.diff = ms;
            self.prev = prevTime;
            self.curr = curr;
            prevTime = curr;
            args[0] = createDebug.coerce(args[0]);
            if (typeof args[0] !== 'string') // Anything else let's inspect with %O
            args.unshift('%O');
            // Apply any `formatters` transformations
            let index = 0;
            args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format)=>{
                // If we encounter an escaped % then don't increase the array index
                if (match === '%%') return '%';
                index++;
                const formatter = createDebug.formatters[format];
                if (typeof formatter === 'function') {
                    const val = args[index];
                    match = formatter.call(self, val);
                    // Now we need to remove `args[index]` since it's inlined in the `format`
                    args.splice(index, 1);
                    index--;
                }
                return match;
            });
            // Apply env-specific formatting (colors, etc.)
            createDebug.formatArgs.call(self, args);
            const logFn = self.log || createDebug.log;
            logFn.apply(self, args);
        }
        debug.namespace = namespace;
        debug.useColors = createDebug.useColors();
        debug.color = createDebug.selectColor(namespace);
        debug.extend = extend;
        debug.destroy = createDebug.destroy; // XXX Temporary. Will be removed in the next major release.
        Object.defineProperty(debug, 'enabled', {
            enumerable: true,
            configurable: false,
            get: ()=>{
                if (enableOverride !== null) return enableOverride;
                if (namespacesCache !== createDebug.namespaces) {
                    namespacesCache = createDebug.namespaces;
                    enabledCache = createDebug.enabled(namespace);
                }
                return enabledCache;
            },
            set: (v)=>{
                enableOverride = v;
            }
        });
        // Env-specific initialization logic for debug instances
        if (typeof createDebug.init === 'function') createDebug.init(debug);
        return debug;
    }
    function extend(namespace, delimiter) {
        const newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
        newDebug.log = this.log;
        return newDebug;
    }
    /**
	* Enables a debug mode by namespaces. This can include modes
	* separated by a colon and wildcards.
	*
	* @param {String} namespaces
	* @api public
	*/ function enable(namespaces) {
        createDebug.save(namespaces);
        createDebug.namespaces = namespaces;
        createDebug.names = [];
        createDebug.skips = [];
        let i;
        const split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
        const len = split.length;
        for(i = 0; i < len; i++){
            if (!split[i]) continue;
            namespaces = split[i].replace(/\*/g, '.*?');
            if (namespaces[0] === '-') createDebug.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
            else createDebug.names.push(new RegExp('^' + namespaces + '$'));
        }
    }
    /**
	* Disable debug output.
	*
	* @return {String} namespaces
	* @api public
	*/ function disable() {
        const namespaces = [
            ...createDebug.names.map(toNamespace),
            ...createDebug.skips.map(toNamespace).map((namespace)=>'-' + namespace
            )
        ].join(',');
        createDebug.enable('');
        return namespaces;
    }
    /**
	* Returns true if the given mode name is enabled, false otherwise.
	*
	* @param {String} name
	* @return {Boolean}
	* @api public
	*/ function enabled(name) {
        if (name[name.length - 1] === '*') return true;
        let i;
        let len;
        for(i = 0, len = createDebug.skips.length; i < len; i++){
            if (createDebug.skips[i].test(name)) return false;
        }
        for(i = 0, len = createDebug.names.length; i < len; i++){
            if (createDebug.names[i].test(name)) return true;
        }
        return false;
    }
    /**
	* Convert regexp to namespace
	*
	* @param {RegExp} regxep
	* @return {String} namespace
	* @api private
	*/ function toNamespace(regexp) {
        return regexp.toString().substring(2, regexp.toString().length - 2).replace(/\.\*\?$/, '*');
    }
    /**
	* Coerce `val`.
	*
	* @param {Mixed} val
	* @return {Mixed}
	* @api private
	*/ function coerce(val) {
        if (val instanceof Error) return val.stack || val.message;
        return val;
    }
    /**
	* XXX DO NOT USE. This is a temporary stub function.
	* XXX It WILL be removed in the next major release.
	*/ function destroy() {
        console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
    }
    createDebug.enable(createDebug.load());
    return createDebug;
}
module.exports = setup;

},{"ms":"9imt9"}],"9imt9":[function(require,module,exports) {
/**
 * Helpers.
 */ var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;
/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */ module.exports = function(val, options) {
    options = options || {
    };
    var type = typeof val;
    if (type === 'string' && val.length > 0) return parse(val);
    else if (type === 'number' && isFinite(val)) return options.long ? fmtLong(val) : fmtShort(val);
    throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val));
};
/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */ function parse(str) {
    str = String(str);
    if (str.length > 100) return;
    var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(str);
    if (!match) return;
    var n = parseFloat(match[1]);
    var type = (match[2] || 'ms').toLowerCase();
    switch(type){
        case 'years':
        case 'year':
        case 'yrs':
        case 'yr':
        case 'y':
            return n * y;
        case 'weeks':
        case 'week':
        case 'w':
            return n * w;
        case 'days':
        case 'day':
        case 'd':
            return n * d;
        case 'hours':
        case 'hour':
        case 'hrs':
        case 'hr':
        case 'h':
            return n * h;
        case 'minutes':
        case 'minute':
        case 'mins':
        case 'min':
        case 'm':
            return n * m;
        case 'seconds':
        case 'second':
        case 'secs':
        case 'sec':
        case 's':
            return n * s;
        case 'milliseconds':
        case 'millisecond':
        case 'msecs':
        case 'msec':
        case 'ms':
            return n;
        default:
            return undefined;
    }
}
/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */ function fmtShort(ms) {
    var msAbs = Math.abs(ms);
    if (msAbs >= d) return Math.round(ms / d) + 'd';
    if (msAbs >= h) return Math.round(ms / h) + 'h';
    if (msAbs >= m) return Math.round(ms / m) + 'm';
    if (msAbs >= s) return Math.round(ms / s) + 's';
    return ms + 'ms';
}
/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */ function fmtLong(ms) {
    var msAbs = Math.abs(ms);
    if (msAbs >= d) return plural(ms, msAbs, d, 'day');
    if (msAbs >= h) return plural(ms, msAbs, h, 'hour');
    if (msAbs >= m) return plural(ms, msAbs, m, 'minute');
    if (msAbs >= s) return plural(ms, msAbs, s, 'second');
    return ms + ' ms';
}
/**
 * Pluralization helper.
 */ function plural(ms, msAbs, n, name) {
    var isPlural = msAbs >= n * 1.5;
    return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}

},{}],"cCnGT":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.on = void 0;
function on(obj, ev, fn) {
    obj.on(ev, fn);
    return function subDestroy() {
        obj.off(ev, fn);
    };
}
exports.on = on;

},{}],"bet5C":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.StrictEventEmitter = void 0;
const Emitter = require("component-emitter");
/**
 * Strictly typed version of an `EventEmitter`. A `TypedEventEmitter` takes type
 * parameters for mappings of event names to event data types, and strictly
 * types method calls to the `EventEmitter` according to these event maps.
 *
 * @typeParam ListenEvents - `EventsMap` of user-defined events that can be
 * listened to with `on` or `once`
 * @typeParam EmitEvents - `EventsMap` of user-defined events that can be
 * emitted with `emit`
 * @typeParam ReservedEvents - `EventsMap` of reserved events, that can be
 * emitted by socket.io with `emitReserved`, and can be listened to with
 * `listen`.
 */ class StrictEventEmitter extends Emitter {
    /**
     * Adds the `listener` function as an event listener for `ev`.
     *
     * @param ev Name of the event
     * @param listener Callback function
     */ on(ev, listener) {
        super.on(ev, listener);
        return this;
    }
    /**
     * Adds a one-time `listener` function as an event listener for `ev`.
     *
     * @param ev Name of the event
     * @param listener Callback function
     */ once(ev, listener) {
        super.once(ev, listener);
        return this;
    }
    /**
     * Emits an event.
     *
     * @param ev Name of the event
     * @param args Values to send to listeners of this event
     */ emit(ev, ...args) {
        super.emit(ev, ...args);
        return this;
    }
    /**
     * Emits a reserved event.
     *
     * This method is `protected`, so that only a class extending
     * `StrictEventEmitter` can emit its own reserved events.
     *
     * @param ev Reserved event name
     * @param args Arguments to emit along with the event
     */ emitReserved(ev, ...args) {
        super.emit(ev, ...args);
        return this;
    }
    /**
     * Returns the listeners listening to an event.
     *
     * @param event Event name
     * @returns Array of listeners subscribed to `event`
     */ listeners(event) {
        return super.listeners(event);
    }
}
exports.StrictEventEmitter = StrictEventEmitter;

},{"component-emitter":"5Oj9U"}],"kVvwn":[function(require,module,exports) {
/**
 * Expose `Backoff`.
 */ module.exports = Backoff;
/**
 * Initialize backoff timer with `opts`.
 *
 * - `min` initial timeout in milliseconds [100]
 * - `max` max timeout [10000]
 * - `jitter` [0]
 * - `factor` [2]
 *
 * @param {Object} opts
 * @api public
 */ function Backoff(opts) {
    opts = opts || {
    };
    this.ms = opts.min || 100;
    this.max = opts.max || 10000;
    this.factor = opts.factor || 2;
    this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
    this.attempts = 0;
}
/**
 * Return the backoff duration.
 *
 * @return {Number}
 * @api public
 */ Backoff.prototype.duration = function() {
    var ms = this.ms * Math.pow(this.factor, this.attempts++);
    if (this.jitter) {
        var rand = Math.random();
        var deviation = Math.floor(rand * this.jitter * ms);
        ms = (Math.floor(rand * 10) & 1) == 0 ? ms - deviation : ms + deviation;
    }
    return Math.min(ms, this.max) | 0;
};
/**
 * Reset the number of attempts.
 *
 * @api public
 */ Backoff.prototype.reset = function() {
    this.attempts = 0;
};
/**
 * Set the minimum duration
 *
 * @api public
 */ Backoff.prototype.setMin = function(min) {
    this.ms = min;
};
/**
 * Set the maximum duration
 *
 * @api public
 */ Backoff.prototype.setMax = function(max) {
    this.max = max;
};
/**
 * Set the jitter
 *
 * @api public
 */ Backoff.prototype.setJitter = function(jitter) {
    this.jitter = jitter;
};

},{}],"g8wFM":[function(require,module,exports) {
parcelRequire = (function(e, r, t, n) {
    var i, o = "function" == typeof parcelRequire && parcelRequire, u = "function" == typeof require && undefined;
    function f(t1, n1) {
        if (!r[t1]) {
            if (!e[t1]) {
                var i1 = "function" == typeof parcelRequire && parcelRequire;
                if (!n1 && i1) return i1(t1, !0);
                if (o) return o(t1, !0);
                if (u && "string" == typeof t1) return u(t1);
                var c = new Error("Cannot find module '" + t1 + "'");
                throw c.code = "MODULE_NOT_FOUND", c;
            }
            p.resolve = function(r1) {
                return e[t1][1][r1] || r1;
            }, p.cache = {
            };
            var l = r[t1] = new f.Module(t1);
            e[t1][0].call(l.exports, p, l, l.exports, this);
        }
        function p(e1) {
            return f(p.resolve(e1));
        }
        return r[t1].exports;
    }
    f.isParcelRequire = !0, f.Module = function(e1) {
        this.id = e1, this.bundle = f, this.exports = {
        };
    }, f.modules = e, f.cache = r, f.parent = o, f.register = function(r1, t1) {
        e[r1] = [
            function(e1, r2) {
                r2.exports = t1;
            },
            {
            }
        ];
    };
    for(var c = 0; c < t.length; c++)try {
        f(t[c]);
    } catch (e1) {
        i || (i = e1);
    }
    if (t.length) {
        var l = f(t[t.length - 1]);
        "object" == typeof exports && "undefined" != typeof module ? module.exports = l : "function" == typeof define && define.amd ? define(function() {
            return l;
        }) : n && (this[n] = l);
    }
    if (parcelRequire = f, i) throw i;
    return f;
})({
    "EgBh": [
        function(require, module, exports) {
            var e = {
            };
            e.useBlobBuilder = (function() {
                try {
                    return new Blob([]), !1;
                } catch (e1) {
                    return !0;
                }
            })(), e.useArrayBufferView = !e.useBlobBuilder && (function() {
                try {
                    return 0 === new Blob([
                        new Uint8Array([])
                    ]).size;
                } catch (e1) {
                    return !0;
                }
            })(), module.exports.binaryFeatures = e;
            var r = module.exports.BlobBuilder;
            function t() {
                this._pieces = [], this._parts = [];
            }
            "undefined" != typeof window && (r = module.exports.BlobBuilder = window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder || window.BlobBuilder), t.prototype.append = function(e1) {
                "number" == typeof e1 ? this._pieces.push(e1) : (this.flush(), this._parts.push(e1));
            }, t.prototype.flush = function() {
                if (this._pieces.length > 0) {
                    var r1 = new Uint8Array(this._pieces);
                    e.useArrayBufferView || (r1 = r1.buffer), this._parts.push(r1), this._pieces = [];
                }
            }, t.prototype.getBuffer = function() {
                if (this.flush(), e.useBlobBuilder) {
                    for(var t1 = new r, i2 = 0, u = this._parts.length; i2 < u; i2++)t1.append(this._parts[i2]);
                    return t1.getBlob();
                }
                return new Blob(this._parts);
            }, module.exports.BufferBuilder = t;
        },
        {
        }
    ],
    "kdPp": [
        function(require, module, exports) {
            var t2 = require("./bufferbuilder").BufferBuilder, e = require("./bufferbuilder").binaryFeatures, i3 = {
                unpack: function(t3) {
                    return new r2(t3).unpack();
                },
                pack: function(t3) {
                    var e1 = new n;
                    return e1.pack(t3), e1.getBuffer();
                }
            };
            function r2(t3) {
                this.index = 0, this.dataBuffer = t3, this.dataView = new Uint8Array(this.dataBuffer), this.length = this.dataBuffer.byteLength;
            }
            function n() {
                this.bufferBuilder = new t2;
            }
            function u(t3) {
                var e1 = t3.charCodeAt(0);
                return e1 <= 2047 ? "00" : e1 <= 65535 ? "000" : e1 <= 2097151 ? "0000" : e1 <= 67108863 ? "00000" : "000000";
            }
            function a(t3) {
                return t3.length > 600 ? new Blob([
                    t3
                ]).size : t3.replace(/[^\u0000-\u007F]/g, u).length;
            }
            module.exports = i3, r2.prototype.unpack = function() {
                var t3, e1 = this.unpack_uint8();
                if (e1 < 128) return e1;
                if ((224 ^ e1) < 32) return (224 ^ e1) - 32;
                if ((t3 = 160 ^ e1) <= 15) return this.unpack_raw(t3);
                if ((t3 = 176 ^ e1) <= 15) return this.unpack_string(t3);
                if ((t3 = 144 ^ e1) <= 15) return this.unpack_array(t3);
                if ((t3 = 128 ^ e1) <= 15) return this.unpack_map(t3);
                switch(e1){
                    case 192:
                        return null;
                    case 193:
                        return;
                    case 194:
                        return !1;
                    case 195:
                        return !0;
                    case 202:
                        return this.unpack_float();
                    case 203:
                        return this.unpack_double();
                    case 204:
                        return this.unpack_uint8();
                    case 205:
                        return this.unpack_uint16();
                    case 206:
                        return this.unpack_uint32();
                    case 207:
                        return this.unpack_uint64();
                    case 208:
                        return this.unpack_int8();
                    case 209:
                        return this.unpack_int16();
                    case 210:
                        return this.unpack_int32();
                    case 211:
                        return this.unpack_int64();
                    case 212:
                    case 213:
                    case 214:
                    case 215:
                        return;
                    case 216:
                        return t3 = this.unpack_uint16(), this.unpack_string(t3);
                    case 217:
                        return t3 = this.unpack_uint32(), this.unpack_string(t3);
                    case 218:
                        return t3 = this.unpack_uint16(), this.unpack_raw(t3);
                    case 219:
                        return t3 = this.unpack_uint32(), this.unpack_raw(t3);
                    case 220:
                        return t3 = this.unpack_uint16(), this.unpack_array(t3);
                    case 221:
                        return t3 = this.unpack_uint32(), this.unpack_array(t3);
                    case 222:
                        return t3 = this.unpack_uint16(), this.unpack_map(t3);
                    case 223:
                        return t3 = this.unpack_uint32(), this.unpack_map(t3);
                }
            }, r2.prototype.unpack_uint8 = function() {
                var t3 = 255 & this.dataView[this.index];
                return this.index++, t3;
            }, r2.prototype.unpack_uint16 = function() {
                var t3 = this.read(2), e1 = 256 * (255 & t3[0]) + (255 & t3[1]);
                return this.index += 2, e1;
            }, r2.prototype.unpack_uint32 = function() {
                var t3 = this.read(4), e1 = 256 * (256 * (256 * t3[0] + t3[1]) + t3[2]) + t3[3];
                return this.index += 4, e1;
            }, r2.prototype.unpack_uint64 = function() {
                var t3 = this.read(8), e1 = 256 * (256 * (256 * (256 * (256 * (256 * (256 * t3[0] + t3[1]) + t3[2]) + t3[3]) + t3[4]) + t3[5]) + t3[6]) + t3[7];
                return this.index += 8, e1;
            }, r2.prototype.unpack_int8 = function() {
                var t3 = this.unpack_uint8();
                return t3 < 128 ? t3 : t3 - 256;
            }, r2.prototype.unpack_int16 = function() {
                var t3 = this.unpack_uint16();
                return t3 < 32768 ? t3 : t3 - 65536;
            }, r2.prototype.unpack_int32 = function() {
                var t3 = this.unpack_uint32();
                return t3 < Math.pow(2, 31) ? t3 : t3 - Math.pow(2, 32);
            }, r2.prototype.unpack_int64 = function() {
                var t3 = this.unpack_uint64();
                return t3 < Math.pow(2, 63) ? t3 : t3 - Math.pow(2, 64);
            }, r2.prototype.unpack_raw = function(t3) {
                if (this.length < this.index + t3) throw new Error("BinaryPackFailure: index is out of range " + this.index + " " + t3 + " " + this.length);
                var e1 = this.dataBuffer.slice(this.index, this.index + t3);
                return this.index += t3, e1;
            }, r2.prototype.unpack_string = function(t3) {
                for(var e1, i4, r3 = this.read(t3), n1 = 0, u1 = ""; n1 < t3;)(e1 = r3[n1]) < 128 ? (u1 += String.fromCharCode(e1), n1++) : (192 ^ e1) < 32 ? (i4 = (192 ^ e1) << 6 | 63 & r3[n1 + 1], u1 += String.fromCharCode(i4), n1 += 2) : (i4 = (15 & e1) << 12 | (63 & r3[n1 + 1]) << 6 | 63 & r3[n1 + 2], u1 += String.fromCharCode(i4), n1 += 3);
                return this.index += t3, u1;
            }, r2.prototype.unpack_array = function(t3) {
                for(var e1 = new Array(t3), i4 = 0; i4 < t3; i4++)e1[i4] = this.unpack();
                return e1;
            }, r2.prototype.unpack_map = function(t3) {
                for(var e1 = {
                }, i4 = 0; i4 < t3; i4++){
                    var r3 = this.unpack(), n1 = this.unpack();
                    e1[r3] = n1;
                }
                return e1;
            }, r2.prototype.unpack_float = function() {
                var t3 = this.unpack_uint32(), e1 = (t3 >> 23 & 255) - 127;
                return (0 === t3 >> 31 ? 1 : -1) * (8388607 & t3 | 8388608) * Math.pow(2, e1 - 23);
            }, r2.prototype.unpack_double = function() {
                var t3 = this.unpack_uint32(), e1 = this.unpack_uint32(), i4 = (t3 >> 20 & 2047) - 1023;
                return (0 === t3 >> 31 ? 1 : -1) * ((1048575 & t3 | 1048576) * Math.pow(2, i4 - 20) + e1 * Math.pow(2, i4 - 52));
            }, r2.prototype.read = function(t3) {
                var e1 = this.index;
                if (e1 + t3 <= this.length) return this.dataView.subarray(e1, e1 + t3);
                throw new Error("BinaryPackFailure: read index out of range");
            }, n.prototype.getBuffer = function() {
                return this.bufferBuilder.getBuffer();
            }, n.prototype.pack = function(t3) {
                var i4 = typeof t3;
                if ("string" === i4) this.pack_string(t3);
                else if ("number" === i4) Math.floor(t3) === t3 ? this.pack_integer(t3) : this.pack_double(t3);
                else if ("boolean" === i4) !0 === t3 ? this.bufferBuilder.append(195) : !1 === t3 && this.bufferBuilder.append(194);
                else if ("undefined" === i4) this.bufferBuilder.append(192);
                else {
                    if ("object" !== i4) throw new Error('Type "' + i4 + '" not yet supported');
                    if (null === t3) this.bufferBuilder.append(192);
                    else {
                        var r4 = t3.constructor;
                        if (r4 == Array) this.pack_array(t3);
                        else if (r4 == Blob || r4 == File || t3 instanceof Blob || t3 instanceof File) this.pack_bin(t3);
                        else if (r4 == ArrayBuffer) e.useArrayBufferView ? this.pack_bin(new Uint8Array(t3)) : this.pack_bin(t3);
                        else if ("BYTES_PER_ELEMENT" in t3) e.useArrayBufferView ? this.pack_bin(new Uint8Array(t3.buffer)) : this.pack_bin(t3.buffer);
                        else if (r4 == Object || r4.toString().startsWith("class")) this.pack_object(t3);
                        else if (r4 == Date) this.pack_string(t3.toString());
                        else {
                            if ("function" != typeof t3.toBinaryPack) throw new Error('Type "' + r4.toString() + '" not yet supported');
                            this.bufferBuilder.append(t3.toBinaryPack());
                        }
                    }
                }
                this.bufferBuilder.flush();
            }, n.prototype.pack_bin = function(t3) {
                var e1 = t3.length || t3.byteLength || t3.size;
                if (e1 <= 15) this.pack_uint8(160 + e1);
                else if (e1 <= 65535) this.bufferBuilder.append(218), this.pack_uint16(e1);
                else {
                    if (!(e1 <= 4294967295)) throw new Error("Invalid length");
                    this.bufferBuilder.append(219), this.pack_uint32(e1);
                }
                this.bufferBuilder.append(t3);
            }, n.prototype.pack_string = function(t3) {
                var e1 = a(t3);
                if (e1 <= 15) this.pack_uint8(176 + e1);
                else if (e1 <= 65535) this.bufferBuilder.append(216), this.pack_uint16(e1);
                else {
                    if (!(e1 <= 4294967295)) throw new Error("Invalid length");
                    this.bufferBuilder.append(217), this.pack_uint32(e1);
                }
                this.bufferBuilder.append(t3);
            }, n.prototype.pack_array = function(t3) {
                var e1 = t3.length;
                if (e1 <= 15) this.pack_uint8(144 + e1);
                else if (e1 <= 65535) this.bufferBuilder.append(220), this.pack_uint16(e1);
                else {
                    if (!(e1 <= 4294967295)) throw new Error("Invalid length");
                    this.bufferBuilder.append(221), this.pack_uint32(e1);
                }
                for(var i4 = 0; i4 < e1; i4++)this.pack(t3[i4]);
            }, n.prototype.pack_integer = function(t3) {
                if (t3 >= -32 && t3 <= 127) this.bufferBuilder.append(255 & t3);
                else if (t3 >= 0 && t3 <= 255) this.bufferBuilder.append(204), this.pack_uint8(t3);
                else if (t3 >= -128 && t3 <= 127) this.bufferBuilder.append(208), this.pack_int8(t3);
                else if (t3 >= 0 && t3 <= 65535) this.bufferBuilder.append(205), this.pack_uint16(t3);
                else if (t3 >= -32768 && t3 <= 32767) this.bufferBuilder.append(209), this.pack_int16(t3);
                else if (t3 >= 0 && t3 <= 4294967295) this.bufferBuilder.append(206), this.pack_uint32(t3);
                else if (t3 >= -2147483648 && t3 <= 2147483647) this.bufferBuilder.append(210), this.pack_int32(t3);
                else if (t3 >= -9223372036854776000 && t3 <= 9223372036854776000) this.bufferBuilder.append(211), this.pack_int64(t3);
                else {
                    if (!(t3 >= 0 && t3 <= 18446744073709552000)) throw new Error("Invalid integer");
                    this.bufferBuilder.append(207), this.pack_uint64(t3);
                }
            }, n.prototype.pack_double = function(t3) {
                var e1 = 0;
                t3 < 0 && (e1 = 1, t3 = -t3);
                var i4 = Math.floor(Math.log(t3) / Math.LN2), r5 = t3 / Math.pow(2, i4) - 1, n2 = Math.floor(r5 * Math.pow(2, 52)), u1 = Math.pow(2, 32), a1 = e1 << 31 | i4 + 1023 << 20 | n2 / u1 & 1048575, p = n2 % u1;
                this.bufferBuilder.append(203), this.pack_int32(a1), this.pack_int32(p);
            }, n.prototype.pack_object = function(t3) {
                var e1 = Object.keys(t3).length;
                if (e1 <= 15) this.pack_uint8(128 + e1);
                else if (e1 <= 65535) this.bufferBuilder.append(222), this.pack_uint16(e1);
                else {
                    if (!(e1 <= 4294967295)) throw new Error("Invalid length");
                    this.bufferBuilder.append(223), this.pack_uint32(e1);
                }
                for(var i4 in t3)t3.hasOwnProperty(i4) && (this.pack(i4), this.pack(t3[i4]));
            }, n.prototype.pack_uint8 = function(t3) {
                this.bufferBuilder.append(t3);
            }, n.prototype.pack_uint16 = function(t3) {
                this.bufferBuilder.append(t3 >> 8), this.bufferBuilder.append(255 & t3);
            }, n.prototype.pack_uint32 = function(t3) {
                var e1 = 4294967295 & t3;
                this.bufferBuilder.append((4278190080 & e1) >>> 24), this.bufferBuilder.append((16711680 & e1) >>> 16), this.bufferBuilder.append((65280 & e1) >>> 8), this.bufferBuilder.append(255 & e1);
            }, n.prototype.pack_uint64 = function(t3) {
                var e1 = t3 / Math.pow(2, 32), i4 = t3 % Math.pow(2, 32);
                this.bufferBuilder.append((4278190080 & e1) >>> 24), this.bufferBuilder.append((16711680 & e1) >>> 16), this.bufferBuilder.append((65280 & e1) >>> 8), this.bufferBuilder.append(255 & e1), this.bufferBuilder.append((4278190080 & i4) >>> 24), this.bufferBuilder.append((16711680 & i4) >>> 16), this.bufferBuilder.append((65280 & i4) >>> 8), this.bufferBuilder.append(255 & i4);
            }, n.prototype.pack_int8 = function(t3) {
                this.bufferBuilder.append(255 & t3);
            }, n.prototype.pack_int16 = function(t3) {
                this.bufferBuilder.append((65280 & t3) >> 8), this.bufferBuilder.append(255 & t3);
            }, n.prototype.pack_int32 = function(t3) {
                this.bufferBuilder.append(t3 >>> 24 & 255), this.bufferBuilder.append((16711680 & t3) >>> 16), this.bufferBuilder.append((65280 & t3) >>> 8), this.bufferBuilder.append(255 & t3);
            }, n.prototype.pack_int64 = function(t3) {
                var e1 = Math.floor(t3 / Math.pow(2, 32)), i4 = t3 % Math.pow(2, 32);
                this.bufferBuilder.append((4278190080 & e1) >>> 24), this.bufferBuilder.append((16711680 & e1) >>> 16), this.bufferBuilder.append((65280 & e1) >>> 8), this.bufferBuilder.append(255 & e1), this.bufferBuilder.append((4278190080 & i4) >>> 24), this.bufferBuilder.append((16711680 & i4) >>> 16), this.bufferBuilder.append((65280 & i4) >>> 8), this.bufferBuilder.append(255 & i4);
            };
        },
        {
            "./bufferbuilder": "EgBh"
        }
    ],
    "iSxC": [
        function(require, module, exports) {
            "use strict";
            function e(e1, t2, n2) {
                return t2 in e1 ? Object.defineProperty(e1, t2, {
                    value: n2,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e1[t2] = n2, e1;
            }
            function t2(e1) {
                return (t2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e2) {
                    return typeof e2;
                } : function(e2) {
                    return e2 && "function" == typeof Symbol && e2.constructor === Symbol && e2 !== Symbol.prototype ? "symbol" : typeof e2;
                })(e1);
            }
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.extractVersion = o, exports.wrapPeerConnectionEvent = i3, exports.disableLog = s, exports.disableWarnings = a, exports.log = p, exports.deprecated = u, exports.detectBrowser = c, exports.compactObject = f, exports.walkStats = l, exports.filterStats = v;
            var n2 = !0, r2 = !0;
            function o(e1, t3, n3) {
                var r5 = e1.match(t3);
                return r5 && r5.length >= n3 && parseInt(r5[n3], 10);
            }
            function i3(e1, t3, n3) {
                if (e1.RTCPeerConnection) {
                    var r5 = e1.RTCPeerConnection.prototype, o1 = r5.addEventListener;
                    r5.addEventListener = function(e2, r6) {
                        if (e2 !== t3) return o1.apply(this, arguments);
                        var i4 = function(e3) {
                            var t4 = n3(e3);
                            t4 && (r6.handleEvent ? r6.handleEvent(t4) : r6(t4));
                        };
                        return this._eventMap = this._eventMap || {
                        }, this._eventMap[t3] || (this._eventMap[t3] = new Map), this._eventMap[t3].set(r6, i4), o1.apply(this, [
                            e2,
                            i4
                        ]);
                    };
                    var i4 = r5.removeEventListener;
                    r5.removeEventListener = function(e2, n4) {
                        if (e2 !== t3 || !this._eventMap || !this._eventMap[t3]) return i4.apply(this, arguments);
                        if (!this._eventMap[t3].has(n4)) return i4.apply(this, arguments);
                        var r6 = this._eventMap[t3].get(n4);
                        return this._eventMap[t3].delete(n4), 0 === this._eventMap[t3].size && delete this._eventMap[t3], 0 === Object.keys(this._eventMap).length && delete this._eventMap, i4.apply(this, [
                            e2,
                            r6
                        ]);
                    }, Object.defineProperty(r5, "on" + t3, {
                        get: function() {
                            return this["_on" + t3];
                        },
                        set: function(e2) {
                            this["_on" + t3] && (this.removeEventListener(t3, this["_on" + t3]), delete this["_on" + t3]), e2 && this.addEventListener(t3, this["_on" + t3] = e2);
                        },
                        enumerable: !0,
                        configurable: !0
                    });
                }
            }
            function s(e1) {
                return "boolean" != typeof e1 ? new Error("Argument type: " + t2(e1) + ". Please use a boolean.") : (n2 = e1, e1 ? "adapter.js logging disabled" : "adapter.js logging enabled");
            }
            function a(e1) {
                return "boolean" != typeof e1 ? new Error("Argument type: " + t2(e1) + ". Please use a boolean.") : (r2 = !e1, "adapter.js deprecation warnings " + (e1 ? "disabled" : "enabled"));
            }
            function p() {
                if ("object" === ("undefined" == typeof window ? "undefined" : t2(window))) {
                    if (n2) return;
                    "undefined" != typeof console && "function" == typeof console.log && console.log.apply(console, arguments);
                }
            }
            function u(e1, t3) {
                r2 && console.warn(e1 + " is deprecated, please use " + t3 + " instead.");
            }
            function c(e1) {
                var t3 = {
                    browser: null,
                    version: null
                };
                if ((void 0) === e1 || !e1.navigator) return t3.browser = "Not a browser.", t3;
                var { navigator: n3  } = e1;
                if (n3.mozGetUserMedia) t3.browser = "firefox", t3.version = o(n3.userAgent, /Firefox\/(\d+)\./, 1);
                else if (n3.webkitGetUserMedia || !1 === e1.isSecureContext && e1.webkitRTCPeerConnection && !e1.RTCIceGatherer) t3.browser = "chrome", t3.version = o(n3.userAgent, /Chrom(e|ium)\/(\d+)\./, 2);
                else if (n3.mediaDevices && n3.userAgent.match(/Edge\/(\d+).(\d+)$/)) t3.browser = "edge", t3.version = o(n3.userAgent, /Edge\/(\d+).(\d+)$/, 2);
                else {
                    if (!e1.RTCPeerConnection || !n3.userAgent.match(/AppleWebKit\/(\d+)\./)) return t3.browser = "Not a supported browser.", t3;
                    t3.browser = "safari", t3.version = o(n3.userAgent, /AppleWebKit\/(\d+)\./, 1), t3.supportsUnifiedPlan = e1.RTCRtpTransceiver && "currentDirection" in e1.RTCRtpTransceiver.prototype;
                }
                return t3;
            }
            function d(e1) {
                return "[object Object]" === Object.prototype.toString.call(e1);
            }
            function f(t3) {
                return d(t3) ? Object.keys(t3).reduce(function(n3, r6) {
                    var o2 = d(t3[r6]), i5 = o2 ? f(t3[r6]) : t3[r6], s1 = o2 && !Object.keys(i5).length;
                    return (void 0) === i5 || s1 ? n3 : Object.assign(n3, e({
                    }, r6, i5));
                }, {
                }) : t3;
            }
            function l(e1, t3, n3) {
                t3 && !n3.has(t3.id) && (n3.set(t3.id, t3), Object.keys(t3).forEach(function(r6) {
                    r6.endsWith("Id") ? l(e1, e1.get(t3[r6]), n3) : r6.endsWith("Ids") && t3[r6].forEach(function(t4) {
                        l(e1, e1.get(t4), n3);
                    });
                }));
            }
            function v(e1, t3, n3) {
                var r6 = n3 ? "outbound-rtp" : "inbound-rtp", o2 = new Map;
                if (null === t3) return o2;
                var i5 = [];
                return e1.forEach(function(e2) {
                    "track" === e2.type && e2.trackIdentifier === t3.id && i5.push(e2);
                }), i5.forEach(function(t4) {
                    e1.forEach(function(n4) {
                        n4.type === r6 && n4.trackId === t4.id && l(e1, n4, o2);
                    });
                }), o2;
            }
        },
        {
        }
    ],
    "s6SN": [
        function(require, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.shimGetUserMedia = i3;
            var e = t2(require("../utils.js"));
            function r2() {
                if ("function" != typeof WeakMap) return null;
                var e1 = new WeakMap;
                return r2 = function() {
                    return e1;
                }, e1;
            }
            function t2(e1) {
                if (e1 && e1.__esModule) return e1;
                if (null === e1 || "object" != typeof e1 && "function" != typeof e1) return {
                    default: e1
                };
                var t3 = r2();
                if (t3 && t3.has(e1)) return t3.get(e1);
                var o2 = {
                }, n2 = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for(var i3 in e1)if (Object.prototype.hasOwnProperty.call(e1, i3)) {
                    var a = n2 ? Object.getOwnPropertyDescriptor(e1, i3) : null;
                    a && (a.get || a.set) ? Object.defineProperty(o2, i3, a) : o2[i3] = e1[i3];
                }
                return o2.default = e1, t3 && t3.set(e1, o2), o2;
            }
            function o2(e1) {
                return (o2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e2) {
                    return typeof e2;
                } : function(e2) {
                    return e2 && "function" == typeof Symbol && e2.constructor === Symbol && e2 !== Symbol.prototype ? "symbol" : typeof e2;
                })(e1);
            }
            var n2 = e.log;
            function i3(e1, r6) {
                var t3 = e1 && e1.navigator;
                if (t3.mediaDevices) {
                    var i5 = function(e2) {
                        if ("object" !== o2(e2) || e2.mandatory || e2.optional) return e2;
                        var r7 = {
                        };
                        return Object.keys(e2).forEach(function(t4) {
                            if ("require" !== t4 && "advanced" !== t4 && "mediaSource" !== t4) {
                                var n3 = "object" === o2(e2[t4]) ? e2[t4] : {
                                    ideal: e2[t4]
                                };
                                (void 0) !== n3.exact && "number" == typeof n3.exact && (n3.min = n3.max = n3.exact);
                                var i6 = function(e3, r8) {
                                    return e3 ? e3 + r8.charAt(0).toUpperCase() + r8.slice(1) : "deviceId" === r8 ? "sourceId" : r8;
                                };
                                if ((void 0) !== n3.ideal) {
                                    r7.optional = r7.optional || [];
                                    var a = {
                                    };
                                    "number" == typeof n3.ideal ? (a[i6("min", t4)] = n3.ideal, r7.optional.push(a), (a = {
                                    })[i6("max", t4)] = n3.ideal, r7.optional.push(a)) : (a[i6("", t4)] = n3.ideal, r7.optional.push(a));
                                }
                                (void 0) !== n3.exact && "number" != typeof n3.exact ? (r7.mandatory = r7.mandatory || {
                                }, r7.mandatory[i6("", t4)] = n3.exact) : [
                                    "min",
                                    "max"
                                ].forEach(function(e3) {
                                    (void 0) !== n3[e3] && (r7.mandatory = r7.mandatory || {
                                    }, r7.mandatory[i6(e3, t4)] = n3[e3]);
                                });
                            }
                        }), e2.advanced && (r7.optional = (r7.optional || []).concat(e2.advanced)), r7;
                    }, a = function(e2, a1) {
                        if (r6.version >= 61) return a1(e2);
                        if ((e2 = JSON.parse(JSON.stringify(e2))) && "object" === o2(e2.audio)) {
                            var c = function(e3, r7, t4) {
                                r7 in e3 && !(t4 in e3) && (e3[t4] = e3[r7], delete e3[r7]);
                            };
                            c((e2 = JSON.parse(JSON.stringify(e2))).audio, "autoGainControl", "googAutoGainControl"), c(e2.audio, "noiseSuppression", "googNoiseSuppression"), e2.audio = i5(e2.audio);
                        }
                        if (e2 && "object" === o2(e2.video)) {
                            var d = e2.video.facingMode;
                            d = d && ("object" === o2(d) ? d : {
                                ideal: d
                            });
                            var u, s = r6.version < 66;
                            if (d && ("user" === d.exact || "environment" === d.exact || "user" === d.ideal || "environment" === d.ideal) && (!t3.mediaDevices.getSupportedConstraints || !t3.mediaDevices.getSupportedConstraints().facingMode || s)) {
                                if (delete e2.video.facingMode, "environment" === d.exact || "environment" === d.ideal ? u = [
                                    "back",
                                    "rear"
                                ] : "user" !== d.exact && "user" !== d.ideal || (u = [
                                    "front"
                                ]), u) return t3.mediaDevices.enumerateDevices().then(function(r7) {
                                    var t4 = (r7 = r7.filter(function(e3) {
                                        return "videoinput" === e3.kind;
                                    })).find(function(e3) {
                                        return u.some(function(r8) {
                                            return e3.label.toLowerCase().includes(r8);
                                        });
                                    });
                                    return !t4 && r7.length && u.includes("back") && (t4 = r7[r7.length - 1]), t4 && (e2.video.deviceId = d.exact ? {
                                        exact: t4.deviceId
                                    } : {
                                        ideal: t4.deviceId
                                    }), e2.video = i5(e2.video), n2("chrome: " + JSON.stringify(e2)), a1(e2);
                                });
                            }
                            e2.video = i5(e2.video);
                        }
                        return n2("chrome: " + JSON.stringify(e2)), a1(e2);
                    }, c = function(e2) {
                        return r6.version >= 64 ? e2 : {
                            name: ({
                                PermissionDeniedError: "NotAllowedError",
                                PermissionDismissedError: "NotAllowedError",
                                InvalidStateError: "NotAllowedError",
                                DevicesNotFoundError: "NotFoundError",
                                ConstraintNotSatisfiedError: "OverconstrainedError",
                                TrackStartError: "NotReadableError",
                                MediaDeviceFailedDueToShutdown: "NotAllowedError",
                                MediaDeviceKillSwitchOn: "NotAllowedError",
                                TabCaptureError: "AbortError",
                                ScreenCaptureError: "AbortError",
                                DeviceCaptureError: "AbortError"
                            })[e2.name] || e2.name,
                            message: e2.message,
                            constraint: e2.constraint || e2.constraintName,
                            toString: function() {
                                return this.name + (this.message && ": ") + this.message;
                            }
                        };
                    };
                    if (t3.getUserMedia = (function(e2, r7, o3) {
                        a(e2, function(e3) {
                            t3.webkitGetUserMedia(e3, r7, function(e4) {
                                o3 && o3(c(e4));
                            });
                        });
                    }).bind(t3), t3.mediaDevices.getUserMedia) {
                        var d = t3.mediaDevices.getUserMedia.bind(t3.mediaDevices);
                        t3.mediaDevices.getUserMedia = function(e2) {
                            return a(e2, function(e3) {
                                return d(e3).then(function(r7) {
                                    if (e3.audio && !r7.getAudioTracks().length || e3.video && !r7.getVideoTracks().length) throw r7.getTracks().forEach(function(e4) {
                                        e4.stop();
                                    }), new DOMException("", "NotFoundError");
                                    return r7;
                                }, function(e4) {
                                    return Promise.reject(c(e4));
                                });
                            });
                        };
                    }
                }
            }
        },
        {
            "../utils.js": "iSxC"
        }
    ],
    "VHa8": [
        function(require, module, exports) {
            "use strict";
            function e(e1, i3) {
                e1.navigator.mediaDevices && "getDisplayMedia" in e1.navigator.mediaDevices || e1.navigator.mediaDevices && ("function" == typeof i3 ? e1.navigator.mediaDevices.getDisplayMedia = function(a) {
                    return i3(a).then(function(i7) {
                        var t2 = a.video && a.video.width, o2 = a.video && a.video.height, d = a.video && a.video.frameRate;
                        return a.video = {
                            mandatory: {
                                chromeMediaSource: "desktop",
                                chromeMediaSourceId: i7,
                                maxFrameRate: d || 3
                            }
                        }, t2 && (a.video.mandatory.maxWidth = t2), o2 && (a.video.mandatory.maxHeight = o2), e1.navigator.mediaDevices.getUserMedia(a);
                    });
                } : console.error("shimGetDisplayMedia: getSourceId argument is not a function"));
            }
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.shimGetDisplayMedia = e;
        },
        {
        }
    ],
    "uI5X": [
        function(require, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.shimMediaStream = a, exports.shimOnTrack = c1, exports.shimGetSendersWithDtmf = p, exports.shimGetStats = d, exports.shimSenderReceiverGetStats = h, exports.shimAddTrackRemoveTrackWithNative = f, exports.shimAddTrackRemoveTrack = m, exports.shimPeerConnection = u, exports.fixNegotiationNeeded = l, Object.defineProperty(exports, "shimGetUserMedia", {
                enumerable: !0,
                get: function() {
                    return t2.shimGetUserMedia;
                }
            }), Object.defineProperty(exports, "shimGetDisplayMedia", {
                enumerable: !0,
                get: function() {
                    return r2.shimGetDisplayMedia;
                }
            });
            var e = i3(require("../utils.js")), t2 = require("./getusermedia"), r2 = require("./getdisplaymedia");
            function n2() {
                if ("function" != typeof WeakMap) return null;
                var e1 = new WeakMap;
                return n2 = function() {
                    return e1;
                }, e1;
            }
            function i3(e1) {
                if (e1 && e1.__esModule) return e1;
                if (null === e1 || "object" != typeof e1 && "function" != typeof e1) return {
                    default: e1
                };
                var t3 = n2();
                if (t3 && t3.has(e1)) return t3.get(e1);
                var r6 = {
                }, i7 = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for(var o2 in e1)if (Object.prototype.hasOwnProperty.call(e1, o2)) {
                    var s = i7 ? Object.getOwnPropertyDescriptor(e1, o2) : null;
                    s && (s.get || s.set) ? Object.defineProperty(r6, o2, s) : r6[o2] = e1[o2];
                }
                return r6.default = e1, t3 && t3.set(e1, r6), r6;
            }
            function o2(e1, t3, r6) {
                return t3 in e1 ? Object.defineProperty(e1, t3, {
                    value: r6,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e1[t3] = r6, e1;
            }
            function s(e1) {
                return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e2) {
                    return typeof e2;
                } : function(e2) {
                    return e2 && "function" == typeof Symbol && e2.constructor === Symbol && e2 !== Symbol.prototype ? "symbol" : typeof e2;
                })(e1);
            }
            function a(e1) {
                e1.MediaStream = e1.MediaStream || e1.webkitMediaStream;
            }
            function c1(t3) {
                if ("object" !== s(t3) || !t3.RTCPeerConnection || "ontrack" in t3.RTCPeerConnection.prototype) e.wrapPeerConnectionEvent(t3, "track", function(e1) {
                    return e1.transceiver || Object.defineProperty(e1, "transceiver", {
                        value: {
                            receiver: e1.receiver
                        }
                    }), e1;
                });
                else {
                    Object.defineProperty(t3.RTCPeerConnection.prototype, "ontrack", {
                        get: function() {
                            return this._ontrack;
                        },
                        set: function(e1) {
                            this._ontrack && this.removeEventListener("track", this._ontrack), this.addEventListener("track", this._ontrack = e1);
                        },
                        enumerable: !0,
                        configurable: !0
                    });
                    var r6 = t3.RTCPeerConnection.prototype.setRemoteDescription;
                    t3.RTCPeerConnection.prototype.setRemoteDescription = function() {
                        var e1 = this;
                        return this._ontrackpoly || (this._ontrackpoly = function(r7) {
                            r7.stream.addEventListener("addtrack", function(n4) {
                                var i7;
                                i7 = t3.RTCPeerConnection.prototype.getReceivers ? e1.getReceivers().find(function(e2) {
                                    return e2.track && e2.track.id === n4.track.id;
                                }) : {
                                    track: n4.track
                                };
                                var o3 = new Event("track");
                                o3.track = n4.track, o3.receiver = i7, o3.transceiver = {
                                    receiver: i7
                                }, o3.streams = [
                                    r7.stream
                                ], e1.dispatchEvent(o3);
                            }), r7.stream.getTracks().forEach(function(n4) {
                                var i7;
                                i7 = t3.RTCPeerConnection.prototype.getReceivers ? e1.getReceivers().find(function(e2) {
                                    return e2.track && e2.track.id === n4.id;
                                }) : {
                                    track: n4
                                };
                                var o3 = new Event("track");
                                o3.track = n4, o3.receiver = i7, o3.transceiver = {
                                    receiver: i7
                                }, o3.streams = [
                                    r7.stream
                                ], e1.dispatchEvent(o3);
                            });
                        }, this.addEventListener("addstream", this._ontrackpoly)), r6.apply(this, arguments);
                    };
                }
            }
            function p(e1) {
                if ("object" === s(e1) && e1.RTCPeerConnection && !("getSenders" in e1.RTCPeerConnection.prototype) && "createDTMFSender" in e1.RTCPeerConnection.prototype) {
                    var t3 = function(e2, t4) {
                        return {
                            track: t4,
                            get dtmf () {
                                return (void 0) === this._dtmf && ("audio" === t4.kind ? this._dtmf = e2.createDTMFSender(t4) : this._dtmf = null), this._dtmf;
                            },
                            _pc: e2
                        };
                    };
                    if (!e1.RTCPeerConnection.prototype.getSenders) {
                        e1.RTCPeerConnection.prototype.getSenders = function() {
                            return this._senders = this._senders || [], this._senders.slice();
                        };
                        var r7 = e1.RTCPeerConnection.prototype.addTrack;
                        e1.RTCPeerConnection.prototype.addTrack = function(e2, n4) {
                            var i7 = r7.apply(this, arguments);
                            return i7 || (i7 = t3(this, e2), this._senders.push(i7)), i7;
                        };
                        var n4 = e1.RTCPeerConnection.prototype.removeTrack;
                        e1.RTCPeerConnection.prototype.removeTrack = function(e2) {
                            n4.apply(this, arguments);
                            var t4 = this._senders.indexOf(e2);
                            -1 !== t4 && this._senders.splice(t4, 1);
                        };
                    }
                    var i7 = e1.RTCPeerConnection.prototype.addStream;
                    e1.RTCPeerConnection.prototype.addStream = function(e2) {
                        var r8 = this;
                        this._senders = this._senders || [], i7.apply(this, [
                            e2
                        ]), e2.getTracks().forEach(function(e3) {
                            r8._senders.push(t3(r8, e3));
                        });
                    };
                    var o3 = e1.RTCPeerConnection.prototype.removeStream;
                    e1.RTCPeerConnection.prototype.removeStream = function(e2) {
                        var t4 = this;
                        this._senders = this._senders || [], o3.apply(this, [
                            e2
                        ]), e2.getTracks().forEach(function(e3) {
                            var r8 = t4._senders.find(function(t5) {
                                return t5.track === e3;
                            });
                            r8 && t4._senders.splice(t4._senders.indexOf(r8), 1);
                        });
                    };
                } else if ("object" === s(e1) && e1.RTCPeerConnection && "getSenders" in e1.RTCPeerConnection.prototype && "createDTMFSender" in e1.RTCPeerConnection.prototype && e1.RTCRtpSender && !("dtmf" in e1.RTCRtpSender.prototype)) {
                    var a1 = e1.RTCPeerConnection.prototype.getSenders;
                    e1.RTCPeerConnection.prototype.getSenders = function() {
                        var e2 = this, t4 = a1.apply(this, []);
                        return t4.forEach(function(t5) {
                            return t5._pc = e2;
                        }), t4;
                    }, Object.defineProperty(e1.RTCRtpSender.prototype, "dtmf", {
                        get: function() {
                            return (void 0) === this._dtmf && ("audio" === this.track.kind ? this._dtmf = this._pc.createDTMFSender(this.track) : this._dtmf = null), this._dtmf;
                        }
                    });
                }
            }
            function d(e1) {
                if (e1.RTCPeerConnection) {
                    var t4 = e1.RTCPeerConnection.prototype.getStats;
                    e1.RTCPeerConnection.prototype.getStats = function() {
                        var e2 = this, [r8, n5, i8] = arguments;
                        if (arguments.length > 0 && "function" == typeof r8) return t4.apply(this, arguments);
                        if (0 === t4.length && (0 === arguments.length || "function" != typeof r8)) return t4.apply(this, []);
                        var o4 = function(e3) {
                            var t5 = {
                            };
                            return e3.result().forEach(function(e4) {
                                var r9 = {
                                    id: e4.id,
                                    timestamp: e4.timestamp,
                                    type: {
                                        localcandidate: "local-candidate",
                                        remotecandidate: "remote-candidate"
                                    }[e4.type] || e4.type
                                };
                                e4.names().forEach(function(t6) {
                                    r9[t6] = e4.stat(t6);
                                }), t5[r9.id] = r9;
                            }), t5;
                        }, s1 = function(e3) {
                            return new Map(Object.keys(e3).map(function(t5) {
                                return [
                                    t5,
                                    e3[t5]
                                ];
                            }));
                        };
                        if (arguments.length >= 2) return t4.apply(this, [
                            function(e3) {
                                n5(s1(o4(e3)));
                            },
                            r8
                        ]);
                        return new Promise(function(r9, n6) {
                            t4.apply(e2, [
                                function(e3) {
                                    r9(s1(o4(e3)));
                                },
                                n6
                            ]);
                        }).then(n5, i8);
                    };
                }
            }
            function h(t5) {
                if ("object" === s(t5) && t5.RTCPeerConnection && t5.RTCRtpSender && t5.RTCRtpReceiver) {
                    if (!("getStats" in t5.RTCRtpSender.prototype)) {
                        var r8 = t5.RTCPeerConnection.prototype.getSenders;
                        r8 && (t5.RTCPeerConnection.prototype.getSenders = function() {
                            var e1 = this, t6 = r8.apply(this, []);
                            return t6.forEach(function(t7) {
                                return t7._pc = e1;
                            }), t6;
                        });
                        var n5 = t5.RTCPeerConnection.prototype.addTrack;
                        n5 && (t5.RTCPeerConnection.prototype.addTrack = function() {
                            var e1 = n5.apply(this, arguments);
                            return e1._pc = this, e1;
                        }), t5.RTCRtpSender.prototype.getStats = function() {
                            var t6 = this;
                            return this._pc.getStats().then(function(r9) {
                                return e.filterStats(r9, t6.track, !0);
                            });
                        };
                    }
                    if (!("getStats" in t5.RTCRtpReceiver.prototype)) {
                        var i8 = t5.RTCPeerConnection.prototype.getReceivers;
                        i8 && (t5.RTCPeerConnection.prototype.getReceivers = function() {
                            var e1 = this, t6 = i8.apply(this, []);
                            return t6.forEach(function(t7) {
                                return t7._pc = e1;
                            }), t6;
                        }), e.wrapPeerConnectionEvent(t5, "track", function(e1) {
                            return e1.receiver._pc = e1.srcElement, e1;
                        }), t5.RTCRtpReceiver.prototype.getStats = function() {
                            var t6 = this;
                            return this._pc.getStats().then(function(r9) {
                                return e.filterStats(r9, t6.track, !1);
                            });
                        };
                    }
                    if ("getStats" in t5.RTCRtpSender.prototype && "getStats" in t5.RTCRtpReceiver.prototype) {
                        var o4 = t5.RTCPeerConnection.prototype.getStats;
                        t5.RTCPeerConnection.prototype.getStats = function() {
                            if (arguments.length > 0 && arguments[0] instanceof t5.MediaStreamTrack) {
                                var e1, r9, n6, i9 = arguments[0];
                                return this.getSenders().forEach(function(t6) {
                                    t6.track === i9 && (e1 ? n6 = !0 : e1 = t6);
                                }), this.getReceivers().forEach(function(e2) {
                                    return e2.track === i9 && (r9 ? n6 = !0 : r9 = e2), e2.track === i9;
                                }), n6 || e1 && r9 ? Promise.reject(new DOMException("There are more than one sender or receiver for the track.", "InvalidAccessError")) : e1 ? e1.getStats() : r9 ? r9.getStats() : Promise.reject(new DOMException("There is no sender or receiver for the track.", "InvalidAccessError"));
                            }
                            return o4.apply(this, arguments);
                        };
                    }
                }
            }
            function f(e2) {
                e2.RTCPeerConnection.prototype.getLocalStreams = function() {
                    var e3 = this;
                    return this._shimmedLocalStreams = this._shimmedLocalStreams || {
                    }, Object.keys(this._shimmedLocalStreams).map(function(t5) {
                        return e3._shimmedLocalStreams[t5][0];
                    });
                };
                var t5 = e2.RTCPeerConnection.prototype.addTrack;
                e2.RTCPeerConnection.prototype.addTrack = function(e3, r10) {
                    if (!r10) return t5.apply(this, arguments);
                    this._shimmedLocalStreams = this._shimmedLocalStreams || {
                    };
                    var n7 = t5.apply(this, arguments);
                    return this._shimmedLocalStreams[r10.id] ? -1 === this._shimmedLocalStreams[r10.id].indexOf(n7) && this._shimmedLocalStreams[r10.id].push(n7) : this._shimmedLocalStreams[r10.id] = [
                        r10,
                        n7
                    ], n7;
                };
                var r10 = e2.RTCPeerConnection.prototype.addStream;
                e2.RTCPeerConnection.prototype.addStream = function(e3) {
                    var t6 = this;
                    this._shimmedLocalStreams = this._shimmedLocalStreams || {
                    }, e3.getTracks().forEach(function(e4) {
                        if (t6.getSenders().find(function(t7) {
                            return t7.track === e4;
                        })) throw new DOMException("Track already exists.", "InvalidAccessError");
                    });
                    var n7 = this.getSenders();
                    r10.apply(this, arguments);
                    var i10 = this.getSenders().filter(function(e4) {
                        return -1 === n7.indexOf(e4);
                    });
                    this._shimmedLocalStreams[e3.id] = [
                        e3
                    ].concat(i10);
                };
                var n7 = e2.RTCPeerConnection.prototype.removeStream;
                e2.RTCPeerConnection.prototype.removeStream = function(e3) {
                    return this._shimmedLocalStreams = this._shimmedLocalStreams || {
                    }, delete this._shimmedLocalStreams[e3.id], n7.apply(this, arguments);
                };
                var i10 = e2.RTCPeerConnection.prototype.removeTrack;
                e2.RTCPeerConnection.prototype.removeTrack = function(e3) {
                    var t6 = this;
                    return this._shimmedLocalStreams = this._shimmedLocalStreams || {
                    }, e3 && Object.keys(this._shimmedLocalStreams).forEach(function(r11) {
                        var n8 = t6._shimmedLocalStreams[r11].indexOf(e3);
                        -1 !== n8 && t6._shimmedLocalStreams[r11].splice(n8, 1), 1 === t6._shimmedLocalStreams[r11].length && delete t6._shimmedLocalStreams[r11];
                    }), i10.apply(this, arguments);
                };
            }
            function m(e2, t5) {
                if (e2.RTCPeerConnection) {
                    if (e2.RTCPeerConnection.prototype.addTrack && t5.version >= 65) return f(e2);
                    var r10 = e2.RTCPeerConnection.prototype.getLocalStreams;
                    e2.RTCPeerConnection.prototype.getLocalStreams = function() {
                        var e3 = this, t6 = r10.apply(this);
                        return this._reverseStreams = this._reverseStreams || {
                        }, t6.map(function(t7) {
                            return e3._reverseStreams[t7.id];
                        });
                    };
                    var n7 = e2.RTCPeerConnection.prototype.addStream;
                    e2.RTCPeerConnection.prototype.addStream = function(t6) {
                        var r11 = this;
                        if (this._streams = this._streams || {
                        }, this._reverseStreams = this._reverseStreams || {
                        }, t6.getTracks().forEach(function(e3) {
                            if (r11.getSenders().find(function(t7) {
                                return t7.track === e3;
                            })) throw new DOMException("Track already exists.", "InvalidAccessError");
                        }), !this._reverseStreams[t6.id]) {
                            var i10 = new e2.MediaStream(t6.getTracks());
                            this._streams[t6.id] = i10, this._reverseStreams[i10.id] = t6, t6 = i10;
                        }
                        n7.apply(this, [
                            t6
                        ]);
                    };
                    var i11 = e2.RTCPeerConnection.prototype.removeStream;
                    e2.RTCPeerConnection.prototype.removeStream = function(e3) {
                        this._streams = this._streams || {
                        }, this._reverseStreams = this._reverseStreams || {
                        }, i11.apply(this, [
                            this._streams[e3.id] || e3
                        ]), delete this._reverseStreams[this._streams[e3.id] ? this._streams[e3.id].id : e3.id], delete this._streams[e3.id];
                    }, e2.RTCPeerConnection.prototype.addTrack = function(t6, r11) {
                        var n8 = this;
                        if ("closed" === this.signalingState) throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.", "InvalidStateError");
                        var i12 = [].slice.call(arguments, 1);
                        if (1 !== i12.length || !i12[0].getTracks().find(function(e3) {
                            return e3 === t6;
                        })) throw new DOMException("The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.", "NotSupportedError");
                        if (this.getSenders().find(function(e3) {
                            return e3.track === t6;
                        })) throw new DOMException("Track already exists.", "InvalidAccessError");
                        this._streams = this._streams || {
                        }, this._reverseStreams = this._reverseStreams || {
                        };
                        var o5 = this._streams[r11.id];
                        if (o5) o5.addTrack(t6), Promise.resolve().then(function() {
                            n8.dispatchEvent(new Event("negotiationneeded"));
                        });
                        else {
                            var s1 = new e2.MediaStream([
                                t6
                            ]);
                            this._streams[r11.id] = s1, this._reverseStreams[s1.id] = r11, this.addStream(s1);
                        }
                        return this.getSenders().find(function(e3) {
                            return e3.track === t6;
                        });
                    }, [
                        "createOffer",
                        "createAnswer"
                    ].forEach(function(t6) {
                        var r11 = e2.RTCPeerConnection.prototype[t6], n8 = o2({
                        }, t6, function() {
                            var e3 = this, t7 = arguments;
                            return arguments.length && "function" == typeof arguments[0] ? r11.apply(this, [
                                function(r12) {
                                    var n9 = c2(e3, r12);
                                    t7[0].apply(null, [
                                        n9
                                    ]);
                                },
                                function(e4) {
                                    t7[1] && t7[1].apply(null, e4);
                                },
                                arguments[2]
                            ]) : r11.apply(this, arguments).then(function(t8) {
                                return c2(e3, t8);
                            });
                        });
                        e2.RTCPeerConnection.prototype[t6] = n8[t6];
                    });
                    var s2 = e2.RTCPeerConnection.prototype.setLocalDescription;
                    e2.RTCPeerConnection.prototype.setLocalDescription = function() {
                        var e3, t6, r11;
                        return arguments.length && arguments[0].type ? (arguments[0] = (e3 = this, t6 = arguments[0], r11 = t6.sdp, Object.keys(e3._reverseStreams || []).forEach(function(t7) {
                            var n8 = e3._reverseStreams[t7], i12 = e3._streams[n8.id];
                            r11 = r11.replace(new RegExp(n8.id, "g"), i12.id);
                        }), new RTCSessionDescription({
                            type: t6.type,
                            sdp: r11
                        })), s2.apply(this, arguments)) : s2.apply(this, arguments);
                    };
                    var a2 = Object.getOwnPropertyDescriptor(e2.RTCPeerConnection.prototype, "localDescription");
                    Object.defineProperty(e2.RTCPeerConnection.prototype, "localDescription", {
                        get: function() {
                            var e3 = a2.get.apply(this);
                            return "" === e3.type ? e3 : c2(this, e3);
                        }
                    }), e2.RTCPeerConnection.prototype.removeTrack = function(e3) {
                        var t6, r11 = this;
                        if ("closed" === this.signalingState) throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.", "InvalidStateError");
                        if (!e3._pc) throw new DOMException("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.", "TypeError");
                        if (!(e3._pc === this)) throw new DOMException("Sender was not created by this connection.", "InvalidAccessError");
                        this._streams = this._streams || {
                        }, Object.keys(this._streams).forEach(function(n8) {
                            r11._streams[n8].getTracks().find(function(t7) {
                                return e3.track === t7;
                            }) && (t6 = r11._streams[n8]);
                        }), t6 && (1 === t6.getTracks().length ? this.removeStream(this._reverseStreams[t6.id]) : t6.removeTrack(e3.track), this.dispatchEvent(new Event("negotiationneeded")));
                    };
                }
                function c2(e3, t6) {
                    var r11 = t6.sdp;
                    return Object.keys(e3._reverseStreams || []).forEach(function(t7) {
                        var n8 = e3._reverseStreams[t7], i12 = e3._streams[n8.id];
                        r11 = r11.replace(new RegExp(i12.id, "g"), n8.id);
                    }), new RTCSessionDescription({
                        type: t6.type,
                        sdp: r11
                    });
                }
            }
            function u(e2, t5) {
                !e2.RTCPeerConnection && e2.webkitRTCPeerConnection && (e2.RTCPeerConnection = e2.webkitRTCPeerConnection), e2.RTCPeerConnection && t5.version < 53 && [
                    "setLocalDescription",
                    "setRemoteDescription",
                    "addIceCandidate"
                ].forEach(function(t6) {
                    var r11 = e2.RTCPeerConnection.prototype[t6], n8 = o2({
                    }, t6, function() {
                        return arguments[0] = new ("addIceCandidate" === t6 ? e2.RTCIceCandidate : e2.RTCSessionDescription)(arguments[0]), r11.apply(this, arguments);
                    });
                    e2.RTCPeerConnection.prototype[t6] = n8[t6];
                });
            }
            function l(t5, r11) {
                e.wrapPeerConnectionEvent(t5, "negotiationneeded", function(e2) {
                    var t6 = e2.target;
                    if (!(r11.version < 72 || t6.getConfiguration && "plan-b" === t6.getConfiguration().sdpSemantics) || "stable" === t6.signalingState) return e2;
                });
            }
        },
        {
            "../utils.js": "iSxC",
            "./getusermedia": "s6SN",
            "./getdisplaymedia": "VHa8"
        }
    ],
    "NZ1C": [
        function(require, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.filterIceServers = n2;
            var r2 = t2(require("../utils"));
            function e2() {
                if ("function" != typeof WeakMap) return null;
                var r11 = new WeakMap;
                return e2 = function() {
                    return r11;
                }, r11;
            }
            function t2(r11) {
                if (r11 && r11.__esModule) return r11;
                if (null === r11 || "object" != typeof r11 && "function" != typeof r11) return {
                    default: r11
                };
                var t5 = e2();
                if (t5 && t5.has(r11)) return t5.get(r11);
                var n2 = {
                }, u = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for(var i3 in r11)if (Object.prototype.hasOwnProperty.call(r11, i3)) {
                    var f = u ? Object.getOwnPropertyDescriptor(r11, i3) : null;
                    f && (f.get || f.set) ? Object.defineProperty(n2, i3, f) : n2[i3] = r11[i3];
                }
                return n2.default = r11, t5 && t5.set(r11, n2), n2;
            }
            function n2(e3, t5) {
                var n8 = !1;
                return (e3 = JSON.parse(JSON.stringify(e3))).filter(function(e4) {
                    if (e4 && (e4.urls || e4.url)) {
                        var t6 = e4.urls || e4.url;
                        e4.url && !e4.urls && r2.deprecated("RTCIceServer.url", "RTCIceServer.urls");
                        var u = "string" == typeof t6;
                        return u && (t6 = [
                            t6
                        ]), t6 = t6.filter(function(r11) {
                            if (0 === r11.indexOf("stun:")) return !1;
                            var e5 = r11.startsWith("turn") && !r11.startsWith("turn:[") && r11.includes("transport=udp");
                            return e5 && !n8 ? (n8 = !0, !0) : e5 && !n8;
                        }), delete e4.url, e4.urls = u ? t6[0] : t6, !!t6.length;
                    }
                });
            }
        },
        {
            "../utils": "iSxC"
        }
    ],
    "YHvh": [
        function(require, module, exports) {
            "use strict";
            var r2 = {
                generateIdentifier: function() {
                    return Math.random().toString(36).substr(2, 10);
                }
            };
            r2.localCName = r2.generateIdentifier(), r2.splitLines = function(r11) {
                return r11.trim().split("\n").map(function(r12) {
                    return r12.trim();
                });
            }, r2.splitSections = function(r11) {
                return r11.split("\nm=").map(function(r12, e2) {
                    return (e2 > 0 ? "m=" + r12 : r12).trim() + "\r\n";
                });
            }, r2.getDescription = function(e2) {
                var t2 = r2.splitSections(e2);
                return t2 && t2[0];
            }, r2.getMediaSections = function(e2) {
                var t2 = r2.splitSections(e2);
                return t2.shift(), t2;
            }, r2.matchPrefix = function(e2, t2) {
                return r2.splitLines(e2).filter(function(r11) {
                    return 0 === r11.indexOf(t2);
                });
            }, r2.parseCandidate = function(r11) {
                for(var e2, t2 = {
                    foundation: (e2 = 0 === r11.indexOf("a=candidate:") ? r11.substring(12).split(" ") : r11.substring(10).split(" "))[0],
                    component: parseInt(e2[1], 10),
                    protocol: e2[2].toLowerCase(),
                    priority: parseInt(e2[3], 10),
                    ip: e2[4],
                    address: e2[4],
                    port: parseInt(e2[5], 10),
                    type: e2[7]
                }, a3 = 8; a3 < e2.length; a3 += 2)switch(e2[a3]){
                    case "raddr":
                        t2.relatedAddress = e2[a3 + 1];
                        break;
                    case "rport":
                        t2.relatedPort = parseInt(e2[a3 + 1], 10);
                        break;
                    case "tcptype":
                        t2.tcpType = e2[a3 + 1];
                        break;
                    case "ufrag":
                        t2.ufrag = e2[a3 + 1], t2.usernameFragment = e2[a3 + 1];
                        break;
                    default:
                        t2[e2[a3]] = e2[a3 + 1];
                }
                return t2;
            }, r2.writeCandidate = function(r11) {
                var e2 = [];
                e2.push(r11.foundation), e2.push(r11.component), e2.push(r11.protocol.toUpperCase()), e2.push(r11.priority), e2.push(r11.address || r11.ip), e2.push(r11.port);
                var t2 = r11.type;
                return e2.push("typ"), e2.push(t2), "host" !== t2 && r11.relatedAddress && r11.relatedPort && (e2.push("raddr"), e2.push(r11.relatedAddress), e2.push("rport"), e2.push(r11.relatedPort)), r11.tcpType && "tcp" === r11.protocol.toLowerCase() && (e2.push("tcptype"), e2.push(r11.tcpType)), (r11.usernameFragment || r11.ufrag) && (e2.push("ufrag"), e2.push(r11.usernameFragment || r11.ufrag)), "candidate:" + e2.join(" ");
            }, r2.parseIceOptions = function(r11) {
                return r11.substr(14).split(" ");
            }, r2.parseRtpMap = function(r11) {
                var e2 = r11.substr(9).split(" "), t2 = {
                    payloadType: parseInt(e2.shift(), 10)
                };
                return e2 = e2[0].split("/"), t2.name = e2[0], t2.clockRate = parseInt(e2[1], 10), t2.channels = 3 === e2.length ? parseInt(e2[2], 10) : 1, t2.numChannels = t2.channels, t2;
            }, r2.writeRtpMap = function(r11) {
                var e2 = r11.payloadType;
                (void 0) !== r11.preferredPayloadType && (e2 = r11.preferredPayloadType);
                var t2 = r11.channels || r11.numChannels || 1;
                return "a=rtpmap:" + e2 + " " + r11.name + "/" + r11.clockRate + (1 !== t2 ? "/" + t2 : "") + "\r\n";
            }, r2.parseExtmap = function(r11) {
                var e2 = r11.substr(9).split(" ");
                return {
                    id: parseInt(e2[0], 10),
                    direction: e2[0].indexOf("/") > 0 ? e2[0].split("/")[1] : "sendrecv",
                    uri: e2[1]
                };
            }, r2.writeExtmap = function(r11) {
                return "a=extmap:" + (r11.id || r11.preferredId) + (r11.direction && "sendrecv" !== r11.direction ? "/" + r11.direction : "") + " " + r11.uri + "\r\n";
            }, r2.parseFmtp = function(r11) {
                for(var e2, t2 = {
                }, a3 = r11.substr(r11.indexOf(" ") + 1).split(";"), n2 = 0; n2 < a3.length; n2++)t2[(e2 = a3[n2].trim().split("="))[0].trim()] = e2[1];
                return t2;
            }, r2.writeFmtp = function(r11) {
                var e2 = "", t2 = r11.payloadType;
                if ((void 0) !== r11.preferredPayloadType && (t2 = r11.preferredPayloadType), r11.parameters && Object.keys(r11.parameters).length) {
                    var a3 = [];
                    Object.keys(r11.parameters).forEach(function(e3) {
                        r11.parameters[e3] ? a3.push(e3 + "=" + r11.parameters[e3]) : a3.push(e3);
                    }), e2 += "a=fmtp:" + t2 + " " + a3.join(";") + "\r\n";
                }
                return e2;
            }, r2.parseRtcpFb = function(r11) {
                var e2 = r11.substr(r11.indexOf(" ") + 1).split(" ");
                return {
                    type: e2.shift(),
                    parameter: e2.join(" ")
                };
            }, r2.writeRtcpFb = function(r11) {
                var e2 = "", t2 = r11.payloadType;
                return (void 0) !== r11.preferredPayloadType && (t2 = r11.preferredPayloadType), r11.rtcpFeedback && r11.rtcpFeedback.length && r11.rtcpFeedback.forEach(function(r12) {
                    e2 += "a=rtcp-fb:" + t2 + " " + r12.type + (r12.parameter && r12.parameter.length ? " " + r12.parameter : "") + "\r\n";
                }), e2;
            }, r2.parseSsrcMedia = function(r11) {
                var e2 = r11.indexOf(" "), t2 = {
                    ssrc: parseInt(r11.substr(7, e2 - 7), 10)
                }, a4 = r11.indexOf(":", e2);
                return a4 > -1 ? (t2.attribute = r11.substr(e2 + 1, a4 - e2 - 1), t2.value = r11.substr(a4 + 1)) : t2.attribute = r11.substr(e2 + 1), t2;
            }, r2.parseSsrcGroup = function(r11) {
                var e2 = r11.substr(13).split(" ");
                return {
                    semantics: e2.shift(),
                    ssrcs: e2.map(function(r12) {
                        return parseInt(r12, 10);
                    })
                };
            }, r2.getMid = function(e2) {
                var t2 = r2.matchPrefix(e2, "a=mid:")[0];
                if (t2) return t2.substr(6);
            }, r2.parseFingerprint = function(r11) {
                var e2 = r11.substr(14).split(" ");
                return {
                    algorithm: e2[0].toLowerCase(),
                    value: e2[1]
                };
            }, r2.getDtlsParameters = function(e2, t2) {
                return {
                    role: "auto",
                    fingerprints: r2.matchPrefix(e2 + t2, "a=fingerprint:").map(r2.parseFingerprint)
                };
            }, r2.writeDtlsParameters = function(r11, e2) {
                var t2 = "a=setup:" + e2 + "\r\n";
                return r11.fingerprints.forEach(function(r12) {
                    t2 += "a=fingerprint:" + r12.algorithm + " " + r12.value + "\r\n";
                }), t2;
            }, r2.parseCryptoLine = function(r11) {
                var e2 = r11.substr(9).split(" ");
                return {
                    tag: parseInt(e2[0], 10),
                    cryptoSuite: e2[1],
                    keyParams: e2[2],
                    sessionParams: e2.slice(3)
                };
            }, r2.writeCryptoLine = function(e2) {
                return "a=crypto:" + e2.tag + " " + e2.cryptoSuite + " " + ("object" == typeof e2.keyParams ? r2.writeCryptoKeyParams(e2.keyParams) : e2.keyParams) + (e2.sessionParams ? " " + e2.sessionParams.join(" ") : "") + "\r\n";
            }, r2.parseCryptoKeyParams = function(r11) {
                if (0 !== r11.indexOf("inline:")) return null;
                var e2 = r11.substr(7).split("|");
                return {
                    keyMethod: "inline",
                    keySalt: e2[0],
                    lifeTime: e2[1],
                    mkiValue: e2[2] ? e2[2].split(":")[0] : void 0,
                    mkiLength: e2[2] ? e2[2].split(":")[1] : void 0
                };
            }, r2.writeCryptoKeyParams = function(r11) {
                return r11.keyMethod + ":" + r11.keySalt + (r11.lifeTime ? "|" + r11.lifeTime : "") + (r11.mkiValue && r11.mkiLength ? "|" + r11.mkiValue + ":" + r11.mkiLength : "");
            }, r2.getCryptoParameters = function(e2, t2) {
                return r2.matchPrefix(e2 + t2, "a=crypto:").map(r2.parseCryptoLine);
            }, r2.getIceParameters = function(e2, t2) {
                var a4 = r2.matchPrefix(e2 + t2, "a=ice-ufrag:")[0], n2 = r2.matchPrefix(e2 + t2, "a=ice-pwd:")[0];
                return a4 && n2 ? {
                    usernameFragment: a4.substr(12),
                    password: n2.substr(10)
                } : null;
            }, r2.writeIceParameters = function(r11) {
                return "a=ice-ufrag:" + r11.usernameFragment + "\r\na=ice-pwd:" + r11.password + "\r\n";
            }, r2.parseRtpParameters = function(e2) {
                for(var t2 = {
                    codecs: [],
                    headerExtensions: [],
                    fecMechanisms: [],
                    rtcp: []
                }, a4 = r2.splitLines(e2)[0].split(" "), n2 = 3; n2 < a4.length; n2++){
                    var s3 = a4[n2], i3 = r2.matchPrefix(e2, "a=rtpmap:" + s3 + " ")[0];
                    if (i3) {
                        var p = r2.parseRtpMap(i3), c = r2.matchPrefix(e2, "a=fmtp:" + s3 + " ");
                        switch(p.parameters = c.length ? r2.parseFmtp(c[0]) : {
                        }, p.rtcpFeedback = r2.matchPrefix(e2, "a=rtcp-fb:" + s3 + " ").map(r2.parseRtcpFb), t2.codecs.push(p), p.name.toUpperCase()){
                            case "RED":
                            case "ULPFEC":
                                t2.fecMechanisms.push(p.name.toUpperCase());
                        }
                    }
                }
                return r2.matchPrefix(e2, "a=extmap:").forEach(function(e3) {
                    t2.headerExtensions.push(r2.parseExtmap(e3));
                }), t2;
            }, r2.writeRtpDescription = function(e2, t2) {
                var a4 = "";
                a4 += "m=" + e2 + " ", a4 += t2.codecs.length > 0 ? "9" : "0", a4 += " UDP/TLS/RTP/SAVPF ", a4 += t2.codecs.map(function(r11) {
                    return (void 0) !== r11.preferredPayloadType ? r11.preferredPayloadType : r11.payloadType;
                }).join(" ") + "\r\n", a4 += "c=IN IP4 0.0.0.0\r\n", a4 += "a=rtcp:9 IN IP4 0.0.0.0\r\n", t2.codecs.forEach(function(e3) {
                    a4 += r2.writeRtpMap(e3), a4 += r2.writeFmtp(e3), a4 += r2.writeRtcpFb(e3);
                });
                var n2 = 0;
                return t2.codecs.forEach(function(r11) {
                    r11.maxptime > n2 && (n2 = r11.maxptime);
                }), n2 > 0 && (a4 += "a=maxptime:" + n2 + "\r\n"), a4 += "a=rtcp-mux\r\n", t2.headerExtensions && t2.headerExtensions.forEach(function(e3) {
                    a4 += r2.writeExtmap(e3);
                }), a4;
            }, r2.parseRtpEncodingParameters = function(e2) {
                var t2, a4 = [], n2 = r2.parseRtpParameters(e2), s4 = -1 !== n2.fecMechanisms.indexOf("RED"), i12 = -1 !== n2.fecMechanisms.indexOf("ULPFEC"), p = r2.matchPrefix(e2, "a=ssrc:").map(function(e3) {
                    return r2.parseSsrcMedia(e3);
                }).filter(function(r11) {
                    return "cname" === r11.attribute;
                }), c = p.length > 0 && p[0].ssrc, o2 = r2.matchPrefix(e2, "a=ssrc-group:FID").map(function(r11) {
                    return r11.substr(17).split(" ").map(function(r12) {
                        return parseInt(r12, 10);
                    });
                });
                o2.length > 0 && o2[0].length > 1 && o2[0][0] === c && (t2 = o2[0][1]), n2.codecs.forEach(function(r11) {
                    if ("RTX" === r11.name.toUpperCase() && r11.parameters.apt) {
                        var e3 = {
                            ssrc: c,
                            codecPayloadType: parseInt(r11.parameters.apt, 10)
                        };
                        c && t2 && (e3.rtx = {
                            ssrc: t2
                        }), a4.push(e3), s4 && ((e3 = JSON.parse(JSON.stringify(e3))).fec = {
                            ssrc: c,
                            mechanism: i12 ? "red+ulpfec" : "red"
                        }, a4.push(e3));
                    }
                }), 0 === a4.length && c && a4.push({
                    ssrc: c
                });
                var u = r2.matchPrefix(e2, "b=");
                return u.length && (u = 0 === u[0].indexOf("b=TIAS:") ? parseInt(u[0].substr(7), 10) : 0 === u[0].indexOf("b=AS:") ? 1000 * parseInt(u[0].substr(5), 10) * 0.95 - 16000 : void 0, a4.forEach(function(r11) {
                    r11.maxBitrate = u;
                })), a4;
            }, r2.parseRtcpParameters = function(e2) {
                var t2 = {
                }, a4 = r2.matchPrefix(e2, "a=ssrc:").map(function(e4) {
                    return r2.parseSsrcMedia(e4);
                }).filter(function(r11) {
                    return "cname" === r11.attribute;
                })[0];
                a4 && (t2.cname = a4.value, t2.ssrc = a4.ssrc);
                var n2 = r2.matchPrefix(e2, "a=rtcp-rsize");
                t2.reducedSize = n2.length > 0, t2.compound = 0 === n2.length;
                var s4 = r2.matchPrefix(e2, "a=rtcp-mux");
                return t2.mux = s4.length > 0, t2;
            }, r2.parseMsid = function(e2) {
                var t2, a4 = r2.matchPrefix(e2, "a=msid:");
                if (1 === a4.length) return {
                    stream: (t2 = a4[0].substr(7).split(" "))[0],
                    track: t2[1]
                };
                var n2 = r2.matchPrefix(e2, "a=ssrc:").map(function(e4) {
                    return r2.parseSsrcMedia(e4);
                }).filter(function(r11) {
                    return "msid" === r11.attribute;
                });
                return n2.length > 0 ? {
                    stream: (t2 = n2[0].value.split(" "))[0],
                    track: t2[1]
                } : void 0;
            }, r2.parseSctpDescription = function(e2) {
                var t2, a4 = r2.parseMLine(e2), n2 = r2.matchPrefix(e2, "a=max-message-size:");
                n2.length > 0 && (t2 = parseInt(n2[0].substr(19), 10)), isNaN(t2) && (t2 = 65536);
                var s4 = r2.matchPrefix(e2, "a=sctp-port:");
                if (s4.length > 0) return {
                    port: parseInt(s4[0].substr(12), 10),
                    protocol: a4.fmt,
                    maxMessageSize: t2
                };
                if (r2.matchPrefix(e2, "a=sctpmap:").length > 0) {
                    var i12 = r2.matchPrefix(e2, "a=sctpmap:")[0].substr(10).split(" ");
                    return {
                        port: parseInt(i12[0], 10),
                        protocol: i12[1],
                        maxMessageSize: t2
                    };
                }
            }, r2.writeSctpDescription = function(r11, e2) {
                var t2 = [];
                return t2 = "DTLS/SCTP" !== r11.protocol ? [
                    "m=" + r11.kind + " 9 " + r11.protocol + " " + e2.protocol + "\r\n",
                    "c=IN IP4 0.0.0.0\r\n",
                    "a=sctp-port:" + e2.port + "\r\n"
                ] : [
                    "m=" + r11.kind + " 9 " + r11.protocol + " " + e2.port + "\r\n",
                    "c=IN IP4 0.0.0.0\r\n",
                    "a=sctpmap:" + e2.port + " " + e2.protocol + " 65535\r\n"
                ], (void 0) !== e2.maxMessageSize && t2.push("a=max-message-size:" + e2.maxMessageSize + "\r\n"), t2.join("");
            }, r2.generateSessionId = function() {
                return Math.random().toString().substr(2, 21);
            }, r2.writeSessionBoilerplate = function(e2, t2, a4) {
                var n2 = (void 0) !== t2 ? t2 : 2;
                return "v=0\r\no=" + (a4 || "thisisadapterortc") + " " + (e2 || r2.generateSessionId()) + " " + n2 + " IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\n";
            }, r2.writeMediaSection = function(e2, t2, a4, n2) {
                var s4 = r2.writeRtpDescription(e2.kind, t2);
                if (s4 += r2.writeIceParameters(e2.iceGatherer.getLocalParameters()), s4 += r2.writeDtlsParameters(e2.dtlsTransport.getLocalParameters(), "offer" === a4 ? "actpass" : "active"), s4 += "a=mid:" + e2.mid + "\r\n", e2.direction ? s4 += "a=" + e2.direction + "\r\n" : e2.rtpSender && e2.rtpReceiver ? s4 += "a=sendrecv\r\n" : e2.rtpSender ? s4 += "a=sendonly\r\n" : e2.rtpReceiver ? s4 += "a=recvonly\r\n" : s4 += "a=inactive\r\n", e2.rtpSender) {
                    var i13 = "msid:" + n2.id + " " + e2.rtpSender.track.id + "\r\n";
                    s4 += "a=" + i13, s4 += "a=ssrc:" + e2.sendEncodingParameters[0].ssrc + " " + i13, e2.sendEncodingParameters[0].rtx && (s4 += "a=ssrc:" + e2.sendEncodingParameters[0].rtx.ssrc + " " + i13, s4 += "a=ssrc-group:FID " + e2.sendEncodingParameters[0].ssrc + " " + e2.sendEncodingParameters[0].rtx.ssrc + "\r\n");
                }
                return s4 += "a=ssrc:" + e2.sendEncodingParameters[0].ssrc + " cname:" + r2.localCName + "\r\n", e2.rtpSender && e2.sendEncodingParameters[0].rtx && (s4 += "a=ssrc:" + e2.sendEncodingParameters[0].rtx.ssrc + " cname:" + r2.localCName + "\r\n"), s4;
            }, r2.getDirection = function(e2, t2) {
                for(var a4 = r2.splitLines(e2), n2 = 0; n2 < a4.length; n2++)switch(a4[n2]){
                    case "a=sendrecv":
                    case "a=sendonly":
                    case "a=recvonly":
                    case "a=inactive":
                        return a4[n2].substr(2);
                }
                return t2 ? r2.getDirection(t2) : "sendrecv";
            }, r2.getKind = function(e2) {
                return r2.splitLines(e2)[0].split(" ")[0].substr(2);
            }, r2.isRejected = function(r11) {
                return "0" === r11.split(" ", 2)[1];
            }, r2.parseMLine = function(e2) {
                var t2 = r2.splitLines(e2)[0].substr(2).split(" ");
                return {
                    kind: t2[0],
                    port: parseInt(t2[1], 10),
                    protocol: t2[2],
                    fmt: t2.slice(3).join(" ")
                };
            }, r2.parseOLine = function(e2) {
                var t2 = r2.matchPrefix(e2, "o=")[0].substr(2).split(" ");
                return {
                    username: t2[0],
                    sessionId: t2[1],
                    sessionVersion: parseInt(t2[2], 10),
                    netType: t2[3],
                    addressType: t2[4],
                    address: t2[5]
                };
            }, r2.isValidSDP = function(e2) {
                if ("string" != typeof e2 || 0 === e2.length) return !1;
                for(var t2 = r2.splitLines(e2), a4 = 0; a4 < t2.length; a4++)if (t2[a4].length < 2 || "=" !== t2[a4].charAt(1)) return !1;
                return !0;
            }, "object" == typeof module && (module.exports = r2);
        },
        {
        }
    ],
    "NJ2u": [
        function(require, module, exports) {
            "use strict";
            var e2 = require("sdp");
            function t2(e4) {
                return ({
                    inboundrtp: "inbound-rtp",
                    outboundrtp: "outbound-rtp",
                    candidatepair: "candidate-pair",
                    localcandidate: "local-candidate",
                    remotecandidate: "remote-candidate"
                })[e4.type] || e4.type;
            }
            function r2(t5, r11, n2, a4, i14) {
                var s4 = e2.writeRtpDescription(t5.kind, r11);
                if (s4 += e2.writeIceParameters(t5.iceGatherer.getLocalParameters()), s4 += e2.writeDtlsParameters(t5.dtlsTransport.getLocalParameters(), "offer" === n2 ? "actpass" : i14 || "active"), s4 += "a=mid:" + t5.mid + "\r\n", t5.rtpSender && t5.rtpReceiver ? s4 += "a=sendrecv\r\n" : t5.rtpSender ? s4 += "a=sendonly\r\n" : t5.rtpReceiver ? s4 += "a=recvonly\r\n" : s4 += "a=inactive\r\n", t5.rtpSender) {
                    var o2 = t5.rtpSender._initialTrackId || t5.rtpSender.track.id;
                    t5.rtpSender._initialTrackId = o2;
                    var c = "msid:" + (a4 ? a4.id : "-") + " " + o2 + "\r\n";
                    s4 += "a=" + c, s4 += "a=ssrc:" + t5.sendEncodingParameters[0].ssrc + " " + c, t5.sendEncodingParameters[0].rtx && (s4 += "a=ssrc:" + t5.sendEncodingParameters[0].rtx.ssrc + " " + c, s4 += "a=ssrc-group:FID " + t5.sendEncodingParameters[0].ssrc + " " + t5.sendEncodingParameters[0].rtx.ssrc + "\r\n");
                }
                return s4 += "a=ssrc:" + t5.sendEncodingParameters[0].ssrc + " cname:" + e2.localCName + "\r\n", t5.rtpSender && t5.sendEncodingParameters[0].rtx && (s4 += "a=ssrc:" + t5.sendEncodingParameters[0].rtx.ssrc + " cname:" + e2.localCName + "\r\n"), s4;
            }
            function n2(e4, t5) {
                var r11 = !1;
                return (e4 = JSON.parse(JSON.stringify(e4))).filter(function(e5) {
                    if (e5 && (e5.urls || e5.url)) {
                        var n8 = e5.urls || e5.url;
                        e5.url && !e5.urls && console.warn("RTCIceServer.url is deprecated! Use urls instead.");
                        var a4 = "string" == typeof n8;
                        return a4 && (n8 = [
                            n8
                        ]), n8 = n8.filter(function(e6) {
                            return 0 === e6.indexOf("turn:") && -1 !== e6.indexOf("transport=udp") && -1 === e6.indexOf("turn:[") && !r11 ? (r11 = !0, !0) : 0 === e6.indexOf("stun:") && t5 >= 14393 && -1 === e6.indexOf("?transport=udp");
                        }), delete e5.url, e5.urls = a4 ? n8[0] : n8, !!n8.length;
                    }
                });
            }
            function a5(e4, t5) {
                var r11 = {
                    codecs: [],
                    headerExtensions: [],
                    fecMechanisms: []
                }, n9 = function(e5, t7) {
                    e5 = parseInt(e5, 10);
                    for(var r12 = 0; r12 < t7.length; r12++)if (t7[r12].payloadType === e5 || t7[r12].preferredPayloadType === e5) return t7[r12];
                }, a6 = function(e5, t7, r12, a7) {
                    var i14 = n9(e5.parameters.apt, r12), s4 = n9(t7.parameters.apt, a7);
                    return i14 && s4 && i14.name.toLowerCase() === s4.name.toLowerCase();
                };
                return e4.codecs.forEach(function(n10) {
                    for(var i14 = 0; i14 < t5.codecs.length; i14++){
                        var s4 = t5.codecs[i14];
                        if (n10.name.toLowerCase() === s4.name.toLowerCase() && n10.clockRate === s4.clockRate) {
                            if ("rtx" === n10.name.toLowerCase() && n10.parameters && s4.parameters.apt && !a6(n10, s4, e4.codecs, t5.codecs)) continue;
                            (s4 = JSON.parse(JSON.stringify(s4))).numChannels = Math.min(n10.numChannels, s4.numChannels), r11.codecs.push(s4), s4.rtcpFeedback = s4.rtcpFeedback.filter(function(e5) {
                                for(var t7 = 0; t7 < n10.rtcpFeedback.length; t7++)if (n10.rtcpFeedback[t7].type === e5.type && n10.rtcpFeedback[t7].parameter === e5.parameter) return !0;
                                return !1;
                            });
                            break;
                        }
                    }
                }), e4.headerExtensions.forEach(function(e5) {
                    for(var n10 = 0; n10 < t5.headerExtensions.length; n10++){
                        var a7 = t5.headerExtensions[n10];
                        if (e5.uri === a7.uri) {
                            r11.headerExtensions.push(a7);
                            break;
                        }
                    }
                }), r11;
            }
            function i14(e4, t5, r11) {
                return -1 !== ({
                    offer: {
                        setLocalDescription: [
                            "stable",
                            "have-local-offer"
                        ],
                        setRemoteDescription: [
                            "stable",
                            "have-remote-offer"
                        ]
                    },
                    answer: {
                        setLocalDescription: [
                            "have-remote-offer",
                            "have-local-pranswer"
                        ],
                        setRemoteDescription: [
                            "have-local-offer",
                            "have-remote-pranswer"
                        ]
                    }
                })[t5][e4].indexOf(r11);
            }
            function s5(e4, t5) {
                var r11 = e4.getRemoteCandidates().find(function(e5) {
                    return t5.foundation === e5.foundation && t5.ip === e5.ip && t5.port === e5.port && t5.priority === e5.priority && t5.protocol === e5.protocol && t5.type === e5.type;
                });
                return r11 || e4.addRemoteCandidate(t5), !r11;
            }
            function o5(e4, t5) {
                var r11 = new Error(t5);
                return r11.name = e4, r11.code = ({
                    NotSupportedError: 9,
                    InvalidStateError: 11,
                    InvalidAccessError: 15,
                    TypeError: void 0,
                    OperationError: void 0
                })[e4], r11;
            }
            module.exports = function(c, d) {
                function p(e4, t5) {
                    t5.addTrack(e4), t5.dispatchEvent(new c.MediaStreamTrackEvent("addtrack", {
                        track: e4
                    }));
                }
                function l(e4, t5, r11, n9) {
                    var a6 = new Event("track");
                    a6.track = t5, a6.receiver = r11, a6.transceiver = {
                        receiver: r11
                    }, a6.streams = n9, c.setTimeout(function() {
                        e4._dispatchEvent("track", a6);
                    });
                }
                var f = function(t5) {
                    var r11 = this, a6 = document.createDocumentFragment();
                    if ([
                        "addEventListener",
                        "removeEventListener",
                        "dispatchEvent"
                    ].forEach(function(e4) {
                        r11[e4] = a6[e4].bind(a6);
                    }), this.canTrickleIceCandidates = null, this.needNegotiation = !1, this.localStreams = [], this.remoteStreams = [], this._localDescription = null, this._remoteDescription = null, this.signalingState = "stable", this.iceConnectionState = "new", this.connectionState = "new", this.iceGatheringState = "new", t5 = JSON.parse(JSON.stringify(t5 || {
                    })), this.usingBundle = "max-bundle" === t5.bundlePolicy, "negotiate" === t5.rtcpMuxPolicy) throw o5("NotSupportedError", "rtcpMuxPolicy 'negotiate' is not supported");
                    switch(t5.rtcpMuxPolicy || (t5.rtcpMuxPolicy = "require"), t5.iceTransportPolicy){
                        case "all":
                        case "relay":
                            break;
                        default:
                            t5.iceTransportPolicy = "all";
                    }
                    switch(t5.bundlePolicy){
                        case "balanced":
                        case "max-compat":
                        case "max-bundle":
                            break;
                        default:
                            t5.bundlePolicy = "balanced";
                    }
                    if (t5.iceServers = n2(t5.iceServers || [], d), this._iceGatherers = [], t5.iceCandidatePoolSize) for(var i15 = t5.iceCandidatePoolSize; i15 > 0; i15--)this._iceGatherers.push(new c.RTCIceGatherer({
                        iceServers: t5.iceServers,
                        gatherPolicy: t5.iceTransportPolicy
                    }));
                    else t5.iceCandidatePoolSize = 0;
                    this._config = t5, this.transceivers = [], this._sdpSessionId = e2.generateSessionId(), this._sdpSessionVersion = 0, this._dtlsRole = void 0, this._isClosed = !1;
                };
                Object.defineProperty(f.prototype, "localDescription", {
                    configurable: !0,
                    get: function() {
                        return this._localDescription;
                    }
                }), Object.defineProperty(f.prototype, "remoteDescription", {
                    configurable: !0,
                    get: function() {
                        return this._remoteDescription;
                    }
                }), f.prototype.onicecandidate = null, f.prototype.onaddstream = null, f.prototype.ontrack = null, f.prototype.onremovestream = null, f.prototype.onsignalingstatechange = null, f.prototype.oniceconnectionstatechange = null, f.prototype.onconnectionstatechange = null, f.prototype.onicegatheringstatechange = null, f.prototype.onnegotiationneeded = null, f.prototype.ondatachannel = null, f.prototype._dispatchEvent = function(e4, t5) {
                    this._isClosed || (this.dispatchEvent(t5), "function" == typeof this["on" + e4] && this["on" + e4](t5));
                }, f.prototype._emitGatheringStateChange = function() {
                    var e4 = new Event("icegatheringstatechange");
                    this._dispatchEvent("icegatheringstatechange", e4);
                }, f.prototype.getConfiguration = function() {
                    return this._config;
                }, f.prototype.getLocalStreams = function() {
                    return this.localStreams;
                }, f.prototype.getRemoteStreams = function() {
                    return this.remoteStreams;
                }, f.prototype._createTransceiver = function(e4, t5) {
                    var r11 = this.transceivers.length > 0, n9 = {
                        track: null,
                        iceGatherer: null,
                        iceTransport: null,
                        dtlsTransport: null,
                        localCapabilities: null,
                        remoteCapabilities: null,
                        rtpSender: null,
                        rtpReceiver: null,
                        kind: e4,
                        mid: null,
                        sendEncodingParameters: null,
                        recvEncodingParameters: null,
                        stream: null,
                        associatedRemoteMediaStreams: [],
                        wantReceive: !0
                    };
                    if (this.usingBundle && r11) n9.iceTransport = this.transceivers[0].iceTransport, n9.dtlsTransport = this.transceivers[0].dtlsTransport;
                    else {
                        var a6 = this._createIceAndDtlsTransports();
                        n9.iceTransport = a6.iceTransport, n9.dtlsTransport = a6.dtlsTransport;
                    }
                    return t5 || this.transceivers.push(n9), n9;
                }, f.prototype.addTrack = function(e4, t5) {
                    if (this._isClosed) throw o5("InvalidStateError", "Attempted to call addTrack on a closed peerconnection.");
                    var r11;
                    if (this.transceivers.find(function(t7) {
                        return t7.track === e4;
                    })) throw o5("InvalidAccessError", "Track already exists.");
                    for(var n9 = 0; n9 < this.transceivers.length; n9++)this.transceivers[n9].track || this.transceivers[n9].kind !== e4.kind || (r11 = this.transceivers[n9]);
                    return r11 || (r11 = this._createTransceiver(e4.kind)), this._maybeFireNegotiationNeeded(), -1 === this.localStreams.indexOf(t5) && this.localStreams.push(t5), r11.track = e4, r11.stream = t5, r11.rtpSender = new c.RTCRtpSender(e4, r11.dtlsTransport), r11.rtpSender;
                }, f.prototype.addStream = function(e4) {
                    var t5 = this;
                    if (d >= 15025) e4.getTracks().forEach(function(r11) {
                        t5.addTrack(r11, e4);
                    });
                    else {
                        var r11 = e4.clone();
                        e4.getTracks().forEach(function(e5, t7) {
                            var n9 = r11.getTracks()[t7];
                            e5.addEventListener("enabled", function(e6) {
                                n9.enabled = e6.enabled;
                            });
                        }), r11.getTracks().forEach(function(e5) {
                            t5.addTrack(e5, r11);
                        });
                    }
                }, f.prototype.removeTrack = function(e4) {
                    if (this._isClosed) throw o5("InvalidStateError", "Attempted to call removeTrack on a closed peerconnection.");
                    if (!(e4 instanceof c.RTCRtpSender)) throw new TypeError("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.");
                    var t5 = this.transceivers.find(function(t7) {
                        return t7.rtpSender === e4;
                    });
                    if (!t5) throw o5("InvalidAccessError", "Sender was not created by this connection.");
                    var r12 = t5.stream;
                    t5.rtpSender.stop(), t5.rtpSender = null, t5.track = null, t5.stream = null, -1 === this.transceivers.map(function(e5) {
                        return e5.stream;
                    }).indexOf(r12) && this.localStreams.indexOf(r12) > -1 && this.localStreams.splice(this.localStreams.indexOf(r12), 1), this._maybeFireNegotiationNeeded();
                }, f.prototype.removeStream = function(e4) {
                    var t5 = this;
                    e4.getTracks().forEach(function(e5) {
                        var r12 = t5.getSenders().find(function(t7) {
                            return t7.track === e5;
                        });
                        r12 && t5.removeTrack(r12);
                    });
                }, f.prototype.getSenders = function() {
                    return this.transceivers.filter(function(e4) {
                        return !!e4.rtpSender;
                    }).map(function(e4) {
                        return e4.rtpSender;
                    });
                }, f.prototype.getReceivers = function() {
                    return this.transceivers.filter(function(e4) {
                        return !!e4.rtpReceiver;
                    }).map(function(e4) {
                        return e4.rtpReceiver;
                    });
                }, f.prototype._createIceGatherer = function(e4, t5) {
                    var r12 = this;
                    if (t5 && e4 > 0) return this.transceivers[0].iceGatherer;
                    if (this._iceGatherers.length) return this._iceGatherers.shift();
                    var n9 = new c.RTCIceGatherer({
                        iceServers: this._config.iceServers,
                        gatherPolicy: this._config.iceTransportPolicy
                    });
                    return Object.defineProperty(n9, "state", {
                        value: "new",
                        writable: !0
                    }), this.transceivers[e4].bufferedCandidateEvents = [], this.transceivers[e4].bufferCandidates = function(t7) {
                        var a8 = !t7.candidate || 0 === Object.keys(t7.candidate).length;
                        n9.state = a8 ? "completed" : "gathering", null !== r12.transceivers[e4].bufferedCandidateEvents && r12.transceivers[e4].bufferedCandidateEvents.push(t7);
                    }, n9.addEventListener("localcandidate", this.transceivers[e4].bufferCandidates), n9;
                }, f.prototype._gather = function(t5, r12) {
                    var n9 = this, a8 = this.transceivers[r12].iceGatherer;
                    if (!a8.onlocalcandidate) {
                        var i15 = this.transceivers[r12].bufferedCandidateEvents;
                        this.transceivers[r12].bufferedCandidateEvents = null, a8.removeEventListener("localcandidate", this.transceivers[r12].bufferCandidates), a8.onlocalcandidate = function(i16) {
                            if (!(n9.usingBundle && r12 > 0)) {
                                var s6 = new Event("icecandidate");
                                s6.candidate = {
                                    sdpMid: t5,
                                    sdpMLineIndex: r12
                                };
                                var o6 = i16.candidate, c1 = !o6 || 0 === Object.keys(o6).length;
                                if (c1) "new" !== a8.state && "gathering" !== a8.state || (a8.state = "completed");
                                else {
                                    "new" === a8.state && (a8.state = "gathering"), o6.component = 1, o6.ufrag = a8.getLocalParameters().usernameFragment;
                                    var d1 = e2.writeCandidate(o6);
                                    s6.candidate = Object.assign(s6.candidate, e2.parseCandidate(d1)), s6.candidate.candidate = d1, s6.candidate.toJSON = function() {
                                        return {
                                            candidate: s6.candidate.candidate,
                                            sdpMid: s6.candidate.sdpMid,
                                            sdpMLineIndex: s6.candidate.sdpMLineIndex,
                                            usernameFragment: s6.candidate.usernameFragment
                                        };
                                    };
                                }
                                var p1 = e2.getMediaSections(n9._localDescription.sdp);
                                p1[s6.candidate.sdpMLineIndex] += c1 ? "a=end-of-candidates\r\n" : "a=" + s6.candidate.candidate + "\r\n", n9._localDescription.sdp = e2.getDescription(n9._localDescription.sdp) + p1.join("");
                                var l1 = n9.transceivers.every(function(e4) {
                                    return e4.iceGatherer && "completed" === e4.iceGatherer.state;
                                });
                                "gathering" !== n9.iceGatheringState && (n9.iceGatheringState = "gathering", n9._emitGatheringStateChange()), c1 || n9._dispatchEvent("icecandidate", s6), l1 && (n9._dispatchEvent("icecandidate", new Event("icecandidate")), n9.iceGatheringState = "complete", n9._emitGatheringStateChange());
                            }
                        }, c.setTimeout(function() {
                            i15.forEach(function(e4) {
                                a8.onlocalcandidate(e4);
                            });
                        }, 0);
                    }
                }, f.prototype._createIceAndDtlsTransports = function() {
                    var e4 = this, t5 = new c.RTCIceTransport(null);
                    t5.onicestatechange = function() {
                        e4._updateIceConnectionState(), e4._updateConnectionState();
                    };
                    var r12 = new c.RTCDtlsTransport(t5);
                    return r12.ondtlsstatechange = function() {
                        e4._updateConnectionState();
                    }, r12.onerror = function() {
                        Object.defineProperty(r12, "state", {
                            value: "failed",
                            writable: !0
                        }), e4._updateConnectionState();
                    }, {
                        iceTransport: t5,
                        dtlsTransport: r12
                    };
                }, f.prototype._disposeIceAndDtlsTransports = function(e4) {
                    var t5 = this.transceivers[e4].iceGatherer;
                    t5 && (delete t5.onlocalcandidate, delete this.transceivers[e4].iceGatherer);
                    var r12 = this.transceivers[e4].iceTransport;
                    r12 && (delete r12.onicestatechange, delete this.transceivers[e4].iceTransport);
                    var n9 = this.transceivers[e4].dtlsTransport;
                    n9 && (delete n9.ondtlsstatechange, delete n9.onerror, delete this.transceivers[e4].dtlsTransport);
                }, f.prototype._transceive = function(t5, r12, n9) {
                    var i16 = a5(t5.localCapabilities, t5.remoteCapabilities);
                    r12 && t5.rtpSender && (i16.encodings = t5.sendEncodingParameters, i16.rtcp = {
                        cname: e2.localCName,
                        compound: t5.rtcpParameters.compound
                    }, t5.recvEncodingParameters.length && (i16.rtcp.ssrc = t5.recvEncodingParameters[0].ssrc), t5.rtpSender.send(i16)), n9 && t5.rtpReceiver && i16.codecs.length > 0 && ("video" === t5.kind && t5.recvEncodingParameters && d < 15019 && t5.recvEncodingParameters.forEach(function(e4) {
                        delete e4.rtx;
                    }), t5.recvEncodingParameters.length ? i16.encodings = t5.recvEncodingParameters : i16.encodings = [
                        {
                        }
                    ], i16.rtcp = {
                        compound: t5.rtcpParameters.compound
                    }, t5.rtcpParameters.cname && (i16.rtcp.cname = t5.rtcpParameters.cname), t5.sendEncodingParameters.length && (i16.rtcp.ssrc = t5.sendEncodingParameters[0].ssrc), t5.rtpReceiver.receive(i16));
                }, f.prototype.setLocalDescription = function(t5) {
                    var r12, n9, s7 = this;
                    if (-1 === [
                        "offer",
                        "answer"
                    ].indexOf(t5.type)) return Promise.reject(o5("TypeError", 'Unsupported type "' + t5.type + '"'));
                    if (!i14("setLocalDescription", t5.type, s7.signalingState) || s7._isClosed) return Promise.reject(o5("InvalidStateError", "Can not set local " + t5.type + " in state " + s7.signalingState));
                    if ("offer" === t5.type) r12 = e2.splitSections(t5.sdp), n9 = r12.shift(), r12.forEach(function(t7, r13) {
                        var n10 = e2.parseRtpParameters(t7);
                        s7.transceivers[r13].localCapabilities = n10;
                    }), s7.transceivers.forEach(function(e4, t7) {
                        s7._gather(e4.mid, t7);
                    });
                    else if ("answer" === t5.type) {
                        r12 = e2.splitSections(s7._remoteDescription.sdp), n9 = r12.shift();
                        var c2 = e2.matchPrefix(n9, "a=ice-lite").length > 0;
                        r12.forEach(function(t7, r13) {
                            var i16 = s7.transceivers[r13], o7 = i16.iceGatherer, d2 = i16.iceTransport, p2 = i16.dtlsTransport, l2 = i16.localCapabilities, f1 = i16.remoteCapabilities;
                            if (!(e2.isRejected(t7) && 0 === e2.matchPrefix(t7, "a=bundle-only").length) && !i16.rejected) {
                                var u = e2.getIceParameters(t7, n9), v = e2.getDtlsParameters(t7, n9);
                                c2 && (v.role = "server"), s7.usingBundle && 0 !== r13 || (s7._gather(i16.mid, r13), "new" === d2.state && d2.start(o7, u, c2 ? "controlling" : "controlled"), "new" === p2.state && p2.start(v));
                                var h = a5(l2, f1);
                                s7._transceive(i16, h.codecs.length > 0, !1);
                            }
                        });
                    }
                    return s7._localDescription = {
                        type: t5.type,
                        sdp: t5.sdp
                    }, "offer" === t5.type ? s7._updateSignalingState("have-local-offer") : s7._updateSignalingState("stable"), Promise.resolve();
                }, f.prototype.setRemoteDescription = function(t5) {
                    var r12 = this;
                    if (-1 === [
                        "offer",
                        "answer"
                    ].indexOf(t5.type)) return Promise.reject(o5("TypeError", 'Unsupported type "' + t5.type + '"'));
                    if (!i14("setRemoteDescription", t5.type, r12.signalingState) || r12._isClosed) return Promise.reject(o5("InvalidStateError", "Can not set remote " + t5.type + " in state " + r12.signalingState));
                    var n9 = {
                    };
                    r12.remoteStreams.forEach(function(e4) {
                        n9[e4.id] = e4;
                    });
                    var f1 = [], u = e2.splitSections(t5.sdp), v = u.shift(), h = e2.matchPrefix(v, "a=ice-lite").length > 0, m = e2.matchPrefix(v, "a=group:BUNDLE ").length > 0;
                    r12.usingBundle = m;
                    var g = e2.matchPrefix(v, "a=ice-options:")[0];
                    return r12.canTrickleIceCandidates = !!g && g.substr(14).split(" ").indexOf("trickle") >= 0, u.forEach(function(i16, o7) {
                        var l2 = e2.splitLines(i16), u1 = e2.getKind(i16), g1 = e2.isRejected(i16) && 0 === e2.matchPrefix(i16, "a=bundle-only").length, y = l2[0].substr(2).split(" ")[2], S = e2.getDirection(i16, v), T = e2.parseMsid(i16), E = e2.getMid(i16) || e2.generateIdentifier();
                        if (g1 || "application" === u1 && ("DTLS/SCTP" === y || "UDP/DTLS/SCTP" === y)) r12.transceivers[o7] = {
                            mid: E,
                            kind: u1,
                            protocol: y,
                            rejected: !0
                        };
                        else {
                            var C, P, w, R, _, k, b, x, D;
                            !g1 && r12.transceivers[o7] && r12.transceivers[o7].rejected && (r12.transceivers[o7] = r12._createTransceiver(u1, !0));
                            var I, L, M = e2.parseRtpParameters(i16);
                            g1 || (I = e2.getIceParameters(i16, v), (L = e2.getDtlsParameters(i16, v)).role = "client"), b = e2.parseRtpEncodingParameters(i16);
                            var O = e2.parseRtcpParameters(i16), G = e2.matchPrefix(i16, "a=end-of-candidates", v).length > 0, j = e2.matchPrefix(i16, "a=candidate:").map(function(t7) {
                                return e2.parseCandidate(t7);
                            }).filter(function(e4) {
                                return 1 === e4.component;
                            });
                            if (("offer" === t5.type || "answer" === t5.type) && !g1 && m && o7 > 0 && r12.transceivers[o7] && (r12._disposeIceAndDtlsTransports(o7), r12.transceivers[o7].iceGatherer = r12.transceivers[0].iceGatherer, r12.transceivers[o7].iceTransport = r12.transceivers[0].iceTransport, r12.transceivers[o7].dtlsTransport = r12.transceivers[0].dtlsTransport, r12.transceivers[o7].rtpSender && r12.transceivers[o7].rtpSender.setTransport(r12.transceivers[0].dtlsTransport), r12.transceivers[o7].rtpReceiver && r12.transceivers[o7].rtpReceiver.setTransport(r12.transceivers[0].dtlsTransport)), "offer" !== t5.type || g1) {
                                if ("answer" === t5.type && !g1) P = (C = r12.transceivers[o7]).iceGatherer, w = C.iceTransport, R = C.dtlsTransport, _ = C.rtpReceiver, k = C.sendEncodingParameters, x = C.localCapabilities, r12.transceivers[o7].recvEncodingParameters = b, r12.transceivers[o7].remoteCapabilities = M, r12.transceivers[o7].rtcpParameters = O, j.length && "new" === w.state && (!h && !G || m && 0 !== o7 ? j.forEach(function(e4) {
                                    s5(C.iceTransport, e4);
                                }) : w.setRemoteCandidates(j)), m && 0 !== o7 || ("new" === w.state && w.start(P, I, "controlling"), "new" === R.state && R.start(L)), !a5(C.localCapabilities, C.remoteCapabilities).codecs.filter(function(e4) {
                                    return "rtx" === e4.name.toLowerCase();
                                }).length && C.sendEncodingParameters[0].rtx && delete C.sendEncodingParameters[0].rtx, r12._transceive(C, "sendrecv" === S || "recvonly" === S, "sendrecv" === S || "sendonly" === S), !_ || "sendrecv" !== S && "sendonly" !== S ? delete C.rtpReceiver : (D = _.track, T ? (n9[T.stream] || (n9[T.stream] = new c.MediaStream), p(D, n9[T.stream]), f1.push([
                                    D,
                                    _,
                                    n9[T.stream]
                                ])) : (n9.default || (n9.default = new c.MediaStream), p(D, n9.default), f1.push([
                                    D,
                                    _,
                                    n9.default
                                ])));
                            } else {
                                (C = r12.transceivers[o7] || r12._createTransceiver(u1)).mid = E, C.iceGatherer || (C.iceGatherer = r12._createIceGatherer(o7, m)), j.length && "new" === C.iceTransport.state && (!G || m && 0 !== o7 ? j.forEach(function(e4) {
                                    s5(C.iceTransport, e4);
                                }) : C.iceTransport.setRemoteCandidates(j)), x = c.RTCRtpReceiver.getCapabilities(u1), d < 15019 && (x.codecs = x.codecs.filter(function(e4) {
                                    return "rtx" !== e4.name;
                                })), k = C.sendEncodingParameters || [
                                    {
                                        ssrc: 1001 * (2 * o7 + 2)
                                    }
                                ];
                                var N, A = !1;
                                if ("sendrecv" === S || "sendonly" === S) {
                                    if (A = !C.rtpReceiver, _ = C.rtpReceiver || new c.RTCRtpReceiver(C.dtlsTransport, u1), A) D = _.track, T && "-" === T.stream || (T ? (n9[T.stream] || (n9[T.stream] = new c.MediaStream, Object.defineProperty(n9[T.stream], "id", {
                                        get: function() {
                                            return T.stream;
                                        }
                                    })), Object.defineProperty(D, "id", {
                                        get: function() {
                                            return T.track;
                                        }
                                    }), N = n9[T.stream]) : (n9.default || (n9.default = new c.MediaStream), N = n9.default)), N && (p(D, N), C.associatedRemoteMediaStreams.push(N)), f1.push([
                                        D,
                                        _,
                                        N
                                    ]);
                                } else C.rtpReceiver && C.rtpReceiver.track && (C.associatedRemoteMediaStreams.forEach(function(e4) {
                                    var t7, r13, n10 = e4.getTracks().find(function(e5) {
                                        return e5.id === C.rtpReceiver.track.id;
                                    });
                                    n10 && (t7 = n10, (r13 = e4).removeTrack(t7), r13.dispatchEvent(new c.MediaStreamTrackEvent("removetrack", {
                                        track: t7
                                    })));
                                }), C.associatedRemoteMediaStreams = []);
                                C.localCapabilities = x, C.remoteCapabilities = M, C.rtpReceiver = _, C.rtcpParameters = O, C.sendEncodingParameters = k, C.recvEncodingParameters = b, r12._transceive(r12.transceivers[o7], !1, A);
                            }
                        }
                    }), (void 0) === r12._dtlsRole && (r12._dtlsRole = "offer" === t5.type ? "active" : "passive"), r12._remoteDescription = {
                        type: t5.type,
                        sdp: t5.sdp
                    }, "offer" === t5.type ? r12._updateSignalingState("have-remote-offer") : r12._updateSignalingState("stable"), Object.keys(n9).forEach(function(e4) {
                        var t7 = n9[e4];
                        if (t7.getTracks().length) {
                            if (-1 === r12.remoteStreams.indexOf(t7)) {
                                r12.remoteStreams.push(t7);
                                var a8 = new Event("addstream");
                                a8.stream = t7, c.setTimeout(function() {
                                    r12._dispatchEvent("addstream", a8);
                                });
                            }
                            f1.forEach(function(e5) {
                                var n10 = e5[0], a9 = e5[1];
                                t7.id === e5[2].id && l(r12, n10, a9, [
                                    t7
                                ]);
                            });
                        }
                    }), f1.forEach(function(e4) {
                        e4[2] || l(r12, e4[0], e4[1], []);
                    }), c.setTimeout(function() {
                        r12 && r12.transceivers && r12.transceivers.forEach(function(e4) {
                            e4.iceTransport && "new" === e4.iceTransport.state && e4.iceTransport.getRemoteCandidates().length > 0 && (console.warn("Timeout for addRemoteCandidate. Consider sending an end-of-candidates notification"), e4.iceTransport.addRemoteCandidate({
                            }));
                        });
                    }, 4000), Promise.resolve();
                }, f.prototype.close = function() {
                    this.transceivers.forEach(function(e4) {
                        e4.iceTransport && e4.iceTransport.stop(), e4.dtlsTransport && e4.dtlsTransport.stop(), e4.rtpSender && e4.rtpSender.stop(), e4.rtpReceiver && e4.rtpReceiver.stop();
                    }), this._isClosed = !0, this._updateSignalingState("closed");
                }, f.prototype._updateSignalingState = function(e4) {
                    this.signalingState = e4;
                    var t5 = new Event("signalingstatechange");
                    this._dispatchEvent("signalingstatechange", t5);
                }, f.prototype._maybeFireNegotiationNeeded = function() {
                    var e4 = this;
                    "stable" === this.signalingState && !0 !== this.needNegotiation && (this.needNegotiation = !0, c.setTimeout(function() {
                        if (e4.needNegotiation) {
                            e4.needNegotiation = !1;
                            var t5 = new Event("negotiationneeded");
                            e4._dispatchEvent("negotiationneeded", t5);
                        }
                    }, 0));
                }, f.prototype._updateIceConnectionState = function() {
                    var e4, t7 = {
                        new: 0,
                        closed: 0,
                        checking: 0,
                        connected: 0,
                        completed: 0,
                        disconnected: 0,
                        failed: 0
                    };
                    if (this.transceivers.forEach(function(e5) {
                        e5.iceTransport && !e5.rejected && t7[e5.iceTransport.state]++;
                    }), e4 = "new", t7.failed > 0 ? e4 = "failed" : t7.checking > 0 ? e4 = "checking" : t7.disconnected > 0 ? e4 = "disconnected" : t7.new > 0 ? e4 = "new" : t7.connected > 0 ? e4 = "connected" : t7.completed > 0 && (e4 = "completed"), e4 !== this.iceConnectionState) {
                        this.iceConnectionState = e4;
                        var r12 = new Event("iceconnectionstatechange");
                        this._dispatchEvent("iceconnectionstatechange", r12);
                    }
                }, f.prototype._updateConnectionState = function() {
                    var e4, t7 = {
                        new: 0,
                        closed: 0,
                        connecting: 0,
                        connected: 0,
                        completed: 0,
                        disconnected: 0,
                        failed: 0
                    };
                    if (this.transceivers.forEach(function(e5) {
                        e5.iceTransport && e5.dtlsTransport && !e5.rejected && (t7[e5.iceTransport.state]++, t7[e5.dtlsTransport.state]++);
                    }), t7.connected += t7.completed, e4 = "new", t7.failed > 0 ? e4 = "failed" : t7.connecting > 0 ? e4 = "connecting" : t7.disconnected > 0 ? e4 = "disconnected" : t7.new > 0 ? e4 = "new" : t7.connected > 0 && (e4 = "connected"), e4 !== this.connectionState) {
                        this.connectionState = e4;
                        var r13 = new Event("connectionstatechange");
                        this._dispatchEvent("connectionstatechange", r13);
                    }
                }, f.prototype.createOffer = function() {
                    var t7 = this;
                    if (t7._isClosed) return Promise.reject(o5("InvalidStateError", "Can not call createOffer after close"));
                    var n9 = t7.transceivers.filter(function(e4) {
                        return "audio" === e4.kind;
                    }).length, a9 = t7.transceivers.filter(function(e4) {
                        return "video" === e4.kind;
                    }).length, i16 = arguments[0];
                    if (i16) {
                        if (i16.mandatory || i16.optional) throw new TypeError("Legacy mandatory/optional constraints not supported.");
                        (void 0) !== i16.offerToReceiveAudio && (n9 = !0 === i16.offerToReceiveAudio ? 1 : !1 === i16.offerToReceiveAudio ? 0 : i16.offerToReceiveAudio), (void 0) !== i16.offerToReceiveVideo && (a9 = !0 === i16.offerToReceiveVideo ? 1 : !1 === i16.offerToReceiveVideo ? 0 : i16.offerToReceiveVideo);
                    }
                    for(t7.transceivers.forEach(function(e4) {
                        "audio" === e4.kind ? (--n9) < 0 && (e4.wantReceive = !1) : "video" === e4.kind && (--a9) < 0 && (e4.wantReceive = !1);
                    }); n9 > 0 || a9 > 0;)n9 > 0 && (t7._createTransceiver("audio"), n9--), a9 > 0 && (t7._createTransceiver("video"), a9--);
                    var s7 = e2.writeSessionBoilerplate(t7._sdpSessionId, t7._sdpSessionVersion++);
                    t7.transceivers.forEach(function(r14, n10) {
                        var a10 = r14.track, i17 = r14.kind, s8 = r14.mid || e2.generateIdentifier();
                        r14.mid = s8, r14.iceGatherer || (r14.iceGatherer = t7._createIceGatherer(n10, t7.usingBundle));
                        var o7 = c.RTCRtpSender.getCapabilities(i17);
                        d < 15019 && (o7.codecs = o7.codecs.filter(function(e4) {
                            return "rtx" !== e4.name;
                        })), o7.codecs.forEach(function(e4) {
                            "H264" === e4.name && (void 0) === e4.parameters["level-asymmetry-allowed"] && (e4.parameters["level-asymmetry-allowed"] = "1"), r14.remoteCapabilities && r14.remoteCapabilities.codecs && r14.remoteCapabilities.codecs.forEach(function(t8) {
                                e4.name.toLowerCase() === t8.name.toLowerCase() && e4.clockRate === t8.clockRate && (e4.preferredPayloadType = t8.payloadType);
                            });
                        }), o7.headerExtensions.forEach(function(e4) {
                            (r14.remoteCapabilities && r14.remoteCapabilities.headerExtensions || []).forEach(function(t8) {
                                e4.uri === t8.uri && (e4.id = t8.id);
                            });
                        });
                        var p2 = r14.sendEncodingParameters || [
                            {
                                ssrc: 1001 * (2 * n10 + 1)
                            }
                        ];
                        a10 && d >= 15019 && "video" === i17 && !p2[0].rtx && (p2[0].rtx = {
                            ssrc: p2[0].ssrc + 1
                        }), r14.wantReceive && (r14.rtpReceiver = new c.RTCRtpReceiver(r14.dtlsTransport, i17)), r14.localCapabilities = o7, r14.sendEncodingParameters = p2;
                    }), "max-compat" !== t7._config.bundlePolicy && (s7 += "a=group:BUNDLE " + t7.transceivers.map(function(e4) {
                        return e4.mid;
                    }).join(" ") + "\r\n"), s7 += "a=ice-options:trickle\r\n", t7.transceivers.forEach(function(n10, a10) {
                        s7 += r2(n10, n10.localCapabilities, "offer", n10.stream, t7._dtlsRole), s7 += "a=rtcp-rsize\r\n", !n10.iceGatherer || "new" === t7.iceGatheringState || 0 !== a10 && t7.usingBundle || (n10.iceGatherer.getLocalCandidates().forEach(function(t8) {
                            t8.component = 1, s7 += "a=" + e2.writeCandidate(t8) + "\r\n";
                        }), "completed" === n10.iceGatherer.state && (s7 += "a=end-of-candidates\r\n"));
                    });
                    var p2 = new c.RTCSessionDescription({
                        type: "offer",
                        sdp: s7
                    });
                    return Promise.resolve(p2);
                }, f.prototype.createAnswer = function() {
                    var t7 = this;
                    if (t7._isClosed) return Promise.reject(o5("InvalidStateError", "Can not call createAnswer after close"));
                    if ("have-remote-offer" !== t7.signalingState && "have-local-pranswer" !== t7.signalingState) return Promise.reject(o5("InvalidStateError", "Can not call createAnswer in signalingState " + t7.signalingState));
                    var n9 = e2.writeSessionBoilerplate(t7._sdpSessionId, t7._sdpSessionVersion++);
                    t7.usingBundle && (n9 += "a=group:BUNDLE " + t7.transceivers.map(function(e4) {
                        return e4.mid;
                    }).join(" ") + "\r\n"), n9 += "a=ice-options:trickle\r\n";
                    var i16 = e2.getMediaSections(t7._remoteDescription.sdp).length;
                    t7.transceivers.forEach(function(e4, s7) {
                        if (!(s7 + 1 > i16)) {
                            if (e4.rejected) return "application" === e4.kind ? "DTLS/SCTP" === e4.protocol ? n9 += "m=application 0 DTLS/SCTP 5000\r\n" : n9 += "m=application 0 " + e4.protocol + " webrtc-datachannel\r\n" : "audio" === e4.kind ? n9 += "m=audio 0 UDP/TLS/RTP/SAVPF 0\r\na=rtpmap:0 PCMU/8000\r\n" : "video" === e4.kind && (n9 += "m=video 0 UDP/TLS/RTP/SAVPF 120\r\na=rtpmap:120 VP8/90000\r\n"), void (n9 += "c=IN IP4 0.0.0.0\r\na=inactive\r\na=mid:" + e4.mid + "\r\n");
                            var o7;
                            if (e4.stream) "audio" === e4.kind ? o7 = e4.stream.getAudioTracks()[0] : "video" === e4.kind && (o7 = e4.stream.getVideoTracks()[0]), o7 && d >= 15019 && "video" === e4.kind && !e4.sendEncodingParameters[0].rtx && (e4.sendEncodingParameters[0].rtx = {
                                ssrc: e4.sendEncodingParameters[0].ssrc + 1
                            });
                            var c3 = a5(e4.localCapabilities, e4.remoteCapabilities);
                            !c3.codecs.filter(function(e5) {
                                return "rtx" === e5.name.toLowerCase();
                            }).length && e4.sendEncodingParameters[0].rtx && delete e4.sendEncodingParameters[0].rtx, n9 += r2(e4, c3, "answer", e4.stream, t7._dtlsRole), e4.rtcpParameters && e4.rtcpParameters.reducedSize && (n9 += "a=rtcp-rsize\r\n");
                        }
                    });
                    var s7 = new c.RTCSessionDescription({
                        type: "answer",
                        sdp: n9
                    });
                    return Promise.resolve(s7);
                }, f.prototype.addIceCandidate = function(t7) {
                    var r14, n9 = this;
                    return t7 && (void 0) === t7.sdpMLineIndex && !t7.sdpMid ? Promise.reject(new TypeError("sdpMLineIndex or sdpMid required")) : new Promise(function(a9, i16) {
                        if (!n9._remoteDescription) return i16(o5("InvalidStateError", "Can not add ICE candidate without a remote description"));
                        if (t7 && "" !== t7.candidate) {
                            var c4 = t7.sdpMLineIndex;
                            if (t7.sdpMid) for(var d2 = 0; d2 < n9.transceivers.length; d2++)if (n9.transceivers[d2].mid === t7.sdpMid) {
                                c4 = d2;
                                break;
                            }
                            var p2 = n9.transceivers[c4];
                            if (!p2) return i16(o5("OperationError", "Can not add ICE candidate"));
                            if (p2.rejected) return a9();
                            var l2 = Object.keys(t7.candidate).length > 0 ? e2.parseCandidate(t7.candidate) : {
                            };
                            if ("tcp" === l2.protocol && (0 === l2.port || 9 === l2.port)) return a9();
                            if (l2.component && 1 !== l2.component) return a9();
                            if ((0 === c4 || c4 > 0 && p2.iceTransport !== n9.transceivers[0].iceTransport) && !s5(p2.iceTransport, l2)) return i16(o5("OperationError", "Can not add ICE candidate"));
                            var f1 = t7.candidate.trim();
                            0 === f1.indexOf("a=") && (f1 = f1.substr(2)), (r14 = e2.getMediaSections(n9._remoteDescription.sdp))[c4] += "a=" + (l2.type ? f1 : "end-of-candidates") + "\r\n", n9._remoteDescription.sdp = e2.getDescription(n9._remoteDescription.sdp) + r14.join("");
                        } else for(var u = 0; u < n9.transceivers.length && (n9.transceivers[u].rejected || (n9.transceivers[u].iceTransport.addRemoteCandidate({
                        }), (r14 = e2.getMediaSections(n9._remoteDescription.sdp))[u] += "a=end-of-candidates\r\n", n9._remoteDescription.sdp = e2.getDescription(n9._remoteDescription.sdp) + r14.join(""), !n9.usingBundle)); u++);
                        a9();
                    });
                }, f.prototype.getStats = function(e4) {
                    if (e4 && e4 instanceof c.MediaStreamTrack) {
                        var t7 = null;
                        if (this.transceivers.forEach(function(r14) {
                            r14.rtpSender && r14.rtpSender.track === e4 ? t7 = r14.rtpSender : r14.rtpReceiver && r14.rtpReceiver.track === e4 && (t7 = r14.rtpReceiver);
                        }), !t7) throw o5("InvalidAccessError", "Invalid selector.");
                        return t7.getStats();
                    }
                    var r14 = [];
                    return this.transceivers.forEach(function(e5) {
                        [
                            "rtpSender",
                            "rtpReceiver",
                            "iceGatherer",
                            "iceTransport",
                            "dtlsTransport"
                        ].forEach(function(t8) {
                            e5[t8] && r14.push(e5[t8].getStats());
                        });
                    }), Promise.all(r14).then(function(e5) {
                        var t8 = new Map;
                        return e5.forEach(function(e6) {
                            e6.forEach(function(e7) {
                                t8.set(e7.id, e7);
                            });
                        }), t8;
                    });
                };
                [
                    "RTCRtpSender",
                    "RTCRtpReceiver",
                    "RTCIceGatherer",
                    "RTCIceTransport",
                    "RTCDtlsTransport"
                ].forEach(function(e4) {
                    var r14 = c[e4];
                    if (r14 && r14.prototype && r14.prototype.getStats) {
                        var n9 = r14.prototype.getStats;
                        r14.prototype.getStats = function() {
                            return n9.apply(this).then(function(e5) {
                                var r15 = new Map;
                                return Object.keys(e5).forEach(function(n10) {
                                    e5[n10].type = t2(e5[n10]), r15.set(n10, e5[n10]);
                                }), r15;
                            });
                        };
                    }
                });
                var u = [
                    "createOffer",
                    "createAnswer"
                ];
                return u.forEach(function(e4) {
                    var t8 = f.prototype[e4];
                    f.prototype[e4] = function() {
                        var e5 = arguments;
                        return "function" == typeof e5[0] || "function" == typeof e5[1] ? t8.apply(this, [
                            arguments[2]
                        ]).then(function(t9) {
                            "function" == typeof e5[0] && e5[0].apply(null, [
                                t9
                            ]);
                        }, function(t9) {
                            "function" == typeof e5[1] && e5[1].apply(null, [
                                t9
                            ]);
                        }) : t8.apply(this, arguments);
                    };
                }), (u = [
                    "setLocalDescription",
                    "setRemoteDescription",
                    "addIceCandidate"
                ]).forEach(function(e4) {
                    var t8 = f.prototype[e4];
                    f.prototype[e4] = function() {
                        var e5 = arguments;
                        return "function" == typeof e5[1] || "function" == typeof e5[2] ? t8.apply(this, arguments).then(function() {
                            "function" == typeof e5[1] && e5[1].apply(null);
                        }, function(t9) {
                            "function" == typeof e5[2] && e5[2].apply(null, [
                                t9
                            ]);
                        }) : t8.apply(this, arguments);
                    };
                }), [
                    "getStats"
                ].forEach(function(e4) {
                    var t8 = f.prototype[e4];
                    f.prototype[e4] = function() {
                        var e5 = arguments;
                        return "function" == typeof e5[1] ? t8.apply(this, arguments).then(function() {
                            "function" == typeof e5[1] && e5[1].apply(null);
                        }) : t8.apply(this, arguments);
                    };
                }), f;
            };
        },
        {
            "sdp": "YHvh"
        }
    ],
    "YdKx": [
        function(require, module, exports) {
            "use strict";
            function e2(e4) {
                var r2 = e4 && e4.navigator, t2 = r2.mediaDevices.getUserMedia.bind(r2.mediaDevices);
                r2.mediaDevices.getUserMedia = function(e5) {
                    return t2(e5).catch(function(e6) {
                        return Promise.reject(function(e7) {
                            return {
                                name: ({
                                    PermissionDeniedError: "NotAllowedError"
                                })[e7.name] || e7.name,
                                message: e7.message,
                                constraint: e7.constraint,
                                toString: function() {
                                    return this.name;
                                }
                            };
                        }(e6));
                    });
                };
            }
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.shimGetUserMedia = e2;
        },
        {
        }
    ],
    "P3bV": [
        function(require, module, exports) {
            "use strict";
            function e2(e4) {
                "getDisplayMedia" in e4.navigator && e4.navigator.mediaDevices && (e4.navigator.mediaDevices && "getDisplayMedia" in e4.navigator.mediaDevices || (e4.navigator.mediaDevices.getDisplayMedia = e4.navigator.getDisplayMedia.bind(e4.navigator)));
            }
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.shimGetDisplayMedia = e2;
        },
        {
        }
    ],
    "XRic": [
        function(require, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.shimPeerConnection = p3, exports.shimReplaceTrack = a5, Object.defineProperty(exports, "shimGetUserMedia", {
                enumerable: !0,
                get: function() {
                    return n2.shimGetUserMedia;
                }
            }), Object.defineProperty(exports, "shimGetDisplayMedia", {
                enumerable: !0,
                get: function() {
                    return i14.shimGetDisplayMedia;
                }
            });
            var e2 = s5(require("../utils")), t2 = require("./filtericeservers"), r2 = o5(require("rtcpeerconnection-shim")), n2 = require("./getusermedia"), i14 = require("./getdisplaymedia");
            function o5(e4) {
                return e4 && e4.__esModule ? e4 : {
                    default: e4
                };
            }
            function c5() {
                if ("function" != typeof WeakMap) return null;
                var e4 = new WeakMap;
                return c5 = function() {
                    return e4;
                }, e4;
            }
            function s5(e4) {
                if (e4 && e4.__esModule) return e4;
                if (null === e4 || "object" != typeof e4 && "function" != typeof e4) return {
                    default: e4
                };
                var t8 = c5();
                if (t8 && t8.has(e4)) return t8.get(e4);
                var r14 = {
                }, n10 = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for(var i16 in e4)if (Object.prototype.hasOwnProperty.call(e4, i16)) {
                    var o8 = n10 ? Object.getOwnPropertyDescriptor(e4, i16) : null;
                    o8 && (o8.get || o8.set) ? Object.defineProperty(r14, i16, o8) : r14[i16] = e4[i16];
                }
                return r14.default = e4, t8 && t8.set(e4, r14), r14;
            }
            function p3(n10, i16) {
                if (n10.RTCIceGatherer && (n10.RTCIceCandidate || (n10.RTCIceCandidate = function(e4) {
                    return e4;
                }), n10.RTCSessionDescription || (n10.RTCSessionDescription = function(e4) {
                    return e4;
                }), i16.version < 15025)) {
                    var o9 = Object.getOwnPropertyDescriptor(n10.MediaStreamTrack.prototype, "enabled");
                    Object.defineProperty(n10.MediaStreamTrack.prototype, "enabled", {
                        set: function(e4) {
                            o9.set.call(this, e4);
                            var t8 = new Event("enabled");
                            t8.enabled = e4, this.dispatchEvent(t8);
                        }
                    });
                }
                !n10.RTCRtpSender || "dtmf" in n10.RTCRtpSender.prototype || Object.defineProperty(n10.RTCRtpSender.prototype, "dtmf", {
                    get: function() {
                        return (void 0) === this._dtmf && ("audio" === this.track.kind ? this._dtmf = new n10.RTCDtmfSender(this) : "video" === this.track.kind && (this._dtmf = null)), this._dtmf;
                    }
                }), n10.RTCDtmfSender && !n10.RTCDTMFSender && (n10.RTCDTMFSender = n10.RTCDtmfSender);
                var c6 = r2.default(n10, i16.version);
                n10.RTCPeerConnection = function(r14) {
                    return r14 && r14.iceServers && (r14.iceServers = t2.filterIceServers(r14.iceServers, i16.version), e2.log("ICE servers after filtering:", r14.iceServers)), new c6(r14);
                }, n10.RTCPeerConnection.prototype = c6.prototype;
            }
            function a5(e4) {
                !e4.RTCRtpSender || "replaceTrack" in e4.RTCRtpSender.prototype || (e4.RTCRtpSender.prototype.replaceTrack = e4.RTCRtpSender.prototype.setTrack);
            }
        },
        {
            "../utils": "iSxC",
            "./filtericeservers": "NZ1C",
            "rtcpeerconnection-shim": "NJ2u",
            "./getusermedia": "YdKx",
            "./getdisplaymedia": "P3bV"
        }
    ],
    "GzSv": [
        function(require, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.shimGetUserMedia = n2;
            var e2 = o5(require("../utils"));
            function t2() {
                if ("function" != typeof WeakMap) return null;
                var e4 = new WeakMap;
                return t2 = function() {
                    return e4;
                }, e4;
            }
            function o5(e4) {
                if (e4 && e4.__esModule) return e4;
                if (null === e4 || "object" != typeof e4 && "function" != typeof e4) return {
                    default: e4
                };
                var o10 = t2();
                if (o10 && o10.has(e4)) return o10.get(e4);
                var r2 = {
                }, n2 = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for(var i14 in e4)if (Object.prototype.hasOwnProperty.call(e4, i14)) {
                    var a5 = n2 ? Object.getOwnPropertyDescriptor(e4, i14) : null;
                    a5 && (a5.get || a5.set) ? Object.defineProperty(r2, i14, a5) : r2[i14] = e4[i14];
                }
                return r2.default = e4, o10 && o10.set(e4, r2), r2;
            }
            function r2(e4) {
                return (r2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e5) {
                    return typeof e5;
                } : function(e5) {
                    return e5 && "function" == typeof Symbol && e5.constructor === Symbol && e5 !== Symbol.prototype ? "symbol" : typeof e5;
                })(e4);
            }
            function n2(t8, o10) {
                var n10 = t8 && t8.navigator, i14 = t8 && t8.MediaStreamTrack;
                if (n10.getUserMedia = function(t9, o11, r14) {
                    e2.deprecated("navigator.getUserMedia", "navigator.mediaDevices.getUserMedia"), n10.mediaDevices.getUserMedia(t9).then(o11, r14);
                }, !(o10.version > 55 && "autoGainControl" in n10.mediaDevices.getSupportedConstraints())) {
                    var a9 = function(e4, t9, o11) {
                        t9 in e4 && !(o11 in e4) && (e4[o11] = e4[t9], delete e4[t9]);
                    }, s5 = n10.mediaDevices.getUserMedia.bind(n10.mediaDevices);
                    if (n10.mediaDevices.getUserMedia = function(e4) {
                        return "object" === r2(e4) && "object" === r2(e4.audio) && (e4 = JSON.parse(JSON.stringify(e4)), a9(e4.audio, "autoGainControl", "mozAutoGainControl"), a9(e4.audio, "noiseSuppression", "mozNoiseSuppression")), s5(e4);
                    }, i14 && i14.prototype.getSettings) {
                        var p3 = i14.prototype.getSettings;
                        i14.prototype.getSettings = function() {
                            var e4 = p3.apply(this, arguments);
                            return a9(e4, "mozAutoGainControl", "autoGainControl"), a9(e4, "mozNoiseSuppression", "noiseSuppression"), e4;
                        };
                    }
                    if (i14 && i14.prototype.applyConstraints) {
                        var u = i14.prototype.applyConstraints;
                        i14.prototype.applyConstraints = function(e4) {
                            return "audio" === this.kind && "object" === r2(e4) && (e4 = JSON.parse(JSON.stringify(e4)), a9(e4, "autoGainControl", "mozAutoGainControl"), a9(e4, "noiseSuppression", "mozNoiseSuppression")), u.apply(this, [
                                e4
                            ]);
                        };
                    }
                }
            }
        },
        {
            "../utils": "iSxC"
        }
    ],
    "UuGU": [
        function(require, module, exports) {
            "use strict";
            function e2(e4, i14) {
                e4.navigator.mediaDevices && "getDisplayMedia" in e4.navigator.mediaDevices || e4.navigator.mediaDevices && (e4.navigator.mediaDevices.getDisplayMedia = function(a10) {
                    if (!a10 || !a10.video) {
                        var t2 = new DOMException("getDisplayMedia without video constraints is undefined");
                        return t2.name = "NotFoundError", t2.code = 8, Promise.reject(t2);
                    }
                    return !0 === a10.video ? a10.video = {
                        mediaSource: i14
                    } : a10.video.mediaSource = i14, e4.navigator.mediaDevices.getUserMedia(a10);
                });
            }
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.shimGetDisplayMedia = e2;
        },
        {
        }
    ],
    "Fzdr": [
        function(require, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.shimOnTrack = s7, exports.shimPeerConnection = c5, exports.shimSenderGetStats = p4, exports.shimReceiverGetStats = u, exports.shimRemoveStream = f2, exports.shimRTCDataChannel = d3, exports.shimAddTransceiver = C, exports.shimGetParameters = y, exports.shimCreateOffer = l3, exports.shimCreateAnswer = m, Object.defineProperty(exports, "shimGetUserMedia", {
                enumerable: !0,
                get: function() {
                    return t8.shimGetUserMedia;
                }
            }), Object.defineProperty(exports, "shimGetDisplayMedia", {
                enumerable: !0,
                get: function() {
                    return n2.shimGetDisplayMedia;
                }
            });
            var e2 = o5(require("../utils")), t8 = require("./getusermedia"), n2 = require("./getdisplaymedia");
            function r2() {
                if ("function" != typeof WeakMap) return null;
                var e4 = new WeakMap;
                return r2 = function() {
                    return e4;
                }, e4;
            }
            function o5(e4) {
                if (e4 && e4.__esModule) return e4;
                if (null === e4 || "object" != typeof e4 && "function" != typeof e4) return {
                    default: e4
                };
                var t9 = r2();
                if (t9 && t9.has(e4)) return t9.get(e4);
                var n10 = {
                }, o10 = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for(var i14 in e4)if (Object.prototype.hasOwnProperty.call(e4, i14)) {
                    var a10 = o10 ? Object.getOwnPropertyDescriptor(e4, i14) : null;
                    a10 && (a10.get || a10.set) ? Object.defineProperty(n10, i14, a10) : n10[i14] = e4[i14];
                }
                return n10.default = e4, t9 && t9.set(e4, n10), n10;
            }
            function i14(e4, t9, n10) {
                return t9 in e4 ? Object.defineProperty(e4, t9, {
                    value: n10,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e4[t9] = n10, e4;
            }
            function a11(e4) {
                return (a11 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e5) {
                    return typeof e5;
                } : function(e5) {
                    return e5 && "function" == typeof Symbol && e5.constructor === Symbol && e5 !== Symbol.prototype ? "symbol" : typeof e5;
                })(e4);
            }
            function s7(e4) {
                "object" === a11(e4) && e4.RTCTrackEvent && "receiver" in e4.RTCTrackEvent.prototype && !("transceiver" in e4.RTCTrackEvent.prototype) && Object.defineProperty(e4.RTCTrackEvent.prototype, "transceiver", {
                    get: function() {
                        return {
                            receiver: this.receiver
                        };
                    }
                });
            }
            function c5(e4, t9) {
                if ("object" === a11(e4) && (e4.RTCPeerConnection || e4.mozRTCPeerConnection)) {
                    !e4.RTCPeerConnection && e4.mozRTCPeerConnection && (e4.RTCPeerConnection = e4.mozRTCPeerConnection), t9.version < 53 && [
                        "setLocalDescription",
                        "setRemoteDescription",
                        "addIceCandidate"
                    ].forEach(function(t10) {
                        var n10 = e4.RTCPeerConnection.prototype[t10], r14 = i14({
                        }, t10, function() {
                            return arguments[0] = new ("addIceCandidate" === t10 ? e4.RTCIceCandidate : e4.RTCSessionDescription)(arguments[0]), n10.apply(this, arguments);
                        });
                        e4.RTCPeerConnection.prototype[t10] = r14[t10];
                    });
                    var n10 = {
                        inboundrtp: "inbound-rtp",
                        outboundrtp: "outbound-rtp",
                        candidatepair: "candidate-pair",
                        localcandidate: "local-candidate",
                        remotecandidate: "remote-candidate"
                    }, r14 = e4.RTCPeerConnection.prototype.getStats;
                    e4.RTCPeerConnection.prototype.getStats = function() {
                        var [e5, o10, i16] = arguments;
                        return r14.apply(this, [
                            e5 || null
                        ]).then(function(e6) {
                            if (t9.version < 53 && !o10) try {
                                e6.forEach(function(e7) {
                                    e7.type = n10[e7.type] || e7.type;
                                });
                            } catch (r15) {
                                if ("TypeError" !== r15.name) throw r15;
                                e6.forEach(function(t10, r16) {
                                    e6.set(r16, Object.assign({
                                    }, t10, {
                                        type: n10[t10.type] || t10.type
                                    }));
                                });
                            }
                            return e6;
                        }).then(o10, i16);
                    };
                }
            }
            function p4(e4) {
                if ("object" === a11(e4) && e4.RTCPeerConnection && e4.RTCRtpSender && !(e4.RTCRtpSender && "getStats" in e4.RTCRtpSender.prototype)) {
                    var t9 = e4.RTCPeerConnection.prototype.getSenders;
                    t9 && (e4.RTCPeerConnection.prototype.getSenders = function() {
                        var e5 = this, n11 = t9.apply(this, []);
                        return n11.forEach(function(t10) {
                            return t10._pc = e5;
                        }), n11;
                    });
                    var n11 = e4.RTCPeerConnection.prototype.addTrack;
                    n11 && (e4.RTCPeerConnection.prototype.addTrack = function() {
                        var e5 = n11.apply(this, arguments);
                        return e5._pc = this, e5;
                    }), e4.RTCRtpSender.prototype.getStats = function() {
                        return this.track ? this._pc.getStats(this.track) : Promise.resolve(new Map);
                    };
                }
            }
            function u(t10) {
                if ("object" === a11(t10) && t10.RTCPeerConnection && t10.RTCRtpSender && !(t10.RTCRtpSender && "getStats" in t10.RTCRtpReceiver.prototype)) {
                    var n12 = t10.RTCPeerConnection.prototype.getReceivers;
                    n12 && (t10.RTCPeerConnection.prototype.getReceivers = function() {
                        var e4 = this, t11 = n12.apply(this, []);
                        return t11.forEach(function(t12) {
                            return t12._pc = e4;
                        }), t11;
                    }), e2.wrapPeerConnectionEvent(t10, "track", function(e4) {
                        return e4.receiver._pc = e4.srcElement, e4;
                    }), t10.RTCRtpReceiver.prototype.getStats = function() {
                        return this._pc.getStats(this.track);
                    };
                }
            }
            function f2(t10) {
                !t10.RTCPeerConnection || "removeStream" in t10.RTCPeerConnection.prototype || (t10.RTCPeerConnection.prototype.removeStream = function(t11) {
                    var n13 = this;
                    e2.deprecated("removeStream", "removeTrack"), this.getSenders().forEach(function(e4) {
                        e4.track && t11.getTracks().includes(e4.track) && n13.removeTrack(e4);
                    });
                });
            }
            function d3(e4) {
                e4.DataChannel && !e4.RTCDataChannel && (e4.RTCDataChannel = e4.DataChannel);
            }
            function C(e4) {
                if ("object" === a11(e4) && e4.RTCPeerConnection) {
                    var t10 = e4.RTCPeerConnection.prototype.addTransceiver;
                    t10 && (e4.RTCPeerConnection.prototype.addTransceiver = function() {
                        this.setParametersPromises = [];
                        var e5 = arguments[1], n13 = e5 && "sendEncodings" in e5;
                        n13 && e5.sendEncodings.forEach(function(e6) {
                            if ("rid" in e6) {
                                if (!/^[a-z0-9]{0,16}$/i.test(e6.rid)) throw new TypeError("Invalid RID value provided.");
                            }
                            if ("scaleResolutionDownBy" in e6 && !(parseFloat(e6.scaleResolutionDownBy) >= 1)) throw new RangeError("scale_resolution_down_by must be >= 1.0");
                            if ("maxFramerate" in e6 && !(parseFloat(e6.maxFramerate) >= 0)) throw new RangeError("max_framerate must be >= 0.0");
                        });
                        var r15 = t10.apply(this, arguments);
                        if (n13) {
                            var { sender: o10  } = r15, i16 = o10.getParameters();
                            "encodings" in i16 && (1 !== i16.encodings.length || 0 !== Object.keys(i16.encodings[0]).length) || (i16.encodings = e5.sendEncodings, o10.sendEncodings = e5.sendEncodings, this.setParametersPromises.push(o10.setParameters(i16).then(function() {
                                delete o10.sendEncodings;
                            }).catch(function() {
                                delete o10.sendEncodings;
                            })));
                        }
                        return r15;
                    });
                }
            }
            function y(e4) {
                if ("object" === a11(e4) && e4.RTCRtpSender) {
                    var t11 = e4.RTCRtpSender.prototype.getParameters;
                    t11 && (e4.RTCRtpSender.prototype.getParameters = function() {
                        var e5 = t11.apply(this, arguments);
                        return "encodings" in e5 || (e5.encodings = [].concat(this.sendEncodings || [
                            {
                            }
                        ])), e5;
                    });
                }
            }
            function l3(e4) {
                if ("object" === a11(e4) && e4.RTCPeerConnection) {
                    var t12 = e4.RTCPeerConnection.prototype.createOffer;
                    e4.RTCPeerConnection.prototype.createOffer = function() {
                        var e5 = arguments, n13 = this;
                        return this.setParametersPromises && this.setParametersPromises.length ? Promise.all(this.setParametersPromises).then(function() {
                            return t12.apply(n13, e5);
                        }).finally(function() {
                            n13.setParametersPromises = [];
                        }) : t12.apply(this, arguments);
                    };
                }
            }
            function m(e4) {
                if ("object" === a11(e4) && e4.RTCPeerConnection) {
                    var t13 = e4.RTCPeerConnection.prototype.createAnswer;
                    e4.RTCPeerConnection.prototype.createAnswer = function() {
                        var e5 = arguments, n13 = this;
                        return this.setParametersPromises && this.setParametersPromises.length ? Promise.all(this.setParametersPromises).then(function() {
                            return t13.apply(n13, e5);
                        }).finally(function() {
                            n13.setParametersPromises = [];
                        }) : t13.apply(this, arguments);
                    };
                }
            }
        },
        {
            "../utils": "iSxC",
            "./getusermedia": "GzSv",
            "./getdisplaymedia": "UuGU"
        }
    ],
    "t1lL": [
        function(require, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.shimLocalStreamsAPI = n2, exports.shimRemoteStreamsAPI = i14, exports.shimCallbacksAPI = a12, exports.shimGetUserMedia = c6, exports.shimConstraints = s8, exports.shimRTCIceServerUrls = d3, exports.shimTrackEventTransceiver = f2, exports.shimCreateOfferLegacy = p4, exports.shimAudioContext = u;
            var e2 = r2(require("../utils"));
            function t8() {
                if ("function" != typeof WeakMap) return null;
                var e4 = new WeakMap;
                return t8 = function() {
                    return e4;
                }, e4;
            }
            function r2(e4) {
                if (e4 && e4.__esModule) return e4;
                if (null === e4 || "object" != typeof e4 && "function" != typeof e4) return {
                    default: e4
                };
                var r15 = t8();
                if (r15 && r15.has(e4)) return r15.get(e4);
                var o5 = {
                }, n2 = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for(var i14 in e4)if (Object.prototype.hasOwnProperty.call(e4, i14)) {
                    var a11 = n2 ? Object.getOwnPropertyDescriptor(e4, i14) : null;
                    a11 && (a11.get || a11.set) ? Object.defineProperty(o5, i14, a11) : o5[i14] = e4[i14];
                }
                return o5.default = e4, r15 && r15.set(e4, o5), o5;
            }
            function o5(e4) {
                return (o5 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e5) {
                    return typeof e5;
                } : function(e5) {
                    return e5 && "function" == typeof Symbol && e5.constructor === Symbol && e5 !== Symbol.prototype ? "symbol" : typeof e5;
                })(e4);
            }
            function n2(e4) {
                if ("object" === o5(e4) && e4.RTCPeerConnection) {
                    if ("getLocalStreams" in e4.RTCPeerConnection.prototype || (e4.RTCPeerConnection.prototype.getLocalStreams = function() {
                        return this._localStreams || (this._localStreams = []), this._localStreams;
                    }), !("addStream" in e4.RTCPeerConnection.prototype)) {
                        var t14 = e4.RTCPeerConnection.prototype.addTrack;
                        e4.RTCPeerConnection.prototype.addStream = function(e5) {
                            var r15 = this;
                            this._localStreams || (this._localStreams = []), this._localStreams.includes(e5) || this._localStreams.push(e5), e5.getAudioTracks().forEach(function(o11) {
                                return t14.call(r15, o11, e5);
                            }), e5.getVideoTracks().forEach(function(o11) {
                                return t14.call(r15, o11, e5);
                            });
                        }, e4.RTCPeerConnection.prototype.addTrack = function(e5) {
                            for(var r15 = this, o11 = arguments.length, n13 = new Array(o11 > 1 ? o11 - 1 : 0), i14 = 1; i14 < o11; i14++)n13[i14 - 1] = arguments[i14];
                            return n13 && n13.forEach(function(e6) {
                                r15._localStreams ? r15._localStreams.includes(e6) || r15._localStreams.push(e6) : r15._localStreams = [
                                    e6
                                ];
                            }), t14.apply(this, arguments);
                        };
                    }
                    "removeStream" in e4.RTCPeerConnection.prototype || (e4.RTCPeerConnection.prototype.removeStream = function(e5) {
                        var t15 = this;
                        this._localStreams || (this._localStreams = []);
                        var r15 = this._localStreams.indexOf(e5);
                        if (-1 !== r15) {
                            this._localStreams.splice(r15, 1);
                            var o11 = e5.getTracks();
                            this.getSenders().forEach(function(e6) {
                                o11.includes(e6.track) && t15.removeTrack(e6);
                            });
                        }
                    });
                }
            }
            function i14(e4) {
                if ("object" === o5(e4) && e4.RTCPeerConnection && ("getRemoteStreams" in e4.RTCPeerConnection.prototype || (e4.RTCPeerConnection.prototype.getRemoteStreams = function() {
                    return this._remoteStreams ? this._remoteStreams : [];
                }), !("onaddstream" in e4.RTCPeerConnection.prototype))) {
                    Object.defineProperty(e4.RTCPeerConnection.prototype, "onaddstream", {
                        get: function() {
                            return this._onaddstream;
                        },
                        set: function(e5) {
                            var t15 = this;
                            this._onaddstream && (this.removeEventListener("addstream", this._onaddstream), this.removeEventListener("track", this._onaddstreampoly)), this.addEventListener("addstream", this._onaddstream = e5), this.addEventListener("track", this._onaddstreampoly = function(e6) {
                                e6.streams.forEach(function(e7) {
                                    if (t15._remoteStreams || (t15._remoteStreams = []), !t15._remoteStreams.includes(e7)) {
                                        t15._remoteStreams.push(e7);
                                        var r15 = new Event("addstream");
                                        r15.stream = e7, t15.dispatchEvent(r15);
                                    }
                                });
                            });
                        }
                    });
                    var t15 = e4.RTCPeerConnection.prototype.setRemoteDescription;
                    e4.RTCPeerConnection.prototype.setRemoteDescription = function() {
                        var e5 = this;
                        return this._onaddstreampoly || this.addEventListener("track", this._onaddstreampoly = function(t16) {
                            t16.streams.forEach(function(t17) {
                                if (e5._remoteStreams || (e5._remoteStreams = []), !(e5._remoteStreams.indexOf(t17) >= 0)) {
                                    e5._remoteStreams.push(t17);
                                    var r16 = new Event("addstream");
                                    r16.stream = t17, e5.dispatchEvent(r16);
                                }
                            });
                        }), t15.apply(e5, arguments);
                    };
                }
            }
            function a12(e4) {
                if ("object" === o5(e4) && e4.RTCPeerConnection) {
                    var t16 = e4.RTCPeerConnection.prototype, r17 = t16.createOffer, n13 = t16.createAnswer, i17 = t16.setLocalDescription, a13 = t16.setRemoteDescription, c5 = t16.addIceCandidate;
                    t16.createOffer = function(e5, t17) {
                        var o12 = arguments.length >= 2 ? arguments[2] : arguments[0], n14 = r17.apply(this, [
                            o12
                        ]);
                        return t17 ? (n14.then(e5, t17), Promise.resolve()) : n14;
                    }, t16.createAnswer = function(e5, t17) {
                        var r18 = arguments.length >= 2 ? arguments[2] : arguments[0], o12 = n13.apply(this, [
                            r18
                        ]);
                        return t17 ? (o12.then(e5, t17), Promise.resolve()) : o12;
                    };
                    var s7 = function(e5, t17, r18) {
                        var o12 = i17.apply(this, [
                            e5
                        ]);
                        return r18 ? (o12.then(t17, r18), Promise.resolve()) : o12;
                    };
                    t16.setLocalDescription = s7, s7 = function(e5, t17, r18) {
                        var o12 = a13.apply(this, [
                            e5
                        ]);
                        return r18 ? (o12.then(t17, r18), Promise.resolve()) : o12;
                    }, t16.setRemoteDescription = s7, s7 = function(e5, t17, r18) {
                        var o12 = c5.apply(this, [
                            e5
                        ]);
                        return r18 ? (o12.then(t17, r18), Promise.resolve()) : o12;
                    }, t16.addIceCandidate = s7;
                }
            }
            function c6(e4) {
                var t17 = e4 && e4.navigator;
                if (t17.mediaDevices && t17.mediaDevices.getUserMedia) {
                    var r18 = t17.mediaDevices, o12 = r18.getUserMedia.bind(r18);
                    t17.mediaDevices.getUserMedia = function(e5) {
                        return o12(s8(e5));
                    };
                }
                !t17.getUserMedia && t17.mediaDevices && t17.mediaDevices.getUserMedia && (t17.getUserMedia = (function(e5, r19, o13) {
                    t17.mediaDevices.getUserMedia(e5).then(r19, o13);
                }).bind(t17));
            }
            function s8(t17) {
                return t17 && (void 0) !== t17.video ? Object.assign({
                }, t17, {
                    video: e2.compactObject(t17.video)
                }) : t17;
            }
            function d3(t17) {
                if (t17.RTCPeerConnection) {
                    var r19 = t17.RTCPeerConnection;
                    t17.RTCPeerConnection = function(t18, o13) {
                        if (t18 && t18.iceServers) {
                            for(var n14 = [], i18 = 0; i18 < t18.iceServers.length; i18++){
                                var a14 = t18.iceServers[i18];
                                !a14.hasOwnProperty("urls") && a14.hasOwnProperty("url") ? (e2.deprecated("RTCIceServer.url", "RTCIceServer.urls"), (a14 = JSON.parse(JSON.stringify(a14))).urls = a14.url, delete a14.url, n14.push(a14)) : n14.push(t18.iceServers[i18]);
                            }
                            t18.iceServers = n14;
                        }
                        return new r19(t18, o13);
                    }, t17.RTCPeerConnection.prototype = r19.prototype, "generateCertificate" in r19 && Object.defineProperty(t17.RTCPeerConnection, "generateCertificate", {
                        get: function() {
                            return r19.generateCertificate;
                        }
                    });
                }
            }
            function f2(e4) {
                "object" === o5(e4) && e4.RTCTrackEvent && "receiver" in e4.RTCTrackEvent.prototype && !("transceiver" in e4.RTCTrackEvent.prototype) && Object.defineProperty(e4.RTCTrackEvent.prototype, "transceiver", {
                    get: function() {
                        return {
                            receiver: this.receiver
                        };
                    }
                });
            }
            function p4(e4) {
                var t17 = e4.RTCPeerConnection.prototype.createOffer;
                e4.RTCPeerConnection.prototype.createOffer = function(e5) {
                    if (e5) {
                        (void 0) !== e5.offerToReceiveAudio && (e5.offerToReceiveAudio = !!e5.offerToReceiveAudio);
                        var r20 = this.getTransceivers().find(function(e6) {
                            return "audio" === e6.receiver.track.kind;
                        });
                        !1 === e5.offerToReceiveAudio && r20 ? "sendrecv" === r20.direction ? r20.setDirection ? r20.setDirection("sendonly") : r20.direction = "sendonly" : "recvonly" === r20.direction && (r20.setDirection ? r20.setDirection("inactive") : r20.direction = "inactive") : !0 !== e5.offerToReceiveAudio || r20 || this.addTransceiver("audio"), (void 0) !== e5.offerToReceiveVideo && (e5.offerToReceiveVideo = !!e5.offerToReceiveVideo);
                        var o13 = this.getTransceivers().find(function(e6) {
                            return "video" === e6.receiver.track.kind;
                        });
                        !1 === e5.offerToReceiveVideo && o13 ? "sendrecv" === o13.direction ? o13.setDirection ? o13.setDirection("sendonly") : o13.direction = "sendonly" : "recvonly" === o13.direction && (o13.setDirection ? o13.setDirection("inactive") : o13.direction = "inactive") : !0 !== e5.offerToReceiveVideo || o13 || this.addTransceiver("video");
                    }
                    return t17.apply(this, arguments);
                };
            }
            function u(e4) {
                "object" !== o5(e4) || e4.AudioContext || (e4.AudioContext = e4.webkitAudioContext);
            }
        },
        {
            "../utils": "iSxC"
        }
    ],
    "GOQK": [
        function(require, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.shimRTCIceCandidate = a15, exports.shimMaxMessageSize = c6, exports.shimSendThrowTypeError = s9, exports.shimConnectionState = p4, exports.removeExtmapAllowMixed = d3, exports.shimAddIceCandidateNullOrEmpty = u;
            var e2 = r2(require("sdp")), t8 = o5(require("./utils"));
            function n2() {
                if ("function" != typeof WeakMap) return null;
                var e4 = new WeakMap;
                return n2 = function() {
                    return e4;
                }, e4;
            }
            function o5(e4) {
                if (e4 && e4.__esModule) return e4;
                if (null === e4 || "object" != typeof e4 && "function" != typeof e4) return {
                    default: e4
                };
                var t17 = n2();
                if (t17 && t17.has(e4)) return t17.get(e4);
                var o14 = {
                }, r2 = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for(var i14 in e4)if (Object.prototype.hasOwnProperty.call(e4, i14)) {
                    var a12 = r2 ? Object.getOwnPropertyDescriptor(e4, i14) : null;
                    a12 && (a12.get || a12.set) ? Object.defineProperty(o14, i14, a12) : o14[i14] = e4[i14];
                }
                return o14.default = e4, t17 && t17.set(e4, o14), o14;
            }
            function r2(e4) {
                return e4 && e4.__esModule ? e4 : {
                    default: e4
                };
            }
            function i14(e4) {
                return (i14 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e5) {
                    return typeof e5;
                } : function(e5) {
                    return e5 && "function" == typeof Symbol && e5.constructor === Symbol && e5 !== Symbol.prototype ? "symbol" : typeof e5;
                })(e4);
            }
            function a15(n15) {
                if (n15.RTCIceCandidate && !(n15.RTCIceCandidate && "foundation" in n15.RTCIceCandidate.prototype)) {
                    var o14 = n15.RTCIceCandidate;
                    n15.RTCIceCandidate = function(t17) {
                        if ("object" === i14(t17) && t17.candidate && 0 === t17.candidate.indexOf("a=") && ((t17 = JSON.parse(JSON.stringify(t17))).candidate = t17.candidate.substr(2)), t17.candidate && t17.candidate.length) {
                            var n16 = new o14(t17), r21 = e2.default.parseCandidate(t17.candidate), a16 = Object.assign(n16, r21);
                            return a16.toJSON = function() {
                                return {
                                    candidate: a16.candidate,
                                    sdpMid: a16.sdpMid,
                                    sdpMLineIndex: a16.sdpMLineIndex,
                                    usernameFragment: a16.usernameFragment
                                };
                            }, a16;
                        }
                        return new o14(t17);
                    }, n15.RTCIceCandidate.prototype = o14.prototype, t8.wrapPeerConnectionEvent(n15, "icecandidate", function(e4) {
                        return e4.candidate && Object.defineProperty(e4, "candidate", {
                            value: new n15.RTCIceCandidate(e4.candidate),
                            writable: "false"
                        }), e4;
                    });
                }
            }
            function c6(t17, n15) {
                if (t17.RTCPeerConnection) {
                    "sctp" in t17.RTCPeerConnection.prototype || Object.defineProperty(t17.RTCPeerConnection.prototype, "sctp", {
                        get: function() {
                            return (void 0) === this._sctp ? null : this._sctp;
                        }
                    });
                    var o15 = t17.RTCPeerConnection.prototype.setRemoteDescription;
                    t17.RTCPeerConnection.prototype.setRemoteDescription = function() {
                        if (this._sctp = null, "chrome" === n15.browser && n15.version >= 76) {
                            var { sdpSemantics: t18  } = this.getConfiguration();
                            "plan-b" === t18 && Object.defineProperty(this, "sctp", {
                                get: function() {
                                    return (void 0) === this._sctp ? null : this._sctp;
                                },
                                enumerable: !0,
                                configurable: !0
                            });
                        }
                        if ((function(t19) {
                            if (!t19 || !t19.sdp) return !1;
                            var n17 = e2.default.splitSections(t19.sdp);
                            return n17.shift(), n17.some(function(t20) {
                                var n18 = e2.default.parseMLine(t20);
                                return n18 && "application" === n18.kind && -1 !== n18.protocol.indexOf("SCTP");
                            });
                        })(arguments[0])) {
                            var r22, i19 = function(e4) {
                                var t19 = e4.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);
                                if (null === t19 || t19.length < 2) return -1;
                                var n17 = parseInt(t19[1], 10);
                                return n17 != n17 ? -1 : n17;
                            }(arguments[0]), a17 = (p4 = i19, d3 = 65536, "firefox" === n15.browser && (d3 = n15.version < 57 ? -1 === p4 ? 16384 : 2147483637 : n15.version < 60 ? 57 === n15.version ? 65535 : 65536 : 2147483637), d3), c7 = function(t19, o16) {
                                var r23 = 65536;
                                "firefox" === n15.browser && 57 === n15.version && (r23 = 65535);
                                var i20 = e2.default.matchPrefix(t19.sdp, "a=max-message-size:");
                                return i20.length > 0 ? r23 = parseInt(i20[0].substr(19), 10) : "firefox" === n15.browser && -1 !== o16 && (r23 = 2147483637), r23;
                            }(arguments[0], i19);
                            r22 = 0 === a17 && 0 === c7 ? Number.POSITIVE_INFINITY : 0 === a17 || 0 === c7 ? Math.max(a17, c7) : Math.min(a17, c7);
                            var s8 = {
                            };
                            Object.defineProperty(s8, "maxMessageSize", {
                                get: function() {
                                    return r22;
                                }
                            }), this._sctp = s8;
                        }
                        var p4, d3;
                        return o15.apply(this, arguments);
                    };
                }
            }
            function s9(e4) {
                if (e4.RTCPeerConnection && "createDataChannel" in e4.RTCPeerConnection.prototype) {
                    var n15 = e4.RTCPeerConnection.prototype.createDataChannel;
                    e4.RTCPeerConnection.prototype.createDataChannel = function() {
                        var e5 = n15.apply(this, arguments);
                        return o16(e5, this), e5;
                    }, t8.wrapPeerConnectionEvent(e4, "datachannel", function(e5) {
                        return o16(e5.channel, e5.target), e5;
                    });
                }
                function o16(e5, t17) {
                    var n17 = e5.send;
                    e5.send = function() {
                        var o17 = arguments[0], r23 = o17.length || o17.size || o17.byteLength;
                        if ("open" === e5.readyState && t17.sctp && r23 > t17.sctp.maxMessageSize) throw new TypeError("Message too large (can send a maximum of " + t17.sctp.maxMessageSize + " bytes)");
                        return n17.apply(e5, arguments);
                    };
                }
            }
            function p4(e4) {
                if (e4.RTCPeerConnection && !("connectionState" in e4.RTCPeerConnection.prototype)) {
                    var t17 = e4.RTCPeerConnection.prototype;
                    Object.defineProperty(t17, "connectionState", {
                        get: function() {
                            return ({
                                completed: "connected",
                                checking: "connecting"
                            })[this.iceConnectionState] || this.iceConnectionState;
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t17, "onconnectionstatechange", {
                        get: function() {
                            return this._onconnectionstatechange || null;
                        },
                        set: function(e5) {
                            this._onconnectionstatechange && (this.removeEventListener("connectionstatechange", this._onconnectionstatechange), delete this._onconnectionstatechange), e5 && this.addEventListener("connectionstatechange", this._onconnectionstatechange = e5);
                        },
                        enumerable: !0,
                        configurable: !0
                    }), [
                        "setLocalDescription",
                        "setRemoteDescription"
                    ].forEach(function(e5) {
                        var n17 = t17[e5];
                        t17[e5] = function() {
                            return this._connectionstatechangepoly || (this._connectionstatechangepoly = function(e6) {
                                var t19 = e6.target;
                                if (t19._lastConnectionState !== t19.connectionState) {
                                    t19._lastConnectionState = t19.connectionState;
                                    var n18 = new Event("connectionstatechange", e6);
                                    t19.dispatchEvent(n18);
                                }
                                return e6;
                            }, this.addEventListener("iceconnectionstatechange", this._connectionstatechangepoly)), n17.apply(this, arguments);
                        };
                    });
                }
            }
            function d3(e4, t19) {
                if (e4.RTCPeerConnection && !("chrome" === t19.browser && t19.version >= 71 || "safari" === t19.browser && t19.version >= 605)) {
                    var n17 = e4.RTCPeerConnection.prototype.setRemoteDescription;
                    e4.RTCPeerConnection.prototype.setRemoteDescription = function(t20) {
                        if (t20 && t20.sdp && -1 !== t20.sdp.indexOf("\na=extmap-allow-mixed")) {
                            var o16 = t20.sdp.split("\n").filter(function(e5) {
                                return "a=extmap-allow-mixed" !== e5.trim();
                            }).join("\n");
                            e4.RTCSessionDescription && t20 instanceof e4.RTCSessionDescription ? arguments[0] = new e4.RTCSessionDescription({
                                type: t20.type,
                                sdp: o16
                            }) : t20.sdp = o16;
                        }
                        return n17.apply(this, arguments);
                    };
                }
            }
            function u(e4, t19) {
                if (e4.RTCPeerConnection && e4.RTCPeerConnection.prototype) {
                    var n19 = e4.RTCPeerConnection.prototype.addIceCandidate;
                    n19 && 0 !== n19.length && (e4.RTCPeerConnection.prototype.addIceCandidate = function() {
                        return arguments[0] ? ("chrome" === t19.browser && t19.version < 78 || "firefox" === t19.browser && t19.version < 68 || "safari" === t19.browser) && arguments[0] && "" === arguments[0].candidate ? Promise.resolve() : n19.apply(this, arguments) : (arguments[1] && arguments[1].apply(null), Promise.resolve());
                    });
                }
            }
        },
        {
            "sdp": "YHvh",
            "./utils": "iSxC"
        }
    ],
    "KtlG": [
        function(require, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.adapterFactory = o5;
            var e2 = m(require("./utils")), i14 = m(require("./chrome/chrome_shim")), r2 = m(require("./edge/edge_shim")), s9 = m(require("./firefox/firefox_shim")), t8 = m(require("./safari/safari_shim")), a15 = m(require("./common_shim"));
            function n2() {
                if ("function" != typeof WeakMap) return null;
                var e4 = new WeakMap;
                return n2 = function() {
                    return e4;
                }, e4;
            }
            function m(e4) {
                if (e4 && e4.__esModule) return e4;
                if (null === e4 || "object" != typeof e4 && "function" != typeof e4) return {
                    default: e4
                };
                var i20 = n2();
                if (i20 && i20.has(e4)) return i20.get(e4);
                var r23 = {
                }, s10 = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for(var t19 in e4)if (Object.prototype.hasOwnProperty.call(e4, t19)) {
                    var a18 = s10 ? Object.getOwnPropertyDescriptor(e4, t19) : null;
                    a18 && (a18.get || a18.set) ? Object.defineProperty(r23, t19, a18) : r23[t19] = e4[t19];
                }
                return r23.default = e4, i20 && i20.set(e4, r23), r23;
            }
            function o5() {
                var { window: n20  } = arguments.length > 0 && (void 0) !== arguments[0] ? arguments[0] : {
                }, m1 = arguments.length > 1 && (void 0) !== arguments[1] ? arguments[1] : {
                    shimChrome: !0,
                    shimFirefox: !0,
                    shimEdge: !0,
                    shimSafari: !0
                }, o17 = e2.log, h = e2.detectBrowser(n20), d3 = {
                    browserDetails: h,
                    commonShim: a15,
                    extractVersion: e2.extractVersion,
                    disableLog: e2.disableLog,
                    disableWarnings: e2.disableWarnings
                };
                switch(h.browser){
                    case "chrome":
                        if (!i14 || !i14.shimPeerConnection || !m1.shimChrome) return o17("Chrome shim is not included in this adapter release."), d3;
                        if (null === h.version) return o17("Chrome shim can not determine version, not shimming."), d3;
                        o17("adapter.js shimming chrome."), d3.browserShim = i14, a15.shimAddIceCandidateNullOrEmpty(n20, h), i14.shimGetUserMedia(n20, h), i14.shimMediaStream(n20, h), i14.shimPeerConnection(n20, h), i14.shimOnTrack(n20, h), i14.shimAddTrackRemoveTrack(n20, h), i14.shimGetSendersWithDtmf(n20, h), i14.shimGetStats(n20, h), i14.shimSenderReceiverGetStats(n20, h), i14.fixNegotiationNeeded(n20, h), a15.shimRTCIceCandidate(n20, h), a15.shimConnectionState(n20, h), a15.shimMaxMessageSize(n20, h), a15.shimSendThrowTypeError(n20, h), a15.removeExtmapAllowMixed(n20, h);
                        break;
                    case "firefox":
                        if (!s9 || !s9.shimPeerConnection || !m1.shimFirefox) return o17("Firefox shim is not included in this adapter release."), d3;
                        o17("adapter.js shimming firefox."), d3.browserShim = s9, a15.shimAddIceCandidateNullOrEmpty(n20, h), s9.shimGetUserMedia(n20, h), s9.shimPeerConnection(n20, h), s9.shimOnTrack(n20, h), s9.shimRemoveStream(n20, h), s9.shimSenderGetStats(n20, h), s9.shimReceiverGetStats(n20, h), s9.shimRTCDataChannel(n20, h), s9.shimAddTransceiver(n20, h), s9.shimGetParameters(n20, h), s9.shimCreateOffer(n20, h), s9.shimCreateAnswer(n20, h), a15.shimRTCIceCandidate(n20, h), a15.shimConnectionState(n20, h), a15.shimMaxMessageSize(n20, h), a15.shimSendThrowTypeError(n20, h);
                        break;
                    case "edge":
                        if (!r2 || !r2.shimPeerConnection || !m1.shimEdge) return o17("MS edge shim is not included in this adapter release."), d3;
                        o17("adapter.js shimming edge."), d3.browserShim = r2, r2.shimGetUserMedia(n20, h), r2.shimGetDisplayMedia(n20, h), r2.shimPeerConnection(n20, h), r2.shimReplaceTrack(n20, h), a15.shimMaxMessageSize(n20, h), a15.shimSendThrowTypeError(n20, h);
                        break;
                    case "safari":
                        if (!t8 || !m1.shimSafari) return o17("Safari shim is not included in this adapter release."), d3;
                        o17("adapter.js shimming safari."), d3.browserShim = t8, a15.shimAddIceCandidateNullOrEmpty(n20, h), t8.shimRTCIceServerUrls(n20, h), t8.shimCreateOfferLegacy(n20, h), t8.shimCallbacksAPI(n20, h), t8.shimLocalStreamsAPI(n20, h), t8.shimRemoteStreamsAPI(n20, h), t8.shimTrackEventTransceiver(n20, h), t8.shimGetUserMedia(n20, h), t8.shimAudioContext(n20, h), a15.shimRTCIceCandidate(n20, h), a15.shimMaxMessageSize(n20, h), a15.shimSendThrowTypeError(n20, h), a15.removeExtmapAllowMixed(n20, h);
                        break;
                    default:
                        o17("Unsupported browser!");
                }
                return d3;
            }
        },
        {
            "./utils": "iSxC",
            "./chrome/chrome_shim": "uI5X",
            "./edge/edge_shim": "XRic",
            "./firefox/firefox_shim": "Fzdr",
            "./safari/safari_shim": "t1lL",
            "./common_shim": "GOQK"
        }
    ],
    "tI1X": [
        function(require, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.default = void 0;
            var e2 = require("./adapter_factory.js"), t8 = e2.adapterFactory({
                window: "undefined" == typeof window ? void 0 : window
            }), d3 = t8;
            exports.default = d3;
        },
        {
            "./adapter_factory.js": "KtlG"
        }
    ],
    "sXtV": [
        function(require, module, exports) {
            "use strict";
            var e2 = this && this.__importDefault || function(e4) {
                return e4 && e4.__esModule ? e4 : {
                    default: e4
                };
            };
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.webRTCAdapter = void 0;
            var t8 = e2(require("webrtc-adapter"));
            exports.webRTCAdapter = t8.default;
        },
        {
            "webrtc-adapter": "tI1X"
        }
    ],
    "I31f": [
        function(require, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.Supports = void 0;
            var r2 = require("./adapter");
            exports.Supports = new (function() {
                function e2() {
                    this.isIOS = [
                        "iPad",
                        "iPhone",
                        "iPod"
                    ].includes(navigator.platform), this.supportedBrowsers = [
                        "firefox",
                        "chrome",
                        "safari"
                    ], this.minFirefoxVersion = 59, this.minChromeVersion = 72, this.minSafariVersion = 605;
                }
                return e2.prototype.isWebRTCSupported = function() {
                    return "undefined" != typeof RTCPeerConnection;
                }, e2.prototype.isBrowserSupported = function() {
                    var r23 = this.getBrowser(), e4 = this.getVersion();
                    return !!this.supportedBrowsers.includes(r23) && ("chrome" === r23 ? e4 >= this.minChromeVersion : "firefox" === r23 ? e4 >= this.minFirefoxVersion : "safari" === r23 && !this.isIOS && e4 >= this.minSafariVersion);
                }, e2.prototype.getBrowser = function() {
                    return r2.webRTCAdapter.browserDetails.browser;
                }, e2.prototype.getVersion = function() {
                    return r2.webRTCAdapter.browserDetails.version || 0;
                }, e2.prototype.isUnifiedPlanSupported = function() {
                    var e4, i14 = this.getBrowser(), t8 = r2.webRTCAdapter.browserDetails.version || 0;
                    if ("chrome" === i14 && t8 < 72) return !1;
                    if ("firefox" === i14 && t8 >= 59) return !0;
                    if (!(window.RTCRtpTransceiver && "currentDirection" in RTCRtpTransceiver.prototype)) return !1;
                    var o5 = !1;
                    try {
                        (e4 = new RTCPeerConnection).addTransceiver("audio"), o5 = !0;
                    } catch (s9) {
                    } finally{
                        e4 && e4.close();
                    }
                    return o5;
                }, e2.prototype.toString = function() {
                    return "Supports: \n    browser:" + this.getBrowser() + " \n    version:" + this.getVersion() + " \n    isIOS:" + this.isIOS + " \n    isWebRTCSupported:" + this.isWebRTCSupported() + " \n    isBrowserSupported:" + this.isBrowserSupported() + " \n    isUnifiedPlanSupported:" + this.isUnifiedPlanSupported();
                }, e2;
            }());
        },
        {
            "./adapter": "sXtV"
        }
    ],
    "BHXf": [
        function(require, module, exports) {
            "use strict";
            var e2 = this && this.__createBinding || (Object.create ? function(e4, t8, r2, o5) {
                (void 0) === o5 && (o5 = r2), Object.defineProperty(e4, o5, {
                    enumerable: !0,
                    get: function() {
                        return t8[r2];
                    }
                });
            } : function(e4, t8, r2, o5) {
                (void 0) === o5 && (o5 = r2), e4[o5] = t8[r2];
            }), t8 = this && this.__setModuleDefault || (Object.create ? function(e4, t19) {
                Object.defineProperty(e4, "default", {
                    enumerable: !0,
                    value: t19
                });
            } : function(e4, t19) {
                e4.default = t19;
            }), r2 = this && this.__importStar || function(r23) {
                if (r23 && r23.__esModule) return r23;
                var o5 = {
                };
                if (null != r23) for(var n2 in r23)"default" !== n2 && Object.prototype.hasOwnProperty.call(r23, n2) && e2(o5, r23, n2);
                return t8(o5, r23), o5;
            };
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.util = void 0;
            var o5 = r2(require("peerjs-js-binarypack")), n2 = require("./supports"), i14 = {
                iceServers: [
                    {
                        urls: "stun:stun.l.google.com:19302"
                    },
                    {
                        urls: "turn:0.peerjs.com:3478",
                        username: "peerjs",
                        credential: "peerjsp"
                    }
                ],
                sdpSemantics: "unified-plan"
            };
            exports.util = new (function() {
                function e4() {
                    this.CLOUD_HOST = "0.peerjs.com", this.CLOUD_PORT = 443, this.chunkedBrowsers = {
                        Chrome: 1,
                        chrome: 1
                    }, this.chunkedMTU = 16300, this.defaultConfig = i14, this.browser = n2.Supports.getBrowser(), this.browserVersion = n2.Supports.getVersion(), this.supports = (function() {
                        var e5, t19 = {
                            browser: n2.Supports.isBrowserSupported(),
                            webRTC: n2.Supports.isWebRTCSupported(),
                            audioVideo: !1,
                            data: !1,
                            binaryBlob: !1,
                            reliable: !1
                        };
                        if (!t19.webRTC) return t19;
                        try {
                            e5 = new RTCPeerConnection(i14), t19.audioVideo = !0;
                            var r23 = void 0;
                            try {
                                r23 = e5.createDataChannel("_PEERJSTEST", {
                                    ordered: !0
                                }), t19.data = !0, t19.reliable = !!r23.ordered;
                                try {
                                    r23.binaryType = "blob", t19.binaryBlob = !n2.Supports.isIOS;
                                } catch (o17) {
                                }
                            } catch (o17) {
                            } finally{
                                r23 && r23.close();
                            }
                        } catch (o17) {
                        } finally{
                            e5 && e5.close();
                        }
                        return t19;
                    })(), this.pack = o5.pack, this.unpack = o5.unpack, this._dataCount = 1;
                }
                return e4.prototype.noop = function() {
                }, e4.prototype.validateId = function(e5) {
                    return !e5 || /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/.test(e5);
                }, e4.prototype.chunk = function(e5) {
                    for(var t19 = [], r23 = e5.size, o17 = Math.ceil(r23 / exports.util.chunkedMTU), n20 = 0, i20 = 0; i20 < r23;){
                        var a15 = Math.min(r23, i20 + exports.util.chunkedMTU), u = e5.slice(i20, a15), s9 = {
                            __peerData: this._dataCount,
                            n: n20,
                            data: u,
                            total: o17
                        };
                        t19.push(s9), i20 = a15, n20++;
                    }
                    return this._dataCount++, t19;
                }, e4.prototype.blobToArrayBuffer = function(e5, t19) {
                    var r23 = new FileReader;
                    return r23.onload = function(e6) {
                        e6.target && t19(e6.target.result);
                    }, r23.readAsArrayBuffer(e5), r23;
                }, e4.prototype.binaryStringToArrayBuffer = function(e5) {
                    for(var t19 = new Uint8Array(e5.length), r23 = 0; r23 < e5.length; r23++)t19[r23] = 255 & e5.charCodeAt(r23);
                    return t19.buffer;
                }, e4.prototype.randomToken = function() {
                    return Math.random().toString(36).substr(2);
                }, e4.prototype.isSecure = function() {
                    return "https:" === location.protocol;
                }, e4;
            }());
        },
        {
            "peerjs-js-binarypack": "kdPp",
            "./supports": "I31f"
        }
    ],
    "JJlS": [
        function(require, module, exports) {
            "use strict";
            var e2 = Object.prototype.hasOwnProperty, t8 = "~";
            function n2() {
            }
            function r2(e4, t19, n20) {
                this.fn = e4, this.context = t19, this.once = n20 || !1;
            }
            function o5(e4, n20, o17, s10, i14) {
                if ("function" != typeof o17) throw new TypeError("The listener must be a function");
                var c6 = new r2(o17, s10 || e4, i14), f2 = t8 ? t8 + n20 : n20;
                return e4._events[f2] ? e4._events[f2].fn ? e4._events[f2] = [
                    e4._events[f2],
                    c6
                ] : e4._events[f2].push(c6) : (e4._events[f2] = c6, e4._eventsCount++), e4;
            }
            function s10(e4, t19) {
                0 == --e4._eventsCount ? e4._events = new n2 : delete e4._events[t19];
            }
            function i14() {
                this._events = new n2, this._eventsCount = 0;
            }
            Object.create && (n2.prototype = Object.create(null), (new n2).__proto__ || (t8 = !1)), i14.prototype.eventNames = function() {
                var n20, r23, o17 = [];
                if (0 === this._eventsCount) return o17;
                for(r23 in n20 = this._events)e2.call(n20, r23) && o17.push(t8 ? r23.slice(1) : r23);
                return Object.getOwnPropertySymbols ? o17.concat(Object.getOwnPropertySymbols(n20)) : o17;
            }, i14.prototype.listeners = function(e4) {
                var n20 = t8 ? t8 + e4 : e4, r23 = this._events[n20];
                if (!r23) return [];
                if (r23.fn) return [
                    r23.fn
                ];
                for(var o17 = 0, s11 = r23.length, i20 = new Array(s11); o17 < s11; o17++)i20[o17] = r23[o17].fn;
                return i20;
            }, i14.prototype.listenerCount = function(e4) {
                var n20 = t8 ? t8 + e4 : e4, r23 = this._events[n20];
                return r23 ? r23.fn ? 1 : r23.length : 0;
            }, i14.prototype.emit = function(e4, n20, r23, o17, s11, i20) {
                var c6 = t8 ? t8 + e4 : e4;
                if (!this._events[c6]) return !1;
                var f2, u, a19 = this._events[c6], l3 = arguments.length;
                if (a19.fn) {
                    switch(a19.once && this.removeListener(e4, a19.fn, void 0, !0), l3){
                        case 1:
                            return a19.fn.call(a19.context), !0;
                        case 2:
                            return a19.fn.call(a19.context, n20), !0;
                        case 3:
                            return a19.fn.call(a19.context, n20, r23), !0;
                        case 4:
                            return a19.fn.call(a19.context, n20, r23, o17), !0;
                        case 5:
                            return a19.fn.call(a19.context, n20, r23, o17, s11), !0;
                        case 6:
                            return a19.fn.call(a19.context, n20, r23, o17, s11, i20), !0;
                    }
                    for(u = 1, f2 = new Array(l3 - 1); u < l3; u++)f2[u - 1] = arguments[u];
                    a19.fn.apply(a19.context, f2);
                } else {
                    var v, h = a19.length;
                    for(u = 0; u < h; u++)switch(a19[u].once && this.removeListener(e4, a19[u].fn, void 0, !0), l3){
                        case 1:
                            a19[u].fn.call(a19[u].context);
                            break;
                        case 2:
                            a19[u].fn.call(a19[u].context, n20);
                            break;
                        case 3:
                            a19[u].fn.call(a19[u].context, n20, r23);
                            break;
                        case 4:
                            a19[u].fn.call(a19[u].context, n20, r23, o17);
                            break;
                        default:
                            if (!f2) for(v = 1, f2 = new Array(l3 - 1); v < l3; v++)f2[v - 1] = arguments[v];
                            a19[u].fn.apply(a19[u].context, f2);
                    }
                }
                return !0;
            }, i14.prototype.on = function(e4, t19, n20) {
                return o5(this, e4, t19, n20, !1);
            }, i14.prototype.once = function(e4, t19, n20) {
                return o5(this, e4, t19, n20, !0);
            }, i14.prototype.removeListener = function(e4, n20, r23, o17) {
                var i20 = t8 ? t8 + e4 : e4;
                if (!this._events[i20]) return this;
                if (!n20) return s10(this, i20), this;
                var c6 = this._events[i20];
                if (c6.fn) c6.fn !== n20 || o17 && !c6.once || r23 && c6.context !== r23 || s10(this, i20);
                else {
                    for(var f2 = 0, u = [], a19 = c6.length; f2 < a19; f2++)(c6[f2].fn !== n20 || o17 && !c6[f2].once || r23 && c6[f2].context !== r23) && u.push(c6[f2]);
                    u.length ? this._events[i20] = 1 === u.length ? u[0] : u : s10(this, i20);
                }
                return this;
            }, i14.prototype.removeAllListeners = function(e4) {
                var r23;
                return e4 ? (r23 = t8 ? t8 + e4 : e4, this._events[r23] && s10(this, r23)) : (this._events = new n2, this._eventsCount = 0), this;
            }, i14.prototype.off = i14.prototype.removeListener, i14.prototype.addListener = i14.prototype.on, i14.prefixed = t8, i14.EventEmitter = i14, "undefined" != typeof module && (module.exports = i14);
        },
        {
        }
    ],
    "WOs9": [
        function(require, module, exports) {
            "use strict";
            var r2 = this && this.__read || function(r23, e2) {
                var o5 = "function" == typeof Symbol && r23[Symbol.iterator];
                if (!o5) return r23;
                var t8, n2, l3 = o5.call(r23), i14 = [];
                try {
                    for(; ((void 0) === e2 || (e2--) > 0) && !(t8 = l3.next()).done;)i14.push(t8.value);
                } catch (s10) {
                    n2 = {
                        error: s10
                    };
                } finally{
                    try {
                        t8 && !t8.done && (o5 = l3.return) && o5.call(l3);
                    } finally{
                        if (n2) throw n2.error;
                    }
                }
                return i14;
            }, e2 = this && this.__spreadArray || function(r23, e4) {
                for(var o5 = 0, t8 = e4.length, n2 = r23.length; o5 < t8; o5++, n2++)r23[n2] = e4[o5];
                return r23;
            };
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.LogLevel = void 0;
            var o5, t8 = "PeerJS: ";
            !function(r23) {
                r23[r23.Disabled = 0] = "Disabled", r23[r23.Errors = 1] = "Errors", r23[r23.Warnings = 2] = "Warnings", r23[r23.All = 3] = "All";
            }(o5 = exports.LogLevel || (exports.LogLevel = {
            }));
            var n2 = function() {
                function n20() {
                    this._logLevel = o5.Disabled;
                }
                return Object.defineProperty(n20.prototype, "logLevel", {
                    get: function() {
                        return this._logLevel;
                    },
                    set: function(r23) {
                        this._logLevel = r23;
                    },
                    enumerable: !1,
                    configurable: !0
                }), n20.prototype.log = function() {
                    for(var t19 = [], n21 = 0; n21 < arguments.length; n21++)t19[n21] = arguments[n21];
                    this._logLevel >= o5.All && this._print.apply(this, e2([
                        o5.All
                    ], r2(t19)));
                }, n20.prototype.warn = function() {
                    for(var t19 = [], n21 = 0; n21 < arguments.length; n21++)t19[n21] = arguments[n21];
                    this._logLevel >= o5.Warnings && this._print.apply(this, e2([
                        o5.Warnings
                    ], r2(t19)));
                }, n20.prototype.error = function() {
                    for(var t19 = [], n21 = 0; n21 < arguments.length; n21++)t19[n21] = arguments[n21];
                    this._logLevel >= o5.Errors && this._print.apply(this, e2([
                        o5.Errors
                    ], r2(t19)));
                }, n20.prototype.setLogFunction = function(r23) {
                    this._print = r23;
                }, n20.prototype._print = function(n21) {
                    for(var l3 = [], i14 = 1; i14 < arguments.length; i14++)l3[i14 - 1] = arguments[i14];
                    var s10 = e2([
                        t8
                    ], r2(l3));
                    for(var a20 in s10)s10[a20] instanceof Error && (s10[a20] = "(" + s10[a20].name + ") " + s10[a20].message);
                    n21 >= o5.All ? console.log.apply(console, e2([], r2(s10))) : n21 >= o5.Warnings ? console.warn.apply(console, e2([
                        "WARNING"
                    ], r2(s10))) : n21 >= o5.Errors && console.error.apply(console, e2([
                        "ERROR"
                    ], r2(s10)));
                }, n20;
            }();
            exports.default = new n2;
        },
        {
        }
    ],
    "ZRYf": [
        function(require, module, exports) {
            "use strict";
            var e2, r2, o5, n2, t8, a20, i14;
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.ServerMessageType = exports.SocketEventType = exports.SerializationType = exports.PeerErrorType = exports.PeerEventType = exports.ConnectionType = exports.ConnectionEventType = void 0, (function(e4) {
                e4.Open = "open", e4.Stream = "stream", e4.Data = "data", e4.Close = "close", e4.Error = "error", e4.IceStateChanged = "iceStateChanged";
            })(e2 = exports.ConnectionEventType || (exports.ConnectionEventType = {
            })), (function(e4) {
                e4.Data = "data", e4.Media = "media";
            })(r2 = exports.ConnectionType || (exports.ConnectionType = {
            })), (function(e4) {
                e4.Open = "open", e4.Close = "close", e4.Connection = "connection", e4.Call = "call", e4.Disconnected = "disconnected", e4.Error = "error";
            })(o5 = exports.PeerEventType || (exports.PeerEventType = {
            })), (function(e4) {
                e4.BrowserIncompatible = "browser-incompatible", e4.Disconnected = "disconnected", e4.InvalidID = "invalid-id", e4.InvalidKey = "invalid-key", e4.Network = "network", e4.PeerUnavailable = "peer-unavailable", e4.SslUnavailable = "ssl-unavailable", e4.ServerError = "server-error", e4.SocketError = "socket-error", e4.SocketClosed = "socket-closed", e4.UnavailableID = "unavailable-id", e4.WebRTC = "webrtc";
            })(n2 = exports.PeerErrorType || (exports.PeerErrorType = {
            })), (function(e4) {
                e4.Binary = "binary", e4.BinaryUTF8 = "binary-utf8", e4.JSON = "json";
            })(t8 = exports.SerializationType || (exports.SerializationType = {
            })), (function(e4) {
                e4.Message = "message", e4.Disconnected = "disconnected", e4.Error = "error", e4.Close = "close";
            })(a20 = exports.SocketEventType || (exports.SocketEventType = {
            })), (function(e4) {
                e4.Heartbeat = "HEARTBEAT", e4.Candidate = "CANDIDATE", e4.Offer = "OFFER", e4.Answer = "ANSWER", e4.Open = "OPEN", e4.Error = "ERROR", e4.IdTaken = "ID-TAKEN", e4.InvalidKey = "INVALID-KEY", e4.Leave = "LEAVE", e4.Expire = "EXPIRE";
            })(i14 = exports.ServerMessageType || (exports.ServerMessageType = {
            }));
        },
        {
        }
    ],
    "wJlv": [
        function(require, module, exports) {
            "use strict";
            var e2 = this && this.__extends || function() {
                var e4 = function(t8, n2) {
                    return (e4 = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(e5, t19) {
                        e5.__proto__ = t19;
                    } || function(e5, t19) {
                        for(var n20 in t19)Object.prototype.hasOwnProperty.call(t19, n20) && (e5[n20] = t19[n20]);
                    })(t8, n2);
                };
                return function(t8, n2) {
                    if ("function" != typeof n2 && null !== n2) throw new TypeError("Class extends value " + String(n2) + " is not a constructor or null");
                    function o5() {
                        this.constructor = t8;
                    }
                    e4(t8, n2), t8.prototype = null === n2 ? Object.create(n2) : (o5.prototype = n2.prototype, new o5);
                };
            }(), t8 = this && this.__read || function(e4, t19) {
                var n2 = "function" == typeof Symbol && e4[Symbol.iterator];
                if (!n2) return e4;
                var o5, s10, r2 = n2.call(e4), i14 = [];
                try {
                    for(; ((void 0) === t19 || (t19--) > 0) && !(o5 = r2.next()).done;)i14.push(o5.value);
                } catch (c6) {
                    s10 = {
                        error: c6
                    };
                } finally{
                    try {
                        o5 && !o5.done && (n2 = r2.return) && n2.call(r2);
                    } finally{
                        if (s10) throw s10.error;
                    }
                }
                return i14;
            }, n2 = this && this.__spreadArray || function(e4, t19) {
                for(var n20 = 0, o5 = t19.length, s10 = e4.length; n20 < o5; n20++, s10++)e4[s10] = t19[n20];
                return e4;
            }, o5 = this && this.__values || function(e4) {
                var t19 = "function" == typeof Symbol && Symbol.iterator, n20 = t19 && e4[t19], o17 = 0;
                if (n20) return n20.call(e4);
                if (e4 && "number" == typeof e4.length) return {
                    next: function() {
                        return e4 && o17 >= e4.length && (e4 = void 0), {
                            value: e4 && e4[o17++],
                            done: !e4
                        };
                    }
                };
                throw new TypeError(t19 ? "Object is not iterable." : "Symbol.iterator is not defined.");
            }, s10 = this && this.__importDefault || function(e4) {
                return e4 && e4.__esModule ? e4 : {
                    default: e4
                };
            };
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.Socket = void 0;
            var r2 = require("eventemitter3"), i14 = s10(require("./logger")), c6 = require("./enums"), a20 = function(s11) {
                function r23(e4, t19, n20, o17, r24, i20) {
                    (void 0) === i20 && (i20 = 5000);
                    var c8 = s11.call(this) || this;
                    c8.pingInterval = i20, c8._disconnected = !0, c8._messagesQueue = [];
                    var a21 = e4 ? "wss://" : "ws://";
                    return c8._baseUrl = a21 + t19 + ":" + n20 + o17 + "peerjs?key=" + r24, c8;
                }
                return e2(r23, s11), r23.prototype.start = function(e4, t19) {
                    var n20 = this;
                    this._id = e4;
                    var o17 = this._baseUrl + "&id=" + e4 + "&token=" + t19;
                    !this._socket && this._disconnected && (this._socket = new WebSocket(o17), this._disconnected = !1, this._socket.onmessage = function(e5) {
                        var t20;
                        try {
                            t20 = JSON.parse(e5.data), i14.default.log("Server message received:", t20);
                        } catch (o18) {
                            return void i14.default.log("Invalid server message", e5.data);
                        }
                        n20.emit(c6.SocketEventType.Message, t20);
                    }, this._socket.onclose = function(e5) {
                        n20._disconnected || (i14.default.log("Socket closed.", e5), n20._cleanup(), n20._disconnected = !0, n20.emit(c6.SocketEventType.Disconnected));
                    }, this._socket.onopen = function() {
                        n20._disconnected || (n20._sendQueuedMessages(), i14.default.log("Socket open"), n20._scheduleHeartbeat());
                    });
                }, r23.prototype._scheduleHeartbeat = function() {
                    var e4 = this;
                    this._wsPingTimer = setTimeout(function() {
                        e4._sendHeartbeat();
                    }, this.pingInterval);
                }, r23.prototype._sendHeartbeat = function() {
                    if (this._wsOpen()) {
                        var e4 = JSON.stringify({
                            type: c6.ServerMessageType.Heartbeat
                        });
                        this._socket.send(e4), this._scheduleHeartbeat();
                    } else i14.default.log("Cannot send heartbeat, because socket closed");
                }, r23.prototype._wsOpen = function() {
                    return !!this._socket && 1 === this._socket.readyState;
                }, r23.prototype._sendQueuedMessages = function() {
                    var e5, s12, r24 = n2([], t8(this._messagesQueue));
                    this._messagesQueue = [];
                    try {
                        for(var i20 = o5(r24), c8 = i20.next(); !c8.done; c8 = i20.next()){
                            var a21 = c8.value;
                            this.send(a21);
                        }
                    } catch (u) {
                        e5 = {
                            error: u
                        };
                    } finally{
                        try {
                            c8 && !c8.done && (s12 = i20.return) && s12.call(i20);
                        } finally{
                            if (e5) throw e5.error;
                        }
                    }
                }, r23.prototype.send = function(e5) {
                    if (!this._disconnected) {
                        if (this._id) {
                            if (e5.type) {
                                if (this._wsOpen()) {
                                    var t19 = JSON.stringify(e5);
                                    this._socket.send(t19);
                                }
                            } else this.emit(c6.SocketEventType.Error, "Invalid message");
                        } else this._messagesQueue.push(e5);
                    }
                }, r23.prototype.close = function() {
                    this._disconnected || (this._cleanup(), this._disconnected = !0);
                }, r23.prototype._cleanup = function() {
                    this._socket && (this._socket.onopen = this._socket.onmessage = this._socket.onclose = null, this._socket.close(), this._socket = void 0), clearTimeout(this._wsPingTimer);
                }, r23;
            }(r2.EventEmitter);
            exports.Socket = a20;
        },
        {
            "eventemitter3": "JJlS",
            "./logger": "WOs9",
            "./enums": "ZRYf"
        }
    ],
    "HCdX": [
        function(require, module, exports) {
            "use strict";
            var e2 = this && this.__assign || function() {
                return (e2 = Object.assign || function(e5) {
                    for(var n2, t8 = 1, o5 = arguments.length; t8 < o5; t8++)for(var i14 in n2 = arguments[t8])Object.prototype.hasOwnProperty.call(n2, i14) && (e5[i14] = n2[i14]);
                    return e5;
                }).apply(this, arguments);
            }, n2 = this && this.__awaiter || function(e5, n20, t8, o5) {
                return new (t8 || (t8 = Promise))(function(i14, r2) {
                    function c6(e6) {
                        try {
                            s10(o5.next(e6));
                        } catch (n21) {
                            r2(n21);
                        }
                    }
                    function a20(e6) {
                        try {
                            s10(o5.throw(e6));
                        } catch (n21) {
                            r2(n21);
                        }
                    }
                    function s10(e6) {
                        var n21;
                        e6.done ? i14(e6.value) : (n21 = e6.value, n21 instanceof t8 ? n21 : new t8(function(e7) {
                            e7(n21);
                        })).then(c6, a20);
                    }
                    s10((o5 = o5.apply(e5, n20 || [])).next());
                });
            }, t8 = this && this.__generator || function(e5, n20) {
                var t20, o5, i14, r2, c6 = {
                    label: 0,
                    sent: function() {
                        if (1 & i14[0]) throw i14[1];
                        return i14[1];
                    },
                    trys: [],
                    ops: []
                };
                function a20(r23) {
                    return function(a22) {
                        return (function(r24) {
                            if (t20) throw new TypeError("Generator is already executing.");
                            for(; c6;)try {
                                if (t20 = 1, o5 && (i14 = 2 & r24[0] ? o5.return : r24[0] ? o5.throw || ((i14 = o5.return) && i14.call(o5), 0) : o5.next) && !(i14 = i14.call(o5, r24[1])).done) return i14;
                                switch(o5 = 0, i14 && (r24 = [
                                    2 & r24[0],
                                    i14.value
                                ]), r24[0]){
                                    case 0:
                                    case 1:
                                        i14 = r24;
                                        break;
                                    case 4:
                                        return c6.label++, {
                                            value: r24[1],
                                            done: !1
                                        };
                                    case 5:
                                        c6.label++, o5 = r24[1], r24 = [
                                            0
                                        ];
                                        continue;
                                    case 7:
                                        r24 = c6.ops.pop(), c6.trys.pop();
                                        continue;
                                    default:
                                        if (!(i14 = (i14 = c6.trys).length > 0 && i14[i14.length - 1]) && (6 === r24[0] || 2 === r24[0])) {
                                            c6 = 0;
                                            continue;
                                        }
                                        if (3 === r24[0] && (!i14 || r24[1] > i14[0] && r24[1] < i14[3])) {
                                            c6.label = r24[1];
                                            break;
                                        }
                                        if (6 === r24[0] && c6.label < i14[1]) {
                                            c6.label = i14[1], i14 = r24;
                                            break;
                                        }
                                        if (i14 && c6.label < i14[2]) {
                                            c6.label = i14[2], c6.ops.push(r24);
                                            break;
                                        }
                                        i14[2] && c6.ops.pop(), c6.trys.pop();
                                        continue;
                                }
                                r24 = n20.call(e5, c6);
                            } catch (a23) {
                                r24 = [
                                    6,
                                    a23
                                ], o5 = 0;
                            } finally{
                                t20 = i14 = 0;
                            }
                            if (5 & r24[0]) throw r24[1];
                            return {
                                value: r24[0] ? r24[1] : void 0,
                                done: !0
                            };
                        })([
                            r23,
                            a22
                        ]);
                    };
                }
                return r2 = {
                    next: a20(0),
                    throw: a20(1),
                    return: a20(2)
                }, "function" == typeof Symbol && (r2[Symbol.iterator] = function() {
                    return this;
                }), r2;
            }, o5 = this && this.__importDefault || function(e5) {
                return e5 && e5.__esModule ? e5 : {
                    default: e5
                };
            };
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.Negotiator = void 0;
            var i14 = require("./util"), r2 = o5(require("./logger")), c6 = require("./enums"), a20 = function() {
                function o17(e5) {
                    this.connection = e5;
                }
                return o17.prototype.startConnection = function(e5) {
                    var n20 = this._startPeerConnection();
                    if (this.connection.peerConnection = n20, this.connection.type === c6.ConnectionType.Media && e5._stream && this._addTracksToConnection(e5._stream, n20), e5.originator) {
                        if (this.connection.type === c6.ConnectionType.Data) {
                            var t20 = this.connection, o18 = {
                                ordered: !!e5.reliable
                            }, i20 = n20.createDataChannel(t20.label, o18);
                            t20.initialize(i20);
                        }
                        this._makeOffer();
                    } else this.handleSDP("OFFER", e5.sdp);
                }, o17.prototype._startPeerConnection = function() {
                    r2.default.log("Creating RTCPeerConnection.");
                    var e5 = new RTCPeerConnection(this.connection.provider.options.config);
                    return this._setupListeners(e5), e5;
                }, o17.prototype._setupListeners = function(e5) {
                    var n20 = this, t21 = this.connection.peer, o19 = this.connection.connectionId, a22 = this.connection.type, s10 = this.connection.provider;
                    r2.default.log("Listening for ICE candidates."), e5.onicecandidate = function(e6) {
                        e6.candidate && e6.candidate.candidate && (r2.default.log("Received ICE candidates for " + t21 + ":", e6.candidate), s10.socket.send({
                            type: c6.ServerMessageType.Candidate,
                            payload: {
                                candidate: e6.candidate,
                                type: a22,
                                connectionId: o19
                            },
                            dst: t21
                        }));
                    }, e5.oniceconnectionstatechange = function() {
                        switch(e5.iceConnectionState){
                            case "failed":
                                r2.default.log("iceConnectionState is failed, closing connections to " + t21), n20.connection.emit(c6.ConnectionEventType.Error, new Error("Negotiation of connection to " + t21 + " failed.")), n20.connection.close();
                                break;
                            case "closed":
                                r2.default.log("iceConnectionState is closed, closing connections to " + t21), n20.connection.emit(c6.ConnectionEventType.Error, new Error("Connection to " + t21 + " closed.")), n20.connection.close();
                                break;
                            case "disconnected":
                                r2.default.log("iceConnectionState changed to disconnected on the connection with " + t21);
                                break;
                            case "completed":
                                e5.onicecandidate = i14.util.noop;
                        }
                        n20.connection.emit(c6.ConnectionEventType.IceStateChanged, e5.iceConnectionState);
                    }, r2.default.log("Listening for data channel"), e5.ondatachannel = function(e6) {
                        r2.default.log("Received data channel");
                        var n21 = e6.channel;
                        s10.getConnection(t21, o19).initialize(n21);
                    }, r2.default.log("Listening for remote stream"), e5.ontrack = function(e6) {
                        r2.default.log("Received remote stream");
                        var i21 = e6.streams[0], a23 = s10.getConnection(t21, o19);
                        if (a23.type === c6.ConnectionType.Media) {
                            var d3 = a23;
                            n20._addStreamToMediaConnection(i21, d3);
                        }
                    };
                }, o17.prototype.cleanup = function() {
                    r2.default.log("Cleaning up PeerConnection to " + this.connection.peer);
                    var e5 = this.connection.peerConnection;
                    if (e5) {
                        this.connection.peerConnection = null, e5.onicecandidate = e5.oniceconnectionstatechange = e5.ondatachannel = e5.ontrack = function() {
                        };
                        var n20 = "closed" !== e5.signalingState, t21 = !1;
                        if (this.connection.type === c6.ConnectionType.Data) {
                            var o19 = this.connection.dataChannel;
                            o19 && (t21 = !!o19.readyState && "closed" !== o19.readyState);
                        }
                        (n20 || t21) && e5.close();
                    }
                }, o17.prototype._makeOffer = function() {
                    return n2(this, void 0, Promise, function() {
                        var n21, o20, a22, s10, d4, l3, u;
                        return t8(this, function(t22) {
                            switch(t22.label){
                                case 0:
                                    n21 = this.connection.peerConnection, o20 = this.connection.provider, t22.label = 1;
                                case 1:
                                    return t22.trys.push([
                                        1,
                                        7,
                                        ,
                                        8
                                    ]), [
                                        4,
                                        n21.createOffer(this.connection.options.constraints)
                                    ];
                                case 2:
                                    a22 = t22.sent(), r2.default.log("Created offer."), this.connection.options.sdpTransform && "function" == typeof this.connection.options.sdpTransform && (a22.sdp = this.connection.options.sdpTransform(a22.sdp) || a22.sdp), t22.label = 3;
                                case 3:
                                    return t22.trys.push([
                                        3,
                                        5,
                                        ,
                                        6
                                    ]), [
                                        4,
                                        n21.setLocalDescription(a22)
                                    ];
                                case 4:
                                    return t22.sent(), r2.default.log("Set localDescription:", a22, "for:" + this.connection.peer), s10 = {
                                        sdp: a22,
                                        type: this.connection.type,
                                        connectionId: this.connection.connectionId,
                                        metadata: this.connection.metadata,
                                        browser: i14.util.browser
                                    }, this.connection.type === c6.ConnectionType.Data && (d4 = this.connection, s10 = e2(e2({
                                    }, s10), {
                                        label: d4.label,
                                        reliable: d4.reliable,
                                        serialization: d4.serialization
                                    })), o20.socket.send({
                                        type: c6.ServerMessageType.Offer,
                                        payload: s10,
                                        dst: this.connection.peer
                                    }), [
                                        3,
                                        6
                                    ];
                                case 5:
                                    return "OperationError: Failed to set local offer sdp: Called in wrong state: kHaveRemoteOffer" != (l3 = t22.sent()) && (o20.emitError(c6.PeerErrorType.WebRTC, l3), r2.default.log("Failed to setLocalDescription, ", l3)), [
                                        3,
                                        6
                                    ];
                                case 6:
                                    return [
                                        3,
                                        8
                                    ];
                                case 7:
                                    return u = t22.sent(), o20.emitError(c6.PeerErrorType.WebRTC, u), r2.default.log("Failed to createOffer, ", u), [
                                        3,
                                        8
                                    ];
                                case 8:
                                    return [
                                        2
                                    ];
                            }
                        });
                    });
                }, o17.prototype._makeAnswer = function() {
                    return n2(this, void 0, Promise, function() {
                        var e5, n21, o20, a22, s10;
                        return t8(this, function(t22) {
                            switch(t22.label){
                                case 0:
                                    e5 = this.connection.peerConnection, n21 = this.connection.provider, t22.label = 1;
                                case 1:
                                    return t22.trys.push([
                                        1,
                                        7,
                                        ,
                                        8
                                    ]), [
                                        4,
                                        e5.createAnswer()
                                    ];
                                case 2:
                                    o20 = t22.sent(), r2.default.log("Created answer."), this.connection.options.sdpTransform && "function" == typeof this.connection.options.sdpTransform && (o20.sdp = this.connection.options.sdpTransform(o20.sdp) || o20.sdp), t22.label = 3;
                                case 3:
                                    return t22.trys.push([
                                        3,
                                        5,
                                        ,
                                        6
                                    ]), [
                                        4,
                                        e5.setLocalDescription(o20)
                                    ];
                                case 4:
                                    return t22.sent(), r2.default.log("Set localDescription:", o20, "for:" + this.connection.peer), n21.socket.send({
                                        type: c6.ServerMessageType.Answer,
                                        payload: {
                                            sdp: o20,
                                            type: this.connection.type,
                                            connectionId: this.connection.connectionId,
                                            browser: i14.util.browser
                                        },
                                        dst: this.connection.peer
                                    }), [
                                        3,
                                        6
                                    ];
                                case 5:
                                    return a22 = t22.sent(), n21.emitError(c6.PeerErrorType.WebRTC, a22), r2.default.log("Failed to setLocalDescription, ", a22), [
                                        3,
                                        6
                                    ];
                                case 6:
                                    return [
                                        3,
                                        8
                                    ];
                                case 7:
                                    return s10 = t22.sent(), n21.emitError(c6.PeerErrorType.WebRTC, s10), r2.default.log("Failed to create answer, ", s10), [
                                        3,
                                        8
                                    ];
                                case 8:
                                    return [
                                        2
                                    ];
                            }
                        });
                    });
                }, o17.prototype.handleSDP = function(e5, o20) {
                    return n2(this, void 0, Promise, function() {
                        var n21, i21, a22, s10;
                        return t8(this, function(t22) {
                            switch(t22.label){
                                case 0:
                                    o20 = new RTCSessionDescription(o20), n21 = this.connection.peerConnection, i21 = this.connection.provider, r2.default.log("Setting remote description", o20), a22 = this, t22.label = 1;
                                case 1:
                                    return t22.trys.push([
                                        1,
                                        5,
                                        ,
                                        6
                                    ]), [
                                        4,
                                        n21.setRemoteDescription(o20)
                                    ];
                                case 2:
                                    return t22.sent(), r2.default.log("Set remoteDescription:" + e5 + " for:" + this.connection.peer), "OFFER" !== e5 ? [
                                        3,
                                        4
                                    ] : [
                                        4,
                                        a22._makeAnswer()
                                    ];
                                case 3:
                                    t22.sent(), t22.label = 4;
                                case 4:
                                    return [
                                        3,
                                        6
                                    ];
                                case 5:
                                    return s10 = t22.sent(), i21.emitError(c6.PeerErrorType.WebRTC, s10), r2.default.log("Failed to setRemoteDescription, ", s10), [
                                        3,
                                        6
                                    ];
                                case 6:
                                    return [
                                        2
                                    ];
                            }
                        });
                    });
                }, o17.prototype.handleCandidate = function(e5) {
                    return n2(this, void 0, Promise, function() {
                        var n21, o20, i21, a22, s10, d4;
                        return t8(this, function(t22) {
                            switch(t22.label){
                                case 0:
                                    r2.default.log("handleCandidate:", e5), n21 = e5.candidate, o20 = e5.sdpMLineIndex, i21 = e5.sdpMid, a22 = this.connection.peerConnection, s10 = this.connection.provider, t22.label = 1;
                                case 1:
                                    return t22.trys.push([
                                        1,
                                        3,
                                        ,
                                        4
                                    ]), [
                                        4,
                                        a22.addIceCandidate(new RTCIceCandidate({
                                            sdpMid: i21,
                                            sdpMLineIndex: o20,
                                            candidate: n21
                                        }))
                                    ];
                                case 2:
                                    return t22.sent(), r2.default.log("Added ICE candidate for:" + this.connection.peer), [
                                        3,
                                        4
                                    ];
                                case 3:
                                    return d4 = t22.sent(), s10.emitError(c6.PeerErrorType.WebRTC, d4), r2.default.log("Failed to handleCandidate, ", d4), [
                                        3,
                                        4
                                    ];
                                case 4:
                                    return [
                                        2
                                    ];
                            }
                        });
                    });
                }, o17.prototype._addTracksToConnection = function(e5, n21) {
                    if (r2.default.log("add tracks from stream " + e5.id + " to peer connection"), !n21.addTrack) return r2.default.error("Your browser does't support RTCPeerConnection#addTrack. Ignored.");
                    e5.getTracks().forEach(function(t22) {
                        n21.addTrack(t22, e5);
                    });
                }, o17.prototype._addStreamToMediaConnection = function(e5, n21) {
                    r2.default.log("add stream " + e5.id + " to media connection " + n21.connectionId), n21.addStream(e5);
                }, o17;
            }();
            exports.Negotiator = a20;
        },
        {
            "./util": "BHXf",
            "./logger": "WOs9",
            "./enums": "ZRYf"
        }
    ],
    "tQFK": [
        function(require, module, exports) {
            "use strict";
            var t8 = this && this.__extends || function() {
                var t22 = function(e2, n2) {
                    return (t22 = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(t23, e5) {
                        t23.__proto__ = e5;
                    } || function(t23, e5) {
                        for(var n21 in e5)Object.prototype.hasOwnProperty.call(e5, n21) && (t23[n21] = e5[n21]);
                    })(e2, n2);
                };
                return function(e2, n2) {
                    if ("function" != typeof n2 && null !== n2) throw new TypeError("Class extends value " + String(n2) + " is not a constructor or null");
                    function o5() {
                        this.constructor = e2;
                    }
                    t22(e2, n2), e2.prototype = null === n2 ? Object.create(n2) : (o5.prototype = n2.prototype, new o5);
                };
            }();
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.BaseConnection = void 0;
            var e2 = require("eventemitter3"), n2 = function(e5) {
                function n21(t22, n22, o5) {
                    var r2 = e5.call(this) || this;
                    return r2.peer = t22, r2.provider = n22, r2.options = o5, r2._open = !1, r2.metadata = o5.metadata, r2;
                }
                return t8(n21, e5), Object.defineProperty(n21.prototype, "open", {
                    get: function() {
                        return this._open;
                    },
                    enumerable: !1,
                    configurable: !0
                }), n21;
            }(e2.EventEmitter);
            exports.BaseConnection = n2;
        },
        {
            "eventemitter3": "JJlS"
        }
    ],
    "dbHP": [
        function(require, module, exports) {
            "use strict";
            var e2 = this && this.__extends || function() {
                var e5 = function(t8, o5) {
                    return (e5 = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(e6, t22) {
                        e6.__proto__ = t22;
                    } || function(e6, t22) {
                        for(var o17 in t22)Object.prototype.hasOwnProperty.call(t22, o17) && (e6[o17] = t22[o17]);
                    })(t8, o5);
                };
                return function(t8, o5) {
                    if ("function" != typeof o5 && null !== o5) throw new TypeError("Class extends value " + String(o5) + " is not a constructor or null");
                    function r2() {
                        this.constructor = t8;
                    }
                    e5(t8, o5), t8.prototype = null === o5 ? Object.create(o5) : (r2.prototype = o5.prototype, new r2);
                };
            }(), t8 = this && this.__assign || function() {
                return (t8 = Object.assign || function(e5) {
                    for(var t22, o5 = 1, r2 = arguments.length; o5 < r2; o5++)for(var n2 in t22 = arguments[o5])Object.prototype.hasOwnProperty.call(t22, n2) && (e5[n2] = t22[n2]);
                    return e5;
                }).apply(this, arguments);
            }, o5 = this && this.__values || function(e5) {
                var t22 = "function" == typeof Symbol && Symbol.iterator, o17 = t22 && e5[t22], r2 = 0;
                if (o17) return o17.call(e5);
                if (e5 && "number" == typeof e5.length) return {
                    next: function() {
                        return e5 && r2 >= e5.length && (e5 = void 0), {
                            value: e5 && e5[r2++],
                            done: !e5
                        };
                    }
                };
                throw new TypeError(t22 ? "Object is not iterable." : "Symbol.iterator is not defined.");
            }, r2 = this && this.__importDefault || function(e5) {
                return e5 && e5.__esModule ? e5 : {
                    default: e5
                };
            };
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.MediaConnection = void 0;
            var n2 = require("./util"), i14 = r2(require("./logger")), a20 = require("./negotiator"), s10 = require("./enums"), l3 = require("./baseconnection"), c6 = function(r23) {
                function l4(e5, t22, o17) {
                    var i21 = r23.call(this, e5, t22, o17) || this;
                    return i21._localStream = i21.options._stream, i21.connectionId = i21.options.connectionId || l4.ID_PREFIX + n2.util.randomToken(), i21._negotiator = new a20.Negotiator(i21), i21._localStream && i21._negotiator.startConnection({
                        _stream: i21._localStream,
                        originator: !0
                    }), i21;
                }
                return e2(l4, r23), Object.defineProperty(l4.prototype, "type", {
                    get: function() {
                        return s10.ConnectionType.Media;
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(l4.prototype, "localStream", {
                    get: function() {
                        return this._localStream;
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(l4.prototype, "remoteStream", {
                    get: function() {
                        return this._remoteStream;
                    },
                    enumerable: !1,
                    configurable: !0
                }), l4.prototype.addStream = function(e5) {
                    i14.default.log("Receiving stream", e5), this._remoteStream = e5, r23.prototype.emit.call(this, s10.ConnectionEventType.Stream, e5);
                }, l4.prototype.handleMessage = function(e5) {
                    var t22 = e5.type, o17 = e5.payload;
                    switch(e5.type){
                        case s10.ServerMessageType.Answer:
                            this._negotiator.handleSDP(t22, o17.sdp), this._open = !0;
                            break;
                        case s10.ServerMessageType.Candidate:
                            this._negotiator.handleCandidate(o17.candidate);
                            break;
                        default:
                            i14.default.warn("Unrecognized message type:" + t22 + " from peer:" + this.peer);
                    }
                }, l4.prototype.answer = function(e5, r24) {
                    var n21, a22;
                    if ((void 0) === r24 && (r24 = {
                    }), this._localStream) i14.default.warn("Local stream already exists on this MediaConnection. Are you answering a call twice?");
                    else {
                        this._localStream = e5, r24 && r24.sdpTransform && (this.options.sdpTransform = r24.sdpTransform), this._negotiator.startConnection(t8(t8({
                        }, this.options._payload), {
                            _stream: e5
                        }));
                        var s11 = this.provider._getMessages(this.connectionId);
                        try {
                            for(var l5 = o5(s11), c8 = l5.next(); !c8.done; c8 = l5.next()){
                                var p4 = c8.value;
                                this.handleMessage(p4);
                            }
                        } catch (u) {
                            n21 = {
                                error: u
                            };
                        } finally{
                            try {
                                c8 && !c8.done && (a22 = l5.return) && a22.call(l5);
                            } finally{
                                if (n21) throw n21.error;
                            }
                        }
                        this._open = !0;
                    }
                }, l4.prototype.close = function() {
                    this._negotiator && (this._negotiator.cleanup(), this._negotiator = null), this._localStream = null, this._remoteStream = null, this.provider && (this.provider._removeConnection(this), this.provider = null), this.options && this.options._stream && (this.options._stream = null), this.open && (this._open = !1, r23.prototype.emit.call(this, s10.ConnectionEventType.Close));
                }, l4.ID_PREFIX = "mc_", l4;
            }(l3.BaseConnection);
            exports.MediaConnection = c6;
        },
        {
            "./util": "BHXf",
            "./logger": "WOs9",
            "./negotiator": "HCdX",
            "./enums": "ZRYf",
            "./baseconnection": "tQFK"
        }
    ],
    "GGp6": [
        function(require, module, exports) {
            "use strict";
            var e2 = this && this.__extends || function() {
                var e5 = function(t8, r2) {
                    return (e5 = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(e6, t22) {
                        e6.__proto__ = t22;
                    } || function(e6, t22) {
                        for(var r23 in t22)Object.prototype.hasOwnProperty.call(t22, r23) && (e6[r23] = t22[r23]);
                    })(t8, r2);
                };
                return function(t8, r2) {
                    if ("function" != typeof r2 && null !== r2) throw new TypeError("Class extends value " + String(r2) + " is not a constructor or null");
                    function o5() {
                        this.constructor = t8;
                    }
                    e5(t8, r2), t8.prototype = null === r2 ? Object.create(r2) : (o5.prototype = r2.prototype, new o5);
                };
            }(), t8 = this && this.__importDefault || function(e5) {
                return e5 && e5.__esModule ? e5 : {
                    default: e5
                };
            };
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.EncodingQueue = void 0;
            var r2 = require("eventemitter3"), o5 = t8(require("./logger")), n2 = function(t22) {
                function r23() {
                    var e5 = t22.call(this) || this;
                    return e5.fileReader = new FileReader, e5._queue = [], e5._processing = !1, e5.fileReader.onload = function(t23) {
                        e5._processing = !1, t23.target && e5.emit("done", t23.target.result), e5.doNextTask();
                    }, e5.fileReader.onerror = function(t23) {
                        o5.default.error("EncodingQueue error:", t23), e5._processing = !1, e5.destroy(), e5.emit("error", t23);
                    }, e5;
                }
                return e2(r23, t22), Object.defineProperty(r23.prototype, "queue", {
                    get: function() {
                        return this._queue;
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(r23.prototype, "size", {
                    get: function() {
                        return this.queue.length;
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(r23.prototype, "processing", {
                    get: function() {
                        return this._processing;
                    },
                    enumerable: !1,
                    configurable: !0
                }), r23.prototype.enque = function(e5) {
                    this.queue.push(e5), this.processing || this.doNextTask();
                }, r23.prototype.destroy = function() {
                    this.fileReader.abort(), this._queue = [];
                }, r23.prototype.doNextTask = function() {
                    0 !== this.size && (this.processing || (this._processing = !0, this.fileReader.readAsArrayBuffer(this.queue.shift())));
                }, r23;
            }(r2.EventEmitter);
            exports.EncodingQueue = n2;
        },
        {
            "eventemitter3": "JJlS",
            "./logger": "WOs9"
        }
    ],
    "GBTQ": [
        function(require, module, exports) {
            "use strict";
            var e2 = this && this.__extends || function() {
                var e5 = function(t8, n2) {
                    return (e5 = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(e6, t22) {
                        e6.__proto__ = t22;
                    } || function(e6, t22) {
                        for(var n21 in t22)Object.prototype.hasOwnProperty.call(t22, n21) && (e6[n21] = t22[n21]);
                    })(t8, n2);
                };
                return function(t8, n2) {
                    if ("function" != typeof n2 && null !== n2) throw new TypeError("Class extends value " + String(n2) + " is not a constructor or null");
                    function i14() {
                        this.constructor = t8;
                    }
                    e5(t8, n2), t8.prototype = null === n2 ? Object.create(n2) : (i14.prototype = n2.prototype, new i14);
                };
            }(), t8 = this && this.__values || function(e5) {
                var t22 = "function" == typeof Symbol && Symbol.iterator, n2 = t22 && e5[t22], i14 = 0;
                if (n2) return n2.call(e5);
                if (e5 && "number" == typeof e5.length) return {
                    next: function() {
                        return e5 && i14 >= e5.length && (e5 = void 0), {
                            value: e5 && e5[i14++],
                            done: !e5
                        };
                    }
                };
                throw new TypeError(t22 ? "Object is not iterable." : "Symbol.iterator is not defined.");
            }, n2 = this && this.__importDefault || function(e5) {
                return e5 && e5.__esModule ? e5 : {
                    default: e5
                };
            };
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.DataConnection = void 0;
            var i14 = require("./util"), o5 = n2(require("./logger")), r2 = require("./negotiator"), a20 = require("./enums"), s10 = require("./baseconnection"), u = require("./encodingQueue"), l3 = function(n21) {
                function s12(e5, t22, l4) {
                    var f3 = n21.call(this, e5, t22, l4) || this;
                    return f3.stringify = JSON.stringify, f3.parse = JSON.parse, f3._buffer = [], f3._bufferSize = 0, f3._buffering = !1, f3._chunkedData = {
                    }, f3._encodingQueue = new u.EncodingQueue, f3.connectionId = f3.options.connectionId || s12.ID_PREFIX + i14.util.randomToken(), f3.label = f3.options.label || f3.connectionId, f3.serialization = f3.options.serialization || a20.SerializationType.Binary, f3.reliable = !!f3.options.reliable, f3._encodingQueue.on("done", function(e6) {
                        f3._bufferedSend(e6);
                    }), f3._encodingQueue.on("error", function() {
                        o5.default.error("DC#" + f3.connectionId + ": Error occured in encoding from blob to arraybuffer, close DC"), f3.close();
                    }), f3._negotiator = new r2.Negotiator(f3), f3._negotiator.startConnection(f3.options._payload || {
                        originator: !0
                    }), f3;
                }
                return e2(s12, n21), Object.defineProperty(s12.prototype, "type", {
                    get: function() {
                        return a20.ConnectionType.Data;
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(s12.prototype, "dataChannel", {
                    get: function() {
                        return this._dc;
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(s12.prototype, "bufferSize", {
                    get: function() {
                        return this._bufferSize;
                    },
                    enumerable: !1,
                    configurable: !0
                }), s12.prototype.initialize = function(e5) {
                    this._dc = e5, this._configureDataChannel();
                }, s12.prototype._configureDataChannel = function() {
                    var e5 = this;
                    i14.util.supports.binaryBlob && !i14.util.supports.reliable || (this.dataChannel.binaryType = "arraybuffer"), this.dataChannel.onopen = function() {
                        o5.default.log("DC#" + e5.connectionId + " dc connection success"), e5._open = !0, e5.emit(a20.ConnectionEventType.Open);
                    }, this.dataChannel.onmessage = function(t22) {
                        o5.default.log("DC#" + e5.connectionId + " dc onmessage:", t22.data), e5._handleDataMessage(t22);
                    }, this.dataChannel.onclose = function() {
                        o5.default.log("DC#" + e5.connectionId + " dc closed for:", e5.peer), e5.close();
                    };
                }, s12.prototype._handleDataMessage = function(e5) {
                    var t22 = this, o17 = e5.data, r23 = o17.constructor, s13 = o17;
                    if (this.serialization === a20.SerializationType.Binary || this.serialization === a20.SerializationType.BinaryUTF8) {
                        if (r23 === Blob) return void i14.util.blobToArrayBuffer(o17, function(e6) {
                            var n22 = i14.util.unpack(e6);
                            t22.emit(a20.ConnectionEventType.Data, n22);
                        });
                        if (r23 === ArrayBuffer) s13 = i14.util.unpack(o17);
                        else if (r23 === String) {
                            var u1 = i14.util.binaryStringToArrayBuffer(o17);
                            s13 = i14.util.unpack(u1);
                        }
                    } else this.serialization === a20.SerializationType.JSON && (s13 = this.parse(o17));
                    s13.__peerData ? this._handleChunk(s13) : n21.prototype.emit.call(this, a20.ConnectionEventType.Data, s13);
                }, s12.prototype._handleChunk = function(e5) {
                    var t22 = e5.__peerData, n22 = this._chunkedData[t22] || {
                        data: [],
                        count: 0,
                        total: e5.total
                    };
                    if (n22.data[e5.n] = e5.data, n22.count++, this._chunkedData[t22] = n22, n22.total === n22.count) {
                        delete this._chunkedData[t22];
                        var i21 = new Blob(n22.data);
                        this._handleDataMessage({
                            data: i21
                        });
                    }
                }, s12.prototype.close = function() {
                    this._buffer = [], this._bufferSize = 0, this._chunkedData = {
                    }, this._negotiator && (this._negotiator.cleanup(), this._negotiator = null), this.provider && (this.provider._removeConnection(this), this.provider = null), this.dataChannel && (this.dataChannel.onopen = null, this.dataChannel.onmessage = null, this.dataChannel.onclose = null, this._dc = null), this._encodingQueue && (this._encodingQueue.destroy(), this._encodingQueue.removeAllListeners(), this._encodingQueue = null), this.open && (this._open = !1, n21.prototype.emit.call(this, a20.ConnectionEventType.Close));
                }, s12.prototype.send = function(e5, t22) {
                    if (this.open) {
                        if (this.serialization === a20.SerializationType.JSON) this._bufferedSend(this.stringify(e5));
                        else if (this.serialization === a20.SerializationType.Binary || this.serialization === a20.SerializationType.BinaryUTF8) {
                            var o17 = i14.util.pack(e5);
                            if (!t22 && o17.size > i14.util.chunkedMTU) return void this._sendChunks(o17);
                            i14.util.supports.binaryBlob ? this._bufferedSend(o17) : this._encodingQueue.enque(o17);
                        } else this._bufferedSend(e5);
                    } else n21.prototype.emit.call(this, a20.ConnectionEventType.Error, new Error("Connection is not open. You should listen for the `open` event before sending messages."));
                }, s12.prototype._bufferedSend = function(e5) {
                    !this._buffering && this._trySend(e5) || (this._buffer.push(e5), this._bufferSize = this._buffer.length);
                }, s12.prototype._trySend = function(e5) {
                    var t22 = this;
                    if (!this.open) return !1;
                    if (this.dataChannel.bufferedAmount > s12.MAX_BUFFERED_AMOUNT) return this._buffering = !0, setTimeout(function() {
                        t22._buffering = !1, t22._tryBuffer();
                    }, 50), !1;
                    try {
                        this.dataChannel.send(e5);
                    } catch (n22) {
                        return o5.default.error("DC#:" + this.connectionId + " Error when sending:", n22), this._buffering = !0, this.close(), !1;
                    }
                    return !0;
                }, s12.prototype._tryBuffer = function() {
                    if (this.open && 0 !== this._buffer.length) {
                        var e5 = this._buffer[0];
                        this._trySend(e5) && (this._buffer.shift(), this._bufferSize = this._buffer.length, this._tryBuffer());
                    }
                }, s12.prototype._sendChunks = function(e6) {
                    var n22, r23, a22 = i14.util.chunk(e6);
                    o5.default.log("DC#" + this.connectionId + " Try to send " + a22.length + " chunks...");
                    try {
                        for(var s13 = t8(a22), u2 = s13.next(); !u2.done; u2 = s13.next()){
                            var l4 = u2.value;
                            this.send(l4, !0);
                        }
                    } catch (f3) {
                        n22 = {
                            error: f3
                        };
                    } finally{
                        try {
                            u2 && !u2.done && (r23 = s13.return) && r23.call(s13);
                        } finally{
                            if (n22) throw n22.error;
                        }
                    }
                }, s12.prototype.handleMessage = function(e6) {
                    var t22 = e6.payload;
                    switch(e6.type){
                        case a20.ServerMessageType.Answer:
                            this._negotiator.handleSDP(e6.type, t22.sdp);
                            break;
                        case a20.ServerMessageType.Candidate:
                            this._negotiator.handleCandidate(t22.candidate);
                            break;
                        default:
                            o5.default.warn("Unrecognized message type:", e6.type, "from peer:", this.peer);
                    }
                }, s12.ID_PREFIX = "dc_", s12.MAX_BUFFERED_AMOUNT = 8388608, s12;
            }(s10.BaseConnection);
            exports.DataConnection = l3;
        },
        {
            "./util": "BHXf",
            "./logger": "WOs9",
            "./negotiator": "HCdX",
            "./enums": "ZRYf",
            "./baseconnection": "tQFK",
            "./encodingQueue": "GGp6"
        }
    ],
    "in7L": [
        function(require, module, exports) {
            "use strict";
            var t8 = this && this.__awaiter || function(t22, e2, r2, o5) {
                return new (r2 || (r2 = Promise))(function(n2, s10) {
                    function i14(t23) {
                        try {
                            a20(o5.next(t23));
                        } catch (e6) {
                            s10(e6);
                        }
                    }
                    function u2(t23) {
                        try {
                            a20(o5.throw(t23));
                        } catch (e6) {
                            s10(e6);
                        }
                    }
                    function a20(t23) {
                        var e6;
                        t23.done ? n2(t23.value) : (e6 = t23.value, e6 instanceof r2 ? e6 : new r2(function(t24) {
                            t24(e6);
                        })).then(i14, u2);
                    }
                    a20((o5 = o5.apply(t22, e2 || [])).next());
                });
            }, e2 = this && this.__generator || function(t22, e6) {
                var r2, o5, n2, s10, i14 = {
                    label: 0,
                    sent: function() {
                        if (1 & n2[0]) throw n2[1];
                        return n2[1];
                    },
                    trys: [],
                    ops: []
                };
                function u2(s12) {
                    return function(u3) {
                        return (function(s13) {
                            if (r2) throw new TypeError("Generator is already executing.");
                            for(; i14;)try {
                                if (r2 = 1, o5 && (n2 = 2 & s13[0] ? o5.return : s13[0] ? o5.throw || ((n2 = o5.return) && n2.call(o5), 0) : o5.next) && !(n2 = n2.call(o5, s13[1])).done) return n2;
                                switch(o5 = 0, n2 && (s13 = [
                                    2 & s13[0],
                                    n2.value
                                ]), s13[0]){
                                    case 0:
                                    case 1:
                                        n2 = s13;
                                        break;
                                    case 4:
                                        return i14.label++, {
                                            value: s13[1],
                                            done: !1
                                        };
                                    case 5:
                                        i14.label++, o5 = s13[1], s13 = [
                                            0
                                        ];
                                        continue;
                                    case 7:
                                        s13 = i14.ops.pop(), i14.trys.pop();
                                        continue;
                                    default:
                                        if (!(n2 = (n2 = i14.trys).length > 0 && n2[n2.length - 1]) && (6 === s13[0] || 2 === s13[0])) {
                                            i14 = 0;
                                            continue;
                                        }
                                        if (3 === s13[0] && (!n2 || s13[1] > n2[0] && s13[1] < n2[3])) {
                                            i14.label = s13[1];
                                            break;
                                        }
                                        if (6 === s13[0] && i14.label < n2[1]) {
                                            i14.label = n2[1], n2 = s13;
                                            break;
                                        }
                                        if (n2 && i14.label < n2[2]) {
                                            i14.label = n2[2], i14.ops.push(s13);
                                            break;
                                        }
                                        n2[2] && i14.ops.pop(), i14.trys.pop();
                                        continue;
                                }
                                s13 = e6.call(t22, i14);
                            } catch (u4) {
                                s13 = [
                                    6,
                                    u4
                                ], o5 = 0;
                            } finally{
                                r2 = n2 = 0;
                            }
                            if (5 & s13[0]) throw s13[1];
                            return {
                                value: s13[0] ? s13[1] : void 0,
                                done: !0
                            };
                        })([
                            s12,
                            u3
                        ]);
                    };
                }
                return s10 = {
                    next: u2(0),
                    throw: u2(1),
                    return: u2(2)
                }, "function" == typeof Symbol && (s10[Symbol.iterator] = function() {
                    return this;
                }), s10;
            }, r2 = this && this.__importDefault || function(t22) {
                return t22 && t22.__esModule ? t22 : {
                    default: t22
                };
            };
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.API = void 0;
            var o5 = require("./util"), n2 = r2(require("./logger")), s10 = function() {
                function r23(t22) {
                    this._options = t22;
                }
                return r23.prototype._buildUrl = function(t22) {
                    var e6 = (this._options.secure ? "https://" : "http://") + this._options.host + ":" + this._options.port + this._options.path + this._options.key + "/" + t22;
                    return e6 += "?ts=" + (new Date).getTime() + Math.random();
                }, r23.prototype.retrieveId = function() {
                    return t8(this, void 0, Promise, function() {
                        var t22, r24, s12, i14;
                        return e2(this, function(e6) {
                            switch(e6.label){
                                case 0:
                                    t22 = this._buildUrl("id"), e6.label = 1;
                                case 1:
                                    return e6.trys.push([
                                        1,
                                        3,
                                        ,
                                        4
                                    ]), [
                                        4,
                                        fetch(t22)
                                    ];
                                case 2:
                                    if (200 !== (r24 = e6.sent()).status) throw new Error("Error. Status:" + r24.status);
                                    return [
                                        2,
                                        r24.text()
                                    ];
                                case 3:
                                    throw s12 = e6.sent(), n2.default.error("Error retrieving ID", s12), i14 = "", "/" === this._options.path && this._options.host !== o5.util.CLOUD_HOST && (i14 = " If you passed in a `path` to your self-hosted PeerServer, you'll also need to pass in that same path when creating a new Peer."), new Error("Could not get an ID from the server." + i14);
                                case 4:
                                    return [
                                        2
                                    ];
                            }
                        });
                    });
                }, r23.prototype.listAllPeers = function() {
                    return t8(this, void 0, Promise, function() {
                        var t22, r24, s12, i14;
                        return e2(this, function(e6) {
                            switch(e6.label){
                                case 0:
                                    t22 = this._buildUrl("peers"), e6.label = 1;
                                case 1:
                                    return e6.trys.push([
                                        1,
                                        3,
                                        ,
                                        4
                                    ]), [
                                        4,
                                        fetch(t22)
                                    ];
                                case 2:
                                    if (200 !== (r24 = e6.sent()).status) {
                                        if (401 === r24.status) throw s12 = "", s12 = this._options.host === o5.util.CLOUD_HOST ? "It looks like you're using the cloud server. You can email team@peerjs.com to enable peer listing for your API key." : "You need to enable `allow_discovery` on your self-hosted PeerServer to use this feature.", new Error("It doesn't look like you have permission to list peers IDs. " + s12);
                                        throw new Error("Error. Status:" + r24.status);
                                    }
                                    return [
                                        2,
                                        r24.json()
                                    ];
                                case 3:
                                    throw i14 = e6.sent(), n2.default.error("Error retrieving list peers", i14), new Error("Could not get list peers from the server." + i14);
                                case 4:
                                    return [
                                        2
                                    ];
                            }
                        });
                    });
                }, r23;
            }();
            exports.API = s10;
        },
        {
            "./util": "BHXf",
            "./logger": "WOs9"
        }
    ],
    "Hxpd": [
        function(require, module, exports) {
            "use strict";
            var e2 = this && this.__extends || function() {
                var e6 = function(t8, n2) {
                    return (e6 = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(e7, t22) {
                        e7.__proto__ = t22;
                    } || function(e7, t22) {
                        for(var n21 in t22)Object.prototype.hasOwnProperty.call(t22, n21) && (e7[n21] = t22[n21]);
                    })(t8, n2);
                };
                return function(t8, n2) {
                    if ("function" != typeof n2 && null !== n2) throw new TypeError("Class extends value " + String(n2) + " is not a constructor or null");
                    function r2() {
                        this.constructor = t8;
                    }
                    e6(t8, n2), t8.prototype = null === n2 ? Object.create(n2) : (r2.prototype = n2.prototype, new r2);
                };
            }(), t8 = this && this.__assign || function() {
                return (t8 = Object.assign || function(e6) {
                    for(var t22, n2 = 1, r2 = arguments.length; n2 < r2; n2++)for(var o5 in t22 = arguments[n2])Object.prototype.hasOwnProperty.call(t22, o5) && (e6[o5] = t22[o5]);
                    return e6;
                }).apply(this, arguments);
            }, n2 = this && this.__values || function(e6) {
                var t22 = "function" == typeof Symbol && Symbol.iterator, n21 = t22 && e6[t22], r2 = 0;
                if (n21) return n21.call(e6);
                if (e6 && "number" == typeof e6.length) return {
                    next: function() {
                        return e6 && r2 >= e6.length && (e6 = void 0), {
                            value: e6 && e6[r2++],
                            done: !e6
                        };
                    }
                };
                throw new TypeError(t22 ? "Object is not iterable." : "Symbol.iterator is not defined.");
            }, r2 = this && this.__read || function(e6, t22) {
                var n21 = "function" == typeof Symbol && e6[Symbol.iterator];
                if (!n21) return e6;
                var r23, o5, i14 = n21.call(e6), s10 = [];
                try {
                    for(; ((void 0) === t22 || (t22--) > 0) && !(r23 = i14.next()).done;)s10.push(r23.value);
                } catch (a20) {
                    o5 = {
                        error: a20
                    };
                } finally{
                    try {
                        r23 && !r23.done && (n21 = i14.return) && n21.call(i14);
                    } finally{
                        if (o5) throw o5.error;
                    }
                }
                return s10;
            }, o5 = this && this.__importDefault || function(e6) {
                return e6 && e6.__esModule ? e6 : {
                    default: e6
                };
            };
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.Peer = void 0;
            var i14 = require("eventemitter3"), s10 = require("./util"), a20 = o5(require("./logger")), c6 = require("./socket"), l3 = require("./mediaconnection"), u2 = require("./dataconnection"), d4 = require("./enums"), p5 = require("./api"), h = function() {
                return function() {
                };
            }(), f3 = function(o20) {
                function i22(e6, n21) {
                    var r23, c9 = o20.call(this) || this;
                    return c9._id = null, c9._lastServerId = null, c9._destroyed = !1, c9._disconnected = !1, c9._open = !1, c9._connections = new Map, c9._lostMessages = new Map, e6 && e6.constructor == Object ? n21 = e6 : e6 && (r23 = e6.toString()), n21 = t8({
                        debug: 0,
                        host: s10.util.CLOUD_HOST,
                        port: s10.util.CLOUD_PORT,
                        path: "/",
                        key: i22.DEFAULT_KEY,
                        token: s10.util.randomToken(),
                        config: s10.util.defaultConfig
                    }, n21), c9._options = n21, "/" === c9._options.host && (c9._options.host = window.location.hostname), c9._options.path && ("/" !== c9._options.path[0] && (c9._options.path = "/" + c9._options.path), "/" !== c9._options.path[c9._options.path.length - 1] && (c9._options.path += "/")), (void 0) === c9._options.secure && c9._options.host !== s10.util.CLOUD_HOST ? c9._options.secure = s10.util.isSecure() : c9._options.host == s10.util.CLOUD_HOST && (c9._options.secure = !0), c9._options.logFunction && a20.default.setLogFunction(c9._options.logFunction), a20.default.logLevel = c9._options.debug || 0, c9._api = new p5.API(n21), c9._socket = c9._createServerConnection(), s10.util.supports.audioVideo || s10.util.supports.data ? r23 && !s10.util.validateId(r23) ? (c9._delayedAbort(d4.PeerErrorType.InvalidID, 'ID "' + r23 + '" is invalid'), c9) : (r23 ? c9._initialize(r23) : c9._api.retrieveId().then(function(e7) {
                        return c9._initialize(e7);
                    }).catch(function(e7) {
                        return c9._abort(d4.PeerErrorType.ServerError, e7);
                    }), c9) : (c9._delayedAbort(d4.PeerErrorType.BrowserIncompatible, "The current browser does not support WebRTC"), c9);
                }
                return e2(i22, o20), Object.defineProperty(i22.prototype, "id", {
                    get: function() {
                        return this._id;
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(i22.prototype, "options", {
                    get: function() {
                        return this._options;
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(i22.prototype, "open", {
                    get: function() {
                        return this._open;
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(i22.prototype, "socket", {
                    get: function() {
                        return this._socket;
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(i22.prototype, "connections", {
                    get: function() {
                        var e6, t22, o21 = Object.create(null);
                        try {
                            for(var i23 = n2(this._connections), s12 = i23.next(); !s12.done; s12 = i23.next()){
                                var a22 = r2(s12.value, 2), c9 = a22[0], l6 = a22[1];
                                o21[c9] = l6;
                            }
                        } catch (u3) {
                            e6 = {
                                error: u3
                            };
                        } finally{
                            try {
                                s12 && !s12.done && (t22 = i23.return) && t22.call(i23);
                            } finally{
                                if (e6) throw e6.error;
                            }
                        }
                        return o21;
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(i22.prototype, "destroyed", {
                    get: function() {
                        return this._destroyed;
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(i22.prototype, "disconnected", {
                    get: function() {
                        return this._disconnected;
                    },
                    enumerable: !1,
                    configurable: !0
                }), i22.prototype._createServerConnection = function() {
                    var e6 = this, t22 = new c6.Socket(this._options.secure, this._options.host, this._options.port, this._options.path, this._options.key, this._options.pingInterval);
                    return t22.on(d4.SocketEventType.Message, function(t23) {
                        e6._handleMessage(t23);
                    }), t22.on(d4.SocketEventType.Error, function(t23) {
                        e6._abort(d4.PeerErrorType.SocketError, t23);
                    }), t22.on(d4.SocketEventType.Disconnected, function() {
                        e6.disconnected || (e6.emitError(d4.PeerErrorType.Network, "Lost connection to server."), e6.disconnect());
                    }), t22.on(d4.SocketEventType.Close, function() {
                        e6.disconnected || e6._abort(d4.PeerErrorType.SocketClosed, "Underlying socket is already closed.");
                    }), t22;
                }, i22.prototype._initialize = function(e6) {
                    this._id = e6, this.socket.start(e6, this._options.token);
                }, i22.prototype._handleMessage = function(e6) {
                    var t22, r23, o21 = e6.type, i23 = e6.payload, s12 = e6.src;
                    switch(o21){
                        case d4.ServerMessageType.Open:
                            this._lastServerId = this.id, this._open = !0, this.emit(d4.PeerEventType.Open, this.id);
                            break;
                        case d4.ServerMessageType.Error:
                            this._abort(d4.PeerErrorType.ServerError, i23.msg);
                            break;
                        case d4.ServerMessageType.IdTaken:
                            this._abort(d4.PeerErrorType.UnavailableID, 'ID "' + this.id + '" is taken');
                            break;
                        case d4.ServerMessageType.InvalidKey:
                            this._abort(d4.PeerErrorType.InvalidKey, 'API KEY "' + this._options.key + '" is invalid');
                            break;
                        case d4.ServerMessageType.Leave:
                            a20.default.log("Received leave message from " + s12), this._cleanupPeer(s12), this._connections.delete(s12);
                            break;
                        case d4.ServerMessageType.Expire:
                            this.emitError(d4.PeerErrorType.PeerUnavailable, "Could not connect to peer " + s12);
                            break;
                        case d4.ServerMessageType.Offer:
                            var c10 = i23.connectionId;
                            if ((_ = this.getConnection(s12, c10)) && (_.close(), a20.default.warn("Offer received for existing Connection ID:" + c10)), i23.type === d4.ConnectionType.Media) _ = new l3.MediaConnection(s12, this, {
                                connectionId: c10,
                                _payload: i23,
                                metadata: i23.metadata
                            }), this._addConnection(s12, _), this.emit(d4.PeerEventType.Call, _);
                            else {
                                if (i23.type !== d4.ConnectionType.Data) return void a20.default.warn("Received malformed connection type:" + i23.type);
                                _ = new u2.DataConnection(s12, this, {
                                    connectionId: c10,
                                    _payload: i23,
                                    metadata: i23.metadata,
                                    label: i23.label,
                                    serialization: i23.serialization,
                                    reliable: i23.reliable
                                }), this._addConnection(s12, _), this.emit(d4.PeerEventType.Connection, _);
                            }
                            var p6 = this._getMessages(c10);
                            try {
                                for(var h1 = n2(p6), f4 = h1.next(); !f4.done; f4 = h1.next()){
                                    var y = f4.value;
                                    _.handleMessage(y);
                                }
                            } catch (v) {
                                t22 = {
                                    error: v
                                };
                            } finally{
                                try {
                                    f4 && !f4.done && (r23 = h1.return) && r23.call(h1);
                                } finally{
                                    if (t22) throw t22.error;
                                }
                            }
                            break;
                        default:
                            if (!i23) return void a20.default.warn("You received a malformed message from " + s12 + " of type " + o21);
                            var _;
                            c10 = i23.connectionId;
                            (_ = this.getConnection(s12, c10)) && _.peerConnection ? _.handleMessage(e6) : c10 ? this._storeMessage(c10, e6) : a20.default.warn("You received an unrecognized message:", e6);
                    }
                }, i22.prototype._storeMessage = function(e6, t22) {
                    this._lostMessages.has(e6) || this._lostMessages.set(e6, []), this._lostMessages.get(e6).push(t22);
                }, i22.prototype._getMessages = function(e6) {
                    var t22 = this._lostMessages.get(e6);
                    return t22 ? (this._lostMessages.delete(e6), t22) : [];
                }, i22.prototype.connect = function(e6, t22) {
                    if ((void 0) === t22 && (t22 = {
                    }), this.disconnected) return a20.default.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect, or call reconnect on this peer if you believe its ID to still be available."), void this.emitError(d4.PeerErrorType.Disconnected, "Cannot connect to new Peer after disconnecting from server.");
                    var n21 = new u2.DataConnection(e6, this, t22);
                    return this._addConnection(e6, n21), n21;
                }, i22.prototype.call = function(e6, t22, n21) {
                    if ((void 0) === n21 && (n21 = {
                    }), this.disconnected) return a20.default.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect."), void this.emitError(d4.PeerErrorType.Disconnected, "Cannot connect to new Peer after disconnecting from server.");
                    if (t22) {
                        n21._stream = t22;
                        var r23 = new l3.MediaConnection(e6, this, n21);
                        return this._addConnection(e6, r23), r23;
                    }
                    a20.default.error("To call a peer, you must provide a stream from your browser's `getUserMedia`.");
                }, i22.prototype._addConnection = function(e6, t22) {
                    a20.default.log("add connection " + t22.type + ":" + t22.connectionId + " to peerId:" + e6), this._connections.has(e6) || this._connections.set(e6, []), this._connections.get(e6).push(t22);
                }, i22.prototype._removeConnection = function(e6) {
                    var t22 = this._connections.get(e6.peer);
                    if (t22) {
                        var n21 = t22.indexOf(e6);
                        -1 !== n21 && t22.splice(n21, 1);
                    }
                    this._lostMessages.delete(e6.connectionId);
                }, i22.prototype.getConnection = function(e6, t22) {
                    var r24, o21, i23 = this._connections.get(e6);
                    if (!i23) return null;
                    try {
                        for(var s12 = n2(i23), a23 = s12.next(); !a23.done; a23 = s12.next()){
                            var c10 = a23.value;
                            if (c10.connectionId === t22) return c10;
                        }
                    } catch (l7) {
                        r24 = {
                            error: l7
                        };
                    } finally{
                        try {
                            a23 && !a23.done && (o21 = s12.return) && o21.call(s12);
                        } finally{
                            if (r24) throw r24.error;
                        }
                    }
                    return null;
                }, i22.prototype._delayedAbort = function(e6, t22) {
                    var n22 = this;
                    setTimeout(function() {
                        n22._abort(e6, t22);
                    }, 0);
                }, i22.prototype._abort = function(e6, t22) {
                    a20.default.error("Aborting!"), this.emitError(e6, t22), this._lastServerId ? this.disconnect() : this.destroy();
                }, i22.prototype.emitError = function(e6, t22) {
                    var n22;
                    a20.default.error("Error:", t22), (n22 = "string" == typeof t22 ? new Error(t22) : t22).type = e6, this.emit(d4.PeerEventType.Error, n22);
                }, i22.prototype.destroy = function() {
                    this.destroyed || (a20.default.log("Destroy peer with ID:" + this.id), this.disconnect(), this._cleanup(), this._destroyed = !0, this.emit(d4.PeerEventType.Close));
                }, i22.prototype._cleanup = function() {
                    var e6, t22;
                    try {
                        for(var r24 = n2(this._connections.keys()), o21 = r24.next(); !o21.done; o21 = r24.next()){
                            var i23 = o21.value;
                            this._cleanupPeer(i23), this._connections.delete(i23);
                        }
                    } catch (s12) {
                        e6 = {
                            error: s12
                        };
                    } finally{
                        try {
                            o21 && !o21.done && (t22 = r24.return) && t22.call(r24);
                        } finally{
                            if (e6) throw e6.error;
                        }
                    }
                    this.socket.removeAllListeners();
                }, i22.prototype._cleanupPeer = function(e6) {
                    var t22, r24, o21 = this._connections.get(e6);
                    if (o21) try {
                        for(var i24 = n2(o21), s12 = i24.next(); !s12.done; s12 = i24.next())s12.value.close();
                    } catch (a23) {
                        t22 = {
                            error: a23
                        };
                    } finally{
                        try {
                            s12 && !s12.done && (r24 = i24.return) && r24.call(i24);
                        } finally{
                            if (t22) throw t22.error;
                        }
                    }
                }, i22.prototype.disconnect = function() {
                    if (!this.disconnected) {
                        var e6 = this.id;
                        a20.default.log("Disconnect peer with ID:" + e6), this._disconnected = !0, this._open = !1, this.socket.close(), this._lastServerId = e6, this._id = null, this.emit(d4.PeerEventType.Disconnected, e6);
                    }
                }, i22.prototype.reconnect = function() {
                    if (this.disconnected && !this.destroyed) a20.default.log("Attempting reconnection to server with ID " + this._lastServerId), this._disconnected = !1, this._initialize(this._lastServerId);
                    else {
                        if (this.destroyed) throw new Error("This peer cannot reconnect to the server. It has already been destroyed.");
                        if (this.disconnected || this.open) throw new Error("Peer " + this.id + " cannot reconnect because it is not disconnected from the server!");
                        a20.default.error("In a hurry? We're still trying to make the initial connection!");
                    }
                }, i22.prototype.listAllPeers = function(e7) {
                    var t22 = this;
                    (void 0) === e7 && (e7 = function(e8) {
                    }), this._api.listAllPeers().then(function(t23) {
                        return e7(t23);
                    }).catch(function(e8) {
                        return t22._abort(d4.PeerErrorType.ServerError, e8);
                    });
                }, i22.DEFAULT_KEY = "peerjs", i22;
            }(i14.EventEmitter);
            exports.Peer = f3;
        },
        {
            "eventemitter3": "JJlS",
            "./util": "BHXf",
            "./logger": "WOs9",
            "./socket": "wJlv",
            "./mediaconnection": "dbHP",
            "./dataconnection": "GBTQ",
            "./enums": "ZRYf",
            "./api": "in7L"
        }
    ],
    "iTK6": [
        function(require, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.peerjs = void 0;
            var e2 = require("./util"), r2 = require("./peer");
            exports.peerjs = {
                Peer: r2.Peer,
                util: e2.util
            }, exports.default = r2.Peer, window.peerjs = exports.peerjs, window.Peer = r2.Peer;
        },
        {
            "./util": "BHXf",
            "./peer": "Hxpd"
        }
    ]
}, {
}, [
    "iTK6"
], null) //# sourceMappingURL=/peerjs.min.js.map
;

},{}],"4N8i7":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule') return;
        // Skip duplicate re-exports when they have the same value.
        if (key in dest && dest[key] === source[key]) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["aVG7R","dkyui"], "dkyui", "parcelRequire7c60")

