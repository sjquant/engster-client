<template>
  <button
    class="google-sign-in-btn sign-in-btn"
    @click.prevent="socialSignin('google')"
  >
    <div>
      <img src="../../assets/images/google.svg" />
      <span>구글로 로그인</span>
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

.google-sign-in-btn {
  background-color: #fff;
  color: $black;
  border: 1px solid $gray;
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
