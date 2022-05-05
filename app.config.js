import { setIn, update, updateIn } from "timm";

const updateName = (name) => {
  if (process?.env?.APP_ENV === "development") {
    return `${name} (dev)`;
  } else if (process.env.APP_ENV === "preview") {
    return `${name} (beta)`;
  }
  return name;
};

const updateIdentifier = (identifier) => {
  if (process?.env?.APP_ENV === "development") {
    return `${identifier}.dev`;
  } else if (process.env.APP_ENV === "preview") {
    return `${identifier}.beta`;
  }
  // Need to use ".app" but when APP_ENV is set for builds but also when APP_ENV
  // is not set when doing a submit.
  return `${identifier}.app`;
};

export default ({ config }) => {
  // Update name and identifier if development or preview app.
  config = update(config, "name", updateName);
  config = updateIn(config, ["android", "package"], updateIdentifier);
  config = updateIn(config, ["ios", "bundleIdentifier"], updateIdentifier);

  // Remove Google Services if development or preview app (since package doesn't match).
  if (process?.env?.APP_ENV !== "production") {
    config = setIn(config, ["android", "googleServicesFile"], "");
  }

  return config;
};
