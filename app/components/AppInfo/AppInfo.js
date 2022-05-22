import { DevInfo } from "@ckbab/react-native-components";
import { useLocalization } from "@ckbab/react-native-components/hooks";
import React, { useLayoutEffect } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Screen } from "../shared";

export default function AppInfo({ navigation }) {
  const localization = useLocalization();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: localization.translate("appInfo.title"),
    });
  }, [localization, navigation]);

  return (
    <Screen navigation={navigation}>
      {({ backgroundColor, onScroll, paddingBottom }) => (
        <ScrollView
          style={{ backgroundColor }}
          contentContainerStyle={[styles.content, { paddingBottom }]}
          onScroll={onScroll}
        >
          <DevInfo />
        </ScrollView>
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: 24,
  },
});
