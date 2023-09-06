const i18n_config = {
  locales: [
    {
      name: "English",
      code: "en",
      iso: "en",
      file: "en.js"
    },
    {
      name: "Portugu\xEAs",
      code: "pt",
      iso: "pt",
      file: "pt.js"
    },
    {
      name: "Espa\xF1ol",
      code: "es",
      iso: "es",
      file: "es.js"
    },
    {
      name: "Fran\xE7ais",
      code: "fr",
      iso: "fr",
      file: "fr.js"
    },
    {
      name: "Italiano",
      code: "it",
      iso: "it",
      file: "it.js"
    },
    {
      name: "Deutsch",
      code: "de",
      iso: "de",
      file: "de.js"
    }
  ],
  defaultLocale: "en",
  lazy: true,
  langDir: "lang/",
  strategy: "prefix_except_default"
  // vueI18n: {
  //     fallbackLocale: "en-US",
  //   },
};

export { i18n_config as default };
//# sourceMappingURL=i18n.config-a69f4905.mjs.map
