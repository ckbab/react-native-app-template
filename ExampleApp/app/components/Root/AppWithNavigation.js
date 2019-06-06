import { BackHandler } from "react-native";
import { connect } from "react-redux";
import { createReduxContainer } from "react-navigation-redux-helpers";
import { NavigationActions } from "react-navigation";
import Drawer from "../../navigators/Drawer";
import store from "../../store/store";

BackHandler.addEventListener("hardwareBackPress", function() {
  // TODO implement own logic depending on navigation structure
  const isReset = false;
  if (isReset) {
    return false;
  }
  store.dispatch(NavigationActions.back());
  return true;
});

const App = createReduxContainer(Drawer);

const mapStateToProps = state => ({
  state: state.navigation
});

export default connect(mapStateToProps)(App);
