import { request } from "../utils";

export default {
  register(email, password, nickname) {
    return request
      .post("/auth/register", {
        email,
        password,
        nickname
      })
      .then(({ data }) => {
        request.setCSRFHeader({});
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
        request.setCSRFHeader({});
        return data;
      });
  },
  refreshToken() {
    return request.post("/auth/refresh-token").then(({ data, headers }) => {
      request.setCookieHeader(headers["set-cookie"]); // For refreshing token on ssr
      request.setCSRFHeader({});
      return data;
    });
  },
  signOut() {
    return request.post("/auth/sign-out").then(({ data }) => data);
  },
  validateToken() {
    return request.post("/auth/validate-token").then(({ data }) => {
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
  requestResettingLostPassword(email) {
    return request
      .post("/auth/reset-lost-password/request", {
        email: email
      })
      .then(({ data }) => data);
  },
  resetLostPassword({ token, password }) {
    return request
      .post("/auth/reset-lost-password", {
        token,
        password
      })
      .then(({ data }) => data);
  }
};
