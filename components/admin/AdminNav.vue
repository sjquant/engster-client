<template>
  <nav class="admin-nav">
    <nuxt-link to="/admin/add-subtitle" class="nav-menu" :class="{active: isSubtitleAdd}">자막 추가</nuxt-link>
    <nuxt-link
      to="/admin/add-translations"
      class="nav-menu"
      :class="{active: isTranslationsAdd}"
    >번역 추가</nuxt-link>
    <nuxt-link
      to="/admin/add-main-content"
      class="nav-menu"
      :class="{active: isMainContentAdd}"
    >메인콘텐츠 추가</nuxt-link>
  </nav>
</template>

<script>
export default {
  computed: {
    isSubtitleAdd() {
      let re = /(^\/admin\/?$)|(^\/admin\/add-subtitle\/?$)/g;
      return this.$route.path.match(re);
    },
    isTranslationsAdd() {
      let re = /^\/admin\/add-translations\/?$/g;
      return this.$route.path.match(re);
    },
    isMainContentAdd() {
      let re = /^\/admin\/add-main-content\/?$/g;
      return this.$route.path.match(re);
    }
  }
};
</script>

<style lang="scss">
@import "~utils";
nav.admin-nav {
  display: flex;
  width: 100%;
  justify-content: flex-start;
  margin-bottom: 1.6rem;

  .nav-menu {
    min-width: 9.6rem;
    margin-top: -1px;
    padding-top: 0.8rem;
    padding-left: 1.6rem;
    padding-right: 1.6rem;
    margin-right: 0.4rem;
    font-weight: 700;
    text-align: center;
    cursor: pointer;
    color: $gray-dark;

    &.active {
      color: $gray-darker;
    }
  }
}
</style>