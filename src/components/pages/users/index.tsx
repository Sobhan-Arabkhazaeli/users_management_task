import { useFetchUserQuery } from "../../../core/services/api/GetAllUsers";

const UsersWrapper = () => {
  // API fetching and getting all users using RTK Query
  const { data } = useFetchUserQuery();

  return <div className="w-full lg:ml-36 ">
    
  </div>;
};

export default UsersWrapper;
