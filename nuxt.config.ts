// https://nuxt.com/docs/api/configuration/nuxt-config

import i18nConfig from './i18n.config'

export default defineNuxtConfig({
    // Global page headers: https://go.nuxtjs.dev/config-head
    app: {
        head: {
            title: 'Base Project',
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
        },
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ['bootstrap/dist/css/bootstrap.min.css', '~/assets/scss/style.scss'],

    devtools: { enabled: false },

    modules: ['@pinia/nuxt', '@nuxtjs/i18n'],

    imports: {
        dirs: ['./stores'],
    },

    pinia: {
        autoImports: ['defineStore', 'acceptHMRUpdate'],
    },
    i18n: i18nConfig,
    // i18n: {
    //     locales: [
    //         {
    //             name: 'English',
    //             code: 'en',
    //             iso: 'en',
    //             file: 'en.js',
    //         },
    //         {
    //             name: 'Português',
    //             code: 'pt',
    //             iso: 'pt',
    //             file: 'pt.js',
    //         },
    //         {
    //             name: 'Español',
    //             code: 'es',
    //             iso: 'es',
    //             file: 'es.js',
    //         },
    //         {
    //             name: 'Français',
    //             code: 'fr',
    //             iso: 'fr',
    //             file: 'fr.js',
    //         },
    //         {
    //             name: 'Italiano',
    //             code: 'it',
    //             iso: 'it',
    //             file: 'it.js',
    //         },
    //         {
    //             name: 'Deutsch',
    //             code: 'de',
    //             iso: 'de',
    //             file: 'de.js',
    //         },
    //     ],
    //     defaultLocale: 'en',
    //     lazy: true,
    //     langDir: 'lang/',
    //     strategy: 'prefix_except_default',
    //     // vueI18n: {
    //     //     fallbackLocale: "en-US",
    //     //   },
    // },
})
