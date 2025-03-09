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
  // States
  const [searchValue, setSearchValue] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  // This is a function to filter users using search filters. [1]
  const filteredItems = useMemo(() => {
    let filteredEmployees = [];
    filteredEmployees = FavoriteList.filter((user) =>
      user.name?.toLowerCase().includes(searchValue.toLowerCase())
    );
    return filteredEmployees;
  }, [FavoriteList, searchValue]);

  // This function is used to determine the start and end for each page of the page initiation. [2]
  const items = useMemo(() => {
    const start = (page - 1) * 10;
    const end = start + 10;
    // Getting the total number of pages using the math.ceil function
    const totalPage = Math.ceil(filteredItems.length / 10);
    setTotalPages(totalPage);
    // Slicing items from start to end
    return filteredItems.slice(start, end);
  }, [page, filteredItems]);

  // Handle sending the number of pages to the API
  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    console.log(event)
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
        marginLeft : "150px",
        '@media (max-width:1200px)': {  
          marginLeft: '0 !important',  
        },  
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
