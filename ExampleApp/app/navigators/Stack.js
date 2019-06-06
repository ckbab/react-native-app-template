import React from "react";
import { createStackNavigator } from "react-navigation";
import Stack1 from "../components/Stack1";
import Stack2 from "../components/Stack2";
import { ToolbarButton } from "../components/shared";
import Tabs from "./Tabs";

const MenuButton = navigation => {
  const { openDrawer } = navigation;
  const onPress = () => {
    openDrawer();
  };
  return <ToolbarButton icon="menu" onPress={onPress} />;
};

const Stack = createStackNavigator({
  Main: {
    screen: Tabs,
    navigationOptions: ({ navigation }) => ({
      headerTitle: "Main",
      headerLeft: MenuButton(navigation)
    })
  },
  Stack1: {
    screen: Stack1
  },
  Stack2: {
    screen: Stack2
  }
});

export default Stack;
