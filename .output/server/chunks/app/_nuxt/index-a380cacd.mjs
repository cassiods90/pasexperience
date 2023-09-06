import { _ as _export_sfc, u as useI18n } from '../server.mjs';
import { mergeProps, useSSRContext, unref, defineComponent, ref, watch, openBlock, createElementBlock, renderSlot, createElementVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { t as themeColor } from './themeColor-7d853909.mjs';
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

const A = {
  // 这个是示例值
  // status: {
  //   // PropType：声明时给一个 prop 标注更复杂的类型定义。
  //   type: String as PropType<"on" | "off">,
  //   required: true,
  //   default: "on",
  // },
  // 需要打印的内容，可以为字符串或者数组，数组将自动在后面添加换行符
  data: {
    type: [String, Array],
    default: ""
  },
  // 执行次数，如果小于1，则无限循环
  handlerNum: {
    type: Number,
    default: 1,
    validator(o) {
      if (o > 0)
        return true;
      throw Error("handlerNum\u5FC5\u987B\u5927\u4E8E0");
    }
  },
  // 打印速度
  typeSpeed: {
    type: Number,
    default: 15
  },
  // 行打印速度
  typeSpeedLine: {
    type: Number,
    default: 100
  },
  //光标的符号
  cursorChar: {
    type: String,
    default: "_"
  },
  // 是否撤销显示，当data为数组时，data的后续值知否覆盖前一个值
  back: {
    type: Boolean,
    default: false
  },
  // 回退速度
  backSpeed: {
    type: Number,
    default: 30
  },
  // 滚动容器class或者id
  scrollDom: {
    type: String,
    default: ""
  }
};
const B = { class: "content" }, L = ["innerHTML"], E = /* @__PURE__ */ defineComponent({
  name: "vueTyperNext",
  __name: "typer",
  props: A,
  emits: ["complete", "lineComplete"],
  setup(o, { expose: c, emit: d }) {
    const a = o, e = ref("");
    let s = 1, u = "start", h;
    const n = `<span class="cursorChar">${a.cursorChar}</span>`;
    watch(
      () => a.data,
      () => {
        console.log("watch"), s = a.handlerNum, y();
      },
      {
        immediate: true
      }
    );
    function f() {
      e.value = "", e.value = e.value + n;
    }
    async function y() {
      if (Array.isArray(a.data)) {
        for (; s > 0; )
          f(), await S(), s--;
        d("complete");
      } else {
        for (; s > 0; )
          f(), await w(), s--;
        d("complete");
      }
    }
    async function w() {
      for (let t = 0; t < a.data.length; t++) {
        const l = a.data[t];
        e.value = e.value.slice(0, e.value.length - n.length) + l + (t < a.data.length - 1 ? e.value.slice(e.value.length - n.length) : ""), await i(a.typeSpeed), m();
      }
    }
    async function S() {
      for (let t = 0; t < a.data.length; t++) {
        const l = a.data[t];
        if (l)
          for (let r = 0; r < l.length; r++) {
            const p = l[r], v = e.value.length - n.length;
            e.value = e.value.slice(0, v) + p + e.value.slice(v), u === "pause" && await i(), await i(a.typeSpeed), m();
          }
        if (d("lineComplete"), await i(a.typeSpeedLine), a.back) {
          if (l && t < a.data.length - 1)
            for (let r = 0; r < l.length; r++) {
              const p = e.value.length - n.length;
              e.value = e.value.slice(0, p - 1) + e.value.slice(p), await i(a.backSpeed);
            }
        } else
          e.value = e.value.slice(0, e.value.length - n.length) + "<br/>" + (t < a.data.length - 1 ? e.value.slice(e.value.length - n.length) : "");
      }
    }
    function i(t) {
      return new Promise((l) => {
        t ? setTimeout(l, t) : h = window.setInterval(() => {
          u === "start" && (l(), clearInterval(h));
        }, 100);
      });
    }
    function m() {
      if (a.scrollDom) {
        const t = document.querySelector(a.scrollDom);
        t && (t.scrollTop = t.scrollHeight);
      }
    }
    function N() {
      u = "start";
    }
    function x() {
      u = "pause";
    }
    return c({
      start: N,
      pause: x
    }), (t, l) => (openBlock(), createElementBlock("div", B, [
      renderSlot(t.$slots, "prefix"),
      createElementVNode("div", {
        class: "result",
        innerHTML: e.value
      }, null, 8, L),
      renderSlot(t.$slots, "suffix")
    ]));
  }
});
const _sfc_main$2 = {
  __name: "Text",
  __ssrInlineRender: true,
  setup(__props) {
    const { t, tm } = useI18n();
    const homeVueTyper = tm("home.vueTyper");
    const vueTyper = homeVueTyper.map((item) => item.loc.source);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "home-content d-flex flex-column justify-content-center align-items-center" }, _attrs))}><div class="home-content-text"><h1 class="text homeTitle uppercase white d-flex flex-column flex-xl-row justify-content-center align-items-center">${ssrInterpolate(_ctx.$t("home.mainText"))}<span class="text homeTitle uppercase white">c\xE1ssio spessatto</span></h1></div>`);
      _push(ssrRenderComponent(unref(E), {
        class: "text homeSubTitle white",
        data: unref(vueTyper),
        handlerNum: 500,
        typeSpeed: 90,
        typeSpeedLine: 100,
        back: true,
        backSpeed: 60,
        cursorChar: "|"
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/Text.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$2;
const _sfc_main$1 = {
  __name: "ParticlesBackground",
  __ssrInlineRender: true,
  setup(__props) {
    themeColor();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "particles-background" }, _attrs))}></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/ParticlesBackground.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$1;
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_HomeText = __nuxt_component_0;
  const _component_HomeParticlesBackground = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "pages home-page" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_HomeText, null, null, _parent));
  _push(ssrRenderComponent(_component_HomeParticlesBackground, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-a380cacd.mjs.map
