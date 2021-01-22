<template>
  <div>
    <SubtitleTranslationInput ref="input" :lineid="lineid" />
    <div class="card-container" v-if="translations">
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
import {
  subtitle as subtitleAPI,
  translation as trnaslationAPI
} from "../../api";

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
    }
  }
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
