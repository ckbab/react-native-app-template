import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Tab1 from "../components/Tabs/Tab1";
import Tab2 from "../components/Tabs/Tab2";
import Tab3 from "../components/Tabs/Tab3";
import Tab4 from "../components/Tabs/Tab4";
import { localize } from "../util/localization";
import { getTabBarOptions, getTabItemOptions } from "../util/navigation";

const TabNav = createBottomTabNavigator();

export default class Tabs extends React.Component {
  render() {
    // Notice that "tabBarOptions" is called so an object is returned.
    // This differs to e.g. "screenOptions" which takes a method.
    return (
      <TabNav.Navigator tabBarOptions={getTabBarOptions()}>
        <TabNav.Screen
          name="Tab1"
          component={Tab1}
          options={getTabItemOptions(localize("tab.1"), "call")}
        />
        <TabNav.Screen
          name="Tab2"
          component={Tab2}
          options={getTabItemOptions(localize("tab.2"), "airplane")}
        />
        <TabNav.Screen
          name="Tab3"
          component={Tab3}
          options={getTabItemOptions(localize("tab.3"), "list")}
        />
        <TabNav.Screen
          name="Tab4"
          component={Tab4}
          options={getTabItemOptions(localize("tab.4"), "beer")}
        />
      </TabNav.Navigator>
    );
  }
}
