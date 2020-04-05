<template>
  <LineCard>
    <div class="english-line" v-html="processedLine"></div>
    <ContentSection :line="line" />
    <ActionSection
      :line="line"
      :liked="liked"
      :translation-on.sync="translationOn"
      is-english
      @like="$emit('like', line)"
    />
    <TranslationSection
      v-if="translationOn"
      ref="transCard"
      :lineid="line.id"
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
    ...mapState("subtitle", ["searchResult", "keyword"]),
    processedLine() {
      let regexp = new RegExp("(" + this.keyword + ")", "i");
      try {
        return this.line.line.replace(
          regexp,
          '<span class="line-highlighted">$1</span>'
        );
      } catch (error) {}
    }
  }
};
</script>