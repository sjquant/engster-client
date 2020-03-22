<template>
  <LineCard>
    <div class="translation-content">
      <div class="translation" v-html="processedLine"></div>
      <div class="line">{{ line.line }}</div>
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
      :lineid="line.line_id"
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
import TranslationCard from "./TranslationCard";
import TranslationContainer from "./TranslationContainer";
import { translationMixin } from "~/mixins";
import { mapState, mapActions } from "vuex";

export default {
  components: {
    LineCard,
    KeywordTag,
    PencilIcon,
    LikeIcon,
    TranslationCard,
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
    ...mapActions("subtitle", ["LIKE_LINE_KOREAN", "UNLIKE_LINE_KOREAN"]),
    updateLike() {
      if (!this.isLiked) {
        this.LIKE_LINE_KOREAN(this.line.id);
      } else {
        this.UNLIKE_LINE_KOREAN(this.line.id);
      }
    }
  },
  computed: {
    ...mapState("subtitle", ["keyword"]),
    isLiked() {
      return false;
    },
    processedLine() {
      let regexp = new RegExp("(" + this.keyword + ")", "i");

      try {
        return this.line.translation.replace(
          regexp,
          '<span class="highlighted">$1</span>'
        );
      } catch {
        return this.line.translation;
      }
    }
  }
};
</script>