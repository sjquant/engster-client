import { auth, user } from "~/api";

const actions = {
  // Auth
  SIGNIN({ commit }, { email, password }) {
    return auth.obtainToken(email, password).then(({ user }) => {
      commit("SET_USER", user);
    });
  },
  SIGNUP({ commit }, { email, password, nickname }) {
    return auth.register(email, password, nickname).then(({ user }) => {
      commit("SET_USER", user);
    });
  },
  SIGNOUT({ commit }) {
    commit("SIGNOUT");
  },
  UPDATE_PROFILE({ state, commit }, body) {
    const userid = state.user.id;
    return user.updateProfile(userid, body).then(user => {
      commit("SET_USER", user);
    });
  }
};

export default actions;
