import Vue from "vue";

const mutations = {
  SET_LIKE_RESULT(state, result) {
    state.likeResult = result;
  },
  APPEND_LIKE_RESULT(state, result) {
    Vue.set(state.likeResult, "page", result.page)
    state.likeResult.lines.push(...result.lines)
  },
  CLEAR_STATE(state) {
    state.likeResult = {
      lines: [],
      max_page: null,
      page: null
    }
  }
};

export default mutations;
