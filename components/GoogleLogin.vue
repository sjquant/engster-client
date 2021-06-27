<template>
  <button
    class="google-sign-in-btn sign-in-btn"
    @click.prevent="socialSignin('google')"
  >
    <div>
      <img src="../assets/images/google.svg" />
      <span>구글로 로그인</span>
    </div>
  </button>
</template>
<script>
import { socialAuthMixin } from "../mixins";

export default {
  mixins: [socialAuthMixin]
};
</script>
<style lang="scss" scoped>
@import "~utils";

.google-sign-in-btn {
  background-color: #fff;
  color: $black;
  border: 1px solid $gray;
  display: flex;
  justify-content: center;

  div {
    display: flex;
    align-items: center;
  }

  span {
    padding-left: 0.8rem;
  }
}
</style>
