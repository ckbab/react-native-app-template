import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Switch from "../../navigators/Switch";

export default class AppWithNavigation extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Switch />
      </NavigationContainer>
    );
  }
}
