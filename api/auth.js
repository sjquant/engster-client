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
  }
};