import { search } from "~/api";
import { mapMutations } from "vuex";

export const translationMixin = {
  data() {
    return {
      isTranslationOn: false,
      translationResult: {
        translations: [],
        max_page: null,
        page: null,
        user_liked: []
      }
    };
  },
  methods: {
    ...mapMutations("search", ["INCREASE_TRANSLATION_COUNT"]),
    async updateTranslationOn() {
      this.isTranslationOn = !this.isTranslationOn;
      if (this.isTranslationOn) {
        this.translationResult = await search
          .fetchTranslations(this.line.id)
      }
    },
    async createTranslation(translation) {
      if (translation !== "") {
        let resp = await search
          .createTranslation(this.line.id, translation)
        this.translationResult = await search
          .fetchTranslations(this.line.id)
        // remove translation
        this.$refs.transCard.$refs.commentInput.$refs.input.value = "";
      }
    }
  }
};
