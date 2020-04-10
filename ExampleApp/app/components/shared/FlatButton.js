import PropTypes from "prop-types";
import React from "react";
import { StyleSheet, View } from "react-native";
import { grey1 } from "../../constants/colors";
import Button from "./Button";
import Icon from "./Icon";
import Text from "./Text";

export default class FlatButton extends React.Component {
  static propTypes = {
    style: PropTypes.any,
    label: PropTypes.string.isRequired,
    icon: PropTypes.string,
    disabled: PropTypes.bool,
    onPress: PropTypes.func.isRequired,
  };

  static defaultProps = {
    style: {},
    icon: null,
    disabled: false,
  };

  render() {
    const { disabled, icon, label, style, onPress } = this.props;
    const textAlign = icon ? "left" : "center";
    return (
      <View style={[styles.buttonContainer, style]}>
        <Button style={styles.button} disabled={disabled} onPress={onPress}>
          <Text style={[styles.label, { textAlign }]} bold>
            {label}
          </Text>
          {!!icon && (
            <Icon name={icon} size={24} color={grey1} style={styles.icon} />
          )}
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    overflow: "hidden",
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 2,
  },
  button: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  label: {
    flex: 1,
  },
  icon: {
    marginLeft: 16,
  },
});
