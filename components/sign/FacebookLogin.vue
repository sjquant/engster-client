<template>
  <button
    class="fb-sign-in-btn sign-in-btn"
    @click.prevent="socialSignin('facebook')"
  >
    <div>
      <img src="../../assets/images/facebook.svg" />
      <span>페이스북으로 로그인</span>
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
.fb-sign-in-btn {
  display: flex;
  justify-content: center;
  background-color: #3b5998;
  color: #fff;

  div {
    display: flex;
    align-items: center;
  }

  span {
    padding-left: 0.8rem;
  }
}
</style>
