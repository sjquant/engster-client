<template>
  <div class="my-page-container">
    <header>
      <profile-icon></profile-icon>
      <div class="user-info">
        <h1 class="user-nickname">{{ user ? user.nickname : "" }}님</h1>
        <button class="edit-profile-btn">프로필 편집</button>
        <div class="activity-info">
          <span class="title">번역</span>
          <span class="value">45</span>
        </div>
      </div>
    </header>
    <section></section>
  </div>
</template>

<script>
import ProfileIcon from "../components/common/ProfileIcon";
import { mapState, mapActions } from "vuex";

export default {
  components: {
    ProfileIcon
  },
  computed: {
    ...mapState("auth", ["user"])
  }
};
</script>

<style lang="scss">
@import "~styles/utils.scss";
.my-page-container {
  margin-top: 4.8rem;
  header {
    display: flex;
    border-bottom: $gray-light solid 1px;
    padding-bottom: 4.8rem;
    .profile-icon-container {
      margin: 0 2.4rem;
      @include media(">=lg") {
        margin: 0 4.8rem;
      }
      > img.profile-icon {
        display: block;
        margin: 0 auto;
        width: 11.2rem;
      }
    }

    .user-info {
      > h1.user-nickname {
        display: inline;
      }
      .edit-profile-btn {
        display: inline;
        margin-left: 2.4rem;
        padding: 0.4rem 0.8rem;
        color: $gray-darker;
        border: $gray-light solid 1px;
        border-radius: 4px;
        &:hover {
          color: $gray-darkest;
        }
      }
      .activity-info {
        margin-top: 2.4rem;
        font-size: 1.8rem;
        > .value {
          font-weight: 700;
        }
      }
    }
  }
}
</style>