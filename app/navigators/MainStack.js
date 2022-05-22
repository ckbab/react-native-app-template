import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import AppInfo from "../components/AppInfo/AppInfo";
import Home from "../components/Home/Home";

const StackNav = createStackNavigator();

export default function MainStack() {
  return (
    <NavigationContainer>
      <StackNav.Navigator>
        <StackNav.Screen name="Home" component={Home} />
        <StackNav.Screen name="AppInfo" component={AppInfo} />
      </StackNav.Navigator>
    </NavigationContainer>
  );
}
