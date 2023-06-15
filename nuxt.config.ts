// https://nuxt.com/docs/api/configuration/nuxt-config

export default {
    modules: [
      '@nuxtjs/strapi',
    ],
    strapi: {
      url: 'https://strapii-vrrush.onrender.com',
      prefix: '/api',
      version: 'v4',
      cookie: {},
      cookieName: 'strapi_jwt',
    },
}
