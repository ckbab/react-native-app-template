import React from "react";
import { StyleSheet, View } from "react-native";
import { get } from "../../util/server";
import { Text } from "../shared";

export default class Tab2 extends React.Component {
  state = {
    loading: true,
    items: [],
  };

  componentDidMount() {
    this._fetchItems();
  }

  _fetchItems = async () => {
    const response = await get("todos");
    const items = response.slice(0, 10);
    this.setState({ items, loading: false });
  };

  render() {
    const { loading, items } = this.state;
    return (
      <View style={styles.container}>
        {loading ? (
          <Text>Loading...</Text>
        ) : (
          <View>
            <Text>Total number of remote items: {items.length}</Text>
            {items.map((item) => (
              <Text key={item.id}>{item.title}</Text>
            ))}
          </View>
        )}
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
});
