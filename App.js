import "expo-dev-client";
import React from "react";
import { LogBox } from "react-native";
import Root from "./app/components/Root/Root";

LogBox.ignoreLogs(["Require cycle:"]);

export default function App() {
  return <Root />;
}
