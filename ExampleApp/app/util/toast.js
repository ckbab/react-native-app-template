import { Platform, ToastAndroid, YellowBox } from "react-native";
import Toast from "react-native-root-toast";

// Ignore warnings caused by Toast plugin
YellowBox.ignoreWarnings([
  "Require cycle: node_modules/react-native-gesture-handler/"
]);

export const showToast = msg => {
  if (Platform.OS === "ios") {
    Toast.show(msg, {
      duration: Toast.durations.SHORT,
      position: Toast.positions.BOTTOM,
      shadow: true,
      animation: true,
      hideOnPress: true,
      delay: 0
    });
  } else {
    ToastAndroid.show(msg, ToastAndroid.SHORT);
  }
};
