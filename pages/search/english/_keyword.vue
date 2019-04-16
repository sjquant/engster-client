<template>
  <div>
    <div
      style="padding-left:1.6rem; font-size:16px; margin: 3.2rem 0; color: gray"
    >"what you do" 에 대한 검색 결과 (총: 10건)</div>
    <section>
      <EnglishCard v-for="i in 10" :key="i"></EnglishCard>
    </section>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import EnglishCard from "~/components/search/EnglishCard.vue";
export default {
  components: {
    EnglishCard
  },
  created() {
    this.FETCH_LINE_ENGLISH(this.$route.params.keyword);
  },
  methods: {
    ...mapActions({
      FETCH_LINE_ENGLISH: "lines/FETCH_LINE_ENGLISH"
    })
  }
};
</script>
