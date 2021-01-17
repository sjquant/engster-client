import { subtitle, translation } from "../../api";

export default {
  SEARCH_SUBTITLES({ commit }, { keyword, cursor = null, limit = 20 }) {
    commit("SET_KEYWORD", keyword);
    return subtitle.search({ keyword, cursor, limit }).then(res => {
      if (cursor) {
        commit("APPEND_SEARCH_LINES", res);
      } else {
        commit("SET_SEARCH_LINES", res);
        commit("SET_SEARCH_MORE", true);
      }

      if (res.data.length === 0) {
        commit("SET_SEARCH_MORE", false);
      }
    });
  },
  SEARCH_TRANSLATIONS({ commit }, { keyword, cursor = null, limit = 20 }) {
    commit("SET_KEYWORD", keyword);
    return translation.search({ keyword, cursor, limit }).then(res => {
      if (res.data.length === 0) {
        commit("SET_SEARCH_MORE", false);
      }
      if (cursor) {
        commit("APPEND_SEARCH_LINES", res);
      } else {
        commit("SET_SEARCH_LINES", res);
        commit("SET_SEARCH_MORE", true);
      }

      if (res.data.length === 0) {
        commit("SET_SEARCH_MORE", false);
      }
    });
  },
  FETCH_RANDOM_SUBTITLES({ commit }) {
    return subtitle.fetchRandom().then(res => {
      commit("SET_SEARCH_LINES", res);
      commit("SET_SEARCH_MORE", true);
    });
  },
  LIKE_SUBTITLE({ commit }, lineid) {
    return subtitle.like(lineid).then(() => {
      commit("ADD_USER_LIKED", lineid);
    });
  },
  UNLIKE_SUBTITLE({ commit }, lineid) {
    return subtitle.unlike(lineid).then(() => {
      commit("REMOVE_USER_LIKED", lineid);
    });
  },
  LIKE_TRANSLATION({ commit }, lineid) {
    return translation.like(lineid).then(() => {
      commit("ADD_USER_LIKED", lineid);
    });
  },
  UNLIKE_TRANSLATION({ commit }, lineid) {
    return translation.unlike(lineid).then(() => {
      commit("REMOVE_USER_LIKED", lineid);
    });
  },
  FETCH_TRANSLATIONS_FOR_LINE(
    { commit },
    { lineid, cursor = null, limit = 20 }
  ) {
    return subtitle.fetchTranslations(lineid, { cursor, limit }).then(res => {
      if (cursor) {
        commit("APPEND_TRANSLATIONS", { lineid, data: res.data });
      } else {
        commit("SET_TRNASLATIONS", { lineid, data: res.data });
      }
    });
  },
  CREATE_TRANSLATION({ dispatch }, { lineid, translation }) {
    return subtitle.createTranslation(lineid, translation).then(() => {
      dispatch("FETCH_TRANSLATIONS_FOR_LINE", { lineid });
    });
  }
};
