import axios from "axios";

export default axios.create({
  baseURL: process.env.BASEURL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});
