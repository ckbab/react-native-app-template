import React from "react";
import { Platform, StyleSheet, View } from "react-native";
import { primaryColor, backgroundColor } from "../constants/colors";
import { shadow2 } from "../constants/shadows";
import { CustomIcon, Icon, Text } from "../components/shared";
import { headerHeight } from "../constants/styles";
import { BackButton } from "../navigators/Components";
import { getStatusBarHeight } from "./screen";

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

export const getStackOptions = navigation => {
  return {
    headerLeft: BackButton(navigation),
    headerRight: <View />,
    headerTintColor: primaryColor,
    headerStyle: {
      height: headerHeight,
      backgroundColor: backgroundColor,
      borderBottomWidth: 0,
      elevation: 0
    },
    headerTitleStyle: {
      flex: 1,
      marginHorizontal: 0,
      textAlign: "center",
      fontFamily: "Roboto-Bold",
      fontWeight: "400",
      fontSize: 20
    }
  };
};

export const getDefaultHeaderOptions = navigation => {
  const isScrolled = navigation.getParam("isScrolled");
  const shadow = isScrolled ? shadow2 : null;
  const extraHeight = Platform.select({
    android: getStatusBarHeight(),
    ios: 0
  });
  return {
    headerStyle: {
      height: headerHeight + extraHeight,
      paddingTop: extraHeight,
      backgroundColor: backgroundColor,
      borderBottomWidth: 0,
      elevation: 0,
      ...shadow
    }
  };
};

const styles = StyleSheet.create({
  iosTab: {
    marginBottom: 4
  }
});
