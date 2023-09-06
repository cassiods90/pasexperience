// i18n.config.js
export default {
    locales: [
        {
            name: 'English',
            code: 'en',
            iso: 'en',
            file: 'en.js',
        },
        {
            name: 'Português',
            code: 'pt',
            iso: 'pt',
            file: 'pt.js',
        },
        {
            name: 'Español',
            code: 'es',
            iso: 'es',
            file: 'es.js',
        },
        {
            name: 'Français',
            code: 'fr',
            iso: 'fr',
            file: 'fr.js',
        },
        {
            name: 'Italiano',
            code: 'it',
            iso: 'it',
            file: 'it.js',
        },
        {
            name: 'Deutsch',
            code: 'de',
            iso: 'de',
            file: 'de.js',
        },
    ],
    defaultLocale: 'en',
    lazy: true,
    langDir: 'lang/',
    strategy: 'prefix_except_default',
    // vueI18n: {
    //     fallbackLocale: "en-US",
    //   },
}
