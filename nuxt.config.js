export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: '绘图工具',
    meta: [{
      charset: 'utf-8'
    }, {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    }, ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }, {
      rel: 'stylesheet',
      // href: '//at.alicdn.com/t/font_1113798_0532l8oa6jqp.css'
      href: '//at.alicdn.com/t/font_1113798_nklzr6lk7z.css' // add ECharts
    }, {
      rel: 'stylesheet',
      href: '//at.alicdn.com/t/font_1331132_5lvbai88wkb.css'
    }, {
      rel: 'stylesheet',
      href: '//at.alicdn.com/t/font_1824992_v1hzwql6m09.css'
    }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },
  /*
   ** Global CSS
   */
  css: ['element-ui/lib/theme-chalk/index.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{
    src: '@/plugins/element-ui',
    ssr: false,
  }, {
    src: '@/plugins/axios',
    ssr: false,
  }],
  parserOptions: {},
  extends: ['@nuxtjs'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'error'
  },
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    'cookie-universal-nuxt'
  ],
  router: {
    base: '/',
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    proxy: true
  },
  proxy: {
    '/api/': 'http://topology.le5le.com/',
    '/image/': 'http://topology.le5le.com/'
  },
  /*
   ** Build configuration
   */
  build: {
    transpile: [/^element-ui/],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}