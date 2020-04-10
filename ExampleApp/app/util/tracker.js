import { Analytics, ScreenHit, Event } from "expo-analytics";
import { trackingId } from "../constants/config";

const analytics = new Analytics(trackingId);

export const trackScreenView = (screen) => {
  if (!__DEV__) {
    analytics.hit(new ScreenHit(screen));
  }
};

export const trackEvent = (category, action, label, value) => {
  if (!__DEV__) {
    analytics.hit(new Event(category, action, label, value));
  }
};
