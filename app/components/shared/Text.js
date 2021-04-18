import PropTypes from "prop-types";
import React, { Component } from "react";
import { Text as NativeText } from "react-native";
import { fontColor } from "../../constants/colors";

export default class Text extends Component {
  static propTypes = {
    children: PropTypes.any,
    size: PropTypes.oneOf(["small", "medium", "large", "x-large", "xx-large"]),
    color: PropTypes.string,
    bold: PropTypes.bool,
    italic: PropTypes.bool,
    selectable: PropTypes.bool,
    numberOfLines: PropTypes.number,
    onPress: PropTypes.func,
    style: PropTypes.any,
  };

  static defaultProps = {
    children: null,
    size: "medium",
    color: fontColor,
    bold: false,
    italic: false,
    selectable: false,
    numberOfLines: null,
    onPress: null,
    style: {},
  };

  _getFontSize = () => {
    const { size } = this.props;
    if (size === "small") {
      return 12;
    } else if (size === "medium") {
      return 16;
    } else if (size === "large") {
      return 20;
    } else if (size === "x-large") {
      return 24;
    } else if (size === "xx-large") {
      return 32;
    }
    return 0;
  };

  _getFontFamily = () => {
    const { bold, italic } = this.props;
    if (bold && italic) {
      return "Roboto-BoldItalic";
    } else if (bold) {
      return "Roboto-Bold";
    } else if (italic) {
      return "Roboto-Italic";
    }
    return "Roboto-Standard";
  };

  render() {
    const {
      children,
      style,
      color,
      selectable,
      numberOfLines,
      onPress,
    } = this.props;
    const fontSize = this._getFontSize();
    const fontFamily = this._getFontFamily();
    return (
      <NativeText
        style={[{ fontSize, fontFamily, color }, style]}
        numberOfLines={numberOfLines}
        selectable={selectable}
        onPress={onPress}
      >
        {children}
      </NativeText>
    );
  }
}
