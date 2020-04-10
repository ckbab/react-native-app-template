import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { pushScreen } from "../util/navigation";
import { Animation, FlatButton, Text } from "./shared";

export default class Stack1 extends React.Component {
  _handleScroll = (event) => {
    const { navigation } = this.props;
    const isScrolled = event.nativeEvent.contentOffset.y > 0;
    navigation.setParams({ isScrolled });
  };

  _handleOpen = () => {
    const { navigation } = this.props;
    pushScreen(navigation, "Stack2");
  };

  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
        onScroll={this._handleScroll}
      >
        <Animation
          animation="fadeIn"
          duration={2000}
          direction="alternate"
          count="infinite"
        >
          <Text>Stack1</Text>
        </Animation>
        <FlatButton label="Open stack2" onPress={this._handleOpen} />
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
