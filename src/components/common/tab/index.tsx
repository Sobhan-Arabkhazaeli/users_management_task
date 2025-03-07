import {  SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { FC } from "react";
import { Link, useLocation } from "react-router-dom";

const SidebarTab: FC<{
  href: string;
  text: string;
  Icon?: OverridableComponent<SvgIconTypeMap<object, "svg">> & {
    muiName: string;
  };
}> = ({ href, text, Icon }) => {
  const location = useLocation();
  const isActive = location.pathname === href;
  return (
    <Link
      to={href}
      className={`inline-block w-20 h-20 py-4  bg-gray-200 rounded-full text-sm text-center ${
        isActive && "!bg-Navy"
      }`}
    >
      {Icon && <Icon className={`${isActive ? "text-white" : "text-Navy"}`} />}
      <p className={`${isActive ? "text-white" : "text-Navy"}`}>{text}</p>
    </Link>
  );
};

export default SidebarTab;
