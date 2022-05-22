import { useScreen } from "@ckbab/react-native-components/hooks";
import { shadow2 } from "@ckbab/react-native-components/styles";
import PropTypes from "prop-types";
import React, { useLayoutEffect, useState } from "react";
import { backgroundColor, primaryColor } from "../../constants/colors";
import ToolbarButton from "./ToolbarButton";

export default function Screen({ children, navigation }) {
  const { bottomMargin } = useScreen();
  const [isScrolled, setIsScrolled] = useState(false);

  useLayoutEffect(() => {
    const shadow = isScrolled ? shadow2 : null;
    navigation.setOptions({
      headerLeft: () => (
        <ToolbarButton icon="back" onPress={navigation.goBack} />
      ),
      headerTitleStyle: {
        fontFamily: "Roboto-Bold",
        fontSize: 20,
        color: primaryColor,
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

  return children
    ? children({ backgroundColor, paddingBottom: bottomMargin, onScroll })
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
