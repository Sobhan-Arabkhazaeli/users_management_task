import { useDispatch, useSelector } from "react-redux";
import { useFetchUserQuery } from "../../../core/services/api/GetAllUsers";
import TitleSection from "../../common/title-section";
import {
  handleUsersSearch,
  TUserParamsSelector,
} from "../../../redux/slices/users-params";
import { IUsersParams } from "../../../core/types/common/users.params.interface";
import WrapperCards from "../../common/wrapper-cards";
import SectionTop_Content from "../../common/section-top-content";
import { useDeferredValue, useEffect,useState } from "react";
import PaginationSection from "../../common/pageination";
import SearchInput from "../../common/section-top-content/SearchInput";
import SortSelect from "../../common/section-top-content/SortSelect";
import RowsOfPageSelect from "../../common/section-top-content/RowsOfPageSelect";
import { Box } from "@mui/material";
const UsersWrapper = () => {
  const usersParams = useSelector<TUserParamsSelector, IUsersParams>(
    (state) => state.UsersParams
  );

  const [totalPages, setTotalPages] = useState<number>(1);
  const Dispatch = useDispatch();

  // API fetching and getting all users using RTK Query
  const { data, isSuccess, isLoading, isError } =
    useFetchUserQuery(usersParams);

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
    Dispatch(handleUsersSearch(searchTerm));
  };

  // Calculate the number of pages
  useEffect(() => {
    if (dataWithoutParams && usersParams.limit) {
      setTotalPages(
        Math.ceil(dataWithoutParams?.length / Number(usersParams?.limit))
      );
    }
  }, [dataWithoutParams?.length, usersParams.limit]);

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        rowGap: 4,
        p: 2.5,
      }}
    >
      <TitleSection
        title="People"
        number={AllIsSuccess ? dataWithoutParams?.length : 0}
      />
      <SectionTop_Content>
        <SearchInput setSearch={setSearchTerm} />
        <Box
          sx={{
            display: "flex",
            gap: 1,
            mx: { xs: "auto", md: 0 },
            mt: { xs: 2, md: 0 },
          }}
        >
          <SortSelect />
          <RowsOfPageSelect />
        </Box>
      </SectionTop_Content>
      <WrapperCards
        usersData={data}
        isLoading={isLoading}
        isSuccess={isSuccess}
        isError={isError}
      />
      <PaginationSection page={usersParams.page} totalPages={totalPages} />
    </Box>
  );
};

export default UsersWrapper;
