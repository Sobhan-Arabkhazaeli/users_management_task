import SidebarTab from "../../../common/tab";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box } from "@mui/material";

const Menu = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <SidebarTab href="/" text="Users" Icon={PeopleOutlineIcon} />
      <SidebarTab href="/Favorites" text="Favorites" Icon={FavoriteIcon} />
    </Box>
  );
};

export default Menu;
