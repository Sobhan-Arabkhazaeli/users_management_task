import { useFetchUserQuery } from "../../../core/services/api/GetAllUsers";
import TitleSection from "../../common/title-section";

const UsersWrapper = () => {
  // API fetching and getting all users using RTK Query
  const { data , isSuccess } = useFetchUserQuery();

  return <div className="w-full lg:ml-36 p-5">
    <TitleSection title="People" number={isSuccess ? data?.length : 0 }/>
  </div>;
};

export default UsersWrapper;