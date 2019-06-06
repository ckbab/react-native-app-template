import React from "react";
import { YellowBox } from "react-native";
import Root from "./app/components/Root/Root";

YellowBox.ignoreWarnings(["Require cycle:"]);

export default class App extends React.Component {
  render() {
    return <Root />;
  }
}
