import FavoriteIcon from "@mui/icons-material/Favorite";
import { FC, useEffect, useState } from "react";
import { TUserDetails } from "../../../core/types/common/user.type";
import { useSelector } from "react-redux";
import { TFavoriteSelector } from "../../../redux/slices/favorites";
import { IconButton } from "@mui/material";

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
    const existItem = FavoriteList?.find((item) => item.id === id);
    setIsFavorite(!!existItem);
  }, [FavoriteList, id]);

  return (
    <IconButton
      onClick={() => toggleFavorite(id)}
      sx={{
        padding: "3px",
        transition: "transform 0.2s ease-in-out",
        "&:hover": {
          transform: "scale(1.1)",
        },
      }}
    >
      <FavoriteIcon color={isFavorite ? "error" : "disabled"} />
    </IconButton>
  );
};

export default FavoriteBtn;
