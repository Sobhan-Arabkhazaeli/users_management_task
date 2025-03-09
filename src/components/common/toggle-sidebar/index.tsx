import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar, TThemeSelector } from "../../../redux/slices/menu";
import { IconButton } from "@mui/material";

const ToggleSidebar = () => {
  const dispatch = useDispatch();
  const sidebar = useSelector<TThemeSelector>(
    (state) => state.sideBarMenu.sideBar
  );

  return (
    <IconButton
      onClick={() => dispatch(toggleSidebar(!sidebar))}
      sx={{
        p: "6px",
        height: "36px",
        borderRadius: "50%",
        backgroundColor: "rgba(226,232,240,0.45)",
        "&:hover": {
          backgroundColor: "rgba(226,232,240,0.6)",
        },
      }}
    >
      <MenuIcon sx={{ fontSize: 20 }} />
    </IconButton>
  );
};

export default ToggleSidebar;
