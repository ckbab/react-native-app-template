import PropTypes from "prop-types";
import React, { Component } from "react";
import { StyleSheet, TextInput as NativeTextInput } from "react-native";
import { fontColor, grey2, primaryColor } from "../../constants/colors";

export default class TextInput extends Component {
  static propTypes = {
    style: PropTypes.any,
    disabled: PropTypes.bool,
    placeholderTextColor: PropTypes.string
    // ...and all that native TextInput supports
  };

  static defaultProps = {
    style: {},
    disabled: false,
    placeholderTextColor: grey2
  };

  focus = () => {
    if (this.input && this.input.focus) {
      this.input.focus();
    }
  };

  blur = () => {
    if (this.input && this.input.blur) {
      this.input.blur();
    }
  };

  render() {
    const { style, disabled, placeholderTextColor, ...rest } = this.props;
    return (
      <NativeTextInput
        ref={component => (this.input = component)}
        style={[styles.container, style]}
        placeholderTextColor={placeholderTextColor}
        editable={!disabled}
        selectionColor={primaryColor}
        {...rest}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    fontFamily: "Roboto-Standard",
    fontSize: 16,
    color: fontColor
  }
});
