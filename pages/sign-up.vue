<template>
  <div class="login-container">
    <nuxt-link to="/">
      <div class="login-logo">
        <logo></logo>
      </div>
    </nuxt-link>
    <form class="login-form">
      <label>이메일</label>
      <input type="email" placeholder="example@naver.com" />
      <label>닉네임</label>
      <input type="nickname" placeholder="잉스터" />
      <label>비밀번호 (8자 이상)</label>
      <input type="password" placeholder="********" />
      <label>비밀번호 확인</label>
      <input type="password" placeholder="********" />
      <div class="check-agree">
        <span @click="agree=!agree">
          <checkbox :class="agree ? 'checkbox--checked' : 'checkbox--unchecked'"></checkbox>
        </span>
        <span>
          Engster의
          <a href="#">이용약관</a>과
          <a href="#">개인정보처리방침</a>에 동의합니다.
        </span>
      </div>
      <button class="login-btn" @click.prevent>가입하기</button>
      <hr />
      <google-login></google-login>
      <facebook-login></facebook-login>
      <naver-login></naver-login>
    </form>
  </div>
</template>
<script>
import Logo from "../components/icons/MainFullLogo";
import Checkbox from "../components/icons/Checkbox";
import GoogleLogin from "../components/common/GoogleLogin";
import FacebookLogin from "../components/common/FacebookLogin";
import NaverLogin from "../components/common/NaverLogin";

export default {
  layout: "login",
  data() {
    return {
      agree: false
    };
  },
  components: {
    Logo,
    Checkbox,
    GoogleLogin,
    FacebookLogin,
    NaverLogin
  }
};
</script>

<style lang="scss">
.check-agree {
  display: flex;
  align-items: center;

  span {
    padding-left: 0.8rem;
    line-height: 100%;
    font-size: 1.4rem;

    a {
      display: inline;
    }
  }
}
</style>