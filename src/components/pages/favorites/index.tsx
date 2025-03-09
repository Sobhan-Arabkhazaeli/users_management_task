import { Box } from "@mui/material";
import TitleSection from "../../common/title-section";
import { useSelector } from "react-redux";
import { TFavoriteSelector } from "../../../redux/slices/favorites";
import { TUserDetails } from "../../../core/types/common/user.type";
import { useMemo, useState } from "react";
import SectionTop_Content from "../../common/section-top-content";
import SearchInput from "../../common/section-top-content/SearchInput";
import PaginationSection from "../../common/pageination";
import WrapperCards from "../../common/wrapper-cards";

const FavoriteWrapper = () => {
  // Data stored in the favorites list based on user interest
  const FavoriteList = useSelector<TFavoriteSelector, TUserDetails[]>(
    (state) => state.persistedFavorite.favoritesList
  );

  const [searchValue, setSearchValue] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  const filteredItems = useMemo(() => {
    let filteredEmployees = [];
    filteredEmployees = FavoriteList.filter((user) =>
      user.name?.toLowerCase().includes(searchValue.toLowerCase())
    );
    return filteredEmployees;
  }, [FavoriteList, searchValue]);

  const items = useMemo(() => {
    const start = (page - 1) * 10;
    const end = start + 10;
    const totalPage = Math.ceil(filteredItems.length / 10);
    setTotalPages(totalPage);
    return filteredItems.slice(start, end);
  }, [page, filteredItems]);

  // Handle sending the number of pages to the API
  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

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
      <TitleSection title="Favorite" number={FavoriteList.length} />
      <SectionTop_Content>
        <SearchInput setSearch={setSearchValue} />
      </SectionTop_Content>
      <WrapperCards usersData={items} />
      <PaginationSection
        page={page}
        totalPages={totalPages}
        handlePageChange={handlePageChange}
      />
    </Box>
  );
};

export default FavoriteWrapper;
