import { StyleSheet, Dimensions } from "react-native";

export const dimensions = {
  fullHeight: Dimensions.get("window").height,
  fullWidth: Dimensions.get("window").width
};

export const colors = {
  dark: "#313235",
  lightgrey: "#F9F8F8",
  mauve: "#D49BEC",
  hotpink: "#FF98D4",
  rosepink: "#FFA0B0",
  sunset: "#FFB68A",
  marigold: "#FFD76F",
  lemon: "#F9F871"
};

export const padding = {
  sm: 10,
  md: 20,
  lg: 30,
  xl: 40
};

export const fonts = {
  sm: 12,
  md: 18,
  lg: 28,
  primary: "Helvetica"
};
