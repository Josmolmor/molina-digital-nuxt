// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
  },
  compatibilityDate: '2024-04-03',
  components: {
    global: true,
    dirs: ['~/components'],
  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.css', '~/assets/css/tooltip.css'],
  plugins: ['~/plugins/tooltip.ts'],
  modules: ['@nuxtjs/color-mode', '@nuxtjs/i18n', '@nuxt/fonts'],
  i18n: {
    baseUrl: 'https://my-nuxt-app.com',
    locales: [
      {
        code: 'en',
        file: 'en-US.json',
      },
      {
        code: 'es',
        file: 'es-ES.json',
      },
    ],
    lazy: false,
    langDir: 'lang',
    defaultLocale: 'en',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root', // recommended
    },
    compilation: {
      strictMessage: false,
    },
  },
  fonts: {
    defaults: {
      weights: [400, 500, 600, 700, 800, 900],
      styles: ['normal', 'italic'],
      subsets: ['latin-ext', 'latin'],
    },
  },
});
