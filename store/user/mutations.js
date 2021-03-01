const mutations = {
  SET_USER(state, user) {
    if (!user) return;
    state.user = user;
  },
  SIGN_OUT(state) {
    state.user = null;
  }
};

export default mutations;
