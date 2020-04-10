import Constants from "expo-constants";
import { Dimensions } from "react-native";

export const getScreenWidth = (factor = 1) => {
  const width = Dimensions.get("window").width;
  return width * factor;
};

export const getScreenHeight = (factor = 1) => {
  const height = Dimensions.get("window").height;
  return height * factor;
};

export const getStatusBarHeight = () => {
  return Constants.statusBarHeight || 0;
};
