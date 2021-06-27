<template>
  <SignForm>
    <BaseInput
      id="email-fieled"
      v-validate="'required|email'"
      type="email"
      label="이메일"
      placeholder="example@naver.com"
      autocomplete="new-password"
      v-model="email"
      :error="errors.first('이메일')"
    />
    <BaseInput
      v-validate="'required|min:2'"
      type="text"
      label="닉네임"
      placeholder="잉스터"
      autocomplete="new-password"
      v-model="nickname"
      :error="errors.first('닉네임')"
    />
    <BaseInput
      v-validate="'required|min:8'"
      label="비밀번호"
      type="password"
      placeholder="********"
      autocomplete="new-password"
      v-model="password1"
      :error="errors.first('비밀번호')"
      ref="password"
    />
    <BaseInput
      v-validate="'required|confirmed:password'"
      label="비밀번호 확인"
      type="password"
      placeholder="********"
      autocomplete="new-password"
      v-model="password2"
      :error="errors.first('비밀번호 확인')"
    />
    <button class="sign-in-btn sign-up-btn" @click.prevent="signup">
      가입하기
    </button>
    <hr class="separating-line" />
    <SocialLoginGroup />
  </SignForm>
</template>
<script>
import SignForm from "../components/SignForm.vue";
import BaseInput from "../components/BaseInput.vue";
import SocialLoginGroup from "../components/SocialLoginGroup.vue";
import { mapActions } from "vuex";

export default {
  layout: "center-with-logo",
  data() {
    return {
      email: "",
      nickname: "",
      password1: "",
      password2: ""
    };
  },
  components: {
    SignForm,
    BaseInput,
    SocialLoginGroup
  },
  mounted() {
    let emailField = document.querySelector("#email-fieled");
    emailField.focus();
  },
  methods: {
    ...mapActions("user", ["SIGNUP"]),
    ...mapActions("common", ["ADD_ALERT"]),
    async signup() {
      const validated = await this.$validator.validateAll();
      if (!validated) {
        this.ADD_ALERT({
          msg: "올바른 형식의 정보를 입력해주세요.",
          type: "error"
        });
        return;
      }
      try {
        await this.SIGNUP({
          email: this.email,
          nickname: this.nickname,
          password: this.password1
        });
        this.$router.replace("/");
      } catch (error) {
        if (error.response.data.message === "User already exists") {
          this.ADD_ALERT({
            msg: "같은 이메일 또는 닉네임이 이미 존재합니다.",
            type: "error"
          });
        } else {
          this.ADD_ALERT({
            msg: "회원가입에 문제가 발생했습니다.",
            type: "error"
          });
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~utils";
.sign-up-btn {
  margin-top: 1.6rem;
  @include colored-button($black);
}
</style>
