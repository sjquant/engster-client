import { request } from "../utils";

export const auth = {
  register(email, password, nickname) {
    return request.post("/auth/register", {
      email,
      password,
      nickname
    }).then(({ data }) => data)
  },
  obtainToken(email, password) {
    return request.post("/auth/obtain-token", {
      email,
      password
    }
    ).then(({ data }) => data)
  },
  refreshToken() {
    request.post("/auth/refresh-token").then(({ data }) => data)
  }
}

export const search = {
  fetchEnglish(keyword, page = 1) {
    return request.get("/search/english", {
      params: {
        keyword: keyword,
        page: page
      }
    }).then(({ data }) => data);
  },
  fetchKorean(keyword, page = 1) {
    return request.get("/search/korean", {
      params: {
        keyword: keyword,
        page: page
      }
    }).then(({ data }) => data);
  },
  fetchTranslations(lineid, page = 1) {
    return request.get("/translations", {
      params: {
        line_id: lineid,
        page: page
      }
    }).then(({ data }) => data);
  },
  createTranslation(lineid, translation) {
    return request.post("/translations", {
      line_id: lineid,
      translation: translation
    }).then(({ data }) => data);
  },
  likeEnglish(lineid) {
    return request.post(`/like/english/${lineid}`, {}).then(({ data }) => data);
  },
  unlikeEnglish(lineid) {
    return request.delete(`/like/english/${lineid}`, {}).then(({ data }) => data);
  }
};
