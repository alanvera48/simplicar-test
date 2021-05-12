export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "simplicar-test-Alan",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
            {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@800&family=Roboto:ital,wght@1,900&display=swap',
        href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css',
      }

    ]
  },


  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/style.css',],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~/plugins/axios.js", "~/plugins/bootstrap.js"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  loadingIndicator: {
    name: 'circle',
    color: '#3B8070',
    background: 'white'
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    [
      "@nuxtjs/fontawesome",
      {
        component: 'Fa',
      }
    ]
  ],
  fontawesome: {
    component: 'fa',
    suffix: true,
    icons: {
      solid: true ,
      brands:  [
        'faGithub',
        'faFontAwesome',
        'faWpforms',
        'faFacebook',
        'faInstagram',
        'faYoutube',
        'faTwitter',
        'faPaypal',
      ],
    }
  },
  
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "bootstrap-vue/nuxt",
    "@nuxtjs/axios",
    "@nuxtjs/fontawesome"
  ],

  bootstrapVue: {
    icons: true
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
