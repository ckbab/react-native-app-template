import { Platform } from "react-native";
import { createBottomTabNavigator } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { primaryColor, fontColor } from "../constants/colors";
import { tabbarHeight } from "../constants/styles";
import Tab1 from "../components/Tab1";
import Tab2 from "../components/Tab2";
import Tab3 from "../components/Tab3";
import Tab4 from "../components/Tab4";
import { localize } from "../util/localization";
import { getTabOptions } from "../util/navigation";

const backgroundColor = "#fff";
const activeColor = primaryColor;
const inactiveColor = fontColor;

const createTabNavigator =
  Platform.OS === "ios"
    ? createBottomTabNavigator
    : createMaterialBottomTabNavigator;

const iosOptions = {
  tabBarOptions: {
    style: {
      height: tabbarHeight
    },
    showLabel: true,
    activeTintColor: activeColor,
    inactiveTintColor: inactiveColor,
    inactiveBackgroundColor: backgroundColor,
    activeBackgroundColor: backgroundColor
  }
};

const androidOptions = {
  shifting: true,
  activeColor: activeColor,
  inactiveColor: inactiveColor,
  barStyle: {
    backgroundColor: backgroundColor
  }
};

const Tabs = createTabNavigator(
  {
    Tab1: {
      screen: Tab1,
      navigationOptions: () => ({
        ...getTabOptions(localize("tab.1"), "contact")
      })
    },
    Tab2: {
      screen: Tab2,
      navigationOptions: () => ({
        ...getTabOptions(localize("tab.2"), "airplane")
      })
    },
    Tab3: {
      screen: Tab3,
      navigationOptions: () => ({
        ...getTabOptions(localize("tab.3"), "list")
      })
    },
    Tab4: {
      screen: Tab4,
      navigationOptions: () => ({
        ...getTabOptions(localize("tab.4"), "beer")
      })
    }
  },
  {
    ...androidOptions,
    ...iosOptions
  }
);

export default Tabs;
