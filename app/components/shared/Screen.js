import { useScreen } from "@ckbab/react-native-components/hooks";
import { shadow2 } from "@ckbab/react-native-components/styles";
import PropTypes from "prop-types";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { Keyboard, Platform } from "react-native";
import { backgroundColor, primaryColor } from "../../constants/colors";
import ToolbarButton from "./ToolbarButton";

export default function Screen({ children, navigation }) {
  const { bottomMargin } = useScreen();
  const [isScrolled, setIsScrolled] = useState(false);
  const [keyboardHeight, setKeyboardHeight] = useState(0);

  useEffect(() => {
    const keyboardShow = (event) => {
      setKeyboardHeight(event.endCoordinates.height);
    };

    const keyboardHide = () => {
      setKeyboardHeight(0);
    };

    const willShow = Keyboard.addListener("keyboardWillShow", keyboardShow);
    const willHide = Keyboard.addListener("keyboardWillHide", keyboardHide);
    const didShow = Keyboard.addListener("keyboardDidShow", keyboardShow);
    const didHide = Keyboard.addListener("keyboardDidHide", keyboardHide);

    return () => {
      willShow?.remove();
      willHide?.remove();
      didShow?.remove();
      didHide?.remove();
    };
  }, []);

  useLayoutEffect(() => {
    const shadow = isScrolled ? shadow2 : null;
    navigation.setOptions({
      headerLeft: () => (
        <ToolbarButton icon="chevron-back" onPress={navigation.goBack} />
      ),
      headerTitleAlign: "center",
      headerTintColor: primaryColor,
      headerTitleStyle: {
        fontFamily: "Arsenal-Bold",
        fontSize: 20,
      },
      headerStyle: {
        backgroundColor,
        elevation: 0,
        shadowOffset: { height: 0 },
        ...shadow,
      },
    });
  }, [navigation, isScrolled]);

  const onScroll = (event) => {
    if (navigation) {
      const isScrolled = event?.nativeEvent?.contentOffset?.y > 0;
      setIsScrolled(isScrolled);
    }
  };

  // Note that on Android keyboard is not overlapping content.
  const paddingBottom = Platform.select({
    android: 0,
    ios: keyboardHeight > 0 ? keyboardHeight : bottomMargin,
  });

  return children
    ? children({ backgroundColor, paddingBottom, onScroll })
    : null;
}

Screen.propTypes = {
  children: PropTypes.func,
  navigation: PropTypes.object,
};

Screen.defaultProps = {
  children: null,
  navigation: {},
};
