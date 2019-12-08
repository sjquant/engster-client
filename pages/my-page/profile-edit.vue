<template>
  <div class="profile-edit-container">
    <h3 class="title">
      <nuxt-link to="/my-page">마이페이지</nuxt-link>
      <span>></span>
      <span>프로필편집</span>
    </h3>
    <profile-edit-form></profile-edit-form>
  </div>
</template>
<script>
import ProfileEditForm from "../../components/my-page/ProfileEditForm.vue";
export default {
  components: {
    ProfileEditForm
  },
  data() {
    return {
      email: "",
      nickname: ""
    };
  }
};
</script>
<style lang="scss">
@import "~utils";

.profile-edit-container {
  max-width: 72rem;
  margin: 4.8rem auto;
  padding: 0 1.6rem;

  @include media(">=lg") {
    padding: 0 0;
  }

  h3.title {
    a,
    span:nth-child(2) {
      color: $gray-darker;
    }
    padding-bottom: 0.8rem;
  }
}
</style>