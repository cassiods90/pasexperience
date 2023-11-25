import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { mergeProps, useSSRContext, unref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc, b as _imports_1$1, e as _imports_1, d as __nuxt_component_0$4 } from '../server.mjs';
import { _ as __nuxt_component_0$1, a as __nuxt_component_1$1 } from './swiper-bundle-966490e0.mjs';
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
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

const _imports_0$8 = "" + buildAssetsURL("bannerAgencyNew.ea95abeb.png");
const _sfc_main$o = {};
function _sfc_ssrRender$m(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "agency-banner" }, _attrs))}><div class="container"><div class="agency-banner-content"><div class="agency-banner-content-inner d-flex flex-column justify-content-center align-items-center"><span class="text bigtitle text-color06">Agency</span><span class="text banner-title semibold text-color06">Link and build\xA0 \u2014 \xA0within a single app</span><span class="text banner-title text-color06">Bridging the gap between digital creators and future partners</span></div></div><div class="agency-banner-image"><img${ssrRenderAttr("src", _imports_0$8)} alt="bannerAgencyNew"></div></div></div>`);
}
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/agency/Banner.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["ssrRender", _sfc_ssrRender$m]]);
const _sfc_main$n = {};
function _sfc_ssrRender$l(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "problem component-spaces container-less" }, _attrs))}><span class="text moreTitle text-color06 title-spaces">Problem</span><div class="problem-text"><span class="text text-color01"> According to the European Agenda for Culture, \u201C(...) <b>culture is often seen as a luxury that may be easily disposed of,</b> creative partnerships concretely exemplify the benefits that culture may bring both to society and to the economy.\u201D* </span></div><div class="problem-links d-flex justify-content-start align-items-center"><span class="text text-color01">*Online: \xA0</span><a href="https://ec.europa.eu/assets/eac/culture/library/reports/creative-partnerships_en.pdf" target="_blank" class="text">(OMC) on Promotion of Creative Partnerships</a></div></div>`);
}
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/agency/Problem.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["ssrRender", _sfc_ssrRender$l]]);
const _sfc_main$m = {};
function _sfc_ssrRender$k(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "solution component-spaces container-less" }, _attrs))}><span class="text moreTitle text-color06 title-spaces">Solution</span><div class="solution-text"><span class="text text-color01"> Our intent is to tackle the root cause of this event <b>by nulling the quest for immediate financial return and focusing instead on the work relationships:</b> bridging the gap, enhancing the quality and sharing the reward </span></div></div>`);
}
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/agency/Solution.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["ssrRender", _sfc_ssrRender$k]]);
const _imports_0$7 = "" + buildAssetsURL("solution.cd680901.png");
const _sfc_main$l = {};
function _sfc_ssrRender$j(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "solution-image component-spaces d-flex justify-content-center align-items-center" }, _attrs))}><div class="solution-image-item"><img${ssrRenderAttr("src", _imports_0$7)} alt="Solution"></div></div>`);
}
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/agency/SolutionImage.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["ssrRender", _sfc_ssrRender$j]]);
const _sfc_main$k = {};
function _sfc_ssrRender$i(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "understandingUser component-spaces container-less" }, _attrs))}><span class="text moreTitle text-color06 title-spaces">Understanding the User</span><div class="understandingUser-text"><span class="text text-color01"> Deployed as the bedrock for an effective design strategy, our Research went through in-depth <b>user interviews for qualitative behavioral/attitudinal cues,</b> and meticulous <b>journey mapping to capture every nuance of our users\u2019 interactions</b> with the product </span></div></div>`);
}
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/agency/UnderstandingUser.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["ssrRender", _sfc_ssrRender$i]]);
const _sfc_main$j = {};
function _sfc_ssrRender$h(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "ResearchFindings component-spaces container-less" }, _attrs))}><span class="text moreTitle text-color06 title-spaces">Research Findings</span><div class="ResearchFindings-text"><span class="text text-color01"> Agency\u2019s most relevant research finding states that our users\u2019 <b>emotional polarity is directly correlated with qualitative positive matches versus indiscriminately quantitative negative ones </b></span></div></div>`);
}
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/agency/ResearchFindings.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["ssrRender", _sfc_ssrRender$h]]);
const _sfc_main$i = {};
function _sfc_ssrRender$g(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "KeyInsights component-spaces container-less" }, _attrs))}><span class="text moreTitle text-color06 title-spaces">Key Insights</span><div class="KeyInsights-text"><span class="text text-color01">Gathered and categorized into two factors</span></div><div class="KeyInsights-table"><div class="KeyInsights-table-items d-flex justify-content-between align-items-center"><div class="KeyInsights-table-item"><span class="text text-color01 title-spaces"><b>Motivators</b></span><ul><li><span class="text text-color01">Quality Enhancement</span></li><li><span class="text text-color01">Productivity and Efficiency</span></li><li><span class="text text-color01">Reskilling and Upskilling</span></li><li><span class="text text-color01">Untapped Insights</span></li><li><span class="text text-color01">Community and Engagement</span></li></ul></div><div class="KeyInsights-table-item"><span class="text text-color01 title-spaces"><b>Constraints</b></span><ul><li><span class="text text-color01">Lack of Accessibility</span></li><li><span class="text text-color01">Misschedules</span></li><li><span class="text text-color01">Miscommunication</span></li><li><span class="text text-color01">Misalignment</span></li><li><span class="text text-color01">Dispersion</span></li></ul></div></div></div></div>`);
}
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/agency/KeyInsights.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["ssrRender", _sfc_ssrRender$g]]);
const _sfc_main$h = {};
function _sfc_ssrRender$f(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "potentialSolutions component-spaces" }, _attrs))}><div class="potentialSolutions-inner"><div class="potentialSolutions-items d-flex justify-content-center align-items-center"><div class="potentialSolutions-item left-item d-flex flex-column justify-content-center align-items-center"><div class="item-percentage"><span class="text text-color06">73%</span></div><div class="item-text"><span class="text title">of all interviewees experienced a rupture point during creative alignment</span></div></div><div class="potentialSolutions-item right-item d-flex justify-content-start align-items-center"><div class="item-title d-flex justify-content-center align-items-center"><span class="text moreTitle text-color06">Potential Solutions</span></div><div class="item-solutions"><ul><li><span class="text title text-color01"> Quality enhancement must become one of Agency\u2019s key drivers </span></li><li><span class="middle text title text-color01"> Limiting the quantity of matching options to avoid surge connections</span></li><li><span class="text title text-color01"> Providing better matches through metadata exposure </span></li></ul></div></div></div></div></div>`);
}
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/agency/PotentialSolutions.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["ssrRender", _sfc_ssrRender$f]]);
const _imports_0$6 = "" + buildAssetsURL("competitorResearch.764732ee.png");
const _sfc_main$g = {};
function _sfc_ssrRender$e(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "competitorResearch component-spaces" }, _attrs))}><div class="competitorResearch-items d-flex justify-content-center align-items-center"><div class="competitorResearch-item left"><div class="competitorResearch-image"><img${ssrRenderAttr("src", _imports_0$6)} alt="competitorResearch"></div></div><div class="competitorResearch-item right"><span class="text moreTitle text-color06 title-spaces">Competitor Research</span><div class="competitorResearch-text"><span class="text text-color01"> We\u2019ve conducted competitive analysis to examine existing platforms and services catering to digital media creators and their collaborative needs <br><br> In particular, Fiverr with its gig-based model platform that highlights the <b>effectiveness of modular service offerings</b><br><br> And also, Glassdoor where the emphasis on employee reviews and company ratings highlights <b>the significance of user-generated feedback</b></span></div></div></div></div>`);
}
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/agency/CompetitorResearch.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const __nuxt_component_8 = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["ssrRender", _sfc_ssrRender$e]]);
const _imports_0$5 = "" + buildAssetsURL("ImpactEffortMatrix.0b3bbed3.png");
const _sfc_main$f = {};
function _sfc_ssrRender$d(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "ImpactEffortMatrix component-spaces" }, _attrs))}><div class="ImpactEffortMatrix-items d-flex justify-content-center align-items-center"><div class="ImpactEffortMatrix-item left"><span class="text moreTitle text-color06 title-spaces">Impact Effort Matrix</span><div class="ImpactEffortMatrix-text"><span class="text text-color01"> Before moving on, we tried <b>to prioritize some feature ideas using an impact effort matrix.</b> This gave us a general idea of which features should be implemented into the design and where should we focus on first </span></div></div><div class="ImpactEffortMatrix-item right"><div class="ImpactEffortMatrix-image"><img${ssrRenderAttr("src", _imports_0$5)} alt="ImpactEffortMatrix"></div></div></div></div>`);
}
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/agency/ImpactEffortMatrix.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const __nuxt_component_9 = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["ssrRender", _sfc_ssrRender$d]]);
const _sfc_main$e = {};
function _sfc_ssrRender$c(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "userPersona component-spaces container-less" }, _attrs))}><span class="text moreTitle text-color06 title-spaces">User Persona</span><div class="userPersona-text"><span class="text text-color01"> After gathering and organizing the research data, we\u2019ve created a user persona to be able to visualize the target end-user <br><br> To guide us through the design process, we wanted to ensure that this persona accurately portrayed<b> a young professional in need of a faster way to connect with other creatives</b></span></div></div>`);
}
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/agency/UserPersona.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const __nuxt_component_10 = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["ssrRender", _sfc_ssrRender$c]]);
const _imports_0$4 = "" + buildAssetsURL("userPersonaCard.811f2af1.png");
const _sfc_main$d = {};
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "userPersonaCard component-spaces d-flex justify-content-center align-items-center" }, _attrs))}><div class="userPersonaCard-image"><img${ssrRenderAttr("src", _imports_0$4)} alt="userPersonaCard"></div></div>`);
}
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/agency/UserPersonaCard.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const __nuxt_component_11 = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["ssrRender", _sfc_ssrRender$b]]);
const _sfc_main$c = {};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "sketches component-spaces container-less" }, _attrs))}><span class="text moreTitle text-color06 title-spaces">Sketches</span><div class="sketches-text"><span class="text text-color01"> In the initial phase of sketching and ideation, our design team embarked on a creative journey to conceptualize the Agency app&#39;s user interface and functionality.<b>Through collaborative brainstorming and iterative sketching,</b> we explored various design directions to ensure a user-centered and intuitive experience </span></div></div>`);
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/agency/Sketches.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const __nuxt_component_12 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["ssrRender", _sfc_ssrRender$a]]);
const _imports_0$3 = "" + buildAssetsURL("sketches.f38b4670.png");
const _sfc_main$b = {};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "sketchesImage component-spaces d-flex justify-content-center align-items-center" }, _attrs))}><div class="sketches-image"><img${ssrRenderAttr("src", _imports_0$3)} alt="sketches"></div></div>`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/agency/SketchesImage.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const __nuxt_component_13 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$9]]);
const _sfc_main$a = {};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "LowFidelityPrototypes component-spaces container-less" }, _attrs))}><span class="text moreTitle text-color06 title-spaces">Low-Fidelity Prototypes</span><div class="LowFidelityPrototypes-text"><span class="text text-color01"> During this phase, a low-fidelity wireframe prototype is created, focusing on the basic structure and layout of the &#39;Agency&#39; app. This initial prototype provides <b>a visual representation of the app&#39;s key features and functionalities,</b> allowing for early feedback and validation from stakeholders and potential users </span></div></div>`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/agency/LowFidelityPrototypes.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __nuxt_component_14 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$8]]);
const _imports_0$2 = "" + buildAssetsURL("lowFidelityPrototypes.0c02bfd4.png");
const _sfc_main$9 = {};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "LowFidelityPrototypesImage component-spaces d-flex justify-content-center align-items-center" }, _attrs))}><div class="LowFidelityPrototypes-image"><img${ssrRenderAttr("src", _imports_0$2)} alt="lowFidelityPrototypes"></div></div>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/agency/LowFidelityPrototypesImage.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_15 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$8 = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "userTesting component-spaces container-less" }, _attrs))}><span class="text moreTitle text-color06 title-spaces">User Testing</span><div class="userTesting-text"><span class="text text-color01"> User testing the prototype was a pivotal in improving the app&#39;s usability. Through interactive sessions, real users navigated the interface, providing <b>valuable feedback on its intuitiveness and functionality.</b> Their input shaped crucial design refinements, ensuring the app aligns seamlessly with user expectations and preferences </span></div></div>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/agency/userTesting.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_16 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$6]]);
const _imports_0$1 = "" + buildAssetsURL("userTesting.54fba836.png");
const _sfc_main$7 = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "userTestingImage component-spaces d-flex justify-content-center align-items-center" }, _attrs))}><div class="userTesting-image"><img${ssrRenderAttr("src", _imports_0$1)} alt="userTesting"></div></div>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/agency/userTestingImage.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_17 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$6 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "HifiDesignPrototype component-spaces container-less" }, _attrs))}><span class="text moreTitle text-color06 title-spaces">Hi-fi Design / Prototype</span><div class="HifiDesignPrototype-text"><span class="text text-color01"> Based on the insights gained from the initial user testing, the lo-fi wireframe prototype is <b>refined to address usability issues and improve the overall user experience.</b> Adjustments are made to the layout, interactions, and visual elements to ensure clarity and intuitiveness, aligning the design more closely with user expectations </span></div></div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/agency/HifiDesignPrototype.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_18 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$4]]);
const _imports_0 = "" + buildAssetsURL("hifiDesignPrototype.d857225b.png");
const _sfc_main$5 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "HifiDesignPrototypeImage component-spaces d-flex justify-content-center align-items-center" }, _attrs))}><div class="HifiDesignPrototype-image"><img${ssrRenderAttr("src", _imports_0)} alt="hifiDesignPrototype"></div><div class="HifiDesignPrototype-content"><span class="text moreTitle medium text-color01">Would you like to interact with Agency\u2019s prototype?</span><a class="text semibold white d-flex justify-content-center align-items-center" href="https://www.figma.com/proto/xt1nqPyAu3QENbyTmC97hQ/2.-pasexperience.com-(Reedi%C3%A7%C3%A3o-29-Set.)?type=design&amp;node-id=1064-759&amp;t=0JJ52RxzKdp9vUev-0&amp;scaling=scale-down&amp;page-id=760%3A173&amp;starting-point-node-id=1064%3A759" target="_blank">Click Here</a></div></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/agency/HifiDesignPrototypeImage.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_19 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$4 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "DevelopmentHandoff component-spaces container-less" }, _attrs))}><span class="text moreTitle text-color06 title-spaces">Development Handoff</span><div class="DevelopmentHandoff-text"><span class="text text-color01"> In the development handoff phase, the <b> final design assets, specifications, and guidelines are prepared and shared with the development team.</b>This includes design files, style guides, and documentation to ensure a smooth transition from design to development </span></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/agency/DevelopmentHandoff.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_20 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "FinalReflections component-spaces container-less" }, _attrs))}><span class="text moreTitle text-color06 title-spaces">Final Reflections</span><div class="FinalReflections-text d-flex justify-content-between align-items-start"><span class="text text-color01"> What feedback or suggestions did users provide that could further enhance the app&#39;s features and functionalities? <br><br> What are the next steps in terms of shipping priority and scheduling for the remaining HMW&#39;s? <br><br> How did the app&#39;s design and user experience contribute to enhancing collaboration and productivity for digital media creators and their creative partners? </span><span class="text text-color01"> What valuable insights were gained from user testing and how did they inform the design decisions? <br><br> In what ways did the app successfully address the pain points and challenges faced by digital media creators and their creative partners? <br><br> How did the iterative design approach and user testing sessions impact the final outcome of &#39;Agency&#39;? </span></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/agency/FinalReflections.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_21 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]);
const agency1 = "" + buildAssetsURL("Agency1.ebd83a5e.png");
const agency2 = "" + buildAssetsURL("Agency2.a3bbff66.png");
const agency3 = "" + buildAssetsURL("Agency3.9dbd3609.png");
const agency4 = "" + buildAssetsURL("Agency4.1b1d6ea5.png");
const agency5 = "" + buildAssetsURL("Agency5.392b4ce5.png");
const agency6 = "" + buildAssetsURL("Agency6.3000dc82.png");
const agency7 = "" + buildAssetsURL("Agency7.f23e3308.png");
const agency8 = "" + buildAssetsURL("Agency8.c0f5152b.png");
const agency9 = "" + buildAssetsURL("Agency9.49589a9a.png");
const agency10 = "" + buildAssetsURL("Agency10.dab74667.png");
const agency11 = "" + buildAssetsURL("Agency11.1ef3bb3a.png");
const agency12 = "" + buildAssetsURL("Agency12.8068f78d.png");
const agency13 = "" + buildAssetsURL("Agency13.fe5b10a6.png");
const agency14 = "" + buildAssetsURL("Agency14.ffd12137.png");
const agency15 = "" + buildAssetsURL("Agency15.40d031d7.png");
const agency16 = "" + buildAssetsURL("Agency16.bbcc4e4e.png");
const agency = {
  agency: [
    {
      id: 1,
      name: "agency 01",
      img: agency1
    },
    {
      id: 2,
      name: "agency 02",
      img: agency2
    },
    {
      id: 3,
      name: "agency 03",
      img: agency3
    },
    {
      id: 4,
      name: "agency 04",
      img: agency4
    },
    {
      id: 5,
      name: "agency 05",
      img: agency5
    },
    {
      id: 6,
      name: "agency 06",
      img: agency6
    },
    {
      id: 7,
      name: "agency 07",
      img: agency7
    },
    {
      id: 8,
      name: "agency 08",
      img: agency8
    },
    {
      id: 9,
      name: "agency 09",
      img: agency9
    },
    {
      id: 10,
      name: "agency 10",
      img: agency10
    },
    {
      id: 11,
      name: "agency 11",
      img: agency11
    },
    {
      id: 12,
      name: "agency 12",
      img: agency12
    },
    {
      id: 14,
      name: "agency 14",
      img: agency14
    },
    {
      id: 13,
      name: "agency 13",
      img: agency13
    },
    {
      id: 15,
      name: "agency 15",
      img: agency15
    },
    {
      id: 16,
      name: "agency 16",
      img: agency16
    }
  ]
};
const _sfc_main$2 = {
  __name: "Carousel",
  __ssrInlineRender: true,
  setup(__props) {
    SwiperCore.use([Autoplay, Navigation, Pagination]);
    const breakpoints = {
      1: {
        slidesPerView: 2,
        spaceBetween: 15
      },
      744: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 30
      }
    };
    const navigation = {
      nextEl: ".carousel-navigation.arrow-right",
      prevEl: ".carousel-navigation.arrow-left"
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SvgsLeft = __nuxt_component_0$1;
      const _component_SvgsRight = __nuxt_component_1$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "uiux-carousel agency-carousel" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(Swiper), {
        "slides-per-view": 4,
        "slides-per-group": 4,
        loop: false,
        "space-between": 50,
        breakpoints,
        navigation,
        modules: _ctx.modules
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(agency).agency, (item, index) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), { key: index }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="carousel-img"${_scopeId2}><img${ssrRenderAttr("src", item.img)}${_scopeId2}></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "carousel-img" }, [
                        createVNode("img", {
                          src: item.img
                        }, null, 8, ["src"])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(agency).agency, (item, index) => {
                return openBlock(), createBlock(unref(SwiperSlide), { key: index }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "carousel-img" }, [
                      createVNode("img", {
                        src: item.img
                      }, null, 8, ["src"])
                    ])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="carousel-navigation arrow-left">`);
      _push(ssrRenderComponent(_component_SvgsLeft, null, null, _parent));
      _push(`</div><div class="carousel-navigation arrow-right">`);
      _push(ssrRenderComponent(_component_SvgsRight, null, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/agency/Carousel.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_22 = _sfc_main$2;
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$4;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "go-back agency component-spaces" }, _attrs))}><div class="go-back-inner d-flex flex-column justify-content-start align-items-start"><div class="go-back-title title-spaces"><div class="line"></div><span class="text title regular text-color01">Thank you for reading</span></div><div class="go-back-sides d-flex justify-content-between align-items-start"><div class="go-back-left">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/mapping",
    exact: "",
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
  _push(`</div><div class="go-back-right">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/youtube",
    exact: "",
    class: "go-back-card d-flex justify-content-start align-items-center"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="go-back-card-image d-flex flex-column justify-content-center align-items-center"${_scopeId}><img${ssrRenderAttr("src", _imports_1)} alt="youtube"${_scopeId}></div><div target="_blank" class="go-back-card-content d-flex flex-column justify-content-center align-items-start"${_scopeId}><span class="text home-tumbstitle semibold text-color01"${_scopeId}>Youtube<br${_scopeId}>Premium</span><span class="line"${_scopeId}></span><span class="text subtitle regular text-color01"${_scopeId}>Subs &amp; Ad-blockers<br${_scopeId}>Onboarding</span></div>`);
      } else {
        return [
          createVNode("div", { class: "go-back-card-image d-flex flex-column justify-content-center align-items-center" }, [
            createVNode("img", {
              src: _imports_1,
              alt: "youtube"
            })
          ]),
          createVNode("div", {
            target: "_blank",
            class: "go-back-card-content d-flex flex-column justify-content-center align-items-start"
          }, [
            createVNode("span", { class: "text home-tumbstitle semibold text-color01" }, [
              createTextVNode("Youtube"),
              createVNode("br"),
              createTextVNode("Premium")
            ]),
            createVNode("span", { class: "line" }),
            createVNode("span", { class: "text subtitle regular text-color01" }, [
              createTextVNode("Subs & Ad-blockers"),
              createVNode("br"),
              createTextVNode("Onboarding")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/agency/ThankYou.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_23 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "agency",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AgencyBanner = __nuxt_component_0;
      const _component_AgencyProblem = __nuxt_component_1;
      const _component_AgencySolution = __nuxt_component_2;
      const _component_AgencySolutionImage = __nuxt_component_3;
      const _component_AgencyUnderstandingUser = __nuxt_component_4;
      const _component_AgencyResearchFindings = __nuxt_component_5;
      const _component_AgencyKeyInsights = __nuxt_component_6;
      const _component_AgencyPotentialSolutions = __nuxt_component_7;
      const _component_AgencyCompetitorResearch = __nuxt_component_8;
      const _component_AgencyImpactEffortMatrix = __nuxt_component_9;
      const _component_AgencyUserPersona = __nuxt_component_10;
      const _component_AgencyUserPersonaCard = __nuxt_component_11;
      const _component_AgencySketches = __nuxt_component_12;
      const _component_AgencySketchesImage = __nuxt_component_13;
      const _component_AgencyLowFidelityPrototypes = __nuxt_component_14;
      const _component_AgencyLowFidelityPrototypesImage = __nuxt_component_15;
      const _component_AgencyUserTesting = __nuxt_component_16;
      const _component_AgencyUserTestingImage = __nuxt_component_17;
      const _component_AgencyHifiDesignPrototype = __nuxt_component_18;
      const _component_AgencyHifiDesignPrototypeImage = __nuxt_component_19;
      const _component_AgencyDevelopmentHandoff = __nuxt_component_20;
      const _component_AgencyFinalReflections = __nuxt_component_21;
      const _component_AgencyCarousel = __nuxt_component_22;
      const _component_AgencyThankYou = __nuxt_component_23;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pages agency-page" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_AgencyBanner, null, null, _parent));
      _push(`<div class="container">`);
      _push(ssrRenderComponent(_component_AgencyProblem, null, null, _parent));
      _push(ssrRenderComponent(_component_AgencySolution, null, null, _parent));
      _push(ssrRenderComponent(_component_AgencySolutionImage, null, null, _parent));
      _push(ssrRenderComponent(_component_AgencyUnderstandingUser, null, null, _parent));
      _push(ssrRenderComponent(_component_AgencyResearchFindings, null, null, _parent));
      _push(ssrRenderComponent(_component_AgencyKeyInsights, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_AgencyPotentialSolutions, null, null, _parent));
      _push(`<div class="container">`);
      _push(ssrRenderComponent(_component_AgencyCompetitorResearch, null, null, _parent));
      _push(ssrRenderComponent(_component_AgencyImpactEffortMatrix, null, null, _parent));
      _push(ssrRenderComponent(_component_AgencyUserPersona, null, null, _parent));
      _push(ssrRenderComponent(_component_AgencyUserPersonaCard, null, null, _parent));
      _push(ssrRenderComponent(_component_AgencySketches, null, null, _parent));
      _push(ssrRenderComponent(_component_AgencySketchesImage, null, null, _parent));
      _push(ssrRenderComponent(_component_AgencyLowFidelityPrototypes, null, null, _parent));
      _push(ssrRenderComponent(_component_AgencyLowFidelityPrototypesImage, null, null, _parent));
      _push(ssrRenderComponent(_component_AgencyUserTesting, null, null, _parent));
      _push(ssrRenderComponent(_component_AgencyUserTestingImage, null, null, _parent));
      _push(ssrRenderComponent(_component_AgencyHifiDesignPrototype, null, null, _parent));
      _push(ssrRenderComponent(_component_AgencyHifiDesignPrototypeImage, null, null, _parent));
      _push(ssrRenderComponent(_component_AgencyDevelopmentHandoff, null, null, _parent));
      _push(ssrRenderComponent(_component_AgencyFinalReflections, null, null, _parent));
      _push(ssrRenderComponent(_component_AgencyCarousel, null, null, _parent));
      _push(ssrRenderComponent(_component_AgencyThankYou, null, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/agency.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=agency-f1ad4134.mjs.map
