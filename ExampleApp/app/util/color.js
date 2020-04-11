export const changeOpacity = (color, alpha) => {
  if (!color) {
    return null;
  }
  const { r, g, b } = hexToRgb(color);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export const changeColor = (color, backgroundColor, alpha) => {
  if (!color || !backgroundColor) {
    return null;
  }
  const { r: r1, g: g1, b: b1 } = hexToRgb(color);
  const { r: r2, g: g2, b: b2 } = hexToRgb(backgroundColor);
  const r = r1 * alpha + r2 * (1 - alpha);
  const g = g1 * alpha + g2 * (1 - alpha);
  const b = b1 * alpha + b2 * (1 - alpha);
  const hex = rgbToHex(r, g, b);
  return hex;
};

export const getContrastColor = (color, dark = "#000", light = "#fff") => {
  if (!color) {
    return null;
  }
  const { r, g, b } = hexToRgb(color);
  if (0.2126 * r + 0.7152 * g + 0.0722 * b > 179) {
    return dark;
  } else {
    return light;
  }
};

const hexToRgb = (hex) => {
  const color = formatColor(hex);
  if (color) {
    const result = /^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  }
};

const rgbToHex = (r, g, b) => {
  const componentToHex = (c) => {
    const hex = parseInt(c).toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  };
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
};

const formatColor = (hex) => {
  hex = hex.replace(/^#/, "");
  if (hex.length === 3) {
    return hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  } else if (hex.length === 6) {
    return hex;
  }
  return null;
};
