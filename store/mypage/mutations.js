import Vue from "vue";

const mutations = {
  SET_ACTIVITIY_SUMMARY(state, data) {
    state.activitySummary = data;
  },
  SET_LINE_RESULT(state, result) {
    state.lineResult = result;
  },
  APPEND_LINE_RESULT(state, result) {
    Vue.set(state.lineResult, "page", result.page);
    state.lineResult.data.push(...result.data);
  },
  CLEAR_LINE_RESULT(state) {
    state.lineResult = {
      data: [],
      count: 0,
      max_page: 0,
      page: 0,
    };
  },
  ADD_USER_LIKED(state, lineid) {
    let line = state.lineResult.data.find((each) => each.id === lineid);
    if (line) {
      Vue.set(line, "like_count", line.like_count + 1);
      Vue.set(line, "user_liked", true);
    }
  },
  REMOVE_USER_LIKED(state, lineid) {
    let line = state.lineResult.data.find((each) => each.id === lineid);
    if (line) {
      Vue.set(line, "like_count", line.like_count - 1);
      Vue.set(line, "user_liked", false);
    }
  },
};

export default mutations;
