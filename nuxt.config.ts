// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-10-11",
  devtools: { enabled: false },
  plugins: ["~/plugins/setDirection.ts"],

  css: [
    "~/assets/css/tailwind.css",
    "~/assets/css/colors.css",
    "material-design-icons-iconfont/dist/material-design-icons.css",
    "@mdi/font/css/materialdesignicons.min.css",
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ["@nuxtjs/i18n"],
  i18n: {
    lazy: false,
    langDir: "locales",
    strategy: "no_prefix",
    locales: [
      {
        code: "ar",
        language: "ar",
        name: "Arabic",
        file: "ar.json",
      },
      {
        code: "en",
        language: "en-US",
        name: "English(US)",
        file: "en.json",
      },
    ],
    defaultLocale: "ar",
    detectBrowserLanguage: {
      useCookie: true, // Store the user's language preference in a cookie
      cookieKey: "i18n_redirected", // The name of the cookie
      alwaysRedirect: true, // Always redirect to the user's preferred language
      fallbackLocale: "ar", // Fallback if the browser language is not supported
    },
  },
});
