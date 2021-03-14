import { request, escapeRegex } from "../utils";

export default {
  search({ keyword, cursor = null, limit = 20 }) {
    keyword = escapeRegex(keyword);
    return request
      .get("/subtitles/search", {
        params: {
          keyword,
          cursor,
          limit
        }
      })
      .then(({ data }) => data);
  },
  fetchRandom(maxCount) {
    return request
      .get("/subtitles/random", { params: { max_count: maxCount } })
      .then(({ data }) => data);
  },
  fetchTranslations(lineid, { cursor = null, limit = 20 }) {
    return request
      .get(`/subtitles/${lineid}/translations`, {
        params: {
          cursor,
          limit
        }
      })
      .then(({ data }) => data);
  },
  createTranslation(lineid, translation) {
    return request
      .post(`/subtitles/${lineid}/translations`, {
        translation
      })
      .then(({ data }) => data);
  },
  like(lineid) {
    return request
      .post(`/subtitles/${lineid}/like`, {})
      .then(({ data }) => data);
  },
  unlike(lineid) {
    return request
      .delete(`/subtitles/${lineid}/like`, {})
      .then(({ data }) => data);
  },
  fetchUserLiked({ userid, cursor = null, limit = 20 }) {
    return request
      .get(`/subtitles/liked`, {
        params: {
          user_id: userid,
          cursor,
          limit
        }
      })
      .then(({ data }) => data);
  }
};
