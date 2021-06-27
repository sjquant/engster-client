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
      :detail="each"
      :highlight="keyword"
      :is-subtitle="false"
      @like="updateLike"
    />
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
import SubtitleCard from "../../components/SubtitleCard.vue";
import SearchSummary from "../../components/SearchSummary.vue";
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
  head() {
    return {
      title: `${this.keyword} - Engster 검색`,
      meta: [
        {
          charset: "utf-8"
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1"
        },
        {
          hid: "description",
          name: "description",
          content: `'${this.keyword}'의 Engster 검색결과 입니다. 실제 영화/미드를 통해 ${this.keyword}를 공부해보세요.`
        },
        {
          hid: "og:title",
          name: "og:title",
          content: `${this.keyword} - Engster 검색`
        },
        {
          hid: "og:description",
          name: "og:description",
          content: `'${this.keyword}'의 Engster 검색결과 입니다. 실제 영화/미드를 통해 ${this.keyword}를 공부해보세요.`
        }
      ]
    };
  },
  async fetch({ store, query }) {
    await store.dispatch("subtitle/SEARCH_TRANSLATIONS", {
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
