import moment from "moment-timezone";
import "moment/locale/sv";

moment.locale("sv");
moment.tz.setDefault("Europe/Stockholm");

moment.updateLocale("sv", {
  ordinal: (number) => {
    const char = [1, 2, 21, 22, 31].includes(number) ? "a" : "e";
    return number + ":" + char;
  },
});

// e.g. two minutes ago
export const relativeTime = (date) => {
  return moment(date).fromNow();
};

// e.g. Today 08:30
export const calendarTime = (date) => {
  return moment(date).calendar();
};

// e.g. Thursday 5th December (depending in format)
export const formatDate = (date, format) => {
  return moment(date).format(format);
};

// Returns either relative or calendar time depending in interval (hours)
export const smartDate = (date, hours = 2) => {
  const a = moment();
  const b = moment(date);
  const diff = a.diff(b, "minutes");
  if (diff <= hours * 60) {
    return relativeTime(date);
  } else {
    return calendarTime(date);
  }
};

export const getNow = () => {
  return moment();
};
