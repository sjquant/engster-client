const { Nuxt } = require("nuxt-start");

const config = require("./nuxt.config.js");

const nuxt = new Nuxt({ ...config, dev: false });

module.exports = (req, res) =>
  nuxt.ready().then(() => {
    console.log("Hi");
    return nuxt.server.app(req, res);
  });
