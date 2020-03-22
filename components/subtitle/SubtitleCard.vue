<template>
  <LineCard>
    <div class="translation-content">
      <div class="line" v-text="line.line"></div>
      <div class="translation" v-text="line.translation"></div>
    </div>
    <div class="line-info">
      <div class="title-category">
        <span>{{ `${line.content_title} (${line.content_year})`}}</span> |
        <span>{{ line.category_name }}</span>
      </div>
      <div>
        <KeywordTag v-for="each in line.genres" :key="each.id">#{{ each.name }}</KeywordTag>
      </div>
    </div>
    <div class="line-action-container">
      <div class="action-box" @click="updateLike">
        <LikeIcon :class="{ active: isLiked }" />
        <span>{{ line.like_count }}</span>
      </div>
      <div class="action-box" @click="updateTranslationOn">
        <PencilIcon :class="{ active: isTranslationOn }" />
        <span>{{ line.translation_count }}</span>
      </div>
    </div>
    <TranslationContainer
      v-if="isTranslationOn"
      ref="transCard"
      :lineid="line.id"
      inputPlaceholder="자신만의 번역을 추가해보세요!"
      @comment-created="createTranslation"
    />
  </LineCard>
</template>

<script>
import LineCard from "../common/LineCard.vue";
import KeywordTag from "../common/KeywordTag.vue";
import PencilIcon from "../icons/PencilIcon.vue";
import LikeIcon from "../icons/LikeIcon.vue";
import TranslationContainer from "./TranslationContainer";
import { translationMixin } from "~/mixins";
import { mapState, mapActions } from "vuex";

export default {
  components: {
    LineCard,
    KeywordTag,
    PencilIcon,
    LikeIcon,
    TranslationContainer
  },
  props: {
    line: {
      type: Object,
      required: true
    }
  },
  mixins: [translationMixin],
  methods: {
    ...mapActions("subtitle", ["LIKE_LINE_ENGLISH", "UNLIKE_LINE_ENGLISH"]),
    updateLike() {
      if (!this.isLiked) {
        this.LIKE_LINE_ENGLISH(this.line.id);
      } else {
        this.UNLIKE_LINE_ENGLISH(this.line.id);
      }
    }
  },
  computed: {
    ...mapState("subtitle", ["keyword"]),
    isLiked() {
      return false;
    }
  }
};
</script>
<style lang="scss" scoped>
.line {
  padding-top: 0;
  padding-bottom: 0.8rem;
}

.line-info {
  padding-top: 0.8rem;
}
</style>