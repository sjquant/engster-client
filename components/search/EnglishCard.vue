<template>
  <LineCard>
    <div class="line-content">
      <div class="line">{{ line.line }}</div>
    </div>
    <div class="line-info">
      <div class="title-category">
        <span>{{ line.content.title }}</span> |
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
      v-if="translationOn"
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
import TranslationCard from "../common/CommentCard";
import { search } from "~/api";
import { mapMutations } from "vuex";

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
  data() {
    return {
      translationOn: false,
      translations: []
    };
  },
  methods: {
    ...mapMutations("search", ["INCREASE_TRANSLATION_COUNT"]),
    async updateTranslationOn() {
      this.translationOn = !this.translationOn;
      if (this.translationOn) {
        this.translations = await search
          .fetchTranslations(this.line.id)
          .then(({ data }) => data);
      }
    },
    async createTranslation(translation) {
      if (translation !== "") {
        let resp = await search
          .createTranslation(this.line.id, translation)
          .then(({ data }) => data);
        this.translations.unshift(resp);
        // remove translation
        this.$refs.transCard.$refs.commentInput.$refs.input.value = "";
        this.INCREASE_TRANSLATION_COUNT(this.line.id);
      }
    }
  }
};
</script>
