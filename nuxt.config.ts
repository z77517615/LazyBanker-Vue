// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    typeCheck: true
  },
  modules: [
    '@nuxt/eslint',
  ],
  devtools: { enabled: false },
  compatibilityDate: '2024-04-03',
});
