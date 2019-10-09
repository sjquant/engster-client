<template>
  <line-card>
    <div class="line-content">
      <div class="line" v-html="processedLine"></div>
    </div>
    <div class="line-info">
      <div class="title-category">
        <span>{{ `${line.content.title} (${line.content.year})` }}</span>
      </div>
    </div>
    <!-- <div class="line-action-container">
      <div class="action-box" @click="updateLike">
        <Like :class="{ active: isLiked }" />
        <span>{{ line.like_count }}</span>
      </div>
    </div>-->
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
        return this.line.line.replace(
          regexp,
          '<span class="highlighted">$1</span>'
        );
      } catch (error) {}
    }
  }
};
</script>