import React from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { connect } from "react-redux";
import { addItem } from "../store/items/itemsActions";
import { getCount, getItems } from "../store/items/itemsSelector";
import Stack from "../navigators/Stack";

class Tab1 extends React.Component {
  state = {
    name: ""
  };

  _addItem = () => {
    const { addItem } = this.props;
    const { name } = this.state;
    addItem(name);
    this.setState({ name: "" });
  };

  _handleChangeText = value => {
    this.setState({ name: value });
  };

  render() {
    const { count, items } = this.props;
    const { name } = this.state;
    return (
      <View style={styles.container}>
        <Text>Total number of items: {count}</Text>
        {items.map((item, index) => (
          <Text key={index}>{item}</Text>
        ))}
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={this._handleChangeText}
          />
          <Button
            title="Add"
            onPress={this._addItem}
            disabled={name.length === 0}
          />
        </View>
        <Button
          title="Open stack1"
          onPress={() => {
            this.props.navigation.dispatch(
              Stack.router.getActionForPathAndParams("Stack1")
            );
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  form: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#eee",
    padding: 16
  },
  input: {
    height: 32,
    width: 100,
    backgroundColor: "#fff",
    borderColor: "#ccc",
    borderWidth: 1
  }
});

const mapStateToProps = state => {
  return {
    count: getCount(state),
    specificItem: getCount(state, 2),
    items: getItems(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addItem: name => dispatch(addItem(name))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tab1);
