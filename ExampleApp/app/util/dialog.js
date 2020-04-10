import { Alert } from "react-native";

export const showAlert = async (options = {}) => {
  return new Promise((resolve) => {
    let { title, content, buttonText } = options;
    buttonText = buttonText || "OK";
    Alert.alert(title, content, [
      { text: buttonText, onPress: () => resolve() },
    ]);
  });
};

export const showConfirm = async (options = {}) => {
  return new Promise((resolve) => {
    let { title, content, positiveText, negativeText } = options;
    negativeText = negativeText || "No";
    positiveText = positiveText || "Yes";
    Alert.alert(title, content, [
      { text: positiveText, onPress: () => resolve(true) },
      { text: negativeText, onPress: () => resolve(false) },
    ]);
  });
};
