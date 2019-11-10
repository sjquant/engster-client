<template>
  <div class="profile-edit-form">
    <div class="profile-item-container">
      <profile-icon></profile-icon>
      <profile-edit-item :label="'이메일'" :value="'seonujang@gmail.com'"></profile-edit-item>
    </div>
    <div class="profile-item-container">
      <profile-edit-item :label="'닉네임'" :value="'SJQuant'"></profile-edit-item>
    </div>
    <div class="profile-item-container">
      <profile-edit-item :label="'비밀번호'" :value="'********'"></profile-edit-item>
    </div>
  </div>
</template>

<script>
import ProfileIcon from "../common/ProfileIcon";
import ProfileEditItem from "./ProfileEditItem.vue";
export default {
  components: {
    ProfileIcon,
    ProfileEditItem
  }
};
</script>

<style lang="scss">
@import "~utils";

.profile-edit-form {
  .profile-item-container {
    display: flex;
    margin-bottom: 3.2rem;

    img.profile-icon {
      margin-right: 3.2rem;
      width: 8rem;
    }
  }
}
</style>