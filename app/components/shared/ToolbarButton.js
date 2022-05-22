import { getContrastColor } from "@ckbab/js-utils";
import { Icon } from "@ckbab/react-native-components";
import PropTypes from "prop-types";
import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { backgroundColor, primaryColor } from "../../constants/colors";
import Button from "./Button";
import Text from "./Text";

export default function ToolbarButton({
  color: propsColor,
  disabled,
  icon,
  label,
  loading,
  onPress,
  style,
}) {
  const color =
    propsColor || getContrastColor(backgroundColor, primaryColor, "#fff");

  if (loading) {
    return (
      <View style={[styles.container, style]}>
        <ActivityIndicator color={color} />
      </View>
    );
  }

  return (
    <Button
      onPress={onPress}
      style={[styles.container, style]}
      disabled={disabled}
    >
      {icon ? (
        <Icon name={icon} size={24} color={color} />
      ) : (
        <Text style={[styles.label, { color }]}>{label}</Text>
      )}
    </Button>
  );
}

ToolbarButton.propTypes = {
  color: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  label: PropTypes.string,
  loading: PropTypes.bool,
  onPress: PropTypes.func,
  style: PropTypes.any,
};

ToolbarButton.defaultProps = {
  color: "",
  disabled: false,
  icon: null,
  label: "",
  loading: false,
  onPress: null,
  style: {},
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    minWidth: 44,
    height: 44,
  },
  label: {
    paddingHorizontal: 16,
  },
  disabled: {
    opacity: 0.3,
  },
});
