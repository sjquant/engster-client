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
        alias: "/"
      },
      {
        path: "/sign-up",
        component: () => import("~/pages/sign-up.vue").then(m => m.default || m)
      },
      {
        path: "/sign-in",
        component: () => import("~/pages/sign-in.vue").then(m => m.default || m)
      },
      {
        path: "/search/english",
        component: () =>
          import("~/pages/search/english.vue").then(m => m.default || m),
        alias: "/search"
      },
      {
        path: "/search/korean",
        component: () =>
          import("~/pages/search/korean.vue").then(m => m.default || m)
      },
      {
        path: "/my-page",
        component: () =>
          import("~/pages/my-page.vue").then(m => m.default || m),
        children: [
          {
            path: "/my-page/english-likes",
            component: () =>
              import("~/pages/my-page/english-likes.vue").then(
                m => m.default || m
              ),
            alias: "/my-page"
          },
          {
            path: "/my-page/korean-likes",
            component: () =>
              import("~/pages/my-page/korean-likes.vue").then(
                m => m.default || m
              )
          },
          {
            path: "/my-page/translations",
            component: () =>
              import("~/pages/my-page/translations.vue").then(
                m => m.default || m
              )
          }
        ]
      },
      {
        path: "/my-page/edit",
        component: () =>
          import("~/pages/my-page/profile-edit.vue").then(m => m.default || m)
      }
    ]
  });
}
