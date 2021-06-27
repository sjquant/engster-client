<template>
  <Wrapper class="wrap-center">
    <div class="center-container">
      <div class="container__wrapper">
        <nuxt-link to="/" class="logo-container">
          <FullLogoIcon />
        </nuxt-link>
        <nuxt />
      </div>
    </div>
  </Wrapper>
</template>
<script>
import Wrapper from "./wrapper.vue";
import FullLogoIcon from "../components/icons/FullLogoIcon.vue";
export default {
  components: {
    Wrapper,
    FullLogoIcon
  }
};
</script>
<style lang="scss" scoped>
@import "~utils";

/deep/ .full-logo {
  width: 24rem;
}

.wrap-center {
  width: 100%;

  display: flex;
  justify-content: center;

  > .center-container {
    max-width: 78rem;
    width: 100%;
    margin-top: 9.6rem;
    display: flex;
    justify-content: center;

    .logo-container {
      display: flex;
      justify-content: center;
      margin-bottom: 4.8rem;
    }
  }
}
</style>
