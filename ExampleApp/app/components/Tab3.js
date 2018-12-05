import React from "react";
import { Button, StyleSheet, View } from "react-native";
import { showAlert, showConfirm } from "../util/dialog";

export default class Tab3 extends React.Component {
  _handleAlert = async () => {
    console.log("Before alert...");
    await showAlert({ title: "This is alert..." });
    console.log("After alert...");
  };

  _handleConfirm = async () => {
    const result = await showConfirm({ title: "How are you?" });
    if (result) {
      showAlert({ title: "Yes!" });
    } else {
      showAlert({ title: "Why nooot?" });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="Alert" onPress={this._handleAlert} />
        <Button title="Confirm" onPress={this._handleConfirm} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
