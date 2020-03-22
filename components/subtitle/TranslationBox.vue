<template>
  <div>
    <TranslationBoxInput
      ref="input"
      :placeholder="inputPlaceholder"
      @comment-created="(value) => $emit('comment-created', value)"
      @focus="checkLogin"
    />
    <div class="card-container" v-if="translations">
      <TranslationBoxCard :translation="each" v-for="each in translationsData" :key="each.id" />
    </div>
  </div>
</template>
<script>
import TranslationBoxInput from "./TranslationBoxInput.vue";
import TranslationBoxCard from "./TranslationBoxCard.vue";
import { mapState } from "vuex";

export default {
  components: {
    TranslationBoxInput,
    TranslationBoxCard
  },
  props: {
    inputPlaceholder: {
      type: String
    },
    lineid: {
      type: Number
    }
  },
  computed: {
    ...mapState("auth", ["user"]),
    ...mapState("subtitle", ["translationsForLine"]),
    translations() {
      return this.translationsForLine[this.lineid];
    },
    translationsData() {
      return this.translations ? this.translations.data : [];
    }
  },
  methods: {
    checkLogin() {
      if (!this.user) {
        this.$router.push({ path: "/sign-in" });
      }
    }
  }
};
</script>
<style scoped lang="scss">
@import "~utils";
.card-container {
  width: 100%;
  max-height: 24rem;
  overflow: auto;
  background-color: $gray-lighter;
  margin-bottom: 1.6rem;
  border-radius: 4px;
  padding: 0.8rem 0;
}
</style>
