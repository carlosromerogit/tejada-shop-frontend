// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxtjs/strapi"],
  icon: {
    size: "24px",
  },
strapi:{
  url: process.env.STRAPI_URL || 'http://localhost:1337',
  prefix: '/api',
  admin: '/admin',
  version: 'v5',
  cookie: {},
  cookieName: 'strapi_jwt'
}
});