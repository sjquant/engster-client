<template>
  <div class="search-result-container">
    <PulseLoader class="loading-bar" :loading="loading" color="#1c3d5a" size="12px" />
    <SearchSummary :keyword="keyword" :count="count" />
    <section v-infinite-scroll="fetchMoreLines">
      <KoreanCard v-for="each in data" :key="each.id" :line="each" @like="updateLike" />
    </section>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
import KoreanCard from "~/components/subtitle/KoreanCard.vue";
import SearchSummary from "~/components/subtitle/SearchSummary.vue";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";

export default {
  components: {
    KoreanCard,
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
    store.dispatch("subtitle/FETCH_LINE_KOREAN", {
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
    ...mapActions("subtitle", [
      "FETCH_LINE_KOREAN",
      "LIKE_LINE_KOREAN",
      "UNLIKE_LINE_KOREAN"
    ]),
    fetchMoreLines() {
      // keyword, page, append
      if (this.page < this.maxPage && !this.loading) {
        this.loading = true;
        this.FETCH_LINE_KOREAN({
          searchWord: this.keyword,
          page: this.page + 1,
          append: true
        }).finally(() => {
          this.loading = false;
        });
      }
    },
    updateLike(line) {
      if (!line.user_liked) {
        this.LIKE_LINE_KOREAN(line.id);
      } else {
        this.UNLIKE_LINE_KOREAN(line.id);
      }
    }
  }
};
</script>