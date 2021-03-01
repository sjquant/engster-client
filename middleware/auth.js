import { cookie as cookieUtils, request } from "../utils.js";

export default async function(context) {
  if (!process.server) {
    return;
  }
  const cookie = context.req.headers.cookie;
  const accessCSRF = cookieUtils.parse("X-CSRF-Token", cookie);
  const refreshCSRF = cookieUtils.parse("X-RCSRF-Token", cookie);

  if (cookie) {
    request.setCookieHeader(cookie);
  }

  if (accessCSRF && refreshCSRF) {
    request.setCSRFHeader({
      accessCSRF,
      refreshCSRF
    });
  }

  const access_token = cookieUtils.parse("access_token_cookie", cookie);
  if (access_token) {
    await context.store.dispatch("user/VALIDATE_TOKEN");
  }
}
