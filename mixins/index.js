import { mapMutations } from "vuex";
import { request } from "../utils.js";

export const socialAuthMixin = {
  methods: {
    ...mapMutations("user", ["SET_USER"]),
    socialSignin(provider) {
      this.$auth.authenticate(provider).then(({ data }) => {
        this.SET_USER(data.user);
        request.setCSRFHeader({});
        this.$router.push("/");
      });
    }
  }
};
