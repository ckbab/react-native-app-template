import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Menu from "../components/Menu/Menu";
import MainStack from "./MainStack";

const DrawerNav = createDrawerNavigator();

export default class Drawer extends React.Component {
  render() {
    return (
      <DrawerNav.Navigator
        drawerContent={({ navigation }) => <Menu navigation={navigation} />}
      >
        <DrawerNav.Screen name="Main" component={MainStack} />
      </DrawerNav.Navigator>
    );
  }
}
