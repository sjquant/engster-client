<template>
  <SignForm>
    <BaseInput
      ref="emailInput"
      label="이메일"
      validate="required"
      type="email"
      placeholder="example@naver.com"
      v-model="email"
    />
    <BaseInput
      label="비밀번호"
      validate="required"
      type="password"
      placeholder="********"
      v-model="password"
    />
    <div class="block-link">
      <a href="#" class="lost-password-btn">비밀번호를 잊으셨나요?</a>
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
  layout: "wrap-center",
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