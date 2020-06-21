import { request } from "../utils";
export default async context => {
  const { user } = localStorage;
  context.store.commit("auth/SET_USER", JSON.parse(user || null));
  request.setCSRFHeader();
};
