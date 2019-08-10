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
      <label>비밀번호</label>
      <input type="password" placeholder="********" />
      <div>
        <a href="#" class="lost-password-btn">비밀번호를 잊으셨나요?</a>
        <nuxt-link to="/sign-up">
          <a href="#" class="sign-up-btn">회원 가입하기</a>
        </nuxt-link>
      </div>
      <button class="login-btn" @click.prevent>로그인</button>
      <hr />
      <google-login></google-login>
      <facebook-login></facebook-login>
      <naver-login></naver-login>
    </form>
  </div>
</template>
<script>
import Logo from "../components/icons/MainFullLogo";
import GoogleLogin from "../components/common/GoogleLogin";
import FacebookLogin from "../components/common/FacebookLogin";
import NaverLogin from "../components/common/NaverLogin";
export default {
  layout: "login",
  components: {
    Logo,
    GoogleLogin,
    FacebookLogin,
    NaverLogin
  }
};
</script>