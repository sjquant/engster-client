<template>
  <div class="content-container">
    <ContentSectionTitle
      :title="line.content_title"
      :year="line.content_year"
    />
    <KeywordTag v-for="each in line.genres" :key="each.id"
      >#{{ each.name }}</KeywordTag
    >
  </div>
</template>
<script>
import KeywordTag from "../common/KeywordTag.vue";
import ContentSectionTitle from "./ContentSectionTitle.vue";
export default {
  components: {
    KeywordTag,
    ContentSectionTitle
  },
  props: {
    line: {
      type: Object
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
}
</style>
