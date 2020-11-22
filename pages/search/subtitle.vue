<template>
  <div class="search-result-container">
    <PulseLoader
      class="loading-bar"
      :loading="loading"
      color="#1c3d5a"
      size="12px"
    />
    <SearchSummary :keyword="keyword" :count="searchCount" />
    <section v-infinite-scroll="fetchMoreLines" infinite-scroll-distance="100">
      <SubtitleCard
        v-for="each in searchLines"
        :key="each.id"
        :line="each"
        @like="updateLike"
      />
    </section>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
import SubtitleCard from "~/components/subtitle/SubtitleCard.vue";
import SearchSummary from "~/components/subtitle/SearchSummary.vue";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";

export default {
  components: {
    SubtitleCard,
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
    return store.dispatch("subtitle/SEARCH_SUBTITLES", {
      keyword: query.keyword
    });
  },
  computed: {
    ...mapState("subtitle", [
      "searchLines",
      "searchCount",
      "keyword",
      "searchMore"
    ]),
    ...mapGetters("subtitle", ["searchLineCursor"])
  },
  methods: {
    ...mapActions("subtitle", [
      "SEARCH_SUBTITLES",
      "LIKE_SUBTITLE",
      "UNLIKE_SUBTITLE"
    ]),
    fetchMoreLines() {
      // keyword, page, append
      if (this.searchMore && !this.loading) {
        this.loading = true;
        this.SEARCH_SUBTITLES({
          keyword: this.keyword,
          cursor: this.searchLineCursor
        }).finally(() => {
          this.loading = false;
        });
      }
    },
    updateLike(line) {
      if (!line.user_liked) {
        this.LIKE_SUBTITLE(line.id);
      } else {
        this.UNLIKE_SUBTITLE(line.id);
      }
    }
  }
};
</script>
