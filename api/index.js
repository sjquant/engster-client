import { request } from "../utils";

export const auth = {
  register(email, password, nickname) {
    return request
      .post("/auth/register", {
        email,
        password,
        nickname
      })
      .then(({ data }) => {
        request.setCSRFHeader();
        return data;
      });
  },
  obtainToken(email, password) {
    return request
      .post("/auth/obtain-token", {
        email,
        password
      })
      .then(({ data }) => {
        request.setCSRFHeader();
        return data;
      });
  },
  refreshToken() {
    return request.post("/auth/refresh-token").then(({ data }) => {
      request.setCSRFHeader();
      return data;
    });
  },
  resetPassword({ originalPassword, newPassword }) {
    return request
      .put("/auth/reset-password", {
        original_password: originalPassword,
        new_password: newPassword
      })
      .then(({ data }) => data);
  },
  updateProfile(profileBody) {
    return request.put("/auth/profile", profileBody).then(({ data }) => data);
  }
};

export const subtitle = {
  searchEnglish({ keyword, cursor = null, limit = 20 }) {
    return request
      .get("/subtitle/search/english", {
        params: {
          keyword,
          cursor,
          limit
        }
      })
      .then(({ data }) => data);
  },
  searchKorean({ keyword, cursor = null, limit = 20 }) {
    return request
      .get("/subtitle/search/korean", {
        params: {
          keyword,
          cursor,
          limit
        }
      })
      .then(({ data }) => data);
  },
  fetchRandomSubtitles() {
    return request.get("/subtitle/random/subtitles").then(({ data }) => data);
  },
  fetchTranslations(lineid, { cursor = null, limit = 20 }) {
    return request
      .get("/subtitle/translations", {
        params: {
          line_id: lineid,
          cursor,
          limit
        }
      })
      .then(({ data }) => data);
  },
  createTranslation(lineid, translation) {
    return request
      .post("/subtitle/translations", {
        line_id: lineid,
        translation
      })
      .then(({ data }) => data);
  },
  likeEnglish(lineid) {
    return request
      .post(`/subtitle/likes/english/${lineid}`, {})
      .then(({ data }) => data);
  },
  unlikeEnglish(lineid) {
    return request
      .delete(`/subtitle/likes/english/${lineid}`, {})
      .then(({ data }) => data);
  },
  likeKorean(lineid) {
    return request
      .post(`/subtitle/likes/korean/${lineid}`, {})
      .then(({ data }) => data);
  },
  unlikeKorean(lineid) {
    return request
      .delete(`/subtitle/likes/korean/${lineid}`, {})
      .then(({ data }) => data);
  }
};

export const mypage = {
  fetchActivitySummary(userid) {
    return request
      .get(`/my-page/${userid}/activity-summary`)
      .then(({ data }) => data);
  },
  fetchEnglishLikes(userid, { cursor = null, limit = 20 }) {
    return request
      .get(`/my-page/${userid}/liked-english-lines`, {
        params: {
          cursor,
          limit
        }
      })
      .then(({ data }) => data);
  },
  fetchKoreanLikes(userid, { cursor = null, limit = 20 }) {
    return request
      .get(`/my-page/${userid}/liked-korean-lines`, {
        params: {
          cursor,
          limit
        }
      })
      .then(({ data }) => data);
  },
  fetchTranslations(userid, { cursor = null, limit = 20 }) {
    return request
      .get(`/my-page/${userid}/translations`, {
        params: {
          cursor,
          limit
        }
      })
      .then(({ data }) => data);
  }
};

export const upload = {
  uploadPhoto(photoData) {
    return request.post(`/upload/photo`, photoData).then(({ data }) => data);
  }
};
