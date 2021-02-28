<template>
  <div class="action-container">
    <div class="action-box" @click="$emit('like')">
      <LikeIcon :class="{ active: liked }" />
      <span>{{ likeCount }}</span>
    </div>
    <div class="action-box" @click="$emit('open-translations')">
      <PencilIcon :class="{ active: translated }" />
      <span>{{ translationCount }}</span>
    </div>
  </div>
</template>
<script>
import PencilIcon from "../icons/PencilIcon.vue";
import LikeIcon from "../icons/LikeIcon.vue";

export default {
  components: {
    PencilIcon,
    LikeIcon
  },
  props: {
    liked: {
      type: Boolean,
      default: false
    },
    likeCount: {
      type: Number,
      default: 0
    },
    translated: {
      type: Boolean,
      default: false
    },
    translationCount: {
      type: Number,
      default: 0
    }
  }
};
</script>
<style lang="scss" scoped>
div.action-container {
  padding-bottom: 1.6rem;
  display: flex;

  .action-box {
    margin-right: 3.2rem;
    color: #8795a1;
    display: flex;
    align-items: center;

    &:last-child {
      margin-right: 0;
    }

    &:hover {
      cursor: pointer;
    }

    > span {
      padding-left: 0.8rem;
    }
  }
}
</style>
