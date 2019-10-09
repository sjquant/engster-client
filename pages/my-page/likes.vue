<template>
  <section class="like-result-container">
    <pulse-loader class="loading-bar" :loading="loading" color="#1c3d5a" size="12px"></pulse-loader>
    <div v-infinite-scroll="fetchMoreLines">
      <like-english-card v-for="line in lines" :key="line.id" :line="line"></like-english-card>
    </div>
  </section>
</template>

<script>
import LikeEnglishCard from "../../components/my-page/LikeEnglishCard";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import { mapState, mapActions } from "vuex";
export default {
  components: {
    LikeEnglishCard,
    PulseLoader
  },
  async fetch({ store }) {
    await store.dispatch("mypage/FETCH_ENGLISH_LIKES", {
      userid: store.state.auth.user.id
    });
  },
  data() {
    return {
      loading: false
    };
  },
  computed: {
    ...mapState({
      lines: state => state.mypage.likeResult.lines,
      page: state => state.mypage.likeResult.page,
      maxPage: state => state.mypage.likeResult.max_page,
      count: state => state.mypage.likeResult.count,
      userid: state => state.auth.user.id
    })
  },
  methods: {
    ...mapActions("mypage", ["FETCH_ENGLISH_LIKES"]),
    fetchMoreLines() {
      if (this.page < this.maxPage) {
        this.loading = true;
        this.FETCH_ENGLISH_LIKES({
          userid: this.userid,
          page: this.page + 1,
          append: true
        }).finally(() => {
          this.loading = false;
        });
      }
    }
  }
};
</script>

<style lang="scss">
@import "../search/search.scss";
</style>