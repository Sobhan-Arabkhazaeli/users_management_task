import React, { FC } from "react";
import { TUserDetails } from "../../../core/types/common/user.type";
import CardBody from "./CardBody";
import CardHeader from "./CardHeader";
import { Box } from "@mui/material";

interface IProps {
  item: TUserDetails;
  toggleFavorite: () => void;
}

const UserCard: FC<IProps> = ({ item, toggleFavorite }) => {
  // Destructuring the user properties
  const { id, avatar, isFavorite, name, createdAt } = item;
  return (
    <Box
      sx={(theme) => ({
        width: 224, 
        height: 256,
        p: 3, 
        position: "relative",
        background: `linear-gradient(to right, ${theme.palette.menu.main}, ${theme.palette.bgCard.main})`,
        borderRadius: "0.75rem", 
        boxShadow: theme.shadows[1], 
        cursor: "pointer",
        transition: "all 300ms ease", 
        "&:hover": {
          background: `linear-gradient(to right, ${theme.palette.whiteGraylish.main}, ${theme.palette.whiteGraylish.main})`,
          boxShadow: theme.shadows[6], 
          transform: "scale(1.05)", 
        },
      })}
    >
      <CardHeader
        id={id}
        avatar={avatar}
        isFavorite={isFavorite}
        toggleFavorite={toggleFavorite}
      />
      <CardBody
        id={id}
        name={name}
        createdAt={createdAt}
        isFavorite={isFavorite}
      />
    </Box>
  );
};

export default React.memo(UserCard);
