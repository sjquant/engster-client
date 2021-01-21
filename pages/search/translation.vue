<template>
  <div class="search-result-container">
    <PulseLoader
      class="loading-bar"
      :loading="loading"
      color="#1c3d5a"
      size="12px"
    />
    <SearchSummary :keyword="keyword" :count="searchCount" />
    <SubtitleCard
      v-for="each in searchLines"
      :key="each.id"
      :main-line="each.translation"
      :sub-line="each.line"
      :subtitle-id="each.lineid"
      :detail="each"
      :highlight="keyword"
      :is-subtitle="false"
      @like="updateLike"
    />
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
import SubtitleCard from "../../components/common/SubtitleCard.vue";
import SearchSummary from "../../components/search/SearchSummary.vue";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import scrollMixin from "../../mixins/scroll.js";

export default {
  components: {
    SubtitleCard,
    SearchSummary,
    PulseLoader
  },
  mixins: [scrollMixin],
  data() {
    return {
      loading: false
    };
  },
  watchQuery: ["keyword"],
  fetch({ store, query }) {
    return store.dispatch("subtitle/SEARCH_TRANSLATIONS", {
      keyword: query.keyword
    });
  },
  mounted() {
    this.onScroll(this.fetchMoreLines, { delay: 500, distance: 100 });
  },
  computed: {
    ...mapState("subtitle", [
      "searchMore",
      "searchCount",
      "searchLines",
      "keyword"
    ]),
    ...mapGetters("subtitle", ["searchLineCursor"])
  },
  methods: {
    ...mapActions("subtitle", [
      "SEARCH_TRANSLATIONS",
      "LIKE_TRANSLATION",
      "UNLIKE_TRANSLATION"
    ]),
    fetchMoreLines() {
      // keyword, page, append
      if (this.searchMore && !this.loading) {
        this.loading = true;
        this.SEARCH_TRANSLATIONS({
          keyword: this.keyword,
          cursor: this.searchLineCursor
        }).finally(() => {
          this.loading = false;
        });
      }
    },
    updateLike(line) {
      if (!line.user_liked) {
        this.LIKE_TRANSLATION(line.id);
      } else {
        this.UNLIKE_TRANSLATION(line.id);
      }
    }
  }
};
</script>
