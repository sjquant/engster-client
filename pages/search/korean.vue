<template>
  <div class="search-result-container">
    <SearchResult :keyword="keyword" :count="count"></SearchResult>
    <section>
      <KoreanCard v-for="line in lines" :key="line.id" :line="line"></KoreanCard>
    </section>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
import KoreanCard from "~/components/search/KoreanCard.vue";
import SearchResult from "~/components/search/SearchResult.vue";

export default {
  components: {
    KoreanCard,
    SearchResult
  },
  watchQuery: ["keyword"],
  async fetch({ store, query }) {
    await store.dispatch("search/FETCH_LINE_KOREAN", query.keyword);
    store.commit("search/SET_KEYWORD", query.keyword);
  },
  computed: {
    ...mapState({
      lines: state => state.search.searchResult.lines,
      page: state => state.search.searchResult.page,
      maxPage: state => state.search.searchResult.max_page,
      count: state => state.search.searchResult.count,
      keyword: state => state.search.keyword
    })
  }
};
</script>
<style lang="scss">
@import "./search.scss";
</style>