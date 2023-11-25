import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { mergeProps, useSSRContext, withCtx, createVNode, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc, a as _imports_0$1$1, b as _imports_1$1, d as __nuxt_component_0$4 } from '../server.mjs';
import 'vue-bundle-renderer/runtime';
import 'h3';
import 'devalue';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'ofetch';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'klona';
import 'defu';
import 'ohash';
import 'ufo';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'unctx';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _imports_0$1 = "" + buildAssetsURL("card.b8723f8d.png");
const _sfc_main$4 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "about-me" }, _attrs))}><div class="about-me-inner d-flex justify-content-center align-items-center"><div class="about-me-card d-flex justify-content-start align-items-center"><div class="about-me-card-image d-flex flex-column justify-content-center align-items-center"><img${ssrRenderAttr("src", _imports_0$1)} alt="About me Card"></div><div class="about-me-card-content d-flex flex-column justify-content-center align-items-start"><span class="text header-tumbsSubtitle regular text-color01">Pedro Aires<br>Serrano</span><span class="line"></span><span class="text header-tumbstitle text-color01">UX Designer <br>Lisbon</span></div></div><div class="about-me-content"><span class="text text-color01"> If you\u2019re reading this, thank you for your time. You can find me at <strong class="text">pedroairserrano@gmail.com</strong> Also, feel free to connect via LinkedIn \u{1F44B} </span></div></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/about/FindMe.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$3]]);
const _imports_0 = "" + buildAssetsURL("bannerNew.668332ec.png");
const _imports_1 = "data:image/png;base64,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";
const _imports_2 = "" + buildAssetsURL("pdf.6f2ec2da.png");
const _sfc_main$3 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "about-banner" }, _attrs))}><div class="banner-image"><img${ssrRenderAttr("src", _imports_0)} alt="banner"></div><div class="banner-content"><div class="container"><div class="banner-content-inner d-flex justify-content-center align-items-end"><div class="banner-content-sides d-flex justify-content-between align-items-start"><div class="banner-content-left"><a href="https://www.linkedin.com/in/pedroairesserrano" target="_blank" class="banner-card d-flex justify-content-start align-items-center"><div class="banner-card-image d-flex flex-column justify-content-center align-items-center"><img${ssrRenderAttr("src", _imports_1)} alt="About me Card"></div><div class="banner-card-content d-flex flex-column justify-content-center align-items-start"><span class="text home-tumbstitle text-color01">Connect<br>on LinkedIn</span><span class="line"></span><span class="text subtitle text-color01">Send message</span></div></a></div><div class="banner-content-right"><a href="/myCV.pdf" target="_blank" class="banner-card d-flex justify-content-start align-items-center"><div class="banner-card-image d-flex flex-column justify-content-center align-items-center"><img${ssrRenderAttr("src", _imports_2)} alt="About me Card"></div><div class="banner-card-content d-flex flex-column justify-content-center align-items-start"><span class="text home-tumbstitle text-color01">Curriculum<br>Vitae</span><span class="line"></span><span class="text subtitle text-color01">Download here</span></div></a></div></div></div></div></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/about/Banner.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "my-infos component-spaces" }, _attrs))}><div class="my-infos-items"><div class="my-infos-item d-flex flex-column justify-content-between align-items-start"><div class="my-infos-item-title title-spaces d-flex justify-content-between align-items-center"><span class="text title medium text-color01">UX/UI Design (Specialized)</span><a href="http://www.google.com" target="_blank" class="text medium white">Download Final Report</a></div><span class="text text-color01">An immersive project-based program focused on learning best-in-practice end-to-end UX processes. During my time at Flag Lisboa, I was able to work on multiple individual/group projects, further establishing guidelines for UXR, when responsible for product research and my main role meant understanding user behaviours, needs, motivations and problems; I.A., when responsible for structuring websites and applications, in order to guarantee a positive experience for the user; and Visual Design, working towards positive change from prototypes into visual designs</span></div><div class="my-infos-item d-flex flex-column justify-content-between align-items-start"><div class="my-infos-item-title title-spaces d-flex justify-content-between align-items-center"><span class="text title medium text-color01">Masters in Architecture (MIA)</span><a href="https://www.lis.ulusiada.pt/pt-pt/provas/mialicpedroserrano.aspx" target="_blank" class="text medium white">Download MIA Thesis</a></div><span class="text text-color01">As a student I was provided with the theoretical and practical skills necessary for the practice of Architecture. Expressed in different areas, this is a cultural, artistic and scientific phenomenon, that takes into account sources, methods and research techniques to employ architectural and urban design</span></div><div class="my-infos-item d-flex flex-column justify-content-between align-items-start"><div class="my-infos-item-title title-spaces d-flex justify-content-between align-items-center"><span class="text title medium text-color01">Media Production</span><a href="https://www.youtube.com/watch?v=wXkafQWeyWI" target="_blank" class="text medium white">Video Portfolio</a></div><span class="text text-color01">End-to-end digital media production, community management, and brand awareness for multiple entities. Worked both, as a freelancer and as a part of Digital Marketing teams</span></div><div class="my-infos-item d-flex flex-column justify-content-between align-items-start"><div class="my-infos-item-title title-spaces d-flex justify-content-between align-items-center"><span class="text title medium text-color01">Final notes</span><a href="mailto:pedroairserrano@gmail.com" target="_blank" class="text medium white">Send Email</a></div><span class="text text-color01">Feel free to connect via LinkedIn for any UX or non-UX related issues. I\u2019m a team player who believes in interdisciplinary collaboration and critical thinking. See you soon!</span></div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/about/MyInfos.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$4;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "go-back component-spaces" }, _attrs))}><div class="go-back-inner d-flex flex-column justify-content-start align-items-start"><div class="go-back-title title-spaces"><div class="line"></div><span class="text title regular text-color01">Go back to Case Studies</span></div><div class="go-back-sides d-flex justify-content-between align-items-start"><div class="go-back-left">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/agency",
    class: "go-back-card d-flex justify-content-start align-items-center"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="go-back-card-image d-flex flex-column justify-content-center align-items-center"${_scopeId}><img${ssrRenderAttr("src", _imports_0$1$1)} alt="Agency"${_scopeId}></div><div class="go-back-card-content d-flex flex-column justify-content-center align-items-start"${_scopeId}><span class="text home-tumbstitle semibold text-color01"${_scopeId}>Match with<br${_scopeId}>Creatives</span><span class="line"${_scopeId}></span><span class="text subtitle regular text-color01"${_scopeId}>Agency<br${_scopeId}>Mobile</span></div>`);
      } else {
        return [
          createVNode("div", { class: "go-back-card-image d-flex flex-column justify-content-center align-items-center" }, [
            createVNode("img", {
              src: _imports_0$1$1,
              alt: "Agency"
            })
          ]),
          createVNode("div", { class: "go-back-card-content d-flex flex-column justify-content-center align-items-start" }, [
            createVNode("span", { class: "text home-tumbstitle semibold text-color01" }, [
              createTextVNode("Match with"),
              createVNode("br"),
              createTextVNode("Creatives")
            ]),
            createVNode("span", { class: "line" }),
            createVNode("span", { class: "text subtitle regular text-color01" }, [
              createTextVNode("Agency"),
              createVNode("br"),
              createTextVNode("Mobile")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="go-back-right">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/mapping",
    class: "go-back-card d-flex justify-content-start align-items-center"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="go-back-card-image d-flex flex-column justify-content-center align-items-center"${_scopeId}><img${ssrRenderAttr("src", _imports_1$1)} alt="Mapping"${_scopeId}></div><div target="_blank" class="go-back-card-content d-flex flex-column justify-content-center align-items-start"${_scopeId}><span class="text home-tumbstitle semibold text-color01"${_scopeId}>Map your<br${_scopeId}>Career</span><span class="line"${_scopeId}></span><span class="text subtitle regular text-color01"${_scopeId}>Mapping<br${_scopeId}>(LinkedIn feature)</span></div>`);
      } else {
        return [
          createVNode("div", { class: "go-back-card-image d-flex flex-column justify-content-center align-items-center" }, [
            createVNode("img", {
              src: _imports_1$1,
              alt: "Mapping"
            })
          ]),
          createVNode("div", {
            target: "_blank",
            class: "go-back-card-content d-flex flex-column justify-content-center align-items-start"
          }, [
            createVNode("span", { class: "text home-tumbstitle semibold text-color01" }, [
              createTextVNode("Map your"),
              createVNode("br"),
              createTextVNode("Career")
            ]),
            createVNode("span", { class: "line" }),
            createVNode("span", { class: "text subtitle regular text-color01" }, [
              createTextVNode("Mapping"),
              createVNode("br"),
              createTextVNode("(LinkedIn feature)")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/about/GoBackCaseStudies.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AboutFindMe = __nuxt_component_0;
      const _component_AboutBanner = __nuxt_component_1;
      const _component_AboutMyInfos = __nuxt_component_2;
      const _component_AboutGoBackCaseStudies = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pages about-page" }, _attrs))}><div class="container">`);
      _push(ssrRenderComponent(_component_AboutFindMe, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_AboutBanner, null, null, _parent));
      _push(`<div class="container container-less-about">`);
      _push(ssrRenderComponent(_component_AboutMyInfos, null, null, _parent));
      _push(`</div><div class="container">`);
      _push(ssrRenderComponent(_component_AboutGoBackCaseStudies, null, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=about-ae013f7c.mjs.map
