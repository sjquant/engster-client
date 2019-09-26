<template>
  <header class="main-head-container">
    <div class="main-head-content-container">
      <main-logo />
      <main-search-bar />
      <div class="side-head-container">
        <nuxt-link to="/sign-in" v-show="!user">
          로그인
        </nuxt-link>
        <div v-show="user" @click="menuOn = !menuOn">
          <profile-icon></profile-icon>
        </div>
      </div>
      <no-ssr>
        <nav-menu v-if="menuOn" @closeMenu="menuOn=false" />
      </no-ssr>
    </div>
  </header>
</template>
<script>
import MainLogo from "./MainLogo.vue";
import MainSearchBar from "./MainSearchBar.vue";
import NavMenu from "./NavMenu.vue";
import ProfileIcon from "../common/ProfileIcon";
import { mapState } from "vuex"
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
  },
  computed: {
    ...mapState("auth", ["user"])
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
  padding-left: 1.6rem;
  padding-right: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @include media(">=lg") {
    width: 16rem;
  }

  a {
    white-space: nowrap
  }
  .profile-icon-container {
    cursor: pointer;
    .profile-icon {
      width: 3.2rem;
    }
  }
}
</style>
