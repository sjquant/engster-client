<template>
  <div>
    <SubtitleTranslationInput
      :subtitle-id="subtitleId"
      :translation="translationValue"
      v-model="translationValue"
      @create-translation="createTranslation"
    />
    <div class="card-container" v-if="translations.length > 0">
      <SubtitleTranslationItem
        v-for="each in translations"
        :key="each.id"
        :translation="each"
      />
    </div>
  </div>
</template>
<script>
import SubtitleTranslationInput from "./SubtitleTranslationInput.vue";
import SubtitleTranslationItem from "./SubtitleTranslationItem.vue";
import { subtitle as subtitleAPI } from "../../api";

export default {
  components: {
    SubtitleTranslationInput,
    SubtitleTranslationItem
  },
  created() {
    this.fetchTranslations();
  },
  props: {
    subtitleId: Number
  },
  data() {
    return {
      translationValue: "",
      translations: []
    };
  },
  methods: {
    async fetchTranslations() {
      const cursor = this.translations.slice(-1)[0] || null;
      const { data } = await subtitleAPI.fetchTranslations(this.subtitleId, {
        cursor
      });
      this.translations.push(...data);
    },
    async createTranslation(translation) {
      if (translation) {
        try {
          const data = await subtitleAPI.createTranslation(
            this.subtitleId,
            this.translationValue
          );
          this.translations.unshift(data);
          this.translationValue = "";
        } catch (e) {
          console.error(e);
        }
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@import "~utils";
.card-container {
  width: 100%;
  background-color: $gray-lighter;
  margin-bottom: 1.6rem;
  border-radius: 4px;
  padding: 0.8rem 0;
}
</style>
