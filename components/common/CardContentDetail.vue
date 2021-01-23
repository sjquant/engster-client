<template>
  <div class="content-container">
    <div class="content-container__title">
      <span>{{ contentTitle }}</span>
    </div>
    <div class="content-container__keywords">
      <KeywordTag v-for="each in detail.genres" :key="each.id"
        >#{{ each.name }}</KeywordTag
      >
    </div>
  </div>
</template>
<script>
import KeywordTag from "./KeywordTag.vue";

export default {
  components: {
    KeywordTag
  },
  props: {
    detail: Object,
    year: {
      type: String,
      default: ""
    }
  },
  computed: {
    contentTitle() {
      const { content_title, content_year } = this.detail;
      return content_year
        ? `${content_title} (${content_year})`
        : content_title;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "~utils";
div.content-container {
  padding-top: 1.6rem;
  padding-bottom: 1.6rem;
  color: $gray-dark;

  .content-container__title {
    color: $gray-darkest;
    margin-bottom: 0.4rem;
    font-weight: 700;
  }
}
</style>
