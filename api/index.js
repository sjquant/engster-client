import axios from "../plugins/axios.js";

export const search = {
  fetchEnglish(keyword, page = 1) {
    return axios.get("/search/english", {
      params: {
        keyword: keyword,
        page: page
      }
    });
  },
  fetchKorean(keyword, page = 1) {
    return axios.get("/search/korean", {
      params: {
        keyword: keyword,
        page: page
      }
    });
  },
  fetchTranslations(line_id, page) {
    return axios.get("search/translations", {
      params: {
        line_id: line_id,
        page: page
      }
    });
  }
};
