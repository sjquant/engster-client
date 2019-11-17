import { auth } from "~/api";
import jwtDecode from "jwt-decode";

const actions = {
  // Auth
  SIGNIN({ commit }, { email, password }) {
    return auth
      .obtainToken(email, password)
      .then(({ access_token, refresh_token, user }) => {
        commit("SET_ACCESS_TOKEN", access_token);
        commit("SET_REFRESH_TOKEN", refresh_token);
        commit("SET_USER", user)
      });
  },
  SIGNUP({ commit }, { email, password, nickname }) {
    return auth
      .register(email, password, nickname)
      .then(({ access_token, refresh_token, user }) => {
        commit("SET_ACCESS_TOKEN", access_token)
        commit("SET_REFRESH_TOKEN", refresh_token)
        commit("SET_USER", user)
      });
  },
  SIGNOUT({ commit }) {
    commit("SIGNOUT")
  },
  REFRESH({ state, commit }) {
    return auth.refreshToken(state.refreshToken).then(({ access_token }) => {
      commit("SET_ACCESS_TOKEN", access_token);
    });
  },
  INSPECT_TOKEN({ state, dispatch }) {
    return new Promise((resolve) => {
      let accessToken = state.accessToken;
      if (accessToken) {
        let accessDecoded = jwtDecode(accessToken);
        // token expiration time
        let accessExp = accessDecoded.exp;
        if (accessExp - Date.now() / 1000 < 300) {
          // 토큰 만료시간이 5분도 남지 않은 경우
          dispatch("REFRESH").then(() => {
            resolve()
          }).catch(() => {
            dispatch('LOGOUT')
            resolve(true);
          });
        }
        resolve(true);
      } else {
        dispatch('LOGOUT')
        resolve(false);
      }
    })
  },
  UPDATE_PROFILE({ commit }, profileBody) {
    auth.updateProfile(profileBody).then(user => {
      commit("SET_USER", user)
    })
  }
};

export default actions;