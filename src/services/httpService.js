import {getterTypes} from "../store/types";
import store from "../store/store";
import axios from "axios";

const axiosInstance = axios;

async function getBBContent() {
  const sessionId = store.getters[getterTypes.GET_SESSION_ID];
  const url = `http://localhost:8000/helios/fake-booth/${sessionId}/`; // "https://gp.thenflash.com/helios/fake-booth";
  const response = await get(url);
  return response.data.body;
}

async function get(url, queryParams) {
  return await axiosInstance.get(url, queryParams);
}

async function post(url, body) {
  return await axiosInstance.post(url, body);
}

export { getBBContent }