import { mapMutations } from "vuex";

export const socialAuthMixin = {
  methods: {
    ...mapMutations("auth", [
      "SET_ACCESS_TOKEN",
      "SET_REFRESH_TOKEN",
      "SET_USER",
    ]),
    socialSignin(provider) {
      this.$auth.authenticate(provider).then(({ data }) => {
        this.SET_ACCESS_TOKEN(data.access_token);
        this.SET_REFRESH_TOKEN(data.refresh_token);
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
