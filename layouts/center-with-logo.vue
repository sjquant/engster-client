<template>
  <div class="wrap-center">
    <div class="center-container">
      <HomeLogo />
      <nuxt />
    </div>
  </div>
</template>
<script>
import HomeLogo from "../components/common/HomeLogo.vue";
export default {
  components: {
    HomeLogo
  }
};
</script>
<style lang="scss" scoped>
.center-container {
  .logo-container {
    display: flex;
    justify-content: center;
  }
}
</style>
