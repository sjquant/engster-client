import { subtitle, translation, user } from "../../api";

export default {
  GET_ACTIVITY_SUMMARY({ commit }, userid) {
    return user.fetchActivitySummary(userid).then(res => {
      commit("SET_ACTIVITIY_SUMMARY", res);
    });
  },
  FETCH_LIKED_SUBTITLES({ commit }, { userid, cursor = null, limit = 20 }) {
    return subtitle.fetchUserLiked({ userid, cursor, limit }).then(res => {
      if (cursor) {
        commit("APPEND_LINE_RESULT", res);
      } else {
        commit("SET_LINES", res);
        commit("SET_FETCH_MORE", true);
      }

      if (res.data.length === 0) {
        commit("SET_FETCH_MORE", false);
      }
    });
  },
  FETCH_LIKED_TRANSLATIONS({ commit }, { userid, cursor = null, limit = 20 }) {
    return translation.fetchUserLiked({ userid, cursor, limit }).then(res => {
      if (cursor) {
        commit("APPEND_LINE_RESULT", res);
      } else {
        commit("SET_LINES", res);
        commit("SET_FETCH_MORE", true);
      }

      if (res.data.length === 0) {
        commit("SET_FETCH_MORE", false);
      }
    });
  },
  FETCH_WRITTEN_TRANSLATIONS(
    { commit },
    { userid, cursor = null, limit = 20 }
  ) {
    return translation.fetchUserWritten({ userid, cursor, limit }).then(res => {
      if (cursor) {
        commit("APPEND_LINE_RESULT", res);
      } else {
        commit("SET_LINES", res);
        commit("SET_FETCH_MORE", true);
      }

      if (res.data.length === 0) {
        commit("SET_FETCH_MORE", false);
      }
    });
  }
};
