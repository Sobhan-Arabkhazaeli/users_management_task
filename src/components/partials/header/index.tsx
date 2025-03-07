import LogoImage from "../../../assets/shardi.png";

import { Link } from "react-router-dom";
import ThemeSwitcher from "../../common/theme-switcher";
import ToggleSidebar from "../../common/toggle-sidebar";

const Header = () => {
  return (
    <header className="z-40 flex h-16 w-full top-0 items-center justify-between px-5 py-2.5 shadow-sm bg-Navy">
      <div className="flex gap-1 items-center sm:gap-3 lg:hidden">
        <Link to={"/"}>
          <img
            src={LogoImage}
            aria-label="logo png"
            className=" !w-24  rounded-3xl"
          />
        </Link>
        <ToggleSidebar/>
      </div>
      <div className="flex gap-1 sm:gap-4">
        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default Header;
