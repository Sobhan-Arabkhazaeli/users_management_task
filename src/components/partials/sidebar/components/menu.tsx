import SidebarTab from "../../../common/tab";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Menu = () => {
  return (
    <div className="flex flex-col gap-2">
      <SidebarTab href="/" text="Users" Icon={PeopleOutlineIcon} />
      <SidebarTab href="/Favorites" text="Favorites" Icon={FavoriteIcon} />
    </div>
  );
};

export default Menu;
