const path = require("path");

module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: "Engster",
    meta: [
      {
        charset: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content: "Learn Real English with Engster!"
      }
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico"
      }
    ]
  },
  modules: [
    [
      "@nuxtjs/dotenv",
      {
        filename:
          process.env.NODE_ENV !== "production"
            ? ".env.development"
            : ".env.production"
      }
    ]
  ],
  buildModules: [
    // With options
    [
      "@nuxtjs/router",
      {
        /* module options */
      }
    ]
  ],
  css: ["@/assets/scss/main.scss"],
  loading: {
    color: "#3B8070"
  },
  router: {
    middleware: ["auth", "scroll"]
  },
  /*
   ** Build configuration
   */
  build: {
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
      config.resolve.alias["~utils"] = path.join(
        __dirname,
        "assets/scss/utils.scss"
      );
    }
  },
  plugins: [
    { src: "~plugins/time-ago" },
    { src: "~plugins/vee-validate" },
    { src: "~plugins/v-click-outside" },
    { src: "~plugins/infinite-scroll", mode: "client" },
    { src: "~plugins/nuxt-client-init", mode: "client" },
    { src: "~plugins/vue-js-modal", mode: "client" },
    { src: "~plugins/vue-axios", mode: "client" },
    { src: "~plugins/vue-authenticate", mode: "client" }
  ]
};
