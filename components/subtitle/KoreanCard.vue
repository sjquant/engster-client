<template>
  <LineCard>
    <div class="translation-content">
      <div class="korean-line" v-html="processedLine"></div>
      <div class="english-line">{{ line.line }}</div>
    </div>
    <ContentSection :line="line" />
    <ActionSection
      :line="line"
      :liked="liked"
      :translation-on.sync="translationOn"
      :is-english="false"
      @like="$emit('like', line)"
    />
    <TranslationSection
      v-if="translationOn"
      ref="transCard"
      :lineid="line.line_id"
      inputPlaceholder="자신만의 번역을 추가해보세요!"
    />
  </LineCard>
</template>

<script>
import LineCard from "../common/LineCard.vue";
import ContentSection from "./ContentSection.vue";
import ActionSection from "./ActionSection.vue";
import TranslationSection from "./TranslationSection";
import { subtitleCardMixin } from "../../mixins";
import { mapState } from "vuex";

export default {
  components: {
    LineCard,
    ContentSection,
    ActionSection,
    TranslationSection
  },
  mixins: [subtitleCardMixin],
  props: {
    line: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapState("subtitle", ["keyword"]),
    processedLine() {
      let regexp = new RegExp("(" + this.keyword + ")", "i");
      try {
        return this.line.translation.replace(
          regexp,
          '<span class="line-highlighted">$1</span>'
        );
      } catch {
        return this.line.translation;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@import "~utils";
.english-line {
  padding-top: 0.4rem;
  color: $gray-darker;
}
</style>