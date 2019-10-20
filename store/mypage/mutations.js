import Vue from "vue";

const mutations = {
  SET_ACTIVITIY_SUMMARY(state, data) {
    console.log(data)
    state.activitySummary = data
  },
  SET_LINE_RESULT(state, result) {
    state.lineResult = result;
  },
  APPEND_LINE_RESULT(state, result) {
    Vue.set(state.lineResult, "page", result.page)
    state.lineResult.lines.push(...result.lines)
  },
  CLEAR_STATE(state) {
    state.lineResult = {
      lines: [],
      max_page: null,
      page: null
    }
  }
};

export default mutations;
