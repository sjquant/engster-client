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
  async fetch({ store, route }) {
    const userid = route.params.userid;
    store.dispatch("mypage/GET_ACTIVITY_SUMMARY", userid);
  },
  components: {
    MyPageHeader,
    MyPageNav,
  },
  beforeDestroy() {
    this.CLEAR_LINE_RESULT();
  },
  methods: {
    ...mapMutations("mypage", ["APPEND_LINE_RESULT", "CLEAR_LINE_RESULT"]),
  },
};
</script>