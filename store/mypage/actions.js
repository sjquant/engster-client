import { mypage, subtitle } from "~/api";

export default {
  FETCH_ACTIVITY_SUMMARY({ commit }, userid) {
    return mypage.fetchActivitySummary(userid).then((data) => {
      commit("SET_ACTIVITIY_SUMMARY", data);
    });
  },
  FETCH_ENGLISH_LIKES({ commit }, { userid, page = 1, append = false }) {
    return mypage.fetchEnglishLikes(userid, page).then((data) => {
      if (append) {
        commit("APPEND_LINE_RESULT", data);
      } else {
        commit("SET_LINE_RESULT", data);
      }
    });
  },
  FETCH_KOREAN_LIKES({ commit }, { userid, page = 1, append = false }) {
    return mypage.fetchKoreanLikes(userid, page).then((data) => {
      if (append) {
        commit("APPEND_LINE_RESULT", data);
      } else {
        commit("SET_LINE_RESULT", data);
      }
    });
  },
  FETCH_TRANSLATIONS({ commit }, { userid, page = 1, append = false }) {
    return mypage.fetchTranslations(userid, page).then((data) => {
      if (append) {
        commit("APPEND_LINE_RESULT", data);
      } else {
        commit("SET_LINE_RESULT", data);
      }
    });
  },
  LIKE_LINE_ENGLISH({ commit }, lineid) {
    return subtitle.likeEnglish(lineid).then(() => {
      commit("ADD_USER_LIKED", lineid);
    });
  },
  UNLIKE_LINE_ENGLISH({ commit }, lineid) {
    return subtitle.unlikeEnglish(lineid).then(() => {
      commit("REMOVE_USER_LIKED", lineid);
    });
  },
  LIKE_LINE_KOREAN({ commit }, lineid) {
    return subtitle.likeKorean(lineid).then(() => {
      commit("ADD_USER_LIKED", lineid);
    });
  },
  UNLIKE_LINE_KOREAN({ commit }, lineid) {
    return subtitle.unlikeKorean(lineid).then(() => {
      commit("REMOVE_USER_LIKED", lineid);
    });
  },
};
