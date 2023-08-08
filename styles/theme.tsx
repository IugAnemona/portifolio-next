export const theme = {
  pink: "#EB7A7A",
  pinkTransparent: "rgba(235, 122, 122, 0.3)",
  pinkShadow: "#D67070",
  black: "#0A0A0A",
  blackMain: "#161313",
  grey: "#262626",
  greyShadow: "#1E1E1E",
  white: "#FFF",
};

const size = {
  mobile: "530px",
  tablet: "768px",
  laptop: "1024px",
  desktop: "1440px",
};

export const device = {
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  desktop: `(min-width: ${size.desktop})`,
};
