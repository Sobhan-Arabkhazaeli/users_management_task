import FavoriteIcon from "@mui/icons-material/Favorite";
import { FC } from "react";
import { TUserDetails } from "../../../core/types/common/user.type";
type idType = TUserDetails["id"];

interface IProps {
  toggleFavorite: (id :idType) => void;
  id: idType;
}

const FavoriteBtn: FC<IProps> = ({ id ,toggleFavorite }) => {
  return (
    <button onClick={()=> toggleFavorite(id)}>
      <FavoriteIcon className="" />
    </button>
  );
};

export default FavoriteBtn;
