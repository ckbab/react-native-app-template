import axios from "axios";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { apiUrl } from "../constants/config";

export default class Tab2 extends React.Component {
  state = {
    loading: true,
    items: []
  };

  componentDidMount() {
    axios.get(apiUrl + "/todos").then(response => {
      const items = response.data.slice(0, 10);
      this.setState({ items, loading: false });
    });
  }

  render() {
    const { loading, items } = this.state;
    return (
      <View style={styles.container}>
        {loading ? (
          <Text>Loading...</Text>
        ) : (
          <View>
            <Text>Total number of remote items: {items.length}</Text>
            {items.map(item => (
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
    justifyContent: "center"
  }
});
