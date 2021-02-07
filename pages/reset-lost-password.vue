<template>
  <div class="reset-request-container">
    <div class="container__wrapper">
      <h1>새로운 비밀번호를 설정해주세요</h1>
      <p>8자리 이상의 새로운 비밀번호를 입력해주세요.</p>
      <BaseInput
        label="새 비밀번호"
        v-validate="'required|min:8'"
        type="password"
        placeholder="********"
        v-model="password1"
        :error="errors.first('새 비밀번호')"
        ref="password"
      />
      <BaseInput
        label="새 비밀번호 확인"
        v-validate="'required|confirmed:password'"
        type="password"
        placeholder="********"
        v-model="password2"
        :error="errors.first('새 비밀번호 확인')"
      />
      <button class="submit-btn" @click.prevent="submit">
        비밀번호 재설정
      </button>
    </div>
  </div>
</template>

<script>
import { auth } from "../api";
import BaseInput from "../components/common/BaseInput.vue";
export default {
  components: {
    BaseInput
  },
  data() {
    return {
      password1: "",
      password2: ""
    };
  },
  methods: {
    async submit() {
      const validated = await this.$validator.validateAll();
      if (!validated) return;

      const token = this.$route.query.t;
      const password = this.password1;
      try {
        await auth.resetLostPassword({ token, password });
        this.$router.push({ name: "signIn" });
      } catch (e) {
        console.error(e);
        alert("문제가 발생했습니다.");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~utils";

.reset-request-container {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 8rem;
  padding: 1.6rem;

  > .container__wrapper {
    width: 40rem;

    @include media("<=xs") {
      width: 32rem;
    }

    @include media(">=md") {
      width: 48rem;
    }
  }

  .submit-btn {
    width: 100%;
    height: 4.8rem;
    margin: 1.6rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1.6rem;
    @include colored-button($black);
  }
}
</style>
