import moment from "moment-timezone";
import "moment/locale/en-gb";
import "moment/locale/sv";
import { getLanguage, localize } from "./localization";
import { uncapitalize } from "./string";

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
  if (!date) {
    return localize("util.date.unknown");
  }
  return moment.utc(date).local().locale(getLanguage()).fromNow();
};

// e.g. Today 08:30
export const calendarTime = (date) => {
  if (!date) {
    return localize("util.date.unknown");
  }
  return moment.utc(date).local().locale(getLanguage()).calendar();
};

// e.g. Thursday 5th December (depending in format)
export const formatDate = (date, format, parseFormat) => {
  if (!date) {
    return localize("util.date.unknown");
  }
  return moment
    .utc(date, parseFormat)
    .local()
    .locale(getLanguage())
    .format(format);
};

// Returns smart date depending on interval
export const smartDate = (date, options = {}) => {
  if (!date) {
    return localize("util.date.unknown");
  }
  const a = moment.utc(date).startOf("day");
  const b = moment().startOf("day");
  const diff = a.diff(b, "days");
  if (diff >= -1 && diff <= 1) {
    return uncapitalize(calendarTime(date));
  } else if (diff >= -1 && diff <= 6) {
    return formatDate(date, "dddd LT");
  } else {
    const time = options.showTime ? formatDate(date, "LT") : null;
    const formatedDate = formatDate(date, "dddd Do MMMM");
    return time ? `${formatedDate} ${time}` : formatedDate;
  }
};

export const getDate = (date, parseFormat) => {
  return moment.utc(date, parseFormat);
};
