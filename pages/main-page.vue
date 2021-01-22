<template>
  <div class="search-result-container">
    <PulseLoader
      class="loading-bar"
      :loading="loading"
      color="#1c3d5a"
      size="12px"
    />
    <SubtitleCard
      v-for="each in searchLines"
      :key="each.id"
      :main-line="each.line"
      :sub-line="each.translation"
      :detail="each"
      @like="updateLike"
    />
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
import SubtitleCard from "../components/common/SubtitleCard.vue";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";

export default {
  components: {
    SubtitleCard,
    PulseLoader
  },
  data() {
    return {
      loading: false
    };
  },
  fetch({ store, query }) {
    return store.dispatch("subtitle/FETCH_RANDOM_SUBTITLES");
  },
  computed: {
    ...mapState("subtitle", ["searchLines", "keyword"])
  },
  methods: {
    ...mapActions("subtitle", [
      "FETCH_RANDOM_SUBTITLES",
      "LIKE_SUBTITLE",
      "UNLIKE_SUBTITLE"
    ]),
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
