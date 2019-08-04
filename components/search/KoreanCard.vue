<template>
  <LineCard>
    <div class="translation-content">
      <div class="translation" v-html="processedLine"></div>
      <div class="line">{{ line.line.line }}</div>
    </div>
    <div class="line-info">
      <div class="title-category">
        <span>{{ `${line.content.title} (${line.content.year})`}}</span> |
        <span>{{ line.category.category }}</span>
      </div>
      <div>
        <Tag v-for="each in line.genres" :key="each.id">#{{ each.genre }}</Tag>
      </div>
    </div>
    <div class="line-action-container">
      <div class="action-box">
        <Like />
        <span>{{ line.like_count }}</span>
      </div>
      <div class="action-box" @click="updateTranslationOn">
        <Pencil />
        <span>{{ line.translation_count }}</span>
      </div>
      <!-- <div class="action-box">
        <Share/>
        <span>0</span>
      </div>-->
    </div>
    <TranslationCard
      v-if="isTranslationOn"
      ref="transCard"
      :comments="translations"
      inputPlaceholder="자신만의 번역을 추가해보세요!"
      contentKey="translation"
      userKey="translator"
      @comment-created="createTranslation"
    ></TranslationCard>
  </LineCard>
</template>

<script>
import LineCard from "../common/LineCard.vue";
import Tag from "../common/Tag.vue";
import Pencil from "./Pencil.vue";
import Like from "./Like.vue";
import Share from "./Share.vue";
import TranslationCard from "./TranslationCard";
import { translationMixin } from "~/mixins";
import { mapState } from "vuex";

export default {
  components: {
    LineCard,
    Tag,
    Pencil,
    Like,
    Share,
    TranslationCard
  },
  props: {
    line: {
      type: Object,
      required: true
    }
  },
  mixins: [translationMixin],
  computed: {
    ...mapState("search", ["keyword"]),
    processedLine() {
      let regexp = new RegExp("(" + this.keyword + ")", "i");

      try {
        return this.line.translation.replace(
          regexp,
          '<span class="highlighted">$1</span>'
        );
      } catch (error) {}
    }
  }
};
</script>


<style lang="scss">
@import "~styles/utils.scss";

.translation-content {
  .line {
    color: $gray-darker;
    padding-top: 0.4rem;
  }
}
</style>