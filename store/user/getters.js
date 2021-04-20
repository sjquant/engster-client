export default {
  userid(state) {
    return state.user?.id;
  },
  isAdmin(state) {
    return !!state.user?.is_admin;
  }
};
