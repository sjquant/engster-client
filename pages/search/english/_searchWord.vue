<template>
  <div>
    <div
      style="padding-left:1.6rem; font-size:16px; margin: 3.2rem 0; color: gray"
    >"what you do" 에 대한 검색 결과 (총: 10건)</div>
    <section>
      <EnglishCard v-for="{id, line} in lines" :key="id" :line="line"></EnglishCard>
    </section>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import EnglishCard from "~/components/search/EnglishCard.vue";
export default {
  components: {
    EnglishCard
  },
  async fetch({ store, params }) {
    await store.dispatch("FETCH_LINE_ENGLISH", params.searchWord);
  },
  computed: {
    ...mapState({
      lines: state => state.search.searchResult.lines,
      page: state => state.search.searchResult.page,
      maxPage: state => state.search.searchResult.max_page
    })
  },
  methods: {
    ...mapActions({
      FETCH_LINE_ENGLISH: "FETCH_LINE_ENGLISH"
    })
  }
};
</script>
