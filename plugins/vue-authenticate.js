import Vue from 'vue'
import VueAxios from 'vue-axios'
import VueAuthenticate from 'vue-authenticate'
import axios from "./axios";

Vue.use(VueAxios, axios)
Vue.use(VueAuthenticate, {
    tokenType: "Bearer",
    storageType: "localStorage",
    baseUrl: process.env.BASE_URL,
    providers: {
        facebook: {
            clientId: process.env.FB_CLIENT_ID,
            redirectUri: `${process.env.CLIENT_URL}/`,
            url: "/auth/obtain-token/facebook"
        },
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID,
            redirectUri: process.env.CLIENT_URL,
            url: "/auth/obtain-token/google"
        },
        naver: {
            name: 'naver',
            url: '/auth/obtain-token/naver',
            authorizationEndpoint: 'https://nid.naver.com/oauth2.0/authorize',
            redirectUri: process.env.CLIENT_URL,
            requiredUrlParams: ['state'],
            optionalUrlParams: [],
            state: "STATE",
            clientId: process.env.NAVER_CLIENT_ID,
            display: 'popup',
            oauthType: '2.0',
            popupOptions: { width: 452, height: 633 },

        },
    }
})