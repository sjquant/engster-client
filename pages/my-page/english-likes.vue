<template>
  <div>
    <PulseLoader class="loading-bar" :loading="loading" color="#1c3d5a" size="12px" />
    <div v-infinite-scroll="fetchMoreLines">
      <EnglishCard v-for="line in lines" :key="line.id" :line="line" @like="updateLike" />
    </div>
  </div>
</template>

<script>
import EnglishCard from "~/components/subtitle/EnglishCard";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  components: {
    EnglishCard,
    PulseLoader,
  },
  async fetch({ store, route }) {
    const userid = route.params.userid;
    await store.dispatch("mypage/FETCH_ENGLISH_LIKES", {
      userid,
    });
  },
  data() {
    return {
      loading: false,
    };
  },
  computed: {
    ...mapState("mypage", ["lines", "fetchMore"]),
    ...mapGetters("auth", ["userid"]),
    ...mapGetters("mypage", ["likeLineCursor"]),
  },
  methods: {
    ...mapActions("mypage", [
      "FETCH_ENGLISH_LIKES",
      "LIKE_LINE_ENGLISH",
      "UNLIKE_LINE_ENGLISH",
    ]),
    fetchMoreLines() {
      if (this.fetchMore && !this.loading) {
        this.loading = true;
        this.FETCH_ENGLISH_LIKES({
          userid: this.userid,
          cursor: this.likeLineCursor,
        }).finally(() => {
          this.loading = false;
        });
      }
    },
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