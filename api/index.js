import request from "../libs/request";

export const auth = {
  register(email, password, nickname) {
    return request
      .post("/auth/register", {
        email,
        password,
        nickname
      })
      .then(({ data }) => data);
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
  fetchEnglish(keyword, page = 1) {
    return request
      .get("/subtitle/search/english", {
        params: {
          keyword,
          page
        }
      })
      .then(({ data }) => data);
  },
  fetchKorean(keyword, page = 1) {
    return request
      .get("/subtitle/search/korean", {
        params: {
          keyword,
          page
        }
      })
      .then(({ data }) => data);
  },
  fetchRandomSubtitles() {
    return request.get("/subtitle/random/subtitles").then(({ data }) => data);
  },
  fetchTranslations(lineid, page = 1) {
    return request
      .get("/subtitle/translations", {
        params: {
          line_id: lineid,
          page
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
  fetchEnglishLikes(userid, page = 1) {
    return request
      .get(`/my-page/${userid}/liked-english-lines`, {
        params: {
          page
        }
      })
      .then(({ data }) => data);
  },
  fetchKoreanLikes(userid, page = 1) {
    return request
      .get(`/my-page/${userid}/liked-korean-lines`, {
        params: {
          page
        }
      })
      .then(({ data }) => data);
  },
  fetchTranslations(userid, page = 1) {
    return request
      .get(`/my-page/${userid}/translations`, {
        params: {
          page
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
