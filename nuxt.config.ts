// https://nuxt.com/docs/api/configuration/nuxt-config

export default {
    modules: [
      '@nuxtjs/strapi',
    ],
    strapi: {
      url: process.env.STRAPI_URL || 'https://hammerhead-app-ik4w8.ondigitalocean.app/',
      prefix: '/api',
      version: 'v4',
      cookie: {},
      cookieName: 'strapi_jwt',
    },
}
