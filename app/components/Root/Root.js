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
  fontColor,
  primaryColor,
  successColor,
} from "../../constants/colors";

export default function Root() {
  const fonts = {
    bold: require("../../../assets/fonts/RobotoCondensed-Regular.ttf"),
    boldItalic: require("../../../assets/fonts/RobotoCondensed-Italic.ttf"),
    italic: require("../../../assets/fonts/RobotoCondensed-LightItalic.ttf"),
    regular: require("../../../assets/fonts/RobotoCondensed-Light.ttf"),
  };

  const images = [require("../../../assets/images/test.png")];

  return (
    <AppContainer
      apiUrl={apiUrl}
      apiParamsSelector={(state) => ({
        language: state?.settings?.language,
      })}
      colors={{
        background: backgroundColor,
        error: errorColor,
        font: fontColor,
        primary: primaryColor,
        success: successColor,
      }}
      fonts={fonts}
      languages={{ en: English, sv: Swedish }}
      languageSelector={(state) => state?.settings?.language}
      images={images}
      reducers={{ settings }}
    >
      <AppContextProvider>
        <Switch />
      </AppContextProvider>
    </AppContainer>
  );
}
