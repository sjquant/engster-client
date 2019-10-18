<template>
  <div>
    <pulse-loader class="loading-bar" :loading="loading" color="#1c3d5a" size="12px"></pulse-loader>
    <div v-infinite-scroll="fetchMoreLines">
      <english-card v-for="line in lines" :key="line.id" :line="line"></english-card>
    </div>
  </div>
</template>

<script>
import EnglishCard from "~/components/my-page/EnglishCard";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import { mapState, mapActions } from "vuex";
export default {
  components: {
    EnglishCard,
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
      lines: state => state.mypage.lineResult.lines,
      page: state => state.mypage.lineResult.page,
      maxPage: state => state.mypage.lineResult.max_page,
      count: state => state.mypage.lineResult.count,
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