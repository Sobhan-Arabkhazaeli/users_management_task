// src/theme.js
import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#ffff",
    },
    secondary: {
      main: "#150adf",
    },
    zincLight: {
      main: "#888",
    },
    purple: {
      main: "#8776eb",
    },
    menu: {
      main: "#f3f1f1",
    },
    bgCard: {
      main: "#dadada",
    },
    whiteGraylish: {
      main: "#fcfcfc",
    },
  },
  typography: {
    fontFamily: "Neometric medium",
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#222",
    },
    secondary: {
      main: "#8a879b",
    },
    zincLight: {
      main: "#999",
    },
    purple: {
      main: "#8776eb",
    },
    menu: {
      main: "#333",
    },
    bgCard: {
      main: "#222",
    },
    whiteGraylish: {
      main: "#444",
    },
  },
  typography: {
    fontFamily: "Neometric medium", // Neometric_500
  },
});

export { lightTheme, darkTheme };
