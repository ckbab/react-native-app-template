import { changeColor } from "@ckbab/js-utils";
import PropTypes from "prop-types";
import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { fontColor } from "../../constants/colors";
import Text from "./Text";

export default function Loader({ label, style }) {
  const loaderColor = changeColor(fontColor, "#fff", 0.5);
  return (
    <View style={[styles.container, style]}>
      <ActivityIndicator size="large" color={loaderColor} />
      {!!label && (
        <Text style={styles.label} size="large">
          {label}
        </Text>
      )}
    </View>
  );
}

Loader.propTypes = {
  label: PropTypes.string,
  style: PropTypes.any,
};

Loader.defaultProps = {
  label: "",
  style: {},
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    marginLeft: 16,
  },
});
