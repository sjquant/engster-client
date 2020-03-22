<template>
  <LineCard>
    <div class="line-content">
      <div class="line" v-html="processedLine"></div>
    </div>
    <div class="line-info">
      <div class="title-category">
        <span>{{ `${line.content_title} (${line.content_year})` }}</span> |
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
    <TranslationBox
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
import TranslationBox from "./TranslationBox";

import { translationMixin } from "~/mixins";
import { mapState, mapActions } from "vuex";

export default {
  components: {
    LineCard,
    KeywordTag,
    PencilIcon,
    LikeIcon,
    TranslationBox
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
    ...mapState("subtitle", ["searchResult", "keyword"]),
    isLiked() {
      return false;
    },
    processedLine() {
      let regexp = new RegExp("(" + this.keyword + ")", "i");

      try {
        return this.line.line.replace(
          regexp,
          '<span class="highlighted">$1</span>'
        );
      } catch (error) {}
    }
  }
};
</script>
