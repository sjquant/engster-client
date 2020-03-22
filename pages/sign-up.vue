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
        v-validate="'required|email'"
        type="email"
        name="이메일"
        placeholder="example@naver.com"
        v-model="email"
        autocomplete="new-password"
      />
      <div class="error-message" v-show="errors.collect('이메일').length > 0">{{ errors.first('이메일') }}</div>
      <label>닉네임</label>
      <input
        v-validate="'required'"
        type="nickname"
        name="닉네임"
        placeholder="잉스터"
        v-model="nickname"
        autocomplete="new-password"
      />
      <div class="error-message" v-show="errors.collect('닉네임').length > 0">{{ errors.first('닉네임') }}</div>
      <label>비밀번호 (8자 이상)</label>
      <input
        v-validate="'required|min:8'"
        name="비밀번호"
        type="password"
        placeholder="********"
        v-model="password1"
        autocomplete="new-password"
      />
      <div
        class="error-message"
        v-show="errors.collect('비밀번호').length > 0"
      >{{ errors.first('비밀번호') }}</div>
      <label>비밀번호 확인</label>
      <input
        v-validate="'required'"
        name="비밀번호 확인"
        type="password"
        placeholder="********"
        v-model="password2"
        autocomplete="new-password"
      />
      <div
        class="error-message"
        v-show="errors.collect('비밀번호 확인').length > 0"
      >{{ errors.first('비밀번호 확인') }}</div>
      <button class="login-btn" @click.prevent="signup">가입하기</button>
      <hr />
      <GoogleLogin />
      <FacebookLogin />
      <NaverLogin />
    </form>
  </div>
</template>
<script>
import Logo from "../components/icons/MainFullLogo";
import Checkbox from "../components/icons/Checkbox";
import GoogleLogin from "../components/common/GoogleLogin";
import FacebookLogin from "../components/common/FacebookLogin";
import NaverLogin from "../components/common/NaverLogin";
import { mapActions } from "vuex";

export default {
  layout: "wrap-center",
  data() {
    return {
      email: "",
      nickname: "",
      password1: "",
      password2: ""
    };
  },
  components: {
    Logo,
    Checkbox,
    GoogleLogin,
    FacebookLogin,
    NaverLogin
  },
  mounted() {
    let emailField = document.querySelector("#email-fieled");
    emailField.focus();
  },
  methods: {
    ...mapActions("auth", ["SIGNUP"]),
    async signup() {
      let validated = await this.$validator.validateAll();
      if (validated) {
        this.SIGNUP({
          email: this.email,
          nickname: this.nickname,
          password: this.password1
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
