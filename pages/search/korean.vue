<template>
  <div class="search-result-container">
    <PulseLoader class="loading-bar" :loading="loading" color="#1c3d5a" size="12px" />
    <SearchSummary :keyword="keyword" :count="searchCount" />
    <section v-infinite-scroll="fetchMoreLines" infinite-scroll-distance="100">
      <KoreanCard v-for="each in searchLines" :key="each.id" :line="each" @like="updateLike" />
    </section>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
import KoreanCard from "~/components/subtitle/KoreanCard.vue";
import SearchSummary from "~/components/subtitle/SearchSummary.vue";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";

export default {
  components: {
    KoreanCard,
    SearchSummary,
    PulseLoader,
  },
  data() {
    return {
      loading: false,
    };
  },
  watchQuery: ["keyword"],
  fetch({ store, query }) {
    return store.dispatch("subtitle/SEARCH_LINE_KOREAN", {
      keyword: query.keyword,
    });
  },
  computed: {
    ...mapState("subtitle", [
      "searchMore",
      "searchCount",
      "searchLines",
      "keyword",
    ]),
    ...mapGetters("subtitle", ["searchLineCursor"]),
  },
  methods: {
    ...mapActions("subtitle", [
      "SEARCH_LINE_KOREAN",
      "LIKE_LINE_KOREAN",
      "UNLIKE_LINE_KOREAN",
    ]),
    fetchMoreLines() {
      // keyword, page, append
      if (this.searchMore && !this.loading) {
        this.loading = true;
        this.SEARCH_LINE_KOREAN({
          keyword: this.keyword,
          cursor: this.searchLineCursor,
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
    },
  },
};
</script>