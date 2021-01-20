<template>
  <div>
    <SubtitleTranslationInput ref="input" :lineid="lineid" />
    <div class="card-container" v-if="translations">
      <SubtitleTranslationItem
        :translation="each"
        v-for="each in translations"
        :key="each.id"
        @like-translation="likeTranslation"
      />
    </div>
  </div>
</template>
<script>
import SubtitleTranslationInput from "./SubtitleTranslationInput.vue";
import SubtitleTranslationItem from "./SubtitleTranslationItem.vue";
import { mapState, mapMutations } from "vuex";

export default {
  components: {
    SubtitleTranslationInput,
    SubtitleTranslationItem
  },
  props: {
    lineid: Number,
    translations: Array
  },
  computed: {
    ...mapState("subtitle", ["lineid2translations"])
  },
  methods: {
    likeTranslation(translationId, liked) {
      this.$emit("like-translation", translationId, liked);
    }
  }
};
</script>
<style lang="scss" scoped>
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
