import { cookie as cookieUtils, request } from "../utils.js";

export default async context => {
  const { user } = localStorage;
  context.store.commit("user/SET_USER", JSON.parse(user || null));

  // Set CSRF token as header
  request.setCSRFHeader({});
};
