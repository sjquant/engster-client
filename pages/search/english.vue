<template>
  <div class="search-result-container">
    <PulseLoader class="loading-bar" :loading="loading" color="#1c3d5a" size="12px" />
    <SearchSummary :keyword="keyword" :count="count" />
    <section v-infinite-scroll="fetchMoreLines">
      <EnglishCard v-for="each in data" :key="each.id" :line="each" />
    </section>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
import EnglishCard from "~/components/subtitle/EnglishCard.vue";
import SearchSummary from "~/components/subtitle/SearchSummary.vue";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";

export default {
  components: {
    EnglishCard,
    SearchSummary,
    PulseLoader
  },
  data() {
    return {
      loading: false
    };
  },
  watchQuery: ["keyword"],
  fetch({ store, query }) {
    return store.dispatch("subtitle/FETCH_LINE_ENGLISH", {
      searchWord: query.keyword,
      page: query.page || 1
    });
  },
  computed: {
    ...mapState({
      data: state => state.subtitle.searchResult.data,
      page: state => state.subtitle.searchResult.page,
      maxPage: state => state.subtitle.searchResult.max_page,
      count: state => state.subtitle.searchResult.count,
      keyword: state => state.subtitle.keyword
    })
  },
  methods: {
    ...mapActions("subtitle", ["FETCH_LINE_ENGLISH"]),
    fetchMoreLines() {
      // keyword, page, append
      if (this.page < this.maxPage && !this.loading) {
        this.loading = true;
        this.FETCH_LINE_ENGLISH({
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