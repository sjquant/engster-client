export default {
  likeLineCursor(state) {
    if (state.lines.length === 0) return null;
    return state.lines[state.lines.length - 1].like_id;
  },
  translationCursor(state) {
    if (state.lines.length === 0) return null;
    return state.lines[state.lines.length - 1].id;
  }
};
