import { request } from "../utils";

export default {
  uploadPhoto(photoData) {
    return request.post(`/images/upload`, photoData).then(({ data }) => data);
  }
};
