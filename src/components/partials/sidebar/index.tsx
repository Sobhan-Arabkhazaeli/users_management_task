import { Link } from "react-router-dom";
import LogoImage from "../../../assets/shardi.png";
import Handler from "./components/handler";
import Menu from "./components/menu";

const Sidebar = () => {
  return (
    <Handler>
      <Link
        to={"/"}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          paddingTop: "12px",
          paddingBottom: "12px",
        }}
      >
        <img
          src={LogoImage}
          alt="logo png"
          style={{ width: "144px", borderRadius: "8px" }}
        />
      </Link>
      <Menu />
    </Handler>
  );
};

export default Sidebar;
