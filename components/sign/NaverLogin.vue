<template>
  <button
    class="naver-sign-in-btn sign-in-btn"
    @click.prevent="socialSignin('naver')"
  >
    <div>
      <img src="../../assets/images/naver.svg" />
      <span>네이버로 로그인</span>
    </div>
  </button>
</template>
<script>
import { mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations("user", ["SET_USER"]),
    socialSignin(provider) {
      return this.$auth.authenticate(provider).then(({ data }) => {
        commit("SET_USER", data.user);
        this.$router.push("/");
      });
    }
  }
};
</script>
<style lang="scss" scoped>
@import "~utils";
.naver-sign-in-btn {
  background-color: #00c73c;
  color: #fff;
  display: flex;
  justify-content: center;

  div {
    display: flex;
    align-items: center;
  }

  span {
    padding-left: 0.8rem;
  }
}
</style>
