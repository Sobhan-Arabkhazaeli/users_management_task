import { FC } from "react";
import { TUserDetails } from "../../../core/types/common/user.type";
import FavoriteBtn from "../favorite-button";
import ImageFallBack from "../image-fallback";
import fallback from "../../../assets/user.jpg";

// Getting the IUsersParams property type individually with Indexed Access Types
type idType = TUserDetails["id"];
type avatarType = TUserDetails["avatar"];
type isFavoriteType = TUserDetails["isFavorite"];

interface IProps {
  id: idType;
  avatar: avatarType;
  isFavorite: isFavoriteType;
  toggleFavorite : ()=> void;
}

const CardHeader: FC<IProps> = ({ id, toggleFavorite}) => {
  



  return (
    <div>
      <div className="absolute left-2 top-2 bg-main p-1 rounded-md">
        <FavoriteBtn id={id} toggleFavorite={toggleFavorite}/>
      </div>
      <div className="mx-auto w-fit">
        <ImageFallBack
          src={fallback}
          alt={"user img"}
          fallback={fallback}
          ClassName="h-20 w-20 rounded-full inline-block"
        />
      </div>
    </div>
  );
};

export default CardHeader;
