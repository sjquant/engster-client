<template>
  <div class="sign-container">
    <HomeLogo />
    <form class="sign-form">
      <slot></slot>
    </form>
  </div>
</template>
<script>
import HomeLogo from "../common/HomeLogo.vue";
export default {
  components: {
    HomeLogo
  }
};
</script>
<style lang="scss" scoped>
@import "~utils";
.sign-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 48rem;
  height: 40rem;
  padding-top: 9.6rem;
  .sign-form {
    width: 100%;
    margin-top: 4.8rem;
    padding: 0 1.6rem;

    /deep/ .base-input {
      width: 100%;
    }
  }
}

/deep/ .sign-in-btn {
  width: 100%;
  height: 4.8rem;
  text-align: center;
  margin: 1.6rem 0;

  &:hover {
    opacity: 0.95;
  }
}

/deep/ hr.separating-line {
  width: 100%;
  border: 0;
  margin: 1.6rem 0;
  border-bottom: 1px solid $gray-light;
}
</style>