<template>
  <header class="my-page-header">
    <ProfileIcon :profilePath="activitySummary.user_photo" />
    <div class="user-info">
      <h1 class="user-nickname">{{ activitySummary.user_nickname }}님</h1>
      <button class="edit-profile-btn" @click="routeProfileEdit" v-show="isMe">
        프로필 편집
      </button>
      <div class="activity-info">
        <span class="title">번역</span>
        <span class="value">{{ activitySummary.translation_count }}</span>
      </div>
    </div>
  </header>
</template>

<script>
import ProfileIcon from "./ProfileIcon";
import { mapState } from "vuex";

export default {
  components: {
    ProfileIcon
  },
  computed: {
    ...mapState("user", ["user"]),
    ...mapState("mypage", ["activitySummary"]),
    isMe() {
      const userid = this.$route.params.userid;
      return this.user ? this.user.id === userid : false;
    }
  },
  methods: {
    routeProfileEdit() {
      const userid = this.$route.params.userid;
      this.$router.push(`/my-page/${userid}/edit`);
    }
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
