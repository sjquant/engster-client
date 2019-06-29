import Vue from "vue";

const mutations = {
  SET_KEYWORD(state, keyword) {
    state.keyword = keyword;
  },
  SET_SEARCH_RESULT(state, result) {
    state.searchResult = result;
  },
  INCREASE_TRANSLATION_COUNT(state, line_id) {
    let line = state.searchResult.lines.find(line => line.id === line_id);
    if (line) Vue.set(line, "translation_count", line.translation_count + 1);
  }
};

export default mutations;
