import { showMessage as showFlashMessage } from "react-native-flash-message";
import { errorColor, successColor } from "../constants/colors";
import { localize } from "./localization";

export const showMessage = (message, description) => {
  showFlashMessage({
    message,
    description,
    duration: 4000,
    color: "#fff",
    backgroundColor: successColor,
  });
};

export const showError = (text) => {
  showFlashMessage({
    message: localize("util.message.error.title"),
    description: text || localize("util.message.error.subtitle"),
    duration: 4000,
    color: "#fff",
    backgroundColor: errorColor,
  });
};
