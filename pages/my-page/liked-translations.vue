<template>
  <div>
    <PulseLoader
      class="loading-bar"
      :loading="loading"
      color="#1c3d5a"
      size="12px"
    />
    <div
      v-infinite-scroll="fetchMoreLines"
      infinite-scroll-distance="100"
      infinite-scroll-throttle-delay="500"
    >
      <SubtitleCard
        v-for="line in lines"
        :key="line.id"
        :main-line="line.translation"
        :sub-line="line.line"
        :detail="line"
        :is-subtitle="false"
      />
    </div>
  </div>
</template>

<script>
import SubtitleCard from "../../components/common/SubtitleCard.vue";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  components: {
    SubtitleCard,
    PulseLoader
  },
  async fetch({ store, route }) {
    const userid = route.params.userid;
    await store.dispatch("mypage/FETCH_LIKED_TRANSLATIONS", {
      userid
    });
  },
  data() {
    return {
      loading: false
    };
  },
  computed: {
    ...mapState("mypage", ["lines", "fetchMore"]),
    ...mapGetters("mypage", ["likeLineCursor"]),
    ...mapGetters("user", ["userid"])
  },
  methods: {
    ...mapActions("mypage", ["FETCH_LIKED_TRANSLATIONS"]),
    ...mapActions("subtitle", ["LIKE_TRANSLATION", "UNLIKE_TRANSLATION"]),
    fetchMoreLines() {
      if (this.fetchMore && !this.loading) {
        this.loading = true;
        this.FETCH_LIKED_TRANSLATIONS({
          userid: this.userid,
          cursor: this.likeLineCursor
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
