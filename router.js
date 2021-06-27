import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export function createRouter() {
  return new Router({
    mode: "history",
    routes: [
      {
        path: "/main-page",
        component: () =>
          import("./pages/main-page.vue").then(m => m.default || m),
        name: "mainPage",
        alias: "/"
      },
      {
        path: "/sign-up",
        component: () =>
          import("./pages/sign-up.vue").then(m => m.default || m),
        name: "signUp"
      },
      {
        path: "/sign-in",
        component: () =>
          import("./pages/sign-in.vue").then(m => m.default || m),
        name: "signIn"
      },
      {
        path: "/reset-lost-password",
        component: () =>
          import("./pages/reset-lost-password.vue").then(m => m.default || m),
        name: "resetLostPassword"
      },
      {
        path: "/reset-lost-password/request",
        component: () =>
          import("./pages/reset-lost-password-request.vue").then(
            m => m.default || m
          ),
        name: "resetLostPasswordRequest"
      },
      {
        path: "/search/subtitle",
        component: () =>
          import("./pages/search/subtitle.vue").then(m => m.default || m),
        name: "search-subtitle",
        alias: "/search"
      },
      {
        path: "/search/translation",
        component: () =>
          import("./pages/search/translation.vue").then(m => m.default || m),
        name: "serachTranslation"
      },
      {
        path: "/my-page/:userid",
        component: () =>
          import("./pages/my-page.vue").then(m => m.default || m),
        children: [
          {
            path: "/my-page/:userid/subtitles/liked",
            component: () =>
              import("./pages/my-page/liked-subtitles.vue").then(
                m => m.default || m
              ),
            name: "mypage-subtitleLikes",
            alias: "/my-page/:userid"
          },
          {
            path: "/my-page/:userid/translations/liked",
            component: () =>
              import("./pages/my-page/liked-translations.vue").then(
                m => m.default || m
              ),
            name: "mypage-translationLikes"
          },
          {
            path: "/my-page/:userid/translations/written",
            component: () =>
              import("./pages/my-page/written-translations.vue").then(
                m => m.default || m
              ),
            name: "mypage-translations"
          }
        ]
      },
      {
        path: "/my-page/:userid/edit",
        component: () =>
          import("./pages/my-page/profile-edit.vue").then(m => m.default || m),
        name: "mypage-profileEdit"
      },
      {
        path: "/privacy/",
        component: () =>
          import("./pages/privacy.vue").then(m => m.default || m),
        name: "privacy"
      },
      {
        path: "/service-terms/",
        component: () =>
          import("./pages/service-terms.vue").then(m => m.default || m),
        name: "service-terms"
      },
      {
        path: "/oauth/",
        component: () => import("./pages/oauth.vue").then(m => m.default || m),
        name: "oauth"
      }
    ]
  });
}
