<template>
  <LineCard>
    <div>
      <div class="subtitle-line" v-text="line.line"></div>
      <div class="translation-line" v-text="line.translation"></div>
    </div>
    <ContentSection :line="line" />
    <ActionSection
      :line="line"
      :liked="liked"
      :translation-on.sync="translationOn"
      is-subtitle
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
.subtitle-line {
  padding-top: 0;
  padding-bottom: 0.8rem;
}

.translation-line {
  color: $gray-darker;
}
</style>
