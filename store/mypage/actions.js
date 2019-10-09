import { mypage } from "~/api";

export default {
  FETCH_ENGLISH_LIKES({ commit }, { userid, page = 1, append = false }) {
    return mypage.fetchEnglishLikes(userid, page).then(data => {
      if (append) {
        commit("APPEND_LIKE_RESULT", data)
      } else {
        commit("SET_LIKE_RESULT", data);
      }
    });
  },
  FETCH_KOREAN_LIKES({ commit }, { userid, page = 1, append = false }) {
    return mypage.fetchKoreanLikes(userid, page).then(data => {
      if (append) {
        commit("APPEND_LIKE_RESULT", data)
      } else {
        commit("SET_LIKE_RESULT", data);
      }
    });
  },
};
