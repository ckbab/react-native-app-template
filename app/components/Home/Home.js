import { useLocalization } from "@ckbab/react-native-components/hooks";
import React, { useLayoutEffect } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { FlatButton, Screen, Text } from "../shared";

export default function Home({ navigation }) {
  const localization = useLocalization();
  const language = useSelector((state) => state?.settings?.language);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: localization.translate("home.title"),
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
          <FlatButton
            label={localization.translate("home.button")}
            onPress={() => navigation.navigate("AppInfo")}
          />
          <Text>{language}</Text>
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
