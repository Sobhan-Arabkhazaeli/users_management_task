import FavoriteIcon from "@mui/icons-material/Favorite";
import { FC, useEffect, useState } from "react";
import { TUserDetails } from "../../../core/types/common/user.type";
import { useSelector } from "react-redux";
import { TFavoriteSelector } from "../../../redux/slices/favorites";
type idType = TUserDetails["id"];

interface IProps {
  toggleFavorite: (id: idType) => void;
  id: idType;
}

const FavoriteBtn: FC<IProps> = ({ id, toggleFavorite }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const FavoriteList = useSelector<TFavoriteSelector, TUserDetails[]>(
    (state) => state.persistedFavorite.favoritesList
  );

  // Check interest status for this user
  useEffect(() => {
    const existItem = FavoriteList?.find((item) => item.id == id);
    if (existItem) setIsFavorite(true);
    else setIsFavorite(false);
  }, [FavoriteList]);

  return (
    <button onClick={() => toggleFavorite(id)}>
      <FavoriteIcon color={isFavorite ? "error" : "disabled"} />
    </button>
  );
};

export default FavoriteBtn;
