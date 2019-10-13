<template>
  <nav class="my-page-nav">
    <nuxt-link
      to="/my-page/english-likes"
      class="nav-menu"
      :class="{active: isEnglishActive}"
    >좋아요(영어)</nuxt-link>
    <nuxt-link to="/my-page/korean-likes" class="nav-menu" :class="{active: isKoreanActive}">좋아요(번역)</nuxt-link>
    <nuxt-link
      to="/my-page/translations"
      class="nav-menu"
      :class="{active: $route.path === '/my-page/translations'}"
    >번역</nuxt-link>
  </nav>
</template>

<script>
export default {
  computed: {
    isEnglishActive() {
      let re = /(^\/my-page\/?$)|(^\/my-page\/english-likes\/?$)/g;
      return this.$route.path.match(re);
    },
    isKoreanActive() {
      let re = /^\/my-page\/korean-likes\/?$/g;
      return this.$route.path.match(re);
    }
  }
};
</script>

<style lang="scss">
@import "~utils";
nav.my-page-nav {
  display: flex;
  width: 100%;
  justify-content: flex-start;
  margin-bottom: 1.6rem;

  .nav-menu {
    margin-top: -1px;
    padding-top: 0.8rem;
    padding-left: 1.6rem;
    padding-right: 1.6rem;
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