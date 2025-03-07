import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar, TThemeSelector } from "../../../redux/slices/menu";

const ToggleSidebar = () => {
  const dispatch = useDispatch();
  const sidebar = useSelector<TThemeSelector>(
    (state) => state.sideBarMenu.sideBar
  );
  return (
    <button
      onClick={() => dispatch(toggleSidebar(!sidebar))}
      className="p-1.5 h-9 rounded-full bg-slate-200/45"
    >
      <MenuIcon className="size-5" />
    </button>
  );
};

export default ToggleSidebar;
