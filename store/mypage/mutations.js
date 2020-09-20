import Vue from "vue";

const mutations = {
  SET_ACTIVITIY_SUMMARY(state, data) {
    state.activitySummary = data;
  },
  SET_LINES(state, result) {
    state.lines = result.data;
  },
  SET_FETCH_MORE(state, status) {
    state.fetchMore = status;
  },
  APPEND_LINE_RESULT(state, result) {
    state.lines.push(...result.data);
  },
  CLEAR_LINE_RESULT(state) {
    state.lines = [];
  }
};

export default mutations;
