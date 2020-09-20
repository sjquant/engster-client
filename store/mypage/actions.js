import { mypage, subtitle } from "~/api";

export default {
  GET_ACTIVITY_SUMMARY({ commit }, userid) {
    return mypage.fetchActivitySummary(userid).then(res => {
      commit("SET_ACTIVITIY_SUMMARY", res);
    });
  },
  FETCH_ENGLISH_LIKES({ commit }, { userid, cursor = null, limit = 20 }) {
    return mypage.fetchEnglishLikes(userid, { cursor, limit }).then(res => {
      if (res.data.length === 0) {
        commit("SET_FETCH_MORE", false);
        return;
      }

      if (cursor) {
        commit("APPEND_LINE_RESULT", res);
      } else {
        commit("SET_LINES", res);
        commit("SET_FETCH_MORE", true);
      }
    });
  },
  FETCH_KOREAN_LIKES({ commit }, { userid, cursor = null, limit = 20 }) {
    return mypage.fetchKoreanLikes(userid, { cursor, limit }).then(res => {
      if (res.data.length === 0) {
        commit("SET_FETCH_MORE", false);
        return;
      }

      if (cursor) {
        commit("APPEND_LINE_RESULT", res);
      } else {
        commit("SET_LINES", res);
        commit("SET_FETCH_MORE", true);
      }
    });
  },
  FETCH_TRANSLATIONS({ commit }, { userid, cursor = null, limit = 20 }) {
    return mypage.fetchTranslations(userid, { cursor, limit }).then(res => {
      if (res.data.length === 0) {
        commit("SET_FETCH_MORE", false);
        return;
      }

      if (cursor) {
        commit("APPEND_LINE_RESULT", res);
      } else {
        commit("SET_LINES", res);
        commit("SET_FETCH_MORE", true);
      }
    });
  }
};
