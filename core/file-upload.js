import { file as fileAPI } from "../api";
import axios from "axios";

export const uploadFile = async ({ file, filetype, app }) => {
  const { image_path, signed_url } = await fileAPI.createSignedUrl({
    filetype: filetype,
    filename: file.name,
    app: app
  });

  if (file.size > 1024 * 1024 * 15) {
    throw new Error("File is too big");
  }

  await axios.put(signed_url, file, {
    headers: {
      "Content-Type": file.type
    }
  });
  return image_path;
};
