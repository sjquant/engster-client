import axios from "../plugins/axios.js";

export const search = {
  fetchEnglish(keyword) {
    return axios.get(`/search/english`, {
      params: {
        keyword: keyword
      }
    });
  },
  fetchKorean(keyword) {
    return axios.get(`/search/korean`, {
      params: {
        keyword: keyword
      }
    });
  }
};
