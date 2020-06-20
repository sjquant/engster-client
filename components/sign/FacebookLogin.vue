<template>
  <button class="fb-sign-in-btn sign-in-btn" @click.prevent="socialSignin('facebook')">
    <div>
      <img src="../../assets/images/facebook.svg" />
      <span>페이스북으로 로그인</span>
    </div>
  </button>
</template>
<script>
import { socialAuthMixin } from "../../mixins";

export default {
  mixins: [socialAuthMixin]
};
</script>
<style lang="scss" scoped>
@import "~utils";
.fb-sign-in-btn {
  display: flex;
  justify-content: center;
  background-color: #3b5998;
  color: #fff;

  div {
    display: flex;
    align-items: center;
  }

  span {
    padding-left: 0.8rem;
  }
}
</style>