import axios from "axios";

export default axios.create({
  baseURL: process.env.BASEURL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization:
      "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NjE4ODAyMjcsIm5iZiI6MTU2MTg4MDIyNywianRpIjoiNGM1ZTlhOWYtMjI3Yy00NTYxLTkyMzgtNzc3ODMzYzJlZDJiIiwiZXhwIjo4Nzk2MTc5MzgyNywiaWRlbnRpdHkiOiIyNjFjZmIxOC0xZTlkLTQ5NGEtOGQ3Mi0yOWU2OTkzZTJjMWEiLCJmcmVzaCI6ZmFsc2UsInR5cGUiOiJhY2Nlc3MifQ.P-fFFJrB_ggdvimYvUu10BGPUwgpGA4ue4yvYM2IPhU"
  }
});
