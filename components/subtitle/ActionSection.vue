<template>
  <div class="action-container">
    <div class="action-box" @click="$emit('like')">
      <LikeIcon :class="{ active: line.user_liked }" />
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
    isSubtitle: {
      type: Boolean,
      required: true
    },
    translationOn: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    ...mapMutations("subtitle", ["INCREASE_TRANSLATION_COUNT"]),
    ...mapActions("subtitle", [
      "FETCH_TRANSLATIONS_FOR_LINE",
      "CREATE_TRANSLATION"
    ]),
    updateTranslationOn() {
      let translationOn = !this.translationOn;
      this.$emit("update:translation-on", translationOn);
      if (translationOn) {
        let lineid = this.isSubtitle ? this.line.id : this.line.line_id;
        this.FETCH_TRANSLATIONS_FOR_LINE({ lineid });
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
