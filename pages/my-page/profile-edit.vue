<template>
  <div class="profile-edit-container">
    <h3 class="title">
      <a class="prev-nav link" @click="routeMyPage">마이페이지</a>
      <span class="prev-nav">></span>
      <span class="nav">프로필편집</span>
    </h3>
    <ProfileForm />
  </div>
</template>
<script>
import ProfileForm from "../../components/my-page/ProfileForm.vue";
export default {
  components: {
    ProfileForm
  },
  data() {
    return {
      email: "",
      nickname: ""
    };
  },
  methods: {
    routeMyPage() {
      const userid = this.$route.params.userid;
      this.$router.push(`/my-page/${userid}`);
    }
  }
};
</script>
<style lang="scss" scoped>
@import "~utils";

.profile-edit-container {
  max-width: 72rem;
  margin: 0 auto;
  padding: 0 1.6rem;

  @include media(">=lg") {
    padding: 0 0;
  }

  h3.title {
    .prev-nav {
      color: $gray-darker;
    }
    margin-top: 0;
    padding-bottom: 0.8rem;
    cursor: default;
  }

  .link {
    cursor: pointer;
  }
}
</style>