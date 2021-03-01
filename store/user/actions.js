import { auth, user } from "~/api";

const actions = {
  // Auth
  async SIGNIN({ commit }, { email, password }) {
    const { user } = await auth.obtainToken(email, password);
    commit("SET_USER", user);
  },
  async SIGNUP({ commit }, { email, password, nickname }) {
    const { user } = await auth.register(email, password, nickname);
    commit("SET_USER", user);
  },
  async REFRESH_TOKEN({ commit, dispatch }) {
    try {
      const { user } = await auth.refreshToken();
      commit("SET_USER", user);
    } catch (error) {
      console.error(error);
      await dispatch("SIGN_OUT");
    }
  },
  async VALIDATE_TOKEN({ commit, dispatch }) {
    try {
      const { user, expired_at } = await auth.validateToken();
      commit("SET_USER", user);
      if (new Date(expired_at) - new Date() < 60 * 60 * 1000) {
        await dispatch("REFRESH_TOKEN");
      }
    } catch (error) {
      if (
        error.response.status === 401 &&
        error.response.data?.msg === "Signature has expired"
      ) {
        await dispatch("REFRESH_TOKEN");
      } else {
        console.error(error);
        await dispatch("SIGN_OUT");
      }
    }
  },
  async SIGN_OUT({ commit }) {
    try {
      await auth.signOut();
    } finally {
      commit("SIGN_OUT");
    }
  },
  UPDATE_PROFILE({ state, commit }, body) {
    const userid = state.user.id;
    return user.updateProfile(userid, body).then(user => {
      commit("SET_USER", user);
    });
  }
};

export default actions;
