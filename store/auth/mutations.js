
const mutations = {
  SET_USER(state, user) {
    if (!user) return;
    state.user = user;
    localStorage.user = JSON.stringify(user);
  },
  SIGNOUT(state) {
    state.user = null;
    // 모든 localStorage 데이터 제거
    localStorage.clear();
  },
};

export default mutations;
