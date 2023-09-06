import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { useSSRContext, defineComponent, mergeProps, unref, withCtx, createTextVNode, toDisplayString, ref } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderSlot, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc, b as useLocalePath$1, d as useRoute, e as useRouter, g as getComposer, f as useNuxtApp, u as useI18n } from '../server.mjs';
import { t as themeColor } from './themeColor-7d853909.mjs';
import { _ as __nuxt_component_0$7 } from './nuxt-link-691ee40a.mjs';
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
import '@intlify/core-base';
import 'cookie-es';
import 'is-https';

const _sfc_main$n = {};
function _sfc_ssrRender$i(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    "enable-background": "new 0 0 32 32",
    height: "32px",
    id: "svg2",
    version: "1.1",
    viewBox: "0 0 32 32",
    width: "32px",
    "xml:space": "preserve",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:cc": "http://creativecommons.org/ns#",
    "xmlns:dc": "http://purl.org/dc/elements/1.1/",
    "xmlns:inkscape": "http://www.inkscape.org/namespaces/inkscape",
    "xmlns:rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
    "xmlns:sodipodi": "http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd",
    "xmlns:svg": "http://www.w3.org/2000/svg"
  }, _attrs))}><g id="background"><rect fill="none" height="32" width="32"></rect></g><g id="user_x5F_profile"><g><path d="M4,28h16v-6c0,0,0-2-2-2c-1,0-12,0-12,0s-2,0-2,2C4,23,4,28,4,28z"></path></g><g><circle cx="12" cy="14" r="4"></circle></g><path d="M18.414,0H0v32h24V5.584L18.414,0z M17.998,2.413L21.586,6h-3.588V2.413z M2,30V1.998h14v6.001h6V30H2z"></path></g></svg>`);
}
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/svgs/IconProfile.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const __nuxt_component_0$6 = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["ssrRender", _sfc_ssrRender$i]]);
const _imports_0 = "" + buildAssetsURL("cassioImage.3ea0cff2.jpg");
const _sfc_main$m = {};
function _sfc_ssrRender$h(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "sidebar-image" }, _attrs))}><div class="d-flex justify-content-center align-items-center"><picture><img${ssrRenderAttr("src", _imports_0)} alt=""></picture></div></div>`);
}
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sidebar/SideImage.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const __nuxt_component_1$4 = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["ssrRender", _sfc_ssrRender$h]]);
const _sfc_main$l = {};
function _sfc_ssrRender$g(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    "enable-background": "new 0 0 50 50",
    height: "50px",
    id: "Layer_1",
    version: "1.1",
    viewBox: "0 0 50 50",
    width: "50px",
    "xml:space": "preserve",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink"
  }, _attrs))}><rect fill="none" height="50" width="50"></rect><path d="M30.933,32.528c-0.146-1.612-0.09-2.737-0.09-4.21c0.73-0.383,2.038-2.825,2.259-4.888c0.574-0.047,1.479-0.607,1.744-2.818  c0.143-1.187-0.425-1.855-0.771-2.065c0.934-2.809,2.874-11.499-3.588-12.397c-0.665-1.168-2.368-1.759-4.581-1.759  c-8.854,0.163-9.922,6.686-7.981,14.156c-0.345,0.21-0.913,0.878-0.771,2.065c0.266,2.211,1.17,2.771,1.744,2.818  c0.22,2.062,1.58,4.505,2.312,4.888c0,1.473,0.055,2.598-0.091,4.21C19.367,37.238,7.546,35.916,7,45h38  C44.455,35.916,32.685,37.238,30.933,32.528z"></path></svg>`);
}
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/svgs/IconPerson.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const __nuxt_component_0$5 = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["ssrRender", _sfc_ssrRender$g]]);
const _sfc_main$k = {};
function _sfc_ssrRender$f(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    "enable-background": "new 0 0 512 512",
    height: "512px",
    id: "passport",
    version: "1.1",
    viewBox: "0 0 512 512",
    width: "512px",
    "xml:space": "preserve",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink"
  }, _attrs))}><path d="M280.479,112.267v31.414c6.739-0.527,13.85-1.608,21.313-3.429C294.863,128.216,286.668,118.632,280.479,112.267z"></path><path d="M322.77,222.608c6.733,2.49,13.676,5.564,20.788,9.237c6.993-11.006,11.464-23.767,12.576-37.467h-27.287  C328.229,203.898,326.198,213.315,322.77,222.608z"></path><path d="M266.983,260.986v-34.472c-8.465,0.254-16.173,1.36-23.02,2.922C249.472,240.101,257.191,250.628,266.983,260.986z"></path><path d="M211.749,242.261c11.253,12.753,26.363,22.02,43.499,25.948c-10.451-11.398-18.632-23.057-24.452-34.938  C222.079,236.382,215.612,239.889,211.749,242.261z"></path><path d="M320.998,148.579c3.998,9.776,6.891,20.609,7.764,32.304h27.372c-1.233-15.183-6.587-29.213-14.933-40.979  C334.288,143.36,327.545,146.239,320.998,148.579z"></path><rect height="425.959" width="34.11" x="101.362" y="43.021"></rect><path d="M332.221,129.252c-10.201-10.221-23.059-17.786-37.436-21.574c6.52,7.241,14.05,16.925,20.391,28.621  C320.699,134.384,326.393,132.03,332.221,129.252z"></path><path d="M220.13,194.378h-28.801c1.099,13.526,5.476,26.132,12.316,37.042c4.305-2.715,11.766-6.892,21.938-10.595  C222.541,212.11,220.718,203.29,220.13,194.378z"></path><path d="M254.614,107.205c-15.475,3.678-29.272,11.708-40.027,22.73c4.293,2.413,10.468,5.426,18.314,8.055  C239.556,125.278,247.692,114.836,254.614,107.205z"></path><path d="M227.278,150.315c-9.417-3.279-16.666-7.032-21.414-9.844c-8.118,11.648-13.323,25.471-14.536,40.411h28.867  C221.018,169.874,223.639,159.635,227.278,150.315z"></path><path d="M238.526,216.87c8.353-2.086,17.896-3.579,28.457-3.875v-18.617h-33.309C234.263,201.922,235.878,209.424,238.526,216.87z"></path><path d="M233.727,180.883h33.257v-23.331c-9.796-0.276-18.704-1.591-26.611-3.445C237.025,162.32,234.567,171.299,233.727,180.883z"></path><path d="M266.983,144.014v-30.188c-6.223,6.587-14.057,16.078-20.602,27.795C252.607,142.905,259.503,143.788,266.983,144.014z"></path><path d="M294.148,267.736c16.119-4.109,30.354-12.96,41.131-24.981c-6.145-3.073-12.135-5.644-17.951-7.755  C311.658,246.12,303.895,257.041,294.148,267.736z"></path><path d="M315.299,194.378h-34.82v18.906c9.206,0.648,19.036,2.245,29.425,5.146C312.89,210.472,314.682,202.449,315.299,194.378z"></path><path d="M410.638,427.959V84.041c0-22.655-18.366-41.02-41.021-41.02H147.04v425.959h222.578  C392.271,468.979,410.638,450.614,410.638,427.959z M298.768,419.975H192.179v-13.551h106.588V419.975z M355.283,419.975h-32.947  v-13.551h32.947V419.975z M355.283,381.544H192.179v-13.551h163.104V381.544z M216.293,343.112v-13.55H331.17v13.55H216.293z   M273.73,283.826c-53.042,0-96.196-43.154-96.196-96.196c0-53.043,43.154-96.197,96.196-96.197  c53.043,0,96.197,43.154,96.197,96.197C369.928,240.672,326.773,283.826,273.73,283.826z"></path><path d="M307.986,152.616c-9.68,2.572-18.869,4.023-27.508,4.636v23.631h34.762C314.353,170.717,311.648,161.227,307.986,152.616z"></path><path d="M280.479,226.855v35.706c10.051-10.395,17.984-20.964,23.718-31.67C295.854,228.702,287.938,227.439,280.479,226.855z"></path></svg>`);
}
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/svgs/IconCitizenship.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const __nuxt_component_1$3 = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["ssrRender", _sfc_ssrRender$f]]);
const _sfc_main$j = {};
function _sfc_ssrRender$e(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    id: "Layer_1",
    style: { "enable-background": "new 0 0 512 512" },
    version: "1.1",
    viewBox: "0 0 512 512",
    "xml:space": "preserve",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink"
  }, _attrs))}><g><path d="M255.9,6c-21.7,0-43.4,5.3-62.3,16c-33.9,19.2-57.9,55.3-61.9,94.1c-3.7,36.1,8.9,71.8,22,105.7   c15.1,38.9,102.1,228.9,102.1,228.9s87.6-191.4,102.8-230.9c13.1-34.2,25.7-70.2,21.2-106.5c-5.2-42.1-34.7-79.9-73.6-96.8   C290.5,9.5,273.2,6,255.9,6z M255.9,189.8c-33,0-59.8-26.8-59.8-59.8s26.8-59.8,59.8-59.8S315.7,97,315.7,130   S289,189.8,255.9,189.8z"></path><path d="M292.2,397.1c-4.1,8.9-7.9,17.2-11.4,24.7c36.8,3.6,63.6,15.2,63.6,28.8c0,16.6-39.6,30-88.4,30   c-48.8,0-88.4-13.4-88.4-30c0-13.6,26.8-25.2,63.5-28.8c-3.5-7.4-7.4-15.8-11.4-24.7c-60.2,6.3-104.5,27.9-104.5,53.5   c0,30.6,63.1,55.4,140.8,55.4s140.8-24.8,140.8-55.4C396.8,425,352.4,403.4,292.2,397.1z" id="XMLID_1_"></path></g></svg>`);
}
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/svgs/IconLocal.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const __nuxt_component_2$3 = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["ssrRender", _sfc_ssrRender$e]]);
const _sfc_main$i = {};
function _sfc_ssrRender$d(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    id: "Layer_1_1_",
    style: { "enable-background": "new 0 0 16 16" },
    version: "1.1",
    viewBox: "0 0 16 16",
    "xml:space": "preserve",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink"
  }, _attrs))}><polygon points="0,4 0,14 16,14 16,4 8,9 "></polygon><polygon points="0,3 8,8 16,3 16,2 0,2 "></polygon></svg>`);
}
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/svgs/IconMail.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const __nuxt_component_3$2 = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["ssrRender", _sfc_ssrRender$d]]);
const _sfc_main$h = {};
function _sfc_ssrRender$c(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    height: "1792",
    viewBox: "0 0 1792 1792",
    width: "1792",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M1600 1240q0 27-10 70.5t-21 68.5q-21 50-122 106-94 51-186 51-27 0-52.5-3.5t-57.5-12.5-47.5-14.5-55.5-20.5-49-18q-98-35-175-83-128-79-264.5-215.5t-215.5-264.5q-48-77-83-175-3-9-18-49t-20.5-55.5-14.5-47.5-12.5-57.5-3.5-52.5q0-92 51-186 56-101 106-122 25-11 68.5-21t70.5-10q14 0 21 3 18 6 53 76 11 19 30 54t35 63.5 31 53.5q3 4 17.5 25t21.5 35.5 7 28.5q0 20-28.5 50t-62 55-62 53-28.5 46q0 9 5 22.5t8.5 20.5 14 24 11.5 19q76 137 174 235t235 174q2 1 19 11.5t24 14 20.5 8.5 22.5 5q18 0 46-28.5t53-62 55-62 50-28.5q14 0 28.5 7t35.5 21.5 25 17.5q25 15 53.5 31t63.5 35 54 30q70 35 76 53 3 7 3 21z"></path></svg>`);
}
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/svgs/IconPhone.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const __nuxt_component_4$1 = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["ssrRender", _sfc_ssrRender$c]]);
const _sfc_main$g = {};
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs) {
  const _component_SvgsIconPerson = __nuxt_component_0$5;
  const _component_SvgsIconCitizenship = __nuxt_component_1$3;
  const _component_SvgsIconLocal = __nuxt_component_2$3;
  const _component_SvgsIconMail = __nuxt_component_3$2;
  const _component_SvgsIconPhone = __nuxt_component_4$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "sidebar-contact" }, _attrs))}><div class="sibebar-title"><span class="text subtitle white uppercase">${ssrInterpolate(_ctx.$t("sidebar.sideContact.title"))}</span></div><ul><li class="d-flex justify-content-start align-items-center">`);
  _push(ssrRenderComponent(_component_SvgsIconPerson, null, null, _parent));
  _push(`<span class="text white">${ssrInterpolate(_ctx.$t("sidebar.sideContact.name"))}</span></li><li class="d-flex justify-content-start align-items-center">`);
  _push(ssrRenderComponent(_component_SvgsIconCitizenship, null, null, _parent));
  _push(`<span class="text white">${ssrInterpolate(_ctx.$t("sidebar.sideContact.citizenship"))}</span></li><li class="d-flex justify-content-start align-items-center">`);
  _push(ssrRenderComponent(_component_SvgsIconLocal, null, null, _parent));
  _push(`<span class="text white">${ssrInterpolate(_ctx.$t("sidebar.sideContact.local"))}</span></li><li class="d-flex justify-content-start align-items-center">`);
  _push(ssrRenderComponent(_component_SvgsIconMail, null, null, _parent));
  _push(`<span class="text white">cassiods90@hotmail.com</span></li><li class="d-flex justify-content-start align-items-center">`);
  _push(ssrRenderComponent(_component_SvgsIconPhone, null, null, _parent));
  _push(`<span class="text white">${ssrInterpolate(_ctx.$t("sidebar.sideContact.phone"))}</span></li></ul></div>`);
}
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sidebar/SideContact.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const __nuxt_component_2$2 = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["ssrRender", _sfc_ssrRender$b]]);
const _sfc_main$f = {};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    height: "56.693px",
    id: "Layer_1",
    style: { "enable-background": "new 0 0 56.693 56.693" },
    version: "1.1",
    viewBox: "0 0 56.693 56.693",
    width: "56.693px",
    "xml:space": "preserve",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink"
  }, _attrs))}><g><path class="st0" d="M46.3802,10.7138c-4.6512-4.6565-10.8365-7.222-17.4266-7.2247c-13.5785,0-24.63,11.0506-24.6353,24.6333   c-0.0019,4.342,1.1325,8.58,3.2884,12.3159l-3.495,12.7657l13.0595-3.4257c3.5982,1.9626,7.6495,2.9971,11.7726,2.9985h0.01   c0.0008,0-0.0006,0,0.0002,0c13.5771,0,24.6293-11.0517,24.635-24.6347C53.5914,21.5595,51.0313,15.3701,46.3802,10.7138z    M28.9537,48.6163h-0.0083c-3.674-0.0014-7.2777-0.9886-10.4215-2.8541l-0.7476-0.4437l-7.7497,2.0328l2.0686-7.5558   l-0.4869-0.7748c-2.0496-3.26-3.1321-7.028-3.1305-10.8969c0.0044-11.2894,9.19-20.474,20.4842-20.474   c5.469,0.0017,10.6101,2.1344,14.476,6.0047c3.8658,3.8703,5.9936,9.0148,5.9914,14.4859   C49.4248,39.4307,40.2395,48.6163,28.9537,48.6163z"></path><path class="st0" d="M40.1851,33.281c-0.6155-0.3081-3.6419-1.797-4.2061-2.0026c-0.5642-0.2054-0.9746-0.3081-1.3849,0.3081   c-0.4103,0.6161-1.59,2.0027-1.9491,2.4136c-0.359,0.4106-0.7182,0.4623-1.3336,0.1539c-0.6155-0.3081-2.5989-0.958-4.95-3.0551   c-1.83-1.6323-3.0653-3.6479-3.4245-4.2643c-0.359-0.6161-0.0382-0.9492,0.27-1.2562c0.2769-0.2759,0.6156-0.7189,0.9234-1.0784   c0.3077-0.3593,0.4103-0.6163,0.6155-1.0268c0.2052-0.4109,0.1027-0.7704-0.0513-1.0784   c-0.1539-0.3081-1.3849-3.3379-1.8978-4.5706c-0.4998-1.2001-1.0072-1.0375-1.3851-1.0566   c-0.3585-0.0179-0.7694-0.0216-1.1797-0.0216s-1.0773,0.1541-1.6414,0.7702c-0.5642,0.6163-2.1545,2.1056-2.1545,5.1351   c0,3.0299,2.2057,5.9569,2.5135,6.3676c0.3077,0.411,4.3405,6.6282,10.5153,9.2945c1.4686,0.6343,2.6152,1.013,3.5091,1.2966   c1.4746,0.4686,2.8165,0.4024,3.8771,0.2439c1.1827-0.1767,3.6419-1.489,4.1548-2.9267c0.513-1.438,0.513-2.6706,0.359-2.9272   C41.211,33.7433,40.8006,33.5892,40.1851,33.281z"></path></g></svg>`);
}
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/svgs/IconWhats.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const __nuxt_component_0$4 = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["ssrRender", _sfc_ssrRender$a]]);
const _sfc_main$e = {};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    "enable-background": "new 0 0 512 512",
    height: "512px",
    id: "Layer_1",
    version: "1.1",
    viewBox: "0 0 512 512",
    width: "512px",
    "xml:space": "preserve",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink"
  }, _attrs))}><g><path clip-rule="evenodd" d="M296.133,354.174c49.885-5.891,102.942-24.029,102.942-110.192   c0-24.49-8.624-44.448-22.67-59.869c2.266-5.89,9.515-28.114-2.734-58.947c0,0-18.139-5.898-60.759,22.669   c-18.139-4.983-38.09-8.163-56.682-8.163c-19.053,0-39.011,3.18-56.697,8.163c-43.082-28.567-61.22-22.669-61.22-22.669   c-12.241,30.833-4.983,53.057-2.718,58.947c-14.061,15.42-22.677,35.379-22.677,59.869c0,86.163,53.057,104.301,102.942,110.192   c-6.344,5.452-12.241,15.873-14.507,30.387c-12.702,5.438-45.808,15.873-65.758-18.592c0,0-11.795-21.31-34.012-22.669   c0,0-22.224-0.453-1.813,13.592c0,0,14.96,6.812,24.943,32.653c0,0,13.6,43.089,76.179,29.48v38.543   c0,5.906-4.53,12.702-15.865,10.89C96.139,438.977,32.2,354.626,32.2,255.77c0-123.807,100.216-224.022,224.03-224.022   c123.347,0,224.023,100.216,223.57,224.022c0,98.856-63.946,182.754-152.828,212.688c-11.342,2.266-15.873-4.53-15.873-10.89   V395.45C311.1,374.577,304.288,360.985,296.133,354.174L296.133,354.174z M512,256.23C512,114.73,397.263,0,256.23,0   C114.73,0,0,114.73,0,256.23C0,397.263,114.73,512,256.23,512C397.263,512,512,397.263,512,256.23L512,256.23z" fill="#0D2636" fill-rule="evenodd"></path></g></svg>`);
}
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/svgs/IconGithub.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const __nuxt_component_1$2 = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["ssrRender", _sfc_ssrRender$9]]);
const _sfc_main$d = {};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    height: "100%",
    style: { "fill-rule": "evenodd", "clip-rule": "evenodd", "stroke-linejoin": "round", "stroke-miterlimit": "2" },
    version: "1.1",
    viewBox: "0 0 512 512",
    width: "100%",
    "xml:space": "preserve",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:serif": "http://www.serif.com/",
    "xmlns:xlink": "http://www.w3.org/1999/xlink"
  }, _attrs))}><path d="M256,0c141.29,0 256,114.71 256,256c0,141.29 -114.71,256 -256,256c-141.29,0 -256,-114.71 -256,-256c0,-141.29 114.71,-256 256,-256Zm-80.037,399.871l0,-199.921l-66.464,0l0,199.921l66.464,0Zm239.62,0l0,-114.646c0,-61.409 -32.787,-89.976 -76.509,-89.976c-35.255,0 -51.047,19.389 -59.889,33.007l0,-28.306l-66.447,0c0.881,18.757 0,199.921 0,199.921l66.446,0l0,-111.65c0,-5.976 0.43,-11.95 2.191,-16.221c4.795,-11.935 15.737,-24.299 34.095,-24.299c24.034,0 33.663,18.34 33.663,45.204l0,106.966l66.45,0Zm-272.403,-296.321c-22.74,0 -37.597,14.95 -37.597,34.545c0,19.182 14.405,34.544 36.717,34.544l0.429,0c23.175,0 37.6,-15.362 37.6,-34.544c-0.43,-19.595 -14.424,-34.545 -37.149,-34.545Z"></path></svg>`);
}
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/svgs/IconLinkedin.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const __nuxt_component_2$1 = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["ssrRender", _sfc_ssrRender$8]]);
const _sfc_main$c = {};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs) {
  const _component_SvgsIconWhats = __nuxt_component_0$4;
  const _component_SvgsIconGithub = __nuxt_component_1$2;
  const _component_SvgsIconLinkedin = __nuxt_component_2$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "sidebar-social" }, _attrs))}><div class="sibebar-title"><span class="text subtitle white uppercase">${ssrInterpolate(_ctx.$t("sidebar.sideSocialNetworks"))}</span></div><ul class="d-flex justify-content-start align-items-center"><li><a href="https://api.whatsapp.com/send?phone=351912421142" target="_blank">`);
  _push(ssrRenderComponent(_component_SvgsIconWhats, null, null, _parent));
  _push(`</a></li><li><a href="https://github.com/cassiods90" target="_blank">`);
  _push(ssrRenderComponent(_component_SvgsIconGithub, null, null, _parent));
  _push(`</a></li><li><a href="https://www.linkedin.com/in/cassiopossamaispessatto" target="_blank">`);
  _push(ssrRenderComponent(_component_SvgsIconLinkedin, null, null, _parent));
  _push(`</a></li></ul></div>`);
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sidebar/SideSocialNetworks.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const __nuxt_component_3$1 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$b = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "sidebar-link" }, _attrs))}><div class="d-flex flex-column justify-content-center align-items-center"><span class="text small-text white">${ssrInterpolate(_ctx.$t("sidebar.sideLink.textDeveloped"))}</span><span class="text small-text white"><a href="https://www.cassiospessatto.com.br" target="_blank">${ssrInterpolate(_ctx.$t("sidebar.sideLink.textClickHere"))}</a> ${ssrInterpolate(_ctx.$t("sidebar.sideLink.textVersion"))}</span></div></div>`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sidebar/SideLink.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$a = {
  __name: "AppSidebar",
  __ssrInlineRender: true,
  setup(__props) {
    const menuToggle = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SvgsIconProfile = __nuxt_component_0$6;
      const _component_SidebarSideImage = __nuxt_component_1$4;
      const _component_SidebarSideContact = __nuxt_component_2$2;
      const _component_SidebarSideSocialNetworks = __nuxt_component_3$1;
      const _component_SidebarSideLink = __nuxt_component_4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "sidebar" }, _attrs))}><div class="sidebar-profile d-block d-lg-none">`);
      _push(ssrRenderComponent(_component_SvgsIconProfile, null, null, _parent));
      _push(`</div><div class="sidebar-desktop show d-none d-lg-block">`);
      _push(ssrRenderComponent(_component_SidebarSideImage, null, null, _parent));
      _push(ssrRenderComponent(_component_SidebarSideContact, null, null, _parent));
      _push(ssrRenderComponent(_component_SidebarSideSocialNetworks, null, null, _parent));
      _push(ssrRenderComponent(_component_SidebarSideLink, null, null, _parent));
      _push(`</div><div class="sidebar-mobile d-block d-lg-none"><div class="${ssrRenderClass([{ show: unref(menuToggle) }, "sidebar-content"])}">`);
      _push(ssrRenderComponent(_component_SidebarSideImage, null, null, _parent));
      _push(ssrRenderComponent(_component_SidebarSideContact, null, null, _parent));
      _push(ssrRenderComponent(_component_SidebarSideSocialNetworks, null, null, _parent));
      _push(ssrRenderComponent(_component_SidebarSideLink, null, null, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppSidebar.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __nuxt_component_0$3 = _sfc_main$a;
const _sfc_main$9 = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    viewBox: "0 0 96 96",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><title></title><path d="M81.8457,25.3876a6.0239,6.0239,0,0,0-8.45.7676L48,56.6257l-25.396-30.47a5.999,5.999,0,1,0-9.2114,7.6879L43.3943,69.8452a5.9969,5.9969,0,0,0,9.2114,0L82.6074,33.8431A6.0076,6.0076,0,0,0,81.8457,25.3876Z"></path></svg>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/svgs/IconDown.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$8 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    viewBox: "0 0 96 96",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><title></title><path d="M82.6074,62.1072,52.6057,26.1052a6.2028,6.2028,0,0,0-9.2114,0L13.3926,62.1072a5.999,5.999,0,1,0,9.2114,7.6879L48,39.3246,73.396,69.7951a5.999,5.999,0,1,0,9.2114-7.6879Z"></path></svg>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/svgs/IconUp.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$4]]);
const en = "data:image/png;base64,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";
const pt = "data:image/png;base64,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";
const es = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAADsAAAA7AF5KHG9AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAnBJREFUWIXFl81LVFEYh5/33BklRiUozEg3NY7aEC4q+8IIQm0h9A/UfxCEQhuhRVQUBCPUn1D7Fm1KN31AX7ZIY2pmtLJSSyko8ZLNeO/bohmxyZrbcGfub3fveTnPc87iPecIHpOirR44Jmi3IvuArcCm/PAXReYEfQI8cAjdjpNc8jKvlCpIEo9arAwCJ4B6j76LwA0LJ9HK1OuyBD7QvMEmMgScAWo9gouzDFyJYF9qYea7Z4FJos0O1k1gT5ng4oy7mOM7efWupECaWKciI0CjT/BCPinS20HqxV8F8it/BDT7DC9kzsUcXLsTqwKTRGsdrDFgV4XghYw7hLriJLMApvDXwTpbBThAp8EZKnwIQIbYdhdJAeEqCADkFIl1kJo2AA5msIpwgLDBHQQQTR6pW0jYo+LqRqmVOqmRBglLBFHLV6SKozm1NauL+kOX1JKvjQORHtHM0X6QW77CvKffgPQGBAe0x+BftyuDb/YaoCkwAdEmg/8t93+yxZSuqWjUAPMBCswHK6Ayb4BngQmIO2ZARwITQEZD5Jy7Cwn7cUCt+J4ApIldU+SUr8DSudpO+rQBEBgGclWEZxUZhvyFJEbmDXC5WnRBL3aQml4VAHAIXQAmqsB/vkJ4dbHrXUofAi0Vgs+6mENrL6W/teJWpmaAfkEr0Zw+Olh9xW+DP86CdtITwG78bVDjDqH9cV4miwfWPYzayMxGsA8D5/n1vCo3y4qci2AfiJN8v15BycfpJNEdK4QGBD0JNHgEfxP0uiKJdtJv/1VYUqCQJPE6g9MnaDfQBWwDNueHPwOzwFNF7mepudPJhO1l3p856tXcLIkKCgAAAABJRU5ErkJggg==";
const it = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAADsAAAA7AF5KHG9AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAA0xJREFUWIXFl19IU1Ecx3/37L9N59TNzXT+wXQkmYj/yNQpSQ/TerEEe+ilP6gFFkQmCUIUEUWhJJVYPUiUpJL5p5QZaqZmTOlBitCtZcqW09n+ubvdrQd1pE69mdu+b/ecH7/Ph3PPPYeLAclotVo/KpUqdTgcOQCwHwAiAMB/eVoHAEoAGMMwrAfH8XYej6cn0xfbqqB5uC5HbVDWRPMSopNFuXQyTU31zfhia4+KGR9bGlJT2bVZLXWjiY6hBj+1RdXWN9mUQdhtEBEYR4a9FKuVjveORFsH5G+VR4qH/Q4kHA4oP7vgqhS5Gnw9+kQyou5Sy6d6Mgi7jTx4TRw2AhZbe1Ln6l5Oq05XJpMSaBy8X/hhol02a5hmbpu8JrYJlY/llWzwe0lVwaYCrR8fZ8mnZM8MFp3LlfmfEBotBX/R+Xz6TEWiS4G2z7XcsZneTiP+e8fhTgmtjmLqlff/uFAVsE5gWqvu+GX4yXIXfCW2rwof26SmZZVA49CD3PGZ4TR3w1diedOfOXXiYppTQKNXVBOO7e/2fzfAAZ9dqAMAQE2fHgqV8+OxnqMvxTYgj1OWXRcik0V/2WI1b3ki7nTsBhMGeuMlpDdrcz0Nd0atzUVzJnW4t/g2xVQEMuMGt396G0anZyGT1eC2g2erEHM6CsI8vv3+CoYBYtF87d7iIy6HQCzaLrO3BDB/XzPi+gQrvSVAiQpVIA4zoNtbAhgvsAshKu0mg8ZyeBqO/NgOpijsFipKK1NHcuO+eFqAnpE4Lqgq1iAAAD4n9DwV0TxHZ9CBERNZCrB8HR9LOSfbK0gd9BSfKZW8F96t6HUKAAAIA/lSHnu30d1wSky4kSMKzF95dgrkxZfMi4UpB9lMLuEuOArytzMOpWZz71Xp1gkAABxPKR3bJ0gvdIcECg4iWEX5BaLaayOrxtcWFqWXNYmDEpOD2MIdex2UPeFG9tGslLDqqy1r51zehCezroxmRucLEkIlMoRRtg3GaFRg5EmG/E8VCkMe3ZC7rNmqScPA7WSdabZeLEiKSQo7xCADNj9tseDdg98wcVSp6E5536aSZBoCAGg0GjadTpcCQDYAJABAJKz+PVcAwCgAvMNxvIPP5xvI9P0DL3EjzEq0CFcAAAAASUVORK5CYII=";
const fr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAADsAAAA7AF5KHG9AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAA1dJREFUWIXFl3tIU1Ecx7/37Hq3pc3N3HJimmHTiLIMU0rzgRK0Hv8URv1ToIZJbyKRBCEKCSrTCEoi6EVCD4plLzQs015Mkx72dM2yNlybzW16d+f6wxxpMy/q5ue/e86P8/1w7z3nx6HAE5PJJKFpWu12uzMBxAOYCUD6Z9oCQAeghaKoOpZlb8nlciufdanRCorOvcx83WGvzJwri9mcHsbwWdR+5hrbe7NOL5ofWxheWXLvf7X0SBMVNR8kz9rMmqOab6ks14+lscF8sgdwOhm2/nmM87H2rm51wVPJkgXLQ4q2dHsrJd4G959/m16h0RsuNBhTWa6ff/Aw3JwLvTfrkn5WXenU55Uk8hLYUdWSc7pOX/vxh0M05uRhcJ/0U/pu1DZ92Vq69r8CJZda0y40/Lhk7HZ6fTPjwWU0Cdjq25c784sTvAoUXWyVVTd23TZZuQkP90iYLAJ7vfZRx67SkH8E3nfYa9532sW+Ch+Ee9c+hftsvD5EYM/Z5myN1pTs6/BB+u48WvZ14+5kj8ArvaOC5dz+ygf6WLBd3VUAQIrPv1A2vvsV67/0AbjH2rm6nQeVxGCh9ll7uVFPxImmv8dOwWrbS76b2Wx/h3swmLKJrssRNVn5XPvXmcRs43y+9UbEYhUTc4/vDp7RcP20CAjl99/vLygKRBZIj73djRMiC3YRaSDtmCwBSjrVQaLlIt1kCQhmRbQTpUx4f7IEKPm0eyRQ6CybKqL92AgGIJIgtyhyxmFyPC/ZkBInafO3AJOa8CastMBIAGBOeOA2Ie3H/ShkIFRFFwJ/2vHR3Pha9aLQJn/li9TpDcpjxfUeAQBQRYjVKqXY5utwgSrKFhw5bdXgs0egbON884r4kJTpwYzLV+EkVNovzErKkJWXWv4RAIDy/IUt6xaH5vhCgkwPdYk3rFobefLA8yHjwwtPFCRcXb5QlhgTNnGfQzA7yha0Jm3xjIr914fPee2E57YnNu9aNy9s/RJFbYBg7LuDCqAhXJn+RJqboww/fUjrrWbEu2FhhqIHQNam8uZEwy/HGVGAQAVAyCtYxPSJ1WkfqLhZhZFHih5Cc2rkWj4LAoDRaAxiGEYNIAPAAgDRGHo9bwfQDOABy7I1CoWih8+6vwGQ/CF8HL9iqgAAAABJRU5ErkJggg==";
const de = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAADsAAAA7AF5KHG9AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAldJREFUWIXFl81OE1EUx3/ntqUFRiDRKEaMxgoWiWHht6aGGBUXvIJvYGLkCfzAxJUkGn0BH8ENFkSUhETRBEmICxK/KyHRRUlbypTOcUFLsDYwlU7nn5zNnJvz+997M+fMCO61A7gKxIHTwF5gZzH3G/gJvAEmgREgXUXtTXUYeAIsAeoyUsBjILodcCNwF8hVAS6PZeBOsVZV6gCmtwEujxnggFt4L7BYQ3gpFoBjbnb+3QN4KZKbnUQYmPUQvvE6GioZGKoDvBS3yuGHALuOBmzgIIApGhgEQpWOxSOFikyCc/RYU6S6Mzjvc2jzCmrl0SYbtQpoxbuqVgHEbkDSISQbRtIRJNOM6TlHqyUfiQ0I+qwWoGplcAaMwbniBxzAwVw2ipzwywBw0gDtPhpoN8BuHw3sMVuv8VRqWBs8fmnRfwOCvvPRwLRxMAm/6AZnNOgQmGiJB8eNZVolIs0SEkvC0iQNWBKQmrRiLaitNmld0azmNa05zThpJ7U0ufpKAHT+0iOU67WAuZc8lK7RG2uvoTIM5OtItykEhqE4jqVr7BPI/brhRe5J98iXdQMA5NuGWPsk81oz2G3rm5WNGZ3v60CDU8B+j+BJVp3zcnT8a+nBX61YOid+4OgA3jSnBaTQvxH+jwEAib2YRZ3jCDVsUPqBAGek8+VceabiMJIj40kimQsgpV+z/1UO5TaN2bMSHftWkbVVBZ2/GAW5ico1oMUlOIXwlIJ5ILHE580Wbmlg3chcn0Uo2A8aBzkF7AN2FdO/gCToW5DXLJvn0pvIuKn7B2ouS2DXihtzAAAAAElFTkSuQmCC";
const lang = {
  en,
  pt,
  es,
  it,
  fr,
  de
};
const _sfc_main$7 = {
  __name: "AppLanguage",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale, setLocale, availableLocales } = useI18n();
    const isDropdownOpen = ref(false);
    const currentLocale = ref(locale.value);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SvgsIconDown = __nuxt_component_0$2;
      const _component_SvgsIconUp = __nuxt_component_1$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["lang-menu", { showHide: unref(isDropdownOpen) }]
      }, _attrs))}><button class="lang-menu-button" type="button"><img${ssrRenderAttr("src", unref(lang)[unref(currentLocale)])} alt="">`);
      if (!unref(isDropdownOpen)) {
        _push(ssrRenderComponent(_component_SvgsIconDown, null, null, _parent));
      } else {
        _push(ssrRenderComponent(_component_SvgsIconUp, null, null, _parent));
      }
      _push(`</button>`);
      if (unref(isDropdownOpen)) {
        _push(`<ul class="lang-menu-dropdown"><!--[-->`);
        ssrRenderList(unref(availableLocales), (locale2) => {
          _push(`<a class="${ssrRenderClass(["dropdown-item", { active: locale2 === unref(currentLocale) }])}"><img${ssrRenderAttr("src", unref(lang)[locale2])} alt=""></a>`);
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppLanguage.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$7;
const _sfc_main$6 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    "enable-background": "new 0 0 48 48",
    height: "48px",
    id: "Layer_1",
    version: "1.1",
    viewBox: "0 0 48 48",
    width: "48px",
    "xml:space": "preserve",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink"
  }, _attrs))}><path clip-rule="evenodd" d="M46.443,6.719C40.506,15.546,22.623,33.4,22.623,33.4l-0.007-0.007  c-0.042,0.046-0.08,0.094-0.125,0.139c-1.124,1.122-2.649,1.576-4.114,1.403c0.471,1.972-0.026,4.137-1.529,5.678  c0,0-7.52,9.299-15.854,3.44c0,0,4.494-1.259,4.885-4.885c0,0-0.6-3.654,2.699-7.04c1.479-1.518,3.548-2.039,5.445-1.596  c-0.152-1.444,0.303-2.94,1.411-4.047c0.044-0.045,0.093-0.083,0.139-0.126l-0.007-0.007c0,0,17.872-17.864,26.712-23.793  c1.17-0.837,2.804-0.739,3.854,0.31C47.185,3.92,47.282,5.551,46.443,6.719z M15.456,33.486c-0.742-0.742-1.704-1.165-2.733-1.165  c-1.033,0-2.009,0.416-2.744,1.171c-2.535,2.602-2.155,5.584-2.145,5.677c-0.218,2.02-1.363,3.741-2.557,4.776  c0.422,0.077,0.849,0.116,1.285,0.116c4.75,0,8.752-4.66,8.789-4.704C15.352,39.357,18.09,36.121,15.456,33.486z M15.994,30.008  c0,0.796,0.289,1.546,0.854,2.109c0.565,0.564,1.348,0.891,2.146,0.891s1.519-0.326,2.066-0.874l1.554-1.57  c0.079-0.081,0.187-0.191,0.274-0.28l-4.197-4.197c-0.092,0.089-0.205,0.198-0.287,0.279l-1.557,1.537  C16.283,28.465,15.994,29.212,15.994,30.008z M44.72,4.286C44.471,4.037,44.18,4,44.027,4c-0.212,0-0.414,0.064-0.635,0.222  c-6.218,4.17-17.999,15.367-23.301,20.503l4.159,4.159c5.14-5.296,16.364-17.083,20.568-23.332  C45.102,5.158,45.061,4.625,44.72,4.286z" fill-rule="evenodd"></path></svg>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/svgs/IconTheme.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$5 = {
  __name: "AppThemeMode",
  __ssrInlineRender: true,
  setup(__props) {
    themeColor();
    const menuToggle = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SvgsIconTheme = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "theme-mode" }, _attrs))}><div class="theme-mode-menu d-block d-lg-none">`);
      _push(ssrRenderComponent(_component_SvgsIconTheme, null, null, _parent));
      _push(`</div><div class="${ssrRenderClass([{ show: unref(menuToggle) }, "theme-colors"])}"><div class="theme-colors-title d-flex justify-content-center align-items-center"><span class="text bold white">${ssrInterpolate(_ctx.$t("themeColor"))}</span></div><ul class="d-flex justify-content-center align-items-center"><li class="blue"></li><li class="pink"></li><li class="green"></li><li class="yellow"></li></ul></div></div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppThemeMode.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main$5;
function useLocalePath(options) {
  const { route, router, i18n } = options || {};
  return useLocalePath$1({
    route: route || useRoute(),
    router: router || useRouter(),
    i18n: i18n || getComposer(useNuxtApp().$i18n)
  });
}
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "NavDesktop",
  __ssrInlineRender: true,
  setup(__props) {
    const localPath = useLocalePath();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$7;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "header-desktop d-none d-lg-block" }, _attrs))}><div class="nav-menu d-flex flex-column flex-md-row justify-content-center align-items-center">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "header-menu-item text header-title white uppercase",
        to: unref(localPath)("/")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("navbar.home"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("navbar.home")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "header-menu-item text header-title white uppercase",
        to: unref(localPath)("/about")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("navbar.about"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("navbar.about")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "header-menu-item text header-title white uppercase",
        to: unref(localPath)("/experiences")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("navbar.experiences"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("navbar.experiences")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "header-menu-item text header-title white uppercase",
        to: unref(localPath)("/academics")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("navbar.academics"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("navbar.academics")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "header-menu-item text header-title white uppercase",
        to: unref(localPath)("/skills")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("navbar.skills"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("navbar.skills")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/header/NavDesktop.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    baseProfile: "tiny",
    height: "24px",
    id: "Layer_1",
    version: "1.2",
    viewBox: "0 0 24 24",
    width: "24px",
    "xml:space": "preserve",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink"
  }, _attrs))}><path d="M19,17H5c-1.103,0-2,0.897-2,2s0.897,2,2,2h14c1.103,0,2-0.897,2-2S20.103,17,19,17z"></path><path d="M19,10H5c-1.103,0-2,0.897-2,2s0.897,2,2,2h14c1.103,0,2-0.897,2-2S20.103,10,19,10z"></path><path d="M19,3H5C3.897,3,3,3.897,3,5s0.897,2,2,2h14c1.103,0,2-0.897,2-2S20.103,3,19,3z"></path></svg>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/svgs/IconMenu.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "NavMobile",
  __ssrInlineRender: true,
  setup(__props) {
    const menuToggle = ref(false);
    const localPath = useLocalePath();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SvgsIconMenu = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$7;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "header-mobile d-block d-lg-none" }, _attrs))}><div class="header-menu d-flex d-lg-none justify-content-center align-items-center">`);
      _push(ssrRenderComponent(_component_SvgsIconMenu, null, null, _parent));
      _push(`</div><div class="${ssrRenderClass([{ show: unref(menuToggle) }, "nav-menu mobile d-flex flex-column justify-content-center align-items-center"])}">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "header-menu-item text header-title white uppercase",
        to: unref(localPath)("/")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("navbar.home"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("navbar.home")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "header-menu-item text header-title white uppercase",
        to: unref(localPath)("/about")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("navbar.about"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("navbar.about")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "header-menu-item text header-title white uppercase",
        to: unref(localPath)("/experiences")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("navbar.experiences"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("navbar.experiences")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "header-menu-item text header-title white uppercase",
        to: unref(localPath)("/academics")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("navbar.academics"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("navbar.academics")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "header-menu-item text header-title white uppercase",
        to: unref(localPath)("/skills")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("navbar.skills"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("navbar.skills")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/header/NavMobile.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_HeaderNavDesktop = _sfc_main$4;
  const _component_HeaderNavMobile = _sfc_main$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "header" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_HeaderNavDesktop, null, null, _parent));
  _push(ssrRenderComponent(_component_HeaderNavMobile, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppHeader.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_AppSidebar = __nuxt_component_0$3;
  const _component_AppLanguage = __nuxt_component_1;
  const _component_AppThemeMode = __nuxt_component_2;
  const _component_AppHeader = __nuxt_component_3;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_AppSidebar, null, null, _parent));
  _push(ssrRenderComponent(_component_AppLanguage, null, null, _parent));
  _push(ssrRenderComponent(_component_AppThemeMode, null, null, _parent));
  _push(ssrRenderComponent(_component_AppHeader, null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-ba66df3a.mjs.map
