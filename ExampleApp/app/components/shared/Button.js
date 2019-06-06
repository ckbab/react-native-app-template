import PropTypes from "prop-types";
import React from "react";
import {
  StyleSheet,
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  View
} from "react-native";

export default class Button extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    onPress: PropTypes.func,
    style: PropTypes.any,
    type: PropTypes.oneOf(["opacity", "discrete"]),
    disabled: PropTypes.bool
  };

  static defaultProps = {
    onPress: null,
    style: {},
    type: null,
    disabled: false
  };

  _getComponent = () => {
    const { onPress, type } = this.props;
    if (!onPress) {
      return View;
    } else if (type === "opacity") {
      return TouchableOpacity;
    } else if (type === "discrete") {
      return TouchableWithoutFeedback;
    } else if (Platform.OS === "ios") {
      return TouchableOpacity;
    } else if (Platform.OS === "android") {
      return TouchableNativeFeedback;
    } else {
      return View; // Should not happen
    }
  };

  render() {
    const { onPress, style, disabled, children } = this.props;
    const Component = this._getComponent();
    if (
      Component === TouchableNativeFeedback ||
      Component === TouchableWithoutFeedback
    ) {
      return (
        <Component
          disabled={disabled}
          onPress={() => setTimeout(() => onPress && onPress(), 100)}
        >
          <View style={[style, disabled && styles.disabled]}>{children}</View>
        </Component>
      );
    }
    return (
      <Component
        style={[style, disabled && styles.disabled]}
        disabled={disabled}
        onPress={onPress}
      >
        {children}
      </Component>
    );
  }
}

const styles = StyleSheet.create({
  disabled: {
    opacity: 0.3
  }
});
