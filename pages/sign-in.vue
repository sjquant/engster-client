<template>
  <div class="login-container">
    <nuxt-link to="/">
      <div class="login-logo">
        <Logo />
      </div>
    </nuxt-link>
    <form class="login-form">
      <label>이메일</label>
      <input
        id="email-fieled"
        v-validate="'required'"
        type="email"
        name="이메일"
        placeholder="example@naver.com"
        v-model="email"
      />
      <div class="error-message" v-show="errors.collect('이메일').length > 0">{{ errors.first('이메일') }}</div>
      <label>비밀번호</label>
      <input
        v-validate="'required'"
        name="비밀번호"
        type="password"
        placeholder="********"
        v-model="password"
      />
      <div
        class="error-message"
        v-show="errors.collect('비밀번호').length > 0"
      >{{ errors.first('비밀번호') }}</div>
      <div class="block-link">
        <a href="#" class="lost-password-btn">비밀번호를 잊으셨나요?</a>
        <nuxt-link to="/sign-up" class="sign-up-btn">회원 가입하기</nuxt-link>
      </div>
      <button class="login-btn" @click.prevent="signin">로그인</button>
      <hr />
      <GoogleLogin />
      <FacebookLogin />
      <NaverLogin />
    </form>
  </div>
</template>
<script>
import Logo from "../components/icons/FullLogoIcon";
import GoogleLogin from "../components/common/GoogleLogin";
import FacebookLogin from "../components/common/FacebookLogin";
import NaverLogin from "../components/common/NaverLogin";
import { mapActions } from "vuex";
export default {
  layout: "wrap-center",
  components: {
    Logo,
    GoogleLogin,
    FacebookLogin,
    NaverLogin
  },
  mounted() {
    let emailField = document.querySelector("#email-fieled");
    emailField.focus();
  },
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    ...mapActions("auth", ["SIGNIN"]),
    async signin() {
      let validated = await this.$validator.validateAll();
      if (validated) {
        this.SIGNIN({
          email: this.email,
          password: this.password
        }).then(() => {
          this.$router.push("/");
        });
      } else {
        console.log("Validation Failed");
      }
    }
  }
};
</script>