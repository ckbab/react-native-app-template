import PropTypes from "prop-types";
import React, { Component } from "react";
import {
  ActivityIndicator,
  Platform,
  StyleSheet,
  TouchableNativeFeedback,
  View
} from "react-native";
import { primaryColor } from "../../constants/colors";
import { shadow2 } from "../../constants/shadows";
import Button from "./Button";
import Icon from "./Icon";
import Text from "./Text";

export default class ToolbarButton extends Component {
  static propTypes = {
    icon: PropTypes.string,
    label: PropTypes.string,
    color: PropTypes.string,
    loading: PropTypes.bool,
    disabled: PropTypes.bool,
    shadow: PropTypes.bool,
    onPress: PropTypes.func.isRequired
  };

  static defaultProps = {
    icon: null,
    label: "",
    color: primaryColor,
    loading: false,
    disabled: false,
    shadow: false
  };

  render() {
    const {
      icon,
      label,
      color,
      loading,
      shadow,
      disabled,
      onPress
    } = this.props;
    const iconLabel = icon ? (
      <Icon
        name={icon}
        size={24}
        color={color}
        style={shadow && styles.iconShadow}
      />
    ) : (
      <Text style={[styles.label, { color }]}>{label}</Text>
    );
    if (loading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator color={color} />
        </View>
      );
    }
    if (Platform.OS === "ios") {
      return (
        <Button onPress={onPress} style={styles.container} disabled={disabled}>
          {iconLabel}
        </Button>
      );
    } else {
      const background = TouchableNativeFeedback.Ripple(
        "rgba(0, 0, 0, 0.2)",
        true
      );
      return (
        <TouchableNativeFeedback
          onPress={() => setTimeout(() => onPress && onPress(), 100)}
          background={background}
          disabled={disabled}
        >
          <View style={[styles.container, disabled && styles.disabled]}>
            {iconLabel}
          </View>
        </TouchableNativeFeedback>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    minWidth: 44,
    height: 44
  },
  label: {
    paddingHorizontal: 16
  },
  disabled: {
    opacity: 0.3
  },
  iconShadow: {
    ...shadow2
  }
});
