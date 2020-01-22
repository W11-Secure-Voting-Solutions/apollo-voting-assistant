const axios = require("axios");

const axiosInstance = axios;

async function get(url, queryParams) {
  return await axiosInstance.get(url, queryParams);
}

async function post(url, body) {
  return await axiosInstance.post(url, body);
}

export { get, post }