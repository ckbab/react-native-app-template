import React from "react";
import { StyleSheet, View } from "react-native";
import {
  calendarTime,
  formatDate,
  getNow,
  relativeTime,
  smartDate,
} from "../../util/date";
import { FlatButton, Text } from "../shared";

export default class Tab4 extends React.Component {
  state = {
    date: new Date(),
  };

  render() {
    const { date } = this.state;
    return (
      <View style={styles.container}>
        <Text>Relative time: {relativeTime(date)}</Text>
        <Text>Calendar time: {calendarTime(date)}</Text>
        <Text>Format date: {formatDate(date, "dddd Do MMMM")}</Text>
        <Text>
          Smart date (30 mins ago):
          {smartDate(getNow().subtract(30, "minutes"), 1)}
        </Text>
        <Text>
          Smart date (2 hours ago):
          {smartDate(getNow().subtract(120, "minutes"), 1)}
        </Text>
        <FlatButton label="Force render" onPress={() => this.forceUpdate()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
