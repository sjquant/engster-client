<template>
  <div class="mobile-overlay" @click="overlayClick">
    <div class="mobile-menu">
      <no-ssr>
        <ul>
          <nuxt-link to="/sign-in" v-if="!user">
            <li>로그인</li>
          </nuxt-link>
          <li v-if="user" @click="logout">로그아웃</li>
        </ul>
      </no-ssr>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState("auth", ["user"])
  },
  methods: {
    ...mapActions("auth", ["LOGOUT"]),
    logout() {
      this.LOGOUT()
    },
    overlayClick() {
      this.$emit("overlayClick");
    }
  }
};
</script>

<style lang="scss">
@import "~styles/utils.scss";

.mobile-overlay {
  position: fixed;
  top: 6.4rem;
  width: 100vw;
  height: calc(100vh - 6.4rem);
}
.mobile-menu {
  @include material-shadow;
  position: absolute;
  width: 30rem;
  background-color: #fff;
  right: 0;

  @include media(">=lg") {
    display: none;
  }

  ul {
    list-style-type: none;
    margin: 0.8rem 0;
    padding: 0;
    color: $gray-darker;
    li {
      padding: 0.4rem 0.8rem;
      cursor: pointer;
      &:hover {
        background-color: $gray-lightest;
      }
    }
  }
}
</style>
