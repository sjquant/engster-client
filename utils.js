import axios from "axios";
import cookies from "axios/lib/helpers/cookies";

const axiosObj = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    common: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  },
  withCredentials: true
});

export const request = {
  get(path, options = {}) {
    return axiosObj.get(`${path}`, options);
  },
  post(path, data, options = {}) {
    return axiosObj.post(`${path}`, data, options);
  },
  delete(path, data = {}, options = {}) {
    return axiosObj.delete(`${path}`, { data: data, ...options });
  },
  patch(path, data, options = {}) {
    return axiosObj.patch(`${path}`, data, options);
  },
  put(path, data, options = {}) {
    return axiosObj.put(`${path}`, data, options);
  },
  setCookieHeader(cookie) {
    axiosObj.defaults.headers.common["Cookie"] = cookie;
  },
  setCSRFHeader({ accessCSRF, refreshCSRF }) {
    accessCSRF = accessCSRF || cookies.read("X-CSRF-Token");
    refreshCSRF = refreshCSRF || cookies.read("X-RCSRF-Token");
    axiosObj.defaults.headers.common["X-CSRF-Token"] = accessCSRF
      ? accessCSRF
      : null;
    axiosObj.defaults.headers.common["X-RCSRF-Token"] = refreshCSRF
      ? refreshCSRF
      : null;
  }
};

export const cookie = {
  set(key, value, durationDay) {
    let date = new Date();
    date.setTime(date.getTime() + durationDay * 60 * 60 * 24 * 1000);
    document.cookie = `${key}=${value}; expires=${date.toUTCString()}"; path=/`;
  },
  parse(key, cookie = null) {
    if (!cookie && !process.server) {
      cookie = document.cookie;
    }

    if (!cookie) {
      return null;
    }

    const value = cookie.match(`(^|;) ?${key}=([^;]*)(;|$)`);
    return value ? value[2] : null;
  }
};

export const escapeRegex = (text, ignores = []) => {
  // prettier-ignore
  let escapeChars = new Set([
      '.', '*',  '\\-', '\\?',
      '^', '$', '{', '}',
      '(', ')', '|', '[',
      '\\]', '\\' + '\\',
    ]);
  for (let each of ignores) {
    escapeChars.delete(each);
  }
  escapeChars = Array.from(escapeChars);
  const escapePattern = new RegExp(`[${escapeChars.join("")}]`, "g");
  return text.replace(escapePattern, "\\$&");
};

export const uuid4hex = () => {
  const crypto = window.crypto || window.msCrypto;
  return [1e7, 1e3, 4e3, 8e3, 1e11]
    .join("")
    .replace(/[018]/g, c =>
      (
        c ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
      ).toString(16)
    );
};
