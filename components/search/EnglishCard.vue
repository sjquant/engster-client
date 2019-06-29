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
      <div class="action-box" @click="updateTranslationOn(line.id)">
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
      :comments="translations"
      contentKey="translation"
      userKey="translator"
    ></TranslationCard>
  </LineCard>
</template>

<script>
import LineCard from "../common/LineCard.vue";
import Tag from "~/components/common/Tag.vue";
import Pencil from "~/components/icons/Pencil";
import Like from "~/components/icons/Like";
import Share from "~/components/icons/Share";
import TranslationCard from "../common/CommentCard";

import { search } from "~/api";
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
    async updateTranslationOn(lineId) {
      this.translationOn = !this.translationOn;
      if (this.translationOn) {
        this.translations = await search
          .fetchTranslations(lineId)
          .then(({ data }) => data);
      }
    }
  }
};
</script>
