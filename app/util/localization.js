import { getIn } from "timm";
import store from "../store/store";
import { getLanguage as getLang } from "../store/settings/settingsSelector";
import en from "../languages/en";
import sv from "../languages/sv";

const availableLanguages = { en, sv };

export const getLanguage = () => {
  const state = store.getState();
  const language = getLang(state);
  return Object.keys(availableLanguages).includes(language) ? language : "en";
};

export const localize = (key) => {
  const language = getLanguage();
  const label = getIn(availableLanguages, [language, key]);
  return label || key;
};
