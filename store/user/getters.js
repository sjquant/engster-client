export default {
  userid(state) {
    return state.user ? state.user.id : null;
  }
};
