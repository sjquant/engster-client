const path = require("path");

module.exports = {
  server: {
    host: "0.0.0.0",
    port: "8080"
  },
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
        content:
          "실제 영화/미드에서 사용하는 영어. Engster와 함께 진짜 영어를 배워봅시다."
      },
      {
        hid: "og:type",
        name: "og:type",
        content: "website"
      },
      {
        hid: "og:title",
        name: "og:title",
        content: "Engster"
      },
      {
        hid: "og:description",
        name: "og:description",
        content:
          "실제 영화/미드에서 사용하는 영어. Engster와 함께 진짜 영어를 배워봅시다."
      },
      {
        hid: "og:image",
        name: "og:image",
        content: "/full-logo.png"
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
    ],
    ["@nuxtjs/google-gtag", { id: "G-K48K4MC3QJ" }]
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
    },
    babel: {
      plugins: ["@babel/plugin-proposal-optional-chaining"]
    }
  },
  plugins: [
    { src: "~plugins/vee-validate" },
    { src: "~plugins/v-click-outside" },
    { src: "~plugins/portal-vue" },
    { src: "~plugins/infinite-scroll", mode: "client" },
    { src: "~plugins/nuxt-client-init", mode: "client" },
    { src: "~plugins/vue-js-modal", mode: "client" },
    { src: "~plugins/vue-axios", mode: "client" },
    { src: "~plugins/vue-authenticate", mode: "client" }
  ]
};
