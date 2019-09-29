<template>
  <nav class="my-page-nav">
    <nuxt-link
      to="/my-page/likes"
      class="nav-menu"
      :class="{active: $route.path === '/my-page/likes'}"
    >좋아요</nuxt-link>
    <nuxt-link
      to="/my-page/translations"
      class="nav-menu"
      :class="{active: $route.path === '/my-page/translations'}"
    >번역</nuxt-link>
  </nav>
</template>

<style lang="scss">
@import "~utils";
nav.my-page-nav {
  display: flex;
  width: 100%;
  justify-content: flex-start;

  .nav-menu {
    margin-top: -1px;
    padding-top: 0.8rem;
    padding-left: 0.8rem;
    padding-right: 0.8rem;
    margin-right: 5.6rem;
    font-weight: 700;
    cursor: pointer;
    color: $gray-dark;

    &.active {
      border-top: $gray-darker solid 1px;
      color: $gray-darker;
    }
  }
}
</style>