import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import { Box, Typography } from "@mui/material";

interface SidebarTabProps {
  href: string;
  text: string;
  Icon?: OverridableComponent<SvgIconTypeMap<object, "svg">> & {
    muiName: string;
  };
}

const SidebarTab: FC<SidebarTabProps> = ({ href, text, Icon }) => {
  const location = useLocation();
  const isActive = location.pathname === href;

  return (
    <Box
      component={Link}
      to={href}
      sx={(theme) => ({
        display: "inline-block",
        width: 80,
        height: 80,
        py: 2,
        backgroundColor: isActive
          ? theme.palette.secondary.main
          : theme.palette.grey[200],
        borderRadius: "50%",
        textAlign: "center",
        textDecoration: "none",
        color: isActive
          ? theme.palette.common.white
          : theme.palette.secondary.main,
      })}
    >
      {Icon && (
        <Icon
          sx={(theme) => ({
            fontSize: "1.5rem",
            color: isActive
              ? theme.palette.common.white
              : theme.palette.secondary.main,
          })}
        />
      )}
      <Typography
        variant="caption"
        sx={(theme) => ({
          color: isActive
            ? theme.palette.common.white
            : theme.palette.secondary.main,
          display: "block",
          mt: 1,
        })}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default SidebarTab;
