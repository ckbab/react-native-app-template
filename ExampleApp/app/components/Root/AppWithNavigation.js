import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Drawer from "../../navigators/Drawer";

export default class AppWithNavigation extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Drawer />
      </NavigationContainer>
    );
  }
}
