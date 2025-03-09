import LogoImage from "../../../assets/shardi.png";
import { Link } from "react-router-dom";
import ThemeSwitcher from "../../common/theme-switcher";
import ToggleSidebar from "../../common/toggle-sidebar";
import { Box} from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Header = () => {
  const theme = useTheme(); // To access the theme for responsive breakpoints

  return (
    <Box
      sx={{
        zIndex: 40,
        display: "flex",
        height: "64px",
        width: "100%",
        position: "sticky",
        top: 0,
        alignItems: "center",
        justifyContent: "space-between",
        paddingX: 2,
        paddingY: 1,
        boxShadow: theme.shadows[1],
        backgroundColor: theme.palette.secondary.main,
      }}
    >
      {/* Left side: Logo and Sidebar Toggle for small screens */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          [theme.breakpoints.up("sm")]: { gap: 3 }, 
          [theme.breakpoints.up("lg")]: { display: "none" }, 
        }}
      >
        <Link to={"/"}>
          <img
            src={LogoImage}
            alt="logo png"
            style={{
              width: "96px",
              borderRadius: "1.5rem",
            }}
          />
        </Link>
        <ToggleSidebar />
      </Box>

      {/* Right side: Theme Switcher */}
      <Box
        sx={{
          display: "flex",
          gap: 1,
          [theme.breakpoints.up("sm")]: { gap: 4 },
        }}
      >
        <ThemeSwitcher />
      </Box>
    </Box>
  );
};

export default Header;
