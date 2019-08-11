<template>
  <div class="login-container">
    <nuxt-link to="/">
      <div class="login-logo">
        <logo></logo>
      </div>
    </nuxt-link>
    <form class="login-form">
      <label>이메일</label>
      <input
        v-validate="'required|email'"
        type="email"
        name="이메일"
        placeholder="example@naver.com"
        v-model="email"
      />
      <div
        class="login-error-message"
        v-show="errors.collect('이메일').length > 0"
      >{{ errors.first('이메일') }}</div>
      <label>닉네임</label>
      <input
        v-validate="'required'"
        type="nickname"
        name="닉네임"
        placeholder="잉스터"
        v-model="nickname"
      />
      <div
        class="login-error-message"
        v-show="errors.collect('닉네임').length > 0"
      >{{ errors.first('닉네임') }}</div>
      <label>비밀번호 (8자 이상)</label>
      <input
        v-validate="'required|min:8'"
        name="비밀번호"
        type="password"
        placeholder="********"
        v-model="password1"
      />
      <div
        class="login-error-message"
        v-show="errors.collect('비밀번호').length > 0"
      >{{ errors.first('비밀번호') }}</div>
      <label>비밀번호 확인</label>
      <input
        v-validate="'required'"
        name="비밀번호 확인"
        type="password"
        placeholder="********"
        v-model="password2"
      />
      <div
        class="login-error-message"
        v-show="errors.collect('비밀번호 확인').length > 0"
      >{{ errors.first('비밀번호 확인') }}</div>
      <div class="check-agree">
        <span @click="agreed=!agreed">
          <checkbox :class="agreed ? 'checkbox--checked' : 'checkbox--unchecked'"></checkbox>
        </span>
        <span>
          Engster의
          <a href="#">이용약관</a>과
          <a href="#">개인정보처리방침</a>에 동의합니다.
        </span>
      </div>
      <button class="login-btn" @click.prevent="signup">가입하기</button>
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
import { mapActions } from "vuex";

export default {
  layout: "login",
  data() {
    return {
      agreed: false,
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
  methods: {
    ...mapActions("auth", ["SIGNUP"]),
    async signup() {
      let validated = await this.$validator.validateAll();
      if (validated && this.agreed) {
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

<style lang="scss">
.check-agree {
  display: flex;
  align-items: center;
  margin: 0.8rem 0;

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
