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
          import("~/pages/main-page.vue").then(m => m.default || m),
        name: "mainPage",
        alias: "/"
      },
      {
        path: "/sign-up",
        component: () =>
          import("~/pages/sign-up.vue").then(m => m.default || m),
        name: "signUp"
      },
      {
        path: "/sign-in",
        component: () =>
          import("~/pages/sign-in.vue").then(m => m.default || m),
        name: "signIn"
      },
      {
        path: "/search/english",
        component: () =>
          import("~/pages/search/english.vue").then(m => m.default || m),
        name: "search-english",
        alias: "/search"
      },
      {
        path: "/search/korean",
        component: () =>
          import("~/pages/search/korean.vue").then(m => m.default || m),
        name: "serachKorean"
      },
      {
        path: "/my-page/:userid",
        component: () =>
          import("~/pages/my-page.vue").then(m => m.default || m),
        children: [
          {
            path: "/my-page/:userid/english-likes",
            component: () =>
              import("~/pages/my-page/english-likes.vue").then(
                m => m.default || m
              ),
            name: "mypage-englishLikes",
            alias: "/my-page/:userid"
          },
          {
            path: "/my-page/:userid/korean-likes",
            component: () =>
              import("~/pages/my-page/korean-likes.vue").then(
                m => m.default || m
              ),
            name: "mypage-koreanLikes"
          },
          {
            path: "/my-page/:userid/translations",
            component: () =>
              import("~/pages/my-page/translations.vue").then(
                m => m.default || m
              ),
            name: "mypage-translations"
          }
        ]
      },
      {
        path: "/my-page/:userid/edit",
        component: () =>
          import("~/pages/my-page/profile-edit.vue").then(m => m.default || m),
        name: "mypage-profileEdit"
      }
    ]
  });
}
