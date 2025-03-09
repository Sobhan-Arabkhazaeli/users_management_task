import { FC } from "react";
import { TUserDetails } from "../../../core/types/common/user.type";
import UserCard_Skeleton from "../skeleton/UserCard_Skeleton";
import UserCard from "../user-card";

interface IProp {
  usersData: TUserDetails[] | undefined;
  isLoading?: boolean;
  isSuccess?: boolean;
  isError?: boolean;
}

const WrapperCards: FC<IProp> = ({ usersData, isLoading, isError }) => {
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
          <UserCard key={item.id} {...item} />
        ))}
      </div>
    );
  } else {
    return <h1>User not found</h1>;
  }
};

export default WrapperCards;
