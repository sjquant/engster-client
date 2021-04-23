<template>
  <header class="header">
    <div class="content">
      <TheLogo />
      <TheSearchBar />
      <div class="header-side">
        <nuxt-link to="/sign-in" v-show="!user && isClient">로그인</nuxt-link>
        <div v-show="user" @click="menuOn = !menuOn">
          <ProfileIcon :profilePath="user ? user.photo : ''" />
        </div>
      </div>
      <client-only>
        <TheNavMenu v-if="menuOn" @closeMenu="menuOn = false" />
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
    ...mapState("user", ["user"]),
    isClient() {
      return process.client;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~utils";

.header {
  border-bottom: 1px solid $gray-lighter;
  height: 6.4rem;
  display: flex;
  position: sticky;
  background: #fff;
  top: 0;
  align-items: center;
  z-index: 9;

  .content {
    display: flex;
    width: 100%;

    @include media(">=md") {
      justify-content: space-between;
    }
  }
}

.header-side {
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
  /deep/ .profile-icon-container {
    cursor: pointer;
    > .profile-icon {
      width: 3.2rem;
    }
  }
}
</style>
