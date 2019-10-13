import Vue from 'vue'
import Router from 'vue-router'

import Home from '~/pages/index.vue'
import SignUp from '~/pages/sign-up.vue'
import SignIn from '~/pages/sign-in.vue'
import SearchEnglish from '~/pages/search/english.vue'
import SearchKorean from '~/pages/search/korean.vue'
import MyPage from '~/pages/my-page.vue'
import MyPageEnglishLikes from '~/pages/my-page/english-likes.vue'
import MyPageKoreanLikes from '~/pages/my-page/korean-likes.vue'
import MyPageTranslations from '~/pages/my-page/translations.vue'

Vue.use(Router)

export function createRouter() {
    return new Router({
        mode: 'history',
        routes: [
            {
                path: '/',
                component: Home
            },
            {
                path: "/sign-up",
                component: SignUp
            },
            {
                path: "/sign-in",
                component: SignIn
            },
            {
                path: "/search/english",
                component: SearchEnglish,
                alias: "/search"
            },
            {
                path: "/search/korean",
                component: SearchKorean
            },
            {
                path: "/my-page",
                component: MyPage,
                children: [
                    {
                        path: "/my-page/english-likes",
                        component: MyPageEnglishLikes,
                        alias: "/my-page",
                    },
                    {
                        path: "/my-page/korean-likes",
                        component: MyPageKoreanLikes,
                        alias: "/my-page",
                    },
                    {
                        path: "/my-page/translations",
                        component: MyPageTranslations
                    },
                ]
            }
        ]
    })
}