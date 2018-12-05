import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Tabs from "../navigators/Tabs";

export default class Menu extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>MENU</Text>
        <Button
          title="Close drawer"
          onPress={() => {
            this.props.navigation.closeDrawer();
          }}
        />
        <Button
          title="Open tab3"
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
