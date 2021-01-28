import Vue from "vue";
import VueAuthenticate from "vue-authenticate";

Vue.use(VueAuthenticate, {
  withCredentials: true,
  baseUrl: process.env.BASE_URL,
  storageType: null,
  tokenPath: "token",
  providers: {
    facebook: {
      clientId: process.env.FB_CLIENT_ID,
      redirectUri: `${location.protocol}//${location.host}/`,
      url: "/auth/obtain-token/facebook"
    },
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      redirectUri: `${location.protocol}//${location.host}`,
      url: "/auth/obtain-token/google"
    },
    naver: {
      name: "naver",
      url: "/auth/obtain-token/naver",
      authorizationEndpoint: "https://nid.naver.com/oauth2.0/authorize",
      redirectUri: `${location.protocol}//${location.host}`,
      requiredUrlParams: ["state"],
      optionalUrlParams: [],
      state: "STATE",
      clientId: process.env.NAVER_CLIENT_ID,
      display: "popup",
      oauthType: "2.0",
      popupOptions: { width: 452, height: 633 }
    }
  }
});
