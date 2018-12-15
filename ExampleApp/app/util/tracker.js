import { Analytics, ScreenHit } from "expo-analytics";
import { trackerId } from "../constants/config";

export const tracker = (() => {
  const analytics = new Analytics(trackerId);
  return {
    trackScreenView: screen => {
      analytics.hit(new ScreenHit(screen));
    }
  };
})();
