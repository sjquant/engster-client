import { mypage } from "~/api";

export default {
  FETCH_ENGLISH_LIKES({ commit }, { userid, page = 1, append = false }) {
    return mypage.fetchEnglishLikes(userid, page).then(data => {
      if (append) {
        commit("APPEND_LINE_RESULT", data)
      } else {
        commit("SET_LINE_RESULT", data);
      }
    });
  },
  FETCH_KOREAN_LIKES({ commit }, { userid, page = 1, append = false }) {
    return mypage.fetchKoreanLikes(userid, page).then(data => {
      if (append) {
        commit("APPEND_LINE_RESULT", data)
      } else {
        commit("SET_LINE_RESULT", data);
      }
    });
  },
  FETCH_TRANSLATIONS({ commit }, { userid, page = 1, append = false }) {
    return mypage.fetchTranslations(userid, page).then(data => {
      if (append) {
        commit("APPEND_LINE_RESULT", data)
      } else {
        commit("SET_LINE_RESULT", data);
      }
    });
  },
};
