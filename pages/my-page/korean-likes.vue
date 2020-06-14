<template>
  <div>
    <PulseLoader class="loading-bar" :loading="loading" color="#1c3d5a" size="12px" />
    <div v-infinite-scroll="fetchMoreLines">
      <KoreanCard v-for="line in lines" :key="line.id" :line="line" @like="updateLike" />
    </div>
  </div>
</template>

<script>
import KoreanCard from "~/components/subtitle/KoreanCard.vue";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import { mapState, mapActions } from "vuex";
export default {
  components: {
    KoreanCard,
    PulseLoader
  },
  async fetch({ store, route }) {
    const userid = route.params.userid;
    await store.dispatch("mypage/FETCH_KOREAN_LIKES", {
      userid
    });
  },
  data() {
    return {
      loading: false
    };
  },
  computed: {
    ...mapState({
      lines: state => state.mypage.lineResult.data,
      page: state => state.mypage.lineResult.page,
      maxPage: state => state.mypage.lineResult.max_page,
      count: state => state.mypage.lineResult.count,
      userid: state => state.auth.user.id
    })
  },
  methods: {
    ...mapActions("mypage", [
      "FETCH_KOREAN_LIKES",
      "LIKE_LINE_KOREAN",
      "UNLIKE_LINE_KOREAN"
    ]),
    fetchMoreLines() {
      if (this.page < this.maxPage) {
        this.loading = true;
        this.FETCH_KOREAN_LIKES({
          userid: this.userid,
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