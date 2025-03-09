import { FC } from "react";
import { TUserDetails } from "../../../core/types/common/user.type";
import { Chip } from "@mui/material";

// Getting the IUsersParams property type individually with Indexed Access Types
type idType = TUserDetails["id"];
type isFavoriteType = TUserDetails["isFavorite"];
type nameType = TUserDetails["avatar"];
type createdAtType = TUserDetails["createdAt"];

interface IProps {
  id: idType;
  isFavorite: isFavoriteType;
  name: nameType;
  createdAt: createdAtType;
}

const CardBody: FC<IProps> = ({ name, createdAt }) => {
  // Getting a date using the split method
  const date = createdAt?.split("T");

  return (
    <div className="flex flex-col justify-between mx-auto text-Navy text-center mt-6">
      <h1 className="font-semibold text-lg">{name}</h1>
      <div className="w-full absolute bottom-6 left-0">
        <Chip label={`createdAt : ${date && date[0]}`} />
      </div>
    </div>
  );
};

export default CardBody;
