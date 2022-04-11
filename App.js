import React from "react";
import { LogBox } from "react-native";
import Root from "./app/components/Root/Root";

LogBox.ignoreLogs([
  "Require cycle:",
  "Non-serializable values were found in the navigation state",
]);

export default function App() {
  return <Root />;
}
