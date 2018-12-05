import { NavigationActions } from "react-navigation";
import Drawer from "../../navigators/Drawer";

const initialState = Drawer.router.getStateForAction(
  NavigationActions.navigate({ routeName: "" })
);

export default (state = initialState, action) => {
  const nextState = Drawer.router.getStateForAction(action, state);
  return nextState || state;
};
