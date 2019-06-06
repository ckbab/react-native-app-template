import React from "react";
import { Platform, StyleSheet } from "react-native";
import { primaryColor } from "../constants/colors";
import { CustomIcon, Icon, Text } from "../components/shared";

export const getTabOptions = (title, icon, customIcon = false) => {
  const IconComponent = customIcon ? CustomIcon : Icon;
  const tabBarIcon = ({ tintColor }) => (
    <IconComponent name={icon} size={20} color={tintColor} />
  );
  const iosLabel = ({ tintColor }) => (
    <Text
      color={tintColor}
      size="small"
      numberOfLines={1}
      style={styles.iosTab}
    >
      {title}
    </Text>
  );
  // Note: cannot set color of material tab in Tabs.js options
  const androidLabel = (
    <Text color={primaryColor} size="small" numberOfLines={1}>
      {title}
    </Text>
  );
  return {
    title: { title },
    tabBarIcon: tabBarIcon,
    tabBarLabel: Platform.OS === "ios" ? iosLabel : androidLabel
  };
};

const styles = StyleSheet.create({
  iosTab: {
    marginBottom: 4
  }
});
