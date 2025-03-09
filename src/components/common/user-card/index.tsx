import React, { FC } from "react";
import { TUserDetails } from "../../../core/types/common/user.type";
import CardBody from "./CardBody";
import CardHeader from "./CardHeader";

interface IProps {
  item: TUserDetails;
  toggleFavorite: () => void;
}

const UserCard: FC<IProps> = ({ item, toggleFavorite }) => {
  // Destructoring
  const { id, avatar, isFavorite, name, createdAt } = item;
  return (
    <div className="w-56 h-64 p-6 relative bg-gradient-to-r from-menu to-bgCard rounded-xl hover:to-whiteGrayLish hover:from-whiteGrayLish shadow-sm hover:shadow-xl hover:scale-105 duration-300 cursor-pointer">
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
    </div>
  );
};

export default React.memo(UserCard);
