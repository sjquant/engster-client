<template>
  <div class="search-result">
    <strong>'{{ keyword }}'</strong>
    에 대한 검색 결과 (총: {{ count }}건)
  </div>
</template>
<script>
export default {
  props: {
    keyword: {
      type: String,
      required: true
    },
    count: {
      type: Number,
      default: 0
    }
  }
};
</script>
 
<style lang="scss">
@import "~utils";

.search-result {
  padding-left: 1.6rem;
  font-size: 16px;
  margin-bottom: 2.4rem;
  color: $gray-darker;

  strong {
    color: $gray-darkest;
  }
}
</style>