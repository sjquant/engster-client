import { request } from "../utils.js";

export default async context => {
  // Set CSRF token as header
  request.setCSRFHeader({});
};
