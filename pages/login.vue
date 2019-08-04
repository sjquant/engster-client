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
        <a href="#" class="sign-up-btn">회원 가입하기</a>
      </div>
      <button class="login-btn" @click.prevent>로그인</button>
      <hr />
      <button class="google-login-btn" @click.prevent>구글로 로그인</button>
      <button class="fb-login-btn" @click.prevent>페이스북으로 로그인</button>
      <button class="naver-login-btn" @click.prevent>네이버로 로그인</button>
    </form>
  </div>
</template>
<script>
import Logo from "../components/icons/MainFullLogo";
export default {
  layout: "login",
  components: {
    Logo
  }
};
</script>

<style lang="scss" scoped>
@import "~styles/utils.scss";

.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 48rem;
  height: 40rem;
  padding-top: 4.8rem;

  .main-full-logo {
    width: 20rem;

    @include media(">=lg") {
      width: 24rem;
    }
  }
}

form.login-form {
  width: 100%;
  margin-top: 4.8rem;
  padding: 0 1.6rem;

  input {
    margin-top: 0.8rem;
    margin-bottom: 1.6rem;
    padding: 0 0.8rem;
    width: 100%;
    font-size: 1.6rem;
    line-height: 2.5;
    border: 1px solid $gray;

    &:focus {
      border-color: $gray-darkest;
    }
  }

  a {
    font-size: 1.4rem;
    color: $gray-darker;
    text-decoration: underline;
    display: block;
    &.lost-password-btn {
      float: left;
    }
    &.sign-up-btn {
      text-align: right;
    }
  }

  button {
    width: 100%;
    height: 4.8rem;
    text-align: center;
    margin: 1.6rem 0;

    &:hover {
      opacity: 0.95;
    }
  }
  hr {
    width: 100%;
    border: 0;
    margin: 1.6rem 0;
    border-bottom: 1px solid $gray-light;
  }
}

button {
  &.login-btn {
    margin-top: 1.6rem;
    background-color: $black;
    color: #fff;
  }

  &.google-login-btn {
    background-color: #fff;
    color: $black;
    border: 1px solid $gray;
  }

  &.fb-login-btn {
    background-color: #3b5998;
    color: #fff;
  }

  &.naver-login-btn {
    background-color: #00c73c;
    color: #fff;
  }
}
</style>

