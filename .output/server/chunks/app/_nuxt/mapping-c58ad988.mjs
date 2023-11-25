import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { mergeProps, useSSRContext, unref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc, a as _imports_0$1$1, e as _imports_1$2, d as __nuxt_component_0$4 } from '../server.mjs';
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

const _imports_0$6 = "" + buildAssetsURL("mappingBanner.60299ee0.png");
const _sfc_main$n = {};
function _sfc_ssrRender$l(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "mapping-banner" }, _attrs))}><div class="container"><div class="mapping-banner-content"><div class="mapping-banner-content-inner d-flex flex-column justify-content-center align-items-center"><span class="text bigtitle text-color07">Mapping</span><span class="text mappingText banner-title semibold text-color07">Pathways for Career Growth</span><span class="text mappingText banner-title text-color07">Empowering re-skill and upskilling efforts</span></div></div><div class="mapping-banner-image d-flex flex-column justify-content-center align-items-center"><img${ssrRenderAttr("src", _imports_0$6)} alt="mappingBanner"></div><div class="mapping-banner-image-text"><div class="banner-text-items d-flex justify-content-between align-items-center"><div class="banner-text-item d-flex flex-column justify-content-center align-items-center"><span class="text moreTitle text-color07">Role</span><span class="text text-color01">P.M., Research, Strategy,<br>Ideation, Prototyping and Testing</span></div><div class="banner-text-item d-flex flex-column justify-content-center align-items-center"><span class="text moreTitle text-color07">Type</span><span class="text text-color01">Student project, guidance<br>provided by FLAG\u2019s mentorship</span></div><div class="banner-text-item d-flex flex-column justify-content-center align-items-center"><span class="text moreTitle text-color07">Timeline</span><span class="text text-color01">2 Week<br>Design Sprint</span></div></div></div></div></div>`);
}
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/mapping/Banner.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["ssrRender", _sfc_ssrRender$l]]);
const _sfc_main$m = {};
function _sfc_ssrRender$k(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "problem component-spaces container-less" }, _attrs))}><span class="text moreTitle text-color07 title-spaces">Problem</span><div class="problem-text"><span class="text text-color01"> As a conceptual project, <b>this challenge finds itself in the midst of an economical and employment overturn</b> \u201C(...) between zero and 30 percent of the hours worked globally could be automated by 2030 (...) 75 million to 375 million may need to switch occupational categories and learn new skills\u201D*. </span></div><div class="problem-links d-flex justify-content-start align-items-center"><span class="text text-color01">*Online: \xA0</span><a href="https://www.mckinsey.com/featured-insights/future-of-work/jobs-lost-jobs-gained-what-the-future-of-work-will-mean-for-jobs-skills-and-wages" target="_blank" class="text"> (McKinsey\u2019s Institute) What the future of work will mean for jobs</a></div></div>`);
}
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/mapping/Problem.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["ssrRender", _sfc_ssrRender$k]]);
const _sfc_main$l = {};
function _sfc_ssrRender$j(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "solution component-spaces container-less" }, _attrs))}><span class="text moreTitle text-color07 title-spaces">Solution</span><div class="solution-text"><span class="text text-color01"> Mapping aims to empower LinkedIn\u2019s premium users who are invested in re-skill or upskilling efforts. Ranging from literature and media references, dynamic career node projection, and career stock growth. <b>An intuitive tool that displays job opportunities and go-to-market feasibility</b></span></div></div>`);
}
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/mapping/Solution.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["ssrRender", _sfc_ssrRender$j]]);
const _imports_0$5 = "" + buildAssetsURL("solutionMapping.c4e883ca.png");
const _sfc_main$k = {};
function _sfc_ssrRender$i(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "solution-image-item component-spaces d-flex justify-content-center align-items-center" }, _attrs))}><img${ssrRenderAttr("src", _imports_0$5)} alt="solutionMapping"></div>`);
}
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/mapping/SolutionImage.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["ssrRender", _sfc_ssrRender$i]]);
const _sfc_main$j = {};
function _sfc_ssrRender$h(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "understandingUser component-spaces container-less" }, _attrs))}><span class="text moreTitle text-color07 title-spaces">Understanding the User</span><div class="understandingUser-text"><span class="text text-color01"> \u201C(...)Three-quarters of people said they were <b>\u2018ready to learn new skills or completely re-train in order to remain employable in the future\u2019</b>(...) seventy-four percent of people globally agreeing it is their own responsibility to update their skills rather than relying on an employer.\u201D* </span></div><div class="understandingUser-links d-flex justify-content-start align-items-center"><span class="text text-color01">*Online: \xA0</span><a href="https://www.pwc.com/gx/en/services/workforce/publications/workforce-of-the-future.html" target="_blank" class="text"> (PwC Global) Workforce of the future: the competing forces shaping 2030</a></div></div>`);
}
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/mapping/UnderstandingUser.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["ssrRender", _sfc_ssrRender$h]]);
const _sfc_main$i = {};
function _sfc_ssrRender$g(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "ResearchFindings component-spaces container-less" }, _attrs))}><span class="text moreTitle text-color07 title-spaces">Research Findings</span><div class="ResearchFindings-text"><span class="text text-color01"> Mapping\u2019s most relevant research findings state that users expressed an emphasis on <b>self-exploration as a precursor to mastery, </b>a deep understanding of ones aptitudes and inclinations within the context of evolving industries. Once framed, users look for <b>mentors who can provide a trusted source of advice,</b> helping navigate intricate career pathways, make informed decisions, and cultivate the skills necessary for success </span></div></div>`);
}
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/mapping/ResearchFindings.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["ssrRender", _sfc_ssrRender$g]]);
const _sfc_main$h = {};
function _sfc_ssrRender$f(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "potentialSolutions component-spaces mapping" }, _attrs))}><div class="potentialSolutions-inner"><div class="potentialSolutions-items d-flex justify-content-center align-items-center"><div class="potentialSolutions-item left-item d-flex flex-column justify-content-center align-items-center"><div class="item-percentage"><span class="text bold text-color07">50%</span></div><div class="item-text"><span class="text title">of all work activities are technically automatable by adapting currently demonstrated technologies</span></div></div><div class="potentialSolutions-item right-item d-flex flex-column justify-content-center align-items-center"><div class="item-percentage"><span class="text bold text-color07">6 out of 10</span></div><div class="item-text"><span class="text title">current occupations have more than 30% of activities that are technically automatable</span></div></div></div></div></div>`);
}
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/mapping/PotentialSolutions.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["ssrRender", _sfc_ssrRender$f]]);
const _sfc_main$g = {};
function _sfc_ssrRender$e(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "userPersona component-spaces container-less" }, _attrs))}><span class="text moreTitle text-color07 title-spaces">Personas</span><div class="userPersona-text"><span class="text text-color01"> After gathering and organizing the research data, we\u2019ve created two user personas in order to be able to visualize the target end-users <br><br> To guide us through the design process, we wanted to ensure that these personas accurately portrayed the different segments of our target audience, <b>the ones who are interested in re-skilling and the ones who are interested in upskilling</b></span></div></div>`);
}
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/mapping/UserPersona.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["ssrRender", _sfc_ssrRender$e]]);
const _imports_0$4 = "" + buildAssetsURL("personaMapping1.b77546ee.png");
const _imports_1$1 = "" + buildAssetsURL("personaMapping2.0b085938.png");
const _sfc_main$f = {};
function _sfc_ssrRender$d(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "userPersonaCard mapping component-spaces d-flex flex-column justify-content-center align-items-center" }, _attrs))}><div class="userPersonaCard-image"><img${ssrRenderAttr("src", _imports_0$4)} alt="personaMapping1"></div><div class="userPersonaCard-image bottom"><img${ssrRenderAttr("src", _imports_1$1)} alt="personaMapping2"></div></div>`);
}
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/mapping/UserPersonaCard.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const __nuxt_component_8 = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["ssrRender", _sfc_ssrRender$d]]);
const _sfc_main$e = {};
function _sfc_ssrRender$c(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "Sitemap component-spaces container-less" }, _attrs))}><span class="text moreTitle text-color07 title-spaces">Sitemap</span><div class="Sitemap-text"><span class="text text-color01"> Not only will this feature work within LinkedIn\u2019s Premium UI, but our research shows that <b>this type of user engagement requires a degree of commitment that\u2019s usually linked to a slower, more meticulous pace.</b><br><br> With this in mind, we shifted the priority towards a desktop product. Next, we worked on its Information Architecture, illustrated through the following sitemap </span></div></div>`);
}
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/mapping/Sitemap.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const __nuxt_component_9 = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["ssrRender", _sfc_ssrRender$c]]);
const _imports_0$3 = "" + buildAssetsURL("sitemap.931f9688.png");
const _sfc_main$d = {};
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "Sitemap-image component-spaces d-flex justify-content-center align-items-center" }, _attrs))}><div class="Sitemap-image-item"><img${ssrRenderAttr("src", _imports_0$3)} alt="sitemap"></div></div>`);
}
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/mapping/SitemapImage.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const __nuxt_component_10 = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["ssrRender", _sfc_ssrRender$b]]);
const _sfc_main$c = {};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "sketches component-spaces container-less" }, _attrs))}><span class="text moreTitle text-color07 title-spaces">Sketches</span><div class="sketches-text"><span class="text text-color01"> In the initial phase of sketching and ideation, our design team embarked on a creative journey to conceptualize Mapping\u2019s user interface and functionality. <b>Through collaborative brainstorming and iterative sketching, </b>we explored various design directions to ensure a user-centered and intuitive experience </span></div></div>`);
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/mapping/Sketches.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const __nuxt_component_11 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["ssrRender", _sfc_ssrRender$a]]);
const _imports_0$2 = "" + buildAssetsURL("sketch01.1e4fee6b.png");
const _imports_1 = "" + buildAssetsURL("sketch02.9cb75d76.png");
const _imports_2 = "" + buildAssetsURL("sketch03.c6e77820.png");
const _sfc_main$b = {};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "sketches component-spaces" }, _attrs))}><div class="sketches-items"><div class="sketches-item d-flex justify-content-center align-items-center"><div class="sketches-item-image"><img${ssrRenderAttr("src", _imports_0$2)} alt="sketch01"></div><div class="sketches-item-content"><span class="text semibold title-spaces">Personalized Career Recommendations</span><span class="text text-color01"> Picture <b> a visual platform where users merge skill nodes, </b>each representing their expertise, creating a dynamic visual map of potential career trajectories. This intuitive node interface translates the intricate process of skill synergy into a visually engaging experience, helping users grasp the intersection of their abilities and career paths </span></div></div><div class="sketches-item d-flex justify-content-center align-items-center"><div class="sketches-item-image"><img${ssrRenderAttr("src", _imports_1)} alt="sketch02"></div><div class="sketches-item-content"><span class="text semibold title-spaces">Real-time Job Market Insights</span><span class="text text-color01"> Inspired by the dynamics of the stock market, we\u2019ve reimagined a <b>platform where professions are represented as stocks:</b> their demand and perceived value dictate their &quot;stock&quot; growth. Users receive real-time job market insights akin to financial data, as in which careers are in high demand and what\u2019s their value potential </span></div></div><div class="sketches-item d-flex justify-content-center align-items-center"><div class="sketches-item-image"><img${ssrRenderAttr("src", _imports_2)} alt="sketch03"></div><div class="sketches-item-content"><span class="text semibold title-spaces">Interactive Challenges &amp; Peer Reviews</span><span class="text text-color01"> A collaborative ecosystem that integrates interactive challenges and peer reviews. <b>Users engage in real-world scenarios, gaining hands-on experience in their desired fields.</b> Peers provide feedback and insights, fostering a sense of community learning and growth </span></div></div></div></div>`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/mapping/SketchesItems.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const __nuxt_component_12 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$9]]);
const _sfc_main$a = {};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "LowFidelityPrototypes component-spaces container-less" }, _attrs))}><span class="text moreTitle text-color07 title-spaces">Low-Fidelity Prototypes</span><div class="LowFidelityPrototypes-text"><span class="text text-color01"> During this phase, a low-fidelity wireframe prototype is created, focusing on the basic structure and layout of the Mapping feature. This initial prototype provides <b>a visual representation of its key features and functionalities,</b> allowing for early feedback and validation from stakeholders and potential users </span></div></div>`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/mapping/LowFidelityPrototypes.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __nuxt_component_13 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$8]]);
const _imports_0$1 = "" + buildAssetsURL("lowFidelityPrototypesMapping.5a19045d.png");
const _sfc_main$9 = {};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "LowFidelityPrototypesImage mapping component-spaces d-flex justify-content-center align-items-center" }, _attrs))}><div class="LowFidelityPrototypes-image"><img${ssrRenderAttr("src", _imports_0$1)} alt="lowFidelityPrototypesMapping"></div></div>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/mapping/LowFidelityPrototypesImage.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_14 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$8 = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "userTesting component-spaces container-less" }, _attrs))}><span class="text moreTitle text-color07 title-spaces">User Testing</span><div class="userTesting-text"><span class="text text-color01"> User testing the prototype was a pivotal in improving the app&#39;s usability. Through interactive sessions, real users navigated the interface, providing <b>valuable feedback on its intuitiveness and functionality</b></span></div><ul><li><span class="text text-color01">Users yearn for an experience that not only provides clarity but also encourages them to <b>experiment with various skill combinations and paths</b></span></li><li><span class="text text-color01">Users expressed a desire for <b>transparent data sources that underpin real-time job market trends.</b> The insights must be grounded in robust data analytics and up-to-date industry statistics for trustworthiness</span></li><li><span class="text text-color01">Users appreciated the community-driven nature of interactive challenges and peer reviews. However, <b>some expressed a preference for mentorship</b> as a guiding force for their future actions</span></li></ul></div>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/mapping/userTesting.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_15 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$6]]);
const _imports_0 = "" + buildAssetsURL("userTestingMapping.28cb40bf.png");
const _sfc_main$7 = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "userTestingImage mapping component-spaces d-flex justify-content-center align-items-center" }, _attrs))}><div class="userTesting-image"><img${ssrRenderAttr("src", _imports_0)} alt="userTestingMapping"></div></div>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/mapping/userTestingImage.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_16 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$6 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "HifiDesignPrototype component-spaces container-less" }, _attrs))}><span class="text moreTitle text-color07 title-spaces">Refined Hi-fi Design</span><div class="HifiDesignPrototype-text"><span class="text text-color01"> Based on the insights gained from the initial user testing, the lo-fi wireframe prototype is refined to address usability issues and improve the overall user experience. Adjustments are made to the layout, interactions, and visual elements <b>to ensure clarity and intuitiveness, aligning the design more closely with user expectations</b></span></div></div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/mapping/HifiDesignPrototype.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_17 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$5 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "HifiDesignPrototypeImage mapping component-spaces d-flex justify-content-center align-items-center" }, _attrs))}><div class="HifiDesignPrototype-image"><img${ssrRenderAttr("src", _imports_0$6)} alt="hifiDesignPrototype"></div><div class="HifiDesignPrototype-content"><span class="text moreTitle medium text-color01">Would you like to interact with Mapping\u2019s prototype?</span><a class="text semibold white d-flex justify-content-center align-items-center" href="https://www.figma.com/proto/xt1nqPyAu3QENbyTmC97hQ/2.-pasexperience.com-(Reedi%C3%A7%C3%A3o-29-Set.)?type=design&amp;node-id=1023-2089&amp;t=nqaqjyw5iYhB7A80-0&amp;scaling=min-zoom&amp;page-id=760%3A191&amp;starting-point-node-id=1023%3A2089&amp;show-proto-sidebar=1" target="_blank">Click Here</a></div></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/mapping/HifiDesignPrototypeImage.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_18 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$4 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "DevelopmentHandoff component-spaces container-less" }, _attrs))}><span class="text moreTitle text-color07 title-spaces">Development Handoff</span><div class="DevelopmentHandoff-text"><span class="text text-color01"> In the development handoff phase, <b>the final design assets, specifications, and guidelines are prepared and shared with the development team.</b>This includes design files, style guides, and documentation to ensure a smooth transition from design to development </span></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/mapping/DevelopmentHandoff.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_19 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "FinalReflections component-spaces container-less" }, _attrs))}><span class="text moreTitle text-color07 title-spaces">Final Reflections</span><div class="FinalReflections-text d-flex justify-content-between align-items-start"><span class="text text-color01"> What are the next steps in terms of shipping priority and scheduling for the remaining HMW&#39;s? <br><br> How did the Mapping feature\u2019s design and user experience contribute to user engagement and satisfation? <br><br> Are there opportunities for cross-functional collaboration to enhance feature effectiveness? </span><span class="text text-color01"> What valuable insights were gained from user testing and how did they inform the design decisions? <br><br> How can we guarantee that the feature continues to further align with evolving user needs and aspirations? <br><br> What strategies can ensure the long-term success and scalability of the &#39;Mapping&#39; feature? </span></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/mapping/FinalReflections.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_20 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]);
const mapping1 = "" + buildAssetsURL("Mapping1.928157d8.png");
const mapping2 = "" + buildAssetsURL("Mapping2.ec0bfac0.png");
const mapping3 = "" + buildAssetsURL("Mapping3.73737e2d.png");
const mapping4 = "" + buildAssetsURL("Mapping4.d02be82b.png");
const mapping5 = "" + buildAssetsURL("Mapping5.121fb60c.png");
const mapping6 = "" + buildAssetsURL("Mapping6.8183470d.png");
const mapping7 = "" + buildAssetsURL("Mapping7.b9ada646.png");
const mapping8 = "" + buildAssetsURL("Mapping8.fa6ddacc.png");
const mapping9 = "" + buildAssetsURL("Mapping9.23d16b1a.png");
const mapping10 = "" + buildAssetsURL("Mapping10.54ee80d3.png");
const mapping = {
  mapping: [
    {
      id: 1,
      name: "mapping 01",
      img: mapping1
    },
    {
      id: 2,
      name: "mapping 02",
      img: mapping2
    },
    {
      id: 3,
      name: "mapping 03",
      img: mapping3
    },
    {
      id: 4,
      name: "mapping 04",
      img: mapping4
    },
    {
      id: 5,
      name: "mapping 05",
      img: mapping5
    },
    {
      id: 6,
      name: "mapping 06",
      img: mapping6
    },
    {
      id: 7,
      name: "mapping 07",
      img: mapping7
    },
    {
      id: 8,
      name: "mapping 08",
      img: mapping8
    },
    {
      id: 9,
      name: "mapping 09",
      img: mapping9
    },
    {
      id: 10,
      name: "mapping 10",
      img: mapping10
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
        slidesPerView: 2,
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "uiux-carousel mapping-carousel" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(Swiper), {
        "slides-per-view": 2,
        "slides-per-group": 2,
        loop: false,
        "space-between": 50,
        breakpoints,
        navigation,
        modules: _ctx.modules
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(mapping).mapping, (item, index) => {
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
              (openBlock(true), createBlock(Fragment, null, renderList(unref(mapping).mapping, (item, index) => {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/mapping/Carousel.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_21 = _sfc_main$2;
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$4;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "go-back mapping component-spaces" }, _attrs))}><div class="go-back-inner d-flex flex-column justify-content-start align-items-start"><div class="go-back-title title-spaces"><div class="line"></div><span class="text title regular text-color01">Thank you for reading</span></div><div class="go-back-sides d-flex justify-content-between align-items-start"><div class="go-back-left">`);
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
    to: "/youtube",
    class: "go-back-card d-flex justify-content-start align-items-center"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="go-back-card-image d-flex flex-column justify-content-center align-items-center"${_scopeId}><img${ssrRenderAttr("src", _imports_1$2)} alt="youtube"${_scopeId}></div><div target="_blank" class="go-back-card-content d-flex flex-column justify-content-center align-items-start"${_scopeId}><span class="text home-tumbstitle semibold text-color01"${_scopeId}>Youtube<br${_scopeId}>Premium</span><span class="line"${_scopeId}></span><span class="text subtitle regular text-color01"${_scopeId}>Subs &amp; Ad-blockers<br${_scopeId}>Onboarding</span></div>`);
      } else {
        return [
          createVNode("div", { class: "go-back-card-image d-flex flex-column justify-content-center align-items-center" }, [
            createVNode("img", {
              src: _imports_1$2,
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/mapping/ThankYou.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_22 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "mapping",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MappingBanner = __nuxt_component_0;
      const _component_MappingProblem = __nuxt_component_1;
      const _component_MappingSolution = __nuxt_component_2;
      const _component_MappingSolutionImage = __nuxt_component_3;
      const _component_MappingUnderstandingUser = __nuxt_component_4;
      const _component_MappingResearchFindings = __nuxt_component_5;
      const _component_MappingPotentialSolutions = __nuxt_component_6;
      const _component_MappingUserPersona = __nuxt_component_7;
      const _component_MappingUserPersonaCard = __nuxt_component_8;
      const _component_MappingSitemap = __nuxt_component_9;
      const _component_MappingSitemapImage = __nuxt_component_10;
      const _component_MappingSketches = __nuxt_component_11;
      const _component_MappingSketchesItems = __nuxt_component_12;
      const _component_MappingLowFidelityPrototypes = __nuxt_component_13;
      const _component_MappingLowFidelityPrototypesImage = __nuxt_component_14;
      const _component_MappingUserTesting = __nuxt_component_15;
      const _component_MappingUserTestingImage = __nuxt_component_16;
      const _component_MappingHifiDesignPrototype = __nuxt_component_17;
      const _component_MappingHifiDesignPrototypeImage = __nuxt_component_18;
      const _component_MappingDevelopmentHandoff = __nuxt_component_19;
      const _component_MappingFinalReflections = __nuxt_component_20;
      const _component_MappingCarousel = __nuxt_component_21;
      const _component_MappingThankYou = __nuxt_component_22;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pages mapping-page" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_MappingBanner, null, null, _parent));
      _push(`<div class="container">`);
      _push(ssrRenderComponent(_component_MappingProblem, null, null, _parent));
      _push(ssrRenderComponent(_component_MappingSolution, null, null, _parent));
      _push(ssrRenderComponent(_component_MappingSolutionImage, null, null, _parent));
      _push(ssrRenderComponent(_component_MappingUnderstandingUser, null, null, _parent));
      _push(ssrRenderComponent(_component_MappingResearchFindings, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_MappingPotentialSolutions, null, null, _parent));
      _push(`<div class="container">`);
      _push(ssrRenderComponent(_component_MappingUserPersona, null, null, _parent));
      _push(ssrRenderComponent(_component_MappingUserPersonaCard, null, null, _parent));
      _push(ssrRenderComponent(_component_MappingSitemap, null, null, _parent));
      _push(ssrRenderComponent(_component_MappingSitemapImage, null, null, _parent));
      _push(ssrRenderComponent(_component_MappingSketches, null, null, _parent));
      _push(ssrRenderComponent(_component_MappingSketchesItems, null, null, _parent));
      _push(ssrRenderComponent(_component_MappingLowFidelityPrototypes, null, null, _parent));
      _push(ssrRenderComponent(_component_MappingLowFidelityPrototypesImage, null, null, _parent));
      _push(ssrRenderComponent(_component_MappingUserTesting, null, null, _parent));
      _push(ssrRenderComponent(_component_MappingUserTestingImage, null, null, _parent));
      _push(ssrRenderComponent(_component_MappingHifiDesignPrototype, null, null, _parent));
      _push(ssrRenderComponent(_component_MappingHifiDesignPrototypeImage, null, null, _parent));
      _push(ssrRenderComponent(_component_MappingDevelopmentHandoff, null, null, _parent));
      _push(ssrRenderComponent(_component_MappingFinalReflections, null, null, _parent));
      _push(ssrRenderComponent(_component_MappingCarousel, null, null, _parent));
      _push(ssrRenderComponent(_component_MappingThankYou, null, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/mapping.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=mapping-c58ad988.mjs.map
