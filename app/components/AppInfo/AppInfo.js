import { DevInfo, Screen } from "@ckbab/react-native-components";
import { useLocalization } from "@ckbab/react-native-components/hooks";
import React, { useLayoutEffect } from "react";
import { StyleSheet } from "react-native";

export default function AppInfo({ navigation }) {
  const localization = useLocalization();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: localization.translate("appInfo.title"),
    });
  }, [localization, navigation]);

  return (
    <Screen navigation={navigation} contentContainerStyle={styles.content}>
      <DevInfo />
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: 24,
  },
});
