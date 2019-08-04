<template>
  <div class="mobile-overlay" @click="overlayClick">
    <div class="mobile-menu">
      <ul>
        <nuxt-link to="/login">
          <li>로그인</li>
        </nuxt-link>
        <li>로그아웃</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
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
