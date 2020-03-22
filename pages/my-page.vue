<template>
  <div class="my-page-container">
    <MyPageHeader />
    <MyPageNav />
    <nuxt-child></nuxt-child>
  </div>
</template>

<script>
import MyPageHeader from "../components/my-page/MyPageHeader";
import MyPageNav from "../components/my-page/MyPageNav";
import { mapMutations } from "vuex";

export default {
  async fetch({ store }) {
    let userid = store.state.auth.user.id;
    store.dispatch("mypage/FETCH_ACTIVITY_SUMMARY", userid);
  },
  components: {
    MyPageHeader,
    MyPageNav
  },
  beforeDestroy() {
    this.CLEAR_STATE();
  },
  methods: {
    ...mapMutations("mypage", ["CLEAR_STATE"])
  }
};
</script>
<style lang="scss">
@import "./search/search.scss";
</style>