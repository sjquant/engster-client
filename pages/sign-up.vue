<template>
  <SignForm>
    <BaseInput
      id="email-fieled"
      validate="required|email"
      type="email"
      label="이메일"
      placeholder="example@naver.com"
      autocomplete="new-password"
      v-model="email"
    />
    <BaseInput
      validate="required"
      type="nickname"
      label="닉네임"
      placeholder="잉스터"
      autocomplete="new-password"
      v-model="nickname"
    />
    <BaseInput
      validate="required|min:8"
      label="비밀번호"
      type="password"
      placeholder="********"
      autocomplete="new-password"
      v-model="password1"
    />
    <BaseInput
      validate="required"
      label="비밀번호 확인"
      type="password"
      placeholder="********"
      autocomplete="new-password"
      v-model="password2"
    />
    <button class="sign-in-btn sign-up-btn" @click.prevent="signup">
      가입하기
    </button>
    <hr class="separating-line" />
    <SocialLoginGroup />
  </SignForm>
</template>
<script>
import SignForm from "../components/sign/SignForm.vue";
import BaseInput from "../components/common/BaseInput.vue";
import SocialLoginGroup from "../components/sign/SocialLoginGroup.vue";
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
    async signup() {
      let validated = await this.$validator.validateAll();
      if (validated) {
        this.SIGNUP({
          email: this.email,
          nickname: this.nickname,
          password: this.password1
        }).then(() => {
          this.$router.replace("/");
        });
      } else {
        console.log("Validation Failed");
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
