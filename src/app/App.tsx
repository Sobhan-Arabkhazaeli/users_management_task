import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { AppRouter } from "../app-router";
// ** Third Party Components
import { RouterProvider as ReactRouterProvider } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  darkTheme,
  lightTheme,
} from "../config/matrialTheme_config/matrialTheme.config";
import { TThemeSelector } from "../redux/slices/menu";
import ToastAlert from "../components/common/toast-alert/ToastAlert";

function App() {
  const themeMode = useSelector<TThemeSelector>(
    (state) => state.persistedTheme?.theme
  );
  const theme = themeMode ? darkTheme : lightTheme;
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          fontFamily: "Neometric medium",
          fontWeight: "medium",
          bgcolor: "primary.main",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <ReactRouterProvider router={AppRouter} />
        <ToastAlert/>
      </Box>
    </ThemeProvider>
  );
}

export default App;
