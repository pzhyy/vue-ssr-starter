module.exports = {
  mode: 'universal',

  server: {
    host: '0.0.0.0',
    port: 3002
  },

  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['@/assets/styles/index.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@/plugins/filters'],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    [
      '@nuxtjs/component-cache',
      {
        max: 1000,
        maxAge: 1000 * 60 * 15
      }
    ]
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},

  router: {
    linkActiveClass: 'router-link-active',
    linkExactActiveClass: 'router-link-exact-active',
    extendRoutes(routes, resolve) {
      routes.push(
        {
          path: '/',
          redirect: { name: 'Home' }
        },
        {
          name: 'Home',
          path: '/posts',
          component: '@/views/Home.vue'
        },
        {
          name: 'Post',
          path: '/posts/:id',
          component: '@/views/Post.vue'
        },
        {
          name: 'About',
          path: '/about',
          component: '@/views/About.vue'
        }
      )
    }
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      const { scss } = ctx.loaders

      scss.data = '@import "~/assets/styles/env.scss";'
    }
  }
}
