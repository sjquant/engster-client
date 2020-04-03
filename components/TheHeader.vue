<template>
  <header class="main-head-container">
    <div class="main-head-content-container">
      <TheLogo />
      <TheSearchBar />
      <div class="side-head-container">
        <nuxt-link to="/sign-in" v-show="!user">로그인</nuxt-link>
        <div v-show="user" @click="menuOn = !menuOn">
          <ProfileIcon :profilePath="user ? user.photo : ''" />
        </div>
      </div>
      <client-only>
        <TheNavMenu v-if="menuOn" @closeMenu="menuOn=false" />
      </client-only>
    </div>
  </header>
</template>
<script>
import TheLogo from "./TheLogo.vue";
import TheSearchBar from "./TheSearchBar.vue";
import TheNavMenu from "./TheNavMenu.vue";
import ProfileIcon from "./common/ProfileIcon";
import { mapState } from "vuex";
export default {
  components: {
    TheLogo,
    TheSearchBar,
    TheNavMenu,
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
@import "~utils";

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

    @include media(">=md") {
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
    white-space: nowrap;
  }
  .profile-icon-container {
    cursor: pointer;
    > .profile-icon {
      width: 3.2rem;
    }
  }
}
</style>
