<template>
  <div class="profile-icon-container">
    <img :src="profilePath" class="profile-icon" v-if="profilePath !== ''" />
    <img src="../../assets/images/null-avatar.png" class="profile-icon" v-else />
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

<style lang="scss">
@import "~utils";
.profile-icon-container {
  img.profile-icon {
    border-radius: 100%;
    object-fit: cover;
    width: 128px;
  }
}
</style>