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
    title: String,
    detail: Object,
    year: {
      type: String,
      default: ""
    }
  },
  computed: {
    contentTitle() {
      const title = this.year ? `${this.title} (${this.year})` : this.title;
      return title;
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
