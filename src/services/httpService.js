const axios = require("axios");

const axiosInstance = axios;

async function get(url) {
    return await axiosInstance.get(url);
}

async function post(url, body) {
    return await axiosInstance.post(url, body);
}

export { get, post }