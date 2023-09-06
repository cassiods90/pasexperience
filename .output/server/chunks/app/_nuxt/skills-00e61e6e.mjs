import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { mergeProps, useSSRContext, unref } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc, u as useI18n } from '../server.mjs';
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

const _sfc_main$2 = {
  __name: "LanguageItem",
  __ssrInlineRender: true,
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "hexagon-filter" }, _attrs))}><div class="hexagon-cell d-flex flex-wrap justify-content-center align-items-center"><div class="show-cell"><img${ssrRenderAttr("src", __props.value.skillImage)} class="" alt=""></div><div class="hover-cell d-flex flex-column justify-content-center align-items-center"><span class="text title white academic-title">${ssrInterpolate(__props.value.skillTitle)}</span><span class="text white academic-date">${ssrInterpolate(__props.value.skillKnowledge)}</span></div></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/skills/LanguageItem.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0$1 = _sfc_main$2;
const bootstrapIcon = "" + buildAssetsURL("bootstrapIcon.0e8bc221.svg");
const cssIcon = "" + buildAssetsURL("cssIcon.652bc445.svg");
const figmaIcon = "" + buildAssetsURL("figmaIcon.a0ec60a2.svg");
const gitIcon = "" + buildAssetsURL("gitIcon.b8555258.svg");
const htmlIcon = "" + buildAssetsURL("htmlIcon.2441381c.svg");
const jqueryIcon = "" + buildAssetsURL("jqueryIcon.87c3d022.svg");
const jsIcon = "" + buildAssetsURL("jsIcon.081ae58f.svg");
const lessIcon = "" + buildAssetsURL("lessIcon.eb782e1a.svg");
const photoshopIcon = "" + buildAssetsURL("photoshopIcon.662c80bb.svg");
const phpIcon = "" + buildAssetsURL("phpIcon.62e2ceb4.svg");
const react_native_icon = "" + buildAssetsURL("react_native_icon.66816bfe.svg");
const ReactIcon = "" + buildAssetsURL("ReactIcon.90b319fc.svg");
const sassIcon = "" + buildAssetsURL("sassIcon.9de5002b.svg");
const vueIcon = "" + buildAssetsURL("vueIcon.d226c7e0.svg");
const wordpressIcon = "" + buildAssetsURL("wordpressIcon.631a7d6f.svg");
const skill = {
  bootstrapIcon,
  cssIcon,
  figmaIcon,
  gitIcon,
  htmlIcon,
  jqueryIcon,
  jsIcon,
  lessIcon,
  photoshopIcon,
  phpIcon,
  react_native_icon,
  ReactIcon,
  sassIcon,
  vueIcon,
  wordpressIcon
};
const _sfc_main$1 = {
  __name: "Languages",
  __ssrInlineRender: true,
  setup(__props) {
    const { t, tm } = useI18n();
    const mySkillsLang = tm("skills.languages");
    const mySkills = mySkillsLang.map((skill2) => ({
      skillTitle: skill2.skillTitle.loc.source,
      skillImage: getCertificateImagePath(skill2.skillImage.loc.source),
      skillKnowledge: skill2.skillKnowledge.loc.source
    }));
    function getCertificateImagePath(name) {
      return skill[name];
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SkillsLanguageItem = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="container-fluid"><div class="hexagon-cards d-flex justify-content-center align-items-center flex-wrap"><!--[-->`);
      ssrRenderList(unref(mySkills), (mySkill) => {
        _push(`<div class="col-6 col-md-4 col-lg-3 hexagon-cards-item">`);
        _push(ssrRenderComponent(_component_SkillsLanguageItem, { value: mySkill }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/skills/Languages.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$1;
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_SkillsLanguages = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "pages skills-page" }, _attrs))}><div class="main-title"><span class="text bigtitle uppercase white">${ssrInterpolate(_ctx.$t("skills.title"))}</span></div>`);
  _push(ssrRenderComponent(_component_SkillsLanguages, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/skills.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const skills = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { skills as default };
//# sourceMappingURL=skills-00e61e6e.mjs.map
