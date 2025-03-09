import { FC } from "react";
import { TUserDetails } from "../../../core/types/common/user.type";
import FavoriteBtn from "../favorite-button";
import ImageFallBack from "../image-fallback";
import darkFallback from "../../../assets/user-circle-icon.png";
import { Box } from "@mui/material";

// Indexed Access Types from TUserDetails
type idType = TUserDetails["id"];
type avatarType = TUserDetails["avatar"];
type isFavoriteType = TUserDetails["isFavorite"];

interface IProps {
  id: idType;
  avatar: avatarType;
  isFavorite: isFavoriteType;
  toggleFavorite: (id: idType) => void;
}

const CardHeader: FC<IProps> = ({ id, toggleFavorite, avatar }) => {
  return (
    <Box>
      {/* Favorite Button positioned at top-left */}
      <Box
        sx={(theme) => ({
          position: "absolute",
          left: "8px",
          top: "8px",
          backgroundColor: theme.palette.primary.main,
          padding: "4px",
          borderRadius: "0.375rem",
        })}
      >
        <FavoriteBtn id={id} toggleFavorite={toggleFavorite} />
      </Box>

      {/* Centered Image */}
      <Box
        sx={{
          mx: "auto",
          width: "fit-content",
        }}
      >
        <ImageFallBack
          src={avatar}
          alt="user img"
          fallback={darkFallback}
          sx={{
            height: 80,
            width: 80,
            borderRadius: "50%",
            display: "inline-block",
          }}
        />
      </Box>
    </Box>
  );
};

export default CardHeader;
