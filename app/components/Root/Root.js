import { AppContainer } from "@ckbab/react-native-components";
import React from "react";
import { AppContextProvider } from "../../context/AppContext";
import English from "../../../assets/languages/en.json";
import Swedish from "../../../assets/languages/sv.json";
import { apiUrl } from "../../constants/config";
import Switch from "../../navigators/Switch";
import settings from "../../reducers/settings";
import {
  backgroundColor,
  errorColor,
  successColor,
} from "../../constants/colors";

export default function Root() {
  const fonts = {
    "Roboto-Bold": require("../../../assets/fonts/RobotoCondensed-Regular.ttf"),
    "Roboto-BoldItalic": require("../../../assets/fonts/RobotoCondensed-Italic.ttf"),
    "Roboto-Italic": require("../../../assets/fonts/RobotoCondensed-LightItalic.ttf"),
    "Roboto-Regular": require("../../../assets/fonts/RobotoCondensed-Light.ttf"),
  };

  const images = [require("../../../assets/images/test.png")];

  return (
    <AppContainer
      api={{
        baseUrl: apiUrl,
        paramsSelector: (state) => ({
          language: state?.settings?.language,
        }),
      }}
      language={{
        en: English,
        sv: Swedish,
        selector: (state) => state?.settings?.language,
      }}
      load={{ fonts, images }}
      reducers={{
        whitelist: { settings },
      }}
      style={{
        fonts: {
          regular: "Roboto-Regular",
          bold: "Roboto-Bold",
        },
        colors: {
          background: backgroundColor,
          error: errorColor,
          success: successColor,
        },
      }}
    >
      <AppContextProvider>
        <Switch />
      </AppContextProvider>
    </AppContainer>
  );
}
