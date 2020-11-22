import { request } from "../utils";

export default {
  search({ keyword, cursor = null, limit = 20 }) {
    return request
      .get("/translations/search", {
        params: {
          keyword,
          cursor,
          limit
        }
      })
      .then(({ data }) => data);
  },
  like(lineid) {
    return request
      .post(`/translations/${lineid}/like`, {})
      .then(({ data }) => data);
  },
  unlike(lineid) {
    return request
      .delete(`/translations/${lineid}/like`, {})
      .then(({ data }) => data);
  },
  fetchUserWritten({ userid, cursor = null, limit = 20 }) {
    return request
      .get("/translations/written", {
        params: {
          user_id: userid,
          cursor,
          limit
        }
      })
      .then(({ data }) => data);
  },
  fetchUserLiked({ userid, cursor = null, limit = 20 }) {
    return request
      .get(`/translations/liked`, {
        params: {
          user_id: userid,
          cursor,
          limit
        }
      })
      .then(({ data }) => data);
  }
};
