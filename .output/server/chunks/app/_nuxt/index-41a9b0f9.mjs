import { mergeProps, useSSRContext, withCtx, createVNode, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc, u as useSubmenuActive, a as _imports_0$1, b as _imports_1$1, e as _imports_1, d as __nuxt_component_0$4 } from '../server.mjs';
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
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "home-infos" }, _attrs))}><div class="d-flex justify-content-center align-items-center"><span class="text home-text text-color01"> Hey \u{1F44B} I\u2019m Pedro! A UX Designer based in Lisbon that turns great ideas into useful and enjoyable digital products </span></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/Infos.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = {
  __name: "Tumbs",
  __ssrInlineRender: true,
  setup(__props) {
    const submenu = useSubmenuActive();
    function setSubmenuTrue() {
      console.log("true");
      submenu.setTrue();
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "home-tumbs" }, _attrs))}><div class="tumbs-items d-flex flex-wrap justify-content-between align-items-center">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/agency",
        onClick: setSubmenuTrue,
        class: "tumb-item"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="tumb-item-content d-flex flex-column justify-content-center align-items-start"${_scopeId}><span class="text home-tumbstitle text-color01"${_scopeId}>Agency | Mobile</span><span class="text home-tumbsSubtitle text-color01"${_scopeId}>Match with <br${_scopeId}>Creatives</span><span class="text home-tumbsText text-color03"${_scopeId}>Helping creatives foster successful relations</span></div><div class="tumb-item-image d-flex flex-column justify-content-center align-items-center"${_scopeId}><img${ssrRenderAttr("src", _imports_0$1)} alt="Agency"${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", { class: "tumb-item-content d-flex flex-column justify-content-center align-items-start" }, [
                createVNode("span", { class: "text home-tumbstitle text-color01" }, "Agency | Mobile"),
                createVNode("span", { class: "text home-tumbsSubtitle text-color01" }, [
                  createTextVNode("Match with "),
                  createVNode("br"),
                  createTextVNode("Creatives")
                ]),
                createVNode("span", { class: "text home-tumbsText text-color03" }, "Helping creatives foster successful relations")
              ]),
              createVNode("div", { class: "tumb-item-image d-flex flex-column justify-content-center align-items-center" }, [
                createVNode("img", {
                  src: _imports_0$1,
                  alt: "Agency"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/mapping",
        onClick: setSubmenuTrue,
        class: "tumb-item"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="tumb-item-content d-flex flex-column justify-content-center align-items-start"${_scopeId}><span class="text home-tumbstitle text-color01"${_scopeId}>Mapping | Desktop</span><span class="text home-tumbsSubtitle text-color01"${_scopeId}>Map your <br${_scopeId}>Career</span><span class="text home-tumbsText text-color03"${_scopeId}>Ensuring alignment between today&#39;s knowledge supply &amp; tomorrow&#39;s market demand</span></div><div class="tumb-item-image d-flex flex-column justify-content-center align-items-center"${_scopeId}><img${ssrRenderAttr("src", _imports_1$1)} alt="Mapping"${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", { class: "tumb-item-content d-flex flex-column justify-content-center align-items-start" }, [
                createVNode("span", { class: "text home-tumbstitle text-color01" }, "Mapping | Desktop"),
                createVNode("span", { class: "text home-tumbsSubtitle text-color01" }, [
                  createTextVNode("Map your "),
                  createVNode("br"),
                  createTextVNode("Career")
                ]),
                createVNode("span", { class: "text home-tumbsText text-color03" }, "Ensuring alignment between today's knowledge supply & tomorrow's market demand")
              ]),
              createVNode("div", { class: "tumb-item-image d-flex flex-column justify-content-center align-items-center" }, [
                createVNode("img", {
                  src: _imports_1$1,
                  alt: "Mapping"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/youtube",
        onClick: setSubmenuTrue,
        class: "tumb-item"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="tumb-item-content d-flex flex-column justify-content-center align-items-start"${_scopeId}><span class="text home-tumbstitle text-color01"${_scopeId}>Youtube Premium</span><span class="text home-tumbsSubtitle text-color01"${_scopeId}>Subscriptions<br${_scopeId}>&amp; Ad-blockers</span><span class="text home-tumbsText text-color03"${_scopeId}>Onboarding Case Study </span></div><div class="tumb-item-image d-flex flex-column justify-content-center align-items-center"${_scopeId}><img${ssrRenderAttr("src", _imports_1)} alt="Youtube"${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", { class: "tumb-item-content d-flex flex-column justify-content-center align-items-start" }, [
                createVNode("span", { class: "text home-tumbstitle text-color01" }, "Youtube Premium"),
                createVNode("span", { class: "text home-tumbsSubtitle text-color01" }, [
                  createTextVNode("Subscriptions"),
                  createVNode("br"),
                  createTextVNode("& Ad-blockers")
                ]),
                createVNode("span", { class: "text home-tumbsText text-color03" }, "Onboarding Case Study ")
              ]),
              createVNode("div", { class: "tumb-item-image d-flex flex-column justify-content-center align-items-center" }, [
                createVNode("img", {
                  src: _imports_1,
                  alt: "Youtube"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/Tumbs.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$1;
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HomeInfos = __nuxt_component_0;
      const _component_HomeTumbs = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pages home-page" }, _attrs))}><div class="container">`);
      _push(ssrRenderComponent(_component_HomeInfos, null, null, _parent));
      _push(ssrRenderComponent(_component_HomeTumbs, null, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-41a9b0f9.mjs.map
