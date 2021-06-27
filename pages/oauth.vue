<template>
  <div>
    <H1>소셜 로그인을 진행중입니다...</H1>
    <button class="redirect-to-home-btn" @click="routeToHome">
      홈으로
    </button>
  </div>
</template>

<script>
export default {
  layout: "center-without-logo",
  methods: {
    routeToHome() {
      this.$router.replace("/");
    }
  }
};
</script>
<style lang="scss">
@import "~utils";

.redirect-to-home-btn {
  margin-top: 1.6rem;
  @include colored-button($black);
}
</style>
