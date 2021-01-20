<template>
  <LineCard>
    <div class="subtitle-line" v-html="processedLine"></div>
    <div class="translation-line" v-text="subLine" v-if="subLine"></div>
    <CardContentDetail :detail="detail" />
    <CardActions
      @like="$emit('like', line)"
      @open-translations="openTranslations"
    />
    <SubtitleTranslations
      v-if="translationsOpened"
      ref="transCard"
      :subtitle-id="subtitleId"
      :translations="translations"
      @like-translation="translationLiked"
    />
  </LineCard>
</template>

<script>
import LineCard from "./LineCard.vue";
import CardContentDetail from "./CardContentDetail.vue";
import CardActions from "./CardActions.vue";
import SubtitleTranslations from "./SubtitleTranslations.vue";
import { mapState } from "vuex";

export default {
  components: {
    LineCard,
    CardContentDetail,
    CardActions,
    SubtitleTranslations
  },
  props: {
    subtitleId: Number,
    mainLine: String,
    subLine: String,
    detail: Object,
    translation: {
      type: String,
      default: null
    },
    highlight: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      translationsOpened: false
    };
  },
  computed: {
    processedLine() {
      if (!this.highlight) return this.mainLine;

      let regexp = new RegExp("(" + this.highlight + ")", "i");
      try {
        return this.mainLine.replace(
          regexp,
          '<span class="line-highlighted">$1</span>'
        );
      } catch (error) {}
    }
  },
  methods: {
    openTranslations() {
      this.translationsOpened = !this.translationsOpened;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "~utils";
.subtitle-line {
  padding-top: 0;
}

.translation-line {
  padding-top: 0.8rem;
  color: $gray-darker;
}
</style>
