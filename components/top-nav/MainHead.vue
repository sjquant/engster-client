<template>
  <div class="main-head-container">
    <div class="main-head-content-container">
      <MainLogo />
      <MainSearchBar />
      <div class="side-head-container" @click="mobileMenuOn = !mobileMenuOn">
        <MobileMenuIcon />
      </div>
    </div>
    <no-ssr>
      <MobileMenu v-if="mobileMenuOn" @overlayClick="mobileMenuOn=false" />
    </no-ssr>
  </div>
</template>
<script>
import MainLogo from "./MainLogo.vue";
import MainSearchBar from "./MainSearchBar.vue";
import MobileMenuIcon from "./MobileMenuIcon.vue";
import MobileMenu from "./MobileMenu.vue";
export default {
  components: {
    MainLogo,
    MainSearchBar,
    MobileMenuIcon,
    MobileMenu
  },
  data() {
    return {
      mobileMenuOn: false
    };
  }
};
</script>

<style lang="scss">
@import "~styles/utils.scss";

.main-head-container {
  border-bottom: 1px solid $gray-lighter;
  height: 6.4rem;
  display: flex;
  position: sticky;
  background: #fff;
  top: 0;
  align-items: center;

  .main-head-content-container {
    display: flex;
    width: 100%;

    @include media(">=lg") {
      justify-content: space-between;
    }
  }
}

.side-head-container {
  min-width: 5.6rem;
  padding-left: 1.6rem;
  padding-right: 1.6rem;
  display: flex;
  align-items: center;

  @include media(">=lg") {
    width: 16rem;
  }
}
</style>
