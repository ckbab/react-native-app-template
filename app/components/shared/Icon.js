import ExpoIcon from "@expo/vector-icons/Ionicons";
import PropTypes from "prop-types";
import React from "react";
import { Platform } from "react-native";
import { fontColor } from "../../constants/colors";

export default class Icon extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    color: PropTypes.string,
    size: PropTypes.number,
    style: PropTypes.any,
  };

  static defaultProps = {
    color: fontColor,
    size: 16,
    style: {},
  };

  render() {
    const { name, size, color, style } = this.props;
    const prefix = Platform.select({ ios: "ios-", android: "md-" });
    const icon = prefix + name;
    return <ExpoIcon name={icon} size={size} color={color} style={style} />;
  }
}
