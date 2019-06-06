import React from "react";
import { StyleSheet, View } from "react-native";
import Tabs from "../navigators/Tabs";
import { FlatButton, Text } from "./shared";

export default class Menu extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>MENU</Text>
        <FlatButton
          icon="open"
          label="Close drawer"
          onPress={() => {
            this.props.navigation.closeDrawer();
          }}
        />
        <FlatButton
          icon="cog"
          label="Open tab3"
          onPress={() => {
            this.props.navigation.dispatch(
              Tabs.router.getActionForPathAndParams("Tab3")
            );
          }}
        />
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
