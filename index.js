import { registerRootComponent } from "expo";
import { LogBox } from "react-native";
import Root from "./app/components/Root/Root";

LogBox.ignoreLogs([
  "Require cycle:",
  "Non-serializable values were found in the navigation state",
]);

registerRootComponent(Root);
