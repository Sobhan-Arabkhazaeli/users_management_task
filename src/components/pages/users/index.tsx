import { useDispatch, useSelector } from "react-redux";
import { useFetchUserQuery } from "../../../core/services/api/GetAllUsers";
import TitleSection from "../../common/title-section";
import { handleUsersSearch, TUserParamsSelector } from "../../../redux/slices/users-params";
import { IUsersParams } from "../../../core/types/common/users.params.interface";
import WrapperCards from "../../common/wrapper-cards";
import SectionTop_Content from "../../common/section-top-content";
import { useDeferredValue, useEffect, useState } from "react";

const UsersWrapper = () => {
  const usersParams = useSelector<TUserParamsSelector, IUsersParams>(
    (state) => state.UsersParams
  );
  const Dispatch = useDispatch()
  // API fetching and getting all users using RTK Query
  const { data, isSuccess, isLoading ,isError} = useFetchUserQuery(usersParams);

  // API fetching and getting all users without params using RTK Query
  const { data: dataWithoutParams, isSuccess: AllIsSuccess } =
    useFetchUserQuery({ limit: undefined });



  const [searchTerm, setSearchTerm] = useState<string>("");
  const deferredSearchTerm = useDeferredValue(searchTerm);

  useEffect(() => {
    // Perform search with deferredSearchTerm
    performSearch(deferredSearchTerm);
  }, [deferredSearchTerm]);

  const performSearch = (searchTerm: string) => {
    // Update state with search results
    console.log(searchTerm);
    Dispatch(handleUsersSearch(searchTerm))
  };

  return (
    <div className="w-full flex flex-col gap-y-8 lg:ml-36 p-5">
      <TitleSection
        title="People"
        number={AllIsSuccess ? dataWithoutParams?.length : 0}
      />
      <SectionTop_Content setSearch={setSearchTerm} />
      <WrapperCards
        usersData={data}
        isLoading={isLoading}
        isSuccess={isSuccess}
        isError={isError}
      />
    </div>
  );
};

export default UsersWrapper;
