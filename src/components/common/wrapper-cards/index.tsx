import { FC } from "react";
import { TUserDetails } from "../../../core/types/common/user.type";
import UserCard from "../user-card";

interface IProp {
  usersData: TUserDetails[] | undefined;
  isLoading?: boolean;
  isSuccess?: boolean;
}

const WrapperCards: FC<IProp> = ({ usersData }) => {
  return (
    <div className="flex gap-5 flex-wrap justify-around">
      {usersData !== undefined ? (
        usersData?.map((item) => <UserCard key={item.id} {...item} />)
      ) : (
        <h1>User not found</h1>
      )}
    </div>
  );
};

export default WrapperCards;
