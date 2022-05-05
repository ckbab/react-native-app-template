import { FlatButton, Screen, Text } from "@ckbab/react-native-components";
import { useLocalization } from "@ckbab/react-native-components/hooks";
import React, { useLayoutEffect } from "react";
import { StyleSheet } from "react-native";
import { useSelector } from "react-redux";

export default function Home({ navigation }) {
  const localization = useLocalization();
  const language = useSelector((state) => state?.settings?.language);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: localization.translate("home.title"),
    });
  }, [localization, navigation]);

  return (
    <Screen navigation={navigation} contentContainerStyle={styles.content}>
      <FlatButton
        label={localization.translate("home.button")}
        onPress={() => navigation.navigate("AppInfo")}
      />
      <Text>{language}</Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: 24,
  },
});
