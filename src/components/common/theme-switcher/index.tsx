import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme, TThemeSelector } from "../../../redux/slices/theme";
import { useEffect } from "react";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import LightModeIcon from "@mui/icons-material/LightMode";

const ThemeSwitcher = () => {
  const theme = useSelector<TThemeSelector>(
    (state) => state.persistedTheme.theme
  );
  const dispatch = useDispatch();
  const iconProps = { height: "24px", fill: "#fff" };

  // Adding and removing the dark class from a document
  useEffect(() => {
    if (theme === true) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <Button
      onClick={() => dispatch(toggleTheme(!theme))}
      variant="contained"
      sx={{
        color: "white",
        fontWeight: "bold",
        borderRadius: "10px",
      }}
    >
      {theme ? (
        <BedtimeIcon sx={iconProps} />
      ) : (
        <LightModeIcon sx={iconProps} />
      )}
    </Button>
  );
};

export default ThemeSwitcher;
