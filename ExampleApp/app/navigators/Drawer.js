import { createDrawerNavigator } from "react-navigation";
import Switch from "./Switch";
import Menu from "../components/Menu";

const Drawer = createDrawerNavigator(
  {
    Main: {
      screen: Switch
    }
  },
  {
    contentComponent: Menu
  }
);

export default Drawer;
