import { AsyncStorage } from "react-native";
import { persistCombineReducers } from "redux-persist";
import items from "./items/itemsReducer";
import navigation from "./navigation/navigationReducer";

const config = {
  key: "primary",
  storage: AsyncStorage,
  whitelist: ["items"]
};

const reducers = persistCombineReducers(config, {
  items,
  navigation
});

export default reducers;
