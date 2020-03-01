import Vue from "vue";

const mutations = {
  SET_KEYWORD(state, keyword) {
    state.keyword = keyword;
  },
  SET_SEARCH_RESULT(state, data) {
    state.searchResult = data;
  },
  APPEND_SEARCH_RESULT(state, data) {
    Vue.set(state.searchResult, "page", data.page);
    state.searchResult.data.push(...data.data);
  },
  SET_TRANSLATIONS_FOR_LINE(state, { lineid, data }) {
    Vue.set(state.translationsForLine, lineid, data);
  },
  APPEND_TRANSLATIONS_FOR_LINE(state, { lineid, data }) {
    translations = state.translationsForLine[lineid];
    Vue.set(translations, "page", data.page);
    translations.data.push(...data.data);
  },
  INCREASE_TRANSLATION_COUNT(state, lineid) {
    let line = state.searchResult.data.find(each => each.id === lineid);
    if (line) Vue.set(line, "translation_count", line.translation_count + 1);
  },
  ADD_USER_LIKED(state, lineid) {
    let line = state.searchResult.data.find(each => each.id === lineid);
    state.searchResult.user_liked.push(lineid);
    if (line) Vue.set(line, "like_count", line.like_count + 1);
  },
  REMOVE_USER_LIKED(state, lineid) {
    let index = state.searchResult.user_liked.indexOf(lineid);
    let line = state.searchResult.data.find(each => each.id === lineid);
    Vue.delete(state.searchResult.user_liked, index);
    if (line) Vue.set(line, "like_count", line.like_count - 1);
  }
};

export default mutations;
