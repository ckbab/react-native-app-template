import PropTypes from "prop-types";
import React, { useRef } from "react";
import { Animated, Pressable, StyleSheet } from "react-native";

export default function Button({ children, disabled, onPress, style }) {
  const animate = useRef(new Animated.Value(0)).current;
  const scale = animate.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0.95],
  });

  const onPressIn = () => {
    Animated.timing(animate, {
      toValue: 1,
      duration: 50,
      useNativeDriver: true,
    }).start();
  };

  const onPressOut = () => {
    Animated.timing(animate, {
      toValue: 0,
      duration: 50,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Pressable
      disabled={disabled}
      onPress={() => setTimeout(() => onPress && onPress(), 100)}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
    >
      <Animated.View
        style={[disabled && styles.disabled, { transform: [{ scale }] }, style]}
      >
        {children}
      </Animated.View>
    </Pressable>
  );
}

Button.propTypes = {
  disabled: PropTypes.bool,
  children: PropTypes.node,
  onPress: PropTypes.func,
  style: PropTypes.any,
};

Button.defaultProps = {
  disabled: false,
  children: null,
  onPress: null,
  style: {},
};

const styles = StyleSheet.create({
  disabled: {
    opacity: 0.3,
  },
});
