import { Link } from "react-router-dom";
import LogoImage from "../../../assets/shardi.png";
import Handler from "./components/handler";
import Menu from "./components/menu";


const Sidebar = () => {
  return (
    <Handler>
      <Link to={"/"} className="flex items-center gap-2 py-3  text-2xl">
        <img
          src={LogoImage}
          aria-label="logo png"
          className=" !w-36"
        />
      </Link>
      <Menu />
    </Handler>
  );
};

export default Sidebar;
