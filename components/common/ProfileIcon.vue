<template>
  <div class="profile-icon-container">
    <img :src="profileUrl" class="profile-icon" v-if="profileUrl !== ''" />
    <img src="../../assets/images/null-avatar.png" class="profile-icon" v-else />
  </div>
</template>

<script>
export default {
  props: {
    profileUrl: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss">
@import "~utils";
.profile-icon-container {
  border-radius: 100%;
  img.profile-icon {
    object-fit: cover;
    width: 128px;
  }
}
</style>