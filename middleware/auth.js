import { cookie as cookieUtils, request } from "../utils.js";

export default function(context) {
  if (!process.server) {
    return;
  }
  const cookie = context.req.headers.cookie;
  const accessCSRF = cookieUtils.parse("X-CSRF-Token", cookie);
  const refreshCSRF = cookieUtils.parse("X-RCSRF-Token", cookie);
  request.setCookieHeader(cookie);
  request.setCSRFHeader({ accessCSRF, refreshCSRF });
}
