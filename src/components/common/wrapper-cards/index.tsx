import React, { FC, useMemo } from "react";
import { TUserDetails } from "../../../core/types/common/user.type";
import UserCard_Skeleton from "../skeleton/UserCard_Skeleton";
import UserCard from "../user-card";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorites,
  removeFromFavorites,
  TFavoriteSelector,
} from "../../../redux/slices/favorites";
import { Box, Typography } from "@mui/material";

interface IProp {
  usersData: TUserDetails[] | undefined;
  isLoading?: boolean;
  isSuccess?: boolean;
  isError?: boolean;
}
type idType = TUserDetails["id"];

const WrapperCards: FC<IProp> = ({ usersData, isLoading, isError }) => {
  const FavoriteList = useSelector<TFavoriteSelector, TUserDetails[]>(
    (state) => state.persistedFavorite.favoritesList
  );
  const Dispatch = useDispatch();

  // Handle toggling a user in/out of favorites
  const toggleFavoriteItem = useMemo(() => {
    return (id: idType) => {
      const item = usersData?.find((item) => item.id === id);
      const existItem = FavoriteList?.find((item) => item.id === id);
      if (item) {
        if (existItem) {
          Dispatch(removeFromFavorites(id));
        } else {
          Dispatch(addToFavorites(item));
        }
      }
    };
  }, [FavoriteList, usersData]);

  const containerStyles = {
    display: "flex",
    gap: 2.5,
    flexWrap: "wrap",
    justifyContent: "space-around",
  };

  if (isLoading || usersData === undefined) {
    return (
      <Box sx={containerStyles}>
        {[...Array(10)].map((_, index) => (
          <UserCard_Skeleton key={index} />
        ))}
      </Box>
    );
  } else if (isError || usersData.length === 0) {
    return <Typography component="h1">User not found</Typography>;
  } else if (usersData !== undefined && usersData.length !== 0) {
    return (
      <Box sx={containerStyles}>
        {usersData.map((item) => (
          <UserCard
            key={item.id}
            toggleFavorite={toggleFavoriteItem}
            item={item}
          />
        ))}
      </Box>
    );
  } else {
    return <Typography component="h1">User not found</Typography>;
  }
};

export default React.memo(WrapperCards);
