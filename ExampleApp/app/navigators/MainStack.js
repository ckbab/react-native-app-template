import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Stack1 from "../components/Stack1";
import Stack2 from "../components/Stack2";
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
        <StackNav.Screen name="Stack1" component={Stack1} />
        <StackNav.Screen name="Stack2" component={Stack2} />
      </StackNav.Navigator>
    );
  }
}
