import { search } from "~/api";
import { mapMutations, mapActions } from "vuex";

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


export const socialAuthMixin = {
  methods: {
    ...mapMutations("auth", ["SET_ACCESS_TOKEN", "SET_REFRESH_TOKEN", "SET_USER"]),
    socialSignin(provider) {
      this.$auth.authenticate(provider).then(({ data }) => {
        this.SET_ACCESS_TOKEN(data.access_token);
        this.SET_REFRESH_TOKEN(data.refresh_token);
        this.SET_USER(data.user)
        this.$router.push("/");
      });
    }
  }
}