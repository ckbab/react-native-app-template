import Icon from "@expo/vector-icons/FontAwesome";
import React from "react";
import { TouchableOpacity } from "react-native";
import { createStackNavigator } from "react-navigation";
import Stack1 from "../components/Stack1";
import Stack2 from "../components/Stack2";
import Tabs from "./Tabs";

const MenuButton = navigation => {
  const { openDrawer } = navigation;
  const onPress = () => {
    openDrawer();
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon name="bars" size={32} color="green" />
    </TouchableOpacity>
  );
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
