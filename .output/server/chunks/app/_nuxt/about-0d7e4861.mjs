import { useSSRContext, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc, u as useI18n } from '../server.mjs';
import { _ as __nuxt_component_0$2, a as __nuxt_component_1$1 } from './IconQuoteRight-26f68fb0.mjs';
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

const _sfc_main$3 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    height: "512px",
    id: "Layer_1",
    style: { "enable-background": "new 0 0 512 512" },
    version: "1.1",
    viewBox: "0 0 512 512",
    width: "512px",
    "xml:space": "preserve",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink"
  }, _attrs))}><path d="M322.7,128.4L423,233.4c6,5.8,9,13.7,9,22.4c0,8.7-3,16.5-9,22.4L322.7,383.6c-11.9,12.5-31.3,12.5-43.2,0  c-11.9-12.5-11.9-32.7,0-45.2l48.2-50.4h-217C93.7,288,80,273.7,80,256c0-17.7,13.7-32,30.6-32h217l-48.2-50.4  c-11.9-12.5-11.9-32.7,0-45.2C291.4,115.9,310.7,115.9,322.7,128.4z"></path></svg>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/svgs/IconRightArrow.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$2 = {
  __name: "MyContent",
  __ssrInlineRender: true,
  setup(__props) {
    const { t, tm } = useI18n();
    const factsLang = tm("about.myContent.facts");
    const facts = factsLang.map((item) => item.loc.source);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SvgsIconRightArrow = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card-item about-card" }, _attrs))}><div class="about-card-content d-flex flex-column justify-content-between align-items-start"><div class="about-me-content d-flex flex-column justify-content-start align-items-start"><h1 class="text title white d-flex flex-wrap justify-content-center align-items-center">${ssrInterpolate(_ctx.$t("about.myContent.title"))} <span class="text title white">C\xE1ssio Spessatto</span></h1><span class="about-me-text text white">${ssrInterpolate(_ctx.$t("about.myContent.text"))}</span></div><div class="about-me-facts"><span class="text subtitle white">${ssrInterpolate(_ctx.$t("about.myContent.moreFactsTitle"))}</span><!--[-->`);
      ssrRenderList(unref(facts), (fact, index) => {
        _push(`<div class="d-flex justify-content-start align-items-center">`);
        _push(ssrRenderComponent(_component_SvgsIconRightArrow, null, null, _parent));
        _push(`<span class="text white">${ssrInterpolate(fact)}</span></div>`);
      });
      _push(`<!--]--></div><div class="custon-btn download-btn d-flex justify-content-center align-items-center"><a href="/cvcassiospessatto.pdf" target="_blank" class="text white d-flex justify-content-center align-items-center">${ssrInterpolate(_ctx.$t("about.myContent.download"))}</a></div></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/about/MyContent.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$2;
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_SvgsIconQuoteLeft = __nuxt_component_0$2;
  const _component_SvgsIconQuoteRight = __nuxt_component_1$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "card-item about-card" }, _attrs))}><div class="about-card-content d-flex justify-content-center align-items-center"><div class="about-resume-content d-flex flex-column justify-content-start align-items-start"><span class="about-resume-text text white">`);
  _push(ssrRenderComponent(_component_SvgsIconQuoteLeft, null, null, _parent));
  _push(` ${ssrInterpolate(_ctx.$t("about.myResume.textTop"))} <br><br> ${ssrInterpolate(_ctx.$t("about.myResume.textBottom"))} `);
  _push(ssrRenderComponent(_component_SvgsIconQuoteRight, null, null, _parent));
  _push(`</span></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/about/MyResume.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_AboutMyContent = __nuxt_component_0;
  const _component_AboutMyResume = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "pages about-page" }, _attrs))}><div class="main-title"><span class="text bigtitle uppercase white">${ssrInterpolate(_ctx.$t("about.aboutMe"))}</span></div><div class="about-cards"><div class="row justify-content-around"><div class="col-12 col-xl-5">`);
  _push(ssrRenderComponent(_component_AboutMyContent, null, null, _parent));
  _push(`</div><div class="col-12 col-xl-5">`);
  _push(ssrRenderComponent(_component_AboutMyResume, null, null, _parent));
  _push(`</div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const about = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { about as default };
//# sourceMappingURL=about-0d7e4861.mjs.map
