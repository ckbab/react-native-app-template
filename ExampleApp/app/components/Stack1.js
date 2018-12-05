import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import * as Animatable from "react-native-animatable";
import Stack from "../navigators/Stack";

export default class Stack1 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Animatable.View
          animation="fadeIn"
          duration={2000}
          direction="alternate"
          iterationCount="infinite"
        >
          <Text>Stack1</Text>
        </Animatable.View>
        <Button
          title="Open stack2"
          onPress={() => {
            this.props.navigation.dispatch(
              Stack.router.getActionForPathAndParams("Stack2")
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
