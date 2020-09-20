import { subtitle } from "../../api";

export default {
  SEARCH_LINE_ENGLISH({ commit }, { keyword, cursor = null, limit = 20 }) {
    commit("SET_KEYWORD", keyword);
    return subtitle.searchEnglish({ keyword, cursor, limit }).then(res => {
      if (res.data.length === 0) {
        commit("SET_SEARCH_MORE", false);
        return;
      }

      if (cursor) {
        commit("APPEND_SEARCH_LINES", res);
      } else {
        commit("SET_SEARCH_LINES", res);
        commit("SET_SEARCH_MORE", true);
      }
    });
  },
  SEARCH_LINE_KOREAN({ commit }, { keyword, cursor = null, limit = 20 }) {
    commit("SET_KEYWORD", keyword);
    return subtitle.searchKorean({ keyword, cursor, limit }).then(res => {
      if (res.data.length === 0) {
        commit("SET_SEARCH_MORE", false);
        return;
      }
      if (cursor) {
        commit("APPEND_SEARCH_LINES", res);
      } else {
        commit("SET_SEARCH_LINES", res);
        commit("SET_SEARCH_MORE", true);
      }
    });
  },
  FETCH_RANDOM_SUBTITLES({ commit }) {
    return subtitle.fetchRandomSubtitles().then(res => {
      commit("SET_SEARCH_LINES", res);
      commit("SET_SEARCH_MORE", true);
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
    return subtitle
      .createTranslation(lineid, translation)
      .then(dispatch("FETCH_TRANSLATIONS_FOR_LINE", { lineid }));
  }
};
