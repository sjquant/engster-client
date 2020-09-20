<template>
  <div>
    <TranslationSectionInput ref="input" :placeholder="inputPlaceholder" :lineid="lineid" />
    <div class="card-container" v-if="translations">
      <TranslationSectionCard
        :translation="each"
        v-for="each in translations"
        :key="each.id"
        @translation-liked="translationLiked"
        @translation-unliked="translationUnliked"
      />
    </div>
  </div>
</template>
<script>
import TranslationSectionInput from "./TranslationSectionInput.vue";
import TranslationSectionCard from "./TranslationSectionCard.vue";
import { mapState, mapMutations } from "vuex";

export default {
  components: {
    TranslationSectionInput,
    TranslationSectionCard,
  },
  props: {
    inputPlaceholder: {
      type: String,
    },
    lineid: {
      type: Number,
    },
  },
  computed: {
    ...mapState("subtitle", ["lineid2translations"]),
    translations() {
      return this.lineid2translations[this.lineid] || [];
    },
  },
  methods: {
    ...mapMutations("subtitle", ["CHANGE_TRANSLATION_BY_INDEX"]),
    translationLiked(translationId) {
      const index = this.translations.findIndex(
        (each) => each.id === translationId
      );
      let newTranslation = { ...this.translations[index] };
      newTranslation.user_liked = true;
      newTranslation.like_count += 1;
      this.CHANGE_TRANSLATION_BY_INDEX({
        lineid: this.lineid,
        index: index,
        data: newTranslation,
      });
    },
    translationUnliked(translationId) {
      const index = this.translations.findIndex(
        (each) => each.id === translationId
      );
      let newTranslation = { ...this.translations[index] };
      newTranslation.user_liked = false;
      newTranslation.like_count -= 1;
      this.CHANGE_TRANSLATION_BY_INDEX({
        lineid: this.lineid,
        index: index,
        data: newTranslation,
      });
    },
  },
};
</script>
<style lang="scss" scoped>
@import "~utils";
.card-container {
  width: 100%;
  max-height: 24rem;
  overflow: auto;
  background-color: $gray-lighter;
  margin-bottom: 1.6rem;
  border-radius: 4px;
  padding: 0.8rem 0;
}
</style>
