import { changeColor } from "@ckbab/js-utils";
import PropTypes from "prop-types";
import React, { forwardRef } from "react";
import { StyleSheet, TextInput as NativeTextInput } from "react-native";
import {
  backgroundColor,
  fontColor,
  primaryColor,
} from "../../constants/colors";

// Need to use arrow function and displayName since forwardRef cannot take a
// functional component where propTypes has been defined.
const TextInput = forwardRef(({ disabled, style, ...rest }, ref) => {
  const bgColor = changeColor(backgroundColor, "#000", 0.95);
  const color = fontColor;
  return (
    <NativeTextInput
      ref={ref}
      style={[styles.container, { backgroundColor: bgColor, color }, style]}
      placeholderTextColor={changeColor(color, "#fff", 0.4)}
      editable={!disabled}
      selectionColor={primaryColor}
      {...rest}
    />
  );
});

TextInput.propTypes = {
  disabled: PropTypes.bool,
  style: PropTypes.any,
  // ...and all that native TextInput supports
};

TextInput.defaultProps = {
  disabled: false,
  style: {},
};

TextInput.displayName = "TextInput";

const styles = StyleSheet.create({
  container: {
    fontFamily: "Roboto-Bold",
    fontSize: 20,
    borderRadius: 4,
    padding: 12,
  },
});

export default TextInput;
