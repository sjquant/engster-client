<template>
  <line-card>
    <div class="line-content">
      <div class="line">{{ line.line }}</div>
      <div class="translation">{{ line.translation }}</div>
    </div>
    <div class="line-info">
      <div class="title-category">
        <span>{{ line.content }}</span> |
        <span>{{ line.category }}</span>
      </div>
      <div>
        <Tag v-for="each in line.genres" :key="each.id">#{{ each.genre }}</Tag>
      </div>
    </div>
    <div class="line-action-container">
      <div class="action-box">
        <Like :class="{ active: isLiked }" />
        <span>{{ line.like_count }}</span>
      </div>
      <div class="action-box">
        <Pencil :class="{ active: isTranslationOn }" />
        <span>{{ line.translation_count }}</span>
      </div>
    </div>
    <translation-container
      v-if="isTranslationOn"
      ref="transCard"
      :transResult="translationResult"
      inputPlaceholder="자신만의 번역을 추가해보세요!"
      @comment-created="createTranslation"
    ></translation-container>
  </line-card>
</template>
<script>
import LineCard from "../common/LineCard.vue";
import Tag from "../common/Tag";
import Pencil from "../search/Pencil.vue";
import Like from "../search/Like.vue";
import TranslationContainer from "../search/TranslationContainer";
import { translationMixin } from "~/mixins";
import { mapState, mapActions } from "vuex";

export default {
  components: {
    LineCard,
    Tag,
    Pencil,
    Like,
    TranslationContainer
  },
  mixins: [translationMixin],
  props: {
    line: {
      type: Object,
      required: true
    },
    isLiked: {
      default: false
    }
  }
};
</script>