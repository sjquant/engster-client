<template>
  <line-card>
    <div class="translation-content">
      <div class="translation" v-html="processedLine"></div>
      <div class="line">{{ line.line }}</div>
    </div>
    <div class="line-info">
      <div class="title-category">
        <span>{{ `${line.content.title} (${line.content.year})` }}</span>
      </div>
    </div>
  </line-card>
</template>

<script>
import { mypage } from "../../api";
import LineCard from "../common/LineCard.vue";
export default {
  components: {
    LineCard
  },
  props: {
    line: {
      type: Object,
      required: true
    }
  },
  computed: {
    processedLine() {
      let regexp = new RegExp("(" + this.keyword + ")", "i");

      try {
        return this.line.translation.replace(
          regexp,
          '<span class="highlighted">$1</span>'
        );
      } catch (error) {}
    }
  }
};
</script>