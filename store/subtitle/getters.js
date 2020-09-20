export default {
  searchLineCursor(state) {
    if (state.searchLines.length === 0) return null;
    return state.searchLines[state.searchLines.length - 1].id;
  }
};
