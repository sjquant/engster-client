export default {
  state: () => ({
    alerts: []
  }),
  actions: {
    ADD_ALERT({ commit }, { msg, type = "normal" }) {
      commit("ADD_ALERT", { msg, type });
      setTimeout(() => {
        commit("TRIM_ALERT");
      }, 2000);
    }
  },
  getters: {},
  mutations: {
    ADD_ALERT(state, { msg, type }) {
      const timestamp = new Date().getTime();
      state.alerts.unshift({ timestamp, msg, type });
    },
    TRIM_ALERT(state) {
      state.alerts = state.alerts.slice(0, -1);
    }
  }
};
