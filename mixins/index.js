import { mapMutations } from "vuex";

export const socialAuthMixin = {
  methods: {
    ...mapMutations("auth", [
      "SET_USER",
    ]),
    socialSignin(provider) {
      this.$auth.authenticate(provider).then(({ data }) => {
        this.SET_USER(data.user);
        this.$router.push("/");
      });
    },
  },
};

export const subtitleCardMixin = {
  data() {
    return {
      liked: false,
      translationOn: false,
    };
  },
};
