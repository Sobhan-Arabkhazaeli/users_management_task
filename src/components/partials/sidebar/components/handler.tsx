import { useDispatch, useSelector } from "react-redux";
import TFCChildren from "../../../../core/types/props/fc-children.type";
import { toggleSidebar, TThemeSelector } from "../../../../redux/slices/menu";

const Handler: TFCChildren = ({ children }) => {
  const dispatch = useDispatch();
  const sidebar = useSelector<TThemeSelector>(
    (state) => state.sideBarMenu.sideBar
  );
  return (
    <div
      className={`${sidebar ? "w-full h-screen fixed" : "!w-0"}  z-50   bg-black/100 lg:relative lg:w-auto`}
      onClick={() => dispatch(toggleSidebar(false))}>
      <div
        onClick={() => dispatch(toggleSidebar(true))}
        className={`${sidebar ? "w-48 px-4 top-0  fixed bg-menu" : "w-0 !p-0"} flex  flex-col items-center overflow-hidden transition-all  lg:w-36 lg:!px-4 ltr:left-0 rtl:right-0`}>
        {children}
      </div>
    </div>
  );
};

export default Handler;
