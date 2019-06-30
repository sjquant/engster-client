import Vue from "vue";

const mutations = {
  SET_KEYWORD(state, keyword) {
    state.keyword = keyword;
  },
  SET_SEARCH_RESULT(state, result) {
    state.searchResult = result;
  },
  INCREASE_TRANSLATION_COUNT(state, lineid) {
    let line = state.searchResult.lines.find(line => line.id === lineid);
    if (line) Vue.set(line, "translation_count", line.translation_count + 1);
  },
  ADD_USER_LIKED(state, lineid) {
    let line = state.searchResult.lines.find(line => line.id === lineid);
    state.searchResult.user_liked.push(lineid);
    if (line) Vue.set(line, "like_count", line.like_count + 1);
  },
  REMOVE_USER_LIKED(state, lineid) {
    let index = state.searchResult.user_liked.indexOf(lineid);
    let line = state.searchResult.lines.find(line => line.id === lineid);
    Vue.delete(state.searchResult.user_liked, index);
    if (line) Vue.set(line, "like_count", line.like_count - 1);
  }
};

export default mutations;
