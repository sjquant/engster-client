import Vue from "vue";

const mutations = {
  SET_LIKE_RESULT(state, result) {
    state.likeResult = result;
  },
  APPEND_LIKE_RESULT(state, result) {
    Vue.set(state.likeResult, "page", result.page)
    state.likeResult.lines.push(...result.lines)
  },
};

export default mutations;
