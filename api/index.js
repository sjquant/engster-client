import axios from "../plugins/axios.js";

export const search = {
  fetchEnglish(searchWord) {
    return axios.get(`/search/english/${searchWord}`);
  },
  fetchKorean(searchWord) {
    return axios.get(`/search/korean/${searchWord}`);
  }
};
