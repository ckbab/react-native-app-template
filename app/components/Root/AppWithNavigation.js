import { Updates } from "expo";
import React from "react";
import { AppState } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Switch from "../../navigators/Switch";
import { getPushToken } from "../../util/push";

export default class AppWithNavigation extends React.Component {
  state = {
    appState: AppState.currentState,
  };

  componentDidMount() {
    this._handleInit();
    AppState.addEventListener("change", this._handleAppStateChange);
  }

  componentWillUnmount() {
    AppState.removeEventListener("change", this._handleAppStateChange);
  }

  _handleAppStateChange = (nextAppState) => {
    const { appState } = this.state;
    if (appState.match(/inactive|background/) && nextAppState === "active") {
      this._handleSync();
    }
    this.setState({ appState: nextAppState });
  };

  _handleInit = async () => {
    const token = await getPushToken();
    console.log("save token to server", token);
  };

  _handleSync = async () => {
    if (!__DEV__) {
      const { isAvailable } = await Updates.checkForUpdateAsync();
      if (isAvailable && this.switch) {
        this.switch.forceReload();
      }
    }
  };

  render() {
    return (
      <NavigationContainer>
        <Switch ref={(component) => (this.switch = component)} />
      </NavigationContainer>
    );
  }
}
