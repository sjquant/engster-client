<template>
  <header class="my-page-header">
    <ProfileIcon :profilePath="user ? user.photo : ''" />
    <div class="user-info">
      <h1 class="user-nickname">{{ user ? user.nickname : "" }}님</h1>
      <button class="edit-profile-btn" @click="$router.push('/my-page/edit')">프로필 편집</button>
      <div class="activity-info">
        <span class="title">번역</span>
        <span class="value">{{ activitySummary.translation_count }}</span>
      </div>
    </div>
  </header>
</template>

<script>
import ProfileIcon from "../common/ProfileIcon";
import { mapState } from "vuex";

export default {
  components: {
    ProfileIcon
  },
  computed: {
    ...mapState({
      user: state => state.auth.user,
      activitySummary: state => state.mypage.activitySummary
    })
  }
};
</script>

<style lang="scss" scoped>
@import "~utils";
header.my-page-header {
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
      @include default-button();
      display: inline;
      margin-left: 2.4rem;
      padding: 0.4rem 0.8rem;
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
</style>