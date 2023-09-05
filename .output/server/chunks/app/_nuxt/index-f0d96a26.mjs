import { useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'h3';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'ufo';
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

const _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "home-infos" }, _attrs))}><div class="d-flex justify-content-between align-items-center"><div class="left-infos d-flex flex-column justify-content-center align-items-start"><span class="text home-bigtitle text-color01">Pedro Aires<br>Serrano </span><div class="text-line"></div><span class="text title text-color03">A constant work <br>in progress</span></div><div class="right-infos d-flex flex-column justify-content-center align-items-center"><div class="top-text"><span class="text home-title text-color01">Hey \u{1F44B}</span><span class="text text-color02 subdesc"> I&#39;m a UX/UI Designer based in Lisbon, with a background in Architecture. Once entering the world of UX, I quickly realised that technology can be a powerful tool as it enables me to reach out and impact the lives of many people </span></div><div class="bottom-text d-flex justify-content-center align-items-center"><div class="left-text"><span class="text home-title text-color01">I thrive on \u{1F3C3}</span><span class="text text-color02 subdesc"> The sense of fulfilment when sharing my passion for creative design ideas with others </span></div><div class="right-text"><span class="text home-title text-color01">As well as \u{1F304}</span><span class="text text-color02 subdesc"> Crafting immersive experiences, redefining user interactions and creating impactful digital spaces. </span></div></div></div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/Infos.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "home-tumbs" }, _attrs))}><div class="tumbs-items d-flex justify-content-between align-items-center"><div class="tumb-item d-flex flex-column justify-content-center align-items-start"><span class="text home-bigtitle white">Creative <br>Matching</span><span class="text white">Helping creatives foster successful relations</span></div><div class="tumb-item d-flex flex-column justify-content-center align-items-start"><span class="text home-bigtitle white">Map your <br>Career</span><span class="text white">Ensuring alignment between today&#39;s human resources and tomorrow&#39;s market demand</span></div><div class="tumb-item d-flex flex-column justify-content-center align-items-start"><span class="text home-bigtitle white">Brand ID +<br>D. System</span><span class="text white">575inc branding op.</span></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/Tumbs.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_HomeInfos = __nuxt_component_0;
  const _component_HomeTumbs = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "pages home-page" }, _attrs))}><div class="container">`);
  _push(ssrRenderComponent(_component_HomeInfos, null, null, _parent));
  _push(ssrRenderComponent(_component_HomeTumbs, null, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-f0d96a26.mjs.map
