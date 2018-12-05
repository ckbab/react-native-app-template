import React from "react";
import { View } from "react-native";
import { connect, Provider } from "react-redux";
import { reduxifyNavigator } from "react-navigation-redux-helpers";
import { persistStore } from "redux-persist";
import store from "../store/store";
import { tracker } from "../util/tracker";
import Drawer from "../navigators/Drawer";

const App = reduxifyNavigator(Drawer, "root");

const mapStateToProps = state => ({
  state: state.navigation
});

const AppWithNavigation = connect(mapStateToProps)(App);

export default class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      storeFetched: false
    };

    tracker.trackScreenView("Main");
  }

  componentDidMount() {
    persistStore(store, null, () => {
      this.setState({
        storeFetched: true
      });
    });
  }

  render() {
    return (
      <Provider store={store}>
        {this.state.storeFetched ? <AppWithNavigation /> : <View />}
      </Provider>
    );
  }
}
