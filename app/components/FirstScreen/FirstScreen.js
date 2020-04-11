import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { pushScreen } from "../../util/navigation";
import { Animation, FlatButton, Text } from "../shared";

export default class FirstScreen extends React.Component {
  _handleScroll = (event) => {
    const { navigation } = this.props;
    const isScrolled = event.nativeEvent.contentOffset.y > 0;
    navigation.setParams({ isScrolled });
  };

  _handleOpen = () => {
    const { navigation } = this.props;
    pushScreen(navigation, "SecondScreen");
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
          <Text>First screen</Text>
        </Animation>
        <FlatButton label="Open second screen" onPress={this._handleOpen} />
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
