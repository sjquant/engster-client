<template>
  <div class="action-container">
    <div class="action-box" @click="updateLike">
      <LikeIcon :class="{ active: liked }" />
      <span>{{ line.like_count }}</span>
    </div>
    <div class="action-box" @click="updateTranslationOn">
      <PencilIcon :class="{ active: translationOn }" />
      <span>{{ line.translation_count }}</span>
    </div>
  </div>
</template>
<script>
import PencilIcon from "../icons/PencilIcon.vue";
import LikeIcon from "../icons/LikeIcon.vue";
import { mapMutations, mapActions } from "vuex";

export default {
  components: {
    PencilIcon,
    LikeIcon
  },
  props: {
    line: {
      type: Object,
      required: true
    },
    // Check whether line is english for updating like
    isEnglish: {
      type: Boolean,
      required: true
    },
    liked: {
      type: Boolean,
      default: false
    },
    translationOn: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    ...mapMutations("subtitle", ["INCREASE_TRANSLATION_COUNT"]),
    ...mapActions("subtitle", [
      "LIKE_LINE_ENGLISH",
      "UNLIKE_LINE_ENGLISH",
      "LIKE_LINE_KOREAN",
      "UNLIKE_LINE_KOREAN",
      "FETCH_TRANSLATIONS_FOR_LINE",
      "CREATE_TRANSLATION"
    ]),
    updateTranslationOn() {
      let translationOn = !this.translationOn;
      this.$emit("update:translation-on", translationOn);
      if (translationOn) {
        let lineid = this.isEnglish ? this.line.id : this.line.line_id;
        this.FETCH_TRANSLATIONS_FOR_LINE({ lineid });
      }
    },
    updateLike() {
      if (!this.isLiked) {
        this.isEnglish
          ? this.LIKE_LINE_ENGLISH(this.line.id)
          : this.LIKE_LINE_KOREAN(this.line.id);
      } else {
        this.isEnglish
          ? this.UNLIKE_LINE_ENGLISH(this.line.id)
          : this.UNLIKE_LINE_KOREAN(this.line.id);
      }
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