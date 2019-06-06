import { createSwitchNavigator } from "react-navigation";
import Loader from "../components/Loader/Loader";
import Stack from "./Stack";

const Switch = createSwitchNavigator(
  {
    Stack: Stack,
    Loader: Loader
  },
  {
    initialRouteName: "Loader"
  }
);

export default Switch;
