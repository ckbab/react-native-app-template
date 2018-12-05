import { createDrawerNavigator } from "react-navigation";
import Stack from "./Stack";
import Menu from "../components/Menu";

const Drawer = createDrawerNavigator(
  {
    Main: {
      screen: Stack
    }
  },
  {
    contentComponent: Menu
  }
);

export default Drawer;
