<template>
  <Wrapper class="wrap-center">
    <div class="center-container">
      <div class="container__wrapper">
        <HomeLogo />
        <nuxt />
      </div>
    </div>
  </Wrapper>
</template>
<script>
import Wrapper from "./wrapper.vue";
import HomeLogo from "../components/common/HomeLogo.vue";
export default {
  components: {
    Wrapper,
    HomeLogo
  }
};
</script>
<style lang="scss" scoped>
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
