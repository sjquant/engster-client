<template>
  <line-card>
    <div class="translation-content">
      <div class="translation">{{ line.translation }}</div>
      <div class="line">{{ line.line }}</div>
    </div>
    <div class="line-info">
      <div class="title-category">
        <span>{{ `${line.content_title} (${line.content_year})` }}</span>
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
  }
};
</script>