import { search } from "~/api";

export default {
  FETCH_LINE_ENGLISH({ commit }, { searchWord, page = 1, append = false }) {
    return search.fetchEnglish(searchWord, page).then(({ data }) => {
      if (append) {
        commit("APPEND_SEARCH_RESULT", data)
      } else {
        commit("SET_SEARCH_RESULT", data);
      }
    });
  },
  FETCH_LINE_KOREAN({ commit }, { searchWord, page = 1, append = false }) {
    return search.fetchKorean(searchWord, page).then(({ data }) => {
      if (append) {
        commit("APPEND_SEARCH_RESULT", data)
      } else {
        commit("SET_SEARCH_RESULT", data);
      }
    });
  },
  LIKE_LINE_ENGLISH({ commit }, lineid) {
    return search.likeEnglish(lineid).then(() => {
      commit("ADD_USER_LIKED", lineid);
    });
  },
  UNLIKE_LINE_ENGLISH({ commit }, lineid) {
    return search.unlikeEnglish(lineid).then(() => {
      commit("REMOVE_USER_LIKED", lineid);
    });
  }
};
