import React from "react";
import { ToolbarButton } from "../components/shared";

export const BackButton = navigation => {
  const onPress = () => {
    navigation.goBack();
  };
  return <ToolbarButton icon="arrow-back" onPress={onPress} />;
};
