import Constants from "expo-constants";
import React from "react";
import {
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import appConfig from "../../../app.json";
import { Text } from "../shared";

export default class VersionButton extends React.Component {
  state = {
    count: 0,
  };

  _handlePress = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  _getInfo = () => {
    const platform = Constants.platform;
    const nativeVersion = Platform.select({
      ios: platform.ios ? platform.ios.buildNumber : 0,
      android: platform.android ? platform.android.versionCode : 0,
    });
    const expoVersion = Constants.expoVersion;
    const channel = Constants.manifest.releaseChannel;
    const appVersion = appConfig.expo.version;
    return { appVersion, expoVersion, channel, nativeVersion };
  };

  render() {
    const { children } = this.props;
    const { count } = this.state;
    const { appVersion, expoVersion, channel, nativeVersion } = this._getInfo();
    return (
      <React.Fragment>
        <TouchableWithoutFeedback onPress={this._handlePress}>
          <View>{children}</View>
        </TouchableWithoutFeedback>
        {count >= 7 && (
          <Text style={styles.version}>
            {appVersion} / {nativeVersion} / {expoVersion} / {channel}
          </Text>
        )}
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  version: {
    textAlign: "center",
    margin: 16,
  },
});
