import { resolveComponent, mergeProps, useSSRContext } from 'vue';
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

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_UiuxBanner = resolveComponent("UiuxBanner");
  const _component_UiuxObsBanner = resolveComponent("UiuxObsBanner");
  const _component_UiuxQuickSummary = resolveComponent("UiuxQuickSummary");
  const _component_UiuxGettingStarted = resolveComponent("UiuxGettingStarted");
  const _component_UiuxUnderstandingProblem = resolveComponent("UiuxUnderstandingProblem");
  const _component_UiuxPolygon = resolveComponent("UiuxPolygon");
  const _component_UiuxUserResearch = resolveComponent("UiuxUserResearch");
  const _component_UiuxJourneyMapping = resolveComponent("UiuxJourneyMapping");
  const _component_UiuxUxrInsights = resolveComponent("UiuxUxrInsights");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "pages uiux-page" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_UiuxBanner, null, null, _parent));
  _push(`<div class="container">`);
  _push(ssrRenderComponent(_component_UiuxObsBanner, null, null, _parent));
  _push(ssrRenderComponent(_component_UiuxQuickSummary, null, null, _parent));
  _push(ssrRenderComponent(_component_UiuxGettingStarted, null, null, _parent));
  _push(ssrRenderComponent(_component_UiuxUnderstandingProblem, null, null, _parent));
  _push(ssrRenderComponent(_component_UiuxPolygon, null, null, _parent));
  _push(ssrRenderComponent(_component_UiuxUserResearch, null, null, _parent));
  _push(ssrRenderComponent(_component_UiuxJourneyMapping, null, null, _parent));
  _push(ssrRenderComponent(_component_UiuxUxrInsights, null, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ux-ui-work.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const uxUiWork = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { uxUiWork as default };
//# sourceMappingURL=ux-ui-work-e2a0d227.mjs.map
