import { IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { FC } from "react";
import { IPropsSearch } from ".";



const SearchInput:FC<IPropsSearch> = ({setSearch}) => {
  return (
    <div>
      <Paper
        component="form"
        sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search Google Maps"
          inputProps={{ "aria-label": "search google maps" }}
          onChange={(e)=> setSearch(e.target.value)}
        />
        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
    </div>
  );
};

export default SearchInput;
