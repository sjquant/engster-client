<template>
  <div class="mobile-menu" v-click-outside="closeMenu">
    <div class="active-account-header">
      <ProfileIcon :profilePath="user ? user.photo : ''" />
      <div class="account-info">
        <div class="user-nickname">{{ user ? user.nickname : "" }}</div>
        <div class="user-email">{{ user ? user.email : "" }}</div>
      </div>
    </div>
    <ul @click="closeMenu">
      <li @click="routeMyPage">마이페이지</li>
      <li @click="logout">로그아웃</li>
    </ul>
  </div>
</template>

<script>
import ProfileIcon from "./common/ProfileIcon";
import { mapState, mapActions } from "vuex";

export default {
  components: {
    ProfileIcon
  },
  computed: {
    ...mapState("user", ["user"])
  },
  methods: {
    ...mapActions("user", ["SIGNOUT"]),
    logout() {
      this.SIGNOUT();
      this.$router.push("/").catch(e => {});
    },
    closeMenu() {
      this.$emit("closeMenu");
    },
    routeMyPage() {
      const userid = this.user.id;
      this.$router.push(`/my-page/${userid}`);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~utils";

.mobile-menu {
  @include material-shadow(1);
  position: absolute;
  width: 30rem;
  padding: 1.6rem 0;
  background-color: #fff;
  top: 5.6rem;
  right: 0.8rem;
  border: $gray-light solid 1px;
  border-radius: 4px;

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    border-bottom: $gray-light solid 1px;
    li {
      cursor: pointer;
      padding-left: 0.8rem;
      &:hover {
        background-color: $gray-lightest;
      }
      line-height: 3;
    }
  }
}

.mobile-menu > .active-account-header {
  padding: 0 1.6rem;
  padding-bottom: 1.6rem;
  border-bottom: $gray-light solid 1px;
  display: flex;
  .account-info {
    padding-left: 1.6rem;
    line-height: 1.3;
    .user-nickname {
      font-weight: 700;
    }
    .user-email {
      font-size: 1.4rem;
    }
  }
  /deep/ .profile-icon-container > .profile-icon {
    width: 4rem;
  }
}
</style>
