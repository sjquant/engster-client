<template>
  <div class="main-head-container">
    <div class="main-head-content-container">
      <main-logo />
      <main-search-bar />
      <div class="side-head-container">
        <div @click="menuOn = !menuOn">
          <div>
            <profile-icon></profile-icon>
          </div>
        </div>
      </div>
      <no-ssr>
        <nav-menu v-if="menuOn" @overlayClick="menuOn=false" />
      </no-ssr>
    </div>
  </div>
</template>
<script>
import MainLogo from "./MainLogo.vue";
import MainSearchBar from "./MainSearchBar.vue";
import NavMenu from "./NavMenu.vue";
import ProfileIcon from "../common/ProfileIcon";
export default {
  components: {
    MainLogo,
    MainSearchBar,
    NavMenu,
    ProfileIcon
  },
  data() {
    return {
      menuOn: false
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
  justify-content: flex-end;
  @include media(">=lg") {
    width: 16rem;
  }

  .profile-icon-container {
    cursor: pointer;
  }
}
</style>
