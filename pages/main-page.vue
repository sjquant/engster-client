<template>
  <div class="search-result-container">
    <PulseLoader class="loading-bar" :loading="loading" color="#1c3d5a" size="12px" />
    <RandomCard v-for="each in searchLines" :key="each.id" :line="each" @like="updateLike" />
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
import RandomCard from "~/components/subtitle/RandomCard.vue";
import SearchSummary from "~/components/subtitle/SearchSummary.vue";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";

export default {
  components: {
    RandomCard,
    SearchSummary,
    PulseLoader,
  },
  data() {
    return {
      loading: false,
    };
  },
  fetch({ store, query }) {
    return store.dispatch("subtitle/FETCH_RANDOM_SUBTITLES");
  },
  computed: {
    ...mapState("subtitle", ["searchLines", "keyword"]),
  },
  methods: {
    ...mapActions("subtitle", [
      "FETCH_RANDOM_SUBTITLES",
      "LIKE_LINE_ENGLISH",
      "UNLIKE_LINE_ENGLISH",
    ]),
    updateLike(line) {
      if (!line.user_liked) {
        this.LIKE_LINE_ENGLISH(line.id);
      } else {
        this.UNLIKE_LINE_ENGLISH(line.id);
      }
    },
  },
};
</script>