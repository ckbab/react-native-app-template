import axios from "axios";
import { apiUrl } from "../constants/config";
import store from "../store/store";
import { getLanguage } from "./localization";
import { showError } from "./message";

const getParams = (params) => {
  const state = store.getState();
  console.log("Add username/password from store?", state);
  const language = getLanguage();
  return {
    language,
    ...params,
  };
};

export const post = async (endpoint, params = {}) => {
  try {
    const url = `${apiUrl}/post/${endpoint}.php`;
    const allParams = getParams(params);
    const response = await axios.get(url, { params: allParams });
    return response.data;
  } catch (err) {
    showError();
    return {};
  }
};

export const get = async (endpoint, params = {}) => {
  try {
    const url = `${apiUrl}/${endpoint}`;
    const allParams = getParams(params);
    const response = await axios.get(url, { params: allParams });
    return response.data;
  } catch (err) {
    showError();
    return {};
  }
};
