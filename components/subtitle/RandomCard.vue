<template>
  <LineCard>
    <div>
      <div class="english-line" v-text="line.line"></div>
      <div class="korean-line" v-text="line.translation"></div>
    </div>
    <ContentSection :line="line" />
    <ActionSection :line="line" :liked="liked" :translation-on.sync="translationOn" is-english />
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
import TranslationSection from "./TranslationSection.vue";
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
    ...mapState("subtitle", ["keyword"])
  }
};
</script>
<style lang="scss" scoped>
@import "~utils";
.english-line {
  padding-top: 0;
  padding-bottom: 0.8rem;
}

.korean-line {
  color: $gray-darker;
}
</style>