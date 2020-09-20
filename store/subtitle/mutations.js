import Vue from "vue";

const mutations = {
  SET_KEYWORD(state, keyword) {
    state.keyword = keyword;
  },
  SET_SEARCH_LINES(state, result) {
    state.searchLines = result.data;
    state.searchCount = result.count;
  },
  APPEND_SEARCH_LINES(state, result) {
    state.searchLines.push(...result.data);
  },
  SET_TRNASLATIONS(state, { lineid, data }) {
    Vue.set(state.lineid2translations, lineid, data);
  },
  SET_SEARCH_MORE(state, status) {
    state.searchMore = status;
  },
  APPEND_TRANSLATIONS(state, { lineid, data }) {
    let translations = state.lineid2translations[lineid];
    translations.data.push(...data.data);
  },
  CHANGE_TRANSLATION_BY_INDEX(state, { lineid, index, data }) {
    if (index < 0) return;

    let translations = state.lineid2translations[lineid];
    Vue.set(translations, index, data);
  },
  INCREASE_TRANSLATION_COUNT(state, lineid) {
    let line = state.searchLines.find(each => each.id === lineid);
    if (line) Vue.set(line, "translation_count", line.translation_count + 1);
  },
  ADD_USER_LIKED(state, lineid) {
    let line = state.searchLines.find(each => each.id === lineid);
    if (line) {
      Vue.set(line, "like_count", line.like_count + 1);
      Vue.set(line, "user_liked", true);
    }
  },
  REMOVE_USER_LIKED(state, lineid) {
    let line = state.searchLines.find(each => each.id === lineid);
    if (line) {
      Vue.set(line, "like_count", line.like_count - 1);
      Vue.set(line, "user_liked", false);
    }
  }
};

export default mutations;
