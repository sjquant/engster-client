import { setAuthInHeader } from "@/utils";

const mutations = {
  SET_ACCESS_TOKEN(state, accessToken) {
    if (!accessToken) return;
    state.accessToken = accessToken;
    localStorage.accessToken = accessToken;
    setAuthInHeader(accessToken);
  },
  SET_REFRESH_TOKEN(state, refreshToken) {
    if (!refreshToken) return;
    state.refreshToken = refreshToken;
    localStorage.refreshToken = refreshToken;
  },
  SET_USER(state, user) {
    if (!user) return;
    state.user = user;
    localStorage.user = JSON.stringify(user);
  },
  SIGNOUT(state) {
    state.accessToken = null;
    state.refreshToken = null;
    state.user = null;
    // 모든 localStorage 데이터 제거
    localStorage.clear();
    setAuthInHeader(null);
  },
};

export default mutations;
