import { _ as __nuxt_component_0$2, a as __nuxt_component_1 } from './IconQuoteRight-26f68fb0.mjs';
import { mergeProps, useSSRContext, unref } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc, u as useI18n } from '../server.mjs';
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

const _sfc_main$2 = {
  __name: "TimeLineItem",
  __ssrInlineRender: true,
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SvgsIconQuoteLeft = __nuxt_component_0$2;
      const _component_SvgsIconQuoteRight = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "timeline-item d-flex flex-column flex-md-row justify-content-start align-items-start" }, _attrs))}><div class="timeline-item-date"><span class="text white">${ssrInterpolate(__props.value.jobDate)}</span></div><div class="card-item timeline-item-content"><h2 class="text title white">${ssrInterpolate(__props.value.jobFunction)}</h2><span class="text subtitle white">${ssrInterpolate(__props.value.jobCompany)}</span><span class="timeline-item-text text white">`);
      _push(ssrRenderComponent(_component_SvgsIconQuoteLeft, null, null, _parent));
      _push(` ${ssrInterpolate(__props.value.jobDescription)} <br><br> Languages: ${ssrInterpolate(__props.value.JobLanguages)} `);
      _push(ssrRenderComponent(_component_SvgsIconQuoteRight, null, null, _parent));
      _push(`</span></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/experiences/TimeLineItem.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0$1 = _sfc_main$2;
const _sfc_main$1 = {
  __name: "XpTimeLine",
  __ssrInlineRender: true,
  setup(__props) {
    const { t, tm } = useI18n();
    const myJobsLang = tm("experience.xpTimeLine.myJobs");
    const myJobs = myJobsLang.map((job) => ({
      jobDate: job.jobDate.loc.source,
      jobFunction: job.jobFunction.loc.source,
      jobCompany: job.jobCompany.loc.source,
      jobDescription: job.jobDescription.loc.source,
      JobLanguages: job.jobLanguages.loc.source
    }));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ExperiencesTimeLineItem = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "experiences-timeline" }, _attrs))}><!--[-->`);
      ssrRenderList(unref(myJobs), (myJob) => {
        _push(ssrRenderComponent(_component_ExperiencesTimeLineItem, {
          key: `myJob-item-${myJob.id}`,
          value: myJob
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/experiences/XpTimeLine.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$1;
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ExperiencesXpTimeLine = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "pages experiences-page" }, _attrs))}><div class="main-title"><span class="text bigtitle uppercase white">${ssrInterpolate(_ctx.$t("experience.workingExperience"))}</span></div>`);
  _push(ssrRenderComponent(_component_ExperiencesXpTimeLine, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/experiences.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const experiences = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { experiences as default };
//# sourceMappingURL=experiences-71b39fe4.mjs.map
