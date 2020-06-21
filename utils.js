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
  setCSRFHeader() {
    const accessCSRF = cookies.read("X-CSRF-Token");
    const refeshCSRF = cookies.read("X-RCSRF-Token");
    axiosObj.defaults.headers.common["X-CSRF-Token"] = accessCSRF
      ? accessCSRF
      : null;
    axiosObj.defaults.headers.common["X-RCSRF-Token"] = refeshCSRF
      ? refeshCSRF
      : null;
  }
};
