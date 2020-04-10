import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable";
import Stack from "../navigators/MainStack";
import { FlatButton, Text } from "./shared";

export default class Stack1 extends React.Component {
  _handleScroll = (event) => {
    const { navigation } = this.props;
    const isScrolled = event.nativeEvent.contentOffset.y > 0;
    navigation.setParams({ isScrolled });
  };

  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
        onScroll={this._handleScroll}
      >
        <Animatable.View
          animation="fadeIn"
          duration={2000}
          direction="alternate"
          iterationCount="infinite"
        >
          <Text>Stack1</Text>
        </Animatable.View>
        <FlatButton
          label="Open stack2"
          onPress={() => {
            this.props.navigation.dispatch(
              Stack.router.getActionForPathAndParams("Stack2")
            );
          }}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
  },
});
