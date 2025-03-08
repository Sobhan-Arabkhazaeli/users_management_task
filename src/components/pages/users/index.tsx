import { useSelector } from "react-redux";
import { useFetchUserQuery } from "../../../core/services/api/GetAllUsers";
import TitleSection from "../../common/title-section";
import { TUserParamsSelector } from "../../../redux/slices/users-params";
import { IUsersParams } from "../../../core/types/common/users.params.interface";
import WrapperCards from "../../common/wrapper-cards";

const UsersWrapper = () => {
  const usersParams = useSelector<TUserParamsSelector, IUsersParams>(
    (state) => state.UsersParams
  );
  // API fetching and getting all users using RTK Query
  const { data, isSuccess , isLoading } = useFetchUserQuery(usersParams);

  // API fetching and getting all users without params using RTK Query
  const { data: dataWithoutParams, isSuccess: AllIsSuccess } =
    useFetchUserQuery({ limit: undefined });

  return (
    <div className="w-full flex flex-col gap-y-8 lg:ml-36 p-5">
      <TitleSection
        title="People"
        number={AllIsSuccess ? dataWithoutParams?.length : 0}
      />
      <WrapperCards usersData={data} isLoading={isLoading} isSuccess={isSuccess}/>
    </div>
  );
};

export default UsersWrapper;
