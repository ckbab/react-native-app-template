import React from "react";
import { View } from "react-native";
import { ToolbarButton } from "../components/shared";

export const BackButton = (navigation) => {
  const onPress = () => {
    navigation.goBack();
  };
  return <ToolbarButton icon="arrow-back" onPress={onPress} />;
};

export const MenuButton = (navigation) => {
  const { openDrawer } = navigation;
  return <ToolbarButton icon="menu" onPress={openDrawer} />;
};

export const EmptyButton = () => {
  return <View />;
};
