import { Asset, AppLoading, Font } from "expo";
import React from "react";
import { Platform, StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import FlashMessage from "react-native-flash-message";
import store from "../../store/store";
import { getStatusBarHeight } from "../../util/screen";
import { trackScreenView } from "../../util/tracker";
import LanguageWrapper from "./LanguageWrapper";

export default class Root extends React.Component {
  state = {
    storeLoaded: false,
    assetsLoaded: false
  };

  componentDidMount() {
    persistStore(store, null, () => {
      this.setState({
        storeLoaded: true
      });
    });
    // Add stats to Google Analytics
    trackScreenView("Main");
  }

  _handleAssetsLoaded = () => {
    this.setState({ assetsLoaded: true });
  };

  _loadAssets = async () => {
    const images = [
      // require("../../images/example.png"),
    ];
    const cacheImages = images.map(image => {
      return Asset.fromModule(image).downloadAsync();
    });
    const fonts = {
      "Roboto-Bold": require("../../../assets/RobotoCondensed-Regular.ttf"),
      "Roboto-Italic": require("../../../assets/RobotoCondensed-LightItalic.ttf"),
      "Roboto-Standard": require("../../../assets/RobotoCondensed-Light.ttf")
    };
    const cacheFonts = Font.loadAsync(fonts);
    return Promise.all([...cacheImages, cacheFonts]);
  };

  render() {
    const { assetsLoaded, storeLoaded } = this.state;
    if (!assetsLoaded) {
      return (
        <AppLoading
          startAsync={this._loadAssets}
          onFinish={this._handleAssetsLoaded}
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
    flex: 1
  },
  flashContainer: {
    paddingTop: Platform.select({ android: getStatusBarHeight(), ios: 0 })
  },
  flashTitle: {
    fontFamily: "Roboto-Bold",
    fontSize: 16
  },
  flashText: {
    fontFamily: "Roboto-Standard",
    fontSize: 16
  }
});
