import { request } from "../utils";

export default {
  getProfile(userId) {
    return request.get(`/users/${userId}/profile`).then(({ data }) => data);
  },
  updateProfile(userId, profileBody) {
    return request
      .patch(`/users/${userId}/profile`, profileBody)
      .then(({ data }) => data);
  },
  fetchActivitySummary(userid) {
    return request
      .get(`/users/${userid}/activity-summary`)
      .then(({ data }) => data);
  }
};
