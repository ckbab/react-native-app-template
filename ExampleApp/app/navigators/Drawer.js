import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Menu from "../components/Menu";
import Switch from "./Switch";

const DrawerNav = createDrawerNavigator();

export default class Drawer extends React.Component {
  render() {
    return (
      <DrawerNav.Navigator drawerContent={() => <Menu />}>
        <DrawerNav.Screen name="Main" component={Switch} />
      </DrawerNav.Navigator>
    );
  }
}
