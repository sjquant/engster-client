import Vue from 'vue'
import VueAxios from 'vue-axios'
import VueAuthenticate from 'vue-authenticate'
import axios from 'axios';

Vue.use(VueAxios, axios)
Vue.use(VueAuthenticate, {
    tokenType: "JWT",
    storageType: "cookieStorage",
    baseUrl: process.env.BASE_URL,
    providers: {
        facebook: {
            clientId: process.env.FB_KEY,
            redirectUri: process.env.VUE_APP_CLIENT_URL,
            url: "/auth/facebook"
        },
        google: {
            clientId: process.env.GOOGLE_KEY,
            redirectUri: process.env.VUE_APP_CLIENT_URL,
            url: "/auth/google"
        }
    })