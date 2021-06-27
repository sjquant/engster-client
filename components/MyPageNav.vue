<template>
  <nav class="my-page-nav">
    <a
      class="nav-menu"
      :class="{ active: $route.name == 'mypage-subtitleLikes' }"
      @click="route('mypage-subtitleLikes')"
      >좋아요(영어)</a
    >
    <a
      class="nav-menu"
      :class="{ active: $route.name == 'mypage-translationLikes' }"
      @click="route('mypage-translationLikes')"
      >좋아요(번역)</a
    >
    <a
      class="nav-menu"
      :class="{ active: $route.name == 'mypage-translations' }"
      @click="route('mypage-translations')"
      >번역</a
    >
  </nav>
</template>

<script>
export default {
  methods: {
    route(name) {
      const userid = this.$route.params.userid;
      this.$router.push({ name: name, params: { userid } });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~utils";
nav.my-page-nav {
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
      border-top: $gray-darker solid 1px;
      color: $gray-darker;
    }
  }
}
</style>
