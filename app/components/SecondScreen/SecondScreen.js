import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "../shared";

export default class SecondScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Second screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
