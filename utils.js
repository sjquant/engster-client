import axios from "axios";
import cookies from "axios/lib/helpers/cookies";

const axiosObj = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
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
    cookie = cookie ? cookie : document.cookie;
    const value = cookie.match(`(^|;) ?${key}=([^;]*)(;|$)`);
    return value ? value[2] : null;
  }
};
