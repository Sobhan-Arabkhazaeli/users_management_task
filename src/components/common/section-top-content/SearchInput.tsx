import { IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { FC } from "react";

interface IProps {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const SearchInput: FC<IProps> = ({ setSearch }) => {
  return (
    <div>
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: 400,
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search By name..."
          inputProps={{ "aria-label": "Search By name..." }}
          onChange={(e) => setSearch(e.target.value)}
        />
        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
    </div>
  );
};

export default SearchInput;
