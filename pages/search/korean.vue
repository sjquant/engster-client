<template>
  <div class="search-result-container">
    <pulse-loader class="loading-bar" :loading="loading" color="#1c3d5a" size="12px"></pulse-loader>
    <SearchResult :keyword="keyword" :count="count"></SearchResult>
    <section v-infinite-scroll="fetchMoreLines">
      <KoreanCard v-for="line in lines" :key="line.id" :line="line"></KoreanCard>
    </section>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
import KoreanCard from "~/components/search/KoreanCard.vue";
import SearchResult from "~/components/search/SearchResult.vue";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";

export default {
  components: {
    KoreanCard,
    SearchResult,
    PulseLoader
  },
  data() {
    return {
      loading: false
    };
  },
  watchQuery: ["keyword"],
  async fetch({ store, query }) {
    await store.dispatch("search/FETCH_LINE_KOREAN", {
      searchWord: query.keyword,
      page: query.page || 1
    });
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
  },
  methods: {
    ...mapActions("search", ["FETCH_LINE_KOREAN"]),
    fetchMoreLines() {
      // keyword, page, append
      if (this.page < this.maxPage) {
        this.loading = true;
        this.FETCH_LINE_KOREAN({
          searchWord: this.keyword,
          page: this.page + 1,
          append: true
        }).finally(() => {
          this.loading = false;
        });
      }
    }
  }
};
</script>
<style lang="scss">
@import "./search.scss";
</style>