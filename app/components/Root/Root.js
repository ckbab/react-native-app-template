import AppLoading from "expo-app-loading";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import React from "react";
import { StyleSheet, View } from "react-native";
import FlashMessage from "react-native-flash-message";
import { persistStore } from "redux-persist";
import { Provider } from "react-redux";
import { errorColor } from "../../constants/colors";
import { shadow4 } from "../../constants/shadows";
import store from "../../store/store";
import { trackScreenView } from "../../util/tracker";
import LanguageWrapper from "./LanguageWrapper";

export default class Root extends React.Component {
  state = {
    storeLoaded: false,
    assetsLoaded: false,
    error: false,
  };

  componentDidMount() {
    persistStore(store, null, () => {
      this.setState({
        storeLoaded: true,
      });
    });
    // Add stats to Google Analytics
    trackScreenView("Main");
  }

  _handleAssetsLoaded = () => {
    this.setState({ assetsLoaded: true });
  };

  _handleError = () => {
    this.setState({ error: true });
  };

  _loadAssets = async () => {
    const images = [
      // require("../../images/example.png"),
    ];
    const cacheImages = images.map((image) => {
      return Asset.fromModule(image).downloadAsync();
    });
    const fonts = {
      "Roboto-Bold": require("../../../assets/RobotoCondensed-Regular.ttf"),
      "Roboto-Italic": require("../../../assets/RobotoCondensed-LightItalic.ttf"),
      "Roboto-BoldItalic": require("../../../assets/RobotoCondensed-Italic.ttf"),
      "Roboto-Standard": require("../../../assets/RobotoCondensed-Light.ttf"),
    };
    const cacheFonts = Font.loadAsync(fonts);
    return Promise.all([...cacheImages, cacheFonts]);
  };

  render() {
    const { assetsLoaded, error, storeLoaded } = this.state;
    if (error) {
      return <View style={styles.error} />;
    }

    if (!assetsLoaded) {
      return (
        <AppLoading
          startAsync={this._loadAssets}
          onFinish={this._handleAssetsLoaded}
          onError={this._handleError}
        />
      );
    }

    if (!storeLoaded) {
      return <View />;
    }

    return (
      <View style={styles.container}>
        <Provider store={store}>
          <LanguageWrapper />
        </Provider>
        <FlashMessage
          position="top"
          style={styles.flashContainer}
          titleStyle={styles.flashTitle}
          textStyle={styles.flashText}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  error: {
    backgroundColor: errorColor,
  },
  flashContainer: {
    ...shadow4,
  },
  flashTitle: {
    fontFamily: "Roboto-Bold",
    fontSize: 16,
  },
  flashText: {
    fontFamily: "Roboto-Standard",
    fontSize: 16,
  },
});
