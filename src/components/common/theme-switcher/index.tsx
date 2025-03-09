// src/components/common/theme-switcher.jsx
import { useDispatch, useSelector } from "react-redux";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import LightModeIcon from "@mui/icons-material/LightMode";
import { IconButton } from "@mui/material";
import { toggleTheme, TThemeSelector } from "../../../redux/slices/theme";

const ThemeSwitcher = () => {
  const theme = useSelector<TThemeSelector>(
    (state) => state.persistedTheme?.theme
  );
  const dispatch = useDispatch();

  return (
    <IconButton
      onClick={() => dispatch(toggleTheme(!theme))}
      aria-label="toggle theme"
      color="inherit"
    >
      {theme ? <BedtimeIcon /> : <LightModeIcon color="primary" />}
    </IconButton>
  );
};

export default ThemeSwitcher;
