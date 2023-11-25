globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import 'node-fetch-native/polyfill';
import { Server as Server$1 } from 'node:http';
import { Server } from 'node:https';
import destr from 'destr';
import { defineEventHandler, handleCacheHeaders, createEvent, eventHandler, setHeaders, sendRedirect, proxyRequest, getRequestHeader, setResponseStatus, setResponseHeader, getRequestHeaders, createError, createApp, createRouter as createRouter$1, toNodeListener, fetchWithEvent, lazyEventHandler } from 'h3';
import { createFetch as createFetch$1, Headers } from 'ofetch';
import { createCall, createFetch } from 'unenv/runtime/fetch/index';
import { createHooks } from 'hookable';
import { snakeCase } from 'scule';
import { klona } from 'klona';
import defu, { defuFn } from 'defu';
import { hash } from 'ohash';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, withLeadingSlash, withoutTrailingSlash } from 'ufo';
import { createStorage, prefixStorage } from 'unstorage';
import { toRouteMatcher, createRouter } from 'radix3';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'pathe';

const inlineAppConfig = {};



const appConfig = defuFn(inlineAppConfig);

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/_nuxt/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      }
    }
  },
  "public": {}
};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const _sharedRuntimeConfig = _deepFreeze(
  _applyEnv(klona(_inlineRuntimeConfig))
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  _applyEnv(runtimeConfig);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig));
function _getEnv(key) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function _applyEnv(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = _getEnv(subKey);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      _applyEnv(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
  return obj;
}
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const _assets = {

};

function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

const storage = createStorage({});

storage.mount('/assets', assets$1);

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  const validate = opts.validate || (() => true);
  async function get(key, resolver, shouldInvalidateCache) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || !validate(entry);
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry)) {
          useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = opts.shouldInvalidateCache?.(...args);
    const entry = await get(key, () => fn(...args), shouldInvalidateCache);
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return key.replace(/[^\dA-Za-z]/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const key = await opts.getKey?.(event);
      if (key) {
        return escapeKey(key);
      }
      const url = event.node.req.originalUrl || event.node.req.url;
      const friendlyName = escapeKey(decodeURI(parseURL(url).pathname)).slice(
        0,
        16
      );
      const urlHash = hash(url);
      return `${friendlyName}.${urlHash}`;
    },
    validate: (entry) => {
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: [opts.integrity, handler]
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const reqProxy = cloneWithProxy(incomingEvent.node.req, { headers: {} });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = headers.Etag || headers.etag || `W/"${hash(body)}"`;
      headers["last-modified"] = headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString();
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      event.node.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler() {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(
        event,
        routeRules.redirect.to,
        routeRules.redirect.statusCode
      );
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: $fetch.raw,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    const path = new URL(event.node.req.url, "http://localhost").pathname;
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(path, useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const plugins = [
  
];

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.node.req.url,
    statusCode,
    statusMessage,
    message,
    stack: "",
    data: error.data
  };
  setResponseStatus(event, errorObject.statusCode !== 200 && errorObject.statusCode || 500, errorObject.statusMessage);
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (isJsonRequest(event)) {
    setResponseHeader(event, "Content-Type", "application/json");
    event.node.res.end(JSON.stringify(errorObject));
    return;
  }
  const isErrorPage = event.node.req.url?.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await import('../error-500.mjs');
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    event.node.res.end(template(errorObject));
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : void 0, res.statusText);
  event.node.res.end(await res.text());
});

const assets = {
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"b57-qf1yikSkX/P2DfzbdTiX3DSnKhY\"",
    "mtime": "2023-11-25T11:17:58.000Z",
    "size": 2903,
    "path": "../public/favicon.ico"
  },
  "/miaThesis.pdf": {
    "type": "application/pdf",
    "etag": "\"2e3c1-il8iWbMqGX0c3L7mRvb5AuO/aJ8\"",
    "mtime": "2023-09-21T16:32:03.273Z",
    "size": 189377,
    "path": "../public/miaThesis.pdf"
  },
  "/myCV.pdf": {
    "type": "application/pdf",
    "etag": "\"120a11-S+gXHI8Uuaki7kwNSTrjr9DjjpI\"",
    "mtime": "2023-09-21T18:27:21.104Z",
    "size": 1182225,
    "path": "../public/myCV.pdf"
  },
  "/Screenshot 2023-09-21 at 18.28.30.png": {
    "type": "image/png",
    "etag": "\"1efe-ionqfV5CBZqRYEUpms6qe9tb3eU\"",
    "mtime": "2023-11-12T17:59:09.439Z",
    "size": 7934,
    "path": "../public/Screenshot 2023-09-21 at 18.28.30.png"
  },
  "/slideDeckAgency.pdf": {
    "type": "application/pdf",
    "etag": "\"2e3c1-il8iWbMqGX0c3L7mRvb5AuO/aJ8\"",
    "mtime": "2023-09-21T16:32:03.273Z",
    "size": 189377,
    "path": "../public/slideDeckAgency.pdf"
  },
  "/slideDeckMapping.pdf": {
    "type": "application/pdf",
    "etag": "\"2e3c1-il8iWbMqGX0c3L7mRvb5AuO/aJ8\"",
    "mtime": "2023-09-21T16:32:03.273Z",
    "size": 189377,
    "path": "../public/slideDeckMapping.pdf"
  },
  "/_nuxt/about.96ccb4bf.js": {
    "type": "application/javascript",
    "etag": "\"307a-odOfl1fnyEN5KbZkrfZSkv8hoF0\"",
    "mtime": "2023-11-25T11:49:51.526Z",
    "size": 12410,
    "path": "../public/_nuxt/about.96ccb4bf.js"
  },
  "/_nuxt/agency.4aa4021b.js": {
    "type": "application/javascript",
    "etag": "\"5126-GOjCMspGhaaK+LRabHeT46ulKKM\"",
    "mtime": "2023-11-25T11:49:51.527Z",
    "size": 20774,
    "path": "../public/_nuxt/agency.4aa4021b.js"
  },
  "/_nuxt/agency.dbb04d88.png": {
    "type": "image/png",
    "etag": "\"d274-ZylkMWVHhQP5MIDVGN8Vih9aPFw\"",
    "mtime": "2023-11-25T11:49:51.512Z",
    "size": 53876,
    "path": "../public/_nuxt/agency.dbb04d88.png"
  },
  "/_nuxt/Agency1.ebd83a5e.png": {
    "type": "image/png",
    "etag": "\"4af50-gDwtQ6X9ZS8VphFTrZPRJpomRCE\"",
    "mtime": "2023-11-25T11:49:51.516Z",
    "size": 307024,
    "path": "../public/_nuxt/Agency1.ebd83a5e.png"
  },
  "/_nuxt/Agency10.dab74667.png": {
    "type": "image/png",
    "etag": "\"460fa-AYW8EQAgIgcAaKh1Pr1Tj6oI/JE\"",
    "mtime": "2023-11-25T11:49:51.517Z",
    "size": 286970,
    "path": "../public/_nuxt/Agency10.dab74667.png"
  },
  "/_nuxt/Agency11.1ef3bb3a.png": {
    "type": "image/png",
    "etag": "\"41dc9-Lz80OMqHonuDv7sa35nZaC3xEsc\"",
    "mtime": "2023-11-25T11:49:51.517Z",
    "size": 269769,
    "path": "../public/_nuxt/Agency11.1ef3bb3a.png"
  },
  "/_nuxt/Agency12.8068f78d.png": {
    "type": "image/png",
    "etag": "\"4a0af-OvKKwIUJpX34SEnTh5AsYw8QTlM\"",
    "mtime": "2023-11-25T11:49:51.517Z",
    "size": 303279,
    "path": "../public/_nuxt/Agency12.8068f78d.png"
  },
  "/_nuxt/Agency13.fe5b10a6.png": {
    "type": "image/png",
    "etag": "\"4a468-S9JKje1XDYL9WhYe8yRwDoD8Goo\"",
    "mtime": "2023-11-25T11:49:51.518Z",
    "size": 304232,
    "path": "../public/_nuxt/Agency13.fe5b10a6.png"
  },
  "/_nuxt/Agency14.ffd12137.png": {
    "type": "image/png",
    "etag": "\"434f1-UzDiwSAppExi8gzBTpj4IKUuqB0\"",
    "mtime": "2023-11-25T11:49:51.519Z",
    "size": 275697,
    "path": "../public/_nuxt/Agency14.ffd12137.png"
  },
  "/_nuxt/Agency15.40d031d7.png": {
    "type": "image/png",
    "etag": "\"34fba-dEpw0472Z7vk618RcmNpPUQsIFU\"",
    "mtime": "2023-11-25T11:49:51.518Z",
    "size": 217018,
    "path": "../public/_nuxt/Agency15.40d031d7.png"
  },
  "/_nuxt/Agency16.bbcc4e4e.png": {
    "type": "image/png",
    "etag": "\"45959-uxT0NFowa2+VRlRLVNhO7BNCzMU\"",
    "mtime": "2023-11-25T11:49:51.520Z",
    "size": 285017,
    "path": "../public/_nuxt/Agency16.bbcc4e4e.png"
  },
  "/_nuxt/Agency2.a3bbff66.png": {
    "type": "image/png",
    "etag": "\"498eb-0PPNbR8SAnPX9tJ4RKeeeeS1E60\"",
    "mtime": "2023-11-25T11:49:51.516Z",
    "size": 301291,
    "path": "../public/_nuxt/Agency2.a3bbff66.png"
  },
  "/_nuxt/Agency3.9dbd3609.png": {
    "type": "image/png",
    "etag": "\"695bc-+AsEJ0jqJfFSxsQOcyy6F6PrZxA\"",
    "mtime": "2023-11-25T11:49:51.517Z",
    "size": 431548,
    "path": "../public/_nuxt/Agency3.9dbd3609.png"
  },
  "/_nuxt/Agency4.1b1d6ea5.png": {
    "type": "image/png",
    "etag": "\"cd7d-nCaV9SxM/YJGVPtyr6wp+ar9NA8\"",
    "mtime": "2023-11-25T11:49:51.516Z",
    "size": 52605,
    "path": "../public/_nuxt/Agency4.1b1d6ea5.png"
  },
  "/_nuxt/Agency5.392b4ce5.png": {
    "type": "image/png",
    "etag": "\"e2bb-Sw+exiRtujMWKVty0XcKzHe+nSc\"",
    "mtime": "2023-11-25T11:49:51.516Z",
    "size": 58043,
    "path": "../public/_nuxt/Agency5.392b4ce5.png"
  },
  "/_nuxt/Agency6.3000dc82.png": {
    "type": "image/png",
    "etag": "\"e855-CzymrXG9usD/rBOa9AoFHO8foJo\"",
    "mtime": "2023-11-25T11:49:51.516Z",
    "size": 59477,
    "path": "../public/_nuxt/Agency6.3000dc82.png"
  },
  "/_nuxt/Agency7.f23e3308.png": {
    "type": "image/png",
    "etag": "\"11490-EMh7Br2YBfc/ai5KFItC+enh/tA\"",
    "mtime": "2023-11-25T11:49:51.516Z",
    "size": 70800,
    "path": "../public/_nuxt/Agency7.f23e3308.png"
  },
  "/_nuxt/Agency8.c0f5152b.png": {
    "type": "image/png",
    "etag": "\"73cfe-L3J8WrWnZLuuHxCeEasnshPNeo0\"",
    "mtime": "2023-11-25T11:49:51.517Z",
    "size": 474366,
    "path": "../public/_nuxt/Agency8.c0f5152b.png"
  },
  "/_nuxt/Agency9.49589a9a.png": {
    "type": "image/png",
    "etag": "\"5415f-rI6tCBw4/CxQP4R0dj5nRRoMI4s\"",
    "mtime": "2023-11-25T11:49:51.517Z",
    "size": 344415,
    "path": "../public/_nuxt/Agency9.49589a9a.png"
  },
  "/_nuxt/bannerAgencyNew.ea95abeb.png": {
    "type": "image/png",
    "etag": "\"8b1b1-LeB2N69t8aZZRxaRFPAe2yi+6ys\"",
    "mtime": "2023-11-25T11:49:51.514Z",
    "size": 569777,
    "path": "../public/_nuxt/bannerAgencyNew.ea95abeb.png"
  },
  "/_nuxt/bannerNew.668332ec.png": {
    "type": "image/png",
    "etag": "\"199fa0-UiGqNXNulQCKYgZyOSqecZl9ltg\"",
    "mtime": "2023-11-25T11:49:51.516Z",
    "size": 1679264,
    "path": "../public/_nuxt/bannerNew.668332ec.png"
  },
  "/_nuxt/card.b8723f8d.png": {
    "type": "image/png",
    "etag": "\"70fa-PDVvljL4q3ovQFBZs5IQVqnCeTs\"",
    "mtime": "2023-11-25T11:49:51.512Z",
    "size": 28922,
    "path": "../public/_nuxt/card.b8723f8d.png"
  },
  "/_nuxt/competitorResearch.764732ee.png": {
    "type": "image/png",
    "etag": "\"4a8f-EpqYxjCwpI9lo2G1q3KmPy7BNAM\"",
    "mtime": "2023-11-25T11:49:51.512Z",
    "size": 19087,
    "path": "../public/_nuxt/competitorResearch.764732ee.png"
  },
  "/_nuxt/default.66e48602.js": {
    "type": "application/javascript",
    "etag": "\"81-FIXzI8QgwQf3n5C42Xj4Xb7rsRo\"",
    "mtime": "2023-11-25T11:49:51.522Z",
    "size": 129,
    "path": "../public/_nuxt/default.66e48602.js"
  },
  "/_nuxt/entry.48f89494.js": {
    "type": "application/javascript",
    "etag": "\"25425-PLKLf5SKT+wWb+/WRs8tfgR5+XA\"",
    "mtime": "2023-11-25T11:49:51.528Z",
    "size": 152613,
    "path": "../public/_nuxt/entry.48f89494.js"
  },
  "/_nuxt/entry.56804cfa.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"3dce1-fhx1AJ9gj26AZbhvnvyQler921E\"",
    "mtime": "2023-11-25T11:49:51.522Z",
    "size": 253153,
    "path": "../public/_nuxt/entry.56804cfa.css"
  },
  "/_nuxt/error-404.23f2309d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e2e-ivsbEmi48+s9HDOqtrSdWFvddYQ\"",
    "mtime": "2023-11-25T11:49:51.521Z",
    "size": 3630,
    "path": "../public/_nuxt/error-404.23f2309d.css"
  },
  "/_nuxt/error-404.d256c147.js": {
    "type": "application/javascript",
    "etag": "\"8a8-T+h0Mxbd5IX94kMJhG6vyMTltK8\"",
    "mtime": "2023-11-25T11:49:51.527Z",
    "size": 2216,
    "path": "../public/_nuxt/error-404.d256c147.js"
  },
  "/_nuxt/error-500.2d0e9a20.js": {
    "type": "application/javascript",
    "etag": "\"756-UQGDs58HE4sZ3J7IR/ZQ/Yl1jls\"",
    "mtime": "2023-11-25T11:49:51.528Z",
    "size": 1878,
    "path": "../public/_nuxt/error-500.2d0e9a20.js"
  },
  "/_nuxt/error-500.aa16ed4d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"79e-7j4Tsx89siDo85YoIs0XqsPWmPI\"",
    "mtime": "2023-11-25T11:49:51.522Z",
    "size": 1950,
    "path": "../public/_nuxt/error-500.aa16ed4d.css"
  },
  "/_nuxt/error-component.dc974175.js": {
    "type": "application/javascript",
    "etag": "\"45e-zIZQ/lQSck9G3JorX4+wb7kxRxQ\"",
    "mtime": "2023-11-25T11:49:51.523Z",
    "size": 1118,
    "path": "../public/_nuxt/error-component.dc974175.js"
  },
  "/_nuxt/gotFeedback.ca1e510f.png": {
    "type": "image/png",
    "etag": "\"236a-6SfwWJFC5/QHMjX7dW1EcPsx5yo\"",
    "mtime": "2023-11-25T11:49:51.520Z",
    "size": 9066,
    "path": "../public/_nuxt/gotFeedback.ca1e510f.png"
  },
  "/_nuxt/hifiDesignPrototype.d857225b.png": {
    "type": "image/png",
    "etag": "\"35084-uax2y+iNMlYHRWGP933DrdA2pjs\"",
    "mtime": "2023-11-25T11:49:51.513Z",
    "size": 217220,
    "path": "../public/_nuxt/hifiDesignPrototype.d857225b.png"
  },
  "/_nuxt/ImpactEffortMatrix.0b3bbed3.png": {
    "type": "image/png",
    "etag": "\"3e0c-KMRaelcEkTCWg7Ri99JstQx6EGA\"",
    "mtime": "2023-11-25T11:49:51.513Z",
    "size": 15884,
    "path": "../public/_nuxt/ImpactEffortMatrix.0b3bbed3.png"
  },
  "/_nuxt/index.87fde9ba.js": {
    "type": "application/javascript",
    "etag": "\"b6a-3p9NckZEwf8KSo9D3cpU+uaRW2c\"",
    "mtime": "2023-11-25T11:49:51.526Z",
    "size": 2922,
    "path": "../public/_nuxt/index.87fde9ba.js"
  },
  "/_nuxt/lowFidelityPrototypes.0c02bfd4.png": {
    "type": "image/png",
    "etag": "\"e95b-w0/bRzZw1GYSdRpesfBejaUX5zI\"",
    "mtime": "2023-11-25T11:49:51.513Z",
    "size": 59739,
    "path": "../public/_nuxt/lowFidelityPrototypes.0c02bfd4.png"
  },
  "/_nuxt/lowFidelityPrototypesMapping.5a19045d.png": {
    "type": "image/png",
    "etag": "\"9a25-2lqtvxN6uC06vb9qkv/ANV+tY3Q\"",
    "mtime": "2023-11-25T11:49:51.516Z",
    "size": 39461,
    "path": "../public/_nuxt/lowFidelityPrototypesMapping.5a19045d.png"
  },
  "/_nuxt/mapping.435e5770.js": {
    "type": "application/javascript",
    "etag": "\"55b9-bQ6WD/IOnDoGebOuNvU7DOJHZjw\"",
    "mtime": "2023-11-25T11:49:51.527Z",
    "size": 21945,
    "path": "../public/_nuxt/mapping.435e5770.js"
  },
  "/_nuxt/mapping.e0f869d1.png": {
    "type": "image/png",
    "etag": "\"6464-Pq/Or/lwug87nvoAKep0Vpcj+98\"",
    "mtime": "2023-11-25T11:49:51.512Z",
    "size": 25700,
    "path": "../public/_nuxt/mapping.e0f869d1.png"
  },
  "/_nuxt/Mapping1.928157d8.png": {
    "type": "image/png",
    "etag": "\"60c94a-bR27YYJx551mEGiZyiyncPkFNoc\"",
    "mtime": "2023-11-25T11:49:51.533Z",
    "size": 6342986,
    "path": "../public/_nuxt/Mapping1.928157d8.png"
  },
  "/_nuxt/Mapping10.54ee80d3.png": {
    "type": "image/png",
    "etag": "\"606227-TLNcMYwBJACgzx6AGcv+cDk/0Mo\"",
    "mtime": "2023-11-25T11:49:51.533Z",
    "size": 6316583,
    "path": "../public/_nuxt/Mapping10.54ee80d3.png"
  },
  "/_nuxt/Mapping2.ec0bfac0.png": {
    "type": "image/png",
    "etag": "\"6c3900-sxR769Yv6OarvXi3i0/vYo3xi1s\"",
    "mtime": "2023-11-25T11:49:51.533Z",
    "size": 7092480,
    "path": "../public/_nuxt/Mapping2.ec0bfac0.png"
  },
  "/_nuxt/Mapping3.73737e2d.png": {
    "type": "image/png",
    "etag": "\"6101e9-G5LNgR4FHuAxqHSf5ISP2UkvDUU\"",
    "mtime": "2023-11-25T11:49:51.533Z",
    "size": 6357481,
    "path": "../public/_nuxt/Mapping3.73737e2d.png"
  },
  "/_nuxt/Mapping4.d02be82b.png": {
    "type": "image/png",
    "etag": "\"5b3d2a-+Be/vPRRLGcwTIW4jwgR+eu8h4g\"",
    "mtime": "2023-11-25T11:49:51.532Z",
    "size": 5979434,
    "path": "../public/_nuxt/Mapping4.d02be82b.png"
  },
  "/_nuxt/Mapping5.121fb60c.png": {
    "type": "image/png",
    "etag": "\"5b2baf-MTNjXsp2XslmnHcbfDDF4iy8WeE\"",
    "mtime": "2023-11-25T11:49:51.532Z",
    "size": 5974959,
    "path": "../public/_nuxt/Mapping5.121fb60c.png"
  },
  "/_nuxt/Mapping6.8183470d.png": {
    "type": "image/png",
    "etag": "\"5d6831-2WGjl4KDJBf9kDck3OJmD9YLCNk\"",
    "mtime": "2023-11-25T11:49:51.532Z",
    "size": 6121521,
    "path": "../public/_nuxt/Mapping6.8183470d.png"
  },
  "/_nuxt/Mapping7.b9ada646.png": {
    "type": "image/png",
    "etag": "\"7177ef-dHeNm77FYLdKGJngilCsBAg8nQg\"",
    "mtime": "2023-11-25T11:49:51.533Z",
    "size": 7436271,
    "path": "../public/_nuxt/Mapping7.b9ada646.png"
  },
  "/_nuxt/Mapping8.fa6ddacc.png": {
    "type": "image/png",
    "etag": "\"65add2-eluaDxVaX3PZO8aiby33IeDrUQA\"",
    "mtime": "2023-11-25T11:49:51.533Z",
    "size": 6663634,
    "path": "../public/_nuxt/Mapping8.fa6ddacc.png"
  },
  "/_nuxt/Mapping9.23d16b1a.png": {
    "type": "image/png",
    "etag": "\"6e8485-GnTJXjcG8CKwRKqn1Aq6/5dqf74\"",
    "mtime": "2023-11-25T11:49:51.533Z",
    "size": 7242885,
    "path": "../public/_nuxt/Mapping9.23d16b1a.png"
  },
  "/_nuxt/mappingBanner.60299ee0.png": {
    "type": "image/png",
    "etag": "\"1831b-NsoCMFR27sCh7uVenOHG3tRud2s\"",
    "mtime": "2023-11-25T11:49:51.513Z",
    "size": 99099,
    "path": "../public/_nuxt/mappingBanner.60299ee0.png"
  },
  "/_nuxt/pdf.6f2ec2da.png": {
    "type": "image/png",
    "etag": "\"126d-4uxxv1xuF0fSjHyhRVT/C45rw7Q\"",
    "mtime": "2023-11-25T11:49:51.511Z",
    "size": 4717,
    "path": "../public/_nuxt/pdf.6f2ec2da.png"
  },
  "/_nuxt/personaMapping1.b77546ee.png": {
    "type": "image/png",
    "etag": "\"28c50-z5wo53w5AZiBMlmg6sU6sEcZvH8\"",
    "mtime": "2023-11-25T11:49:51.513Z",
    "size": 166992,
    "path": "../public/_nuxt/personaMapping1.b77546ee.png"
  },
  "/_nuxt/personaMapping2.0b085938.png": {
    "type": "image/png",
    "etag": "\"2a77f-Ftg+50YE9xc+g8r+qio9YdXXZGc\"",
    "mtime": "2023-11-25T11:49:51.514Z",
    "size": 173951,
    "path": "../public/_nuxt/personaMapping2.0b085938.png"
  },
  "/_nuxt/sitemap.931f9688.png": {
    "type": "image/png",
    "etag": "\"b23b-dp2EaGTaBUsgS5erIUTz0l3NVuY\"",
    "mtime": "2023-11-25T11:49:51.509Z",
    "size": 45627,
    "path": "../public/_nuxt/sitemap.931f9688.png"
  },
  "/_nuxt/sketch01.1e4fee6b.png": {
    "type": "image/png",
    "etag": "\"a2b3-m7T+uxkRPrp0M5Dgv1oDZyNZ46g\"",
    "mtime": "2023-11-25T11:49:51.516Z",
    "size": 41651,
    "path": "../public/_nuxt/sketch01.1e4fee6b.png"
  },
  "/_nuxt/sketch02.9cb75d76.png": {
    "type": "image/png",
    "etag": "\"79da-qUzyyOB24upyxIHfyaXQs796vh4\"",
    "mtime": "2023-11-25T11:49:51.513Z",
    "size": 31194,
    "path": "../public/_nuxt/sketch02.9cb75d76.png"
  },
  "/_nuxt/sketch03.c6e77820.png": {
    "type": "image/png",
    "etag": "\"d163-r5DuFpFdICP1E1y+Sswlbvta98w\"",
    "mtime": "2023-11-25T11:49:51.516Z",
    "size": 53603,
    "path": "../public/_nuxt/sketch03.c6e77820.png"
  },
  "/_nuxt/sketches.f38b4670.png": {
    "type": "image/png",
    "etag": "\"73107-9AiLj9NJVrv27MFnFQrsPhtNEYw\"",
    "mtime": "2023-11-25T11:49:51.513Z",
    "size": 471303,
    "path": "../public/_nuxt/sketches.f38b4670.png"
  },
  "/_nuxt/solution.cd680901.png": {
    "type": "image/png",
    "etag": "\"5889b-TYPTDkbccSIBZtAEOtrUPL4s3LY\"",
    "mtime": "2023-11-25T11:49:51.512Z",
    "size": 362651,
    "path": "../public/_nuxt/solution.cd680901.png"
  },
  "/_nuxt/solutionMapping.c4e883ca.png": {
    "type": "image/png",
    "etag": "\"10bb0-YhTQ8vOCUlMakTHpciMdiOGa49A\"",
    "mtime": "2023-11-25T11:49:51.513Z",
    "size": 68528,
    "path": "../public/_nuxt/solutionMapping.c4e883ca.png"
  },
  "/_nuxt/swiper-bundle.70f9e27f.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"44f7-AarAgvHyLSv1i6b9CEKK4mGaRCk\"",
    "mtime": "2023-11-25T11:49:51.522Z",
    "size": 17655,
    "path": "../public/_nuxt/swiper-bundle.70f9e27f.css"
  },
  "/_nuxt/swiper-bundle.b0ce57f1.js": {
    "type": "application/javascript",
    "etag": "\"173cd-8akUkz97+44zYaJpgCsF6CbjPjE\"",
    "mtime": "2023-11-25T11:49:51.527Z",
    "size": 95181,
    "path": "../public/_nuxt/swiper-bundle.b0ce57f1.js"
  },
  "/_nuxt/userPersonaCard.811f2af1.png": {
    "type": "image/png",
    "etag": "\"2a525-2FpElT+PdX2r9CBha03OqTxO4r4\"",
    "mtime": "2023-11-25T11:49:51.513Z",
    "size": 173349,
    "path": "../public/_nuxt/userPersonaCard.811f2af1.png"
  },
  "/_nuxt/userTesting.54fba836.png": {
    "type": "image/png",
    "etag": "\"6f3a4-NMOgKiDHGRLcIsyBhgDMP5sPmq8\"",
    "mtime": "2023-11-25T11:49:51.513Z",
    "size": 455588,
    "path": "../public/_nuxt/userTesting.54fba836.png"
  },
  "/_nuxt/userTestingMapping.28cb40bf.png": {
    "type": "image/png",
    "etag": "\"16a79-MH0mImGx9SOhtu4Zr+fX5rYCO5I\"",
    "mtime": "2023-11-25T11:49:51.516Z",
    "size": 92793,
    "path": "../public/_nuxt/userTestingMapping.28cb40bf.png"
  },
  "/_nuxt/ux-ui-work.c2093d8a.js": {
    "type": "application/javascript",
    "etag": "\"1f7-SkHFVHnmIj0vDQLX+WxACyFfLZE\"",
    "mtime": "2023-11-25T11:49:51.526Z",
    "size": 503,
    "path": "../public/_nuxt/ux-ui-work.c2093d8a.js"
  },
  "/_nuxt/youtube.ab243113.js": {
    "type": "application/javascript",
    "etag": "\"a78-vY0uMD0mXT2nXQ02xHDSHjGhJVg\"",
    "mtime": "2023-11-25T11:49:51.523Z",
    "size": 2680,
    "path": "../public/_nuxt/youtube.ab243113.js"
  },
  "/_nuxt/youtube.d1df2c07.png": {
    "type": "image/png",
    "etag": "\"222f-oREs5pHyx8I6vEt4bkcYI9RWbfA\"",
    "mtime": "2023-11-25T11:49:51.513Z",
    "size": 8751,
    "path": "../public/_nuxt/youtube.d1df2c07.png"
  },
  "/_nuxt/youtubeBanner.734dd7f6.png": {
    "type": "image/png",
    "etag": "\"9852-IP7iXObyE3Fl58Er+NihcsF/UO8\"",
    "mtime": "2023-11-25T11:49:51.516Z",
    "size": 38994,
    "path": "../public/_nuxt/youtubeBanner.734dd7f6.png"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt":{"maxAge":31536000}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.node.req.method && !METHODS.has(event.node.req.method)) {
    return;
  }
  let id = decodeURIComponent(
    withLeadingSlash(
      withoutTrailingSlash(parseURL(event.node.req.url).pathname)
    )
  );
  let asset;
  const encodingHeader = String(
    event.node.req.headers["accept-encoding"] || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    event.node.res.setHeader("Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      event.node.res.removeHeader("cache-control");
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = event.node.req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    event.node.res.statusCode = 304;
    event.node.res.end();
    return;
  }
  const ifModifiedSinceH = event.node.req.headers["if-modified-since"];
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    event.node.res.statusCode = 304;
    event.node.res.end();
    return;
  }
  if (asset.type && !event.node.res.getHeader("Content-Type")) {
    event.node.res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag && !event.node.res.getHeader("ETag")) {
    event.node.res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime && !event.node.res.getHeader("Last-Modified")) {
    event.node.res.setHeader("Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !event.node.res.getHeader("Content-Encoding")) {
    event.node.res.setHeader("Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !event.node.res.getHeader("Content-Length")) {
    event.node.res.setHeader("Content-Length", asset.size);
  }
  return readAsset(id);
});

const _lazy_GZ8lQR = () => import('../handlers/renderer.mjs').then(function (n) { return n.r; });

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_GZ8lQR, lazy: true, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_GZ8lQR, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(false),
    onError: errorHandler
  });
  const router = createRouter$1();
  h3App.use(createRouteRulesHandler());
  const localCall = createCall(toNodeListener(h3App));
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || {};
      const envContext = event.node.req.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: $fetch });
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const server = cert && key ? new Server({ key, cert }, toNodeListener(nitroApp.h3App)) : new Server$1(toNodeListener(nitroApp.h3App));
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const host = process.env.NITRO_HOST || process.env.HOST;
const s = server.listen(port, host, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  const i = s.address();
  const baseURL = (useRuntimeConfig().app.baseURL || "").replace(/\/$/, "");
  const url = `${protocol}://${i.family === "IPv6" ? `[${i.address}]` : i.address}:${i.port}${baseURL}`;
  console.log(`Listening ${url}`);
});
{
  process.on(
    "unhandledRejection",
    (err) => console.error("[nitro] [dev] [unhandledRejection] " + err)
  );
  process.on(
    "uncaughtException",
    (err) => console.error("[nitro] [dev] [uncaughtException] " + err)
  );
}
const nodeServer = {};

export { useRuntimeConfig as a, getRouteRules as g, nodeServer as n, useNitroApp as u };
//# sourceMappingURL=node-server.mjs.map
