<template>
  <div class="container" @click="toHome">
    <MobileLogoIcon />
    <FullLogoIcon />
  </div>
</template>

<script>
import MobileLogoIcon from "./icons/MobileLogoIcon.vue";
import FullLogoIcon from "./icons/FullLogoIcon.vue";

export default {
  components: {
    MobileLogoIcon,
    FullLogoIcon
  },
  methods: {
    toHome() {
      if (process.client) {
        window.location.replace("/");
      }
    }
  }
};
</script>

<style scoped lang='scss'>
@import "~utils";
.container {
  min-width: 5.6rem;
  padding-left: 1.6rem;
  padding-right: 1.6rem;
  display: flex;
  align-items: center;

  @include media(">=lg") {
    width: 16rem;
  }

  /deep/ .mobile-logo {
    width: 2.4rem;
    cursor: pointer;
    @include media(">=lg") {
      width: 0;
      height: 0;
    }
  }

  /deep/ .full-logo {
    display: none;
    cursor: pointer;
    @include media(">=lg") {
      display: block;
      width: 16rem;
      height: 16rem * 0.27;
    }
  }
}
</style>
