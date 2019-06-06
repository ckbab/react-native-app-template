import { Constants } from "expo";
import { Dimensions, Platform } from "react-native";
import { Header } from "react-navigation";

export const getScreenWidth = () => {
  const width = Dimensions.get("window").width;
  return width;
};

export const getScreenHeight = () => {
  const height = Dimensions.get("window").height;
  return height;
};

export const getHeaderHeight = () => {
  const statusBarHeight = Constants.statusBarHeight || 0;
  const headerHeight = Header.HEIGHT || 0;
  const offset = Platform.OS === "ios" ? -20 : 0; // To make it work on iPhoneX
  const stickyHeaderHeight = headerHeight + statusBarHeight + offset;
  return stickyHeaderHeight;
};

export const getStatusBarHeight = () => {
  return Constants.statusBarHeight || 0;
};
