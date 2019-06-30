<template>
  <LineCard>
    <div class="line-content">
      <div class="line">{{ line.line }}</div>
    </div>
    <div class="line-info">
      <div class="title-category">
        <span>{{ `${line.content.title} (${line.content.year})` }}</span> |
        <span>{{ line.category.category }}</span>
      </div>
      <div>
        <Tag v-for="each in line.genres" :key="each.id">#{{ each.genre }}</Tag>
      </div>
    </div>
    <div class="line-action-container">
      <div class="action-box" @click="updateLike">
        <Like :class="{ active: isLiked }" />
        <span>{{ line.like_count }}</span>
      </div>
      <div class="action-box" @click="updateTranslationOn">
        <Pencil :class="{ active: isTranslationOn }" />
        <span>{{ line.translation_count }}</span>
      </div>
      <!-- <div class="action-box">
        <Share/>
        <span>0</span>
      </div>-->
    </div>
    <TranslationContainer
      v-if="isTranslationOn"
      ref="transCard"
      :comments="translations"
      inputPlaceholder="자신만의 번역을 추가해보세요!"
      @comment-created="createTranslation"
    ></TranslationContainer>
  </LineCard>
</template>

<script>
import LineCard from "../common/LineCard.vue";
import Tag from "../common/Tag.vue";
import Pencil from "./Pencil.vue";
import Like from "./Like.vue";
import Share from "./Share.vue";
import TranslationContainer from "./TranslationContainer";

import { translationMixin } from "~/mixins";
import { mapState, mapActions } from "vuex";

export default {
  components: {
    LineCard,
    Tag,
    Pencil,
    Like,
    Share,
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
    ...mapActions("search", ["LIKE_LINE_ENGLISH", "UNLIKE_LINE_ENGLISH"]),
    updateLike() {
      if (!this.isLiked) {
        this.LIKE_LINE_ENGLISH(this.line.id);
      } else {
        this.UNLIKE_LINE_ENGLISH(this.line.id);
      }
    }
  },
  computed: {
    ...mapState("search", ["searchResult"]),
    isLiked() {
      if (this.searchResult.user_liked.includes(this.line.id)) return true;
      else false;
    }
  }
};
</script>
