import { search } from "~/api";

export default {
  FETCH_LINE_ENGLISH({ commit }, searchWord) {
    return search.fetchEnglish(searchWord).then(({ data }) => {
      commit("SET_SEARCH_RESULT", data);
    });
  },
  FETCH_LINE_KOREAN({ commit }, searchWord) {
    return search.fetchKorean(searchWord).then(({ data }) => {
      commit("SET_SEARCH_RESULT", data);
    });
  }
};
