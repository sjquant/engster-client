import { mapMutations, mapActions } from "vuex";
import { request } from "../utils.js";

export const socialAuthMixin = {
  methods: {
    ...mapMutations("user", ["SET_USER"]),
    ...mapActions("common", ["ADD_ALERT"]),
    socialSignin(provider) {
      this.$auth
        .authenticate(provider)
        .then(({ data }) => {
          this.SET_USER(data.user);
          request.setCSRFHeader({});
          this.$router.push("/");
        })
        .catch(_ => {
          this.ADD_ALERT({
            msg: "로그인 과정중 문제가 발생했습니다.",
            type: "error"
          });
        });
    }
  }
};
