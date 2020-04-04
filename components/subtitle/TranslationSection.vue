<template>
  <div>
    <TranslationSectionInput ref="input" :placeholder="inputPlaceholder" />
    <div class="card-container" v-if="translations">
      <TranslationSectionCard :translation="each" v-for="each in translationsData" :key="each.id" />
    </div>
  </div>
</template>
<script>
import TranslationSectionInput from "./TranslationSectionInput.vue";
import TranslationSectionCard from "./TranslationSectionCard.vue";
import { mapState } from "vuex";

export default {
  components: {
    TranslationSectionInput,
    TranslationSectionCard
  },
  props: {
    inputPlaceholder: {
      type: String
    },
    lineid: {
      type: Number
    }
  },
  computed: {
    ...mapState("subtitle", ["translationsForLine"]),
    translations() {
      return this.translationsForLine[this.lineid];
    },
    translationsData() {
      return this.translations ? this.translations.data : [];
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
