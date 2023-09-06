import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { mergeProps, useSSRContext, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
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

const _sfc_main$4 = {
  __name: "DegreeItem",
  __ssrInlineRender: true,
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card-item academic-item d-flex flex-column justify-content-center align-items-center" }, _attrs))}><div class="academic-item-image"><picture><img${ssrRenderAttr("src", __props.value.academicImage)}${ssrRenderAttr("alt", __props.value.academicTitle)}></picture></div><div class="academic-item-content"><span class="text subtitle white academic-title">${ssrInterpolate(__props.value.academicTitle)}</span><span class="text white academic-university">${ssrInterpolate(__props.value.academicUniversity)}</span><span class="text white academic-date">${ssrInterpolate(__props.value.academicDate)}</span><div class="custon-btn download-btn d-flex justify-content-center align-items-center"><a${ssrRenderAttr("href", __props.value.academicLink)} target="_blank" class="text white d-flex justify-content-center align-items-center academic-link">${ssrInterpolate(_ctx.$t("academics.AcademicsDegrees.lookCertificate"))}</a></div></div></div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/academics/DegreeItem.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0$2 = _sfc_main$4;
const reactZeroToAdvanceUdemy = "" + buildAssetsURL("reactZeroToAdvanceUdemy.ea5b8fc5.jpg");
const ecmascript6 = "" + buildAssetsURL("ecmascript6.9f74a464.jpg");
const vjsUdemy = "" + buildAssetsURL("vjsUdemy.19003483.jpg");
const vjs3Udemy = "" + buildAssetsURL("vjs3Udemy.c18d6feb.jpg");
const reactUdemy = "" + buildAssetsURL("reactUdemy.db99c39f.jpg");
const devWebUdemy = "" + buildAssetsURL("devWebUdemy.f7f97b30.jpg");
const FullStackTargetTrust = "" + buildAssetsURL("FullStackTargetTrust.b63545da.jpg");
const javascriptTT = "" + buildAssetsURL("javascriptTT.8c7b7148.jpg");
const nodeTT = "" + buildAssetsURL("nodeTT.98f7b319.jpg");
const reactTT = "" + buildAssetsURL("reactTT.f7145b5c.jpg");
const vueAlura = "" + buildAssetsURL("vueAlura.bfa406dd.jpg");
const reactAlura = "" + buildAssetsURL("reactAlura.d6cc508e.jpg");
const frontEnd = "" + buildAssetsURL("frontEnd.b7bdfe3a.jpg");
const htmlCss = "" + buildAssetsURL("htmlCss.7cacfad6.jpg");
const inicianteProgramacaoJS = "" + buildAssetsURL("inicianteProgramacaoJS.a052f14c.jpg");
const python = "" + buildAssetsURL("python.e4fccbb0.jpg");
const desenvolvimentoAgil = "" + buildAssetsURL("desenvolvimentoAgil.42b25cae.jpg");
const acessibilidadeWeb = "" + buildAssetsURL("acessibilidadeWeb.f139f419.jpg");
const comercialManagement = "" + buildAssetsURL("comercialManagement.2a77c177.jpg");
const projectManagement = "" + buildAssetsURL("projectManagement.b61a4586.jpg");
const softwareEngineering = "" + buildAssetsURL("softwareEngineering.31881d69.jpg");
const certificate = {
  reactZeroToAdvanceUdemy,
  ecmascript6,
  vjsUdemy,
  vjs3Udemy,
  reactUdemy,
  devWebUdemy,
  FullStackTargetTrust,
  javascriptTT,
  nodeTT,
  reactTT,
  vueAlura,
  reactAlura,
  frontEnd,
  htmlCss,
  inicianteProgramacaoJS,
  python,
  desenvolvimentoAgil,
  acessibilidadeWeb,
  comercialManagement,
  projectManagement,
  softwareEngineering
};
const _sfc_main$3 = {
  __name: "Degrees",
  __ssrInlineRender: true,
  setup(__props) {
    const { t, tm } = useI18n();
    const myAcademicsLang = tm("academics.AcademicsDegrees.myAcademics");
    const myAcademics = myAcademicsLang.map((academic) => ({
      academicTitle: academic.academicTitle.loc.source,
      academicUniversity: academic.academicUniversity.loc.source,
      academicDate: academic.academicDate.loc.source,
      academicImage: getCertificateImagePath(academic.academicImage.loc.source),
      academicLink: academic.academicLink.loc.source
    }));
    function getCertificateImagePath(name) {
      return certificate[name];
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AcademicsDegreeItem = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="main-title"><span class="text bigtitle uppercase white">${ssrInterpolate(_ctx.$t("academics.AcademicsDegrees.title"))}</span></div><div class="academics-items"><div class="row justify-content-between align-items-start"><!--[-->`);
      ssrRenderList(unref(myAcademics), (myAcademic) => {
        _push(`<div class="col-12 col-lg-12 col-xl-4">`);
        _push(ssrRenderComponent(_component_AcademicsDegreeItem, { value: myAcademic }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/academics/Degrees.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0$1 = _sfc_main$3;
const _sfc_main$2 = {
  __name: "certificateItem",
  __ssrInlineRender: true,
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card-item certificates-item d-flex flex-column justify-content-center align-items-center" }, _attrs))}><div class="certificates-item-image"><picture><img${ssrRenderAttr("src", __props.value.certificateImage)}${ssrRenderAttr("alt", __props.value.academicTitle)}></picture></div><div class="certificates-item-content"><span class="text subtitle white certificates-title">${ssrInterpolate(__props.value.certificateTitle)}</span><span class="text white certificates-institute">${ssrInterpolate(__props.value.certificateInstitute)}</span><span class="text white certificates-hours">${ssrInterpolate(__props.value.certificateHours)}</span><div class="custon-btn download-btn d-flex justify-content-center align-items-center"><a${ssrRenderAttr("href", __props.value.certificateLink)} target="_blank" class="text white d-flex justify-content-center align-items-center certificates-link">${ssrInterpolate(_ctx.$t("academics.AcademicsCertificates.lookCertificate"))}</a></div></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/academics/certificateItem.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$2;
const _sfc_main$1 = {
  __name: "certificates",
  __ssrInlineRender: true,
  setup(__props) {
    const { t, tm } = useI18n();
    const myCertificatesLang = tm("academics.AcademicsCertificates.myCertificates");
    const myCertificates = myCertificatesLang.map((certificate2) => ({
      certificateTitle: certificate2.certificateTitle.loc.source,
      certificateInstitute: certificate2.certificateInstitute.loc.source,
      certificateHours: certificate2.certificateHours.loc.source,
      certificateImage: getCertificateImagePath(certificate2.certificateImage.loc.source),
      certificateLink: certificate2.certificateLink.loc.source
    }));
    function getCertificateImagePath(name) {
      return certificate[name];
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AcademicsCertificateItem = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="main-title"><span class="text bigtitle uppercase white">${ssrInterpolate(_ctx.$t("academics.AcademicsCertificates.title"))}</span></div><div class="certificates-items"><div class="row justify-content-between align-items-start"><!--[-->`);
      ssrRenderList(unref(myCertificates), (myCertificate) => {
        _push(`<div class="col-12 col-md-6 col-xl-4">`);
        _push(ssrRenderComponent(_component_AcademicsCertificateItem, { value: myCertificate }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/academics/certificates.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$1;
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_AcademicsDegrees = __nuxt_component_0$1;
  const _component_AcademicsCertificates = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "pages academics-page" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_AcademicsDegrees, null, null, _parent));
  _push(ssrRenderComponent(_component_AcademicsCertificates, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/academics.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const academics = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { academics as default };
//# sourceMappingURL=academics-392ac0b3.mjs.map
