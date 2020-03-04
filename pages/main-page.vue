<template>
  <div class="search-result-container">
    <PulseLoader class="loading-bar" :loading="loading" color="#1c3d5a" size="12px" />
    <section>
      <SubtitleCard v-for="each in randomSubtitles" :key="each.id" :line="each" />
    </section>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
import SubtitleCard from "~/components/subtitle/SubtitleCard.vue";
import SearchResult from "~/components/subtitle/SearchResult.vue";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";

export default {
  components: {
    SubtitleCard,
    SearchResult,
    PulseLoader
  },
  beforeDestroy() {
    this.CLEAR_RANDOM_SUBTITLES();
  },
  data() {
    return {
      loading: false
    };
  },
  fetch({ store, query }) {
    return store.dispatch("subtitle/FETCH_RANDOM_SUBTITLES", {
      page: query.page || 1
    });
  },
  computed: {
    ...mapState("subtitle", ["randomSubtitles"])
  },
  methods: {
    ...mapActions("subtitle", [
      "FETCH_RANDOM_SUBTITLES",
      "CLEAR_RANDOM_SUBTITLES"
    ])
  }
};
</script>

<style lang="scss">
@import "./search/search.scss";
</style>