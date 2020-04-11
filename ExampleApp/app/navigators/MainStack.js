import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import FirstScreen from "../components/FirstScreen/FirstScreen";
import SecondScreen from "../components/SecondScreen/SecondScreen";
import { getStackOptions } from "../util/navigation";
import { MenuButton } from "./Components";
import Tabs from "./Tabs";

const StackNav = createStackNavigator();

export default class MainStack extends React.Component {
  render() {
    return (
      <StackNav.Navigator screenOptions={getStackOptions}>
        <StackNav.Screen
          name="Main"
          component={Tabs}
          options={({ navigation }) => ({
            headerLeft: () => MenuButton(navigation),
          })}
        />
        <StackNav.Screen name="FirstScreen" component={FirstScreen} />
        <StackNav.Screen name="SecondScreen" component={SecondScreen} />
      </StackNav.Navigator>
    );
  }
}
