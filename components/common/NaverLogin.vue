<template>
  <button class="naver-login-btn" @click.prevent="socialSignin('naver')">
    <div>
      <img src="../../assets/images/naver.svg" />
      <span>네이버로 로그인</span>
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
.naver-login-btn {
  background-color: #00c73c;
  color: #fff;
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