// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Jose M Molina – Sr. Software Engineer', // Adjust this to your preferred title
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Jose M Molina, Sr. Software Engineer specialized in modern Front-end web development technologies',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Jose M Molina – Sr. Software Engineer',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Visit my portfolio and learn more about my work.',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://molina.digital',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: '~/assets/img/meta-img.jpg',
        }, // Add an optimized image path for previews
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        // { name: 'twitter:site', content: '@YourTwitterHandle' }, // Optional, if you want to include your Twitter handle
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'Jose M Molina – Sr. Software Engineer',
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: 'Jose M Molina.',
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: '~/assets/img/meta-img.jpg',
        }, // Same image as OG
        { property: 'og:type', content: 'website' },
        {
          property: 'og:title',
          content: 'Jose M Molina',
        },
        {
          property: 'og:description',
          content: 'Visit my portfolio to learn more about my work.',
        },
        {
          property: 'og:image',
          content: 'https://molina.digital/og-image.png',
        }, // Update with your image
        { property: 'og:url', content: 'https://molina.digital' },
      ],
      link: [{ rel: 'canonical', href: 'https://molina.digital' }],
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
  modules: ['@nuxtjs/color-mode', '@nuxtjs/i18n', '@nuxt/fonts', '@nuxtjs/seo', '@nuxtjs/sitemap', '@nuxtjs/robots', '@nuxt/image'],
  i18n: {
    baseUrl: 'https://molina.digital',
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
  sitemap: {
    hostname: 'https://molina.digital',
  },
});