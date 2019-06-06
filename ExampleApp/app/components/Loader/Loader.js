import { Updates } from "expo";
import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { primaryColor } from "../../constants/colors";
import { localize } from "../../util/localization";
import { pushScreen } from "../../util/navigation";
import { Text } from "../shared";

export default class Loader extends React.Component {
  state = {
    text: " " // Empty string so ActivityIndicator is not moved when text appears
  };

  async componentDidMount() {
    try {
      const { isAvailable } = await Updates.checkForUpdateAsync();
      if (isAvailable) {
        const eventListener = async event => {
          if (event.type === Updates.EventType.DOWNLOAD_STARTED) {
            this.setState({ text: localize("loader.downloading") });
          } else if (event.type === Updates.EventType.DOWNLOAD_FINISHED) {
            Updates.reloadFromCache();
          } else if (event.type === Updates.EventType.ERROR) {
            // Error occured... just continue with current version
            this._loadingFinished();
          }
        };
        Updates.fetchUpdateAsync({ eventListener });
        // If no event received within 30 sec... go to current version
        this.timeout = setTimeout(() => {
          this._loadingFinished();
        }, 30000);
      } else {
        // No Update available...
        this._loadingFinished();
      }
    } catch (e) {
      // Error occured... e.g. when checking in dev mode
      this._loadingFinished();
    }
  }

  _loadingFinished = () => {
    const { navigation } = this.props;
    clearTimeout(this.timeout);
    pushScreen(navigation, "Stack");
  };

  render() {
    const { text } = this.state;
    return (
      <View style={styles.container}>
        <Text color="#fff" size="large" style={styles.text}>
          {text}
        </Text>
        <ActivityIndicator color="#fff" size="large" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: primaryColor
  },
  text: {
    marginBottom: 32
  }
});
