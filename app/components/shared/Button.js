import { Button, Text } from "@ckbab/react-native-components";
import PropTypes from "prop-types";
import React from "react";
import { StyleSheet } from "react-native";
import { primaryColor } from "../../constants/colors";

export default function TestButton({ onPress }) {
  return (
    <Button style={styles.container} onPress={onPress}>
      <Text>This is a test button</Text>
    </Button>
  );
}

TestButton.propTypes = {
  onPress: PropTypes.func,
};

TestButton.defaultProps = {
  onPress: null,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: primaryColor,
  },
});
