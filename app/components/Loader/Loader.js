import * as Updates from "expo-updates";
import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { backgroundColor } from "../../constants/colors";
import SwitchContext from "../../navigators/SwitchContext";
import { localize } from "../../util/localization";
import { Text } from "../shared";

class Loader extends React.Component {
  state = {
    text: " ", // Empty string so ActivityIndicator is not moved when text appears
  };

  async componentDidMount() {
    try {
      const { isAvailable } = await Updates.checkForUpdateAsync();
      if (isAvailable) {
        this.setState({ text: localize("loader.downloading") });
        const { isNew } = Updates.fetchUpdateAsync();
        if (isNew) {
          Updates.reloadAsync();
        } else {
          // Update "available" but not "new". Should not happen though.
          this._loadingFinished();
        }
      } else {
        // No update available.
        this._loadingFinished();
      }
    } catch (e) {
      // Error occured... e.g. when checking in dev mode.
      this._loadingFinished();
    }
  }

  _loadingFinished = () => {
    const { onLoadingFinished } = this.props;
    onLoadingFinished();
  };

  render() {
    const { text } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.text} size="large" bold>
          {text}
        </Text>
        <ActivityIndicator size="large" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: backgroundColor,
  },
  text: {
    marginBottom: 32,
  },
});

export default class ExportedLoader extends React.Component {
  render() {
    return (
      <SwitchContext.Consumer>
        {({ onLoadingFinished }) => (
          <Loader onLoadingFinished={onLoadingFinished} />
        )}
      </SwitchContext.Consumer>
    );
  }
}
