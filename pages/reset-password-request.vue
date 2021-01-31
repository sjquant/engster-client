<template>
  <div class="reset-container">
    <div class="container__wrapper">
      <h1>새로운 비밀번호를 설정해주세요</h1>
      <p>
        계정에 연결된 이메일 주소를 입력하면 암호를 재설정할 수 있는 <br />
        링크를 이메일로 보내드립니다.
      </p>
      <BaseInput
        ref="emailInput"
        label="이메일"
        validate="required"
        type="email"
        placeholder="example@naver.com"
        v-model="email"
      />
      <button class="submit-btn" @click.prevent="submit">제출하기</button>
    </div>
  </div>
</template>

<script>
import BaseInput from "../components/common/BaseInput.vue";
export default {
  components: {
    BaseInput
  },
  data() {
    return {
      email: ""
    };
  },
  methods: {
    submit() {
      alert("제출완료");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~utils";

.reset-container {
  display: flex;
  width: 100%;
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
