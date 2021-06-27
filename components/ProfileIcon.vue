<template>
  <div class="profile-icon-container">
    <img
      :src="profilePath"
      class="profile-icon"
      v-show="profilePath"
      key="avatar"
    />
    <img
      src="../assets/images/null-avatar.png"
      class="profile-icon"
      v-show="!profilePath"
      key="null-avatar"
    />
  </div>
</template>

<script>
export default {
  props: {
    profilePath: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~utils";
.profile-icon-container {
  img.profile-icon {
    border-radius: 100%;
    object-fit: cover;
    width: 128px;
    background-color: $gray;
  }
}
</style>
