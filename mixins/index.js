import { mapState, mapMutations, mapActions } from "vuex";

export const translationMixin = {
  data() {
    return {
      isTranslationOn: false
    };
  },
  methods: {
    ...mapMutations("search", ["INCREASE_TRANSLATION_COUNT"]),
    ...mapActions("search", [
      "FETCH_TRANSLATIONS_FOR_LINE",
      "CREATE_TRANSLATION"
    ]),
    async updateTranslationOn() {
      this.isTranslationOn = !this.isTranslationOn;
      if (this.isTranslationOn) {
        await this.FETCH_TRANSLATIONS_FOR_LINE({
          lineid: this.line.id
        });
      }
    },
    async createTranslation(translation) {
      if (translation !== "") {
        await this.CREATE_TRANSLATION({ lineid: this.line.id, translation });
        // remove translation
        this.$refs.transCard.$refs.commentInput.$refs.input.value = "";
      }
    }
  }
};

export const socialAuthMixin = {
  methods: {
    ...mapMutations("auth", [
      "SET_ACCESS_TOKEN",
      "SET_REFRESH_TOKEN",
      "SET_USER"
    ]),
    socialSignin(provider) {
      this.$auth.authenticate(provider).then(({ data }) => {
        this.SET_ACCESS_TOKEN(data.access_token);
        this.SET_REFRESH_TOKEN(data.refresh_token);
        this.SET_USER(data.user);
        this.$router.push("/");
      });
    }
  }
};
