import * as Notifications from "expo-notifications";

export const getPushToken = async () => {
  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;
  if (existingStatus !== "granted") {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }
  if (finalStatus !== "granted") {
    return;
  }
  const token = await Notifications.getExpoPushTokenAsync();
  return token?.data;
};
