<template>
  <nuxt-link to="/">
    <FullLogoIcon />
  </nuxt-link>
</template>
<script>
import FullLogoIcon from "../icons/FullLogoIcon.vue";
export default {
  components: {
    FullLogoIcon
  }
};
</script>
<style lang="scss" scoped>
@import "~utils";
/deep/ .full-logo {
  width: 24rem;
}
</style>