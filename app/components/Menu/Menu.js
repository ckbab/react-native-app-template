import React from "react";
import { StyleSheet, View } from "react-native";
import { backgroundColor } from "../../constants/colors";
import { pushScreen } from "../../util/navigation";
import { getStatusBarHeight } from "../../util/screen";
import { FlatButton, Text } from "../shared";
import VersionButton from "./VersionButton";

export default class Menu extends React.Component {
  _handleClose = () => {
    const { navigation } = this.props;
    navigation.closeDrawer();
  };

  _handleOpenTab = () => {
    const { navigation } = this.props;
    pushScreen(navigation, "Main", { screen: "Tab3" });
  };

  render() {
    return (
      <View style={styles.container}>
        <VersionButton>
          <Text>Click here to check version</Text>
        </VersionButton>
        <FlatButton
          icon="open"
          label="Close drawer"
          onPress={this._handleClose}
        />
        <FlatButton
          icon="cog"
          label="Open tab3"
          onPress={this._handleOpenTab}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
    paddingTop: getStatusBarHeight(),
  },
});
