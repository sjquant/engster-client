import { request } from "../utils";

export default {
  createSignedUrl({ filetype, filename, app }) {
    if ([filetype, filename, app].some(x => !x)) {
      throw new Error("`filetype`, `app`, `filename` fields are all required");
    }
    return request
      .post(`/file/${filetype}/create-signed-url`, {
        app,
        filename
      })
      .then(({ data }) => data);
  }
};
