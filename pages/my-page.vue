<template>
  <div class="my-page-container">
    <header>
      <profile-icon></profile-icon>
      <div class="user-info">
        <h1 class="user-nickname">{{ user ? user.nickname : "" }}님</h1>
        <button>프로필 편집</button>
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
.my-page-container {
  margin-top: 4.8rem;
  header {
    display: flex;
    .profile-icon-container {
      flex: 1;
      max-width: 20.8rem;
      > img.profile-icon {
        display: block;
        margin: 0 auto;
        width: 11.2rem;
      }
    }

    .user-info {
      flex: 2;
      > h1.user-nickname {
        margin-top: 0;
      }
    }
  }
}
</style>