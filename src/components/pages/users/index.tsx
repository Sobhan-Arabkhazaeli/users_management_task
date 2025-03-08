import { useSelector } from "react-redux";
import { useFetchUserQuery } from "../../../core/services/api/GetAllUsers";
import TitleSection from "../../common/title-section";
import { TUserParamsSelector } from "../../../redux/slices/users-params";
import { IUsersParams } from "../../../core/types/common/users.params.interface";

const UsersWrapper = () => {
  const usersParams = useSelector<TUserParamsSelector, IUsersParams>(
    (state) => state.UsersParams
  );
  // API fetching and getting all users using RTK Query
  const { data, isSuccess } = useFetchUserQuery(usersParams);
  
  // API fetching and getting all users without params using RTK Query
  const { data: dataWithoutParams, isSuccess: AllIsSuccess } =
    useFetchUserQuery({ limit: undefined });

  return (
    <div className="w-full lg:ml-36 p-5">
      <TitleSection
        title="People"
        number={AllIsSuccess ? dataWithoutParams?.length : 0}
      />
    </div>
  );
};

export default UsersWrapper;
