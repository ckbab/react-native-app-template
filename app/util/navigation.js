import React from "react";
import { StyleSheet } from "react-native";
import { backgroundColor, fontColor, primaryColor } from "../constants/colors";
import { shadow2 } from "../constants/shadows";
import { CustomIcon, Icon, Text } from "../components/shared";
import { BackButton, EmptyButton } from "../navigators/Components";
import { trackScreenView } from "./tracker";

export const getTabBarOptions = () => {
  const activeColor = primaryColor;
  const inactiveColor = fontColor;
  return {
    activeTintColor: activeColor,
    activeBackgroundColor: backgroundColor,
    inactiveTintColor: inactiveColor,
    inactiveBackgroundColor: backgroundColor,
  };
};

export const getTabItemOptions = (title, icon, customIcon = false) => {
  const IconComponent = customIcon ? CustomIcon : Icon;
  const tabBarIcon = ({ color }) => (
    <IconComponent name={icon} size={20} color={color} />
  );
  const tabBarLabel = ({ color }) => (
    <Text color={color} size="small" numberOfLines={1} style={styles.tab}>
      {title}
    </Text>
  );
  return { tabBarIcon, tabBarLabel };
};

export const getStackOptions = ({ navigation, route }) => {
  const { isScrolled } = route.params || {};
  const shadow = isScrolled ? shadow2 : null;
  return {
    headerLeft: () => BackButton(navigation),
    headerRight: () => EmptyButton(navigation),
    headerStyle: {
      backgroundColor: backgroundColor,
      elevation: 0,
      shadowOffset: { height: 0 },
      ...shadow,
    },
    headerTintColor: primaryColor,
    headerTitleAlign: "center",
    headerTitleStyle: {
      textAlign: "center",
      fontFamily: "Roboto-Bold",
      fontWeight: "400",
      fontSize: 20,
    },
  };
};

export const pushScreen = (navigation, name, params) => {
  const key = name + JSON.stringify(params);
  navigation.navigate({ name, key, params });
  trackScreenView(name);
};

const styles = StyleSheet.create({
  tab: {
    marginBottom: 4,
  },
});
