import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Loader from "../components/Loader/Loader";
import Drawer from "./Drawer";
import SwitchContext from "./SwitchContext";

const StackNav = createStackNavigator();

export default class Switch extends React.Component {
  state = {
    loading: true,
  };

  _handleLoadingFinished = () => {
    this.setState({ loading: false });
  };

  render() {
    const { loading } = this.state;
    return (
      <SwitchContext.Provider
        value={{ onLoadingFinished: this._handleLoadingFinished }}
      >
        <StackNav.Navigator headerMode="none">
          {loading ? (
            <StackNav.Screen name="Loader" component={Loader} />
          ) : (
            <StackNav.Screen name="Drawer" component={Drawer} />
          )}
        </StackNav.Navigator>
      </SwitchContext.Provider>
    );
  }
}
