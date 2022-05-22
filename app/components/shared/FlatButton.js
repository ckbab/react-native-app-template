import { getContrastColor } from "@ckbab/js-utils";
import PropTypes from "prop-types";
import React from "react";
import { ActivityIndicator, StyleSheet } from "react-native";
import { backgroundColor, primaryColor } from "../../constants/colors";
import Button from "./Button";
import Text from "./Text";

export default function FlatButton({
  disabled,
  label,
  onPress,
  type,
  style,
  submitting,
}) {
  const bgColor = type === "default" ? primaryColor : backgroundColor;
  const fontColor = getContrastColor(bgColor, primaryColor, "#fff");
  const preventDisabled = submitting && !disabled;

  return (
    <Button
      style={[
        styles.container,
        { backgroundColor: bgColor },
        preventDisabled && styles.notDisabled,
        style,
      ]}
      disabled={disabled || submitting}
      onPress={onPress}
    >
      {submitting && (
        <ActivityIndicator
          style={styles.loader}
          color={fontColor}
          size="small"
        />
      )}
      <Text color={fontColor} bold>
        {label}
      </Text>
    </Button>
  );
}

FlatButton.propTypes = {
  disabled: PropTypes.bool,
  label: PropTypes.string,
  onPress: PropTypes.func,
  type: PropTypes.oneOf(["default", "descrete"]),
  style: PropTypes.any,
  submitting: PropTypes.bool,
};

FlatButton.defaultProps = {
  disabled: false,
  label: "",
  onPress: null,
  type: "default",
  style: {},
  submitting: false,
};

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    borderRadius: 4,
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  loader: {
    marginRight: 8,
  },
  notDisabled: {
    opacity: 1,
  },
});
