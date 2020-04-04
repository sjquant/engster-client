<template>
  <client-only>
    <div class="profile-icon-container">
      <img :src="profilePath" class="profile-icon" v-if="profilePath" key="avatar" />
      <img src="../../assets/images/null-avatar.png" class="profile-icon" v-else key="null-avatar" />
    </div>
  </client-only>
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
    background-color: $gray;
  }
}
</style>