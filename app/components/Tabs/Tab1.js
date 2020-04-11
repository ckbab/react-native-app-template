import React from "react";
import { StyleSheet, View } from "react-native";
import { connect } from "react-redux";
import { addItem } from "../../store/items/itemsActions";
import { setLanguage } from "../../store/settings/settingsActions";
import { getCount, getItems } from "../../store/items/itemsSelector";
import { localize } from "../../util/localization";
import { pushScreen } from "../../util/navigation";
import { Button, FlatButton, Text, TextInput } from "../shared";

class Tab1 extends React.Component {
  state = {
    name: "",
  };

  _addItem = () => {
    const { addItem } = this.props;
    const { name } = this.state;
    addItem(name);
    this.setState({ name: "" });
  };

  _handleChangeText = (value) => {
    this.setState({ name: value });
  };

  _handleSetSwedish = () => {
    const { setLanguage } = this.props;
    setLanguage("sv");
  };

  _handleSetEnglish = () => {
    const { setLanguage } = this.props;
    setLanguage("en");
  };

  _handleOpenStack = () => {
    const { navigation } = this.props;
    pushScreen(navigation, "FirstScreen");
  };

  render() {
    const { count, items } = this.props;
    const { name } = this.state;
    return (
      <View style={styles.container}>
        <Text size="large" bold>
          {localize("hello")}
        </Text>
        <Button onPress={this._handleSetEnglish}>
          <Text>{localize("language.en")}</Text>
        </Button>
        <Button onPress={this._handleSetSwedish}>
          <Text>{localize("language.sv")}</Text>
        </Button>
        <Text size="large" bold>
          Total number of items: {count}
        </Text>
        {items.map((item, index) => (
          <Text key={index}>{item}</Text>
        ))}
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={this._handleChangeText}
          />
          <FlatButton
            label="Add"
            onPress={this._addItem}
            disabled={name.length === 0}
          />
        </View>
        <FlatButton label="Open first screen" onPress={this._handleOpenStack} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    backgroundColor: "#eee",
    padding: 16,
  },
  input: {
    marginBottom: 8,
    height: 32,
    width: 200,
    backgroundColor: "#fff",
    borderColor: "#ccc",
    borderWidth: 1,
  },
});

const mapStateToProps = (state) => {
  return {
    count: getCount(state),
    specificItem: getCount(state, 2),
    items: getItems(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (name) => dispatch(addItem(name)),
    setLanguage: (language) => dispatch(setLanguage(language)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tab1);
