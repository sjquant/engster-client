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
  fetchTranslations(lineid, page = 1) {
    return axios.get("/translations", {
      params: {
        line_id: lineid,
        page: page
      }
    });
  },
  createTranslation(lineid, translation) {
    return axios.post("/translations", {
      line_id: lineid,
      translation: translation
    });
  },
  likeEnglish(lineid) {
    return axios.post(`/like/english/${lineid}`, {});
  },
  unlikeEnglish(lineid) {
    return axios.delete(`/like/english/${lineid}`, {});
  }
};
