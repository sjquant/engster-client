import { search } from "~/api";
import { mapMutations } from "vuex";

export const translationMixin = {
  data() {
    return {
      isTranslationOn: false,
      translations: []
    };
  },
  methods: {
    ...mapMutations("search", ["INCREASE_TRANSLATION_COUNT"]),
    async updateTranslationOn() {
      this.isTranslationOn = !this.isTranslationOn;
      if (this.isTranslationOn) {
        this.translations = await search
          .fetchTranslations(this.line.id)
          .then(({ data }) => data);
      }
    },
    async createTranslation(translation) {
      if (translation !== "") {
        let resp = await search
          .createTranslation(this.line.id, translation)
          .then(({ data }) => data);
        this.translations.unshift(resp);
        // remove translation
        this.$refs.transCard.$refs.commentInput.$refs.input.value = "";
        this.INCREASE_TRANSLATION_COUNT(this.line.id);
      }
    }
  }
};
