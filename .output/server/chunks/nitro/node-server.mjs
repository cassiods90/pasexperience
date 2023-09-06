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
  "public": {
    "i18n": {
      "experimental": {
        "jsTsFormatResource": false
      },
      "baseUrl": ""
    }
  }
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
  "/acessibilidadeWeb.pdf": {
    "type": "application/pdf",
    "etag": "\"604aa-MtQ8ip/uufhahsVkIhRPaBhzD7w\"",
    "mtime": "2023-06-03T14:00:08.746Z",
    "size": 394410,
    "path": "../public/acessibilidadeWeb.pdf"
  },
  "/cassiospessatto.pdf": {
    "type": "application/pdf",
    "etag": "\"b0be3-/SaVhFu+mWGjoDHCzaUA62mQvyw\"",
    "mtime": "2023-06-03T14:00:08.748Z",
    "size": 723939,
    "path": "../public/cassiospessatto.pdf"
  },
  "/comercialManagement.pdf": {
    "type": "application/pdf",
    "etag": "\"3076a8-LPpuuUCxtMHo8EFNfmcCeDo85Dc\"",
    "mtime": "2023-06-03T14:00:08.758Z",
    "size": 3176104,
    "path": "../public/comercialManagement.pdf"
  },
  "/cvcassiospessatto.pdf": {
    "type": "application/pdf",
    "etag": "\"c91ca-Zz3KXz94BvsB7vhR9s14MSZwoBs\"",
    "mtime": "2023-06-03T14:00:08.761Z",
    "size": 823754,
    "path": "../public/cvcassiospessatto.pdf"
  },
  "/desenvolvimentoAgil.pdf": {
    "type": "application/pdf",
    "etag": "\"637c1-yGP0TvN/QVRe+SUTzkE0Yhq0YUo\"",
    "mtime": "2023-06-03T14:00:08.763Z",
    "size": 407489,
    "path": "../public/desenvolvimentoAgil.pdf"
  },
  "/devWebUdemy.pdf": {
    "type": "application/pdf",
    "etag": "\"76128-kbse9c4DZvVQcHJaC+GxgomM3MA\"",
    "mtime": "2023-06-03T14:00:08.766Z",
    "size": 483624,
    "path": "../public/devWebUdemy.pdf"
  },
  "/ecmascript6.pdf": {
    "type": "application/pdf",
    "etag": "\"323d3-wGycX6VHRg6h9qLKI+vMd/VW4so\"",
    "mtime": "2023-06-03T14:00:08.767Z",
    "size": 205779,
    "path": "../public/ecmascript6.pdf"
  },
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"21bc-XwkmumvsWAWQvKTShmzlcL3xoys\"",
    "mtime": "2023-06-03T14:00:08.767Z",
    "size": 8636,
    "path": "../public/favicon.ico"
  },
  "/frontEnd.pdf": {
    "type": "application/pdf",
    "etag": "\"5cf5e-MZ+e6l8NDti9CwsSEI8BPvCCWTQ\"",
    "mtime": "2023-06-03T14:00:08.769Z",
    "size": 380766,
    "path": "../public/frontEnd.pdf"
  },
  "/FullStackTT.pdf": {
    "type": "application/pdf",
    "etag": "\"43050-LNXmdBJzecJfsurVsYvfflZIj1U\"",
    "mtime": "2023-06-03T14:00:08.740Z",
    "size": 274512,
    "path": "../public/FullStackTT.pdf"
  },
  "/htmlCss.pdf": {
    "type": "application/pdf",
    "etag": "\"63c2c-PBck++E8sAOBaghAznPlKiowlQc\"",
    "mtime": "2023-06-03T14:00:08.770Z",
    "size": 408620,
    "path": "../public/htmlCss.pdf"
  },
  "/inicianteProgramacaoJS.pdf": {
    "type": "application/pdf",
    "etag": "\"67f35-sbXadA6oeL0MrMf14251wxhnTiE\"",
    "mtime": "2023-06-03T14:00:08.771Z",
    "size": 425781,
    "path": "../public/inicianteProgramacaoJS.pdf"
  },
  "/javascriptTT.pdf": {
    "type": "application/pdf",
    "etag": "\"92be-VqvjGG/QZrIuJ/JWTJ4ZAGuLlAM\"",
    "mtime": "2023-06-03T14:00:08.772Z",
    "size": 37566,
    "path": "../public/javascriptTT.pdf"
  },
  "/mbaCassio.pdf": {
    "type": "application/pdf",
    "etag": "\"bf1cb-EObFhLCSUyTPdiAl2UAUxLVFg5g\"",
    "mtime": "2023-06-03T14:00:08.778Z",
    "size": 782795,
    "path": "../public/mbaCassio.pdf"
  },
  "/nodeTT.pdf": {
    "type": "application/pdf",
    "etag": "\"92cb-pX6earvxBfDFYw74+kAODgnmTow\"",
    "mtime": "2023-06-03T14:00:08.778Z",
    "size": 37579,
    "path": "../public/nodeTT.pdf"
  },
  "/python.pdf": {
    "type": "application/pdf",
    "etag": "\"62032-yRp8NdvKv9ftrDnYO0NaKqoEohc\"",
    "mtime": "2023-06-03T14:00:08.780Z",
    "size": 401458,
    "path": "../public/python.pdf"
  },
  "/reactAlura.pdf": {
    "type": "application/pdf",
    "etag": "\"63b1a-DovfKigqEkMnwmEbojML9ZKeheY\"",
    "mtime": "2023-06-03T14:00:08.782Z",
    "size": 408346,
    "path": "../public/reactAlura.pdf"
  },
  "/reactTT.pdf": {
    "type": "application/pdf",
    "etag": "\"92c0-w+CgtYmjDIMq6NsjWMJc2adbMy0\"",
    "mtime": "2023-06-03T14:00:08.782Z",
    "size": 37568,
    "path": "../public/reactTT.pdf"
  },
  "/ReactUdemy.pdf": {
    "type": "application/pdf",
    "etag": "\"71e88-KmvSzBarBDQuwUBZrJgu7AtNTF4\"",
    "mtime": "2023-06-03T14:00:08.743Z",
    "size": 466568,
    "path": "../public/ReactUdemy.pdf"
  },
  "/reactZeroToAdvance.pdf": {
    "type": "application/pdf",
    "etag": "\"11cee2-ih6h8W/jVdEe92ImUvMS7uH4CCA\"",
    "mtime": "2023-06-03T14:00:08.790Z",
    "size": 1167074,
    "path": "../public/reactZeroToAdvance.pdf"
  },
  "/softwareEngineering.pdf": {
    "type": "application/pdf",
    "etag": "\"8116a-n5Ul8N+0gpIQZ+7nG6+WojBHcJM\"",
    "mtime": "2023-06-03T14:00:08.794Z",
    "size": 528746,
    "path": "../public/softwareEngineering.pdf"
  },
  "/vue2Udemy.pdf": {
    "type": "application/pdf",
    "etag": "\"3f614-Y64cXjwkdLLPX+trgZKv8hhRNTc\"",
    "mtime": "2023-06-03T14:00:08.797Z",
    "size": 259604,
    "path": "../public/vue2Udemy.pdf"
  },
  "/vue3Udemy.pdf": {
    "type": "application/pdf",
    "etag": "\"32f43-c8km2FFrNVxdFRW3f3RGXJfvbzg\"",
    "mtime": "2023-05-22T07:19:46.000Z",
    "size": 208707,
    "path": "../public/vue3Udemy.pdf"
  },
  "/vueAlura.pdf": {
    "type": "application/pdf",
    "etag": "\"63038-s9clRcbcM/mpBd+bABmnxeTY4Io\"",
    "mtime": "2023-06-03T14:00:08.795Z",
    "size": 405560,
    "path": "../public/vueAlura.pdf"
  },
  "/_nuxt/about.79cf0faf.js": {
    "type": "application/javascript",
    "etag": "\"bbc-5JnSym1DkMxmP3nDA2VJIGTY72E\"",
    "mtime": "2023-07-24T19:10:31.483Z",
    "size": 3004,
    "path": "../public/_nuxt/about.79cf0faf.js"
  },
  "/_nuxt/academics.9125b365.js": {
    "type": "application/javascript",
    "etag": "\"15e3-oCBJ+lZMSOACmNHrbs/mKPsoRpg\"",
    "mtime": "2023-07-24T19:10:31.484Z",
    "size": 5603,
    "path": "../public/_nuxt/academics.9125b365.js"
  },
  "/_nuxt/acessibilidadeWeb.f139f419.jpg": {
    "type": "image/jpeg",
    "etag": "\"df38e-ogVqAa9vMld5XbrPK3ywFyCxVdM\"",
    "mtime": "2023-07-24T19:10:31.481Z",
    "size": 914318,
    "path": "../public/_nuxt/acessibilidadeWeb.f139f419.jpg"
  },
  "/_nuxt/AlfaSlabOne-Regular.ef66635e.woff": {
    "type": "font/woff",
    "etag": "\"ad34-rNJRcIXdLwFjVkhNZlob3fBfg8Q\"",
    "mtime": "2023-07-24T19:10:31.477Z",
    "size": 44340,
    "path": "../public/_nuxt/AlfaSlabOne-Regular.ef66635e.woff"
  },
  "/_nuxt/bootstrapIcon.0e8bc221.svg": {
    "type": "image/svg+xml",
    "etag": "\"312-sLydxn9pdmeQt3RKMagRVfKIk80\"",
    "mtime": "2023-07-24T19:10:31.479Z",
    "size": 786,
    "path": "../public/_nuxt/bootstrapIcon.0e8bc221.svg"
  },
  "/_nuxt/cassioImage.3ea0cff2.jpg": {
    "type": "image/jpeg",
    "etag": "\"f08e-Wy46coHpgm4N/dk795ozVvP5zxs\"",
    "mtime": "2023-07-24T19:10:31.482Z",
    "size": 61582,
    "path": "../public/_nuxt/cassioImage.3ea0cff2.jpg"
  },
  "/_nuxt/comercialManagement.2a77c177.jpg": {
    "type": "image/jpeg",
    "etag": "\"45477a-1shnmDgN9s0oIldhAmcibc0oDSc\"",
    "mtime": "2023-07-24T19:10:31.485Z",
    "size": 4540282,
    "path": "../public/_nuxt/comercialManagement.2a77c177.jpg"
  },
  "/_nuxt/cssIcon.652bc445.svg": {
    "type": "image/svg+xml",
    "etag": "\"2f3-Xv4JaReoT8H20B7049zrrcowxoI\"",
    "mtime": "2023-07-24T19:10:31.479Z",
    "size": 755,
    "path": "../public/_nuxt/cssIcon.652bc445.svg"
  },
  "/_nuxt/de.5c9d26bc.js": {
    "type": "application/javascript",
    "etag": "\"5406-C5e+XVoH5sg64AX1xkFqNPMT+UI\"",
    "mtime": "2023-07-24T19:10:31.484Z",
    "size": 21510,
    "path": "../public/_nuxt/de.5c9d26bc.js"
  },
  "/_nuxt/default.75854956.js": {
    "type": "application/javascript",
    "etag": "\"7bbb-XYpxmn9NQqE/3i6x7D9bUpnSk70\"",
    "mtime": "2023-07-24T19:10:31.485Z",
    "size": 31675,
    "path": "../public/_nuxt/default.75854956.js"
  },
  "/_nuxt/default.957de9c7.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2a-8M5xuor1JoorI5bQ6afC7+D80Ww\"",
    "mtime": "2023-07-24T19:10:31.482Z",
    "size": 42,
    "path": "../public/_nuxt/default.957de9c7.css"
  },
  "/_nuxt/desenvolvimentoAgil.42b25cae.jpg": {
    "type": "image/jpeg",
    "etag": "\"dc1a3-QnscHXiY2d+3E2YkpYwz3+Z6Glk\"",
    "mtime": "2023-07-24T19:10:31.480Z",
    "size": 901539,
    "path": "../public/_nuxt/desenvolvimentoAgil.42b25cae.jpg"
  },
  "/_nuxt/devWebUdemy.f7f97b30.jpg": {
    "type": "image/jpeg",
    "etag": "\"955d4-HvlBgP+FMcspMNTKg9ufMqhwNyY\"",
    "mtime": "2023-07-24T19:10:31.478Z",
    "size": 611796,
    "path": "../public/_nuxt/devWebUdemy.f7f97b30.jpg"
  },
  "/_nuxt/ecmascript6.9f74a464.jpg": {
    "type": "image/jpeg",
    "etag": "\"41687-PDl42QdNrTF8XP8RonLvOYNXvIg\"",
    "mtime": "2023-07-24T19:10:31.477Z",
    "size": 267911,
    "path": "../public/_nuxt/ecmascript6.9f74a464.jpg"
  },
  "/_nuxt/en.47f8a8c8.js": {
    "type": "application/javascript",
    "etag": "\"51f1-FHGJBImQsSrlxrWboyBj+b5UVRY\"",
    "mtime": "2023-07-24T19:10:31.484Z",
    "size": 20977,
    "path": "../public/_nuxt/en.47f8a8c8.js"
  },
  "/_nuxt/entry.582fa528.js": {
    "type": "application/javascript",
    "etag": "\"36a2b-DpsmgqbgSnCyVvIkAQAj65rhTeI\"",
    "mtime": "2023-07-24T19:10:31.485Z",
    "size": 223787,
    "path": "../public/_nuxt/entry.582fa528.js"
  },
  "/_nuxt/entry.613aca7b.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"41302-qIPJvXrEtyc4hQ1pSN7wpbR8wFg\"",
    "mtime": "2023-07-24T19:10:31.482Z",
    "size": 267010,
    "path": "../public/_nuxt/entry.613aca7b.css"
  },
  "/_nuxt/error-404.23f2309d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e2e-ivsbEmi48+s9HDOqtrSdWFvddYQ\"",
    "mtime": "2023-07-24T19:10:31.482Z",
    "size": 3630,
    "path": "../public/_nuxt/error-404.23f2309d.css"
  },
  "/_nuxt/error-404.6f80a36d.js": {
    "type": "application/javascript",
    "etag": "\"8cd-XPeNnCqDinBGuPC7yGFIM5DPQf8\"",
    "mtime": "2023-07-24T19:10:31.485Z",
    "size": 2253,
    "path": "../public/_nuxt/error-404.6f80a36d.js"
  },
  "/_nuxt/error-500.a47f4eb4.js": {
    "type": "application/javascript",
    "etag": "\"751-FnrK/Cyisx9WGpYpHWHSTEupFlU\"",
    "mtime": "2023-07-24T19:10:31.484Z",
    "size": 1873,
    "path": "../public/_nuxt/error-500.a47f4eb4.js"
  },
  "/_nuxt/error-500.aa16ed4d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"79e-7j4Tsx89siDo85YoIs0XqsPWmPI\"",
    "mtime": "2023-07-24T19:10:31.482Z",
    "size": 1950,
    "path": "../public/_nuxt/error-500.aa16ed4d.css"
  },
  "/_nuxt/error-component.eba23a11.js": {
    "type": "application/javascript",
    "etag": "\"478-KzMYTE5C5PRbM2EwBOywF28v8FU\"",
    "mtime": "2023-07-24T19:10:31.483Z",
    "size": 1144,
    "path": "../public/_nuxt/error-component.eba23a11.js"
  },
  "/_nuxt/es.b09b55a9.js": {
    "type": "application/javascript",
    "etag": "\"5382-0VdkHwZdGzTLHT5vghoofyiV/0U\"",
    "mtime": "2023-07-24T19:10:31.484Z",
    "size": 21378,
    "path": "../public/_nuxt/es.b09b55a9.js"
  },
  "/_nuxt/experiences.311828da.js": {
    "type": "application/javascript",
    "etag": "\"65b-iipV6A1Misml97vQV8Ns61Ev6HE\"",
    "mtime": "2023-07-24T19:10:31.483Z",
    "size": 1627,
    "path": "../public/_nuxt/experiences.311828da.js"
  },
  "/_nuxt/figmaIcon.a0ec60a2.svg": {
    "type": "image/svg+xml",
    "etag": "\"579-mAR9s4SOdYJeCJ7YjdjWu32HRWw\"",
    "mtime": "2023-07-24T19:10:31.479Z",
    "size": 1401,
    "path": "../public/_nuxt/figmaIcon.a0ec60a2.svg"
  },
  "/_nuxt/fr.4770a938.js": {
    "type": "application/javascript",
    "etag": "\"5513-HDgT9BImUnW2zBh9uodjvzubYNU\"",
    "mtime": "2023-07-24T19:10:31.484Z",
    "size": 21779,
    "path": "../public/_nuxt/fr.4770a938.js"
  },
  "/_nuxt/frontEnd.b7bdfe3a.jpg": {
    "type": "image/jpeg",
    "etag": "\"d94fa-0LQj/ahCswTByaXcBNrGHQpVsGM\"",
    "mtime": "2023-07-24T19:10:31.474Z",
    "size": 890106,
    "path": "../public/_nuxt/frontEnd.b7bdfe3a.jpg"
  },
  "/_nuxt/FullStackTargetTrust.b63545da.jpg": {
    "type": "image/jpeg",
    "etag": "\"bf87e-C8MzeZXpZvM0Y/dIdVPZU11S4O4\"",
    "mtime": "2023-07-24T19:10:31.478Z",
    "size": 784510,
    "path": "../public/_nuxt/FullStackTargetTrust.b63545da.jpg"
  },
  "/_nuxt/gitIcon.b8555258.svg": {
    "type": "image/svg+xml",
    "etag": "\"129f-kqOBFE9GK+lmHwjSjmUtLYx7lec\"",
    "mtime": "2023-07-24T19:10:31.480Z",
    "size": 4767,
    "path": "../public/_nuxt/gitIcon.b8555258.svg"
  },
  "/_nuxt/htmlCss.7cacfad6.jpg": {
    "type": "image/jpeg",
    "etag": "\"d9242-4o4wqSR42EqTM84IIw4HovScNaQ\"",
    "mtime": "2023-07-24T19:10:31.478Z",
    "size": 889410,
    "path": "../public/_nuxt/htmlCss.7cacfad6.jpg"
  },
  "/_nuxt/htmlIcon.2441381c.svg": {
    "type": "image/svg+xml",
    "etag": "\"2ea-2+H2n7GkOPGnM+4fPelpvXUe5L4\"",
    "mtime": "2023-07-24T19:10:31.480Z",
    "size": 746,
    "path": "../public/_nuxt/htmlIcon.2441381c.svg"
  },
  "/_nuxt/i18n.config.f7b2596c.js": {
    "type": "application/javascript",
    "etag": "\"1a3-pwJmPycoKYOpDiF4mV3e4Gug9RU\"",
    "mtime": "2023-07-24T19:10:31.483Z",
    "size": 419,
    "path": "../public/_nuxt/i18n.config.f7b2596c.js"
  },
  "/_nuxt/i18n.options.504b9fb9.js": {
    "type": "application/javascript",
    "etag": "\"e1-RVVAlH2e3w7TW0Ol2b+t3WCWIck\"",
    "mtime": "2023-07-24T19:10:31.483Z",
    "size": 225,
    "path": "../public/_nuxt/i18n.options.504b9fb9.js"
  },
  "/_nuxt/IconQuoteRight.3201b248.js": {
    "type": "application/javascript",
    "etag": "\"48a-lnzLRSEdkkn3dc7d9jbTQnpKpog\"",
    "mtime": "2023-07-24T19:10:31.483Z",
    "size": 1162,
    "path": "../public/_nuxt/IconQuoteRight.3201b248.js"
  },
  "/_nuxt/index.2e762f7a.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"d4-AILTrj1AU4xSv9pnA+xvnQKgMCo\"",
    "mtime": "2023-07-24T19:10:31.482Z",
    "size": 212,
    "path": "../public/_nuxt/index.2e762f7a.css"
  },
  "/_nuxt/index.8c665f2a.js": {
    "type": "application/javascript",
    "etag": "\"c65-hJ+e5bXdUjrKenbkJFTHakP/XTM\"",
    "mtime": "2023-07-24T19:10:31.485Z",
    "size": 3173,
    "path": "../public/_nuxt/index.8c665f2a.js"
  },
  "/_nuxt/inicianteProgramacaoJS.a052f14c.jpg": {
    "type": "image/jpeg",
    "etag": "\"e0e8c-RJbsqMiaKmp6iEB9qfuLTRRKTEg\"",
    "mtime": "2023-07-24T19:10:31.480Z",
    "size": 921228,
    "path": "../public/_nuxt/inicianteProgramacaoJS.a052f14c.jpg"
  },
  "/_nuxt/it.b0d7e538.js": {
    "type": "application/javascript",
    "etag": "\"52b7-uJbO/4+/QC/5+1n29dwcRLpFEFs\"",
    "mtime": "2023-07-24T19:10:31.484Z",
    "size": 21175,
    "path": "../public/_nuxt/it.b0d7e538.js"
  },
  "/_nuxt/javascriptTT.8c7b7148.jpg": {
    "type": "image/jpeg",
    "etag": "\"7fc24-bJZLTrLFX4UdkjmrbsMPW/UhACA\"",
    "mtime": "2023-07-24T19:10:31.477Z",
    "size": 523300,
    "path": "../public/_nuxt/javascriptTT.8c7b7148.jpg"
  },
  "/_nuxt/JosefinSans-Bold.213e3d70.woff": {
    "type": "font/woff",
    "etag": "\"7538-9muPQgXDFcqhQ04+BBhBAvfx1Io\"",
    "mtime": "2023-07-24T19:10:31.477Z",
    "size": 30008,
    "path": "../public/_nuxt/JosefinSans-Bold.213e3d70.woff"
  },
  "/_nuxt/JosefinSans-Light.b1edc580.woff": {
    "type": "font/woff",
    "etag": "\"780c-DtKzwdubcBWjh7S9dSK8Rx3CkMU\"",
    "mtime": "2023-07-24T19:10:31.477Z",
    "size": 30732,
    "path": "../public/_nuxt/JosefinSans-Light.b1edc580.woff"
  },
  "/_nuxt/JosefinSans-Regular.1551f64b.woff": {
    "type": "font/woff",
    "etag": "\"7988-+xfsgcBqSqvb6JBfxivkjPOHwJA\"",
    "mtime": "2023-07-24T19:10:31.476Z",
    "size": 31112,
    "path": "../public/_nuxt/JosefinSans-Regular.1551f64b.woff"
  },
  "/_nuxt/jqueryIcon.87c3d022.svg": {
    "type": "image/svg+xml",
    "etag": "\"d5d-Mz+5dvHMPSqU6rqDtMzAPNfijgo\"",
    "mtime": "2023-07-24T19:10:31.480Z",
    "size": 3421,
    "path": "../public/_nuxt/jqueryIcon.87c3d022.svg"
  },
  "/_nuxt/jsIcon.081ae58f.svg": {
    "type": "image/svg+xml",
    "etag": "\"3b7-PNe87WU+2Be2WjTdH+VFsG8JIlA\"",
    "mtime": "2023-07-24T19:10:31.480Z",
    "size": 951,
    "path": "../public/_nuxt/jsIcon.081ae58f.svg"
  },
  "/_nuxt/lessIcon.eb782e1a.svg": {
    "type": "image/svg+xml",
    "etag": "\"c65-rQZ+Ioi16yfsoDcix5pri9CN5eo\"",
    "mtime": "2023-07-24T19:10:31.481Z",
    "size": 3173,
    "path": "../public/_nuxt/lessIcon.eb782e1a.svg"
  },
  "/_nuxt/nodeTT.98f7b319.jpg": {
    "type": "image/jpeg",
    "etag": "\"825e3-NUy45GHarpoQyRDjS6cpOHQDOXM\"",
    "mtime": "2023-07-24T19:10:31.478Z",
    "size": 533987,
    "path": "../public/_nuxt/nodeTT.98f7b319.jpg"
  },
  "/_nuxt/nuxt-link.4e1e872c.js": {
    "type": "application/javascript",
    "etag": "\"10e1-idcJPwpxRigWnQinIJHHUya5OUQ\"",
    "mtime": "2023-07-24T19:10:31.484Z",
    "size": 4321,
    "path": "../public/_nuxt/nuxt-link.4e1e872c.js"
  },
  "/_nuxt/photoshopIcon.662c80bb.svg": {
    "type": "image/svg+xml",
    "etag": "\"77b-h8NhILytFZGVerZ8BuiHRgB7f9s\"",
    "mtime": "2023-07-24T19:10:31.481Z",
    "size": 1915,
    "path": "../public/_nuxt/photoshopIcon.662c80bb.svg"
  },
  "/_nuxt/phpIcon.62e2ceb4.svg": {
    "type": "image/svg+xml",
    "etag": "\"119-fHG+uHBxgeEv2y9bf0/7mQuLnN4\"",
    "mtime": "2023-07-24T19:10:31.480Z",
    "size": 281,
    "path": "../public/_nuxt/phpIcon.62e2ceb4.svg"
  },
  "/_nuxt/Poppins-Bold.ec20b751.woff": {
    "type": "font/woff",
    "etag": "\"1a0f0-3jpDRefvVyP3y8y8Q8WrDzAqDGs\"",
    "mtime": "2023-07-24T19:10:31.477Z",
    "size": 106736,
    "path": "../public/_nuxt/Poppins-Bold.ec20b751.woff"
  },
  "/_nuxt/Poppins-Light.9f29b2b1.woff": {
    "type": "font/woff",
    "etag": "\"17428-Z3kNucLxGn1+8rjmoK+UOehQvLk\"",
    "mtime": "2023-07-24T19:10:31.477Z",
    "size": 95272,
    "path": "../public/_nuxt/Poppins-Light.9f29b2b1.woff"
  },
  "/_nuxt/Poppins-Regular.ea8390a2.woff": {
    "type": "font/woff",
    "etag": "\"179a8-pt1+tzoilanZyI45aaL5YAyvIoQ\"",
    "mtime": "2023-07-24T19:10:31.477Z",
    "size": 96680,
    "path": "../public/_nuxt/Poppins-Regular.ea8390a2.woff"
  },
  "/_nuxt/Poppins-SemiBold.d75d88b6.woff": {
    "type": "font/woff",
    "etag": "\"1927c-kveF7taCb38tj1167Lut/UtbvUw\"",
    "mtime": "2023-07-24T19:10:31.477Z",
    "size": 103036,
    "path": "../public/_nuxt/Poppins-SemiBold.d75d88b6.woff"
  },
  "/_nuxt/projectManagement.b61a4586.jpg": {
    "type": "image/jpeg",
    "etag": "\"da18e-SLAirmzGwlaRr8NvcijfSqOiE3Q\"",
    "mtime": "2023-07-24T19:10:31.481Z",
    "size": 893326,
    "path": "../public/_nuxt/projectManagement.b61a4586.jpg"
  },
  "/_nuxt/pt.918468ac.js": {
    "type": "application/javascript",
    "etag": "\"5349-LZpKNteJNHEBT35kmoe+Hzd/7XM\"",
    "mtime": "2023-07-24T19:10:31.484Z",
    "size": 21321,
    "path": "../public/_nuxt/pt.918468ac.js"
  },
  "/_nuxt/python.e4fccbb0.jpg": {
    "type": "image/jpeg",
    "etag": "\"db230-bGSGn0CZb4HocCX562sTNkkT4fQ\"",
    "mtime": "2023-07-24T19:10:31.480Z",
    "size": 897584,
    "path": "../public/_nuxt/python.e4fccbb0.jpg"
  },
  "/_nuxt/reactAlura.d6cc508e.jpg": {
    "type": "image/jpeg",
    "etag": "\"1004db-sh98lTo3YqiIkFa3kDfRmXg1JRU\"",
    "mtime": "2023-07-24T19:10:31.480Z",
    "size": 1049819,
    "path": "../public/_nuxt/reactAlura.d6cc508e.jpg"
  },
  "/_nuxt/ReactIcon.90b319fc.svg": {
    "type": "image/svg+xml",
    "etag": "\"ceb-FMA7W0rXmfDsNLoOsyk36l5c7ls\"",
    "mtime": "2023-07-24T19:10:31.481Z",
    "size": 3307,
    "path": "../public/_nuxt/ReactIcon.90b319fc.svg"
  },
  "/_nuxt/reactTT.f7145b5c.jpg": {
    "type": "image/jpeg",
    "etag": "\"7f836-eBEGC/yX/u3v1MdvWincJmg3DNw\"",
    "mtime": "2023-07-24T19:10:31.477Z",
    "size": 522294,
    "path": "../public/_nuxt/reactTT.f7145b5c.jpg"
  },
  "/_nuxt/reactUdemy.db99c39f.jpg": {
    "type": "image/jpeg",
    "etag": "\"91314-iZUYbLtomJvg3pbbfPhvu+vazN0\"",
    "mtime": "2023-07-24T19:10:31.478Z",
    "size": 594708,
    "path": "../public/_nuxt/reactUdemy.db99c39f.jpg"
  },
  "/_nuxt/reactZeroToAdvanceUdemy.ea5b8fc5.jpg": {
    "type": "image/jpeg",
    "etag": "\"1d48e4-laG5e46DAuJIKmXMZ7Bz9+aw+R0\"",
    "mtime": "2023-07-24T19:10:31.481Z",
    "size": 1919204,
    "path": "../public/_nuxt/reactZeroToAdvanceUdemy.ea5b8fc5.jpg"
  },
  "/_nuxt/react_native_icon.66816bfe.svg": {
    "type": "image/svg+xml",
    "etag": "\"930-Ei2jO8zRvK4xYukJE7qNBSokW3o\"",
    "mtime": "2023-07-24T19:10:31.481Z",
    "size": 2352,
    "path": "../public/_nuxt/react_native_icon.66816bfe.svg"
  },
  "/_nuxt/sassIcon.9de5002b.svg": {
    "type": "image/svg+xml",
    "etag": "\"13e7-vxiAQHPg4OLG1/wjFhUEq9bhzBI\"",
    "mtime": "2023-07-24T19:10:31.482Z",
    "size": 5095,
    "path": "../public/_nuxt/sassIcon.9de5002b.svg"
  },
  "/_nuxt/skills.82385837.js": {
    "type": "application/javascript",
    "etag": "\"ad0-2PJFV6GFV7isvlEkvVxX+uQUBgw\"",
    "mtime": "2023-07-24T19:10:31.483Z",
    "size": 2768,
    "path": "../public/_nuxt/skills.82385837.js"
  },
  "/_nuxt/softwareEngineering.31881d69.jpg": {
    "type": "image/jpeg",
    "etag": "\"170727-TEZQNadoCe5aSl8Gz3+Zf2axj88\"",
    "mtime": "2023-07-24T19:10:31.482Z",
    "size": 1509159,
    "path": "../public/_nuxt/softwareEngineering.31881d69.jpg"
  },
  "/_nuxt/themeColor.471f0216.js": {
    "type": "application/javascript",
    "etag": "\"69f-91vGngPo0BdP55wGDDTZZ4VT0Uk\"",
    "mtime": "2023-07-24T19:10:31.483Z",
    "size": 1695,
    "path": "../public/_nuxt/themeColor.471f0216.js"
  },
  "/_nuxt/vjs3Udemy.c18d6feb.jpg": {
    "type": "image/jpeg",
    "etag": "\"46d3e-YDnU4klYXABeryID6IJd4EVRFew\"",
    "mtime": "2023-07-24T19:10:31.477Z",
    "size": 290110,
    "path": "../public/_nuxt/vjs3Udemy.c18d6feb.jpg"
  },
  "/_nuxt/vjsUdemy.19003483.jpg": {
    "type": "image/jpeg",
    "etag": "\"55406-cPufM2JiWbuvWnDoqmDB83SmAXQ\"",
    "mtime": "2023-07-24T19:10:31.477Z",
    "size": 349190,
    "path": "../public/_nuxt/vjsUdemy.19003483.jpg"
  },
  "/_nuxt/vueAlura.bfa406dd.jpg": {
    "type": "image/jpeg",
    "etag": "\"c7608-P7rO4IrIbAzIk58btAiyGXYT0ns\"",
    "mtime": "2023-07-24T19:10:31.478Z",
    "size": 816648,
    "path": "../public/_nuxt/vueAlura.bfa406dd.jpg"
  },
  "/_nuxt/vueIcon.d226c7e0.svg": {
    "type": "image/svg+xml",
    "etag": "\"2b6-esrfdGKpvSs+hvHP7LszDG4WIlI\"",
    "mtime": "2023-07-24T19:10:31.482Z",
    "size": 694,
    "path": "../public/_nuxt/vueIcon.d226c7e0.svg"
  },
  "/_nuxt/wordpressIcon.631a7d6f.svg": {
    "type": "image/svg+xml",
    "etag": "\"67e-4C5AKFwBg8DYYNj2j5s49N60eBA\"",
    "mtime": "2023-07-24T19:10:31.482Z",
    "size": 1662,
    "path": "../public/_nuxt/wordpressIcon.631a7d6f.svg"
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

const _lazy_vFAnT3 = () => import('../handlers/renderer.mjs').then(function (n) { return n.r; });

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_vFAnT3, lazy: true, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_vFAnT3, lazy: true, middleware: false, method: undefined }
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
