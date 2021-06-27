import Vue from "vue";
import VueAuthenticate from "vue-authenticate";

import { uuid4hex } from "../utils.js";

Vue.use(VueAuthenticate, {
  withCredentials: true,
  baseUrl: process.env.BASE_URL,
  storageType: null,
  tokenPath: "token",
  providers: {
    facebook: {
      clientId: process.env.FB_CLIENT_ID,
      redirectUri: `${process.env.REDIRECT_URI}/`,
      url: "/auth/obtain-token/facebook"
    },
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      redirectUri: `${process.env.REDIRECT_URI}`,
      url: "/auth/obtain-token/google"
    },
    naver: {
      name: "naver",
      url: "/auth/obtain-token/naver",
      authorizationEndpoint: "https://nid.naver.com/oauth2.0/authorize",
      redirectUri: `${process.env.REDIRECT_URI}`,
      requiredUrlParams: ["state"],
      optionalUrlParams: [],
      state: uuid4hex(),
      clientId: process.env.NAVER_CLIENT_ID,
      display: "popup",
      oauthType: "2.0",
      popupOptions: { width: 452, height: 633 }
    }
  }
});
