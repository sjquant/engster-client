const mutations = {
  SET_SEARCH_WORD(state, searchWord) {
    state.searchWord = searchWord;
  },
  SET_SEARCH_RESULT(state, result) {
    state.searchResult = result;
  }
};

export default mutations;
