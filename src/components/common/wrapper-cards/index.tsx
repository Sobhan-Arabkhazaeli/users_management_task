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

  // Handle the function of removing or adding a user to the user's favorites list
  const toggleFavoriteItem = useMemo(() => {
    return (id: idType) => {
      const item = usersData?.find((item) => item.id == id);
      const existItem = FavoriteList?.find((item) => item.id == id);
      if (item) {
        if (existItem) {
          Dispatch(removeFromFavorites(id));
        } else Dispatch(addToFavorites(item));
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [FavoriteList, usersData]);

  // Rendering state before loading and when isLoading is executed
  if (isLoading || usersData === undefined) {
    return (
      <div className="flex gap-5 flex-wrap justify-around">
        {[...Array(10)].map((_, index) => (
          <UserCard_Skeleton key={index} />
        ))}
      </div>
    );
  } else if (isError) {
    // Rendering state when data is undefined or there are 0 items
    return <h1>User not found</h1>;
  } else if (usersData !== undefined && usersData?.length !== 0) {
    return (
      <div className="flex gap-5 flex-wrap justify-around">
        {usersData?.map((item) => (
          <UserCard
            key={item.id}
            toggleFavorite={toggleFavoriteItem}
            item={item}
          />
        ))}
      </div>
    );
  } else {
    return <h1>User not found</h1>;
  }
};

export default React.memo(WrapperCards);
