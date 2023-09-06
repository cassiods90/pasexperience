import { i as isFunction$1, a as isObject$1 } from '../server.mjs';
import 'vue';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'h3';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'ufo';
import '@intlify/core-base';
import 'cookie-es';
import 'is-https';
import 'vue/server-renderer';
import 'defu';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'klona';
import 'ohash';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';

async function i18n_options() {
  const loader = await import('./i18n.config-a69f4905.mjs').then((m) => m.default || m);
  const config = isFunction$1(loader) ? await loader() : isObject$1(loader) ? loader : {};
  return config;
}

export { i18n_options as default };
//# sourceMappingURL=i18n.options-d3c65ca0.mjs.map
