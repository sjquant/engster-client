<template>
  <SignForm>
    <BaseInput
      ref="emailInput"
      v-validate="'required|email'"
      label="이메일"
      type="email"
      placeholder="example@naver.com"
      v-model="email"
      :error="errors.first('이메일')"
    />
    <BaseInput
      label="비밀번호"
      v-validate="'required|min:8'"
      type="password"
      placeholder="********"
      v-model="password"
      :error="errors.first('비밀번호')"
    />
    <div class="block-link">
      <nuxt-link to="/reset-lost-password/request" class="lost-password-btn"
        >비밀번호를 잊으셨나요?</nuxt-link
      >
      <nuxt-link to="/sign-up" class="sign-up-btn">회원 가입하기</nuxt-link>
    </div>
    <button class="sign-in-btn" @click.prevent="signin">로그인</button>
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
  layout: "center-with-logo",
  components: {
    SignForm,
    BaseInput,
    SocialLoginGroup
  },
  mounted() {
    let emailInput = this.$refs.emailInput.$refs.input;
    emailInput.focus();
  },
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    ...mapActions("user", ["SIGNIN"]),
    ...mapActions("common", ["ADD_ALERT"]),
    async signin() {
      const validated = await this.$validator.validateAll();
      if (!validated) {
        this.ADD_ALERT({
          msg: "올바른 이메일 또는 비밀번호를 입력해주세요.",
          type: "error"
        });
        return;
      }
      try {
        await this.SIGNIN({
          email: this.email,
          password: this.password
        });
        this.$router.replace("/");
      } catch (_) {
        this.ADD_ALERT({
          msg: "이메일 또는 비밀번호를 확인해주세요.",
          type: "error"
        });
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@import "~utils";

.block-link {
  a {
    display: block;
    font-size: 1.4rem;
    color: $gray-darker;
    text-decoration: underline;
  }

  a.lost-password-btn {
    float: left;
  }
  a.sign-up-btn {
    text-align: right;
  }
}

.sign-in-btn {
  margin-top: 1.6rem;
  @include colored-button($black);
}
</style>
