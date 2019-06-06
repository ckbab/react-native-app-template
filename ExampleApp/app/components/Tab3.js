import React from "react";
import { StyleSheet, View } from "react-native";
import { showAlert, showConfirm } from "../util/dialog";
import { FlatButton } from "./shared";

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
        <FlatButton label="Alert" onPress={this._handleAlert} />
        <FlatButton label="Confirm" onPress={this._handleConfirm} />
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
