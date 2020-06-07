import axios from "axios";

export default axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",

  },
  withCredentials: true,
  xsrfHeaderName: "X-CSRF-Token",
  xsrfCookieName: "X-CSRF-Token"
});