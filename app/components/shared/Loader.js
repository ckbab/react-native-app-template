import Lottie from "lottie-react-native";
import PropTypes from "prop-types";
import React from "react";
import { StyleSheet, View } from "react-native";

export default class Loader extends React.Component {
  static propTypes = {
    type: PropTypes.oneOf(["dark", "light"]),
  };

  static defaultProps = {
    type: "dark",
  };

  componentDidMount() {
    this.lottie.reset();
    this.lottie.play();
  }

  _getSource = () => {
    const { type } = this.props;
    if (type === "light") {
      return require("../../images/loader-light.json");
    } else if (type === "dark") {
      return require("../../images/loader-dark.json");
    }
    return null;
  };

  render() {
    const size = 128;
    const source = this._getSource();
    if (!source) {
      return null;
    }
    return (
      <View style={styles.container}>
        <View style={{ height: size, width: size }}>
          <Lottie
            ref={(component) => (this.lottie = component)}
            source={source}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 32,
    alignItems: "center",
  },
});
