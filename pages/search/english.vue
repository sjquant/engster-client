<template>
  <div>
    <div
      style="padding-left:1.6rem; font-size:16px; margin: 3.2rem 0; color: gray"
    >"{{ keyword }}" 에 대한 검색 결과 (총: 10건)</div>
    <section>
      <EnglishCard v-for="line in lines" :key="line.id" :line="line"></EnglishCard>
    </section>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
import EnglishCard from "~/components/search/EnglishCard.vue";
export default {
  components: {
    EnglishCard
  },
  watchQuery: ["keyword"],
  async fetch({ store, query }) {
    await store.dispatch("FETCH_LINE_ENGLISH", query.keyword);
    store.commit("SET_KEYWORD", query.keyword);
  },
  computed: {
    ...mapState({
      lines: state => state.search.searchResult.lines,
      page: state => state.search.searchResult.page,
      maxPage: state => state.search.searchResult.max_page,
      keyword: state => state.search.keyword
    })
  }
};
</script>
