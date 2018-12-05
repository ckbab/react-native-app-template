import { Platform } from "react-native";
import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator
} from "react-navigation";
import Tab1 from "../components/Tab1";
import Tab2 from "../components/Tab2";
import Tab3 from "../components/Tab3";
import Tab4 from "../components/Tab4";

const createTabNavigator =
  Platform.OS === "ios"
    ? createBottomTabNavigator
    : createMaterialTopTabNavigator;

const Tabs = createTabNavigator({
  Tab1: {
    screen: Tab1
  },
  Tab2: {
    screen: Tab2
  },
  Tab3: {
    screen: Tab3
  },
  Tab4: {
    screen: Tab4
  }
});

export default Tabs;
