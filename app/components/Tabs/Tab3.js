import React from "react";
import { StyleSheet, View } from "react-native";
import { backgroundColor } from "../../constants/colors";
import { showAlert, showConfirm } from "../../util/dialog";
import { localize } from "../../util/localization";
import { showMessage, showError } from "../../util/message";
import { FlatButton } from "../shared";

export default class Tab3 extends React.Component {
  _handleAlertPress = async () => {
    console.log("Before alert...");
    await showAlert({ title: "This is alert..." });
    console.log("After alert...");
  };

  _handleConfirmPress = async () => {
    const result = await showConfirm({ title: "How are you?" });
    if (result) {
      showAlert({ title: "Yes!" });
    } else {
      showAlert({ title: "Why nooot?" });
    }
  };

  _handleSuccessMessagePress = () => {
    showMessage(localize("hello"));
  };

  _handleErrorMessagePress = () => {
    showError(localize("hello"));
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatButton label="Alert" onPress={this._handleAlertPress} />
        <FlatButton label="Confirm" onPress={this._handleConfirmPress} />
        <FlatButton
          label="Success message"
          onPress={this._handleSuccessMessagePress}
        />
        <FlatButton
          label="Error message"
          onPress={this._handleErrorMessagePress}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
    alignItems: "center",
    justifyContent: "center",
  },
});
