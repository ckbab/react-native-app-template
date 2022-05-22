import { Flag } from "@ckbab/react-native-components";
import { useLocalization } from "@ckbab/react-native-components/hooks";
import React, { useLayoutEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../../reducers/settings";
import { Button, FlatButton, Screen, Text, TextInput } from "../shared";

export default function Home({ navigation }) {
  const dispatch = useDispatch();
  const localization = useLocalization();
  const language = useSelector((state) => state?.settings?.language);
  const [name, setName] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: null,
      headerTitle: localization.translate("home.title"),
    });
  }, [localization, navigation]);

  const onChangeLanguage = (language) => dispatch(setLanguage(language));

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
          <Text style={styles.currentLanguage}>
            {localization.translate("home.currentLanguage", language)}
          </Text>
          <View style={styles.languages}>
            <Button style={styles.flag} onPress={() => onChangeLanguage("sv")}>
              <Flag code="SE" size={32} />
            </Button>
            <Button style={styles.flag} onPress={() => onChangeLanguage("en")}>
              <Flag code="GB" size={32} />
            </Button>
          </View>
          <TextInput value={name} onChangeText={setName} />
        </ScrollView>
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: 24,
  },
  currentLanguage: {
    marginTop: 32,
  },
  languages: {
    marginVertical: 24,
    marginHorizontal: -8,
    flexDirection: "row",
  },
  flag: {
    margin: 8,
  },
});
