import { AsyncStorage } from "react-native";
import { persistCombineReducers } from "redux-persist";
import items from "./items/itemsReducer";
import settings from "./settings/settingsReducer";

const config = {
  key: "primary",
  storage: AsyncStorage,
  whitelist: ["settings", "items"],
};

const reducers = persistCombineReducers(config, {
  items,
  settings,
});

export default reducers;
